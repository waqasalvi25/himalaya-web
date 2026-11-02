import { Link } from "react-router-dom";
import { images } from "@/lib/images";

const points = [
  {
    title: "Custom Packaging",
    text: "Tailored designs and formats to match your brand.",
  },
  {
    title: "MOQ Flexibility",
    text: "Competitive minimum order quantities for all markets.",
  },
];

export function WhiteLabelSection() {
  return (
    <section className="him-section him-section-tight !pb-0">
      <div className="him-container">
        <div className="him-brand-panel">
          <img
            src={images.yourBrand}
            alt="Himalayan salt pouches and a tube on a shelf"
            className="him-brand-photo"
          />

          <div className="him-brand-copy">
            <h2 className="him-display">
              Your Brand,
              <em className="normal-em">Our Salt.</em>
            </h2>
            <p>
              We offer comprehensive private labelling services, allowing businesses worldwide to
              market our premium Himalayan salt products under their own brand identity.
            </p>
            <p>
              From custom packaging design to bespoke product formulations, we support your brand
              every step of the way — delivering quality that speaks for itself.
            </p>
            <ul className="him-brand-points">
              {points.map((point) => (
                <li key={point.title}>
                  <h3>{point.title}</h3>
                  <p>{point.text}</p>
                </li>
              ))}
            </ul>
            <Link to="/contact" className="him-btn him-btn-read">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
