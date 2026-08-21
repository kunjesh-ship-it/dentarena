import { defineTool } from "@lovable.dev/mcp-js";
import { clinic } from "@/content/clinic";
import { locations, formatAddress } from "@/content/locations";
import { json, value } from "../format";

export default defineTool({
  name: "get_clinic_info",
  title: "Get clinic info",
  description:
    "Public contact details for Dent Arena in Surat: name, tagline, phone, WhatsApp number, social links and a summary of both branches.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () =>
    json({
      name: clinic.name,
      tagline: clinic.tagline,
      intro: clinic.intro,
      city: clinic.city,
      region: clinic.region,
      country: clinic.country,
      phone: clinic.phoneDisplay,
      whatsapp: `https://wa.me/${clinic.whatsappNumber}`,
      email: value(clinic.email),
      legalName: value(clinic.legalName),
      social: {
        instagram: value(clinic.social.instagram),
        facebook: value(clinic.social.facebook),
        googleBusiness: value(clinic.social.googleBusiness),
      },
      branches: locations.map((l) => ({
        id: l.id,
        name: l.name,
        address: formatAddress(l),
        directionsUrl: l.directionsUrl,
      })),
    }),
});
