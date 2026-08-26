import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight, CalendarCheck, MapPin, MessageCircle, Phone, ShieldCheck, Sparkles } from "lucide-react";
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
import { ParallaxImage } from "@/components/common/ParallaxImage";
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
    <section className="relative overflow-hidden bg-background band-xl pt-12 md:pt-20 theme-color-1 hero-section">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-[-10%] right-[-10%] hidden size-[36rem] rounded-full bg-accent/8 blur-3xl lg:block"
      />
      <Container className="relative grid items-center gap-5 gap-sm-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <Reveal className="flex items-center gap-3">
            <ArenaArc />
            <p className="eyebrow">Bhatar &amp; Vesu, Surat</p>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-5 display-1 hero-heading">
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
            <p className="mt-6 lead hero-section-description">
              {clinic.tagline} From routine check-ups to implants, braces and root canal treatment,
              Dent Arena looks after families across Surat at two neighbourhood clinics.
            </p>
          </Reveal>

          <Reveal delay={240} className="mt-3 mt-sm-9 flex flex-wrap gap-3 hero-btn-section">
            <WhatsAppButton context="Homepage hero" className="hero-btn" />
            <Button asChild size="lg" variant="outline" className="hero-btn">
              <Link to="/treatments">Explore treatments</Link>
            </Button>
          </Reveal>

          <Reveal delay={300}>
            <p className="mt-6 text-sm text-muted-foreground hero-small-font">
              Sending a request does not confirm an appointment &mdash; the clinic replies to agree
              a time.
            </p>
          </Reveal>
        </div>

        <Reveal delay={200} className="lg:col-span-5" variant="image-reveal">
          <ParallaxImage offset={30} className="relative">
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
                className="hero-second-image inner-hairline absolute bottom-[-1.5rem] left-[-1.5rem] hidden size-36 rounded-full border-4 border-background object-cover sm:block"
              />
            ) : null}

            <Reveal delay={400} className="absolute top-4 right-4" variant="scale-in">
              <p className="rounded-full bg-surface-warm/95 px-4 py-2 smallcaps text-ink shadow-soft">
                Two branches
              </p>
            </Reveal>
          </ParallaxImage>
        </Reveal>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------- Why patients choose us */

const whyChooseUsPoints = [
  {
    icon: ShieldCheck,
    title: "Explained before it's started",
    description:
      "You'll hear what's happening in your mouth, what the options are and what each one involves — before any treatment begins.",
  },
  {
    icon: Sparkles,
    title: "Careful, unhurried care",
    description:
      "Appointments are planned so there's time for questions. Nervous patients are welcome. Tell us and we'll take it slowly.",
  },
  {
    icon: MapPin,
    title: "Two branches in Surat",
    description:
      "The same team across Bhatar and Vesu, so you can pick whichever branch is easier to reach from home or work.",
  },
  {
    icon: CalendarCheck,
    title: "Simple appointment requests",
    description:
      "Send your preferred branch, day and concern on WhatsApp. We reply to confirm a slot that works for you.",
  },
];

