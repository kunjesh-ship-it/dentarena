import { placeholder, type Maybe } from "./types";

/**
 * Single source of truth for Dent Arena contact details.
 * Never hardcode a phone number or address anywhere else.
 */
export const clinic = {
  name: "Dent Arena",
  legalName: placeholder("Registered legal/business name") as Maybe<string>,
  tagline: "For a healthy smile\u2026",
  intro:
    "Dent Arena is a dental clinic in Surat with two neighbourhood practices \u2014 Bhatar and Vesu \u2014 offering everyday dental care in a calm, unhurried setting.",
  city: "Surat",
  region: "Gujarat",
  country: "India",
  /** E.164 without the plus, used for wa.me links. */
  whatsappNumber: "919913025687",
  phoneE164: "+919913025687",
  phoneDisplay: "+91 99130 25687",
  email: "dentarenasurat@gmail.com" as Maybe<string>,
  social: {
    instagram:
      "https://www.instagram.com/dentarenadentalclinic.surat" as Maybe<string>,
    facebook: "https://www.facebook.com/DentArenaSurat/" as Maybe<string>,
    googleBusiness: placeholder("Google Business Profile URL") as Maybe<string>,
  },
} as const;

export const telHref = `tel:${clinic.phoneE164}`;
