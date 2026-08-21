import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { MapPin, Phone } from "lucide-react";
import { Section } from "@/components/layout/Container";
import { PageHeader } from "@/components/common/PageHeader";
import { MapEmbed } from "@/components/common/MapEmbed";
import { PendingNote } from "@/components/common/Placeholders";
import { DoctorCard } from "@/components/cards/DoctorCard";
import { WhatsAppCtaSection } from "@/components/common/WhatsAppCta";
import { Button } from "@/components/ui/button";
import { locations, formatAddress } from "@/content/locations";
import { getDoctor } from "@/content/doctors";
import { telHref, clinic } from "@/content/clinic";
import { confirmed, isPlaceholder } from "@/content/types";
import { breadcrumbSchema, jsonLd, locationSchema, pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/locations/$branch")({
  loader: ({ params }) => {
    const location = locations.find((l) => l.slug === params.branch);
    if (!location) throw notFound();
    return { location };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Branch not found | Dent Arena" }, { name: "robots", content: "noindex" }],
      };
    }
    const { location } = loaderData;
    const path = `/locations/${params.branch}`;
    const schema = locationSchema(location.id);
    return {
      ...pageMeta({
        title: `${location.name} — Dental Clinic in ${location.locality}`,
        description: location.description,
        path,
      }),
      scripts: [
        jsonLd(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Locations", path: "/locations" },
            { name: location.shortName, path },
          ]),
        ),
        ...(schema ? [jsonLd(schema)] : []),
      ],
    };
  },
  component: BranchPage,
});

function BranchPage() {
  const { location } = Route.useLoaderData();
  const hours = confirmed(location.hours);
  const doctors = location.doctorSlugs
    .map((slug) => getDoctor(slug))
    .filter((d): d is NonNullable<typeof d> => Boolean(d));

  return (
    <>
      <PageHeader
        eyebrow="Branch"
        title={location.name}
        description={location.description}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Locations", path: "/locations" },
          { name: location.shortName, path: `/locations/${location.slug}` },
        ]}
      >
        <div className="flex flex-wrap gap-3">
          <Button asChild size="lg">
            <a href={location.directionsUrl} target="_blank" rel="noopener noreferrer">
              <MapPin aria-hidden="true" />
              Get directions
            </a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href={telHref}>
              <Phone aria-hidden="true" />
              {clinic.phoneDisplay}
            </a>
          </Button>
          <Button asChild size="lg" variant="ghost">
            <Link to="/book-appointment">Request appointment</Link>
          </Button>
        </div>
      </PageHeader>

      <Section>
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl">Address</h2>
              <address className="mt-3 leading-relaxed not-italic">
                {formatAddress(location).map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
              {isPlaceholder(location.postalCode) ? (
                <PendingNote item={location.postalCode} className="mt-3" />
              ) : null}
            </div>

            <div>
              <h2 className="text-2xl">Opening hours</h2>
              {hours ? (
                <dl className="mt-3 space-y-2 text-sm" aria-label="Opening hours">
                  {hours.map((h) => (
                    <div key={h.days} className="flex justify-between gap-4 border-b border-border py-2">
                      <dt className="font-medium text-ink">{h.days}</dt>
                      <dd>{h.hours}</dd>
                    </div>
                  ))}
                </dl>
              ) : isPlaceholder(location.hours) ? (
                <PendingNote item={location.hours} className="mt-3" />
              ) : null}
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {(
                [
                  ["Landmark", location.landmark],
                  ["Parking", location.parking],
                  ["Accessibility", location.accessibility],
                ] as const
              ).map(([label, value]) => (
                <div key={label} className="rounded-2xl border border-border bg-card p-5 text-sm">
                  <h3 className="font-display font-semibold text-ink">{label}</h3>
                  <p className="mt-2 leading-relaxed">
                    {confirmed(value) ?? (
                      <span className="text-muted-foreground italic">Awaiting confirmation</span>
                    )}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <MapEmbed location={location} />
        </div>
      </Section>

      {doctors.length > 0 ? (
        <Section tone="soft" labelledBy="branch-team">
          <h2 id="branch-team" className="text-2xl sm:text-3xl">
            Dentists at {location.shortName}
          </h2>
          <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {doctors.map((doctor) => (
              <li key={doctor.slug}>
                <DoctorCard doctor={doctor} />
              </li>
            ))}
          </ul>
        </Section>
      ) : null}

      <WhatsAppCtaSection context={location.name} />
    </>
  );
}
