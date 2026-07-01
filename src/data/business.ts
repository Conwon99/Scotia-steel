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
  businessName: "Scotia Steel Construction",
  alternateName: "Scotia Steel",
  tagline: "16 years of experience supplying and constructing quality steel buildings across Scotland, Northern England and the UK.",
  gbpCategory: "Steel Building Contractor",

  phone: "+44 7799 170792",
  phoneDisplay: "+44 7799 170792",
  phoneLocal: "07799 170792",
  trackingPhone: null,
  trackingPhoneLocal: null,

  email: "scotiasteel@outlook.com",
  siteUrl: "https://www.scotiasteel.co.uk",
  facebookUrl: "https://www.facebook.com/profile.php?id=61560901300521",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Scotia+Steel",
  whatsappUrl: null,

  primaryCity: "Scotland",
  secondaryCity: "Northern England",
  region: "the UK",
  geoRegion: "GB-SCT",

  address: {
    addressLocality: "Scotland",
    addressRegion: "United Kingdom",
    addressCountry: "GB",
  },

  mapCenter: [56.4907, -4.2026],
  serviceAreaPolygon: [
    [58.5, -6.5],
    [58.5, -1.5],
    [54.0, -1.0],
    [51.1, 1.4],
    [50.9, -1.0],
    [54.0, -5.5],
    [58.5, -6.5],
  ],

  assets: {
    hero: "/scotiasteel-hero.jpg",
    logo: "/scotiasteel-logo.png",
    about: "/scotiasteel-about.jpg",
    gallery: [
      "/scotiasteel-gal-01.jpg",
      "/scotiasteel-gal-02.jpg",
      "/scotiasteel-gal-03.jpg",
      "/scotiasteel-gal-04.jpg",
      "/scotiasteel-gal-05.jpg",
      "/scotiasteel-gal-06.jpg",
    ],
  },

  serviceTypes: [
    "Industrial steel buildings",
    "Agricultural steel buildings",
    "Workshop and garage steel buildings",
    "Steel cladding installation",
    "Aluminium roller doors and steel components",
    "Free quotes",
  ],

  openingHours: [
    {
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00",
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
  `${business.alternateName} | Steel Buildings in ${citiesLabel()}`;

export const homepageDescription = () =>
  truncateMeta(
    `${business.alternateName} supplies and constructs industrial, agricultural and commercial steel buildings across ${citiesLabel()}. Free quotes available.`,
  );

export const homepageH1 = () => `Steel Buildings in ${citiesLabel()}`;

export const defaultKeywords = () =>
  `steel buildings ${business.primaryCity}, steel building construction ${business.secondaryCity}, ${business.alternateName}, free quote`;

export const defaultOgImageAlt = () =>
  `${business.alternateName} steel building construction in ${citiesLabel()}`;

export const schemaImages = (): string[] => [
  absoluteUrl(business.assets.logo),
  absoluteUrl(business.assets.hero),
  absoluteUrl(business.assets.about),
  ...business.assets.gallery.map((path) => absoluteUrl(path)),
];
