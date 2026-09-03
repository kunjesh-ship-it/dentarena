import heroClinic from "@/assets/hero-clinic.jpg";
import reception from "@/assets/reception.jpg";
import treatmentRoom from "@/assets/generic-treatment-room.jpg";
import instruments from "@/assets/generic-instruments.jpg";
import sterilisation from "@/assets/generic-sterilisation.jpg";
import type { CaseStudy, ClinicImage, GalleryItem, Testimonial } from "./types";

/**
 * Imagery.
 *
 * `representative: true` marks a stand-in visual used until genuine Dent Arena
 * photography is supplied. Replace the `src` values and drop the flag.
 */
export const heroImage: ClinicImage = {
  src: heroClinic,
  alt: "Calm, softly lit dental treatment room with a teal dental chair, light wood cabinetry and a window looking onto greenery",
  width: 1600,
  height: 1200,
  representative: true,
};

export const receptionImage: ClinicImage = {
  src: reception,
  alt: "Minimal clinic reception counter in pale aqua and ivory with soft daylight",
  width: 1200,
  height: 912,
  representative: true,
};

/**
 * Clinic gallery.
 *
 * `imageType: "generic"` items are illustrative, licensed visuals of a modern
 * dental environment. They are never presented as Dent Arena photographs and
 * always carry a visible "Representative image" disclosure.
 *
 * `imageType: "placeholder"` items are reserved slots for genuine Dent Arena
 * photography. Supply an `image` and switch `imageType` to "authentic" — no
 * component changes are needed.
 */
// export const galleryItems: GalleryItem[] = [
//     {
//     id: "clinic-exterior-signboard",
//     category: "Clinic exterior",
//     imageType: "authentic",
//     approved: true,
//     displayOrder: 1,
//     aspectRatio: "16/9",
//     recommendedSize: "1200 × 1800 px",
//     image: {
//       src: "/images/gallery/img-1.jpg",
//       alt: "Dent Arena clinic signboard reading 'Dent Arena – For a healthy smile' above the glass entrance",
//       width: 778,
//       height: 693,
//       className: "object-cover",
//     },
//     note: "Branch not confirmed for this photograph.",
//   },
//   {
//     id: "entrance-door-signage",
//     title: "Clinic entrance",
//     caption: "Frosted glass entrance door carrying the Dent Arena mark.",
//     category: "signage",
//     imageType: "authentic",
//     approved: true,
//     displayOrder: 2,
//     aspectRatio: "1/1",
//     recommendedSize: "1200 × 1800 px",
//     image: {
//       src: "/images/gallery/g1.jpg",
//       alt: "Frosted glass clinic door etched with the Dent Arena tooth logo and the words 'For a healthy smile'",
//       width: 768,
//       height: 451,
//     },
//     note: "Branch not confirmed for this photograph.",
//   },
//   {
//     id: "reception",
//     title: "Reception",
//     caption: "The reception counter, with the consulting room beyond.",
//     category: "reception",
//     imageType: "authentic",
//     approved: true,
//     displayOrder: 3,
//     aspectRatio: "3/2",
//     recommendedSize: "1600 × 1200 px",
//     image: {
//       src: "/images/gallery/dent-arena-reception-counter.webp",
//       alt: "Dent Arena reception counter with a wall-mounted screen and the consulting room door alongside",
//       width: 768,
//       height: 451,
//     },
//     note: "Branch not confirmed. A higher-resolution photograph would be preferable.",
//   },
//   {
//     id: "consultation-room",
//     title: "Consultation room",
//     caption: "The desk where treatment options are discussed.",
//     category: "consultation",
//     imageType: "authentic",
//     approved: true,
//     displayOrder: 4,
//     aspectRatio: "3/2",
//     recommendedSize: "1600 × 1200 px",
//     image: {
//       src: "/images/gallery/image-3.jpg",
//       alt: "Consultation desk at Dent Arena with seating on both sides and a laptop on the counter",
//       width: 768,
//       height: 438,
//     },
//     note: "Branch not confirmed. A higher-resolution photograph would be preferable.",
//   },
//   {
//     id: "treatment-room",
//     title: "Treatment room",
//     caption: "A dental chair and chair-side unit ready for the next appointment.",
//     category: "treatment-room",
//     imageType: "authentic",
//     approved: true,
//     displayOrder: 5,
//     aspectRatio: "16/9",
//     recommendedSize: "1600 × 1200 px",
//     image: {
//       src: "/images/gallery/dent-arena-treatment-room-chair.webp",
//       alt: "Dental chair and chair-side delivery unit at Dent Arena, with a wash basin and worktop alongside",
//       width: 1131,
//       height: 560,
//     },
//     note: "Branch not confirmed for this photograph.",
//   },
//   {
//     id: "bhatar-exterior",
//     title: "Bhatar Clinic Exterior",
//     category: "bhatar-exterior",
//     imageType: "placeholder",
//     aspectRatio: "3/2",
//     recommendedSize: "1800 × 1200 px",
//     note: "Street-level photograph of the Bhatar Road entrance and signage.",
//   },
//   {
//     id: "vesu-exterior",
//     title: "Vesu Clinic Exterior",
//     category: "vesu-exterior",
//     imageType: "placeholder",
//     aspectRatio: "3/2",
//     recommendedSize: "1800 × 1200 px",
//     note: "Street-level photograph of the VIP Road entrance and signage.",
//   },
//   {
//     id: "dental-equipment",
//     title: "Dental Equipment",
//     category: "equipment",
//     imageType: "placeholder",
//     aspectRatio: "4/3",
//     recommendedSize: "1600 × 1200 px",
//     note: "Imaging unit, chair-side units or any equipment the clinic wants to feature.",
//   },
//   {
//     id: "sterilisation-area",
//     title: "Sterilisation Area",
//     category: "sterilisation",
//     imageType: "placeholder",
//     aspectRatio: "4/3",
//     recommendedSize: "1600 × 1200 px",
//     note: "Autoclave and instrument processing bench.",
//   },
//   {
//     id: "dent-arena-team",
//     title: "Dent Arena Team",
//     category: "team",
//     imageType: "placeholder",
//     aspectRatio: "16/9",
//     recommendedSize: "1920 × 1080 px",
//     note: "Group photograph of the clinical and support team.",
//   },
//   {
//     id: "generic-treatment-room",
//     title: "A modern treatment room",
//     category: "treatment-room",
//     imageType: "generic",
//     aspectRatio: "4/3",
//     recommendedSize: "1280 × 960 px",
//     image: {
//       src: treatmentRoom,
//       alt: "A modern dental treatment room with a teal dental chair, overhead light and daylight from a large window",
//       width: 1280,
//       height: 960,
//       representative: true,
//     },
//   },
//   {
//     id: "generic-instruments",
//     title: "Sterilised instruments on a tray",
//     category: "equipment",
//     imageType: "generic",
//     aspectRatio: "4/3",
//     recommendedSize: "1280 × 960 px",
//     image: {
//       src: instruments,
//       alt: "Close-up of clean stainless steel dental instruments, including a mouth mirror, arranged on a teal tray",
//       width: 1280,
//       height: 960,
//       representative: true,
//     },
//   },
//   {
//     id: "generic-sterilisation",
//     title: "Instrument sterilisation",
//     category: "sterilisation",
//     imageType: "generic",
//     aspectRatio: "4/3",
//     recommendedSize: "1280 × 960 px",
//     image: {
//       src: sterilisation,
//       alt: "An autoclave with pouched dental instruments inside, beside a stainless steel processing bench",
//       width: 1280,
//       height: 960,
//       representative: true,
//     },
//   },
// ];

