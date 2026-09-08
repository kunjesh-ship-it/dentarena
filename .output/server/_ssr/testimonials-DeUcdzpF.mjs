import { l as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { m as Facebook, n as Star, s as Quote } from "../_libs/lucide-react.mjs";
import { A as clinic, B as Section, S as Button, u as crumbs$4 } from "./router-BEx1EPk1.mjs";
import { t as PageHeader } from "./PageHeader-tWSigD8I.mjs";
import { t as EmptyState } from "./Placeholders-Bm0XVBpw.mjs";
import { a as testimonials, i as publishableTestimonials } from "./media-BTmJq8BP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/testimonials-DeUcdzpF.js
var import_jsx_runtime = require_jsx_runtime();
/** Renders only verified and approved testimonials. */
function TestimonialCard({ testimonial }) {
	if (!(testimonial.verified === true && testimonial.approved === true)) return null;
	const rating = testimonial.rating;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
		className: "flex h-full flex-col rounded-2xl border border-border bg-card p-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote, {
				"aria-hidden": "true",
				className: "size-5 text-primary"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
				className: "mt-4 flex-1 text-sm leading-relaxed",
				children: [
					"“",
					testimonial.quote,
					"”"
				]
			}),
			typeof rating === "number" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 flex items-center gap-1",
				"aria-label": `Rated ${rating} out of 5`,
				children: Array.from({ length: 5 }).map((_, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
					"aria-hidden": "true",
					className: index < Math.round(rating) ? "size-4 fill-accent text-accent" : "size-4 text-input"
				}, index))
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
				className: "mt-4 border-t border-border pt-4 text-xs text-muted-foreground",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-medium text-ink",
						children: testimonial.patientDisplayName
					}),
					testimonial.treatment ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [" · ", testimonial.treatment] }) : null,
					testimonial.reviewDate ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [" · ", testimonial.reviewDate] }) : null,
					testimonial.source ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						" ",
						"·",
						" ",
						testimonial.sourceUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: testimonial.sourceUrl,
							target: "_blank",
							rel: "noopener noreferrer nofollow",
							className: "underline underline-offset-2",
							children: testimonial.source
						}) : testimonial.source
					] }) : null
				]
			})
		]
	});
}
var facebookUrl = "https://www.facebook.com/DentArenaSurat/";
function TestimonialsPage() {
	const published = publishableTestimonials(testimonials);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		eyebrow: "Patient experiences",
		title: "What patients say",
		description: "We publish testimonials only when the patient has agreed to it and the clinic has verified the review. Nothing on this page is written on a patient's behalf.",
		breadcrumbs: crumbs$4
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [published.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
		children: published.map((testimonial) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TestimonialCard, { testimonial }) }, testimonial.id))
	}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
		title: "Verified patient experiences will be shared here soon.",
		description: "Rather than publish sample reviews, we are collecting genuine feedback from patients at the Bhatar and Vesu practices. In the meantime, you can see the clinic's own updates on Facebook.",
		action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			asChild: true,
			size: "lg",
			variant: "outline",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: facebookUrl,
				target: "_blank",
				rel: "noopener noreferrer",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Facebook, { "aria-hidden": "true" }), " Visit Our Facebook Page"]
			})
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-10 grid gap-6 md:grid-cols-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-2xl border border-border bg-card p-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-xl",
				children: "How we handle reviews"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
				className: "mt-4 space-y-2 text-sm leading-relaxed text-muted-foreground",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
						"No testimonial is written, edited or invented by ",
						clinic.name,
						"."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Reviews from other platforms are republished only with permission and a link to the source." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Star ratings and review counts appear only once verified reviews exist." })
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-2xl border border-border bg-surface-soft p-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xl",
					children: "Been treated at Dent Arena?"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-sm leading-relaxed text-muted-foreground",
					children: "Feedback helps the team improve, and helps other people in Surat decide where to go. You can share yours with the clinic directly."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-sm",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contact",
						className: "font-medium text-primary underline underline-offset-4",
						children: "Contact the clinic"
					})
				})
			]
		})]
	})] })] });
}
//#endregion
export { TestimonialsPage as component };
