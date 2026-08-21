# Dent Arena — Premium Dental Clinic Website

Static marketing site (React + Vite + TypeScript + Tailwind, TanStack Router file routes). No backend, no auth, no database. All clinic content in typed data files.

## 1. Sitemap

```text
/                             Home
/about                        About Dent Arena
/doctors                      Doctors index
/doctors/$slug                Doctor profile
/treatments                   Treatments index
/treatments/$slug             Treatment detail
/smile-gallery                Before & after cases
/reviews                      Patient reviews
/gallery                      Clinic photographs
/articles                     Dental health articles
/articles/$slug               Article detail
/faqs                         FAQs
/locations                    Locations overview
/locations/bhatar             Bhatar branch
/locations/vesu               Vesu branch
/book-appointment             WhatsApp appointment request
/privacy-policy               Privacy policy
/terms                        Terms & medical disclaimer
404                           Custom not-found (root notFoundComponent)
```

Only treatments/doctors/articles flagged `published: true` in data render and appear in the sitemap; unconfirmed entries stay in the data file as drafts.

## 2. Design system

Tokens in `src/styles.css` (oklch equivalents of the brief palette), mapped via `@theme inline`:

- `--primary` deep teal #0F5D62, `--accent` aqua #43B8B2, `--ink` dark navy #15343B
- `--background` warm ivory #FAFAF7, `--surface-soft` pale aqua #EAF7F5
- `--gold` muted gold #D9AA5B (sparing accents/dividers only)
- `--foreground`/body slate #4D6065
- Radius scale soft (12–24px), two subtle elevation shadows, no gradients or glass
- Fonts via `<link>` in `__root.tsx`: Manrope (headings), Inter (body). Tight heading tracking, generous line-height body.
- Motion: short opacity/translate transitions only, all wrapped in `prefers-reduced-motion` guard.
- Visible focus ring token used on every interactive element.

## 3. Component architecture

`src/components/`
- layout: `SiteHeader` (sticky, accessible mobile drawer), `AnnouncementStrip`, `SiteFooter`, `MobileActionBar` (call / WhatsApp / directions, 44px targets, body padding offset), `Breadcrumbs`, `Section`, `Container`
- ui primitives: `Button`, `Card`, `Accordion`, `Input`/`Select`/`Textarea`/`Checkbox` with labels + error text, `Badge`
- content: `Hero`, `TrustStrip`, `TreatmentCard`, `DoctorCard`, `TestimonialCard`, `FaqAccordion`, `LocationCard`, `MapEmbed` (placeholder-aware), `Gallery`, `BeforeAfterCase`, `ArticleCard`, `RelatedTreatments`, `MedicalReviewer`, `WhatsAppCta`, `AppointmentForm`
- `src/lib/whatsapp.ts` — single builder for the wa.me link and message template
- `src/lib/seo.ts` — helpers for head meta + JSON-LD builders (Organization, Dentist per branch, Person, BreadcrumbList, FAQPage, Article)

## 4. Content/data model (`src/content/`)

- `clinic.ts` — brand, phone `+919913025687`, WhatsApp, email placeholder, social placeholders
- `locations.ts` — `{ id, name, addressLines, pincode, mapUrl, directionsUrl, hours, landmarks, parking, doctors, treatments, photos, description }`
- `doctors.ts` — `{ slug, name, published, qualifications[], registrationNumber, experience, bio, specialities[], locations[], photo }`
- `treatments.ts` — `{ slug, title, published, summary, whatItIs, whoNeedsIt, signs[], howItWorks[], visitsAndRecovery, benefits[], limitations[], risks[], aftercare[], whenToContact, faqs[], locations[], reviewedBy, lastReviewed, related[] }`
- `faqs.ts`, `reviews.ts`, `gallery.ts`, `smileCases.ts`, `articles.ts`

Unverified values use an explicit placeholder helper: `placeholder("Bhatar PIN code")`. Components skip rendering any section whose data is a placeholder (or, for structural fields like PIN, render a visible "To be confirmed" chip only in non-critical spots) — never fabricated text, never lorem ipsum. Nothing unverified is ever emitted in JSON-LD.

Initially: no reviews, no smile cases, no testimonials, no doctor credentials, no timings, no articles → those sections render an editorial "content coming soon" state or are omitted, and their routes exist with empty-state UI.

## 5. Appointment flow

Client-only form (name, mobile, branch, concern, date, time, message, required consent). Zod validation, inline accessible errors, then `window.open` of `https://wa.me/919913025687?text=<encoded template>`. Nothing stored or sent. CTA: "Request Appointment on WhatsApp". Copy never claims confirmation.

## 6. SEO & technical

Per-route `head()` with unique title/description, canonical (relative), OG + Twitter, JSON-LD from verified data only. `src/routes/sitemap[.]xml.ts` server route, `public/robots.txt`, `public/manifest.webmanifest`, favicon from the uploaded logo, one H1 per page, breadcrumbs on nested routes, lazy-loaded below-fold images with reserved dimensions.

## 7. Needs your confirmation (placeholders until then)

1. Bhatar PIN code and Vesu unit number
2. Opening hours per branch (and emergency availability)
3. Doctor details: qualifications, registration numbers, experience, roles, which branch each works at, photos
4. Confirmed treatment list from the 17 candidates (only confirmed ones publish)
5. Real clinic/branch photographs, before-after cases, patient stories (with consent)
6. Google Maps links/embeds per branch, email address, social profiles
7. Who medically reviews content, and review dates

I will build with tasteful placeholder imagery and empty states for all of the above, structured so you swap values in one data file.
