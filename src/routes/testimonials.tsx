import { createFileRoute, Link } from "@tanstack/react-router";
import { Facebook } from "lucide-react";
import { Section } from "@/components/layout/Container";
import { PageHeader } from "@/components/common/PageHeader";
import { EmptyState } from "@/components/common/Placeholders";
import { TestimonialCard } from "@/components/cards/TestimonialCard";
import { Button } from "@/components/ui/button";
import { publishableTestimonials, testimonials } from "@/content/media";
import { clinic } from "@/content/clinic";
import { breadcrumbSchema, jsonLd, pageMeta } from "@/lib/seo";

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Patient testimonials", path: "/testimonials" },
];

const facebookUrl = "https://www.facebook.com/DentArenaSurat/";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    ...pageMeta({
      title: "Patient Testimonials",
      description:
        "Verified patient experiences at Dent Arena in Surat. We publish only genuine, approved reviews — no sample testimonials and no aggregate ratings until verified reviews exist.",
      path: "/testimonials",
    }),
    // Only breadcrumb schema. Review and AggregateRating schema stay disabled
    // until verified, approved testimonials are supplied.
    scripts: [jsonLd(breadcrumbSchema(crumbs))],
  }),
  component: TestimonialsPage,
});

function TestimonialsPage() {
  const published = publishableTestimonials(testimonials);

  return (
    <>
      <PageHeader
        eyebrow="Patient experiences"
        title="What patients say"
        description="We publish testimonials only when the patient has agreed to it and the clinic has verified the review. Nothing on this page is written on a patient's behalf."
        breadcrumbs={crumbs}
      />

      <Section>
        {published.length > 0 ? (
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {published.map((testimonial) => (
              <li key={testimonial.id}>
                <TestimonialCard testimonial={testimonial} />
              </li>
            ))}
          </ul>
        ) : (
          <EmptyState
            title="Verified patient experiences will be shared here soon."
            description="Rather than publish sample reviews, we are collecting genuine feedback from patients at the Bhatar and Vesu practices. In the meantime, you can see the clinic's own updates on Facebook."
            action={
              <Button asChild size="lg" variant="outline">
                <a href={facebookUrl} target="_blank" rel="noopener noreferrer">
                  <Facebook aria-hidden="true" /> Visit Our Facebook Page
                </a>
              </Button>
            }
          />
        )}

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-6">
            <h2 className="text-xl">How we handle reviews</h2>
            <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted-foreground">
              <li>No testimonial is written, edited or invented by {clinic.name}.</li>
              <li>Reviews from other platforms are republished only with permission and a link to the source.</li>
              <li>Star ratings and review counts appear only once verified reviews exist.</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-surface-soft p-6">
            <h2 className="text-xl">Been treated at Dent Arena?</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Feedback helps the team improve, and helps other people in Surat decide where to go.
              You can share yours with the clinic directly.
            </p>
            <p className="mt-4 text-sm">
              <Link to="/contact" className="font-medium text-primary underline underline-offset-4">
                Contact the clinic
              </Link>
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
