import { useId, useRef, useState, type FormEvent } from "react";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { locations } from "@/content/locations";
import { publishedTreatments } from "@/content/treatments";
import { appointmentLink, type AppointmentRequest } from "@/lib/whatsapp";

type Field = "name" | "mobile" | "branch" | "concern" | "date" | "time" | "consent";
type Errors = Partial<Record<Field, string>>;

const inputClass =
  "min-h-11 w-full rounded-xl border border-input bg-card px-4 text-base text-ink placeholder:text-muted-foreground focus-visible:border-primary";

/**
 * Accepts 10-digit Indian mobile numbers, with or without a +91 / 91 / 0
 * prefix and with spaces or hyphens. Returns the number in +91 XXXXXXXXXX
 * form, or null when it is not a valid Indian mobile number.
 */
export function normaliseIndianMobile(input: string): string | null {
  const digits = input.replace(/[^0-9]/g, "");
  let local = digits;
  if (local.length === 12 && local.startsWith("91")) local = local.slice(2);
  else if (local.length === 11 && local.startsWith("0")) local = local.slice(1);
  if (!/^[6-9][0-9]{9}$/.test(local)) return null;
  return `+91 ${local}`;
}

function validate(values: Record<string, string>, consent: boolean): Errors {
  const errors: Errors = {};
  const name = values["name"]?.trim() ?? "";
  const mobile = values["mobile"]?.trim() ?? "";

  if (name.length < 2) errors.name = "Please enter your name (at least 2 characters).";
  else if (name.length > 80) errors.name = "Please keep your name under 80 characters.";

  if (!normaliseIndianMobile(mobile))
    errors.mobile =
      "Please enter a valid 10-digit Indian mobile number starting with 6, 7, 8 or 9.";

  if (!values["branch"]) errors.branch = "Please choose a branch.";
  if (!values["concern"]) errors.concern = "Please choose a treatment or describe your concern.";
  if (!values["date"]) errors.date = "Please choose a preferred date.";
  if (!values["time"]) errors.time = "Please choose a preferred time.";
  if (!consent) errors.consent = "Please confirm you agree to be contacted on WhatsApp.";

  return errors;
}

