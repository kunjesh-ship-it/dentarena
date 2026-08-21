import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/layout/Container";
import { PageHeader } from "@/components/common/PageHeader";
import { LocationCard } from "@/components/cards/LocationCard";
import { WhatsAppCtaSection } from "@/components/common/WhatsAppCta";
import { locations } from "@/content/locations";
import { breadcrumbSchema, jsonLd, pageMeta } from "@/lib/seo";

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Locations", path: "/locations" },
];

export const Route = createFileRoute("/locations/")({
  head: () => ({
    ...pageMeta({
      title: "Our Clinics in Bhatar and Vesu, Surat",
      description:
        "Find Dent Arena's two dental clinics in Surat — Bhatar and Vesu. Addresses, directions and contact details for each branch.",
      path: "/locations",
    }),
    scripts: [jsonLd(breadcrumbSchema(crumbs))],
  }),
  component: LocationsIndexPage,
});

function LocationsIndexPage() {
  return (
    <>
      <PageHeader
        eyebrow="Locations"
        title="Two branches across Surat"
        description="Visit us in Bhatar or Vesu. Both branches are run by the same team, so you can choose whichever is easier to reach."
        breadcrumbs={crumbs}
      />
      <Section>
        <ul className="grid gap-6 md:grid-cols-2">
          {locations.map((location) => (
            <li key={location.id}>
              <LocationCard location={location} />
            </li>
          ))}
        </ul>
      </Section>
      <WhatsAppCtaSection context="Locations page" />
    </>
  );
}
