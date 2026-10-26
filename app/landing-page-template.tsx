import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Plane,
  ShieldCheck,
} from "lucide-react";
import { TrackingLink } from "./analytics-links";
import "./atlanta-airport-luggage-service/airport.css";

export type LandingPageFaq = {
  question: string;
  answer: string;
};

export type LandingPageScenario = {
  title: string;
  body: string;
};

export type LandingPageLink = {
  href: string;
  label: string;
};

export type LandingPageConfig = {
  slug: string;
  title: string;
  description: string;
  label: string;
  eyebrow: string;
  headline: [string, string];
  subhead: string;
  proof: [string, string][];
  intro: string;
  detail: string;
  audience: string;
  serviceName: string;
  sourceBase: string;
  faqs: LandingPageFaq[];
  localScenarios?: LandingPageScenario[];
  audienceBenefits?: string[];
  serviceNotes?: string[];
  relatedPages?: LandingPageLink[];
};

function getDefaultLocalScenarios(config: LandingPageConfig): LandingPageScenario[] {
  const slug = config.slug;

  if (slug.includes("hospital")) {
    return [
      {
        title: "Arrive and go directly to the hospital",
        body: "Landing at ATL and heading straight to a care visit does not need to include a luggage detour.",
      },
      {
        title: "Stay close to family",
        body: "Keep your bags coordinated while you focus on visiting and supporting a loved one.",
      },
      {
        title: "Move to a hotel or family home later",
        body: "We can hold your luggage and deliver it when your visit schedule changes or you are ready for the next stop.",
      },
    ];
  }

  if (slug.includes("airbnb")) {
    return [
      {
        title: "Before check-in",
        body: "Drop your bags with QarryOn while you settle into the day before your rental is ready.",
      },
      {
        title: "After checkout",
        body: "Hold the luggage while you travel onward without carrying bags to the airport or another stop.",
      },
      {
        title: "Move between neighborhoods",
        body: "Travel light between accommodations or between Atlanta neighborhoods without a second trip for your bags.",
      },
    ];
  }

  if (slug.includes("hotel")) {
    return [
      {
        title: "Check out without the extra burden",
        body: "Keep your plans moving after checkout without dragging luggage through the last part of the day.",
      },
      {
        title: "Late flights and early departures",
        body: "Move bags on your timeline instead of arranging a separate stop at the wrong moment.",
      },
      {
        title: "Hotel to airport or next stay",
        body: "Keep luggage scheduled around your route instead of carrying it between stops.",
      },
    ];
  }

  if (slug.includes("stadium") || slug.includes("arena") || slug.includes("congress") || slug.includes("conference")) {
    return [
      {
        title: "Event-day simplicity",
        body: "Keep your day focused on the game, meeting, or venue schedule instead of bag logistics.",
      },
      {
        title: "From hotel to venue",
        body: "Move luggage between locations without stopping back at your room or carrying a bag through the venue.",
      },
      {
        title: "After the event",
        body: "Coordinate delivery when your next stop is ready instead of leaving luggage in the wrong place.",
      },
    ];
  }

  if (slug.includes("business")) {
    return [
      {
        title: "Tight travel schedules",
        body: "Keep a clean path from ATL to hotel, office, and meeting cadence without extra bag handling time.",
      },
      {
        title: "Multi-stop itineraries",
        body: "Move luggage between the airport, lodging, and meeting locations without repacking or retracing steps.",
      },
      {
        title: "Same-day flexibility",
        body: "Stay on schedule when travel plans shift between early flights, late meetings, and evening plans.",
      },
    ];
  }

  return [
    {
      title: "Pickup when it fits your plans",
      body: "Choose a handoff point that matches your arrival, destination, or hotel schedule.",
    },
    {
      title: "Secure hold while you move",
      body: "Keep your luggage protected while you work, explore, or transition between destinations.",
    },
    {
      title: "Delivery when the next stop is ready",
      body: "Have your bags arrive around your next Atlanta move instead of waiting on the wrong location.",
    },
  ];
}

