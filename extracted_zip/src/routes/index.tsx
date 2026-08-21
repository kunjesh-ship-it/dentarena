import { createFileRoute } from "@tanstack/react-router";
import {
  HomeCta,
  HomeDoctors,
  HomeFaq,
  HomeHero,
  HomeLocations,
  HomePhotoStrip,
  HomeTreatments,
  HomeTrustLine,
  HomeVisitSequence,
} from "@/components/home/HomeSections";
import { clinic } from "@/content/clinic";
import { locations } from "@/content/locations";
import { generalFaqs } from "@/content/faqs";
import { faqSchema, jsonLd, locationSchema, pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => ({
    ...pageMeta({
      title: `${clinic.name} — Dental Clinic in Bhatar & Vesu, Surat`,
      description:
        "Dent Arena is a dental clinic with two branches in Surat — Bhatar and Vesu. Check-ups, fillings, root canals, implants, braces and aligners. Request an appointment on WhatsApp.",
      path: "/",
    }),
    scripts: [
      ...locations
        .map((l) => locationSchema(l.id))
        .filter((s): s is Record<string, unknown> => Boolean(s))
        .map((s) => jsonLd(s)),
      jsonLd(faqSchema(generalFaqs.slice(0, 6))),
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeTrustLine />
      <HomeTreatments />
      <HomePhotoStrip />
      <HomeVisitSequence />
      <HomeDoctors />
      <HomeLocations />
      <HomeFaq />
      <HomeCta />
    </>
  );
}
