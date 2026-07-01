import { services, type ServicePage } from "@/data/services";
import { business, brandName, citiesLabel } from "@/data/business";

export type LocationServiceFaq = {
  question: string;
  answer: string;
};

export type ServiceCategory = {
  slug: string;
  name: string;
  title: string;
  description: string;
  intro: string;
  localParagraph: string;
  image: string;
  imageAlt: string;
  serviceSlugs: string[];
  /** Matrix page SEO fields — used by locationServices.ts */
  matrixTitleSuffix: string;
  serviceNameLower: string;
  contractorPhrase: string;
  nearMePhrase: string;
  metaTemplate: (displayName: string) => string;
  introTemplate: (town: string) => string;
  localTemplate: (town: string, nearby: string[]) => string;
  bodyTemplate: (town: string) => string;
  faqTemplates: (town: string) => LocationServiceFaq[];
};

const brand = brandName();
const cities = citiesLabel();
const { assets, region } = business;

export const categories: ServiceCategory[] = [
  {
    slug: "industrial-agricultural-steel-buildings-scotland-northern-england",
    name: "Industrial & Agricultural Steel Buildings",
    title: `Industrial & Agricultural Steel Buildings in ${cities}`,
    description: `Industrial units, agricultural buildings and aircraft hangars supplied and constructed across ${cities} and nationwide across ${region}.`,
    intro: `${brand} has 16 years of experience supplying and constructing industrial and agricultural steel buildings for businesses across ${region}, including previous work for companies such as Arnold Clark, Nissan and Diageo.`,
    localParagraph: `Businesses across ${cities} need steel buildings that stand up to the local climate and can be manufactured and delivered to site in 4-6 working weeks. ${brand} travels nationwide, from Scotland all the way down to Dover, to deliver strong, reliable builds.`,
    image: assets.gallery[0],
    imageAlt: `Industrial steel building constructed by ${brand}`,
    serviceSlugs: ["industrial-steel-buildings", "agricultural-steel-buildings"],
    matrixTitleSuffix: "Industrial & Agricultural Steel Buildings",
    serviceNameLower: "industrial and agricultural steel buildings",
    contractorPhrase: "contractor",
    nearMePhrase: "steel building contractor near me",
    metaTemplate: (displayName) =>
      `Industrial and agricultural steel buildings in ${displayName} by ${brand}. 16 years' experience and free quotes across ${region}.`,
    introTemplate: (town) =>
      `${brand} supplies and constructs industrial units, agricultural buildings and bespoke steel structures for customers in ${town}. Buildings are manufactured to your requirements and erected by our own experienced teams.`,
    localTemplate: (town, nearby) =>
      `Businesses in ${town} need steel buildings that are quick to erect and built to last. If you are searching for a steel building contractor near ${town}, ${brand} covers ${town} and nearby areas including ${nearby.slice(0, 3).join(", ") || "surrounding towns"}.`,
    bodyTemplate: (town) =>
      `From industrial units to agricultural buildings, ${brand} helps businesses in ${town} with cold rolled steel structures manufactured and delivered to site in 4-6 working weeks. Our teams handle the full construction, not just the supply. Contact ${brand} for a free quote in ${town}.`,
    faqTemplates: (town) => [
      {
        question: `Do you supply and build industrial steel buildings in ${town}?`,
        answer: `Yes. ${brand} supplies and constructs industrial and agricultural steel buildings in ${town} and nearby areas. Free quotes are available.`,
      },
      {
        question: `How long does a steel building take to arrive in ${town}?`,
        answer: `Buildings are typically manufactured and delivered to site in 4-6 working weeks from receipt of order and final approval of size and colour.`,
      },
      {
        question: `How do I get a quote for a steel building in ${town}?`,
        answer: `Call ${brand} or use the contact form with a brief description of the building and your location in ${town}. We aim to reply to all quote requests within 24 hours.`,
      },
    ],
  },
  {
    slug: "commercial-bespoke-steel-buildings-scotland-northern-england",
    name: "Commercial & Bespoke Steel Buildings",
    title: `Commercial & Bespoke Steel Buildings in ${cities}`,
    description: `Workshops, garages and bespoke steel structures supplied and built across ${cities} and nationwide across ${region}.`,
    intro: `${brand} builds workshops, garages and bespoke steel structures for businesses expanding, adding storage, or starting a new project across ${region}.`,
    localParagraph: `Whether you are expanding a business, adding extra storage or building a garage at home in ${cities}, ${brand} can make it happen with a strong, professional build.`,
    image: assets.gallery[2],
    imageAlt: `Commercial steel workshop building by ${brand}`,
    serviceSlugs: ["workshop-buildings", "garages-storage-buildings"],
    matrixTitleSuffix: "Commercial & Bespoke Steel Buildings",
    serviceNameLower: "commercial and bespoke steel buildings",
    contractorPhrase: "specialist",
    nearMePhrase: "steel building company near me",
    metaTemplate: (displayName) =>
      `Commercial and bespoke steel buildings in ${displayName} by ${brand}. Workshops, garages and storage buildings with free quotes across ${region}.`,
    introTemplate: (town) =>
      `${brand} designs and constructs workshops, garages and bespoke steel buildings in ${town}, tailored to your vision and budget.`,
    localTemplate: (town, nearby) =>
      `Whatever your vision for a new workshop, garage or storage building in ${town}, ${brand} can make it happen. If you are searching for a steel building company near ${town}, ${brand} covers ${town} and nearby areas including ${nearby.slice(0, 3).join(", ") || "surrounding towns"}.`,
    bodyTemplate: (town) =>
      `${brand} works with customers in ${town} from initial quote through to a completed workshop, garage or bespoke steel building. No job is too big or too small. Contact ${brand} for a free quote in ${town}.`,
    faqTemplates: (town) => [
      {
        question: `Can you build a workshop or garage in ${town}?`,
        answer: `Yes. ${brand} builds workshops, garages and storage buildings in ${town} and nearby areas.`,
      },
      {
        question: `Do you handle bespoke or one-off steel building projects in ${town}?`,
        answer: `Yes. ${brand} takes on bespoke projects of any size in ${town}. Get in touch to discuss your vision.`,
      },
    ],
  },
  {
    slug: "steel-cladding-building-components-scotland-northern-england",
    name: "Steel Cladding & Building Components",
    title: `Steel Cladding & Building Components in ${cities}`,
    description: `Metal cladding, purlins, fixing systems and aluminium roller doors supplied across ${cities} and nationwide across ${region}.`,
    intro: `${brand} supplies a range of metal cladding, real wood cladding, cold rolled purlin and rail solutions, fixing systems and aluminium roller doors for steel buildings across ${region}.`,
    localParagraph: `${brand} works with Omega Steel Buildings as our supply chain, so customers across ${cities} benefit from materials that are inspected before being dispatched or collected from our collection point in the Midlands.`,
    image: assets.gallery[4],
    imageAlt: `Steel cladding and building components supplied by ${brand}`,
    serviceSlugs: ["steel-cladding-installation", "roller-doors-components"],
    matrixTitleSuffix: "Steel Cladding & Building Components",
    serviceNameLower: "steel cladding and building components",
    contractorPhrase: "supplier",
    nearMePhrase: "steel cladding supplier near me",
    metaTemplate: (displayName) =>
      `Steel cladding and building components in ${displayName} by ${brand}. Metal cladding, purlins and roller doors with free quotes across ${region}.`,
    introTemplate: (town) =>
      `${brand} supplies and installs metal cladding, purlins, fixing systems and aluminium roller doors for steel buildings in ${town}.`,
    localTemplate: (town, nearby) =>
      `Getting the right cladding and components matters for a steel building's longevity in ${town}. If you are searching for a steel cladding supplier near ${town}, ${brand} covers ${town} and nearby areas including ${nearby.slice(0, 3).join(", ") || "surrounding towns"}.`,
    bodyTemplate: (town) =>
      `${brand} supplies metal cladding, real wood cladding, cold rolled purlin and rail solutions, fixing systems and leading aluminium roller doors for steel buildings in ${town}. All materials are inspected before dispatch. Contact ${brand} for a free quote in ${town}.`,
    faqTemplates: (town) => [
      {
        question: `Do you supply cladding for existing steel buildings in ${town}?`,
        answer: `Yes. ${brand} supplies metal and real wood cladding, purlins and fixing systems for steel buildings in ${town} and nearby areas.`,
      },
      {
        question: `Can you supply and fit roller doors in ${town}?`,
        answer: `Yes. ${brand} is a distributor of leading aluminium roller door manufacturers and can supply and fit doors in ${town}.`,
      },
    ],
  },
];

export const getCategoryBySlug = (slug: string) =>
  categories.find((category) => category.slug === slug);

export const getCategoryForService = (serviceSlug: string) =>
  categories.find((category) => category.serviceSlugs.includes(serviceSlug));

export const getServicesForCategory = (category: ServiceCategory): ServicePage[] =>
  category.serviceSlugs
    .map((slug) => services.find((service) => service.slug === slug))
    .filter((service): service is ServicePage => Boolean(service));

export const getRelatedServices = (serviceSlug: string): ServicePage[] => {
  const category = getCategoryForService(serviceSlug);
  if (!category) return [];
  return getServicesForCategory(category).filter((service) => service.slug !== serviceSlug);
};

export const getFormServiceOptions = (): string[] => [
  ...categories.map((category) => category.name),
  ...services.filter((service) => service.slug !== "free-quotes").map((service) => service.shortTitle),
  "Other / Not Sure",
];