function getDefaultAudienceBenefits(config: LandingPageConfig): string[] {
  if (config.slug.includes("hospital")) {
    return [
      "Visit patients without carrying luggage from arrival to the next stop",
      "Use a calm, simple logistics step during a stressful travel day",
      "Coordinate bag delivery around hotel, family-home, or airport timing",
    ];
  }

  if (config.slug.includes("airbnb")) {
    return [
      "Arrive before check-in without dragging bags around the city",
      "Leave after checkout without a midday luggage bottleneck",
      "Move easily between rental homes, hotels, and airport routes",
    ];
  }

  if (config.slug.includes("business")) {
    return [
      "Keep meetings and travel timing on track",
      "Move between ATL, hotel, and downtown routes without extra friction",
      "Reduce bag stress during short, high-pace Atlanta trips",
    ];
  }

  return [
    "Travel from ATL to your next stop without dragging bags through the city",
    "Keep your luggage coordinated around hotel, venue, and airport timing",
    "Move through Atlanta more freely without solving bag logistics at every stop",
  ];
}

function getDefaultServiceNotes(config: LandingPageConfig): string[] {
  const base = [
    "Standard service hours are 8:00 AM–10:00 PM.",
    "Airport handoffs are curbside only; there is no inside-terminal pickup.",
    "Core service is generally within the Atlanta I-285 area and may require approval outside the standard service corridor.",
    "Venue-adjacent handoffs depend on access permissions and operational feasibility.",
    "QarryOn does not transport passengers and does not provide medical or hospital access services.",
  ];

  if (config.slug.includes("hospital")) {
    return [
      "This page is for luggage coordination only and does not imply hospital affiliation or access permissions.",
      "Airport handoffs are curbside only, with approved pickup and delivery timing based on your itinerary.",
      "Standard service hours are 8:00 AM–10:00 PM, and outside-area requests may require approval.",
      "Authorized recipient details, handoff instructions, and delivery verification are required for some third-party drop-offs.",
    ];
  }

  return base;
}

