import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { Check, MapPin } from "lucide-react";
import { Container, Section } from "@/components/layout/Container";
import { PageHeader } from "@/components/common/PageHeader";
import { FaqAccordion } from "@/components/common/FaqAccordion";
import { MedicalReviewer } from "@/components/common/MedicalReviewer";
import { WhatsAppButton, WhatsAppCtaSection } from "@/components/common/WhatsAppCta";
import { TreatmentCard } from "@/components/cards/TreatmentCard";
import { DoctorCard } from "@/components/cards/DoctorCard";
import { Button } from "@/components/ui/button";
import { categoryLabels, getTreatment, getTreatments } from "@/content/treatments";
import { getDoctorsForTreatment } from "@/content/doctors";
import { getLocation } from "@/content/locations";
import { breadcrumbSchema, faqSchema, jsonLd, pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/treatments/$slug")({
  loader: ({ params }) => {
    const treatment = getTreatment(params.slug);
    if (!treatment) throw notFound();
    return { treatment };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Treatment not found | Dent Arena" }, { name: "robots", content: "noindex" }],
      };
    }
    const { treatment } = loaderData;
    const path = `/treatments/${params.slug}`;
    return {
      ...pageMeta({
        title: `${treatment.title} in Surat`,
        description: treatment.metaDescription,
        path,
      }),
      scripts: [
        jsonLd(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Treatments", path: "/treatments" },
            { name: treatment.title, path },
          ]),
        ),
        jsonLd(faqSchema(treatment.faqs)),
      ],
    };
  },
  component: TreatmentDetailPage,
});

function ListBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h2 className="text-2xl">{title}</h2>
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-relaxed">
            <Check aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-primary" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function TreatmentDetailPage() {
  const { treatment } = Route.useLoaderData();
  const related = getTreatments(treatment.relatedSlugs);
  const doctors = getDoctorsForTreatment(treatment);
  const branches = treatment.availableAt
    .map((id) => getLocation(id))
    .filter((l): l is NonNullable<typeof l> => Boolean(l));

  return (
    <>
      <PageHeader
        eyebrow={categoryLabels[treatment.category]}
        title={treatment.title}
        description={treatment.summary}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Treatments", path: "/treatments" },
          { name: treatment.title, path: `/treatments/${treatment.slug}` },
        ]}
      >
        <div className="flex flex-wrap gap-3">
          <WhatsAppButton context={`Treatment enquiry: ${treatment.title}`} />
          <Button asChild variant="outline" size="lg">
            <Link to="/book-appointment">Request appointment</Link>
          </Button>
        </div>
      </PageHeader>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.7fr)_minmax(0,1fr)]">
          <article className="space-y-12">
            <div>
              <h2 className="text-2xl">What it is</h2>
              <p className="mt-4 leading-relaxed">{treatment.whatItIs}</p>
            </div>

            <ListBlock title="Who it may suit" items={treatment.whoNeedsIt} />
            <ListBlock title="Signs you may need it" items={treatment.signs} />

            <div>
              <h2 className="text-2xl">How the treatment works</h2>
              <ol className="mt-6 space-y-5">
                {treatment.howItWorks.map((step, index) => (
                  <li key={step.step} className="flex gap-4">
                    <span className="grid size-8 shrink-0 place-items-center rounded-full bg-secondary font-display text-sm font-semibold text-primary">
                      {index + 1}
                    </span>
                    <div>
                      <h3 className="font-display text-base font-semibold text-ink">{step.step}</h3>
                      <p className="mt-1 text-sm leading-relaxed">{step.detail}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <h2 className="text-2xl">Visits and recovery</h2>
              <p className="mt-4 leading-relaxed">{treatment.visitsAndRecovery}</p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2">
              <ListBlock title="Benefits" items={treatment.benefits} />
              <ListBlock title="Limitations" items={treatment.limitations} />
            </div>

            <div className="rounded-2xl border border-border bg-surface-soft p-6">
              <h2 className="text-2xl">Risks to be aware of</h2>
              <p className="mt-3 text-sm leading-relaxed">
                Every dental procedure carries some risk. Your dentist will discuss these with you
                in person, based on your own examination and X-rays.
              </p>
              <ul className="mt-5 space-y-3">
                {treatment.risks.map((risk) => (
                  <li key={risk} className="text-sm leading-relaxed">
                    &bull; {risk}
                  </li>
                ))}
              </ul>
            </div>

            <ListBlock title="Aftercare" items={treatment.aftercare} />

            <div className="rounded-2xl border border-destructive/30 bg-destructive/5 p-6">
              <h2 className="text-2xl">When to contact the clinic</h2>
              <ul className="mt-5 space-y-3">
                {treatment.whenToContact.map((item) => (
                  <li key={item} className="text-sm leading-relaxed">
                    &bull; {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl">Frequently asked questions</h2>
              <div className="mt-4">
                <FaqAccordion faqs={treatment.faqs} idPrefix={treatment.slug} />
              </div>
            </div>
          </article>

          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-2xl border border-border bg-card p-6">
              <h2 className="font-display text-lg font-semibold text-ink">Available at</h2>
              <ul className="mt-4 space-y-3 text-sm">
                {branches.map((location) => (
                  <li key={location.id} className="flex gap-2">
                    <MapPin aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-primary" />
                    <Link
                      to="/locations/$branch"
                      params={{ branch: location.slug }}
                      className="hover:text-primary"
                    >
                      {location.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
                We do not publish prices online because treatment plans differ from person to
                person. Ask for an estimate at your consultation.
              </p>
            </div>

            <MedicalReviewer
              reviewedBy={treatment.reviewedBy}
              lastReviewed={treatment.lastReviewed}
            />
          </aside>
        </div>
      </Section>

      {doctors.length > 0 ? (
        <Section labelledBy="treatment-doctors">
          <Container className="px-0">
            <h2 id="treatment-doctors" className="text-2xl sm:text-3xl">
              Dentists you can ask about this treatment
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              These clinicians see patients at the branches where this treatment is offered. Who
              carries out your treatment is confirmed at your consultation.
            </p>
            <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {doctors.map((doctor) => (
                <li key={doctor.slug}>
                  <DoctorCard doctor={doctor} />
                </li>
              ))}
            </ul>
          </Container>
        </Section>
      ) : null}

      {related.length > 0 ? (
        <Section tone="soft" labelledBy="related-treatments">
          <Container className="px-0">
            <h2 id="related-treatments" className="text-2xl sm:text-3xl">
              Related treatments
            </h2>
            <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <li key={item.slug}>
                  <TreatmentCard treatment={item} />
                </li>
              ))}
            </ul>
          </Container>
        </Section>
      ) : null}

      <WhatsAppCtaSection context={treatment.title} />
    </>
  );
}
