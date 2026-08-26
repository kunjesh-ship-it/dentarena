import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/layout/Container";
import { PageHeader } from "@/components/common/PageHeader";
import { TreatmentCard } from "@/components/cards/TreatmentCard";
import { WhatsAppCtaSection } from "@/components/common/WhatsAppCta";
import { categoryLabels, publishedTreatments } from "@/content/treatments";
import type { Treatment } from "@/content/types";
import { breadcrumbSchema, jsonLd, pageMeta } from "@/lib/seo";

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Treatments", path: "/treatments" },
];

const categoryOrder: Treatment["category"][] = [
  "preventive",
  "restorative",
  "cosmetic",
  "orthodontics",
  "surgical",
  "specialist",
];



export const Route = createFileRoute("/treatments/")({
  head: () => ({
    ...pageMeta({
      title: "Dental Treatments in Surat",
      description:
        "Explore the dental treatments offered at Dent Arena in Bhatar and Vesu, Surat — from check-ups and fillings to implants, braces, aligners and root canal treatment.",
      path: "/treatments",
    }),
    scripts: [jsonLd(breadcrumbSchema(crumbs))],
  }),
  component: TreatmentsIndexPage,
});

function TreatmentsIndexPage() {
  return (
    <>
      <PageHeader
        eyebrow="Treatments"
        title="Dental treatments at Dent Arena"
        description="Clear, plain-English explanations of the care we provide, so you know what to expect before you sit in the chair. Every page covers what the treatment involves, how many visits it usually takes and how to look after your teeth afterwards."
        className="treatments-hero-section"
        breadcrumbs={crumbs}
      />

      <Section className="preventive-section">
        <div className="space-y-16">
          {categoryOrder.map((category) => {
            const items = publishedTreatments.filter((t) => t.category === category);
            if (items.length === 0) return null;
            const headingId = `category-${category}`;

            return (
              <div key={category}>
                <h2 id={headingId} className="text-2xl sm:text-3xl preventive-heading">
                  {categoryLabels[category]}
                </h2>
                <ul
                  aria-labelledby={headingId}
                  className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
                >
                  {items.map((treatment) => (
                    <li key={treatment.slug}>
                      <TreatmentCard treatment={treatment} />
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </Section>

      <WhatsAppCtaSection context="Treatments page" className="cta-section-treatment" />
    </>
  );
}
