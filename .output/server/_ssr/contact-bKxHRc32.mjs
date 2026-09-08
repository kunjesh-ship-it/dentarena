import { l as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as Phone, d as MapPin, f as Mail, g as Clock } from "../_libs/lucide-react.mjs";
import { A as clinic, B as Section, D as formatAddress, L as confirmed, R as isPlaceholder, S as Button, j as telHref, k as locations, m as crumbs$8, z as Container } from "./router-BEx1EPk1.mjs";
import { t as PageHeader } from "./PageHeader-tWSigD8I.mjs";
import { n as WhatsAppCtaSection, t as WhatsAppButton } from "./WhatsAppCta-Y96H3BL6.mjs";
import { n as PendingNote } from "./Placeholders-Bm0XVBpw.mjs";
import { t as MapEmbed } from "./MapEmbed-CV4Txc85.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-bKxHRc32.js
var import_jsx_runtime = require_jsx_runtime();
function ContactPage() {
	const email = confirmed(clinic.email);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			eyebrow: "Contact",
			title: "Get in touch with Dent Arena",
			description: "Call the front desk, message us on WhatsApp, or visit either of our Surat practices. We reply to WhatsApp messages during clinic hours.",
			breadcrumbs: crumbs$8,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppButton, { context: "Contact page" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "outline",
					size: "lg",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: telHref,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { "aria-hidden": "true" }), clinic.phoneDisplay]
					})
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-border bg-card p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
							"aria-hidden": "true",
							className: "size-5 text-primary"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 font-display text-lg font-semibold text-ink",
							children: "Phone"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed",
							children: "Best for urgent problems and same-day questions."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: telHref,
							className: "mt-3 inline-block font-medium text-primary",
							"aria-label": `Call Dent Arena on ${clinic.phoneDisplay}`,
							children: clinic.phoneDisplay
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-border bg-card p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
							"aria-hidden": "true",
							className: "size-5 text-primary"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 font-display text-lg font-semibold text-ink",
							children: "Email"
						}),
						email ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `mailto:${email}`,
							className: "mt-3 inline-block font-medium text-primary",
							children: email
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed",
							children: "Please use WhatsApp or phone in the meantime."
						}), isPlaceholder(clinic.email) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PendingNote, {
							item: clinic.email,
							className: "mt-3"
						}) : null] })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-border bg-card p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, {
							"aria-hidden": "true",
							className: "size-5 text-primary"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 font-display text-lg font-semibold text-ink",
							children: "Opening hours"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed",
							children: "Hours are confirmed by the clinic when you message. Each branch page shows its own timings once published."
						})
					]
				})
			]
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			tone: "soft",
			labelledBy: "contact-branches",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
				className: "px-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					id: "contact-branches",
					className: "text-2xl sm:text-3xl",
					children: "Our two Surat practices"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid gap-8 lg:grid-cols-2",
					children: locations.map((location) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col rounded-2xl border border-border bg-card p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-lg font-semibold text-ink",
								children: location.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("address", {
								className: "mt-3 flex gap-2 text-sm leading-relaxed not-italic",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
									"aria-hidden": "true",
									className: "mt-0.5 size-4 shrink-0 text-primary"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: formatAddress(location).map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block",
									children: line
								}, line)) })]
							}),
							isPlaceholder(location.postalCode) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PendingNote, {
								item: location.postalCode,
								className: "mt-3"
							}) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-5",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapEmbed, { location })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-5 flex flex-wrap gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									variant: "outline",
									className: "direction-btn",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: location.directionsUrl,
										target: "_blank",
										rel: "noopener noreferrer",
										children: "Get directions"
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									variant: "ghost",
									className: "direction-btn",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/locations/$branch",
										params: { branch: location.slug },
										children: "Branch details"
									})
								})]
							})
						]
					}, location.id))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, {
			className: "px-0",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl border border-border bg-surface-soft p-6 sm:p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl",
						children: "Requesting an appointment"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-2xl text-sm leading-relaxed",
						children: "Our appointment form runs entirely in your browser and simply opens WhatsApp with your message ready to send. Nothing is stored on this website. A request is not a confirmed appointment — the clinic replies to agree a time with you."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						size: "lg",
						className: "mt-5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/book-appointment",
							children: "Request an appointment"
						})
					})
				]
			})
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppCtaSection, { context: "Contact page" })
	] });
}
//#endregion
export { ContactPage as component };
