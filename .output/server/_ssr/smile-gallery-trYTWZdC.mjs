import { a as __toESM } from "../_runtime.mjs";
import { c as require_react, l as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as ShieldCheck, h as Columns2, i as SlidersHorizontal } from "../_libs/lucide-react.mjs";
import { B as Section, S as Button, V as cn, d as crumbs$5 } from "./router-BEx1EPk1.mjs";
import { t as PageHeader } from "./PageHeader-tWSigD8I.mjs";
import { t as WhatsAppButton } from "./WhatsAppCta-Y96H3BL6.mjs";
import { t as EmptyState } from "./Placeholders-Bm0XVBpw.mjs";
import { r as publishableCases, t as caseStudies } from "./media-BTmJq8BP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/smile-gallery-trYTWZdC.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/**
* Eligibility gate. Enforced here as well as in the data layer so a case can
* never be rendered publicly without consent, approval and both images.
*/
function isCasePublishable(item) {
	return item.patientConsentApproved === true && item.contentApproved === true && Boolean(item.beforeImage?.src) && Boolean(item.afterImage?.src);
}
function SideBySide({ item }) {
	const before = item.beforeImage;
	const after = item.afterImage;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid grid-cols-2 gap-3",
		children: [{
			label: "Before",
			image: before
		}, {
			label: "After",
			image: after
		}].map(({ label, image }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: image.src,
			alt: `${label}: ${image.alt}`,
			width: image.width,
			height: image.height,
			loading: "lazy",
			decoding: "async",
			className: "aspect-square w-full rounded-xl object-cover"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
			className: "mt-2 text-xs font-medium tracking-wide text-muted-foreground uppercase",
			children: label
		})] }, label))
	});
}
function SliderCompare({ item }) {
	const before = item.beforeImage;
	const after = item.afterImage;
	const [position, setPosition] = (0, import_react.useState)(50);
	const labelId = (0, import_react.useId)();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative overflow-hidden rounded-xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: before.src,
					alt: `Before: ${before.alt}`,
					width: before.width,
					height: before.height,
					loading: "lazy",
					decoding: "async",
					className: "aspect-[4/3] w-full object-cover"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0 overflow-hidden",
					style: { clipPath: `inset(0 0 0 ${position}%)` },
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: after.src,
						alt: `After: ${after.alt}`,
						width: after.width,
						height: after.height,
						loading: "lazy",
						decoding: "async",
						className: "aspect-[4/3] w-full object-cover"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					"aria-hidden": "true",
					className: "absolute inset-y-0 w-0.5 bg-secondary/90",
					style: { left: `${position}%` }
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
			id: labelId,
			htmlFor: `${labelId}-range`,
			className: "mt-4 block text-xs text-muted-foreground",
			children: "Drag to compare before and after"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			id: `${labelId}-range`,
			type: "range",
			min: 0,
			max: 100,
			step: 1,
			value: position,
			onChange: (event) => setPosition(Number(event.target.value)),
			"aria-labelledby": labelId,
			"aria-label": `Before and after comparison slider for ${item.title}`,
			"aria-valuemin": 0,
			"aria-valuemax": 100,
			"aria-valuenow": position,
			className: "mt-2 w-full accent-[var(--color-primary)]"
		})
	] });
}
function BeforeAfterCase({ item, enableSlider = true, className }) {
	const [mode, setMode] = (0, import_react.useState)("side-by-side");
	if (!isCasePublishable(item)) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: cn("rounded-2xl border border-border bg-card p-5", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-display text-lg font-semibold text-ink",
				children: item.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-xs tracking-wide text-muted-foreground uppercase",
				children: item.treatment
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm leading-relaxed",
				children: item.summary
			}),
			enableSlider ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					type: "button",
					size: "sm",
					variant: mode === "side-by-side" ? "default" : "outline",
					onClick: () => setMode("side-by-side"),
					"aria-pressed": mode === "side-by-side",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Columns2, { "aria-hidden": "true" }), " Side by side"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					type: "button",
					size: "sm",
					variant: mode === "slider" ? "default" : "outline",
					onClick: () => setMode("slider"),
					"aria-pressed": mode === "slider",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlidersHorizontal, { "aria-hidden": "true" }), " Slider"]
				})]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4",
				children: enableSlider && mode === "slider" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderCompare, { item }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SideBySide, { item })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-xs leading-relaxed text-muted-foreground",
				children: "Published with the patient’s written consent. Individual results vary and depend on clinical examination."
			})
		]
	});
}
function SmileGalleryPage() {
	const cases = publishableCases(caseStudies).filter(isCasePublishable);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		eyebrow: "Smile gallery",
		title: "Before and after",
		description: "This page will only ever show real Dent Arena cases, photographed at the clinic and published with the patient's written consent.",
		breadcrumbs: crumbs$5
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [cases.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "grid gap-6 lg:grid-cols-2",
		children: cases.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BeforeAfterCase, { item }) }, item.id))
	}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
		title: "Real smile transformations will be added here after patient approval.",
		description: "We do not publish stock photographs, illustrative results or example cases. Each case needs documented patient consent and clinical sign-off before it appears.",
		action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppButton, {
			context: "Smile gallery — discussing smile goals",
			label: "Discuss Your Smile Goals"
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-10 grid gap-6 md:grid-cols-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-2xl border border-border bg-card p-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, {
					"aria-hidden": "true",
					className: "size-5 text-primary"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 text-xl",
					children: "How cases are published"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-4 space-y-2 text-sm leading-relaxed text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Written patient consent is recorded before anything is prepared." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "The clinical team approves the images and the wording." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Both the before and the after photograph must exist and be genuine." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Cases that fail any of these checks cannot be displayed on this site." })
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-2xl border border-border bg-surface-soft p-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xl",
					children: "What results depend on"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-sm leading-relaxed text-muted-foreground",
					children: "Outcomes differ from person to person and depend on the diagnosis, the condition of the teeth and gums, and how tissues heal. Nothing shown here should be read as a prediction for your own case — a recommendation can only follow a clinical examination."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-4 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/treatments",
							className: "font-medium text-primary underline underline-offset-4",
							children: "Explore treatments"
						}),
						" ",
						"or",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/book-appointment",
							className: "font-medium text-primary underline underline-offset-4",
							children: "send an appointment request"
						}),
						"."
					]
				})
			]
		})]
	})] })] });
}
//#endregion
export { SmileGalleryPage as component };
