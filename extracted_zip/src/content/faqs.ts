import type { Faq } from "./types";

export type FaqCategory = {
  id: string;
  label: string;
  description: string;
};

/**
 * FAQ categories. Answers are general and educational only — nothing here is a
 * diagnosis, a promise of a result, an exact duration, or a price. Anything
 * operational (fees, payment plans, emergency cover, timings, branch-specific
 * availability) is deliberately left to be confirmed by the clinic.
 */
export const faqCategories: FaqCategory[] = [
  { id: "appointments", label: "Appointments", description: "Requesting a visit and choosing a branch" },
  { id: "visits", label: "Your visit", description: "First appointments, children and nervous patients" },
  { id: "emergencies", label: "Urgent problems", description: "Pain, swelling, knocked-out teeth" },
  { id: "preventive", label: "Check-ups & cleaning", description: "Routine care and hygiene" },
  { id: "treatments", label: "Treatments", description: "Root canals, implants, braces and whitening" },
  { id: "aftercare", label: "Recovery & aftercare", description: "What to expect after treatment" },
  { id: "payments", label: "Fees & practicalities", description: "Consultations, costs and records" },
];

/**
 * Every FAQ rendered on /faqs. The FAQPage JSON-LD is generated from exactly
 * this array so schema and visible content always match.
 */
