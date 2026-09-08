import { l as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as ChevronRight } from "../_libs/lucide-react.mjs";
import { z as Container } from "./router-BEx1EPk1.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/PageHeader-tWSigD8I.js
var import_jsx_runtime = require_jsx_runtime();
function Breadcrumbs({ items }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
		"aria-label": "Breadcrumb",
		className: "text-sm",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "flex flex-wrap items-center gap-1.5 text-muted-foreground",
			children: items.map((item, index) => {
				const isLast = index === items.length - 1;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex items-center gap-1.5",
					children: [index > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
						"aria-hidden": "true",
						className: "size-3.5 opacity-60"
					}) : null, isLast ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						"aria-current": "page",
						className: "font-medium text-ink",
						children: item.name
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: item.path,
						className: "underline-offset-4 hover:underline",
						children: item.name
					})]
				}, item.path);
			})
		})
	});
}
function PageHeader({ eyebrow, title, description, breadcrumbs, children, className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `border-b border-border bg-surface-soft ${className} treatments-hero-section`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
			className: "p-sm-10 sm:py-14",
			children: [breadcrumbs ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Breadcrumbs, { items: breadcrumbs }) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 max-w-3xl",
				children: [
					eyebrow ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow mb-3",
						children: eyebrow
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-3xl leading-tight sm:text-4xl md:text-5xl treatments-hero-title",
						children: title
					}),
					description ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-base leading-relaxed sm:text-lg treatments-hero-description",
						children: description
					}) : null,
					children ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-7 hero-btn-section",
						children
					}) : null
				]
			})]
		})
	});
}
//#endregion
export { PageHeader as t };
