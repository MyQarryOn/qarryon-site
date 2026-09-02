import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Terms & Conditions | QarryOn",
  description:
    "Terms and conditions governing QarryOn luggage pickup, secure hold, transportation, and delivery services.",
};

const sections = [
  {
    id: "services",
    title: "1. About QarryOn Services",
    content: (
      <>
        <p>
          These Terms & Conditions (“Terms”) govern luggage pickup, temporary
          holding, transportation, delivery, and related concierge services
          provided by QarryOn LLC (“QarryOn,” “we,” “us,” or “our”).
        </p>

        <p>QarryOn services may include:</p>

        <ul>
          <li>Scheduled luggage pickup</li>
          <li>Temporary secure holding</li>
          <li>Transportation and delivery</li>
          <li>Airport curbside handoffs</li>
          <li>Hotel, Airbnb, or accommodation handoffs</li>
          <li>Event and group-travel luggage coordination</li>
        </ul>

        <p>
          QarryOn is not an airline, airport operator, hotel, or governmental
          transportation authority. We do not control airline operations,
          airport security procedures, hotel policies, traffic conditions, or
          other third-party operations that may affect service.
        </p>
      </>
    ),
  },

  {
    id: "booking",
    title: "2. Service Requests and Booking Confirmation",
    content: (
      <>
        <p>
          Submitting a QarryOn intake form constitutes a service request and
          does not create a confirmed reservation.
        </p>

        <p>Before confirming a request, QarryOn may review:</p>

        <ul>
          <li>Service availability</li>
          <li>Pickup and delivery distance</li>
          <li>Requested timing</li>
          <li>Luggage quantity</li>
          <li>Storage requirements</li>
          <li>Operational or special-service requirements</li>
        </ul>

        <p>
          Final pricing may differ from an initial website estimate or displayed
          tier price when additional services or operational requirements apply.
        </p>

        <div className="terms-callout">
          <strong>When is my booking confirmed?</strong>
          <p>
            A booking is confirmed only after QarryOn accepts the request and
            any required payment or other confirmation requirements are
            completed.
          </p>
        </div>
      </>
    ),
  },

  {
    id: "customer-responsibilities",
    title: "3. Customer Responsibilities",
    content: (
      <>
        <p>Customers are responsible for:</p>

        <ul>
          <li>
            Providing complete and accurate pickup and delivery information
          </li>
          <li>Providing current contact information</li>
          <li>Accurately identifying the number of bags being transferred</li>
          <li>Providing applicable flight information when requested</li>
          <li>Providing relevant service or special-handling instructions</li>
          <li>
            Ensuring luggage is properly closed, secured, and reasonably
            suitable for ordinary handling and transportation
          </li>
          <li>
            Ensuring all luggage contents comply with these Terms and applicable
            law
          </li>
        </ul>

        <p>
          The Customer remains responsible for all contents placed inside
          luggage tendered to QarryOn.
        </p>
      </>
    ),
  },

  {
    id: "prohibited-items",
    title: "4. Prohibited Items",
    content: (
      <>
        <p>
          The following items may not be placed in luggage handled, stored, or
          transported by QarryOn:
        </p>

        <ul>
          <li>Live animals, pets, insects, or other living organisms</li>

          <li>
            Firearms, ammunition, explosives, fireworks, or explosive devices
          </li>

          <li>Illegal weapons or items prohibited by applicable law</li>

          <li>
            Gasoline, fuels, lighter fluid, propane, butane, or other highly
            flammable liquids or gases
          </li>

          <li>
            Hazardous chemicals, corrosives, toxic substances, pesticides, or
            other hazardous materials
          </li>

          <li>
            Illegal drugs, unlawfully possessed controlled substances, or
            contraband
          </li>

          <li>Stolen or unlawfully obtained property</li>

          <li>Human remains or biological specimens</li>

          <li>Uncontained liquids or substances likely to leak</li>

          <li>
            Perishable goods requiring refrigeration or temperature-controlled
            storage
          </li>

          <li>
            Any property whose possession or transportation would violate
            federal, state, or local law
          </li>
        </ul>

        <div className="terms-callout warning">
          <strong>QarryOn may refuse unsafe luggage.</strong>
          <p>
            QarryOn may refuse, suspend, or terminate service when we reasonably
            believe luggage contains dangerous, prohibited, illegal, leaking, or
            otherwise unsafe property.
          </p>
        </div>

        <p>
          Customers may be responsible for losses, cleanup costs, damage,
          injuries, penalties, or other expenses arising from prohibited,
          dangerous, improperly packaged, or undisclosed items.
        </p>
      </>
    ),
  },

  {
    id: "batteries",
    title: "5. Batteries and Electronic Devices",
    content: (
      <>
        <p>
          Customers must disclose batteries or battery-powered equipment that
          are:
        </p>

        <ul>
          <li>Damaged or defective</li>
          <li>Swollen or leaking</li>
          <li>Subject to a manufacturer recall</li>
          <li>Unusually large or high-capacity</li>
          <li>Otherwise potentially hazardous</li>
        </ul>

        <p>
          QarryOn may refuse battery-powered equipment when its condition,
          packaging, size, or characteristics create a safety concern.
        </p>
      </>
    ),
  },

  {
    id: "valuables",
    title: "6. Valuable, Fragile, and Irreplaceable Property",
    content: (
      <>
        <p>
          Customers should not place unusually valuable, essential, fragile, or
          irreplaceable property in luggage transferred to QarryOn.
        </p>

        <p>Examples include:</p>

        <ul>
          <li>Cash or negotiable instruments</li>
          <li>Jewelry, precious metals, or collectibles</li>
          <li>Fine art or heirlooms</li>
          <li>Passports or identification documents</li>
          <li>Prescription medications</li>
          <li>Keys</li>
          <li>Sensitive business materials</li>
          <li>Unusually valuable electronics or professional equipment</li>
        </ul>

        <p>
          QarryOn does not ordinarily open luggage or inventory its contents.
          Acceptance of luggage does not constitute acknowledgment of its
          contents or their stated value.
        </p>
      </>
    ),
  },

  {
    id: "liability",
    title: "7. Maximum Liability — $250 Per Booking",
    content: (
      <>
        <div className="terms-callout liability">
          <strong>$250 maximum liability per booking</strong>
          <p>
            To the fullest extent permitted by applicable law, QarryOn’s maximum
            liability for eligible loss of or physical damage to luggage in
            QarryOn’s custody is limited to $250 per booking.
          </p>
        </div>

        <p>
          The $250 maximum applies to the booking in the aggregate and not to
          each individual bag, item, or piece of property.
        </p>

        <p>
          This limitation is a contractual limitation of liability and is{" "}
          <strong>not insurance</strong>.
        </p>

        <p>
          Customers are responsible for maintaining any travel, renters,
          homeowners, baggage, personal-property, or other insurance they
          consider appropriate for property exceeding QarryOn’s maximum
          liability.
        </p>

        <p>
          Nothing in these Terms is intended to exclude or limit liability where
          applicable law does not permit such exclusion or limitation.
        </p>
      </>
    ),
  },

  {
    id: "liability-exclusions",
    title: "8. Exclusions From Liability",
    content: (
      <>
        <p>
          To the fullest extent permitted by law, QarryOn is not responsible for
          loss or damage resulting from:
        </p>

        <ul>
          <li>Ordinary wear and tear</li>
          <li>Pre-existing damage</li>
          <li>Defective wheels, handles, zippers, locks, straps, or closures</li>
          <li>Improper or insufficient packing</li>
          <li>Fragile items inadequately protected inside luggage</li>
          <li>Leakage from liquids or toiletries</li>
          <li>Perishable property</li>
          <li>Prohibited or undisclosed contents</li>
          <li>The inherent nature or defect of an item</li>
          <li>Acts or omissions of the Customer or authorized recipient</li>
          <li>
            Governmental, airport, airline, law-enforcement, or security actions
          </li>
          <li>Circumstances outside QarryOn’s reasonable control</li>
        </ul>
      </>
    ),
  },

  {
    id: "pickup",
    title: "9. Pickup and Chain of Custody",
    content: (
      <>
        <p>
          The Customer or an authorized representative must make luggage
          available at the approved pickup location and time.
        </p>

        <p>
          Customers should verify the number of bags transferred at pickup and
          promptly report any discrepancy.
        </p>

        <p>
          Once luggage is accepted, QarryOn will coordinate its transportation
          and, when applicable, temporary secure holding through final delivery.
        </p>
      </>
    ),
  },

  {
    id: "updates",
    title: "10. Journey Updates and AirTag Add-On",
    content: (
      <>
        <p>
          QarryOn provides service-status updates throughout the customer
          journey. Depending on the service, updates may include:
        </p>

        <ul>
          <li>QarryOn arrival</li>
          <li>Luggage pickup</li>
          <li>Secure hold</li>
          <li>Departure for delivery</li>
          <li>Arrival at the delivery location</li>
          <li>Completed delivery</li>
          <li>Service completion</li>
        </ul>

        <p>
          Standard journey updates do not constitute continuous GPS tracking.
        </p>

        <p>
          When offered, customers may purchase optional AirTag-assisted location
          visibility. AirTag functionality depends upon third-party technology,
          devices, networks, connectivity, and services outside QarryOn’s
          control. Continuous or precise location information is therefore not
          guaranteed.
        </p>
      </>
    ),
  },

  {
    id: "delivery",
    title: "11. Delivery and Authorized Recipients",
    content: (
      <>
        <p>
          Customers must provide accurate delivery instructions and identify the
          person or location authorized to receive luggage.
        </p>

        <p>When authorized by the Customer, luggage may be delivered to:</p>

        <ul>
          <li>A hotel front desk or concierge</li>
          <li>An accommodation host</li>
          <li>An event representative</li>
          <li>A trusted contact</li>
          <li>Another approved recipient or location</li>
        </ul>

        <p>
          QarryOn’s custody ends once luggage has been delivered according to the
          Customer’s instructions and delivery has been confirmed.
        </p>

        <p>
          If a Customer expressly authorizes unattended delivery, the Customer
          assumes responsibility for loss, theft, damage, weather exposure, or
          other events occurring after the authorized delivery is completed.
        </p>
      </>
    ),
  },

  {
    id: "airport",
    title: "12. Airport Service",
    content: (
      <>
        <p>
          QarryOn airport service is limited to approved curbside pickup and
          delivery locations.
        </p>

        <ul>
          <li>
            Arriving customers must collect their own luggage before meeting
            QarryOn.
          </li>
          <li>
            QarryOn does not retrieve luggage from baggage claim or
            airline-controlled facilities.
          </li>
          <li>
            Customers are responsible for providing accurate flight information.
          </li>
          <li>
            Customers should remain reasonably available for service
            coordination.
          </li>
          <li>
            Customers remain responsible for airline check-in, baggage, boarding,
            and airport deadlines.
          </li>
        </ul>

        <p>
          QarryOn cannot guarantee airline baggage acceptance, check-in,
          boarding, or flight departure.
        </p>
      </>
    ),
  },

  {
    id: "fees",
    title: "13. Additional Fees and Service Changes",
    content: (
      <>
        <p>Additional charges may apply for:</p>

        <ul>
          <li>Overnight or multi-day storage</li>
          <li>Rush requests</li>
          <li>After-hours service</li>
          <li>Oversized or additional luggage</li>
          <li>Additional stops</li>
          <li>Extended waiting time</li>
          <li>Itinerary or destination changes</li>
          <li>Rerouting or redelivery</li>
          <li>Locations outside QarryOn’s standard service area</li>
        </ul>

        <p>
          When reasonably practicable, QarryOn will communicate material
          additional charges before completing the affected service.
        </p>
      </>
    ),
  },

  {
    id: "delays",
    title: "14. Delays and Schedule Changes",
    content: (
      <>
        <p>
          Pickup and delivery times are service windows or estimates unless
          QarryOn expressly states otherwise.
        </p>

        <p>Service timing may be affected by circumstances such as:</p>

        <ul>
          <li>Traffic or road closures</li>
          <li>Weather conditions</li>
          <li>Airport congestion</li>
          <li>Accidents</li>
          <li>Flight disruptions</li>
          <li>Security procedures</li>
          <li>Governmental action</li>
        </ul>

        <p>
          Customers should notify QarryOn promptly when travel plans, flights,
          destinations, or requested service times change.
        </p>
      </>
    ),
  },

  {
    id: "failed-service",
    title: "15. Failed Pickup or Delivery",
    content: (
      <>
        <p>
          QarryOn may be unable to complete a pickup or delivery when the
          Customer or designated recipient:
        </p>

        <ul>
          <li>Is unavailable or unreachable</li>
          <li>Is materially late</li>
          <li>Provides inaccurate information</li>
          <li>Fails to follow agreed pickup or delivery instructions</li>
        </ul>

        <p>
          QarryOn may make reasonable efforts to contact the Customer and resolve
          the situation.
        </p>

        <p>
          Additional waiting, storage, rerouting, return, or redelivery charges
          may apply.
        </p>
      </>
    ),
  },

  {
    id: "cancellations",
    title: "16. Cancellations, Refunds, and Booking Changes",
    content: (
      <>
        <p>
          QarryOn reserves time, transportation capacity, and, when applicable,
          storage capacity for each confirmed booking. The following
          cancellation policy applies once a service request has been accepted
          and the booking has been confirmed.
        </p>

        <div className="policy-grid">
          <div className="policy-card">
            <span className="policy-time">24+ hours</span>
            <strong>Full refund</strong>
            <p>
              Cancel at least 24 hours before the scheduled pickup time.
            </p>
          </div>

          <div className="policy-card">
            <span className="policy-time">2–24 hours</span>
            <strong>50% refund</strong>
            <p>
              Cancel less than 24 hours but at least 2 hours before pickup.
            </p>
          </div>

          <div className="policy-card">
            <span className="policy-time">Under 2 hours</span>
            <strong>No refund</strong>
            <p>
              Cancellations made less than 2 hours before pickup are
              nonrefundable.
            </p>
          </div>
        </div>

        <h3>No-Shows and Service Already Underway</h3>

        <ul>
          <li>
            <strong>No-show:</strong> A booking is nonrefundable if the Customer
            fails to appear, cannot be reached within a reasonable period, or
            fails to make luggage available at the agreed pickup location and
            time.
          </li>

          <li>
            <strong>After QarryOn arrives:</strong> A booking is nonrefundable if
            QarryOn has arrived at the confirmed pickup location and service
            cannot be completed because of the Customer’s absence,
            unavailability, inaccurate information, or failure to follow agreed
            instructions.
          </li>

          <li>
            <strong>After luggage pickup:</strong> Once QarryOn has accepted
            custody of the Customer’s luggage, the service has commenced and the
            booking is nonrefundable.
          </li>
        </ul>

        <h3>Travel Delays and Itinerary Changes</h3>

        <p>
          QarryOn recognizes that flight delays, cancellations, and other travel
          disruptions may affect a Customer’s itinerary. Customers should notify
          QarryOn as soon as reasonably possible when their travel plans change.
        </p>

        <p>
          When operationally feasible, QarryOn may adjust a scheduled pickup or
          delivery time rather than requiring cancellation of the booking.
          Schedule changes are subject to availability and are not guaranteed.
        </p>

        <p>Additional charges may apply when a change requires:</p>

        <ul>
          <li>Additional mileage or rerouting</li>
          <li>Waiting time</li>
          <li>Additional or overnight storage</li>
          <li>After-hours service</li>
          <li>Additional stops</li>
          <li>Other services beyond the original confirmed booking</li>
        </ul>

        <p>
          For a documented airline cancellation, significant flight disruption,
          severe weather event, or similar circumstance outside the Customer’s
          reasonable control, QarryOn may, at its discretion, offer rescheduling
          or a credit toward a future QarryOn service when a monetary refund
          would not otherwise be available under this policy.
        </p>

        <h3>Cancellations by QarryOn</h3>

        <p>
          If QarryOn cancels a confirmed booking before service begins because
          QarryOn is unable to provide the service, the Customer will receive a
          full refund of amounts paid for services not provided.
        </p>

        <p>
          A refund may not be required when QarryOn refuses or terminates
          service because of:
        </p>

        <ul>
          <li>Prohibited or dangerous property</li>
          <li>Materially inaccurate information provided by the Customer</li>
          <li>Unsafe or unlawful circumstances</li>
          <li>Customer misconduct</li>
          <li>Another material violation of these Terms</li>
        </ul>

        <h3>Refund Processing</h3>

        <p>
          Eligible refunds will be returned to the original payment method when
          reasonably practicable. Refund processing times may vary depending on
          the Customer’s financial institution or payment provider.
        </p>
      </>
    ),
  },

  {
    id: "claims",
    title: "17. Claims for Lost or Damaged Luggage",
    content: (
      <>
        <p>
          Customers should inspect their luggage promptly following delivery and
          report suspected loss or physical damage as soon as reasonably
          possible.
        </p>

        <p>A claim should include, when available:</p>

        <ul>
          <li>The Customer’s name</li>
          <li>Booking information</li>
          <li>A description of the loss or damage</li>
          <li>Photographs of the affected luggage or property</li>
          <li>Reasonable documentation establishing ownership and value</li>
        </ul>

        <p>
          QarryOn may request additional information reasonably necessary to
          investigate a claim.
        </p>

        <p>
          Any payment or resolution remains subject to these Terms, including
          the $250 maximum liability per booking.
        </p>
      </>
    ),
  },

  {
    id: "refuse-service",
    title: "18. Right to Refuse Service",
    content: (
      <>
        <p>
          QarryOn may refuse, suspend, or terminate service when luggage,
          customer conduct, requested service conditions, or other circumstances
          create a reasonable:
        </p>

        <ul>
          <li>Safety concern</li>
          <li>Legal concern</li>
          <li>Operational concern</li>
          <li>Security concern</li>
        </ul>

        <p>
          QarryOn does not routinely inspect the contents of closed luggage.
          However, reasonable action may be taken when QarryOn believes luggage
          contains dangerous, illegal, prohibited, leaking, or unsafe property.
        </p>
      </>
    ),
  },

  {
    id: "conduct",
    title: "19. Customer Conduct",
    content: (
      <>
        <p>
          Customers and their representatives must interact safely and
          respectfully with QarryOn personnel and service providers.
        </p>

        <p>QarryOn may refuse or terminate service in response to:</p>

        <ul>
          <li>Threatening or abusive conduct</li>
          <li>Discriminatory conduct</li>
          <li>Fraudulent or illegal activity</li>
          <li>Dangerous behavior</li>
          <li>Materially disruptive conduct</li>
        </ul>
      </>
    ),
  },

  {
    id: "third-parties",
    title: "20. Third-Party Services",
    content: (
      <>
        <p>QarryOn may rely on third-party services such as:</p>

        <ul>
          <li>Payment processors</li>
          <li>Scheduling systems</li>
          <li>Mapping and navigation platforms</li>
          <li>Communications providers</li>
          <li>AirTag or Apple services</li>
          <li>Other technology or service providers</li>
        </ul>

        <p>
          QarryOn is not responsible for temporary outages, inaccuracies,
          interruptions, or failures of third-party systems outside QarryOn’s
          reasonable control.
        </p>
      </>
    ),
  },

  {
    id: "force-majeure",
    title: "21. Events Beyond QarryOn’s Control",
    content: (
      <>
        <p>
          QarryOn is not responsible for delays or failures caused by events
          beyond its reasonable control, including:
        </p>

        <ul>
          <li>Severe weather or natural disasters</li>
          <li>Accidents or road closures</li>
          <li>Civil emergencies</li>
          <li>Government actions</li>
          <li>Airport shutdowns</li>
          <li>Security incidents</li>
          <li>Telecommunications failures</li>
          <li>Similar circumstances beyond QarryOn’s reasonable control</li>
        </ul>

        <p>
          QarryOn will make reasonable efforts to communicate with affected
          customers and modify or complete service when practicable.
        </p>
      </>
    ),
  },

  {
    id: "privacy",
    title: "22. Privacy and Service Communications",
    content: (
      <>
        <p>
          By submitting a service request, customers authorize QarryOn to use
          the contact information provided to communicate regarding:
        </p>

        <ul>
          <li>Availability and pricing</li>
          <li>Pickup and delivery</li>
          <li>Storage and transportation</li>
          <li>Payments</li>
          <li>Schedule or itinerary changes</li>
          <li>Customer support</li>
        </ul>

        <p>
          Additional rules concerning the collection and use of personal
          information may be addressed in a separate QarryOn Privacy Policy.
        </p>
      </>
    ),
  },

  {
    id: "governing-law",
    title: "23. Governing Law",
    content: (
      <>
        <p>
          These Terms are governed by the laws of the State of Georgia, without
          regard to conflict-of-law principles.
        </p>

        <p>
          Nothing in these Terms waives any right or protection that cannot
          lawfully be waived under applicable law.
        </p>
      </>
    ),
  },

  {
    id: "changes",
    title: "24. Severability and Changes",
    content: (
      <>
        <p>
          If any provision of these Terms is determined to be invalid or
          unenforceable, the remaining provisions will continue in effect to the
          fullest extent permitted by law.
        </p>

        <p>
          QarryOn may update these Terms periodically. The Terms in effect when a
          confirmed booking is made will generally govern that booking unless a
          change is required by law or reasonably necessary for safety.
        </p>
      </>
    ),
  },

  {
    id: "agreement",
    title: "25. Entire Agreement",
    content: (
      <p>
        These Terms, together with the applicable booking confirmation, final
        pricing, and any policies expressly incorporated into the booking,
        constitute the agreement between QarryOn and the Customer regarding the
        requested service.
      </p>
    ),
  },
];

