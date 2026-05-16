export const siteConfig = {
  niche: "Roofing",
  city: "Merced",
  state: "CA",
  county: "Merced County",
  stateAbbr: "CA",

  siteName: "Merced Roofing Pros",
  tagline: "Merced Roofing — Free Estimates · Licensed & Insured",
  description:
    "Licensed and insured roofing contractors serving Merced, CA. Free estimates, same-day response. Roof repair, replacement, and inspection.",
  phone: "(209) 259-0978",
  phoneHref: "tel:+12092590978",
  email: "info@mercedroofingpro.com",
  domain: "mercedroofingpro.com",

  address: {
    city: "Merced",
    state: "CA",
    zip: "95340",
  },

  serviceArea: ["Merced", "Atwater", "Livingston", "Los Banos", "Winton", "Delhi"],

  services: [
    {
      title: "Roof Replacement",
      description:
        "Full tear-off and replacement using asphalt shingles, metal, or tile. Merced's summer heat demands materials rated for 110°F+.",
    },
    {
      title: "Roof Repair",
      description:
        "Leak repair, storm damage, missing shingles, and flashing. Most repairs completed same or next day.",
    },
    {
      title: "Roof Inspection",
      description:
        "Pre-purchase, post-storm, and annual maintenance inspections with written report.",
    },
    {
      title: "Gutters & Drainage",
      description:
        "Gutter installation, cleaning, and downspout repair. Critical in Merced's rainy season.",
    },
  ],

  colors: {
    base: "oklch(32% 0.09 38)",
    primary: "oklch(58% 0.15 38)",
    cta: "oklch(72% 0.18 65)",
    ctaHover: "oklch(65% 0.18 65)",
    text: "oklch(96% 0.02 38)",
    muted: "oklch(75% 0.04 38)",
  },

  fonts: {
    heading: "Barlow Condensed",
    body: "Inter",
  },

  pricing: {
    flatFeePerMonth: 500,
    perLeadAboveThreshold: 100,
    threshold: 5,
    setupFee: 500,
    freeLeadDays: 30,
  },

  calculator: {
    inputs: [
      {
        id: "roofSize",
        label: "Roof Size",
        type: "select" as const,
        options: [
          { value: "small", label: "Under 1,500 sq ft" },
          { value: "medium", label: "1,500–2,500 sq ft" },
          { value: "large", label: "2,500–3,500 sq ft" },
          { value: "xlarge", label: "Over 3,500 sq ft" },
        ],
      },
      {
        id: "material",
        label: "Material",
        type: "select" as const,
        options: [
          { value: "asphalt", label: "Asphalt Shingles" },
          { value: "metal", label: "Metal Roofing" },
          { value: "tile", label: "Concrete/Clay Tile" },
        ],
      },
      {
        id: "condition",
        label: "Roof Condition",
        type: "select" as const,
        options: [
          { value: "repair", label: "Needs repair (1–3 areas)" },
          { value: "partial", label: "Partial replacement" },
          { value: "full", label: "Full replacement" },
        ],
      },
    ],
    estimates: {
      small: { asphalt: { repair: [800, 1500], partial: [2500, 4000], full: [5000, 7500] }, metal: { repair: [1200, 2000], partial: [4000, 6000], full: [8000, 12000] }, tile: { repair: [1500, 2500], partial: [5000, 8000], full: [10000, 15000] } },
      medium: { asphalt: { repair: [1200, 2200], partial: [4000, 6500], full: [7500, 11000] }, metal: { repair: [1800, 3000], partial: [6500, 9500], full: [12000, 17000] }, tile: { repair: [2000, 3500], partial: [7500, 12000], full: [15000, 22000] } },
      large: { asphalt: { repair: [1800, 3000], partial: [6000, 9000], full: [10000, 15000] }, metal: { repair: [2500, 4000], partial: [9000, 13000], full: [16000, 22000] }, tile: { repair: [3000, 5000], partial: [10000, 16000], full: [20000, 29000] } },
      xlarge: { asphalt: { repair: [2500, 4000], partial: [8000, 12000], full: [14000, 20000] }, metal: { repair: [3500, 5500], partial: [12000, 18000], full: [22000, 30000] }, tile: { repair: [4000, 7000], partial: [14000, 22000], full: [28000, 40000] } },
    } as Record<string, Record<string, Record<string, [number, number]>>>,
    laborNote: "Estimates reflect Merced County labor rates, which run ~10% below Bay Area averages.",
  },

  hours: "Mon–Sat, 7am–8pm",

  schema: {
    type: "RoofingContractor",
    priceRange: "$$",
    hours: "Mo-Sa 07:00-20:00",
  },

  seo: {
    primaryKeyword: "roofing contractor Merced CA",
    secondaryKeywords: [
      "roof repair Merced CA",
      "roof replacement Merced",
      "roofer near me Merced",
      "roofing company Merced California",
    ],
  },
} as const;

export type SiteConfig = typeof siteConfig;
