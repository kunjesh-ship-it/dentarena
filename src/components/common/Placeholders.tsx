import type { ReactNode } from "react";
import { Info } from "lucide-react";
import type { Placeholder } from "@/content/types";

/**
 * Visible, honest marker for content the clinic has not yet confirmed.
 * It never renders invented information.
 */
export function PendingNote({ item, className }: { item: Placeholder; className?: string }) {
  return (
    <p
      className={`inline-flex items-start gap-2 rounded-lg bg-secondary px-3 py-2 text-xs text-muted-foreground ${className ?? ""}`}
    >
      <Info aria-hidden="true" className="mt-0.5 size-3.5 shrink-0 text-primary" />
      <span>
        <span className="font-medium text-ink">To be confirmed:</span> {item.label}
      </span>
    </p>
  );
}

export function EmptyState({
  title,
  description,
  action,
}: {
  title: string;
  description: string;
  action?: ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-dashed border-input bg-card px-6 py-14 text-center">
      <h2 className="font-display text-lg font-semibold text-ink">{title}</h2>
      <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed">{description}</p>
      {action ? <div className="mt-6 flex justify-center">{action}</div> : null}
    </div>
  );
}