export function AppointmentForm() {
  const id = useId();
  const [errors, setErrors] = useState<Errors>({});
  const [consent, setConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const summaryRef = useRef<HTMLDivElement>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;
    const nextErrors = validate(data, consent);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setSubmitted(false);
      requestAnimationFrame(() => summaryRef.current?.focus());
      return;
    }

    const note = data["message"]?.trim().slice(0, 500);
    const request: AppointmentRequest = {
      name: data["name"]!.trim(),
      mobile: normaliseIndianMobile(data["mobile"]!)!,
      branch: data["branch"]!,
      concern: data["concern"]!,
      date: data["date"]!,
      time: data["time"]!,
      ...(note ? { message: note } : {}),
    };

    window.open(appointmentLink(request), "_blank", "noopener,noreferrer");
    setSubmitted(true);
  }

  const fieldError = (field: Field) =>
    errors[field] ? (
      <p id={`${id}-${field}-error`} className="mt-1.5 text-sm font-medium text-destructive">
        {errors[field]}
      </p>
    ) : null;

  const describedBy = (field: Field) => (errors[field] ? `${id}-${field}-error` : undefined);

  return (
    <form noValidate onSubmit={handleSubmit} className="rounded-2xl border border-border bg-card p-6 sm:p-8">
      <div
        ref={summaryRef}
        tabIndex={-1}
        role="alert"
        aria-live="polite"
        className="focus-visible:outline-none"
      >
        {Object.keys(errors).length > 0 ? (
          <div className="mb-6 rounded-xl border border-destructive/40 bg-destructive/5 p-4 text-sm">
            <p className="font-semibold text-destructive">
              Please check {Object.keys(errors).length} field
              {Object.keys(errors).length > 1 ? "s" : ""} before continuing.
            </p>
          </div>
        ) : null}
        {submitted ? (
          <div className="mb-6 rounded-xl border border-primary/30 bg-secondary p-4 text-sm">
            <p className="font-semibold text-ink">WhatsApp opened with your request.</p>
            <p className="mt-1">
              Send the message to reach the clinic. Your appointment is confirmed only once the team
              replies to agree a slot.
            </p>
          </div>
        ) : null}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <label htmlFor={`${id}-name`} className="mb-1.5 block text-sm font-medium text-ink">
            Your name <span aria-hidden="true">*</span>
          </label>
          <input
            id={`${id}-name`}
            name="name"
            type="text"
            autoComplete="name"
            required
            maxLength={80}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={describedBy("name")}
            className={inputClass}
          />
          {fieldError("name")}
        </div>

        <div>
          <label htmlFor={`${id}-mobile`} className="mb-1.5 block text-sm font-medium text-ink">
            Mobile number <span aria-hidden="true">*</span>
          </label>
          <input
            id={`${id}-mobile`}
            name="mobile"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            required
            maxLength={20}
            placeholder="+91 98765 43210"
            aria-invalid={Boolean(errors.mobile)}
            aria-describedby={describedBy("mobile")}
            className={inputClass}
          />
          {fieldError("mobile")}
        </div>

        <div>
          <label htmlFor={`${id}-branch`} className="mb-1.5 block text-sm font-medium text-ink">
            Preferred branch <span aria-hidden="true">*</span>
          </label>
          <select
            id={`${id}-branch`}
            name="branch"
            required
            defaultValue=""
            aria-invalid={Boolean(errors.branch)}
            aria-describedby={describedBy("branch")}
            className={inputClass}
          >
            <option value="" disabled>
              Choose a branch
            </option>
            {locations.map((location) => (
              <option key={location.id} value={location.name}>
                {location.name}
              </option>
            ))}
            <option value="No preference">No preference</option>
          </select>
          {fieldError("branch")}
        </div>

        <div>
          <label htmlFor={`${id}-concern`} className="mb-1.5 block text-sm font-medium text-ink">
            Treatment or concern <span aria-hidden="true">*</span>
          </label>
          <select
            id={`${id}-concern`}
            name="concern"
            required
            defaultValue=""
            aria-invalid={Boolean(errors.concern)}
            aria-describedby={describedBy("concern")}
            className={inputClass}
          >
            <option value="" disabled>
              Choose an option
            </option>
            <option value="General consultation">General consultation</option>
            {publishedTreatments.map((treatment) => (
              <option key={treatment.slug} value={treatment.title}>
                {treatment.title}
              </option>
            ))}
            <option value="Not sure yet">Not sure yet</option>
          </select>
          {fieldError("concern")}
        </div>

        <div>
          <label htmlFor={`${id}-date`} className="mb-1.5 block text-sm font-medium text-ink">
            Preferred date <span aria-hidden="true">*</span>
          </label>
          <input
            id={`${id}-date`}
            name="date"
            type="date"
            required
            aria-invalid={Boolean(errors.date)}
            aria-describedby={describedBy("date")}
            className={inputClass}
          />
          {fieldError("date")}
        </div>

        <div>
          <label htmlFor={`${id}-time`} className="mb-1.5 block text-sm font-medium text-ink">
            Preferred time <span aria-hidden="true">*</span>
          </label>
          <select
            id={`${id}-time`}
            name="time"
            required
            defaultValue=""
            aria-invalid={Boolean(errors.time)}
            aria-describedby={describedBy("time")}
            className={inputClass}
          >
            <option value="" disabled>
              Choose a time of day
            </option>
            <option value="Morning">Morning</option>
            <option value="Afternoon">Afternoon</option>
            <option value="Evening">Evening</option>
          </select>
          {fieldError("time")}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor={`${id}-message`} className="mb-1.5 block text-sm font-medium text-ink">
            Anything else? <span className="text-muted-foreground">(optional)</span>
          </label>
          <textarea
            id={`${id}-message`}
            name="message"
            rows={3}
            maxLength={500}
            placeholder="A short note about what you would like to discuss."
            className={`${inputClass} min-h-24 py-3`}
          />
          <p className="mt-1.5 text-xs text-muted-foreground">
            Please do not include detailed medical history here. Bring it to your appointment
            instead.
          </p>
        </div>
      </div>

      <div className="mt-6 flex items-start gap-3">
        <input
          id={`${id}-consent`}
          name="consent"
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          aria-invalid={Boolean(errors.consent)}
          aria-describedby={describedBy("consent")}
          className="mt-1 size-5 shrink-0 rounded border-input accent-[oklch(0.435_0.062_199)]"
        />
        <div>
          <label htmlFor={`${id}-consent`} className="text-sm">
            I agree that Dent Arena may contact me on WhatsApp or by phone about this appointment
            request. <span aria-hidden="true">*</span>
          </label>
          {fieldError("consent")}
        </div>
      </div>

      <Button type="submit" variant="whatsapp" size="lg" className="mt-7 w-full sm:w-auto">
        <MessageCircle aria-hidden="true" />
        Request Appointment on WhatsApp
      </Button>

      <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
        This form runs entirely in your browser. Nothing is saved on this website or sent to a
        server &mdash; submitting simply opens WhatsApp with your message ready to send. Sending a
        request does not confirm an appointment.
      </p>
    </form>
  );
}
