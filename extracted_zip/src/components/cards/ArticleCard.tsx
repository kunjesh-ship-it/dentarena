import { Link } from "@tanstack/react-router";
import type { Article } from "@/content/types";

export function ArticleCard({ article }: { article: Article }) {
  return (
    <article className="group relative flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-lift">
      <p className="eyebrow">{article.topic}</p>
      <h3 className="mt-3 font-display text-lg font-semibold text-ink">
        <Link
          to="/articles/$slug"
          params={{ slug: article.slug }}
          className="after:absolute after:inset-0 after:content-['']"
        >
          {article.title}
        </Link>
      </h3>
      <p className="mt-3 text-sm leading-relaxed">{article.description}</p>
      <p className="mt-5 text-xs text-muted-foreground">{article.readingTime}</p>
    </article>
  );
}
