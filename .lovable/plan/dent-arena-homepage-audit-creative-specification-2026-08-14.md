# Dent Arena Homepage — Audit + Creative Specification

Direction: **Premium editorial dentistry with warm, playful graphical details.**
No code changes until this is approved.

---

## Part 1 — Audit of the current homepage

**1. Why it feels generic.** The page is a vertical stack of six near-identical bands: heading block, then a grid, alternating ivory/pale-aqua backgrounds, all at the same 1152px width, same padding, same rounded rectangles. Nothing is ever off-grid, overlapped, oversized or cropped. The hero is a textbook 50/50 text-left / photo-right with a plain rounded rectangle. There is no motif, no signature shape, no editorial moment — the layout would suit an accounting firm with different words.

**2. Sections leaning too hard on ordinary card grids.** Four of six: "What a visit feels like" (4 bordered boxes with a lucide icon), Treatments (3-up equal cards), Doctors (3-up equal cards), Locations (2-up equal cards). Same border, same radius, same internal rhythm — the eye stops reading and starts skimming.

**3. Where typography lacks impact.** The H1 tops out at 60px with body-weight contrast; H2s are a flat 30–36px across every section with no size hierarchy between a primary and a secondary band. Card titles are 18px semibold everywhere. The eyebrow is the only expressive type element. There is no display-scale moment, no mixed-weight or two-tone headline, no pull quote, no measured editorial column.

**4. Weak spacing and rhythm.** Every section is `py-16 sm:py-24` — identical. Heading-to-content is always `mt-12`. Because both the background alternation and the spacing are perfectly regular, the page has no breathing, no compression before a climax, no full-bleed release.

**5. Insufficient / disconnected imagery.** One image on the whole homepage (the hero). Treatments, promises, doctors, FAQ and the CTA are entirely text. The verified clinic photographs already imported (exterior signage, reception, consultation desk, treatment chair) never appear on the homepage at all. That is the single largest missed asset.

**6. Needs structural redesign.** Hero; Promises; Treatments; Locations; final CTA. Plus two new bands: a clinic-photography strip using the verified images, and an editorial "how a visit works" sequence.

**7. Needs visual refinement only.** Doctors (keep 2-up, restyle the card), FAQ (keep the accordion, improve type and add a warm background panel), announcement strip, header, footer, mobile action bar.

**8. Where animation helps storytelling.** Hero entrance (staggered headline / sub / CTA / image); one-time reveal as each section enters view; the clinic-photo strip drifting slightly on scroll; accordion height; hover lift on treatment and location cards; the sticky header condensing on scroll.

**9. Where animation must not be added.** Phone, WhatsApp and directions buttons (must be instantly tappable); mobile action bar; the appointment CTA; anything auto-playing, looping, parallaxing on mobile, counting up numbers, or delaying text a user is trying to read. No carousel auto-rotation. No scroll hijacking.

**10. Unchanged.** All verified copy, the treatment library, doctor data and placeholder honesty rules, the WhatsApp deep-link builder and message template, tel: and Google Maps directions actions, every existing route, all `head()` metadata and JSON-LD, focus rings and landmarks, reduced-motion handling, image dimensions/lazy loading.

---

## Part 2 — Creative specification

### Colour tokens (oklch, in `src/styles.css`)
Brand teal stays; the palette gains a warm side so it reads editorial rather than clinical.

| Token | Value | Hex ref | Use |
|---|---|---|---|
| `--background` | oklch(0.985 0.006 92) | #FBFAF6 | page |
| `--surface-warm` | oklch(0.958 0.018 78) | #F6EFE3 | warm editorial bands |
| `--surface-soft` | oklch(0.966 0.016 180) | #EAF7F5 | cool bands |
| `--ink` | oklch(0.265 0.034 213) | #102E35 | headings |
| `--foreground` | oklch(0.469 0.019 214) | #4D6065 | body |
| `--primary` | oklch(0.435 0.062 199) | #0F5D62 | buttons, links |
| `--primary-deep` | oklch(0.315 0.048 205) | #0A3C44 | dark full-bleed bands |
| `--accent` | oklch(0.712 0.096 186) | #43B8B2 | motifs, underlines |
| `--gold` | oklch(0.762 0.093 79) | #D9AA5B | hairlines, small marks only |
| `--blush` | oklch(0.884 0.043 42) | #F3D5C2 | playful blobs/badges |
| `--border` | oklch(0.908 0.012 195) | — | hairlines |

Ratio target: 70% neutral, 20% teal family, 10% warm (gold + blush).

### Typography
Pairing: **Fraunces** (display, optical size + soft serif warmth) for h1–h3 and pull quotes; **Inter** for body, UI and small caps. Manrope is retired. Loaded via `<link>` in `__root.tsx`.

Desktop scale (px / line-height / tracking):
- Display h1 76 / 1.02 / −0.03em, Fraunces 600
- h2 48 / 1.08 / −0.02em
- h3 28 / 1.2 / −0.01em
- Card title 20 / 1.3
- Lead 20 / 1.6
- Body 17 / 1.7
- Small / meta 14 / 1.5
- Eyebrow 12 / 0.16em uppercase Inter 600

