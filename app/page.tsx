"use client";

import { useMemo, useState } from "react";
import Image from "next/image";

export default function Page() {
  const [bags, setBags] = useState(2);
  const [tier, setTier] = useState<"basic" | "premium" | "vip">("premium");
  const [faqOpen, setFaqOpen] = useState<number | null>(0);

  const pricing = {
    basic: 39,
    premium: 59,
    vip: 95,
  };

  const tierMeta = {
    basic: {
      label: "Qarry Lite",
      coverage: "$5K coverage",
      service: "Qarry Lite",
      courier: "Courier assigned",
      status: "Picked up at 1:42 PM",
      routeTo: "Buckhead",
      progress: "52% complete",
      eta: "ETA 3:55 PM",
      verification: "Standard delivery flow",
    },
    premium: {
      label: "Qarry Plus",
      coverage: "$25K coverage",
      service: "Qarry Plus",
      courier: "Courier assigned",
      status: "Picked up at 2:14 PM",
      routeTo: "Midtown",
      progress: "68% complete",
      eta: "En route to Midtown",
      verification: "Verified delivery required",
    },
    vip: {
      label: "Qarry Elite",
      coverage: "$100K coverage",
      service: "Qarry Elite",
      courier: "Courier assigned",
      status: "Picked up at 2:14 PM",
      routeTo: "Buckhead",
      progress: "82% complete",
      eta: "En route to Buckhead",
      verification: "Verified delivery required",
    },
  };

  const total = useMemo(() => {
    const base = pricing[tier];
    const included = tier === "basic" ? 2 : tier === "premium" ? 5 : 8;
    const extraBags = Math.max(0, bags - included) * 8;
    return base + extraBags;
  }, [bags, tier]);

  const faqs = [
    {
      q: "How far in advance do I need to book?",
      a: "Standard bookings are best made a bit ahead of time, but premium and concierge requests are designed for faster turnaround when availability allows. If you have a tighter travel day, book as early as you can and we’ll prioritize the smoothest handoff possible.",
    },
    {
      q: "Do you serve Hartsfield-Jackson Airport?",
      a: "Yes. ATL is central to the QarryOn experience. We support airport-to-hotel, airport-to-Airbnb, hotel-to-airport, and similar same-day handoffs across Atlanta’s main travel corridors.",
    },
    {
      q: "Can I track my luggage in real time?",
      a: "Yes. QarryOn is designed around visibility and confidence. You’ll know when your bags are picked up, in transit, and delivered so you’re not guessing where they are during your travel day.",
    },
    {
      q: "What areas do you cover?",
      a: "We begin with Atlanta’s core travel corridors and destinations roughly within 15 minutes outside the I-285 perimeter. Requests beyond metro Atlanta can be quoted separately.",
    },
    {
      q: "Do you offer round-trip service?",
      a: "Yes. Travelers can book QarryOn for both arrival and departure support, and round-trip bookings can include a built-in incentive depending on the service setup.",
    },
    {
      q: "What if I have more bags, special timing, or a group?",
      a: "That’s exactly what Concierge is for. QarryOn can support families, events, business travelers, and higher-touch luggage coordination with more flexible service planning.",
    },
  ];

  return (
    <>
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
              <a href="#how">How it Works</a>
              <a href="#pricing">Pricing</a>
              <a href="#use-cases">Use Cases</a>
              <a href="#faq">FAQs</a>
            </div>

            <a className="btn btn-dark nav-cta-btn" href="#booking">
              Schedule Pickup
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
                ATL's airport to your hotel, Airbnb, event, or back to the airport.
              </p>

              <div className="hero-actions">
                <a className="btn btn-primary" href="#booking">
                  Schedule Pickup
                </a>
                <a className="btn btn-secondary btn-secondary-glass" href="#how">
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
                  <span className="proof-num">$100K</span>
                  <span className="proof-label">Max coverage tier</span>
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
                  <div className="live-badge">
                    <span className="live-dot" />
                    Live Tracking
                  </div>

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
                      <span className="route-arrow">→</span>
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
                    <span className="card-detail-label">Courier</span>
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
                    <span className="card-detail-label">Coverage</span>
                    <span className="card-detail-value teal-text">
                      {tierMeta[tier].coverage}
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
            <div className="trust-pill trust-pill-dark">Real-time tracking</div>
            <div className="trust-pill trust-pill-dark">Verified handoff</div>
            <div className="trust-pill trust-pill-dark">White-glove handling</div>
            <div className="trust-pill trust-pill-dark">
              Door-to-door delivery
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
                <div className="journey-icon">✈</div>
                <div className="journey-label">Airport Pickup</div>
              </div>
              <div className="journey-arrow-inline">→</div>
              <div className="journey-item">
                <div className="journey-icon">⌂</div>
                <div className="journey-label">Hotel / Airbnb Delivery</div>
              </div>
              <div className="journey-arrow-inline">→</div>
              <div className="journey-item">
                <div className="journey-icon">✈</div>
                <div className="journey-label">Airport Return Later</div>
              </div>
            </div>

            <div className="steps">
              <div className="step">
                <div className="step-icon">01</div>
                <h3>Book your pickup</h3>
                <p>
                  Schedule in minutes. Choose your service, share your route,
                  and select the timing that works best for your travel day.
                </p>
              </div>

              <div className="step">
                <div className="step-icon">02</div>
                <h3>We handle your bags</h3>
                <p>
                  A vetted, rated courier collects your luggage and transports it
                  securely. Track every mile in real time.
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
                Three tiers. No hidden fees. Same-day delivery across all
                options. Pick what fits your trip and move on.
              </p>
            </div>

            <div className="pricing-grid">
              <div className={`price-card ${tier === "basic" ? "active" : ""}`}>
                <div className="tier-label">Qarry Lite</div>
                <div className="price">$39</div>
                <p>
                  Standard delivery for airport transfers and Atlanta travel
                  days that need a smooth, simple handoff.
                </p>
                <ul>
                  <li>Same-day pickup and delivery</li>
                  <li>Airport ↔ Hotel / Airbnb</li>
                  <li>Ideal for 1–2 bags</li>
                </ul>
                <button
  className="btn btn-secondary btn-full"
  onClick={() => {
    setTier("basic");
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
                <div className="price">$59</div>
                <p>
                  For travelers who want a faster, smoother, more flexible
                  same-day experience with larger luggage needs.
                </p>
                <ul>
                  <li>Same-day pickup and delivery</li>
                  <li>Airport ↔ Hotel / Airbnb</li>
                  <li>Ideal for 3–5 bags</li>
                </ul>
                <button
  className="btn btn-primary btn-full"
  onClick={() => {
    setTier("premium");
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
                <div className="price">$95</div>
                <p>
                  Elevated support for groups, special timing, higher-touch
                  coordination, or premium service expectations.
                </p>
                <ul>
                  <li>Same-day pickup and delivery</li>
                  <li>Airport ↔ Hotel / Airbnb</li>
                  <li>Ideal for 6+ bags, families, or events</li>
                </ul>
                <button
  className="btn btn-secondary btn-full"
  onClick={() => {
    setTier("vip");
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
                        <path d="M22 2L11 13" />
                        <path d="M22 2L15 22l-4-9-9-4 20-7z" />
                      </svg>
                    </div>
                    Airport Arrivals
                  </div>

                  <h3 className="use-title-qarryon">
                    Landing at Hartsfield-Jackson?
                  </h3>

                  <p className="use-desc-qarryon">
                    We meet you and your bags and deliver
                    them to your hotel while you take a rideshare, free of
                    anything to drag.
                  </p>
                </div>

                <a href="#booking" className="use-link-qarryon">
                  Book airport transfer <span>↗</span>
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

                <a href="#booking" className="use-link-qarryon use-link-tight">
                  Book delivery <span>↗</span>
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

                <a href="#booking" className="use-link-qarryon use-link-tight">
                  Book for your event <span>↗</span>
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

                <a href="#booking" className="use-link-qarryon use-link-tight">
                  Book return service <span>↗</span>
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
              <div className="trust-card">
                <div className="trust-card-icon">⌖</div>
                <h3>Real-Time Tracking</h3>
                <p>
                  Live GPS from the moment we pick up. You'll know exactly where
                  your bags are — at every moment.
                </p>
              </div>

              <div className="trust-card">
                <div className="trust-card-icon">⛨</div>
                <h3>Insured Up to $100K</h3>
                <p>
                  Every bag, every delivery. Lite covers $5K. Elite covers
                  $100,000 per bag with signature confirmation.
                </p>
              </div>

              <div className="trust-card">
                <div className="trust-card-icon">✓</div>
                <h3>Premium coordination</h3>
                <p>
                  Designed for travelers who want fewer moving parts, cleaner
                  timing, and more confidence between airport and stay.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-divider"></section>

        <section id="booking" className="section section-white booking-section">
          <div className="container booking-grid">
            <div className="booking-copy">
              <div className="eyebrow coral">Book Pickup</div>
              <h2>Get your instant estimate.</h2>
              <p>
                Tell us where you are, where your bags need to go, and how many
                you’re traveling with. QarryOn is built for travelers who want
                less friction between landing and arriving.
              </p>

              <div className="booking-benefits">
                <div className="booking-benefit">
                  <strong>Insured from pickup</strong>
                  <span>
                    Every bag is covered the moment our courier arrives.
                  </span>
                </div>
                <div className="booking-benefit">
                  <strong>Free cancellation</strong>
                  <span>
                    Up to 2 hours before. No penalty, no questions.
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
        Select your tier, adjust your bag count, and review your estimated
        pricing before continuing to booking.
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
      <span className="tier-pill-price">$39</span>
    </button>

    <button
      type="button"
      className={`tier-pill ${tier === "premium" ? "active" : ""}`}
      onClick={() => setTier("premium")}
    >
      <span className="tier-pill-name">Qarry Plus</span>
      <span className="tier-pill-price">$59</span>
    </button>

    <button
      type="button"
      className={`tier-pill ${tier === "vip" ? "active" : ""}`}
      onClick={() => setTier("vip")}
    >
      <span className="tier-pill-name">Qarry Elite</span>
      <span className="tier-pill-price">$95</span>
    </button>
  </div>

  <div className="selected-tier-card">
    <div>
      <div className="selected-tier-label">Selected tier</div>
      <h4>{tierMeta[tier].label}</h4>
    </div>
    <div className="selected-tier-coverage">{tierMeta[tier].coverage}</div>
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
      Pricing updates automatically based on your selected tier and bag count.
    </small>
  </div>

  <div className="service-highlights">
    <div className="service-highlight">
      <span>Same-day delivery</span>
      <strong>Included</strong>
    </div>
    <div className="service-highlight">
      <span>Coverage</span>
      <strong>{tierMeta[tier].coverage}</strong>
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
      <span className="estimate-tier-simple">{tierMeta[tier].label}</span>
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
      Add-ons like round-trip service, overnight hold, and outside-metro
      delivery are confirmed during booking.
    </p>
  </div>

  <a
    href="https://calendly.com/connect-myqarryon/30min"
    target="_blank"
    rel="noopener noreferrer"
    className="btn btn-primary btn-full booking-cta-simple"
  >
    Secure your pickup
  </a>

  <p className="booking-footnote booking-footnote-simple">
    On the next step, you’ll confirm pickup location, drop-off location,
    timing, and any add-ons.
  </p>
</div>
          </div>
        </section>

        <section id="faq" className="section section-soft">
          <div className="container narrow">
            <div className="section-head">
              <div className="eyebrow">FAQs</div>
              <h2>Questions, answered.</h2>
            </div>

            <div className="faq-list">
              {faqs.map((item, i) => (
                <div
                  key={item.q}
                  className={`faq-item ${faqOpen === i ? "open" : ""}`}
                >
                  <button
                    className="faq-question"
                    onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                  >
                    <span>{item.q}</span>
                    <span>{faqOpen === i ? "−" : "+"}</span>
                  </button>
                  {faqOpen === i && <div className="faq-answer">{item.a}</div>}
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
            <a className="btn btn-dark" href="#booking">
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
                <a href="#hero">Home</a>
                <a href="#how">How it Works</a>
                <a href="#pricing">Pricing</a>
                <a href="#use-cases">Use Cases</a>
              </div>

              <div className="footer-col">
                <h4>Support</h4>
                <a href="#booking">Schedule Pickup</a>
                <a href="#faq">FAQs</a>
                <a href="mailto:hello@qarryon.com">Contact</a>
                <a href="mailto:hello@qarryon.com">Email Us</a>
              </div>

              <div className="footer-col">
                <h4>Service</h4>
                <span>Airport arrivals</span>
                <span>Hotel & Airbnb delivery</span>
                <span>Departure support</span>
                <span>Events & group travel</span>
              </div>
            </div>
          </div>

          <div className="container footer-bottom">
            <span>© 2026 QarryOn. All rights reserved.</span>
            <div className="footer-bottom-links">
              <a href="mailto:hello@qarryon.com">hello@qarryon.com</a>
              <span>Atlanta, GA</span>
            </div>
          </div>
        </footer>
      </main>

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700&family=Inter:wght@400;500;600&display=swap");

        :root {
          --navy: #0d1b2a;
          --navy-soft: #132538;
          --teal: #2ec4b6;
          --coral: #ff6b6b;
          --gold: #d6b16f;
          --offwhite: #fbfbfa;
          --text: #102030;
          --heading: "Montserrat", sans-serif;
          --body: "Inter", sans-serif;
          --shadow: 0 20px 60px rgba(9, 20, 31, 0.08);
        }

        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          font-family: var(--body);
          color: var(--text);
          background: var(--offwhite);
        }

        a {
          text-decoration: none;
        }

        button,
        input,
        select {
          font: inherit;
        }

        .container {
          width: min(1200px, calc(100% - 48px));
          margin: 0 auto;
        }

        .narrow {
          width: min(840px, calc(100% - 48px));
          margin: 0 auto;
        }

        .center {
          text-align: center;
        }

        .nav {
          position: sticky;
          top: 0;
          z-index: 50;
          background: rgba(255, 255, 255, 0.88);
          backdrop-filter: blur(14px);
          border-bottom: 1px solid rgba(16, 32, 48, 0.06);
        }

        .nav-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          min-height: 150px;
          gap: 12px;
        }

        .brand {
          display: inline-flex;
          align-items: center;
        }

        .Light Logo Header {
          display: block;
          height: auto;
          width: 150px;
          max-width: 100%;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 18px;
        }

        .nav-links a {
          color: #42505e;
          font-size: 0.95rem;
          font-weight: 500;
          transition: color 0.18s ease;
        }

        .nav-links a:hover {
          color: var(--navy);
        }

        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 14px 22px;
          border-radius: 999px;
          font-family: var(--heading);
          font-weight: 600;
          letter-spacing: -0.01em;
          transition: 0.22s ease;
          border: none;
          cursor: pointer;
        }

        .btn:hover {
          transform: translateY(-2px);
        }

        .btn-primary {
          background: var(--teal);
          color: var(--navy);
          box-shadow: 0 14px 36px rgba(46, 196, 182, 0.24);
        }

        .btn-secondary {
          background: white;
          color: var(--navy);
          border: 1px solid rgba(16, 32, 48, 0.1);
        }

        .btn-secondary-glass {
          background: rgba(255, 255, 255, 0.14);
          color: white;
          border: 1px solid rgba(255, 255, 255, 0.22);
          backdrop-filter: blur(10px);
        }

        .btn-dark {
          background: var(--navy);
          color: white;
        }

        .btn-full {
          width: 100%;
        }

        .hero {
          position: relative;
          padding: 110px 0 96px;
          overflow: hidden;
        }

        .hero-video {
          min-height: 88vh;
          display: flex;
          align-items: center;
        }

        .hero-video-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
        }

        .hero-video-element {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .hero-video-overlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(
              90deg,
              rgba(13, 27, 42, 0.82) 0%,
              rgba(13, 27, 42, 0.62) 38%,
              rgba(13, 27, 42, 0.46) 100%
            ),
            linear-gradient(
              180deg,
              rgba(13, 27, 42, 0.14) 0%,
              rgba(13, 27, 42, 0.28) 100%
            );
        }

        .hero-video-grid {
          position: relative;
          z-index: 1;
        }

        .hero-editorial-grid {
          display: grid;
          grid-template-columns: 1.08fr 0.92fr;
          gap: 72px;
          align-items: center;
        }

        .eyebrow {
          display: inline-block;
          margin-bottom: 18px;
          color: var(--teal);
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          font-family: var(--heading);
        }

        .eyebrow-light {
          color: rgba(255, 255, 255, 0.84);
        }

        .eyebrow.coral {
          color: var(--coral);
        }

        h1,
        h2,
        h3,
        h4 {
          margin: 0;
          font-family: var(--heading);
          letter-spacing: -0.03em;
        }

        h1 {
          font-size: clamp(3rem, 7vw, 5.6rem);
          line-height: 0.95;
          color: var(--navy);
          max-width: 840px;
        }

        h1 span {
          display: block;
          color: var(--teal);
          margin-top: 10px;
        }

        .hero-title-on-video {
          color: white;
          max-width: 760px;
        }

        .hero-title-on-video span {
          color: var(--teal);
        }

        .hero-sub {
          margin-top: 28px;
          max-width: 650px;
          font-size: 1.14rem;
          line-height: 1.9;
          color: #5d6976;
        }

        .hero-sub-on-video {
          color: rgba(255, 255, 255, 0.88);
          max-width: 620px;
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 36px;
        }

        .hero-proof {
          display: flex;
          flex-wrap: wrap;
          gap: 18px;
          margin-top: 34px;
        }

        .proof-item {
          min-width: 120px;
          padding: 14px 18px;
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.14);
          backdrop-filter: blur(12px);
        }

        .proof-num {
          display: block;
          color: white;
          font-family: var(--heading);
          font-size: 1rem;
          font-weight: 700;
          margin-bottom: 4px;
        }

        .proof-label {
          display: block;
          color: rgba(255, 255, 255, 0.76);
          font-size: 0.82rem;
          line-height: 1.4;
        }

        .glass-hero-wrap {
          position: relative;
          min-height: 540px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .glass-stack {
          position: relative;
          width: min(380px, 100%);
          z-index: 2;
        }

        .glass-card-back {
          position: absolute;
          left: 14px;
          right: 14px;
          border-radius: 28px;
          backdrop-filter: blur(18px);
          background: rgba(255, 255, 255, 0.15);
          border: 1px solid rgba(255, 255, 255, 0.24);
        }

        .glass-card-back-one {
          top: -16px;
          bottom: 14px;
          z-index: 1;
        }

        .glass-card-back-two {
          top: -30px;
          bottom: 28px;
          left: 28px;
          right: 28px;
          z-index: 0;
          background: rgba(255, 255, 255, 0.08);
        }

        .glass-card-main {
          position: relative;
          z-index: 2;
          padding: 26px;
          border-radius: 28px;
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(20px) saturate(1.5);
          -webkit-backdrop-filter: blur(20px) saturate(1.5);
          border: 1px solid rgba(255, 255, 255, 0.28);
          box-shadow:
            0 2px 0 rgba(255, 255, 255, 0.35) inset,
            0 24px 70px rgba(9, 20, 31, 0.24);
          color: white;
        }

        .live-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.74rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.84);
          margin-bottom: 14px;
        }

        .live-dot {
          width: 8px;
          height: 8px;
          border-radius: 999px;
          background: var(--teal);
          box-shadow: 0 0 0 8px rgba(46, 196, 182, 0.12);
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.7;
            transform: scale(0.86);
          }
        }

        .card-status-block {
          margin-bottom: 18px;
        }

        .status-chip {
          display: inline-flex;
          align-items: center;
          padding: 8px 12px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.14);
          border: 1px solid rgba(255, 255, 255, 0.18);
          color: rgba(255, 255, 255, 0.94);
          font-size: 0.78rem;
          font-weight: 600;
          margin-bottom: 10px;
        }

        .status-line {
          color: rgba(255, 255, 255, 0.84);
          font-size: 1rem;
          font-weight: 600;
        }

        .track-route {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
        }

        .route-point {
          display: flex;
          flex-direction: column;
        }

        .route-point-right {
          text-align: right;
          align-items: flex-end;
        }

        .route-label {
          font-size: 0.68rem;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: rgba(255, 255, 255, 0.68);
          margin-bottom: 4px;
        }

        .route-city {
          font-family: var(--heading);
          font-size: 1.02rem;
          font-weight: 700;
          color: white;
        }

        .route-arrow-wrap {
          flex: 1;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .route-line {
          flex: 1;
          height: 1px;
          background: rgba(255, 255, 255, 0.24);
        }

        .route-arrow {
          color: var(--teal);
          font-size: 0.92rem;
          font-weight: 700;
        }

        .progress-wrap {
          margin-bottom: 18px;
        }

        .progress-rail {
          height: 6px;
          background: rgba(255, 255, 255, 0.16);
          border-radius: 999px;
          overflow: hidden;
        }

        .progress-bar {
          height: 100%;
          border-radius: 999px;
          background: var(--teal);
        }

        .bar-basic {
          width: 52%;
        }

        .bar-premium {
          width: 68%;
        }

        .bar-vip {
          width: 82%;
        }

        .progress-meta {
          display: flex;
          justify-content: space-between;
          gap: 12px;
          margin-top: 10px;
        }

        .prog-pct,
        .prog-eta {
          font-size: 0.82rem;
          color: rgba(255, 255, 255, 0.78);
        }

        .card-detail-row {
          display: flex;
          justify-content: space-between;
          gap: 12px;
          padding: 12px 0;
          border-top: 1px solid rgba(255, 255, 255, 0.14);
        }

        .card-detail-label {
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.68);
        }

        .card-detail-value {
          font-size: 0.86rem;
          font-weight: 600;
          color: white;
          text-align: right;
        }

        .teal-text {
          color: var(--teal);
        }

        .ambient-card {
          position: absolute;
          padding: 14px 16px;
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.16);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.24);
          box-shadow: 0 18px 42px rgba(9, 20, 31, 0.16);
          color: white;
          z-index: 5;
          max-width: 230px;
        }

        .ambient-top {
          top: 22px;
          right: -8px;
        }

        .ambient-bottom {
          bottom: 48px;
          left: -8px;
        }

        .ambient-label {
          font-size: 0.66rem;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: rgba(255, 255, 255, 0.7);
          margin-bottom: 4px;
        }

        .ambient-value {
          font-size: 0.92rem;
          font-weight: 600;
          color: white;
          line-height: 1.35;
        }

        .trust-strip {
          padding: 18px 0;
          border-top: 1px solid rgba(16, 32, 48, 0.05);
          border-bottom: 1px solid rgba(16, 32, 48, 0.05);
        }

        .trust-strip-dark {
          background: var(--navy);
          border-top: none;
          border-bottom: none;
        }

        .trust-strip-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 14px;
        }

        .trust-pill {
          text-align: center;
          padding: 14px 16px;
          border-radius: 999px;
          font-weight: 600;
        }

        .trust-pill-dark {
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: white;
        }

        .section {
          padding: 112px 0;
        }

        .section-white {
          background: white;
        }

        .section-soft {
          background: #f8fafb;
        }

        .section-divider {
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(16, 32, 48, 0.08),
            transparent
          );
        }

        .section-head {
          margin-bottom: 48px;
        }

        .section-head h2 {
          font-size: clamp(2rem, 4vw, 3.5rem);
          line-height: 1.04;
          color: var(--navy);
          max-width: 780px;
        }

        .section-sub,
        .intro-block p,
        .booking-copy p,
        .final-cta p {
          font-size: 1.08rem;
          line-height: 1.95;
          color: #62707d;
          max-width: 720px;
        }

        .intro-block {
          text-align: center;
        }

        .intro-block h2 {
          font-size: clamp(2rem, 4vw, 3.1rem);
          color: var(--navy);
          margin-bottom: 18px;
        }

        .intro-block p {
          margin: 0 auto;
        }

        .journey-row {
          display: grid;
          grid-template-columns: 1fr auto 1fr auto 1fr;
          gap: 16px;
          align-items: center;
          margin-bottom: 34px;
          padding: 24px;
          background: white;
          border: 1px solid rgba(16, 32, 48, 0.06);
          border-radius: 24px;
        }

        .journey-item {
          text-align: center;
        }

        .journey-icon {
          width: 54px;
          height: 54px;
          margin: 0 auto 20px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(46, 196, 182, 0.12);
          color: var(--navy);
          font-size: 2rem;
          font-weight: 400;
        }

        .journey-label {
          color: var(--navy);
          font-weight: 600;
        }

        .journey-arrow-inline {
          color: #7c8793;
          font-size: 1.4rem;
          font-weight: 700;
        }

        .steps {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .step {
          background: white;
          border: 1px solid rgba(16, 32, 48, 0.06);
          border-radius: 22px;
          padding: 30px;
          min-height: 250px;
          transition: transform 0.18s ease, box-shadow 0.18s ease;
        }

        .step:hover,
        .price-card:hover,
        .trust-card:hover,
        .editorial-card-qarryon:hover {
          transform: translateY(-4px);
          box-shadow: 0 18px 42px rgba(9, 20, 31, 0.08);
        }

        .step-icon {
          width: 64px;
          height: 64px;
          border-radius: 999px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(46, 196, 182, 0.14);
          color: var(--navy);
          font-family: var(--heading);
          font-size: 1.15rem;
          font-weight: 700;
          margin-bottom: 35px;
        }

        .step h3 {
          font-size: 1.3rem;
          color: var(--navy);
          margin-bottom: 12px;
        }

        .step p {
          color: #65717d;
          line-height: 1.85;
        }

        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 26px;
        }

        .price-card {
          position: relative;
          background: white;
          border: 1px solid rgba(16, 32, 48, 0.08);
          border-radius: 26px;
          padding: 30px;
          box-shadow: 0 14px 34px rgba(9, 20, 31, 0.04);
          transition: transform 0.18s ease, box-shadow 0.18s ease;
        }

        .price-card.featured {
          border: 1.5px solid rgba(46, 196, 182, 0.35);
          box-shadow: 0 24px 60px rgba(46, 196, 182, 0.14);
        }

        .price-card.active {
          transform: translateY(-2px);
        }

        .featured-badge {
          position: absolute;
          top: 18px;
          right: 18px;
          background: rgba(46, 196, 182, 0.1);
          color: #178f84;
          padding: 8px 12px;
          border-radius: 999px;
          font-size: 0.78rem;
          font-weight: 700;
        }

        .tier-label {
          font-size: 0.84rem;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: #7e8995;
          margin-bottom: 14px;
          font-weight: 700;
          font-family: var(--heading);
        }

        .price {
          font-family: var(--heading);
          font-size: 3rem;
          line-height: 1;
          color: var(--navy);
          margin-bottom: 14px;
        }

        .price-card p {
          color: #66737f;
          line-height: 1.85;
          min-height: 88px;
        }

        .price-card ul {
          list-style: none;
          padding: 0;
          margin: 24px 0;
          display: grid;
          gap: 12px;
        }

        .price-card li {
          color: var(--navy);
          position: relative;
          padding-left: 18px;
        }

        .price-card li::before {
          content: "";
          position: absolute;
          left: 0;
          top: 10px;
          width: 8px;
          height: 8px;
          border-radius: 999px;
          background: var(--teal);
        }

        .addon-strip {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 14px;
          margin-top: 28px;
        }

        .addon {
          background: #f8fafb;
          border: 1px solid rgba(16, 32, 48, 0.06);
          border-radius: 18px;
          padding: 16px 18px;
          display: flex;
          justify-content: space-between;
          gap: 10px;
          color: var(--navy);
          font-weight: 500;
        }

        .addon span {
          color: var(--coral);
          font-weight: 700;
        }

        .editorial-cases {
          padding-top: 120px;
          padding-bottom: 120px;
        }

        .editorial-stack-qarryon {
          display: grid;
          grid-template-columns: 1fr;
          gap: 22px;
        }

        .editorial-card-qarryon {
          border-radius: 28px;
          background: white;
          border: 1px solid rgba(16, 32, 48, 0.08);
          transition: transform 0.18s ease, box-shadow 0.18s ease;
          padding: 30px 32px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: 220px;
        }

        .editorial-card-featured {
          min-height: 260px;
          background: linear-gradient(180deg, #ffffff 0%, #fbfcfd 100%);
        }

        .use-tag-qarryon {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 20px;
          color: #6a7682;
          font-size: 0.74rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          font-family: var(--heading);
        }

        .use-icon-qarryon {
          width: 34px;
          height: 34px;
          border-radius: 999px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(46, 196, 182, 0.12);
          color: var(--navy);
          border: 1px solid rgba(16, 32, 48, 0.08);
          flex-shrink: 0;
        }

        .use-title-qarryon {
          color: var(--navy);
          font-size: clamp(1.3rem, 2vw, 1.9rem);
          line-height: 1.08;
          margin-bottom: 14px;
        }

        .use-desc-qarryon {
          color: #66737f;
          line-height: 1.9;
          font-size: 1rem;
          max-width: 760px;
        }

        .use-link-qarryon {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-top: 24px;
          color: var(--navy);
          font-weight: 700;
          font-family: var(--heading);
          font-size: 0.95rem;
          transition: gap 0.18s ease, color 0.18s ease;
        }

        .use-link-qarryon span {
          color: var(--teal);
        }

        .use-link-qarryon:hover {
          gap: 12px;
          color: var(--navy-soft);
        }

        .use-link-tight {
          margin-top: 18px;
        }

        .trust-card-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
        }

        .trust-card {
          background: #f8fafb;
          border: 1px solid rgba(16, 32, 48, 0.06);
          border-radius: 24px;
          padding: 28px;
          transition: transform 0.18s ease, box-shadow 0.18s ease;
        }

        .trust-card-icon {
          width: 50px;
          height: 50px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(46, 196, 182, 0.12);
          color: var(--navy);
          font-size: 1.1rem;
          font-weight: 700;
          margin-bottom: 18px;
        }

        .trust-card h3 {
          font-size: 1.2rem;
          color: var(--navy);
          margin-bottom: 10px;
        }

        .trust-card p {
          color: #66737f;
          line-height: 1.85;
        }

 

        .booking-section {
  padding-top: 120px;
  padding-bottom: 120px;
}

