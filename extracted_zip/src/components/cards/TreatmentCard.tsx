import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { categoryLabels } from "@/content/treatments";
import { SmileDots } from "@/components/common/Motifs";
import { cn } from "@/lib/utils";
import type { Treatment } from "@/content/types";

export function TreatmentCard({
  treatment,
  featured = false,
}: {
  treatment: Treatment;
  featured?: boolean | undefined;
}) {
  return (
    <article
      className={cn(
        "group relative flex h-full flex-col rounded-[2rem] border border-border bg-card p-6 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-soft sm:p-7",
        featured && "bg-secondary/50",
      )}
    >
      <div className="flex items-center gap-3">
        <SmileDots className="shrink-0" />
        <p className="eyebrow">{categoryLabels[treatment.category]}</p>
      </div>

      <h3 className={cn("mt-4 display-3", featured && "sm:text-3xl")}>
        <Link
          to="/treatments/$slug"
          params={{ slug: treatment.slug }}
          className="after:absolute after:inset-0 after:content-['']"
        >
          {treatment.title}
        </Link>
      </h3>

      <p className={cn("mt-3 text-sm leading-relaxed", featured && "measure sm:text-base")}>
        {treatment.summary}
      </p>

      <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary">
        Read about this treatment
        <ArrowRight
          aria-hidden="true"
          className="size-4 transition-transform duration-200 group-hover:translate-x-1"
        />
      </span>
    </article>
  );
}
