import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/layout/Container";
import { PageHeader } from "@/components/common/PageHeader";
import { ArticleCard } from "@/components/cards/ArticleCard";
import { EmptyState } from "@/components/common/Placeholders";
import { publishedArticles } from "@/content/articles";
import { breadcrumbSchema, jsonLd, pageMeta } from "@/lib/seo";

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Dental health articles", path: "/articles" },
];

export const Route = createFileRoute("/articles/")({
  head: () => ({
    ...pageMeta({
      title: "Dental Health Articles",
      description:
        "Practical dental health guidance from Dent Arena in Surat — brushing, gum care, children's teeth, sensitivity and what to do in a dental emergency.",
      path: "/articles",
    }),
    scripts: [jsonLd(breadcrumbSchema(crumbs))],
  }),
  component: ArticlesIndexPage,
});

function ArticlesIndexPage() {
  return (
    <>
      <PageHeader
        eyebrow="Dental health"
        title="Articles and everyday advice"
        description="Short, evidence-informed reads on looking after your teeth between visits. General information only — always ask your dentist about your own situation."
        breadcrumbs={crumbs}
      />
      <Section>
        {publishedArticles.length > 0 ? (
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {publishedArticles.map((article) => (
              <li key={article.slug}>
                <ArticleCard article={article} />
              </li>
            ))}
          </ul>
        ) : (
          <EmptyState
            title="Articles coming soon"
            description="We are preparing dental health guides reviewed by the clinical team."
          />
        )}
      </Section>
    </>
  );
}
