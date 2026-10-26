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
};

export function LandingPageTemplate({ config }: { config: LandingPageConfig }) {
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
                  Your QarryOn journey
                </div>

                <div className="airport-journey-header">
                  <div>
                    <span className="airport-journey-kicker">Atlanta route</span>
                    <strong>{config.eyebrow}</strong>
                  </div>

                  <div className="airport-journey-status">
                    <span className="airport-live-dot" />
                    QarryOn in progress
                  </div>
                </div>

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
                  <span>Journey status</span>
                  <strong>Ready when you are</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="how" className="airport-story airport-section-light">
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
              <article>
                <span>01 / TRAVELER</span>
                <h3>Airport-to-city movement</h3>
                <p>Get from ATL to your next stop without stressing over a suitcase while your day begins.</p>
              </article>
              <article>
                <span>02 / TIMING</span>
                <h3>Early arrivals and late departures</h3>
                <p>Keep your schedule smooth with luggage support during the awkward in-between hours.</p>
              </article>
              <article>
                <span>03 / EVENT</span>
                <h3>Conference, game, or venue day</h3>
                <p>Enjoy the experience without taking your luggage to every stop or venue in between.</p>
              </article>
              <article>
                <span>04 / FLEXIBILITY</span>
                <h3>Multi-stop Atlanta plans</h3>
                <p>Move your bags between neighborhoods, hotels, homes, and airport routes with one clear service flow.</p>
              </article>
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
              <p>{config.serviceName} is shaped for busy Atlanta routines, alias timing gaps, and travelers who want their luggage handled without extra detours.</p>
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
