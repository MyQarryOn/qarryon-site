import Link from "next/link";

export const metadata = {
  title: "Terms & Conditions | QarryOn",
  description:
    "Terms and conditions governing QarryOn luggage pickup, secure hold, transportation, and delivery services.",
};

const sections = [
  {
    title: "1. About QarryOn Services",
    content: (
      <>
        <p>
          These Terms & Conditions (“Terms”) govern luggage pickup, temporary
          holding, transportation, delivery, and related concierge services
          provided by QarryOn LLC (“QarryOn,” “we,” “us,” or “our”).
        </p>

        <p>
          QarryOn provides luggage concierge services that may include scheduled
          pickup, secure temporary holding, transportation, airport curbside
          handoffs, hotel or accommodation handoffs, event-related luggage
          coordination, and delivery.
        </p>

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
    title: "2. Service Requests and Booking Confirmation",
    content: (
      <>
        <p>
          Submitting a QarryOn intake form constitutes a service request and
          does not create a confirmed reservation.
        </p>

        <p>
          QarryOn reviews each request based on availability, service distance,
          timing, luggage quantity, storage needs, operating requirements, and
          other relevant factors. Final pricing may differ from initial website
          estimates or tier pricing when additional services or operational
          requirements apply.
        </p>

        <p>
          A booking is confirmed only after QarryOn accepts the request and any
          required payment or other confirmation requirements are completed.
        </p>
      </>
    ),
  },

  {
    title: "3. Customer Responsibilities",
    content: (
      <>
        <p>
          Customers must provide complete and accurate information, including
          pickup and delivery locations, contact information, luggage quantity,
          applicable flight information, requested service times, and relevant
          special instructions.
        </p>

        <p>
          Customers are responsible for ensuring that luggage is properly
          closed, secured, and reasonably suitable for ordinary handling and
          transportation.
        </p>

        <p>
          The Customer is responsible for all contents placed inside luggage
          tendered to QarryOn.
        </p>
      </>
    ),
  },

  {
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

        <p>
          QarryOn may refuse, suspend, or terminate service when we reasonably
          believe luggage contains dangerous, prohibited, illegal, leaking, or
          otherwise unsafe property.
        </p>

        <p>
          Customers may be responsible for losses, cleanup costs, damage,
          injuries, penalties, or other expenses arising from prohibited,
          dangerous, improperly packaged, or undisclosed items.
        </p>
      </>
    ),
  },

  {
    title: "5. Batteries and Electronic Devices",
    content: (
      <>
        <p>
          Customers must disclose damaged, defective, swollen, recalled,
          leaking, unusually large, or otherwise potentially hazardous batteries
          and battery-powered equipment before pickup.
        </p>

        <p>
          QarryOn may refuse battery-powered equipment when its condition,
          packaging, size, or characteristics create a safety concern.
        </p>
      </>
    ),
  },

  {
    title: "6. Valuable, Fragile, and Irreplaceable Property",
    content: (
      <>
        <p>
          Customers should not place unusually valuable, essential, fragile, or
          irreplaceable property in luggage transferred to QarryOn.
        </p>

        <p>
          Examples include cash, jewelry, negotiable instruments, precious
          metals, collectibles, fine art, passports, identification documents,
          prescription medications, keys, heirlooms, sensitive business
          materials, and unusually valuable electronics or professional
          equipment.
        </p>

        <p>
          QarryOn does not ordinarily open luggage or inventory its contents.
          Acceptance of luggage does not constitute acknowledgment of its
          contents or their stated value.
        </p>
      </>
    ),
  },

  {
    title: "7. Maximum Liability — $250 Per Booking",
    content: (
      <>
        <p>
          <strong>
            To the fullest extent permitted by applicable law, QarryOn’s maximum
            liability for eligible loss of or physical damage to luggage in
            QarryOn’s custody is limited to $250 per booking.
          </strong>
        </p>

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
    title: "10. Journey Updates and AirTag Add-On",
    content: (
      <>
        <p>
          QarryOn provides service-status updates that may include arrival,
          pickup, secure hold, departure for delivery, arrival at the delivery
          location, completed delivery, and service completion.
        </p>

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
    title: "11. Delivery and Authorized Recipients",
    content: (
      <>
        <p>
          Customers must provide accurate delivery instructions and identify the
          person or location authorized to receive luggage.
        </p>

        <p>
          When authorized by the Customer, delivery may be completed to a hotel
          front desk, concierge, accommodation host, event representative,
          trusted contact, or another approved recipient or location.
        </p>

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
    title: "12. Airport Service",
    content: (
      <>
        <p>
          QarryOn airport service is limited to approved curbside pickup and
          delivery locations.
        </p>

        <p>
          Customers arriving by air must collect their luggage before meeting
          QarryOn. QarryOn does not retrieve customer luggage from baggage claim
          areas or airline-controlled facilities.
        </p>

        <p>
          Customers are responsible for providing accurate flight information
          and remaining reasonably available for coordination.
        </p>

        <p>
          QarryOn cannot guarantee airline baggage acceptance, check-in,
          boarding, or flight departure. Customers remain responsible for
          complying with airline and airport deadlines.
        </p>
      </>
    ),
  },

  {
    title: "13. Additional Fees and Service Changes",
    content: (
      <>
        <p>
          Additional charges may apply for overnight or multi-day storage, rush
          requests, after-hours service, oversized or additional luggage,
          additional stops, waiting time, itinerary or destination changes,
          rerouting, redelivery, and locations outside QarryOn’s standard
          service area.
        </p>

        <p>
          When reasonably practicable, QarryOn will communicate material
          additional charges before completing the affected service.
        </p>
      </>
    ),
  },

  {
    title: "14. Delays and Schedule Changes",
    content: (
      <>
        <p>
          Pickup and delivery times are service windows or estimates unless
          QarryOn expressly states otherwise.
        </p>

        <p>
          Traffic, weather, airport congestion, road closures, accidents, flight
          disruptions, security procedures, governmental action, and similar
          circumstances may affect service timing.
        </p>

        <p>
          Customers should notify QarryOn promptly when travel plans, flights,
          destinations, or requested service times change.
        </p>
      </>
    ),
  },

  {
    title: "15. Failed Pickup or Delivery",
    content: (
      <>
        <p>
          If QarryOn cannot complete a pickup or delivery because the Customer
          or designated recipient is unavailable, unreachable, late, provides
          inaccurate information, or fails to follow agreed instructions,
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
    title: "16. Cancellations, Refunds, and Booking Changes",
    content: (
      <>
        <p>
          QarryOn reserves time, transportation capacity, and, when applicable,
          storage capacity for each confirmed booking. The following
          cancellation policy applies once a service request has been accepted
          and the booking has been confirmed.
        </p>

        <p>
          <strong>Cancellations 24 Hours or More Before Pickup.</strong>{" "}
          Customers who cancel at least 24 hours before the scheduled pickup
          time are eligible for a full refund of amounts paid for the cancelled
          service.
        </p>

        <p>
          <strong>Cancellations Less Than 24 Hours Before Pickup.</strong>{" "}
          Cancellations made less than 24 hours but at least 2 hours before the
          scheduled pickup time are eligible for a 50% refund.
        </p>

        <p>
          <strong>Cancellations Less Than 2 Hours Before Pickup.</strong>{" "}
          Cancellations made less than 2 hours before the scheduled pickup time
          are nonrefundable.
        </p>

        <p>
          <strong>No-Shows.</strong>{" "}
          A booking is nonrefundable if the Customer fails to appear, cannot be
          reached within a reasonable period, or fails to make luggage available
          at the agreed pickup location and time.
        </p>

        <p>
          <strong>After QarryOn Arrives for Pickup.</strong>{" "}
          If QarryOn has arrived at the confirmed pickup location and the service
          cannot be completed because of the Customer’s absence,
          unavailability, inaccurate information, or failure to follow agreed
          pickup instructions, the booking is nonrefundable.
        </p>

        <p>
          <strong>After Pickup.</strong>{" "}
          Once QarryOn has accepted custody of the Customer’s luggage, the
          service has commenced and the booking is nonrefundable.
        </p>

        <h3
          style={{
            margin: "28px 0 10px",
            fontSize: "1.05rem",
            color: "#10243a",
          }}
        >
          Travel Delays and Itinerary Changes
        </h3>

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

        <p>
          Changes may result in additional charges when they require additional
          mileage, waiting time, storage, overnight holding, after-hours
          service, additional stops, rerouting, or other services beyond the
          original confirmed booking.
        </p>

        <p>
          For a documented airline cancellation, significant flight disruption,
          severe weather event, or similar circumstance outside the Customer’s
          reasonable control, QarryOn may, at its discretion, offer rescheduling
          or a credit toward a future QarryOn service when a monetary refund
          would not otherwise be available under this policy.
        </p>

        <h3
          style={{
            margin: "28px 0 10px",
            fontSize: "1.05rem",
            color: "#10243a",
          }}
        >
          Cancellations by QarryOn
        </h3>

        <p>
          If QarryOn cancels a confirmed booking before service begins because
          QarryOn is unable to provide the service, the Customer will receive a
          full refund of amounts paid for services not provided.
        </p>

        <p>
          A refund may not be required when QarryOn refuses or terminates
          service because of prohibited or dangerous property, materially
          inaccurate information provided by the Customer, unsafe or unlawful
          circumstances, Customer misconduct, or another material violation of
          these Terms.
        </p>

        <h3
          style={{
            margin: "28px 0 10px",
            fontSize: "1.05rem",
            color: "#10243a",
          }}
        >
          Refund Processing
        </h3>

        <p>
          Eligible refunds will be returned to the original payment method when
          reasonably practicable. Refund processing times may vary depending on
          the Customer’s financial institution or payment provider.
        </p>
      </>
    ),
  },

  {
    title: "17. Claims for Lost or Damaged Luggage",
    content: (
      <>
        <p>
          Customers should inspect their luggage promptly following delivery and
          report suspected loss or physical damage as soon as reasonably
          possible.
        </p>

        <p>
          Claims should include the Customer’s name, booking information, a
          description of the loss or damage, photographs when available, and
          reasonable documentation establishing ownership and value.
        </p>

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
    title: "18. Right to Refuse Service",
    content: (
      <>
        <p>
          QarryOn may refuse, suspend, or terminate service when luggage,
          customer conduct, requested service conditions, or other circumstances
          create a reasonable safety, legal, operational, or security concern.
        </p>

        <p>
          QarryOn does not routinely inspect the contents of closed luggage.
          However, reasonable action may be taken when QarryOn believes luggage
          contains dangerous, illegal, prohibited, leaking, or unsafe property.
        </p>
      </>
    ),
  },

  {
    title: "19. Customer Conduct",
    content: (
      <>
        <p>
          Customers and their representatives must interact safely and
          respectfully with QarryOn personnel and service providers.
        </p>

        <p>
          QarryOn may refuse or terminate service in response to threatening,
          abusive, discriminatory, fraudulent, illegal, dangerous, or materially
          disruptive conduct.
        </p>
      </>
    ),
  },

  {
    title: "20. Third-Party Services",
    content: (
      <>
        <p>
          QarryOn may rely upon third-party payment processors, scheduling
          systems, mapping platforms, communications providers, AirTag or Apple
          services, and other technology or service providers.
        </p>

        <p>
          QarryOn is not responsible for temporary outages, inaccuracies,
          interruptions, or failures of third-party systems outside QarryOn’s
          reasonable control.
        </p>
      </>
    ),
  },

  {
    title: "21. Events Beyond QarryOn’s Control",
    content: (
      <>
        <p>
          QarryOn is not responsible for delays or failures caused by events
          beyond its reasonable control, including severe weather, natural
          disasters, accidents, road closures, civil emergencies, government
          actions, airport shutdowns, security incidents, telecommunications
          failures, or similar circumstances.
        </p>

        <p>
          QarryOn will make reasonable efforts to communicate with affected
          customers and modify or complete service when practicable.
        </p>
      </>
    ),
  },

  {
    title: "22. Privacy and Service Communications",
    content: (
      <>
        <p>
          By submitting a service request, customers authorize QarryOn to use
          the contact information provided to communicate about the requested
          service, including availability, pricing, pickup, storage,
          transportation, delivery, payment, changes, and support.
        </p>

        <p>
          Additional rules concerning collection and use of personal information
          may be addressed in a separate QarryOn Privacy Policy.
        </p>
      </>
    ),
  },

  {
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
    <main
      style={{
        minHeight: "100vh",
        background: "#f6f8fa",
        color: "#10243a",
      }}
    >
      <header
        style={{
          background: "#081d34",
          padding: "22px 24px",
        }}
      >
        <div
          style={{
            maxWidth: "1040px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "20px",
          }}
        >
          <Link
            href="/"
            style={{
              color: "white",
              fontSize: "1.4rem",
              fontWeight: 800,
              textDecoration: "none",
              letterSpacing: "-0.03em",
            }}
          >
            QarryOn
          </Link>

          <Link
            href="/"
            style={{
              color: "#ffffff",
              textDecoration: "none",
              fontSize: "0.95rem",
              opacity: 0.9,
            }}
          >
            Back to QarryOn
          </Link>
        </div>
      </header>

      <section
        style={{
          background: "#081d34",
          color: "white",
          padding: "64px 24px 76px",
        }}
      >
        <div
          style={{
            maxWidth: "860px",
            margin: "0 auto",
          }}
        >
          <p
            style={{
              margin: "0 0 16px",
              textTransform: "uppercase",
              letterSpacing: "0.14em",
              fontSize: "0.78rem",
              fontWeight: 700,
              opacity: 0.7,
            }}
          >
            QarryOn Legal
          </p>

          <h1
            style={{
              margin: "0 0 18px",
              fontSize: "clamp(2.4rem, 6vw, 4.5rem)",
              lineHeight: 0.98,
              letterSpacing: "-0.05em",
            }}
          >
            Terms & Conditions
          </h1>

          <p
            style={{
              margin: 0,
              maxWidth: "700px",
              fontSize: "1.08rem",
              lineHeight: 1.7,
              opacity: 0.8,
            }}
          >
            These Terms govern requests, bookings, luggage handling, temporary
            holding, transportation, and delivery services provided by QarryOn
            LLC.
          </p>

          <p
            style={{
              margin: "24px 0 0",
              fontSize: "0.9rem",
              opacity: 0.6,
            }}
          >
            Effective September 2, 2026
          </p>
        </div>
      </section>

      <section
        style={{
          maxWidth: "860px",
          margin: "-32px auto 0",
          padding: "0 24px 80px",
          position: "relative",
        }}
      >
        <div
          style={{
            background: "#ffffff",
            borderRadius: "22px",
            padding: "28px",
            boxShadow: "0 14px 40px rgba(8, 29, 52, 0.08)",
            marginBottom: "28px",
            border: "1px solid rgba(8,29,52,0.08)",
          }}
        >
          <p
            style={{
              margin: "0 0 7px",
              fontSize: "0.78rem",
              textTransform: "uppercase",
              letterSpacing: "0.11em",
              fontWeight: 800,
            }}
          >
            Important
          </p>

          <h2
            style={{
              margin: "0 0 10px",
              fontSize: "1.45rem",
              letterSpacing: "-0.025em",
            }}
          >
            $250 maximum liability per booking
          </h2>

          <p
            style={{
              margin: 0,
              lineHeight: 1.7,
              color: "#526171",
            }}
          >
            QarryOn’s maximum liability for eligible loss or physical damage is
            limited to $250 per booking, to the fullest extent permitted by
            applicable law. This limitation is not insurance. Please review
            Section 7 below for details.
          </p>
        </div>

        <div
          style={{
            background: "#ffffff",
            borderRadius: "22px",
            padding: "clamp(26px, 5vw, 52px)",
            boxShadow: "0 14px 40px rgba(8, 29, 52, 0.05)",
            border: "1px solid rgba(8,29,52,0.07)",
          }}
        >
          <p
            style={{
              marginTop: 0,
              marginBottom: "42px",
              lineHeight: 1.8,
              color: "#526171",
              fontSize: "1rem",
            }}
          >
            By submitting a service request, completing a confirmed booking, or
            using a QarryOn service, you acknowledge that you have read,
            understood, and agreed to these Terms.
          </p>

          {sections.map((section) => (
            <section
              key={section.title}
              style={{
                padding: "30px 0",
                borderTop: "1px solid #e7ebef",
              }}
            >
              <h2
                style={{
                  margin: "0 0 16px",
                  fontSize: "1.32rem",
                  letterSpacing: "-0.025em",
                }}
              >
                {section.title}
              </h2>

              <div
                style={{
                  lineHeight: 1.8,
                  color: "#526171",
                  fontSize: "0.98rem",
                }}
              >
                {section.content}
              </div>
            </section>
          ))}

          <section
            style={{
              padding: "30px 0 0",
              borderTop: "1px solid #e7ebef",
            }}
          >
            <h2
              style={{
                margin: "0 0 16px",
                fontSize: "1.32rem",
              }}
            >
              Contact QarryOn
            </h2>

            <p
              style={{
                lineHeight: 1.8,
                color: "#526171",
                marginBottom: 6,
              }}
            >
              Questions regarding these Terms, service policies, or claims may
              be directed to:
            </p>

            <p style={{ lineHeight: 1.8, marginTop: 14 }}>
              <strong>QarryOn LLC</strong>
              <br />
              Atlanta, Georgia
              <br />
              <a
                href="mailto:connect@myqarryon.com"
                style={{
                  color: "#10243a",
                  fontWeight: 700,
                }}
              >
                connect@myqarryon.com
              </a>
            </p>
          </section>
        </div>
      </section>

      <footer
        style={{
          background: "#081d34",
          color: "white",
          padding: "34px 24px",
          textAlign: "center",
        }}
      >
        <p style={{ margin: 0, opacity: 0.65, fontSize: "0.9rem" }}>
          © 2026 QarryOn LLC. All rights reserved.
        </p>
      </footer>
    </main>
  );
}