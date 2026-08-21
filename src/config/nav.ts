export type NavItem = { label: string; to: string };

export const primaryNav: NavItem[] = [
  { label: "Treatments", to: "/treatments" },
  { label: "Doctors", to: "/doctors" },
  { label: "Locations", to: "/locations" },
  { label: "Gallery", to: "/gallery" },
  { label: "Articles", to: "/articles" },
  { label: "FAQs", to: "/faqs" },
  { label: "Contact", to: "/contact" },
];

export const footerNav: { title: string; items: NavItem[] }[] = [
  {
    title: "Care",
    items: [
      { label: "All treatments", to: "/treatments" },
      { label: "Preventive check-up", to: "/treatments/preventive-dental-check-up" },
      { label: "Emergency dental care", to: "/treatments/emergency-dental-care" },
      { label: "Root canal treatment", to: "/treatments/root-canal-treatment" },
    ],
  },
  {
    title: "Clinic",
    items: [
      { label: "Our doctors", to: "/doctors" },
      { label: "Dental health articles", to: "/articles" },
      { label: "Clinic gallery", to: "/gallery" },
      { label: "Smile gallery", to: "/smile-gallery" },
      { label: "Patient testimonials", to: "/testimonials" },
      { label: "FAQs", to: "/faqs" },
    ],
  },
  {
    title: "Visit",
    items: [
      { label: "Locations", to: "/locations" },
      { label: "Bhatar branch", to: "/locations/bhatar" },
      { label: "Vesu branch", to: "/locations/vesu" },
      { label: "Book an appointment", to: "/book-appointment" },
      { label: "Contact", to: "/contact" },
    ],
  },
];
