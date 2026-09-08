import { a as __toESM } from "../_runtime.mjs";
import { c as require_react, l as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as Search } from "../_libs/lucide-react.mjs";
import { B as Section, S as Button, V as cn, _ as generalFaqs, g as faqCategories, p as crumbs$7 } from "./router-BEx1EPk1.mjs";
import { t as PageHeader } from "./PageHeader-tWSigD8I.mjs";
import { t as FaqAccordion } from "./FaqAccordion-CoQbstlH.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/faqs-DlI1hz_N.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Input = import_react.forwardRef(({ className, type, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		className: cn("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Input.displayName = "Input";
function FaqsPage() {
	const [query, setQuery] = (0, import_react.useState)("");
	const [topic, setTopic] = (0, import_react.useState)(null);
	const filtered = (0, import_react.useMemo)(() => {
		const q = query.trim().toLowerCase();
		return generalFaqs.filter((faq) => {
			const matchesTopic = !topic || faq.topic === topic;
			const matchesQuery = !q || faq.question.toLowerCase().includes(q) || faq.answer.toLowerCase().includes(q);
			return matchesTopic && matchesQuery;
		});
	}, [query, topic]);
	const groups = faqCategories.map((category) => ({
		category,
		faqs: filtered.filter((faq) => faq.topic === category.id)
	})).filter((group) => group.faqs.length > 0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		eyebrow: "Questions",
		title: "Frequently asked questions",
		description: "General, educational information about dental care and about visiting Dent Arena. It is not a diagnosis or personal advice — what is right for you depends on a clinical examination.",
		breadcrumbs: crumbs$7
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-4 md:grid-cols-1 md:items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
					"aria-hidden": "true",
					className: "pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					type: "search",
					value: query,
					onChange: (event) => setQuery(event.target.value),
					placeholder: "Search questions",
					"aria-label": "Search frequently asked questions",
					className: "pl-9"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap gap-2",
				role: "group",
				"aria-label": "Filter by category",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "button",
					size: "sm",
					variant: topic === null ? "default" : "outline",
					"aria-pressed": topic === null,
					onClick: () => setTopic(null),
					children: "All"
				}), faqCategories.map((category) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "button",
					size: "sm",
					variant: topic === category.id ? "default" : "outline",
					"aria-pressed": topic === category.id,
					onClick: () => setTopic(category.id),
					children: category.label
				}, category.id))]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			"aria-live": "polite",
			className: "mt-4 text-sm text-muted-foreground",
			children: [
				"Showing ",
				filtered.length,
				" of ",
				generalFaqs.length,
				" questions"
			]
		}),
		groups.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-8 space-y-12",
			children: groups.map(({ category, faqs }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				"aria-labelledby": `faq-${category.id}`,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						id: `faq-${category.id}`,
						className: "text-2xl",
						children: category.label
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted-foreground",
						children: category.description
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaqAccordion, {
							faqs,
							idPrefix: category.id
						})
					})
				]
			}, category.id))
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-10 rounded-2xl border border-dashed border-input bg-card px-6 py-12 text-center text-sm text-muted-foreground",
			children: [
				"No questions match that search. Try a different word, or",
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/contact",
					className: "font-medium text-primary underline underline-offset-4",
					children: "contact the clinic"
				}),
				"."
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-14 grid gap-6 md:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl border border-border bg-surface-soft p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-xl",
						children: "Looking for treatment detail?"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm leading-relaxed text-muted-foreground",
						children: "Each treatment page explains what the procedure involves, its benefits, limitations and aftercare."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/treatments",
							className: "font-medium text-primary underline underline-offset-4",
							children: "Browse all treatments"
						})
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl border border-border bg-card p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-xl",
						children: "Still have a question?"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm leading-relaxed text-muted-foreground",
						children: "Send it with your appointment request and the team will answer before you attend."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/book-appointment",
							className: "font-medium text-primary underline underline-offset-4",
							children: "Request an appointment"
						})
					})
				]
			})]
		})
	] })] });
}
//#endregion
export { FaqsPage as component };