Mobile (≤640px): h1 40 / 1.06, h2 30, h3 22, lead 18, body 16, eyebrow 11. Fluid via `clamp()` between 640 and 1280.

Measure: body max 68ch; editorial paragraphs 58ch.

### Layout
Max content width **1240px**; wide editorial rows may span 1400px; full-bleed bands span 100vw with inner content still at 1240. Gutters 20 / 32 / 48px at mobile / tablet / desktop. 12-column grid desktop, 6 tablet, 4 mobile; asymmetric splits are 7/5 and 5/7, never 6/6.

### Section spacing scale
`--space-band-sm 64px`, `-md 96px`, `-lg 128px`, `-xl 176px` (mobile: 48 / 64 / 80 / 104). Rhythm is deliberately uneven: hero xl, promises md, treatments lg, photo strip sm (tight, so imagery feels like a breath), visit sequence lg, doctors md, locations lg, FAQ md, CTA xl. Heading-to-content 40px desktop / 28 mobile.

### Border radius system
`--r-xs 8`, `--r-sm 14`, `--r-md 20`, `--r-lg 32`, `--r-xl 48`, `--r-pill 999px`. Cards `--r-lg`; buttons pill; images `--r-xl`; small chips pill.

### Shadows
- `--shadow-hairline`: 0 0 0 1px color-mix(in oklab, var(--ink) 8%, transparent)
- `--shadow-soft`: 0 2px 6px teal/5%, 0 12px 28px teal/7%
- `--shadow-lift`: 0 4px 10px teal/6%, 0 24px 56px teal/12% (hover / floating badges only)
No shadow on flat editorial bands; contrast comes from background, not elevation.

### Image aspect ratios
Hero portrait 4/5; secondary hero inset 1/1; treatment card 3/2; doctor portrait 4/5; location 16/10; photo-strip tiles alternate 3/4 and 4/3; full-bleed band 21/9 desktop, 3/2 mobile.

### Image masks
1. **Arena arch** — top corners `--r-xl`, bottom corners `--r-sm` (signature; hero and doctors).
2. **Notch corner** — rounded rect with a radial-gradient mask carving a circle at one corner so a round badge or circular photo nests into it.
3. **Circle inset** — fully round secondary photo overlapping the main image edge.
4. **Soft-blob** — organic border-radius (e.g. `58% 42% 46% 54% / 46% 52% 48% 54%`) used once per page, in the visit-sequence band.
Every mask carries a 1px inner hairline so photos never float untethered.

### Background treatments
- Warm ivory default.
- Alternating warm sand (`--surface-warm`) and pale aqua bands, but only three coloured bands total so they stay meaningful.
- One full-bleed `--primary-deep` band (final CTA) with a faint tooth-outline line motif at 6% opacity.
- Very soft radial glow (accent at 8%) behind hero imagery only.
- A repeating 1px gold hairline divider between the two editorial bands.
No gradients on text, no glassmorphism, no noise textures.

### Custom graphical motifs (original, drawn as inline SVG)
- **Arena arc** — a thin teal arc echoing the arch mask; used as a section-opening flourish and as an underline beneath key words in h2s.
- **Smile dot trio** — three dots of decreasing size in accent/gold/blush, used as a list bullet and a section end-mark.
- **Enamel outline** — single-stroke abstract tooth silhouette, used at large scale, low opacity, as a background watermark on exactly two sections.
- **Hand-drawn circle** — a slightly irregular ring around one number or word per page (playfulness, used sparingly).
All motifs are `aria-hidden`, decorative, and CSS-coloured from tokens.

### Buttons
- **Primary**: pill, teal fill, ivory text, 52px tall desktop / 48 mobile, 24px horizontal padding, 16px label, weight 600. Hover: background darkens to `--primary-deep`, shadow-lift, translateY(−1px), 180ms.
- **WhatsApp**: pill, teal outline with warm-sand fill, WhatsApp glyph left. Same geometry. No animation delay on tap.
- **Secondary/outline**: pill, 1.5px ink/20% border, transparent; hover fills warm sand.
- **Text link**: ink label with accent underline that grows from left on hover (200ms).
- All buttons: 3px offset focus ring in `--primary`, min 44px hit target.

### Cards
- **Treatment card**: image top (3/2, arch mask top corners only), title, one-line summary, "Read more" text link, `--r-lg`, hairline border, no fill. Hover: lift 4px + shadow-soft + image scale 1.03 (400ms ease-out).
- **Doctor card**: 4/5 portrait in arch mask, name in Fraunces, role and qualification in small caps, branch chips. Placeholder state stays a labelled, honest empty portrait.
- **Location card**: 16/10 photo, name, address lines, hours, then three pill actions (call / directions / WhatsApp) — actions never animate.
- **Feature/promise item**: no card at all — numbered editorial row with a hairline divider, a motif bullet, and a 58ch paragraph.

### Header
Transparent over the hero, becoming ivory + hairline + soft shadow after 24px scroll (200ms). Height 88px → 68px condensed. Wordmark left, nav centre in Inter 15/500 with an accent underline that draws in on hover and stays for the active route, "Book on WhatsApp" pill right. Announcement strip above, hides on scroll down and returns on scroll up.

