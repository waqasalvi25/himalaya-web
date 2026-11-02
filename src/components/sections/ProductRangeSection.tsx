import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { useRise } from "@/components/motion/Reveal";
import { images } from "@/lib/images";

const products = [
  {
    title: "Edible Salt",
    href: "/products/edible-salt",
    image: images.products.edible,
    alt: "Bowls of fine and coarse pink salt",
  },
  {
    title: "Salt Bricks",
    href: "/products/salt-bricks",
    image: images.products.bricks,
    alt: "Salt mine walls",
  },
  {
    title: "Salt Lamps",
    href: "/products/salt-lamps",
    image: images.products.lamp,
    alt: "Himalayan salt lamp on a wooden table",
  },
  {
    title: "Industrial Salt",
    href: "/products/industrial-salt",
    image: images.products.industrial,
    alt: "Warehouse ready for bulk salt shipments",
  },
];

export function ProductRangeSection() {
  const head = useRise<HTMLDivElement>();
  const cards = useRise<HTMLDivElement>();

  return (
    <section className="him-section him-range">
      <div className="him-container">
        <div ref={head.ref} className={`him-section-head ${head.className}`}>
          <div>
            <h2 className="him-display him-display-inline">
              Our Product <em className="normal-em">Range</em>
            </h2>
            <p>Four ways to work with Himalayan salt, from the table to the warehouse.</p>
          </div>
          <Link to="/products" className="him-btn him-btn-accent">
            View All
          </Link>
        </div>

        <div ref={cards.ref} className={`him-product-grid ${cards.className}`}>
          {products.map((product) => (
            <article key={product.href} className="him-product-card">
              <img src={product.image} alt={product.alt} />
              <div className="him-product-card-shade" />
              <div className="him-product-card-meta">
                <h3>{product.title}</h3>
                <Link to={product.href} className="him-icon-btn" aria-label={`View ${product.title}`}>
                  <ArrowUpRight className="size-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
