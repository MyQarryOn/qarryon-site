"use client";

import {
  trackEstimateStarted,
  trackBookingStarted,
} from "./analytics";
import { useMemo, useState } from "react";
import Image from "next/image";
import {
  Plane,
  House,
  ArrowRight,
  Target,
  ShieldCheck,
  Check,
} from "lucide-react";
import { faqs } from "./faqs";

export default function Page() {
  const [bags, setBags] = useState(2);
  const [tier, setTier] = useState<"basic" | "premium" | "vip">("premium");
  const [faqOpen, setFaqOpen] = useState<number | null>(0);

  const pricing = {
    basic: 54,
    premium: 74,
    vip: 110,
  };

  const tierMeta = {
    basic: {
      label: "Qarry Lite",
      handling: "Secure handling",
      service: "Simple & Scheduled",
      courier: "Concierge assigned",
      status: "Picked up at 1:42 PM",
      routeTo: "Buckhead",
      progress: "52% complete",
      eta: "ETA 3:55 PM",
      verification: "Scheduled handoff",
    },
    premium: {
      label: "Qarry Plus",
      handling: "Verified handling",
      service: "Flexible Coordination",
      courier: "Concierge assigned",
      status: "Picked up at 2:14 PM",
      routeTo: "Midtown",
      progress: "68% complete",
      eta: "En route to Midtown",
      verification: "Confirmed delivery included",
    },
    vip: {
      label: "Qarry Elite",
      handling: "Priority handling",
      service: "Priority Concierge",
      courier: "Concierge assigned",
      status: "Picked up at 2:14 PM",
      routeTo: "Buckhead",
      progress: "82% complete",
      eta: "En route to Buckhead",
      verification: "Confirmed delivery included",
    },
  };

  const total = useMemo(() => {
    const base = pricing[tier];
    const included = tier === "basic" ? 2 : tier === "premium" ? 5 : 8;
    const extraBags = Math.max(0, bags - included) * 8;
    return base + extraBags;
  }, [bags, tier]);
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
  <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(faqSchema),
      }}
    />

    <main>
        <nav className="nav">
          <div className="container nav-inner">
            <a className="brand" href="#hero" aria-label="QarryOn home">
              <Image
                src="/Light Logo Header.png"
                alt="QarryOn"
                width={300}
                height={100}
                priority
                className="logo-light-v2"
              />
            </a>

            <div className="nav-links">
              <a
  href="#booking"
  onClick={() => trackEstimateStarted("nav_instant_estimate")}
>
  Instant Estimate
</a>
              <a href="#how">How it Works</a>
              <a href="#pricing">Pricing</a>
              <a href="#use-cases">Use Cases</a>
              <a href="#faq">FAQs</a>
            </div>

            <a
  className="btn btn-dark nav-cta-btn"
  href="#booking"
  onClick={() => trackEstimateStarted("nav_get_instant_estimate")}
>
  Get Instant Estimate
</a>
          </div>
        </nav>

        <section id="hero" className="hero hero-video">
          <div className="hero-video-bg">
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="hero-video-element"
            >
              <source src="/atlanta-hero.mp4" type="video/mp4" />
            </video>
            <div className="hero-video-overlay" />
          </div>

          <div className="container hero-editorial-grid hero-video-grid">
            <div className="hero-copy editorial-copy hero-copy-on-video">
              <div className="eyebrow eyebrow-light">
                Atlanta luggage concierge
              </div>
              <h1 className="hero-title-on-video">
                Your bags.
                <span>Handled.</span>
              </h1>
              <p className="hero-sub hero-sub-on-video">
                Same-day luggage pickup and delivery across Atlanta — from
                ATL&apos;s airport to your hotel, Airbnb, event, or back to the
                airport.
              </p>

              <div className="hero-actions">
                <a
  className="btn btn-primary"
  href="#booking"
  onClick={() => trackEstimateStarted("hero_get_instant_estimate")}
>
  Get Instant Estimate
