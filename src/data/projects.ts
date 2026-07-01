import { business, brandName } from "@/data/business";

export type ProjectPage = {
  slug: string;
  title: string;
  description: string;
  intro: string;
  details: string;
  highlights: string[];
  serviceType: string;
  location: string;
  image: string;
  imageAlt: string;
};

const brand = brandName();
const { assets } = business;

export const projects: ProjectPage[] = [
  {
    slug: "industrial-steel-building-installation",
    title: "Industrial Steel Building Installation",
    description: `A recent industrial steel building installation completed by ${brand}, delivering a strong, reliable structure for the customer.`,
    intro: `${brand} completed another quality steel build for a customer needing extra industrial space, supplying and constructing the building from start to finish.`,
    details: `The project involved manufacturing a cold rolled steel frame to the customer's specification, delivering it to site and constructing the building with our own team. As with all our industrial projects, materials were inspected before dispatch and the build was completed to a professional standard. ${brand} has delivered similar industrial installations for businesses across ${business.region} over 16 years in the industry.`,
    highlights: [
      "Cold rolled steel frame manufactured to specification",
      "Delivered to site and constructed by our own team",
      "Materials inspected before dispatch",
      "Completed to a professional, reliable standard",
    ],
    serviceType: "Industrial Steel Buildings",
    location: "Scotland",
    image: assets.gallery[0],
    imageAlt: `Industrial steel building installation completed by ${brand}`,
  },
  {
    slug: "agricultural-steel-building-project",
    title: "Agricultural Steel Building Project",
    description: `An agricultural steel building constructed by ${brand} for a rural customer needing durable extra space.`,
    intro: `${brand} designed and built an agricultural steel building for a rural customer, giving them a durable, weatherproof space suited to farm use.`,
    details: `The building was manufactured using cold rolled steel profiles for a strong strength-to-weight ratio, then delivered to site and erected by our team. Agricultural projects like this are among the buildings ${brand} has delivered over 16 years of experience, alongside work for companies such as Arnold Clark, Nissan and Diageo.`,
    highlights: [
      "Durable cold rolled steel frame suited to farm conditions",
      "Manufactured, delivered and erected by our own team",
      "Practical, cost-effective agricultural solution",
      "Backed by 16 years of steel construction experience",
    ],
    serviceType: "Agricultural Steel Buildings",
    location: "Scotland",
    image: assets.gallery[1],
    imageAlt: `Agricultural steel building constructed by ${brand}`,
  },
  {
    slug: "aircraft-hangar-steel-structure",
    title: "Aircraft Hangar Steel Structure",
    description: `${brand} has previously supplied and constructed aircraft hangars as part of our 16 years in the steel building industry.`,
    intro: `Among the specialist projects ${brand} has delivered over 16 years in business are aircraft hangars, requiring large clear-span steel structures built to a precise specification.`,
    details: `Aircraft hangar projects call for large, strong steel structures with wide clear spans and specific door and access requirements. ${brand} has supplied and constructed hangar buildings as part of a client list that has also included Arnold Clark, Nissan, caravan park companies and private clients across the UK.`,
    highlights: [
      "Large clear-span steel structure",
      "Built to precise aviation access specifications",
      "Part of a client list including major UK companies",
      "Delivered as part of 16 years of steel construction experience",
    ],
    serviceType: "Industrial Steel Buildings",
    location: "UK-wide",
    image: assets.gallery[2],
    imageAlt: `Large steel structure built by ${brand}`,
  },
  {
    slug: "workshop-storage-building",
    title: "Workshop & Storage Steel Building",
    description: `A new workshop and storage steel building supplied and constructed by ${brand} for a customer expanding their space.`,
    intro: `${brand} built a combined workshop and storage steel building for a customer looking to expand their working space and keep equipment secure.`,
    details: `The building was specified to give the customer a dedicated workshop area alongside secure storage, manufactured to size and delivered to site before construction by our own team. Whether it's a new workshop, extra storage space or a garage at home, ${brand} works with customers to make their vision happen.`,
    highlights: [
      "Combined workshop and secure storage space",
      "Manufactured to the customer's size requirements",
      "Delivered to site and constructed by our own team",
      "Free quote provided before work began",
    ],
    serviceType: "Workshop Buildings",
    location: "Scotland",
    image: assets.gallery[3],
    imageAlt: `Workshop and storage steel building built by ${brand}`,
  },
];

export const getProjectBySlug = (slug: string) =>
  projects.find((project) => project.slug === slug);
