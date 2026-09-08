import { l as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { B as Section, F as getTreatmentsForDoctor, L as confirmed, O as getLocation, R as isPlaceholder, S as Button, V as cn, o as Route$5, z as Container } from "./router-BEx1EPk1.mjs";
import { t as PageHeader } from "./PageHeader-tWSigD8I.mjs";
import { i as TreatmentCard } from "./TreatmentCard-uA9fqf2E.mjs";
import { n as WhatsAppCtaSection, t as WhatsAppButton } from "./WhatsAppCta-Y96H3BL6.mjs";
import { n as PendingNote } from "./Placeholders-Bm0XVBpw.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/doctors._slug-BfpIftwy.js
var import_jsx_runtime = require_jsx_runtime();
function DoctorDetailPage() {
	const { doctor } = Route$5.useLoaderData();
	const photo = confirmed(doctor.photo);
	const bio = confirmed(doctor.bio);
	const qualifications = confirmed(doctor.qualifications);
	const focusAreas = confirmed(doctor.focusAreas);
	const languages = confirmed(doctor.languages);
	const experience = confirmed(doctor.experience);
	const registration = confirmed(doctor.registrationNumber);
	const doctorTreatments = getTreatmentsForDoctor(doctor);
	const treatmentScopeConfirmed = Boolean(confirmed(doctor.treatmentSlugs));
	const branches = doctor.locationIds.map((id) => getLocation(id)).filter((l) => Boolean(l));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			eyebrow: confirmed(doctor.role) ?? "Dentist",
			title: doctor.name,
			breadcrumbs: [
				{
					name: "Home",
					path: "/"
				},
				{
					name: "Our dentists",
					path: "/doctors"
				},
				{
					name: doctor.name,
					path: `/doctors/${doctor.slug}`
				}
			],
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppButton, { context: `Appointment with ${doctor.name}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "outline",
					size: "lg",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/book-appointment",
						children: "Request appointment"
					})
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-12 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-10",
				children: [
					photo ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: photo.src,
						alt: photo.alt,
						width: photo.width,
						height: photo.height,
						className: cn("aspect-[4/3] w-full rounded-2xl object-cover", photo.className)
					}) : isPlaceholder(doctor.photo) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PendingNote, { item: doctor.photo }) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "text-2xl",
						children: ["About ", doctor.name]
					}), bio ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 space-y-4 leading-relaxed",
						children: bio.map((paragraph) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: paragraph }, paragraph))
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm leading-relaxed",
							children: [
								"A full profile for ",
								doctor.name,
								" will be published once the clinic has confirmed the details. In the meantime, you are welcome to ask about their experience when you book."
							]
						}), isPlaceholder(doctor.bio) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PendingNote, {
							item: doctor.bio,
							className: "mt-4"
						}) : null]
					})] }),
					focusAreas ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl",
						children: "Areas of focus"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-5 flex flex-wrap gap-2",
						children: focusAreas.map((area) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "rounded-full bg-secondary px-4 py-2 text-sm text-secondary-foreground",
							children: area
						}, area))
					})] }) : null
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
				className: "space-y-6 lg:sticky lg:top-28 lg:self-start",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-border bg-card p-6 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-lg font-semibold text-ink",
						children: "Professional details"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
						className: "mt-4 space-y-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-xs tracking-wide text-muted-foreground uppercase",
								children: "Qualifications"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-1",
								children: qualifications ? qualifications.join(", ") : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted-foreground italic",
									children: "Awaiting confirmation"
								})
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-xs tracking-wide text-muted-foreground uppercase",
								children: "Dental council registration"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-1",
								children: registration ?? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted-foreground italic",
									children: "Awaiting confirmation"
								})
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-xs tracking-wide text-muted-foreground uppercase",
								children: "Experience"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-1",
								children: experience ?? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted-foreground italic",
									children: "Awaiting confirmation"
								})
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-xs tracking-wide text-muted-foreground uppercase",
								children: "Languages"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-1",
								children: languages ? languages.join(", ") : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted-foreground italic",
									children: "Awaiting confirmation"
								})
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-xs tracking-wide text-muted-foreground uppercase",
								children: "Practises at"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-1 space-y-1",
								children: branches.map((location) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/locations/$branch",
									params: { branch: location.slug },
									className: "block hover:text-primary",
									children: location.name
								}, location.id))
							})] })
						]
					})]
				})
			})]
		}) }),
		doctorTreatments.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			tone: "soft",
			labelledBy: "doctor-treatments",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
				className: "px-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						id: "doctor-treatments",
						className: "text-2xl sm:text-3xl",
						children: treatmentScopeConfirmed ? `Treatments provided by ${doctor.name}` : "Treatments available at their branches"
					}),
					!treatmentScopeConfirmed ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground",
						children: [
							"This list reflects the treatments offered at the branches where ",
							doctor.name,
							" ",
							"practises. The clinician who carries out each treatment is confirmed at your consultation."
						]
					}), isPlaceholder(doctor.treatmentSlugs) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PendingNote, {
						item: doctor.treatmentSlugs,
						className: "mt-4"
					}) : null] }) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
						children: doctorTreatments.map((treatment) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TreatmentCard, { treatment }) }, treatment.slug))
					})
				]
			})
		}) : null,
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, {
			className: "px-0",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm leading-relaxed text-muted-foreground",
				children: "Information on this page is provided by the clinician and is for general information only. It does not constitute a diagnosis or a promise of a specific treatment outcome."
			})
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppCtaSection, { context: doctor.name })
	] });
}
//#endregion
export { DoctorDetailPage as component };
