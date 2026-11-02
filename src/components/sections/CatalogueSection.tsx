import { Link } from "react-router-dom";
import { useRise } from "@/components/motion/Reveal";
import { images } from "@/lib/images";

export function CatalogueSection() {
  const banner = useRise<HTMLDivElement>();

  return (
    <section className="him-section him-section-tight !pb-0">
      <div className="him-container">
        <div ref={banner.ref} className={`him-catalogue ${banner.className}`}>
          <img
            src={images.catalogueLeft}
            alt=""
            className="him-catalogue-shot him-catalogue-shot-left"
          />
          <div className="him-catalogue-copy">
            <h2 className="him-display">Download Our Product Catalogue</h2>
            <p>
              Explore our complete range of Himalayan salt products, specifications, and packaging
              options.
            </p>
            <Link to="/contact" className="him-btn him-btn-accent">
              Download PDF
            </Link>
          </div>
          <img
            src={images.catalogueRight}
            alt=""
            className="him-catalogue-shot him-catalogue-shot-right"
          />
        </div>
      </div>
    </section>
  );
}
