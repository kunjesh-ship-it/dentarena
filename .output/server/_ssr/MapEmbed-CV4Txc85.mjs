import { l as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { d as MapPin } from "../_libs/lucide-react.mjs";
import { L as confirmed, S as Button } from "./router-BEx1EPk1.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/MapEmbed-CV4Txc85.js
var import_jsx_runtime = require_jsx_runtime();
function MapEmbed({ location }) {
	const embed = confirmed(location.mapEmbedUrl);
	if (embed) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "overflow-hidden rounded-2xl border border-border bg-card",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
			src: embed,
			title: `Map showing ${location.name}`,
			loading: "lazy",
			referrerPolicy: "no-referrer-when-downgrade",
			className: "aspect-[4/3] w-full border-0"
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex aspect-[4/3] flex-col items-center justify-center gap-4 rounded-2xl border border-dashed border-input bg-secondary/60 p-6 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
				"aria-hidden": "true",
				className: "size-6 text-primary"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm",
				children: [
					"Map embed for ",
					location.shortName,
					" will appear here once the clinic confirms its Google Maps listing."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				size: "sm",
				variant: "outline",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: location.directionsUrl,
					target: "_blank",
					rel: "noopener noreferrer",
					children: "Open directions in Maps"
				})
			})
		]
	});
}
//#endregion
export { MapEmbed as t };
