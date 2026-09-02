import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | QarryOn",
  description:
    "Learn how QarryOn collects, uses, protects, and shares information provided in connection with luggage concierge services.",
};

const sections = [
  {
    id: "information",
    title: "1. Information We Collect",
    content: (
      <>
        <p>
          QarryOn LLC (“QarryOn,” “we,” “us,” or “our”) collects information
          reasonably necessary to review service requests, coordinate luggage
          services, communicate with customers, process transactions, track
          service progress, and maintain appropriate service records.
        </p>

        <p>Depending on your interaction with QarryOn, this may include:</p>

        <ul>
          <li>Your name, email address, and telephone number;</li>
          <li>Pickup and delivery addresses or locations;</li>
          <li>
            Flight, airline, arrival, departure, hotel, accommodation, event,
            or other travel-related information you provide;
          </li>
          <li>
            Luggage quantity, luggage descriptions, service type, timing,
            storage requirements, and special instructions;
          </li>
          <li>
            Communications between you and QarryOn regarding your booking or
            service;
          </li>
          <li>
            Booking, payment, refund, and transaction-related information;
          </li>
          <li>
            Pickup, custody, storage, transit, delivery, and service-status
            information; and
          </li>
          <li>
            Information you voluntarily provide when contacting QarryOn,
            requesting support, reporting an issue, or submitting a claim.
          </li>
        </ul>

        <div className="policy-callout">
          <strong>Our approach</strong>
          <p>
            QarryOn seeks to collect only the information reasonably necessary
            to coordinate, track, fulfill, document, and support the service
            you request.
          </p>
        </div>
      </>
    ),
  },
  {
    id: "use",
    title: "2. How We Use Your Information",
    content: (
      <>
        <p>
          QarryOn uses customer information primarily to provide and support
          luggage concierge services. We may use information to:
        </p>

        <ul>
          <li>Review and respond to service requests;</li>
          <li>Determine service availability and pricing;</li>
          <li>Confirm and manage bookings;</li>
          <li>
            Coordinate luggage pickup, secure holding, transportation, and
            delivery;
          </li>
          <li>
            Communicate arrival, pickup, storage, en route, delivery, and
            service-completion updates;
          </li>
          <li>Coordinate optional tracking services when requested;</li>
          <li>Process payments, refunds, adjustments, and related records;</li>
          <li>Respond to customer questions, concerns, or claims;</li>
          <li>Maintain appropriate operational and transaction records;</li>
          <li>Protect customers, QarryOn, and property from fraud or misuse;</li>
          <li>Comply with applicable legal obligations; and</li>
          <li>Improve the reliability and administration of our services.</li>
        </ul>
      </>
    ),
  },
  {
    id: "no-sale",
    title: "3. Sale of Personal Information and Advertising",
    content: (
      <>
        <p>
          QarryOn does not sell customer personal information.
        </p>

        <p>
          QarryOn also does not use information submitted through a luggage
          service request to create third-party advertising profiles or sell
          that booking information to advertisers.
        </p>

        <div className="policy-callout accent">
          <strong>Your information supports your service — not an advertising profile.</strong>
          <p>
            Information you provide to book QarryOn is used to help us review,
            coordinate, track, fulfill, document, and support your requested
            service, subject to the additional uses described in this Privacy
            Policy.
          </p>
        </div>
      </>
    ),
  },
  {
    id: "providers",
    title: "4. Service Providers and Third-Party Platforms",
    content: (
      <>
        <p>
          QarryOn uses third-party technology and service providers to help
          operate the business and provide customer services.
        </p>

        <p>These providers may include services used for:</p>

        <ul>
          <li>Scheduling and booking;</li>
          <li>Payment processing;</li>
          <li>Website hosting and technical infrastructure;</li>
          <li>Email, text, or other service communications;</li>
          <li>Business records and operational administration; and</li>
          <li>Other functions reasonably necessary to provide the service.</li>
        </ul>

        <p>
          For example, QarryOn currently uses Calendly to facilitate service
          requests and scheduling and Stripe to facilitate payment processing.
          Information submitted through those services may be processed by
          those providers in accordance with their own applicable terms and
          privacy practices.
        </p>

        <p>
          QarryOn does not control every independent use of information made
          by a third-party provider under that provider&apos;s own legal
          obligations or privacy practices.
        </p>
      </>
    ),
  },
  {
    id: "payments",
    title: "5. Payment Information",
    content: (
      <>
        <p>
          Payments may be processed through third-party payment providers such
          as Stripe. When you make a payment, payment and transaction
          information may be provided directly to the payment provider.
        </p>

        <p>
          QarryOn does not intend to directly collect or store your complete
          payment card number through its own website or booking form when
          payment is processed through a third-party payment provider.
        </p>

        <p>
          QarryOn may receive and retain transaction-related information
          necessary for business records, such as payment status, amount,
          transaction date, refunds, and other information associated with
          your booking.
        </p>
      </>
    ),
  },
  {
    id: "location",
    title: "6. Location, Journey Updates, and Tracking",
    content: (
      <>
        <p>
          Providing QarryOn&apos;s service requires location information about
          your luggage and the requested service journey. This may include
          pickup locations, delivery locations, storage locations, route or
          service-status information, and other location details necessary to
          complete your booking.
        </p>

        <p>
          QarryOn may also provide journey updates reflecting stages such as
          arrival, pickup, secure hold, en route, delivery, and service
          completion.
        </p>

        <p>
          If you purchase or receive an optional AirTag tracking service,
          location information associated with that tracking service may be
          used to provide additional visibility into the location of your
          luggage.
        </p>

        <div className="policy-callout">
          <strong>We track the service, not you.</strong>
          <p>
            Location and tracking information associated with a booking is
            intended to coordinate, monitor, and document the luggage service
            you requested. QarryOn does not use its optional luggage-tracking
            service for the purpose of tracking customers personally.
          </p>
        </div>
      </>
    ),
  },
  {
    id: "sharing",
    title: "7. When Information May Be Shared",
    content: (
      <>
        <p>
          QarryOn may disclose information when reasonably necessary to
          provide or administer a requested service. This may include
          disclosure to service providers that perform functions on
          QarryOn&apos;s behalf.
        </p>

        <p>Information may also be disclosed when reasonably necessary to:</p>

        <ul>
          <li>Complete or support a customer-requested service;</li>
          <li>Process a payment, refund, or transaction;</li>
          <li>Investigate suspected fraud, theft, misuse, or safety concerns;</li>
          <li>Protect the rights, safety, or property of customers or QarryOn;</li>
          <li>Respond to a customer claim or dispute;</li>
          <li>
            Comply with a subpoena, court order, legal process, or applicable
            law; or
          </li>
          <li>
            Respond to a lawful request from law enforcement or another
            government authority.
          </li>
        </ul>

        <p>
          QarryOn may also transfer information as part of a merger,
          acquisition, financing, reorganization, sale of assets, or similar
          business transaction, subject to applicable law.
        </p>
      </>
    ),
  },
  {
    id: "retention",
    title: "8. How Long We Keep Information",
    content: (
      <>
        <p>
          QarryOn retains personal information for as long as reasonably
          necessary for the purposes described in this Privacy Policy.
        </p>

        <p>
          Retention periods may vary depending on the type of information and
          may take into account:
        </p>

        <ul>
          <li>Whether a booking or customer relationship remains active;</li>
          <li>Operational and customer-service needs;</li>
          <li>Transaction, tax, accounting, and business-record requirements;</li>
          <li>Potential or existing claims and disputes;</li>
          <li>Fraud prevention and security considerations; and</li>
          <li>Applicable legal or regulatory obligations.</li>
        </ul>

        <p>
          Information processed by third-party providers may be retained
          according to those providers&apos; own retention policies and legal
          obligations.
        </p>
      </>
    ),
  },
  {
    id: "security",
    title: "9. Information Security",
    content: (
      <>
        <p>
          QarryOn takes reasonable measures designed to protect personal
          information from unauthorized access, loss, misuse, or disclosure.
          We also rely on established third-party service providers for
          functions such as scheduling, payment processing, and website
          infrastructure.
        </p>

        <p>
          However, no website, electronic transmission, storage system, or
          online service can be guaranteed to be completely secure. QarryOn
          therefore cannot guarantee absolute security of information.
        </p>
      </>
    ),
  },
  {
    id: "choices",
    title: "10. Your Information and Choices",
    content: (
      <>
        <p>
          You may contact QarryOn if you would like to ask a question about
          personal information you have provided to us, request that inaccurate
          information be corrected, or request deletion of information.
        </p>

        <p>
          We will consider and respond to requests as appropriate and as
          required by applicable law. QarryOn may need to retain certain
          information where reasonably necessary for transactions, accounting,
          fraud prevention, dispute resolution, legal compliance, or other
          legitimate business purposes.
        </p>

        <p>
          We may take reasonable steps to verify the identity of a person
          making a privacy-related request before providing, correcting, or
          deleting information.
        </p>
      </>
    ),
  },
  {
    id: "communications",
    title: "11. Service Communications",
    content: (
      <>
        <p>
          When you request or book QarryOn service, we may use the contact
          information you provide to communicate with you about that service.
          Communications may include booking confirmation, pricing or payment
          information, arrival coordination, pickup confirmation, journey
          updates, delivery coordination, service completion, schedule
          changes, customer support, or safety-related information.
        </p>

        <p>
          These operational communications are part of providing the service
          you requested and are distinct from optional promotional or
          marketing communications.
        </p>
      </>
    ),
  },
  {
    id: "children",
    title: "12. Children’s Privacy",
    content: (
      <>
        <p>
          QarryOn&apos;s services are not directed to children under 13, and
          QarryOn does not knowingly seek to collect personal information
          directly from children under 13 through its booking process.
        </p>

        <p>
          If you believe a child has provided personal information to QarryOn
          without appropriate authorization, please contact us so we can
          review the matter.
        </p>
      </>
    ),
  },
  {
    id: "links",
    title: "13. Third-Party Websites and Services",
    content: (
      <>
        <p>
          QarryOn&apos;s website or communications may contain links to
          third-party websites or services. This Privacy Policy does not govern
          the independent privacy practices of third parties.
        </p>

        <p>
          We encourage customers to review the privacy information provided by
          third-party services they choose to use.
        </p>
      </>
    ),
  },
  {
    id: "legal",
    title: "14. Legal Requirements and Rights",
    content: (
      <>
        <p>
          Privacy rights and obligations may vary depending on where a
          customer resides and which laws apply. Nothing in this Privacy Policy
          is intended to limit rights that cannot lawfully be limited.
        </p>

        <p>
          QarryOn will process privacy requests and personal information in
          accordance with applicable law.
        </p>
      </>
    ),
  },
  {
    id: "changes",
    title: "15. Changes to This Privacy Policy",
    content: (
      <>
        <p>
          QarryOn may update this Privacy Policy from time to time to reflect
          changes in our services, technology, business practices, service
          providers, or legal requirements.
        </p>

        <p>
          When we update this Privacy Policy, we may revise the effective date
          shown on this page. Material changes may also be communicated through
          other reasonable means when appropriate.
        </p>
      </>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <main className="privacy-page">
      <header className="legal-header">
        <div className="legal-header-inner">
          <Link href="/" className="legal-logo" aria-label="QarryOn home">
            <Image
              src="/Footer-logo-dark2.png"
              alt="QarryOn"
              width={290}
              height={96}
              priority
            />
          </Link>

          <Link href="/" className="back-link">
            Back to QarryOn <span aria-hidden="true">→</span>
          </Link>
        </div>
      </header>

      <section className="privacy-hero">
        <div className="hero-glow hero-glow-one" />
        <div className="hero-glow hero-glow-two" />

        <div className="legal-container hero-content">
          <span className="eyebrow">QarryOn Legal</span>
          <h1>Privacy Policy</h1>
          <p className="hero-copy">
            How QarryOn handles the information needed to coordinate, track,
            fulfill, and support your luggage service.
          </p>
          <div className="effective-date">
            <span className="date-dot" />
            Effective September 2, 2026
          </div>
        </div>
      </section>

      <section className="legal-container summary-wrap">
        <div className="summary-card">
          <div className="summary-heading">
            <span className="eyebrow dark">At a glance</span>
            <h2>Your information has a job.</h2>
            <p>
              We collect information to provide your QarryOn service, keep you
              informed, process transactions, and maintain appropriate service
              records.
            </p>
          </div>

          <div className="privacy-highlights">
            <div className="highlight-card">
              <span className="highlight-value">Service</span>
              <strong>Purpose-driven collection</strong>
              <p>We collect information needed to provide your service.</p>
            </div>

            <div className="highlight-card">
              <span className="highlight-value">No Sale</span>
              <strong>Your data isn’t merchandise</strong>
              <p>QarryOn does not sell customer personal information.</p>
            </div>

            <div className="highlight-card">
              <span className="highlight-value">Control</span>
              <strong>Questions are welcome</strong>
              <p>Contact us about your information or privacy choices.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="legal-container quick-nav-section">
        <div className="quick-nav-card">
          <div>
            <span className="eyebrow dark">Quick navigation</span>
            <h2>Find what matters to you.</h2>
          </div>

          <nav className="quick-links" aria-label="Privacy policy navigation">
            <a href="#information">What We Collect</a>
            <a href="#use">How We Use It</a>
            <a href="#providers">Service Providers</a>
            <a href="#location">Location & Tracking</a>
            <a href="#retention">Retention</a>
            <a href="#choices">Your Choices</a>
          </nav>
        </div>
      </section>

      <section className="legal-container policy-layout">
        <aside className="policy-sidebar">
          <div className="sidebar-card">
            <span className="eyebrow dark">Our principle</span>
            <h3>Only what helps us serve you.</h3>
            <p>
              QarryOn uses customer information to coordinate and support the
              service you requested and for the related purposes described in
              this policy.
            </p>
          </div>
        </aside>

        <article className="policy-document">
          <div className="document-intro">
            <span className="eyebrow dark">The policy</span>
            <h2>QarryOn Privacy Policy</h2>
            <p>
              This Privacy Policy describes how QarryOn LLC collects, uses,
              shares, and protects personal information when you visit our
              website, request or receive QarryOn services, communicate with
              us, or otherwise interact with QarryOn.
            </p>
          </div>

          <div className="policy-content">
            {sections.map((section) => (
              <section
                className="policy-section"
                id={section.id}
                key={section.id}
              >
                <h2>{section.title}</h2>
                {section.content}
              </section>
            ))}

            <section className="policy-section contact-section" id="contact">
              <span className="eyebrow dark">Questions?</span>
              <h2>Contact QarryOn</h2>
              <p>
                For questions about this Privacy Policy or how QarryOn handles
                personal information, contact:
              </p>

              <a
                href="mailto:connect@myqarryon.com"
                className="contact-email"
              >
                connect@myqarryon.com
              </a>
            </section>
          </div>
        </article>
      </section>

      <footer className="legal-footer">
        <div className="legal-container footer-inner">
          <Link href="/" className="footer-logo" aria-label="QarryOn home">
            <Image
              src="/Footer-logo-dark2.png"
              alt="QarryOn"
              width={290}
              height={96}
            />
          </Link>

          <div className="footer-copy">
            <span>© 2026 QarryOn LLC</span>
            <div className="footer-links">
              <Link href="/">Home</Link>
              <Link href="/terms">Terms & Conditions</Link>
              <a href="mailto:connect@myqarryon.com">
                connect@myqarryon.com
              </a>
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        :root {
          --navy: #0d1b2a;
          --navy-deep: #081d34;
          --navy-soft: #132538;
          --teal: #2ec4b6;
          --coral: #ff6b6b;
          --offwhite: #f8fafb;
          --text: #102030;
          --muted: #62707d;
          --line: #dfe6ea;
          --white: #ffffff;
        }

        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
        }

        .privacy-page {
          min-height: 100vh;
          background: var(--offwhite);
          color: var(--text);
        }

        .legal-container {
          width: min(1160px, calc(100% - 48px));
          margin: 0 auto;
        }

        .legal-header {
          background: var(--navy-deep);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          position: relative;
          z-index: 10;
        }

        .legal-header-inner {
          width: min(1160px, calc(100% - 48px));
          min-height: 92px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
        }

        .legal-logo,
        .footer-logo {
          display: inline-flex;
          align-items: center;
        }

        .legal-logo img {
          width: 170px;
          height: auto;
          display: block;
        }

        .back-link {
          color: #ffffff;
          text-decoration: none;
          font-size: 0.92rem;
          font-weight: 700;
          letter-spacing: 0.01em;
          transition: color 0.2s ease;
        }

        .back-link:hover {
          color: var(--teal);
        }

        .privacy-hero {
          position: relative;
          overflow: hidden;
          background:
            linear-gradient(
              115deg,
              rgba(8, 29, 52, 0.98),
              rgba(13, 27, 42, 0.96)
            );
          color: white;
          padding: 88px 0 116px;
        }

        .hero-glow {
          position: absolute;
          border-radius: 999px;
          filter: blur(5px);
          pointer-events: none;
        }

        .hero-glow-one {
          width: 420px;
          height: 420px;
          background: rgba(46, 196, 182, 0.12);
          top: -220px;
          right: 4%;
        }

        .hero-glow-two {
          width: 340px;
          height: 340px;
          background: rgba(255, 107, 107, 0.08);
          bottom: -220px;
          left: 4%;
        }

        .hero-content {
          position: relative;
          z-index: 1;
          max-width: 900px;
        }

        .eyebrow {
          display: inline-block;
          color: var(--teal);
          font-size: 0.76rem;
          line-height: 1;
          font-weight: 800;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          margin-bottom: 18px;
        }

        .eyebrow.dark {
          color: #168f85;
        }

        .privacy-hero h1 {
          margin: 0;
          max-width: 820px;
          font-size: clamp(3.2rem, 7vw, 6.3rem);
          line-height: 0.96;
          letter-spacing: -0.055em;
          font-weight: 850;
        }

        .hero-copy {
          max-width: 720px;
          margin: 28px 0 0;
          color: rgba(255, 255, 255, 0.76);
          font-size: clamp(1.05rem, 2vw, 1.28rem);
          line-height: 1.7;
        }

        .effective-date {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-top: 32px;
          color: rgba(255, 255, 255, 0.68);
          font-size: 0.9rem;
          font-weight: 600;
        }

        .date-dot {
          width: 8px;
          height: 8px;
          border-radius: 999px;
          background: var(--coral);
          box-shadow: 0 0 0 5px rgba(255, 107, 107, 0.12);
        }

        .summary-wrap {
          position: relative;
          z-index: 3;
          margin-top: -58px;
        }

        .summary-card {
          background: white;
          border: 1px solid rgba(16, 32, 48, 0.08);
          border-radius: 28px;
          padding: 42px;
          box-shadow: 0 20px 55px rgba(8, 29, 52, 0.1);
        }

        .summary-heading {
          max-width: 710px;
          margin-bottom: 32px;
        }

        .summary-heading h2,
        .quick-nav-card h2,
        .document-intro h2 {
          margin: 0;
          color: var(--navy-deep);
          letter-spacing: -0.035em;
        }

        .summary-heading h2 {
          font-size: clamp(1.8rem, 3vw, 2.55rem);
        }

        .summary-heading p {
          color: var(--muted);
          line-height: 1.7;
          margin: 12px 0 0;
        }

        .privacy-highlights {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 16px;
        }

        .highlight-card {
          background: #f6f9fa;
          border: 1px solid #e6edef;
          border-radius: 20px;
          padding: 24px;
        }

        .highlight-value {
          display: block;
          color: var(--coral);
          font-size: 1.55rem;
          font-weight: 850;
          letter-spacing: -0.035em;
          margin-bottom: 8px;
        }

        .highlight-card strong {
          display: block;
          color: var(--navy-deep);
          font-size: 0.98rem;
        }

        .highlight-card p {
          color: var(--muted);
          margin: 8px 0 0;
          font-size: 0.9rem;
          line-height: 1.55;
        }

        .quick-nav-section {
          padding-top: 34px;
        }

        .quick-nav-card {
          display: grid;
          grid-template-columns: minmax(220px, 0.8fr) 1.5fr;
          gap: 36px;
          align-items: center;
          background: #edf5f4;
          border: 1px solid #dcebea;
          border-radius: 24px;
          padding: 30px 34px;
        }

        .quick-nav-card h2 {
          font-size: 1.55rem;
        }

        .quick-links {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          justify-content: flex-end;
        }

        .quick-links a {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 10px 14px;
          border-radius: 999px;
          background: white;
          border: 1px solid #d8e4e4;
          color: var(--navy-deep);
          text-decoration: none;
          font-size: 0.84rem;
          font-weight: 750;
          transition:
            transform 0.2s ease,
            border-color 0.2s ease;
        }

        .quick-links a:hover {
          transform: translateY(-1px);
          border-color: var(--teal);
        }

        .policy-layout {
          display: grid;
          grid-template-columns: 250px minmax(0, 1fr);
          gap: 32px;
          align-items: start;
          padding-top: 44px;
          padding-bottom: 88px;
        }

        .policy-sidebar {
          position: sticky;
          top: 24px;
        }

        .sidebar-card {
          background: var(--navy-deep);
          color: white;
          border-radius: 22px;
          padding: 26px;
        }

        .sidebar-card h3 {
          margin: 0;
          font-size: 1.35rem;
          line-height: 1.25;
          letter-spacing: -0.025em;
        }

        .sidebar-card p {
          color: rgba(255, 255, 255, 0.68);
          line-height: 1.65;
          font-size: 0.9rem;
          margin: 14px 0 0;
        }

        .policy-document {
          min-width: 0;
          background: white;
          border: 1px solid rgba(16, 32, 48, 0.08);
          border-radius: 28px;
          overflow: hidden;
          box-shadow: 0 14px 42px rgba(8, 29, 52, 0.07);
        }

        .document-intro {
          padding: 44px 48px 40px;
          border-bottom: 1px solid var(--line);
          background:
            linear-gradient(
              135deg,
              rgba(46, 196, 182, 0.06),
              rgba(255, 255, 255, 0)
            );
        }

        .document-intro h2 {
          font-size: clamp(2rem, 4vw, 3rem);
        }

        .document-intro p {
          max-width: 760px;
          color: var(--muted);
          line-height: 1.75;
          margin: 16px 0 0;
        }

        .policy-content {
          padding: 0 48px 52px;
        }

        .policy-section {
          scroll-margin-top: 30px;
          padding: 40px 0;
          border-bottom: 1px solid var(--line);
        }

        .policy-section:last-child {
          border-bottom: 0;
        }

        .policy-section h2 {
          color: var(--navy-deep);
          font-size: clamp(1.35rem, 2.5vw, 1.7rem);
          letter-spacing: -0.025em;
          margin: 0 0 18px;
          line-height: 1.25;
        }

        .policy-section p {
          color: #42515e;
          font-size: 0.98rem;
          line-height: 1.78;
          margin: 0 0 16px;
        }

        .policy-section p:last-child {
          margin-bottom: 0;
        }

        .policy-content ul {
          display: block;
          list-style: disc outside;
          margin: 16px 0 24px;
          padding-left: 1.5rem;
        }

        .policy-content li {
          display: list-item;
          color: #42515e;
          padding-left: 5px;
          margin-bottom: 10px;
          line-height: 1.75;
        }

        .policy-content li::marker {
          color: var(--teal);
          font-size: 1.05em;
        }

        .policy-callout {
          margin-top: 24px;
          padding: 22px 24px;
          border-radius: 18px;
          border: 1px solid #dcebea;
          background: #f1f8f7;
        }

        .policy-callout.accent {
          border-color: rgba(255, 107, 107, 0.25);
          background: rgba(255, 107, 107, 0.06);
        }

        .policy-callout strong {
          display: block;
          color: var(--navy-deep);
          font-size: 1rem;
          margin-bottom: 7px;
        }

        .policy-callout p {
          margin: 0;
          font-size: 0.93rem;
        }

        .contact-section {
          background: #f6f9fa;
          margin: 40px -24px 0;
          padding: 32px 24px;
          border-radius: 20px;
          border-bottom: 0;
        }

        .contact-email {
          display: inline-flex;
          margin-top: 4px;
          color: #087e75;
          font-weight: 800;
          text-decoration: none;
        }

        .contact-email:hover {
          text-decoration: underline;
        }

        .legal-footer {
          background: var(--navy-deep);
          color: white;
          padding: 44px 0;
        }

        .footer-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 36px;
        }

        .footer-logo img {
          width: 160px;
          height: auto;
          display: block;
        }

        .footer-copy {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 10px;
          color: rgba(255, 255, 255, 0.58);
          font-size: 0.82rem;
        }

        .footer-links {
          display: flex;
          flex-wrap: wrap;
          justify-content: flex-end;
          gap: 18px;
        }

        .footer-links a {
          color: rgba(255, 255, 255, 0.78);
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .footer-links a:hover {
          color: var(--teal);
        }

        @media (max-width: 900px) {
          .privacy-highlights {
            grid-template-columns: 1fr;
          }

          .quick-nav-card {
            grid-template-columns: 1fr;
          }

          .quick-links {
            justify-content: flex-start;
          }

          .policy-layout {
            grid-template-columns: 1fr;
          }

          .policy-sidebar {
            position: static;
          }

          .sidebar-card {
            max-width: none;
          }
        }

        @media (max-width: 680px) {
          .legal-container,
          .legal-header-inner {
            width: min(100% - 30px, 1160px);
          }

          .legal-header-inner {
            min-height: 78px;
          }

          .legal-logo img {
            width: 140px;
          }

          .back-link {
            font-size: 0.82rem;
          }

          .privacy-hero {
            padding: 68px 0 94px;
          }

          .privacy-hero h1 {
            font-size: clamp(3rem, 15vw, 4.5rem);
          }

          .summary-wrap {
            margin-top: -40px;
          }

          .summary-card {
            padding: 28px 22px;
            border-radius: 22px;
          }

          .quick-nav-card {
            padding: 26px 22px;
          }

          .quick-links {
            gap: 8px;
          }

          .quick-links a {
            font-size: 0.78rem;
            padding: 9px 11px;
          }

          .policy-layout {
            padding-top: 28px;
            padding-bottom: 60px;
          }

          .policy-document {
            border-radius: 22px;
          }

          .document-intro {
            padding: 34px 24px 30px;
          }

          .policy-content {
            padding: 0 24px 38px;
          }

          .policy-section {
            padding: 32px 0;
          }

          .contact-section {
            margin-left: -8px;
            margin-right: -8px;
            padding-left: 18px;
            padding-right: 18px;
          }

          .footer-inner {
            flex-direction: column;
            align-items: flex-start;
          }

          .footer-copy {
            align-items: flex-start;
          }

          .footer-links {
            justify-content: flex-start;
          }
        }
      `}</style>
    </main>
  );
}