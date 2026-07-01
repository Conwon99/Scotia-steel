import { business, brandName } from "@/data/business";
import { categories } from "@/data/categories";

export type LocationFaq = {
  question: string;
  answer: string;
};

export type LocationPage = {
  slug: string;
  name: string;
  shortName?: string;
  title: string;
  description: string;
  intro: string;
  nearby: string[];
  locationFaqs: LocationFaq[];
};

const brand = brandName();
const categoryNames = categories.map((c) => c.name).join(", ");

const makeLocationFaqs = (name: string): LocationFaq[] => [
  {
    question: `Do you cover ${name}?`,
    answer: `Yes. ${brand} provides ${categoryNames.toLowerCase()} in ${name} and nearby areas. Get in touch to confirm availability for your property.`,
  },
  {
    question: `What services do you carry out in ${name}?`,
    answer: `${brand} helps customers in ${name} with grass cutting, hedge trimming, weed control, garden maintenance and flat-pack assembly.`,
  },
  {
    question: `How do I get a quote for work in ${name}?`,
    answer: `Contact ${brand} by phone, message or WhatsApp with a brief description of the work and your location in ${name}. Photos are helpful. Free quotes are available.`,
  },
  {
    question: `Do you serve areas near ${name}?`,
    answer: `Yes. ${brand} covers ${name} and surrounding towns across ${business.region}. If you are nearby, get in touch and we can confirm coverage.`,
  },
  {
    question: `Is there a grass cutting contractor near ${name}?`,
    answer: `Yes. ${brand} is a local contractor serving ${name} and nearby areas with free quotes across ${business.region}.`,
  },
];

const locationEntries = [
  {
    slug: "paisley",
    name: business.primaryCity,
    description: `${brand} provides grass cutting, hedge trimming and garden maintenance in ${business.primaryCity} and surrounding communities.`,
    intro: `For customers in ${business.primaryCity}, ${brand} provides reliable grass cutting and garden maintenance, with a fast response and free quotes.`,
    nearby: ["Renfrew", "Johnstone", "Linwood", "Elderslie"],
  },
  {
    slug: "renfrew",
    name: "Renfrew",
    description: `${brand} provides grass cutting, hedge trimming and garden maintenance in Renfrew and nearby areas.`,
    intro: `${brand} helps homeowners in Renfrew with practical garden work and free quotes, from grass cutting to hedge trimming.`,
    nearby: [business.primaryCity, "Erskine", business.secondaryCity],
  },
  {
    slug: "johnstone",
    name: "Johnstone",
    description: `${brand} provides grass cutting, hedge trimming and garden maintenance in Johnstone and surrounding areas.`,
    intro: `${brand} supports Johnstone customers with reliable grass cutting, weeding and garden maintenance.`,
    nearby: [business.primaryCity, "Linwood", "Kilbarchan", "Howwood"],
  },
  {
    slug: "glasgow",
    name: business.secondaryCity,
    description: `${brand} provides grass cutting, hedge trimming and garden maintenance in ${business.secondaryCity} and nearby areas.`,
    intro: `${brand} helps homeowners and businesses in ${business.secondaryCity} with practical garden work and free quotes.`,
    nearby: [business.primaryCity, "Renfrew", "Barrhead"],
  },
  {
    slug: "barrhead",
    name: "Barrhead",
    description: `${brand} provides grass cutting, hedge trimming and garden maintenance in Barrhead and surrounding areas.`,
    intro: `${brand} supports Barrhead customers with reliable grass cutting and garden tidy-ups.`,
    nearby: [business.primaryCity, business.secondaryCity, "Elderslie"],
  },
  {
    slug: "erskine",
    name: "Erskine",
    description: `${brand} provides grass cutting, hedge trimming and garden maintenance in Erskine and nearby areas.`,
    intro: `${brand} helps Erskine customers keep gardens tidy with grass cutting, hedge trimming and weed control.`,
    nearby: ["Renfrew", "Bridge of Weir", business.primaryCity],
  },
  {
    slug: "linwood",
    name: "Linwood",
    description: `${brand} provides grass cutting, hedge trimming and garden maintenance in Linwood and surrounding areas.`,
    intro: `${brand} supports Linwood customers with reliable, cheap garden maintenance and free quotes.`,
    nearby: [business.primaryCity, "Johnstone", "Elderslie"],
  },
  {
    slug: "bridge-of-weir",
    name: "Bridge of Weir",
    description: `${brand} provides grass cutting, hedge trimming and garden maintenance in Bridge of Weir and nearby areas.`,
    intro: `${brand} helps Bridge of Weir customers with garden tidy-ups, hedge trimming and grass cutting.`,
    nearby: ["Kilbarchan", "Erskine", "Howwood"],
  },
  {
    slug: "kilbarchan",
    name: "Kilbarchan",
    description: `${brand} provides grass cutting, hedge trimming and garden maintenance in Kilbarchan and surrounding areas.`,
    intro: `${brand} supports Kilbarchan customers with reliable garden maintenance and free quotes.`,
    nearby: ["Johnstone", "Bridge of Weir", "Howwood"],
  },
  {
    slug: "howwood",
    name: "Howwood",
    description: `${brand} provides grass cutting, hedge trimming and garden maintenance in Howwood and nearby areas.`,
    intro: `${brand} helps Howwood customers keep gardens tidy with grass cutting and hedge trimming.`,
    nearby: ["Johnstone", "Kilbarchan", "Lochwinnoch"],
  },
  {
    slug: "elderslie",
    name: "Elderslie",
    description: `${brand} provides grass cutting, hedge trimming and garden maintenance in Elderslie and surrounding areas.`,
    intro: `${brand} supports Elderslie customers with reliable, cheap garden maintenance and free quotes.`,
    nearby: [business.primaryCity, "Linwood", "Johnstone"],
  },
  {
    slug: "lochwinnoch",
    name: "Lochwinnoch",
    description: `${brand} provides grass cutting, hedge trimming and garden maintenance in Lochwinnoch and nearby areas.`,
    intro: `${brand} helps Lochwinnoch customers with garden tidy-ups, hedge trimming and grass cutting.`,
    nearby: ["Howwood", "Kilbarchan", "Bridge of Weir"],
  },
];

export const locations: LocationPage[] = locationEntries.map((location) => ({
  ...location,
  title: `Grass Cutting & Garden Maintenance in ${location.name} | ${brand}`,
  locationFaqs: makeLocationFaqs(location.name),
}));

export const getNearbyLocationLinks = (location: LocationPage) =>
  location.nearby
    .map((name) => locations.find((item) => item.name === name))
    .filter((item): item is LocationPage => Boolean(item));

export const getLocationBySlug = (slug: string) =>
  locations.find((location) => location.slug === slug);
