import { createFileRoute } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { Container, Section } from "@/components/layout/Container";
import { PageHeader } from "@/components/common/PageHeader";
import { AppointmentForm } from "@/components/forms/AppointmentForm";
import { Button } from "@/components/ui/button";
import { clinic, telHref } from "@/content/clinic";
import { locations, formatAddress } from "@/content/locations";
import { confirmed } from "@/content/types";
import { breadcrumbSchema, jsonLd, pageMeta } from "@/lib/seo";

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Request an appointment", path: "/book-appointment" },
];

export const Route = createFileRoute("/book-appointment")({
  head: () => ({
    ...pageMeta({
      title: "Request an Appointment",
      description:
        "Send an appointment request to Dent Arena in Surat on WhatsApp. Choose your branch, preferred day and treatment — the clinic replies to confirm.",
      path: "/book-appointment",
    }),
    scripts: [jsonLd(breadcrumbSchema(crumbs))],
  }),
  component: BookAppointmentPage,
});

function BookAppointmentPage() {
  return (
    <>
      <PageHeader
        eyebrow="Appointments"
        title="Request an appointment"
        description="Fill in a few details and we'll open WhatsApp with your request ready to send. The clinic will reply to agree a time that works for you."
        breadcrumbs={crumbs}
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
          <AppointmentForm />

          <aside className="space-y-6">
            <div className="rounded-2xl border border-border bg-surface-soft p-6">
              <h2 className="font-display text-lg font-semibold text-ink">Prefer to call?</h2>
              <p className="mt-2 text-sm leading-relaxed">
                Speak to the front desk for urgent problems, or if you would rather book by phone.
              </p>
              <Button asChild className="mt-4 w-full">
                <a href={telHref}>
                  <Phone aria-hidden="true" />
                  {clinic.phoneDisplay}
                </a>
              </Button>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6">
              <h2 className="font-display text-lg font-semibold text-ink">Our branches</h2>
              <ul className="mt-4 space-y-5 text-sm">
                {locations.map((location) => (
                  <li key={location.id}>
                    <p className="font-medium text-ink">{location.name}</p>
                    <address className="mt-1 leading-relaxed not-italic">
                      {formatAddress(location).map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                    </address>
                    {confirmed(location.hours) ? null : (
                      <p className="mt-1 text-xs text-muted-foreground italic">
                        Opening hours to be confirmed by the clinic.
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-destructive/30 bg-destructive/5 p-6">
              <h2 className="font-display text-lg font-semibold text-ink">Dental emergency?</h2>
              <p className="mt-2 text-sm leading-relaxed">
                For severe pain, facial swelling, uncontrolled bleeding or a knocked-out tooth,
                call the clinic straight away rather than waiting for a WhatsApp reply. For any
                life-threatening emergency, go to your nearest hospital.
              </p>
            </div>
          </aside>
        </div>
      </Section>

      <Section tone="soft">
        <Container className="px-0">
          <h2 className="font-display text-2xl sm:text-3xl">What happens next</h2>
          <ol className="mt-8 grid gap-6 sm:grid-cols-3">
            {[
              {
                title: "You send the request",
                detail:
                  "Your message opens in WhatsApp with the details you entered. Nothing is stored on this website.",
              },
              {
                title: "We reply to confirm",
                detail:
                  "The team checks the diary and suggests a slot at your chosen branch, or the nearest alternative.",
              },
              {
                title: "You come in",
                detail:
                  "Bring any previous X-rays, reports or a list of medicines you take. Arrive a few minutes early for your first visit.",
              },
            ].map((step, index) => (
              <li key={step.title} className="rounded-2xl border border-border bg-card p-6">
                <span
                  aria-label={`Step ${index + 1}`}
                  className="grid size-9 place-items-center rounded-full bg-primary font-display text-sm font-semibold text-primary-foreground"
                >
                  {index + 1}
                </span>
                <h3 className="mt-4 font-display text-base font-semibold text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed">{step.detail}</p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>
    </>
  );
}
