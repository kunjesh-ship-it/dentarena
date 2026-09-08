import { l as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as Phone, l as MessageCircle } from "../_libs/lucide-react.mjs";
import { A as clinic, S as Button, V as cn, j as telHref, x as generalEnquiryLink, z as Container } from "./router-BEx1EPk1.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/WhatsAppCta-Y96H3BL6.js
var import_jsx_runtime = require_jsx_runtime();
function WhatsAppButton({ context, label = "Request Appointment on WhatsApp", size = "lg", className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
		asChild: true,
		variant: "whatsapp",
		size,
		className: cn("max-w-full whitespace-normal text-center", className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
			href: generalEnquiryLink(context),
			target: "_blank",
			rel: "noopener noreferrer",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { "aria-hidden": "true" }), label]
		})
	});
}
function WhatsAppCtaSection({ context, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		"aria-labelledby": "whatsapp-cta-heading",
		className: cn("bg-ink py-16 text-secondary sm:py-20", className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-8 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow text-accent",
					children: "Appointments"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					id: "whatsapp-cta-heading",
					className: "mt-3 text-3xl text-secondary sm:text-4xl cta-treatment-heading",
					children: "Send an appointment request on WhatsApp"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-xl text-sm leading-relaxed text-secondary/90 cta-treatment-description",
					children: "Tell us your preferred branch, day and time. A request is not a confirmed booking — the team will reply to agree a slot that suits you. Nothing you type is stored on this website."
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "whatsapp",
					size: "lg",
					className: "hero-btn",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/book-appointment",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { "aria-hidden": "true" }), "Request appointment"]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					size: "lg",
					variant: "outline",
					className: "border-secondary/40 text-secondary hover:bg-secondary/10 hero-btn",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: telHref,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { "aria-hidden": "true" }),
							"Call ",
							clinic.phoneDisplay
						]
					})
				})]
			})]
		}) })
	});
}
//#endregion
export { WhatsAppCtaSection as n, WhatsAppButton as t };