export interface GalleryItem {
  id: string;
  category: string;
  imageType: string;
  approved?: boolean;
  displayOrder?: number;
  aspectRatio: string;
  recommendedSize: string;
  /** If true, this item appears on the home page only — not in the gallery page. */
  showOnHome?: boolean;
  image?: {
    src: string;
    alt: string;
    width: number;
    height: number;
    className?: string;
  };
  note?: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: "1",
    category: "Clinic exterior",
    imageType: "authentic",
    approved: true,
    displayOrder: 1,
    aspectRatio: "16/9",
    recommendedSize: "1200 × 1800 px",
    showOnHome: true,
    image: {
      src: "/images/gallery/home-banner-1.png",
      alt: "image 1",
      width: 778,
      height: 693,
      className: "object-cover",
    },
    note: "Branch not confirmed for this photograph.",
  },

  {
    id: "clinic-exterior-signboard",
    category: "Clinic exterior",
    imageType: "authentic",
    approved: true,
    displayOrder: 2,
    aspectRatio: "16/9",
    recommendedSize: "1200 × 1800 px",
    showOnHome: true,
    image: {
      src: "/images/gallery/dent-arena-clinic-exterior-signboard.png",
      alt: "dent-arena-clinic-exterior-signboard.png",
      width: 778,
      height: 693,
      className: "object-cover",
    },
    note: "Branch not confirmed for this photograph.",
  },
  {
    id: "clinic-exterior-signboard",
    category: "Clinic exterior",
    imageType: "authentic",
    approved: true,
    displayOrder: 3,
    aspectRatio: "16/9",
    recommendedSize: "1200 × 1800 px",
    image: {
      src: "/images/gallery/img-2.jpg",
      alt: "Image2",
      width: 778,
      height: 693,
      className: "object-cover",
    },
    note: "Branch not confirmed for this photograph.",
  },
  {
    id: "clinic-exterior-signboard",
    category: "Clinic exterior",
    imageType: "authentic",
    approved: true,
    displayOrder: 4,
    aspectRatio: "16/9",
    recommendedSize: "1200 × 1800 px",
    image: {
      src: "/images/gallery/img-3.jpg",
      alt: "Image3",
      width: 778,
      height: 693,
      className: "object-cover",
    },
    note: "Branch not confirmed for this photograph.",
  },  
   {
    id: "clinic-exterior-signboard",
    category: "Clinic exterior",
    imageType: "authentic",
    approved: true,
    displayOrder: 5,
    aspectRatio: "16/9",
    recommendedSize: "1200 × 1800 px",
    image: {
      src: "/images/gallery/img-4.jpg",
      alt: "Image4",
      width: 778,
      height: 693,
      className: "object-cover",
    },
    note: "Branch not confirmed for this photograph.",
  },
   {
    id: "clinic-exterior-signboard",
    category: "Clinic exterior",
    imageType: "authentic",
    approved: true,
    displayOrder: 6,
    aspectRatio: "16/9",
    recommendedSize: "1200 × 1800 px",
    image: {
      src: "/images/gallery/img-5.jpg",
      alt: "Image5",
      width: 778,
      height: 693,
      className: "object-cover",
    },
    note: "Branch not confirmed for this photograph.",
  },
   {
    id: "clinic-exterior-signboard",
    category: "Clinic exterior",
    imageType: "authentic",
    approved: true,
    displayOrder: 7,
    aspectRatio: "16/9",
    recommendedSize: "1200 × 1800 px",
    image: {
      src: "/images/gallery/img-6.jpg",
      alt: "Image6",
      width: 778,
      height: 693,
      className: "object-cover",
    },
    note: "Branch not confirmed for this photograph.",
  },
   {
    id: "clinic-exterior-signboard",
    category: "Clinic exterior",
    imageType: "authentic",
    approved: true,
    displayOrder: 8,
    aspectRatio: "16/9",
    recommendedSize: "1200 × 1800 px",
    image: {
      src: "/images/gallery/img-7.jpg",
      alt: "Image7",
      width: 778,
      height: 693,
      className: "object-cover",
    },
    note: "Branch not confirmed for this photograph.",
  },
   {
    id: "clinic-exterior-signboard",
    category: "Clinic exterior",
    imageType: "authentic",
    approved: true,
    displayOrder: 9,
    aspectRatio: "16/9",
    recommendedSize: "1200 × 1800 px",
    image: {
      src: "/images/gallery/img-8.jpg",
      alt: "Image8",
      width: 778,
      height: 693,
      className: "object-cover",
    },
    note: "Branch not confirmed for this photograph.",
  },
   {
    id: "clinic-exterior-signboard",
    category: "Clinic exterior",
    imageType: "authentic",
    approved: true,
    displayOrder: 10,
    aspectRatio: "16/9",
    recommendedSize: "1200 × 1800 px",
    image: {
      src: "/images/gallery/img-9.jpg",
      alt: "Image9",
      width: 778,
      height: 693,
      className: "object-cover",
    },
    note: "Branch not confirmed for this photograph.",
  },
];