.booking-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 52px;
  align-items: start;
}

.booking-copy h2 {
  font-size: clamp(2rem, 4vw, 3.2rem);
  color: var(--navy);
  margin-bottom: 18px;
}

.booking-benefits {
  display: grid;
  gap: 18px;
  margin-top: 30px;
}

.booking-benefit {
  padding: 18px 20px;
  border-radius: 18px;
  background: #ffffff;
  border: 1px solid rgba(16, 32, 48, 0.06);
}

.booking-benefit strong {
  display: block;
  color: var(--navy);
  margin-bottom: 6px;
  font-family: var(--heading);
}

.booking-benefit span {
  color: #66737f;
  line-height: 1.8;
}

.booking-card {
  background: white;
  border: 1px solid rgba(16, 32, 48, 0.08);
  border-radius: 28px;
  padding: 30px;
  box-shadow: var(--shadow);
}

.booking-card-premium {
  border: 1px solid rgba(16, 32, 48, 0.08);
  background: linear-gradient(180deg, #ffffff 0%, #fbfcfd 100%);
}

.booking-card-luxury-simple {
  box-shadow: 0 22px 60px rgba(9, 20, 31, 0.08);
}

.booking-card-head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 22px;
}

.booking-card-head h3 {
  font-size: 1.5rem;
  color: var(--navy);
  margin-top: 6px;
}

