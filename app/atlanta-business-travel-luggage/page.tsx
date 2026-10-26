import type { Metadata } from "next";
import { LandingPageTemplate, type LandingPageConfig } from "../landing-page-template";

const config: LandingPageConfig = {
  slug: "atlanta-business-travel-luggage",
  title: "Atlanta Business Travel Luggage Support | QarryOn",
  description:
    "Need luggage support during Atlanta business travel? QarryOn handles airport pickup, hotel transitions, and secure bag delivery for busy work schedules.",
  label: "Atlanta business travel luggage",
  eyebrow: "Business route",
  headline: ["Keep meetings on time.", "Let your bags keep pace."],
  subhead:
    "Business travel leaves little room for bag logistics. QarryOn helps professionals move through Atlanta without wasting time on luggage logistics between meetings, flights, and hotels.",
  proof: [
    ["Airport move", "From ATL to your next stop"],
    ["Hotel flow", "Between check-in and meetings"],
    ["Secure return", "Back on your timeline"],
  ],
  intro:
    "Whether you are traveling for a conference, leadership meeting, or a quick overnight trip, bag movement should not slow down your schedule. QarryOn helps business travelers stay focused.",
  detail:
    "Atlanta is a quick-turn city for visits, and our service is designed to support the kinds of timing issues that business travelers deal with every week.",
  audience:
    "Corporate travelers, consultants, and professionals with tight schedules.",
  serviceName: "Atlanta Business Travel Luggage Support",
  sourceBase: "business_travel",
  faqs: [
    {
      question: "Is this useful for corporate travel?",
      answer:
        "Yes. It is especially useful for travel that includes hotel changes, flight timing, and meetings in multiple parts of the city.",
    },
    {
      question: "Can you support early flights and late meetings?",
      answer:
        "Yes. Our coordination model is built for tight schedules and changing itineraries.",
    },
    {
      question: "Can QarryOn help with group travel?",
      answer:
        "Yes. Teams and traveling groups can often benefit from a single bag handling coordination plan.",
    },
    {
      question: "Do you serve downtown and Midtown locations?",
      answer:
        "Yes. We are built around core Atlanta travel corridors and neighborhood transitions.",
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

export default function AtlantaBusinessTravelLuggagePage() {
  return <LandingPageTemplate config={config} />;
}
