import { Link } from "react-router-dom";
import { images } from "@/lib/images";

const shots = [
  { src: images.gallery.crystals, alt: "Pink salt crystals", tall: true },
  { src: images.gallery.lamp, alt: "Salt lamp on a table" },
  { src: images.gallery.mine, alt: "Inside a salt mine" },
  { src: images.gallery.store, alt: "Pink salt prepared for the table" },
  { src: images.gallery.spa, alt: "Salt lamp in a quiet room" },
];

export function GalleryPreviewSection() {
  return (
    <section className="him-section him-gallery">
      <div className="him-container">
        <div className="him-section-head">
          <h2 className="him-display him-display-inline">
            Our <em>Gallery</em>
          </h2>
          <Link to="/gallery" className="him-btn him-btn-accent">
            View All
          </Link>
        </div>

        <div className="him-gallery-grid">
          {shots.map((shot) => (
            <figure key={shot.alt} className={shot.tall ? "is-tall" : undefined}>
              <img src={shot.src} alt={shot.alt} />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
