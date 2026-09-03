import { clinic } from "./clinic";
import { placeholder, type Location } from "./types";

export const locations: Location[] = [
  {
    id: "bhatar",
    slug: "bhatar",
    name: "Dent Arena \u2013 Bhatar",
    shortName: "Bhatar",
    addressLines: [
      "1st Floor, Sheetal Shopping Complex, Shops 22 & 23",
      "Bhatar Road, IOC Colony, Subhash Nagar, Athwa",
    ],
    locality: "Surat",
    region: "Gujarat",
    postalCode: "395001",
    phone: clinic.phoneDisplay,
    description:
      "The Bhatar practice sits on the first floor of Sheetal Shopping Complex, on Bhatar Road close to IOC Colony and Subhash Nagar. It is set up for routine and family dentistry \u2014 check-ups, cleanings, fillings and follow-up visits \u2014 for people living and working around Athwa.",
    landmark: placeholder("Nearest landmark for the Bhatar branch"),
    parking: placeholder("Parking arrangement at Sheetal Shopping Complex"),
    accessibility: placeholder("Lift / step-free access details for the 1st floor"),
    // Source: the clinic's existing website contact page (Bhatar branch).
    hours: [
      { days: "Monday to Saturday", hours: "9:30 am \u2013 7:30 pm" },
      { days: "Sunday", hours: "By appointment only" },
    ],
    mapEmbedUrl: placeholder("Google Maps embed URL for the Bhatar branch"),
    directionsUrl:
      "https://www.google.com/maps/search/?api=1&query=Dent+Arena+Sheetal+Shopping+Complex+Bhatar+Road+Surat",
    geo: placeholder("Verified latitude and longitude for the Bhatar branch"),
    doctorSlugs: ["dr-mayank-shah", "dr-minal-shah"],
    treatmentSlugs: placeholder("Confirmed list of treatments offered at Bhatar"),
    photos: [],
  },
  {
    id: "vesu",
    slug: "vesu",
    name: "Dent Arena \u2013 Vesu",
    shortName: "Vesu",
    addressLines: ["211, 2nd Floor, Avadh Arena", "VIP Road, Bharthana, Vesu"],
    locality: "Surat",
    region: "Gujarat",
    postalCode: "395007",
    phone: clinic.phoneDisplay,
    description:
      "The Vesu practice is on the second floor of Avadh Arena on VIP Road, between Bharthana and Vesu. It serves the newer residential neighbourhoods nearby and is used for both first consultations and longer treatment appointments.",
    landmark: placeholder("Nearest landmark for the Vesu branch"),
    parking: placeholder("Parking arrangement at Avadh Arena"),
    accessibility: placeholder("Lift / step-free access details for the 2nd floor"),
    // hours: placeholder("Vesu opening hours (weekdays, weekend, lunch break)"),
    hours: [
      { days: "Monday to Saturday", hours: "9:30 am \u2013 8:00 pm" },
      { days: "Sunday", hours: "By appointment only" },
    ],
    mapEmbedUrl: placeholder("Google Maps embed URL for the Vesu branch"),
    directionsUrl:
      "https://www.google.com/maps/search/?api=1&query=Dent+Arena+Avadh+Arena+VIP+Road+Vesu+Surat+395007",
    geo: placeholder("Verified latitude and longitude for the Vesu branch"),
    doctorSlugs: ["dr-mayank-shah", "dr-minal-shah"],
    treatmentSlugs: placeholder("Confirmed list of treatments offered at Vesu"),
    photos: [],
  },
];

/** Unit number 211 is used as supplied and should be re-confirmed before print use. */
export const vesuUnitNumberNeedsConfirmation = true;

export function getLocation(id: string) {
  return locations.find((l) => l.id === id || l.slug === id);
}

export function formatAddress(location: Location) {
  const parts = [...location.addressLines, `${location.locality}, ${location.region}`];
  if (typeof location.postalCode === "string") {
    parts[parts.length - 1] = `${location.locality}, ${location.region} ${location.postalCode}`;
  }
  return parts;
}
