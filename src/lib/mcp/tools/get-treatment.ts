import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { getTreatment, categoryLabels } from "@/content/treatments";
import { getDoctorsForTreatment } from "@/content/doctors";
import { json, notFound, value } from "../format";

export default defineTool({
  name: "get_treatment",
  title: "Get treatment details",
  description:
    "Full educational detail for one treatment: what it is, who needs it, signs, steps, recovery, benefits, limitations, risks, aftercare, FAQs and related treatments. No prices or outcome guarantees exist in this data.",
  inputSchema: { slug: z.string().min(1).describe("Treatment slug, e.g. root-canal-treatment.") },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ slug }) => {
    const t = getTreatment(slug);
    if (!t) return notFound(`No published treatment with slug "${slug}". Use list_treatments for valid slugs.`);
    return json({
      slug: t.slug,
      title: t.title,
      category: t.category,
      categoryLabel: categoryLabels[t.category],
      summary: t.summary,
      whatItIs: t.whatItIs,
      whoNeedsIt: t.whoNeedsIt,
      signs: t.signs,
      howItWorks: t.howItWorks,
      visitsAndRecovery: t.visitsAndRecovery,
      benefits: t.benefits,
      limitations: t.limitations,
      risks: t.risks,
      aftercare: t.aftercare,
      whenToContact: t.whenToContact,
      faqs: t.faqs,
      relatedSlugs: t.relatedSlugs,
      availableAt: t.availableAt,
      dentists: getDoctorsForTreatment(t).map((d) => ({ slug: d.slug, name: d.name })),
      reviewedBy: value(t.reviewedBy),
      lastReviewed: value(t.lastReviewed),
      pageUrl: `/treatments/${t.slug}`,
    });
  },
});