.booking-label {
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: #7b8793;
  font-family: var(--heading);
  font-weight: 700;
}

.booking-badge {
  background: rgba(46, 196, 182, 0.1);
  color: #178f84;
  padding: 8px 12px;
  border-radius: 999px;
  font-size: 0.78rem;
  font-weight: 700;
  white-space: nowrap;
}

.booking-subtext-simple {
  margin-top: 10px;
  margin-bottom: 0;
  color: #66737f;
  line-height: 1.75;
  max-width: 520px;
}

.booking-tier-preview {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  margin-bottom: 18px;
}

.tier-pill {
  border: 1px solid rgba(16, 32, 48, 0.08);
  background: white;
  border-radius: 18px;
  padding: 16px 14px;
  text-align: left;
  cursor: pointer;
  transition:
    transform 0.18s ease,
    box-shadow 0.18s ease,
    border-color 0.18s ease;
}

.tier-pill:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 28px rgba(9, 20, 31, 0.08);
}

.tier-pill.active {
  border-color: rgba(46, 196, 182, 0.45);
  background: rgba(46, 196, 182, 0.08);
  box-shadow: 0 14px 30px rgba(46, 196, 182, 0.14);
}

.tier-pill-name {
  display: block;
  color: var(--navy);
  font-family: var(--heading);
  font-size: 0.95rem;
  font-weight: 700;
  margin-bottom: 6px;
}

