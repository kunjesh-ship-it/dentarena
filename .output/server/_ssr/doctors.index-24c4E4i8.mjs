import { l as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { B as Section, E as publishedDoctors, s as crumbs$2 } from "./router-BEx1EPk1.mjs";
import { t as PageHeader } from "./PageHeader-tWSigD8I.mjs";
import { n as WhatsAppCtaSection } from "./WhatsAppCta-Y96H3BL6.mjs";
import { t as EmptyState } from "./Placeholders-Bm0XVBpw.mjs";
import { t as DoctorCard } from "./DoctorCard-BEdNjR_i.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/doctors.index-24c4E4i8.js
var import_jsx_runtime = require_jsx_runtime();
function DoctorsIndexPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			eyebrow: "Our team",
			title: "The dentists behind Dent Arena",
			description: "You will be seen by a qualified dentist who explains your options before any treatment begins. Full qualifications and registration numbers are shown once each clinician has confirmed them.",
			breadcrumbs: crumbs$2
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: publishedDoctors.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
			children: publishedDoctors.map((doctor) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DoctorCard, { doctor }) }, doctor.slug))
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
			title: "Team profiles are being prepared",
			description: "Dentist profiles will appear here once the clinic has confirmed names, qualifications and registration details."
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppCtaSection, { context: "Doctors page" })
	] });
}
//#endregion
export { DoctorsIndexPage as component };
