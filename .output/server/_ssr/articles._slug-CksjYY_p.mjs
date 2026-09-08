import { l as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { B as Section, P as getTreatments, c as Route$7 } from "./router-BEx1EPk1.mjs";
import { t as PageHeader } from "./PageHeader-tWSigD8I.mjs";
import { t as MedicalReviewer } from "./MedicalReviewer-BBr4zbWm.mjs";
import { i as TreatmentCard } from "./TreatmentCard-uA9fqf2E.mjs";
import { n as WhatsAppCtaSection } from "./WhatsAppCta-Y96H3BL6.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/articles._slug-CksjYY_p.js
var import_jsx_runtime = require_jsx_runtime();
function ArticleDetailPage() {
	const { article } = Route$7.useLoaderData();
	const related = getTreatments(article.relatedTreatmentSlugs);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			eyebrow: `${article.topic} · ${article.readingTime}`,
			title: article.title,
			description: article.description,
			breadcrumbs: [
				{
					name: "Home",
					path: "/"
				},
				{
					name: "Articles",
					path: "/articles"
				},
				{
					name: article.title,
					path: `/articles/${article.slug}`
				}
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-12 lg:grid-cols-[minmax(0,1.7fr)_minmax(0,1fr)]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "space-y-10",
				children: [article.body.map((block) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl",
						children: block.heading
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 space-y-4 leading-relaxed",
						children: block.paragraphs.map((paragraph) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: paragraph }, paragraph))
					}),
					block.list ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-5 space-y-2",
						children: block.list.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-2 text-sm leading-relaxed",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"aria-hidden": "true",
								className: "mt-0.5 shrink-0 text-primary",
								children: "•"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item })]
						}, item))
					}) : null
				] }, block.heading)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "rounded-2xl border border-border bg-surface-soft p-5 text-sm leading-relaxed",
					children: "This article is general information and is not a substitute for an examination. If something in your mouth is painful, changing or worrying you, please book a check-up."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
				className: "space-y-6 lg:sticky lg:top-28 lg:self-start",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MedicalReviewer, {
					reviewedBy: article.reviewedBy,
					lastReviewed: article.lastReviewed
				})
			})]
		}) }),
		related.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			tone: "soft",
			labelledBy: "related-care",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				id: "related-care",
				className: "text-2xl sm:text-3xl",
				children: "Related treatments"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
				children: related.map((treatment) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TreatmentCard, { treatment }) }, treatment.slug))
			})]
		}) : null,
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppCtaSection, { context: article.title })
	] });
}
//#endregion
export { ArticleDetailPage as component };
