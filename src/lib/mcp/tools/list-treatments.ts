import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { publishedTreatments, categoryLabels } from "@/content/treatments";
import { json } from "../format";

export default defineTool({
  name: "list_treatments",
  title: "List treatments",
  description:
    "List the dental treatments Dent Arena publishes, optionally filtered by category, branch or a free-text query. Returns slugs for use with get_treatment.",
  inputSchema: {
    category: z
      .enum(["restorative", "cosmetic", "orthodontics", "preventive", "surgical", "specialist"])
      .optional()
      .describe("Filter by treatment category."),
    branch: z.enum(["bhatar", "vesu"]).optional().describe("Only treatments available at this branch."),
    query: z.string().optional().describe("Free-text match against title and summary."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ category, branch, query }) => {
    const q = query?.trim().toLowerCase();
    const items = publishedTreatments
      .filter((t) => (category ? t.category === category : true))
      .filter((t) => (branch ? t.availableAt.includes(branch) : true))
      .filter((t) =>
        q ? `${t.title} ${t.summary}`.toLowerCase().includes(q) : true,
      )
      .map((t) => ({
        slug: t.slug,
        title: t.title,
        category: t.category,
        categoryLabel: categoryLabels[t.category],
        summary: t.summary,
        availableAt: t.availableAt,
        pageUrl: `/treatments/${t.slug}`,
      }));
    return json({ count: items.length, treatments: items });
  },
});
