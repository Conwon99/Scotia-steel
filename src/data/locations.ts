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
    question: `Do you supply and build steel buildings in ${name}?`,
    answer: `Yes. ${brand} provides ${categoryNames.toLowerCase()} in ${name} and nearby areas. Get in touch to confirm availability for your project.`,
  },
  {
    question: `What types of steel buildings do you build in ${name}?`,
    answer: `${brand} builds industrial units, agricultural buildings, workshops, garages and storage buildings in ${name}, and supplies cladding, roller doors and components.`,
  },
  {
    question: `How do I get a quote for a steel building in ${name}?`,
    answer: `Contact ${brand} by phone or through the contact form with a brief description of the project and your location in ${name}. We aim to reply within 24 hours.`,
  },
  {
    question: `Do you serve areas near ${name}?`,
    answer: `Yes. ${brand} covers ${name} and travels nationwide across ${business.region}, from Scotland all the way down to Dover.`,
  },
  {
    question: `Is there a steel building contractor near ${name}?`,
    answer: `Yes. ${brand} is a Scotland-based contractor serving ${name} and nearby areas with free quotes and nationwide coverage.`,
  },
];

const locationEntries = [
  {
    slug: "glasgow",
    name: "Glasgow",
    description: `${brand} supplies and constructs steel buildings in Glasgow and the surrounding area.`,
    intro: `${brand} works with businesses and homeowners in Glasgow to supply and construct industrial, agricultural and bespoke steel buildings, with free quotes and 16 years of experience.`,
    nearby: ["Falkirk", "Kilmarnock", "Stirling"],
  },
  {
    slug: "edinburgh",
    name: "Edinburgh",
    description: `${brand} supplies and constructs steel buildings in Edinburgh and nearby areas.`,
    intro: `${brand} helps businesses in Edinburgh with industrial, commercial and bespoke steel buildings, backed by 16 years of experience.`,
    nearby: ["Livingston", "Falkirk", "Stirling"],
  },
  {
    slug: "aberdeen",
    name: "Aberdeen",
    description: `${brand} supplies and constructs steel buildings in Aberdeen and the surrounding area.`,
    intro: `${brand} supports Aberdeen businesses with industrial and agricultural steel buildings, cladding and components.`,
    nearby: ["Dundee", "Perth", "Inverness"],
  },
  {
    slug: "dundee",
    name: "Dundee",
    description: `${brand} supplies and constructs steel buildings in Dundee and nearby areas.`,
    intro: `${brand} helps Dundee businesses with industrial units, workshops and agricultural steel buildings.`,
    nearby: ["Perth", "Aberdeen", "Stirling"],
  },
  {
    slug: "perth",
    name: "Perth",
    description: `${brand} supplies and constructs steel buildings in Perth and the surrounding area.`,
    intro: `${brand} supports Perth businesses and landowners with steel buildings of all sizes, from workshops to agricultural units.`,
    nearby: ["Stirling", "Dundee", "Glasgow"],
  },
  {
    slug: "stirling",
    name: "Stirling",
    description: `${brand} supplies and constructs steel buildings in Stirling and nearby areas.`,
    intro: `${brand} helps Stirling businesses with industrial, commercial and bespoke steel buildings and free quotes.`,
    nearby: ["Glasgow", "Perth", "Falkirk"],
  },
  {
    slug: "inverness",
    name: "Inverness",
    description: `${brand} supplies and constructs steel buildings in Inverness and the surrounding Highlands.`,
    intro: `${brand} travels to Inverness and the Highlands to supply and construct agricultural and industrial steel buildings.`,
    nearby: ["Aberdeen", "Perth", "Dundee"],
  },
  {
    slug: "ayr",
    name: "Ayr",
    description: `${brand} supplies and constructs steel buildings in Ayr and nearby areas.`,
    intro: `${brand} helps Ayr businesses and landowners with steel buildings, from garages to industrial units.`,
    nearby: ["Kilmarnock", "Glasgow", "Dumfries"],
  },
  {
    slug: "falkirk",
    name: "Falkirk",
    description: `${brand} supplies and constructs steel buildings in Falkirk and the surrounding area.`,
    intro: `${brand} supports Falkirk businesses with industrial, commercial and bespoke steel buildings.`,
    nearby: ["Glasgow", "Edinburgh", "Stirling"],
  },
  {
    slug: "kilmarnock",
    name: "Kilmarnock",
    description: `${brand} supplies and constructs steel buildings in Kilmarnock and nearby areas.`,
    intro: `${brand} helps Kilmarnock businesses with steel buildings, cladding and components, backed by 16 years of experience.`,
    nearby: ["Glasgow", "Ayr", "Falkirk"],
  },
  {
    slug: "livingston",
    name: "Livingston",
    description: `${brand} supplies and constructs steel buildings in Livingston and the surrounding area.`,
    intro: `${brand} supports Livingston businesses with industrial and commercial steel buildings and free quotes.`,
    nearby: ["Edinburgh", "Falkirk", "Glasgow"],
  },
  {
    slug: "dumfries",
    name: "Dumfries",
    description: `${brand} supplies and constructs steel buildings in Dumfries and nearby areas.`,
    intro: `${brand} travels to Dumfries and Galloway to supply and construct agricultural and industrial steel buildings.`,
    nearby: ["Ayr", "Kilmarnock", "Glasgow"],
  },
];

export const locations: LocationPage[] = locationEntries.map((location) => ({
  ...location,
  title: `Steel Buildings in ${location.name} | ${brand}`,
  locationFaqs: makeLocationFaqs(location.name),
}));

export const getNearbyLocationLinks = (location: LocationPage) =>
  location.nearby
    .map((name) => locations.find((item) => item.name === name))
    .filter((item): item is LocationPage => Boolean(item));

export const getLocationBySlug = (slug: string) =>
  locations.find((location) => location.slug === slug);
