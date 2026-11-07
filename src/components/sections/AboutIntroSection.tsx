import { Link } from "react-router-dom";
import { InquirySection } from "@/components/sections/InquirySection";
import { useRise } from "@/components/motion/Reveal";
import { images } from "@/lib/images";

const guides = [
  {
    number: "01",
    title: "Authentic Origin",
    text: "Directly sourced from the Himalayan Salt Range of Pakistan, with the natural character of the mineral at the heart of our range.",
  },
  {
    number: "02",
    title: "Carefully Processed",
    text: "Attention to selection, processing, and packing lets us deliver products suited to their intended application.",
  },
  {
    number: "03",
    title: "End-to-End Support",
    text: "From private labelling and custom packaging to bulk shipments and dedicated account management, we partner with you at every stage.",
  },
];

const supports = [
  {
    title: "Our range",
    text: "Culinary salt, salt tiles and panels, salt lamps, and industrial and bulk salt.",
  },
  {
    title: "Brand support",
    text: "Private labelling, packaging design, and product format selection.",
  },
  {
    title: "Supply support",
    text: "Order planning, bulk shipments, and export coordination.",
  },
];

export function AboutIntroSection() {
  const intro = useRise<HTMLElement>(true);
  const heritage = useRise<HTMLElement>(true);
  const guideBlock = useRise<HTMLElement>(true);
  const market = useRise<HTMLElement>(true);

  return (
    <>
      <section className="him-about">
        <div className="him-container">
          <nav className="him-about-crumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span>About us</span>
          </nav>

          <div ref={intro.ref} className={`him-about-intro ${intro.className}`}>
            <div>
              <p className="him-about-kicker">About the company</p>
              <h1>
                Rooted in Nature.
                <br />
                <em className="normal-em">Inspired by the Himalayas.</em>
              </h1>
              <p className="him-about-lead">
                Himalaya Salt Company (Pvt.) Limited is a Pakistan-based manufacturer and global
                exporter of premium Himalayan salt products. We bring the purity, beauty, and
                mineral richness of this remarkable natural resource to markets worldwide.
              </p>
            </div>
            <div className="him-about-frame">
              <img src={images.aboutMine} alt="Lantern-lit tunnel inside a Himalayan salt mine" />
            </div>
          </div>

        </div>

        <div className="him-about-band">
          <div className="him-container">
            <div ref={heritage.ref} className={`him-about-heritage ${heritage.className}`}>
              <div className="him-about-frame">
                <img src={images.aboutCrystals} alt="Close view of rough Himalayan pink salt crystals" />
              </div>
              <div className="him-about-copy">
                <p className="him-about-kicker">Our natural heritage</p>
                <h2>
                  From Pakistan, <em className="normal-em">with purpose.</em>
                </h2>
                <p>
                  Our story begins in Pakistan&apos;s Himalayan Salt Range. Its ancient deposits give
                  Himalayan pink salt its distinctive colour and character.
                </p>
                <p>
                  We work with this natural material across culinary, architectural, decorative, and
                  industrial applications, supporting businesses from product selection through
                  packaging and supply.
                </p>
                <Link to="/products" className="him-btn him-btn-accent">
                  Discover Himalayan Salt
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="him-container">
          <div ref={guideBlock.ref} className={`him-about-guides ${guideBlock.className}`}>
            <p className="him-about-kicker">What guides us</p>
            <h2>
              A considered approach to <em className="normal-em">every partnership.</em> 
            </h2>
            <div className="him-about-cards">
              {guides.map((guide) => (
                <article key={guide.number} className="him-about-card">
                  <span>{guide.number}</span>
                  <h3>{guide.title}</h3>
                  <p>{guide.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="him-about-band">
          <div className="him-container">
            <div ref={market.ref} className={`him-about-market ${market.className}`}>
              <div>
                <h2>
                  Built around your <em className="normal-em">market.</em>
                </h2>
                <p>
                  Whether you are an importer, distributor, retailer, or brand owner, start with a
                  conversation about the products and formats you need.
                </p>
                <Link to="/contact" className="him-btn him-btn-accent">
                  Contact Us
                </Link>
              </div>
              <div className="him-about-rows">
                {supports.map((item) => (
                  <div key={item.title} className="him-about-row">
                    <strong>{item.title}</strong>
                    <p>{item.text}</p>
                  </div>
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
