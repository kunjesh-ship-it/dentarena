import { clinic } from "@/content/clinic";

export type AppointmentRequest = {
  name: string;
  mobile: string;
  branch: string;
  concern: string;
  date: string;
  time: string;
  message?: string;
};

export function buildAppointmentMessage(request: AppointmentRequest) {
  const lines = [
    "Hello Dent Arena,",
    "",
    "I would like to request a dental appointment.",
    "",
    `Name: ${request.name}`,
    `Mobile: ${request.mobile}`,
    `Preferred branch: ${request.branch}`,
    `Treatment or concern: ${request.concern}`,
    `Preferred date: ${request.date}`,
    `Preferred time: ${request.time}`,
    `Message: ${request.message?.trim() ? request.message.trim() : "\u2014"}`,
    "",
    "Please confirm an available appointment slot.",
  ];
  return lines.join("\n");
}

/** Builds a wa.me deep link. Nothing is sent to a server. */
export function whatsappLink(text: string) {
  return `https://wa.me/${clinic.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

export function appointmentLink(request: AppointmentRequest) {
  return whatsappLink(buildAppointmentMessage(request));
}

/** Generic enquiry link used by header, footer and mobile action bar CTAs. */
export function generalEnquiryLink(context?: string) {
  const base = [
    "Hello Dent Arena,",
    "",
    "I would like to ask about a dental appointment.",
  ];
  if (context) base.push("", `Regarding: ${context}`);
  return whatsappLink(base.join("\n"));
}
