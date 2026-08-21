/**
 * Shared content types for Dent Arena.
 *
 * Anything not yet verified by the clinic is represented with `placeholder()`
 * so that it is never rendered as fake content and never emitted in JSON-LD.
 */

export type Placeholder = {
  readonly __placeholder: true;
  /** Human-readable description of what still needs to be confirmed. */
  label: string;
};

/** Marks a value as awaiting confirmation from the clinic. */
export function placeholder(label: string): Placeholder {
  return { __placeholder: true, label };
}

export type Maybe<T> = T | Placeholder;

export function isPlaceholder(value: unknown): value is Placeholder {
  return (
    typeof value === "object" &&
    value !== null &&
    (value as Placeholder).__placeholder === true
  );
}

/** Returns the value when confirmed, otherwise undefined. */
export function confirmed<T>(value: Maybe<T> | undefined): T | undefined {
  if (value === undefined || isPlaceholder(value)) return undefined;
  return value;
}

export type ClinicImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  /** True while awaiting genuine Dent Arena photography. */
  representative?: boolean;
  caption?: string;
};

export type OpeningHours = {
  days: string;
  hours: string;
};

export type Location = {
  id: "bhatar" | "vesu";
  slug: string;
  name: string;
  shortName: string;
  addressLines: string[];
  locality: string;
  region: string;
  postalCode: Maybe<string>;
  phone: string;
  description: string;
  landmark: Maybe<string>;
  parking: Maybe<string>;
  accessibility: Maybe<string>;
  hours: Maybe<OpeningHours[]>;
  mapEmbedUrl: Maybe<string>;
  directionsUrl: string;
  geo: Maybe<{ lat: number; lng: number }>;
  doctorSlugs: string[];
  treatmentSlugs: Maybe<string[]>;
  photos: ClinicImage[];
};

export type Doctor = {
  slug: string;
  published: boolean;
  name: string;
  role: Maybe<string>;
  qualifications: Maybe<string[]>;
  registrationNumber: Maybe<string>;
  experience: Maybe<string>;
  bio: Maybe<string[]>;
  focusAreas: Maybe<string[]>;
  languages: Maybe<string[]>;
  locationIds: Location["id"][];
  photo: Maybe<ClinicImage>;
  /**
   * Treatments this clinician personally provides. Left as a placeholder until
   * the clinic confirms it; pages then fall back to branch-level availability.
   */
  treatmentSlugs: Maybe<string[]>;
};

export type Faq = {
  question: string;
  answer: string;
  /** Optional grouping, e.g. "visits", "payments". */
  topic?: string;
};

export type Treatment = {
  slug: string;
  /** Set to false to keep a treatment out of the site and the sitemap. */
  published: boolean;
  title: string;
  category: "restorative" | "cosmetic" | "orthodontics" | "preventive" | "surgical" | "specialist";
  summary: string;
  metaDescription: string;
  featured?: boolean;
  whatItIs: string;
  whoNeedsIt: string[];
  signs: string[];
  howItWorks: { step: string; detail: string }[];
  visitsAndRecovery: string;
  benefits: string[];
  limitations: string[];
  risks: string[];
  aftercare: string[];
  whenToContact: string[];
  faqs: Faq[];
  relatedSlugs: string[];
  availableAt: Location["id"][];
  reviewedBy: Maybe<string>;
  lastReviewed: Maybe<string>;
};

export type Article = {
  slug: string;
  published: boolean;
  title: string;
  description: string;
  topic: string;
  readingTime: string;
  datePublished: Maybe<string>;
  body: { heading: string; paragraphs: string[]; list?: string[] }[];
  relatedTreatmentSlugs: string[];
  reviewedBy: Maybe<string>;
  lastReviewed: Maybe<string>;
};

export type ImageType = "authentic" | "generic" | "placeholder";

/** Categories that specifically require genuine Dent Arena photography. */
export type GalleryCategory =
  | "bhatar-exterior"
  | "vesu-exterior"
  | "exterior"
  | "signage"
  | "reception"
  | "treatment-room"
  | "equipment"
  | "sterilisation"
  | "consultation"
  | "team";

export type GalleryItem = {
  id: string;
  /** Short label shown on the card. */
  title: string;
  category: GalleryCategory;
  /** Controls disclosure and rendering: generic images are always disclosed. */
  imageType: ImageType;
  /** Tailwind aspect-ratio class, also used as the recommended ratio label. */
  aspectRatio: "4/3" | "3/2" | "16/9" | "1/1";
  /** Recommended upload size, shown on placeholder cards. */
  recommendedSize: string;
  /** Only present for authentic or generic items. */
  image?: ClinicImage;
  /** Short public caption. */
  caption?: string;
  /** Branch the photograph belongs to, when confirmed. */
  branchId?: Location["id"];
  /** Authentic imagery is only rendered publicly when approved is true. */
  approved?: boolean;
  /** Ascending sort order within the gallery. */
  displayOrder?: number;
  /** Guidance for whoever supplies the real photograph. */
  note?: string;
};

/**
 * Before-and-after case study. A case is only ever rendered publicly when
 * consent and content approval are both recorded and both images exist.
 * The check lives in `publishableCases()` and in the rendering component.
 */
export type CaseStudy = {
  id: string;
  title: string;
  treatment: string;
  summary: string;
  beforeImage?: ClinicImage;
  afterImage?: ClinicImage;
  doctorId?: string;
  branchId?: Location["id"];
  patientConsentApproved: boolean;
  contentApproved: boolean;
  featured: boolean;
  displayOrder: number;
};

export type Testimonial = {
  id: string;
  patientDisplayName: string;
  quote: string;
  rating?: number;
  treatment?: string;
  source?: string;
  sourceUrl?: string;
  reviewDate?: string;
  verified: boolean;
  approved: boolean;
  featured: boolean;
};
