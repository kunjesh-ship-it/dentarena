import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/layout/Container";
import { PageHeader } from "@/components/common/PageHeader";
import { DoctorCard } from "@/components/cards/DoctorCard";
import { EmptyState } from "@/components/common/Placeholders";
import { WhatsAppCtaSection } from "@/components/common/WhatsAppCta";
import { publishedDoctors } from "@/content/doctors";
import { breadcrumbSchema, jsonLd, pageMeta } from "@/lib/seo";

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Our dentists", path: "/doctors" },
];

export const Route = createFileRoute("/doctors/")({
  head: () => ({
    ...pageMeta({
      title: "Our Dentists in Surat",
      description:
        "Meet the dental team at Dent Arena, with branches in Bhatar and Vesu, Surat. Qualifications and registration details are published once confirmed by each clinician.",
      path: "/doctors",
    }),
    scripts: [jsonLd(breadcrumbSchema(crumbs))],
  }),
  component: DoctorsIndexPage,
});

function DoctorsIndexPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our team"
        title="The dentists behind Dent Arena"
        description="You will be seen by a qualified dentist who explains your options before any treatment begins. Full qualifications and registration numbers are shown once each clinician has confirmed them."
        breadcrumbs={crumbs}
      />

      <Section>
        {publishedDoctors.length > 0 ? (
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {publishedDoctors.map((doctor) => (
              <li key={doctor.slug}>
                <DoctorCard doctor={doctor} />
              </li>
            ))}
          </ul>
        ) : (
          <EmptyState
            title="Team profiles are being prepared"
            description="Dentist profiles will appear here once the clinic has confirmed names, qualifications and registration details."
          />
        )}
      </Section>

      <WhatsAppCtaSection context="Doctors page" />
    </>
  );
}
