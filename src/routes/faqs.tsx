import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { Section } from "@/components/layout/Container";
import { PageHeader } from "@/components/common/PageHeader";
import { FaqAccordion } from "@/components/common/FaqAccordion";
import { WhatsAppCtaSection } from "@/components/common/WhatsAppCta";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { faqCategories, generalFaqs } from "@/content/faqs";
import { breadcrumbSchema, faqSchema, jsonLd, pageMeta } from "@/lib/seo";

const crumbs = [
  { name: "Home", path: "/" },
  { name: "FAQs", path: "/faqs" },
];

export const Route = createFileRoute("/faqs")({
  head: () => ({
    ...pageMeta({
      title: "Dental FAQs",
      description:
        "Answers to common questions about appointments, check-ups, root canals, implants, braces, whitening, aftercare and visiting Dent Arena in Surat.",
      path: "/faqs",
    }),
    // Schema is generated from exactly the FAQ array rendered on this page.
    scripts: [jsonLd(breadcrumbSchema(crumbs)), jsonLd(faqSchema(generalFaqs))],
  }),
  component: FaqsPage,
});

function FaqsPage() {
  const [query, setQuery] = useState("");
  const [topic, setTopic] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return generalFaqs.filter((faq) => {
      const matchesTopic = !topic || faq.topic === topic;
      const matchesQuery =
        !q ||
        faq.question.toLowerCase().includes(q) ||
        faq.answer.toLowerCase().includes(q);
      return matchesTopic && matchesQuery;
    });
  }, [query, topic]);

  const groups = faqCategories
    .map((category) => ({
      category,
      faqs: filtered.filter((faq) => faq.topic === category.id),
    }))
    .filter((group) => group.faqs.length > 0);

  return (
    <>
      <PageHeader
        eyebrow="Questions"
        title="Frequently asked questions"
        description="General, educational information about dental care and about visiting Dent Arena. It is not a diagnosis or personal advice — what is right for you depends on a clinical examination."
        breadcrumbs={crumbs}
      />

      <Section>
        <div className="grid gap-4 md:grid-cols-1 md:items-center">
          <div className="relative">
            <Search
              aria-hidden="true"
              className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground"
            />
            <Input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search questions"
              aria-label="Search frequently asked questions"
              className="pl-9"
            />
          </div>
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
            <Button
              type="button"
              size="sm"
              variant={topic === null ? "default" : "outline"}
              aria-pressed={topic === null}
              onClick={() => setTopic(null)}
            >
              All
            </Button>
            {faqCategories.map((category) => (
              <Button
                key={category.id}
                type="button"
                size="sm"
                variant={topic === category.id ? "default" : "outline"}
                aria-pressed={topic === category.id}
                onClick={() => setTopic(category.id)}
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>

        <p aria-live="polite" className="mt-4 text-sm text-muted-foreground">
          Showing {filtered.length} of {generalFaqs.length} questions
        </p>

        {groups.length > 0 ? (
          <div className="mt-8 space-y-12">
            {groups.map(({ category, faqs }) => (
              <section key={category.id} aria-labelledby={`faq-${category.id}`}>
                <h2 id={`faq-${category.id}`} className="text-2xl">
                  {category.label}
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">{category.description}</p>
                <div className="mt-4">
                  <FaqAccordion faqs={faqs} idPrefix={category.id} />
                </div>
              </section>
            ))}
          </div>
        ) : (
          <p className="mt-10 rounded-2xl border border-dashed border-input bg-card px-6 py-12 text-center text-sm text-muted-foreground">
            No questions match that search. Try a different word, or{" "}
            <Link to="/contact" className="font-medium text-primary underline underline-offset-4">
              contact the clinic
            </Link>
            .
          </p>
        )}

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-surface-soft p-6">
            <h2 className="text-xl">Looking for treatment detail?</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Each treatment page explains what the procedure involves, its benefits, limitations
              and aftercare.
            </p>
            <p className="mt-4 text-sm">
              <Link
                to="/treatments"
                className="font-medium text-primary underline underline-offset-4"
              >
                Browse all treatments
              </Link>
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6">
            <h2 className="text-xl">Still have a question?</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Send it with your appointment request and the team will answer before you attend.
            </p>
            <p className="mt-4 text-sm">
              <Link
                to="/book-appointment"
                className="font-medium text-primary underline underline-offset-4"
              >
                Request an appointment
              </Link>
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
