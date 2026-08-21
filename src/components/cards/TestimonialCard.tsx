import { Quote, Star } from "lucide-react";
import type { Testimonial } from "@/content/types";

/** Renders only verified and approved testimonials. */
export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  if (!(testimonial.verified === true && testimonial.approved === true)) return null;

  const rating = testimonial.rating;
  return (
    <figure className="flex h-full flex-col rounded-2xl border border-border bg-card p-6">
      <Quote aria-hidden="true" className="size-5 text-primary" />
      <blockquote className="mt-4 flex-1 text-sm leading-relaxed">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>
      {typeof rating === "number" ? (
        <p className="mt-4 flex items-center gap-1" aria-label={`Rated ${rating} out of 5`}>
          {Array.from({ length: 5 }).map((_, index) => (
            <Star
              key={index}
              aria-hidden="true"
              className={index < Math.round(rating) ? "size-4 fill-accent text-accent" : "size-4 text-input"}
            />
          ))}
        </p>
      ) : null}
      <figcaption className="mt-4 border-t border-border pt-4 text-xs text-muted-foreground">
        <span className="font-medium text-ink">{testimonial.patientDisplayName}</span>
        {testimonial.treatment ? <> &middot; {testimonial.treatment}</> : null}
        {testimonial.reviewDate ? <> &middot; {testimonial.reviewDate}</> : null}
        {testimonial.source ? (
          <>
            {" "}
            &middot;{" "}
            {testimonial.sourceUrl ? (
              <a
                href={testimonial.sourceUrl}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="underline underline-offset-2"
              >
                {testimonial.source}
              </a>
            ) : (
              testimonial.source
            )}
          </>
        ) : null}
      </figcaption>
    </figure>
  );
}
