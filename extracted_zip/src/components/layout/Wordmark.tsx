import { Link } from "@tanstack/react-router";
import { clinic } from "@/content/clinic";
import { cn } from "@/lib/utils";

export function Wordmark({
  className,
  tone = "default",
}: {
  className?: string;
  tone?: "default" | "inverse";
}) {
  return (
    <Link
      to="/"
      className={cn("inline-flex flex-col leading-none", className)}
      aria-label={`${clinic.name} \u2014 home`}
    >
      <span
        className={cn(
          "font-display text-xl font-extrabold tracking-[0.14em] uppercase sm:text-2xl",
          tone === "inverse" ? "text-secondary" : "text-primary",
        )}
      >
        Dent<span className={tone === "inverse" ? "text-accent" : "text-accent"}>&nbsp;</span>Arena
      </span>
      <span
        className={cn(
          "mt-1 text-[0.6rem] tracking-[0.24em] uppercase",
          tone === "inverse" ? "text-secondary/70" : "text-muted-foreground",
        )}
      >
        {clinic.tagline}
      </span>
    </Link>
  );
}
