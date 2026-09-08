import { l as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { b as Check, d as MapPin } from "../_libs/lucide-react.mjs";
import { B as Section, M as categoryLabels, O as getLocation, P as getTreatments, S as Button, T as getDoctorsForTreatment, n as Route$1, z as Container } from "./router-BEx1EPk1.mjs";
import { t as PageHeader } from "./PageHeader-tWSigD8I.mjs";
import { t as MedicalReviewer } from "./MedicalReviewer-BBr4zbWm.mjs";
import { i as TreatmentCard } from "./TreatmentCard-uA9fqf2E.mjs";
import { n as WhatsAppCtaSection, t as WhatsAppButton } from "./WhatsAppCta-Y96H3BL6.mjs";
import { t as DoctorCard } from "./DoctorCard-BEdNjR_i.mjs";
import { t as FaqAccordion } from "./FaqAccordion-CoQbstlH.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/treatments._slug-ChieN15Z.js
var import_jsx_runtime = require_jsx_runtime();
function ListBlock({ title, items }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "treatment-sub-section",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "text-2xl treatment-sub-heading",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-5 space-y-3",
			children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "flex gap-3 text-sm leading-relaxed treatment-sub-description",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
					"aria-hidden": "true",
					className: "mt-0.5 size-4 shrink-0 text-primary"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item })]
			}, item))
		})]
	});
}
function TreatmentDetailPage() {
	const { treatment } = Route$1.useLoaderData();
	const related = getTreatments(treatment.relatedSlugs);
	const doctors = getDoctorsForTreatment(treatment);
	const branches = treatment.availableAt.map((id) => getLocation(id)).filter((l) => Boolean(l));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			eyebrow: categoryLabels[treatment.category],
			title: treatment.title,
			description: treatment.summary,
			breadcrumbs: [
				{
					name: "Home",
					path: "/"
				},
				{
					name: "Treatments",
					path: "/treatments"
				},
				{
					name: treatment.title,
					path: `/treatments/${treatment.slug}`
				}
			],
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppButton, { context: `Treatment enquiry: ${treatment.title}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
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
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			className: "",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-12 lg:grid-cols-[minmax(0,1.7fr)_minmax(0,1fr)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "space-y-12",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "treatment-sub-section",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-2xl treatment-sub-heading",
								children: "What it is "
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 leading-relaxed treatment-sub-description",
								children: treatment.whatItIs
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListBlock, {
							title: "Who it may suit",
							items: treatment.whoNeedsIt
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListBlock, {
							title: "Signs you may need it",
							items: treatment.signs
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "treatment-sub-section",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-2xl treatment-sub-heading",
								children: "How the treatment works"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
								className: "mt-6 space-y-5",
								children: treatment.howItWorks.map((step, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex gap-4 treatment-sub-description",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										"aria-label": `Step ${index + 1}`,
										className: "grid size-8 shrink-0 place-items-center rounded-full bg-secondary font-display text-sm font-semibold text-primary",
										children: index + 1
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display text-base font-semibold text-ink",
										children: step.step
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-sm leading-relaxed",
										children: step.detail
									})] })]
								}, step.step))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "treatment-sub-section",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-2xl treatment-sub-heading",
								children: "Visits and recovery"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 leading-relaxed treatment-sub-description",
								children: treatment.visitsAndRecovery
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-8 sm:grid-cols-2 limitation-section",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListBlock, {
								title: "Benefits",
								items: treatment.benefits
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListBlock, {
								title: "Limitations",
								items: treatment.limitations
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-border bg-surface-soft p-6 tretment-risk-section",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-2xl",
									children: "Risks to be aware of"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm leading-relaxed",
									children: "Every dental procedure carries some risk. Your dentist will discuss these with you in person, based on your own examination and X-rays."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-5 space-y-3",
									children: treatment.risks.map((risk) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex gap-2 text-sm leading-relaxed",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											"aria-hidden": "true",
											className: "mt-0.5 shrink-0 text-primary",
											children: "•"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: risk })]
									}, risk))
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListBlock, {
							title: "Aftercare",
							items: treatment.aftercare
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-destructive/30 bg-destructive/5 p-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-2xl",
								children: "When to contact the clinic"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-5 space-y-3",
								children: treatment.whenToContact.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex gap-2 text-sm leading-relaxed",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										"aria-hidden": "true",
										className: "mt-0.5 shrink-0 text-destructive",
										children: "•"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item })]
								}, item))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-2xl",
							children: "Frequently asked questions"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaqAccordion, {
								faqs: treatment.faqs,
								idPrefix: treatment.slug
							})
						})] })
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "space-y-6 lg:sticky lg:top-28 lg:self-start",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-border bg-card p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-lg font-semibold text-ink",
								children: "Available at"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-4 space-y-3 text-sm",
								children: branches.map((location) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
										"aria-hidden": "true",
										className: "mt-0.5 size-4 shrink-0 text-primary"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/locations/$branch",
										params: { branch: location.slug },
										className: "hover:text-primary",
										children: location.name
									})]
								}, location.id))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-xs leading-relaxed text-muted-foreground",
								children: "We do not publish prices online because treatment plans differ from person to person. Ask for an estimate at your consultation."
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MedicalReviewer, {
						reviewedBy: treatment.reviewedBy,
						lastReviewed: treatment.lastReviewed
					})]
				})]
			})
		}),
		doctors.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			labelledBy: "treatment-doctors",
			className: "treatment-doctor-section",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
				className: "px-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						id: "treatment-doctors",
						className: "text-2xl sm:text-3xl",
						children: "Dentists you can ask about this treatment"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground",
						children: "These clinicians see patients at the branches where this treatment is offered. Who carries out your treatment is confirmed at your consultation."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
						children: doctors.map((doctor) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DoctorCard, { doctor }) }, doctor.slug))
					})
				]
			})
		}) : null,
		related.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			tone: "soft",
			labelledBy: "related-treatments",
			className: "related-treatments-section",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
				className: "px-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					id: "related-treatments",
					className: "text-2xl sm:text-3xl",
					children: "Related treatments"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
					children: related.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TreatmentCard, { treatment: item }) }, item.slug))
				})]
			})
		}) : null,
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppCtaSection, {
			context: treatment.title,
			className: "cta-section-treatment"
		})
	] });
}
//#endregion
export { TreatmentDetailPage as component };
