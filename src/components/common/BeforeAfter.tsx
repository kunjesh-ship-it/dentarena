import { useId, useState } from "react";
import { Columns2, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { CaseStudy } from "@/content/types";

/**
 * Eligibility gate. Enforced here as well as in the data layer so a case can
 * never be rendered publicly without consent, approval and both images.
 */
export function isCasePublishable(item: CaseStudy): boolean {
  return (
    item.patientConsentApproved === true &&
    item.contentApproved === true &&
    Boolean(item.beforeImage?.src) &&
    Boolean(item.afterImage?.src)
  );
}

function SideBySide({ item }: { item: CaseStudy }) {
  const before = item.beforeImage!;
  const after = item.afterImage!;
  return (
    <div className="grid grid-cols-2 gap-3">
      {[
        { label: "Before", image: before },
        { label: "After", image: after },
      ].map(({ label, image }) => (
        <figure key={label}>
          <img
            src={image.src}
            alt={`${label}: ${image.alt}`}
            width={image.width}
            height={image.height}
            loading="lazy"
            decoding="async"
            className="aspect-square w-full rounded-xl object-cover"
          />
          <figcaption className="mt-2 text-xs font-medium tracking-wide text-muted-foreground uppercase">
            {label}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

function SliderCompare({ item }: { item: CaseStudy }) {
  const before = item.beforeImage!;
  const after = item.afterImage!;
  const [position, setPosition] = useState(50);
  const labelId = useId();

  return (
    <div>
      <div className="relative overflow-hidden rounded-xl">
        <img
          src={before.src}
          alt={`Before: ${before.alt}`}
          width={before.width}
          height={before.height}
          loading="lazy"
          decoding="async"
          className="aspect-[4/3] w-full object-cover"
        />
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 0 0 ${position}%)` }}
        >
          <img
            src={after.src}
            alt={`After: ${after.alt}`}
            width={after.width}
            height={after.height}
            loading="lazy"
            decoding="async"
            className="aspect-[4/3] w-full object-cover"
          />
        </div>
        <span
          aria-hidden="true"
          className="absolute inset-y-0 w-0.5 bg-secondary/90"
          style={{ left: `${position}%` }}
        />
      </div>
      <label id={labelId} htmlFor={`${labelId}-range`} className="mt-4 block text-xs text-muted-foreground">
        Drag to compare before and after
      </label>
      <input
        id={`${labelId}-range`}
        type="range"
        min={0}
        max={100}
        step={1}
        value={position}
        onChange={(event) => setPosition(Number(event.target.value))}
        aria-labelledby={labelId}
        aria-label={`Before and after comparison slider for ${item.title}`}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={position}
        className="mt-2 w-full accent-[var(--color-primary)]"
      />
    </div>
  );
}

export function BeforeAfterCase({
  item,
  enableSlider = true,
  className,
}: {
  item: CaseStudy;
  enableSlider?: boolean;
  className?: string;
}) {
  const [mode, setMode] = useState<"side-by-side" | "slider">("side-by-side");
  // Hard gate: unapproved or incomplete cases never render.
  if (!isCasePublishable(item)) return null;

  return (
    <article className={cn("rounded-2xl border border-border bg-card p-5", className)}>
      <h3 className="font-display text-lg font-semibold text-ink">{item.title}</h3>
      <p className="mt-1 text-xs tracking-wide text-muted-foreground uppercase">{item.treatment}</p>
      <p className="mt-3 text-sm leading-relaxed">{item.summary}</p>

      {enableSlider ? (
        <div className="mt-4 flex gap-2">
          <Button
            type="button"
            size="sm"
            variant={mode === "side-by-side" ? "default" : "outline"}
            onClick={() => setMode("side-by-side")}
            aria-pressed={mode === "side-by-side"}
          >
            <Columns2 aria-hidden="true" /> Side by side
          </Button>
          <Button
            type="button"
            size="sm"
            variant={mode === "slider" ? "default" : "outline"}
            onClick={() => setMode("slider")}
            aria-pressed={mode === "slider"}
          >
            <SlidersHorizontal aria-hidden="true" /> Slider
          </Button>
        </div>
      ) : null}

      <div className="mt-4">
        {enableSlider && mode === "slider" ? (
          <SliderCompare item={item} />
        ) : (
          <SideBySide item={item} />
        )}
      </div>

      <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
        Published with the patient&rsquo;s written consent. Individual results vary and depend on
        clinical examination.
      </p>
    </article>
  );
}