export default function TermsPage() {
  return (
    <>
      <main className="terms-page">
        {/* HEADER */}
        <header className="terms-nav">
          <div className="terms-container terms-nav-inner">
            <Link href="/" className="terms-brand" aria-label="QarryOn home">
              <Image
                src="/Footer-logo-dark2.png"
                alt="QarryOn"
                width={290}
                height={96}
                priority
                className="terms-logo"
              />
            </Link>

            <Link href="/" className="back-link">
              Back to QarryOn
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </header>

        {/* HERO */}
        <section className="terms-hero">
          <div className="terms-container terms-hero-inner">
            <span className="eyebrow">QarryOn Legal</span>

            <h1>Terms & Conditions</h1>

            <p className="terms-hero-copy">
              The details behind how QarryOn handles bookings, luggage,
              cancellations, delivery, liability, and your service experience.
            </p>

            <div className="effective-date">Effective September 2, 2026</div>
          </div>
        </section>

        {/* MAIN CONTENT */}
        <section className="terms-main">
          <div className="terms-container">
            {/* AT A GLANCE */}
            <div className="overview-card">
              <div className="overview-heading">
                <span className="eyebrow dark">At a glance</span>
                <h2>The important stuff, up front.</h2>
                <p>
                  These highlights make the policy easier to navigate. The full
                  Terms below govern your service.
                </p>
              </div>

              <div className="overview-grid">
                <div className="overview-item">
                  <span className="overview-number">$250</span>
                  <strong>Maximum liability</strong>
                  <p>
                    Per booking, in the aggregate, for eligible loss or physical
                    damage. This is not insurance.
                  </p>
                </div>

                <div className="overview-item">
                  <span className="overview-number">24 hrs</span>
                  <strong>Full-refund window</strong>
                  <p>
                    Cancel at least 24 hours before scheduled pickup for a full
                    refund.
                  </p>
                </div>

                <div className="overview-item">
                  <span className="overview-number">Curbside</span>
                  <strong>Airport handoff</strong>
                  <p>
                    Collect your luggage first. QarryOn meets you at an approved
                    curbside location.
                  </p>
                </div>
              </div>
            </div>

            {/* JUMP LINKS */}
            <div className="jump-card">
              <div className="jump-heading">
                <span className="eyebrow dark">Quick navigation</span>
                <h2>Jump to what you need.</h2>
              </div>

              <div className="jump-links">
                <a href="#booking">Booking</a>
                <a href="#prohibited-items">Prohibited Items</a>
                <a href="#liability">Liability</a>
                <a href="#airport">Airport Service</a>
                <a href="#cancellations">Cancellations</a>
                <a href="#claims">Claims</a>
              </div>
            </div>

            {/* INTRO */}
            <div className="terms-intro">
              <p>
                By submitting a service request, completing a confirmed booking,
                or using a QarryOn service, you acknowledge that you have read,
                understood, and agreed to these Terms.
              </p>
            </div>

            {/* TERMS */}
            <div className="terms-document">
              {sections.map((section) => (
                <section
                  key={section.id}
                  id={section.id}
                  className="terms-section"
                >
                  <h2>{section.title}</h2>

                  <div className="terms-content">{section.content}</div>
                </section>
              ))}

              {/* CONTACT */}
              <section id="contact" className="terms-section contact-section">
                <span className="eyebrow dark">Need help?</span>

                <h2>Contact QarryOn</h2>

                <div className="terms-content">
                  <p>
                    Questions regarding these Terms, service policies, or claims
                    may be directed to:
                  </p>

                  <div className="contact-card">
                    <strong>QarryOn LLC</strong>
                    <span>Atlanta, Georgia</span>

                    <a href="mailto:connect@myqarryon.com">
                      connect@myqarryon.com
                    </a>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="terms-footer">
          <div className="terms-container footer-inner">
            <Link href="/" aria-label="Return to QarryOn">
              <Image
                src="/Footer-logo-dark2.png"
                alt="QarryOn"
                width={210}
                height={70}
                className="footer-logo"
              />
            </Link>

            <div className="footer-copy">
              <span>© 2026 QarryOn LLC. All rights reserved.</span>

              <Link href="/">Home</Link>

              <a href="mailto:connect@myqarryon.com">
                connect@myqarryon.com
              </a>
            </div>
          </div>
        </footer>
      </main>

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
          --border: rgba(16, 32, 48, 0.08);
        }

        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        .terms-page {
          min-height: 100vh;
          background: var(--offwhite);
          color: var(--text);
          font-family: Inter, Arial, sans-serif;
        }

        .terms-container {
          width: min(1060px, calc(100% - 48px));
          margin: 0 auto;
        }

        /* NAV */

        .terms-nav {
          background: var(--navy-deep);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .terms-nav-inner {
          min-height: 108px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
        }

        .terms-brand {
          display: inline-flex;
          align-items: center;
        }

        .terms-logo {
          width: 220px;
          height: auto;
          display: block;
        }

        .back-link {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: rgba(255, 255, 255, 0.78);
          text-decoration: none;
          font-size: 0.95rem;
          font-weight: 600;
          transition: color 0.18s ease, gap 0.18s ease;
        }

        .back-link:hover {
          color: white;
          gap: 14px;
        }

        /* HERO */

        .terms-hero {
          position: relative;
          overflow: hidden;
          background:
            radial-gradient(
              circle at 78% 20%,
              rgba(46, 196, 182, 0.14),
              transparent 32%
            ),
            linear-gradient(180deg, #081d34 0%, #0d1b2a 100%);
          color: white;
          padding: 92px 0 116px;
        }

        .terms-hero-inner {
          max-width: 860px;
          margin-left: auto;
          margin-right: auto;
        }

        .eyebrow {
          display: inline-block;
          color: var(--teal);
          font-size: 0.76rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          margin-bottom: 18px;
        }

        .eyebrow.dark {
          color: #178f84;
        }

        .terms-hero h1 {
          margin: 0;
          color: white;
          font-size: clamp(3rem, 7vw, 5.4rem);
          line-height: 0.98;
          letter-spacing: -0.055em;
          font-weight: 750;
        }

        .terms-hero-copy {
          max-width: 720px;
          margin: 28px 0 0;
          color: rgba(255, 255, 255, 0.78);
          font-size: 1.14rem;
          line-height: 1.85;
        }

        .effective-date {
          display: inline-flex;
          margin-top: 30px;
          padding: 10px 14px;
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.14);
          background: rgba(255, 255, 255, 0.06);
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.86rem;
          font-weight: 600;
        }

        /* MAIN */

        .terms-main {
          padding: 0 0 100px;
        }

        .overview-card {
          position: relative;
          margin-top: -54px;
          background: white;
          border: 1px solid var(--border);
          border-radius: 28px;
          padding: 38px;
          box-shadow: 0 24px 70px rgba(8, 29, 52, 0.09);
        }

        .overview-heading {
          max-width: 680px;
          margin-bottom: 30px;
        }

        .overview-heading h2,
        .jump-heading h2 {
          margin: 0;
          color: var(--navy);
          font-size: clamp(1.8rem, 4vw, 2.5rem);
          letter-spacing: -0.035em;
        }

        .overview-heading p {
          margin: 14px 0 0;
          color: var(--muted);
          line-height: 1.75;
        }

        .overview-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }

        .overview-item {
          padding: 24px;
          border-radius: 20px;
          background: #f8fafb;
          border: 1px solid rgba(16, 32, 48, 0.06);
        }

        .overview-number {
          display: block;
          color: var(--teal);
          font-size: 1.35rem;
          font-weight: 750;
          margin-bottom: 10px;
          letter-spacing: -0.025em;
        }

        .overview-item strong {
          display: block;
          color: var(--navy);
          font-size: 1rem;
          margin-bottom: 8px;
        }

        .overview-item p {
          margin: 0;
          color: var(--muted);
          line-height: 1.65;
          font-size: 0.92rem;
        }

        /* QUICK NAV */

        .jump-card {
          margin-top: 26px;
          padding: 30px 34px;
          background: white;
          border: 1px solid var(--border);
          border-radius: 24px;
        }

        .jump-heading {
          margin-bottom: 22px;
        }

        .jump-links {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .jump-links a {
          display: inline-flex;
          align-items: center;
          padding: 10px 15px;
          border-radius: 999px;
          background: rgba(46, 196, 182, 0.08);
          border: 1px solid rgba(46, 196, 182, 0.16);
          color: var(--navy);
          text-decoration: none;
          font-size: 0.88rem;
          font-weight: 650;
          transition: transform 0.18s ease, background 0.18s ease;
        }

        .jump-links a:hover {
          transform: translateY(-1px);
          background: rgba(46, 196, 182, 0.14);
        }

        /* DOCUMENT */

        .terms-intro {
          max-width: 820px;
          margin: 52px auto 22px;
          text-align: center;
        }

        .terms-intro p {
          color: var(--muted);
          line-height: 1.85;
          font-size: 1rem;
        }

        .terms-document {
          max-width: 860px;
          margin: 0 auto;
          background: white;
          border: 1px solid var(--border);
          border-radius: 28px;
          padding: clamp(28px, 6vw, 58px);
          box-shadow: 0 20px 60px rgba(8, 29, 52, 0.05);
        }

        .terms-section {
          scroll-margin-top: 30px;
          padding: 38px 0;
          border-top: 1px solid #e8edf0;
        }

        .terms-section:first-child {
          border-top: 0;
          padding-top: 0;
        }

        .terms-section > h2 {
          margin: 0 0 18px;
          color: var(--navy);
          font-size: clamp(1.32rem, 3vw, 1.65rem);
          line-height: 1.25;
          letter-spacing: -0.028em;
        }

        /* READER-FRIENDLY BODY */

        .terms-content {
          color: #536170;
          line-height: 1.85;
          font-size: 0.98rem;
        }

        .terms-content p {
          margin: 0 0 18px;
        }

        .terms-content p:last-child {
          margin-bottom: 0;
        }

        .terms-content strong {
          color: #182b3e;
          font-weight: 700;
        }

        .terms-content h3 {
          margin: 32px 0 14px;
          color: var(--navy);
          font-size: 1.08rem;
          line-height: 1.4;
          letter-spacing: -0.015em;
        }

        .terms-content ul {
          display: block;
          list-style: disc outside;
          margin: 16px 0 24px;
          padding-left: 1.5rem;
        }

        .terms-content li {
          display: list-item;
          padding-left: 5px;
          margin-bottom: 10px;
          line-height: 1.75;
        }

        .terms-content li:last-child {
          margin-bottom: 0;
        }

        .terms-content li::marker {
          color: var(--teal);
          font-size: 1.05em;
        }

        /* CALLOUTS */

        .terms-callout {
          margin: 24px 0;
          padding: 20px 22px;
          border-radius: 18px;
          background: rgba(46, 196, 182, 0.07);
          border: 1px solid rgba(46, 196, 182, 0.18);
        }

        .terms-callout strong {
          display: block;
          margin-bottom: 7px;
          color: var(--navy);
          font-size: 0.98rem;
        }

        .terms-callout p {
          margin: 0;
        }

        .terms-callout.warning {
          background: rgba(255, 107, 107, 0.055);
          border-color: rgba(255, 107, 107, 0.17);
        }

        .terms-callout.liability {
          border-left: 4px solid var(--teal);
        }

        /* CANCELLATION GRID */

        .policy-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          margin: 24px 0 30px;
        }

        .policy-card {
          padding: 20px;
          border-radius: 18px;
          background: #f8fafb;
          border: 1px solid rgba(16, 32, 48, 0.07);
        }

        .policy-time {
          display: block;
          color: #178f84;
          font-size: 0.78rem;
          font-weight: 750;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          margin-bottom: 10px;
        }

        .policy-card strong {
          display: block;
          margin-bottom: 8px;
          color: var(--navy);
          font-size: 1rem;
        }

        .policy-card p {
          margin: 0;
          color: var(--muted);
          font-size: 0.9rem;
          line-height: 1.6;
        }

        /* CONTACT */

        .contact-section {
          padding-bottom: 0;
        }

        .contact-card {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 5px;
          margin-top: 22px;
          padding: 22px;
          border-radius: 18px;
          background: #f8fafb;
          border: 1px solid rgba(16, 32, 48, 0.07);
        }

        .contact-card strong {
          color: var(--navy);
          font-size: 1.05rem;
        }

        .contact-card span {
          color: var(--muted);
        }

        .contact-card a {
          margin-top: 5px;
          color: #178f84;
          font-weight: 700;
          text-decoration: none;
        }

        .contact-card a:hover {
          text-decoration: underline;
        }

        /* FOOTER */

        .terms-footer {
          background: #081d34;
          color: white;
          padding: 48px 0;
        }

        .footer-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 30px;
        }

        .footer-logo {
          display: block;
          width: 190px;
          height: auto;
        }

        .footer-copy {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          flex-wrap: wrap;
          gap: 18px;
          color: rgba(255, 255, 255, 0.58);
          font-size: 0.88rem;
        }

        .footer-copy a {
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
        }

        .footer-copy a:hover {
          color: white;
        }

        /* RESPONSIVE */

        @media (max-width: 820px) {
          .terms-container {
            width: min(100%, calc(100% - 28px));
          }

          .terms-nav-inner {
            min-height: 92px;
          }

          .terms-logo {
            width: 190px;
          }

          .terms-hero {
            padding: 68px 0 92px;
          }

          .overview-card {
            margin-top: -40px;
            padding: 26px;
          }

          .overview-grid,
          .policy-grid {
            grid-template-columns: 1fr;
          }

          .jump-card {
            padding: 26px;
          }

          .terms-document {
            border-radius: 22px;
          }

          .footer-inner {
            flex-direction: column;
            align-items: flex-start;
          }

          .footer-copy {
            justify-content: flex-start;
          }
        }

        @media (max-width: 560px) {
          .terms-container {
            width: min(100%, calc(100% - 22px));
          }

          .terms-nav-inner {
            min-height: 82px;
          }

          .terms-logo {
            width: 165px;
          }

          .back-link {
            font-size: 0.82rem;
          }

          .terms-hero {
            padding: 56px 0 82px;
          }

          .terms-hero h1 {
            font-size: clamp(2.7rem, 13vw, 4rem);
          }

          .terms-hero-copy {
            font-size: 1rem;
            line-height: 1.7;
          }

          .overview-card {
            padding: 22px;
            border-radius: 22px;
          }

          .overview-item {
            padding: 20px;
          }

          .jump-links {
            display: grid;
            grid-template-columns: 1fr 1fr;
          }

          .jump-links a {
            justify-content: center;
            text-align: center;
          }

          .terms-document {
            padding: 24px 20px;
            border-radius: 20px;
          }

          .terms-section {
            padding: 30px 0;
          }

          .terms-content {
            font-size: 0.95rem;
            line-height: 1.78;
          }

          .terms-content ul {
            padding-left: 1.35rem;
          }

          .footer-copy {
            flex-direction: column;
            align-items: flex-start;
            gap: 9px;
          }
        }
      `}</style>
    </>
  );
}