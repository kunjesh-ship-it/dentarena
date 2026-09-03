import { confirmed, placeholder, type Doctor, type Treatment } from "./types";

/**
 * Doctor profiles.
 * Qualifications, registration numbers and experience must be supplied by the
 * clinic before they are published. Nothing here is invented.
 */
export const doctors: Doctor[] = [
  {
    slug: "dr-mayank-shah",
    published: true,
    // Name, qualification and designation as stated on the clinic's existing website.
    name: "Dr. Mayank M. Shah",
    role: "",
    qualifications: ["BDS", "Dental Surgeon & Implantologist"],
    registrationNumber: placeholder("State Dental Council registration number"),
    experience: "14 Years",
    description: [
      "A full profile for Dr. Mayank M. Shah will be published once the clinic has confirmed the details. In the meantime, you are welcome to ask about their experience when you book.",
      "BDS from Bapuji Dental College & Hospital, Davangere and a skilled Implantologist.",
      "Founder at Dent Arena, Surat, serving patients with trust for 10 years.",
    ],
    bio: placeholder("Short professional biography approved by Dr. Mayank M. Shah"),
    focusAreas: placeholder("Clinical areas of focus"),
    languages: placeholder("Languages spoken during consultations"),
    locationIds: ["bhatar", "vesu"],
    photo: {
      src: "/images/gallery/mayank-shah.jpg",
      alt: "Dr. Mayank M. Shah - Dental Surgeon & Implantologist at Dent Arena",
      width: 800,
      height: 800,
      className: "object-cover c-object-position-center ",
    },
    treatmentSlugs: placeholder("Treatments personally provided by Dr. Mayank M. Shah"),

  },
  {
    slug: "dr-minal-shah",
    published: true,
    name: "Dr. Minal M. Shah",
    qualifications: ["BDS", "Smile Design Specialist"],
    role: "",
    description: [
      "A full profile for Dr. Minal M. Shah will be published once the clinic has confirmed the details. In the meantime, you are welcome to ask about their experience when you book.",
      "BDS from Bharatiya Vidyapeeth, Navi Mumbai, & a specialist in Cosmetic Dentistry & Smile Designing, with expertise in clear aligners.",
      "Co-Founder of Dent Arena, Surat, serving beautiful smiles for the last 10 years.",
    ],
    registrationNumber: placeholder("State Dental Council registration number"),
    experience: "12 Years",
    bio: placeholder("Short professional biography approved by Dr. Minal M. Shah"),
    focusAreas: placeholder("Clinical areas of focus"),
    languages: placeholder("Languages spoken during consultations"),
    locationIds: ["bhatar", "vesu"],
    photo: {
      src: "/images/gallery/doctor-image.jpeg",
      alt: "Dr. Minal M. Shah - Smile Design Specialist at Dent Arena",
      width: 800,
      height: 800,
      className: "object-cover object-center",
    },
    treatmentSlugs: placeholder("Treatments personally provided by Dr. Minal M. Shah"),    
  },
];

export const publishedDoctors = doctors.filter((d) => d.published);

export function getDoctor(slug: string) {
  return publishedDoctors.find((d) => d.slug === slug);
}

/**
 * Dentists who see patients at a branch where the treatment is offered.
 * Branch overlap is a confirmed fact; it never implies a clinician performs a
 * specific procedure. Once `treatmentSlugs` is confirmed it takes precedence.
 */
export function getDoctorsForTreatment(treatment: Pick<Treatment, "slug" | "availableAt">) {
  return publishedDoctors.filter((doctor) => {
    const own = confirmed(doctor.treatmentSlugs);
    if (own) return own.includes(treatment.slug);
    return doctor.locationIds.some((id) => treatment.availableAt.includes(id));
  });
}
