import type { ReactNode } from "react";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs, type Crumb } from "./Breadcrumbs";

export function PageHeader({
  eyebrow,
  title,
  description,
  breadcrumbs,
  children,
  className = "",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  // className={`border-b border-border bg-surface-soft ${className}`}
  breadcrumbs?: Crumb[];
  children?: ReactNode;
  className?: string;
}) {
  return (
    // <div className="border-b border-border bg-surface-soft ">
    <div className={`border-b border-border bg-surface-soft ${className} treatments-hero-section`}>
      <Container className="py-10 sm:py-14">
        {breadcrumbs ? <Breadcrumbs items={breadcrumbs} /> : null}
        <div className="mt-6 max-w-3xl">
          {eyebrow ? <p className="eyebrow mb-3">{eyebrow}</p> : null}
          <h1 className="text-3xl leading-tight sm:text-4xl md:text-5xl treatments-hero-title">{title}</h1>
          {description ? (
            <p className="mt-5 text-base leading-relaxed sm:text-lg treatments-hero-description">{description}</p>
          ) : null}
          {children ? <div className="mt-7 hero-btn-section">{children}</div> : null}
        </div>
      </Container>
    </div>
  );
}
