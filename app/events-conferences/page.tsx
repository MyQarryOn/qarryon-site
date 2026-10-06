import {
  Plane,
  Luggage,
  Building2,
  CarFront,
  MapPin,
  CalendarDays,
  Users,
  Car,
  Building,
  CheckCircle2,
  Presentation,
  Check,
} from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { TrackingLink } from "../analytics-links";
import "../atlanta-airport-luggage-service/airport.css";

const eventsFaqs = [
  {
    question: "Can QarryOn help with conference or event luggage?",
    answer:
      "Yes. QarryOn is designed for travelers moving between airport arrivals, hotels, event venues, and next destinations. We can handle the timing gaps where luggage would otherwise slow down the day.",
  },
  {
    question: "Is this useful for speakers, exhibitors, and groups?",
    answer:
      "It can be. QarryOn can be useful for attendees, speakers, exhibitors, and groups who want a lighter event-day experience without managing luggage while the schedule is in motion.",
  },
  {
    question: "What if I check out before the final event session?",
    answer:
      "If your travel plans change while the event is still underway, QarryOn can coordinate pickup and delivery around that timing shift so you do not need to solve your bag logistics at the same time as your event schedule.",
  },
  {
    question: "Does QarryOn operate at specific event venues?",
    answer:
      "QarryOn is a mobile luggage concierge service. We coordinate pickup and delivery around the traveler’s plan rather than operating a storefront or official venue-based service desk.",
  },
  {
    question: "Where can my luggage be delivered during an event trip?",
    answer:
      "Your luggage can be delivered to your hotel, Airbnb, airport, or another approved Atlanta destination that matches the rest of your event schedule and travel plans.",
  },
];

export const metadata: Metadata = {
  title: "Event & Conference Luggage Storage in Atlanta | QarryOn",
  description:
    "Need conference luggage storage or event-day bag handling in Atlanta? QarryOn picks up, securely holds, and delivers your luggage around your trip and event schedule.",
  alternates: {
    canonical: "/events-conferences",
  },
  openGraph: {
    title: "Event & Conference Luggage Storage in Atlanta | QarryOn",
    description:
      "Bring yourself to the event. Not your luggage. QarryOn handles event-day bag pickup, secure hold, and delivery around your Atlanta plans.",
    url: "/events-conferences",
  },
};