### Mobile navigation
Hamburger opens a full-height ivory sheet sliding from the right (260ms ease-out), with links at 22px Fraunces stacked with 20px gaps, a warm-sand card at the bottom holding call / WhatsApp / directions, focus trapped, body scroll locked, Esc and backdrop close. Existing bottom mobile action bar stays exactly as is.

### Animation principles
Motion is *arrival*, not decoration: content moves once, 16–24px, on first entry, and then stays still. Everything is opacity+transform only (no layout animation). Stagger 60–80ms within a group, max 4 items staggered. Nothing animates below 40% of a fold on mobile except opacity.

Durations / easing:
- micro (hover, focus, underline) 150–200ms, `cubic-bezier(0.4, 0, 0.2, 1)`
- entrance reveal 500ms, `cubic-bezier(0.16, 1, 0.3, 1)`
- hero stagger 600ms, same easing, 80ms steps
- mobile sheet 260ms in / 200ms out
- accordion 240ms ease-in-out
- photo strip scroll drift: max 24px translate, tied to scroll, desktop only

Reduced motion: `prefers-reduced-motion: reduce` disables all transforms, scroll drift and stagger; content renders at final state with a 0.001ms transition. Already scaffolded in `styles.css`; the new reveal utility must respect it and must never leave content hidden if IntersectionObserver never fires.

### Proposed homepage section sequence
1. Announcement strip
2. Header
3. Hero — editorial split with layered imagery
4. Trust line (single row, verified facts only)
5. Treatments — asymmetric featured + grid
6. Clinic photography strip (verified photos)
7. "How a visit works" — numbered editorial sequence
8. Doctors
9. Locations — two-branch editorial split
10. FAQ
11. Full-bleed CTA band
12. Footer

### Layout per section

**3. Hero.** Desktop: 7/5 split, xl top space. Left: eyebrow with arena arc, h1 at 76px with one word carrying a hand-drawn circle, 58ch lead, two pill CTAs (WhatsApp + Explore treatments), and the "a request is not a confirmation" note in small type. Right: main 4/5 photo in the arch mask, a circular inset photo overlapping its lower-left in a notch cutout, a small warm-sand chip naming the two branches, and a soft accent glow behind. Mobile: eyebrow, h1 40px, lead, stacked full-width CTAs, then a single 4/5 arch-masked photo with the circle inset reduced and anchored bottom-left; no glow.

**4. Trust line.** Desktop: one full-width row on warm sand, four short verified statements (two branches, WhatsApp requests, treatment library, verified hours) separated by smile-dot marks. No numbers, no invented statistics. Mobile: 2×2 grid, 14px text.

**5. Treatments.** Desktop: left column holds the h2 (with an accent underline on one word) plus the "See all treatments" link, sticky within the band; right column is a 2-column grid of five treatment cards where the first spans both columns as a wide featured card with a larger image. Mobile: heading, horizontal snap-scroll row of cards at 78vw width, then the full-width link.

**6. Clinic photography strip.** Desktop: full-bleed, four verified photos in alternating 3/4 and 4/3 tiles at unequal vertical offsets, tight `--space-band-sm`, gentle scroll drift, a caption under each stating what it shows. Mobile: 2-column masonry, no drift.

**7. How a visit works.** Desktop: 5/7 split. Left is a soft-blob-masked photo with the enamel outline watermark behind; right is three numbered rows (01/02/03) in Fraunces numerals, each with a title, a 58ch paragraph and a hairline divider. Mobile: photo first at 3/2, then rows stacked with the numeral inline before the title.

**8. Doctors.** Desktop: heading left, 2-up portrait cards right-aligned in a 5/7 grid, generous 48px gutter, arch masks. Mobile: stacked cards, portrait 4/5, honest placeholder state preserved.

**9. Locations.** Desktop: alternating rows — Bhatar as photo-left / detail-right, Vesu reversed — each 16/10 photo in the arch mask with a floating warm-sand card overlapping the inner corner holding hours and the three actions. Mobile: photo, then details, then full-width action pills, one branch after the other.

**10. FAQ.** Desktop: 5/7 split on pale aqua, heading and a "more questions" link left, accordion right with Fraunces question text at 20px and generous 24px item padding. Mobile: heading then full-width accordion.

**11. CTA band.** Desktop: full-bleed `--primary-deep`, tooth-outline watermark, centred h2 at 48px in ivory, one line of supporting copy, WhatsApp pill plus a phone text link, and the no-confirmation disclaimer beneath. Mobile: same, centred, stacked, 30px heading.

### Guardrails carried through
No fake testimonials, ratings, statistics, patient cases, before/after results, medical claims or invented qualifications. The trust line and every band use only verified content already in `src/content/`. Generic imagery is never presented as a Dent Arena doctor, branch, patient or outcome, and keeps its "representative image" labelling. WhatsApp, tel: and directions behaviour, all routes, all `head()` metadata and JSON-LD, focus management and lazy-loading/dimension rules stay exactly as they are.
