import type { Metadata } from "next";
import { LandingPageTemplate, type LandingPageConfig } from "../landing-page-template";

const config: LandingPageConfig = {
  slug: "atlanta-hotel-checkout-luggage-delivery",
  title: "Atlanta Hotel Checkout Luggage Delivery",
  description:
    "Need luggage delivery after hotel checkout in Atlanta? QarryOn picks up your bags, stores them securely, and delivers them when your next plan is ready.",
  label: "Hotel checkout luggage service",
  eyebrow: "Checkout route",
  headline: ["Check out without carrying", "the day with you."],
  subhead:
    "Hotel checkout often happens before the travel day is truly over. QarryOn helps you move your bags without dragging them across Atlanta or back to your room.",
  proof: [
    ["Check out", "Leave the room with less stress"],
    ["Hold", "Secure luggage storage between plans"],
    ["Deliver", "To the airport or next stop"],
  ],
  intro:
    "From late flights to event evenings, hotel checkout can create awkward gaps between your trip plans and your luggage. QarryOn solves the in-between hours.",
  detail:
    "We help you continue the day without needing to haul a suitcase through lunch, meetings, or transportation transitions.",
  audience:
    "Atlanta hotel guests with luggage timing conflicts before flights or next destinations.",
  serviceName: "Atlanta Hotel Checkout Luggage Delivery",
  sourceBase: "hotel_checkout",
  faqs: [
    {
      question: "Will this work after I check out of my hotel?",
      answer:
        "Yes. One of the strongest use cases for QarryOn is helping travelers move luggage after checkout and before departure.",
    },
    {
      question: "Can you bring my bags to the airport?",
      answer:
        "Yes. Delivery to the airport departure area or next stop can be coordinated around your itinerary.",
    },
    {
      question: "Can I keep my bags while I explore Atlanta?",
      answer:
        "Yes. We can securely hold your luggage while you keep moving through the city.",
    },
    {
      question: "Do you work with hotel staff?",
      answer:
        "Yes. Coordinating with hotel front desks or designated contacts is often part of the process.",
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

export default function AtlantaHotelCheckoutLuggageDeliveryPage() {
  return <LandingPageTemplate config={config} />;
}
