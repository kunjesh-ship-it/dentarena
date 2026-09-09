import { l as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { B as Section, I as publishedTreatments, M as categoryLabels, r as crumbs } from "./router-BEx1EPk1.mjs";
import { t as PageHeader } from "./PageHeader-tWSigD8I.mjs";
import { i as TreatmentCard } from "./TreatmentCard-uA9fqf2E.mjs";
import { n as WhatsAppCtaSection } from "./WhatsAppCta-Y96H3BL6.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/treatments.index-Cy1XcCRb.js
var import_jsx_runtime = require_jsx_runtime();
var categoryOrder = [
	"preventive",
	"restorative",
	"cosmetic",
	"orthodontics",
	"surgical",
	"specialist"
];
function TreatmentsIndexPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			eyebrow: "Treatments",
			title: "Dental treatments at Dent Arena",
			description: "Explore clear, simple explanations of the care we provide, so you know what to expect before you sit in the chair. Every page covers what the treatment involves, how many visits it usually takes and how to look after your teeth afterwards.",
			className: "treatments-hero-section",
			breadcrumbs: crumbs
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			className: "preventive-section",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-16",
				children: categoryOrder.map((category) => {
					const items = publishedTreatments.filter((t) => t.category === category);
					if (items.length === 0) return null;
					const headingId = `category-${category}`;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						id: headingId,
						className: "text-2xl sm:text-3xl preventive-heading",
						children: categoryLabels[category]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						"aria-labelledby": headingId,
						className: "mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
						children: items.map((treatment) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TreatmentCard, { treatment }) }, treatment.slug))
					})] }, category);
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppCtaSection, {
			context: "Treatments page",
			className: "cta-section-treatment"
		})
	] });
}
//#endregion
export { TreatmentsIndexPage as component };
