import { l as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as Phone, d as MapPin } from "../_libs/lucide-react.mjs";
import { A as clinic, B as Section, D as formatAddress, L as confirmed, R as isPlaceholder, S as Button, i as Route$3, j as telHref, w as getDoctor } from "./router-BEx1EPk1.mjs";
import { t as PageHeader } from "./PageHeader-tWSigD8I.mjs";
import { n as WhatsAppCtaSection } from "./WhatsAppCta-Y96H3BL6.mjs";
import { n as PendingNote } from "./Placeholders-Bm0XVBpw.mjs";
import { t as MapEmbed } from "./MapEmbed-CV4Txc85.mjs";
import { t as DoctorCard } from "./DoctorCard-BEdNjR_i.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/locations._branch-CQD4yiD8.js
var import_jsx_runtime = require_jsx_runtime();
function BranchPage() {
	const { location } = Route$3.useLoaderData();
	const hours = confirmed(location.hours);
	const doctors = location.doctorSlugs.map((slug) => getDoctor(slug)).filter((d) => Boolean(d));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			eyebrow: "Branch",
			title: location.name,
			description: location.description,
			breadcrumbs: [
				{
					name: "Home",
					path: "/"
				},
				{
					name: "Locations",
					path: "/locations"
				},
				{
					name: location.shortName,
					path: `/locations/${location.slug}`
				}
			],
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						size: "lg",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: location.directionsUrl,
							target: "_blank",
							rel: "noopener noreferrer",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { "aria-hidden": "true" }), "Get directions"]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						size: "lg",
						variant: "outline",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: telHref,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { "aria-hidden": "true" }), clinic.phoneDisplay]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						size: "lg",
						variant: "ghost",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/book-appointment",
							children: "Request appointment"
						})
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-10 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-2xl",
							children: "Address"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("address", {
							className: "mt-3 leading-relaxed not-italic",
							children: formatAddress(location).map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block",
								children: line
							}, line))
						}),
						isPlaceholder(location.postalCode) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PendingNote, {
							item: location.postalCode,
							className: "mt-3"
						}) : null
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl",
						children: "Opening hours"
					}), hours ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
						className: "mt-3 space-y-2 text-sm",
						"aria-label": "Opening hours",
						children: hours.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between gap-4 border-b border-border py-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "font-medium text-ink",
								children: h.days
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: h.hours })]
						}, h.days))
					}) : isPlaceholder(location.hours) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PendingNote, {
						item: location.hours,
						className: "mt-3"
					}) : null] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-4 sm:grid-cols-2",
						children: [
							["Landmark", location.landmark],
							["Parking", location.parking],
							["Accessibility", location.accessibility]
						].map(([label, value]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-border bg-card p-5 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display font-semibold text-ink",
								children: label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 leading-relaxed",
								children: confirmed(value) ?? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted-foreground italic",
									children: "Awaiting confirmation"
								})
							})]
						}, label))
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapEmbed, { location })]
		}) }),
		doctors.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			tone: "soft",
			labelledBy: "branch-team",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
				id: "branch-team",
				className: "text-2xl sm:text-3xl",
				children: ["Dentists at ", location.shortName]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
				children: doctors.map((doctor) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DoctorCard, { doctor }) }, doctor.slug))
			})]
		}) : null,
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppCtaSection, { context: location.name })
	] });
}
//#endregion
export { BranchPage as component };
