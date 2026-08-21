import { ShieldCheck } from "lucide-react";
import { confirmed, isPlaceholder, type Maybe } from "@/content/types";

export function MedicalReviewer({
  reviewedBy,
  lastReviewed,
}: {
  reviewedBy: Maybe<string>;
  lastReviewed: Maybe<string>;
}) {
  const reviewer = confirmed(reviewedBy);
  const date = confirmed(lastReviewed);

  return (
    <aside className="rounded-2xl border border-border bg-card p-5 text-sm">
      <p className="flex items-center gap-2 font-display font-semibold text-ink">
        <ShieldCheck aria-hidden="true" className="size-4 text-primary" />
        Medical review
      </p>
      <dl className="mt-3 space-y-2">
        <div>
          <dt className="text-xs tracking-wide text-muted-foreground uppercase">Reviewed by</dt>
          <dd>
            {reviewer ?? (
              <span className="text-muted-foreground">
                Awaiting confirmation
                {isPlaceholder(reviewedBy) ? ` \u2014 ${reviewedBy.label}` : ""}
              </span>
            )}
          </dd>
        </div>
        <div>
          <dt className="text-xs tracking-wide text-muted-foreground uppercase">Last reviewed</dt>
          <dd>{date ?? <span className="text-muted-foreground">Awaiting confirmation</span>}</dd>
        </div>
      </dl>
      <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
        This page is general information and does not replace a dental examination.
      </p>
    </aside>
  );
}
