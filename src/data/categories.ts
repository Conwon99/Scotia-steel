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
    slug: "grass-cutting-garden-maintenance-paisley-glasgow",
    name: "Grass Cutting & Garden Maintenance",
    title: `Grass Cutting & Garden Maintenance in ${cities}`,
    description: `Regular grass cutting and garden maintenance across ${cities} and surrounding areas. Cheap, reliable and tidy every visit.`,
    intro: `${brand} cuts grass and keeps gardens tidy for homes across ${region}. Work is carried out reliably with fair prices and free quotes.`,
    localParagraph: `Gardens across ${cities} and nearby towns grow quickly through spring and summer, and can be left looking overgrown after just a few weeks. ${brand} works locally and can get your grass cut and garden tidied at short notice.`,
    image: assets.gallery[0],
    imageAlt: `Grass cutting and garden maintenance by ${brand} in ${business.primaryCity}`,
    serviceSlugs: ["grass-cutting", "garden-maintenance"],
    matrixTitleSuffix: "Grass Cutting & Garden Maintenance",
    serviceNameLower: "grass cutting and garden maintenance",
    contractorPhrase: "contractor",
    nearMePhrase: "grass cutting near me",
    metaTemplate: (displayName) =>
      `Grass cutting and garden maintenance in ${displayName} by ${brand}. Cheap, reliable service and free quotes across ${region}.`,
    introTemplate: (town) =>
      `${brand} provides regular grass cutting and garden maintenance in ${town}. Whether your lawn has not been cut for weeks or you need an ongoing service, jobs are completed quickly with free quotes.`,
    localTemplate: (town, nearby) =>
      `Gardens in ${town} can quickly become overgrown during the grass cutting season. If you are searching for a grass cutting contractor near ${town}, ${brand} covers ${town} and nearby areas including ${nearby.slice(0, 3).join(", ") || "surrounding towns"}.`,
    bodyTemplate: (town) =>
      `From one-off cuts to regular garden maintenance, ${brand} helps customers in ${town} keep their outdoor space tidy all year round. Grass cutting, weeding and general tidy-ups can all be arranged in one visit. Contact ${brand} for a free quote in ${town}.`,
    faqTemplates: (town) => [
      {
        question: `Do you cut grass in ${town}?`,
        answer: `Yes. ${brand} carries out grass cutting and garden maintenance in ${town} and nearby areas. Free quotes are available.`,
      },
      {
        question: `Can you take on a garden that has been left for a while in ${town}?`,
        answer: `Yes. ${brand} regularly tackles overgrown gardens in ${town} and can usually get out within a few days.`,
      },
      {
        question: `How do I get a quote for grass cutting in ${town}?`,
        answer: `Call ${brand} or use the contact form with a brief description and your location in ${town}. There is no obligation to proceed.`,
      },
    ],
  },
  {
    slug: "hedge-trimming-weed-control-paisley-glasgow",
    name: "Hedge Trimming & Weed Control",
    title: `Hedge Trimming & Weed Control in ${cities}`,
    description: `Hedge trimming, cutting down and weed removal across ${cities} and surrounding areas. Tidy finishing every time.`,
    intro: `${brand} trims and cuts down hedges and clears weeds so gardens across ${region} look neat and well cared for.`,
    localParagraph: `Hedges and weeds in ${cities} and nearby towns can get out of hand quickly, especially in the growing season. ${brand} helps local customers stay on top of it without the hassle.`,
    image: assets.gallery[2],
    imageAlt: `Hedge trimming and weed control by ${brand}`,
    serviceSlugs: ["hedge-trimming", "weed-control"],
    matrixTitleSuffix: "Hedge Trimming & Weed Control",
    serviceNameLower: "hedge trimming and weed control",
    contractorPhrase: "specialist",
    nearMePhrase: "hedge trimming near me",
    metaTemplate: (displayName) =>
      `Hedge trimming and weed control in ${displayName} by ${brand}. De-weeding and tidy hedges with free quotes across ${region}.`,
    introTemplate: (town) =>
      `${brand} provides hedge trimming and weed control in ${town}, cutting hedges back and clearing weeds so the garden looks tidy again.`,
    localTemplate: (town, nearby) =>
      `Overgrown hedges and weeds are common across ${town} through the growing season. If you are searching for hedge trimming near ${town}, ${brand} covers ${town} and nearby areas including ${nearby.slice(0, 3).join(", ") || "surrounding towns"}.`,
    bodyTemplate: (town) =>
      `${brand} trims, shapes or cuts hedges right down in ${town}, and clears de-weeding jobs so borders and paths are tidy again. Cuttings and weeds are cleared away so you are not left with the mess. Contact ${brand} for a free quote in ${town}.`,
    faqTemplates: (town) => [
      {
        question: `Do you offer hedge trimming near me in ${town}?`,
        answer: `Yes. ${brand} trims and cuts down hedges in ${town} and nearby areas. Get in touch for a free quote.`,
      },
      {
        question: `Can you clear a very overgrown or weedy garden in ${town}?`,
        answer: `Yes. ${brand} regularly clears weeds and overgrown borders in ${town} and leaves the area tidy.`,
      },
    ],
  },
  {
    slug: "flat-pack-assembly-paisley-glasgow",
    name: "Flat-Pack Assembly",
    title: `Flat-Pack Assembly in ${cities}`,
    description: `Flat-packed furniture, beds and outdoor buildings assembled across ${cities} and surrounding areas.`,
    intro: `${brand} builds flat-packed furniture, beds and outdoor buildings for customers across ${region} who would rather not tackle it themselves.`,
    localParagraph: `Flat-pack furniture and garden buildings can take hours to put together without the right tools or experience. ${brand} helps customers across ${cities} get it built quickly and properly.`,
    image: assets.gallery[4],
    imageAlt: `Flat-pack furniture assembly by ${brand}`,
    serviceSlugs: ["flat-pack-assembly"],
    matrixTitleSuffix: "Flat-Pack Assembly",
    serviceNameLower: "flat-pack assembly",
    contractorPhrase: "handyman",
    nearMePhrase: "flat-pack assembly near me",
    metaTemplate: (displayName) =>
      `Flat-pack furniture and building assembly in ${displayName} by ${brand}. Fast, reliable service and free quotes across ${region}.`,
    introTemplate: (town) =>
      `${brand} builds flat-packed furniture, beds and outdoor buildings in ${town}, so you don't have to spend your weekend doing it yourself.`,
    localTemplate: (town, nearby) =>
      `Whether it's a new bed, wardrobe or garden building, flat-pack assembly takes time to get right. If you are searching for flat-pack assembly near ${town}, ${brand} covers ${town} and nearby areas including ${nearby.slice(0, 3).join(", ") || "surrounding towns"}.`,
    bodyTemplate: (town) =>
      `${brand} has built flat-packed units, beds and outdoor buildings for customers across ${town} and the surrounding area. Packaging is cleared away once the job is done. Contact ${brand} for a free quote in ${town}.`,
    faqTemplates: (town) => [
      {
        question: `Do you build flat-pack furniture in ${town}?`,
        answer: `Yes. ${brand} assembles flat-packed furniture, beds and outdoor buildings in ${town} and nearby areas.`,
      },
      {
        question: `Can you assemble a flat-packed garden building in ${town}?`,
        answer: `Yes. ${brand} can price and build flat-packed outdoor buildings in ${town}. Get in touch for a free quote.`,
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
