import { createFileRoute, Link } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { Container, Section } from "@/components/layout/Container";
import { PageHeader } from "@/components/common/PageHeader";
import { MapEmbed } from "@/components/common/MapEmbed";
import { PendingNote } from "@/components/common/Placeholders";
import { WhatsAppButton, WhatsAppCtaSection } from "@/components/common/WhatsAppCta";
import { Button } from "@/components/ui/button";
import { clinic, telHref } from "@/content/clinic";
import { formatAddress, locations } from "@/content/locations";
import { confirmed, isPlaceholder } from "@/content/types";
import { breadcrumbSchema, jsonLd, pageMeta } from "@/lib/seo";

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Contact", path: "/contact" },
];

export const Route = createFileRoute("/contact")({
  head: () => ({
    ...pageMeta({
      title: "Contact Dent Arena in Surat",
      description:
        "Phone, WhatsApp and directions for Dent Arena's Bhatar and Vesu dental clinics in Surat. Send an appointment request or call the front desk.",
      path: "/contact",
    }),
    scripts: [jsonLd(breadcrumbSchema(crumbs))],
  }),
  component: ContactPage,
});

function ContactPage() {
  const email = confirmed(clinic.email);

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Get in touch with Dent Arena"
        description="Call the front desk, message us on WhatsApp, or visit either of our Surat practices. We reply to WhatsApp messages during clinic hours."
        breadcrumbs={crumbs}
      >
        <div className="flex flex-wrap gap-3">
          <WhatsAppButton context="Contact page" />
          <Button asChild variant="outline" size="lg">
            <a href={telHref}>
              <Phone aria-hidden="true" />
              {clinic.phoneDisplay}
            </a>
          </Button>
        </div>
      </PageHeader>

      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border border-border bg-card p-6">
            <Phone aria-hidden="true" className="size-5 text-primary" />
            <h2 className="mt-4 font-display text-lg font-semibold text-ink">Phone</h2>
            <p className="mt-2 text-sm leading-relaxed">
              Best for urgent problems and same-day questions.
            </p>
            <a href={telHref} className="mt-3 inline-block font-medium text-primary">
              {clinic.phoneDisplay}
            </a>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6">
            <Mail aria-hidden="true" className="size-5 text-primary" />
            <h2 className="mt-4 font-display text-lg font-semibold text-ink">Email</h2>
            {email ? (
              <a href={`mailto:${email}`} className="mt-3 inline-block font-medium text-primary">
                {email}
              </a>
            ) : (
              <>
                <p className="mt-2 text-sm leading-relaxed">
                  Please use WhatsApp or phone in the meantime.
                </p>
                {isPlaceholder(clinic.email) ? (
                  <PendingNote item={clinic.email} className="mt-3" />
                ) : null}
              </>
            )}
          </div>

          <div className="rounded-2xl border border-border bg-card p-6">
            <Clock aria-hidden="true" className="size-5 text-primary" />
            <h2 className="mt-4 font-display text-lg font-semibold text-ink">Opening hours</h2>
            <p className="mt-2 text-sm leading-relaxed">
              Hours are confirmed by the clinic when you message. Each branch page shows its own
              timings once published.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="soft" labelledBy="contact-branches">
        <Container className="px-0">
          <h2 id="contact-branches" className="text-2xl sm:text-3xl">
            Our two Surat practices
          </h2>
          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            {locations.map((location) => (
              <div
                key={location.id}
                className="flex flex-col rounded-2xl border border-border bg-card p-6"
              >
                <h3 className="font-display text-lg font-semibold text-ink">{location.name}</h3>
                <address className="mt-3 flex gap-2 text-sm leading-relaxed not-italic">
                  <MapPin aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-primary" />
                  <span>
                    {formatAddress(location).map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </span>
                </address>
                {isPlaceholder(location.postalCode) ? (
                  <PendingNote item={location.postalCode} className="mt-3" />
                ) : null}

                <div className="mt-5">
                  <MapEmbed location={location} />
                </div>

                <div className="mt-5 flex flex-wrap gap-3">
                  <Button asChild variant="outline">
                    <a href={location.directionsUrl} target="_blank" rel="noopener noreferrer">
                      Get directions
                    </a>
                  </Button>
                  <Button asChild variant="ghost">
                    <Link to="/locations/$branch" params={{ branch: location.slug }}>
                      Branch details
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="px-0">
          <div className="rounded-2xl border border-border bg-surface-soft p-6 sm:p-8">
            <h2 className="text-2xl">Requesting an appointment</h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed">
              Our appointment form runs entirely in your browser and simply opens WhatsApp with
              your message ready to send. Nothing is stored on this website. A request is not a
              confirmed appointment &mdash; the clinic replies to agree a time with you.
            </p>
            <Button asChild size="lg" className="mt-5">
              <Link to="/book-appointment">Request an appointment</Link>
            </Button>
          </div>
        </Container>
      </Section>

      <WhatsAppCtaSection context="Contact page" />
    </>
  );
}
