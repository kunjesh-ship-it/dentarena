import { placeholder, type Article } from "./types";

const reviewedBy = placeholder("Name and qualifications of the reviewing dentist");
const lastReviewed = placeholder("Date this article was last medically reviewed");

/** General dental health education. No clinic-specific claims. */
export const articles: Article[] = [
  {
    slug: "how-to-brush-and-clean-between-your-teeth",
    published: true,
    title: "How to brush and clean between your teeth properly",
    description:
      "A practical guide to daily cleaning: technique, timing, fluoride toothpaste and why cleaning between the teeth matters as much as brushing.",
    topic: "Everyday care",
    readingTime: "4 min read",
    datePublished: placeholder("Publication date"),
    body: [
      {
        heading: "Brushing: technique matters more than force",
        paragraphs: [
          "Most people brush for less time and with more pressure than they realise. Aim for two minutes, twice a day, with a soft or medium brush held at a slight angle towards the gum line, using small circular or short back-and-forth movements rather than long scrubbing strokes.",
          "Hard scrubbing does not remove more plaque. Over years it can contribute to gum recession and wear near the gum line, which is a common cause of sensitivity.",
        ],
        list: [
          "Two minutes, twice a day",
          "Soft or medium bristles, replaced when they splay",
          "Angle the bristles towards the gum line",
          "Spit after brushing rather than rinsing with water, so fluoride stays on the teeth",
        ],
      },
      {
        heading: "Cleaning between the teeth",
        paragraphs: [
          "A toothbrush cannot reach the surfaces between teeth, which is where decay and gum inflammation often begin. Interdental brushes, floss or water flossers each work \u2014 the best one is the one that fits your gaps and that you will actually use daily.",
          "If your gums bleed when you start cleaning between the teeth, that is usually a sign of existing inflammation rather than a reason to stop. Bleeding commonly settles within a couple of weeks of consistent cleaning. If it does not, have your gums assessed.",
        ],
      },
      {
        heading: "Fluoride and timing",
        paragraphs: [
          "Fluoride toothpaste is one of the most reliable ways to reduce decay risk. Check the concentration is appropriate for your age group, and supervise young children so only a small smear or pea-sized amount is used.",
          "Brushing before bed matters particularly, because saliva flow drops during sleep and offers less natural protection.",
        ],
      },
    ],
    relatedTreatmentSlugs: ["teeth-cleaning-and-polishing", "preventive-dental-check-up", "gum-treatment"],
    reviewedBy,
    lastReviewed,
  },
  {
    slug: "what-causes-tooth-sensitivity",
    published: true,
    title: "What causes tooth sensitivity, and when to get it checked",
    description:
      "Why teeth react to cold, sweet or air, which causes are harmless and which signs suggest you should see a dentist.",
    topic: "Symptoms",
    readingTime: "4 min read",
    datePublished: placeholder("Publication date"),
    body: [
      {
        heading: "Why teeth become sensitive",
        paragraphs: [
          "Sensitivity usually happens when the dentine \u2014 the layer beneath enamel \u2014 becomes exposed. Dentine contains tiny tubules that connect to the nerve, so temperature and sweetness can trigger a short, sharp response.",
          "Common reasons for exposure include gum recession, enamel wear from acidic drinks, grinding, and the period after professional cleaning or whitening.",
        ],
        list: [
          "Gum recession exposing root surfaces",
          "Acid erosion from frequent fizzy or citrus drinks",
          "Grinding or clenching wearing the biting surfaces",
          "A cracked tooth or a failing filling",
          "Temporary sensitivity after dental treatment",
        ],
      },
      {
        heading: "What usually helps",
        paragraphs: [
          "A sensitivity toothpaste used consistently, smeared on the sensitive area and left rather than rinsed away, helps many people over a few weeks. Reducing the frequency of acidic drinks and waiting before brushing after them also reduces wear.",
          "A night guard may be advised if grinding is contributing.",
        ],
      },
      {
        heading: "When sensitivity needs assessing",
        paragraphs: [
          "Short, sharp sensitivity that settles quickly is common. Pain that lingers after the cold has gone, pain on biting a single tooth, night pain, or sensitivity in one tooth that is getting worse are different \u2014 these can indicate decay, a crack or nerve inflammation and should be examined.",
        ],
      },
    ],
    relatedTreatmentSlugs: ["gum-treatment", "tooth-coloured-fillings", "root-canal-treatment"],
    reviewedBy,
    lastReviewed,
  },
  {
    slug: "preparing-for-your-first-dental-visit",
    published: true,
    title: "Preparing for your first dental visit",
    description:
      "What to bring, what an examination involves, and how to make a first appointment easier if you feel anxious about the dentist.",
    topic: "Visiting the dentist",
    readingTime: "3 min read",
    datePublished: placeholder("Publication date"),
    body: [
      {
        heading: "What to bring",
        paragraphs: [
          "Bring a list of any medicines you take, including supplements, and note any medical conditions, allergies or recent surgery. If you have had X-rays or treatment elsewhere recently, mention it \u2014 it can avoid repeating imaging unnecessarily.",
        ],
        list: [
          "A list of current medication",
          "Details of medical conditions and allergies",
          "Notes on any previous dental treatment",
          "Questions you would like answered",
        ],
      },
      {
        heading: "What usually happens",
        paragraphs: [
          "A first appointment is generally an examination rather than treatment. The dentist reviews your history, examines your teeth, gums, bite and soft tissues, and takes X-rays only if they are clinically justified. You then discuss what was found and what the options are.",
          "Nothing has to be decided in the chair. Ask for the plan and the costs in writing if that helps you think it over.",
        ],
      },
      {
        heading: "If you feel anxious",
        paragraphs: [
          "Say so at the start. Agreeing a simple stop signal, asking for each step to be described before it happens, and booking a first appointment that is examination-only are all reasonable requests that many people find make a real difference.",
        ],
      },
    ],
    relatedTreatmentSlugs: ["preventive-dental-check-up", "teeth-cleaning-and-polishing"],
    reviewedBy,
    lastReviewed,
  },
];

export const publishedArticles = articles.filter((a) => a.published);

export function getArticle(slug: string) {
  return publishedArticles.find((a) => a.slug === slug);
}
