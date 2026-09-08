import { a as __toESM } from "../_runtime.mjs";
import { c as require_react, l as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { c as Phone, l as MessageCircle } from "../_libs/lucide-react.mjs";
import { A as clinic, B as Section, D as formatAddress, I as publishedTreatments, L as confirmed, S as Button, b as appointmentLink, h as crumbs$9, j as telHref, k as locations, z as Container } from "./router-BEx1EPk1.mjs";
import { t as PageHeader } from "./PageHeader-tWSigD8I.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/book-appointment-BN0AU-93.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var inputClass = "min-h-11 w-full rounded-xl border border-input bg-card px-4 text-base text-ink placeholder:text-muted-foreground focus-visible:border-primary focus-visible:outline-2 focus-visible:outline-primary";
/**
* Accepts 10-digit Indian mobile numbers, with or without a +91 / 91 / 0
* prefix and with spaces or hyphens. Returns the number in +91 XXXXXXXXXX
* form, or null when it is not a valid Indian mobile number.
*/
function normaliseIndianMobile(input) {
	let local = input.replace(/[^0-9]/g, "");
	if (local.length === 12 && local.startsWith("91")) local = local.slice(2);
	else if (local.length === 11 && local.startsWith("0")) local = local.slice(1);
	if (!/^[6-9][0-9]{9}$/.test(local)) return null;
	return `+91 ${local}`;
}
function validate(values, consent) {
	const errors = {};
	const name = values["name"]?.trim() ?? "";
	const mobile = values["mobile"]?.trim() ?? "";
	if (name.length < 2) errors.name = "Please enter your name (at least 2 characters).";
	else if (name.length > 80) errors.name = "Please keep your name under 80 characters.";
	if (!normaliseIndianMobile(mobile)) errors.mobile = "Please enter a valid 10-digit Indian mobile number starting with 6, 7, 8 or 9.";
	if (!values["branch"]) errors.branch = "Please choose a branch.";
	if (!values["concern"]) errors.concern = "Please choose a treatment or describe your concern.";
	if (!values["date"]) errors.date = "Please choose a preferred date.";
	if (!values["time"]) errors.time = "Please choose a preferred time.";
	if (!consent) errors.consent = "Please confirm you agree to be contacted on WhatsApp.";
	return errors;
}
function AppointmentForm() {
	const id = (0, import_react.useId)();
	const [errors, setErrors] = (0, import_react.useState)({});
	const [consent, setConsent] = (0, import_react.useState)(false);
	const [submitted, setSubmitted] = (0, import_react.useState)(false);
	const summaryRef = (0, import_react.useRef)(null);
	function handleSubmit(event) {
		event.preventDefault();
		const form = event.currentTarget;
		const data = Object.fromEntries(new FormData(form).entries());
		const nextErrors = validate(data, consent);
		setErrors(nextErrors);
		if (Object.keys(nextErrors).length > 0) {
			setSubmitted(false);
			requestAnimationFrame(() => summaryRef.current?.focus());
			return;
		}
		const note = data["message"]?.trim().slice(0, 500);
		const request = {
			name: data["name"].trim(),
			mobile: normaliseIndianMobile(data["mobile"]),
			branch: data["branch"],
			concern: data["concern"],
			date: data["date"],
			time: data["time"],
			...note ? { message: note } : {}
		};
		window.open(appointmentLink(request), "_blank", "noopener,noreferrer");
		setSubmitted(true);
	}
	const fieldError = (field) => errors[field] ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		id: `${id}-${field}-error`,
		role: "alert",
		className: "mt-1.5 text-sm font-medium text-destructive",
		children: errors[field]
	}) : null;
	const describedBy = (field) => errors[field] ? `${id}-${field}-error` : void 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		noValidate: true,
		onSubmit: handleSubmit,
		"aria-label": "Appointment request form",
		className: "rounded-2xl border border-border bg-card p-6 sm:p-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				ref: summaryRef,
				tabIndex: -1,
				role: "alert",
				"aria-live": "polite",
				className: "focus-visible:outline-none",
				children: [Object.keys(errors).length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-6 rounded-xl border border-destructive/40 bg-destructive/5 p-4 text-sm",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-semibold text-destructive",
						children: [
							"Please check ",
							Object.keys(errors).length,
							" field",
							Object.keys(errors).length > 1 ? "s" : "",
							" before continuing."
						]
					})
				}) : null, submitted ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-6 rounded-xl border border-primary/30 bg-secondary p-4 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-semibold text-ink",
						children: "WhatsApp opened with your request."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1",
						children: "Send the message to reach the clinic. Your appointment is confirmed only once the team replies to agree a slot."
					})]
				}) : null]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mb-5 text-xs text-muted-foreground",
				children: [
					"Fields marked ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						"aria-hidden": "true",
						children: "*"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "sr-only",
						children: "with an asterisk"
					}),
					" are required."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-5 sm:grid-cols-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "sm:col-span-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								htmlFor: `${id}-name`,
								className: "mb-1.5 block text-sm font-medium text-ink",
								children: ["Your name ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									"aria-hidden": "true",
									children: "*"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: `${id}-name`,
								name: "name",
								type: "text",
								autoComplete: "name",
								required: true,
								"aria-required": "true",
								maxLength: 80,
								placeholder: "e.g. Rahul Sharma",
								"aria-invalid": Boolean(errors.name),
								"aria-describedby": describedBy("name"),
								className: inputClass
							}),
							fieldError("name")
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							htmlFor: `${id}-mobile`,
							className: "mb-1.5 block text-sm font-medium text-ink",
							children: ["Mobile number ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"aria-hidden": "true",
								children: "*"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: `${id}-mobile`,
							name: "mobile",
							type: "tel",
							inputMode: "tel",
							autoComplete: "tel",
							required: true,
							"aria-required": "true",
							maxLength: 20,
							placeholder: "+91 98765 43210",
							"aria-invalid": Boolean(errors.mobile),
							"aria-describedby": describedBy("mobile"),
							className: inputClass
						}),
						fieldError("mobile")
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							htmlFor: `${id}-branch`,
							className: "mb-1.5 block text-sm font-medium text-ink",
							children: ["Preferred branch ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"aria-hidden": "true",
								children: "*"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							id: `${id}-branch`,
							name: "branch",
							required: true,
							"aria-required": "true",
							defaultValue: "",
							"aria-invalid": Boolean(errors.branch),
							"aria-describedby": describedBy("branch"),
							className: `${inputClass} c-select-form`,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "",
									disabled: true,
									children: "Choose a branch"
								}),
								locations.map((location) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: location.name,
									children: location.name
								}, location.id)),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "No preference",
									children: "No preference"
								})
							]
						}),
						fieldError("branch")
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							htmlFor: `${id}-concern`,
							className: "mb-1.5 block text-sm font-medium text-ink",
							children: ["Treatment or concern ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"aria-hidden": "true",
								children: "*"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							id: `${id}-concern`,
							name: "concern",
							required: true,
							"aria-required": "true",
							defaultValue: "",
							"aria-invalid": Boolean(errors.concern),
							"aria-describedby": describedBy("concern"),
							className: `${inputClass} c-select-form`,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "",
									disabled: true,
									children: "Choose an option"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "General consultation",
									children: "General consultation"
								}),
								publishedTreatments.map((treatment) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: treatment.title,
									children: treatment.title
								}, treatment.slug)),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "Not sure yet",
									children: "Not sure yet"
								})
							]
						}),
						fieldError("concern")
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							htmlFor: `${id}-date`,
							className: "mb-1.5 block text-sm font-medium text-ink",
							children: ["Preferred date ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"aria-hidden": "true",
								children: "*"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: `${id}-date`,
							name: "date",
							type: "date",
							required: true,
							"aria-required": "true",
							"aria-invalid": Boolean(errors.date),
							"aria-describedby": describedBy("date"),
							className: `${inputClass} cursor-pointer`,
							onClick: (e) => {
								try {
									e.currentTarget.showPicker();
								} catch (err) {}
							}
						}),
						fieldError("date")
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							htmlFor: `${id}-time`,
							className: "mb-1.5 block text-sm font-medium text-ink",
							children: ["Preferred time ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"aria-hidden": "true",
								children: "*"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							id: `${id}-time`,
							name: "time",
							required: true,
							"aria-required": "true",
							defaultValue: "",
							"aria-invalid": Boolean(errors.time),
							"aria-describedby": describedBy("time"),
							className: `${inputClass} c-select-form`,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "",
									disabled: true,
									children: "Choose a time of day"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "Morning",
									children: "Morning"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "Afternoon",
									children: "Afternoon"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "Evening",
									children: "Evening"
								})
							]
						}),
						fieldError("time")
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "sm:col-span-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								htmlFor: `${id}-message`,
								className: "mb-1.5 block text-sm font-medium text-ink",
								children: ["Anything else? ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted-foreground",
									children: "(optional)"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								id: `${id}-message`,
								name: "message",
								rows: 3,
								maxLength: 500,
								placeholder: "A short note about what you would like to discuss.",
								className: `${inputClass} min-h-24 py-3`
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1.5 text-xs text-muted-foreground",
								children: "Please do not include detailed medical history here. Bring it to your appointment instead."
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 flex items-start gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					id: `${id}-consent`,
					name: "consent",
					type: "checkbox",
					checked: consent,
					onChange: (e) => setConsent(e.target.checked),
					"aria-invalid": Boolean(errors.consent),
					"aria-describedby": describedBy("consent"),
					className: "mt-1 size-5 shrink-0 rounded border-input accent-[oklch(0.435_0.062_199)]"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					htmlFor: `${id}-consent`,
					className: "text-sm",
					children: ["I agree that Dent Arena may contact me on WhatsApp or by phone about this appointment request. ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						"aria-hidden": "true",
						children: "*"
					})]
				}), fieldError("consent")] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				type: "submit",
				variant: "whatsapp",
				size: "lg",
				className: "mt-7 w-full sm:w-auto",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { "aria-hidden": "true" }), "Request Appointment on WhatsApp"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-xs leading-relaxed text-muted-foreground",
				children: "This form runs entirely in your browser. Nothing is saved on this website or sent to a server — submitting simply opens WhatsApp with your message ready to send. Sending a request does not confirm an appointment."
			})
		]
	});
}
function BookAppointmentPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			eyebrow: "Appointments",
			title: "Request an appointment",
			description: "Fill in a few details and we'll open WhatsApp with your request ready to send. The clinic will reply to agree a time that works for you.",
			breadcrumbs: crumbs$9
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-10 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppointmentForm, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "space-y-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-border bg-surface-soft p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-lg font-semibold text-ink",
								children: "Prefer to call?"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed",
								children: "Speak to the front desk for urgent problems, or if you would rather book by phone."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								className: "mt-4 w-full",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: telHref,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { "aria-hidden": "true" }), clinic.phoneDisplay]
								})
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-border bg-card p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-lg font-semibold text-ink",
							children: "Our branches"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-4 space-y-5 text-sm",
							children: locations.map((location) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-medium text-ink",
									children: location.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("address", {
									className: "mt-1 leading-relaxed not-italic",
									children: formatAddress(location).map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block",
										children: line
									}, line))
								}),
								confirmed(location.hours) ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs text-muted-foreground italic",
									children: "Opening hours to be confirmed by the clinic."
								})
							] }, location.id))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-destructive/30 bg-destructive/5 p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-lg font-semibold text-ink",
							children: "Dental emergency?"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed",
							children: "For severe pain, facial swelling, uncontrolled bleeding or a knocked-out tooth, call the clinic straight away rather than waiting for a WhatsApp reply. For any life-threatening emergency, go to your nearest hospital."
						})]
					})
				]
			})]
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			tone: "soft",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
				className: "px-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl sm:text-3xl",
					children: "What happens next"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-8 grid gap-6 sm:grid-cols-3",
					children: [
						{
							title: "You send the request",
							detail: "Your message opens in WhatsApp with the details you entered. Nothing is stored on this website."
						},
						{
							title: "We reply to confirm",
							detail: "The team checks the diary and suggests a slot at your chosen branch, or the nearest alternative."
						},
						{
							title: "You come in",
							detail: "Bring any previous X-rays, reports or a list of medicines you take. Arrive a few minutes early for your first visit."
						}
					].map((step, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-2xl border border-border bg-card p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"aria-label": `Step ${index + 1}`,
								className: "grid size-9 place-items-center rounded-full bg-primary font-display text-sm font-semibold text-primary-foreground",
								children: index + 1
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-4 font-display text-base font-semibold text-ink",
								children: step.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed",
								children: step.detail
							})
						]
					}, step.title))
				})]
			})
		})
	] });
}
//#endregion
export { BookAppointmentPage as component };
