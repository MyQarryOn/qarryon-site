import type { Metadata } from "next";
import { LandingPageTemplate, type LandingPageConfig } from "../landing-page-template";

const config: LandingPageConfig = {
  slug: "midtown-atlanta-luggage-storage",
  title: "Midtown Atlanta Luggage Storage | QarryOn",
  description:
    "Need Midtown Atlanta luggage storage? QarryOn picks up your bags, stores them securely, and returns them when and where you need them across Atlanta.",
  label: "Midtown Atlanta luggage storage",
  eyebrow: "Midtown route",
  headline: ["Keep Midtown light.", "Keep your plans flexible."],
  subhead:
    "From a late checkout to an early arrival, Midtown travel often leaves a bag in the wrong place at the wrong time. QarryOn handles the bag so you can keep moving.",
  proof: [
    ["Pick up", "From your Midtown hotel or home"],
    ["Secure hold", "Stored while you explore"],
    ["Return", "Delivered to your next stop"],
  ],
  intro:
    "Whether you are between check-in and your next appointment, or simply want to enjoy Midtown without a suitcase in tow, QarryOn moves the inconvenience out of the way.",
  detail:
    "We take care of pickup and delivery so you can spend the day exploring, working, or attending meetings without traveling back to your room for your bags.",
  audience:
    "Midtown guests, business travelers, and day-trippers between destinations.",
  serviceName: "Midtown Atlanta Luggage Storage",
  sourceBase: "midtown_storage",
  faqs: [
    {
      question: "Does QarryOn work with Midtown hotels?",
      answer:
        "Yes. We regularly coordinate bag pickup and delivery for Midtown hotels, Airbnbs, and nearby service areas.",
    },
    {
      question: "Can I use this during a business trip?",
      answer:
        "Yes. It is a strong fit for business travelers who want to keep moving between meetings, offices, and evening plans without dragging luggage around.",
    },
    {
      question: "What if I am heading to a neighborhood event after checkout?",
      answer:
        "QarryOn can hold your luggage while you attend the event and deliver it back to your next destination when your schedule is ready.",
    },
    {
      question: "Can you store bags overnight?",
      answer:
        "Yes, as part of a coordinated pickup and delivery plan designed around your itinerary and timing.",
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

export default function MidtownAtlantaLuggageStoragePage() {
  return <LandingPageTemplate config={config} />;
}