</a>
                <a
                  className="btn btn-secondary btn-secondary-glass"
                  href="#how"
                >
                  See How It Works
                </a>
              </div>

              <div className="hero-proof">
                <div className="proof-item">
                  <span className="proof-num">ATL</span>
                  <span className="proof-label">Atlanta-based</span>
                </div>
                <div className="proof-item">
                  <span className="proof-num">Same day</span>
                  <span className="proof-label">Pickup & delivery</span>
                </div>
                <div className="proof-item">
                  <span className="proof-num">Tracked</span>
                  <span className="proof-label">Pickup to delivery</span>
                </div>
              </div>
            </div>

            <div className="glass-hero-wrap">
              <div className="ambient-card ambient-top">
                <div className="ambient-label">Pickup confirmed</div>
                <div className="ambient-value">
                  Hartsfield-Jackson · 2:14 PM
                </div>
              </div>

              <div className="glass-stack">
                <div className="glass-card-back glass-card-back-two" />
                <div className="glass-card-back glass-card-back-one" />

                <div className="glass-card-main">
                  <a className="live-badge live-badge-link" href="#booking">
                    <span className="live-dot" />
                    Real-Time Journey Updates
                  </a>

                  <div className="card-status-block">
                    <div className="status-chip">{tierMeta[tier].status}</div>
                    <div className="status-line">{tierMeta[tier].eta}</div>
                  </div>

                  <div className="track-route">
                    <div className="route-point">
                      <span className="route-label">Route</span>
                      <span className="route-city">ATL Airport</span>
                    </div>

                    <div className="route-arrow-wrap">
                      <div className="route-line" />
                      <ArrowRight size={14} />
                    </div>

                    <div className="route-point route-point-right">
                      <span className="route-label">Destination</span>
                      <span className="route-city">{tierMeta[tier].routeTo}</span>
                    </div>
                  </div>

                  <div className="progress-wrap">
                    <div className="progress-rail">
                      <div
                        className={`progress-bar ${
                          tier === "basic"
                            ? "bar-basic"
                            : tier === "premium"
                            ? "bar-premium"
                            : "bar-vip"
                        }`}
                      />
                    </div>
                    <div className="progress-meta">
                      <span className="prog-pct">{tierMeta[tier].progress}</span>
                      <span className="prog-eta">{tierMeta[tier].eta}</span>
                    </div>
                  </div>

                  <div className="card-detail-row">
                    <span className="card-detail-label">Concierge</span>
                    <span className="card-detail-value">
                      {tierMeta[tier].courier}
                    </span>
                  </div>

                  <div className="card-detail-row">
                    <span className="card-detail-label">Service tier</span>
                    <span className="card-detail-value">
                      {tierMeta[tier].service}
                    </span>
                  </div>

                  <div className="card-detail-row">
                    <span className="card-detail-label">Delivery</span>
                    <span className="card-detail-value">
                      {tierMeta[tier].verification}
                    </span>
                  </div>

                  <div className="card-detail-row">
                    <span className="card-detail-label">Handling</span>
                    <span className="card-detail-value teal-text">
                      {tierMeta[tier].handling}
                    </span>
                  </div>
                </div>
              </div>

              <div className="ambient-card ambient-bottom">
                <div className="ambient-label">Delivery window locked</div>
                <div className="ambient-value">Midtown · 3:30–4:00 PM</div>
              </div>
            </div>
          </div>
        </section>

        <section className="trust-strip trust-strip-dark">
          <div className="container trust-strip-grid">
            <div className="trust-pill trust-pill-dark">Real-time updates</div>
            <div className="trust-pill trust-pill-dark">Confirmed handoff</div>
            <div className="trust-pill trust-pill-dark">Concierge handling</div>
            <div className="trust-pill trust-pill-dark">
              Hotel, Airbnb & airport delivery
            </div>
          </div>
        </section>

        <section className="section section-white">
          <div className="container narrow">
            <div className="intro-block">
              <div className="eyebrow coral">Why QarryOn</div>
              <h2>A better arrival experience.</h2>
              <p>
                Travelers should not have to drag luggage through the city, wait
                on check-in windows, or coordinate around their bags. QarryOn
                creates freedom between where you land and where you’re going.
              </p>
            </div>
          </div>
        </section>

        <section className="section-divider"></section>

        <section id="booking" className="section section-white booking-section">
          <div className="container booking-grid">
            <div className="booking-copy">
              <div className="eyebrow coral">Instant Estimate</div>
              <h2>Get your instant estimate.</h2>
              <p>
                Start with your service tier and bag count. Then continue to
                booking to confirm timing, locations, and any add-ons.
              </p>

              <div className="booking-benefits">
                <div className="booking-benefit">
                  <strong>Tracked handoff</strong>
                  <span>
                    Clear confirmation from pickup through final delivery.
                  </span>
                </div>
                <div className="booking-benefit">
                  <strong>Flexible coordination</strong>
                  <span>
                    Travel plans shift. We’ll work with you when timing changes.
                  </span>
                </div>
                <div className="booking-benefit">
                  <strong>Premium support</strong>
                  <span>
                    Round-trip bookings, overnight holds, and extended-area
                    service available.
                  </span>
                </div>
              </div>
            </div>

            <div className="booking-card booking-card-premium booking-card-luxury-simple">
              <div className="booking-card-head booking-card-head-simple">
                <div>
                  <div className="booking-label">Instant estimate</div>
                  <h3>Preview your QarryOn service</h3>
                  <p className="booking-subtext-simple">
                    Select your tier, adjust your bag count, and review your
                    estimated pricing before continuing to booking.
                  </p>
                </div>
                <div className="booking-badge">Atlanta launch market</div>
              </div>

              <div className="booking-tier-preview">
                <button
                  type="button"
                  className={`tier-pill ${tier === "basic" ? "active" : ""}`}
                  onClick={() => setTier("basic")}
                >
                  <span className="tier-pill-name">Qarry Lite</span>
                  <span className="tier-pill-price">$54</span>
                </button>

                <button
                  type="button"
                  className={`tier-pill ${tier === "premium" ? "active" : ""}`}
                  onClick={() => setTier("premium")}
                >
                  <span className="tier-pill-name">Qarry Plus</span>
                  <span className="tier-pill-price">$74</span>
                </button>

                <button
                  type="button"
                  className={`tier-pill ${tier === "vip" ? "active" : ""}`}
                  onClick={() => setTier("vip")}
                >
                  <span className="tier-pill-name">Qarry Elite</span>
                  <span className="tier-pill-price">$110</span>
                </button>
              </div>

              <div className="selected-tier-card">
                <div>
                  <div className="selected-tier-label">Selected tier</div>
                  <h4>{tierMeta[tier].label}</h4>
                </div>
                <div className="selected-tier-handling">
                  {tierMeta[tier].handling}
                </div>
              </div>

              <div className="form-row">
                <label>Estimated number of bags</label>
                <div className="bag-counter bag-counter-luxury">
                  <button
                    type="button"
                    onClick={() => setBags((b) => Math.max(1, b - 1))}
                  >
                    −
                  </button>
                  <span>{bags}</span>
                  <button type="button" onClick={() => setBags((b) => b + 1)}>
                    +
                  </button>
                </div>
                <small className="field-helper-simple">
                  Pricing updates automatically based on your selected tier and
                  bag count.
                </small>
              </div>

              <div className="service-highlights">
                <div className="service-highlight">
                  <span>Same-day delivery</span>
                  <strong>Included</strong>
                </div>
                <div className="service-highlight">
                  <span>Handling</span>
                  <strong>{tierMeta[tier].handling}</strong>
                </div>
                <div className="service-highlight">
                  <span>Best for</span>
                  <strong>
                    {tier === "basic"
                      ? "1–2 bags"
                      : tier === "premium"
                      ? "3–5 bags"
                      : "6+ bags"}
                  </strong>
                </div>
              </div>

              <div className="estimate estimate-simple-luxury">
                <div className="estimate-header-simple">
                  <span className="estimate-label-simple">Estimate summary</span>
                  <span className="estimate-tier-simple">
                    {tierMeta[tier].label}
                  </span>
                </div>

                <div className="estimate-row">
                  <span>Base service</span>
                  <span>${pricing[tier]}</span>
                </div>
                <div className="estimate-row">
                  <span>Bags</span>
                  <span>{bags}</span>
                </div>
                <div className="estimate-row total">
                  <span>Estimated total</span>
                  <span>${total}</span>
                </div>

                <p className="estimate-note-simple">
                  Add-ons like round-trip service, overnight hold, and
                  outside-metro delivery are confirmed during booking.
                </p>
              </div>

              <a
                href="https://calendly.com/connect-myqarryon/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-full booking-cta-simple"
                onClick={() => trackBookingStarted("secure_your_pickup")}
              >
                Secure your pickup
              </a>

              <p className="booking-footnote booking-footnote-simple">
                On the next step, you’ll confirm pickup location, drop-off
                location, timing, and any add-ons.
              </p>
            </div>
          </div>
        </section>

        <section className="section-divider"></section>

        <section id="how" className="section section-soft">
          <div className="container">
            <div className="section-head">
              <div className="eyebrow">How it Works</div>
              <h2>
                Three steps.
                <br />
                Zero friction.
              </h2>
              <p className="section-sub">
                From your door to your destination — end to end.
              </p>
            </div>

            <div className="journey-row">
              <div className="journey-item">
                <div className="journey-icon">
                  <Plane size={24} strokeWidth={1.75} />
                </div>
                <div className="journey-label">Airport Pickup</div>
              </div>

              <div className="journey-arrow-inline">
                <ArrowRight size={18} strokeWidth={1.75} />
              </div>

              <div className="journey-item">
                <div className="journey-icon">
                  <House size={24} strokeWidth={1.75} />
                </div>
                <div className="journey-label">Hotel / Airbnb Delivery</div>
              </div>

              <div className="journey-arrow-inline">
                <ArrowRight size={18} strokeWidth={1.75} />
              </div>

              <div className="journey-item">
                <div className="journey-icon">
                  <Plane size={24} strokeWidth={1.75} />
                </div>
                <div className="journey-label">Airport Delivery (Timed)</div>
              </div>
            </div>

            <div className="steps">
              <div className="step">
                <div className="step-icon">01</div>
                <h3>Estimate and book</h3>
                <p>
                  Start with your service tier, review pricing, and continue to
                  booking with your route and preferred timing.
                </p>
              </div>

              <div className="step">
                <div className="step-icon">02</div>
                <h3>We handle your bags</h3>
                <p>
                QarryOn coordinates your luggage pickup and keeps you updated through secure hold, transit, and final delivery.
                </p>
              </div>

              <div className="step">
                <div className="step-icon">03</div>
                <h3>Delivered where you need it</h3>
                <p>
                  Hotel lobby, airport, Airbnb, or another approved destination
                  — your bags arrive where they need to be, when they need to.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-divider"></section>

        <section id="pricing" className="section section-white">
          <div className="container">
            <div className="section-head">
              <div className="eyebrow">Pricing</div>
              <h2>Simple. Transparent.</h2>
              <p className="section-sub">
                Three tiers. Clear starting prices. Add-ons and route complexity
                are confirmed during booking.
              </p>
            </div>

            <div className="pricing-grid">
              <div className={`price-card ${tier === "basic" ? "active" : ""}`}>
                <div className="tier-label">Qarry Lite</div>
                <div className="price">$54</div>
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
                <button
                  className="btn btn-secondary btn-full"
                  onClick={() => {
                    setTier("basic");
                    trackEstimateStarted("pricing", "Qarry Lite");
                    document.getElementById("booking")?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }}
                >
                  Estimate Qarry Lite
                </button>
              </div>

              <div
                className={`price-card featured ${
                  tier === "premium" ? "active" : ""
                }`}
              >
                <div className="featured-badge">Most popular</div>
                <div className="tier-label">Qarry Plus</div>
                <div className="price">$74</div>
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
                <button
                  className="btn btn-primary btn-full"
                  onClick={() => {
                    setTier("premium");
                    trackEstimateStarted("pricing", "Qarry Plus");
                    document.getElementById("booking")?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }}
                >
                  Estimate Qarry Plus
                </button>
              </div>

              <div className={`price-card ${tier === "vip" ? "active" : ""}`}>
                <div className="tier-label">Qarry Elite</div>
                <div className="price">$110</div>
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
                <button
                  className="btn btn-secondary btn-full"
                  onClick={() => {
                    setTier("vip");
                    trackEstimateStarted("pricing", "Qarry Elite");
                    document.getElementById("booking")?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }}
                >
                  Estimate Qarry Elite
                </button>
              </div>
            </div>

            <div className="addon-strip">
              <div className="addon">
                Extra bag <span>+$8</span>
              </div>
              <div className="addon">
                Round-trip booking <span>Save 10%</span>
              </div>
              <div className="addon">
                Overnight / multi-day hold <span>+$15/day</span>
              </div>
              <div className="addon">
                Outside metro Atlanta <span>Custom rate</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section-divider"></section>

        <section id="use-cases" className="section section-soft editorial-cases">
          <div className="container">
            <div className="section-head">
              <div className="eyebrow coral">Who We Serve</div>
              <h2>Built for the way Atlanta moves.</h2>
              <p className="section-sub">
                Built around the moments travelers are most likely to feel
                delayed, burdened, or out of sync with their luggage.
              </p>
            </div>

            <div className="editorial-stack-qarryon">
              <div className="editorial-card-qarryon editorial-card-featured">
                <div>
                  <div className="use-tag-qarryon">
                    <div className="use-icon-qarryon">
                      <Plane size={14} strokeWidth={1.9} />
                    </div>
                    Airport Arrivals
                  </div>

                  <h3 className="use-title-qarryon">
                    Landing at Hartsfield-Jackson?
                  </h3>

                  <p className="use-desc-qarryon">
                    We meet you and your bags and deliver them to your hotel
                    while you take a rideshare, free of anything to drag.
                  </p>
                </div>

                <a
                  href="#booking"
                  className="use-link-qarryon"
                  onClick={() => trackEstimateStarted("use_case_airport_transfer")}
                >
                  Book airport transfer{" "}
                  <ArrowRight size={16} strokeWidth={1.8} />
                </a>
              </div>

              <div className="editorial-card-qarryon">
                <div>
                  <div className="use-tag-qarryon">
                    <div className="use-icon-qarryon">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M3 9l9-7 9 7" />
                        <path d="M5 10v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V10" />
                      </svg>
                    </div>
                    Airbnb & Hotels
                  </div>

                  <h3 className="use-title-qarryon">
                    Check-in gap?
                    <br />
                    We bridge it.
                  </h3>

                  <p className="use-desc-qarryon">
                    Early arrival, late checkout. We hold and deliver your bags
                    exactly when you need them.
                  </p>
                </div>

                <a
                  href="#booking"
                  className="use-link-qarryon use-link-tight"
                  onClick={() => trackEstimateStarted("use_case_airbnb_hotels")}
                >
                  Book delivery <ArrowRight size={16} strokeWidth={1.8} />
                </a>
              </div>

              <div className="editorial-card-qarryon">
                <div>
                  <div className="use-tag-qarryon">
                    <div className="use-icon-qarryon">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect x="3" y="4" width="18" height="18" rx="2" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                        <line x1="8" y1="2.5" x2="8" y2="6" />
                        <line x1="16" y1="2.5" x2="16" y2="6" />
                      </svg>
                    </div>
                    Events & Conferences
                  </div>

                  <h3 className="use-title-qarryon">
                    Arrive light.
                    <br />
                    Leave lighter.
                  </h3>

                  <p className="use-desc-qarryon">
                    Weddings, conventions, corporate events — we handle bags
                    before and after so you focus on the moment.
                  </p>
                </div>

                <a
                  href="#booking"
                  className="use-link-qarryon use-link-tight"
                  onClick={() => trackEstimateStarted("use_case_events")}
                >
                  Book for your event{" "}
                  <ArrowRight size={16} strokeWidth={1.8} />
                </a>
              </div>

              <div className="editorial-card-qarryon">
                <div>
                  <div className="use-tag-qarryon">
                    <div className="use-icon-qarryon">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14" />
                        <path d="M13 5l7 7-7 7" />
                      </svg>
                    </div>
                    Departures
                  </div>

                  <h3 className="use-title-qarryon">
                    Late flight?
                    <br />
                    Keep your day.
                  </h3>

                  <p className="use-desc-qarryon">
                    Check out, leave your bags with us, and enjoy Atlanta before
                    heading back to ATL for departure.
                  </p>
                </div>

                <a
                  href="#booking"
                  className="use-link-qarryon use-link-tight"
                  onClick={() => trackEstimateStarted("use_case_departures")}
                >
                  Book return service{" "}
                  <ArrowRight size={16} strokeWidth={1.8} />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section-divider"></section>

        <section className="section section-white">
          <div className="container">
            <div className="section-head">
              <div className="eyebrow">Why QarryOn</div>
              <h2>Trusted from pickup to delivery.</h2>
              <p className="section-sub">
                QarryOn is built to feel clear, premium, and dependable from the
                first handoff to final delivery.
              </p>
            </div>

            <div className="trust-card-grid">
              <a className="trust-card trust-card-link" href="#booking">
                <div className="trust-card-icon">
                  <Target size={22} strokeWidth={1.75} />
                </div>
                <h3>Journey Updates</h3>
                <p>
                  Clear updates from arrival and pickup through secure hold, transit, delivery, and service completion.
                </p>
              </a>

              <div className="trust-card">
                <div className="trust-card-icon">
                  <ShieldCheck size={22} strokeWidth={1.75} />
                </div>
                <h3>Verified Handoffs</h3>
                <p>
                  Clear pickup and delivery confirmation helps create accountability from the first handoff through final delivery.
                </p>
              </div>

              <div className="trust-card">
                <div className="trust-card-icon">
                  <Check size={22} strokeWidth={1.9} />
                </div>
                <h3>Concierge coordination</h3>
                <p>
                  Designed for travelers who want fewer moving parts, cleaner
                  timing, and more confidence between airport and stay.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-divider"></section>

        <section id="faq" className="faq-section section-soft">
          <div className="container faq-inner">
            <div className="section-head faq-head">
              <div className="eyebrow coral">FAQs</div>
              <h2>Questions, answered.</h2>
              <p className="section-sub">
                Clear answers on timing, delivery locations, tracking, and flexible coordination.
              </p>
            </div>

            <div className="faq-list">
              {faqs.map((item, i) => (
                <div
                  key={`${item.question}-${i}`}
                  className={`faq-item ${faqOpen === i ? "open" : ""}`}
                >
                  <button
                    type="button"
                    className="faq-question"
                    onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                    aria-expanded={faqOpen === i}
                  >
                    <span>{item.question}</span>
                    <span className="faq-icon">{faqOpen === i ? "−" : "+"}</span>
                  </button>

                  {faqOpen === i && <p className="faq-answer">{item.answer}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section final-cta">
          <div className="container narrow center">
            <div className="eyebrow coral">Ready when you are</div>
            <h2>Move freely.</h2>
            <p>
              Travel without the weight. Book your first QarryOn delivery and
              make your next Atlanta arrival feel easier from the start.
            </p>
            <a
              className="btn btn-dark"
              href="#booking"
              onClick={() => trackEstimateStarted("bottom_book_with_qarryon")}
            >
              Book with QarryOn
            </a>
          </div>
        </section>

        <footer className="site-footer">
          <div className="container footer-top">
            <div className="footer-brand">
              <a className="footer-logo" href="#hero" aria-label="QarryOn home">
                <Image
                  src="/Footer-logo-dark2.png"
                  alt="QarryOn"
                  width={290}
                  height={96}
                  className="footer-logo-img"
                />
              </a>
              <p className="footer-copy">
                Same-day luggage pickup and delivery across Atlanta — designed
                for travelers who want to move lighter.
              </p>
            </div>

            <div className="footer-links-grid">
  <div className="footer-col">
    <h4>Company</h4>
    <a href="/#hero">Home</a>
    <a href="#how">How it Works</a>
    <a href="#pricing">Pricing</a>
    <a href="#use-cases">Use Cases</a>
  </div>

  <div className="footer-col">
    <h4>Support</h4>
    <a href="/#booking">Schedule Pickup</a>
    <a href="#faq">FAQs</a>
    <a href="/terms">Terms & Conditions</a>
    <a href="/privacy">Privacy Policy</a>
    <a href="mailto:connect@myqarryon.com">Email Us</a>
  </div>

  <div className="footer-col">
  <h4>Service</h4>

  <a href="/atlanta-airport-luggage-service">
    Airport Arrivals
  </a>

  <a href="/atlanta-luggage-storage">
    Atlanta Luggage Storage
  </a>

  <a href="/hotel-airbnb-luggage-delivery">
    Hotel & Airbnb Delivery
  </a>

  <a href="/events-conferences">
    Events & Conferences
  </a>
</div>
</div>
          </div>

          <div className="container footer-bottom">
            <span>© 2026 QarryOn. All rights reserved.</span>
            <div className="footer-bottom-links">
              <a href="mailto:connect@myqarryon.com">connect@myqarryon.com</a>
              <span>Atlanta, GA</span>
            </div>
          </div>
        </footer>
      </main>

      
    </>
  );
}