import type { Metadata } from "next";
import { LandingPageTemplate, type LandingPageConfig } from "../landing-page-template";

const config: LandingPageConfig = {
  slug: "atlanta-luggage-pickup-delivery",
  title: "Atlanta Luggage Pickup and Delivery | QarryOn",
  description:
    "Need Atlanta luggage pickup and delivery? QarryOn picks up luggage from arrivals, hotel checkout, and event venues and delivers it anywhere across Atlanta.",
  label: "Atlanta luggage pickup & delivery",
  eyebrow: "Atlanta route",
  headline: ["Pick up your bags.", "Keep your plans moving."],
  subhead:
    "Whether your trip is landing, checking out, or heading to an event, QarryOn picks up your luggage and delivers it on your schedule so Atlanta stays easy.",
  proof: [
    ["Pickup", "Hotel, airport, event, or home"],
    ["Secure hold", "Protected while you move"],
    ["Delivery", "Where you need it next"],
  ],
  intro:
    "Travel in Atlanta should feel proactive, not burdened by bags. QarryOn works for airport arrivals, hotel checkout, venue transitions, and any point where your schedule and your luggage are out of sync.",
  detail:
    "From ATL to Midtown, Downtown to Buckhead, we coordinate pickup, secure hold, and delivery with real-time updates so you always know where your bags are.",
  audience:
    "Travelers moving between airport arrivals, hotel stays, and Atlanta events",
  serviceName: "Atlanta Luggage Pickup and Delivery",
  sourceBase: "atl_pickup_delivery",
  faqs: [
    {
      question: "Can QarryOn pick up luggage across Atlanta?",
      answer:
        "Yes. QarryOn coordinates luggage pickup from airports, hotels, Airbnbs, offices, and event venues across Atlanta, with delivery to your next stop when the timing is right.",
    },
    {
      question: "What is the most common use case?",
      answer:
        "The most common use case is moving bags between a flight, hotel arrival, event, and final destination without carrying luggage in between.",
    },
    {
      question: "Can you handle airport-to-hotel or hotel-to-airport timing?",
      answer:
        "Yes. Airport, hotel, and event logistics are part of the core QarryOn model, especially for travelers moving through Atlanta on tight schedules.",
    },
    {
      question: "Do you offer real-time tracking?",
      answer:
        "Yes. Every booking is tracked from pickup through secure hold to delivery, with updates during the journey.",
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

export default function AtlantaLuggagePickupDeliveryPage() {
  return <LandingPageTemplate config={config} />;
}
