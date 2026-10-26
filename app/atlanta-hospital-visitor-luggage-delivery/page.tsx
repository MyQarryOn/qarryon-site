import type { Metadata } from "next";
import { LandingPageTemplate, type LandingPageConfig } from "../landing-page-template";

const config: LandingPageConfig = {
  slug: "atlanta-hospital-visitor-luggage-delivery",
  title: "Atlanta Hospital Visitor Luggage Delivery",
  description:
    "Traveling to Atlanta to visit a hospital patient? QarryOn helps hospital visitors move bags securely between the airport, hotel, and hospital area.",
  label: "Hospital visitor luggage support",
  eyebrow: "Care visit route",
  headline: ["Be where you need to be.", "We’ll handle the bags."],
  subhead:
    "Arriving in Atlanta to visit someone you care about? Go directly where you need to be while QarryOn coordinates your luggage pickup, secure hold, and later delivery.",
  proof: [
    ["Airport pickup", "From ATL to your route"],
    ["Secure hold", "While you visit or wait"],
    ["Delivery", "To your next approved destination"],
  ],
  intro:
    "Whether you are landing in Atlanta for a long hospital stay, short check-in, or family support trip, the last thing you need is to manage luggage while managing a serious situation.",
  detail:
    "QarryOn is built to simplify those transitions so visitors can move smoothly from the airport to a hotel, family residence, or other approved destination without losing time or energy.",
  audience:
    "Hospital visitors, family caregivers, and travelers supporting loved ones in Atlanta.",
  serviceName: "Atlanta Hospital Visitor Luggage Delivery",
  sourceBase: "hospital_visitor",
  faqs: [
    {
      question: "Can QarryOn help when I am visiting someone in the hospital?",
      answer:
        "Yes. We can coordinate luggage movement around your arrival and stay so you are not stuck with bags while visiting a patient.",
    },
    {
      question: "Can you deliver to a hotel or family home near the hospital?",
      answer:
        "Yes. We can coordinate delivery to the most relevant location for your visit.",
    },
    {
      question: "Will this help if I am arriving late at night?",
      answer:
        "Yes. We can help with late-arrival logistics and day-of delivery timing so you can focus on the situation at hand.",
    },
    {
      question: "Can this work for a longer family care trip?",
      answer:
        "Yes. Longer hospital or family support trips often require flexible luggage movement between travel points and accommodations.",
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

export default function AtlantaHospitalVisitorLuggageDeliveryPage() {
  return <LandingPageTemplate config={config} />;
}
