import { createFileRoute, Link } from "@tanstack/react-router";
import { Section } from "@/components/layout/Container";
import { PageHeader } from "@/components/common/PageHeader";
import { GalleryGrid } from "@/components/common/Gallery";
import { WhatsAppCtaSection } from "@/components/common/WhatsAppCta";
import { galleryItems } from "@/content/media";
import { breadcrumbSchema, jsonLd, pageMeta } from "@/lib/seo";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

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

  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handlePrev = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : authentic.length - 1));
  }, [selectedIndex, authentic.length]);

  const handleNext = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev !== null && prev < authentic.length - 1 ? prev + 1 : 0));
  }, [selectedIndex, authentic.length]);

  const handleClose = useCallback(() => {
    setIsOpen(false);
    setSelectedIndex(null);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      else if (e.key === "ArrowRight") handleNext();
      else if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, handlePrev, handleNext, handleClose]);

  return (
    <>
      <PageHeader
        eyebrow="Clinic gallery"
        title="Inside the clinic"
        description="Photographs taken at Dent Arena, alongside slots reserved for further clinic photography. Any illustrative image is labelled as such."
        breadcrumbs={crumbs}
      />

      <Section>
        {/* <div className="rounded-2xl border border-border bg-surface-soft px-5 py-4 text-sm leading-relaxed text-muted-foreground">
          <span className="font-medium text-ink">About these images:</span> images marked
          &ldquo;Representative image&rdquo; illustrate a modern dental environment in general. They
          are not photographs of Dent Arena, its branches, team or patients.
        </div> */}

        {authentic.length > 0 ? (
          <div className="mt-10">
            <h2 className="text-2xl">Dent Arena photographs</h2>
            <div className="mt-6">
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {authentic.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setSelectedIndex(index);
                      setIsOpen(true);
                    }}
                    data-cursor="image"
                    className="group overflow-hidden rounded-2xl border border-border bg-card text-left focus-visible:outline-2 focus-visible:outline-primary cursor-pointer aspect-square relative w-full"
                  >
                    {item.image && (
                      <img
                        src={item.image.src}
                        alt={item.image.alt}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ) : null}

        {/* {pending.length > 0 ? (
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
        </p> */}
      </Section>

      <WhatsAppCtaSection context="Clinic gallery" />

      <AnimatePresence>
        {isOpen && selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/90 p-4 md:p-10 backdrop-blur-sm select-none"
            onClick={handleClose}
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 z-50 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer"
              aria-label="Close gallery view"
              data-cursor="button"
            >
              <X className="size-6" />
            </button>

            {/* Slider Content Wrapper */}
            <div
              className="relative flex h-full w-full max-w-5xl items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Previous Button */}
              <button
                onClick={handlePrev}
                className="absolute left-2 md:left-4 z-40 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer"
                aria-label="Previous image"
                data-cursor="button"
              >
                <ChevronLeft className="size-6 md:size-8" />
              </button>

              {/* Next Button */}
              <button
                onClick={handleNext}
                className="absolute right-2 md:right-4 z-40 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer"
                aria-label="Next image"
                data-cursor="button"
              >
                <ChevronRight className="size-6 md:size-8" />
              </button>

              {/* Active Image */}
              <div className="flex max-h-[80vh] max-w-[85vw] flex-col items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={selectedIndex}
                    src={authentic[selectedIndex]?.image?.src}
                    alt={authentic[selectedIndex]?.image?.alt}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="max-h-[70vh] max-w-full rounded-lg object-contain shadow-2xl"
                  />
                </AnimatePresence>

                {/* Caption */}
                {authentic[selectedIndex]?.title && (
                  <div className="mt-4 text-center text-white/90">
                    <p className="font-display text-base font-semibold">{authentic[selectedIndex]?.title}</p>
                    {authentic[selectedIndex]?.caption && (
                      <p className="mt-1 text-xs text-white/60">{authentic[selectedIndex]?.caption}</p>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Pagination */}
            <div className="absolute bottom-4 text-sm text-white/50">
              {selectedIndex + 1} / {authentic.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
