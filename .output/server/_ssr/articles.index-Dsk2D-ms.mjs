import { l as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { B as Section, C as publishedArticles, l as crumbs$3 } from "./router-BEx1EPk1.mjs";
import { t as PageHeader } from "./PageHeader-tWSigD8I.mjs";
import { t as EmptyState } from "./Placeholders-Bm0XVBpw.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/articles.index-Dsk2D-ms.js
var import_jsx_runtime = require_jsx_runtime();
function ArticleCard({ article }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "group relative flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-lift",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow",
				children: article.topic
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-3 font-display text-lg font-semibold text-ink",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/articles/$slug",
					params: { slug: article.slug },
					className: "after:absolute after:inset-0 after:content-['']",
					children: article.title
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm leading-relaxed",
				children: article.description
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 text-xs text-muted-foreground",
				children: article.readingTime
			})
		]
	});
}
function ArticlesIndexPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		eyebrow: "Dental health",
		title: "Articles and everyday advice",
		description: "Short, evidence-informed reads on looking after your teeth between visits. General information only — always ask your dentist about your own situation.",
		breadcrumbs: crumbs$3
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: publishedArticles.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
		children: publishedArticles.map((article) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArticleCard, { article }) }, article.slug))
	}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
		title: "Articles coming soon",
		description: "We are preparing dental health guides reviewed by the clinical team."
	}) })] });
}
//#endregion
export { ArticlesIndexPage as component };
