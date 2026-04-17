"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

export default function Page() {
  const [bags, setBags] = useState(2);
  const [tier, setTier] = useState<"basic" | "premium" | "vip">("premium");
  const [faqOpen, setFaqOpen] = useState<number | null>(0);

  const pricing = {
    basic: 39,
    premium: 59,
    vip: 95,
  };

  const total = useMemo(() => {
    const base = pricing[tier];
    const included = tier === "basic" ? 2 : tier === "premium" ? 5 : 8;
    const extraBags = Math.max(0, bags - included) * 8;
    return base + extraBags;
  }, [bags, tier]);

  const faqs = [
    {
      q: "What does QarryOn do?",
      a: "QarryOn provides luggage pickup, transport, and delivery across Atlanta so travelers can move freely without carrying bags through the city.",
    },
    {
      q: "Who is this best for?",
      a: "Airport arrivals, Airbnb guests with check-in gaps, hotel guests, event attendees, and business travelers who want a smoother arrival experience.",
    },
    {
      q: "What areas do you cover?",
      a: "We start with Atlanta’s core travel corridors and support destinations within roughly 15 minutes outside the I-285 perimeter.",
    },
    {
      q: "How do pricing and add-ons work?",
      a: "You choose a service tier based on your luggage needs, then add any extras such as rush delivery, after-hours support, or extended service area coverage.",
    },
  ];

  return (
    <>
      <main>
        <nav className="nav">
          <div className="container nav-inner">
            <a className="brand" href="#hero" aria-label="QarryOn home">
              <Image
                src="/logo-light.png"
                alt="QarryOn"
                width={220}
                height={64}
                priority
                className="logo-light"
              />
            </a>

            <div className="nav-links">
              <a href="#how">How it works</a>
              <a href="#pricing">Pricing</a>
              <a href="#use-cases">Use cases</a>
              <a href="#faq">FAQ</a>
            </div>

            <a className="btn btn-dark nav-cta-btn" href="#booking">
              Book pickup
            </a>
          </div>
        </nav>

        <section id="hero" className="hero hero-editorial">
          <div className="container hero-editorial-grid">
            <div className="hero-copy editorial-copy">
              <div className="eyebrow">Private-feel luggage concierge</div>
              <h1>
                Travel like your bags are already handled.
                <span>Because they should be.</span>
              </h1>
              <p className="hero-sub">
                QarryOn is a modern luggage transfer service for travelers who want less friction between the airport and wherever they’re headed next.
              </p>

              <div className="hero-actions">
                <a className="btn btn-primary" href="#booking">
                  Book luggage pickup
                </a>
                <a className="btn btn-secondary" href="#pricing">
                  See service tiers
                </a>
              </div>

              <div className="hero-trust">
                <div>Atlanta-based</div>
                <div>Secure handling</div>
                <div>Built for modern travel</div>
              </div>
            </div>

            <div className="editorial-panel">
              <div className="editorial-panel-inner">
                <div className="editorial-panel-top">
                  <div className="mini-logo-wrap">
                    <Image
                      src="/icon-light.png"
                      alt="QarryOn icon"
                      width={36}
                      height={36}
                      className="mini-logo-light"
                    />
                    <span>QarryOn</span>
                  </div>
                  <div className="booking-badge dark-badge">Now serving Atlanta</div>
                </div>

                <div className="editorial-kicker">Sample service route</div>
                <div className="editorial-route">ATL → Midtown → Buckhead → Hotels → Airbnbs</div>
                <div className="editorial-divider"></div>

                <div className="editorial-stats">
                  <div className="editorial-stat">
                    <div className="editorial-stat-label">Typical use</div>
                    <div className="editorial-stat-value">Airport arrival</div>
                  </div>
                  <div className="editorial-stat">
                    <div className="editorial-stat-label">Service feel</div>
                    <div className="editorial-stat-value">Concierge-level</div>
                  </div>
                </div>

                <p>
                  Designed for airport arrivals, check-in gaps, event days, and business travelers who want a more polished arrival experience.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-white">
          <div className="container narrow">
            <div className="intro-block">
              <div className="eyebrow coral">Why QarryOn</div>
              <h2>A better arrival experience.</h2>
              <p>
                Travelers should not have to drag luggage through the city, wait on check-in windows, or coordinate around their bags. QarryOn creates freedom between where you land and where you’re going.
              </p>
            </div>
          </div>
        </section>

        <section id="how" className="section section-soft">
          <div className="container">
            <div className="section-head">
              <div className="eyebrow">How it works</div>
              <h2>Simple enough to book in minutes.</h2>
              <p className="section-sub">
                Clear, premium, and designed to reduce friction from arrival to handoff.
              </p>
            </div>

            <div className="steps">
              <div className="step">
                <div className="step-num">01</div>
                <h3>Choose your service</h3>
                <p>Select the package that fits your travel day, bag count, and timing needs.</p>
              </div>

              <div className="step">
                <div className="step-num">02</div>
                <h3>Share pickup and drop-off details</h3>
                <p>Tell us where you are, where your bags need to go, and when you need support.</p>
              </div>

              <div className="step">
                <div className="step-num">03</div>
                <h3>Move through Atlanta without the weight</h3>
                <p>We handle the luggage transfer so you can head to your next stop with less friction.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="section section-white">
          <div className="container">
            <div className="section-head">
              <div className="eyebrow">Pricing</div>
              <h2>Flat, transparent pricing.</h2>
              <p className="section-sub">
                Choose the level of convenience that fits your travel day.
              </p>
            </div>

            <div className="pricing-grid">
              <div className={`price-card ${tier === "basic" ? "active" : ""}`}>
                <div className="tier-label">Basic Transfer</div>
                <div className="price">$39</div>
                <p>Best for solo travelers with simple airport-to-destination needs.</p>
                <ul>
                  <li>1–2 bags included</li>
                  <li>Pickup or delivery</li>
                  <li>Core Atlanta service area</li>
                </ul>
                <button className="btn btn-secondary btn-full" onClick={() => setTier("basic")}>
                  Choose Basic
                </button>
              </div>

              <div className={`price-card featured ${tier === "premium" ? "active" : ""}`}>
                <div className="featured-badge">Most popular</div>
                <div className="tier-label">Same-Day Delivery</div>
                <div className="price">$59</div>
                <p>Built for most travelers who want a smoother airport arrival and handoff.</p>
                <ul>
                  <li>3–5 bags included</li>
                  <li>Pickup + delivery</li>
                  <li>Priority handling</li>
                </ul>
                <button className="btn btn-primary btn-full" onClick={() => setTier("premium")}>
                  Choose Premium
                </button>
              </div>

              <div className={`price-card ${tier === "vip" ? "active" : ""}`}>
                <div className="tier-label">Priority Concierge</div>
                <div className="price">$95</div>
                <p>Premium support for families, groups, events, and elevated travel needs.</p>
                <ul>
                  <li>Up to 8 bags included</li>
                  <li>Flexible delivery timing</li>
                  <li>White-glove feel</li>
                </ul>
                <button className="btn btn-secondary btn-full" onClick={() => setTier("vip")}>
                  Choose VIP
                </button>
              </div>
            </div>

            <div className="addon-strip">
              <div className="addon">Extra bag <span>+$8</span></div>
              <div className="addon">Rush service <span>+$25</span></div>
              <div className="addon">Outside zone <span>+$30</span></div>
              <div className="addon">After hours <span>+$20</span></div>
            </div>
          </div>
        </section>

        <section id="use-cases" className="section section-white editorial-cases">
          <div className="container">
            <div className="section-head">
              <div className="eyebrow coral">Use cases</div>
              <h2>Where QarryOn fits best.</h2>
              <p className="section-sub">
                Built around the moments travelers are most likely to feel delayed, burdened, or out of sync with their luggage.
              </p>
            </div>

            <div className="editorial-case-grid">
              <div className="editorial-case large">
                <h3>Airport arrivals</h3>
                <p>
                  Skip carrying luggage from ATL while you head directly into your plans, not your baggage logistics.
                </p>
              </div>
              <div className="editorial-case">
                <h3>Airbnb timing gaps</h3>
                <p>Arrive before check-in without dragging bags through the city.</p>
              </div>
              <div className="editorial-case">
                <h3>Events and conferences</h3>
                <p>Go straight to the venue while your luggage is routed properly.</p>
              </div>
              <div className="editorial-case">
                <h3>Business travel</h3>
                <p>Move from terminal to meetings, dinners, and hotels with less friction.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="booking" className="section section-white booking-section">
          <div className="container booking-grid">
            <div className="booking-copy">
              <div className="eyebrow coral">Book now</div>
              <h2>Get your pickup started in under 2 minutes.</h2>
              <p>
                Tell us where you are, where your bags need to go, and how many you’re traveling with. QarryOn is built for travelers who want less friction between landing and arriving.
              </p>

              <div className="booking-benefits">
                <div className="booking-benefit">
                  <strong>Airport to Airbnb or hotel</strong>
                  <span>Perfect for early arrivals and delayed check-ins.</span>
                </div>
                <div className="booking-benefit">
                  <strong>Airport to your live location</strong>
                  <span>Go straight to lunch, meetings, events, or sightseeing.</span>
                </div>
                <div className="booking-benefit">
                  <strong>Premium support</strong>
                  <span>Rush, after-hours, and extended-zone service available.</span>
                </div>
              </div>
            </div>

            <div className="booking-card booking-card-premium">
              <div className="booking-card-head">
                <div>
                  <div className="booking-label">Live estimate</div>
                  <h3>Book luggage pickup</h3>
                </div>
                <div className="booking-badge">Atlanta only</div>
              </div>

              <div className="form-row">
                <label>Service tier</label>
                <select value={tier} onChange={(e) => setTier(e.target.value as "basic" | "premium" | "vip")}>
                  <option value="basic">Basic Transfer</option>
                  <option value="premium">Same-Day Delivery</option>
                  <option value="vip">Priority Concierge</option>
                </select>
              </div>

              <div className="form-row two-col">
                <div>
                  <label>Pickup</label>
                  <input placeholder="ATL Airport, hotel, event..." />
                </div>
                <div>
                  <label>Drop-off</label>
                  <input placeholder="Airbnb, Midtown, Buckhead..." />
                </div>
              </div>

              <div className="form-row two-col">
                <div>
                  <label>Date</label>
                  <input type="date" />
                </div>
                <div>
                  <label>Time window</label>
                  <select>
                    <option>Morning</option>
                    <option>Midday</option>
                    <option>Afternoon</option>
                    <option>Evening</option>
                  </select>
                </div>
              </div>

              <div className="form-row">
                <label>Number of bags</label>
                <div className="bag-counter">
                  <button type="button" onClick={() => setBags((b) => Math.max(1, b - 1))}>
                    −
                  </button>
                  <span>{bags}</span>
                  <button type="button" onClick={() => setBags((b) => b + 1)}>
                    +
                  </button>
                </div>
              </div>

              <div className="addon-checks">
                <label className="addon-check">
                  <input type="checkbox" /> Rush service (+$25)
                </label>
                <label className="addon-check">
                  <input type="checkbox" /> Outside zone (+$30)
                </label>
                <label className="addon-check">
                  <input type="checkbox" /> After hours (+$20)
                </label>
              </div>

              <div className="estimate premium-estimate">
                <div className="estimate-row">
                  <span>Selected service</span>
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
              </div>

              <button className="btn btn-primary btn-full">Get my pickup started</button>
              <p className="booking-footnote">
                No app required to book. Payment and confirmations can be added next.
              </p>
            </div>
          </div>
        </section>

        <section id="faq" className="section section-soft">
          <div className="container narrow">
            <div className="section-head">
              <div className="eyebrow">FAQ</div>
              <h2>Questions before booking.</h2>
            </div>

            <div className="faq-list">
              {faqs.map((item, i) => (
                <div key={item.q} className={`faq-item ${faqOpen === i ? "open" : ""}`}>
                  <button className="faq-question" onClick={() => setFaqOpen(faqOpen === i ? null : i)}>
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
            <h2>Stop carrying your bags.</h2>
            <p>
              Book your first QarryOn delivery and make your next Atlanta arrival feel easier from the start.
            </p>
            <a className="btn btn-dark" href="#booking">
              Book with QarryOn
            </a>
          </div>
        </section>
      </main>

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700&family=Inter:wght@400;500;600&display=swap");

        :root {
          --navy: #0d1b2a;
          --navy-soft: #132538;
          --navy-deep: #08131e;
          --teal: #2ec4b6;
          --coral: #ff6b6b;
          --offwhite: #fbfbfa;
          --white: #ffffff;
          --gray-1: #f1f3f5;
          --gray-2: #d9dee3;
          --gray-3: #7a8591;
          --text: #102030;
          --heading: "Montserrat", sans-serif;
          --body: "Inter", sans-serif;
          --radius: 16px;
          --radius-sm: 10px;
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
          min-height: 82px;
          gap: 24px;
        }

        .brand {
          display: inline-flex;
          align-items: center;
        }

        .logo-light {
          display: block;
          height: auto;
          width: auto;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 32px;
        }

        .nav-links a {
          color: #42505e;
          font-size: 0.96rem;
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

        .btn-primary {
          background: var(--teal);
          color: var(--navy);
          box-shadow: 0 14px 36px rgba(46, 196, 182, 0.24);
        }

        .btn-primary:hover {
          transform: translateY(-1px);
          opacity: 0.96;
        }

        .btn-secondary {
          background: white;
          color: var(--navy);
          border: 1px solid rgba(16, 32, 48, 0.1);
        }

        .btn-dark {
          background: var(--navy);
          color: white;
        }

        .btn-full {
          width: 100%;
        }

        .hero {
          padding: 92px 0 88px;
        }

        .hero-editorial {
          background:
            radial-gradient(circle at top right, rgba(46, 196, 182, 0.08), transparent 30%),
            linear-gradient(180deg, #ffffff 0%, #fcfcfb 100%);
        }

        .hero-editorial-grid {
          display: grid;
          grid-template-columns: 1.12fr 0.88fr;
          gap: 80px;
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

        .eyebrow.coral {
          color: var(--coral);
        }

        h1,
        h2,
        h3 {
          margin: 0;
          font-family: var(--heading);
          letter-spacing: -0.03em;
        }

        h1 {
          font-size: clamp(3rem, 7vw, 5.5rem);
          line-height: 0.98;
          color: var(--navy);
          max-width: 820px;
        }

        h1 span {
          display: block;
          color: var(--teal);
          margin-top: 8px;
        }

        .hero-sub {
          margin-top: 26px;
          max-width: 650px;
          font-size: 1.14rem;
          line-height: 1.85;
          color: #5d6976;
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 34px;
        }

        .hero-trust {
          display: flex;
          flex-wrap: wrap;
          gap: 24px;
          margin-top: 36px;
          color: #6a7682;
          font-size: 0.95rem;
        }

        .editorial-panel {
          display: flex;
          align-items: stretch;
        }

        .editorial-panel-inner {
          width: 100%;
          padding: 34px;
          border-radius: 28px;
          background: linear-gradient(180deg, #0d1b2a 0%, #132538 100%);
          color: white;
          box-shadow: 0 24px 70px rgba(9, 20, 31, 0.16);
        }

        .editorial-panel-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          margin-bottom: 22px;
        }

        .mini-logo-wrap {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: var(--heading);
          font-weight: 700;
          color: white;
        }

        .mini-logo-light {
          display: block;
          height: auto;
          width: auto;
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

        .dark-badge {
          background: rgba(255, 255, 255, 0.1);
          color: white;
        }

        .editorial-kicker {
          font-size: 0.78rem;
          text-transform: uppercase;
          letter-spacing: 0.14em;
          color: var(--teal);
          font-family: var(--heading);
          font-weight: 700;
        }

        .editorial-route {
          margin-top: 18px;
          font-family: var(--heading);
          font-size: 1.5rem;
          line-height: 1.35;
          letter-spacing: -0.02em;
        }

        .editorial-divider {
          height: 1px;
          background: rgba(255, 255, 255, 0.12);
          margin: 22px 0;
        }

        .editorial-stats {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
          margin-bottom: 18px;
        }

        .editorial-stat {
          padding: 16px;
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .editorial-stat-label {
          color: rgba(255, 255, 255, 0.58);
          font-size: 0.8rem;
          margin-bottom: 6px;
        }

        .editorial-stat-value {
          font-family: var(--heading);
          font-weight: 700;
          color: white;
        }

        .editorial-panel-inner p {
          color: rgba(255, 255, 255, 0.78);
          line-height: 1.85;
          margin: 0;
        }

        .section {
          padding: 104px 0;
        }

        .section-white {
          background: white;
        }

        .section-soft {
          background: #f8fafb;
        }

        .section-head {
          margin-bottom: 44px;
        }

        .section-head h2 {
          font-size: clamp(2rem, 4vw, 3.4rem);
          line-height: 1.05;
          color: var(--navy);
          max-width: 760px;
        }

        .section-sub,
        .intro-block p,
        .booking-copy p,
        .final-cta p {
          font-size: 1.08rem;
          line-height: 1.9;
          color: #62707d;
          max-width: 700px;
        }

        .intro-block {
          text-align: center;
        }

        .intro-block h2 {
          font-size: clamp(2rem, 4vw, 3rem);
          color: var(--navy);
          margin-bottom: 18px;
        }

        .intro-block p {
          margin: 0 auto;
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
        }

        .step-num {
          font-family: var(--heading);
          font-size: 0.92rem;
          color: var(--coral);
          margin-bottom: 20px;
          font-weight: 700;
        }

        .step h3 {
          font-size: 1.3rem;
          color: var(--navy);
          margin-bottom: 12px;
        }

        .step p {
          color: #65717d;
          line-height: 1.8;
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
          line-height: 1.8;
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

        .editorial-case-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr 1fr;
          gap: 22px;
        }

        .editorial-case {
          padding: 28px;
          border-radius: 24px;
          background: #ffffff;
          border: 1px solid rgba(16, 32, 48, 0.08);
          min-height: 210px;
        }

        .editorial-case.large {
          grid-row: span 2;
          min-height: 100%;
        }

        .editorial-case h3 {
          color: var(--navy);
          font-size: 1.35rem;
          margin-bottom: 12px;
        }

        .editorial-case p {
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
          line-height: 1.75;
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

        input,
        select {
          width: 100%;
          height: 52px;
          border-radius: 14px;
          border: 1px solid rgba(16, 32, 48, 0.1);
          padding: 0 16px;
          background: white;
          color: var(--navy);
        }

        .two-col {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }

        .two-col > div label {
          display: block;
          margin-bottom: 8px;
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

        .addon-checks {
          display: grid;
          gap: 10px;
          margin: 10px 0 20px;
        }

        .addon-check {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #55626f;
        }

        .addon-check input {
          width: 16px;
          height: 16px;
        }

        .estimate {
          margin: 24px 0;
          padding: 18px;
          border-radius: 18px;
          background: #f8fafb;
          border: 1px solid rgba(16, 32, 48, 0.06);
        }

        .premium-estimate {
          margin-top: 18px;
        }

        .estimate-row {
          display: flex;
          justify-content: space-between;
          gap: 16px;
          padding: 8px 0;
          color: #5f6b77;
        }

        .estimate-row.total {
          margin-top: 8px;
          padding-top: 14px;
          border-top: 1px solid rgba(16, 32, 48, 0.08);
          color: var(--navy);
          font-weight: 700;
        }

        .booking-footnote {
          margin-top: 14px;
          text-align: center;
          color: #7a8793;
          font-size: 0.92rem;
          line-height: 1.6;
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
          line-height: 1.8;
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

        @media (max-width: 1040px) {
          .hero-editorial-grid,
          .steps,
          .pricing-grid,
          .addon-strip,
          .editorial-case-grid,
          .booking-grid,
          .editorial-stats {
            grid-template-columns: 1fr;
          }

          .editorial-case.large {
            grid-row: auto;
          }

          .nav-links {
            display: none;
          }

          .hero-editorial-grid,
          .booking-grid {
            gap: 40px;
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
            min-height: 74px;
          }

          .hero-actions {
            flex-direction: column;
            align-items: stretch;
          }

          .btn,
          .nav-cta-btn {
            width: 100%;
          }

          .hero-trust {
            gap: 12px 20px;
          }

          .two-col {
            grid-template-columns: 1fr;
          }

          .logo-light {
            width: 180px;
            height: auto;
          }
        }
      `}</style>
    </>
  );
}