import { Link } from "react-router-dom";
import { InquirySection } from "@/components/sections/InquirySection";
import { useRise } from "@/components/motion/Reveal";
import { images } from "@/lib/images";

const traits = [
  {
    title: "100% Natural & Authentic",
    text: "Sourced from the ancient, unpolluted salt deposits nestled deep within the Himalayan Salt Range in Pakistan.",
  },
  {
    title: "Distinctive Pink Crystals",
    text: "Recognisable for its natural pink tones and unique crystal formations. Colour varies with the natural material.",
  },
  {
    title: "Carefully Processed",
    text: "Handled with care to maintain its natural quality and consistency, with formats selected for the application.",
  },
  {
    title: "Versatile Applications",
    text: "Suitable for culinary use, food processing, salt lamps, wellness products, and various industrial applications.",
  },
];

const uses = [
  {
    title: "Kitchen and Seasoning",
    text: "Discuss grain size, retail formats, and food-service needs.",
  },
  {
    title: "Interiors & decor",
    text: "Explore natural crystal lighting and architectural salt features.",
  },
  {
    title: "Bulk supply",
    text: "Share the intended use and quantity so the right specification can be discussed.",
  },
];

export function HimalayanPinkSaltSection() {
  const intro = useRise<HTMLElement>(true);
  const traitsBlock = useRise<HTMLElement>(true);
  const range = useRise<HTMLElement>(true);
  const usesBlock = useRise<HTMLElement>(true);

  return (
    <>
      <section className="him-salt">
        <div className="him-container">
          <nav className="him-about-crumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span aria-hidden="true">/</span>
            <Link to="/products">Products</Link>
            <span aria-hidden="true">/</span>
            <span>Himalayan Pink Salt</span>
          </nav>

          <div ref={intro.ref} className={`him-salt-intro ${intro.className}`}>
            <div>
              <p className="him-about-kicker">Origin &amp; character</p>
              <h1>
                Pure by Nature.
                <br />
                <em className="normal-em">Rich in Heritage.</em>
              </h1>
              <p className="him-salt-lead">
                Sourced from the ancient Himalayan Salt Range of Pakistan, our Himalayan Pink Salt
                is a naturally occurring mineral-rich salt, valued for its distinctive pink hues,
                authentic origin, and exceptional versatility.
              </p>
              <Link to="/products" className="him-btn him-btn-accent">
                Explore Our Products
              </Link>
            </div>
            <div className="him-salt-frame">
              <img
                src={images.heritage}
                alt="Jar of Himalayan pink salt with crystals and rosemary"
              />
            </div>
          </div>
        </div>

        <div className="him-about-band">
          <div className="him-container">
            <div ref={traitsBlock.ref} className={`him-salt-traits ${traitsBlock.className}`}>
              {traits.map((item) => (
                <article key={item.title} className="him-salt-trait">
                  <h2>{item.title}</h2>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="him-container">
          <div ref={range.ref} className={`him-salt-range ${range.className}`}>
            <div className="him-salt-frame">
              <img src={images.aboutMine} alt="Lantern-lit tunnel inside a Himalayan salt mine" />
            </div>
            <div>
              <p className="him-about-kicker">The Himalayan Salt Range</p>
              <h2>
                A natural resource. <em className="normal-em">A lasting heritage.</em>
              </h2>
              <p>
                The origin of the salt is integral to its identity. From raw crystal to finished
                product, its distinctive appearance connects everyday use with the landscape it
                comes from.
              </p>
              <p>
                Our range translates that natural character into products for kitchens, interiors,
                and businesses around the world.
              </p>
              <Link to="/about" className="him-btn him-btn-accent">
                About the Company
              </Link>
            </div>
          </div>
        </div>

        <div className="him-about-band">
          <div className="him-container">
            <div ref={usesBlock.ref} className={`him-salt-uses ${usesBlock.className}`}>
              <h2>
                Choose the right salt for <em className="normal-em">your application.</em>
              </h2>
              <div className="him-salt-use-grid">
                {uses.map((item) => (
                  <article key={item.title}>
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
