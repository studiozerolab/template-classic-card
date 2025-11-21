// src/config/site.ts
const STUDIO_ZERO_URL =
  import.meta.env.PUBLIC_STUDIO_ZERO_URL ||
  "https://studiozerosite.netlify.app";

export function getLinkToSZ() {
  const utm_source = "demo-classic-card";
  return `${STUDIO_ZERO_URL}/?utm_source=${utm_source}`;
}

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
      src: "../assets/cutLawnLow.jpg",
      alt: "Freshly cut green lawn in front of a home",
    },
    {
      src: "../assets/mower.jpg",
      alt: "Mulched flower bed with trimmed edging",
    },
    {
      src: "../assets/lawnTracks.jpg",
      alt: "Neatly trimmed hedges along a walkway",
    },
  ],
  quickServicesLine: "Weekly lawn care • Seasonal cleanups • Design • Maintenance",
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
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
	<path fill="currentColor" d="M18.5 14c-.95 0-1.81.38-2.44 1H9.39L5.74 3H2v2h2.26L7 14.05c-.15-.02-.32-.05-.5-.05C4.57 14 3 15.57 3 17.5S4.57 21 6.5 21c1.39 0 2.59-.82 3.15-2h5.7c.56 1.18 1.76 2 3.15 2c1.93 0 3.5-1.57 3.5-3.5S20.43 14 18.5 14m-12 5c-.83 0-1.5-.67-1.5-1.5S5.67 16 6.5 16s1.5.67 1.5 1.5S7.33 19 6.5 19m12 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5m-8.37-5l-.6-2h3.23c.74 0 1.45.43 1.79 1.11L15 14z" />