.tier-pill-price {
  display: block;
  color: #5f6b77;
  font-size: 0.95rem;
  font-weight: 600;
}

.selected-tier-card {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  align-items: center;
  padding: 18px 20px;
  border-radius: 20px;
  background: #f8fafb;
  border: 1px solid rgba(16, 32, 48, 0.06);
  margin-bottom: 18px;
}

.selected-tier-label {
  font-size: 0.74rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: #7b8793;
  font-family: var(--heading);
  font-weight: 700;
  margin-bottom: 8px;
}

.selected-tier-card h4 {
  color: var(--navy);
  font-size: 1.2rem;
}

.selected-tier-coverage {
  color: var(--teal);
  font-family: var(--heading);
  font-weight: 700;
  font-size: 0.95rem;
  text-align: right;
}

.form-row {
  margin-bottom: 18px;
}

.form-row label {
  display: block;
  margin-bottom: 8px;
  font-size: 0.84rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #7a8793;
  font-weight: 700;
  font-family: var(--heading);
}

.bag-counter {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  border: 1px solid rgba(16, 32, 48, 0.1);
  border-radius: 14px;
  height: 52px;
  padding: 0 10px;
}

.bag-counter-luxury {
  max-width: 200px;
  background: white;
}

.bag-counter button {
  width: 36px;
  height: 36px;
  border-radius: 999px;
  border: none;
  background: rgba(46, 196, 182, 0.12);
  color: var(--navy);
  font-size: 1.25rem;
  cursor: pointer;
}

