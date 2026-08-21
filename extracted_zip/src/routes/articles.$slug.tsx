import { createFileRoute, notFound } from "@tanstack/react-router";
import { Section } from "@/components/layout/Container";
import { PageHeader } from "@/components/common/PageHeader";
import { MedicalReviewer } from "@/components/common/MedicalReviewer";
import { TreatmentCard } from "@/components/cards/TreatmentCard";
import { WhatsAppCtaSection } from "@/components/common/WhatsAppCta";
import { getArticle } from "@/content/articles";
import { getTreatments } from "@/content/treatments";
import { confirmed } from "@/content/types";
import { articleSchema, breadcrumbSchema, jsonLd, pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/articles/$slug")({
  loader: ({ params }) => {
    const article = getArticle(params.slug);
    if (!article || !article.published) throw notFound();
    return { article };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Article not found | Dent Arena" }, { name: "robots", content: "noindex" }],
      };
    }
    const { article } = loaderData;
    const path = `/articles/${params.slug}`;
    const datePublished = confirmed(article.datePublished);
    return {
      ...pageMeta({
        title: article.title,
        description: article.description,
        path,
        type: "article",
      }),
      scripts: [
        jsonLd(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Articles", path: "/articles" },
            { name: article.title, path },
          ]),
        ),
        jsonLd(
          articleSchema({
            headline: article.title,
            description: article.description,
            path,
            ...(datePublished ? { datePublished } : {}),
          }),
        ),
      ],
    };
  },
  component: ArticleDetailPage,
});

function ArticleDetailPage() {
  const { article } = Route.useLoaderData();
  const related = getTreatments(article.relatedTreatmentSlugs);

  return (
    <>
      <PageHeader
        eyebrow={`${article.topic} · ${article.readingTime}`}
        title={article.title}
        description={article.description}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Articles", path: "/articles" },
          { name: article.title, path: `/articles/${article.slug}` },
        ]}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.7fr)_minmax(0,1fr)]">
          <article className="space-y-10">
            {article.body.map((block) => (
              <div key={block.heading}>
                <h2 className="text-2xl">{block.heading}</h2>
                <div className="mt-4 space-y-4 leading-relaxed">
                  {block.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                {block.list ? (
                  <ul className="mt-5 space-y-2">
                    {block.list.map((item) => (
                      <li key={item} className="text-sm leading-relaxed">
                        &bull; {item}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ))}
            <p className="rounded-2xl border border-border bg-surface-soft p-5 text-sm leading-relaxed">
              This article is general information and is not a substitute for an examination. If
              something in your mouth is painful, changing or worrying you, please book a check-up.
            </p>
          </article>

          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            <MedicalReviewer reviewedBy={article.reviewedBy} lastReviewed={article.lastReviewed} />
          </aside>
        </div>
      </Section>

      {related.length > 0 ? (
        <Section tone="soft" labelledBy="related-care">
          <h2 id="related-care" className="text-2xl sm:text-3xl">
            Related treatments
          </h2>
          <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((treatment) => (
              <li key={treatment.slug}>
                <TreatmentCard treatment={treatment} />
              </li>
            ))}
          </ul>
        </Section>
      ) : null}

      <WhatsAppCtaSection context={article.title} />
    </>
  );
}
