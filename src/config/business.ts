// Central source of truth for business info used across the site.
export const BUSINESS = {
  name: "Central VA Hauling & Junk Removal",
  shortName: "Central VA Hauling",
  owner: "Jeff Hasso",
  phone: "(540) 370-2844",
  phoneHref: "tel:+15403702844",
  email: "jshagent99@gmail.com",
  address: {
    street: "9807 West Midland Way",
    city: "Fredericksburg",
    state: "VA",
    zip: "22408",
    full: "9807 West Midland Way, Fredericksburg, VA 22408",
  },
  hours: "Mon – Sat • 7AM to 8PM",
  region: "Central Virginia",
  serviceAreas: [
    { name: "Fredericksburg, VA", slug: "fredericksburg-va" },
    { name: "Spotsylvania County, VA", slug: "spotsylvania-county-va" },
    { name: "Stafford County, VA", slug: "stafford-county-va" },
  ],
  webhooks: {
    quote: "https://services.leadconnectorhq.com/hooks/fE4yQ0Qd8Oxl5QQ7j5ub/webhook-trigger/cv5Rg8tKUHQVki4emfEv",
    review: "https://services.leadconnectorhq.com/hooks/fE4yQ0Qd8Oxl5QQ7j5ub/webhook-trigger/Tz9oC4RlGNfBvTKXbJ7g",
  },
  // No Google Business Page provided
  googleReviewUrl: null as string | null,
  social: {
    facebook: null as string | null,
    instagram: null as string | null,
  },
  // Generic Fredericksburg, VA area map embed
  mapEmbed:
    "https://www.google.com/maps?q=9807+West+Midland+Way,+Fredericksburg,+VA+22408&output=embed",
};

export const SERVICES = [
  { slug: "commercial-clean-outs", title: "Commercial Clean Outs", short: "Office, retail, and warehouse cleanouts done fast." },
  { slug: "residential-clean-outs", title: "Residential Clean Outs", short: "Whole-home, garage, attic, and basement cleanouts." },
  { slug: "estate-clean-outs", title: "Estate Clean Outs", short: "Compassionate, thorough estate property cleanouts." },
  { slug: "foreclosure-clean-outs", title: "Foreclosure Clean Outs", short: "Bank-ready turnover for foreclosed properties." },
  { slug: "property-manager-clean-outs", title: "Property Manager Clean Outs", short: "Reliable turnover help for property managers." },
  { slug: "realtor-clean-outs", title: "Realtor Clean Outs", short: "Get listings show-ready in days, not weeks." },
  { slug: "eviction-clean-outs", title: "Eviction Clean Outs", short: "Discreet, full-property eviction cleanouts." },
  { slug: "construction-cleanup", title: "Construction Cleanup", short: "Job-site debris hauling for contractors and DIYers." },
  { slug: "furniture-removal", title: "Furniture Removal", short: "Couches, beds, desks, and bulky pieces hauled out." },
  { slug: "mattress-removal", title: "Mattress Removal", short: "Old mattresses and box springs disposed of properly." },
  { slug: "appliance-removal", title: "Appliance Removal", short: "Fridges, washers, dryers, ovens, and more." },
  { slug: "trash-removal", title: "Trash Removal", short: "One-time and recurring trash hauling service." },
] as const;

export type ServiceSlug = (typeof SERVICES)[number]["slug"];
