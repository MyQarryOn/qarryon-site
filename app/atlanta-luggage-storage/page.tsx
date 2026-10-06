import {
  Plane,
  Luggage,
  Building2,
  CarFront,
  MapPin,
  Car,
  Building,
  CheckCircle2,
  Check,
} from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { TrackingLink } from "../analytics-links";
import "../atlanta-airport-luggage-service/airport.css";

const storageFaqs = [
  {
    question: "How is QarryOn different from traditional luggage storage?",
    answer:
      "Traditional luggage storage requires you to travel to a storage location, leave your bags, and later return to retrieve them. QarryOn removes that detour by picking up your luggage, securely holding it, and delivering it back when and where you are ready, so your Atlanta day stays focused on your plans.",
  },
  {
    question: "Does QarryOn have a walk-in storage location?",
    answer:
      "No. QarryOn is a mobile luggage concierge rather than a storefront or locker facility. We coordinate pickup and delivery so you do not need to travel to a storage location to hand off or retrieve your bags.",
  },
  {
    question: "Can QarryOn help before hotel or Airbnb check-in?",
    answer:
      "Yes. QarryOn is designed for the in-between hours when your hotel or Airbnb is not ready yet. We can pick up your luggage and deliver it later, giving you time to explore Atlanta without dragging bags through the day.",
  },
  {
    question: "Can QarryOn help after checkout?",
    answer:
      "Yes. If you check out before your flight or next destination is ready, QarryOn can hold your luggage and deliver it when your schedule is ready for it. That helps keep the late-morning or afternoon part of your trip light and flexible.",
  },
  {
    question: "Where can my luggage be delivered?",
    answer:
      "QarryOn can coordinate luggage delivery to your hotel, Airbnb, airport departure area, or another Atlanta destination that matches your travel plan. The best location depends on timing, your route, and the service plan you choose.",
  },
];

export const metadata: Metadata = {
  title: "Luggage Storage in Atlanta, Pickup & Delivery | QarryOn",
  description:
    "Need luggage storage in Atlanta without a storage detour? QarryOn picks up, securely holds, and delivers your bags when and where you are ready.",
  alternates: {
    canonical: "/atlanta-luggage-storage",
  },
  openGraph: {
    title: "Luggage Storage in Atlanta, Pickup & Delivery | QarryOn",
    description:
      "Skip the detour. QarryOn handles Atlanta luggage storage by picking up your bags, keeping them secure, and delivering them when you are ready.",
    url: "/atlanta-luggage-storage",
  },
};

export default function AtlantaLuggageStoragePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: storageFaqs.map((faq) => ({
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
    "@id": "https://www.myqarryon.com/atlanta-luggage-storage#service",
    url: "https://www.myqarryon.com/atlanta-luggage-storage",
    name: "Atlanta Luggage Storage and Secure Hold",
    serviceType: "Luggage pickup, secure hold, and delivery",
    provider: {
      "@id": "https://www.myqarryon.com/#organization",
    },
    areaServed: {
      "@type": "City",
      name: "Atlanta",
    },
    description:
      "QarryOn provides Atlanta luggage storage by picking up bags, securely holding them, and delivering them when and where travelers are ready across Atlanta.",
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
              source="storage_nav_get_instant_estimate"
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
                Atlanta luggage storage
              </div>

              <h1>
                Storage without the
                <span>storage detour.</span>
              </h1>

              <p className="airport-hero-sub">
                Need a better way to manage your bags in Atlanta? QarryOn picks up
                your luggage, securely holds it, and delivers it when and where
                you are ready — so your plans do not have to revolve around your
                bags.
              </p>

              <div className="airport-actions">
                <TrackingLink
                  href="/#booking"
                  source="storage_hero"
                  className="airport-btn airport-btn-primary"
                >
                  Get Instant Estimate
                </TrackingLink>

                <a href="#how" className="airport-btn airport-btn-glass">
                  See How It Works
                </a>
              </div>

              <div className="airport-proof-row">
                <div className="airport-proof">
                  <strong>Pickup</strong>
                  <span>Your bags leave your hands</span>
                </div>
                <div className="airport-proof">
                  <strong>Secure hold</strong>
                  <span>Ready when you are</span>
                </div>
                <div className="airport-proof">
                  <strong>Deliver</strong>
                  <span>Where you need it next</span>
                </div>
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
                    <span className="airport-journey-kicker">Your day</span>
                    <strong>Atlanta, without the detour</strong>
                  </div>

                  <div className="airport-journey-status">
                    <span className="airport-live-dot" />
                    QarryOn in progress
                  </div>
                </div>

                <div className="airport-route">
                  <div className="airport-route-item">
                    <div className="airport-route-marker">
                      <MapPin size={16} strokeWidth={2} />
                    </div>
                    <div>
                      <strong>Your location</strong>
                      <span>Where you are in Atlanta</span>
                    </div>
                  </div>

                  <div className="airport-route-line" />

                  <div className="airport-route-item">
                    <div className="airport-route-marker airport-route-active">
                      <Car size={16} strokeWidth={2} />
                    </div>
                    <div>
                      <strong>Pickup arranged</strong>
                      <span>Your bags start moving</span>
                    </div>
                  </div>

                  <div className="airport-route-line" />

                  <div className="airport-route-item">
                    <div className="airport-route-marker">
                      <Building2 size={16} strokeWidth={2} />
                    </div>
                    <div>
                      <strong>Enjoy Atlanta</strong>
                      <span>Lunch. Meetings. Sightseeing. Time.</span>
                    </div>
                  </div>

                  <div className="airport-route-line" />

                  <div className="airport-route-item">
                    <div className="airport-route-marker">
                      <Check size={16} strokeWidth={2.5} />
                    </div>
                    <div>
                      <strong>Delivered</strong>
                      <span>When you are ready for the next stop</span>
                    </div>
                  </div>
                </div>

                <div className="airport-journey-footer">
                  <span>Bags handled.</span>
                  <strong>Plans intact.</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="travel-gap" className="airport-story">
          <div className="airport-container airport-story-grid">
            <div>
              <div className="airport-eyebrow">The travel gap</div>

              <h2>
                The hours between
                <span>are yours.</span>
              </h2>
            </div>

            <div className="airport-story-copy">
              <p className="airport-story-lead">
                Traditional luggage storage adds a detour to an otherwise simple
                travel day. You have to get to a storage location, leave your bags,
                keep moving, then return later just to retrieve them. QarryOn
                removes that loop so your Atlanta plans stay centered on your time.
              </p>

              <div className="airport-gap-scenarios">
                <div className="airport-gap-scenario">
                  <div className="airport-gap-label">EARLY ARRIVAL</div>
                  <strong>Your flight lands before check-in</strong>
                  <p>
                    Drop the bags and start exploring without a storage stop in the
                    middle of the day.
                  </p>
                </div>

                <div className="airport-gap-scenario">
                  <div className="airport-gap-label">LATE DEPARTURE</div>
                  <strong>Checkout is earlier than your flight</strong>
                  <p>
                    Keep enjoying Atlanta while your luggage stays secure and is
                    delivered at the right time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="how" className="airport-section airport-section-light">
          <div className="airport-container">
            <div className="airport-section-head">
              <div className="airport-eyebrow">How it Works</div>
              <h2>Three steps. No luggage detour.</h2>
              <p>
                From pickup to final delivery, QarryOn handles the in-between so
                your Atlanta day keeps moving.
              </p>
            </div>

            <div className="airport-steps">
              <article className="airport-step airport-step-one">
                <span className="airport-step-num">01</span>
                <div className="airport-step-icon">
                  <Car size={24} strokeWidth={1.8} />
                </div>
                <h3>We pick up.</h3>
                <p>
                  Your luggage leaves your hands so you can keep moving through the
                  city without managing a separate storage stop.
                </p>
              </article>

              <article className="airport-step airport-step-two">
                <span className="airport-step-num">02</span>
                <div className="airport-step-icon">
                  <Building size={24} strokeWidth={1.8} />
                </div>
                <h3>You go.</h3>
                <p>
                  Explore Atlanta, enjoy lunch, take a meeting, check in later, or
                  simply keep your day flexible while your bags stay secure.
                </p>
              </article>

              <article className="airport-step airport-step-three">
                <span className="airport-step-num">03</span>
                <div className="airport-step-icon">
                  <CheckCircle2 size={24} strokeWidth={1.8} />
                </div>
                <h3>We deliver.</h3>
                <p>
                  Your luggage meets you at your hotel, Airbnb, airport, or next
                  destination when you are ready for it.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="airport-section airport-use-section">
          <div className="airport-container">
            <div className="airport-section-head airport-section-head-light">
              <div className="airport-eyebrow airport-eyebrow-light">
                Built for the way Atlanta moves
              </div>
              <h2>Not every travel day fits neatly between check-in and checkout.</h2>
            </div>

            <div className="airport-use-grid">
              <article>
                <span>01</span>
                <h3>Early arrival</h3>
                <p>
                  Land early, start your Atlanta day now, and let your luggage meet
                  you when your schedule is ready.
                </p>
              </article>

              <article>
                <span>02</span>
                <h3>Late departure</h3>
                <p>
                  Check out without ending the day early. Keep moving, then meet your
                  bags when it is time to head out.
                </p>
              </article>

              <article>
                <span>03</span>
                <h3>Between stops</h3>
                <p>
                  Lunch, meetings, sightseeing, or a quick break — your bags do not
                  need to set the rhythm of your Atlanta plans.
                </p>
              </article>

              <article>
                <span>04</span>
                <h3>Moving across Atlanta</h3>
                <p>
                  Your bags should not determine the route your day takes. QarryOn
                  keeps the day fluid and your luggage where it needs to be.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="airport-section airport-difference-section">
          <div className="airport-container">
            <div className="airport-difference-heading">
              <div>
                <div className="airport-eyebrow">Storage vs. concierge</div>
                <h2>
                  Same destination.
                  <span>A smoother journey.</span>
                </h2>
              </div>

              <p>
                Traditional storage adds another stop to your day. QarryOn picks up,
                securely holds, and delivers your bags instead — so your trip keeps
                moving forward.
              </p>
            </div>

            <div className="airport-journey-comparison">
              <div className="airport-journey airport-journey-traditional">
                <div className="airport-journey-label">Traditional storage</div>

                <div className="airport-journey-path">
                  <div className="airport-journey-stop">
                    <span className="airport-journey-icon">
                      <Plane size={25} strokeWidth={1.8} />
                    </span>
                    <strong>Land in Atlanta</strong>
                  </div>

                  <span className="airport-journey-line">→</span>

                  <div className="airport-journey-stop">
                    <span className="airport-journey-icon">
                      <CarFront size={25} strokeWidth={1.8} />
                    </span>
                    <strong>Travel to storage</strong>
                  </div>

                  <span className="airport-journey-line">→</span>

                  <div className="airport-journey-stop">
                    <span className="airport-journey-icon">
                      <MapPin size={25} strokeWidth={1.8} />
                    </span>
                    <strong>Drop bags</strong>
                  </div>

                  <span className="airport-journey-line airport-journey-return">→</span>

                  <div className="airport-journey-stop airport-journey-stop-return">
                    <span className="airport-journey-icon">
                      <CarFront size={25} strokeWidth={1.8} />
                    </span>
                    <strong>Return to storage</strong>
                  </div>

                  <span className="airport-journey-line airport-journey-return">→</span>

                  <div className="airport-journey-stop airport-journey-stop-return">
                    <span className="airport-journey-icon">
                      <Luggage size={25} strokeWidth={1.8} />
                    </span>
                    <strong>Retrieve bags</strong>
                  </div>
                </div>

                <p className="airport-journey-summary">
                  More stops. More backtracking.
                  <strong> Your plans still revolve around your bags.</strong>
                </p>
              </div>

              <div className="airport-journey-vs">VS</div>

              <div className="airport-journey airport-journey-qarry">
                <div className="airport-journey-label">The QarryOn way</div>

                <div className="airport-journey-path">
                  <div className="airport-journey-stop">
                    <span className="airport-journey-icon">
                      <Plane size={25} strokeWidth={1.8} />
                    </span>
                    <strong>Your location</strong>
                  </div>

                  <span className="airport-journey-line">→</span>

                  <div className="airport-journey-stop">
                    <span className="airport-journey-icon">
                      <CarFront size={25} strokeWidth={1.8} />
                    </span>
                    <strong>QarryOn pickup</strong>
                  </div>

                  <span className="airport-journey-line">→</span>

                  <div className="airport-journey-stop">
                    <span className="airport-journey-icon">
                      <MapPin size={25} strokeWidth={1.8} />
                    </span>
                    <strong>Enjoy Atlanta</strong>
                  </div>

                  <span className="airport-journey-line">→</span>

                  <div className="airport-journey-stop">
                    <span className="airport-journey-icon">
                      <Building2 size={25} strokeWidth={1.8} />
                    </span>
                    <strong>QarryOn delivers your bags</strong>
                  </div>
                </div>

                <p className="airport-journey-summary">
                  Fewer stops. More Atlanta.
                  <strong> You keep moving.</strong>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="airport-pricing">
          <div className="airport-container">
            <div className="airport-section-head airport-pricing-head">
              <div className="airport-eyebrow">Pricing</div>
              <h2>Simple. Transparent.</h2>
              <p>
                Three tiers. Clear starting prices. Add-ons and route complexity are
                confirmed during booking.
              </p>
            </div>

            <div className="airport-pricing-grid">
              <div className="airport-price-card">
                <div className="airport-tier-label">Qarry Lite</div>
                <div className="airport-price">$54</div>

                <p>
                  Simple, scheduled luggage handling for straightforward travel days
                  with a fixed pickup and delivery plan.
                </p>

                <ul>
                  <li>Same-day luggage pickup and delivery</li>
                  <li>Fixed pickup and delivery window</li>
                  <li>Standard text updates</li>
                  <li>Designed for 1–2 bags</li>
                  <li>Changes billed separately</li>
                </ul>

                <TrackingLink
                  href="/#booking"
                  source="storage_pricing_lite"
                  tier="Qarry Lite"
                  className="airport-btn airport-btn-secondary airport-price-btn"
                >
                  Estimate Qarry Lite
                </TrackingLink>
              </div>

              <div className="airport-price-card airport-price-featured">
                <div className="airport-featured-badge">Most popular</div>
                <div className="airport-tier-label">Qarry Plus</div>
                <div className="airport-price">$74</div>

                <p>
                  Flexible coordination for travelers whose timing or location may
                  shift during the day.
                </p>

                <ul>
                  <li>Everything in Qarry Lite</li>
                  <li>Adjustable delivery window</li>
                  <li>One free reasonable location or timing adjustment</li>
                  <li>Confirmed delivery via handoff or photo</li>
                  <li>Designed for 3–5 bags</li>
                </ul>

                <TrackingLink
                  href="/#booking"
                  source="storage_pricing_plus"
                  tier="Qarry Plus"
                  className="airport-btn airport-btn-primary airport-price-btn"
                >
                  Estimate Qarry Plus
                </TrackingLink>
              </div>

              <div className="airport-price-card">
                <div className="airport-tier-label">Qarry Elite</div>
                <div className="airport-price">$110</div>

                <p>
                  Priority concierge support for tight schedules, complex routes,
                  groups, events, or high-stakes travel days.
                </p>

                <ul>
                  <li>Everything in Qarry Plus</li>
                  <li>Priority routing and handling</li>
                  <li>Flexible timing and reasonable changes included</li>
                  <li>Proactive status updates</li>
                  <li>Designed for 6+ bags</li>
                </ul>

                <TrackingLink
                  href="/#booking"
                  source="storage_pricing_elite"
                  tier="Qarry Elite"
                  className="airport-btn airport-btn-secondary airport-price-btn"
                >
                  Estimate Qarry Elite
                </TrackingLink>
              </div>
            </div>

            <div className="airport-addon-strip">
              <div className="airport-addon">
                Extra bag <span>+$8</span>
              </div>

              <div className="airport-addon">
                Round-trip booking <span>Save 10%</span>
              </div>

              <div className="airport-addon">
                Overnight / multi-day hold <span>+$15/day</span>
              </div>

              <div className="airport-addon">
                Outside metro Atlanta <span>Custom rate</span>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="airport-section airport-faq-section">
          <div className="airport-container airport-faq-layout">
            <div>
              <div className="airport-eyebrow">Atlanta luggage FAQs</div>
              <h2>Before you hand us the bags.</h2>
              <p>
                A few things travelers usually want to know before their first
                QarryOn luggage storage plan.
              </p>
            </div>

            <div className="airport-faq-list">
              {storageFaqs.map((faq) => (
                <article className="airport-faq" key={faq.question}>
                  <h3>{faq.question}</h3>
                  <p>{faq.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="airport-final">
          <div className="airport-final-glow" />

          <div className="airport-container airport-final-inner">
            <div className="airport-eyebrow airport-eyebrow-light">
              Your bags. Handled.
            </div>

            <h2>
              Atlanta is yours.
              <span>Your luggage does not need to be in the way.</span>
            </h2>

            <p>
              Tell us where you need pickup, where you need delivery, and how many
              bags you are traveling with. We will help coordinate the rest.
            </p>

            <TrackingLink
              href="/#booking"
              source="storage_final_cta"
              className="airport-btn airport-btn-primary"
            >
              Get Instant Estimate
            </TrackingLink>
          </div>
        </section>

        <footer className="airport-footer">
          <div className="airport-container airport-footer-top">
            <div className="airport-footer-brand">
              <Link href="/" aria-label="QarryOn home">
                <Image
                  src="/Light Logo Transparent MAIN copy.png"
                  alt="QarryOn"
                  width={290}
                  height={96}
                  className="airport-footer-logo"
                />
              </Link>

              <p>
                Same-day luggage pickup and delivery across Atlanta — designed for
                travelers who want to move lighter.
              </p>
            </div>

            <div className="airport-footer-links">
              <div>
                <h4>Company</h4>
                <Link href="/">Home</Link>
                <Link href="/#how">How it Works</Link>
                <Link href="/#pricing">Pricing</Link>
                <Link href="/#use-cases">Use Cases</Link>
              </div>

              <div>
                <h4>Support</h4>
                <Link href="/#booking">Schedule Pickup</Link>
                <a href="#faq">FAQs</a>
                <Link href="/terms">Terms & Conditions</Link>
                <Link href="/privacy">Privacy Policy</Link>
                <a href="mailto:connect@myqarryon.com">Email Us</a>
              </div>

              <div>
                <h4>Service</h4>

                <Link href="/atlanta-airport-luggage-service">Airport Arrivals</Link>
                <Link href="/atlanta-luggage-storage">Atlanta Luggage Storage</Link>
                <Link href="/hotel-airbnb-luggage-delivery">Hotel & Airbnb Delivery</Link>
                <Link href="/events-conferences">Events & Conferences</Link>
              </div>
            </div>
          </div>

          <div className="airport-container airport-footer-bottom">
            <span>© 2026 QarryOn. All rights reserved.</span>
            <div>
              <a href="mailto:connect@myqarryon.com">connect@myqarryon.com</a>
              <span>Atlanta, GA</span>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
