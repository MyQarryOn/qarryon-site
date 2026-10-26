import type { Metadata } from "next";
import { LandingPageTemplate, type LandingPageConfig } from "../landing-page-template";

const config: LandingPageConfig = {
  slug: "georgia-world-congress-center-luggage",
  title: "Georgia World Congress Center Luggage Storage",
  description:
    "Need luggage storage near the Georgia World Congress Center? QarryOn picks up, holds, and delivers your bags so you can enjoy Atlanta events without carrying luggage.",
  label: "GWCC luggage storage",
  eyebrow: "Convention route",
  headline: ["Handle the convention.", "Leave the bags to us."],
  subhead:
    "The Georgia World Congress Center brings thousands of travelers into Atlanta. QarryOn helps you move between conferences, meetings, and evening plans without keeping your luggage in tow.",
  proof: [
    ["Pickup", "Meetings, hotel, or event venue"],
    ["Hold", "Secure temporary storage"],
    ["Deliver", "Back when your next stop is ready"],
  ],
  intro:
    "If you are traveling for a convention, corporate event, or city landmark visit, your day never needs to revolve around a bag. QarryOn moves luggage between your schedule and the next destination.",
  detail:
    "This service is especially valuable when you need to keep moving between sessions, meetings, or hotels while your luggage waits safely in between.",
  audience:
    "Convention attendees and travelers moving around downtown Atlanta events.",
  serviceName: "Georgia World Congress Center Luggage Storage",
  sourceBase: "gwcc",
  faqs: [
    {
      question: "Can QarryOn support convention schedules?",
      answer:
        "Yes. Convention and conference travel is one of the strongest fits for our luggage coordination model.",
    },
    {
      question: "Can I have my bags picked up from a hotel and delivered to GWCC?",
      answer:
        "Yes. Our team can coordinate timed luggage movement around your event and hotel schedule.",
    },
    {
      question: "Do you handle large group travel?",
      answer:
        "Yes. QarryOn is a strong option for groups and team travel when multiple bags need to move with a busy event calendar.",
    },
    {
      question: "Is this useful before or after a conference?",
      answer:
        "Yes. Before sessions or after checkout, QarryOn can remove the problem of where to keep your luggage while you stay on schedule.",
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

export default function GeorgiaWorldCongressCenterLuggagePage() {
  return <LandingPageTemplate config={config} />;
}
