import type { Metadata } from "next";
import { LandingPageTemplate, type LandingPageConfig } from "../landing-page-template";

const config: LandingPageConfig = {
  slug: "mercedes-benz-stadium-luggage",
  title: "Mercedes-Benz Stadium Luggage Storage",
  description:
    "Need luggage storage near Mercedes-Benz Stadium? QarryOn picks up, secures, and delivers your bags so you can enjoy Atlanta events with total freedom.",
  label: "Mercedes-Benz Stadium luggage storage",
  eyebrow: "Stadium route",
  headline: ["Watch the game.", "Not your luggage."],
  subhead:
    "Stadium days are full of crowds, logistics, and timelines. QarryOn helps you move around the city without carrying a bag from the parking lot to the venue and back again.",
  proof: [
    ["Pickup", "From your hotel or arrival point"],
    ["Hold", "Safe for the event day"],
    ["Deliver", "To your next Atlanta destination"],
  ],
  intro:
    "Whether you are in Atlanta for a game, concert, or event day, you do not need your luggage to be part of the experience. QarryOn handles the bag logistics for you.",
  detail:
    "This is a convenient option for arrivals, departures, and the movement between stadium visits, neighborhood plans, or hotel arrangements.",
  audience:
    "Fans, concert-goers, and event travelers moving through Atlanta.",
  serviceName: "Mercedes-Benz Stadium Luggage Storage",
  sourceBase: "mercedes_benz_stadium",
  faqs: [
    {
      question: "Can you coordinate around stadium events?",
      answer:
        "Yes. Event schedules can create tight windows, and QarryOn is built for that exact type of timing.",
    },
    {
      question: "Is this good for fans who check out of a hotel?",
      answer:
        "Yes. It works well after checkout, before departure, or between activities when bags become a burden.",
    },
    {
      question: "Can I travel to another neighborhood with my bags already handled?",
      answer:
        "Yes. We can coordinate a delivery after the game so you stay mobile without the burden of luggage.",
    },
    {
      question: "Do you support group travel?",
      answer:
        "Yes. Family and group trips can be coordinated around a single event day or multi-stop Atlanta itinerary.",
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

export default function MercedesBenzStadiumLuggagePage() {
  return <LandingPageTemplate config={config} />;
}
