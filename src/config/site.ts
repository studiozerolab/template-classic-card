// src/config/site.ts

export const siteConfig = {
  companyName: "Studio Zero",
  email: "info@studiozerolab.com",
  phone: "(555) 123-4567",
  address: "123 Main St, NY",
  socials: {
    instagram: "https://instagram.com/studiozero",
    twitter: "https://twitter.com/studiozero",
    facebook: ""
  },
  logoPath: "/src/assets/logo.svg"
};

export const siteMeta = {
  title: "Greenview Lawn Care",
  tagline: "Lawn care & landscaping in Your Town",
  description:
    "Reliable, year-round lawn care and landscaping services for homeowners in Your Town and surrounding areas.",
  url: "https://example.com",
};

export const branding = {
  businessName: "Greenview Lawn Care",
  phone: "(555) 123-4567",
  email: "info@greenviewlawn.com",
  serviceAreaLabel: "Proudly serving Your Town and neighboring communities.",
  logoSrc: "/assets/logo-placeholder.svg", // update with client logo
};

export const hero = {
  label: "Lawn Care & Landscaping • Your Town",
  heading: "We Take Care of Your Yard, So You Don't Have To",
  subheading:
    "Weekly lawn care, seasonal cleanups, and landscape maintenance from a local, licensed crew.",
  primaryCtaLabel: "Request a Free Estimate",
  primaryCtaHref: "#contact",
  secondaryCtaLabel: "Call Now",
  secondaryCtaHref: "tel:+15551234567",
  trustChips: ["Licensed & insured", "Free estimates", "Locally owned"],
  // Hero imagery for the collage
  heroImages: [
    {
      src: "../assets/placeHolder.jpg",
      alt: "Freshly cut green lawn in front of a home",
    },
    {
      src: "../assets/placeHolder.jpg",
      alt: "Mulched flower bed with trimmed edging",
    },
    {
      src: "../assets/placeHolder.jpg",
      alt: "Neatly trimmed hedges along a walkway",
    },
  ],
  quickServicesLine: "Weekly lawn care • Seasonal cleanups • Landscape maintenance",
};

export const services = {
  heading: "What We Do",
  intro:
    "From weekly mowing to full landscape care, we tailor our services to fit your property and schedule.",
  items: [
    {
      title: "Weekly Mowing & Trimming",
      description:
        "Scheduled lawn mowing, edging along driveways and walkways, and a clean finish every visit.",
      iconHint: "mower", // just a hint for which icon you might use
    },
    {
      title: "Mulch & Bed Maintenance",
      description:
        "Fresh mulch, clean edging, and weed control to keep your landscape beds looking sharp.",
      iconHint: "leaf",
    },
    {
      title: "Landscape Planting",
      description:
        "New plantings, bed refreshes, and shrub care to bring color and structure to your yard.",
      iconHint: "plant",
    },
    {
      title: "Seasonal Cleanups",
      description:
        "Spring and fall cleanups, leaf removal, and haul-away to get your property ready for the season.",
      iconHint: "calendar",
    },
    {
      title: "Shrub & Hedge Trimming",
      description:
        "Regular trimming to keep shrubs and hedges healthy, tidy, and within HOA guidelines.",
      iconHint: "shears",
    },
    {
      title: "Snow Removal (Optional)",
      description:
        "Driveway and walkway clearing during winter months, available in select areas.",
      iconHint: "snow",
    },
  ],
};

export const about = {
  heading: "A Local Team You Can Count On",
  body: [
    "Greenview Lawn Care is a locally owned company focused on reliable, high-quality work. We show up when we say we will, respect your property, and leave your yard looking better than we found it.",
    "Whether you need weekly mowing or full landscape care, we build a schedule that fits your needs and your budget.",
  ],
  image: {
    src: "/assets/placeHolder.jpg",
    alt: "Lawn care crew standing in front of a truck",
  },
  trustPoints: [
    "Licensed & insured for your peace of mind",
    "Clear communication and consistent scheduling",
    "Tidy, respectful crews on every visit",
    "Free, no-obligation estimates",
  ],
};

export const process = {
  heading: "How It Works",
  intro:
    "Getting started is simple. Here's how we go from first call to a yard you're proud of.",
  steps: [
    {
      title: "1. Walkthrough & Estimate",
      description:
        "Tell us about your property and goals. We'll review the yard and provide a clear, written estimate.",
    },
    {
      title: "2. Schedule Your Service",
      description:
        "Choose the services and frequency that fit your needs. We'll lock in a schedule you can rely on.",
    },
    {
      title: "3. Ongoing Care",
      description:
        "We show up on time, complete the work, and keep your yard looking its best all season long.",
    },
  ],
};

export const gallery = {
  heading: "Recent Work",
  intro:
    "Here are a few examples of lawns and landscapes we maintain for homeowners in your area.",
  items: [
    {
      src: "../assets/placeHolder.jpg",
      alt: "Front yard with neatly striped lawn",
    },
    {
      src: "../assets/placeHolder.jpg",
      alt: "Mulched flower bed with shrubs and flowers",
    },
    {
      src: "../assets/placeHolder.jpg",
      alt: "Backyard with patio and fresh sod",
    },
    {
      src: "../assets/placeHolder.jpg",
      alt: "Trimmed hedges along a driveway",
    },
    {
      src: "../assets/placeHolder.jpg",
      alt: "Leaf-free lawn after a fall cleanup",
    },
    {
      src: "../assets/placeHolder.jpg",
      alt: "Well-maintained landscape beds with stone border",
    },
  ],
};

export const testimonials = {
  heading: "What Our Customers Say",
  items: [
    {
      quote:
        "They keep our yard looking great all season. Reliable, friendly, and easy to work with.",
      name: "Sarah M.",
      location: "Your Town",
    },
    {
      quote:
        "We switched to Greenview last year and wish we had done it sooner. The lawn has never looked better.",
      name: "Robert L.",
      location: "Neighboring Town",
    },
    {
      quote:
        "Honest, professional, and always on time. Highly recommend them for weekly lawn care.",
      name: "Danielle P.",
      location: "Nearby Area",
    },
  ],
};

export const contact = {
  heading: "Ready for a Better-Looking Yard?",
  intro:
    "Tell us a bit about your property and the services you're interested in. We'll follow up with a free, no-obligation estimate.",
  successMessage:
    "Thanks for reaching out! We'll get back to you as soon as possible.",
};
