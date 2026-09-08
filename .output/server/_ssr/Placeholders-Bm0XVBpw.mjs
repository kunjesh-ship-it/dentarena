import { l as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { p as Info } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Placeholders-Bm0XVBpw.js
var import_jsx_runtime = require_jsx_runtime();
/**
* Visible, honest marker for content the clinic has not yet confirmed.
* It never renders invented information.
*/
function PendingNote({ item, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
		className: `inline-flex items-start gap-2 rounded-lg bg-secondary px-3 py-2 text-xs text-muted-foreground ${className ?? ""}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
			"aria-hidden": "true",
			className: "mt-0.5 size-3.5 shrink-0 text-primary"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-medium text-ink",
				children: "To be confirmed:"
			}),
			" ",
			item.label
		] })]
	});
}
function EmptyState({ title, description, action }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-2xl border border-dashed border-input bg-card px-6 py-14 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-lg font-semibold text-ink",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mx-auto mt-3 max-w-md text-sm leading-relaxed",
				children: description
			}),
			action ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 flex justify-center",
				children: action
			}) : null
		]
	});
}
//#endregion
export { PendingNote as n, EmptyState as t };
