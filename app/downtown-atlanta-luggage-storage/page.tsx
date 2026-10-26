import type { Metadata } from "next";
import { LandingPageTemplate, type LandingPageConfig } from "../landing-page-template";

const config: LandingPageConfig = {
  slug: "downtown-atlanta-luggage-storage",
  title: "Downtown Atlanta Luggage Storage",
  description:
    "Need luggage storage in Downtown Atlanta without the storage detour? QarryOn picks up, securely holds, and delivers your bags when you are ready.",
  label: "Downtown Atlanta luggage storage",
  eyebrow: "Downtown route",
  headline: ["Store your bags without", "the storage detour."],
  subhead:
    "Downtown Atlanta moves fast. QarryOn picks up your luggage, holds it securely, and delivers it back when you are ready to check in, head to the airport, or keep exploring.",
  proof: [
    ["Pickup", "From downtown hotels or venues"],
    ["Hold", "Secure storage while you explore"],
    ["Return", "Delivered when you need it next"],
  ],
  intro:
    "Whether you are in town for a conference, sports event, or a night out, storing luggage downtown should not force you into a separate stop or a confusing storage detour.",
  detail:
    "QarryOn is built for Atlanta travelers who want flexibility without dragging bags from one part of the city to another.",
  audience:
    "Downtown visitors, conference attendees, and travelers between destinations.",
  serviceName: "Downtown Atlanta Luggage Storage",
  sourceBase: "downtown_storage",
  faqs: [
    {
      question: "Is this good for hotel checkout?",
      answer:
        "Yes. If your room is checked out but your flight or next destination is not ready yet, we can securely hold your luggage and deliver it when your timing works.",
    },
    {
      question: "Can you pick up downtown?",
      answer:
        "Yes. QarryOn coordinates pickup from downtown locations including hotels, offices, event venues, and nearby neighborhoods.",
    },
    {
      question: "What if I am attending a convention or game?",
      answer:
        "This is a frequent fit for downtown travelers who want to move freely without carrying bags between sessions, events, or transit stops.",
    },
    {
      question: "Do you handle delivery back to my hotel?",
      answer:
        "Yes. Delivery can be coordinated back to a downtown hotel, venue, or another approved Atlanta destination.",
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

export default function DowntownAtlantaLuggageStoragePage() {
  return <LandingPageTemplate config={config} />;
}
