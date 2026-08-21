import { Link } from "@tanstack/react-router";
import { ArrowRight, MapPin, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/common/Reveal";
import { ArenaArc, EnamelOutline, HandCircle, SmileDots } from "@/components/common/Motifs";
import { FaqAccordion } from "@/components/common/FaqAccordion";
import { WhatsAppButton } from "@/components/common/WhatsAppCta";
import { DoctorCard } from "@/components/cards/DoctorCard";
import { TreatmentCard } from "@/components/cards/TreatmentCard";
import { clinic, telHref } from "@/content/clinic";
import { galleryItems } from "@/content/media";
import { formatAddress, locations } from "@/content/locations";
import { publishedDoctors } from "@/content/doctors";
import { featuredTreatments } from "@/content/treatments";
import { generalFaqs } from "@/content/faqs";
import { generalEnquiryLink } from "@/lib/whatsapp";
import { confirmed } from "@/content/types";
import { cn } from "@/lib/utils";

/** Photographs of the clinic that the practice has supplied and approved. */
const clinicPhotos = galleryItems
  .filter((item) => item.imageType === "authentic" && item.approved && item.image)
  .sort((a, b) => (a.displayOrder ?? 99) - (b.displayOrder ?? 99));

const photo = (id: string) => clinicPhotos.find((p) => p.id === id) ?? clinicPhotos[0];

/* ------------------------------------------------------------------ Hero */

export function HomeHero() {
  const main = photo("reception");
  const inset = photo("clinic-exterior-signboard");

  return (
    <section className="relative overflow-hidden bg-background band-xl pt-12 md:pt-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-[-10%] right-[-10%] hidden size-[36rem] rounded-full bg-accent/8 blur-3xl lg:block"
      />
      <Container className="relative grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <Reveal className="flex items-center gap-3">
            <ArenaArc />
            <p className="eyebrow">Bhatar &amp; Vesu, Surat</p>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-5 display-1">
              Dentistry that takes the time to{" "}
              <span className="relative inline-block">
                explain
                <HandCircle
                  className="pointer-events-none absolute inset-x-[-8%] top-[-14%] h-[128%] w-[116%]"
                  aria-hidden="true"
                />
              </span>{" "}
              itself
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 lead">
              {clinic.tagline} From routine check-ups to implants, braces and root canal treatment,
              Dent Arena looks after families across Surat at two neighbourhood clinics.
            </p>
          </Reveal>

          <Reveal delay={240} className="mt-9 flex flex-wrap gap-3">
            <WhatsAppButton context="Homepage hero" />
            <Button asChild size="lg" variant="outline">
              <Link to="/treatments">Explore treatments</Link>
            </Button>
          </Reveal>

          <Reveal delay={300}>
            <p className="mt-6 text-sm text-muted-foreground">
              Sending a request does not confirm an appointment &mdash; the clinic replies to agree
              a time.
            </p>
          </Reveal>
        </div>

        <Reveal delay={200} className="lg:col-span-5">
          <div className="relative">
            {main?.image ? (
              <img
                src={main.image.src}
                alt={main.image.alt}
                width={main.image.width}
                height={main.image.height}
                className="mask-arch inner-hairline aspect-4/5 w-full object-cover"
              />
            ) : null}

            {inset?.image ? (
              <img
                src={inset.image.src}
                alt={inset.image.alt}
                width={inset.image.width}
                height={inset.image.height}
                loading="lazy"
                className="inner-hairline absolute bottom-[-1.5rem] left-[-1.5rem] hidden size-36 rounded-full border-4 border-background object-cover sm:block"
              />
            ) : null}

            <p className="absolute top-4 right-4 rounded-full bg-surface-warm/95 px-4 py-2 smallcaps text-ink shadow-soft">
              Two branches
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------- Trust line */

const trustPoints = [
  "Two practices in Surat — Bhatar and Vesu",
  "Appointment requests by WhatsApp or phone",
  "Every treatment explained before it starts",
  "Bhatar open Mon–Sat, 9:30 am – 7:30 pm",
];

export function HomeTrustLine() {
  return (
    <section aria-label="What Dent Arena offers" className="bg-surface-warm band-sm">
      <Container>
        <Reveal>
          <ul className="grid gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-4">
            {trustPoints.map((point) => (
              <li key={point} className="flex items-start gap-3 text-sm leading-relaxed text-ink">
                <SmileDots className="mt-1.5 shrink-0" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------- Treatments */

export function HomeTreatments() {
  const items = featuredTreatments.slice(0, 5);

  return (
    <section aria-labelledby="treatments-heading" className="bg-background band-lg">
      <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <p className="eyebrow">Treatments</p>
              <h2 id="treatments-heading" className="mt-4 display-2">
                Care we provide{" "}
                <span className="border-b-4 border-accent/70">most often</span>
              </h2>
              <p className="mt-5 measure text-base leading-relaxed">
                Each treatment page explains what it involves, how many visits to expect and how to
                look after your teeth afterwards.
              </p>
              <Button asChild variant="outline" size="lg" className="mt-8">
                <Link to="/treatments">See all treatments</Link>
              </Button>
            </Reveal>
          </div>
        </div>

        <div className="lg:col-span-7">
          <ul className="grid gap-5 sm:grid-cols-2">
            {items.map((treatment, i) => (
              <Reveal
                as="li"
                key={treatment.slug}
                delay={Math.min(i, 3) * 70}
              >
                <TreatmentCard treatment={treatment} featured={i === 0} />
              </Reveal>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

/* --------------------------------------------------------- Photo strip */

export function HomePhotoStrip() {
  const tiles = clinicPhotos;
  if (tiles.length === 0) return null;

  return (
    <section aria-labelledby="clinic-photos-heading" className="bg-surface-soft band-sm">
      <Container>
        <Reveal className="flex flex-wrap items-end justify-between gap-4">
          <h2 id="clinic-photos-heading" className="display-3">
            Inside the clinic
          </h2>
          <Link
            to="/gallery"
            data-active="false"
            className="link-underline text-sm font-medium text-primary"
          >
            See the full gallery
          </Link>
        </Reveal>

        <Reveal delay={140} className="mt-10 relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4 lg:-ml-6">
              {tiles.map((item) => (
                <CarouselItem key={item.id} className="pl-4 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 lg:pl-6">
                  <figure className="flex flex-col h-full">
                    {item.image ? (
                      <img
                        src={item.image.src}
                        alt={item.image.alt}
                        width={item.image.width}
                        height={item.image.height}
                        loading="lazy"
                        className="inner-hairline aspect-square w-full rounded-3xl object-cover shrink-0"
                      />
                    ) : null}
                    <figcaption className="mt-3 text-xs leading-relaxed text-muted-foreground">
                      {item.caption ?? item.title}
                    </figcaption>
                  </figure>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Custom styled static navigation arrows below the carousel on mobile, and standard positioned on large screens if desired. Or we can just use the provided styles since we need a beautiful UI. */}
            <div className="mt-8 flex justify-end gap-3">
              <CarouselPrevious className="static shrink-0 translate-y-0 translate-x-0 bg-background/50 backdrop-blur-sm hover:bg-background/80" />
              <CarouselNext className="static shrink-0 translate-y-0 translate-x-0 bg-background/50 backdrop-blur-sm hover:bg-background/80" />
            </div>
          </Carousel>
        </Reveal>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------- How a visit works */

const visitSteps = [
  {
    title: "Tell us what's bothering you",
    detail:
      "Send your preferred branch, day and concern on WhatsApp, or call the clinic. We reply to agree a time that works for you — a request on its own is not a confirmed appointment.",
  },
  {
    title: "An unhurried examination",
    detail:
      "We look at the tooth or area you're worried about and at your mouth as a whole, and explain what we find in plain language before anything is planned.",
  },
  {
    title: "Options, then treatment",
    detail:
      "You'll hear what the options are, what each one involves and how many visits to expect. Treatment starts only once you're happy to go ahead.",
  },
];

export function HomeVisitSequence() {
  const image = photo("consultation-room");

  return (
    <section aria-labelledby="visit-heading" className="relative overflow-hidden bg-background band-lg">
      <EnamelOutline
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-[-6rem] hidden h-[32rem] -translate-y-1/2 opacity-[0.06] lg:block"
      />
      <Container className="relative grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          {image?.image ? (
            <img
              src={image.image.src}
              alt={image.image.alt}
              width={image.image.width}
              height={image.image.height}
              loading="lazy"
              className="mask-blob inner-hairline aspect-4/5 w-full object-cover"
            />
          ) : null}
        </Reveal>

        <div className="lg:col-span-7">
          <Reveal>
            <p className="eyebrow">How a visit works</p>
            <h2 id="visit-heading" className="mt-4 display-2">
              Three steps, no surprises
            </h2>
          </Reveal>

          <ol className="mt-10">
            {visitSteps.map((step, i) => (
              <Reveal as="li" key={step.title} delay={i * 70} className="border-t border-border py-7">
                <div className="flex gap-6">
                  <span
                    aria-hidden="true"
                    className="font-display text-2xl font-semibold text-accent tabular-nums"
                  >
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="display-3">{step.title}</h3>
                    <p className="mt-3 measure text-base leading-relaxed">{step.detail}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}

/* ----------------------------------------------------------------- Doctors */

export function HomeDoctors() {
  if (publishedDoctors.length === 0) return null;

  return (
    <section aria-labelledby="team-heading" className="bg-background band-md">
      <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <p className="eyebrow">Our team</p>
          <h2 id="team-heading" className="mt-4 display-2">
            The dentists you&rsquo;ll meet
          </h2>
          <p className="mt-5 measure text-base leading-relaxed">
            Registration numbers, experience and biographies are published once each clinician has
            confirmed them.
          </p>
        </Reveal>

        <ul className="grid gap-6 sm:grid-cols-2 lg:col-span-7">
          {publishedDoctors.map((doctor, i) => (
            <Reveal as="li" key={doctor.slug} delay={i * 70}>
              <DoctorCard doctor={doctor} />
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}

/* --------------------------------------------------------------- Locations */

export function HomeLocations() {
  const branchPhotos = [photo("clinic-exterior-signboard"), photo("treatment-room")];

  return (
    <section aria-labelledby="locations-heading" className="bg-surface-warm band-lg">
      <Container>
        <Reveal>
          <p className="eyebrow">Locations</p>
          <h2 id="locations-heading" className="mt-4 display-2">
            Find your nearest branch
          </h2>
        </Reveal>

        <div className="mt-14 space-y-16 lg:space-y-24">
          {locations.map((location, index) => {
            const hours = confirmed(location.hours);
            const image = branchPhotos[index];
            const flip = index % 2 === 1;

            return (
              <Reveal key={location.id}>
                <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
                  <div className={cn("lg:col-span-6", flip && "lg:order-2")}>
                    {image?.image ? (
                      <img
                        src={image.image.src}
                        alt={image.image.alt}
                        width={image.image.width}
                        height={image.image.height}
                        loading="lazy"
                        className="inner-hairline aspect-16/10 w-full rounded-[2rem] object-cover"
                      />
                    ) : null}
                  </div>

                  <div className={cn("lg:col-span-6", flip && "lg:order-1")}>
                    <h3 className="display-3">{location.name}</h3>
                    <address className="mt-4 text-base leading-relaxed not-italic">
                      {formatAddress(location).map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                    </address>

                    <div className="mt-5 text-sm">
                      {hours ? (
                        <ul className="space-y-1">
                          {hours.map((h) => (
                            <li key={h.days}>
                              <span className="font-medium text-ink">{h.days}</span> &mdash;{" "}
                              {h.hours}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-muted-foreground italic">
                          Opening hours to be confirmed by the clinic
                        </p>
                      )}
                    </div>

                    <div className="mt-7 flex flex-wrap gap-2">
                      <Button asChild size="sm">
                        <Link to="/locations/$branch" params={{ branch: location.slug }}>
                          Branch details
                        </Link>
                      </Button>
                      <Button asChild size="sm" variant="outline">
                        <a href={location.directionsUrl} target="_blank" rel="noopener noreferrer">
                          <MapPin aria-hidden="true" />
                          Get directions
                        </a>
                      </Button>
                      <Button asChild size="sm" variant="ghost">
                        <a href={telHref}>
                          <Phone aria-hidden="true" />
                          Call
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

/* --------------------------------------------------------------------- FAQ */

export function HomeFaq() {
  return (
    <section aria-labelledby="faq-heading" className="bg-surface-soft band-md">
      <Container className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <p className="eyebrow">Questions</p>
          <h2 id="faq-heading" className="mt-4 display-2">
            Before you visit
          </h2>
          <Link
            to="/faqs"
            data-active="false"
            className="link-underline mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary"
          >
            All frequently asked questions
            <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
        </Reveal>

        <Reveal delay={80} className="lg:col-span-7">
          <FaqAccordion faqs={generalFaqs.slice(0, 6)} idPrefix="home-faq" />
        </Reveal>
      </Container>
    </section>
  );
}

/* ---------------------------------------------------------------- CTA band */

export function HomeCta() {
  return (
    <section
      aria-labelledby="home-cta-heading"
      className="relative overflow-hidden bg-primary-deep band-xl text-secondary"
    >
      <EnamelOutline
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 right-[-4rem] h-[26rem] -translate-y-1/2 text-secondary opacity-[0.06]"
      />
      <Container className="relative text-center">
        <Reveal>
          <p className="eyebrow text-accent">Appointments</p>
          <h2 id="home-cta-heading" className="mx-auto mt-4 max-w-3xl display-2 text-secondary">
            Send an appointment request on WhatsApp
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-secondary/80">
            Tell us your preferred branch, day and time. Nothing you type is stored on this website
            &mdash; the request opens in WhatsApp and the team replies to agree a slot.
          </p>
        </Reveal>

        <Reveal delay={80} className="mt-9 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button asChild variant="whatsapp" size="lg">
            <a href={generalEnquiryLink("Homepage CTA")} target="_blank" rel="noopener noreferrer">
              <MessageCircle aria-hidden="true" />
              Request appointment on WhatsApp
            </a>
          </Button>
          <a
            href={telHref}
            className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-secondary underline-offset-4 hover:underline"
          >
            <Phone aria-hidden="true" className="size-4" />
            Call {clinic.phoneDisplay}
          </a>
        </Reveal>

        <Reveal delay={140}>
          <p className="mt-8 text-xs text-secondary/70">
            A request is not a confirmed appointment.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
