import { brandName, business, citiesLabel } from "@/data/business";

export type FaqItem = {
  question: string;
  answer: string;
};

const brand = brandName();
const cities = citiesLabel();

export const homepageFaqs: FaqItem[] = [
  {
    question: "Do you offer free quotes?",
    answer: `Yes. Contact ${brand} by phone, message or WhatsApp with details of your garden and we can discuss a free, no-obligation quote.`,
  },
  {
    question: "What areas do you cover?",
    answer: `${brand} serves ${cities} and surrounding areas in ${business.region}. If you are nearby, get in touch and we can confirm availability.`,
  },
  {
    question: "What services do you offer?",
    answer: `${brand} offers grass cutting, hedge trimming, weed control and de-weeding, general garden maintenance, and flat-pack furniture and shed assembly.`,
  },
  {
    question: "How do I get started?",
    answer: `Call ${brand}, pop us a message on Facebook or WhatsApp, or use the contact form with a brief description of the work and your location. Photos are helpful.`,
  },
];

export const buildFaqSchema = (faqs: FaqItem[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
});
