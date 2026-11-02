import { Link } from "react-router-dom";
import { useRise } from "@/components/motion/Reveal";
import { images } from "@/lib/images";

const shots = [
  { src: images.gallery.crystals, alt: "Pink salt crystals", tall: true },
  { src: images.gallery.lamp, alt: "Salt lamp on a table" },
  { src: images.gallery.mine, alt: "Inside a salt mine" },
  { src: images.gallery.store, alt: "Pink salt prepared for the table" },
  { src: images.gallery.spa, alt: "Salt lamp in a quiet room" },
];

export function GalleryPreviewSection() {
  const head = useRise<HTMLDivElement>();
  const grid = useRise<HTMLDivElement>();

  return (
    <section className="him-section him-gallery">
      <div className="him-container">
        <div ref={head.ref} className={`him-section-head ${head.className}`}>
          <h2 className="him-display him-display-inline">
            Our <em className="normal-em">Gallery</em>
          </h2>
          <Link to="/gallery" className="him-btn him-btn-accent">
            View All
          </Link>
        </div>

        <div ref={grid.ref} className={`him-gallery-grid ${grid.className}`}>
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
