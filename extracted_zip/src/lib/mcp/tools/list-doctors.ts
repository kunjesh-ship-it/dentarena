import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { publishedDoctors, getDoctor } from "@/content/doctors";
import { getTreatmentsForDoctor } from "@/content/treatments";
import { json, notFound, value } from "../format";

export default defineTool({
  name: "list_doctors",
  title: "List dentists",
  description:
    "Dentists published on the Dent Arena site. Qualifications, registration numbers and experience are returned only when confirmed by the clinic; otherwise a pending marker is returned. Pass a slug for one dentist's full profile.",
  inputSchema: {
    slug: z.string().optional().describe("Optional doctor slug, e.g. dr-mayank-shah."),
    branch: z.enum(["bhatar", "vesu"]).optional().describe("Only dentists seeing patients at this branch."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ slug, branch }) => {
    const shape = (d: (typeof publishedDoctors)[number]) => ({
      slug: d.slug,
      name: d.name,
      role: value(d.role),
      qualifications: value(d.qualifications),
      registrationNumber: value(d.registrationNumber),
      experience: value(d.experience),
      focusAreas: value(d.focusAreas),
      languages: value(d.languages),
      bio: value(d.bio),
      branches: d.locationIds,
      treatments: getTreatmentsForDoctor(d).map((t) => ({ slug: t.slug, title: t.title })),
      pageUrl: `/doctors/${d.slug}`,
    });

    if (slug) {
      const doctor = getDoctor(slug);
      if (!doctor) return notFound(`No published dentist with slug "${slug}".`);
      return json(shape(doctor));
    }
    const items = publishedDoctors
      .filter((d) => (branch ? d.locationIds.includes(branch) : true))
      .map(shape);
    return json({ count: items.length, doctors: items });
  },
});
