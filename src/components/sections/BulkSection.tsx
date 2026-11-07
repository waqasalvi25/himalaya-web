import { Link } from "react-router-dom";
import { InquirySection } from "@/components/sections/InquirySection";
import { useRise } from "@/components/motion/Reveal";
import { images } from "@/lib/images";

const audiences = [
  {
    title: "Importers & distributors",
    text: "Plan stock requirements, packing preferences, and destination needs for your market.",
  },
  {
    title: "Manufacturers",
    text: "Discuss the intended application and confirm the grade and processing requirements before supply.",
  },
  {
    title: "Growing brands",
    text: "Source bulk formats for your own packing operation or explore our private labelling services.",
  },
];

const specs = [
  { label: "Intended application", text: "Describe how the salt will be processed or used" },
  { label: "Product specification", text: "Required grade, grain size, colour, and any testing needs" },
  { label: "Quantity & packing", text: "Order volume, preferred bag size, and pallet requirements" },
  { label: "Destination", text: "Country, delivery location, and required shipping terms" },
  {
    label: "Documentation",
    text: "Share any market-specific or product documentation requirements",
  },
];

const steps = [
  {
    number: "01",
    title: "Define",
    text: "Share your intended use, specification, and expected volumes.",
  },
  {
    number: "02",
    title: "Review",
    text: "Confirm product details, packing, commercial terms, and documents.",
  },
  {
    number: "03",
    title: "Coordinate",
    text: "Agree the order schedule and shipment arrangements with our team.",
  },
];

export function BulkSection() {
  const intro = useRise<HTMLElement>(true);
  const audienceBlock = useRise<HTMLElement>(true);
  const spec = useRise<HTMLElement>(true);
  const stepsBlock = useRise<HTMLElement>(true);

  return (
    <>
      <section className="him-bulk">
        <div className="him-container">
          <nav className="him-about-crumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span aria-hidden="true">/</span>
            <Link to="/products">Products</Link>
            <span aria-hidden="true">/</span>
            <span>Industrial &amp; Bulk Salt</span>
          </nav>

          <div ref={intro.ref} className={`him-bulk-intro ${intro.className}`}>
            <div>
              <p className="him-about-kicker">Industrial</p>
              <h1>
                Natural resources.
                <br />
                <em className="normal-em">Business-scale supply.</em>
              </h1>
              <p className="him-bulk-lead">
                Bulk Himalayan salt supply for importers, distributors, and businesses with
                application-specific requirements. Start with the grade, quantity, and destination
                you need, and we will help shape the supply conversation.
              </p>
              <Link to="/request-a-quote" className="him-btn him-btn-accent">
                Request a Bulk Quote
              </Link>
            </div>
            <div className="him-bulk-frame">
              <img
                src={images.bulk.warehouse}
                alt="Pallets of Himalayan pink salt blocks stored in a warehouse"
              />
            </div>
          </div>
        </div>

        <div className="him-about-band">
          <div className="him-container">
            <div ref={audienceBlock.ref} className={`him-bulk-audiences ${audienceBlock.className}`}>
              {audiences.map((item) => (
                <article key={item.title} className="him-bulk-card">
                  <h2>{item.title}</h2>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="him-container">
          <div ref={spec.ref} className={`him-bulk-spec ${spec.className}`}>
            <div>
              <p className="him-about-kicker">Specification first</p>
              <h2>
                The right supply starts
                <br />
                with <em className="normal-em">the right details.</em>
              </h2>
              <p>
                Requirements vary by application. Confirm suitability, documentation, and product
                specifications with our team before placing an order.
              </p>
              <Link to="/request-a-quote" className="him-btn him-btn-accent">
                Send Your Requirements
              </Link>
            </div>
            <div className="him-bulk-rows">
              {specs.map((item) => (
                <div key={item.label} className="him-bulk-row">
                  <strong>{item.label}</strong>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="him-about-band">
          <div className="him-container">
            <div ref={stepsBlock.ref} className={stepsBlock.className}>
              <h2>
                Clear steps. <em className="normal-em">Coordinated supply.</em>
              </h2>
              <div className="him-bulk-steps">
                {steps.map((step) => (
                  <article key={step.number} className="him-bulk-step">
                    <span>{step.number}</span>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <InquirySection />
    </>
  );
}
