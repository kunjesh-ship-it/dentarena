import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck } from "lucide-react";
import { Section } from "@/components/layout/Container";
import { PageHeader } from "@/components/common/PageHeader";
import { EmptyState } from "@/components/common/Placeholders";
import { BeforeAfterCase, isCasePublishable } from "@/components/common/BeforeAfter";
import { WhatsAppButton } from "@/components/common/WhatsAppCta";
import { caseStudies, publishableCases } from "@/content/media";
import { breadcrumbSchema, jsonLd, pageMeta } from "@/lib/seo";

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Smile gallery", path: "/smile-gallery" },
];

export const Route = createFileRoute("/smile-gallery")({
  head: () => ({
    ...pageMeta({
      title: "Smile Gallery",
      description:
        "Before-and-after dental cases from Dent Arena in Surat are published only with documented patient consent and clinical approval. No stock or illustrative results are shown.",
      path: "/smile-gallery",
    }),
    scripts: [jsonLd(breadcrumbSchema(crumbs))],
  }),
  component: SmileGalleryPage,
});

function SmileGalleryPage() {
  // Double gate: filtered here, and each card re-checks eligibility before rendering.
  const cases = publishableCases(caseStudies).filter(isCasePublishable);

  return (
    <>
      <PageHeader
        eyebrow="Smile gallery"
        title="Before and after"
        description="This page will only ever show real Dent Arena cases, photographed at the clinic and published with the patient's written consent."
        breadcrumbs={crumbs}
      />

      <Section>
        {cases.length > 0 ? (
          <ul className="grid gap-6 lg:grid-cols-2">
            {cases.map((item) => (
              <li key={item.id}>
                <BeforeAfterCase item={item} />
              </li>
            ))}
          </ul>
        ) : (
          <EmptyState
            title="Real smile transformations will be added here after patient approval."
            description="We do not publish stock photographs, illustrative results or example cases. Each case needs documented patient consent and clinical sign-off before it appears."
            action={
              <WhatsAppButton
                context="Smile gallery — discussing smile goals"
                label="Discuss Your Smile Goals"
              />
            }
          />
        )}

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-6">
            <ShieldCheck aria-hidden="true" className="size-5 text-primary" />
            <h2 className="mt-3 text-xl">How cases are published</h2>
            <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted-foreground">
              <li>Written patient consent is recorded before anything is prepared.</li>
              <li>The clinical team approves the images and the wording.</li>
              <li>Both the before and the after photograph must exist and be genuine.</li>
              <li>Cases that fail any of these checks cannot be displayed on this site.</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-surface-soft p-6">
            <h2 className="text-xl">What results depend on</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Outcomes differ from person to person and depend on the diagnosis, the condition of
              the teeth and gums, and how tissues heal. Nothing shown here should be read as a
              prediction for your own case &mdash; a recommendation can only follow a clinical
              examination.
            </p>
            <p className="mt-4 text-sm">
              <Link
                to="/treatments"
                className="font-medium text-primary underline underline-offset-4"
              >
                Explore treatments
              </Link>{" "}
              or{" "}
              <Link
                to="/book-appointment"
                className="font-medium text-primary underline underline-offset-4"
              >
                send an appointment request
              </Link>
              .
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
