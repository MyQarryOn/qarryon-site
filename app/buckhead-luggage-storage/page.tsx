import type { Metadata } from "next";
import { LandingPageTemplate, type LandingPageConfig } from "../landing-page-template";

const config: LandingPageConfig = {
  slug: "buckhead-luggage-storage",
  title: "Buckhead Luggage Storage | QarryOn",
  description:
    "Need Buckhead luggage storage without an extra stop? QarryOn picks up, securely holds, and delivers your bags around Atlanta when you are ready.",
  label: "Buckhead luggage storage",
  eyebrow: "Buckhead route",
  headline: ["Leave the bags behind", "and keep the day moving."],
  subhead:
    "Buckhead schedules can change quickly. QarryOn handles the timing so you are not stuck between your bags and your plans.",
  proof: [
    ["Pickup", "From your hotel, rental, or event"],
    ["Hold", "Secure bag storage during the day"],
    ["Deliver", "Return when your next stop is ready"],
  ],
  intro:
    "From shopping and dining to family visits and evening plans, Buckhead is a place that deserves flexibility. We take the bag burden off your hands so you can enjoy the moment.",
  detail:
    "QarryOn is a smart fit for hotel guests, family travelers, and anyone moving between appointments, homes, and transportation points without needing to manage luggage at every stop.",
  audience:
    "Buckhead visitors, families, commuters, and travelers with changing plans.",
  serviceName: "Buckhead Luggage Storage",
  sourceBase: "buckhead_storage",
  faqs: [
    {
      question: "What types of Buckhead bookings work well?",
      answer:
        "Hotel checkout, hotel arrival, family travel, shopping days, and event transitions all fit well for a bag pickup and delivery service.",
    },
    {
      question: "Can you deliver back to a home or Airbnb?",
      answer:
        "Yes. Delivery can be arranged to a residence, hotel, or other approved destination.",
    },
    {
      question: "Do you handle multiple bags?",
      answer:
        "Yes. We can help with group or family luggage coordination for busy Atlanta days.",
    },
    {
      question: "What if I am moving between neighborhoods?",
      answer:
        "That is exactly where a concierge-style luggage service helps: pickup in one area and delivery in another, without a second trip.",
    },
  ],
};

export const metadata: Metadata = {
  title: config.title,
  description: config.description,
  alternates: {
    canonical: `/${config.slug}`,
  },
  openGraph: {
    title: config.title,
    description: config.description,
    url: `/${config.slug}`,
  },
};

export default function BuckheadLuggageStoragePage() {
  return <LandingPageTemplate config={config} />;
}
