"use client";

import { useMemo, useState } from "react";

export default function Page() {
  const [bags, setBags] = useState(1);
  const [service, setService] = useState("29");
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [toast, setToast] = useState("");

  const rate = Number(service);
  const total = useMemo(() => rate * bags + 5, [rate, bags]);

  const showToast = (message: string) => {
    setToast(message);
    window.setTimeout(() => setToast(""), 3200);
  };

  const faqItems = [
    {
      q: "What areas does QarryOn serve?",
      a: "We currently serve Atlanta and destinations within roughly 15 minutes outside the I-285 perimeter. Extended destinations may be supported as a premium add-on.",
    },
    {
      q: "How far in advance should I book?",
      a: "For the smoothest experience, book 12–24 hours in advance. Select service tiers also support shorter notice and same-day support.",
    },
    {
      q: "What types of deliveries do you support?",
      a: "Our current MVP supports airport to Airbnb or hotel delivery, and airport to a customer's live location. Future versions can support van retrieval and locker-based pickup.",
    },
    {
      q: "How do updates work after I book?",
      a: "Customers receive confirmation, route progress, and delivery completion updates so the experience feels modern, transparent, and trustworthy.",
    },
  ];

  return (
    <>
      <div className={`mobile-menu ${mobileOpen ? "open" : ""}`}>
        <button className="mobile-close" onClick={() => setMobileOpen(false)}>
          ✕
        </button>
        <a href="#how" onClick={() => setMobileOpen(false)}>How It Works</a>
        <a href="#pricing" onClick={() => setMobileOpen(false)}>Pricing</a>
        <a href="#usecases" onClick={() => setMobileOpen(false)}>Use Cases</a>
        <a href="#faq" onClick={() => setMobileOpen(false)}>FAQ</a>
        <a href="#booking" className="btn-p" onClick={() => setMobileOpen(false)} style={{ marginTop: "1rem" }}>
          Schedule Pickup
        </a>
      </div>

      <nav>
        <a className="logo" href="#hero">
          <div className="logo-icon">
            <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="1" y="5" width="16" height="14" rx="2.5" stroke="white" strokeWidth="1.5" fill="none" />
              <path d="M6 5V3.5C6 2.67 6.67 2 7.5 2h3C11.33 2 12 2.67 12 3.5V5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
              <circle cx="9" cy="12" r="2.5" stroke="white" strokeWidth="1.5" fill="none" />
            </svg>
          </div>
          <span className="logo-word">Qarry<span>On</span></span>
        </a>
        <ul className="nav-links">
          <li><a href="#how">How It Works</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#usecases">Use Cases</a></li>
          <li><a href="#faq">FAQ</a></li>
        </ul>
        <a href="#booking" className="nav-cta">Schedule Pickup</a>
        <button className="hamburger" onClick={() => setMobileOpen(true)}>
          <span></span><span></span><span></span>
        </button>
      </nav>

      <section id="hero">
        <div className="hero-geo"><div className="hero-grid-lines"></div></div>
        <div className="hero-layout">
          <div>
            <div className="hero-tag">Now Serving Atlanta, GA</div>
            <h1>Move<span className="teal">freely.</span></h1>
            <p className="hero-sub">Seamless luggage pickup and delivery across Atlanta. We handle your bags so you can travel without the weight.</p>
            <div className="hero-actions">
              <a href="#booking" className="btn-p">Schedule Pickup</a>
              <a href="#how" className="btn-o">How It Works</a>
            </div>
            <div className="hero-stats">
              <div><span className="stat-v">4hr</span><span className="stat-l">Express delivery</span></div>
              <div><span className="stat-v">ATL</span><span className="stat-l">Atlanta-based</span></div>
              <div><span className="stat-v">$100K</span><span className="stat-l">Max coverage</span></div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="float-card tl">
              <div className="fc-lbl">Pickup confirmed</div>
              <div className="fc-val fc-t">Hartsfield-Jackson ✓</div>
            </div>
            <div className="phone-frame">
              <div className="phone-top"><div className="phone-pill"></div></div>
              <div className="phone-body">
                <div className="ph-section-lbl">Active Delivery</div>
                <div className="ph-cards">
                  <div className="ph-card"><span className="ph-card-num">2</span><span className="ph-card-lbl">Bags</span></div>
                  <div className="ph-card"><span className="ph-card-num" style={{ color: "var(--teal)" }}>65%</span><span className="ph-card-lbl">En Route</span></div>
                </div>
                <div className="ph-track">
                  <div className="ph-track-lbl">Live Route</div>
                  <div className="ph-route">
                    <div className="ph-dot-s"></div>
                    <span className="ph-city">ATL Airport</span>
                    <div className="ph-line"></div>
                    <span className="ph-city">Midtown Hotel</span>
                    <div className="ph-dot-e"></div>
                  </div>
                  <div className="ph-prog-track"><div className="ph-prog-fill"></div></div>
                  <div className="ph-eta"><div className="ph-pulse"></div><span>ETA 3:40 PM · On time</span></div>
                </div>
                <button className="ph-cta-btn">TRACK MY BAGS</button>
              </div>
            </div>
            <div className="float-card br">
              <div className="fc-lbl">Delivered</div>
              <div className="fc-val">The W Atlanta <span className="fc-t">✓</span></div>
            </div>
          </div>
        </div>
      </section>

      <section id="how">
        <div className="si">
          <span className="stag">The Process</span>
          <h2 style={{ color: "#fff" }}>Three steps to <span style={{ color: "var(--teal)" }}>luggage-free</span> travel</h2>
          <p className="ssub" style={{ color: "var(--muted-light)" }}>From your front door to your destination — handled end to end.</p>
          <div className="steps">
            <div className="step-card">
              <span className="step-num">01</span>
              <div className="step-icon">✦</div>
              <h3>Book pickup</h3>
              <p>Choose your service tier, set pickup and destination details, and confirm your preferred timing window.</p>
            </div>
            <div className="step-card">
              <span className="step-num">02</span>
              <div className="step-icon">➜</div>
              <h3>We handle the transfer</h3>
              <p>QarryOn receives, secures, and transports your bags while you move through Atlanta without the drag.</p>
            </div>
            <div className="step-card">
              <span className="step-num">03</span>
              <div className="step-icon">✓</div>
              <h3>Delivered where you need it</h3>
              <p>Your luggage arrives at your Airbnb, hotel, event, or live destination with updates along the way.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing">
        <div className="si">
          <span className="stag">Pricing</span>
          <h2>Simple packages. <span style={{ color: "var(--teal)" }}>Premium convenience.</span></h2>
          <p className="ssub">Designed to look elevated now and scale into a larger luggage logistics platform later.</p>
          <div className="price-grid">
            <div className="pc">
              <div className="p-icon">✦</div>
              <div className="p-tier">Qarry Lite</div>
              <div className="p-name">Lite</div>
              <div className="p-amt"><sup>$</sup>29</div>
              <div className="p-per">per bag · essential</div>
              <ul className="p-feats">
                <li><span className="cy">✓</span>Airport transfers</li>
                <li><span className="cy">✓</span>Core Atlanta delivery</li>
                <li><span className="cy">✓</span>Live confirmation</li>
                <li><span className="cn">✕</span>Same-day delivery</li>
                <li><span className="cn">✕</span>Priority handling</li>
                <li><span className="cn">✕</span>White glove handling</li>
              </ul>
              <a href="#booking" className="btn-pr btn-pr-o">Get Started</a>
            </div>

            <div className="pc feat">
              <div className="feat-badge">Most Popular</div>
              <div className="p-icon">◆</div>
              <div className="p-tier">Qarry Plus</div>
              <div className="p-name">Plus</div>
              <div className="p-amt"><sup>$</sup>49</div>
              <div className="p-per">per bag · premium</div>
              <ul className="p-feats">
                <li><span className="cy">✓</span>Airport transfers</li>
                <li><span className="cy">✓</span>$100,000 item coverage</li>
                <li><span className="cy">✓</span>Real-time tracking</li>
                <li><span className="cy">✓</span>Book 2 hours before</li>
                <li><span className="cy">✓</span>Same-day delivery (4hr)</li>
                <li><span className="cn">✕</span>White glove handling</li>
              </ul>
              <a href="#booking" className="btn-pr btn-pr-f">Get Started</a>
            </div>

            <div className="pc">
              <div className="p-icon">⬢</div>
              <div className="p-tier">Qarry Elite</div>
              <div className="p-name">Elite</div>
              <div className="p-amt"><sup>$</sup>79</div>
              <div className="p-per">per bag · white glove</div>
              <ul className="p-feats">
                <li><span className="cy">✓</span>Airport transfers</li>
                <li><span className="cy">✓</span>$100,000 item coverage</li>
                <li><span className="cy">✓</span>Real-time tracking</li>
                <li><span className="cy">✓</span>Book 30 min before</li>
                <li><span className="cy">✓</span>Same-day delivery (4hr)</li>
                <li><span className="cy">✓</span>White glove + signature</li>
              </ul>
              <a href="#booking" className="btn-pr btn-pr-o">Get Started</a>
            </div>
          </div>
        </div>
      </section>

      <section id="usecases">
        <div className="si">
          <span className="stag">Who We Serve</span>
          <h2 style={{ color: "#fff" }}>Built for every <span style={{ color: "var(--teal)" }}>Atlanta</span> traveler</h2>
          <p className="ssub" style={{ color: "var(--muted-light)" }}>Whether you're landing at Hartsfield or checking into a Buckhead Airbnb — QarryOn has you covered.</p>
          <div className="cases">
            <div className="case"><div className="case-icon">✈</div><div><h3>Airport Arrivals</h3><p>Skip baggage claim. We deliver your bags directly to your hotel while you grab a rideshare.</p></div></div>
            <div className="case"><div className="case-icon">⌂</div><div><h3>Airbnb Check-In Gaps</h3><p>Early arrival, late check-in? We hold and deliver your bags when you're ready. No more waiting in lobbies.</p></div></div>
            <div className="case"><div className="case-icon">▣</div><div><h3>Events & Conferences</h3><p>Attending a wedding, convention, or corporate event? Arrive light. We handle your bags before and after.</p></div></div>
            <div className="case"><div className="case-icon">◫</div><div><h3>Frequent Travelers</h3><p>Set up recurring pickups, save your addresses, and move through Atlanta on your terms.</p></div></div>
          </div>
        </div>
      </section>

      <section id="trust">
        <div className="si">
          <span className="stag">Why QarryOn</span>
          <h2>Built on <span style={{ color: "var(--teal)" }}>trust</span></h2>
          <p className="ssub">The original Claude draft positions the site around premium motion, live route visuals, pricing tiers, use cases, booking, FAQ, and footer support. This React version preserves that structure while making it usable in Next.js. </p>
          <div className="trust-grid">
            <div className="tc"><div className="tc-icon">✓</div><h3>Secure handling</h3><p>Clear transfer logic, premium visuals, and operational transparency help the brand feel credible from the first visit.</p></div>
            <div className="tc"><div className="tc-icon">⌁</div><h3>Live-feel updates</h3><p>The site signals a tech-enabled service with route visuals, delivery states, and a modern customer journey.</p></div>
            <div className="tc"><div className="tc-icon">◆</div><h3>Scalable design</h3><p>Strong enough for launch now, while still flexible enough to evolve into a larger logistics and app product later.</p></div>
          </div>
        </div>
      </section>

      <section id="booking">
        <div className="si book-layout">
          <div>
            <span className="stag">Booking</span>
            <h2 style={{ color: "#fff" }}>Start with a clean MVP booking experience.</h2>
            <p className="ssub" style={{ color: "var(--muted-light)" }}>Use this section now, then wire it to Stripe, Supabase, and Twilio later without redesigning the site.</p>
            <div className="benefits">
              <div className="ben"><div className="ben-icon">⌁</div><div><h4>Traveler-first flow</h4><p>Airport to Airbnb, airport to live location, and future retrieval models can all grow from this base.</p></div></div>
              <div className="ben"><div className="ben-icon">✓</div><div><h4>Pricing logic built in</h4><p>Bag count and tier selection update a live estimate, which can later connect to checkout and ops.</p></div></div>
              <div className="ben"><div className="ben-icon">↗</div><div><h4>Ready to scale</h4><p>This section can evolve into a real booking backend without throwing away the UI work.</p></div></div>
            </div>
          </div>

          <div className="book-form">
            <div className="form-ttl">Schedule a pickup</div>
            <div className="fr">
              <div className="fg">
                <label>Pickup</label>
                <input placeholder="ATL Airport, Hotel, Airbnb..." />
              </div>
              <div className="fg">
                <label>Drop-off</label>
                <input placeholder="Midtown, Buckhead, Downtown..." />
              </div>
            </div>
            <div className="fr">
              <div className="fg">
                <label>Date</label>
                <input type="date" />
              </div>
              <div className="fg">
                <label>Service</label>
                <select id="svc" value={service} onChange={(e) => setService(e.target.value)}>
                  <option value="29">Qarry Lite — $29</option>
                  <option value="49">Qarry Plus — $49</option>
                  <option value="79">Qarry Elite — $79</option>
                </select>
              </div>
            </div>
            <div className="fg">
              <label>Bags</label>
              <div className="bag-ctr">
                <button type="button" className="bag-btn" onClick={() => setBags((b) => Math.max(1, b - 1))}>−</button>
                <div className="bag-n" id="bn">{bags}</div>
                <button type="button" className="bag-btn" onClick={() => setBags((b) => Math.min(20, b + 1))}>+</button>
              </div>
            </div>
            <div className="fg">
              <label>Notes</label>
              <textarea rows={4} placeholder="Flight details, special handling, concierge notes..."></textarea>
            </div>

            <div className="price-sum">
              <div className="pr"><span>Service rate</span><span id="pr1">${rate}/bag</span></div>
              <div className="pr"><span>Bag count</span><span id="pr2">× {bags}</span></div>
              <div className="pr"><span>Booking fee</span><span>$5</span></div>
              <div className="pr tot"><span>Estimated total</span><span id="pr3">${total.toFixed(2)}</span></div>
            </div>

            <button className="btn-book" onClick={() => showToast("Booking request started. Next step: connect Stripe or form handling.")}>Continue</button>
          </div>
        </div>
      </section>

      <section id="faq">
        <div className="si faq-layout">
          <div>
            <span className="stag">FAQ</span>
            <h2>Questions before booking.</h2>
            <p className="ssub">This section keeps the polished Claude structure while moving interaction logic into React state.</p>
          </div>
          <div className="faq-list">
            {faqItems.map((item, i) => (
              <div key={item.q} className={`faq-item ${openFaq === i ? "open" : ""}`}>
                <button className="faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span>{item.q}</span>
                  <span className="faq-arr">+</span>
                </button>
                {openFaq === i && <div className="faq-a">{item.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="cta">
        <div className="cta-inner">
          <h2>Ready to move freely?</h2>
          <p>Launch with a premium front-end now, then wire in booking, payments, and SMS without redesigning your brand.</p>
          <a href="#booking" className="btn-cta">Book With QarryOn</a>
          <div className="cta-note">Built for Atlanta travelers, hosts, hotels, and events.</div>
        </div>
      </section>

      <footer>
        <div className="footer-top">
          <div>
            <a className="logo" href="#hero" style={{ textDecoration: "none" }}>
              <div className="logo-icon">
                <svg width="16" height="18" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="1" y="5" width="16" height="14" rx="2.5" stroke="white" strokeWidth="1.5" fill="none" />
                  <path d="M6 5V3.5C6 2.67 6.67 2 7.5 2h3C11.33 2 12 2.67 12 3.5V5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                  <circle cx="9" cy="12" r="2.5" stroke="white" strokeWidth="1.5" fill="none" />
                </svg>
              </div>
              <span className="logo-word">Qarry<span>On</span></span>
            </a>
            <p className="footer-desc">Luggage delivery for the modern traveler. Move freely through Atlanta — we'll handle the rest.</p>
            <span className="atl-tag">Based in Atlanta, GA</span>
          </div>
          <div className="fl-group"><h5>Service</h5><ul><li><a href="#how">How It Works</a></li><li><a href="#pricing">Qarry Lite</a></li><li><a href="#pricing">Qarry Plus</a></li><li><a href="#pricing">Qarry Elite</a></li></ul></div>
          <div className="fl-group"><h5>Company</h5><ul><li><a href="#">About</a></li><li><a href="#">Careers</a></li><li><a href="#">Press</a></li><li><a href="#">Contact</a></li></ul></div>
          <div className="fl-group"><h5>Legal</h5><ul><li><a href="#">Privacy Policy</a></li><li><a href="#">Terms of Service</a></li><li><a href="#">Insurance</a></li></ul></div>
        </div>
        <div className="footer-bot">
          <p>© 2026 QarryOn, Inc. All rights reserved.</p>
          <p style={{ fontSize: ".82rem", color: "rgba(255,255,255,.22)" }}>hello@myqarryon.com · 1-800-QARRYON</p>
        </div>
      </footer>

      <div className={`toast ${toast ? "show" : ""}`}>{toast}</div>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Inter:wght@300;400;500&display=swap');
        *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
        :root{
          --navy:#0D1B2A;--navy-mid:#122236;--navy-light:#1a2f45;
          --teal:#2EC4B6;--teal-dark:#23a99d;--teal-glow:rgba(46,196,182,0.12);
          --coral:#FF6B6B;--gray:#E5E5E5;--offwhite:#F8F9FA;
          --muted:#8899aa;--muted-light:#b0c0cc;--white:#ffffff;
          --heading:'Montserrat',sans-serif;--body:'Inter',sans-serif;
          --r:8px;--rl:16px;
        }
        html{scroll-behavior:smooth}
        body{font-family:var(--body);background:var(--offwhite);color:var(--navy);line-height:1.6;overflow-x:hidden}
        nav{position:fixed;top:0;left:0;right:0;z-index:100;display:flex;align-items:center;justify-content:space-between;padding:0 5%;height:72px;background:rgba(13,27,42,0.97);backdrop-filter:blur(20px);border-bottom:1px solid rgba(46,196,182,0.1)}
        .logo{display:flex;align-items:center;gap:10px;text-decoration:none}.logo-icon{width:34px;height:34px;border-radius:8px;background:var(--teal);display:flex;align-items:center;justify-content:center;flex-shrink:0}.logo-word{font-family:var(--heading);font-size:1.2rem;font-weight:700;color:#fff;letter-spacing:-.01em}.logo-word span{color:var(--teal)}
        .nav-links{display:flex;gap:2.5rem;list-style:none}.nav-links a{font-size:.85rem;font-weight:500;color:rgba(255,255,255,.55);text-decoration:none;letter-spacing:.02em;transition:color .2s}.nav-links a:hover{color:var(--teal)}
        .nav-cta{background:var(--teal);color:var(--navy);border:none;border-radius:var(--r);padding:.6rem 1.4rem;font-family:var(--heading);font-size:.85rem;font-weight:700;cursor:pointer;text-decoration:none;transition:all .2s;letter-spacing:.02em}.nav-cta:hover{background:var(--teal-dark);transform:translateY(-1px)}
        .hamburger{display:none;flex-direction:column;gap:5px;cursor:pointer;background:none;border:none;padding:4px}.hamburger span{display:block;width:22px;height:1.5px;background:#fff;transition:.3s}
        .mobile-menu{display:none;position:fixed;top:0;left:0;right:0;bottom:0;z-index:99;background:var(--navy);flex-direction:column;align-items:center;justify-content:center;gap:2rem}.mobile-menu.open{display:flex}.mobile-menu a{font-family:var(--heading);font-size:1.4rem;font-weight:600;color:#fff;text-decoration:none;transition:color .2s}.mobile-menu a:hover{color:var(--teal)}.mobile-close{position:absolute;top:1.5rem;right:5%;font-size:1.5rem;cursor:pointer;background:none;border:none;color:#fff}
        #hero{min-height:100vh;background:var(--navy);display:flex;align-items:center;position:relative;overflow:hidden;padding:9rem 5% 5rem}.hero-geo{position:absolute;inset:0;pointer-events:none;overflow:hidden}.hero-geo::before{content:'';position:absolute;top:-200px;right:-200px;width:700px;height:700px;border-radius:50%;background:radial-gradient(circle,rgba(46,196,182,.07) 0%,transparent 70%)}.hero-grid-lines{position:absolute;inset:0;background-image:linear-gradient(rgba(46,196,182,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(46,196,182,.03) 1px,transparent 1px);background-size:60px 60px}.hero-layout{display:grid;grid-template-columns:1fr 1fr;gap:4rem;align-items:center;width:100%;max-width:1200px;margin:0 auto;position:relative;z-index:1}
        .hero-tag{display:inline-flex;align-items:center;gap:8px;font-size:.72rem;font-weight:600;letter-spacing:.12em;text-transform:uppercase;color:var(--teal);border:1px solid rgba(46,196,182,.25);border-radius:20px;padding:6px 14px;margin-bottom:1.5rem;width:fit-content}.hero-tag::before{content:'';display:block;width:6px;height:6px;border-radius:50%;background:var(--teal);animation:blink 1.8s infinite}
        @keyframes blink{0%,100%{opacity:1}50%{opacity:.3}}
        h1{font-family:var(--heading);font-size:clamp(3rem,5.5vw,5.5rem);font-weight:700;line-height:1;letter-spacing:-.03em;color:#fff;margin-bottom:1.5rem} h1 .teal{color:var(--teal);display:block}
        .hero-sub{font-size:1.05rem;font-weight:300;color:rgba(255,255,255,.5);line-height:1.75;margin-bottom:2.5rem;max-width:440px}.hero-actions{display:flex;align-items:center;gap:1rem;flex-wrap:wrap}
        .btn-p{background:var(--teal);color:var(--navy);border:2px solid var(--teal);border-radius:var(--r);padding:.9rem 2rem;font-family:var(--heading);font-size:.9rem;font-weight:700;cursor:pointer;text-decoration:none;transition:all .2s;letter-spacing:.03em}.btn-p:hover{background:var(--teal-dark);border-color:var(--teal-dark);transform:translateY(-2px);box-shadow:0 8px 24px rgba(46,196,182,.3)}
        .btn-o{background:transparent;color:#fff;border:2px solid rgba(255,255,255,.18);border-radius:var(--r);padding:.9rem 2rem;font-family:var(--heading);font-size:.9rem;font-weight:600;cursor:pointer;text-decoration:none;transition:all .2s}.btn-o:hover{border-color:rgba(255,255,255,.5)}
        .hero-stats{display:flex;gap:2.5rem;margin-top:3rem;padding-top:2rem;border-top:1px solid rgba(255,255,255,.07)}.stat-v{font-family:var(--heading);font-size:1.8rem;font-weight:700;color:#fff;display:block;letter-spacing:-.02em}.stat-l{font-size:.72rem;color:var(--muted-light);letter-spacing:.06em;text-transform:uppercase}
        .hero-visual{display:flex;align-items:center;justify-content:center;position:relative;height:520px}.phone-frame{width:260px;background:var(--navy-mid);border-radius:36px;border:1.5px solid rgba(46,196,182,.2);box-shadow:0 40px 80px rgba(0,0,0,.5),0 0 0 1px rgba(46,196,182,.05);position:relative;z-index:2;overflow:hidden}.phone-top{height:36px;background:var(--navy);display:flex;align-items:flex-end;justify-content:center;padding-bottom:6px}.phone-pill{width:80px;height:18px;background:#0a1520;border-radius:12px}.phone-body{padding:16px}.ph-section-lbl{font-size:9px;letter-spacing:.1em;text-transform:uppercase;color:var(--muted);margin-bottom:10px;font-family:var(--heading)}.ph-cards{display:flex;gap:8px;margin-bottom:12px}.ph-card{flex:1;background:var(--navy-light);border-radius:10px;padding:10px;text-align:center}.ph-card-num{font-family:var(--heading);font-size:18px;font-weight:700;color:#fff;display:block}.ph-card-lbl{font-size:9px;color:var(--muted);text-transform:uppercase;letter-spacing:.06em}.ph-track{background:var(--navy-light);border-radius:10px;padding:12px;margin-bottom:10px}.ph-track-lbl{font-size:9px;letter-spacing:.1em;text-transform:uppercase;color:var(--muted);margin-bottom:8px;font-family:var(--heading)}.ph-route{display:flex;align-items:center;gap:6px;margin-bottom:8px}.ph-dot-s,.ph-dot-e{width:8px;height:8px;border-radius:50%;flex-shrink:0}.ph-dot-s{background:var(--teal)}.ph-dot-e{background:var(--coral)}.ph-line{flex:1;height:1px;background:rgba(255,255,255,.08)}.ph-city{font-size:9px;color:#fff;font-weight:600}.ph-prog-track{height:3px;background:rgba(255,255,255,.08);border-radius:2px;margin-bottom:6px}.ph-prog-fill{height:100%;width:65%;background:var(--teal);border-radius:2px}.ph-eta{display:flex;align-items:center;gap:6px;font-size:9px;color:var(--teal)}.ph-pulse{width:6px;height:6px;border-radius:50%;background:var(--teal);animation:blink 1.8s infinite;flex-shrink:0}.ph-cta-btn{width:100%;padding:10px;background:var(--teal);color:var(--navy);border:none;border-radius:8px;font-family:var(--heading);font-size:10px;font-weight:700;letter-spacing:.05em;cursor:default}
        .float-card{position:absolute;background:rgba(18,34,54,.95);border:1px solid rgba(46,196,182,.2);border-radius:12px;padding:12px 16px;backdrop-filter:blur(20px);box-shadow:0 8px 32px rgba(0,0,0,.3);z-index:3}.float-card.tl{top:40px;left:-20px}.float-card.br{bottom:60px;right:-20px}.fc-lbl{font-size:9px;text-transform:uppercase;letter-spacing:.1em;color:var(--muted);margin-bottom:3px;font-family:var(--heading)}.fc-val{font-size:14px;font-weight:700;color:#fff;font-family:var(--heading)}.fc-t{color:var(--teal)}
        section{padding:6rem 5%}.si{max-width:1200px;margin:0 auto}.stag{display:inline-block;font-size:.72rem;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:var(--teal);margin-bottom:1rem;font-family:var(--heading)}h2{font-family:var(--heading);font-size:clamp(1.8rem,3.5vw,2.8rem);font-weight:700;line-height:1.1;letter-spacing:-.02em;margin-bottom:1rem}.ssub{font-size:1.05rem;color:var(--muted);line-height:1.7;max-width:520px;margin-bottom:3rem}
        #how{background:var(--navy);position:relative}#how::before{content:'';position:absolute;top:-200px;right:-200px;width:500px;height:500px;border-radius:50%;background:radial-gradient(circle,rgba(46,196,182,.05) 0%,transparent 70%)}.steps{display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem}.step-card{background:var(--navy-light);border:1px solid rgba(46,196,182,.1);border-radius:var(--rl);padding:2.5rem 2rem;position:relative;overflow:hidden;transition:border-color .2s,transform .2s}.step-card:hover{border-color:rgba(46,196,182,.3);transform:translateY(-4px)}.step-card::after{content:'';position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,var(--teal),transparent)}.step-num{font-family:var(--heading);font-size:3.5rem;font-weight:700;color:rgba(46,196,182,.1);line-height:1;margin-bottom:1.5rem;display:block}.step-icon{width:48px;height:48px;border-radius:12px;background:var(--teal-glow);border:1px solid rgba(46,196,182,.2);display:flex;align-items:center;justify-content:center;margin-bottom:1.25rem;color:var(--teal)}.step-card h3{font-family:var(--heading);font-size:1.05rem;font-weight:600;color:#fff;margin-bottom:.6rem}.step-card p{font-size:.92rem;color:var(--muted-light);line-height:1.65}
        #pricing{background:var(--offwhite)}.price-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem}.pc{background:#fff;border:1px solid var(--gray);border-radius:var(--rl);padding:2.5rem 2rem;position:relative;transition:all .2s}.pc:hover{border-color:var(--teal);box-shadow:0 12px 40px rgba(46,196,182,.1)}.pc.feat{background:var(--navy);border-color:var(--teal);box-shadow:0 20px 60px rgba(13,27,42,.15)}.feat-badge{position:absolute;top:-14px;left:50%;transform:translateX(-50%);background:var(--teal);color:var(--navy);font-family:var(--heading);font-size:.68rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;padding:5px 16px;border-radius:20px;white-space:nowrap}.p-tier{font-size:.7rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--muted);margin-bottom:.75rem;font-family:var(--heading)}.pc.feat .p-tier{color:var(--teal)}.p-icon{width:44px;height:44px;border-radius:10px;background:rgba(46,196,182,.1);border:1px solid rgba(46,196,182,.2);display:flex;align-items:center;justify-content:center;margin-bottom:1.25rem}.p-name{font-family:var(--heading);font-size:1.3rem;font-weight:700;color:var(--navy);margin-bottom:.4rem}.pc.feat .p-name{color:#fff}.p-amt{font-family:var(--heading);font-size:2.6rem;font-weight:700;color:var(--navy);line-height:1;margin-bottom:.2rem}.pc.feat .p-amt{color:#fff}.p-amt sup{font-size:1.1rem;vertical-align:super;font-weight:500}.p-per{font-size:.85rem;color:var(--muted);margin-bottom:1.5rem}.pc.feat .p-per{color:rgba(255,255,255,.4)}.p-feats{list-style:none;display:flex;flex-direction:column;gap:.75rem;margin-bottom:2rem}.p-feats li{font-size:.9rem;display:flex;align-items:flex-start;gap:10px;color:var(--navy)}.pc.feat .p-feats li{color:rgba(255,255,255,.8)}.cy{color:var(--teal);flex-shrink:0;font-size:13px;margin-top:2px}.cn{color:#ccc;flex-shrink:0;font-size:13px;margin-top:2px}.pc.feat .cn{color:rgba(255,255,255,.15)}.btn-pr{display:block;width:100%;padding:.85rem;border-radius:var(--r);font-family:var(--heading);font-size:.88rem;font-weight:700;text-align:center;cursor:pointer;text-decoration:none;transition:all .2s;border:2px solid var(--teal);letter-spacing:.03em}.btn-pr-o{background:transparent;color:var(--teal)}.btn-pr-o:hover{background:var(--teal);color:var(--navy)}.btn-pr-f{background:var(--teal);color:var(--navy)}.btn-pr-f:hover{background:var(--teal-dark)}
        #usecases{background:var(--navy)}.cases{display:grid;grid-template-columns:repeat(2,1fr);gap:1.5rem}.case{background:var(--navy-light);border:1px solid rgba(46,196,182,.1);border-radius:var(--rl);padding:2rem;display:flex;gap:1.25rem;align-items:flex-start;transition:border-color .2s}.case:hover{border-color:rgba(46,196,182,.3)}.case-icon{width:48px;height:48px;border-radius:12px;background:var(--teal-glow);border:1px solid rgba(46,196,182,.2);display:flex;align-items:center;justify-content:center;flex-shrink:0;color:var(--teal)}.case h3{font-family:var(--heading);font-size:1rem;font-weight:600;color:#fff;margin-bottom:.4rem}.case p{font-size:.9rem;color:var(--muted-light);line-height:1.6}
        #trust{background:var(--offwhite)}.trust-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem}.tc{background:#fff;border:1px solid var(--gray);border-radius:var(--rl);padding:2rem;text-align:center;transition:all .2s}.tc:hover{border-color:var(--teal);transform:translateY(-4px);box-shadow:0 12px 32px rgba(46,196,182,.1)}.tc-icon{width:56px;height:56px;border-radius:50%;background:rgba(46,196,182,.1);display:flex;align-items:center;justify-content:center;margin:0 auto 1.25rem;color:var(--teal)}.tc h3{font-family:var(--heading);font-size:1.05rem;font-weight:600;color:var(--navy);margin-bottom:.5rem}.tc p{font-size:.9rem;color:var(--muted);line-height:1.65}
        #booking{background:var(--navy);position:relative;overflow:hidden}#booking::before{content:'';position:absolute;top:-300px;left:-200px;width:700px;height:700px;border-radius:50%;background:radial-gradient(circle,rgba(46,196,182,.04) 0%,transparent 70%)}.book-layout{display:grid;grid-template-columns:1fr 1.1fr;gap:5rem;align-items:start;position:relative;z-index:1}.book-form{background:var(--navy-light);border:1px solid rgba(46,196,182,.12);border-radius:var(--rl);padding:2.5rem}.form-ttl{font-family:var(--heading);font-size:1rem;font-weight:600;color:#fff;margin-bottom:1.75rem;display:flex;align-items:center;gap:10px}.form-ttl::before{content:'';width:4px;height:18px;background:var(--teal);border-radius:2px}.fg{display:flex;flex-direction:column;gap:6px;margin-bottom:1rem}.fr{display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-bottom:1rem}.fr .fg{margin-bottom:0}label{font-size:.7rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--muted);font-family:var(--heading)}input,select,textarea{background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);border-radius:var(--r);padding:.75rem 1rem;font-family:var(--body);font-size:.95rem;color:#fff;transition:border-color .2s;width:100%;-webkit-appearance:none}input::placeholder,textarea::placeholder{color:rgba(255,255,255,.22)}input:focus,select:focus,textarea:focus{outline:none;border-color:var(--teal);background:rgba(46,196,182,.05)}select option{background:var(--navy);color:#fff}.bag-ctr{display:flex;align-items:center;gap:12px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);border-radius:var(--r);padding:.6rem 1rem}.bag-btn{width:28px;height:28px;border-radius:50%;border:1px solid rgba(46,196,182,.3);background:rgba(46,196,182,.1);color:var(--teal);font-size:1.1rem;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all .15s;font-family:var(--body)}.bag-btn:hover{background:var(--teal);color:var(--navy)}.bag-n{font-size:1rem;font-weight:600;color:#fff;flex:1;text-align:center;font-family:var(--heading)}.price-sum{background:rgba(46,196,182,.05);border:1px solid rgba(46,196,182,.15);border-radius:var(--r);padding:1.25rem;margin:1.5rem 0}.pr{display:flex;justify-content:space-between;font-size:.9rem;color:rgba(255,255,255,.45);padding:4px 0}.pr.tot{color:#fff;font-weight:600;border-top:1px solid rgba(46,196,182,.2);margin-top:8px;padding-top:12px;font-size:1rem}.pr.tot span:last-child{color:var(--teal)}.btn-book{width:100%;padding:1.1rem;background:var(--teal);color:var(--navy);border:none;border-radius:var(--r);font-family:var(--heading);font-size:1rem;font-weight:700;cursor:pointer;transition:all .2s;letter-spacing:.04em}.btn-book:hover{background:var(--teal-dark);box-shadow:0 8px 24px rgba(46,196,182,.3);transform:translateY(-1px)}.benefits{display:flex;flex-direction:column;gap:1.5rem;margin-top:2rem}.ben{display:flex;gap:1rem;align-items:flex-start}.ben-icon{width:40px;height:40px;border-radius:10px;background:var(--teal-glow);border:1px solid rgba(46,196,182,.2);display:flex;align-items:center;justify-content:center;flex-shrink:0;color:var(--teal)}.ben h4{font-family:var(--heading);font-size:.9rem;font-weight:600;color:#fff;margin-bottom:3px}.ben p{font-size:.85rem;color:var(--muted-light);line-height:1.55}
        #faq{background:var(--offwhite)}.faq-layout{display:grid;grid-template-columns:1fr 1.5fr;gap:6rem}.faq-list{display:flex;flex-direction:column}.faq-item{border-bottom:1px solid var(--gray)}.faq-q{width:100%;background:none;border:none;text-align:left;padding:1.25rem 0;font-family:var(--heading);font-size:.93rem;font-weight:600;color:var(--navy);cursor:pointer;display:flex;justify-content:space-between;align-items:center;gap:1rem;transition:color .2s}.faq-q:hover{color:var(--teal)}.faq-arr{font-size:1.2rem;color:var(--muted);transition:transform .2s;flex-shrink:0}.faq-item.open .faq-arr{transform:rotate(45deg);color:var(--teal)}.faq-a{font-size:.9rem;color:var(--muted);line-height:1.7;padding:0 0 1.25rem;display:block}
        #cta{background:var(--teal);padding:6rem 5%;text-align:center;position:relative;overflow:hidden}#cta::before{content:'';position:absolute;top:-200px;left:50%;transform:translateX(-50%);width:600px;height:600px;border-radius:50%;background:rgba(255,255,255,.1)}.cta-inner{position:relative;z-index:1;max-width:680px;margin:0 auto}#cta h2{color:var(--navy);font-size:clamp(2rem,4vw,3rem)}#cta p{color:rgba(13,27,42,.6);font-size:1.05rem;line-height:1.7;margin:1rem auto 2.5rem;max-width:480px}.btn-cta{display:inline-block;background:var(--navy);color:#fff;border-radius:var(--r);padding:1.1rem 3rem;font-family:var(--heading);font-size:1rem;font-weight:700;text-decoration:none;transition:all .2s;letter-spacing:.04em}.btn-cta:hover{background:var(--navy-light);transform:translateY(-2px);box-shadow:0 12px 32px rgba(13,27,42,.3)}.cta-note{margin-top:1.25rem;font-size:.83rem;color:rgba(13,27,42,.45)}
        footer{background:var(--navy);padding:3rem 5% 2rem;border-top:1px solid rgba(46,196,182,.1)}.footer-top{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:2.5rem;flex-wrap:wrap;gap:2rem}.footer-desc{font-size:.88rem;color:var(--muted);line-height:1.6;max-width:260px;margin-top:.5rem}.atl-tag{background:rgba(46,196,182,.1);border:1px solid rgba(46,196,182,.2);border-radius:20px;padding:4px 12px;font-size:.72rem;font-weight:700;color:var(--teal);font-family:var(--heading);letter-spacing:.06em;display:inline-block;margin-top:.85rem}.fl-group h5{font-family:var(--heading);font-size:.7rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--muted);margin-bottom:.85rem}.fl-group ul{list-style:none;display:flex;flex-direction:column;gap:.55rem}.fl-group a{font-size:.88rem;color:rgba(255,255,255,.4);text-decoration:none;transition:color .2s}.fl-group a:hover{color:var(--teal)}.footer-bot{border-top:1px solid rgba(255,255,255,.06);padding-top:1.5rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1rem}.footer-bot p{font-size:.82rem;color:rgba(255,255,255,.22)}
        .toast{position:fixed;bottom:2rem;right:2rem;background:var(--teal);color:var(--navy);padding:.9rem 1.5rem;border-radius:var(--r);font-family:var(--heading);font-size:.9rem;font-weight:700;transform:translateY(80px);opacity:0;transition:all .35s;z-index:999;box-shadow:0 8px 32px rgba(46,196,182,.35)}.toast.show{transform:translateY(0);opacity:1}
        @media(max-width:960px){#hero{padding:7rem 5% 4rem}.hero-layout{grid-template-columns:1fr;gap:3rem}.hero-visual{height:300px}.steps{grid-template-columns:1fr 1fr}.cases{grid-template-columns:1fr}.trust-grid{grid-template-columns:1fr 1fr}.price-grid{grid-template-columns:1fr}.book-layout{grid-template-columns:1fr;gap:3rem}.faq-layout{grid-template-columns:1fr;gap:2rem}.nav-links{display:none}.hamburger{display:flex}.hero-stats{gap:1.5rem}.nav-cta{display:none}}
        @media(max-width:600px){.steps{grid-template-columns:1fr}.trust-grid{grid-template-columns:1fr}.fr{grid-template-columns:1fr}.hero-stats{flex-wrap:wrap;gap:1.5rem 2rem}h1{font-size:2.8rem}.float-card{display:none}.phone-frame{width:100%;max-width:260px}}
      `}</style>
    </>
  );
}