function getDefaultRelatedPages(config: LandingPageConfig): LandingPageLink[] {
  const map: Record<string, LandingPageLink[]> = {
    "atlanta-luggage-pickup-delivery": [
      { href: "/atlanta-airport-luggage-service", label: "ATL Airport luggage service" },
      { href: "/hotel-airbnb-luggage-delivery", label: "Hotel & Airbnb luggage storage" },
      { href: "/events-conferences", label: "Event & conference luggage support" },
    ],
    "downtown-atlanta-luggage-storage": [
      { href: "/atlanta-airport-luggage-service", label: "ATL Airport luggage service" },
      { href: "/events-conferences", label: "Event luggage storage" },
      { href: "/atlanta-business-travel-luggage", label: "Business travel luggage support" },
    ],
    "midtown-atlanta-luggage-storage": [
      { href: "/atlanta-business-travel-luggage", label: "Atlanta business travel luggage" },
      { href: "/hotel-airbnb-luggage-delivery", label: "Hotel & Airbnb luggage support" },
      { href: "/atlanta-luggage-storage", label: "Atlanta luggage storage" },
    ],
    "buckhead-luggage-storage": [
      { href: "/atlanta-airbnb-luggage-storage", label: "Atlanta Airbnb luggage storage" },
      { href: "/atlanta-hotel-checkout-luggage-delivery", label: "Hotel checkout luggage delivery" },
      { href: "/atlanta-luggage-pickup-delivery", label: "Atlanta luggage pickup & delivery" },
    ],
    "georgia-world-congress-center-luggage": [
      { href: "/events-conferences", label: "Conference luggage support" },
      { href: "/atlanta-business-travel-luggage", label: "Business travel luggage" },
      { href: "/atlanta-group-luggage-delivery", label: "Group luggage delivery" },
    ],
    "mercedes-benz-stadium-luggage": [
      { href: "/state-farm-arena-luggage", label: "State Farm Arena luggage support" },
      { href: "/events-conferences", label: "Event luggage storage" },
      { href: "/atlanta-group-luggage-delivery", label: "Group luggage delivery" },
    ],
    "state-farm-arena-luggage": [
      { href: "/mercedes-benz-stadium-luggage", label: "Mercedes-Benz Stadium luggage" },
      { href: "/events-conferences", label: "Event luggage support" },
      { href: "/atlanta-group-luggage-delivery", label: "Group luggage delivery" },
    ],
    "atlanta-airbnb-luggage-storage": [
      { href: "/hotel-airbnb-luggage-delivery", label: "Hotel & Airbnb luggage support" },
      { href: "/atlanta-hotel-checkout-luggage-delivery", label: "Hotel checkout luggage delivery" },
      { href: "/atlanta-luggage-storage", label: "Atlanta luggage storage" },
    ],
    "atlanta-hospital-visitor-luggage-delivery": [
      { href: "/atlanta-luggage-pickup-delivery", label: "Atlanta luggage pickup & delivery" },
      { href: "/atlanta-airbnb-luggage-storage", label: "Atlanta Airbnb luggage storage" },
      { href: "/atlanta-airport-luggage-service", label: "ATL Airport luggage service" },
    ],
    "atlanta-hotel-checkout-luggage-delivery": [
      { href: "/hotel-airbnb-luggage-delivery", label: "Hotel & Airbnb luggage support" },
      { href: "/atlanta-airport-luggage-service", label: "ATL Airport luggage service" },
      { href: "/atlanta-luggage-pickup-delivery", label: "Atlanta luggage pickup & delivery" },
    ],
    "atlanta-business-travel-luggage": [
      { href: "/midtown-atlanta-luggage-storage", label: "Midtown Atlanta luggage storage" },
      { href: "/atlanta-airport-luggage-service", label: "ATL airport luggage pickup" },
      { href: "/events-conferences", label: "Event luggage support" },
    ],
    "atlanta-group-luggage-delivery": [
      { href: "/events-conferences", label: "Conference luggage support" },
      { href: "/atlanta-business-travel-luggage", label: "Business travel luggage" },
      { href: "/atlanta-luggage-pickup-delivery", label: "Atlanta luggage pickup & delivery" },
    ],
  };

  return map[config.slug] ?? [
    { href: "/atlanta-luggage-pickup-delivery", label: "Atlanta luggage pickup & delivery" },
    { href: "/atlanta-airport-luggage-service", label: "ATL Airport luggage service" },
    { href: "/hotel-airbnb-luggage-delivery", label: "Hotel & Airbnb luggage support" },
  ];
}

