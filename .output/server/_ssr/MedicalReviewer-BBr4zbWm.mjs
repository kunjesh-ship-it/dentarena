import { l as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { a as ShieldCheck } from "../_libs/lucide-react.mjs";
import { L as confirmed, R as isPlaceholder } from "./router-BEx1EPk1.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/MedicalReviewer-BBr4zbWm.js
var import_jsx_runtime = require_jsx_runtime();
function MedicalReviewer({ reviewedBy, lastReviewed }) {
	const reviewer = confirmed(reviewedBy);
	const date = confirmed(lastReviewed);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		className: "rounded-2xl border border-border bg-card p-5 text-sm",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "flex items-center gap-2 font-display font-semibold text-ink",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, {
					"aria-hidden": "true",
					className: "size-4 text-primary"
				}), "Medical review"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
				className: "mt-3 space-y-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
					className: "text-xs tracking-wide text-muted-foreground uppercase",
					children: "Reviewed by"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: reviewer ?? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "text-muted-foreground",
					children: ["Awaiting confirmation", isPlaceholder(reviewedBy) ? ` \u2014 ${reviewedBy.label}` : ""]
				}) })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
					className: "text-xs tracking-wide text-muted-foreground uppercase",
					children: "Last reviewed"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: date ?? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-muted-foreground",
					children: "Awaiting confirmation"
				}) })] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-xs leading-relaxed text-muted-foreground",
				children: "This page is general information and does not replace a dental examination."
			})
		]
	});
}
//#endregion
export { MedicalReviewer as t };
