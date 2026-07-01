import { business, brandName, citiesLabel } from "@/data/business";

export type ServicePage = {
  slug: string;
  title: string;
  shortTitle: string;
  navTitle: string;
  parentCategorySlug: string | null;
  description: string;
  cardDescription: string;
  iconUrl: string;
  iconAlt: string;
  image: string;
  imageAlt: string;
  about: string;
  why: string;
  signsYouNeed: string;
  options: string;
  localContext: string;
  whatToExpect: string;
  whyChooseUs: string;
  benefits: string[];
  process: string[];
  faq: Array<{
    question: string;
    answer: string;
  }>;
};

const serviceIconBase = "https://c.animaapp.com/mial13ktyN5Jkh/assets";
const brand = brandName();
const cities = citiesLabel();
const { assets } = business;

export const services: ServicePage[] = [
  {
    slug: "industrial-steel-buildings",
    title: "Industrial Steel Buildings",
    shortTitle: "Industrial Buildings",
    navTitle: "Industrial Buildings",
    parentCategorySlug: "industrial-agricultural-steel-buildings-scotland-northern-england",
    description: `Industrial steel buildings supplied and constructed across ${cities} and ${business.region}. 16 years' experience with ${brand}.`,
    cardDescription: `Industrial units and warehouses supplied and built for businesses across ${cities} and surrounding areas.`,
    iconUrl: "https://c.animaapp.com/mhqqhnhjBr0jWt/assets/670f922acd8bf79374aa2c10_service-01.svg",
    iconAlt: "Industrial steel building icon",
    image: assets.gallery[0],
    imageAlt: `Industrial steel building supplied by ${brand}`,
    about: `${brand} has 16 years of experience supplying and constructing industrial steel buildings across ${business.region}. We don't just sell you the building — our own teams construct it too, having previously delivered buildings for companies including Arnold Clark, Nissan and Diageo.`,
    why: `Cold rolled steel frames give a better strength to weight ratio than many alternative construction methods, making industrial steel buildings a cost-effective, durable solution.`,
    signsYouNeed: `If your business is expanding, running out of storage or production space, or you are starting a brand-new industrial project, a steel building can give you the extra space you need without the cost and delay of traditional construction. Industrial units are also a practical option when an existing building is ageing or no longer fit for purpose.`,
    options: `${brand} manufactures cold rolled steel framed buildings for industrial use, with the occasional hot rolled structure where required. Buildings are sized and specified to your requirements, from small units to large industrial premises, with colour and cladding options to suit.`,
    localContext: `Businesses across ${cities} and ${business.region} rely on steel buildings that can be manufactured and delivered quickly. ${brand} travels nationwide — from Scotland all the way down to Dover — to deliver strong, reliable industrial builds.`,
    whatToExpect: `Get in touch with your requirements and ${brand} will talk through size, specification and budget. Our diverse back-room software makes quoting large or small buildings swift and easy. Once approved, buildings are typically manufactured and delivered to site in 4-6 working weeks, then constructed by our own experienced teams.`,
    whyChooseUs: `${brand} has 16 years of experience and a track record with well-known UK companies. We supply and construct — not just sell — and aim to reply to all quote requests within 24 hours.`,
    benefits: [
      "16 years of industrial steel building experience.",
      "Cold rolled steel frames with a strong weight-to-strength ratio.",
      "Manufactured and delivered to site in 4-6 working weeks.",
      `Free quotes across ${cities} and nationwide.`,
    ],
    process: [
      "Discuss your size, specification and budget requirements.",
      "Receive a swift, clear quotation for your building.",
      "Building manufactured and delivered to site in 4-6 working weeks.",
      "Construction completed by our own experienced teams.",
    ],
    faq: [
      {
        question: "How quickly can an industrial steel building be delivered?",
        answer: `Typically 4-6 working weeks from receipt of order and final approval of size, colour and specification.`,
      },
      {
        question: "Do you construct the building as well as supply it?",
        answer: `Yes. ${brand} supplies and constructs — our own teams carry out the build, not just the materials.`,
      },
      {
        question: `Do you offer a steel building contractor near me in ${business.primaryCity} or ${business.secondaryCity}?`,
        answer: `Yes. ${brand} supplies and constructs industrial steel buildings across ${cities} and nationwide UK. Contact us with your requirements for a free quote.`,
      },
    ],
  },
  {
    slug: "agricultural-steel-buildings",
    title: "Agricultural Steel Buildings",
    shortTitle: "Agricultural Buildings",
    navTitle: "Agricultural Buildings",
    parentCategorySlug: "industrial-agricultural-steel-buildings-scotland-northern-england",
    description: `Agricultural steel buildings supplied and constructed across ${cities} and ${business.region}. Free quotes from ${brand}.`,
    cardDescription: "Agricultural and farm steel buildings built to withstand demanding rural conditions.",
    iconUrl: `${serviceIconBase}/670f922a6c5c1d8102612221_service-02.svg`,
    iconAlt: "Agricultural steel building icon",
    image: assets.gallery[1],
    imageAlt: `Agricultural steel building constructed by ${brand}`,
    about: `${brand} supplies and constructs agricultural steel buildings across ${business.region}, from livestock and storage buildings to larger farm structures, drawing on 16 years of experience in the steel construction industry.`,
    why: "Steel framed agricultural buildings are durable, quick to erect and cost-effective compared with many traditional farm building methods.",
    signsYouNeed: "If existing farm buildings are ageing, too small for current needs, or you are starting a new agricultural venture, a steel building offers a practical, long-lasting solution. Steel buildings are also well suited to storage, machinery housing and livestock use.",
    options: `${brand} manufactures cold rolled steel framed agricultural buildings sized to your land and requirements, with cladding and fixing options to suit the use of the building. Larger or more complex structures can also be accommodated using hot rolled steel where needed.`,
    localContext: `Farms and rural businesses across ${cities} and ${business.region} need buildings that can handle demanding weather and ground conditions. ${brand} works nationwide, from Scotland down to Dover, to deliver reliable agricultural steel buildings.`,
    whatToExpect: `${brand} will discuss your land, intended use and budget, then provide a swift, clear quotation. Buildings are manufactured and delivered to site in around 4-6 working weeks, with construction carried out by our own teams.`,
    whyChooseUs: `With 16 years in the industry, ${brand} understands the practical demands of agricultural buildings and aims to reply to every quote request within 24 hours.`,
    benefits: [
      "Agricultural and farm steel buildings of any size.",
      "Durable cold rolled steel frames.",
      "Manufactured and delivered to site in 4-6 working weeks.",
      `Free quotes across ${cities} and nationwide.`,
    ],
    process: [
      "Discuss your land, intended use and budget.",
      "Receive a swift, clear quotation for the building.",
      "Building manufactured and delivered to site.",
      "Construction completed by our own experienced teams.",
    ],
    faq: [
      {
        question: "Can you build agricultural or farm buildings of any size?",
        answer: `Yes. ${brand} can price and construct agricultural steel buildings large or small.`,
      },
      {
        question: "How is a steel agricultural building priced?",
        answer: "Pricing depends on size, specification and cladding — get in touch for a free, swift quote.",
      },
    ],
  },
  {
    slug: "workshop-buildings",
    title: "Workshop Buildings",
    shortTitle: "Workshops",
    navTitle: "Workshops",
    parentCategorySlug: "commercial-bespoke-steel-buildings-scotland-northern-england",
    description: `Steel workshop buildings supplied and constructed in ${cities} and ${business.region}. Free quotes from ${brand}.`,
    cardDescription: "New workshop buildings, built strong and to your specification.",
    iconUrl: `${serviceIconBase}/670f922a0e27a271e441091e_service-03.svg`,
    iconAlt: "Workshop steel building icon",
    image: assets.gallery[2],
    imageAlt: `Steel workshop building constructed by ${brand}`,
    about: `${brand} builds workshop buildings for tradespeople and businesses across ${business.region}, giving customers a dedicated, weatherproof space to work from.`,
    why: "A purpose-built steel workshop gives you secure, durable space without the cost and delay of traditional brick construction.",
    signsYouNeed: "If you are working from a garage, shed or borrowed space that is no longer suitable, or your business needs a dedicated workshop, a steel building can be manufactured and erected quickly to get you working properly again.",
    options: `${brand} designs workshop buildings to suit your trade and site, from a straightforward single-bay workshop to larger, multi-use spaces. Cladding, doors and fixtures can be specified to suit how the workshop will be used.`,
    localContext: `Tradespeople and businesses across ${cities} regularly need a workshop built quickly without compromising on quality. ${brand} covers ${cities} and works nationwide across ${business.region}.`,
    whatToExpect: `Tell ${brand} your requirements and site details. A swift quotation is provided, and once approved the workshop is manufactured and delivered to site, with construction carried out by our own teams.`,
    whyChooseUs: `${brand} has 16 years of experience building workshops and other steel structures, with no job considered too big or too small.`,
    benefits: [
      "Workshop buildings built to your specification.",
      "Manufactured and delivered to site in around 4-6 working weeks.",
      "Construction handled by our own experienced teams.",
      `Free quotes across ${cities} and nationwide.`,
    ],
    process: [
      "Discuss your workshop requirements and site.",
      "Receive a swift, clear quotation.",
      "Workshop manufactured and delivered to site.",
      "Construction completed by our own teams.",
    ],
    faq: [
      {
        question: "Can you build a small, single-bay workshop?",
        answer: `Yes. ${brand} takes on workshop builds of any size — no job is too big or too small.`,
      },
      {
        question: "How long does a workshop building take from quote to completion?",
        answer: "Buildings are typically manufactured and delivered to site in 4-6 working weeks from order approval.",
      },
    ],
  },
  {
    slug: "garages-storage-buildings",
    title: "Garages & Storage Buildings",
    shortTitle: "Garages & Storage",
    navTitle: "Garages & Storage",
    parentCategorySlug: "commercial-bespoke-steel-buildings-scotland-northern-england",
    description: `Steel garages and storage buildings supplied and constructed across ${cities} and ${business.region}.`,
    cardDescription: "Domestic garages and extra storage space, built strong and delivered quickly.",
    iconUrl: "https://c.animaapp.com/mhqqhnhjBr0jWt/assets/670f922acd8bf79374aa2c10_service-01.svg",
    iconAlt: "Garage and storage building icon",
    image: assets.gallery[3],
    imageAlt: `Steel garage and storage building by ${brand}`,
    about: `${brand} builds garages and storage buildings for homeowners and businesses across ${business.region} who need extra space, whether that's a garage at home or additional storage for a growing business.`,
    why: "Steel garages and storage buildings are quick to erect, low maintenance and a cost-effective way to add secure space.",
    signsYouNeed: "If you're short on storage space, need somewhere secure to keep vehicles or equipment, or are simply adding a garage at home, a steel building is a practical solution that can be built to your exact size requirements.",
    options: `${brand} builds garages and storage buildings from small domestic sizes up to larger commercial storage units, with cladding, doors and roller shutters specified to suit.`,
    localContext: `Homeowners and businesses across ${cities} regularly need extra storage or garage space. ${brand} covers ${cities} and travels nationwide across ${business.region} to deliver builds.`,
    whatToExpect: `${brand} will discuss the size and use of the building, provide a swift quotation, then manufacture and deliver the building to site before construction by our own teams.`,
    whyChooseUs: `With 16 years of experience, ${brand} has built garages and storage buildings of every size, and aims to reply to all quote requests within 24 hours.`,
    benefits: [
      "Garages and storage buildings of any size.",
      "Low maintenance, durable steel construction.",
      "Manufactured and delivered to site in around 4-6 working weeks.",
      `Free quotes across ${cities} and nationwide.`,
    ],
    process: [
      "Discuss the size and intended use of the building.",
      "Receive a swift, clear quotation.",
      "Building manufactured and delivered to site.",
      "Construction completed by our own experienced teams.",
    ],
    faq: [
      {
        question: "Can you build a garage at my home?",
        answer: `Yes. ${brand} builds domestic garages as well as larger commercial storage buildings.`,
      },
      {
        question: "What size storage buildings can you build?",
        answer: "Storage buildings can be sized to your requirements, from a small domestic unit to a larger commercial space.",
      },
    ],
  },
  {
    slug: "steel-cladding-installation",
    title: "Steel Cladding Installation",
    shortTitle: "Steel Cladding",
    navTitle: "Steel Cladding",
    parentCategorySlug: "steel-cladding-building-components-scotland-northern-england",
    description: `Metal and real wood cladding supplied and installed across ${cities} and ${business.region} by ${brand}.`,
    cardDescription: "Metal cladding, real wood cladding and fixing systems supplied and fitted.",
    iconUrl: `${serviceIconBase}/670f922a6c5c1d8102612221_service-02.svg`,
    iconAlt: "Steel cladding icon",
    image: assets.gallery[4],
    imageAlt: `Steel cladding installed by ${brand}`,
    about: `${brand} offers a range of metal cladding, real wood cladding, cold rolled purlin and rail solutions and fixing systems and components to suit steel buildings of any type.`,
    why: "The right cladding protects a steel building from the elements and affects both its appearance and long-term performance.",
    signsYouNeed: "If an existing steel building needs re-cladding, or a new build needs cladding specified and fitted, getting this right first time avoids costly problems later. Worn, damaged or outdated cladding can also affect how a building looks and performs.",
    options: `${brand} supplies metal cladding and real wood cladding, along with the cold rolled purlin and rail solutions and fixing systems needed to install it properly. We work with Omega Steel Buildings as our supply chain, so we know how best to source and manufacture the solutions required.`,
    localContext: `Steel buildings across ${cities} and ${business.region} need cladding suited to local weather conditions. ${brand} supplies and installs cladding nationwide, with all materials inspected before being dispatched or collected from our collection point in the Midlands.`,
    whatToExpect: `${brand} will assess the building and your cladding preferences, then supply and, where needed, fit the cladding and fixing systems. Our aim is to get it right first time, every time.`,
    whyChooseUs: `${brand}'s supply chain relationship with Omega Steel Buildings, combined with 16 years of industry knowledge, means materials are sourced and manufactured correctly for the job.`,
    benefits: [
      "Metal and real wood cladding options.",
      "Cold rolled purlin, rail and fixing systems supplied.",
      "Materials inspected before dispatch or collection.",
      `Free quotes across ${cities} and nationwide.`,
    ],
    process: [
      "Assess the building and discuss cladding options.",
      "Receive a quotation for materials and fitting.",
      "Materials sourced, manufactured and inspected.",
      "Cladding supplied and fitted to the building.",
    ],
    faq: [
      {
        question: "Do you supply cladding for existing steel buildings?",
        answer: `Yes. ${brand} can supply and fit metal or real wood cladding to existing steel structures.`,
      },
      {
        question: "What cladding options do you offer?",
        answer: "Metal cladding and real wood cladding are both available, along with the purlin, rail and fixing systems needed to install them.",
      },
    ],
  },
  {
    slug: "roller-doors-components",
    title: "Roller Doors & Steel Components",
    shortTitle: "Roller Doors & Components",
    navTitle: "Roller Doors",
    parentCategorySlug: "steel-cladding-building-components-scotland-northern-england",
    description: `Aluminium roller doors and steel building components supplied across ${cities} and ${business.region}.`,
    cardDescription: "Aluminium roller doors and steel building components supplied as a distributor of leading manufacturers.",
    iconUrl: `${serviceIconBase}/670f922a0e27a271e441091e_service-03.svg`,
    iconAlt: "Roller door icon",
    image: assets.gallery[5],
    imageAlt: `Steel building components supplied by ${brand}`,
    about: `${brand} is a distributor of leading aluminium roller door manufacturers, and supplies a range of steel building components, fixing systems and purlin and rail solutions.`,
    why: "The right doors and components affect the security, usability and finish of a steel building — getting them from a trusted supplier avoids delays and mismatched parts.",
    signsYouNeed: "If a steel building needs new access doors, replacement components, or you are speccing a new build and need the full range of fixings and rails, working with a single supplier keeps the project simple.",
    options: `${brand} supplies aluminium roller doors alongside cold rolled purlin and rail solutions and fixing systems and components, sourced through our supply chain relationship with Omega Steel Buildings.`,
    localContext: `Businesses across ${cities} and ${business.region} rely on ${brand} for roller doors and components as part of a new build or as a standalone supply. All materials are inspected before dispatch or collection from our Midlands collection point.`,
    whatToExpect: `${brand} will confirm what doors or components are needed for your building, then supply them, inspected and ready for collection or delivery.`,
    whyChooseUs: `As a distributor of leading manufacturers with 16 years in the industry, ${brand} knows where to source components and how to get the specification right first time.`,
    benefits: [
      "Aluminium roller doors from leading manufacturers.",
      "Purlin, rail and fixing systems supplied.",
      "Materials inspected before dispatch or collection.",
      `Free quotes across ${cities} and nationwide.`,
    ],
    process: [
      "Confirm the doors or components needed for your building.",
      "Receive a quotation for supply.",
      "Materials sourced and inspected.",
      "Components collected or delivered to site.",
    ],
    faq: [
      {
        question: "Can you supply roller doors on their own, without a full building?",
        answer: `Yes. ${brand} supplies aluminium roller doors and steel components as a standalone order.`,
      },
      {
        question: "Where do materials get inspected before delivery?",
        answer: "All materials are inspected before being dispatched or collected from our collection point in the Midlands.",
      },
    ],
  },
  {
    slug: "free-quotes",
    title: "Free Quotes",
    shortTitle: "Free Quotes",
    navTitle: "Free Quotes",
    parentCategorySlug: null,
    description: `Request a free quote from ${brand} for steel buildings and construction services across ${cities} and ${business.region}.`,
    cardDescription: `Message or call ${brand} to discuss your steel building project and get a free quote.`,
    iconUrl: "https://c.animaapp.com/mhqqhnhjBr0jWt/assets/670f922acd8bf79374aa2c10_service-01.svg",
    iconAlt: "Free quote service icon",
    image: assets.gallery[5],
    imageAlt: `Steel building project completed by ${brand}`,
    about: `Whatever your vision — expanding your business, adding storage, a new workshop, a garage at home or a brand-new project — ${brand} can make it happen. Get in touch today for your free quote.`,
    why: "A quick conversation helps clarify the size, specification and budget for your building before anything is committed to.",
    signsYouNeed: "If you know you need a steel building but are not sure of the size, specification or cost, a free quote is the best first step. Our diverse back-room software makes quoting buildings large or small swift and easy.",
    options: `${brand} quotes for industrial, agricultural, workshop and storage steel buildings, along with cladding, roller doors and components. You can call, message through Facebook, or use the quote request form.`,
    localContext: `${brand} covers ${cities} and travels nationwide across ${business.region}, from Scotland all the way down to Dover.`,
    whatToExpect: "Send a message or call with details of your project. We aim to reply to all quotation requests within a 24-hour period, and can talk through size, colour and specification before you commit.",
    whyChooseUs: `16 years of experience, free quotes and a team that supplies and constructs — not just sells. No job is too big or too small for ${brand}.`,
    benefits: [
      "Free quotes for all steel building services.",
      "Reply to quote requests within 24 hours.",
      `Nationwide coverage from ${cities} down to Dover.`,
      "16 years of experience in steel construction.",
    ],
    process: [
      "Send a message or call with your project details.",
      "Discuss size, specification, colour and budget.",
      "Receive a swift, clear quotation.",
      "Confirm the order to begin manufacture and construction.",
    ],
    faq: [
      {
        question: "What details should I send for a quote?",
        answer: "A description of the building you need, its intended use and your location are helpful.",
      },
      {
        question: "How quickly will I get a quote back?",
        answer: `${brand} aims to reply to all quotation requests within a 24-hour period.`,
      },
    ],
  },
];

export const getServiceBySlug = (slug: string) =>
  services.find((service) => service.slug === slug);
