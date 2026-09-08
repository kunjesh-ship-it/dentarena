import { l as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as Phone, d as MapPin } from "../_libs/lucide-react.mjs";
import { A as clinic, B as Section, D as formatAddress, L as confirmed, S as Button, a as crumbs$1, j as telHref, k as locations } from "./router-BEx1EPk1.mjs";
import { t as PageHeader } from "./PageHeader-tWSigD8I.mjs";
import { n as WhatsAppCtaSection } from "./WhatsAppCta-Y96H3BL6.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/locations.index-DiaRZS51.js
var import_jsx_runtime = require_jsx_runtime();
function LocationCard({ location }) {
	const hours = confirmed(location.hours);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "flex h-full flex-col rounded-2xl border border-border bg-card p-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-display text-xl font-semibold text-ink",
				children: location.name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("address", {
				className: "mt-3 text-sm leading-relaxed not-italic",
				children: formatAddress(location).map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "block",
					children: line
				}, line))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
				className: "mt-4 text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
					className: "text-muted-foreground",
					children: "Opening hours"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
					className: "mt-1",
					children: hours ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-1",
						children: hours.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-medium text-ink",
								children: h.days
							}),
							" — ",
							h.hours
						] }, h.days))
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-muted-foreground italic",
						children: "Opening hours to be confirmed by the clinic"
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 flex flex-wrap gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						size: "sm",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/locations/$branch",
							params: { branch: location.slug },
							children: "Branch details"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						size: "sm",
						variant: "outline",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: location.directionsUrl,
							target: "_blank",
							rel: "noopener noreferrer",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { "aria-hidden": "true" }), "Get directions"]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						size: "sm",
						variant: "ghost",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: telHref,
							"aria-label": `Call Dent Arena on ${clinic.phoneDisplay}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { "aria-hidden": "true" }), "Call"]
						})
					})
				]
			})
		]
	});
}
function LocationsIndexPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			eyebrow: "Locations",
			title: "Two branches across Surat",
			description: "Visit us in Bhatar or Vesu. Both branches are run by the same team, so you can choose whichever is easier to reach.",
			breadcrumbs: crumbs$1
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "grid gap-6 md:grid-cols-2",
			children: locations.map((location) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LocationCard, { location }) }, location.id))
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppCtaSection, { context: "Locations page" })
	] });
}
//#endregion
export { LocationsIndexPage as component };
