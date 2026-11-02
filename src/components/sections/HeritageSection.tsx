import { Link } from "react-router-dom";
import { images } from "@/lib/images";

const features = [
  {
    title: "100% Natural & Unrefined",
    text: "Nothing added and nothing taken away. Salt as the mountains left it.",
  },
  {
    title: "Himalayan Pink Crystals",
    text: "Iron-rich crystals with a clean mineral finish for kitchen and table.",
  },
  {
    title: "Carefully Hand-Selected",
    text: "Graded by crystal size for culinary, spa, and industrial use.",
  },
  {
    title: "Mined at High Altitude",
    text: "Harvested from ancient deposits in the Himalayan salt range.",
  },
];

export function HeritageSection() {
  return (
    <section className="him-section him-heritage">
      <div className="him-container him-heritage-grid">
        <div>
          <h2 className="him-display">
            Pure by Nature.
            <em className="normal-em">Rich in Heritage.</em>
          </h2>
          <p className="him-lead">
            Sourced from the ancient Himalayan Salt Range of Pakistan, our Himalayan Pink Salt is a naturally occurring mineral-rich salt, valued for its distinctive pink hues, authentic origin, and exceptional versatility. Carefully extracted and processed to preserve its natural character, it brings the purity of the mountains to kitchens and industries worldwide.
          </p>

          <ul className="him-feature-grid">
            {features.map((feature) => (
              <li key={feature.title}>
                <h3 className="him-playfair">{feature.title}</h3>
                <p>{feature.text}</p>
              </li>
            ))}
          </ul>

          <Link to="/about" className="him-btn him-btn-blush">
            Explore
          </Link>
        </div>

        <div className="him-heritage-photo">
          <img src={images.heritage} alt="Bowl of coarse Himalayan pink salt" />
        </div>
      </div>
    </section>
  );
}
