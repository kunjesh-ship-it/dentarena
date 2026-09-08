import { a as __toESM } from "../_runtime.mjs";
import { c as require_react, l as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { _ as ChevronRight, t as X, v as ChevronLeft } from "../_libs/lucide-react.mjs";
import { o as motion, s as AnimatePresence } from "../_libs/framer-motion+[...].mjs";
import { B as Section, f as crumbs$6 } from "./router-BEx1EPk1.mjs";
import { t as PageHeader } from "./PageHeader-tWSigD8I.mjs";
import { n as WhatsAppCtaSection } from "./WhatsAppCta-Y96H3BL6.mjs";
import { n as galleryItems } from "./media-BTmJq8BP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/gallery-D99YoWmp.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function GalleryPage() {
	const authentic = galleryItems.filter((item) => item.imageType === "authentic" && item.approved === true).sort((a, b) => (a.displayOrder ?? 0) - (b.displayOrder ?? 0));
	galleryItems.filter((item) => item.imageType === "generic");
	galleryItems.filter((item) => item.imageType === "placeholder");
	const [isOpen, setIsOpen] = (0, import_react.useState)(false);
	const [selectedIndex, setSelectedIndex] = (0, import_react.useState)(null);
	const handlePrev = (0, import_react.useCallback)(() => {
		if (selectedIndex === null) return;
		setSelectedIndex((prev) => prev !== null && prev > 0 ? prev - 1 : authentic.length - 1);
	}, [selectedIndex, authentic.length]);
	const handleNext = (0, import_react.useCallback)(() => {
		if (selectedIndex === null) return;
		setSelectedIndex((prev) => prev !== null && prev < authentic.length - 1 ? prev + 1 : 0);
	}, [selectedIndex, authentic.length]);
	const handleClose = (0, import_react.useCallback)(() => {
		setIsOpen(false);
		setSelectedIndex(null);
	}, []);
	(0, import_react.useEffect)(() => {
		if (!isOpen) return;
		const handleKeyDown = (e) => {
			if (e.key === "ArrowLeft") handlePrev();
			else if (e.key === "ArrowRight") handleNext();
			else if (e.key === "Escape") handleClose();
		};
		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [
		isOpen,
		handlePrev,
		handleNext,
		handleClose
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			eyebrow: "Clinic gallery",
			title: "Inside the clinic",
			description: "Photographs taken at Dent Arena, alongside slots reserved for further clinic photography. Any illustrative image is labelled as such.",
			breadcrumbs: crumbs$6
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: authentic.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-2xl",
				children: "Dent Arena photographs"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
					children: authentic.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							setSelectedIndex(index);
							setIsOpen(true);
						},
						"data-cursor": "image",
						className: "group overflow-hidden rounded-2xl border border-border bg-card text-left focus-visible:outline-2 focus-visible:outline-primary cursor-pointer aspect-square relative w-full",
						children: item.image && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: item.image.src,
							alt: item.image.alt,
							className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
						})
					}, item.id))
				})
			})]
		}) : null }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppCtaSection, { context: "Clinic gallery" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: isOpen && selectedIndex !== null && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			initial: { opacity: 0 },
			animate: { opacity: 1 },
			exit: { opacity: 0 },
			className: "fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/90 p-4 md:p-10 backdrop-blur-sm select-none",
			onClick: handleClose,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: handleClose,
					className: "absolute top-4 right-4 z-50 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer",
					"aria-label": "Close gallery view",
					"data-cursor": "button",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-6" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative flex h-full w-full max-w-5xl items-center justify-center",
					onClick: (e) => e.stopPropagation(),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: handlePrev,
							className: "absolute left-2 md:left-4 z-40 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer",
							"aria-label": "Previous image",
							"data-cursor": "button",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-6 md:size-8" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: handleNext,
							className: "absolute right-2 md:right-4 z-40 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer",
							"aria-label": "Next image",
							"data-cursor": "button",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-6 md:size-8" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex max-h-[80vh] max-w-[85vw] flex-col items-center justify-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
								mode: "wait",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
									src: authentic[selectedIndex]?.image?.src,
									alt: authentic[selectedIndex]?.image?.alt,
									initial: {
										opacity: 0,
										scale: .95
									},
									animate: {
										opacity: 1,
										scale: 1
									},
									exit: {
										opacity: 0,
										scale: .95
									},
									transition: { duration: .2 },
									className: "max-h-[70vh] max-w-full rounded-lg object-contain shadow-2xl"
								}, selectedIndex)
							}), authentic[selectedIndex]?.title && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 text-center text-white/90",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-base font-semibold",
									children: authentic[selectedIndex]?.title
								}), authentic[selectedIndex]?.caption && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs text-white/60",
									children: authentic[selectedIndex]?.caption
								})]
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute bottom-4 text-sm text-white/50",
					children: [
						selectedIndex + 1,
						" / ",
						authentic.length
					]
				})
			]
		}) })
	] });
}
//#endregion
export { GalleryPage as component };