/**
 * Before-and-after cases.
 *
 * Intentionally empty. Add a case only when patient consent is documented and
 * the clinical team has approved the wording and images.
 */
export const caseStudies: CaseStudy[] = [];

/** A case may only be shown publicly when all four conditions hold. */
export function publishableCases(cases: CaseStudy[] = caseStudies): CaseStudy[] {
  return cases
    .filter(
      (c) =>
        c.patientConsentApproved === true &&
        c.contentApproved === true &&
        Boolean(c.beforeImage?.src) &&
        Boolean(c.afterImage?.src),
    )
    .sort((a, b) => a.displayOrder - b.displayOrder);
}

/**
 * Patient testimonials.
 *
 * Intentionally empty. Only genuine, attributable reviews that the patient has
 * agreed to have published may be added here.
 */
export const testimonials: Testimonial[] = [];

/** A testimonial may only be shown publicly when verified and approved. */
export function publishableTestimonials(items: Testimonial[] = testimonials): Testimonial[] {
  return items.filter((t) => t.verified === true && t.approved === true);
}

/** Ratings and review schema stay disabled until verified reviews exist. */
export function hasVerifiedRatings(items: Testimonial[] = testimonials): boolean {
  return publishableTestimonials(items).some((t) => typeof t.rating === "number");
}
