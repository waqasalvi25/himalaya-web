import { Link } from "react-router-dom";
import { InquirySection } from "@/components/sections/InquirySection";
import { useRise } from "@/components/motion/Reveal";
import { images } from "@/lib/images";

const specs = [
  { label: "Material", text: "Natural Himalayan salt crystal" },
  { label: "Use", text: "Indoor decorative ambient lighting" },
  { label: "Selection", text: "Discuss shape, size, base, and presentation requirements" },
  {
    label: "Electrical details",
    text: "Confirm plug, voltage, bulb, and destination-market requirements before ordering",
  },
  { label: "Packaging", text: "Protective packing and private-label options can be discussed" },
];

const retail = [
  {
    title: "Range selection",
    text: "Discuss a coordinated selection of sizes and formats for your customer base.",
  },
  {
    title: "Presentation",
    text: "Explore packaging and care information that complements your stores.",
  },
  {
    title: "Order preparation",
    text: "Confirm the product and electrical requirements of your market before buying.",
  },
];

export function LampSection() {
  const intro = useRise<HTMLElement>(true);
  const character = useRise<HTMLElement>(true);
  const collection = useRise<HTMLElement>(true);
  const retailBlock = useRise<HTMLElement>(true);

  return (
    <>
      <section className="him-lamp">
        <div className="him-container">
          <nav className="him-about-crumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span aria-hidden="true">/</span>
            <Link to="/products">Products</Link>
            <span aria-hidden="true">/</span>
            <span>Home Decor Salt Lamp</span>
          </nav>

          <div ref={intro.ref} className={`him-lamp-intro ${intro.className}`}>
            <div>
              <p className="him-about-kicker">Wellness · Home decor</p>
              <h1>
                A natural glow.
                <br />
                <em className="normal-em">A warmer welcome.</em>
              </h1>
              <p className="him-lamp-lead">
                Decorative Himalayan salt lamps bring soft ambient light and the beauty of natural
                crystal into everyday interiors. Explore a range for home decor, gifting, and retail
                collections.
              </p>
              <Link to="#collection" className="him-btn him-btn-accent">
                Enquire About Salt Lamps
              </Link>
            </div>
            <div className="him-lamp-frame">
              <img src={images.lampDecor.glow} alt="Glowing Himalayan salt lamp on a wooden table" />
            </div>
          </div>
        </div>

        <div className="him-about-band">
          <div className="him-container">
            <div ref={character.ref} className={`him-lamp-character ${character.className}`}>
              <div className="him-lamp-frame">
                <img
                  src={images.lampDecor.bedroom}
                  alt="Salt lamp glowing on a bedside table in a bedroom"
                />
              </div>
              <div>
                <p className="him-about-kicker">Made by nature</p>
                <h2>
                  Every piece has
                  <br />
                  <em className="normal-em">its own character.</em>
                </h2>
                <p>
                  Natural variations in shape, colour, and crystal structure make each lamp
                  distinctive. Warm light highlights these individual details rather than hiding
                  them.
                </p>
                <p>
                  Choose for ambience and decoration. No therapeutic or air-purification claims are
                  made for this range.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="him-container" id="collection">
          <div ref={collection.ref} className={`him-lamp-collection ${collection.className}`}>
            <div>
              <h2>
                Build your <em className="normal-em">decor collection.</em>
              </h2>
              <div className="him-lamp-rows">
                {specs.map((item) => (
                  <div key={item.label} className="him-lamp-row">
                    <strong>{item.label}</strong>
                    <p>{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <aside className="him-lamp-care">
              <p className="him-about-kicker">Care &amp; handling</p>
              <h3>A little care, lasting character.</h3>
              <p>Keep salt lamps in a dry indoor environment, away from moisture. Salt can attract moisture from the air.</p>
              <p>
                Follow the supplied electrical and care instructions. Switch off and unplug before
                cleaning, use a dry cloth, and do not immerse in water.
              </p>
              <Link to="/request-a-quote" className="him-btn him-btn-accent">
                Ask a Product Question
              </Link>
            </aside>
          </div>
        </div>

        <div className="him-about-band">
          <div className="him-container">
            <div ref={retailBlock.ref} className={retailBlock.className}>
              <h2>
                Designed around <em className="normal-em">your retail needs.</em>
              </h2>
              <div className="him-lamp-retail">
                {retail.map((item) => (
                  <article key={item.title} className="him-lamp-card">
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
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