export function LandingPageTemplate({ config }: { config: LandingPageConfig }) {
  const localScenarios = config.localScenarios ?? getDefaultLocalScenarios(config);
  const audienceBenefits = config.audienceBenefits ?? getDefaultAudienceBenefits(config);
  const serviceNotes = config.serviceNotes ?? getDefaultServiceNotes(config);
  const relatedPages = config.relatedPages ?? getDefaultRelatedPages(config);
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: config.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `https://www.myqarryon.com/${config.slug}#service`,
    url: `https://www.myqarryon.com/${config.slug}`,
    name: config.serviceName,
    serviceType: "Luggage concierge service",
    provider: {
      "@id": "https://www.myqarryon.com/#organization",
    },
    areaServed: {
      "@type": "City",
      name: "Atlanta",
    },
    description: config.description,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="airport-page">
        <nav className="airport-nav">
          <div className="airport-container airport-nav-inner">
            <Link href="/" className="airport-brand" aria-label="QarryOn home">
              <Image
                src="/Light Logo Header.png"
                alt="QarryOn"
                width={300}
                height={100}
                priority
                className="airport-logo"
              />
            </Link>

            <div className="airport-nav-links">
              <a href="#how">How it Works</a>
              <a href="#pricing">Pricing</a>
              <a href="#faq">FAQs</a>
            </div>

            <TrackingLink
              href="/#booking"
              source={`${config.sourceBase}_nav_cta`}
              className="airport-btn airport-btn-dark"
            >
              Get Instant Estimate
            </TrackingLink>
          </div>
        </nav>

        <section className="airport-hero">
          <div className="airport-video-bg">
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="airport-video"
            >
              <source src="/atlanta-hero.mp4" type="video/mp4" />
            </video>
            <div className="airport-video-overlay" />
          </div>

          <div className="airport-container airport-hero-grid">
            <div className="airport-hero-copy">
              <div className="airport-eyebrow airport-eyebrow-light">
                {config.label}
              </div>

              <h1>
                {config.headline[0]}
                <span>{config.headline[1]}</span>
              </h1>

              <p className="airport-hero-sub">{config.subhead}</p>

              <div className="airport-actions">
                <TrackingLink
                  href="/#booking"
                  source={`${config.sourceBase}_hero`}
                  className="airport-btn airport-btn-primary"
                >
                  Get Instant Estimate
                </TrackingLink>

                <a href="#how" className="airport-btn airport-btn-glass">
                  See How It Works
                </a>
              </div>

              <div className="airport-proof-row">
                {config.proof.map(([title, value]) => (
                  <div className="airport-proof" key={title}>
                    <strong>{title}</strong>
                    <span>{value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="airport-journey-wrap">
              <div className="airport-journey-back airport-journey-back-two" />
              <div className="airport-journey-back airport-journey-back-one" />

              <div className="airport-journey-card">
                <div className="airport-live-badge">
                  <span className="airport-live-dot" />
                  Illustrative journey
                </div>

                <div className="airport-journey-header">
                  <div>
                    <span className="airport-journey-kicker">Illustrative route</span>
                    <strong>{config.eyebrow}</strong>
                  </div>

                  <div className="airport-journey-status">
                    <span className="airport-live-dot" />
                    Example itinerary
                  </div>
                </div>

                <p className="airport-journey-note">
                  This visual shows a sample bag flow and is not live tracking or real-time status data.
                </p>

                <div className="airport-route">
                  <div className="airport-route-item">
                    <div className="airport-route-marker airport-route-active">
                      <Plane size={18} />
                    </div>
                    <div>
                      <strong>Pickup point</strong>
                      <span>Airport, hotel, venue, or home</span>
                    </div>
                  </div>

                  <div className="airport-route-line" />

                  <div className="airport-route-item">
                    <div className="airport-route-marker">
                      <ShieldCheck size={18} />
                    </div>
                    <div>
                      <strong>Secure hold</strong>
                      <span>Your bags are protected while you move</span>
                    </div>
                  </div>

                  <div className="airport-route-line" />

                  <div className="airport-route-item">
                    <div className="airport-route-marker">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <strong>Next destination</strong>
                      <span>Hotel, event, airport, or home</span>
                    </div>
                  </div>
                </div>

                <div className="airport-journey-footer">
                  <span>Illustrative route</span>
                  <strong>Ready when you are</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="how" className="airport-story">
          <div className="airport-container airport-story-grid">
            <div>
              <div className="airport-eyebrow">How it works</div>
              <h2>
                The bag problem
                <span>stays solved.</span>
              </h2>
            </div>

            <div>
              <p className="airport-story-lead">{config.intro}</p>

              <div className="airport-gap-scenarios">
                <div className="airport-gap-scenario">
                  <div className="airport-gap-label">Step 1</div>
                  <strong>Book your timing</strong>
                  <p>Choose a pickup window and let QarryOn handle the schedule around your Atlanta plan.</p>
                </div>
                <div className="airport-gap-scenario">
                  <div className="airport-gap-label">Step 2</div>
                  <strong>We pick up</strong>
                  <p>Whether you are at the airport, hotel, event, or home, QarryOn gets the luggage moving.</p>
                </div>
                <div className="airport-gap-scenario">
                  <div className="airport-gap-label">Step 3</div>
                  <strong>Secure hold</strong>
                  <p>Your bags wait in a coordinated, secure handoff plan while your itinerary keeps moving.</p>
                </div>
                <div className="airport-gap-scenario">
                  <div className="airport-gap-label">Step 4</div>
                  <strong>Delivery</strong>
                  <p>When you are ready, QarryOn delivers the bags to your next stop without another detour.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="airport-section">
          <div className="airport-container">
            <div className="airport-section-head">
              <div className="airport-eyebrow" style={{ color: "#0d1b2a" }}>
                Why it fits
              </div>
              <h2>Designed around the moments luggage becomes a problem.</h2>
              <p>{config.detail}</p>
            </div>

            <div className="airport-steps">
              <article className="airport-step">
                <span className="airport-step-num">01 / PICKUP</span>
                <div className="airport-step-icon">
                  <Plane size={24} />
                </div>
                <h3>Arrival and transition support</h3>
                <p>From airport landings to hotel arrivals, we coordinate a smooth bag handoff so you can begin the city without a luggage bottleneck.</p>
              </article>

              <article className="airport-step airport-step-two">
                <span className="airport-step-num">02 / HOLD</span>
                <div className="airport-step-icon">
                  <ShieldCheck size={24} />
                </div>
                <h3>Secure, flexible storage</h3>
                <p>Your bags are held in a controlled, secure plan while you attend meetings, explore, or transition between travel points.</p>
              </article>

              <article className="airport-step">
                <span className="airport-step-num">03 / DELIVER</span>
                <div className="airport-step-icon">
                  <MapPin size={24} />
                </div>
                <h3>Destination-ready delivery</h3>
                <p>We bring your luggage back when your next stop is ready — to a hotel, Airbnb, airport, or another approved Atlanta destination.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="airport-use-section airport-section">
          <div className="airport-container">
            <div className="airport-section-head airport-section-head-light">
              <div className="airport-eyebrow airport-eyebrow-light">Best for</div>
              <h2 style={{ color: "white" }}>{config.audience}</h2>
            </div>

            <div className="airport-use-grid">
              {audienceBenefits.map((benefit, index) => (
                <article key={benefit}>
                  <span>{String(index + 1).padStart(2, "0")} / BENEFIT</span>
                  <h3>
                    {index === 0 && "Arrival-ready travel"}
                    {index === 1 && "Flexible timing"}
                    {index === 2 && "Simpler transitions"}
                  </h3>
                  <p>{benefit}</p>
                </article>
              ))}
            </div>

            <div className="airport-gap-scenarios" style={{ marginTop: "2rem" }}>
              {localScenarios.map((scenario, index) => (
                <div className="airport-gap-scenario" key={scenario.title}>
                  <div className="airport-gap-label">SCENARIO {index + 1}</div>
                  <strong>{scenario.title}</strong>
                  <p>{scenario.body}</p>
                </div>
              ))}
            </div>

            <div className="airport-service-notes" style={{ marginTop: "2rem" }}>
              {serviceNotes.map((note) => (
                <div key={note} className="airport-service-note">{note}</div>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="airport-pricing">
          <div className="airport-container">
            <div className="airport-section-head" style={{ maxWidth: "820px" }}>
              <div className="airport-eyebrow">Simple pricing</div>
              <h2>Clear rates for luggage movement, secure hold, and delivery.</h2>
            </div>

            <div className="airport-pricing-grid">
              <article className="airport-price-card">
                <div className="airport-tier-label">Qarry Lite</div>
                <div className="airport-price">$54</div>
                <p>Simple pickup and delivery for a standard short-distance Atlanta route.</p>
                <ul>
                  <li>Up to 2 included bags</li>
                  <li>Same-day coordination</li>
                  <li>Pickup and delivery timing</li>
                </ul>
                <TrackingLink href="/#booking" source={`${config.sourceBase}_lite`} className="airport-btn airport-btn-primary airport-price-btn">Book Lite</TrackingLink>
              </article>

              <article className="airport-price-card airport-price-featured">
                <div className="airport-featured-badge">Most popular</div>
                <div className="airport-tier-label">Qarry Plus</div>
                <div className="airport-price">$74</div>
                <p>Good for flexible Atlanta routes, more luggage, or a more dynamic itinerary.</p>
                <ul>
                  <li>Up to 5 included bags</li>
                  <li>Priority coordination</li>
                  <li>One reasonable travel adjustment</li>
                </ul>
                <TrackingLink href="/#booking" source={`${config.sourceBase}_plus`} className="airport-btn airport-btn-primary airport-price-btn">Book Plus</TrackingLink>
              </article>

              <article className="airport-price-card">
                <div className="airport-tier-label">Qarry Elite</div>
                <div className="airport-price">$110</div>
                <p>High-touch support for event weeks, family travel, and complicated timing.</p>
                <ul>
                  <li>Up to 8 included bags</li>
                  <li>Priority service planning</li>
                  <li>Flexible changes and coordination</li>
                </ul>
                <TrackingLink href="/#booking" source={`${config.sourceBase}_elite`} className="airport-btn airport-btn-primary airport-price-btn">Book Elite</TrackingLink>
              </article>
            </div>

            <div className="airport-addon-strip">
              <div className="airport-addon"><span>+$8</span> each extra bag</div>
              <div className="airport-addon"><span>+$12</span> same-night delivery adjustment</div>
              <div className="airport-addon"><span>+$15</span> route outside service corridor</div>
              <div className="airport-addon"><span>+Custom</span> group or event coordination</div>
            </div>
          </div>
        </section>

        <section id="faq" className="airport-faq-section airport-section">
          <div className="airport-container airport-faq-layout">
            <div>
              <div className="airport-eyebrow">FAQs</div>
              <h2>Everything travelers ask before they book.</h2>
              <p>{config.serviceName} is shaped for busy Atlanta routines, schedule changes, and travelers who want their luggage handled without extra detours.</p>
            </div>

            <div className="airport-faq-list">
              {config.faqs.map((faq) => (
                <div className="airport-faq" key={faq.question}>
                  <h3>{faq.question}</h3>
                  <p>{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="airport-section airport-section-light">
          <div className="airport-container">
            <div className="airport-section-head">
              <div className="airport-eyebrow">Related Atlanta routes</div>
              <h2>Explore nearby luggage support options.</h2>
            </div>

            <div className="airport-related-links" style={{ display: "grid", gap: "0.75rem", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
              {relatedPages.map((page) => (
                <Link key={page.href} href={page.href} className="airport-btn airport-btn-glass" style={{ justifyContent: "center", textAlign: "center" }}>
                  {page.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="airport-final">
          <div className="airport-final-glow" />
          <div className="airport-container airport-final-inner">
            <h2>
              Your next Atlanta move
              <span>does not need a suitcase attached.</span>
            </h2>
            <p>
              Book QarryOn for airport logistics, hotel transitions, venue days, and multi-stop Atlanta travel. We will keep your bags moving while you stay focused on the plan.
            </p>
            <TrackingLink
              href="/#booking"
              source={`${config.sourceBase}_final_cta`}
              className="airport-btn airport-btn-primary"
            >
              Get Instant Estimate
            </TrackingLink>
          </div>
        </section>

        <footer className="airport-footer">
          <div className="airport-container">
            <div className="airport-footer-top">
              <div className="airport-footer-brand">
                <Link href="/" aria-label="QarryOn home">
                  <Image
                    src="/Light Logo Header.png"
                    alt="QarryOn"
                    width={240}
                    height={80}
                    className="airport-footer-logo"
                  />
                </Link>
                <p>
                  Simplifying Atlanta baggage movement for travelers, families, and event days with secure, flexible pickup and delivery.
                </p>
              </div>

              <div className="airport-footer-links">
                <div>
                  <h4>Navigate</h4>
                  <Link href="/">Home</Link>
                  <a href="#how">How it works</a>
                  <a href="#pricing">Pricing</a>
                </div>
                <div>
                  <h4>Services</h4>
                  <Link href="/atlanta-airport-luggage-service">ATL Airport</Link>
                  <Link href="/atlanta-luggage-storage">Storage</Link>
                  <Link href="/hotel-airbnb-luggage-delivery">Hotel & Airbnb</Link>
                </div>
                <div>
                  <h4>Company</h4>
                  <Link href="/terms">Terms</Link>
                  <Link href="/privacy">Privacy</Link>
                </div>
              </div>
            </div>

            <div className="airport-footer-bottom">
              <span>© 2025 QarryOn</span>
              <div>
                <Link href="/terms">Terms</Link>
                <Link href="/privacy">Privacy</Link>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}

export const defaultLandingMetadata = (config: LandingPageConfig): Metadata => ({
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
});
