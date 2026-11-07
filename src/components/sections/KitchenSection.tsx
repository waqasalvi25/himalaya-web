import { Link } from "react-router-dom";
import { InquirySection } from "@/components/sections/InquirySection";
import { useRise } from "@/components/motion/Reveal";
import { images } from "@/lib/images";

const formats = [
  {
    title: "Fine grain salt",
    text: "A convenient format for everyday cooking, seasoning, and blending. Share your grain size requirements with our team.",
  },
  {
    title: "Coarse crystals",
    text: "Crystal salt selected for grinders and finishing applications. Discuss the grain size and presentation suited to your range.",
  },
  {
    title: "Retail packaging",
    text: "Retail pouches, jars, and grinder formats with packaging tailored to your brand and destination market.",
  },
];

const details = [
  { label: "Origin", text: "Himalayan Salt Range, Pakistan" },
  { label: "Applications", text: "Cooking, seasoning, grinders, and food-service supply" },
  { label: "Formats", text: "Fine and coarse grain options, confirming the required grade before ordering" },
  { label: "Packaging", text: "Retail and bulk formats; private labelling available" },
  {
    label: "Order planning",
    text: "Grain size, pack size, quantity, destination, and labelling requirements",
  },
];

export function KitchenSection() {
  const intro = useRise<HTMLElement>(true);
  const formatsBlock = useRise<HTMLElement>(true);
  const pack = useRise<HTMLElement>(true);
  const brand = useRise<HTMLElement>(true);

  return (
    <>
      <section className="him-kitchen">
        <div className="him-container">
          <nav className="him-about-crumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span aria-hidden="true">/</span>
            <Link to="/products">Products</Link>
            <span aria-hidden="true">/</span>
            <span>Kitchen and Seasoning</span>
          </nav>

          <div ref={intro.ref} className={`him-kitchen-intro ${intro.className}`}>
            <div>
              <p className="him-about-kicker">Culinary</p>
              <h1>
                Naturally distinctive.
                <br />
                <em className="normal-em">Everyday essential.</em>
              </h1>
              <p className="him-kitchen-lead">
                Himalayan pink salt for home kitchens, food service, and retail ranges. Explore
                culinary formats that celebrate the natural colour and character of salt from
                Pakistan&apos;s Himalayan Salt Range.
              </p>
              <Link to="#formats" className="him-btn him-btn-accent">
                Explore About This Range
              </Link>
            </div>
            <div className="him-kitchen-frame">
              <img src={images.kitchen.bowl} alt="Wooden bowl of coarse Himalayan pink salt" />
            </div>
          </div>
        </div>

        <div className="him-about-band" id="formats">
          <div className="him-container">
            <div ref={formatsBlock.ref} className={formatsBlock.className}>
              <p className="him-about-kicker">Choose your culinary format</p>
              <h2>
                From preparation to <em className="normal-em">the finishing touch.</em>
              </h2>
              <div className="him-kitchen-formats">
                {formats.map((item) => (
                  <article key={item.title} className="him-kitchen-format">
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="him-container">
          <div ref={pack.ref} className={`him-kitchen-pack ${pack.className}`}>
            <div>
              <h2>
                Considered from <em className="normal-em">crystal to pack.</em>
              </h2>
              <p>
                Tell us how your customers will use the salt. We can advise on suitable formats and
                the product information required before you place an order.
              </p>
              <div className="him-kitchen-frame">
                <img
                  src={images.kitchen.shelf}
                  alt="Retail shelf of packaged Himalayan pink salt"
                />
              </div>
            </div>
            <div>
              <p className="him-about-kicker">Product information</p>
              <div className="him-kitchen-rows">
                {details.map((item) => (
                  <div key={item.label} className="him-kitchen-row">
                    <strong>{item.label}</strong>
                    <p>{item.text}</p>
                  </div>
                ))}
              </div>
              <Link to="/request-a-quote" className="him-btn him-btn-accent">
                Request a Quote
              </Link>
            </div>
          </div>
        </div>

        <div className="him-about-band">
          <div className="him-container">
            <div ref={brand.ref} className={`him-kitchen-brand ${brand.className}`}>
              <div className="him-kitchen-frame">
                <img
                  src={images.kitchen.pack}
                  alt="Himalayan salt pouches and a tube on a white shelf"
                />
              </div>
              <div>
                <p className="him-about-kicker">Your brand, our salt</p>
                <h2>
                  A culinary range with <em className="normal-em">your identity.</em>
                </h2>
                <p>
                  From packaging design to format selection, our private labelling services support
                  your brand every step of the way.
                </p>
                <Link to="/private-labeling" className="him-btn him-btn-accent">
                  Explore Private Labeling
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <InquirySection />
    </>
  );
}
