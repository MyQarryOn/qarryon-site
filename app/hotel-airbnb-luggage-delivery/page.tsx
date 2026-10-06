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

const hotelFaqs = [
  {
    question: "Can QarryOn help before hotel check-in or after checkout?",
    answer:
      "Yes. If you arrive before your room is ready or you check out before the rest of your day is over, QarryOn can coordinate luggage pickup and delivery around that timing gap so your Atlanta plans stay flexible.",
  },
  {
    question: "What about Airbnb and vacation-rental timing gaps?",
    answer:
      "QarryOn works well for Airbnb and vacation-rental timing gaps too. If your check-in or check-out schedule does not line up with your travel plans, we can coordinate pickup and delivery around the day.",
  },
  {
    question: "Where can my luggage be delivered after checkout?",
    answer:
      "Your luggage can be delivered to your next approved destination, whether that is the airport, a later accommodation, or another location that fits the rest of your Atlanta route.",
  },
  {
    question: "Do I need a hotel or Airbnb partnership for this service?",
    answer:
      "No. QarryOn is a mobile luggage concierge service. We coordinate pickup and delivery around the traveler’s schedule rather than relying on a storefront or property partnership.",
  },
  {
    question: "Can QarryOn help between accommodations?",
    answer:
      "Yes. If you are moving between stays, leaving one accommodation and heading to another, QarryOn can help keep the transition smooth by handling luggage between the timing gap and the next stop.",
  },
];

export const metadata: Metadata = {
  title: "Hotel & Airbnb Luggage Storage in Atlanta | QarryOn",
  description:
    "Need luggage storage before hotel check-in or after checkout in Atlanta? QarryOn picks up your luggage, securely holds it, and delivers it when your schedule is ready.",
  alternates: {
    canonical: "/hotel-airbnb-luggage-delivery",
  },
  openGraph: {
    title: "Hotel & Airbnb Luggage Storage in Atlanta | QarryOn",
    description:
      "Check-in can wait. Your Atlanta day does not have to. QarryOn handles hotel and Airbnb luggage timing gaps with pickup, secure hold, and delivery.",
    url: "/hotel-airbnb-luggage-delivery",
  },
};

export default function HotelAirbnbLuggageDeliveryPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: hotelFaqs.map((faq) => ({
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
    "@id": "https://www.myqarryon.com/hotel-airbnb-luggage-delivery#service",
    url: "https://www.myqarryon.com/hotel-airbnb-luggage-delivery",
    name: "Hotel and Airbnb Luggage Storage and Delivery",
    serviceType: "Luggage pickup, secure hold, and delivery",
    provider: {
      "@id": "https://www.myqarryon.com/#organization",
    },
    areaServed: {
      "@type": "City",
      name: "Atlanta",
    },
    description:
      "QarryOn provides luggage pickup, secure hold, and delivery for Atlanta travelers dealing with hotel check-in timing gaps, Airbnb scheduling gaps, checkout timing, and travel-day transitions.",
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
              source="hotel_airbnb_nav_get_instant_estimate"
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
                Hotel & Airbnb luggage support
              </div>

              <h1>
                Check-in can wait.
                <span>Your Atlanta day doesn&apos;t have to.</span>
              </h1>

              <p className="airport-hero-sub">
                Whether you are arriving before your room is ready or checking out
                before the rest of your trip is set, QarryOn picks up your luggage,
                securely holds it, and delivers it when and where your Atlanta plans
                are ready.
              </p>

              <div className="airport-actions">
                <TrackingLink
                  href="/#booking"
                  source="hotel_airbnb_hero"
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
                  <span>Before check-in or checkout</span>
                </div>
                <div className="airport-proof">
                  <strong>Secure hold</strong>
                  <span>While you keep moving</span>
                </div>
                <div className="airport-proof">
                  <strong>Delivery</strong>
                  <span>When your timing is ready</span>
                </div>
              </div>
            </div>

            <div className="airport-journey-wrap">
              <div className="airport-journey-back airport-journey-back-two" />
              <div className="airport-journey-back airport-journey-back-one" />

              <div className="airport-journey-card">
                <div className="airport-live-badge">
                  <span className="airport-live-dot" />
                  Your hotel timing fix
                </div>

                <div className="airport-journey-header">
                  <div>
                    <span className="airport-journey-kicker">Your Atlanta day</span>
                    <strong>Hotel gap solved</strong>
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
                      <strong>Arrive in Atlanta</strong>
                      <span>Before check-in or checkout</span>
                    </div>
                  </div>

                  <div className="airport-route-line" />

                  <div className="airport-route-item">
                    <div className="airport-route-marker airport-route-active">
                      <Luggage size={16} strokeWidth={2} />
                    </div>
                    <div>
                      <strong>QarryOn pickup</strong>
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
                      <span>Lunch, meetings, sightseeing, plans</span>
                    </div>
                  </div>

                  <div className="airport-route-line" />

                  <div className="airport-route-item">
                    <div className="airport-route-marker">
                      <Check size={16} strokeWidth={2.5} />
                    </div>
                    <div>
                      <strong>Delivered</strong>
                      <span>At the hotel, Airbnb, or next stop</span>
                    </div>
                  </div>
                </div>

                <div className="airport-journey-footer">
                  <span>Bags handled.</span>
                  <strong>Time restored.</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="travel-gap" className="airport-story">
          <div className="airport-container airport-story-grid">
            <div>
              <div className="airport-eyebrow">The timing gap</div>

              <h2>
                The room is not ready.
                <span>Your plans should still move.</span>
              </h2>
            </div>

            <div className="airport-story-copy">
              <p className="airport-story-lead">
                Hotel and Airbnb timing gaps are one of the most frustrating parts of
                a travel day. You are usually either arriving before your room is ready
                or checking out before the rest of the trip has caught up. QarryOn
                removes that friction so your luggage does not control the rhythm of the day.
              </p>

              <div className="airport-gap-scenarios">
                <div className="airport-gap-scenario">
                  <div className="airport-gap-label">ARRIVAL DAY</div>
                  <strong>Check-in is later than your arrival</strong>
                  <p>
                    Leave the bags with QarryOn and enjoy Atlanta while your room gets
                    ready.
                  </p>
                </div>

                <div className="airport-gap-scenario">
                  <div className="airport-gap-label">DEPARTURE DAY</div>
                  <strong>Checkout happens before your flight</strong>
                  <p>
                    Keep your final Atlanta hours light while your luggage waits to be
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
              <h2>Three steps. No timing trap.</h2>
              <p>
                From early-arrival pickup to final delivery, QarryOn handles the gap
                between where your luggage is and where it needs to be.
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
                  Your bags leave your hands so the schedule can stay flexible while
                  you move through Atlanta.
                </p>
              </article>

              <article className="airport-step airport-step-two">
                <span className="airport-step-num">02</span>
                <div className="airport-step-icon">
                  <Building size={24} strokeWidth={1.8} />
                </div>
                <h3>You go.</h3>
                <p>
                  Explore the city, grab lunch, take a meeting, check in later, or
                  keep your day open while your bags are secure.
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
                  approved destination when the timing works.
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
              <h2>Travel days rarely begin and end on the same timeline as your stay.</h2>
            </div>

            <div className="airport-use-grid">
              <article>
                <span>01</span>
                <h3>Arrived before check-in</h3>
                <p>
                  Arrive early, leave the bags with QarryOn, and start your Atlanta
                  day without dragging luggage around the city.
                </p>
              </article>

              <article>
                <span>02</span>
                <h3>Checked out before a late flight</h3>
                <p>
                  Enjoy the rest of the day without tying your plans to your luggage
                  and your departure timeline.
                </p>
              </article>

              <article>
                <span>03</span>
                <h3>Airbnb timing gap</h3>
                <p>
                  When your Airbnb schedule does not line up, we keep the between-time
                  simple and stress-free.
                </p>
              </article>

              <article>
                <span>04</span>
                <h3>Moving between accommodations</h3>
                <p>
                  Keep your transition fluid by leaving the bag logistics to QarryOn
                  while you move between stays and plans.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="airport-section airport-difference-section">
          <div className="airport-container">
            <div className="airport-difference-heading">
              <div>
                <div className="airport-eyebrow">Check-in gap vs. concierge</div>
                <h2>
                  Same stay.
                  <span>A better timeline.</span>
                </h2>
              </div>

              <p>
                Traditional luggage timing leaves you juggling your plans around your
                room status. QarryOn picks up, holds, and delivers your bags so the day
                keeps moving.
              </p>
            </div>

            <div className="airport-journey-comparison">
              <div className="airport-journey airport-journey-traditional">
                <div className="airport-journey-label">Traditional timing gap</div>

                <div className="airport-journey-path">
                  <div className="airport-journey-stop">
                    <span className="airport-journey-icon">
                      <Plane size={25} strokeWidth={1.8} />
                    </span>
                    <strong>Arrive in Atlanta</strong>
                  </div>

                  <span className="airport-journey-line">→</span>

                  <div className="airport-journey-stop">
                    <span className="airport-journey-icon">
                      <CarFront size={25} strokeWidth={1.8} />
                    </span>
                    <strong>Carry bags around</strong>
                  </div>

                  <span className="airport-journey-line">→</span>

                  <div className="airport-journey-stop">
                    <span className="airport-journey-icon">
                      <MapPin size={25} strokeWidth={1.8} />
                    </span>
                    <strong>Wait for room access</strong>
                  </div>

                  <span className="airport-journey-line airport-journey-return">→</span>

                  <div className="airport-journey-stop airport-journey-stop-return">
                    <span className="airport-journey-icon">
                      <CarFront size={25} strokeWidth={1.8} />
                    </span>
                    <strong>Return later</strong>
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
                  More waiting. More dragging.
                  <strong> Your plans still revolve around your luggage.</strong>
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
                    <strong>Arrive in Atlanta</strong>
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
                      <Building2 size={25} strokeWidth={1.8} />
                    </span>
                    <strong>Enjoy Atlanta</strong>
                  </div>

                  <span className="airport-journey-line">→</span>

                  <div className="airport-journey-stop">
                    <span className="airport-journey-icon">
                      <MapPin size={25} strokeWidth={1.8} />
                    </span>
                    <strong>Delivered when ready</strong>
                  </div>
                </div>

                <p className="airport-journey-summary">
                  Fewer detours. More Atlanta.
                  <strong> Your day stays on track.</strong>
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
                  Simple, scheduled luggage handling for straightforward travel days with
                  a fixed pickup and delivery plan.
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
                  source="hotel_airbnb_pricing_lite"
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
                  Flexible coordination for travelers whose timing or location may shift
                  during the day.
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
                  source="hotel_airbnb_pricing_plus"
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
                  Priority concierge support for tight schedules, complex routes, or
                  high-stakes hotel and flight day transitions.
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
                  source="hotel_airbnb_pricing_elite"
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
              <div className="airport-eyebrow">Hotel & Airbnb FAQ</div>
              <h2>Before you hand us the bags.</h2>
              <p>
                A few helpful answers for travelers trying to make a hotel or Airbnb
                timing gap feel effortless.
              </p>
            </div>

            <div className="airport-faq-list">
              {hotelFaqs.map((faq) => (
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
              Your Atlanta day is yours.
              <span>Your luggage does not have to be the bottleneck.</span>
            </h2>

            <p>
              Tell us where you need pickup, where you need delivery, and what your
              timing looks like. We will help coordinate the rest.
            </p>

            <TrackingLink
              href="/#booking"
              source="hotel_airbnb_final_cta"
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
