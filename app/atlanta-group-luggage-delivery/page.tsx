import type { Metadata } from "next";
import { LandingPageTemplate, type LandingPageConfig } from "../landing-page-template";

const config: LandingPageConfig = {
  slug: "atlanta-group-luggage-delivery",
  title: "Atlanta Group Luggage Delivery | QarryOn",
  description:
    "Need group luggage delivery in Atlanta? QarryOn handles multiple bags for families, teams, and event travel so everyone keeps moving without the burden.",
  label: "Group luggage delivery",
  eyebrow: "Group route",
  headline: ["Move the group.", "Leave the bags to us."],
  subhead:
    "Group travel creates unusual timing, extra bags, and more moving parts. QarryOn makes that complicated step simpler by coordinating pickup, secure hold, and delivery across the city.",
  proof: [
    ["Pickup", "From hotel, airport, or venue"],
    ["Secure hold", "Managed without people juggling bags"],
    ["Return", "Delivered to the next group stop"],
  ],
  intro:
    "Families, sports teams, event groups, and travel parties regularly need more than one bag moved at the same time. QarryOn supports those moments with flexible, coordinated service.",
  detail:
    "Whether you are headed from the airport to group lodging, a stadium, or a final destination, QarryOn helps simplify the entire movement of luggage for the trip.",
  audience:
    "Families, teams, conference groups, and event travelers needing coordinated luggage movement.",
  serviceName: "Atlanta Group Luggage Delivery",
  sourceBase: "group_delivery",
  faqs: [
    {
      question: "Can this help with family travel?",
      answer:
        "Yes. Families often benefit from luggage movement that keeps bags out of the way while everyone transitions between travel points.",
    },
    {
      question: "Can you coordinate multiple bags at once?",
      answer:
        "Yes. The service is designed to support larger group movement and multiple bag logistics.",
    },
    {
      question: "Does this work with events and conferences?",
      answer:
        "Yes. It is especially helpful for larger parties moving between airport, lodging, and venues.",
    },
    {
      question: "Can I use this for a multi-stop Atlanta trip?",
      answer:
        "Yes. We can align with a multi-stop itinerary to keep the group moving smoothly.",
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

export default function AtlantaGroupLuggageDeliveryPage() {
  return <LandingPageTemplate config={config} />;
}