.bag-counter span {
  font-weight: 700;
  font-family: var(--heading);
  color: var(--navy);
}

.field-helper-simple {
  display: block;
  margin-top: 8px;
  color: #7a8793;
  font-size: 0.84rem;
  line-height: 1.5;
}

.service-highlights {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  margin: 22px 0;
}

.service-highlight {
  background: white;
  border: 1px solid rgba(16, 32, 48, 0.06);
  border-radius: 18px;
  padding: 16px;
}

.service-highlight span {
  display: block;
  color: #7a8793;
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 8px;
  font-family: var(--heading);
  font-weight: 700;
}

.service-highlight strong {
  color: var(--navy);
  font-size: 0.98rem;
  line-height: 1.4;
}

.estimate {
  margin: 24px 0;
  padding: 18px;
  border-radius: 18px;
  background: #f8fafb;
  border: 1px solid rgba(16, 32, 48, 0.06);
}

.estimate-simple-luxury {
  background: linear-gradient(180deg, #0d1b2a 0%, #132538 100%);
  border: none;
  padding: 22px;
  box-shadow: 0 20px 44px rgba(13, 27, 42, 0.18);
}

.estimate-header-simple {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  align-items: center;
  margin-bottom: 12px;
}

.estimate-label-simple {
  color: rgba(255, 255, 255, 0.68);
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-family: var(--heading);
  font-weight: 700;
}

.estimate-tier-simple {
  color: var(--teal);
  font-family: var(--heading);
  font-weight: 700;
  font-size: 0.9rem;
}

.estimate-simple-luxury .estimate-row {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  padding: 10px 0;
  color: rgba(255, 255, 255, 0.86);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.estimate-simple-luxury .estimate-row.total {
  margin-top: 8px;
  padding-top: 14px;
  border-top: none;
  border-bottom: none;
  color: white;
  font-weight: 700;
}

.estimate-note-simple {
  margin: 14px 0 0;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.84rem;
  line-height: 1.55;
}

.booking-cta-simple {
  min-height: 56px;
  border-radius: 16px;
  font-size: 1rem;
}

.booking-footnote {
  margin-top: 14px;
  text-align: center;
  color: #7a8793;
  font-size: 0.92rem;
  line-height: 1.6;
}

.booking-footnote-simple {
  max-width: 480px;
  margin-left: auto;
  margin-right: auto;
}

@media (max-width: 980px) {
  .booking-grid {
    grid-template-columns: 1fr;
  }

  .booking-tier-preview,
  .service-highlights {
    grid-template-columns: 1fr;
  }
}

        .faq-list {
          display: grid;
          gap: 14px;
        }

        .faq-item {
          background: white;
          border: 1px solid rgba(16, 32, 48, 0.08);
          border-radius: 18px;
          padding: 0 22px;
        }

        .faq-question {
          width: 100%;
          background: transparent;
          border: none;
          padding: 22px 0;
          display: flex;
          justify-content: space-between;
          gap: 24px;
          text-align: left;
          color: var(--navy);
          font-family: var(--heading);
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
        }

        .faq-answer {
          padding: 0 0 22px;
          color: #64707d;
          line-height: 1.85;
        }

        .final-cta {
          background: linear-gradient(180deg, #ffffff 0%, #f8fafb 100%);
        }

        .final-cta h2 {
          font-size: clamp(2.2rem, 4vw, 3.4rem);
          color: var(--navy);
          margin-bottom: 14px;
        }

        .final-cta p {
          margin: 0 auto 28px;
        }

        .site-footer {
          background: #081d34;
          color: white;
          padding: 72px 0 28px;
        }

        .footer-top {
          display: grid;
          grid-template-columns: 1.15fr 1fr;
          gap: 48px;
          align-items: start;
          padding-bottom: 40px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .footer-logo {
          display: inline-flex;
          align-items: center;
        }

        .Footer-logo-dark2-img {
          width: 290px;
          height: auto;
          display: block;
        }

        .footer-copy {
          margin-top: 20px;
          max-width: 420px;
          color: rgba(255, 255, 255, 0.72);
          line-height: 1.85;
          font-size: 1rem;
        }

        .footer-links-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }

        .footer-col h4 {
          color: white;
          font-size: 1rem;
          margin-bottom: 16px;
        }

        .footer-col a,
        .footer-col span {
          display: block;
          color: rgba(255, 255, 255, 0.72);
          font-size: 0.95rem;
          line-height: 1.9;
          margin-bottom: 4px;
        }

        .footer-col a:hover {
          color: white;
        }

        .footer-bottom {
          padding-top: 22px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
          color: rgba(255, 255, 255, 0.58);
          font-size: 0.92rem;
        }

        .footer-bottom-links {
          display: flex;
          align-items: center;
          gap: 18px;
          flex-wrap: wrap;
        }

        .footer-bottom-links a,
        .footer-bottom-links span {
          color: rgba(255, 255, 255, 0.58);
        }

        @media (max-width: 1040px) {
          .hero-editorial-grid,
          .trust-strip-grid,
          .journey-row,
          .steps,
          .pricing-grid,
          .addon-strip,
          .trust-card-grid,
          .booking-grid,
          .footer-top,
          .footer-links-grid {
            grid-template-columns: 1fr;
          }

          .nav-links {
            display: none;
          }

          .hero-editorial-grid,
          .booking-grid {
            gap: 40px;
          }

          .journey-arrow-inline {
            display: none;
          }

          .glass-hero-wrap {
            min-height: auto;
          }

          .ambient-top,
          .ambient-bottom {
            position: static;
            margin-bottom: 14px;
          }

          .footer-bottom {
            flex-direction: column;
            align-items: flex-start;
          }
        }

        @media (max-width: 640px) {
          .container,
          .narrow {
            width: min(100% - 28px, 1200px);
          }

          .section,
          .hero {
            padding-top: 72px;
            padding-bottom: 72px;
          }

          .nav-inner {
            min-height: 140px;
          }

          .hero-actions {
            flex-direction: column;
            align-items: stretch;
          }

          .btn,
          .nav-cta-btn {
            width: 100%;
          }

          .two-col {
            grid-template-columns: 1fr;
          }

          .logo-light-v2 {
            width: 220px;
            height: auto;
          }

          .glass-card-main,
          .editorial-card-qarryon {
            padding: 20px;
          }

          .proof-item {
            width: 100%;
          }

          .track-route {
            gap: 8px;
          }

          .route-city {
            font-size: 0.92rem;
          }

          .footer-logo-img {
            width: 200px;
          }
        }
      `}</style>
    </>
  );
}