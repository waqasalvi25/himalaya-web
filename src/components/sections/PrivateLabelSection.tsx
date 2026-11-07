import { Link } from "react-router-dom";
import { InquirySection } from "@/components/sections/InquirySection";
import { useRise } from "@/components/motion/Reveal";
import { images } from "@/lib/images";

const services = [
  {
    title: "Custom Packaging",
    text: "Tailored designs and formats to match your brand, from presentation to the practical details of the pack.",
  },
  {
    title: "Product Selection",
    text: "Build your collection around the Himalayan salt formats best suited to your customers and market.",
  },
  {
    title: "MOQ Flexibility",
    text: "Competitive minimum order quantities for all markets. Discuss the specific format and quantity for your project.",
  },
];

const details = [
  { label: "Brand details", text: "Logo, colours, design direction, and target audience" },
  { label: "Product details", text: "Salt format, pack size, and required packaging" },
  { label: "Market details", text: "Destination, label language, and required product information" },
];

const stages = [
  {
    number: "01",
    title: "Share your vision",
    text: "Tell us about your brand, market, and the range you want to create.",
  },
  {
    number: "02",
    title: "Shape the product",
    text: "Review a shortlist of formats, packaging direction, and your requirements.",
  },
  {
    number: "03",
    title: "Confirm the details",
    text: "Agree on finish, product information, quantity, and commercial terms.",
  },
  {
    number: "04",
    title: "Plan your supply",
    text: "Coordinate production and shipment arrangements with your account contact.",
  },
];

export function PrivateLabelSection() {
  const intro = useRise<HTMLElement>(true);
  const identity = useRise<HTMLElement>(true);
  const range = useRise<HTMLElement>(true);
  const process = useRise<HTMLElement>(true);

  return (
    <>
      <section className="him-label">
        <div className="him-container">
          <nav className="him-about-crumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span>Private labeling</span>
          </nav>

          <div ref={intro.ref} className={`him-label-intro ${intro.className}`}>
            <div>
              <p className="him-about-kicker">Private labelling services</p>
              <h1>
                Your Brand,
                <br />
                <em className="normal-em">Our Salt.</em>
              </h1>
              <p className="him-label-lead">
                We offer comprehensive private labelling services, allowing businesses worldwide to
                market our premium Himalayan salt products under their own brand identity. From
                custom packaging design to bespoke product formulations, we support your brand every
                step of the way.
              </p>
              <Link to="/request-a-quote" className="him-btn him-btn-accent">
                Start Your Private Label Project
              </Link>
            </div>
            <div className="him-label-frame">
              <img
                src={images.kitchen.pack}
                alt="Private label Himalayan salt pouches and a tube on a shelf"
              />
            </div>
          </div>
        </div>

        <div className="him-about-band">
          <div className="him-container">
            <div ref={identity.ref} className={identity.className}>
              <h2>
                Your identity. <em className="normal-em">Thoughtfully delivered.</em>
              </h2>
              <div className="him-label-services">
                {services.map((item) => (
                  <article key={item.title} className="him-label-card">
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="him-container">
          <div ref={range.ref} className={`him-label-range ${range.className}`}>
            <div className="him-label-frame">
              <img
                src={images.kitchen.shelf}
                alt="Retail shelf of privately labelled Himalayan salt products"
              />
            </div>
            <div>
              <p className="him-about-kicker">Build a coherent range</p>
              <h2>
                From an idea to <em className="normal-em">your own collection.</em>
              </h2>
              <p>
                Consider how your product will be used, displayed, and replenished. Together, we can
                discuss a packaging direction that balances your brand identity with the needs of
                the product.
              </p>
              <div className="him-label-rows">
                {details.map((item) => (
                  <div key={item.label} className="him-label-row">
                    <strong>{item.label}</strong>
                    <p>{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="him-about-band">
          <div className="him-container">
            <div ref={process.ref} className={process.className}>
              <p className="him-about-kicker">A collaborative process</p>
              <h2>
                Support at <em className="normal-em">every stage.</em>
              </h2>
              <div className="him-label-stages">
                {stages.map((stage) => (
                  <article key={stage.number} className="him-label-stage">
                    <span>{stage.number}</span>
                    <h3>{stage.title}</h3>
                    <p>{stage.text}</p>
                  </article>
                ))}
              </div>
              <Link to="/request-a-quote" className="him-btn him-btn-accent">
                Discuss Your Project
              </Link>
            </div>
          </div>
        </div>
      </section>
      <InquirySection />
    </>
  );
}
