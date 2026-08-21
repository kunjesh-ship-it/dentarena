import { confirmed, placeholder, type Doctor, type Treatment } from "./types";

const reviewedBy = placeholder("Name and qualifications of the reviewing dentist");
const lastReviewed = placeholder("Date this page was last medically reviewed");
const bothBranches: Treatment["availableAt"] = ["bhatar", "vesu"];

/**
 * Treatment library.
 *
 * Set `published: false` for any treatment the clinic does not offer \u2014 it is
 * then removed from navigation, listings, related links and the sitemap.
 * Content here is general dental education and deliberately avoids promises
 * about outcomes, timelines or prices.
 */
export const treatments: Treatment[] = [
  {
    slug: "root-canal-treatment",
    published: true,
    title: "Root Canal Treatment",
    category: "restorative",
    featured: true,
    summary:
      "Treatment for a tooth whose inner pulp is inflamed or infected, aimed at relieving pain and keeping the natural tooth in place.",
    metaDescription:
      "Root canal treatment at Dent Arena, Surat: what it involves, who needs it, what recovery is usually like and how to book a consultation.",
    whatItIs:
      "A root canal treats the soft tissue inside a tooth \u2014 the pulp \u2014 when it becomes inflamed or infected. The dentist removes the affected pulp, cleans and shapes the narrow canals inside the roots, then seals them. The aim is to settle the infection and keep a tooth that would otherwise need to be removed.",
    whoNeedsIt: [
      "Deep decay that has reached the nerve of the tooth",
      "A tooth that has been cracked, fractured or heavily worn",
      "Repeated dental work on the same tooth over many years",
      "An injury to a tooth, even one that looks intact from outside",
    ],
    signs: [
      "Lingering pain after hot or cold drinks",
      "Pain when biting or when pressure is applied to one tooth",
      "Swelling or tenderness in the gum near a tooth",
      "A tooth that has darkened compared with its neighbours",
      "A recurring pimple-like spot on the gum",
    ],
    howItWorks: [
      { step: "Examination", detail: "Clinical checks and an X-ray to confirm which tooth is involved and how far the problem extends." },
      { step: "Local anaesthetic", detail: "The area is numbed before treatment begins so the procedure itself is comfortable for most people." },
      { step: "Cleaning the canals", detail: "The affected pulp is removed and the canals are cleaned, shaped and disinfected." },
      { step: "Sealing", detail: "The canals are filled and sealed, and the access opening is closed with a filling." },
      { step: "Final restoration", detail: "A crown or a definitive restoration is often advised afterwards to protect the tooth from fracture." },
    ],
    visitsAndRecovery:
      "Root canal treatment is completed in one or more visits depending on the tooth and how much infection is present. Mild tenderness for a few days afterwards is common and usually settles. Your dentist will discuss the likely number of visits for your specific tooth at the consultation.",
    benefits: [
      "Allows a natural tooth to be kept rather than removed",
      "Addresses the source of infection inside the tooth",
      "Restores normal chewing once the final restoration is placed",
    ],
    limitations: [
      "A treated tooth becomes more brittle and usually needs a crown",
      "Outcomes depend on how much healthy tooth structure remains",
      "Not every tooth can be saved; extraction is sometimes the more predictable option",
    ],
    risks: [
      "Persistent or returning infection, which may need re-treatment",
      "Fracture of a weakened tooth if the final restoration is delayed",
      "Temporary discomfort or sensitivity after treatment",
    ],
    aftercare: [
      "Avoid chewing on the treated side until the final restoration is placed",
      "Take any prescribed medication exactly as directed",
      "Keep brushing and cleaning between teeth as usual",
      "Attend the review appointment even if the pain has gone",
    ],
    whenToContact: [
      "Pain or swelling that increases rather than settles",
      "The bite feels high or uneven after treatment",
      "The temporary filling comes away",
    ],
    faqs: [
      { question: "Is a root canal painful?", answer: "The treatment is carried out under local anaesthetic, so most people describe it as similar to having a filling. Some tenderness for a few days afterwards is normal." },
      { question: "Do I need a crown afterwards?", answer: "Back teeth usually do, because they take heavy chewing forces and a treated tooth is more prone to fracture. Your dentist will advise based on how much natural tooth is left." },
      { question: "How long does a root-treated tooth last?", answer: "That depends on the remaining tooth structure, the final restoration and day-to-day care. Your dentist can give you a realistic picture for your tooth." },
    ],
    relatedSlugs: ["crowns-and-bridges", "tooth-coloured-fillings", "tooth-extraction"],
    availableAt: bothBranches,
    reviewedBy,
    lastReviewed,
  },
  {
    slug: "dental-implants",
    published: true,
    title: "Dental Implants",
    category: "surgical",
    featured: true,
    summary:
      "A titanium post placed in the jawbone to support a replacement tooth, used where a tooth is missing or cannot be saved.",
    metaDescription:
      "Dental implants at Dent Arena, Surat: how implant treatment works, who it suits, healing time and what to consider before starting.",
    whatItIs:
      "A dental implant is a small post, usually titanium, placed into the jawbone to act in place of a tooth root. Once the bone has healed around it, a crown, bridge or denture is attached to it. Implants replace individual teeth or support larger restorations.",
    whoNeedsIt: [
      "A single missing tooth with healthy neighbouring teeth",
      "Several missing teeth in the same area",
      "A loose lower denture that would benefit from support",
      "A tooth that cannot be restored and needs removing",
    ],
    signs: [
      "Difficulty chewing on one side because of a gap",
      "Neighbouring teeth beginning to tilt into a space",
      "A denture that moves while eating or speaking",
    ],
    howItWorks: [
      { step: "Assessment", detail: "Examination, X-rays and often a 3D scan to check bone volume, nerve position and gum health." },
      { step: "Planning", detail: "The dentist plans the implant position and discusses whether any preparatory treatment is needed." },
      { step: "Placement", detail: "The implant is placed under local anaesthetic in a planned surgical appointment." },
      { step: "Healing", detail: "The bone integrates with the implant over a period of months; a temporary solution may be used meanwhile." },
      { step: "Restoration", detail: "Impressions or scans are taken and the final crown, bridge or denture attachment is fitted." },
    ],
    visitsAndRecovery:
      "Implant treatment is staged over several appointments with healing time in between. Swelling and tenderness for a few days after placement are common. Your dentist will outline a timeline for your case at the planning stage.",
    benefits: [
      "Replaces a tooth without needing to reshape neighbouring teeth",
      "Helps maintain chewing function in the area",
      "Can stabilise a loose denture",
    ],
    limitations: [
      "Requires enough healthy bone; grafting is sometimes needed first",
      "Treatment is staged and takes months, not days",
      "Uncontrolled gum disease, smoking and some medical conditions affect suitability",
    ],
    risks: [
      "Infection or delayed healing around the implant site",
      "Failure of the implant to integrate with bone",
      "Gum inflammation or bone loss around an implant if cleaning is neglected",
    ],
    aftercare: [
      "Follow the post-surgical instructions given on the day",
      "Clean around the implant daily as shown, including between teeth",
      "Attend maintenance appointments so the implant can be monitored",
      "Tell your dentist if the restoration ever feels loose",
    ],
    whenToContact: [
      "Bleeding that does not settle with gentle pressure",
      "Increasing pain or swelling after the first few days",
      "The crown or denture attachment feels loose",
    ],
    faqs: [
      { question: "How long does implant treatment take?", answer: "It is staged over several months to allow the bone to heal around the implant. The exact timeline depends on your bone quality and whether any preparatory treatment is needed." },
      { question: "Am I suitable for an implant?", answer: "Suitability depends on bone volume, gum health, medical history and habits such as smoking. It can only be confirmed after an examination and imaging." },
      { question: "How do I look after an implant?", answer: "Daily cleaning around the implant and regular professional maintenance are essential, because the surrounding gum and bone can be affected by plaque just as natural teeth are." },
    ],
    relatedSlugs: ["crowns-and-bridges", "tooth-extraction", "dentures"],
    availableAt: bothBranches,
    reviewedBy,
    lastReviewed,
  },
  {
    slug: "teeth-whitening",
    published: true,
    title: "Teeth Whitening",
    category: "cosmetic",
    featured: true,
    summary:
      "A professionally supervised way to lighten the shade of natural teeth, carried out in the clinic or with custom take-home trays.",
    metaDescription:
      "Professional teeth whitening at Dent Arena, Surat: how it works, what results are realistic, sensitivity to expect and who it suits.",
    whatItIs:
      "Whitening uses a peroxide-based gel to lighten discolouration within the enamel and dentine. It is done in the clinic, or at home with custom-made trays and a lower-strength gel, sometimes as a combination of the two.",
    whoNeedsIt: [
      "General yellowing of natural teeth with age",
      "Staining from tea, coffee or tobacco after cleaning",
      "People preparing for an event who want a modest change in shade",
    ],
    signs: [
      "Teeth look darker in photographs than they used to",
      "Surface stains return quickly after a clean",
    ],
    howItWorks: [
      { step: "Check-up first", detail: "Decay, gum problems and cracked fillings are treated before whitening is considered." },
      { step: "Shade record", detail: "The starting shade is recorded so any change can be compared honestly." },
      { step: "Gel application", detail: "Gel is applied in the clinic with the gums protected, or dispensed with custom trays for home use." },
      { step: "Review", detail: "The result is reviewed and maintenance advice is given." },
    ],
    visitsAndRecovery:
      "In-clinic whitening is usually done in a single appointment; home whitening runs over a period of days as directed. Temporary sensitivity to cold during and shortly after treatment is common and typically settles.",
    benefits: [
      "A supervised process with the gums protected",
      "The starting shade is recorded, so the change can be assessed objectively",
      "Custom trays fit properly and hold gel where it is needed",
    ],
    limitations: [
      "Whitening does not change the colour of crowns, veneers or fillings",
      "Results vary between individuals and are not permanent",
      "Deep internal staining may respond differently and may need another approach",
    ],
    risks: [
      "Tooth sensitivity during and after treatment",
      "Temporary gum irritation if gel contacts the gums",
      "Uneven appearance where existing restorations are present",
    ],
    aftercare: [
      "Limit strongly staining food and drink in the days after treatment",
      "Use a sensitivity toothpaste if teeth feel reactive",
      "Follow tray instructions exactly if whitening at home",
      "Keep up regular cleaning appointments to maintain the result",
    ],
    whenToContact: [
      "Sensitivity that does not settle after a few days",
      "Gum soreness or a white patch on the gum after using trays",
    ],
    faqs: [
      { question: "Will my crowns and fillings whiten too?", answer: "No. Whitening gel works on natural tooth structure only. Existing restorations keep their original shade and may need replacing to match afterwards." },
      { question: "How long does whitening last?", answer: "This varies with diet, smoking and oral hygiene. Most people notice gradual fading and some choose occasional top-ups with their trays." },
      { question: "Is whitening suitable for everyone?", answer: "Not always. It is generally deferred during pregnancy, for very young patients, and until decay or gum disease has been treated." },
    ],
    relatedSlugs: ["teeth-cleaning-and-polishing", "smile-designing", "tooth-coloured-fillings"],
    availableAt: bothBranches,
    reviewedBy,
    lastReviewed,
  },
  {
    slug: "smile-designing",
    published: true,
    title: "Smile Designing",
    category: "cosmetic",
    featured: true,
    summary:
      "A planned combination of treatments that addresses the shape, shade, alignment and proportion of the teeth that show when you smile.",
    metaDescription:
      "Smile designing at Dent Arena, Surat: how a smile plan is made, which treatments it can involve and what to discuss at consultation.",
    whatItIs:
      "Smile designing is a planning process rather than a single procedure. Photographs, measurements and sometimes a digital or wax mock-up are used to agree what will change, before any irreversible work begins. The plan may combine whitening, alignment, bonding, veneers or crowns.",
    whoNeedsIt: [
      "Chipped, worn or uneven front teeth",
      "Gaps or crowding affecting the appearance of the smile",
      "Old front restorations that no longer match",
      "Someone wanting to understand options before committing",
    ],
    signs: [
      "You avoid smiling fully in photographs",
      "Front teeth have worn unevenly over time",
      "Existing veneers or crowns look different from the natural teeth",
    ],
    howItWorks: [
      { step: "Consultation", detail: "Discussion of what you would like to change, alongside a full dental examination." },
      { step: "Records", detail: "Photographs, scans or impressions and any needed X-rays." },
      { step: "Plan and preview", detail: "Options are presented, often with a mock-up so you can see a proposed shape before treatment." },
      { step: "Health first", detail: "Any decay, gum disease or bite problems are treated before cosmetic work." },
      { step: "Treatment and review", detail: "The agreed treatments are carried out in sequence and reviewed together." },
    ],
    visitsAndRecovery:
      "The number of visits depends entirely on which treatments the plan includes. Planning appointments come first and no irreversible work is started until the plan is agreed.",
    benefits: [
      "You see and agree a plan before treatment begins",
      "Health problems are addressed before cosmetic changes",
      "Treatments are sequenced rather than done piecemeal",
    ],
    limitations: [
      "Mock-ups are a guide, not an exact prediction",
      "Some changes involve permanently reshaping tooth structure",
      "Not every desired change is achievable without orthodontics or surgery",
    ],
    risks: [
      "Sensitivity after tooth preparation",
      "Veneers and crowns can chip and eventually need replacing",
      "Ongoing maintenance is required to keep the result healthy",
    ],
    aftercare: [
      "Avoid biting hard objects with restored front teeth",
      "Wear a night guard if one has been advised",
      "Maintain daily cleaning between teeth",
      "Attend review appointments as scheduled",
    ],
    whenToContact: [
      "A restoration chips, feels rough or comes loose",
      "The bite feels different after treatment",
    ],
    faqs: [
      { question: "Does smile designing always mean veneers?", answer: "No. Depending on the situation, a plan may involve only whitening and reshaping, or alignment first, with minimal or no removal of tooth structure." },
      { question: "Can I see the result before starting?", answer: "A digital design or trial mock-up can show a proposed shape. It is an indication of direction, not a guarantee of the final outcome." },
    ],
    relatedSlugs: ["teeth-whitening", "crowns-and-bridges", "clear-aligners"],
    availableAt: bothBranches,
    reviewedBy,
    lastReviewed,
  },
  {
    slug: "braces-and-orthodontics",
    published: true,
    title: "Braces and Orthodontics",
    category: "orthodontics",
    summary:
      "Fixed appliances that gradually move teeth into a better position to improve alignment, bite and cleaning access.",
    metaDescription:
      "Braces and orthodontic treatment at Dent Arena, Surat: types of braces, how treatment progresses and what care is needed during it.",
    whatItIs:
      "Orthodontic treatment applies gentle, controlled forces to move teeth through bone over time. Fixed braces use brackets bonded to the teeth connected by a wire, adjusted at regular intervals. Retainers are needed afterwards to hold the result.",
    whoNeedsIt: [
      "Crowded or overlapping teeth",
      "Gaps between teeth",
      "A bite where the upper and lower teeth do not meet evenly",
      "Teeth that are difficult to clean because of their position",
    ],
    signs: [
      "Food traps repeatedly in the same place",
      "Uneven wear on certain teeth",
      "Difficulty biting or chewing comfortably",
    ],
    howItWorks: [
      { step: "Orthodontic assessment", detail: "Examination, photographs, X-rays and study models or scans." },
      { step: "Treatment plan", detail: "Discussion of appliance options, expected duration and what results are realistic." },
      { step: "Fitting", detail: "Brackets are bonded and the first wire is placed." },
      { step: "Adjustments", detail: "Regular appointments to change wires and monitor movement." },
      { step: "Retention", detail: "Braces are removed and retainers are fitted to hold the teeth in place." },
    ],
    visitsAndRecovery:
      "Orthodontic treatment runs over months to years, with regular short adjustment visits. Teeth often feel tender for a few days after fitting and after each adjustment.",
    benefits: [
      "Improves alignment and how the teeth meet",
      "Can make cleaning easier and reduce food trapping",
      "Suitable for a wide range of tooth movements",
    ],
    limitations: [
      "Treatment takes time and depends on regular attendance",
      "Some cases need extractions or specialist referral",
      "Teeth can relapse if retainers are not worn as advised",
    ],
    risks: [
      "Decalcification or decay around brackets if cleaning is poor",
      "Gum inflammation during treatment",
      "Root shortening in some cases, monitored radiographically",
    ],
    aftercare: [
      "Clean carefully around brackets and wires after meals",
      "Avoid very hard or sticky foods that can break brackets",
      "Attend all adjustment appointments",
      "Wear retainers exactly as instructed after treatment",
    ],
    whenToContact: [
      "A bracket comes loose or a wire is poking",
      "Ongoing pain that does not settle after a few days",
    ],
    faqs: [
      { question: "How long will I need braces?", answer: "It depends on how much movement is needed. Your dentist will give an estimated range after the orthodontic assessment, and it is reviewed as treatment progresses." },
      { question: "Do adults get braces?", answer: "Yes. Tooth movement is possible at most ages provided the gums and supporting bone are healthy." },
    ],
    relatedSlugs: ["clear-aligners", "teeth-cleaning-and-polishing", "gum-treatment"],
    availableAt: bothBranches,
    reviewedBy,
    lastReviewed,
  },
  {
    slug: "clear-aligners",
    published: true,
    title: "Clear Aligners",
    category: "orthodontics",
    summary:
      "A series of removable, transparent trays that move teeth in small stages, planned digitally from the start.",
    metaDescription:
      "Clear aligner treatment at Dent Arena, Surat: how aligners work, wear-time requirements and which cases they suit.",
    whatItIs:
      "Clear aligners are custom-made removable trays worn in sequence. Each tray moves the teeth a small amount. Treatment is planned digitally, and attachments may be bonded to some teeth to help specific movements.",
    whoNeedsIt: [
      "Mild to moderate crowding or spacing",
      "Relapse after previous orthodontic treatment",
      "Adults who prefer a removable, less visible appliance",
    ],
    signs: [
      "Front teeth have gradually shifted since earlier treatment",
      "Mild crowding that makes cleaning harder",
    ],
    howItWorks: [
      { step: "Assessment", detail: "Examination and records to confirm whether aligners suit the movements required." },
      { step: "Digital plan", detail: "A scan is used to plan the sequence of movements stage by stage." },
      { step: "Aligner series", detail: "Trays are worn as instructed, each for a set period before moving to the next." },
      { step: "Monitoring", detail: "Progress is checked at review appointments and refinements are made if needed." },
      { step: "Retention", detail: "Retainers are provided at the end to hold the result." },
    ],
    visitsAndRecovery:
      "Aligners are typically worn for the majority of each day and removed for eating and cleaning. Total duration depends on the case. Teeth may feel tight for a day or two with each new tray.",
    benefits: [
      "Removable for eating and cleaning",
      "Less visible than fixed brackets",
      "The planned sequence is visualised before treatment starts",
    ],
    limitations: [
      "Results depend heavily on wearing the trays for the required hours",
      "Complex movements may be better handled with fixed braces",
      "Attachments on teeth are sometimes needed and are visible up close",
    ],
    risks: [
      "Slower or incomplete movement if wear time is inconsistent",
      "Temporary speech adjustment when starting",
      "Relapse without retainer wear",
    ],
    aftercare: [
      "Wear each aligner for the hours advised",
      "Clean trays as instructed and rinse after removal",
      "Brush before reinserting after meals",
      "Keep retainers safe and wear them as directed after treatment",
    ],
    whenToContact: [
      "An aligner no longer fits or cracks",
      "An attachment on a tooth comes off",
    ],
    faqs: [
      { question: "How many hours a day do I need to wear them?", answer: "Aligners only work while they are in the mouth. Your dentist will specify the daily wear time your plan is based on, and results depend on meeting it." },
      { question: "Are aligners suitable for every case?", answer: "No. Some bite corrections and larger movements are more predictable with fixed braces. An assessment is needed to decide." },
    ],
    relatedSlugs: ["braces-and-orthodontics", "smile-designing", "teeth-whitening"],
    availableAt: bothBranches,
    reviewedBy,
    lastReviewed,
  },
  {
    slug: "crowns-and-bridges",
    published: true,
    title: "Crowns and Bridges",
    category: "restorative",
    featured: true,
    summary:
      "Custom-made restorations that cover a damaged tooth or replace a missing one using the teeth on either side for support.",
    metaDescription:
      "Crowns and bridges at Dent Arena, Surat: when they are used, materials, the fitting process and how to care for them.",
    whatItIs:
      "A crown covers a tooth entirely to protect and rebuild it. A bridge replaces a missing tooth by joining a replacement to crowns on the adjacent teeth. Both are made in a laboratory or milled digitally and then cemented in place.",
    whoNeedsIt: [
      "A tooth that is heavily filled, cracked or worn",
      "A tooth after root canal treatment",
      "A single missing tooth with suitable teeth on either side",
    ],
    signs: [
      "A large old filling that keeps breaking",
      "A tooth that hurts when biting",
      "A visible crack line on a back tooth",
    ],
    howItWorks: [
      { step: "Assessment", detail: "The dentist checks whether the tooth can support a crown and whether a bridge is appropriate." },
      { step: "Preparation", detail: "The tooth is shaped under local anaesthetic and an impression or digital scan is taken." },
      { step: "Temporary", detail: "A temporary restoration protects the tooth while the final one is made." },
      { step: "Fitting", detail: "The final restoration is tried in, checked for fit, bite and shade, and cemented." },
    ],
    visitsAndRecovery:
      "Usually two or more visits, with a temporary in between. Sensitivity for a short period after preparation is common.",
    benefits: [
      "Protects a weakened tooth from further fracture",
      "Restores chewing and appearance",
      "A bridge is fixed in place rather than removable",
    ],
    limitations: [
      "A bridge requires reshaping the supporting teeth",
      "Crowns and bridges have a finite lifespan and may need replacing",
      "The underlying tooth can still decay at the margins",
    ],
    risks: [
      "Sensitivity or, occasionally, nerve inflammation after preparation",
      "Chipping of ceramic materials",
      "Decay or gum disease under a poorly cleaned restoration",
    ],
    aftercare: [
      "Clean under a bridge daily using the aid your dentist recommends",
      "Avoid biting very hard objects",
      "Report any looseness promptly",
      "Attend regular check-ups so margins can be monitored",
    ],
    whenToContact: [
      "The crown or bridge feels loose or lifts",
      "Persistent sensitivity or pain around the restored tooth",
    ],
    faqs: [
      { question: "How long do crowns last?", answer: "Lifespan varies with material, bite forces and cleaning. Your dentist can give a realistic expectation for your situation at the review." },
      { question: "Bridge or implant?", answer: "Both replace a missing tooth in different ways. The choice depends on the neighbouring teeth, bone, medical history and what you prefer after discussing the trade-offs." },
    ],
    relatedSlugs: ["dental-implants", "root-canal-treatment", "tooth-coloured-fillings"],
    availableAt: bothBranches,
    reviewedBy,
    lastReviewed,
  },
  {
    slug: "teeth-cleaning-and-polishing",
    published: true,
    title: "Teeth Cleaning and Polishing",
    category: "preventive",
    featured: true,
    summary:
      "Professional removal of plaque, hardened deposits and surface stains, followed by polishing and personalised cleaning advice.",
    metaDescription:
      "Professional teeth cleaning and polishing at Dent Arena, Surat: what a scaling appointment involves and how often it may be advised.",
    whatItIs:
      "A hygiene appointment removes plaque and calculus (hardened deposits) from above and just below the gum line using ultrasonic and hand instruments, followed by polishing. It also includes tailored advice on cleaning at home.",
    whoNeedsIt: [
      "Anyone attending for routine dental maintenance",
      "People with bleeding gums or visible deposits",
      "Before starting orthodontic, whitening or restorative work",
    ],
    signs: [
      "Gums bleed when brushing or cleaning between teeth",
      "Persistent bad breath",
      "Visible build-up behind the lower front teeth",
    ],
    howItWorks: [
      { step: "Assessment", detail: "The gums are examined and any bleeding or pocketing is recorded." },
      { step: "Scaling", detail: "Deposits are removed with ultrasonic and hand instruments." },
      { step: "Polishing", detail: "Surfaces are polished to remove stain and leave teeth smoother." },
      { step: "Advice", detail: "Cleaning technique, interdental aids and a recall interval are discussed." },
    ],
    visitsAndRecovery:
      "Usually a single appointment. Gums may feel tender and teeth briefly sensitive afterwards, particularly if there was significant build-up.",
    benefits: [
      "Removes deposits that brushing alone cannot",
      "Helps gum inflammation settle",
      "Gives a chance to spot problems early",
    ],
    limitations: [
      "Cleaning does not lighten the natural shade of teeth",
      "Established gum disease may need a longer course of treatment",
      "Results depend on daily cleaning at home",
    ],
    risks: [
      "Temporary sensitivity to cold",
      "Gum tenderness or minor bleeding for a day or two",
    ],
    aftercare: [
      "Brush twice daily with fluoride toothpaste",
      "Clean between the teeth daily",
      "Use a sensitivity toothpaste if needed",
      "Return at the recall interval your dentist recommends",
    ],
    whenToContact: [
      "Gum bleeding that continues for more than a couple of weeks",
      "Sensitivity that worsens rather than settles",
    ],
    faqs: [
      { question: "How often should I have a cleaning?", answer: "Recall intervals are individual and depend on your gum health, habits and risk factors. Your dentist will suggest an interval for you rather than a fixed rule." },
      { question: "Does scaling damage enamel?", answer: "Professional scaling removes deposits, not enamel. Some sensitivity afterwards is normal, particularly where gums have receded." },
    ],
    relatedSlugs: ["gum-treatment", "preventive-dental-check-up", "teeth-whitening"],
    availableAt: bothBranches,
    reviewedBy,
    lastReviewed,
  },
  {
    slug: "tooth-coloured-fillings",
    published: true,
    title: "Tooth-Coloured Fillings",
    category: "restorative",
    summary:
      "Composite restorations used to repair decayed, chipped or worn teeth while matching the surrounding tooth shade.",
    metaDescription:
      "Tooth-coloured composite fillings at Dent Arena, Surat: when a filling is needed, how it is placed and how long the visit takes.",
    whatItIs:
      "A tooth-coloured filling uses a composite resin bonded to the tooth to replace lost structure after decay, fracture or wear. The material is shaped and hardened directly in the mouth and polished to match the tooth.",
    whoNeedsIt: [
      "Decay detected at a check-up or on an X-ray",
      "A chipped edge on a front or back tooth",
      "Worn areas near the gum line",
      "Replacement of an old, failing filling",
    ],
    signs: [
      "Sensitivity to sweet, hot or cold",
      "A rough edge you can feel with your tongue",
      "Food packing between two teeth",
      "A visible dark spot or hole",
    ],
    howItWorks: [
      { step: "Diagnosis", detail: "Clinical examination and, where needed, an X-ray to see the extent of decay." },
      { step: "Preparation", detail: "Local anaesthetic if required, then removal of decay and preparation of the cavity." },
      { step: "Placement", detail: "Composite is bonded in layers, shaped to the tooth and hardened with a curing light." },
      { step: "Finishing", detail: "The bite is checked and the filling is polished." },
    ],
    visitsAndRecovery:
      "Most fillings are completed in one visit. Mild sensitivity for a few days afterwards is common, particularly with deeper cavities.",
    benefits: [
      "Matches the shade of the natural tooth",
      "Bonds to tooth structure, so less healthy tooth needs removing than with some older techniques",
      "Completed in a single appointment in most cases",
    ],
    limitations: [
      "Very large cavities may be better restored with a crown or an indirect restoration",
      "Composite can stain at the margins over years",
      "Fillings do not last indefinitely and need monitoring",
    ],
    risks: [
      "Post-operative sensitivity",
      "Nerve inflammation where decay was deep, occasionally requiring root canal treatment",
      "Chipping under heavy bite forces",
    ],
    aftercare: [
      "Wait until numbness wears off before eating",
      "Report a high bite so it can be adjusted",
      "Clean between the teeth daily to protect the margins",
      "Reduce frequency of sugary snacks and drinks",
    ],
    whenToContact: [
      "The bite feels high after the anaesthetic wears off",
      "Sensitivity that increases over the following weeks",
    ],
    faqs: [
      { question: "Will the filling be noticeable?", answer: "Composite is shade-matched to your tooth, so it is generally hard to see, though a very close match depends on the tooth and the location." },
      { question: "How long do composite fillings last?", answer: "That depends on size, position, bite forces and cleaning. Your dentist will monitor them at each check-up." },
    ],
    relatedSlugs: ["root-canal-treatment", "crowns-and-bridges", "preventive-dental-check-up"],
    availableAt: bothBranches,
    reviewedBy,
    lastReviewed,
  },
  {
    slug: "tooth-extraction",
    published: true,
    title: "Tooth Extraction",
    category: "surgical",
    summary:
      "Removal of a tooth that cannot be restored or is causing problems, carried out under local anaesthetic with aftercare guidance.",
    metaDescription:
      "Tooth extraction at Dent Arena, Surat: when removal is advised, what the appointment involves and how to care for the site afterwards.",
    whatItIs:
      "An extraction removes a tooth from its socket. It is advised when a tooth is too damaged to restore predictably, when infection cannot be resolved, or as part of a wider treatment plan.",
    whoNeedsIt: [
      "A tooth broken below the gum level",
      "Advanced decay that cannot be restored",
      "Severe gum disease with a very loose tooth",
      "Teeth removed as part of an orthodontic plan",
    ],
    signs: [
      "A tooth that is loose in adulthood",
      "Recurrent swelling around one tooth",
      "A tooth that has fractured badly",
    ],
    howItWorks: [
      { step: "Assessment", detail: "Examination, X-ray, and discussion of alternatives to removal where they exist." },
      { step: "Anaesthetic", detail: "The area is numbed thoroughly before starting." },
      { step: "Removal", detail: "The tooth is loosened and removed; sometimes the socket is stitched." },
      { step: "Aftercare briefing", detail: "Written and verbal instructions for the first 24\u201348 hours." },
      { step: "Replacement planning", detail: "Options for replacing the tooth, if appropriate, are discussed." },
    ],
    visitsAndRecovery:
      "Usually one appointment, with a review if stitches were placed. The socket heals over the following weeks; discomfort and swelling in the first few days are normal.",
    benefits: [
      "Resolves pain or infection from a tooth that cannot be saved",
      "Allows planning of a replacement where appropriate",
    ],
    limitations: [
      "A gap can affect chewing and neighbouring teeth over time",
      "Replacement options require separate treatment",
    ],
    risks: [
      "Bleeding, bruising and swelling",
      "Dry socket, a painful delay in healing",
      "Infection requiring further treatment",
      "Rarely, injury to nearby structures depending on the tooth",
    ],
    aftercare: [
      "Bite on the gauze provided for as long as advised",
      "Avoid rinsing vigorously, smoking or using a straw in the first 24 hours",
      "Use warm salt-water rinses from the next day if advised",
      "Keep the rest of the mouth clean as usual",
    ],
    whenToContact: [
      "Bleeding that does not stop with pressure",
      "Severe pain three to four days later",
      "Fever or spreading swelling",
    ],
    faqs: [
      { question: "Can the tooth be saved instead?", answer: "Where a tooth can be restored predictably, that is usually discussed first. Extraction is advised when the alternatives carry a poor outlook." },
      { question: "When can I replace the tooth?", answer: "Timing depends on healing and the replacement chosen. Your dentist will explain the sequence for your case." },
    ],
    relatedSlugs: ["wisdom-tooth-removal", "dental-implants", "dentures"],
    availableAt: bothBranches,
    reviewedBy,
    lastReviewed,
  },
  {
    slug: "wisdom-tooth-removal",
    published: true,
    title: "Wisdom Tooth Removal",
    category: "surgical",
    summary:
      "Assessment and removal of third molars that are impacted, repeatedly infected or damaging the tooth in front.",
    metaDescription:
      "Wisdom tooth removal at Dent Arena, Surat: when it is needed, what the procedure involves and typical recovery advice.",
    whatItIs:
      "Wisdom teeth are the last molars to erupt, usually in the late teens or twenties. When there is not enough room, they can become impacted. Removal is considered when they cause recurring problems, not simply because they are present.",
    whoNeedsIt: [
      "Repeated infection around a partly erupted wisdom tooth",
      "Decay in the wisdom tooth or the tooth in front that cannot be treated",
      "Cysts or other changes seen on an X-ray",
      "Persistent pain or difficulty opening the jaw linked to the area",
    ],
    signs: [
      "Swollen, sore gum at the very back of the jaw",
      "Bad taste or discharge from the area",
      "Pain when biting at the back",
      "Difficulty cleaning the last tooth",
    ],
    howItWorks: [
      { step: "Imaging and assessment", detail: "An X-ray, and sometimes a 3D scan, shows the tooth position and its relationship to nearby nerves." },
      { step: "Planning", detail: "Risks, alternatives and whether referral is appropriate are discussed." },
      { step: "Procedure", detail: "Removal under local anaesthetic; the tooth may be sectioned to remove it more conservatively." },
      { step: "Closure", detail: "Stitches are often placed and aftercare is explained." },
    ],
    visitsAndRecovery:
      "Usually one appointment plus a review. Swelling and limited mouth opening for several days are common and generally improve over the first week.",
    benefits: [
      "Resolves recurring infection or pain from the area",
      "Can protect the second molar from further damage",
    ],
    limitations: [
      "Not every wisdom tooth needs removing",
      "Some cases are better managed by an oral surgeon",
    ],
    risks: [
      "Swelling, bruising and jaw stiffness",
      "Dry socket",
      "Temporary or, rarely, longer-lasting altered sensation in the lip or tongue for lower wisdom teeth",
    ],
    aftercare: [
      "Use cold packs as advised on the first day",
      "Eat soft food and keep hydrated",
      "Follow the rinsing instructions from the day after",
      "Take prescribed medication as directed",
    ],
    whenToContact: [
      "Worsening pain after the third day",
      "Fever, spreading swelling or difficulty swallowing",
      "Numbness that persists beyond the expected period",
    ],
    faqs: [
      { question: "Do all wisdom teeth need to come out?", answer: "No. A wisdom tooth that is healthy, cleanable and not causing problems is usually monitored rather than removed." },
      { question: "How long is recovery?", answer: "Most swelling and stiffness improve over the first week, though this varies with the tooth position and the individual." },
    ],
    relatedSlugs: ["tooth-extraction", "emergency-dental-care", "gum-treatment"],
    availableAt: bothBranches,
    reviewedBy,
    lastReviewed,
  },
  {
    slug: "gum-treatment",
    published: true,
    title: "Gum Treatment",
    category: "preventive",
    summary:
      "Treatment for gum inflammation and periodontal disease, combining professional cleaning below the gum line with tailored home care.",
    metaDescription:
      "Gum disease treatment at Dent Arena, Surat: signs of gum problems, how periodontal care works and what maintenance involves.",
    whatItIs:
      "Gum disease begins as gingivitis, where the gums are inflamed but the supporting bone is intact. If it progresses to periodontitis, the bone around the teeth is affected. Treatment focuses on removing deposits below the gum line and helping you control plaque daily.",
    whoNeedsIt: [
      "Gums that bleed on brushing",
      "Pocketing found during a gum examination",
      "Recurrent bad breath or gum tenderness",
      "Smokers and people with diabetes, who are at higher risk",
    ],
    signs: [
      "Red, swollen or bleeding gums",
      "Gums receding away from the teeth",
      "Teeth that feel loose or have drifted",
      "Persistent bad taste or breath",
    ],
    howItWorks: [
      { step: "Periodontal assessment", detail: "Pocket depths, bleeding and bone levels are recorded, usually with X-rays." },
      { step: "Cause-related therapy", detail: "Deposits are removed above and below the gum line, sometimes over more than one appointment." },
      { step: "Home care coaching", detail: "Technique and interdental cleaning aids are matched to your mouth." },
      { step: "Re-assessment", detail: "The response is re-measured after healing; further treatment or referral is considered if needed." },
      { step: "Maintenance", detail: "A supportive recall interval is agreed to keep the condition stable." },
    ],
    visitsAndRecovery:
      "Treatment usually spans several appointments with a re-assessment after a healing period. Gums may be tender and teeth sensitive for a short time after each session.",
    benefits: [
      "Reduces inflammation and bleeding",
      "Helps slow further loss of support around teeth",
      "Improves the outlook for other dental treatment",
    ],
    limitations: [
      "Bone already lost does not grow back with cleaning alone",
      "Ongoing maintenance is essential; the condition can recur",
      "Advanced cases may need periodontal surgery or specialist referral",
    ],
    risks: [
      "Sensitivity and gum recession as inflammation resolves",
      "Temporary discomfort after deep cleaning",
    ],
    aftercare: [
      "Clean between the teeth every day using the recommended aid",
      "Stop or reduce smoking, which strongly affects gum healing",
      "Manage general health conditions such as diabetes with your doctor",
      "Attend maintenance appointments at the agreed interval",
    ],
    whenToContact: [
      "Bleeding or swelling that returns after treatment",
      "A tooth that becomes noticeably looser",
      "A gum abscess or sudden swelling",
    ],
    faqs: [
      { question: "Can gum disease be cured?", answer: "Gingivitis can usually resolve with treatment and good daily cleaning. Periodontitis is managed and stabilised rather than cured, which is why maintenance matters." },
      { question: "Why do my gums recede after treatment?", answer: "As swelling settles, the gum shrinks to its true level. This can expose more of the tooth and cause sensitivity, which usually improves." },
    ],
    relatedSlugs: ["teeth-cleaning-and-polishing", "preventive-dental-check-up", "dental-implants"],
    availableAt: bothBranches,
    reviewedBy,
    lastReviewed,
  },
  {
    slug: "dentures",
    published: true,
    title: "Dentures",
    category: "restorative",
    summary:
      "Removable replacements for several or all missing teeth, made to restore chewing, speech and facial support.",
    metaDescription:
      "Dentures at Dent Arena, Surat: partial and complete dentures, the fitting stages and how to adapt to and care for them.",
    whatItIs:
      "Dentures are removable appliances that replace missing teeth. A partial denture fills gaps where natural teeth remain; a complete denture replaces a full arch. Implants can be used to help retain a denture in some cases.",
    whoNeedsIt: [
      "Several missing teeth in one arch",
      "All teeth missing in an upper or lower jaw",
      "An interim replacement while other treatment is planned",
    ],
    signs: [
      "Difficulty chewing a normal diet",
      "An existing denture that no longer fits or rocks",
      "Changes in speech after tooth loss",
    ],
    howItWorks: [
      { step: "Assessment", detail: "Examination of remaining teeth, gums and ridge shape, and discussion of options." },
      { step: "Impressions", detail: "Initial and then accurate working impressions or scans." },
      { step: "Try-in", detail: "A wax try-in allows the bite, tooth position and appearance to be checked before finishing." },
      { step: "Fitting", detail: "The finished denture is fitted and adjusted." },
      { step: "Adjustments", detail: "Short review appointments to ease any sore spots as you adapt." },
    ],
    visitsAndRecovery:
      "Dentures are made over several appointments. Most people need an adjustment period, and a few small adjustments in the first weeks are normal.",
    benefits: [
      "Replaces multiple teeth without surgery",
      "Restores appearance and support to the lips and cheeks",
      "Can often be modified if further teeth are lost",
    ],
    limitations: [
      "Chewing efficiency is lower than with natural teeth",
      "The fit changes over time as the ridge remodels; relines may be needed",
      "Lower complete dentures are typically less stable than upper ones",
    ],
    risks: [
      "Sore spots and ulceration during adaptation",
      "Fungal infection under a denture if hygiene is poor",
      "Gradual bone resorption under a long-worn denture",
    ],
    aftercare: [
      "Clean the denture daily over water with a denture brush",
      "Leave it out at night unless advised otherwise",
      "Clean remaining natural teeth and gums thoroughly",
      "Attend reviews so fit and tissue health can be checked",
    ],
    whenToContact: [
      "A sore spot that does not settle within a few days",
      "The denture cracks or a tooth comes off",
      "The fit becomes noticeably loose",
    ],
    faqs: [
      { question: "How long does it take to get used to a denture?", answer: "Most people need a few weeks of practice with speech and eating, and often a couple of small adjustments during that period." },
      { question: "Can implants help a loose denture?", answer: "In some cases implants can be used to retain a denture more securely. Suitability depends on bone and general health." },
    ],
    relatedSlugs: ["dental-implants", "tooth-extraction", "crowns-and-bridges"],
    availableAt: bothBranches,
    reviewedBy,
    lastReviewed,
  },
  {
    slug: "paediatric-dentistry",
    published: true,
    title: "Paediatric Dentistry",
    category: "specialist",
    summary:
      "Dental care for children, focused on prevention, early detection and building a calm, familiar experience of the dentist.",
    metaDescription:
      "Children's dentistry at Dent Arena, Surat: check-ups, prevention, fillings for baby teeth and helping children feel at ease.",
    whatItIs:
      "Paediatric care covers examinations, preventive treatment such as fluoride application and fissure sealants, treatment of decay in baby and young permanent teeth, and monitoring how the adult teeth are coming through.",
    whoNeedsIt: [
      "Children attending for their first dental visits",
      "A child with visible decay or toothache",
      "Children with a high-sugar diet or a family history of decay",
      "Monitoring of erupting adult teeth",
    ],
    signs: [
      "A child complaining of pain with sweets or cold drinks",
      "White or brown marks on the teeth",
      "A baby tooth that is loose earlier or later than expected",
      "Difficulty eating on one side",
    ],
    howItWorks: [
      { step: "Familiarisation", detail: "Early visits focus on letting the child get comfortable with the surroundings." },
      { step: "Examination", detail: "A gentle check of the teeth, gums and how the jaws are developing." },
      { step: "Prevention", detail: "Diet and brushing advice, fluoride application and sealants where appropriate." },
      { step: "Treatment", detail: "Any decay is treated using techniques suited to the child's age and cooperation." },
      { step: "Review", detail: "A recall interval is set based on the child's risk of decay." },
    ],
    visitsAndRecovery:
      "Most children's appointments are short. Treatment is paced to the child, and more than one visit may be used deliberately to build confidence.",
    benefits: [
      "Problems are found while they are small and simpler to treat",
      "Children build familiarity with dental visits early",
      "Prevention is tailored to the child's diet and habits",
    ],
    limitations: [
      "Very young or anxious children may need a referral for care under sedation or general anaesthesia",
      "Success depends heavily on home routines and diet",
    ],
    risks: [
      "Anxiety if a first visit happens during pain rather than for prevention",
      "Decay progressing quickly in baby teeth if untreated",
    ],
    aftercare: [
      "Brush twice daily with an age-appropriate fluoride toothpaste, supervised",
      "Keep sugary food and drink to mealtimes",
      "Avoid bottles or sweet drinks at bedtime",
      "Attend recall appointments even when nothing hurts",
    ],
    whenToContact: [
      "Toothache, facial swelling or a knocked-out tooth",
      "An injury to a front tooth after a fall",
    ],
    faqs: [
      { question: "When should a child first see a dentist?", answer: "Early familiarisation visits are generally encouraged once the first teeth appear, so the child associates the clinic with routine rather than pain." },
      { question: "Do baby teeth with decay need treating?", answer: "Often yes. Baby teeth hold space for adult teeth and can cause pain and infection if decay is left." },
    ],
    relatedSlugs: ["preventive-dental-check-up", "tooth-coloured-fillings", "emergency-dental-care"],
    availableAt: bothBranches,
    reviewedBy,
    lastReviewed,
  },
  {
    slug: "preventive-dental-check-up",
    published: true,
    title: "Preventive Dental Check-up",
    category: "preventive",
    featured: true,
    summary:
      "A structured examination of the teeth, gums and soft tissues, with X-rays when indicated and a personalised prevention plan.",
    metaDescription:
      "Preventive dental check-ups at Dent Arena, Surat: what is examined, when X-rays are used and how a recall interval is decided.",
    whatItIs:
      "A check-up is an examination rather than a treatment. The dentist reviews your medical and dental history, examines the teeth, gums, bite and soft tissues, and takes X-rays where clinically indicated. The result is a plan and a recall interval suited to your risk.",
    whoNeedsIt: [
      "Anyone maintaining routine dental care",
      "New patients joining the practice",
      "People with a history of decay or gum disease",
      "Anyone unsure why a tooth feels different",
    ],
    signs: [
      "It has been a long time since your last examination",
      "Sensitivity, bleeding gums or a rough edge you have noticed",
      "A change in how your teeth meet",
    ],
    howItWorks: [
      { step: "History", detail: "Medical history, medication and any concerns you want addressed." },
      { step: "Examination", detail: "Teeth, existing restorations, gums, bite and soft tissues are checked." },
      { step: "X-rays if indicated", detail: "Radiographs are taken only when they will change what can be seen or decided." },
      { step: "Discussion", detail: "Findings, options and priorities are explained, with costs discussed before treatment." },
      { step: "Recall", detail: "An interval for your next examination is agreed based on your individual risk." },
    ],
    visitsAndRecovery:
      "A single appointment. Any treatment identified is planned separately so you have time to consider it.",
    benefits: [
      "Problems are identified before they cause pain",
      "Prevention is tailored rather than generic",
      "Soft tissues are checked as part of the examination",
    ],
    limitations: [
      "An examination does not include cleaning or treatment",
      "Some conditions only become visible with X-rays or over time",
    ],
    risks: [],
    aftercare: [
      "Follow the prevention advice agreed at the visit",
      "Book any recommended treatment while it is still small",
      "Return at the recall interval suggested",
    ],
    whenToContact: [
      "New pain, swelling or a broken tooth before your next visit",
      "An ulcer or patch in the mouth that has not healed in two weeks",
    ],
    faqs: [
      { question: "How often should I have a check-up?", answer: "Intervals are individual. Someone with stable gums and no recent decay may be seen less often than someone at higher risk; your dentist will agree an interval with you." },
      { question: "Will I need X-rays every time?", answer: "No. Radiographs are taken when they are clinically justified, based on your history and what the examination shows." },
    ],
    relatedSlugs: ["teeth-cleaning-and-polishing", "tooth-coloured-fillings", "gum-treatment"],
    availableAt: bothBranches,
    reviewedBy,
    lastReviewed,
  },
  {
    slug: "emergency-dental-care",
    published: true,
    title: "Emergency Dental Care",
    category: "specialist",
    summary:
      "Assessment and immediate management of dental pain, swelling, injuries and broken teeth.",
    metaDescription:
      "Emergency dental care at Dent Arena, Surat: what counts as a dental emergency, first steps at home and how to reach the clinic.",
    whatItIs:
      "Emergency care focuses on relieving pain, controlling infection and stabilising an injury. Definitive treatment is often planned for a later appointment once the immediate problem is settled.",
    whoNeedsIt: [
      "Severe or persistent toothache",
      "Facial or gum swelling",
      "A tooth knocked out or displaced by an injury",
      "A broken tooth or lost restoration causing pain",
    ],
    signs: [
      "Pain that disturbs sleep or is not controlled by usual painkillers",
      "Swelling of the face, jaw or under the eye",
      "Bleeding after an injury or extraction that does not settle",
      "A tooth pushed out of position",
    ],
    howItWorks: [
      { step: "Contact the clinic", detail: "Call or message so the situation can be assessed and an appointment arranged." },
      { step: "Assessment", detail: "Examination and X-rays as needed to identify the source." },
      { step: "Immediate management", detail: "Pain relief, drainage of infection, temporary restoration or stabilisation of an injured tooth." },
      { step: "Definitive plan", detail: "Follow-up treatment is scheduled once the acute problem has settled." },
    ],
    visitsAndRecovery:
      "An emergency visit is usually short and focused. Follow-up appointments are almost always needed to complete treatment.",
    benefits: [
      "Pain and infection are addressed promptly",
      "Injured teeth are more likely to be manageable when seen quickly",
    ],
    limitations: [
      "Emergency appointments deal with the immediate problem, not the full treatment plan",
      "Availability depends on clinic hours; severe facial swelling with difficulty breathing or swallowing is a medical emergency and needs hospital care",
    ],
    risks: [
      "Delay allows infection to spread and treatment options to narrow",
    ],
    aftercare: [
      "Take prescribed medication exactly as directed and complete the course",
      "Keep the area clean as instructed",
      "Attend the follow-up appointment even if the pain has gone",
    ],
    whenToContact: [
      "Difficulty breathing or swallowing, or swelling closing the eye \u2014 seek urgent medical care immediately",
      "Fever with facial swelling",
      "A knocked-out adult tooth \u2014 contact a dentist without delay",
    ],
    faqs: [
      { question: "What should I do if a tooth is knocked out?", answer: "Handle it by the crown, not the root, and seek dental care immediately. Time matters, and your dentist can advise on the phone about how to keep the tooth in the meantime." },
      { question: "Is a swelling always urgent?", answer: "Facial swelling should be assessed promptly. Swelling with fever, difficulty swallowing or breathing needs urgent medical attention, not a routine appointment." },
    ],
    relatedSlugs: ["root-canal-treatment", "tooth-extraction", "wisdom-tooth-removal"],
    availableAt: bothBranches,
    reviewedBy,
    lastReviewed,
  },
  {
    slug: "full-mouth-rehabilitation",
    published: true,
    title: "Full-Mouth Rehabilitation",
    category: "restorative",
    summary:
      "A sequenced plan that rebuilds function and comfort where many teeth are worn, missing or heavily restored.",
    metaDescription:
      "Full-mouth rehabilitation at Dent Arena, Surat: how complex cases are assessed, planned in stages and reviewed over time.",
    whatItIs:
      "Full-mouth rehabilitation combines several treatments \u2014 which may include gum therapy, root canal treatment, crowns, bridges, implants or dentures \u2014 into one staged plan, usually where extensive wear, tooth loss or bite problems are present.",
    whoNeedsIt: [
      "Widespread tooth wear from grinding, acid or age",
      "Many missing or heavily restored teeth",
      "Difficulty chewing across the whole mouth",
      "Repeated failure of individual restorations",
    ],
    signs: [
      "Teeth becoming visibly shorter over the years",
      "Frequent fractures of teeth or fillings",
      "Jaw muscle fatigue or an uncomfortable bite",
    ],
    howItWorks: [
      { step: "Comprehensive assessment", detail: "Full examination, radiographs, photographs, scans and bite records." },
      { step: "Stabilisation", detail: "Active disease \u2014 decay and gum disease \u2014 is treated first." },
      { step: "Planning and preview", detail: "The bite and tooth position are planned, often tested with temporary restorations." },
      { step: "Definitive treatment", detail: "Restorations are completed in a planned sequence." },
      { step: "Maintenance", detail: "Long-term reviews, night guard where indicated, and hygiene support." },
    ],
    visitsAndRecovery:
      "This is long-term treatment carried out over many appointments and months. Temporary restorations are usually worn while the plan progresses.",
    benefits: [
      "Treats the mouth as a whole rather than tooth by tooth",
      "Bite changes can be tested with temporaries before final work",
      "Sequenced so health is stabilised first",
    ],
    limitations: [
      "Substantial time commitment and multiple appointments",
      "Some treatments are irreversible",
      "Long-term success depends on maintenance and habits such as grinding",
    ],
    risks: [
      "Sensitivity or nerve inflammation in prepared teeth",
      "Fracture or wear of restorations over time",
      "Adjustment period while adapting to a changed bite",
    ],
    aftercare: [
      "Wear a night guard if one has been provided",
      "Attend the agreed maintenance appointments",
      "Clean thoroughly around every restoration daily",
      "Report any change in the bite promptly",
    ],
    whenToContact: [
      "A temporary restoration comes off",
      "The bite feels uneven or a tooth becomes sensitive to pressure",
    ],
    faqs: [
      { question: "How long does full-mouth rehabilitation take?", answer: "It is measured in months and depends on how much stabilisation is needed first. A staged timeline is agreed before treatment starts." },
      { question: "Do I have to do everything at once?", answer: "No. Care is usually phased, with the most urgent and health-related treatment first, and the rest sequenced as agreed." },
    ],
    relatedSlugs: ["crowns-and-bridges", "dental-implants", "gum-treatment"],
    availableAt: bothBranches,
    reviewedBy,
    lastReviewed,
  },
];

export const publishedTreatments = treatments.filter((t) => t.published);

export const featuredTreatments = publishedTreatments.filter((t) => t.featured);

export function getTreatment(slug: string) {
  return publishedTreatments.find((t) => t.slug === slug);
}

export function getTreatments(slugs: string[]) {
  return slugs
    .map((slug) => getTreatment(slug))
    .filter((t): t is Treatment => Boolean(t));
}

export const categoryLabels: Record<Treatment["category"], string> = {
  restorative: "Restorative",
  cosmetic: "Cosmetic",
  orthodontics: "Orthodontics",
  preventive: "Preventive",
  surgical: "Surgical",
  specialist: "Specialist care",
};

/**
 * Treatments a dentist can be asked about, based on confirmed personal scope
 * when available, otherwise the branches where they practise.
 */
export function getTreatmentsForDoctor(doctor: Doctor) {
  const own = confirmed(doctor.treatmentSlugs);
  if (own) return getTreatments(own);
  return publishedTreatments.filter((t) =>
    t.availableAt.some((id) => doctor.locationIds.includes(id)),
  );
}
