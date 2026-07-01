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
    answer: `Yes. Contact ${brand} by phone or message with details of your project and we aim to reply within 24 hours with a free quote.`,
  },
  {
    question: "What areas do you cover?",
    answer: `${brand} is based in ${cities} and travels nationwide across ${business.region}, from Scotland all the way down to Dover.`,
  },
  {
    question: "What steel buildings do you supply?",
    answer: `${brand} supplies and constructs industrial units, agricultural buildings, workshops, garages and storage buildings, along with cladding, purlins, fixing systems and aluminium roller doors.`,
  },
  {
    question: "How do I get started?",
    answer: `Call ${brand}, message us on Facebook, or use the contact form with a brief description of your project, its intended use and your location.`,
  },
  {
    question: "How long does it take to get a steel building built?",
    answer: "Buildings are typically manufactured and delivered to site in 4-6 working weeks from receipt of order and final approval of size and colour.",
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
