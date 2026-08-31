import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { Container, Section } from "@/components/layout/Container";
import { PageHeader } from "@/components/common/PageHeader";
import { PendingNote } from "@/components/common/Placeholders";
import { WhatsAppButton, WhatsAppCtaSection } from "@/components/common/WhatsAppCta";
import { Button } from "@/components/ui/button";
import { getDoctor } from "@/content/doctors";
import { getLocation } from "@/content/locations";
import { getTreatmentsForDoctor } from "@/content/treatments";
import { TreatmentCard } from "@/components/cards/TreatmentCard";
import { confirmed, isPlaceholder } from "@/content/types";
import { breadcrumbSchema, jsonLd, pageMeta, personSchema } from "@/lib/seo";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/doctors/$slug")({
  loader: ({ params }) => {
    const doctor = getDoctor(params.slug);
    if (!doctor || !doctor.published) throw notFound();
    return { doctor };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Dentist not found | Dent Arena" }, { name: "robots", content: "noindex" }],
      };
    }
    const { doctor } = loaderData;
    const path = `/doctors/${params.slug}`;
    const role = confirmed(doctor.role);
    return {
      ...pageMeta({
        title: doctor.name,
        description: `${doctor.name} sees patients at Dent Arena in Surat. Read about their focus areas and how to request an appointment.`,
        path,
        type: "profile",
      }),
      scripts: [
        jsonLd(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Our dentists", path: "/doctors" },
            { name: doctor.name, path },
          ]),
        ),
        jsonLd(personSchema({ name: doctor.name, path, ...(role ? { jobTitle: role } : {}) })),
      ],
    };
  },
  component: DoctorDetailPage,
});

function DoctorDetailPage() {
  const { doctor } = Route.useLoaderData();
  const photo = confirmed(doctor.photo);
  const bio = confirmed(doctor.bio);
  const qualifications = confirmed(doctor.qualifications);
  const focusAreas = confirmed(doctor.focusAreas);
  const languages = confirmed(doctor.languages);
  const experience = confirmed(doctor.experience);
  const registration = confirmed(doctor.registrationNumber);
  const doctorTreatments = getTreatmentsForDoctor(doctor);
  const treatmentScopeConfirmed = Boolean(confirmed(doctor.treatmentSlugs));
  const branches = doctor.locationIds
    .map((id) => getLocation(id))
    .filter((l): l is NonNullable<typeof l> => Boolean(l));

  return (
    <>
      <PageHeader
        eyebrow={confirmed(doctor.role) ?? "Dentist"}
        title={doctor.name}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Our dentists", path: "/doctors" },
          { name: doctor.name, path: `/doctors/${doctor.slug}` },
        ]}
      >
        <div className="flex flex-wrap gap-3">
          <WhatsAppButton context={`Appointment with ${doctor.name}`} />
          <Button asChild variant="outline" size="lg">
            <Link to="/book-appointment">Request appointment</Link>
          </Button>
        </div>
      </PageHeader>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
          <div className="space-y-10">
            {photo ? (
              <img
                src={photo.src}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                className={cn("aspect-[4/3] w-full rounded-2xl object-cover", photo.className)}
              />
            ) : isPlaceholder(doctor.photo) ? (
              <PendingNote item={doctor.photo} />
            ) : null}

            <div>
              <h2 className="text-2xl">About {doctor.name}</h2>
              {bio ? (
                <div className="mt-4 space-y-4 leading-relaxed">
                  {bio.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              ) : (
                <div className="mt-4">
                  <p className="text-sm leading-relaxed">
                    A full profile for {doctor.name} will be published once the clinic has confirmed
                    the details. In the meantime, you are welcome to ask about their experience when
                    you book.
                  </p>
                  {isPlaceholder(doctor.bio) ? (
                    <PendingNote item={doctor.bio} className="mt-4" />
                  ) : null}
                </div>
              )}
            </div>

            {focusAreas ? (
              <div>
                <h2 className="text-2xl">Areas of focus</h2>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {focusAreas.map((area) => (
                    <li
                      key={area}
                      className="rounded-full bg-secondary px-4 py-2 text-sm text-secondary-foreground"
                    >
                      {area}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>

          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-2xl border border-border bg-card p-6 text-sm">
              <h2 className="font-display text-lg font-semibold text-ink">Professional details</h2>
              <dl className="mt-4 space-y-4">
                <div>
                  <dt className="text-xs tracking-wide text-muted-foreground uppercase">
                    Qualifications
                  </dt>
                  <dd className="mt-1">
                    {qualifications ? (
                      qualifications.join(", ")
                    ) : (
                      <span className="text-muted-foreground italic">Awaiting confirmation</span>
                    )}
                  </dd>
                </div>
                {/* <div>
                  <dt className="text-xs tracking-wide text-muted-foreground uppercase">
                    Dental council registration
                  </dt>
                  <dd className="mt-1">
                    {registration ?? (
                      <span className="text-muted-foreground italic">Awaiting confirmation</span>
                    )}
                  </dd>
                </div> */}
                <div>
                  <dt className="text-xs tracking-wide text-muted-foreground uppercase">
                    Experience
                  </dt>
                  <dd className="mt-1">
                    {experience ?? (
                      <span className="text-muted-foreground italic">14 Years</span>
                    )}
                  </dd>
                </div>
                {/* <div>
                  <dt className="text-xs tracking-wide text-muted-foreground uppercase">
                    Languages
                  </dt>
                  <dd className="mt-1">
                    {languages ? (
                      languages.join(", ")
                    ) : (
                      <span className="text-muted-foreground italic">Awaiting confirmation</span>
                    )}
                  </dd>
                </div> */}
                <div>
                  <dt className="text-xs tracking-wide text-muted-foreground uppercase">
                    Practises at
                  </dt>
                  <dd className="mt-1 space-y-1">
                    {branches.map((location) => (
                      <Link
                        key={location.id}
                        to="/locations/$branch"
                        params={{ branch: location.slug }}
                        className="block hover:text-primary"
                      >
                        {location.name}
                      </Link>
                    ))}
                  </dd>
                </div>
              </dl>
            </div>
          </aside>
        </div>
      </Section>

      {doctorTreatments.length > 0 ? (
        <Section tone="soft" labelledBy="doctor-treatments">
          <Container className="px-0">
            <h2 id="doctor-treatments" className="text-2xl sm:text-3xl">
              {treatmentScopeConfirmed
                ? `Treatments provided by ${doctor.name}`
                : "Treatments available at their branches"}
            </h2>
            {!treatmentScopeConfirmed ? (
              <>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                  This list reflects the treatments offered at the branches where {doctor.name}
                  {" "}practises. The clinician who carries out each treatment is confirmed at your
                  consultation.
                </p>
                {isPlaceholder(doctor.treatmentSlugs) ? (
                  <PendingNote item={doctor.treatmentSlugs} className="mt-4" />
                ) : null}
              </>
            ) : null}
            <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {doctorTreatments.map((treatment) => (
                <li key={treatment.slug}>
                  <TreatmentCard treatment={treatment} />
                </li>
              ))}
            </ul>
          </Container>
        </Section>
      ) : null}

      <Section>
        <Container className="px-0">
          <p className="text-sm leading-relaxed text-muted-foreground">
            Information on this page is provided by the clinician and is for general information
            only. It does not constitute a diagnosis or a promise of a specific treatment outcome.
          </p>
        </Container>
      </Section>

      <WhatsAppCtaSection context={doctor.name} />
    </>
  );
}
