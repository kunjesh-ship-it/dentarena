import { l as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { L as confirmed, O as getLocation, V as cn, v as useCursorStore } from "./router-BEx1EPk1.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/DoctorCard-BEdNjR_i.js
var import_jsx_runtime = require_jsx_runtime();
function DoctorCard({ doctor }) {
	const { setVariant } = useCursorStore();
	const photo = confirmed(doctor.photo);
	const role = confirmed(doctor.role);
	const qualifications = confirmed(doctor.qualifications);
	const branches = doctor.locationIds.map((id) => getLocation(id)?.shortName).filter(Boolean).join(" and ");
	const initials = doctor.name.replace("Dr. ", "").split(" ").map((p) => p[0]).join("");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		onMouseEnter: () => setVariant("image"),
		onMouseLeave: () => setVariant("default"),
		className: "group relative flex h-full flex-col overflow-hidden rounded-[3rem] border border-border bg-card transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-soft",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "p-3 pb-0 team-card",
			children: photo ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: photo.src,
				alt: photo.alt,
				width: photo.width,
				height: photo.height,
				loading: "lazy",
				className: cn("mask-arch inner-hairline aspect-4/5 w-full object-cover", photo.className)
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mask-arch inner-hairline flex aspect-4/5 w-full flex-col items-center justify-center gap-3 bg-surface-warm px-5 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					"aria-hidden": "true",
					className: "grid size-20 place-items-center rounded-full bg-background font-display text-xl font-semibold text-primary",
					children: initials
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs leading-relaxed text-muted-foreground",
					children: "Photograph awaiting the clinician’s approval"
				})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-1 flex-col p-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "display-3 team-member-name",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/doctors/$slug",
						params: { slug: doctor.slug },
						className: "after:absolute after:inset-0 after:content-['']",
						children: doctor.name
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 smallcaps text-muted-foreground team-member-role",
					children: role ?? "Dentist at Dent Arena"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
					className: "mt-2 mt-sm-5 space-y-2 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-2 team-qualifications-container",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "shrink-0 text-muted-foreground team-qualifications",
							children: "Qualifications"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "min-w-0 team-qualifications",
							children: qualifications ? qualifications.join(", ") : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted-foreground italic",
								children: "Awaiting confirmation"
							})
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "shrink-0 text-muted-foreground",
							children: "Practises at"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "min-w-0",
							children: branches
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "mt-2 mt-sm-6 text-sm font-medium text-primary",
					children: "View profile"
				})
			]
		})]
	});
}
//#endregion
export { DoctorCard as t };
