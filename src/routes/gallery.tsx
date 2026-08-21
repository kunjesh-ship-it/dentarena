import { createFileRoute, Link } from "@tanstack/react-router";
import { Section } from "@/components/layout/Container";
import { PageHeader } from "@/components/common/PageHeader";
import { GalleryGrid } from "@/components/common/Gallery";
import { WhatsAppCtaSection } from "@/components/common/WhatsAppCta";
import { galleryItems } from "@/content/media";
import { breadcrumbSchema, jsonLd, pageMeta } from "@/lib/seo";

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Clinic gallery", path: "/gallery" },
];

export const Route = createFileRoute("/gallery")({
  head: () => ({
    ...pageMeta({
      title: "Clinic Gallery",
      description:
        "Photographs of Dent Arena in Surat — the entrance, reception, consultation room and treatment room. Illustrative images are clearly labelled as such.",
      path: "/gallery",
    }),
    scripts: [jsonLd(breadcrumbSchema(crumbs))],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  const authentic = galleryItems
    .filter((item) => item.imageType === "authentic" && item.approved === true)
    .sort((a, b) => (a.displayOrder ?? 0) - (b.displayOrder ?? 0));
  const generic = galleryItems.filter((item) => item.imageType === "generic");
  const pending = galleryItems.filter((item) => item.imageType === "placeholder");

  return (
    <>
      <PageHeader
        eyebrow="Clinic gallery"
        title="Inside the clinic"
        description="Photographs taken at Dent Arena, alongside slots reserved for further clinic photography. Any illustrative image is labelled as such."
        breadcrumbs={crumbs}
      />

      <Section>
        <div className="rounded-2xl border border-border bg-surface-soft px-5 py-4 text-sm leading-relaxed text-muted-foreground">
          <span className="font-medium text-ink">About these images:</span> images marked
          &ldquo;Representative image&rdquo; illustrate a modern dental environment in general. They
          are not photographs of Dent Arena, its branches, team or patients.
        </div>

        {authentic.length > 0 ? (
          <div className="mt-10">
            <h2 className="text-2xl">Dent Arena photographs</h2>
            <div className="mt-6">
              <GalleryGrid items={authentic} />
            </div>
          </div>
        ) : null}

        {pending.length > 0 ? (
          <div className="mt-10">
            <h2 className="text-2xl">Reserved for clinic photography</h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              Each slot below is waiting for a genuine Dent Arena photograph, with the intended
              subject and recommended size noted.
            </p>
            <div className="mt-6">
              <GalleryGrid items={pending} />
            </div>
          </div>
        ) : null}

        {generic.length > 0 ? (
          <div className="mt-14">
            <h2 className="text-2xl">Illustrative dental imagery</h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              Generic visuals used only to illustrate everyday dental care and hygiene standards.
            </p>
            <div className="mt-6">
              <GalleryGrid items={generic} />
            </div>
          </div>
        ) : null}

        <p className="mt-10 text-sm text-muted-foreground">
          Looking for the branches themselves?{" "}
          <Link to="/locations" className="font-medium text-primary underline underline-offset-4">
            See both Surat locations
          </Link>
          .
        </p>
      </Section>

      <WhatsAppCtaSection context="Clinic gallery" />
    </>
  );
}
