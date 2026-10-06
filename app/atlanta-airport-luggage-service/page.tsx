import {
  Plane,
  Luggage,
  Building2,
  CarFront,
  MapPin,
} from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import "./airport.css";

export const metadata: Metadata = {
  title: "ATL Airport Luggage Storage, Pickup & Delivery",
  description:
    "Skip the luggage storage detour at ATL. QarryOn picks up, securely holds, and delivers your bags across Atlanta so you can enjoy the city before check-in or after checkout.",
  alternates: {
    canonical: "/atlanta-airport-luggage-service",
  },
  openGraph: {
    title: "ATL Airport Luggage Storage, Pickup & Delivery | QarryOn",
    description:
      "Arriving early or flying out late? QarryOn picks up, securely holds, and delivers your luggage across Atlanta so your plans don't revolve around your bags.",
    url: "/atlanta-airport-luggage-service",
  },
};

const airportFaqs = [
  {
    question: "Does QarryOn provide luggage storage at ATL Airport?",
    answer:
      "QarryOn is a mobile luggage concierge rather than an airport locker or storefront. We coordinate approved curbside handoffs, securely hold your luggage, and deliver it to your hotel, Airbnb, airport departure area, or another approved Atlanta destination when you're ready.",
  },
  {
    question: "Can you pick up my luggage when I arrive at ATL?",
    answer:
      "Yes. QarryOn can coordinate luggage pickup following your arrival at Hartsfield-Jackson Atlanta International Airport. Airport handoffs are coordinated at approved curbside locations based on your arrival details and service plan.",
  },
  {
    question: "What if I arrive before hotel or Airbnb check-in?",
    answer:
      "That's one of the main situations QarryOn is designed to solve. We can pick up your luggage, securely hold it while you explore, eat, work, or attend an event, and deliver it to your accommodation when you're ready.",
  },
  {
    question: "Can you bring my luggage back to ATL before my flight?",
    answer:
      "Yes. Timed airport delivery can be coordinated around your departure so you can spend the hours after checkout enjoying Atlanta instead of returning to your hotel or carrying your bags.",
  },
  {
    question: "What areas do you serve from ATL Airport?",
    answer:
      "QarryOn primarily serves Atlanta within the I-285 perimeter, including Downtown, Midtown, Buckhead, West Midtown, and surrounding neighborhoods. Service outside the standard area may be available for an additional fee.",
  },
];

export default function AtlantaAirportLuggageServicePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: airportFaqs.map((faq) => ({
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
    "@id":
  "https://www.myqarryon.com/atlanta-airport-luggage-service#service",
url: "https://www.myqarryon.com/atlanta-airport-luggage-service",
    name: "ATL Airport Luggage Pickup, Secure Hold and Delivery",
    serviceType: "Luggage concierge service",
    provider: {
      "@id": "https://www.myqarryon.com/#organization",
    },
    areaServed: {
      "@type": "City",
      name: "Atlanta",
    },
    description:
      "QarryOn coordinates luggage pickup following arrival at ATL, secure luggage holding, and delivery to hotels, Airbnbs, airport departure areas, and other approved destinations across Atlanta.",
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
        {/* NAVIGATION */}
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

            <Link href="/#booking" className="airport-btn airport-btn-dark">
              Get Instant Estimate
            </Link>
          </div>
        </nav>

        {/* HERO */}
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
                ATL Airport Luggage Concierge
              </div>

              <h1>
                Your Atlanta trip starts
                <span>before check-in.</span>
              </h1>

              <p className="airport-hero-sub">
                Land at ATL. Hand us the bags. Take back the hours in between.
                QarryOn picks up, securely holds, and delivers your luggage when
                and where you&apos;re ready.
              </p>

              <div className="airport-actions">
                <Link href="/#booking" className="airport-btn airport-btn-primary">
                  Get Instant Estimate
                </Link>

                <a
                  href="#how"
                  className="airport-btn airport-btn-glass"
                >
                  See How It Works
                </a>
              </div>

              <div className="airport-proof-row">
                <div className="airport-proof">
                  <strong>ATL</strong>
                  <span>Curbside handoff</span>
                </div>
                <div className="airport-proof">
                  <strong>Same day</strong>
                  <span>Pickup & delivery</span>
                </div>
                <div className="airport-proof">
                  <strong>Point to point</strong>
                  <span>No return trip</span>
                </div>
              </div>
            </div>

            {/* JOURNEY CARD */}
            <div className="airport-journey-wrap">
              <div className="airport-journey-back airport-journey-back-two" />
              <div className="airport-journey-back airport-journey-back-one" />

              <div className="airport-journey-card">
                <div className="airport-live-badge">
                  <span className="airport-live-dot" />
                  Your QarryOn Journey
                </div>

                <div className="airport-journey-header">
  <div>
    <span className="airport-journey-kicker">Your QarryOn</span>
    <strong>ATL → Midtown</strong>
  </div>

  <div className="airport-journey-status">
    <span className="airport-live-dot" />
    QarryOn in progress
  </div>
</div>

                <div className="airport-route">
                  <div className="airport-route-item">
                    <div className="airport-route-marker">ATL</div>
                    <div>
                      <strong>11:05 AM · Arrived</strong>
                      <span>Hartsfield-Jackson</span>
                    </div>
                  </div>

                  <div className="airport-route-line" />

                  <div className="airport-route-item">
                    <div className="airport-route-marker airport-route-active">
                      Q
                    </div>
                    <div>
                      <strong>11:40 AM · Bags secured</strong>
                      <span>QarryOn has it from here</span>
                    </div>
                  </div>

                  <div className="airport-route-line" />

                  <div className="airport-route-item">
                    <div className="airport-route-marker">ATL</div>
                    <div>
                      <strong>12:00 PM · Your time starts</strong>
<span>Lunch. Meetings. Exploring. Whatever Atlanta has next.</span>
                    </div>
                  </div>

                  <div className="airport-route-line" />

                  <div className="airport-route-item">
                    <div className="airport-route-marker">✓</div>
                    <div>
                      <strong>4:30 PM · Delivered</strong>
                      <span>Your hotel · Midtown Atlanta</span>
                    </div>
                  </div>
                </div>

                <div className="airport-journey-footer">
  <span>Bags handled.</span>
  <strong>Time returned.</strong>
</div>
              </div>
            </div>
          </div>
        </section>

        {/* TRAVEL GAP */}
<section id="travel-gap" className="airport-story">
      <div className="airport-container airport-story-grid">
    <div>
      <div className="airport-eyebrow">The Travel Gap</div>

      <h2>
        The hours between
        <span>are yours.</span>
      </h2>
    </div>

    <div className="airport-story-copy">
      <p className="airport-story-lead">
        Your flight schedule and your accommodation schedule don&apos;t
        always line up. Your plans shouldn&apos;t have to revolve around
        your luggage because of it.
      </p>

      <div className="airport-gap-scenarios">
        <div className="airport-gap-scenario">
          <div className="airport-gap-label">ARRIVAL DAY</div>
          <strong>ATL → Your time → Check-in</strong>
          <p>
            Arriving before your hotel or Airbnb is ready? Hand off your
            luggage and start your Atlanta day now.
          </p>
        </div>

        <div className="airport-gap-scenario">
          <div className="airport-gap-label">DEPARTURE DAY</div>
          <strong>Checkout → Your time → ATL</strong>
          <p>
            Flying out hours after checkout? Keep enjoying Atlanta and
            meet your luggage when it&apos;s time to head home.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

        {/* HOW IT WORKS */}
        <section id="how" className="airport-section airport-section-light">
          <div className="airport-container">
            <div className="airport-section-head">
              <div className="airport-eyebrow">How It Works</div>
              <h2>Three steps. No luggage detour.</h2>
              <p>
                From airport arrival to final delivery, QarryOn handles the gap
                between where your bags are and where they need to be.
              </p>
            </div>

            <div className="airport-steps">
              <article className="airport-step airport-step-one">
                <span className="airport-step-num">01</span>
                <div className="airport-step-icon">ATL</div>
                <h3>We pick up.</h3>
                <p>
                  Meet QarryOn at your coordinated airport curbside handoff,
                  hotel, Airbnb, or other approved pickup location.
                </p>
              </article>

              <article className="airport-step airport-step-two">
                <span className="airport-step-num">02</span>
                <div className="airport-step-icon">Q</div>
                <h3>We hold.</h3>
                <p>
                  Your luggage stays securely in our care while you explore,
                  work, dine, attend an event, or simply enjoy Atlanta.
                </p>
              </article>

              <article className="airport-step airport-step-three">
                <span className="airport-step-num">03</span>
                <div className="airport-step-icon">✓</div>
                <h3>We deliver.</h3>
                <p>
                  Your bags meet you at your hotel, Airbnb, airport departure
                  area, or another approved destination when you&apos;re ready.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* USE CASES */}
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
                  Land in the morning. Start enjoying Atlanta now. Let your
                  luggage arrive at the hotel later.
                </p>
              </article>

              <article>
                <span>02</span>
                <h3>Late departure</h3>
                <p>
                  Check out without ending your trip. We can meet you with your
                  bags before you head home.
                </p>
              </article>

              <article>
                <span>03</span>
                <h3>Meetings & events</h3>
                <p>
                  Go straight from ATL to the conference, meeting, restaurant,
                  or event — without the suitcases.
                </p>
              </article>

              <article>
                <span>04</span>
                <h3>Hotel & Airbnb delivery</h3>
                <p>
                  Your luggage can move from an approved airport handoff to
                  your accommodation while you move through Atlanta freely.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* DIFFERENTIATOR */}
<section className="airport-section airport-difference-section">
  <div className="airport-container">

    <div className="airport-difference-heading">
      <div>
        <div className="airport-eyebrow">Storage vs. Concierge</div>
        <h2>
          Same destination.
          <span> A smoother journey.</span>
        </h2>
      </div>

      <p>
  Traditional luggage storage adds another stop to your day.
  QarryOn picks up, securely holds, and delivers your bags instead—so
  your trip keeps moving forward.
</p>
    </div>

    <div className="airport-journey-comparison">

  {/* TRADITIONAL STORAGE */}
  <div className="airport-journey airport-journey-traditional">
    <div className="airport-journey-label">
      Traditional Storage
    </div>

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
  <strong>Drop off at storage</strong>
</div>

      <span className="airport-journey-line">→</span>

      <div className="airport-journey-stop">
        <span className="airport-journey-icon">
          <MapPin size={25} strokeWidth={1.8} />
        </span>
        <strong>Enjoy Atlanta</strong>
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
  <strong>Pick up your bags</strong>
</div>
    </div>

    <p className="airport-journey-summary">
      More stops. More backtracking.
      <strong> Your plans still revolve around your bags.</strong>
    </p>
  </div>

  <div className="airport-journey-vs">VS</div>

  {/* QARRYON */}
  <div className="airport-journey airport-journey-qarry">
    <div className="airport-journey-label">
      The QarryOn Way
    </div>

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
        <strong>We pick up your bags</strong>
      </div>

      <span className="airport-journey-line">→</span>

      <div className="airport-journey-stop">
        <span className="airport-journey-icon">
          <MapPin size={25} strokeWidth={1.8} />
        </span>
        <strong>You enjoy Atlanta</strong>
      </div>

      <span className="airport-journey-line">→</span>

      <div className="airport-journey-stop">
        <span className="airport-journey-icon">
          <Building2 size={25} strokeWidth={1.8} />
        </span>
        <strong>We deliver your bags</strong>
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

{/* PRICING */}
        <section id="pricing" className="airport-pricing">
  <div className="airport-container">
    <div className="airport-section-head airport-pricing-head">
      <div className="airport-eyebrow">Pricing</div>
      <h2>Simple. Transparent.</h2>
      <p>
        Three tiers. Clear starting prices. Add-ons and route complexity
        are confirmed during booking.
      </p>
    </div>

    <div className="airport-pricing-grid">
      <div className="airport-price-card">
        <div className="airport-tier-label">Qarry Lite</div>
        <div className="airport-price">$54</div>

        <p>
          Simple, scheduled luggage handling for straightforward travel
          days with a fixed pickup and delivery plan.
        </p>

        <ul>
          <li>Same-day luggage pickup and delivery</li>
          <li>Fixed pickup and delivery window</li>
          <li>Standard text updates</li>
          <li>Designed for 1–2 bags</li>
          <li>Changes billed separately</li>
        </ul>

        <Link
          href="/#booking"
          className="airport-btn airport-btn-secondary airport-price-btn"
        >
          Estimate Qarry Lite
        </Link>
      </div>

      <div className="airport-price-card airport-price-featured">
        <div className="airport-featured-badge">Most popular</div>
        <div className="airport-tier-label">Qarry Plus</div>
        <div className="airport-price">$74</div>

        <p>
          Flexible coordination for travelers whose timing or location
          may shift during the day.
        </p>

        <ul>
          <li>Everything in Qarry Lite</li>
          <li>Adjustable delivery window</li>
          <li>One free reasonable location or timing adjustment</li>
          <li>Confirmed delivery via handoff or photo</li>
          <li>Designed for 3–5 bags</li>
        </ul>

        <Link
          href="/#booking"
          className="airport-btn airport-btn-primary airport-price-btn"
        >
          Estimate Qarry Plus
        </Link>
      </div>

      <div className="airport-price-card">
        <div className="airport-tier-label">Qarry Elite</div>
        <div className="airport-price">$110</div>

        <p>
          Priority concierge support for tight schedules, complex
          routes, groups, events, or high-stakes travel days.
        </p>

        <ul>
          <li>Everything in Qarry Plus</li>
          <li>Priority routing and handling</li>
          <li>Flexible timing and reasonable changes included</li>
          <li>Proactive status updates</li>
          <li>Designed for 6+ bags</li>
        </ul>

        <Link
          href="/#booking"
          className="airport-btn airport-btn-secondary airport-price-btn"
        >
          Estimate Qarry Elite
        </Link>
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

        {/* FAQ */}
        <section id="faq" className="airport-section airport-faq-section">
          <div className="airport-container airport-faq-layout">
            <div>
              <div className="airport-eyebrow">ATL Airport FAQs</div>
              <h2>Before you hand us the bags.</h2>
              <p>
                A few things travelers usually want to know before their first
                QarryOn.
              </p>
            </div>

            <div className="airport-faq-list">
              {airportFaqs.map((faq) => (
                <article className="airport-faq" key={faq.question}>
                  <h3>{faq.question}</h3>
                  <p>{faq.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="airport-final">
          <div className="airport-final-glow" />

          <div className="airport-container airport-final-inner">
            <div className="airport-eyebrow airport-eyebrow-light">
              Your bags. Handled.
            </div>

            <h2>
              Atlanta is waiting.
              <span>Your luggage doesn&apos;t need to come.</span>
            </h2>

            <p>
              Tell us when you&apos;re arriving, where you&apos;re headed, and
              how many bags you&apos;re traveling with. We&apos;ll help
              coordinate the rest.
            </p>

            <Link href="/#booking" className="airport-btn airport-btn-primary">
              Get Instant Estimate
            </Link>
          </div>
        </section>

        {/* FOOTER */}
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
                Same-day luggage pickup and delivery across Atlanta — designed
                for travelers who want to move lighter.
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

  <Link href="/atlanta-airport-luggage-service">
    Airport Arrivals
  </Link>

  <Link href="/#use-cases">
    Hotel & Airbnb Delivery
  </Link>

  <a href="#travel-gap">
    Departure Support
  </a>

  <Link href="/#use-cases">
    Events & Group Travel
  </Link>
</div>
            </div>
          </div>

          <div className="airport-container airport-footer-bottom">
            <span>© 2026 QarryOn. All rights reserved.</span>
            <div>
              <a href="mailto:connect@myqarryon.com">
                connect@myqarryon.com
              </a>
              <span>Atlanta, GA</span>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}