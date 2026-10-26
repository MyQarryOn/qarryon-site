import type { Metadata } from "next";
import { LandingPageTemplate, type LandingPageConfig } from "../landing-page-template";

const config: LandingPageConfig = {
  slug: "atlanta-airbnb-luggage-storage",
  title: "Atlanta Airbnb Luggage Storage",
  description:
    "Need Atlanta Airbnb luggage storage before check-in or after checkout? QarryOn picks up, stores, and delivers your luggage so your stay stays easy.",
  label: "Atlanta Airbnb luggage storage",
  eyebrow: "Airbnb route",
  headline: ["Turn Airbnb transitions into", "simple logistics."],
  subhead:
    "Airbnb arrivals and departures are often the hardest moments to manage luggage. QarryOn removes the extra stop so you can settle in or leave without the stress.",
  proof: [
    ["Pickup", "From your Airbnb or arrival point"],
    ["Hold", "Secure bag storage between plans"],
    ["Deliver", "Back when your stay is ready"],
  ],
  intro:
    "Whether you are arriving early, leaving late, or moving between Atlanta neighborhoods, QarryOn keeps your luggage off your shoulders and out of your way.",
  detail:
    "For travelers moving between rented homes, hotels, and airport schedules, a flexible suitcase pickup and delivery plan makes the whole itinerary smoother.",
  audience:
    "Atlanta Airbnb guests and travelers moving between rental homes and airport or hotel routes.",
  serviceName: "Atlanta Airbnb Luggage Storage",
  sourceBase: "airbnb_storage",
  faqs: [
    {
      question: "Can QarryOn help before Airbnb check-in?",
      answer:
        "Yes. That is one of our most common use cases. We can pick up your luggage and deliver it when your Airbnb is ready.",
    },
    {
      question: "What about after checkout?",
      answer:
        "We can hold your luggage and deliver it when you are ready to head to the airport or your next stop.",
    },
    {
      question: "Can you route between two different Atlanta neighborhoods?",
      answer:
        "Yes. Pickup in one neighborhood and delivery in another is a core strength of this service.",
    },
    {
      question: "Do you coordinate with hosts or concierges?",
      answer:
        "Yes. We can work with approved hosts, front desks, or designated contacts when needed.",
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

export default function AtlantaAirbnbLuggageStoragePage() {
  return <LandingPageTemplate config={config} />;
}
