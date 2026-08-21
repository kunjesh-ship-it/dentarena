import { defineTool } from "@lovable.dev/mcp-js";
import { locations, formatAddress } from "@/content/locations";
import { json, value } from "../format";

export default defineTool({
  name: "list_locations",
  title: "List branches",
  description:
    "Both Dent Arena branches (Bhatar and Vesu) with address, description, directions link, and which details are still awaiting confirmation from the clinic.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () =>
    json({
      locations: locations.map((l) => ({
        id: l.id,
        name: l.name,
        address: formatAddress(l),
        addressLines: l.addressLines,
        locality: l.locality,
        region: l.region,
        postalCode: value(l.postalCode),
        phone: l.phone,
        description: l.description,
        landmark: value(l.landmark),
        parking: value(l.parking),
        accessibility: value(l.accessibility),
        openingHours: value(l.hours),
        directionsUrl: l.directionsUrl,
        doctorSlugs: l.doctorSlugs,
        pageUrl: `/locations/${l.slug}`,
      })),
    }),
});
