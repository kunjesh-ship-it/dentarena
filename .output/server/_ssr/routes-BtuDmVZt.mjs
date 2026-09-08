import { a as __toESM } from "../_runtime.mjs";
import { c as require_react, l as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as ArrowLeft, S as ArrowRight, a as ShieldCheck, c as Phone, d as MapPin, l as MessageCircle, r as Sparkles, x as CalendarCheck } from "../_libs/lucide-react.mjs";
import { a as useScroll, o as motion, r as useTransform, s as AnimatePresence, t as useReducedMotion } from "../_libs/framer-motion+[...].mjs";
import { A as clinic, D as formatAddress, E as publishedDoctors, L as confirmed, N as featuredTreatments, S as Button, V as cn, _ as generalFaqs, j as telHref, k as locations, x as generalEnquiryLink, y as Reveal, z as Container } from "./router-BEx1EPk1.mjs";
import { i as TreatmentCard, n as EnamelOutline, r as HandCircle, t as ArenaArc } from "./TreatmentCard-uA9fqf2E.mjs";
import { t as WhatsAppButton } from "./WhatsAppCta-Y96H3BL6.mjs";
import { t as DoctorCard } from "./DoctorCard-BEdNjR_i.mjs";
import { t as FaqAccordion } from "./FaqAccordion-CoQbstlH.mjs";
import { n as galleryItems } from "./media-BTmJq8BP.mjs";
import { t as useEmblaCarousel } from "../_libs/embla-carousel-react+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BtuDmVZt.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var CarouselContext = import_react.createContext(null);
function useCarousel() {
	const context = import_react.useContext(CarouselContext);
	if (!context) throw new Error("useCarousel must be used within a <Carousel />");
	return context;
}
var Carousel = import_react.forwardRef(({ orientation = "horizontal", opts, setApi, plugins, className, children, ...props }, ref) => {
	const [carouselRef, api] = useEmblaCarousel({
		...opts,
		axis: orientation === "horizontal" ? "x" : "y"
	}, plugins);
	const [canScrollPrev, setCanScrollPrev] = import_react.useState(false);
	const [canScrollNext, setCanScrollNext] = import_react.useState(false);
	const onSelect = import_react.useCallback((api) => {
		if (!api) return;
		setCanScrollPrev(api.canScrollPrev());
		setCanScrollNext(api.canScrollNext());
	}, []);
	const scrollPrev = import_react.useCallback(() => {
		api?.scrollPrev();
	}, [api]);
	const scrollNext = import_react.useCallback(() => {
		api?.scrollNext();
	}, [api]);
	const handleKeyDown = import_react.useCallback((event) => {
		if (event.key === "ArrowLeft") {
			event.preventDefault();
			scrollPrev();
		} else if (event.key === "ArrowRight") {
			event.preventDefault();
			scrollNext();
		}
	}, [scrollPrev, scrollNext]);
	import_react.useEffect(() => {
		if (!api || !setApi) return;
		setApi(api);
	}, [api, setApi]);
	import_react.useEffect(() => {
		if (!api) return;
		onSelect(api);
		api.on("reInit", onSelect);
		api.on("select", onSelect);
		return () => {
			api?.off("select", onSelect);
		};
	}, [api, onSelect]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarouselContext.Provider, {
		value: {
			carouselRef,
			api,
			opts,
			orientation: orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
			scrollPrev,
			scrollNext,
			canScrollPrev,
			canScrollNext
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref,
			onKeyDownCapture: handleKeyDown,
			className: cn("relative", className),
			role: "region",
			"aria-roledescription": "carousel",
			...props,
			children
		})
	});
});
Carousel.displayName = "Carousel";
var CarouselContent = import_react.forwardRef(({ className, ...props }, ref) => {
	const { carouselRef, orientation } = useCarousel();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: carouselRef,
		className: "overflow-hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref,
			className: cn("flex", orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col", className),
			...props
		})
	});
});
CarouselContent.displayName = "CarouselContent";
var CarouselItem = import_react.forwardRef(({ className, ...props }, ref) => {
	const { orientation } = useCarousel();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		role: "group",
		"aria-roledescription": "slide",
		className: cn("min-w-0 shrink-0 grow-0 basis-full", orientation === "horizontal" ? "pl-4" : "pt-4", className),
		...props
	});
});
CarouselItem.displayName = "CarouselItem";
var CarouselPrevious = import_react.forwardRef(({ className, variant = "outline", size = "icon", ...props }, ref) => {
	const { orientation, scrollPrev, canScrollPrev } = useCarousel();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
		ref,
		variant,
		size,
		className: cn("absolute  h-8 w-8 rounded-full", orientation === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90", className),
		disabled: !canScrollPrev,
		onClick: scrollPrev,
		...props,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Previous slide"
		})]
	});
});
CarouselPrevious.displayName = "CarouselPrevious";
var CarouselNext = import_react.forwardRef(({ className, variant = "outline", size = "icon", ...props }, ref) => {
	const { orientation, scrollNext, canScrollNext } = useCarousel();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
		ref,
		variant,
		size,
		className: cn("absolute h-8 w-8 rounded-full", orientation === "horizontal" ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90", className),
		disabled: !canScrollNext,
		onClick: scrollNext,
		...props,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Next slide"
		})]
	});
});
CarouselNext.displayName = "CarouselNext";
function ParallaxImage({ children, className, offset = 50 }) {
	const ref = (0, import_react.useRef)(null);
	const shouldReduceMotion = useReducedMotion();
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "end start"]
	});
	const y = useTransform(scrollYProgress, [0, 1], [-offset, offset]);
	if (shouldReduceMotion) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className,
		children
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		className: cn("overflow-hidden", className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			style: { y },
			className: "h-full w-full",
			children
		})
	});
}
/** Photographs of the clinic that the practice has supplied and approved. */
var clinicPhotos = galleryItems.filter((item) => item.imageType === "authentic" && item.approved && item.image).sort((a, b) => (a.displayOrder ?? 99) - (b.displayOrder ?? 99));
var photo = (id) => clinicPhotos.find((p) => p.id === id) ?? clinicPhotos[0];
function HomeHero() {
	const main = photo("reception");
	const inset = photo("clinic-exterior-signboard");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden bg-background band-xl pt-12 md:pt-20 theme-color-1 hero-section",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			"aria-hidden": "true",
			className: "pointer-events-none absolute top-[-10%] right-[-10%] hidden size-[36rem] rounded-full bg-accent/8 blur-3xl lg:block"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
			className: "relative grid items-center gap-5 gap-sm-14 lg:grid-cols-12 lg:gap-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArenaArc, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: "Bhatar & Vesu, Surat"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 80,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "mt-5 display-1 hero-heading",
							children: [
								"Dentistry that takes the time to",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "relative inline-block",
									children: ["explain", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HandCircle, {
										className: "pointer-events-none absolute inset-x-[-8%] top-[-14%] h-[128%] w-[116%]",
										"aria-hidden": "true"
									})]
								}),
								" ",
								"itself"
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 160,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-6 lead hero-section-description",
							children: [clinic.tagline, " From routine check-ups to implants, braces and root canal treatment, Dent Arena looks after families across Surat at two neighbourhood clinics."]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						delay: 240,
						className: "mt-3 mt-sm-9 flex flex-wrap gap-3 hero-btn-section",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppButton, {
							context: "Homepage hero",
							className: "hero-btn"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "lg",
							variant: "outline",
							className: "hero-btn",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/treatments",
								children: "Explore treatments"
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 300,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-sm text-muted-foreground hero-small-font",
							children: "Sending a request does not confirm an appointment — the clinic replies to agree a time."
						})
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: 200,
				className: "lg:col-span-5",
				variant: "image-reveal",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ParallaxImage, {
					offset: 30,
					className: "relative",
					children: [
						main?.image ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: main.image.src,
							alt: main.image.alt,
							width: main.image.width,
							height: main.image.height,
							className: "mask-arch inner-hairline aspect-4/5 w-full object-cover"
						}) : null,
						inset?.image ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: inset.image.src,
							alt: inset.image.alt,
							width: inset.image.width,
							height: inset.image.height,
							loading: "lazy",
							className: "hero-second-image inner-hairline absolute bottom-[-1.5rem] left-[-1.5rem] hidden size-36 rounded-full border-4 border-background object-cover sm:block"
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: 400,
							className: "absolute top-4 right-4",
							variant: "scale-in",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "rounded-full bg-surface-warm/95 px-4 py-2 smallcaps text-ink shadow-soft",
								children: "Two branches"
							})
						})
					]
				})
			})]
		})]
	});
}
var whyChooseUsPoints = [
	{
		icon: ShieldCheck,
		title: "Explained before it's started",
		description: "You'll hear what's happening in your mouth, what the options are and what each one involves — before any treatment begins."
	},
	{
		icon: Sparkles,
		title: "Careful, unhurried care",
		description: "Appointments are planned so there's time for questions. Nervous patients are welcome. Tell us and we'll take it slowly."
	},
	{
		icon: MapPin,
		title: "Two branches in Surat",
		description: "The same team across Bhatar and Vesu, so you can pick whichever branch is easier to reach from home or work."
	},
	{
		icon: CalendarCheck,
		title: "Simple appointment requests",
		description: "Send your preferred branch, day and concern on WhatsApp. We reply to confirm a slot that works for you."
	}
];
function HomeTrustLine() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		"aria-labelledby": "why-choose-us-heading",
		className: "relative overflow-hidden bg-surface-warm band-md chooseus-section",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": "true",
				className: "pointer-events-none absolute -top-24 -right-24 size-96 rounded-full bg-accent/8 blur-3xl"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": "true",
				className: "pointer-events-none absolute -bottom-24 -left-24 size-96 rounded-full bg-primary/8 blur-3xl"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
				className: "relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-3xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArenaArc, { className: "text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow text-primary font-semibold tracking-wider",
							children: "WHY PATIENTS CHOOSE US"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 60,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							id: "why-choose-us-heading",
							className: "mt-4 display-2 text-ink chooseus-heading",
							children: "What a visit to Dent Arena feels like"
						})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-7 mt-sm-10 lg:mt-14",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "grid gap-6 sm:grid-cols-2 lg:gap-8",
						children: whyChooseUsPoints.map((item, index) => {
							const Icon = item.icon;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								as: "li",
								delay: 100 + index * 70,
								className: "h-full",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "group relative flex h-full flex-col justify-between rounded-3xl border border-border/80 bg-card p-7 sm:p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-lift",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/15 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-md",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
												"aria-hidden": "true",
												className: "size-6"
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "mt-6 font-display text-xl font-semibold tracking-tight text-ink sm:text-2xl",
											children: item.title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-3 text-sm leading-relaxed text-muted-foreground sm:text-[0.9375rem]",
											children: item.description
										})
									] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-6 flex items-center gap-2 pt-1 text-xs font-semibold text-primary opacity-sm-0 transition-opacity duration-200 group-hover:opacity-100",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Learn more about our approach" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
											"aria-hidden": "true",
											className: "size-3.5 transition-transform duration-200 group-hover:translate-x-1"
										})]
									})]
								})
							}, item.title);
						})
					})
				})]
			})
		]
	});
}
function HomeTreatments() {
	const items = featuredTreatments.slice(0, 6);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		"aria-labelledby": "treatments-heading",
		className: "bg-background band-lg treatments-section",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
			className: "grid gap-5 gap-sm-12 lg:grid-cols-12 lg:gap-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "lg:col-span-5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "lg:sticky lg:top-28",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: "Treatments"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							id: "treatments-heading",
							className: "mt-4 display-2 treatments-heading",
							children: [
								"Care we provide",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "border-b-4 border-accent/70",
									children: "most often"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 measure text-base leading-relaxed treatments-description",
							children: "Each treatment page explains what it involves, how many visits to expect and how to look after your teeth afterwards."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "outline",
							size: "lg",
							className: "mt-3 mt-sm-8",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/treatments",
								children: "See all treatments"
							})
						})
					] })
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "lg:col-span-7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "grid gap-5 sm:grid-cols-2",
					children: items.map((treatment, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						as: "li",
						delay: Math.min(i, 3) * 70,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TreatmentCard, {
							treatment,
							featured: i === 0
						})
					}, treatment.slug))
				})
			})]
		})
	});
}
function HomePhotoStrip() {
	const tiles = clinicPhotos;
	if (tiles.length === 0) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		"aria-labelledby": "clinic-photos-heading",
		className: "bg-surface-soft band-sm gallery-section",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
			className: "flex flex-wrap items-end justify-between gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				id: "clinic-photos-heading",
				className: "display-3",
				children: "Inside the clinic"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/gallery",
				"data-active": "false",
				className: "link-underline text-sm font-medium text-primary",
				children: "See the full gallery"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
			delay: 140,
			className: "mt-10 relative",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Carousel, {
				opts: {
					align: "start",
					loop: true
				},
				className: "w-full",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarouselContent, {
					className: "-ml-4 lg:-ml-6",
					children: tiles.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarouselItem, {
						className: "pl-4 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 lg:pl-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
							className: "flex flex-col h-full",
							children: [item.image ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: item.image.src,
								alt: item.image.alt,
								width: item.image.width,
								height: item.image.height,
								loading: "lazy",
								className: "inner-hairline aspect-square w-full rounded-3xl object-cover shrink-0"
							}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
								className: "mt-3 text-xs leading-relaxed text-muted-foreground",
								children: item.caption ?? item.title
							})]
						})
					}, item.id))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-0 mt-sm-8 flex justify-sm-end justify-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarouselPrevious, { className: "static shrink-0 translate-y-0 translate-x-0 bg-background/50 backdrop-blur-sm hover:bg-background/80" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarouselNext, { className: "static shrink-0 translate-y-0 translate-x-0 bg-background/50 backdrop-blur-sm hover:bg-background/80" })]
				})]
			})
		})] })
	});
}
function HomeBeforeAfter() {
	const positionRef = (0, import_react.useRef)(50);
	const isDraggingRef = (0, import_react.useRef)(false);
	const rafRef = (0, import_react.useRef)(null);
	const containerRef = (0, import_react.useRef)(null);
	const clipOverlayRef = (0, import_react.useRef)(null);
	const dividerRef = (0, import_react.useRef)(null);
	const sliderWrapperRef = (0, import_react.useRef)(null);
	const handleRef = (0, import_react.useRef)(null);
	const handleBaseClass = "relative my-0 flex size-11 sm:size-12 items-center justify-center rounded-full bg-white shadow-[0_4px_20px_rgba(0,0,0,0.4)] ring-2 ring-white/90 transition-transform duration-75 ease-out";
	const handleActiveClass = "scale-95 shadow-xl ring-accent";
	const handleIdleClass = "group-hover:scale-105";
	const setHandleActive = (0, import_react.useCallback)((active) => {
		if (!handleRef.current) return;
		if (active) {
			handleRef.current.classList.remove(...handleIdleClass.split(" "));
			handleRef.current.classList.add(...handleActiveClass.split(" "));
		} else {
			handleRef.current.classList.remove(...handleActiveClass.split(" "));
			handleRef.current.classList.add(...handleIdleClass.split(" "));
		}
	}, []);
	/** Apply positionRef to the DOM — zero React overhead. */
	const applyPosition = (0, import_react.useCallback)(() => {
		const pct = positionRef.current;
		if (clipOverlayRef.current) {
			const clip = `polygon(0% 0%, ${pct}% 0%, ${pct}% 100%, 0% 100%)`;
			clipOverlayRef.current.style.clipPath = clip;
			clipOverlayRef.current.style.WebkitClipPath = clip;
		}
		if (dividerRef.current) dividerRef.current.style.left = `${pct}%`;
		if (sliderWrapperRef.current) sliderWrapperRef.current.setAttribute("aria-valuenow", String(Math.round(pct)));
	}, []);
	const scheduleFrame = (0, import_react.useCallback)(() => {
		if (rafRef.current !== null) return;
		rafRef.current = requestAnimationFrame(() => {
			rafRef.current = null;
			applyPosition();
		});
	}, [applyPosition]);
	const updatePosition = (0, import_react.useCallback)((clientX) => {
		if (!containerRef.current) return;
		const rect = containerRef.current.getBoundingClientRect();
		if (rect.width <= 0) return;
		const x = clientX - rect.left;
		positionRef.current = Math.min(Math.max(x / rect.width * 100, 0), 100);
		scheduleFrame();
	}, [scheduleFrame]);
	(0, import_react.useEffect)(() => {
		const onPointerMove = (e) => {
			if (!isDraggingRef.current) return;
			updatePosition(e.clientX);
		};
		const onPointerUp = () => {
			if (!isDraggingRef.current) return;
			isDraggingRef.current = false;
			setHandleActive(false);
		};
		window.addEventListener("pointermove", onPointerMove, { passive: true });
		window.addEventListener("pointerup", onPointerUp);
		window.addEventListener("pointercancel", onPointerUp);
		return () => {
			window.removeEventListener("pointermove", onPointerMove);
			window.removeEventListener("pointerup", onPointerUp);
			window.removeEventListener("pointercancel", onPointerUp);
			if (rafRef.current !== null) {
				cancelAnimationFrame(rafRef.current);
				rafRef.current = null;
			}
		};
	}, [updatePosition, setHandleActive]);
	const handlePointerDown = (0, import_react.useCallback)((e) => {
		e.preventDefault();
		isDraggingRef.current = true;
		setHandleActive(true);
		updatePosition(e.clientX);
	}, [updatePosition, setHandleActive]);
	const handleKeyDown = (0, import_react.useCallback)((e) => {
		let moved = false;
		if (e.key === "ArrowLeft") {
			e.preventDefault();
			positionRef.current = Math.max(0, positionRef.current - 2);
			moved = true;
		} else if (e.key === "ArrowRight") {
			e.preventDefault();
			positionRef.current = Math.min(100, positionRef.current + 2);
			moved = true;
		} else if (e.key === "Home") {
			e.preventDefault();
			positionRef.current = 0;
			moved = true;
		} else if (e.key === "End") {
			e.preventDefault();
			positionRef.current = 100;
			moved = true;
		}
		if (moved) scheduleFrame();
	}, [scheduleFrame]);
	const cases = [{
		before: "/images/gallery/image-before.png",
		after: "/images/gallery/image-after.png",
		label: "Full Smile Rehabilitation",
		tag: "Aesthetic Restoration"
	}, {
		before: "/images/gallery/male-before.png",
		after: "/images/gallery/male-after.png",
		label: "Smile Makeover",
		tag: "Restorative Dentistry"
	}];
	const [[page, direction], setPage] = (0, import_react.useState)([0, 0]);
	const activeIndex = (page % cases.length + cases.length) % cases.length;
	const activeCase = cases[activeIndex];
	(0, import_react.useEffect)(() => {
		positionRef.current = 50;
		applyPosition();
	}, [page, applyPosition]);
	const paginate = (0, import_react.useCallback)((newDirection) => {
		setPage(([prevPage]) => [prevPage + newDirection, newDirection]);
	}, []);
	const goTo = (0, import_react.useCallback)((index) => {
		setPage(([prevPage]) => {
			const currentActive = (prevPage % cases.length + cases.length) % cases.length;
			if (index === currentActive) return [prevPage, 0];
			const dir = index > currentActive ? 1 : -1;
			return [prevPage + (index - currentActive), dir];
		});
	}, [cases.length]);
	const goPrev = (0, import_react.useCallback)(() => paginate(-1), [paginate]);
	const goNext = (0, import_react.useCallback)(() => paginate(1), [paginate]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		"aria-labelledby": "before-after-heading",
		className: "relative overflow-hidden bg-[#0A1D24] band-lg text-white after-trement-section",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": "true",
				className: "pointer-events-none absolute -top-28 -left-28 size-[34rem] rounded-full bg-accent/10 blur-3xl"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": "true",
				className: "pointer-events-none absolute -bottom-28 -right-28 size-[38rem] rounded-full bg-primary/20 blur-3xl"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
				className: "relative",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-3xl text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
								className: "flex items-center justify-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArenaArc, { className: "text-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "eyebrow text-accent",
									children: "Smile Transformations"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								delay: 60,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
									id: "before-after-heading",
									className: "mt-4 display-2 text-white after-trement-section-title",
									children: [
										"Compare before and after results showing beautiful functional smiles",
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-accent",
											children: "created through expert dental care"
										})
									]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								delay: 120,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 text-base md:text-lg leading-relaxed text-white/75 after-trement-section-description",
									children: "Experience the power of precision restorative and aesthetic dentistry. Drag the slider to see how personalized care restores natural alignment, shade, and confident everyday smiles."
								})
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 180,
						className: "mx-auto mt-10 max-w-4xl md:mt-14",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3 md:gap-5 after-trement-image-section",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: goPrev,
									"aria-label": "Previous case",
									className: "shrink-0 flex size-10 md:size-12 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/20 text-white hover:bg-white/20 hover:scale-105 active:scale-95 transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
										viewBox: "0 0 24 24",
										fill: "none",
										stroke: "currentColor",
										strokeWidth: "2.5",
										strokeLinecap: "round",
										strokeLinejoin: "round",
										className: "size-5",
										"aria-hidden": "true",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m15 18-6-6 6-6" })
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "slider-image-section min-w-0 flex-1 rounded-3xl bg-white/[0.04] p-3 md:p-5 ring-1 ring-white/10 shadow-2xl backdrop-blur-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										ref: containerRef,
										className: "relative aspect-[3/2] w-full overflow-hidden rounded-2xl select-none",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
											initial: false,
											custom: direction,
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
												custom: direction,
												variants: {
													enter: (dir) => ({
														x: dir > 0 ? "100%" : dir < 0 ? "-100%" : "0%",
														opacity: .8
													}),
													center: {
														x: 0,
														opacity: 1
													},
													exit: (dir) => ({
														x: dir > 0 ? "-100%" : dir < 0 ? "100%" : "0%",
														opacity: .8
													})
												},
												initial: "enter",
												animate: "center",
												exit: "exit",
												transition: {
													x: {
														type: "spring",
														stiffness: 280,
														damping: 28
													},
													opacity: { duration: .2 }
												},
												className: "absolute inset-0 h-full w-full",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													ref: sliderWrapperRef,
													role: "slider",
													tabIndex: 0,
													"aria-label": "Before and after dental smile comparison slider",
													"aria-valuenow": 50,
													"aria-valuemin": 0,
													"aria-valuemax": 100,
													onPointerDown: handlePointerDown,
													onKeyDown: handleKeyDown,
													style: { touchAction: "none" },
													className: "group relative h-full w-full cursor-ew-resize overflow-hidden rounded-2xl select-none touch-none focus:outline-none focus-visible:ring-4 focus-visible:ring-accent",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															className: "pointer-events-none absolute inset-0 h-full w-full",
															children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
																src: activeCase.after,
																alt: "After: Healthy, restored and aligned dental smile",
																width: 1200,
																height: 800,
																loading: "eager",
																decoding: "sync",
																draggable: false,
																className: "pointer-events-none h-full w-full object-cover object-center select-none"
															})
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															ref: clipOverlayRef,
															className: "pointer-events-none absolute inset-0 h-full w-full overflow-hidden select-none",
															style: {
																clipPath: "polygon(0% 0%, 50% 0%, 50% 100%, 0% 100%)",
																WebkitClipPath: "polygon(0% 0%, 50% 0%, 50% 100%, 0% 100%)",
																willChange: "clip-path"
															},
															children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
																src: activeCase.before,
																alt: "Before: Pre-treatment dental smile condition",
																width: 1200,
																height: 800,
																loading: "eager",
																decoding: "sync",
																draggable: false,
																className: "pointer-events-none h-full w-full object-cover object-center select-none"
															})
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "pointer-events-none absolute top-4 left-4 z-10 rounded-full bg-black/60 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-white/95 backdrop-blur-md ring-1 ring-white/20 select-none shadow-md",
															children: "Before"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "pointer-events-none absolute top-4 right-4 z-10 rounded-full bg-accent/90 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-[#0A262D] backdrop-blur-md ring-1 ring-white/30 select-none shadow-md",
															children: "After"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															ref: dividerRef,
															className: "pointer-events-none absolute inset-y-0 z-20 flex flex-col items-center -translate-x-1/2",
															style: {
																left: "50%",
																willChange: "left"
															},
															children: [
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-[2px] flex-1 border-r-2 border-dashed border-white drop-shadow-[0_0_4px_rgba(0,0,0,0.8)]" }),
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																	ref: handleRef,
																	className: `${handleBaseClass} ${handleIdleClass}`,
																	children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
																		viewBox: "0 0 24 24",
																		fill: "none",
																		stroke: "currentColor",
																		strokeWidth: "2.5",
																		strokeLinecap: "round",
																		strokeLinejoin: "round",
																		className: "size-5 text-[#0A3C44]",
																		"aria-hidden": "true",
																		children: [
																			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m7 8-4 4 4 4" }),
																			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M3 12h18" }),
																			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m17 8 4 4-4 4" })
																		]
																	})
																}),
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-[2px] flex-1 border-r-2 border-dashed border-white drop-shadow-[0_0_4px_rgba(0,0,0,0.8)]" })
															]
														})
													]
												})
											}, page)
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-4 flex flex-col items-center justify-between gap-3 px-0 text-white/70 sm:flex-row sm:px-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "flex items-center gap-2 text-xs md:text-sm",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "inline-block size-2 rounded-full bg-accent animate-pulse" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Drag divider to compare before and after" })]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "block sm:flex items-center gap-2 text-xs",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "block rounded-md bg-white/10 px-2.5 py-1 text-white/90 transition-all duration-300",
													children: activeCase.label
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "block mt-2 sm:mt-0 rounded-md bg-white/10 px-2.5 py-1 text-white/90 transition-all duration-300",
													children: activeCase.tag
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "flex items-center gap-1",
												role: "tablist",
												"aria-label": "Case study carousel navigation",
												children: cases.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													type: "button",
													role: "tab",
													onClick: () => goTo(i),
													"aria-selected": i === activeIndex,
													"aria-label": `Case ${i + 1}: ${c.label}`,
													className: "relative flex size-8 items-center justify-center rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("size-2.5 rounded-full transition-all duration-200", i === activeIndex ? "bg-accent scale-125 ring-2 ring-accent/40" : "bg-white/40 hover:bg-white/70") })
												}, i))
											})]
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: goNext,
									"aria-label": "Next case",
									className: "shrink-0 flex size-10 md:size-12 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/20 text-white hover:bg-white/20 hover:scale-105 active:scale-95 transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
										viewBox: "0 0 24 24",
										fill: "none",
										stroke: "currentColor",
										strokeWidth: "2.5",
										strokeLinecap: "round",
										strokeLinejoin: "round",
										className: "size-5",
										"aria-hidden": "true",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m9 18 6-6-6-6" })
									})
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						delay: 240,
						className: "mt-10 text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center justify-center gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppButton, {
								context: "Smile Transformation section - before after comparison",
								label: "Discuss Your Smile on WhatsApp",
								size: "lg",
								className: "hero-btn"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								variant: "outline",
								size: "lg",
								className: "border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/smile-gallery",
									className: "hero-btn",
									children: "View Smile Gallery"
								})
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-xs text-white/50",
							children: "*Individual clinical outcomes vary based on individual oral health and treatment plan."
						})]
					})
				]
			})
		]
	});
}
var visitSteps = [
	{
		title: "Tell us what's bothering you",
		detail: "Send your preferred branch, day and concern on WhatsApp, or call the clinic. We reply to agree a time that works for you — a request on its own is not a confirmed appointment."
	},
	{
		title: "An unhurried examination",
		detail: "We look at the tooth or area you're worried about and at your mouth as a whole, and explain what we find in plain language before anything is planned."
	},
	{
		title: "Options, then treatment",
		detail: "You'll hear what the options are, what each one involves and how many visits to expect. Treatment starts only once you're happy to go ahead."
	}
];
function HomeVisitSequence() {
	const image = photo("consultation-room");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		"aria-labelledby": "visit-heading",
		className: "relative overflow-hidden bg-background band-lg visit-work-section",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EnamelOutline, { className: "absolute top-1/2 left-[-5rem] hidden h-[34rem] -translate-y-1/2 text-accent opacity-[0.15] lg:block" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
			className: "relative grid items-center gap-14 lg:grid-cols-12 lg:gap-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				className: "lg:col-span-5",
				children: image?.image ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: image.image.src,
					alt: image.image.alt,
					width: image.image.width,
					height: image.image.height,
					loading: "lazy",
					className: "mask-blob inner-hairline aspect-4/5 w-full object-cover"
				}) : null
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-7",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "How a visit works"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					id: "visit-heading",
					className: "mt-4 display-2 visit-work-title",
					children: "Three steps, no surprises"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-10 three-step-ol",
					children: visitSteps.map((step, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						as: "li",
						delay: i * 70,
						className: "border-t border-border py-7",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								"aria-label": `Step 0${i + 1}`,
								className: "font-display text-2xl font-semibold text-accent tabular-nums",
								children: ["0", i + 1]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "display-3 how-visit-heading",
								children: step.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 measure text-base leading-relaxed how-visit-description",
								children: step.detail
							})] })]
						})
					}, step.title))
				})]
			})]
		})]
	});
}
function HomeDoctors() {
	if (publishedDoctors.length === 0) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		"aria-labelledby": "team-heading",
		className: "bg-background band-md ourteam-section",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
			className: "grid gap-5 gap-sm-12 lg:grid-cols-12 lg:gap-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "lg:col-span-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "Our team"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						id: "team-heading",
						className: "mt-4 display-2 ourteam-title",
						children: "The dentists you’ll meet"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 measure text-base leading-relaxed ourteam-description",
						children: "Registration numbers, experience and biographies are published once each clinician has confirmed them."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "grid gap-6 sm:grid-cols-2 lg:col-span-7",
				children: publishedDoctors.map((doctor, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					as: "li",
					delay: i * 70,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DoctorCard, { doctor })
				}, doctor.slug))
			})]
		})
	});
}
function HomeLocations() {
	const branchPhotos = [photo("clinic-exterior-signboard"), photo("treatment-room")];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		"aria-labelledby": "locations-heading",
		className: "bg-surface-warm band-lg location-section",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "eyebrow",
			children: "Locations"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			id: "locations-heading",
			className: "mt-4 display-2 location-title",
			children: "Find your nearest branch"
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-5 mt-sm-8 mt-sm-14 space-y-16 lg:space-y-24",
			children: locations.map((location, index) => {
				const hours = confirmed(location.hours);
				const image = branchPhotos[index];
				const flip = index % 2 === 1;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					className: "mb-10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid items-center gap-5 gap-sm-10 lg:grid-cols-12 lg:gap-16 ",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: cn("lg:col-span-6", flip && "lg:order-2"),
							children: image?.image ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: image.image.src,
								alt: image.image.alt,
								width: image.image.width,
								height: image.image.height,
								loading: "lazy",
								className: "inner-hairline aspect-16/10 w-full rounded-[2rem] object-cover"
							}) : null
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: cn("lg:col-span-6", flip && "lg:order-1"),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "display-3 location-heading",
									children: location.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("address", {
									className: "mt-2 mt-sm-4 text-base leading-relaxed not-italic",
									children: formatAddress(location).map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "sm:block",
										children: line
									}, line))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-5 text-sm",
									children: hours ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
										className: "space-y-1",
										children: hours.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-medium text-ink",
												children: h.days
											}),
											" —",
											" ",
											h.hours
										] }, h.days))
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-muted-foreground italic",
										children: "Opening hours to be confirmed by the clinic"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-7 flex flex-wrap gap-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											asChild: true,
											size: "sm",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
												to: "/locations/$branch",
												params: { branch: location.slug },
												children: "Branch details"
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											asChild: true,
											size: "sm",
											variant: "outline",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
												href: location.directionsUrl,
												target: "_blank",
												rel: "noopener noreferrer",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { "aria-hidden": "true" }), "Get directions"]
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											asChild: true,
											size: "sm",
											variant: "ghost",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
												href: telHref,
												"aria-label": `Call Dent Arena on ${clinic.phoneDisplay}`,
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { "aria-hidden": "true" }), "Call"]
											})
										})
									]
								})
							]
						})]
					})
				}, location.id);
			})
		})] })
	});
}
function HomeFaq() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		"aria-labelledby": "faq-heading",
		className: "bg-surface-soft band-md faq-section",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
			className: "grid gap-10 lg:grid-cols-12 lg:gap-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "lg:col-span-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "Questions"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						id: "faq-heading",
						className: "mt-4 display-2 faq-heading",
						children: "Before you visit"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/faqs",
						"data-active": "false",
						className: "link-underline mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary",
						children: ["All frequently asked questions", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
							"aria-hidden": "true",
							className: "size-4"
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: 80,
				className: "lg:col-span-7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaqAccordion, {
					faqs: generalFaqs.slice(0, 6),
					idPrefix: "home-faq"
				})
			})]
		})
	});
}
function HomeCta() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		"aria-labelledby": "home-cta-heading",
		className: "relative overflow-hidden bg-primary-deep band-xl text-secondary cta-section",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EnamelOutline, { className: "absolute top-1/2 right-[-4rem] h-[28rem] -translate-y-1/2 text-secondary opacity-[0.12] dent-animation" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
			className: "relative text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow text-accent",
					children: "Appointments"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					id: "home-cta-heading",
					className: "mx-auto mt-4 max-w-3xl display-2 text-secondary cta-title",
					children: "Send an appointment request on WhatsApp"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto mt-5 max-w-xl text-base leading-relaxed text-secondary/80 cta-desc",
					children: "Tell us your preferred branch, day and time. A request is not a confirmed booking — the team will reply to agree a slot that suits you. Nothing you type is stored on this website."
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				delay: 80,
				className: "mt-9 flex flex-col items-center gap-4 sm:flex-row sm:justify-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "whatsapp",
					size: "lg",
					className: "hero-btn",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: generalEnquiryLink("Homepage CTA"),
						target: "_blank",
						rel: "noopener noreferrer",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { "aria-hidden": "true" }), "Request appointment on WhatsApp"]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: telHref,
					className: "inline-flex min-h-11 items-center gap-2 text-sm font-medium text-secondary underline-offset-4 hover:underline",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
							"aria-hidden": "true",
							className: "size-4"
						}),
						"Call ",
						clinic.phoneDisplay
					]
				})]
			})]
		})]
	});
}
function HomePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HomeHero, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HomeTrustLine, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HomeTreatments, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HomePhotoStrip, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HomeBeforeAfter, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HomeVisitSequence, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HomeDoctors, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HomeLocations, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HomeFaq, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HomeCta, {})
	] });
}
//#endregion
export { HomePage as component };
