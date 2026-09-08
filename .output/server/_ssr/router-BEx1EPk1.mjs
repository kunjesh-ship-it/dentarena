import { a as __toESM } from "../_runtime.mjs";
import { a as createTanStackMcpHandler, c as string, i as createTanStackListToolsHandler, n as defineTool, o as createTanStackOAuthProtectedResourceMetadataHandler, r as createTanStackInvokeToolHandler, s as _enum, t as defineMcp } from "../_libs/@lovable.dev/mcp-js+[...].mjs";
import { c as require_react, l as require_jsx_runtime, o as Slot } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { A as notFound, c as HeadContent, d as Outlet, f as lazyRouteComponent, g as useRouter, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as Phone, d as MapPin, l as MessageCircle, t as X, u as Menu } from "../_libs/lucide-react.mjs";
import { i as useMotionValue, n as useSpring, o as motion, t as useReducedMotion } from "../_libs/framer-motion+[...].mjs";
import { t as create } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Container-CNFA-XhA.js
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function Container({ children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("mx-auto w-full max-w-6xl px-5 sm:px-8", className),
		children
	});
}
function Section({ children, className, tone = "default", id, labelledBy }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id,
		"aria-labelledby": labelledBy,
		className: cn("py-16 sm:py-24 doctor-page-section", {
			default: "bg-background",
			soft: "bg-surface-soft",
			card: "bg-card",
			ink: "bg-ink text-secondary"
		}[tone], className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, { children })
	});
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/types-jMdy8TZB.js
/** Marks a value as awaiting confirmation from the clinic. */
function placeholder(label) {
	return {
		__placeholder: true,
		label
	};
}
function isPlaceholder(value) {
	return typeof value === "object" && value !== null && value.__placeholder === true;
}
/** Returns the value when confirmed, otherwise undefined. */
function confirmed(value) {
	if (value === void 0 || isPlaceholder(value)) return void 0;
	return value;
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/treatments-B8pFVCqh.js
var reviewedBy$1 = placeholder("Name and qualifications of the reviewing dentist");
var lastReviewed$1 = placeholder("Date this page was last medically reviewed");
var bothBranches = ["bhatar", "vesu"];
var publishedTreatments = [
	{
		slug: "root-canal-treatment",
		published: true,
		title: "Root Canal Treatment",
		category: "restorative",
		featured: true,
		summary: "Treatment for a tooth whose inner pulp is inflamed or infected, aimed at relieving pain and keeping the natural tooth in place.",
		metaDescription: "Root canal treatment at Dent Arena, Surat: what it involves, who needs it, what recovery is usually like and how to book a consultation.",
		whatItIs: "A root canal treats the soft tissue inside a tooth — the pulp — when it becomes inflamed or infected. The dentist removes the affected pulp, cleans and shapes the narrow canals inside the roots, then seals them. The aim is to settle the infection and keep a tooth that would otherwise need to be removed.",
		whoNeedsIt: [
			"Deep decay that has reached the nerve of the tooth",
			"A tooth that has been cracked, fractured or heavily worn",
			"Repeated dental work on the same tooth over many years",
			"An injury to a tooth, even one that looks intact from outside"
		],
		signs: [
			"Lingering pain after hot or cold drinks",
			"Pain when biting or when pressure is applied to one tooth",
			"Swelling or tenderness in the gum near a tooth",
			"A tooth that has darkened compared with its neighbours",
			"A recurring pimple-like spot on the gum"
		],
		howItWorks: [
			{
				step: "Examination",
				detail: "Clinical checks and an X-ray to confirm which tooth is involved and how far the problem extends."
			},
			{
				step: "Local anaesthetic",
				detail: "The area is numbed before treatment begins so the procedure itself is comfortable for most people."
			},
			{
				step: "Cleaning the canals",
				detail: "The affected pulp is removed and the canals are cleaned, shaped and disinfected."
			},
			{
				step: "Sealing",
				detail: "The canals are filled and sealed, and the access opening is closed with a filling."
			},
			{
				step: "Final restoration",
				detail: "A crown or a definitive restoration is often advised afterwards to protect the tooth from fracture."
			}
		],
		visitsAndRecovery: "Root canal treatment is completed in one or more visits depending on the tooth and how much infection is present. Mild tenderness for a few days afterwards is common and usually settles. Your dentist will discuss the likely number of visits for your specific tooth at the consultation.",
		benefits: [
			"Allows a natural tooth to be kept rather than removed",
			"Addresses the source of infection inside the tooth",
			"Restores normal chewing once the final restoration is placed"
		],
		limitations: [
			"A treated tooth becomes more brittle and usually needs a crown",
			"Outcomes depend on how much healthy tooth structure remains",
			"Not every tooth can be saved; extraction is sometimes the more predictable option"
		],
		risks: [
			"Persistent or returning infection, which may need re-treatment",
			"Fracture of a weakened tooth if the final restoration is delayed",
			"Temporary discomfort or sensitivity after treatment"
		],
		aftercare: [
			"Avoid chewing on the treated side until the final restoration is placed",
			"Take any prescribed medication exactly as directed",
			"Keep brushing and cleaning between teeth as usual",
			"Attend the review appointment even if the pain has gone"
		],
		whenToContact: [
			"Pain or swelling that increases rather than settles",
			"The bite feels high or uneven after treatment",
			"The temporary filling comes away"
		],
		faqs: [
			{
				question: "Is a root canal painful?",
				answer: "The treatment is carried out under local anaesthetic, so most people describe it as similar to having a filling. Some tenderness for a few days afterwards is normal."
			},
			{
				question: "Do I need a crown afterwards?",
				answer: "Back teeth usually do, because they take heavy chewing forces and a treated tooth is more prone to fracture. Your dentist will advise based on how much natural tooth is left."
			},
			{
				question: "How long does a root-treated tooth last?",
				answer: "That depends on the remaining tooth structure, the final restoration and day-to-day care. Your dentist can give you a realistic picture for your tooth."
			}
		],
		relatedSlugs: [
			"crowns-and-bridges",
			"tooth-coloured-fillings",
			"tooth-extraction"
		],
		availableAt: bothBranches,
		reviewedBy: reviewedBy$1,
		lastReviewed: lastReviewed$1
	},
	{
		slug: "dental-implants",
		published: true,
		title: "Dental Implants",
		category: "surgical",
		featured: true,
		summary: "A titanium post placed in the jawbone to support a replacement tooth, used where a tooth is missing or cannot be saved.",
		metaDescription: "Dental implants at Dent Arena, Surat: how implant treatment works, who it suits, healing time and what to consider before starting.",
		whatItIs: "A dental implant is a small post, usually titanium, placed into the jawbone to act in place of a tooth root. Once the bone has healed around it, a crown, bridge or denture is attached to it. Implants replace individual teeth or support larger restorations.",
		whoNeedsIt: [
			"A single missing tooth with healthy neighbouring teeth",
			"Several missing teeth in the same area",
			"A loose lower denture that would benefit from support",
			"A tooth that cannot be restored and needs removing"
		],
		signs: [
			"Difficulty chewing on one side because of a gap",
			"Neighbouring teeth beginning to tilt into a space",
			"A denture that moves while eating or speaking"
		],
		howItWorks: [
			{
				step: "Assessment",
				detail: "Examination, X-rays and often a 3D scan to check bone volume, nerve position and gum health."
			},
			{
				step: "Planning",
				detail: "The dentist plans the implant position and discusses whether any preparatory treatment is needed."
			},
			{
				step: "Placement",
				detail: "The implant is placed under local anaesthetic in a planned surgical appointment."
			},
			{
				step: "Healing",
				detail: "The bone integrates with the implant over a period of months; a temporary solution may be used meanwhile."
			},
			{
				step: "Restoration",
				detail: "Impressions or scans are taken and the final crown, bridge or denture attachment is fitted."
			}
		],
		visitsAndRecovery: "Implant treatment is staged over several appointments with healing time in between. Swelling and tenderness for a few days after placement are common. Your dentist will outline a timeline for your case at the planning stage.",
		benefits: [
			"Replaces a tooth without needing to reshape neighbouring teeth",
			"Helps maintain chewing function in the area",
			"Can stabilise a loose denture"
		],
		limitations: [
			"Requires enough healthy bone; grafting is sometimes needed first",
			"Treatment is staged and takes months, not days",
			"Uncontrolled gum disease, smoking and some medical conditions affect suitability"
		],
		risks: [
			"Infection or delayed healing around the implant site",
			"Failure of the implant to integrate with bone",
			"Gum inflammation or bone loss around an implant if cleaning is neglected"
		],
		aftercare: [
			"Follow the post-surgical instructions given on the day",
			"Clean around the implant daily as shown, including between teeth",
			"Attend maintenance appointments so the implant can be monitored",
			"Tell your dentist if the restoration ever feels loose"
		],
		whenToContact: [
			"Bleeding that does not settle with gentle pressure",
			"Increasing pain or swelling after the first few days",
			"The crown or denture attachment feels loose"
		],
		faqs: [
			{
				question: "How long does implant treatment take?",
				answer: "It is staged over several months to allow the bone to heal around the implant. The exact timeline depends on your bone quality and whether any preparatory treatment is needed."
			},
			{
				question: "Am I suitable for an implant?",
				answer: "Suitability depends on bone volume, gum health, medical history and habits such as smoking. It can only be confirmed after an examination and imaging."
			},
			{
				question: "How do I look after an implant?",
				answer: "Daily cleaning around the implant and regular professional maintenance are essential, because the surrounding gum and bone can be affected by plaque just as natural teeth are."
			}
		],
		relatedSlugs: [
			"crowns-and-bridges",
			"tooth-extraction",
			"dentures"
		],
		availableAt: bothBranches,
		reviewedBy: reviewedBy$1,
		lastReviewed: lastReviewed$1
	},
	{
		slug: "teeth-whitening",
		published: true,
		title: "Teeth Whitening",
		category: "cosmetic",
		featured: true,
		summary: "A professionally supervised way to lighten the shade of natural teeth, carried out in the clinic or with custom take-home trays.",
		metaDescription: "Professional teeth whitening at Dent Arena, Surat: how it works, what results are realistic, sensitivity to expect and who it suits.",
		whatItIs: "Whitening uses a peroxide-based gel to lighten discolouration within the enamel and dentine. It is done in the clinic, or at home with custom-made trays and a lower-strength gel, sometimes as a combination of the two.",
		whoNeedsIt: [
			"General yellowing of natural teeth with age",
			"Staining from tea, coffee or tobacco after cleaning",
			"People preparing for an event who want a modest change in shade"
		],
		signs: ["Teeth look darker in photographs than they used to", "Surface stains return quickly after a clean"],
		howItWorks: [
			{
				step: "Check-up first",
				detail: "Decay, gum problems and cracked fillings are treated before whitening is considered."
			},
			{
				step: "Shade record",
				detail: "The starting shade is recorded so any change can be compared honestly."
			},
			{
				step: "Gel application",
				detail: "Gel is applied in the clinic with the gums protected, or dispensed with custom trays for home use."
			},
			{
				step: "Review",
				detail: "The result is reviewed and maintenance advice is given."
			}
		],
		visitsAndRecovery: "In-clinic whitening is usually done in a single appointment; home whitening runs over a period of days as directed. Temporary sensitivity to cold during and shortly after treatment is common and typically settles.",
		benefits: [
			"A supervised process with the gums protected",
			"The starting shade is recorded, so the change can be assessed objectively",
			"Custom trays fit properly and hold gel where it is needed"
		],
		limitations: [
			"Whitening does not change the colour of crowns, veneers or fillings",
			"Results vary between individuals and are not permanent",
			"Deep internal staining may respond differently and may need another approach"
		],
		risks: [
			"Tooth sensitivity during and after treatment",
			"Temporary gum irritation if gel contacts the gums",
			"Uneven appearance where existing restorations are present"
		],
		aftercare: [
			"Limit strongly staining food and drink in the days after treatment",
			"Use a sensitivity toothpaste if teeth feel reactive",
			"Follow tray instructions exactly if whitening at home",
			"Keep up regular cleaning appointments to maintain the result"
		],
		whenToContact: ["Sensitivity that does not settle after a few days", "Gum soreness or a white patch on the gum after using trays"],
		faqs: [
			{
				question: "Will my crowns and fillings whiten too?",
				answer: "No. Whitening gel works on natural tooth structure only. Existing restorations keep their original shade and may need replacing to match afterwards."
			},
			{
				question: "How long does whitening last?",
				answer: "This varies with diet, smoking and oral hygiene. Most people notice gradual fading and some choose occasional top-ups with their trays."
			},
			{
				question: "Is whitening suitable for everyone?",
				answer: "Not always. It is generally deferred during pregnancy, for very young patients, and until decay or gum disease has been treated."
			}
		],
		relatedSlugs: [
			"teeth-cleaning-and-polishing",
			"smile-designing",
			"tooth-coloured-fillings"
		],
		availableAt: bothBranches,
		reviewedBy: reviewedBy$1,
		lastReviewed: lastReviewed$1
	},
	{
		slug: "smile-designing",
		published: true,
		title: "Smile Designing",
		category: "cosmetic",
		featured: true,
		summary: "A planned combination of treatments that addresses the shape, shade, alignment and proportion of the teeth that show when you smile.",
		metaDescription: "Smile designing at Dent Arena, Surat: how a smile plan is made, which treatments it can involve and what to discuss at consultation.",
		whatItIs: "Smile designing is a planning process rather than a single procedure. Photographs, measurements and sometimes a digital or wax mock-up are used to agree what will change, before any irreversible work begins. The plan may combine whitening, alignment, bonding, veneers or crowns.",
		whoNeedsIt: [
			"Chipped, worn or uneven front teeth",
			"Gaps or crowding affecting the appearance of the smile",
			"Old front restorations that no longer match",
			"Someone wanting to understand options before committing"
		],
		signs: [
			"You avoid smiling fully in photographs",
			"Front teeth have worn unevenly over time",
			"Existing veneers or crowns look different from the natural teeth"
		],
		howItWorks: [
			{
				step: "Consultation",
				detail: "Discussion of what you would like to change, alongside a full dental examination."
			},
			{
				step: "Records",
				detail: "Photographs, scans or impressions and any needed X-rays."
			},
			{
				step: "Plan and preview",
				detail: "Options are presented, often with a mock-up so you can see a proposed shape before treatment."
			},
			{
				step: "Health first",
				detail: "Any decay, gum disease or bite problems are treated before cosmetic work."
			},
			{
				step: "Treatment and review",
				detail: "The agreed treatments are carried out in sequence and reviewed together."
			}
		],
		visitsAndRecovery: "The number of visits depends entirely on which treatments the plan includes. Planning appointments come first and no irreversible work is started until the plan is agreed.",
		benefits: [
			"You see and agree a plan before treatment begins",
			"Health problems are addressed before cosmetic changes",
			"Treatments are sequenced rather than done piecemeal"
		],
		limitations: [
			"Mock-ups are a guide, not an exact prediction",
			"Some changes involve permanently reshaping tooth structure",
			"Not every desired change is achievable without orthodontics or surgery"
		],
		risks: [
			"Sensitivity after tooth preparation",
			"Veneers and crowns can chip and eventually need replacing",
			"Ongoing maintenance is required to keep the result healthy"
		],
		aftercare: [
			"Avoid biting hard objects with restored front teeth",
			"Wear a night guard if one has been advised",
			"Maintain daily cleaning between teeth",
			"Attend review appointments as scheduled"
		],
		whenToContact: ["A restoration chips, feels rough or comes loose", "The bite feels different after treatment"],
		faqs: [{
			question: "Does smile designing always mean veneers?",
			answer: "No. Depending on the situation, a plan may involve only whitening and reshaping, or alignment first, with minimal or no removal of tooth structure."
		}, {
			question: "Can I see the result before starting?",
			answer: "A digital design or trial mock-up can show a proposed shape. It is an indication of direction, not a guarantee of the final outcome."
		}],
		relatedSlugs: [
			"teeth-whitening",
			"crowns-and-bridges",
			"clear-aligners"
		],
		availableAt: bothBranches,
		reviewedBy: reviewedBy$1,
		lastReviewed: lastReviewed$1
	},
	{
		slug: "braces-and-orthodontics",
		published: true,
		title: "Braces and Orthodontics",
		category: "orthodontics",
		summary: "Fixed appliances that gradually move teeth into a better position to improve alignment, bite and cleaning access.",
		metaDescription: "Braces and orthodontic treatment at Dent Arena, Surat: types of braces, how treatment progresses and what care is needed during it.",
		whatItIs: "Orthodontic treatment applies gentle, controlled forces to move teeth through bone over time. Fixed braces use brackets bonded to the teeth connected by a wire, adjusted at regular intervals. Retainers are needed afterwards to hold the result.",
		whoNeedsIt: [
			"Crowded or overlapping teeth",
			"Gaps between teeth",
			"A bite where the upper and lower teeth do not meet evenly",
			"Teeth that are difficult to clean because of their position"
		],
		signs: [
			"Food traps repeatedly in the same place",
			"Uneven wear on certain teeth",
			"Difficulty biting or chewing comfortably"
		],
		howItWorks: [
			{
				step: "Orthodontic assessment",
				detail: "Examination, photographs, X-rays and study models or scans."
			},
			{
				step: "Treatment plan",
				detail: "Discussion of appliance options, expected duration and what results are realistic."
			},
			{
				step: "Fitting",
				detail: "Brackets are bonded and the first wire is placed."
			},
			{
				step: "Adjustments",
				detail: "Regular appointments to change wires and monitor movement."
			},
			{
				step: "Retention",
				detail: "Braces are removed and retainers are fitted to hold the teeth in place."
			}
		],
		visitsAndRecovery: "Orthodontic treatment runs over months to years, with regular short adjustment visits. Teeth often feel tender for a few days after fitting and after each adjustment.",
		benefits: [
			"Improves alignment and how the teeth meet",
			"Can make cleaning easier and reduce food trapping",
			"Suitable for a wide range of tooth movements"
		],
		limitations: [
			"Treatment takes time and depends on regular attendance",
			"Some cases need extractions or specialist referral",
			"Teeth can relapse if retainers are not worn as advised"
		],
		risks: [
			"Decalcification or decay around brackets if cleaning is poor",
			"Gum inflammation during treatment",
			"Root shortening in some cases, monitored radiographically"
		],
		aftercare: [
			"Clean carefully around brackets and wires after meals",
			"Avoid very hard or sticky foods that can break brackets",
			"Attend all adjustment appointments",
			"Wear retainers exactly as instructed after treatment"
		],
		whenToContact: ["A bracket comes loose or a wire is poking", "Ongoing pain that does not settle after a few days"],
		faqs: [{
			question: "How long will I need braces?",
			answer: "It depends on how much movement is needed. Your dentist will give an estimated range after the orthodontic assessment, and it is reviewed as treatment progresses."
		}, {
			question: "Do adults get braces?",
			answer: "Yes. Tooth movement is possible at most ages provided the gums and supporting bone are healthy."
		}],
		relatedSlugs: [
			"clear-aligners",
			"teeth-cleaning-and-polishing",
			"gum-treatment"
		],
		availableAt: bothBranches,
		reviewedBy: reviewedBy$1,
		lastReviewed: lastReviewed$1
	},
	{
		slug: "clear-aligners",
		published: true,
		title: "Clear Aligners",
		category: "orthodontics",
		summary: "A series of removable, transparent trays that move teeth in small stages, planned digitally from the start.",
		metaDescription: "Clear aligner treatment at Dent Arena, Surat: how aligners work, wear-time requirements and which cases they suit.",
		whatItIs: "Clear aligners are custom-made removable trays worn in sequence. Each tray moves the teeth a small amount. Treatment is planned digitally, and attachments may be bonded to some teeth to help specific movements.",
		whoNeedsIt: [
			"Mild to moderate crowding or spacing",
			"Relapse after previous orthodontic treatment",
			"Adults who prefer a removable, less visible appliance"
		],
		signs: ["Front teeth have gradually shifted since earlier treatment", "Mild crowding that makes cleaning harder"],
		howItWorks: [
			{
				step: "Assessment",
				detail: "Examination and records to confirm whether aligners suit the movements required."
			},
			{
				step: "Digital plan",
				detail: "A scan is used to plan the sequence of movements stage by stage."
			},
			{
				step: "Aligner series",
				detail: "Trays are worn as instructed, each for a set period before moving to the next."
			},
			{
				step: "Monitoring",
				detail: "Progress is checked at review appointments and refinements are made if needed."
			},
			{
				step: "Retention",
				detail: "Retainers are provided at the end to hold the result."
			}
		],
		visitsAndRecovery: "Aligners are typically worn for the majority of each day and removed for eating and cleaning. Total duration depends on the case. Teeth may feel tight for a day or two with each new tray.",
		benefits: [
			"Removable for eating and cleaning",
			"Less visible than fixed brackets",
			"The planned sequence is visualised before treatment starts"
		],
		limitations: [
			"Results depend heavily on wearing the trays for the required hours",
			"Complex movements may be better handled with fixed braces",
			"Attachments on teeth are sometimes needed and are visible up close"
		],
		risks: [
			"Slower or incomplete movement if wear time is inconsistent",
			"Temporary speech adjustment when starting",
			"Relapse without retainer wear"
		],
		aftercare: [
			"Wear each aligner for the hours advised",
			"Clean trays as instructed and rinse after removal",
			"Brush before reinserting after meals",
			"Keep retainers safe and wear them as directed after treatment"
		],
		whenToContact: ["An aligner no longer fits or cracks", "An attachment on a tooth comes off"],
		faqs: [{
			question: "How many hours a day do I need to wear them?",
			answer: "Aligners only work while they are in the mouth. Your dentist will specify the daily wear time your plan is based on, and results depend on meeting it."
		}, {
			question: "Are aligners suitable for every case?",
			answer: "No. Some bite corrections and larger movements are more predictable with fixed braces. An assessment is needed to decide."
		}],
		relatedSlugs: [
			"braces-and-orthodontics",
			"smile-designing",
			"teeth-whitening"
		],
		availableAt: bothBranches,
		reviewedBy: reviewedBy$1,
		lastReviewed: lastReviewed$1
	},
	{
		slug: "crowns-and-bridges",
		published: true,
		title: "Crowns and Bridges",
		category: "restorative",
		featured: true,
		summary: "Custom-made restorations that cover a damaged tooth or replace a missing one using the teeth on either side for support.",
		metaDescription: "Crowns and bridges at Dent Arena, Surat: when they are used, materials, the fitting process and how to care for them.",
		whatItIs: "A crown covers a tooth entirely to protect and rebuild it. A bridge replaces a missing tooth by joining a replacement to crowns on the adjacent teeth. Both are made in a laboratory or milled digitally and then cemented in place.",
		whoNeedsIt: [
			"A tooth that is heavily filled, cracked or worn",
			"A tooth after root canal treatment",
			"A single missing tooth with suitable teeth on either side"
		],
		signs: [
			"A large old filling that keeps breaking",
			"A tooth that hurts when biting",
			"A visible crack line on a back tooth"
		],
		howItWorks: [
			{
				step: "Assessment",
				detail: "The dentist checks whether the tooth can support a crown and whether a bridge is appropriate."
			},
			{
				step: "Preparation",
				detail: "The tooth is shaped under local anaesthetic and an impression or digital scan is taken."
			},
			{
				step: "Temporary",
				detail: "A temporary restoration protects the tooth while the final one is made."
			},
			{
				step: "Fitting",
				detail: "The final restoration is tried in, checked for fit, bite and shade, and cemented."
			}
		],
		visitsAndRecovery: "Usually two or more visits, with a temporary in between. Sensitivity for a short period after preparation is common.",
		benefits: [
			"Protects a weakened tooth from further fracture",
			"Restores chewing and appearance",
			"A bridge is fixed in place rather than removable"
		],
		limitations: [
			"A bridge requires reshaping the supporting teeth",
			"Crowns and bridges have a finite lifespan and may need replacing",
			"The underlying tooth can still decay at the margins"
		],
		risks: [
			"Sensitivity or, occasionally, nerve inflammation after preparation",
			"Chipping of ceramic materials",
			"Decay or gum disease under a poorly cleaned restoration"
		],
		aftercare: [
			"Clean under a bridge daily using the aid your dentist recommends",
			"Avoid biting very hard objects",
			"Report any looseness promptly",
			"Attend regular check-ups so margins can be monitored"
		],
		whenToContact: ["The crown or bridge feels loose or lifts", "Persistent sensitivity or pain around the restored tooth"],
		faqs: [{
			question: "How long do crowns last?",
			answer: "Lifespan varies with material, bite forces and cleaning. Your dentist can give a realistic expectation for your situation at the review."
		}, {
			question: "Bridge or implant?",
			answer: "Both replace a missing tooth in different ways. The choice depends on the neighbouring teeth, bone, medical history and what you prefer after discussing the trade-offs."
		}],
		relatedSlugs: [
			"dental-implants",
			"root-canal-treatment",
			"tooth-coloured-fillings"
		],
		availableAt: bothBranches,
		reviewedBy: reviewedBy$1,
		lastReviewed: lastReviewed$1
	},
	{
		slug: "teeth-cleaning-and-polishing",
		published: true,
		title: "Teeth Cleaning and Polishing",
		category: "preventive",
		featured: true,
		summary: "Professional removal of plaque, hardened deposits and surface stains, followed by polishing and personalised cleaning advice.",
		metaDescription: "Professional teeth cleaning and polishing at Dent Arena, Surat: what a scaling appointment involves and how often it may be advised.",
		whatItIs: "A hygiene appointment removes plaque and calculus (hardened deposits) from above and just below the gum line using ultrasonic and hand instruments, followed by polishing. It also includes tailored advice on cleaning at home.",
		whoNeedsIt: [
			"Anyone attending for routine dental maintenance",
			"People with bleeding gums or visible deposits",
			"Before starting orthodontic, whitening or restorative work"
		],
		signs: [
			"Gums bleed when brushing or cleaning between teeth",
			"Persistent bad breath",
			"Visible build-up behind the lower front teeth"
		],
		howItWorks: [
			{
				step: "Assessment",
				detail: "The gums are examined and any bleeding or pocketing is recorded."
			},
			{
				step: "Scaling",
				detail: "Deposits are removed with ultrasonic and hand instruments."
			},
			{
				step: "Polishing",
				detail: "Surfaces are polished to remove stain and leave teeth smoother."
			},
			{
				step: "Advice",
				detail: "Cleaning technique, interdental aids and a recall interval are discussed."
			}
		],
		visitsAndRecovery: "Usually a single appointment. Gums may feel tender and teeth briefly sensitive afterwards, particularly if there was significant build-up.",
		benefits: [
			"Removes deposits that brushing alone cannot",
			"Helps gum inflammation settle",
			"Gives a chance to spot problems early"
		],
		limitations: [
			"Cleaning does not lighten the natural shade of teeth",
			"Established gum disease may need a longer course of treatment",
			"Results depend on daily cleaning at home"
		],
		risks: ["Temporary sensitivity to cold", "Gum tenderness or minor bleeding for a day or two"],
		aftercare: [
			"Brush twice daily with fluoride toothpaste",
			"Clean between the teeth daily",
			"Use a sensitivity toothpaste if needed",
			"Return at the recall interval your dentist recommends"
		],
		whenToContact: ["Gum bleeding that continues for more than a couple of weeks", "Sensitivity that worsens rather than settles"],
		faqs: [{
			question: "How often should I have a cleaning?",
			answer: "Recall intervals are individual and depend on your gum health, habits and risk factors. Your dentist will suggest an interval for you rather than a fixed rule."
		}, {
			question: "Does scaling damage enamel?",
			answer: "Professional scaling removes deposits, not enamel. Some sensitivity afterwards is normal, particularly where gums have receded."
		}],
		relatedSlugs: [
			"gum-treatment",
			"preventive-dental-check-up",
			"teeth-whitening"
		],
		availableAt: bothBranches,
		reviewedBy: reviewedBy$1,
		lastReviewed: lastReviewed$1
	},
	{
		slug: "tooth-coloured-fillings",
		published: true,
		title: "Tooth-Coloured Fillings",
		category: "restorative",
		summary: "Composite restorations used to repair decayed, chipped or worn teeth while matching the surrounding tooth shade.",
		metaDescription: "Tooth-coloured composite fillings at Dent Arena, Surat: when a filling is needed, how it is placed and how long the visit takes.",
		whatItIs: "A tooth-coloured filling uses a composite resin bonded to the tooth to replace lost structure after decay, fracture or wear. The material is shaped and hardened directly in the mouth and polished to match the tooth.",
		whoNeedsIt: [
			"Decay detected at a check-up or on an X-ray",
			"A chipped edge on a front or back tooth",
			"Worn areas near the gum line",
			"Replacement of an old, failing filling"
		],
		signs: [
			"Sensitivity to sweet, hot or cold",
			"A rough edge you can feel with your tongue",
			"Food packing between two teeth",
			"A visible dark spot or hole"
		],
		howItWorks: [
			{
				step: "Diagnosis",
				detail: "Clinical examination and, where needed, an X-ray to see the extent of decay."
			},
			{
				step: "Preparation",
				detail: "Local anaesthetic if required, then removal of decay and preparation of the cavity."
			},
			{
				step: "Placement",
				detail: "Composite is bonded in layers, shaped to the tooth and hardened with a curing light."
			},
			{
				step: "Finishing",
				detail: "The bite is checked and the filling is polished."
			}
		],
		visitsAndRecovery: "Most fillings are completed in one visit. Mild sensitivity for a few days afterwards is common, particularly with deeper cavities.",
		benefits: [
			"Matches the shade of the natural tooth",
			"Bonds to tooth structure, so less healthy tooth needs removing than with some older techniques",
			"Completed in a single appointment in most cases"
		],
		limitations: [
			"Very large cavities may be better restored with a crown or an indirect restoration",
			"Composite can stain at the margins over years",
			"Fillings do not last indefinitely and need monitoring"
		],
		risks: [
			"Post-operative sensitivity",
			"Nerve inflammation where decay was deep, occasionally requiring root canal treatment",
			"Chipping under heavy bite forces"
		],
		aftercare: [
			"Wait until numbness wears off before eating",
			"Report a high bite so it can be adjusted",
			"Clean between the teeth daily to protect the margins",
			"Reduce frequency of sugary snacks and drinks"
		],
		whenToContact: ["The bite feels high after the anaesthetic wears off", "Sensitivity that increases over the following weeks"],
		faqs: [{
			question: "Will the filling be noticeable?",
			answer: "Composite is shade-matched to your tooth, so it is generally hard to see, though a very close match depends on the tooth and the location."
		}, {
			question: "How long do composite fillings last?",
			answer: "That depends on size, position, bite forces and cleaning. Your dentist will monitor them at each check-up."
		}],
		relatedSlugs: [
			"root-canal-treatment",
			"crowns-and-bridges",
			"preventive-dental-check-up"
		],
		availableAt: bothBranches,
		reviewedBy: reviewedBy$1,
		lastReviewed: lastReviewed$1
	},
	{
		slug: "tooth-extraction",
		published: true,
		title: "Tooth Extraction",
		category: "surgical",
		summary: "Removal of a tooth that cannot be restored or is causing problems, carried out under local anaesthetic with aftercare guidance.",
		metaDescription: "Tooth extraction at Dent Arena, Surat: when removal is advised, what the appointment involves and how to care for the site afterwards.",
		whatItIs: "An extraction removes a tooth from its socket. It is advised when a tooth is too damaged to restore predictably, when infection cannot be resolved, or as part of a wider treatment plan.",
		whoNeedsIt: [
			"A tooth broken below the gum level",
			"Advanced decay that cannot be restored",
			"Severe gum disease with a very loose tooth",
			"Teeth removed as part of an orthodontic plan"
		],
		signs: [
			"A tooth that is loose in adulthood",
			"Recurrent swelling around one tooth",
			"A tooth that has fractured badly"
		],
		howItWorks: [
			{
				step: "Assessment",
				detail: "Examination, X-ray, and discussion of alternatives to removal where they exist."
			},
			{
				step: "Anaesthetic",
				detail: "The area is numbed thoroughly before starting."
			},
			{
				step: "Removal",
				detail: "The tooth is loosened and removed; sometimes the socket is stitched."
			},
			{
				step: "Aftercare briefing",
				detail: "Written and verbal instructions for the first 24–48 hours."
			},
			{
				step: "Replacement planning",
				detail: "Options for replacing the tooth, if appropriate, are discussed."
			}
		],
		visitsAndRecovery: "Usually one appointment, with a review if stitches were placed. The socket heals over the following weeks; discomfort and swelling in the first few days are normal.",
		benefits: ["Resolves pain or infection from a tooth that cannot be saved", "Allows planning of a replacement where appropriate"],
		limitations: ["A gap can affect chewing and neighbouring teeth over time", "Replacement options require separate treatment"],
		risks: [
			"Bleeding, bruising and swelling",
			"Dry socket, a painful delay in healing",
			"Infection requiring further treatment",
			"Rarely, injury to nearby structures depending on the tooth"
		],
		aftercare: [
			"Bite on the gauze provided for as long as advised",
			"Avoid rinsing vigorously, smoking or using a straw in the first 24 hours",
			"Use warm salt-water rinses from the next day if advised",
			"Keep the rest of the mouth clean as usual"
		],
		whenToContact: [
			"Bleeding that does not stop with pressure",
			"Severe pain three to four days later",
			"Fever or spreading swelling"
		],
		faqs: [{
			question: "Can the tooth be saved instead?",
			answer: "Where a tooth can be restored predictably, that is usually discussed first. Extraction is advised when the alternatives carry a poor outlook."
		}, {
			question: "When can I replace the tooth?",
			answer: "Timing depends on healing and the replacement chosen. Your dentist will explain the sequence for your case."
		}],
		relatedSlugs: [
			"wisdom-tooth-removal",
			"dental-implants",
			"dentures"
		],
		availableAt: bothBranches,
		reviewedBy: reviewedBy$1,
		lastReviewed: lastReviewed$1
	},
	{
		slug: "wisdom-tooth-removal",
		published: true,
		title: "Wisdom Tooth Removal",
		category: "surgical",
		summary: "Assessment and removal of third molars that are impacted, repeatedly infected or damaging the tooth in front.",
		metaDescription: "Wisdom tooth removal at Dent Arena, Surat: when it is needed, what the procedure involves and typical recovery advice.",
		whatItIs: "Wisdom teeth are the last molars to erupt, usually in the late teens or twenties. When there is not enough room, they can become impacted. Removal is considered when they cause recurring problems, not simply because they are present.",
		whoNeedsIt: [
			"Repeated infection around a partly erupted wisdom tooth",
			"Decay in the wisdom tooth or the tooth in front that cannot be treated",
			"Cysts or other changes seen on an X-ray",
			"Persistent pain or difficulty opening the jaw linked to the area"
		],
		signs: [
			"Swollen, sore gum at the very back of the jaw",
			"Bad taste or discharge from the area",
			"Pain when biting at the back",
			"Difficulty cleaning the last tooth"
		],
		howItWorks: [
			{
				step: "Imaging and assessment",
				detail: "An X-ray, and sometimes a 3D scan, shows the tooth position and its relationship to nearby nerves."
			},
			{
				step: "Planning",
				detail: "Risks, alternatives and whether referral is appropriate are discussed."
			},
			{
				step: "Procedure",
				detail: "Removal under local anaesthetic; the tooth may be sectioned to remove it more conservatively."
			},
			{
				step: "Closure",
				detail: "Stitches are often placed and aftercare is explained."
			}
		],
		visitsAndRecovery: "Usually one appointment plus a review. Swelling and limited mouth opening for several days are common and generally improve over the first week.",
		benefits: ["Resolves recurring infection or pain from the area", "Can protect the second molar from further damage"],
		limitations: ["Not every wisdom tooth needs removing", "Some cases are better managed by an oral surgeon"],
		risks: [
			"Swelling, bruising and jaw stiffness",
			"Dry socket",
			"Temporary or, rarely, longer-lasting altered sensation in the lip or tongue for lower wisdom teeth"
		],
		aftercare: [
			"Use cold packs as advised on the first day",
			"Eat soft food and keep hydrated",
			"Follow the rinsing instructions from the day after",
			"Take prescribed medication as directed"
		],
		whenToContact: [
			"Worsening pain after the third day",
			"Fever, spreading swelling or difficulty swallowing",
			"Numbness that persists beyond the expected period"
		],
		faqs: [{
			question: "Do all wisdom teeth need to come out?",
			answer: "No. A wisdom tooth that is healthy, cleanable and not causing problems is usually monitored rather than removed."
		}, {
			question: "How long is recovery?",
			answer: "Most swelling and stiffness improve over the first week, though this varies with the tooth position and the individual."
		}],
		relatedSlugs: [
			"tooth-extraction",
			"emergency-dental-care",
			"gum-treatment"
		],
		availableAt: bothBranches,
		reviewedBy: reviewedBy$1,
		lastReviewed: lastReviewed$1
	},
	{
		slug: "gum-treatment",
		published: true,
		title: "Gum Treatment",
		category: "preventive",
		summary: "Treatment for gum inflammation and periodontal disease, combining professional cleaning below the gum line with tailored home care.",
		metaDescription: "Gum disease treatment at Dent Arena, Surat: signs of gum problems, how periodontal care works and what maintenance involves.",
		whatItIs: "Gum disease begins as gingivitis, where the gums are inflamed but the supporting bone is intact. If it progresses to periodontitis, the bone around the teeth is affected. Treatment focuses on removing deposits below the gum line and helping you control plaque daily.",
		whoNeedsIt: [
			"Gums that bleed on brushing",
			"Pocketing found during a gum examination",
			"Recurrent bad breath or gum tenderness",
			"Smokers and people with diabetes, who are at higher risk"
		],
		signs: [
			"Red, swollen or bleeding gums",
			"Gums receding away from the teeth",
			"Teeth that feel loose or have drifted",
			"Persistent bad taste or breath"
		],
		howItWorks: [
			{
				step: "Periodontal assessment",
				detail: "Pocket depths, bleeding and bone levels are recorded, usually with X-rays."
			},
			{
				step: "Cause-related therapy",
				detail: "Deposits are removed above and below the gum line, sometimes over more than one appointment."
			},
			{
				step: "Home care coaching",
				detail: "Technique and interdental cleaning aids are matched to your mouth."
			},
			{
				step: "Re-assessment",
				detail: "The response is re-measured after healing; further treatment or referral is considered if needed."
			},
			{
				step: "Maintenance",
				detail: "A supportive recall interval is agreed to keep the condition stable."
			}
		],
		visitsAndRecovery: "Treatment usually spans several appointments with a re-assessment after a healing period. Gums may be tender and teeth sensitive for a short time after each session.",
		benefits: [
			"Reduces inflammation and bleeding",
			"Helps slow further loss of support around teeth",
			"Improves the outlook for other dental treatment"
		],
		limitations: [
			"Bone already lost does not grow back with cleaning alone",
			"Ongoing maintenance is essential; the condition can recur",
			"Advanced cases may need periodontal surgery or specialist referral"
		],
		risks: ["Sensitivity and gum recession as inflammation resolves", "Temporary discomfort after deep cleaning"],
		aftercare: [
			"Clean between the teeth every day using the recommended aid",
			"Stop or reduce smoking, which strongly affects gum healing",
			"Manage general health conditions such as diabetes with your doctor",
			"Attend maintenance appointments at the agreed interval"
		],
		whenToContact: [
			"Bleeding or swelling that returns after treatment",
			"A tooth that becomes noticeably looser",
			"A gum abscess or sudden swelling"
		],
		faqs: [{
			question: "Can gum disease be cured?",
			answer: "Gingivitis can usually resolve with treatment and good daily cleaning. Periodontitis is managed and stabilised rather than cured, which is why maintenance matters."
		}, {
			question: "Why do my gums recede after treatment?",
			answer: "As swelling settles, the gum shrinks to its true level. This can expose more of the tooth and cause sensitivity, which usually improves."
		}],
		relatedSlugs: [
			"teeth-cleaning-and-polishing",
			"preventive-dental-check-up",
			"dental-implants"
		],
		availableAt: bothBranches,
		reviewedBy: reviewedBy$1,
		lastReviewed: lastReviewed$1
	},
	{
		slug: "dentures",
		published: true,
		title: "Dentures",
		category: "restorative",
		summary: "Removable replacements for several or all missing teeth, made to restore chewing, speech and facial support.",
		metaDescription: "Dentures at Dent Arena, Surat: partial and complete dentures, the fitting stages and how to adapt to and care for them.",
		whatItIs: "Dentures are removable appliances that replace missing teeth. A partial denture fills gaps where natural teeth remain; a complete denture replaces a full arch. Implants can be used to help retain a denture in some cases.",
		whoNeedsIt: [
			"Several missing teeth in one arch",
			"All teeth missing in an upper or lower jaw",
			"An interim replacement while other treatment is planned"
		],
		signs: [
			"Difficulty chewing a normal diet",
			"An existing denture that no longer fits or rocks",
			"Changes in speech after tooth loss"
		],
		howItWorks: [
			{
				step: "Assessment",
				detail: "Examination of remaining teeth, gums and ridge shape, and discussion of options."
			},
			{
				step: "Impressions",
				detail: "Initial and then accurate working impressions or scans."
			},
			{
				step: "Try-in",
				detail: "A wax try-in allows the bite, tooth position and appearance to be checked before finishing."
			},
			{
				step: "Fitting",
				detail: "The finished denture is fitted and adjusted."
			},
			{
				step: "Adjustments",
				detail: "Short review appointments to ease any sore spots as you adapt."
			}
		],
		visitsAndRecovery: "Dentures are made over several appointments. Most people need an adjustment period, and a few small adjustments in the first weeks are normal.",
		benefits: [
			"Replaces multiple teeth without surgery",
			"Restores appearance and support to the lips and cheeks",
			"Can often be modified if further teeth are lost"
		],
		limitations: [
			"Chewing efficiency is lower than with natural teeth",
			"The fit changes over time as the ridge remodels; relines may be needed",
			"Lower complete dentures are typically less stable than upper ones"
		],
		risks: [
			"Sore spots and ulceration during adaptation",
			"Fungal infection under a denture if hygiene is poor",
			"Gradual bone resorption under a long-worn denture"
		],
		aftercare: [
			"Clean the denture daily over water with a denture brush",
			"Leave it out at night unless advised otherwise",
			"Clean remaining natural teeth and gums thoroughly",
			"Attend reviews so fit and tissue health can be checked"
		],
		whenToContact: [
			"A sore spot that does not settle within a few days",
			"The denture cracks or a tooth comes off",
			"The fit becomes noticeably loose"
		],
		faqs: [{
			question: "How long does it take to get used to a denture?",
			answer: "Most people need a few weeks of practice with speech and eating, and often a couple of small adjustments during that period."
		}, {
			question: "Can implants help a loose denture?",
			answer: "In some cases implants can be used to retain a denture more securely. Suitability depends on bone and general health."
		}],
		relatedSlugs: [
			"dental-implants",
			"tooth-extraction",
			"crowns-and-bridges"
		],
		availableAt: bothBranches,
		reviewedBy: reviewedBy$1,
		lastReviewed: lastReviewed$1
	},
	{
		slug: "paediatric-dentistry",
		published: true,
		title: "Paediatric Dentistry",
		category: "specialist",
		summary: "Dental care for children, focused on prevention, early detection and building a calm, familiar experience of the dentist.",
		metaDescription: "Children's dentistry at Dent Arena, Surat: check-ups, prevention, fillings for baby teeth and helping children feel at ease.",
		whatItIs: "Paediatric care covers examinations, preventive treatment such as fluoride application and fissure sealants, treatment of decay in baby and young permanent teeth, and monitoring how the adult teeth are coming through.",
		whoNeedsIt: [
			"Children attending for their first dental visits",
			"A child with visible decay or toothache",
			"Children with a high-sugar diet or a family history of decay",
			"Monitoring of erupting adult teeth"
		],
		signs: [
			"A child complaining of pain with sweets or cold drinks",
			"White or brown marks on the teeth",
			"A baby tooth that is loose earlier or later than expected",
			"Difficulty eating on one side"
		],
		howItWorks: [
			{
				step: "Familiarisation",
				detail: "Early visits focus on letting the child get comfortable with the surroundings."
			},
			{
				step: "Examination",
				detail: "A gentle check of the teeth, gums and how the jaws are developing."
			},
			{
				step: "Prevention",
				detail: "Diet and brushing advice, fluoride application and sealants where appropriate."
			},
			{
				step: "Treatment",
				detail: "Any decay is treated using techniques suited to the child's age and cooperation."
			},
			{
				step: "Review",
				detail: "A recall interval is set based on the child's risk of decay."
			}
		],
		visitsAndRecovery: "Most children's appointments are short. Treatment is paced to the child, and more than one visit may be used deliberately to build confidence.",
		benefits: [
			"Problems are found while they are small and simpler to treat",
			"Children build familiarity with dental visits early",
			"Prevention is tailored to the child's diet and habits"
		],
		limitations: ["Very young or anxious children may need a referral for care under sedation or general anaesthesia", "Success depends heavily on home routines and diet"],
		risks: ["Anxiety if a first visit happens during pain rather than for prevention", "Decay progressing quickly in baby teeth if untreated"],
		aftercare: [
			"Brush twice daily with an age-appropriate fluoride toothpaste, supervised",
			"Keep sugary food and drink to mealtimes",
			"Avoid bottles or sweet drinks at bedtime",
			"Attend recall appointments even when nothing hurts"
		],
		whenToContact: ["Toothache, facial swelling or a knocked-out tooth", "An injury to a front tooth after a fall"],
		faqs: [{
			question: "When should a child first see a dentist?",
			answer: "Early familiarisation visits are generally encouraged once the first teeth appear, so the child associates the clinic with routine rather than pain."
		}, {
			question: "Do baby teeth with decay need treating?",
			answer: "Often yes. Baby teeth hold space for adult teeth and can cause pain and infection if decay is left."
		}],
		relatedSlugs: [
			"preventive-dental-check-up",
			"tooth-coloured-fillings",
			"emergency-dental-care"
		],
		availableAt: bothBranches,
		reviewedBy: reviewedBy$1,
		lastReviewed: lastReviewed$1
	},
	{
		slug: "preventive-dental-check-up",
		published: true,
		title: "Preventive Dental Check-up",
		category: "preventive",
		featured: true,
		summary: "A structured examination of the teeth, gums and soft tissues, with X-rays when indicated and a personalised prevention plan.",
		metaDescription: "Preventive dental check-ups at Dent Arena, Surat: what is examined, when X-rays are used and how a recall interval is decided.",
		whatItIs: "A check-up is an examination rather than a treatment. The dentist reviews your medical and dental history, examines the teeth, gums, bite and soft tissues, and takes X-rays where clinically indicated. The result is a plan and a recall interval suited to your risk.",
		whoNeedsIt: [
			"Anyone maintaining routine dental care",
			"New patients joining the practice",
			"People with a history of decay or gum disease",
			"Anyone unsure why a tooth feels different"
		],
		signs: [
			"It has been a long time since your last examination",
			"Sensitivity, bleeding gums or a rough edge you have noticed",
			"A change in how your teeth meet"
		],
		howItWorks: [
			{
				step: "History",
				detail: "Medical history, medication and any concerns you want addressed."
			},
			{
				step: "Examination",
				detail: "Teeth, existing restorations, gums, bite and soft tissues are checked."
			},
			{
				step: "X-rays if indicated",
				detail: "Radiographs are taken only when they will change what can be seen or decided."
			},
			{
				step: "Discussion",
				detail: "Findings, options and priorities are explained, with costs discussed before treatment."
			},
			{
				step: "Recall",
				detail: "An interval for your next examination is agreed based on your individual risk."
			}
		],
		visitsAndRecovery: "A single appointment. Any treatment identified is planned separately so you have time to consider it.",
		benefits: [
			"Problems are identified before they cause pain",
			"Prevention is tailored rather than generic",
			"Soft tissues are checked as part of the examination"
		],
		limitations: ["An examination does not include cleaning or treatment", "Some conditions only become visible with X-rays or over time"],
		risks: [],
		aftercare: [
			"Follow the prevention advice agreed at the visit",
			"Book any recommended treatment while it is still small",
			"Return at the recall interval suggested"
		],
		whenToContact: ["New pain, swelling or a broken tooth before your next visit", "An ulcer or patch in the mouth that has not healed in two weeks"],
		faqs: [{
			question: "How often should I have a check-up?",
			answer: "Intervals are individual. Someone with stable gums and no recent decay may be seen less often than someone at higher risk; your dentist will agree an interval with you."
		}, {
			question: "Will I need X-rays every time?",
			answer: "No. Radiographs are taken when they are clinically justified, based on your history and what the examination shows."
		}],
		relatedSlugs: [
			"teeth-cleaning-and-polishing",
			"tooth-coloured-fillings",
			"gum-treatment"
		],
		availableAt: bothBranches,
		reviewedBy: reviewedBy$1,
		lastReviewed: lastReviewed$1
	},
	{
		slug: "emergency-dental-care",
		published: true,
		title: "Emergency Dental Care",
		category: "specialist",
		summary: "Assessment and immediate management of dental pain, swelling, injuries and broken teeth.",
		metaDescription: "Emergency dental care at Dent Arena, Surat: what counts as a dental emergency, first steps at home and how to reach the clinic.",
		whatItIs: "Emergency care focuses on relieving pain, controlling infection and stabilising an injury. Definitive treatment is often planned for a later appointment once the immediate problem is settled.",
		whoNeedsIt: [
			"Severe or persistent toothache",
			"Facial or gum swelling",
			"A tooth knocked out or displaced by an injury",
			"A broken tooth or lost restoration causing pain"
		],
		signs: [
			"Pain that disturbs sleep or is not controlled by usual painkillers",
			"Swelling of the face, jaw or under the eye",
			"Bleeding after an injury or extraction that does not settle",
			"A tooth pushed out of position"
		],
		howItWorks: [
			{
				step: "Contact the clinic",
				detail: "Call or message so the situation can be assessed and an appointment arranged."
			},
			{
				step: "Assessment",
				detail: "Examination and X-rays as needed to identify the source."
			},
			{
				step: "Immediate management",
				detail: "Pain relief, drainage of infection, temporary restoration or stabilisation of an injured tooth."
			},
			{
				step: "Definitive plan",
				detail: "Follow-up treatment is scheduled once the acute problem has settled."
			}
		],
		visitsAndRecovery: "An emergency visit is usually short and focused. Follow-up appointments are almost always needed to complete treatment.",
		benefits: ["Pain and infection are addressed promptly", "Injured teeth are more likely to be manageable when seen quickly"],
		limitations: ["Emergency appointments deal with the immediate problem, not the full treatment plan", "Availability depends on clinic hours; severe facial swelling with difficulty breathing or swallowing is a medical emergency and needs hospital care"],
		risks: ["Delay allows infection to spread and treatment options to narrow"],
		aftercare: [
			"Take prescribed medication exactly as directed and complete the course",
			"Keep the area clean as instructed",
			"Attend the follow-up appointment even if the pain has gone"
		],
		whenToContact: [
			"Difficulty breathing or swallowing, or swelling closing the eye — seek urgent medical care immediately",
			"Fever with facial swelling",
			"A knocked-out adult tooth — contact a dentist without delay"
		],
		faqs: [{
			question: "What should I do if a tooth is knocked out?",
			answer: "Handle it by the crown, not the root, and seek dental care immediately. Time matters, and your dentist can advise on the phone about how to keep the tooth in the meantime."
		}, {
			question: "Is a swelling always urgent?",
			answer: "Facial swelling should be assessed promptly. Swelling with fever, difficulty swallowing or breathing needs urgent medical attention, not a routine appointment."
		}],
		relatedSlugs: [
			"root-canal-treatment",
			"tooth-extraction",
			"wisdom-tooth-removal"
		],
		availableAt: bothBranches,
		reviewedBy: reviewedBy$1,
		lastReviewed: lastReviewed$1
	},
	{
		slug: "full-mouth-rehabilitation",
		published: true,
		title: "Full-Mouth Rehabilitation",
		category: "restorative",
		summary: "A sequenced plan that rebuilds function and comfort where many teeth are worn, missing or heavily restored.",
		metaDescription: "Full-mouth rehabilitation at Dent Arena, Surat: how complex cases are assessed, planned in stages and reviewed over time.",
		whatItIs: "Full-mouth rehabilitation combines several treatments — which may include gum therapy, root canal treatment, crowns, bridges, implants or dentures — into one staged plan, usually where extensive wear, tooth loss or bite problems are present.",
		whoNeedsIt: [
			"Widespread tooth wear from grinding, acid or age",
			"Many missing or heavily restored teeth",
			"Difficulty chewing across the whole mouth",
			"Repeated failure of individual restorations"
		],
		signs: [
			"Teeth becoming visibly shorter over the years",
			"Frequent fractures of teeth or fillings",
			"Jaw muscle fatigue or an uncomfortable bite"
		],
		howItWorks: [
			{
				step: "Comprehensive assessment",
				detail: "Full examination, radiographs, photographs, scans and bite records."
			},
			{
				step: "Stabilisation",
				detail: "Active disease — decay and gum disease — is treated first."
			},
			{
				step: "Planning and preview",
				detail: "The bite and tooth position are planned, often tested with temporary restorations."
			},
			{
				step: "Definitive treatment",
				detail: "Restorations are completed in a planned sequence."
			},
			{
				step: "Maintenance",
				detail: "Long-term reviews, night guard where indicated, and hygiene support."
			}
		],
		visitsAndRecovery: "This is long-term treatment carried out over many appointments and months. Temporary restorations are usually worn while the plan progresses.",
		benefits: [
			"Treats the mouth as a whole rather than tooth by tooth",
			"Bite changes can be tested with temporaries before final work",
			"Sequenced so health is stabilised first"
		],
		limitations: [
			"Substantial time commitment and multiple appointments",
			"Some treatments are irreversible",
			"Long-term success depends on maintenance and habits such as grinding"
		],
		risks: [
			"Sensitivity or nerve inflammation in prepared teeth",
			"Fracture or wear of restorations over time",
			"Adjustment period while adapting to a changed bite"
		],
		aftercare: [
			"Wear a night guard if one has been provided",
			"Attend the agreed maintenance appointments",
			"Clean thoroughly around every restoration daily",
			"Report any change in the bite promptly"
		],
		whenToContact: ["A temporary restoration comes off", "The bite feels uneven or a tooth becomes sensitive to pressure"],
		faqs: [{
			question: "How long does full-mouth rehabilitation take?",
			answer: "It is measured in months and depends on how much stabilisation is needed first. A staged timeline is agreed before treatment starts."
		}, {
			question: "Do I have to do everything at once?",
			answer: "No. Care is usually phased, with the most urgent and health-related treatment first, and the rest sequenced as agreed."
		}],
		relatedSlugs: [
			"crowns-and-bridges",
			"dental-implants",
			"gum-treatment"
		],
		availableAt: bothBranches,
		reviewedBy: reviewedBy$1,
		lastReviewed: lastReviewed$1
	}
].filter((t) => t.published);
var featuredTreatments = publishedTreatments.filter((t) => t.featured);
function getTreatment(slug) {
	return publishedTreatments.find((t) => t.slug === slug);
}
function getTreatments(slugs) {
	return slugs.map((slug) => getTreatment(slug)).filter((t) => Boolean(t));
}
var categoryLabels = {
	restorative: "Restorative",
	cosmetic: "Cosmetic",
	orthodontics: "Orthodontics",
	preventive: "Preventive",
	surgical: "Surgical",
	specialist: "Specialist care"
};
/**
* Treatments a dentist can be asked about, based on confirmed personal scope
* when available, otherwise the branches where they practise.
*/
function getTreatmentsForDoctor(doctor) {
	const own = confirmed(doctor.treatmentSlugs);
	if (own) return getTreatments(own);
	return publishedTreatments.filter((t) => t.availableAt.some((id) => doctor.locationIds.includes(id)));
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/clinic-BsNXQ3RP.js
/**
* Single source of truth for Dent Arena contact details.
* Never hardcode a phone number or address anywhere else.
*/
var clinic = {
	name: "Dent Arena",
	legalName: placeholder("Registered legal/business name"),
	tagline: "For a healthy smile…",
	intro: "Dent Arena is a dental clinic in Surat with two neighbourhood practices — Bhatar and Vesu — offering everyday dental care in a calm, unhurried setting.",
	city: "Surat",
	region: "Gujarat",
	country: "India",
	/** E.164 without the plus, used for wa.me links. */
	whatsappNumber: "919913025687",
	phoneE164: "+919913025687",
	phoneDisplay: "+91 99130 25687",
	email: "dentarenasurat@gmail.com",
	social: {
		instagram: "https://www.instagram.com/dentarenadentalclinic.surat",
		facebook: "https://www.facebook.com/DentArenaSurat/",
		googleBusiness: placeholder("Google Business Profile URL")
	}
};
var telHref = `tel:${clinic.phoneE164}`;
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/locations-DcAuo-4Z.js
var locations = [{
	id: "bhatar",
	slug: "bhatar",
	name: "Dent Arena – Bhatar",
	shortName: "Bhatar",
	addressLines: ["1st Floor, Sheetal Shopping Complex, Shops 22 & 23", "Bhatar Road, IOC Colony, Subhash Nagar, Athwa"],
	locality: "Surat",
	region: "Gujarat",
	postalCode: placeholder("Bhatar branch PIN code"),
	phone: clinic.phoneDisplay,
	description: "The Bhatar practice sits on the first floor of Sheetal Shopping Complex, on Bhatar Road close to IOC Colony and Subhash Nagar. It is set up for routine and family dentistry — check-ups, cleanings, fillings and follow-up visits — for people living and working around Athwa.",
	landmark: placeholder("Nearest landmark for the Bhatar branch"),
	parking: placeholder("Parking arrangement at Sheetal Shopping Complex"),
	accessibility: placeholder("Lift / step-free access details for the 1st floor"),
	hours: [{
		days: "Monday to Saturday",
		hours: "9:30 am – 7:30 pm"
	}, {
		days: "Sunday",
		hours: "By appointment only"
	}],
	mapEmbedUrl: placeholder("Google Maps embed URL for the Bhatar branch"),
	directionsUrl: "https://www.google.com/maps/search/?api=1&query=Dent+Arena+Sheetal+Shopping+Complex+Bhatar+Road+Surat",
	geo: placeholder("Verified latitude and longitude for the Bhatar branch"),
	doctorSlugs: ["dr-mayank-shah", "dr-minal-shah"],
	treatmentSlugs: placeholder("Confirmed list of treatments offered at Bhatar"),
	photos: []
}, {
	id: "vesu",
	slug: "vesu",
	name: "Dent Arena – Vesu",
	shortName: "Vesu",
	addressLines: ["211, 2nd Floor, Avadh Arena", "VIP Road, Bharthana, Vesu"],
	locality: "Surat",
	region: "Gujarat",
	postalCode: "395007",
	phone: clinic.phoneDisplay,
	description: "The Vesu practice is on the second floor of Avadh Arena on VIP Road, between Bharthana and Vesu. It serves the newer residential neighbourhoods nearby and is used for both first consultations and longer treatment appointments.",
	landmark: placeholder("Nearest landmark for the Vesu branch"),
	parking: placeholder("Parking arrangement at Avadh Arena"),
	accessibility: placeholder("Lift / step-free access details for the 2nd floor"),
	hours: placeholder("Vesu opening hours (weekdays, weekend, lunch break)"),
	mapEmbedUrl: placeholder("Google Maps embed URL for the Vesu branch"),
	directionsUrl: "https://www.google.com/maps/search/?api=1&query=Dent+Arena+Avadh+Arena+VIP+Road+Vesu+Surat+395007",
	geo: placeholder("Verified latitude and longitude for the Vesu branch"),
	doctorSlugs: ["dr-mayank-shah", "dr-minal-shah"],
	treatmentSlugs: placeholder("Confirmed list of treatments offered at Vesu"),
	photos: []
}];
function getLocation(id) {
	return locations.find((l) => l.id === id || l.slug === id);
}
function formatAddress(location) {
	const parts = [...location.addressLines, `${location.locality}, ${location.region}`];
	if (typeof location.postalCode === "string") parts[parts.length - 1] = `${location.locality}, ${location.region} ${location.postalCode}`;
	return parts;
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/seo-BlptyURH.js
/** Per-route head meta. Canonical is relative until a project domain is set. */
function pageMeta({ title, description, path, type = "website", noindex }) {
	const fullTitle = title.includes(clinic.name) ? title : `${title} | ${clinic.name}`;
	const meta = [
		{ title: fullTitle },
		{
			name: "description",
			content: description
		},
		{
			property: "og:title",
			content: fullTitle
		},
		{
			property: "og:description",
			content: description
		},
		{
			property: "og:type",
			content: type
		},
		{
			property: "og:url",
			content: path
		},
		{
			property: "og:site_name",
			content: clinic.name
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		},
		{
			name: "twitter:title",
			content: fullTitle
		},
		{
			name: "twitter:description",
			content: description
		}
	];
	if (noindex) meta.push({
		name: "robots",
		content: "noindex"
	});
	return {
		meta,
		links: [{
			rel: "canonical",
			href: path
		}]
	};
}
function jsonLd(data) {
	return {
		type: "application/ld+json",
		children: JSON.stringify(data)
	};
}
function organizationSchema() {
	return {
		"@context": "https://schema.org",
		"@type": "Organization",
		name: clinic.name,
		slogan: clinic.tagline,
		telephone: clinic.phoneE164,
		areaServed: `${clinic.city}, ${clinic.region}, ${clinic.country}`,
		department: locations.map((l) => ({
			"@type": "Dentist",
			name: l.name
		}))
	};
}
function locationSchema(id) {
	const location = locations.find((l) => l.id === id);
	if (!location) return null;
	const postalCode = confirmed(location.postalCode);
	const geo = confirmed(location.geo);
	const schema = {
		"@context": "https://schema.org",
		"@type": "Dentist",
		name: location.name,
		parentOrganization: {
			"@type": "Organization",
			name: clinic.name
		},
		telephone: clinic.phoneE164,
		address: {
			"@type": "PostalAddress",
			streetAddress: location.addressLines.join(", "),
			addressLocality: location.locality,
			addressRegion: location.region,
			addressCountry: "IN",
			...postalCode ? { postalCode } : {}
		},
		hasMap: location.directionsUrl
	};
	if (geo) schema["geo"] = {
		"@type": "GeoCoordinates",
		latitude: geo.lat,
		longitude: geo.lng
	};
	return schema;
}
function breadcrumbSchema(items) {
	return {
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		itemListElement: items.map((item, index) => ({
			"@type": "ListItem",
			position: index + 1,
			name: item.name,
			item: item.path
		}))
	};
}
function faqSchema(faqs) {
	return {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		mainEntity: faqs.map((faq) => ({
			"@type": "Question",
			name: faq.question,
			acceptedAnswer: {
				"@type": "Answer",
				text: faq.answer
			}
		}))
	};
}
function articleSchema(input) {
	return {
		"@context": "https://schema.org",
		"@type": "Article",
		headline: input.headline,
		description: input.description,
		mainEntityOfPage: input.path,
		publisher: {
			"@type": "Organization",
			name: clinic.name
		},
		...input.datePublished ? { datePublished: input.datePublished } : {}
	};
}
function personSchema(input) {
	return {
		"@context": "https://schema.org",
		"@type": "Person",
		name: input.name,
		url: input.path,
		...input.jobTitle ? { jobTitle: input.jobTitle } : {},
		worksFor: {
			"@type": "Organization",
			name: input.worksFor ?? clinic.name
		}
	};
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/doctors-mJQFhS4K.js
var publishedDoctors = [{
	slug: "dr-mayank-shah",
	published: true,
	name: "Dr. Mayank M. Shah",
	role: "Dental Surgeon & Implantologist",
	qualifications: ["BDS"],
	registrationNumber: placeholder("State Dental Council registration number"),
	experience: placeholder("Years of clinical experience"),
	bio: placeholder("Short professional biography approved by Dr. Mayank M. Shah"),
	focusAreas: placeholder("Clinical areas of focus"),
	languages: placeholder("Languages spoken during consultations"),
	locationIds: ["bhatar", "vesu"],
	photo: {
		src: "/images/gallery/mayank-shah.jpg",
		alt: "Dr. Mayank M. Shah - Dental Surgeon & Implantologist at Dent Arena",
		width: 800,
		height: 800,
		className: "object-cover object-center"
	},
	treatmentSlugs: placeholder("Treatments personally provided by Dr. Mayank M. Shah")
}, {
	slug: "dr-minal-shah",
	published: true,
	name: "Dr. Minal M. Shah",
	role: "Smile Design Specialist",
	qualifications: ["BDS"],
	registrationNumber: placeholder("State Dental Council registration number"),
	experience: placeholder("Years of clinical experience"),
	bio: placeholder("Short professional biography approved by Dr. Minal M. Shah"),
	focusAreas: placeholder("Clinical areas of focus"),
	languages: placeholder("Languages spoken during consultations"),
	locationIds: ["bhatar", "vesu"],
	photo: {
		src: "/images/gallery/minal-shah.jpg",
		alt: "Dr. Minal M. Shah - Smile Design Specialist at Dent Arena",
		width: 800,
		height: 800,
		className: "object-cover object-center"
	},
	treatmentSlugs: placeholder("Treatments personally provided by Dr. Minal M. Shah")
}].filter((d) => d.published);
function getDoctor(slug) {
	return publishedDoctors.find((d) => d.slug === slug);
}
/**
* Dentists who see patients at a branch where the treatment is offered.
* Branch overlap is a confirmed fact; it never implies a clinician performs a
* specific procedure. Once `treatmentSlugs` is confirmed it takes precedence.
*/
function getDoctorsForTreatment(treatment) {
	return publishedDoctors.filter((doctor) => {
		const own = confirmed(doctor.treatmentSlugs);
		if (own) return own.includes(treatment.slug);
		return doctor.locationIds.some((id) => treatment.availableAt.includes(id));
	});
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/articles-SGnl8G-x.js
var reviewedBy = placeholder("Name and qualifications of the reviewing dentist");
var lastReviewed = placeholder("Date this article was last medically reviewed");
var publishedArticles = [
	{
		slug: "how-to-brush-and-clean-between-your-teeth",
		published: true,
		title: "How to brush and clean between your teeth properly",
		description: "A practical guide to daily cleaning: technique, timing, fluoride toothpaste and why cleaning between the teeth matters as much as brushing.",
		topic: "Everyday care",
		readingTime: "4 min read",
		datePublished: placeholder("Publication date"),
		body: [
			{
				heading: "Brushing: technique matters more than force",
				paragraphs: ["Most people brush for less time and with more pressure than they realise. Aim for two minutes, twice a day, with a soft or medium brush held at a slight angle towards the gum line, using small circular or short back-and-forth movements rather than long scrubbing strokes.", "Hard scrubbing does not remove more plaque. Over years it can contribute to gum recession and wear near the gum line, which is a common cause of sensitivity."],
				list: [
					"Two minutes, twice a day",
					"Soft or medium bristles, replaced when they splay",
					"Angle the bristles towards the gum line",
					"Spit after brushing rather than rinsing with water, so fluoride stays on the teeth"
				]
			},
			{
				heading: "Cleaning between the teeth",
				paragraphs: ["A toothbrush cannot reach the surfaces between teeth, which is where decay and gum inflammation often begin. Interdental brushes, floss or water flossers each work — the best one is the one that fits your gaps and that you will actually use daily.", "If your gums bleed when you start cleaning between the teeth, that is usually a sign of existing inflammation rather than a reason to stop. Bleeding commonly settles within a couple of weeks of consistent cleaning. If it does not, have your gums assessed."]
			},
			{
				heading: "Fluoride and timing",
				paragraphs: ["Fluoride toothpaste is one of the most reliable ways to reduce decay risk. Check the concentration is appropriate for your age group, and supervise young children so only a small smear or pea-sized amount is used.", "Brushing before bed matters particularly, because saliva flow drops during sleep and offers less natural protection."]
			}
		],
		relatedTreatmentSlugs: [
			"teeth-cleaning-and-polishing",
			"preventive-dental-check-up",
			"gum-treatment"
		],
		reviewedBy,
		lastReviewed
	},
	{
		slug: "what-causes-tooth-sensitivity",
		published: true,
		title: "What causes tooth sensitivity, and when to get it checked",
		description: "Why teeth react to cold, sweet or air, which causes are harmless and which signs suggest you should see a dentist.",
		topic: "Symptoms",
		readingTime: "4 min read",
		datePublished: placeholder("Publication date"),
		body: [
			{
				heading: "Why teeth become sensitive",
				paragraphs: ["Sensitivity usually happens when the dentine — the layer beneath enamel — becomes exposed. Dentine contains tiny tubules that connect to the nerve, so temperature and sweetness can trigger a short, sharp response.", "Common reasons for exposure include gum recession, enamel wear from acidic drinks, grinding, and the period after professional cleaning or whitening."],
				list: [
					"Gum recession exposing root surfaces",
					"Acid erosion from frequent fizzy or citrus drinks",
					"Grinding or clenching wearing the biting surfaces",
					"A cracked tooth or a failing filling",
					"Temporary sensitivity after dental treatment"
				]
			},
			{
				heading: "What usually helps",
				paragraphs: ["A sensitivity toothpaste used consistently, smeared on the sensitive area and left rather than rinsed away, helps many people over a few weeks. Reducing the frequency of acidic drinks and waiting before brushing after them also reduces wear.", "A night guard may be advised if grinding is contributing."]
			},
			{
				heading: "When sensitivity needs assessing",
				paragraphs: ["Short, sharp sensitivity that settles quickly is common. Pain that lingers after the cold has gone, pain on biting a single tooth, night pain, or sensitivity in one tooth that is getting worse are different — these can indicate decay, a crack or nerve inflammation and should be examined."]
			}
		],
		relatedTreatmentSlugs: [
			"gum-treatment",
			"tooth-coloured-fillings",
			"root-canal-treatment"
		],
		reviewedBy,
		lastReviewed
	},
	{
		slug: "preparing-for-your-first-dental-visit",
		published: true,
		title: "Preparing for your first dental visit",
		description: "What to bring, what an examination involves, and how to make a first appointment easier if you feel anxious about the dentist.",
		topic: "Visiting the dentist",
		readingTime: "3 min read",
		datePublished: placeholder("Publication date"),
		body: [
			{
				heading: "What to bring",
				paragraphs: ["Bring a list of any medicines you take, including supplements, and note any medical conditions, allergies or recent surgery. If you have had X-rays or treatment elsewhere recently, mention it — it can avoid repeating imaging unnecessarily."],
				list: [
					"A list of current medication",
					"Details of medical conditions and allergies",
					"Notes on any previous dental treatment",
					"Questions you would like answered"
				]
			},
			{
				heading: "What usually happens",
				paragraphs: ["A first appointment is generally an examination rather than treatment. The dentist reviews your history, examines your teeth, gums, bite and soft tissues, and takes X-rays only if they are clinically justified. You then discuss what was found and what the options are.", "Nothing has to be decided in the chair. Ask for the plan and the costs in writing if that helps you think it over."]
			},
			{
				heading: "If you feel anxious",
				paragraphs: ["Say so at the start. Agreeing a simple stop signal, asking for each step to be described before it happens, and booking a first appointment that is examination-only are all reasonable requests that many people find make a real difference."]
			}
		],
		relatedTreatmentSlugs: ["preventive-dental-check-up", "teeth-cleaning-and-polishing"],
		reviewedBy,
		lastReviewed
	}
].filter((a) => a.published);
function getArticle(slug) {
	return publishedArticles.find((a) => a.slug === slug);
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/router-BEx1EPk1.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var styles_default = "/assets/styles-Q4ArR68L.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	const stack = error instanceof Error ? error.stack : void 0;
	window.__lovableReportRuntimeError?.({
		message,
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow-soft hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-primary/25 bg-transparent text-primary hover:bg-secondary",
			secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/70",
			ghost: "text-ink hover:bg-secondary",
			link: "text-primary underline-offset-4 hover:underline",
			whatsapp: "bg-accent text-accent-foreground shadow-soft hover:bg-accent/85 font-semibold",
			gold: "bg-gold text-gold-foreground shadow-soft hover:bg-gold/90 font-semibold"
		},
		size: {
			default: "h-11 px-5 py-2",
			sm: "h-9 px-4 text-xs",
			lg: "h-12 px-7 text-base",
			xl: "h-14 px-8 text-base",
			icon: "h-11 w-11"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
function Wordmark({ className, tone = "default" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: "/",
		className: cn("inline-flex flex-col leading-none", className),
		"aria-label": `${clinic.name} \u2014 home`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: "images/gallery/logo.png",
			alt: "logo",
			className: "w-50 logo"
		})
	});
}
var primaryNav = [
	{
		label: "Treatments",
		to: "/treatments"
	},
	{
		label: "Doctors",
		to: "/doctors"
	},
	{
		label: "Locations",
		to: "/locations"
	},
	{
		label: "Gallery",
		to: "/gallery"
	},
	{
		label: "Articles",
		to: "/articles"
	},
	{
		label: "FAQs",
		to: "/faqs"
	},
	{
		label: "Contact",
		to: "/contact"
	}
];
var footerNav = [
	{
		title: "Care",
		items: [
			{
				label: "All treatments",
				to: "/treatments"
			},
			{
				label: "Preventive check-up",
				to: "/treatments/preventive-dental-check-up"
			},
			{
				label: "Emergency dental care",
				to: "/treatments/emergency-dental-care"
			},
			{
				label: "Root canal treatment",
				to: "/treatments/root-canal-treatment"
			}
		]
	},
	{
		title: "Clinic",
		items: [
			{
				label: "Our doctors",
				to: "/doctors"
			},
			{
				label: "Dental health articles",
				to: "/articles"
			},
			{
				label: "Clinic gallery",
				to: "/gallery"
			},
			{
				label: "Smile gallery",
				to: "/smile-gallery"
			},
			{
				label: "Patient testimonials",
				to: "/testimonials"
			},
			{
				label: "FAQs",
				to: "/faqs"
			}
		]
	},
	{
		title: "Visit",
		items: [
			{
				label: "Locations",
				to: "/locations"
			},
			{
				label: "Bhatar branch",
				to: "/locations/bhatar"
			},
			{
				label: "Vesu branch",
				to: "/locations/vesu"
			},
			{
				label: "Book an appointment",
				to: "/book-appointment"
			},
			{
				label: "Contact",
				to: "/contact"
			}
		]
	}
];
function buildAppointmentMessage(request) {
	return [
		"Hello Dent Arena,",
		"",
		"I would like to request a dental appointment.",
		"",
		`Name: ${request.name}`,
		`Mobile: ${request.mobile}`,
		`Preferred branch: ${request.branch}`,
		`Treatment or concern: ${request.concern}`,
		`Preferred date: ${request.date}`,
		`Preferred time: ${request.time}`,
		`Message: ${request.message?.trim() ? request.message.trim() : "—"}`,
		"",
		"Please confirm an available appointment slot."
	].join("\n");
}
/** Builds a wa.me deep link. Nothing is sent to a server. */
function whatsappLink(text) {
	return `https://wa.me/${clinic.whatsappNumber}?text=${encodeURIComponent(text)}`;
}
function appointmentLink(request) {
	return whatsappLink(buildAppointmentMessage(request));
}
/** Generic enquiry link used by header, footer and mobile action bar CTAs. */
function generalEnquiryLink(context) {
	const base = [
		"Hello Dent Arena,",
		"",
		"I would like to ask about a dental appointment."
	];
	if (context) base.push("", `Regarding: ${context}`);
	return whatsappLink(base.join("\n"));
}
function SiteHeader() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [condensed, setCondensed] = (0, import_react.useState)(false);
	const closeRef = (0, import_react.useRef)(null);
	const menuButtonRef = (0, import_react.useRef)(null);
	const sheetRef = (0, import_react.useRef)(null);
	const wasOpenRef = (0, import_react.useRef)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => {
			setCondensed(window.scrollY > 24);
		};
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => {};
	}, []);
	(0, import_react.useEffect)(() => {
		if (!open) {
			if (wasOpenRef.current) requestAnimationFrame(() => {
				menuButtonRef.current?.focus();
			});
			wasOpenRef.current = false;
			return;
		}
		wasOpenRef.current = true;
		const html = document.documentElement;
		const body = document.body;
		const scrollY = window.scrollY;
		const previousHtmlOverflow = html.style.overflow;
		const previousBodyOverflow = body.style.overflow;
		const previousBodyPosition = body.style.position;
		const previousBodyTop = body.style.top;
		const previousBodyWidth = body.style.width;
		html.style.overflow = "hidden";
		body.style.overflow = "hidden";
		body.style.position = "fixed";
		body.style.top = `-${scrollY}px`;
		body.style.width = "100%";
		requestAnimationFrame(() => {
			closeRef.current?.focus();
		});
		const onKeyDown = (event) => {
			if (event.key === "Escape") {
				event.preventDefault();
				setOpen(false);
				return;
			}
			if (event.key !== "Tab" || !sheetRef.current) return;
			const focusable = sheetRef.current.querySelectorAll([
				"a[href]",
				"button:not([disabled])",
				"input:not([disabled])",
				"select:not([disabled])",
				"textarea:not([disabled])",
				"[tabindex]:not([tabindex=\"-1\"])"
			].join(","));
			if (focusable.length === 0) return;
			const first = focusable[0];
			const last = focusable[focusable.length - 1];
			if (event.shiftKey && document.activeElement === first) {
				event.preventDefault();
				last.focus();
				return;
			}
			if (!event.shiftKey && document.activeElement === last) {
				event.preventDefault();
				first.focus();
			}
		};
		document.addEventListener("keydown", onKeyDown);
		return () => {
			document.removeEventListener("keydown", onKeyDown);
			html.style.overflow = previousHtmlOverflow;
			body.style.overflow = previousBodyOverflow;
			body.style.position = previousBodyPosition;
			body.style.top = previousBodyTop;
			body.style.width = previousBodyWidth;
			window.scrollTo(0, scrollY);
		};
	}, [open]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: cn("sticky top-0 z-40 transition-[background-color,box-shadow,border-color] duration-200", condensed ? "border-b border-border bg-background/95 shadow-soft backdrop-blur supports-[backdrop-filter]:bg-background/85" : "border-b border-transparent bg-background"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
			className: cn("flex items-center justify-between gap-4 transition-[padding] duration-200", condensed ? "py-2.5" : "py-4"),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wordmark, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					"aria-label": "Primary",
					className: "hidden lg:block",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "flex items-center gap-7",
						children: primaryNav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: item.to,
							"data-active": "false",
							activeProps: { "data-active": "true" },
							className: "link-underline inline-flex min-h-11 items-center text-[0.9375rem] font-medium text-ink transition-colors hover:text-primary data-[active=true]:text-primary",
							children: item.label
						}) }, item.to))
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						className: "hidden sm:inline-flex",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/book-appointment",
							children: "Book an appointment"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						ref: menuButtonRef,
						type: "button",
						onClick: () => setOpen(true),
						"aria-expanded": open,
						"aria-controls": "mobile-nav",
						"aria-label": "Open navigation menu",
						className: "inline-flex size-11 items-center justify-center rounded-full border border-border text-ink transition-colors hover:bg-secondary lg:hidden",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { "aria-hidden": "true" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "sr-only",
							children: "Open menu"
						})]
					})]
				})
			]
		}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "fixed inset-0 z-50 overflow-hidden lg:hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				"aria-label": "Close menu",
				tabIndex: -1,
				onClick: () => setOpen(false),
				className: "absolute inset-0 bg-ink/40"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				id: "mobile-nav",
				ref: sheetRef,
				role: "dialog",
				"aria-modal": "true",
				"aria-label": "Site menu",
				className: "absolute inset-y-0 right-0 flex w-[86%] max-w-sm flex-col overflow-y-auto overscroll-contain bg-background px-6 pt-5 pb-8 shadow-lift motion-safe:animate-in motion-safe:slide-in-from-right motion-safe:duration-300",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wordmark, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							ref: closeRef,
							type: "button",
							onClick: () => setOpen(false),
							"aria-label": "Close navigation menu",
							className: "inline-flex size-11 items-center justify-center rounded-full border border-border text-ink transition-colors hover:bg-secondary",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { "aria-hidden": "true" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "sr-only",
								children: "Close menu"
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						"aria-label": "Mobile navigation",
						className: "mt-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mobile-header-nav flex flex-col gap-3",
							children: primaryNav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: item.to,
								onClick: () => setOpen(false),
								"data-active": "false",
								activeProps: { "data-active": "true" },
								className: "flex min-h-11 items-center font-display text-[1.375rem] font-semibold text-ink transition-colors hover:text-primary data-[active=true]:text-primary",
								children: item.label
							}) }, item.to))
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 rounded-[1.5rem] bg-surface-warm p-5 sm:mt-auto",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "smallcaps text-muted-foreground",
							children: "Get in touch"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 flex flex-col gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									variant: "whatsapp",
									className: "w-full",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: generalEnquiryLink("Mobile menu"),
										target: "_blank",
										rel: "noopener noreferrer",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { "aria-hidden": "true" }), "WhatsApp"]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									variant: "outline",
									className: "w-full",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: telHref,
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { "aria-hidden": "true" }),
											"Call ",
											clinic.phoneDisplay
										]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									variant: "ghost",
									className: "w-full",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: locations[0].directionsUrl,
										target: "_blank",
										rel: "noopener noreferrer",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { "aria-hidden": "true" }), "Directions"]
									})
								})
							]
						})]
					})
				]
			})]
		}) : null]
	});
}
var variantsConfig = {
	"fade-up": {
		hidden: {
			opacity: 0,
			y: 35
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: .7,
				ease: [
					.25,
					.1,
					.25,
					1
				]
			}
		}
	},
	"fade-in": {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				duration: .7,
				ease: "easeOut"
			}
		}
	},
	"slide-left": {
		hidden: {
			opacity: 0,
			x: -35
		},
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				duration: .7,
				ease: [
					.25,
					.1,
					.25,
					1
				]
			}
		}
	},
	"slide-right": {
		hidden: {
			opacity: 0,
			x: 35
		},
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				duration: .7,
				ease: [
					.25,
					.1,
					.25,
					1
				]
			}
		}
	},
	"scale-in": {
		hidden: {
			opacity: 0,
			scale: .95
		},
		visible: {
			opacity: 1,
			scale: 1,
			transition: {
				duration: .7,
				ease: [
					.25,
					.1,
					.25,
					1
				]
			}
		}
	},
	"image-reveal": {
		hidden: {
			opacity: 0,
			clipPath: "inset(100% 0 0 0)",
			scale: 1.08
		},
		visible: {
			opacity: 1,
			clipPath: "inset(0% 0 0 0)",
			scale: 1,
			transition: {
				duration: .9,
				ease: [
					.25,
					.1,
					.25,
					1
				]
			}
		}
	}
};
function Reveal({ children, as = "div", delay = 0, className, variant = "fade-up", staggerChildren, isStaggerParent }) {
	const shouldReduceMotion = useReducedMotion();
	const MotionTag = motion.create(as);
	if (shouldReduceMotion) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MotionTag, {
		className,
		children
	});
	const selectedVariant = variantsConfig[variant];
	if (isStaggerParent) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MotionTag, {
		className,
		initial: "hidden",
		whileInView: "visible",
		viewport: {
			once: true,
			margin: "-8% 0px"
		},
		variants: {
			hidden: {},
			visible: { transition: {
				staggerChildren: staggerChildren || .1,
				delayChildren: delay / 1e3
			} }
		},
		children
	});
	const delaySec = delay / 1e3;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MotionTag, {
		className,
		initial: "hidden",
		whileInView: "visible",
		viewport: {
			once: true,
			margin: "-8% 0px"
		},
		variants: {
			hidden: selectedVariant.hidden,
			visible: {
				...selectedVariant.visible,
				transition: {
					...selectedVariant.visible.transition,
					delay: delaySec
				}
			}
		},
		children
	});
}
function WordmarkFooter({ className, tone = "default" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: "/",
		className: cn("inline-flex flex-col leading-none", className),
		"aria-label": `${clinic.name} \u2014 home`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: "images/gallery/logo.png",
			alt: "logo",
			className: "w-50",
			style: { filter: tone === "default" ? "brightness(0) invert(1)" : "" }
		})
	});
}
function SiteFooter() {
	const year = (/* @__PURE__ */ new Date()).getFullYear();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t border-border bg-ink text-secondary/95 footer-section",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
			isStaggerParent: true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
				className: "py-14 footer-in",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						className: "grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,2fr)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WordmarkFooter, { tone: "default" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 max-w-sm text-sm leading-relaxed text-secondary/90",
								children: clinic.intro
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: telHref,
								className: "mt-5 inline-flex min-h-11 items-center text-base font-semibold text-secondary underline-offset-4 hover:underline",
								"aria-label": `Call Dent Arena on ${clinic.phoneDisplay}`,
								children: clinic.phoneDisplay
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid gap-8 sm:grid-cols-2 lg:grid-cols-4",
							children: footerNav.map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
								"aria-label": group.title,
								className: "footer-link-section",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-sm font-semibold tracking-wide text-secondary uppercase",
									children: group.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-4 space-y-1",
									children: group.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: item.to,
										className: "inline-flex min-h-10 items-center text-sm text-secondary/90 underline-offset-4 hover:text-white hover:underline transition-colors",
										children: item.label
									}) }, item.to))
								})]
							}, group.title))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 150,
						className: "mt-12 grid gap-8 border-t border-secondary/15 pt-10 sm:grid-cols-2",
						children: locations.map((location) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-base font-semibold text-secondary",
								children: location.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("address", {
								className: "mt-2 text-sm leading-relaxed not-italic",
								children: formatAddress(location).map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block",
									children: line
								}, line))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/locations/$branch",
								params: { branch: location.slug },
								className: "mt-3 inline-flex min-h-11 items-center text-sm font-medium text-accent underline-offset-4 hover:underline",
								children: ["Branch details", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "sr-only",
									children: [" — ", location.name]
								})]
							})
						] }, location.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						delay: 250,
						className: "mt-10 flex flex-col gap-3 border-t border-secondary/15 pt-6 text-xs sm:flex-row sm:items-center sm:justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
							"© ",
							year,
							" ",
							clinic.name,
							". All rights reserved."
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "max-w-xl",
							children: "Information on this website is general in nature and is not a substitute for a dental examination or personal clinical advice."
						})]
					})
				]
			})
		})
	});
}
/**
* Persistent mobile action bar. The layout adds matching bottom padding so it
* never covers page content.
*/
function MobileActionBar() {
	const items = [
		{
			label: "Call",
			href: telHref,
			icon: Phone,
			external: false
		},
		{
			label: "WhatsApp",
			href: generalEnquiryLink(),
			icon: MessageCircle,
			external: true
		},
		{
			label: "Directions",
			href: locations[0]?.directionsUrl ?? "#",
			icon: MapPin,
			external: true
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/98 backdrop-blur lg:hidden",
		style: { paddingBottom: "env(safe-area-inset-bottom)" },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
			"aria-label": "Quick contact",
			className: "grid grid-cols-3",
			children: items.map(({ label, href, icon: Icon, external }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href,
				...external ? {
					target: "_blank",
					rel: "noopener noreferrer"
				} : {},
				className: "flex min-h-14 flex-col items-center justify-center gap-1 text-xs font-medium text-ink transition-colors hover:bg-secondary",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
					"aria-hidden": "true",
					className: "size-5 text-primary"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "sr-only",
					children: label === "Call" ? ` ${clinic.name} on ${clinic.phoneDisplay}` : ` ${clinic.name}`
				})] })]
			}, label))
		})
	});
}
var useCursorStore = create((set) => ({
	variant: "default",
	text: void 0,
	setVariant: (variant, text) => set({
		variant,
		text
	})
}));
function Cursor() {
	const { variant, text, setVariant } = useCursorStore();
	const [isVisible, setIsVisible] = (0, import_react.useState)(false);
	const shouldReduceMotion = useReducedMotion();
	const mouseX = useMotionValue(0);
	const mouseY = useMotionValue(0);
	const springConfig = {
		damping: 25,
		stiffness: 300,
		mass: .5
	};
	const smoothX = useSpring(mouseX, springConfig);
	const smoothY = useSpring(mouseY, springConfig);
	(0, import_react.useEffect)(() => {
		if (!window.matchMedia("(pointer: fine)").matches || shouldReduceMotion) return;
		setIsVisible(true);
		const updateMousePosition = (e) => {
			mouseX.set(e.clientX);
			mouseY.set(e.clientY);
		};
		const handleMouseLeave = () => setIsVisible(false);
		const handleMouseEnter = () => setIsVisible(true);
		const handleMouseOver = (e) => {
			const target = e.target;
			const isLink = target.closest("a");
			const isButton = target.closest("button") || target.closest("[role=\"button\"]") || target.closest("input[type=\"submit\"]") || target.closest(".button-cursor");
			const isText = target.closest("p, h1, h2, h3, h4, h5, h6, span, li");
			if (isLink && !isButton) setVariant("link");
			else if (isButton) setVariant("button");
			else if (isText && !isLink && !isButton) setVariant("default");
			else {
				const customVariant = target.closest("[data-cursor]");
				if (customVariant) setVariant(customVariant.getAttribute("data-cursor"));
				else setVariant("default");
			}
		};
		const handleMouseDown = () => {
			setVariant("click");
		};
		const handleMouseUp = (e) => {
			handleMouseOver(e);
		};
		window.addEventListener("mousemove", updateMousePosition);
		document.addEventListener("mouseleave", handleMouseLeave);
		document.addEventListener("mouseenter", handleMouseEnter);
		document.addEventListener("mouseover", handleMouseOver);
		document.addEventListener("mousedown", handleMouseDown);
		document.addEventListener("mouseup", handleMouseUp);
		return () => {
			window.removeEventListener("mousemove", updateMousePosition);
			document.removeEventListener("mouseleave", handleMouseLeave);
			document.removeEventListener("mouseenter", handleMouseEnter);
			document.removeEventListener("mouseover", handleMouseOver);
			document.removeEventListener("mousedown", handleMouseDown);
			document.removeEventListener("mouseup", handleMouseUp);
		};
	}, [
		mouseX,
		mouseY,
		shouldReduceMotion,
		setVariant
	]);
	if (!isVisible) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		"aria-hidden": "true",
		className: "pointer-events-none fixed left-0 top-0 z-[100] flex items-center justify-center rounded-full text-xs font-medium tracking-wider text-black backdrop-blur-sm",
		style: {
			x: smoothX,
			y: smoothY
		},
		variants: {
			default: {
				height: 32,
				width: 32,
				x: "-50%",
				y: "-50%",
				backgroundColor: "transparent",
				border: "1px solid rgba(0, 0, 0, 0.2)",
				mixBlendMode: "normal"
			},
			link: {
				height: 48,
				width: 48,
				x: "-50%",
				y: "-50%",
				backgroundColor: "rgba(0, 0, 0, 0.05)",
				border: "1px solid rgba(0, 0, 0, 0.1)",
				mixBlendMode: "normal"
			},
			button: {
				height: 56,
				width: 56,
				x: "-50%",
				y: "-50%",
				backgroundColor: "rgba(0, 0, 0, 0.1)",
				border: "1px solid rgba(0, 0, 0, 0.15)",
				mixBlendMode: "normal"
			},
			image: {
				height: 80,
				width: 80,
				x: "-50%",
				y: "-50%",
				backgroundColor: "rgba(255, 255, 255, 0.9)",
				border: "1px solid rgba(0, 0, 0, 0.1)",
				mixBlendMode: "normal"
			},
			text: {
				height: 32,
				width: 32,
				x: "-50%",
				y: "-50%",
				backgroundColor: "transparent",
				border: "1px solid rgba(0, 0, 0, 0.2)",
				mixBlendMode: "normal"
			},
			click: {
				height: 24,
				width: 24,
				x: "-50%",
				y: "-50%",
				backgroundColor: "rgba(0, 0, 0, 0.2)",
				border: "1px solid rgba(0, 0, 0, 0.2)",
				mixBlendMode: "normal"
			}
		},
		animate: variant,
		transition: {
			type: "spring",
			stiffness: 400,
			damping: 28
		},
		children: variant === "image" && text && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: text })
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		"aria-hidden": "true",
		className: "pointer-events-none fixed left-4 top-4  z-[100] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary",
		style: {
			x: mouseX,
			y: mouseY
		},
		variants: {
			default: {
				opacity: 1,
				scale: 1
			},
			link: {
				opacity: 1,
				scale: .5
			},
			button: {
				opacity: 0,
				scale: 0
			},
			image: {
				opacity: 0,
				scale: 0
			},
			text: {
				opacity: 0,
				scale: 0
			},
			click: {
				opacity: 1,
				scale: .8
			}
		},
		animate: variant,
		transition: { duration: .15 }
	})] });
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-[60vh] items-center justify-center px-5 py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-3 text-3xl sm:text-4xl",
					children: "We couldn’t find that page"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-sm leading-relaxed",
					children: "The page may have moved. You can head back to the homepage, or browse our treatments."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-7 flex flex-wrap justify-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex min-h-11 items-center justify-center rounded-xl bg-primary px-5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/treatments",
						className: "inline-flex min-h-11 items-center justify-center rounded-xl border border-input px-5 text-sm font-medium text-ink transition-colors hover:bg-accent",
						children: "Browse treatments"
					})]
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-[60vh] items-center justify-center px-5 py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-2xl sm:text-3xl",
					children: "This page didn’t load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-4 text-sm leading-relaxed",
					children: [
						"Something went wrong on our end. Please try again, or call us on ",
						clinic.phoneDisplay,
						"."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-7 flex flex-wrap justify-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex min-h-11 items-center justify-center rounded-xl bg-primary px-5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex min-h-11 items-center justify-center rounded-xl border border-input px-5 text-sm font-medium text-ink transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$19 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1, viewport-fit=cover"
			},
			{ title: `${clinic.name} — Dental Clinic in Surat` },
			{
				name: "description",
				content: `${clinic.name} is a dental clinic with branches in Bhatar and Vesu, Surat.`
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:site_name",
				content: clinic.name
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "theme-color",
				content: "#0F5D62"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Manrope:wght@400;500;600;700&display=swap"
			},
			{
				rel: "icon",
				href: "/favicon.png",
				type: "image/png"
			}
		],
		scripts: [jsonLd(organizationSchema())]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en-IN",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$19.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#main",
				className: "sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-primary-foreground focus:outline-2 focus:outline-offset-2 focus:outline-primary-foreground",
				children: "Skip to main content"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cursor, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex min-h-dvh flex-col main-section",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
						id: "main",
						tabIndex: -1,
						className: "flex-1 pb-0 pb-sm-20 outline-none md:pb-0",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileActionBar, {})
		]
	});
}
/**
* FAQ categories. Answers are general and educational only — nothing here is a
* diagnosis, a promise of a result, an exact duration, or a price. Anything
* operational (fees, payment plans, emergency cover, timings, branch-specific
* availability) is deliberately left to be confirmed by the clinic.
*/
var faqCategories = [
	{
		id: "appointments",
		label: "Appointments",
		description: "Requesting a visit and choosing a branch"
	},
	{
		id: "visits",
		label: "Your visit",
		description: "First appointments, children and nervous patients"
	},
	{
		id: "emergencies",
		label: "Urgent problems",
		description: "Pain, swelling, knocked-out teeth"
	},
	{
		id: "preventive",
		label: "Check-ups & cleaning",
		description: "Routine care and hygiene"
	},
	{
		id: "treatments",
		label: "Treatments",
		description: "Root canals, implants, braces and whitening"
	},
	{
		id: "aftercare",
		label: "Recovery & aftercare",
		description: "What to expect after treatment"
	},
	{
		id: "payments",
		label: "Fees & practicalities",
		description: "Consultations, costs and records"
	}
];
/**
* Every FAQ rendered on /faqs. The FAQPage JSON-LD is generated from exactly
* this array so schema and visible content always match.
*/
var generalFaqs = [
	{
		topic: "appointments",
		question: "How do I book an appointment at Dent Arena?",
		answer: "You can send an appointment request on WhatsApp using the form on this site, or call the clinic. A request is not a confirmed booking — the team replies to agree a slot that works for both of you."
	},
	{
		topic: "appointments",
		question: "Which branch should I choose?",
		answer: "Choose whichever of the two Surat practices is easier for you to reach: Bhatar, on Bhatar Road in Athwa, or Vesu, on VIP Road in Bharthana. Mention your preferred branch in your request and the team will confirm availability."
	},
	{
		topic: "appointments",
		question: "Is every treatment available at both branches?",
		answer: "Branch-by-branch treatment availability is confirmed by the clinic rather than assumed here. Tell the team what you need when you send your request and they will let you know which branch to attend."
	},
	{
		topic: "appointments",
		question: "What information should I include in my request?",
		answer: "Your name, a mobile number you can be reached on, your preferred branch, a short description of the problem or the treatment you are asking about, and the days or times that generally suit you."
	},
	{
		topic: "appointments",
		question: "Can I change or cancel a requested appointment?",
		answer: "Yes. Reply on the same WhatsApp conversation or call the clinic as early as you can, so the slot can be offered to someone else."
	},
	{
		topic: "visits",
		question: "What happens at a first visit?",
		answer: "A first visit is usually an examination and a conversation: your medical and dental history, an examination of the teeth, gums and soft tissues, X-rays if they are clinically indicated, and a discussion of findings and options before anything is booked."
	},
	{
		topic: "visits",
		question: "What should I bring with me?",
		answer: "Bring a list of any medicines you take, details of medical conditions or allergies, and any previous dental X-rays, reports or treatment records you have."
	},
	{
		topic: "visits",
		question: "Can I bring my child along?",
		answer: "Yes. Early familiarisation visits help children get used to the clinic before any treatment is needed. Let the team know when you request an appointment so enough time can be set aside."
	},
	{
		topic: "visits",
		question: "At what age should a child first see a dentist?",
		answer: "General guidance is that a first dental visit happens early — around the time the first teeth appear or by the first birthday — so habits, diet and cleaning can be discussed before problems start. Your dentist will advise a recall interval that suits your child."
	},
	{
		topic: "visits",
		question: "I am nervous about dental treatment. What can I do?",
		answer: "Tell the team when you book and again when you arrive. Appointments can be paced differently, and explaining each step before it happens helps many people feel more in control. Ask about the options for managing discomfort during your examination."
	},
	{
		topic: "emergencies",
		question: "What should I do in a dental emergency?",
		answer: "Contact the clinic as soon as you can so the situation can be assessed. If you have facial swelling with fever, or any difficulty breathing or swallowing, treat it as a medical emergency and seek urgent hospital care immediately."
	},
	{
		topic: "emergencies",
		question: "A tooth has been knocked out — what now?",
		answer: "Handle the tooth by the crown, not the root. If it is an adult tooth, it may be possible to reposition it in the socket and hold it in place; otherwise keep it in milk or saliva and seek dental care urgently. Time matters a great deal. Do not attempt to reimplant a baby tooth."
	},
	{
		topic: "emergencies",
		question: "Does Dent Arena offer out-of-hours emergency care?",
		answer: "Emergency availability and out-of-hours arrangements are confirmed directly by the clinic. Please call or message to ask about the current arrangement rather than relying on this page."
	},
	{
		topic: "preventive",
		question: "How often should I have a check-up?",
		answer: "Recall intervals are individual. They depend on your gum health, decay risk, habits and medical history, so your dentist will agree an interval with you rather than applying a fixed rule."
	},
	{
		topic: "preventive",
		question: "What does professional teeth cleaning involve?",
		answer: "Scaling removes hardened deposits that brushing cannot, and polishing smooths the tooth surfaces. It is a preventive procedure aimed at gum health; whether you need it, and how often, depends on examination findings."
	},
	{
		topic: "preventive",
		question: "Will cleaning make my teeth sensitive or loose?",
		answer: "Short-lived sensitivity after cleaning is common and usually settles. Cleaning does not loosen healthy teeth; where teeth already feel loose, that is generally a sign of existing gum or bone changes that need assessment."
	},
	{
		topic: "preventive",
		question: "Do I still need to see a dentist if nothing hurts?",
		answer: "Yes. Early decay and gum disease are often painless, and X-rays and examination can pick up changes long before symptoms appear."
	},
	{
		topic: "treatments",
		question: "What is a root canal treatment for?",
		answer: "Root canal treatment is used when the pulp inside a tooth is inflamed or infected. The pulp space is cleaned, shaped and sealed so the tooth can be kept rather than removed. Whether it is suitable in your case depends on examination and X-rays."
	},
	{
		topic: "treatments",
		question: "Is treatment painful?",
		answer: "Local anaesthesia is normally used so that treatment itself is comfortable, and discomfort afterwards is usually manageable. Experiences differ from person to person, so we do not describe any procedure as completely painless."
	},
	{
		topic: "treatments",
		question: "Am I a candidate for dental implants?",
		answer: "Implant suitability depends on bone volume and quality, gum health, general health, habits such as smoking, and the position of the gap. This can only be judged after a clinical examination and appropriate imaging."
	},
	{
		topic: "treatments",
		question: "Braces or clear aligners — which is better?",
		answer: "Both move teeth, and each suits different situations. Fixed braces handle a wider range of complex movements; aligners are removable and less visible but depend heavily on wearing them as instructed. An orthodontic assessment is needed before recommending either."
	},
	{
		topic: "treatments",
		question: "Does teeth whitening work for everyone?",
		answer: "Whitening lightens natural tooth structure, and results vary with the cause of the discolouration. It does not change the colour of fillings, crowns or veneers, and some stains respond poorly. A dentist should check the cause of discolouration first."
	},
	{
		topic: "treatments",
		question: "How long will my treatment take?",
		answer: "Appointment counts and overall timelines depend on the diagnosis, the number of teeth involved and how your tissues respond, so exact durations are not quoted online. Your dentist will outline an expected plan after examining you."
	},
	{
		topic: "aftercare",
		question: "What can I expect after treatment?",
		answer: "It depends on the procedure. Mild soreness, sensitivity to hot and cold, or tenderness around the gums for a few days is common after many treatments. You will be given aftercare instructions specific to what was done."
	},
	{
		topic: "aftercare",
		question: "When should I contact the clinic after a procedure?",
		answer: "Get in touch if pain increases rather than settles, if swelling develops or spreads, if bleeding does not stop with gentle pressure, if a temporary restoration comes away, or if your bite feels uneven."
	},
	{
		topic: "aftercare",
		question: "How do I look after my teeth between visits?",
		answer: "Brush twice daily with a fluoride toothpaste, clean between the teeth daily, limit how often you have sugary food and drink, and avoid tobacco. Your dentist may add advice specific to your risk profile."
	},
	{
		topic: "payments",
		question: "What does a consultation cost?",
		answer: "Fees, payment methods and any instalment arrangements are confirmed by the clinic and are not published here, because they depend on what is needed. Ask when you request an appointment and the team will explain the current position."
	},
	{
		topic: "payments",
		question: "Will I be given an estimate before treatment starts?",
		answer: "Ask for one. Good practice is for the dentist to explain the findings, the options and what each option involves before you decide, so please raise any questions about scope or cost at that point."
	},
	{
		topic: "payments",
		question: "Is my information stored when I use the WhatsApp form?",
		answer: "No. The form on this website runs entirely in your browser. It only prepares a message and opens WhatsApp — nothing is saved on this site or sent to a server by it."
	},
	{
		topic: "payments",
		question: "Can I get a copy of my records or X-rays?",
		answer: "Ask the clinic directly. Records are held by the practice, and the team can explain what can be shared and how."
	}
];
var $$splitComponentImporter$14 = () => import("./routes-BtuDmVZt.mjs");
var Route$18 = createFileRoute("/")({
	head: () => ({
		...pageMeta({
			title: `${clinic.name} — Dental Clinic in Bhatar & Vesu, Surat`,
			description: "Dent Arena is a dental clinic with two branches in Surat — Bhatar and Vesu. Check-ups, fillings, root canals, implants, braces and aligners. Request an appointment on WhatsApp.",
			path: "/"
		}),
		scripts: [...locations.map((l) => locationSchema(l.id)).filter((s) => Boolean(s)).map((s) => jsonLd(s)), jsonLd(faqSchema(generalFaqs.slice(0, 6)))]
	}),
	component: lazyRouteComponent($$splitComponentImporter$14, "component")
});
var crumbs$9 = [{
	name: "Home",
	path: "/"
}, {
	name: "Request an appointment",
	path: "/book-appointment"
}];
var $$splitComponentImporter$13 = () => import("./book-appointment-BN0AU-93.mjs");
var Route$17 = createFileRoute("/book-appointment")({
	head: () => ({
		...pageMeta({
			title: "Request an Appointment",
			description: "Send an appointment request to Dent Arena in Surat on WhatsApp. Choose your branch, preferred day and treatment — the clinic replies to confirm.",
			path: "/book-appointment"
		}),
		scripts: [jsonLd(breadcrumbSchema(crumbs$9))]
	}),
	component: lazyRouteComponent($$splitComponentImporter$13, "component")
});
var crumbs$8 = [{
	name: "Home",
	path: "/"
}, {
	name: "Contact",
	path: "/contact"
}];
var $$splitComponentImporter$12 = () => import("./contact-bKxHRc32.mjs");
var Route$16 = createFileRoute("/contact")({
	head: () => ({
		...pageMeta({
			title: "Contact Dent Arena in Surat",
			description: "Phone, WhatsApp and directions for Dent Arena's Bhatar and Vesu dental clinics in Surat. Send an appointment request or call the front desk.",
			path: "/contact"
		}),
		scripts: [jsonLd(breadcrumbSchema(crumbs$8))]
	}),
	component: lazyRouteComponent($$splitComponentImporter$12, "component")
});
var crumbs$7 = [{
	name: "Home",
	path: "/"
}, {
	name: "FAQs",
	path: "/faqs"
}];
var $$splitComponentImporter$11 = () => import("./faqs-DlI1hz_N.mjs");
var Route$15 = createFileRoute("/faqs")({
	head: () => ({
		...pageMeta({
			title: "Dental FAQs",
			description: "Answers to common questions about appointments, check-ups, root canals, implants, braces, whitening, aftercare and visiting Dent Arena in Surat.",
			path: "/faqs"
		}),
		scripts: [jsonLd(breadcrumbSchema(crumbs$7)), jsonLd(faqSchema(generalFaqs))]
	}),
	component: lazyRouteComponent($$splitComponentImporter$11, "component")
});
var crumbs$6 = [{
	name: "Home",
	path: "/"
}, {
	name: "Clinic gallery",
	path: "/gallery"
}];
var $$splitComponentImporter$10 = () => import("./gallery-D99YoWmp.mjs");
var Route$14 = createFileRoute("/gallery")({
	head: () => ({
		...pageMeta({
			title: "Clinic Gallery",
			description: "Photographs of Dent Arena in Surat — the entrance, reception, consultation room and treatment room. Illustrative images are clearly labelled as such.",
			path: "/gallery"
		}),
		scripts: [jsonLd(breadcrumbSchema(crumbs$6))]
	}),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
/**
* Returns a confirmed value, or a `{ pending: reason }` marker so MCP clients
* never present unverified clinic data as fact.
*/
function value(v) {
	if (v === void 0) return { pending: "Not supplied by the clinic yet" };
	if (isPlaceholder(v)) return { pending: v.label };
	return v;
}
function json(data) {
	return {
		content: [{
			type: "text",
			text: JSON.stringify(data, null, 2)
		}],
		structuredContent: data
	};
}
function notFound$1(message) {
	return {
		content: [{
			type: "text",
			text: message
		}],
		isError: true
	};
}
var get_clinic_info_default = defineTool({
	name: "get_clinic_info",
	title: "Get clinic info",
	description: "Public contact details for Dent Arena in Surat: name, tagline, phone, WhatsApp number, social links and a summary of both branches.",
	inputSchema: {},
	annotations: {
		readOnlyHint: true,
		idempotentHint: true,
		openWorldHint: false
	},
	handler: () => json({
		name: clinic.name,
		tagline: clinic.tagline,
		intro: clinic.intro,
		city: clinic.city,
		region: clinic.region,
		country: clinic.country,
		phone: clinic.phoneDisplay,
		whatsapp: `https://wa.me/${clinic.whatsappNumber}`,
		email: value(clinic.email),
		legalName: value(clinic.legalName),
		social: {
			instagram: value(clinic.social.instagram),
			facebook: value(clinic.social.facebook),
			googleBusiness: value(clinic.social.googleBusiness)
		},
		branches: locations.map((l) => ({
			id: l.id,
			name: l.name,
			address: formatAddress(l),
			directionsUrl: l.directionsUrl
		}))
	})
});
var list_locations_default = defineTool({
	name: "list_locations",
	title: "List branches",
	description: "Both Dent Arena branches (Bhatar and Vesu) with address, description, directions link, and which details are still awaiting confirmation from the clinic.",
	inputSchema: {},
	annotations: {
		readOnlyHint: true,
		idempotentHint: true,
		openWorldHint: false
	},
	handler: () => json({ locations: locations.map((l) => ({
		id: l.id,
		name: l.name,
		address: formatAddress(l),
		addressLines: l.addressLines,
		locality: l.locality,
		region: l.region,
		postalCode: value(l.postalCode),
		phone: l.phone,
		description: l.description,
		landmark: value(l.landmark),
		parking: value(l.parking),
		accessibility: value(l.accessibility),
		openingHours: value(l.hours),
		directionsUrl: l.directionsUrl,
		doctorSlugs: l.doctorSlugs,
		pageUrl: `/locations/${l.slug}`
	})) })
});
var list_treatments_default = defineTool({
	name: "list_treatments",
	title: "List treatments",
	description: "List the dental treatments Dent Arena publishes, optionally filtered by category, branch or a free-text query. Returns slugs for use with get_treatment.",
	inputSchema: {
		category: _enum([
			"restorative",
			"cosmetic",
			"orthodontics",
			"preventive",
			"surgical",
			"specialist"
		]).optional().describe("Filter by treatment category."),
		branch: _enum(["bhatar", "vesu"]).optional().describe("Only treatments available at this branch."),
		query: string().optional().describe("Free-text match against title and summary.")
	},
	annotations: {
		readOnlyHint: true,
		idempotentHint: true,
		openWorldHint: false
	},
	handler: ({ category, branch, query }) => {
		const q = query?.trim().toLowerCase();
		const items = publishedTreatments.filter((t) => category ? t.category === category : true).filter((t) => branch ? t.availableAt.includes(branch) : true).filter((t) => q ? `${t.title} ${t.summary}`.toLowerCase().includes(q) : true).map((t) => ({
			slug: t.slug,
			title: t.title,
			category: t.category,
			categoryLabel: categoryLabels[t.category],
			summary: t.summary,
			availableAt: t.availableAt,
			pageUrl: `/treatments/${t.slug}`
		}));
		return json({
			count: items.length,
			treatments: items
		});
	}
});
var get_treatment_default = defineTool({
	name: "get_treatment",
	title: "Get treatment details",
	description: "Full educational detail for one treatment: what it is, who needs it, signs, steps, recovery, benefits, limitations, risks, aftercare, FAQs and related treatments. No prices or outcome guarantees exist in this data.",
	inputSchema: { slug: string().min(1).describe("Treatment slug, e.g. root-canal-treatment.") },
	annotations: {
		readOnlyHint: true,
		idempotentHint: true,
		openWorldHint: false
	},
	handler: ({ slug }) => {
		const t = getTreatment(slug);
		if (!t) return notFound$1(`No published treatment with slug "${slug}". Use list_treatments for valid slugs.`);
		return json({
			slug: t.slug,
			title: t.title,
			category: t.category,
			categoryLabel: categoryLabels[t.category],
			summary: t.summary,
			whatItIs: t.whatItIs,
			whoNeedsIt: t.whoNeedsIt,
			signs: t.signs,
			howItWorks: t.howItWorks,
			visitsAndRecovery: t.visitsAndRecovery,
			benefits: t.benefits,
			limitations: t.limitations,
			risks: t.risks,
			aftercare: t.aftercare,
			whenToContact: t.whenToContact,
			faqs: t.faqs,
			relatedSlugs: t.relatedSlugs,
			availableAt: t.availableAt,
			dentists: getDoctorsForTreatment(t).map((d) => ({
				slug: d.slug,
				name: d.name
			})),
			reviewedBy: value(t.reviewedBy),
			lastReviewed: value(t.lastReviewed),
			pageUrl: `/treatments/${t.slug}`
		});
	}
});
var list_doctors_default = defineTool({
	name: "list_doctors",
	title: "List dentists",
	description: "Dentists published on the Dent Arena site. Qualifications, registration numbers and experience are returned only when confirmed by the clinic; otherwise a pending marker is returned. Pass a slug for one dentist's full profile.",
	inputSchema: {
		slug: string().optional().describe("Optional doctor slug, e.g. dr-mayank-shah."),
		branch: _enum(["bhatar", "vesu"]).optional().describe("Only dentists seeing patients at this branch.")
	},
	annotations: {
		readOnlyHint: true,
		idempotentHint: true,
		openWorldHint: false
	},
	handler: ({ slug, branch }) => {
		const shape = (d) => ({
			slug: d.slug,
			name: d.name,
			role: value(d.role),
			qualifications: value(d.qualifications),
			registrationNumber: value(d.registrationNumber),
			experience: value(d.experience),
			focusAreas: value(d.focusAreas),
			languages: value(d.languages),
			bio: value(d.bio),
			branches: d.locationIds,
			treatments: getTreatmentsForDoctor(d).map((t) => ({
				slug: t.slug,
				title: t.title
			})),
			pageUrl: `/doctors/${d.slug}`
		});
		if (slug) {
			const doctor = getDoctor(slug);
			if (!doctor) return notFound$1(`No published dentist with slug "${slug}".`);
			return json(shape(doctor));
		}
		const items = publishedDoctors.filter((d) => branch ? d.locationIds.includes(branch) : true).map(shape);
		return json({
			count: items.length,
			doctors: items
		});
	}
});
var mcp_default = defineMcp({
	name: "dent-arena-premier-site",
	title: "Dent Arena Premier Site",
	version: "0.1.0",
	instructions: "Read-only tools for Dent Arena, a dental clinic with two branches in Surat, Gujarat (Bhatar and Vesu). Use get_clinic_info for contact details, list_locations for branch information, list_treatments/get_treatment for the published treatment library, and list_doctors for dentist profiles. Fields the clinic has not confirmed are returned as { pending: reason } and must never be presented as fact. Nothing here is medical advice, and no prices or appointment bookings are available.",
	tools: [
		get_clinic_info_default,
		list_locations_default,
		list_treatments_default,
		get_treatment_default,
		list_doctors_default
	]
});
var Route$13 = createFileRoute("/mcp")({ server: { handlers: { ANY: createTanStackMcpHandler(mcp_default, {
	resourcePath: "/mcp",
	metadataPath: "/.well-known/oauth-protected-resource",
	trustForwardedHost: true
}) } } });
var crumbs$5 = [{
	name: "Home",
	path: "/"
}, {
	name: "Smile gallery",
	path: "/smile-gallery"
}];
var $$splitComponentImporter$9 = () => import("./smile-gallery-trYTWZdC.mjs");
var Route$12 = createFileRoute("/smile-gallery")({
	head: () => ({
		...pageMeta({
			title: "Smile Gallery",
			description: "Before-and-after dental cases from Dent Arena in Surat are published only with documented patient consent and clinical approval. No stock or illustrative results are shown.",
			path: "/smile-gallery"
		}),
		scripts: [jsonLd(breadcrumbSchema(crumbs$5))]
	}),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var crumbs$4 = [{
	name: "Home",
	path: "/"
}, {
	name: "Patient testimonials",
	path: "/testimonials"
}];
var $$splitComponentImporter$8 = () => import("./testimonials-DeUcdzpF.mjs");
var Route$11 = createFileRoute("/testimonials")({
	head: () => ({
		...pageMeta({
			title: "Patient Testimonials",
			description: "Verified patient experiences at Dent Arena in Surat. We publish only genuine, approved reviews — no sample testimonials and no aggregate ratings until verified reviews exist.",
			path: "/testimonials"
		}),
		scripts: [jsonLd(breadcrumbSchema(crumbs$4))]
	}),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var Route$10 = createFileRoute("/.mcp/list-tools")({ server: { handlers: { ANY: createTanStackListToolsHandler(mcp_default, {
	resourcePath: "/mcp",
	metadataPath: "/.well-known/oauth-protected-resource",
	trustForwardedHost: true
}) } } });
var Route$9 = createFileRoute("/.well-known/oauth-protected-resource")({ server: { handlers: { ANY: createTanStackOAuthProtectedResourceMetadataHandler(mcp_default, {
	resourcePath: "/mcp",
	metadataPath: "/.well-known/oauth-protected-resource",
	trustForwardedHost: true
}) } } });
var crumbs$3 = [{
	name: "Home",
	path: "/"
}, {
	name: "Dental health articles",
	path: "/articles"
}];
var $$splitComponentImporter$7 = () => import("./articles.index-Dsk2D-ms.mjs");
var Route$8 = createFileRoute("/articles/")({
	head: () => ({
		...pageMeta({
			title: "Dental Health Articles",
			description: "Practical dental health guidance from Dent Arena in Surat — brushing, gum care, children's teeth, sensitivity and what to do in a dental emergency.",
			path: "/articles"
		}),
		scripts: [jsonLd(breadcrumbSchema(crumbs$3))]
	}),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./articles._slug-CksjYY_p.mjs");
var Route$7 = createFileRoute("/articles/$slug")({
	loader: ({ params }) => {
		const article = getArticle(params.slug);
		if (!article || !article.published) throw notFound();
		return { article };
	},
	head: ({ params, loaderData }) => {
		if (!loaderData) return { meta: [{ title: "Article not found | Dent Arena" }, {
			name: "robots",
			content: "noindex"
		}] };
		const { article } = loaderData;
		const path = `/articles/${params.slug}`;
		const datePublished = confirmed(article.datePublished);
		return {
			...pageMeta({
				title: article.title,
				description: article.description,
				path,
				type: "article"
			}),
			scripts: [jsonLd(breadcrumbSchema([
				{
					name: "Home",
					path: "/"
				},
				{
					name: "Articles",
					path: "/articles"
				},
				{
					name: article.title,
					path
				}
			])), jsonLd(articleSchema({
				headline: article.title,
				description: article.description,
				path,
				...datePublished ? { datePublished } : {}
			}))]
		};
	},
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var crumbs$2 = [{
	name: "Home",
	path: "/"
}, {
	name: "Our dentists",
	path: "/doctors"
}];
var $$splitComponentImporter$5 = () => import("./doctors.index-24c4E4i8.mjs");
var Route$6 = createFileRoute("/doctors/")({
	head: () => ({
		...pageMeta({
			title: "Our Dentists in Surat",
			description: "Meet the dental team at Dent Arena, with branches in Bhatar and Vesu, Surat. Qualifications and registration details are published once confirmed by each clinician.",
			path: "/doctors"
		}),
		scripts: [jsonLd(breadcrumbSchema(crumbs$2))]
	}),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./doctors._slug-BfpIftwy.mjs");
var Route$5 = createFileRoute("/doctors/$slug")({
	loader: ({ params }) => {
		const doctor = getDoctor(params.slug);
		if (!doctor || !doctor.published) throw notFound();
		return { doctor };
	},
	head: ({ params, loaderData }) => {
		if (!loaderData) return { meta: [{ title: "Dentist not found | Dent Arena" }, {
			name: "robots",
			content: "noindex"
		}] };
		const { doctor } = loaderData;
		const path = `/doctors/${params.slug}`;
		const role = confirmed(doctor.role);
		return {
			...pageMeta({
				title: doctor.name,
				description: `${doctor.name} sees patients at Dent Arena in Surat. Read about their focus areas and how to request an appointment.`,
				path,
				type: "profile"
			}),
			scripts: [jsonLd(breadcrumbSchema([
				{
					name: "Home",
					path: "/"
				},
				{
					name: "Our dentists",
					path: "/doctors"
				},
				{
					name: doctor.name,
					path
				}
			])), jsonLd(personSchema({
				name: doctor.name,
				path,
				...role ? { jobTitle: role } : {}
			}))]
		};
	},
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var crumbs$1 = [{
	name: "Home",
	path: "/"
}, {
	name: "Locations",
	path: "/locations"
}];
var $$splitComponentImporter$3 = () => import("./locations.index-DiaRZS51.mjs");
var Route$4 = createFileRoute("/locations/")({
	head: () => ({
		...pageMeta({
			title: "Our Clinics in Bhatar and Vesu, Surat",
			description: "Find Dent Arena's two dental clinics in Surat — Bhatar and Vesu. Addresses, directions and contact details for each branch.",
			path: "/locations"
		}),
		scripts: [jsonLd(breadcrumbSchema(crumbs$1))]
	}),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./locations._branch-CQD4yiD8.mjs");
var Route$3 = createFileRoute("/locations/$branch")({
	loader: ({ params }) => {
		const location = locations.find((l) => l.slug === params.branch);
		if (!location) throw notFound();
		return { location };
	},
	head: ({ params, loaderData }) => {
		if (!loaderData) return { meta: [{ title: "Branch not found | Dent Arena" }, {
			name: "robots",
			content: "noindex"
		}] };
		const { location } = loaderData;
		const path = `/locations/${params.branch}`;
		const schema = locationSchema(location.id);
		return {
			...pageMeta({
				title: `${location.name} — Dental Clinic in ${location.locality}`,
				description: location.description,
				path
			}),
			scripts: [jsonLd(breadcrumbSchema([
				{
					name: "Home",
					path: "/"
				},
				{
					name: "Locations",
					path: "/locations"
				},
				{
					name: location.shortName,
					path
				}
			])), ...schema ? [jsonLd(schema)] : []]
		};
	},
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var crumbs = [{
	name: "Home",
	path: "/"
}, {
	name: "Treatments",
	path: "/treatments"
}];
var $$splitComponentImporter$1 = () => import("./treatments.index-Cy1XcCRb.mjs");
var Route$2 = createFileRoute("/treatments/")({
	head: () => ({
		...pageMeta({
			title: "Dental Treatments in Surat",
			description: "Explore the dental treatments offered at Dent Arena in Bhatar and Vesu, Surat — from check-ups and fillings to implants, braces, aligners and root canal treatment.",
			path: "/treatments"
		}),
		scripts: [jsonLd(breadcrumbSchema(crumbs))]
	}),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./treatments._slug-ChieN15Z.mjs");
var Route$1 = createFileRoute("/treatments/$slug")({
	loader: ({ params }) => {
		const treatment = getTreatment(params.slug);
		if (!treatment) throw notFound();
		return { treatment };
	},
	head: ({ params, loaderData }) => {
		if (!loaderData) return { meta: [{ title: "Treatment not found | Dent Arena" }, {
			name: "robots",
			content: "noindex"
		}] };
		const { treatment } = loaderData;
		const path = `/treatments/${params.slug}`;
		return {
			...pageMeta({
				title: `${treatment.title} in Surat`,
				description: treatment.metaDescription,
				path
			}),
			scripts: [jsonLd(breadcrumbSchema([
				{
					name: "Home",
					path: "/"
				},
				{
					name: "Treatments",
					path: "/treatments"
				},
				{
					name: treatment.title,
					path
				}
			])), jsonLd(faqSchema(treatment.faqs))]
		};
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var Route = createFileRoute("/.mcp/invoke-tool/$tool")({ server: { handlers: { ANY: createTanStackInvokeToolHandler(mcp_default, {
	resourcePath: "/mcp",
	metadataPath: "/.well-known/oauth-protected-resource",
	trustForwardedHost: true
}) } } });
var IndexRoute = Route$18.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$19
});
var BookAppointmentRoute = Route$17.update({
	id: "/book-appointment",
	path: "/book-appointment",
	getParentRoute: () => Route$19
});
var ContactRoute = Route$16.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$19
});
var FaqsRoute = Route$15.update({
	id: "/faqs",
	path: "/faqs",
	getParentRoute: () => Route$19
});
var GalleryRoute = Route$14.update({
	id: "/gallery",
	path: "/gallery",
	getParentRoute: () => Route$19
});
var McpRoute = Route$13.update({
	id: "/mcp",
	path: "/mcp",
	getParentRoute: () => Route$19
});
var SmileGalleryRoute = Route$12.update({
	id: "/smile-gallery",
	path: "/smile-gallery",
	getParentRoute: () => Route$19
});
var TestimonialsRoute = Route$11.update({
	id: "/testimonials",
	path: "/testimonials",
	getParentRoute: () => Route$19
});
var Char91DotmcpChar93ListToolsRoute = Route$10.update({
	id: "/.mcp/list-tools",
	path: "/.mcp/list-tools",
	getParentRoute: () => Route$19
});
var Char91DotwellKnownChar93OauthProtectedResourceRoute = Route$9.update({
	id: "/.well-known/oauth-protected-resource",
	path: "/.well-known/oauth-protected-resource",
	getParentRoute: () => Route$19
});
var ArticlesIndexRoute = Route$8.update({
	id: "/articles/",
	path: "/articles/",
	getParentRoute: () => Route$19
});
var ArticlesSlugRoute = Route$7.update({
	id: "/articles/$slug",
	path: "/articles/$slug",
	getParentRoute: () => Route$19
});
var DoctorsIndexRoute = Route$6.update({
	id: "/doctors/",
	path: "/doctors/",
	getParentRoute: () => Route$19
});
var DoctorsSlugRoute = Route$5.update({
	id: "/doctors/$slug",
	path: "/doctors/$slug",
	getParentRoute: () => Route$19
});
var LocationsIndexRoute = Route$4.update({
	id: "/locations/",
	path: "/locations/",
	getParentRoute: () => Route$19
});
var LocationsBranchRoute = Route$3.update({
	id: "/locations/$branch",
	path: "/locations/$branch",
	getParentRoute: () => Route$19
});
var TreatmentsIndexRoute = Route$2.update({
	id: "/treatments/",
	path: "/treatments/",
	getParentRoute: () => Route$19
});
var rootRouteChildren = {
	IndexRoute,
	BookAppointmentRoute,
	ContactRoute,
	FaqsRoute,
	GalleryRoute,
	McpRoute,
	SmileGalleryRoute,
	TestimonialsRoute,
	Char91DotmcpChar93ListToolsRoute,
	Char91DotwellKnownChar93OauthProtectedResourceRoute,
	ArticlesSlugRoute,
	DoctorsSlugRoute,
	LocationsBranchRoute,
	TreatmentsSlugRoute: Route$1.update({
		id: "/treatments/$slug",
		path: "/treatments/$slug",
		getParentRoute: () => Route$19
	}),
	ArticlesIndexRoute,
	DoctorsIndexRoute,
	LocationsIndexRoute,
	TreatmentsIndexRoute,
	Char91DotmcpChar93InvokeToolToolRoute: Route.update({
		id: "/.mcp/invoke-tool/$tool",
		path: "/.mcp/invoke-tool/$tool",
		getParentRoute: () => Route$19
	})
};
var routeTree = Route$19._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { clinic as A, Section as B, publishedArticles as C, formatAddress as D, publishedDoctors as E, getTreatmentsForDoctor as F, publishedTreatments as I, confirmed as L, categoryLabels as M, featuredTreatments as N, getLocation as O, getTreatments as P, isPlaceholder as R, Button as S, getDoctorsForTreatment as T, cn as V, generalFaqs as _, crumbs$1 as a, appointmentLink as b, Route$7 as c, crumbs$5 as d, crumbs$6 as f, faqCategories as g, crumbs$9 as h, Route$3 as i, telHref as j, locations as k, crumbs$3 as l, crumbs$8 as m, Route$1 as n, Route$5 as o, crumbs$7 as p, crumbs as r, crumbs$2 as s, router_exports as t, crumbs$4 as u, useCursorStore as v, getDoctor as w, generalEnquiryLink as x, Reveal as y, Container as z };