</svg>`,
      iconHint: "mower",
    },
    {
      title: "Mulch & Bed Maintenance",
      description:
        "Fresh mulch, clean edging, and weed control to keep your landscape beds looking sharp.",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
	<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
		<path d="M5 21c.5-4.5 2.5-8 7-10" />
		<path d="M9 18c6.218 0 10.5-3.288 11-12V4h-4.014c-9 0-11.986 4-12 9c0 1 0 3 2 5h3z" />
	</g>
</svg>`,
      iconHint: "leaf",
    },
    {
      title: "Landscape Planting",
      description:
        "New plantings, bed refreshes, and shrub care to bring color and structure to your yard.",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
	<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 22v-8m0-4v4m0 0l4-2m1-5A5 5 0 0 0 7 7m5 11H7.5a5.5 5.5 0 1 1 0-11H9m3 11h4.5A5.5 5.5 0 0 0 17 7.022" />
</svg>`,
      iconHint: "plant",
    },
    {
      title: "Seasonal Cleanups",
      description:
        "Spring and fall cleanups, leaf removal, and haul-away to get your property ready for the season.",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
	<path fill="currentColor" d="M19 4h-2V3a1 1 0 0 0-2 0v1H9V3a1 1 0 0 0-2 0v1H5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3m1 15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-7h16Zm0-9H4V7a1 1 0 0 1 1-1h2v1a1 1 0 0 0 2 0V6h6v1a1 1 0 0 0 2 0V6h2a1 1 0 0 1 1 1Z" />
</svg>`,
      iconHint: "calendar",
    },
    {
      title: "Shrub & Hedge Trimming",
      description:
        "Regular trimming to keep shrubs and hedges healthy, tidy, and within HOA guidelines.",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 15 15">
	<path fill="currentColor" d="M10 11.57L7.5 9.43L5 11.57V13H4v-1.43L1.02 9.02H.75c-.41 0-.75-.34-.75-.75v-5.6c0-.38.29-.7.67-.74l1.58-.18c1.5-.17 3.01-.25 4.51-.25h1.48c1.5 0 3.01.08 4.51.25l1.58.18c.38.04.67.36.67.74v5.6c0 .41-.34.75-.75.75h-.27L11 11.57V13h-1zm1-1.26L12.5 9h-4l1.5 1.31V9h1zm-6 0L6.5 9h-4L4 10.31V9h1z" />
</svg>`,
      iconHint: "shears",
    },
    {
      title: "Snow Removal",
      description:
        "Driveway and walkway clearing during winter months, available in select areas.",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26">
	<path fill="currentColor" d="M15.5 0c-2.29 0-4.188 1.293-5.344 3.094C9.94 3.064 9.735 3 9.5 3C6.998 3 5 4.735 4.344 7.031C1.946 7.12 0 9.081 0 11.5C0 13.973 2.027 16 4.5 16h16c3.026 0 5.5-2.474 5.5-5.5c0-2.575-1.822-4.662-4.219-5.25C21.183 2.279 18.64 0 15.5 0m0 2a4.47 4.47 0 0 1 4.469 4.125l.093.844l.813.062A3.48 3.48 0 0 1 24 10.5c0 1.944-1.556 3.5-3.5 3.5h-16A2.485 2.485 0 0 1 2 11.5a2.485 2.485 0 0 1 2.875-2.469l1.063.188l.093-1.063A3.48 3.48 0 0 1 9.5 5c.26 0 .53.027.813.094l.78.187l.345-.718A4.49 4.49 0 0 1 15.5 2m3.688 14.844a.518.518 0 0 0-.188.906l1.219 1.219h-1.782a.532.532 0 1 0 .063 1.062h1.719L19 21.25a.53.53 0 1 0 .75.75l1.219-1.219V22.5a.531.531 0 0 0 1.062 0v-1.719L23.25 22a.53.53 0 1 0 .75-.75l-1.219-1.219H24.5a.531.531 0 0 0 0-1.062h-1.719L24 17.75a.518.518 0 0 0-.375-.906a.52.52 0 0 0-.375.156l-1.219 1.219V17.5a.518.518 0 0 0-.593-.531h-.063a.52.52 0 0 0-.406.531v.719L19.75 17a.52.52 0 0 0-.438-.156zm-13.875.125a.52.52 0 0 0-.344.531v1.719L3.75 18a.52.52 0 0 0-.438-.156H3.25a.518.518 0 0 0-.25.906l1.219 1.219H2.437A.532.532 0 1 0 2.5 21.03h1.719L3 22.25a.53.53 0 1 0 .75.75l1.219-1.219V23.5a.531.531 0 0 0 1.062 0v-1.719L7.25 23a.53.53 0 1 0 .75-.75l-1.219-1.219H8.5a.531.531 0 0 0 0-1.062H6.781L8 18.75a.518.518 0 0 0-.375-.906a.52.52 0 0 0-.375.156l-1.219 1.219V17.5a.518.518 0 0 0-.593-.531h-.126zm8 2a.52.52 0 0 0-.344.531v1.719L11.75 20a.52.52 0 0 0-.438-.156a.518.518 0 0 0-.312.906l1.219 1.219h-1.782a.532.532 0 1 0 .063 1.062h1.719L11 24.25a.53.53 0 1 0 .75.75l1.219-1.219V25.5a.531.531 0 0 0 1.062 0v-1.719L15.25 25a.53.53 0 1 0 .75-.75l-1.219-1.219H16.5a.531.531 0 0 0 0-1.062h-1.719L16 20.75a.518.518 0 0 0-.375-.906a.52.52 0 0 0-.375.156l-1.219 1.219V19.5a.518.518 0 0 0-.594-.531z" />
</svg>`,
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
    src: "../assets/chainsaw.jpg",
    alt: "Lawn care crew standing in front of a truck",
  },
  trustPoints: [
    "Licensed & insured for your peace of mind",
    "Clear communication and consistent scheduling",
    "Tidy, respectful crews on every visit",
    "Free, no-obligation estimates",
  ],
};

export const processSection = {
  heading: "How It Works",
  intro:
    "Getting started is simple. Here's how we go from first call to a yard you're proud of.",
  steps: [
    {
      title: "Walkthrough & Estimate",
      description:
        "Tell us about your property and goals. We'll review the yard and provide a clear, written estimate.",
    },
    {
      title: "Schedule Your Service",
      description:
        "Choose the services and frequency that fit your needs. We'll lock in a schedule you can rely on.",
    },
    {
      title: "Ongoing Care",
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
      src: "../assets/patioLiving.jpg",
      alt: "Front yard with neatly striped lawn",
    },
    {
      src: "../assets/poolLiving.jpg",
      alt: "Mulched flower bed with shrubs and flowers",
    },
    {
      src: "../assets/gardenPath.jpg",
      alt: "Backyard with patio and fresh sod",
    },
    {
      src: "../assets/estateStairs.jpg",
      alt: "Trimmed hedges along a driveway",
    },
    {
      src: "../assets/apartmentPath.jpg",
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