export default function EventsConferencesPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: eventsFaqs.map((faq) => ({
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
    "@id": "https://www.myqarryon.com/events-conferences#service",
    url: "https://www.myqarryon.com/events-conferences",
    name: "Event and Conference Luggage Storage and Delivery",
    serviceType: "Luggage pickup, secure hold, and delivery",
    provider: {
      "@id": "https://www.myqarryon.com/#organization",
    },
    areaServed: {
      "@type": "City",
      name: "Atlanta",
    },
    description:
      "QarryOn coordinates event-day luggage pickup, secure hold, and delivery for conference attendees, speakers, exhibitors, and groups moving through Atlanta without managing baggage between sessions, check-ins, and departures.",
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
              source="events_nav_get_instant_estimate"
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
                Event luggage support
              </div>

              <h1>
                Bring yourself to the event.
                <span>Not your luggage.</span>
              </h1>

              <p className="airport-hero-sub">
                Conference days are busy enough without carrying bags across hotel,
                venue, and evening plans. QarryOn picks up your luggage, keeps it
                secure, and delivers it when your event schedule is ready to move on.
              </p>

              <div className="airport-actions">
                <TrackingLink
                  href="/#booking"
                  source="events_hero"
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
                  <span>Before the event starts</span>
                </div>
                <div className="airport-proof">
                  <strong>Secure hold</strong>
                  <span>While you stay in the moment</span>
                </div>
                <div className="airport-proof">
                  <strong>Delivery</strong>
                  <span>At the next stop in your day</span>
                </div>
              </div>
            </div>

            <div className="airport-journey-wrap">
              <div className="airport-journey-back airport-journey-back-two" />
              <div className="airport-journey-back airport-journey-back-one" />

              <div className="airport-journey-card">
                <div className="airport-live-badge">
                  <span className="airport-live-dot" />
                  Your event-day flow
                </div>

                <div className="airport-journey-header">
                  <div>
                    <span className="airport-journey-kicker">Your Atlanta plan</span>
                    <strong>Event day, lighter</strong>
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
                      <span>Before check-in or event day</span>
                    </div>
                  </div>

                  <div className="airport-route-line" />

                  <div className="airport-route-item">
                    <div className="airport-route-marker airport-route-active">
                      <Luggage size={16} strokeWidth={2} />
                    </div>
                    <div>
                      <strong>QarryOn pickup</strong>
                      <span>Your bags move out of the way</span>
                    </div>
                  </div>

                  <div className="airport-route-line" />

                  <div className="airport-route-item">
                    <div className="airport-route-marker">
                      <Presentation size={16} strokeWidth={2} />
                    </div>
                    <div>
                      <strong>Event time</strong>
                      <span>Sessions, meetings, and moments</span>
                    </div>
                  </div>

                  <div className="airport-route-line" />

                  <div className="airport-route-item">
                    <div className="airport-route-marker">
                      <Check size={16} strokeWidth={2.5} />
                    </div>
                    <div>
                      <strong>Delivered</strong>
                      <span>When the next stop is ready</span>
                    </div>
                  </div>
                </div>

                <div className="airport-journey-footer">
                  <span>Bags handled.</span>
                  <strong>Event ready.</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="travel-gap" className="airport-story">
          <div className="airport-container airport-story-grid">
            <div>
              <div className="airport-eyebrow">The event gap</div>

              <h2>
                Your schedule should lead.
                <span>Your luggage does not need to.</span>
              </h2>
            </div>

            <div className="airport-story-copy">
              <p className="airport-story-lead">
                Conference days are full of movement: hotel arrival, venue check-in,
                networking, last-minute meetings, and departures. When your luggage is
                in the middle of it, your event day feels heavier. QarryOn keeps that
                part of the day simple so the event stays in focus.
              </p>

              <div className="airport-gap-scenarios">
                <div className="airport-gap-scenario">
                  <div className="airport-gap-label">ARRIVAL DAY</div>
                  <strong>Conference check-in happens before hotel access</strong>
                  <p>
                    Leave the bags with QarryOn and move straight into your event plans.
                  </p>
                </div>

                <div className="airport-gap-scenario">
                  <div className="airport-gap-label">DEPARTURE DAY</div>
                  <strong>Checkout lands before final sessions or departures</strong>
                  <p>
                    Stay in the event without carrying around luggage and get your bags
                    delivered when the trip is ready to move on.
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
              <h2>Three steps. One event-day solution.</h2>
              <p>
                From arrival to final delivery, QarryOn handles the in-between so the
                event remains the priority.
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
                  Your luggage leaves your hands so your event day can stay light and
                  focused from the start.
                </p>
              </article>

              <article className="airport-step airport-step-two">
                <span className="airport-step-num">02</span>
                <div className="airport-step-icon">
                  <CalendarDays size={24} strokeWidth={1.8} />
                </div>
                <h3>You go.</h3>
                <p>
                  Be in the room, on the floor, in meetings, or on the move while your
                  bags stay secure and out of the way.
                </p>
              </article>

              <article className="airport-step airport-step-three">
                <span className="airport-step-num">03</span>
                <div className="airport-step-icon">
                  <CheckCircle2 size={24} strokeWidth={1.8} />
                </div>
                <h3>We deliver.</h3>
                <p>
                  Your luggage is delivered when the next destination, hotel, or
                  departure schedule is ready.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="airport-section airport-use-section">
          <div className="airport-container">
            <div className="airport-section-head airport-section-head-light">
              <div className="airport-eyebrow airport-eyebrow-light">
                Built for event travelers
              </div>
              <h2>Different event trips. Same objective: move through Atlanta freely.</h2>
            </div>

            <div className="airport-use-grid">
              <article>
                <span>01</span>
                <h3>Conference begins before hotel access</h3>
                <p>
                  Arrive and go straight to the event while your bags stay secure until
                  check-in timing works for you.
                </p>
              </article>

              <article>
                <span>02</span>
                <h3>Checkout before final sessions</h3>
                <p>
                  Keep the last hours of your event day flexible while your luggage waits
                  to be delivered at the right time.
                </p>
              </article>

              <article>
                <span>03</span>
                <h3>Speaker or exhibitor travel</h3>
                <p>
                  Keep your presentation, meetings, and agenda on track without a bag
                  problem competing for your attention.
                </p>
              </article>

              <article>
                <span>04</span>
                <h3>Group travel between stops</h3>
                <p>
                  When the group is moving between venues, meetings, and the next stay,
                  QarryOn helps keep luggage logistics out of the way.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="airport-section airport-difference-section">
          <div className="airport-container">
            <div className="airport-difference-heading">
              <div>
                <div className="airport-eyebrow">Event day vs. concierge</div>
                <h2>
                  Same event.
                  <span>A lighter day.</span>
                </h2>
              </div>

              <p>
                Traditional luggage handling turns your event day into a logistics
                problem. QarryOn handles the bag movement so the day stays focused on the
                convention, conference, or meeting itself.
              </p>
            </div>

            <div className="airport-journey-comparison">
              <div className="airport-journey airport-journey-traditional">
                <div className="airport-journey-label">Traditional event day</div>

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
                      <Users size={25} strokeWidth={1.8} />
                    </span>
                    <strong>Carry bags to event</strong>
                  </div>

                  <span className="airport-journey-line">→</span>

                  <div className="airport-journey-stop">
                    <span className="airport-journey-icon">
                      <CalendarDays size={25} strokeWidth={1.8} />
                    </span>
                    <strong>Attend session</strong>
                  </div>

                  <span className="airport-journey-line airport-journey-return">→</span>

                  <div className="airport-journey-stop airport-journey-stop-return">
                    <span className="airport-journey-icon">
                      <CarFront size={25} strokeWidth={1.8} />
                    </span>
                    <strong>Return with bags</strong>
                  </div>

                  <span className="airport-journey-line airport-journey-return">→</span>

                  <div className="airport-journey-stop airport-journey-stop-return">
                    <span className="airport-journey-icon">
                      <Luggage size={25} strokeWidth={1.8} />
                    </span>
                    <strong>Retrieve again</strong>
                  </div>
                </div>

                <p className="airport-journey-summary">
                  More friction. More baggage management.
                  <strong> The event still gets interrupted.</strong>
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
                      <CalendarDays size={25} strokeWidth={1.8} />
                    </span>
                    <strong>Attend the event</strong>
                  </div>

                  <span className="airport-journey-line">→</span>

                  <div className="airport-journey-stop">
                    <span className="airport-journey-icon">
                      <Building2 size={25} strokeWidth={1.8} />
                    </span>
                    <strong>Delivered when ready</strong>
                  </div>
                </div>

                <p className="airport-journey-summary">
                  Fewer interruptions. More event focus.
                  <strong> Your schedule stays intact.</strong>
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
                  source="events_pricing_lite"
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
                  source="events_pricing_plus"
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
                  Priority concierge support for tight schedules, groups, or high-stakes
                  conference days.
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
                  source="events_pricing_elite"
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
              <div className="airport-eyebrow">Event FAQs</div>
              <h2>Before you hand us the bags.</h2>
              <p>
                A few practical answers for travelers moving through Atlanta events with
                luggage in the middle of the plan.
              </p>
            </div>

            <div className="airport-faq-list">
              {eventsFaqs.map((faq) => (
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
              Your event starts now.
              <span>Your luggage does not need to be the logistics problem.</span>
            </h2>

            <p>
              Tell us where you need pickup, where you need delivery, and how your event
              schedule is moving. We will help coordinate the rest.
            </p>

            <TrackingLink
              href="/#booking"
              source="events_final_cta"
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
