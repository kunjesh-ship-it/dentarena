import { l as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { S as ArrowRight } from "../_libs/lucide-react.mjs";
import { o as motion, t as useReducedMotion } from "../_libs/framer-motion+[...].mjs";
import { M as categoryLabels, V as cn, v as useCursorStore } from "./router-BEx1EPk1.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/TreatmentCard-uA9fqf2E.js
var import_jsx_runtime = require_jsx_runtime();
/** Thin arc echoing the arch mask. Decorative only. */
function ArenaArc({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		"aria-hidden": "true",
		viewBox: "0 0 64 22",
		fill: "none",
		className: cn("h-3 w-16 text-accent", className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M1 21C1 9.954 14.88 1 32 1s31 8.954 31 20",
			stroke: "currentColor",
			strokeWidth: "2",
			strokeLinecap: "round"
		})
	});
}
/** Three dots of decreasing size — list bullet and section end-mark. */
function SmileDots({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		"aria-hidden": "true",
		viewBox: "0 0 34 10",
		fill: "none",
		className: cn("h-2.5 w-9", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "5",
				cy: "5",
				r: "5",
				className: "fill-accent"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "18",
				cy: "5",
				r: "3.5",
				className: "fill-gold"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "29",
				cy: "5",
				r: "2.5",
				className: "fill-blush"
			})
		]
	});
}
/** Abstract single-stroke tooth silhouette with continuous smooth floating loop animation. */
function EnamelOutline({ className, animate = true }) {
	const shouldReduceMotion = useReducedMotion();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"aria-hidden": "true",
		className: cn("pointer-events-none text-accent", className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.svg, {
			viewBox: "0 0 200 240",
			fill: "none",
			animate: shouldReduceMotion || !animate ? false : {
				y: [
					-16,
					16,
					-16
				],
				rotate: [
					-1,
					1,
					-1
				]
			},
			transition: {
				duration: 5.5,
				repeat: Infinity,
				ease: "easeInOut"
			},
			className: "size-full text-current",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M100 18c26 0 34-12 58-12 26 0 36 22 36 52 0 34-14 48-20 84-6 34-8 92-30 92-18 0-16-52-28-76-6-12-26-12-32 0-12 24-10 76-28 76-22 0-24-58-30-92C20 106 6 92 6 58 6 28 16 6 42 6c24 0 32 12 58 12Z",
				stroke: "currentColor",
				strokeWidth: "2.5"
			})
		})
	});
}
/** Slightly irregular hand-drawn ring — used once per page. */
function HandCircle({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		"aria-hidden": "true",
		viewBox: "0 0 220 90",
		fill: "none",
		preserveAspectRatio: "none",
		className: cn("text-gold", className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M139 6C96 1 44 6 20 24 -3 41 6 68 40 79c36 12 112 12 152-6 24-11 27-33 4-46C179 16 152 9 128 7",
			stroke: "currentColor",
			strokeWidth: "2.5",
			strokeLinecap: "round"
		})
	});
}
function TreatmentCard({ treatment, featured = false }) {
	const { setVariant } = useCursorStore();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		onMouseEnter: () => setVariant("button"),
		onMouseLeave: () => setVariant("default"),
		className: cn("group relative flex h-full flex-col rounded-[2rem] border border-border bg-card p-6 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-soft sm:p-7", featured && ""),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SmileDots, { className: "shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: categoryLabels[treatment.category]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: cn("mt-4 display-3 treatment-card-title", featured && "sm:text-3xl"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/treatments/$slug",
					params: { slug: treatment.slug },
					className: "after:absolute after:inset-0 after:content-['']",
					children: treatment.title
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: cn("mt-3 text-sm leading-relaxed treatment-description", featured && "measure sm:text-base"),
				children: treatment.summary
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary",
				children: ["Read about this treatment", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
					"aria-hidden": "true",
					className: "size-4 transition-transform duration-200 group-hover:translate-x-1"
				})]
			})
		]
	});
}
//#endregion
export { TreatmentCard as i, EnamelOutline as n, HandCircle as r, ArenaArc as t };
