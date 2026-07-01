/** Central business config — single source of truth for NAP, SEO, assets, and schema. */

export type BusinessAddress = {
  addressLocality: string;
  addressRegion: string;
  addressCountry: string;
  postalCode?: string;
  streetAddress?: string;
};

export type BusinessAssets = {
  hero: string;
  logo: string;
  about: string;
  gallery: [string, string, string, string, string, string];
};

export type OpeningHoursSpec = {
  dayOfWeek: string[];
  opens: string;
  closes: string;
};

export type BusinessConfig = {
  businessName: string;
  alternateName: string;
  tagline: string;
  gbpCategory: string;
  phone: string;
  phoneDisplay: string;
  phoneLocal: string;
  /** Set to enable client-side tracking number swap; null = canonical everywhere */
  trackingPhone: string | null;
  trackingPhoneLocal: string | null;
  email: string;
  siteUrl: string;
  facebookUrl: string;
  googleMapsUrl: string;
  whatsappUrl: string | null;
  primaryCity: string;
  secondaryCity: string;
  region: string;
  geoRegion: string;
  address: BusinessAddress;
  mapCenter: [number, number];
  serviceAreaPolygon: [number, number][];
  assets: BusinessAssets;
  serviceTypes: string[];
  openingHours: OpeningHoursSpec[];
  /** Google Analytics measurement ID — empty string to disable */
  googleAnalyticsId: string;
  /** Google Ads conversion ID — empty string to disable */
  googleAdsId: string;
};

export const business: BusinessConfig = {
  businessName: "Landscaping Ltd",
  alternateName: "Landscaping Ltd",
  tagline: "Reliable grass cutting, hedge trimming and garden maintenance with free, no-obligation quotes.",
  gbpCategory: "Landscape Company",

  phone: "+44 7935 499327",
  phoneDisplay: "+44 7935 499327",
  phoneLocal: "07935 499327",
  trackingPhone: null,
  trackingPhoneLocal: null,

  email: "hello@landscapingltd.co.uk",
  siteUrl: "https://www.landscapingltdpaisley.co.uk",
  facebookUrl: "https://www.facebook.com/profile.php?id=61577154598414",
  googleMapsUrl: "https://maps.google.com/maps?q=55.84197000%2C-4.42292000&hl=en",
  whatsappUrl: "https://wa.me/447935499327",

  primaryCity: "Paisley",
  secondaryCity: "Glasgow",
  region: "Renfrewshire",
  geoRegion: "GB-SCT",

  address: {
    addressLocality: "Paisley",
    addressRegion: "Renfrewshire",
    addressCountry: "GB",
  },

  mapCenter: [55.84197, -4.42292],
  serviceAreaPolygon: [
    [55.78, -4.65],
    [55.78, -4.25],
    [55.92, -4.25],
    [55.92, -4.6],
    [55.85, -4.66],
    [55.78, -4.65],
  ],

  assets: {
    hero: "/landscapingltdpaisley-hero.jpg",
    logo: "/landscapingltdpaisley-logo.png",
    about: "/landscapingltdpaisley-about.jpg",
    gallery: [
      "/landscapingltdpaisley-gal-01.jpg",
      "/landscapingltdpaisley-gal-02.jpg",
      "/landscapingltdpaisley-gal-03.jpg",
      "/landscapingltdpaisley-gal-04.jpg",
      "/landscapingltdpaisley-gal-05.jpg",
      "/landscapingltdpaisley-gal-06.jpg",
    ],
  },

  serviceTypes: [
    "Grass cutting",
    "Garden maintenance and tidy-ups",
    "Hedge trimming",
    "Weed control and de-weeding",
    "Flat-pack furniture and shed assembly",
    "Free quotes",
  ],

  openingHours: [
    {
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "08:00",
      closes: "18:00",
    },
  ],

  googleAnalyticsId: "",
  googleAdsId: "",
};

export const SITE_URL = business.siteUrl;

export const absoluteUrl = (path = ""): string => {
  if (!path) return `${SITE_URL}/`;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
};

export const truncateMeta = (text: string, maxLength = 155): string => {
  const cleaned = text.replace(/\s+/g, " ").trim();
  if (cleaned.length <= maxLength) return cleaned;
  return `${cleaned.slice(0, maxLength - 1).replace(/[\s,.;:-]+$/, "")}…`;
};

export const brandName = () => business.alternateName;

export const citiesLabel = () => `${business.primaryCity} & ${business.secondaryCity}`;

export const homepageTitle = () =>
  `${business.alternateName} | Grass Cutting & Garden Maintenance in ${citiesLabel()}`;

export const homepageDescription = () =>
  truncateMeta(
    `${business.alternateName} provides grass cutting, hedge trimming and garden maintenance across ${citiesLabel()} and ${business.region}. Free quotes available.`,
  );

export const homepageH1 = () => `Grass Cutting & Garden Maintenance in ${citiesLabel()}`;

export const defaultKeywords = () =>
  `grass cutting ${business.primaryCity}, garden maintenance ${business.secondaryCity}, ${business.alternateName}, free quote`;

export const defaultOgImageAlt = () =>
  `${business.alternateName} grass cutting and garden maintenance in ${citiesLabel()}`;

export const schemaImages = (): string[] => [
  absoluteUrl(business.assets.logo),
  absoluteUrl(business.assets.hero),
  absoluteUrl(business.assets.about),
  ...business.assets.gallery.map((path) => absoluteUrl(path)),
];
