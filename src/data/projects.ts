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
    slug: "overgrown-lawn-transformation-paisley",
    title: `Overgrown Lawn Transformation in ${business.primaryCity}`,
    description: `A lawn left uncut for two months was brought back under control by ${brand} in ${business.primaryCity} within the hour of being contacted.`,
    intro: `This job involved a garden in ${business.primaryCity} where the grass had not been cut for around two months. The customer got in touch and ${brand} was on site within the hour.`,
    details: `Long, overgrown grass can look like a big job, but with the right equipment ${brand} was able to cut the whole lawn back to a neat, even finish in a single visit. Clippings were cleared away and the edges tidied so the garden was left looking cared for. The customer has since booked in regular cuts to keep on top of it through the growing season.`,
    highlights: [
      "Two months of growth cut back in one visit",
      "Clippings cleared and edges tidied",
      "On site within the hour of first contact",
      "Customer booked in for regular cuts afterwards",
    ],
    serviceType: "Grass Cutting",
    location: business.primaryCity,
    image: assets.gallery[0],
    imageAlt: `Overgrown lawn cut and tidied by ${brand} in ${business.primaryCity}`,
  },
  {
    slug: "front-and-back-garden-tidy-up-glasgow",
    title: `Front & Back Garden Tidy-Up in ${business.secondaryCity}`,
    description: `A full front and back garden tidy-up for a returning customer in ${business.secondaryCity}, completed by ${brand}.`,
    intro: `${brand} returned for a repeat customer in ${business.secondaryCity} to cut and tidy both the front and back garden.`,
    details: `Both the front and back gardens needed grass cutting and a general tidy-up. Work was completed efficiently, with edges trimmed and the garden left looking sharp front and back. The customer has used ${brand} more than once and continues to book the team for regular garden maintenance.`,
    highlights: [
      "Front and back garden cut in a single visit",
      "Edges trimmed for a neat finish",
      "Repeat customer, booked more than once",
      "Fast, efficient service throughout",
    ],
    serviceType: "Garden Maintenance",
    location: business.secondaryCity,
    image: assets.gallery[1],
    imageAlt: `Front and back garden tidy-up completed by ${brand} in ${business.secondaryCity}`,
  },
  {
    slug: "hedge-trimming-foxbar-paisley",
    title: `Hedge Trimming in Foxbar, ${business.primaryCity}`,
    description: `Hedges trimmed and tidied for a returning customer in the Foxbar area of ${business.primaryCity}.`,
    intro: `${brand} carried out hedge trimming for a happy returning customer in Foxbar, ${business.primaryCity}.`,
    details: `The hedges had grown out since the last visit and needed shaping back into a neat, tidy line. ${brand} trimmed the hedges, cleared away all cuttings and left the garden looking sharp. The customer has since had further grass cutting and garden maintenance carried out.`,
    highlights: [
      "Overgrown hedges shaped and tidied",
      "All cuttings cleared away",
      "Returning customer, five-star service",
      "Combined with ongoing grass cutting",
    ],
    serviceType: "Hedge Trimming",
    location: business.primaryCity,
    image: assets.gallery[2],
    imageAlt: `Hedge trimming completed by ${brand} in Foxbar, ${business.primaryCity}`,
  },
  {
    slug: "weeding-garden-clearance-johnstone",
    title: "Weeding & Garden Clearance in Johnstone",
    description: `Weeds cleared from borders and paths as part of a garden clearance in Johnstone by ${brand}.`,
    intro: `A garden in Johnstone had become overrun with weeds through the borders and along the paths. ${brand} was called in to clear it back up.`,
    details: `De-weeding was carried out across the borders and paths, with all weeds removed from site. The garden was left tidy and much easier to maintain going forward. This kind of clearance is common heading into the grass cutting season, when gardens that have been left over winter need a proper tidy-up.`,
    highlights: [
      "Borders and paths cleared of weeds",
      "Weeds removed from site",
      "Garden left tidy and easier to maintain",
      "Completed ahead of the grass cutting season",
    ],
    serviceType: "Weed Control",
    location: "Johnstone",
    image: assets.gallery[3],
    imageAlt: `Weeding and garden clearance completed by ${brand} in Johnstone`,
  },
  {
    slug: "flat-pack-furniture-build-renfrew",
    title: "Flat-Pack Furniture Build in Renfrew",
    description: `Flat-packed beds and units built for a customer in Renfrew ahead of Christmas by ${brand}.`,
    intro: `${brand} was asked to build a number of flat-packed units and a bed for a customer in Renfrew ahead of the Christmas period.`,
    details: `The items were built on site from the original packaging, assembled securely and positioned as the customer wanted. All packaging was cleared away once the job was finished, leaving the room ready to use straight away. Flat-pack assembly jobs like this are popular in the run-up to Christmas, when customers want furniture built quickly without the hassle.`,
    highlights: [
      "Flat-packed bed and units built on site",
      "Assembled securely and positioned to order",
      "All packaging cleared away",
      "Completed ahead of the Christmas period",
    ],
    serviceType: "Flat-Pack Assembly",
    location: "Renfrew",
    image: assets.gallery[4],
    imageAlt: `Flat-pack furniture built by ${brand} in Renfrew`,
  },
];

export const getProjectBySlug = (slug: string) =>
  projects.find((project) => project.slug === slug);
