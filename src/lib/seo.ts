import { clinic } from "@/content/clinic";
import { locations } from "@/content/locations";
import { confirmed, type Faq } from "@/content/types";

type MetaInput = {
  title: string;
  description: string;
  /** Absolute path beginning with "/". */
  path: string;
  type?: "website" | "article" | "profile";
  noindex?: boolean;
};

/** Per-route head meta. Canonical is relative until a project domain is set. */
export function pageMeta({ title, description, path, type = "website", noindex }: MetaInput) {
  const fullTitle = title.includes(clinic.name) ? title : `${title} | ${clinic.name}`;
  const meta = [
    { title: fullTitle },
    { name: "description", content: description },
    { property: "og:title", content: fullTitle },
    { property: "og:description", content: description },
    { property: "og:type", content: type },
    { property: "og:url", content: path },
    { property: "og:site_name", content: clinic.name },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: fullTitle },
    { name: "twitter:description", content: description },
  ];
  if (noindex) meta.push({ name: "robots", content: "noindex" });
  return {
    meta,
    links: [{ rel: "canonical", href: path }],
  };
}

export function jsonLd(data: Record<string, unknown>) {
  return { type: "application/ld+json", children: JSON.stringify(data) };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: clinic.name,
    slogan: clinic.tagline,
    telephone: clinic.phoneE164,
    areaServed: `${clinic.city}, ${clinic.region}, ${clinic.country}`,
    department: locations.map((l) => ({ "@type": "Dentist", name: l.name })),
  };
}

export function locationSchema(id: string) {
  const location = locations.find((l) => l.id === id);
  if (!location) return null;
  const postalCode = confirmed(location.postalCode);
  const geo = confirmed(location.geo);
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: location.name,
    parentOrganization: { "@type": "Organization", name: clinic.name },
    telephone: clinic.phoneE164,
    address: {
      "@type": "PostalAddress",
      streetAddress: location.addressLines.join(", "),
      addressLocality: location.locality,
      addressRegion: location.region,
      addressCountry: "IN",
      ...(postalCode ? { postalCode } : {}),
    },
    hasMap: location.directionsUrl,
  };
  if (geo) schema["geo"] = { "@type": "GeoCoordinates", latitude: geo.lat, longitude: geo.lng };
  return schema;
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.path,
    })),
  };
}

export function faqSchema(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

export function articleSchema(input: {
  headline: string;
  description: string;
  path: string;
  datePublished?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.headline,
    description: input.description,
    mainEntityOfPage: input.path,
    publisher: { "@type": "Organization", name: clinic.name },
    ...(input.datePublished ? { datePublished: input.datePublished } : {}),
  };
}

export function personSchema(input: {
  name: string;
  path: string;
  jobTitle?: string;
  worksFor?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: input.name,
    url: input.path,
    ...(input.jobTitle ? { jobTitle: input.jobTitle } : {}),
    worksFor: { "@type": "Organization", name: input.worksFor ?? clinic.name },
  };
}
