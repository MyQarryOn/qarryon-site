import type { Metadata } from "next";
import { LandingPageTemplate, type LandingPageConfig } from "../landing-page-template";

const config: LandingPageConfig = {
  slug: "state-farm-arena-luggage",
  title: "State Farm Arena Luggage Storage | QarryOn",
  description:
    "Need luggage storage near State Farm Arena? QarryOn keeps your bags secure while you enjoy events, meetings, and onward travel through Atlanta.",
  label: "State Farm Arena luggage storage",
  eyebrow: "Arena route",
  headline: ["Keep attending the game.", "We’ll keep the bags moving."],
  subhead:
    "When event timing overlaps with travel, luggage becomes a distraction. QarryOn removes the hassle so you can stay focused on the day ahead.",
  proof: [
    ["Pickup", "At your hotel or arrival point"],
    ["Secure hold", "Protected while you explore"],
    ["Delivery", "When you are ready to depart"],
  ],
  intro:
    "Whether you are heading to an arena event, meeting, or next destination, luggage should not slow down the day. We offer the flexibility to handle the bags while you keep moving.",
  detail:
    "Our Atlanta luggage service is especially useful for travelers who need freedom during a busy downtown or Midtown day.",
  audience:
    "Event visitors, groups, and business travelers moving through downtown Atlanta.",
  serviceName: "State Farm Arena Luggage Storage",
  sourceBase: "state_farm_arena",
  faqs: [
    {
      question: "What if I need my bag before or after the arena event?",
      answer:
        "QarryOn can coordinate service windows that align with both the event and your travel schedule.",
    },
    {
      question: "Does this help if I have to check out of my hotel?",
      answer:
        "Yes. It is an ideal way to keep your luggage secure while you explore or travel after checkout.",
    },
    {
      question: "Can QarryOn handle family bags for an event day?",
      answer:
        "Yes. Group and family coordination is a common use case for arena travel, especially with multiple bags.",
    },
    {
      question: "Can I have luggage delivered to a different neighborhood after the event?",
      answer:
        "Yes. We can coordinate delivery to the next airport, hotel, or Atlanta destination as needed.",
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

export default function StateFarmArenaLuggagePage() {
  return <LandingPageTemplate config={config} />;
}
