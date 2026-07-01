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
    slug: "grass-cutting",
    title: "Grass Cutting",
    shortTitle: "Grass Cutting",
    navTitle: "Grass Cutting",
    parentCategorySlug: "grass-cutting-garden-maintenance-paisley-glasgow",
    description: `Reliable grass cutting in ${cities} and ${business.region}. Regular or one-off cuts with tidy finishing from ${brand}.`,
    cardDescription: `Regular and one-off grass cutting completed neatly across ${cities} and surrounding areas.`,
    iconUrl: "https://c.animaapp.com/mhqqhnhjBr0jWt/assets/670f922acd8bf79374aa2c10_service-01.svg",
    iconAlt: "Grass cutting icon",
    image: assets.gallery[0],
    imageAlt: `Grass cutting completed by ${brand} in ${business.primaryCity}`,
    about: `${brand} cuts grass for homes and gardens across ${business.region}, from regular weekly or fortnightly visits to one-off cuts for lawns that have been left for a while. Clippings can be cleared away so the garden is left looking neat.`,
    why: `The team is quick, cheap and reliable, often able to get out within the hour of a message or call.`,
    signsYouNeed: `If your lawn has not been cut for a few weeks it can quickly get away from you, especially through spring and summer. Long grass makes the whole garden look untidy and can be harder to bring back under control the longer it is left. If you are moving into a new property, selling up, or just do not have time to keep on top of it yourself, a regular grass cutting service takes the pressure off.`,
    options: `${brand} can arrange a one-off cut to bring an overgrown lawn back under control, or set up a regular visit through the grass cutting season. Front and back gardens are both covered, and grass cutting can be combined with weeding or a general garden tidy-up in the same visit. See our garden maintenance page for the full range of options.`,
    localContext: `Gardens across ${cities} and ${business.region} grow quickly through the warmer months and can look overgrown within a couple of weeks. If you are searching for grass cutting near ${business.primaryCity} or ${business.secondaryCity}, ${brand} works across the local service area with fast response times.`,
    whatToExpect: `Send a message or give the team a call with your location and a photo of the garden if you have one. A price is agreed up front, and where possible the first cut is arranged within a day or two. Grass is cut neatly, edges tidied, and clippings cleared where agreed, leaving the garden looking cared for.`,
    whyChooseUs: `${brand} is known locally for being cheap, reliable and quick to respond. Customers across ${cities} recommend the team for turning up when promised and leaving a tidy finish every time.`,
    benefits: [
      "Regular or one-off grass cutting.",
      "Fast response — often available within the hour.",
      "Clippings cleared away where agreed.",
      `Free quotes across ${cities} and nearby areas.`,
    ],
    process: [
      "Message or call with your location and the size of the job.",
      "Agree a price and arrange a convenient time.",
      "Cut the grass and tidy the edges neatly.",
      "Clear clippings and leave the garden tidy.",
    ],
    faq: [
      {
        question: "My grass hasn't been cut in months — can you still help?",
        answer: `Yes. ${brand} regularly takes on overgrown lawns and can usually get them back under control in one visit.`,
      },
      {
        question: "Do you offer a regular grass cutting service?",
        answer: `Yes. ${brand} can arrange weekly or fortnightly visits through the growing season, or one-off cuts as needed.`,
      },
      {
        question: `Do you offer grass cutting near me in ${business.primaryCity} or ${business.secondaryCity}?`,
        answer: `Yes. ${brand} provides grass cutting across ${cities} and ${business.region}. Contact us with your location for a free quote.`,
      },
    ],
  },
  {
    slug: "garden-maintenance",
    title: "Garden Maintenance",
    shortTitle: "Garden Maintenance",
    navTitle: "Garden Maintenance",
    parentCategorySlug: "grass-cutting-garden-maintenance-paisley-glasgow",
    description: `Garden maintenance and tidy-ups in ${cities} and ${business.region}. Cheap, reliable and thorough. Free quotes.`,
    cardDescription: "General garden maintenance and tidy-ups to keep outdoor spaces looking their best.",
    iconUrl: `${serviceIconBase}/670f922a6c5c1d8102612221_service-02.svg`,
    iconAlt: "Garden maintenance icon",
    image: assets.gallery[1],
    imageAlt: `Garden maintenance and tidy-up by ${brand}`,
    about: `${brand} provides general garden maintenance across ${cities} and surrounding areas, combining grass cutting, weeding and hedge work into a single tidy-up so gardens are brought back under control in one visit.`,
    why: "A single visit can take a neglected garden from overgrown to tidy, without the customer having to organise several separate jobs.",
    signsYouNeed: "If borders are overgrown, grass is long, hedges need attention and the garden generally feels like it has got away from you, a general maintenance visit is often the quickest way to sort it. This is also useful before selling a property, hosting visitors, or simply getting on top of a garden that has been neglected over winter.",
    options: `${brand} can carry out a one-off garden tidy-up covering grass cutting, weeding and light hedge work, or set up a regular maintenance visit to keep everything under control. Jobs are scoped based on what the garden needs rather than a fixed package, so you only pay for the work required.`,
    localContext: `Properties across ${cities} and ${business.region} often need a seasonal tidy-up, particularly heading into spring or after a long winter. ${brand} works across the full service area with free quotes and fast turnaround.`,
    whatToExpect: `${brand} will ask what the garden needs — grass cutting, weeding, hedges or a full tidy-up — and agree a price before starting. Work is carried out efficiently, waste is cleared, and the garden is left looking neat and easier to maintain going forward.`,
    whyChooseUs: `Customers across ${cities} recommend ${brand} for friendly service, fair prices and a fast, efficient job. The team is happy to tackle gardens that have been left for a long time without judgement.`,
    benefits: [
      "General garden tidy-ups covering grass, weeds and hedges.",
      "One-off or regular maintenance visits.",
      "Waste and cuttings cleared away.",
      `Free quotes across ${cities} and ${business.region}.`,
    ],
    process: [
      "Discuss what the garden needs and agree a price.",
      "Arrange a convenient visit, often within a few days.",
      "Carry out grass cutting, weeding and hedge work as needed.",
      "Clear waste and leave the garden tidy.",
    ],
    faq: [
      {
        question: "Can you take on a garden that has been neglected for a long time?",
        answer: `Yes. ${brand} regularly brings overgrown, neglected gardens back under control across ${cities}.`,
      },
      {
        question: "Do you combine grass cutting, weeding and hedges in one visit?",
        answer: "Yes. A general garden maintenance visit can cover all of this in one job.",
      },
      {
        question: `Do you cover ${business.secondaryCity} as well as ${business.primaryCity}?`,
        answer: `Yes. The service area includes ${cities} and ${business.region}.`,
      },
    ],
  },
  {
    slug: "hedge-trimming",
    title: "Hedge Trimming",
    shortTitle: "Hedge Trimming",
    navTitle: "Hedge Trimming",
    parentCategorySlug: "hedge-trimming-weed-control-paisley-glasgow",
    description: `Hedge trimming and cutting down in ${cities} and ${business.region}. Tidy finishing and free quotes from ${brand}.`,
    cardDescription: "Hedges trimmed, shaped or cut right down, with all cuttings cleared away.",
    iconUrl: `${serviceIconBase}/670f922a0e27a271e441091e_service-03.svg`,
    iconAlt: "Hedge trimming icon",
    image: assets.gallery[2],
    imageAlt: `Hedge trimming completed by ${brand} in ${business.primaryCity}`,
    about: `${brand} trims, shapes and cuts down hedges for customers across ${business.region}. Whether a hedge just needs a light tidy or has been left to grow out for years, the team can bring it back under control.`,
    why: "Hedges left untrimmed can block light, overhang paths and make a garden look untidy, so regular attention keeps them neat and healthy.",
    signsYouNeed: "If a hedge is overgrown, blocking a path, overhanging a neighbour's garden, or just hasn't been touched in a while, it is a good sign trimming is needed. Hedges that are cut regularly tend to stay healthier and easier to manage than ones left to grow unchecked.",
    options: `${brand} can give hedges a light trim to tidy the shape, cut them back hard if they have grown out significantly, or remove a hedge down to size entirely. All cuttings are cleared away as part of the job so you are not left with green waste to dispose of.`,
    localContext: `Hedges across ${cities} and ${business.region} grow quickly through spring and summer and can need attention more than once a season. If you are searching for hedge trimming near ${business.primaryCity} or ${business.secondaryCity}, ${brand} covers the local service area.`,
    whatToExpect: `Get in touch with details of the hedge and its size. ${brand} will agree a price and arrange a visit, then trim, shape or cut down the hedge as agreed. Cuttings are cleared away and the area left tidy.`,
    whyChooseUs: `${brand} offers free quotes, fast turnaround and tidy finishing on every hedge trimming job. Customers across ${cities} recommend the team for reliable, no-fuss service.`,
    benefits: [
      "Hedges trimmed, shaped or cut right down.",
      "Cuttings cleared away as standard.",
      "Fast response for overgrown hedges.",
      `Free quotes across ${cities} and nearby areas.`,
    ],
    process: [
      "Send details and a photo of the hedge if possible.",
      "Agree a price and arrange a visit.",
      "Trim, shape or cut down the hedge as agreed.",
      "Clear cuttings and leave the area tidy.",
    ],
    faq: [
      {
        question: "Can you cut a hedge right down if it has grown out of control?",
        answer: `Yes. ${brand} can cut hedges back hard or down to size where needed.`,
      },
      {
        question: "Do you take away the cuttings?",
        answer: "Yes. Cuttings and green waste are cleared away as part of the job.",
      },
      {
        question: `Do you offer hedge trimming near me in ${business.primaryCity} or ${business.secondaryCity}?`,
        answer: `Yes. ${brand} trims hedges across ${cities} and ${business.region}. Contact us with your location for a free quote.`,
      },
    ],
  },
  {
    slug: "weed-control",
    title: "Weed Control & De-Weeding",
    shortTitle: "Weed Control",
    navTitle: "Weed Control",
    parentCategorySlug: "hedge-trimming-weed-control-paisley-glasgow",
    description: `Weed control and de-weeding in ${cities} and ${business.region}. Borders, paths and driveways cleared. Free quotes.`,
    cardDescription: "Weeds cleared from borders, paths, driveways and beds, leaving the garden tidy.",
    iconUrl: "https://c.animaapp.com/mhqqhnhjBr0jWt/assets/670f922acd8bf79374aa2c10_service-01.svg",
    iconAlt: "Weed control icon",
    image: assets.gallery[3],
    imageAlt: `Weed control and de-weeding by ${brand}`,
    about: `${brand} clears weeds from borders, paths, driveways and flower beds for customers across ${business.region}, tidying up areas that have been left to grow over.`,
    why: "Weeds spread quickly if left, making borders and paths look untidy and making the garden harder to enjoy or maintain.",
    signsYouNeed: "If borders are overgrown with weeds, paths and driveways have weeds pushing through, or beds have not been tended to in a while, de-weeding will make a noticeable difference. It is also a useful step before planting or general garden maintenance work.",
    options: `${brand} can de-weed borders, beds, paths and driveways as a standalone job or combined with grass cutting and hedge trimming as part of a full garden tidy-up. Weeds are cleared and removed from site so they do not spread back.`,
    localContext: `Weeds establish quickly across gardens in ${cities} and ${business.region}, particularly in beds and borders that are not regularly tended. ${brand} works across the local service area with free quotes.`,
    whatToExpect: `${brand} will look at the areas that need clearing and agree a price. Weeds are removed from borders, beds, paths or driveways as agreed, and cleared away so the garden is left looking tidy.`,
    whyChooseUs: `Customers recommend ${brand} for thorough, reliable de-weeding at a fair price. The team is happy to tackle borders and beds that have been neglected for some time.`,
    benefits: [
      "Weeds cleared from borders, beds, paths and driveways.",
      "Waste removed from site.",
      "Can be combined with grass cutting and hedge trimming.",
      `Free quotes for properties across ${cities}.`,
    ],
    process: [
      "Review the areas that need de-weeding.",
      "Agree a price for the work.",
      "Clear weeds from borders, beds, paths or driveways.",
      "Remove waste and leave the area tidy.",
    ],
    faq: [
      {
        question: "Can you clear a very overgrown, weedy border?",
        answer: `Yes. ${brand} regularly clears borders and beds that have been left for a long time.`,
      },
      {
        question: "Do you remove the weeds afterwards?",
        answer: "Yes. Weeds and green waste are cleared away as part of the job.",
      },
    ],
  },
  {
    slug: "flat-pack-assembly",
    title: "Flat-Pack Assembly",
    shortTitle: "Flat-Pack Assembly",
    navTitle: "Flat-Pack Assembly",
    parentCategorySlug: "flat-pack-assembly-paisley-glasgow",
    description: `Flat-pack furniture, beds and outdoor building assembly in ${cities} and ${business.region}. Free quotes from ${brand}.`,
    cardDescription: "Flat-packed furniture, beds and outdoor buildings built quickly and properly.",
    iconUrl: `${serviceIconBase}/670f922a6c5c1d8102612221_service-02.svg`,
    iconAlt: "Flat-pack assembly icon",
    image: assets.gallery[4],
    imageAlt: `Flat-pack furniture assembly by ${brand}`,
    about: `${brand} builds flat-packed furniture, beds, units and outdoor buildings for customers across ${business.region} who would rather not spend a weekend doing it themselves.`,
    why: "Flat-pack assembly can take far longer than expected without the right tools or experience, especially for larger items like beds or garden buildings.",
    signsYouNeed: "If you have new flat-packed furniture, a bed, wardrobe or garden building waiting to be built, or previous attempts have not gone to plan, professional assembly saves time and avoids mistakes. This is especially useful ahead of moving in, hosting guests, or before a busy period like Christmas.",
    options: `${brand} builds flat-packed furniture and beds of any size, along with flat-packed outdoor buildings and sheds. Items can be built on-site from the original packaging, and packaging is cleared away once the job is complete.`,
    localContext: `Customers across ${cities} and ${business.region} regularly need flat-pack furniture or garden buildings assembled, particularly ahead of Christmas or a house move. ${brand} covers the full local service area.`,
    whatToExpect: `Send details of what needs building, including the make and size if known. ${brand} will agree a price and arrange a visit, then assemble the item securely and clear away the packaging afterwards.`,
    whyChooseUs: `${brand} is reliable, reasonably priced and happy to take on jobs other people can't be bothered with. Customers across ${cities} trust the team to get flat-pack furniture built properly the first time.`,
    benefits: [
      "Flat-packed furniture, beds and units assembled.",
      "Outdoor buildings and sheds built and priced on request.",
      "Packaging cleared away once complete.",
      `Free quotes across ${cities} and ${business.region}.`,
    ],
    process: [
      "Send details of the item, including make and size if known.",
      "Agree a price and arrange a convenient visit.",
      "Build the item securely on site.",
      "Clear away packaging and leave the area tidy.",
    ],
    faq: [
      {
        question: "Can you build flat-packed beds and wardrobes?",
        answer: `Yes. ${brand} assembles flat-packed furniture and beds of any size.`,
      },
      {
        question: "Do you build flat-packed garden buildings or sheds?",
        answer: "Yes. Flat-packed outdoor buildings can be priced and built on request.",
      },
      {
        question: `Do you offer flat-pack assembly near me in ${business.primaryCity} or ${business.secondaryCity}?`,
        answer: `Yes. ${brand} builds flat-pack furniture across ${cities} and ${business.region}. Contact us with your location for a free quote.`,
      },
    ],
  },
  {
    slug: "free-quotes",
    title: "Free Quotes",
    shortTitle: "Free Quotes",
    navTitle: "Free Quotes",
    parentCategorySlug: null,
    description: `Request a free, no-obligation quote from ${brand} for garden work across ${cities} and ${business.region}.`,
    cardDescription: `Message or call ${brand} to discuss your garden and arrange a free quote.`,
    iconUrl: "https://c.animaapp.com/mhqqhnhjBr0jWt/assets/670f922acd8bf79374aa2c10_service-01.svg",
    iconAlt: "Free quote service icon",
    image: assets.gallery[5],
    imageAlt: `Garden work completed by ${brand}`,
    about: `If you are not sure where to start, send ${brand} a message or give the team a call with a few details about your garden. Someone will get back to you and can discuss your options.`,
    why: "A quick conversation helps clarify the work needed, whether a visit is required, and gives you a fair, no-obligation price before anything is booked in.",
    signsYouNeed: "If you know your garden needs attention but are not sure of scope, cost or timing, a free quote is the best first step. Photos and your location help the team respond quickly with a price.",
    options: `${brand} quotes for grass cutting, hedge trimming, weeding, general garden maintenance and flat-pack assembly. You can call, message through Facebook, WhatsApp or the contact form. No-obligation quotes help you decide before committing to anything.`,
    localContext: `${brand} covers ${cities} and towns across ${business.region}. If you are nearby, get in touch to confirm coverage for your address.`,
    whatToExpect: "Send a message or call with what you need done. Share photos of the garden if that helps explain the job. The team will discuss the work, confirm the service area and agree a price, often within the same day.",
    whyChooseUs: `Free quotes, fast replies and a friendly, no-obligation service across ${cities}. Customers appreciate straightforward pricing and no pressure to commit.`,
    benefits: [
      "Free, no-obligation quotes for all listed services.",
      "Fast replies by phone, message or WhatsApp.",
      `Local service across ${cities} and ${business.region}.`,
      "Honest advice on what your garden actually needs.",
    ],
    process: [
      "Send a message, call or WhatsApp with what you need done.",
      "Share photos of the garden if they help explain the job.",
      "Get a fair price, often the same day.",
      "Book in a visit at a time that suits you.",
    ],
    faq: [
      {
        question: "What details should I send for a quote?",
        answer: "A short description of the work, your location and a photo of the garden are helpful.",
      },
      {
        question: "Which areas do you quote for?",
        answer: `${brand} covers ${cities} and surrounding areas in ${business.region}.`,
      },
    ],
  },
];

export const getServiceBySlug = (slug: string) =>
  services.find((service) => service.slug === slug);
