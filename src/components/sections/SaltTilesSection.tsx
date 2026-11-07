import { Link } from "react-router-dom";
import { InquirySection } from "@/components/sections/InquirySection";
import { useRise } from "@/components/motion/Reveal";
import { images } from "@/lib/images";

const features = [
  {
    title: "Feature walls",
    text: "Introduce a natural focal point to reception areas, lounges, and thoughtfully designed interiors.",
  },
  {
    title: "Backlit installations",
    text: "Explore the interplay of light and translucent salt. Plan lighting, support, and access with your installer.",
  },
  {
    title: "Wellness interiors",
    text: "Create a warm material palette for spa and relaxation spaces without relying on unsubstantiated health claims.",
  },
];

const details = [
  { label: "Material", text: "Natural Himalayan salt; tone and texture vary" },
  { label: "Project details", text: "Wall area, preferred format, lighting concept, and destination" },
  {
    label: "Installation",
    text: "Confirm support, fixing, moisture conditions, and care with a qualified installer",
  },
];

const steps = [
  {
    number: "01",
    title: "Share your brief",
    text: "Tell us about the space, intended use, and your design direction.",
  },
  {
    number: "02",
    title: "Confirm the format",
    text: "Discuss tile or panel dimensions, finish, and the quantity required.",
  },
  {
    number: "03",
    title: "Plan the supply",
    text: "Review packing, destination, and delivery requirements before ordering.",
  },
];

export function SaltTilesSection() {
  const intro = useRise<HTMLElement>(true);
  const featureBlock = useRise<HTMLElement>(true);
  const plan = useRise<HTMLElement>(true);
  const enquiry = useRise<HTMLElement>(true);

  return (
    <>
      <section className="him-tiles">
        <div className="him-container">
          <nav className="him-about-crumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span aria-hidden="true">/</span>
            <Link to="/products">Products</Link>
            <span aria-hidden="true">/</span>
            <span>Salt Tiles &amp; Panels</span>
          </nav>

          <div ref={intro.ref} className={`him-tiles-intro ${intro.className}`}>
            <div>
              <p className="him-about-kicker">Architectural</p>
              <h1>
                Natural texture.
                <br />
                <em className="normal-em">Remarkable spaces.</em>
              </h1>
              <p className="him-tiles-lead">
                Bring the warm tones and unique crystalline texture of Himalayan salt into interior
                projects. Salt tiles and panels create distinctive features for hospitality,
                wellness, and decorative spaces.
              </p>
              <Link to="#enquiry" className="him-btn him-btn-accent">
                Discuss Your Project
              </Link>
            </div>
            <div className="him-tiles-frame">
              <img
                src={images.tiles.lounge}
                alt="Curved backlit Himalayan salt tile wall in a lounge"
              />
            </div>
          </div>
        </div>

        <div className="him-about-band">
          <div className="him-container">
            <div ref={featureBlock.ref} className={`him-tiles-features ${featureBlock.className}`}>
              {features.map((item) => (
                <article key={item.title} className="him-tiles-feature">
                  <h2>{item.title}</h2>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="him-container">
          <div ref={plan.ref} className={`him-tiles-plan ${plan.className}`}>
            <div className="him-tiles-frame">
              <img
                src={images.tiles.spa}
                alt="Spa loungers in front of a glowing salt tile wall"
              />
            </div>
            <div>
              <p className="him-about-kicker">Plan your installation</p>
              <h2>
                A considered finish, <em className="normal-em">from the start.</em>
              </h2>
              <p>
                Every space has different requirements. Share drawings, dimensions, and the intended
                installation environment so we can discuss product suitability.
              </p>
              <div className="him-tiles-rows">
                {details.map((item) => (
                  <div key={item.label} className="him-tiles-row">
                    <strong>{item.label}</strong>
                    <p>{item.text}</p>
                  </div>
                ))}
              </div>
              <Link to="/request-a-quote" className="him-btn him-btn-accent">
                Request Project Information
              </Link>
            </div>
          </div>
        </div>

        <div className="him-about-band" id="enquiry">
          <div className="him-container">
            <div ref={enquiry.ref} className={enquiry.className}>
              <h2>
                From initial idea to <em className="normal-em">project enquiry.</em>
              </h2>
              <div className="him-tiles-steps">
                {steps.map((step) => (
                  <article key={step.number} className="him-tiles-step">
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
