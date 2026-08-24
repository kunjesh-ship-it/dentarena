import { Link } from "@tanstack/react-router";
import { MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Container } from "@/components/layout/Container";
import { clinic, telHref } from "@/content/clinic";
import { generalEnquiryLink } from "@/lib/whatsapp";

export function WhatsAppButton({
  context,
  label = "Request Appointment on WhatsApp",
  size = "lg",
  className,
}: {
  context?: string;
  label?: string;
  size?: "default" | "lg" | "xl" | "sm";
  className?: string;
}) {
  return (
    <Button asChild variant="whatsapp" size={size} className={cn("max-w-full whitespace-normal text-center", className)}>
      <a href={generalEnquiryLink(context)} target="_blank" rel="noopener noreferrer">
        <MessageCircle aria-hidden="true" />
        {label}
      </a>
    </Button>
  );
}

export function WhatsAppCtaSection({ context }: { context?: string }) {
  return (
    <section aria-labelledby="whatsapp-cta-heading" className="bg-ink py-16 text-secondary sm:py-20">
      <Container>
        <div className="grid gap-8 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-center">
          <div>
            <p className="eyebrow text-accent">Appointments</p>
            <h2 id="whatsapp-cta-heading" className="mt-3 text-3xl text-secondary sm:text-4xl">
              Send an appointment request on WhatsApp
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-secondary/90">
              Tell us your preferred branch, day and time. A request is not a confirmed booking
              &mdash; the team will reply to agree a slot that suits you. Nothing you type is stored
              on this website.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <Button asChild variant="whatsapp" size="lg">
              <Link to="/book-appointment">
                <MessageCircle aria-hidden="true" />
                Request appointment
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-secondary/40 text-secondary hover:bg-secondary/10">
              <a href={telHref}>
                <Phone aria-hidden="true" />
                Call {clinic.phoneDisplay}
              </a>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