export function HomeTrustLine() {
  return (
    <section aria-labelledby="why-choose-us-heading" className="relative overflow-hidden bg-surface-warm band-md chooseus-section">
      {/* Ambient background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-24 size-96 rounded-full bg-accent/8 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -left-24 size-96 rounded-full bg-primary/8 blur-3xl"
      />

      <Container className="relative">
        <div className="max-w-3xl">
          <Reveal className="flex items-center gap-3">
            <ArenaArc className="text-primary" />
            <p className="eyebrow text-primary font-semibold tracking-wider">WHY PATIENTS CHOOSE US</p>
          </Reveal>

          <Reveal delay={60}>
            <h2 id="why-choose-us-heading" className="mt-4 display-2 text-ink chooseus-heading">
              What a visit to Dent Arena feels like
            </h2>
          </Reveal>
        </div>

        <div className="mt-7 mt-sm-10 lg:mt-14">
          <ul className="grid gap-6 sm:grid-cols-2 lg:gap-8">
            {whyChooseUsPoints.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal
                  as="li"
                  key={item.title}
                  delay={100 + index * 70}
                  className="h-full"
                >
                  <div className="group relative flex h-full flex-col justify-between rounded-3xl border border-border/80 bg-card p-7 sm:p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-lift">
                    <div>
                      {/* Icon with smooth scale & color transition on hover */}
                      <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/15 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-md">
                        <Icon aria-hidden="true" className="size-6" />
                      </div>

                      <h3 className="mt-6 font-display text-xl font-semibold tracking-tight text-ink sm:text-2xl">
                        {item.title}
                      </h3>

                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-[0.9375rem]">
                        {item.description}
                      </p>
                    </div>

                    <div className="mt-6 flex items-center gap-2 pt-1 text-xs font-semibold text-primary opacity-sm-0 transition-opacity duration-200 group-hover:opacity-100">
                      <span>Learn more about our approach</span>
                      <ArrowRight
                        aria-hidden="true"
                        className="size-3.5 transition-transform duration-200 group-hover:translate-x-1"
                      />
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------- Treatments */

export function HomeTreatments() {
  const items = featuredTreatments.slice(0, 6);

  return (
    <section aria-labelledby="treatments-heading" className="bg-background band-lg treatments-section">
      <Container className="grid gap-5 gap-sm-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <p className="eyebrow">Treatments</p>
              <h2 id="treatments-heading" className="mt-4 display-2 treatments-heading">
                Care we provide{" "}
                <span className="border-b-4 border-accent/70">most often</span>
              </h2>
              <p className="mt-5 measure text-base leading-relaxed treatments-description">
                Each treatment page explains what it involves, how many visits to expect and how to
                look after your teeth afterwards.
              </p>
              <Button asChild variant="outline" size="lg" className="mt-3 mt-sm-8">
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
    <section aria-labelledby="clinic-photos-heading" className="bg-surface-soft band-sm gallery-section">
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
            <div className="mt-0 mt-sm-8 flex justify-sm-end justify-center gap-3">
              <CarouselPrevious className="static shrink-0 translate-y-0 translate-x-0 bg-background/50 backdrop-blur-sm hover:bg-background/80" />
              <CarouselNext className="static shrink-0 translate-y-0 translate-x-0 bg-background/50 backdrop-blur-sm hover:bg-background/80" />
            </div>
          </Carousel>
        </Reveal>
      </Container>
    </section>
  );
}

/* ------------------------------------------------ Before & After comparison */

export function HomeBeforeAfter() {
  // ── All state is kept in refs — zero React re-renders during any drag interaction ──
  const positionRef = useRef(50);
  const isDraggingRef = useRef(false);
  const rafRef = useRef<number | null>(null);

  // DOM refs for imperative style mutations
  const containerRef = useRef<HTMLDivElement>(null);
  const clipOverlayRef = useRef<HTMLDivElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);
  const sliderWrapperRef = useRef<HTMLDivElement>(null);
  // Handle button ref so we can toggle active/idle CSS directly, without a re-render
  const handleRef = useRef<HTMLDivElement>(null);

  // Base classes that are always present on the handle button
  const handleBaseClass =
    "relative my-0 flex size-11 sm:size-12 items-center justify-center rounded-full bg-white shadow-[0_4px_20px_rgba(0,0,0,0.4)] ring-2 ring-white/90 transition-transform duration-75 ease-out";
  // Extra classes toggled imperatively — never via React state
  const handleActiveClass = "scale-95 shadow-xl ring-accent";
  const handleIdleClass = "group-hover:scale-105";

  const setHandleActive = useCallback((active: boolean) => {
    if (!handleRef.current) return;
    if (active) {
      handleRef.current.classList.remove(...handleIdleClass.split(" "));
      handleRef.current.classList.add(...handleActiveClass.split(" "));
    } else {
      handleRef.current.classList.remove(...handleActiveClass.split(" "));
      handleRef.current.classList.add(...handleIdleClass.split(" "));
    }
  }, []);

  /** Apply positionRef to the DOM — zero React overhead. */
  const applyPosition = useCallback(() => {
    const pct = positionRef.current;
    if (clipOverlayRef.current) {
      const clip = `polygon(0% 0%, ${pct}% 0%, ${pct}% 100%, 0% 100%)`;
      clipOverlayRef.current.style.clipPath = clip;
      (clipOverlayRef.current.style as CSSStyleDeclaration & { WebkitClipPath: string }).WebkitClipPath = clip;
    }
    if (dividerRef.current) {
      dividerRef.current.style.left = `${pct}%`;
    }
    if (sliderWrapperRef.current) {
      sliderWrapperRef.current.setAttribute("aria-valuenow", String(Math.round(pct)));
    }
  }, []);

  const scheduleFrame = useCallback(() => {
    if (rafRef.current !== null) return;
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = null;
      applyPosition();
    });
  }, [applyPosition]);

  const updatePosition = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      if (rect.width <= 0) return;
      const x = clientX - rect.left;
      positionRef.current = Math.min(Math.max((x / rect.width) * 100, 0), 100);
      scheduleFrame();
    },
    [scheduleFrame],
  );

  // Register window-level pointer listeners once on mount.
  useEffect(() => {
    const onPointerMove = (e: PointerEvent) => {
      if (!isDraggingRef.current) return;
      updatePosition(e.clientX);
    };
    const onPointerUp = () => {
      if (!isDraggingRef.current) return;
      isDraggingRef.current = false;
      setHandleActive(false);
    };
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerup", onPointerUp);
    window.addEventListener("pointercancel", onPointerUp);
    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("pointercancel", onPointerUp);
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };
  }, [updatePosition, setHandleActive]);

  // Pointer-down handler — no React state update, just ref + DOM mutations
  const handlePointerDown = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      e.preventDefault();
      isDraggingRef.current = true;
      setHandleActive(true);
      updatePosition(e.clientX);
    },
    [updatePosition, setHandleActive],
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      let moved = false;
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        positionRef.current = Math.max(0, positionRef.current - 2);
        moved = true;
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        positionRef.current = Math.min(100, positionRef.current + 2);
        moved = true;
      } else if (e.key === "Home") {
        e.preventDefault();
        positionRef.current = 0;
        moved = true;
      } else if (e.key === "End") {
        e.preventDefault();
        positionRef.current = 100;
        moved = true;
      }
      if (moved) scheduleFrame();
    },
    [scheduleFrame],
  );

  // ── Case carousel — only this index triggers a React re-render (image swap) ──
  const cases = [
    {
      before: "/images/gallery/image-before.png",
      after: "/images/gallery/image-after.png",
      label: "Full Smile Rehabilitation",
      tag: "Aesthetic Restoration",
    },
    {
      before: "/images/gallery/male-before.png",
      after: "/images/gallery/male-after.png",
      label: "Smile Makeover",
      tag: "Restorative Dentistry",
    },
  ] as const;

  const [[page, direction], setPage] = useState([0, 0]);
  const activeIndex = ((page % cases.length) + cases.length) % cases.length;
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const activeCase = cases[activeIndex]!;

  // Reset slider to centre whenever the case changes
  useEffect(() => {
    positionRef.current = 50;
    applyPosition();
  }, [page, applyPosition]);

  const paginate = useCallback((newDirection: number) => {
    setPage(([prevPage]) => [prevPage + newDirection, newDirection]);
  }, []);

  const goTo = useCallback(
    (index: number) => {
      setPage(([prevPage]) => {
        const currentActive = ((prevPage % cases.length) + cases.length) % cases.length;
        if (index === currentActive) return [prevPage, 0];
        const dir = index > currentActive ? 1 : -1;
        return [prevPage + (index - currentActive), dir];
      });
    },
    [cases.length],
  );

  const goPrev = useCallback(() => paginate(-1), [paginate]);
  const goNext = useCallback(() => paginate(1), [paginate]);

  return (
    <section
      aria-labelledby="before-after-heading"
      className="relative overflow-hidden bg-[#0A1D24] band-lg text-white after-trement-section"
    >
      {/* Ambient background glow accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-28 -left-28 size-[34rem] rounded-full bg-accent/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-28 -right-28 size-[38rem] rounded-full bg-primary/20 blur-3xl"
      />

      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal className="flex items-center justify-center gap-3">
            <ArenaArc className="text-accent" />
            <p className="eyebrow text-accent">Smile Transformations</p>
          </Reveal>

          <Reveal delay={60}>
            <h2 id="before-after-heading" className="mt-4 display-2 text-white after-trement-section-title">
              Compare before and after results showing beautiful functional smiles{" "}
              <span className="text-accent">created through expert dental care</span>
            </h2>
          </Reveal>

          <Reveal delay={120}>
            <p className="mt-4 text-base md:text-lg leading-relaxed text-white/75 after-trement-section-description">
              Experience the power of precision restorative and aesthetic dentistry. Drag the slider
              to see how personalized care restores natural alignment, shade, and confident everyday smiles.
            </p>
          </Reveal>
        </div>

        {/* Interactive Comparison Card + prev/next arrows */}
        <Reveal delay={180} className="mx-auto mt-10 max-w-4xl md:mt-14">
          <div className="flex items-center gap-3 md:gap-5 after-trement-image-section">
            {/* Prev arrow */}
            <button
              onClick={goPrev}
              aria-label="Previous case"
              className="shrink-0 flex size-10 md:size-12 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/20 text-white hover:bg-white/20 hover:scale-105 active:scale-95 transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="size-5" aria-hidden="true">
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>

            {/* Slider card */}
            <div className="slider-image-section min-w-0 flex-1 rounded-3xl bg-white/[0.04] p-3 md:p-5 ring-1 ring-white/10 shadow-2xl backdrop-blur-sm">
              <div
                ref={containerRef}
                className="relative aspect-[3/2] w-full overflow-hidden rounded-2xl select-none"
              >
                <AnimatePresence initial={false} custom={direction}>
                  <motion.div
                    key={page}
                    custom={direction}
                    variants={{
                      enter: (dir: number) => ({
                        x: dir > 0 ? "100%" : dir < 0 ? "-100%" : "0%",
                        opacity: 0.8,
                      }),
                      center: {
                        x: 0,
                        opacity: 1,
                      },
                      exit: (dir: number) => ({
                        x: dir > 0 ? "-100%" : dir < 0 ? "100%" : "0%",
                        opacity: 0.8,
                      }),
                    }}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: "spring", stiffness: 280, damping: 28 },
                      opacity: { duration: 0.2 },
                    }}
                    className="absolute inset-0 h-full w-full"
                  >
                    <div
                      ref={sliderWrapperRef}
                      role="slider"
                      tabIndex={0}
                      aria-label="Before and after dental smile comparison slider"
                      aria-valuenow={50}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      onPointerDown={handlePointerDown}
                      onKeyDown={handleKeyDown}
                      style={{ touchAction: "none" }}
                      className="group relative h-full w-full cursor-ew-resize overflow-hidden rounded-2xl select-none touch-none focus:outline-none focus-visible:ring-4 focus-visible:ring-accent"
                    >
                      {/* Layer 1 (bottom): After image — always fully visible */}
                      <div className="pointer-events-none absolute inset-0 h-full w-full">
                        <img
                          src={activeCase.after}
                          alt="After: Healthy, restored and aligned dental smile"
                          width={1200}
                          height={800}
                          loading="eager"
                          decoding="sync"
                          draggable={false}
                          className="pointer-events-none h-full w-full object-cover object-center select-none"
                        />
                      </div>

                      {/*
                       * Layer 2 (clip overlay): Before image.
                       * clip-path is mutated directly via ref — no React re-render, no flicker.
                       */}
                      <div
                        ref={clipOverlayRef}
                        className="pointer-events-none absolute inset-0 h-full w-full overflow-hidden select-none"
                        style={{
                          clipPath: "polygon(0% 0%, 50% 0%, 50% 100%, 0% 100%)",
                          WebkitClipPath: "polygon(0% 0%, 50% 0%, 50% 100%, 0% 100%)",
                          willChange: "clip-path",
                        }}
                      >
                        <img
                          src={activeCase.before}
                          alt="Before: Pre-treatment dental smile condition"
                          width={1200}
                          height={800}
                          loading="eager"
                          decoding="sync"
                          draggable={false}
                          className="pointer-events-none h-full w-full object-cover object-center select-none"
                        />
                      </div>

                      {/* Floating Badges */}
                      <span className="pointer-events-none absolute top-4 left-4 z-10 rounded-full bg-black/60 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-white/95 backdrop-blur-md ring-1 ring-white/20 select-none shadow-md">
                        Before
                      </span>
                      <span className="pointer-events-none absolute top-4 right-4 z-10 rounded-full bg-accent/90 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-[#0A262D] backdrop-blur-md ring-1 ring-white/30 select-none shadow-md">
                        After
                      </span>

                      {/*
                       * Draggable Divider — left is mutated directly via ref, no re-render.
                       */}
                      <div
                        ref={dividerRef}
                        className="pointer-events-none absolute inset-y-0 z-20 flex flex-col items-center -translate-x-1/2"
                        style={{ left: "50%", willChange: "left" }}
                      >
                        {/* Top dashed line */}
                        <div className="w-[2px] flex-1 border-r-2 border-dashed border-white drop-shadow-[0_0_4px_rgba(0,0,0,0.8)]" />

                        {/* Center Handle Button — classes toggled via handleRef, not React state */}
                        <div
                          ref={handleRef}
                          className={`${handleBaseClass} ${handleIdleClass}`}
                        >
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="size-5 text-[#0A3C44]"
                            aria-hidden="true"
                          >
                            <path d="m7 8-4 4 4 4" />
                            <path d="M3 12h18" />
                            <path d="m17 8 4 4-4 4" />
                          </svg>
                        </div>

                        {/* Bottom dashed line */}
                        <div className="w-[2px] flex-1 border-r-2 border-dashed border-white drop-shadow-[0_0_4px_rgba(0,0,0,0.8)]" />
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Bottom info, case label & dot indicators */}
              <div className="mt-4 flex flex-col items-center justify-between gap-3 px-0 text-white/70 sm:flex-row sm:px-3">
                <p className="flex items-center gap-2 text-xs md:text-sm">
                  <span className="inline-block size-2 rounded-full bg-accent animate-pulse" />
                  <span>Drag divider to compare before and after</span>
                </p>
                <div className="flex items-center gap-3">
                  <div className="block sm:flex items-center gap-2 text-xs">
                    <span className="block rounded-md bg-white/10 px-2.5 py-1 text-white/90 transition-all duration-300">
                      {activeCase.label}
                    </span>
                    <span className="block mt-2 sm:mt-0 rounded-md bg-white/10 px-2.5 py-1 text-white/90 transition-all duration-300">
                      {activeCase.tag}
                    </span>
                  </div>
                  {/* Dot indicators */}
                  <div className="flex items-center gap-1" role="tablist" aria-label="Case study carousel navigation">
                    {cases.map((c, i) => (
                      <button
                        key={i}
                        type="button"
                        role="tab"
                        onClick={() => goTo(i)}
                        aria-selected={i === activeIndex}
                        aria-label={`Case ${i + 1}: ${c.label}`}
                        className="relative flex size-8 items-center justify-center rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                      >
                        <span
                          className={cn(
                            "size-2.5 rounded-full transition-all duration-200",
                            i === activeIndex
                              ? "bg-accent scale-125 ring-2 ring-accent/40"
                              : "bg-white/40 hover:bg-white/70",
                          )}
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Next arrow */}
            <button
              onClick={goNext}
              aria-label="Next case"
              className="shrink-0 flex size-10 md:size-12 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/20 text-white hover:bg-white/20 hover:scale-105 active:scale-95 transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="size-5" aria-hidden="true">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
        </Reveal>

        {/* Action Link & Trust Note */}
        <Reveal delay={240} className="mt-10 text-center">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <WhatsAppButton
              context="Smile Transformation section - before after comparison"
              label="Discuss Your Smile on WhatsApp"
              size="lg" className="hero-btn"
            />
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white"
            >
              <Link to="/smile-gallery" className="hero-btn">View Smile Gallery</Link>
            </Button>
          </div>
          <p className="mt-4 text-xs text-white/50">
            *Individual clinical outcomes vary based on individual oral health and treatment plan.
          </p>
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
    <section aria-labelledby="visit-heading" className="relative overflow-hidden bg-background band-lg visit-work-section">
      <EnamelOutline
        className="absolute top-1/2 left-[-5rem] hidden h-[34rem] -translate-y-1/2 text-accent opacity-[0.15] lg:block"
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
            <h2 id="visit-heading" className="mt-4 display-2 visit-work-title">
              Three steps, no surprises
            </h2>
          </Reveal>

          <ol className="mt-10 three-step-ol">
            {visitSteps.map((step, i) => (
              <Reveal as="li" key={step.title} delay={i * 70} className="border-t border-border py-7">
                <div className="flex gap-6">
                  <span
                    aria-label={`Step 0${i + 1}`}
                    className="font-display text-2xl font-semibold text-accent tabular-nums"
                  >
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="display-3 how-visit-heading">{step.title}</h3>
                    <p className="mt-3 measure text-base leading-relaxed how-visit-description">{step.detail}</p>
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
    <section aria-labelledby="team-heading" className="bg-background band-md ourteam-section">
      <Container className="grid gap-5 gap-sm-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <p className="eyebrow">Our team</p>
          <h2 id="team-heading" className="mt-4 display-2 ourteam-title">
            The dentists you&rsquo;ll meet
          </h2>
          <p className="mt-5 measure text-base leading-relaxed ourteam-description">
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
    <section aria-labelledby="locations-heading" className="bg-surface-warm band-lg location-section">
      <Container>
        <Reveal>
          <p className="eyebrow">Locations</p>
          <h2 id="locations-heading" className="mt-4 display-2 location-title">
            Find your nearest branch
          </h2>
        </Reveal>

        <div className="mt-5 mt-sm-8 mt-sm-14 space-y-16 lg:space-y-24">
          {locations.map((location, index) => {
            const hours = confirmed(location.hours);
            const image = branchPhotos[index];
            const flip = index % 2 === 1;

            return (
              <Reveal key={location.id} className="mb-10">
                <div className="grid items-center gap-5 gap-sm-10 lg:grid-cols-12 lg:gap-16 ">
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
                    <h3 className="display-3 location-heading">{location.name}</h3>
                    <address className="mt-2 mt-sm-4 text-base leading-relaxed not-italic">
                      {formatAddress(location).map((line) => (
                        <span key={line} className="sm:block">
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
                        <a href={telHref} aria-label={`Call Dent Arena on ${clinic.phoneDisplay}`}>
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
    <section aria-labelledby="faq-heading" className="bg-surface-soft band-md faq-section">
      <Container className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <p className="eyebrow">Questions</p>
          <h2 id="faq-heading" className="mt-4 display-2 faq-heading">
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
      className="relative overflow-hidden bg-primary-deep band-xl text-secondary cta-section"
    >
      <EnamelOutline
        className="absolute top-1/2 right-[-4rem] h-[28rem] -translate-y-1/2 text-secondary opacity-[0.12] dent-animation"
      />
      <Container className="relative text-center">
        <Reveal>
          <p className="eyebrow text-accent">Appointments</p>
          <h2 id="home-cta-heading" className="mx-auto mt-4 max-w-3xl display-2 text-secondary cta-title">
            Send an appointment request on WhatsApp
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-secondary/80 cta-desc">
            Tell us your preferred branch, day and time. A request is not a confirmed booking — the team will reply to agree a slot that suits you. Nothing you type is stored on this website.
          </p>
        </Reveal>

        <Reveal delay={80} className="mt-9 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button asChild variant="whatsapp" size="lg" className="hero-btn">
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

        {/* <Reveal delay={140}>
          <p className="mt-8 text-xs text-secondary/70">
            A request is not a confirmed appointment.
          </p>
        </Reveal> */}
      </Container>
    </section>
  );
}