export const generalFaqs: Faq[] = [
  {
    topic: "appointments",
    question: "How do I book an appointment at Dent Arena?",
    answer:
      "You can send an appointment request on WhatsApp using the form on this site, or call the clinic. A request is not a confirmed booking \u2014 the team replies to agree a slot that works for both of you.",
  },
  {
    topic: "appointments",
    question: "Which branch should I choose?",
    answer:
      "Choose whichever of the two Surat practices is easier for you to reach: Bhatar, on Bhatar Road in Athwa, or Vesu, on VIP Road in Bharthana. Mention your preferred branch in your request and the team will confirm availability.",
  },
  {
    topic: "appointments",
    question: "Is every treatment available at both branches?",
    answer:
      "Branch-by-branch treatment availability is confirmed by the clinic rather than assumed here. Tell the team what you need when you send your request and they will let you know which branch to attend.",
  },
  {
    topic: "appointments",
    question: "What information should I include in my request?",
    answer:
      "Your name, a mobile number you can be reached on, your preferred branch, a short description of the problem or the treatment you are asking about, and the days or times that generally suit you.",
  },
  {
    topic: "appointments",
    question: "Can I change or cancel a requested appointment?",
    answer:
      "Yes. Reply on the same WhatsApp conversation or call the clinic as early as you can, so the slot can be offered to someone else.",
  },
  {
    topic: "visits",
    question: "What happens at a first visit?",
    answer:
      "A first visit is usually an examination and a conversation: your medical and dental history, an examination of the teeth, gums and soft tissues, X-rays if they are clinically indicated, and a discussion of findings and options before anything is booked.",
  },
  {
    topic: "visits",
    question: "What should I bring with me?",
    answer:
      "Bring a list of any medicines you take, details of medical conditions or allergies, and any previous dental X-rays, reports or treatment records you have.",
  },
  {
    topic: "visits",
    question: "Can I bring my child along?",
    answer:
      "Yes. Early familiarisation visits help children get used to the clinic before any treatment is needed. Let the team know when you request an appointment so enough time can be set aside.",
  },
  {
    topic: "visits",
    question: "At what age should a child first see a dentist?",
    answer:
      "General guidance is that a first dental visit happens early \u2014 around the time the first teeth appear or by the first birthday \u2014 so habits, diet and cleaning can be discussed before problems start. Your dentist will advise a recall interval that suits your child.",
  },
  {
    topic: "visits",
    question: "I am nervous about dental treatment. What can I do?",
    answer:
      "Tell the team when you book and again when you arrive. Appointments can be paced differently, and explaining each step before it happens helps many people feel more in control. Ask about the options for managing discomfort during your examination.",
  },
  {
    topic: "emergencies",
    question: "What should I do in a dental emergency?",
    answer:
      "Contact the clinic as soon as you can so the situation can be assessed. If you have facial swelling with fever, or any difficulty breathing or swallowing, treat it as a medical emergency and seek urgent hospital care immediately.",
  },
  {
    topic: "emergencies",
    question: "A tooth has been knocked out \u2014 what now?",
    answer:
      "Handle the tooth by the crown, not the root. If it is an adult tooth, it may be possible to reposition it in the socket and hold it in place; otherwise keep it in milk or saliva and seek dental care urgently. Time matters a great deal. Do not attempt to reimplant a baby tooth.",
  },
  {
    topic: "emergencies",
    question: "Does Dent Arena offer out-of-hours emergency care?",
    answer:
      "Emergency availability and out-of-hours arrangements are confirmed directly by the clinic. Please call or message to ask about the current arrangement rather than relying on this page.",
  },
  {
    topic: "preventive",
    question: "How often should I have a check-up?",
    answer:
      "Recall intervals are individual. They depend on your gum health, decay risk, habits and medical history, so your dentist will agree an interval with you rather than applying a fixed rule.",
  },
  {
    topic: "preventive",
    question: "What does professional teeth cleaning involve?",
    answer:
      "Scaling removes hardened deposits that brushing cannot, and polishing smooths the tooth surfaces. It is a preventive procedure aimed at gum health; whether you need it, and how often, depends on examination findings.",
  },
  {
    topic: "preventive",
    question: "Will cleaning make my teeth sensitive or loose?",
    answer:
      "Short-lived sensitivity after cleaning is common and usually settles. Cleaning does not loosen healthy teeth; where teeth already feel loose, that is generally a sign of existing gum or bone changes that need assessment.",
  },
  {
    topic: "preventive",
    question: "Do I still need to see a dentist if nothing hurts?",
    answer:
      "Yes. Early decay and gum disease are often painless, and X-rays and examination can pick up changes long before symptoms appear.",
  },
  {
    topic: "treatments",
    question: "What is a root canal treatment for?",
    answer:
      "Root canal treatment is used when the pulp inside a tooth is inflamed or infected. The pulp space is cleaned, shaped and sealed so the tooth can be kept rather than removed. Whether it is suitable in your case depends on examination and X-rays.",
  },
  {
    topic: "treatments",
    question: "Is treatment painful?",
    answer:
      "Local anaesthesia is normally used so that treatment itself is comfortable, and discomfort afterwards is usually manageable. Experiences differ from person to person, so we do not describe any procedure as completely painless.",
  },
  {
    topic: "treatments",
    question: "Am I a candidate for dental implants?",
    answer:
      "Implant suitability depends on bone volume and quality, gum health, general health, habits such as smoking, and the position of the gap. This can only be judged after a clinical examination and appropriate imaging.",
  },
  {
    topic: "treatments",
    question: "Braces or clear aligners \u2014 which is better?",
    answer:
      "Both move teeth, and each suits different situations. Fixed braces handle a wider range of complex movements; aligners are removable and less visible but depend heavily on wearing them as instructed. An orthodontic assessment is needed before recommending either.",
  },
  {
    topic: "treatments",
    question: "Does teeth whitening work for everyone?",
    answer:
      "Whitening lightens natural tooth structure, and results vary with the cause of the discolouration. It does not change the colour of fillings, crowns or veneers, and some stains respond poorly. A dentist should check the cause of discolouration first.",
  },
  {
    topic: "treatments",
    question: "How long will my treatment take?",
    answer:
      "Appointment counts and overall timelines depend on the diagnosis, the number of teeth involved and how your tissues respond, so exact durations are not quoted online. Your dentist will outline an expected plan after examining you.",
  },
  {
    topic: "aftercare",
    question: "What can I expect after treatment?",
    answer:
      "It depends on the procedure. Mild soreness, sensitivity to hot and cold, or tenderness around the gums for a few days is common after many treatments. You will be given aftercare instructions specific to what was done.",
  },
  {
    topic: "aftercare",
    question: "When should I contact the clinic after a procedure?",
    answer:
      "Get in touch if pain increases rather than settles, if swelling develops or spreads, if bleeding does not stop with gentle pressure, if a temporary restoration comes away, or if your bite feels uneven.",
  },
  {
    topic: "aftercare",
    question: "How do I look after my teeth between visits?",
    answer:
      "Brush twice daily with a fluoride toothpaste, clean between the teeth daily, limit how often you have sugary food and drink, and avoid tobacco. Your dentist may add advice specific to your risk profile.",
  },
  {
    topic: "payments",
    question: "What does a consultation cost?",
    answer:
      "Fees, payment methods and any instalment arrangements are confirmed by the clinic and are not published here, because they depend on what is needed. Ask when you request an appointment and the team will explain the current position.",
  },
  {
    topic: "payments",
    question: "Will I be given an estimate before treatment starts?",
    answer:
      "Ask for one. Good practice is for the dentist to explain the findings, the options and what each option involves before you decide, so please raise any questions about scope or cost at that point.",
  },
  {
    topic: "payments",
    question: "Is my information stored when I use the WhatsApp form?",
    answer:
      "No. The form on this website runs entirely in your browser. It only prepares a message and opens WhatsApp \u2014 nothing is saved on this site or sent to a server by it.",
  },
  {
    topic: "payments",
    question: "Can I get a copy of my records or X-rays?",
    answer:
      "Ask the clinic directly. Records are held by the practice, and the team can explain what can be shared and how.",
  },
];

export function faqsByTopic(topic: string): Faq[] {
  return generalFaqs.filter((faq) => faq.topic === topic);
}
