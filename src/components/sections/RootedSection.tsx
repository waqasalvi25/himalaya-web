import { Link } from "react-router-dom";
import { images } from "@/lib/images";

export function RootedSection() {
  return (
    <section className="him-rooted">
      <div className="him-container him-rooted-copy">
        <h2 className="him-display">
          Rooted in Nature.
          <em className="normal-em">Inspired by the Himalayas.</em>
        </h2>
        <p>
          Himalaya Salt Company (Pvt.) Limited is a Pakistan-based manufacturer and global exporter
          of premium Himalayan salt products. Rooted in the natural heritage of Pakistan&apos;s
          Himalayan Salt Range, we bring the purity, beauty, and mineral richness of this remarkable
          natural resource to markets worldwide.
        </p>
        <Link to="/about" className="him-btn him-btn-read">
          Read More
        </Link>
      </div>

      <div className="him-container">
        <img
          src={images.rooted}
          alt="Himalayan salt pouches, bricks, and a salt lamp"
          className="him-rooted-photo"
        />
      </div>
    </section>
  );
}
