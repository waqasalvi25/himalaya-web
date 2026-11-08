import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { CatalogueSection } from "@/components/sections/CatalogueSection";
import { InquirySection } from "@/components/sections/InquirySection";
import { PageHero } from "@/components/site/PageHero";
import { useRise } from "@/components/motion/Reveal";
import { images } from "@/lib/images";

const products = [
  {
    kicker: "Culinary",
    title: "Kitchen and Seasoning",
    href: "/products/kitchen-and-seasoning",
    image: images.products.edible,
    alt: "Bowls of fine and coarse pink salt",
  },
  {
    kicker: "Architectural",
    title: "Salt Tiles & Panels",
    href: "/products/salt-tiles-panels",
    image: images.products.bricks,
    alt: "Salt wall glowing in a lounge",
  },
  {
    kicker: "Wellness",
    title: "Home Decor Salt Lamp",
    href: "/products/home-decor-salt-lamp",
    image: images.products.lamp,
    alt: "Himalayan salt lamp on a wooden table",
  },
  {
    kicker: "Industrial",
    title: "Industrial & Bulk Salt",
    href: "/products/industrial-bulk-salt",
    image: images.products.industrial,
    alt: "Warehouse ready for bulk salt shipments",
  },
];

const needs = [
  {
    title: "Retail & food service",
    text: "Culinary formats for everyday seasoning, professional kitchens, and retail product ranges.",
  },
  {
    title: "Private labelling",
    text: "Tailored packaging and formats so Himalayan salt products carry your own brand.",
  },
  {
    title: "Bulk & project supply",
    text: "Discuss larger quantities and the application requirements of your destination market.",
  },
];

export function ProductsPageSection({ title = "Products" }: { title?: string }) {
  const intro = useRise<HTMLDivElement>(true);
  const format = useRise<HTMLDivElement>(true);
  const business = useRise<HTMLDivElement>(true);

  if (title !== "Products") {
    return <PageHero title={title} />;
  }

  return (
    <>
      <section className="him-products-page">
        <div className="him-container">
          <nav className="him-about-crumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span>Products</span>
          </nav>

          <div ref={intro.ref} className={intro.className}>
            <h1>
              Our Product <em className="normal-em">Range</em>
            </h1>
            <p className="him-products-lead">
              From culinary essentials to wellness and decorative products, our Himalayan salt range
              is as diverse as it is pure.
            </p>
            <div className="him-product-grid">
              {products.map((product) => (
                <article key={product.href} className="him-product-card">
                  <img src={product.image} alt={product.alt} />
                  <div className="him-product-card-shade" />
                  <div className="him-product-card-meta">
                    <div>
                      <p className="him-product-kicker">{product.kicker}</p>
                      <h2>{product.title}</h2>
                    </div>
                    <Link
                      to={product.href}
                      className="him-icon-btn"
                      aria-label={`View ${product.title}`}
                    >
                      <ArrowRight strokeWidth={2.25} className="size-5" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="him-about-band">
          <div className="him-container">
            <div ref={format.ref} className={`him-products-format ${format.className}`}>
              <div>
                <p className="him-about-kicker">Pick your format</p>
                <h2>
                  One natural origin. <em className="normal-em">Many possibilities.</em>
                </h2>
                <p>
                  Choose a product family to explore applications, available formats, and the
                  details to consider when planning an order. Our team can help align your selection
                  with your market and intended use.
                </p>
                <Link to="/request-a-quote" className="him-btn him-btn-accent">
                  Request a Quote
                </Link>
              </div>
              <div className="him-products-frame">
                <img
                  src={images.heritage}
                  alt="Jar of Himalayan pink salt with crystals and rosemary"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="him-container">
          <div ref={business.ref} className={`him-products-needs ${business.className}`}>
            <h2>
              Made for your <em className="normal-em">business needs.</em>
            </h2>
            <div className="him-products-needs-grid">
              {needs.map((item) => (
                <article key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
      <CatalogueSection/>
      <div className="py-9"></div>
      <InquirySection />
    </>
  );
}
