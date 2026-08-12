export const siteConfig = {
  previewMode: true,
  businessName: "Sam's Boat Repair Fiberglass & Gelcoat Experts",
  shortName: "Sam's Boat Repair",
  city: "Bacliff",
  state: "TX",
  postalCode: "77518",
  address: "1121 Grand Ave",
  phoneDisplay: "(832) 798-3889",
  phoneHref: "tel:+18327983889",
  rating: "5.0",
  reviewCount: 21,
  locationHref:
    "https://www.google.com/maps/search/?api=1&query=1121+Grand+Ave+Bacliff+TX+77518",
  services: [
    {
      number: "01",
      title: "Fiberglass Repair",
      copy: "Appearance-focused fiberglass repair for boats and watercraft, from cosmetic damage to restoration-minded work.",
    },
    {
      number: "02",
      title: "Gelcoat & Finish Work",
      copy: "Surface repair and refinishing with an emphasis on clean blending, finish quality, and a polished final look.",
    },
    {
      number: "03",
      title: "PWC / Jet Ski Work",
      copy: "Fiberglass and refinishing work for personal watercraft, including projects where appearance matters as much as the repair.",
    },
    {
      number: "04",
      title: "Restoration & Refresh",
      copy: "Older boats and worn finishes can be evaluated for repair, restoration, and appearance-focused improvement.",
    },
  ],
  reviewThemes: [
    "Factory-clean finish quality",
    "Straightforward communication",
    "Photo updates during projects",
    "Fair, transparent pricing sentiment",
    "Owner-involved craftsmanship",
  ],
  unknowns: [
    "Current day-by-day business hours (public listings conflict on Sunday)",
    "Whether customers can text photos for estimates",
    "Exact estimate process and turnaround expectations",
    "Photo rights for past projects",
    "Insurance, certifications, warranties, and payment methods",
  ],
} as const;
