import { Camera, ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import type { GalleryItem } from "@/content/types";

const ratioClass: Record<GalleryItem["aspectRatio"], string> = {
  "4/3": "aspect-[4/3]",
  "3/2": "aspect-[3/2]",
  "16/9": "aspect-[16/9]",
  "1/1": "aspect-square",
};

/** Subtle, honest disclosure for illustrative (non-Dent Arena) imagery. */
export function RepresentativeBadge({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "pointer-events-none absolute bottom-3 left-3 rounded-full bg-ink/70 px-3 py-1 text-[11px] font-medium tracking-wide text-secondary backdrop-blur-sm",
        className,
      )}
    >
      Representative image
    </span>
  );
}

function PhotoPlaceholder({ item }: { item: GalleryItem }) {
  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-center gap-3 border border-dashed border-primary/30 bg-[linear-gradient(135deg,var(--color-surface-soft),var(--color-card))] px-5 text-center",
        ratioClass[item.aspectRatio],
      )}
      role="img"
      aria-label={`${item.title} — photograph to be supplied by the clinic`}
    >
      <span className="flex size-11 items-center justify-center rounded-full bg-primary/10 text-primary">
        <Camera aria-hidden="true" className="size-5" />
      </span>
      <span className="font-display text-sm font-semibold text-ink">{item.title}</span>
      <span className="text-xs text-muted-foreground">
        Photograph to be supplied · {item.aspectRatio} · {item.recommendedSize}
      </span>
    </div>
  );
}

export function GalleryCard({ item }: { item: GalleryItem }) {
  const image = item.image;
  // Authentic clinic photography is only ever rendered once it is approved.
  const approved = item.imageType !== "authentic" || item.approved === true;
  const showImage = item.imageType !== "placeholder" && image && approved;
  return (
    <figure className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card">
      <div className="relative overflow-hidden ">
        {showImage ? (
          <>
            <img
              src={image.src}
              alt={image.alt}
              width="300"
              height="300"
              loading="lazy"
              decoding="async"
              // sizes="((min-width: 640px) 50vw, 100vw)"
              className={cn(
                "gallery-image transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100",
                ratioClass[item.aspectRatio],
              )}
            />
            {item.imageType === "generic" ? <RepresentativeBadge /> : null}
          </>
        ) : (
          <PhotoPlaceholder item={item} />
        )}
      </div>
      <figcaption className="mt-auto px-4 py-3">
        <p className="font-display text-sm font-semibold text-ink">{item.title}</p>
        <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
          {item.imageType === "generic"
            ? "Illustrative image of a modern dental environment — not a photograph of Dent Arena."
            : item.imageType === "authentic"
              ? (item.caption ?? "Photographed at Dent Arena.")
              : (item.note ?? "Awaiting clinic photography.")}
        </p>
      </figcaption>
    </figure>
  );
}

export function GalleryGrid({ items }: { items: GalleryItem[] }) {
  if (items.length === 0) {
    return (
      <p className="flex items-center gap-2 text-sm text-muted-foreground">
        <ImageIcon aria-hidden="true" className="size-4" /> No images in this category yet.
      </p>
    );
  }
  return (
    <ul className="grid auto-rows-fr gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <li key={item.id}>
          <GalleryCard item={item} />
        </li>
      ))}
    </ul>
  );
}
