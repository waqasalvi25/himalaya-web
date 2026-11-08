import { Link } from "react-router-dom";
import { InquirySection } from "@/components/sections/InquirySection";
import { useRise } from "@/components/motion/Reveal";
import { images } from "@/lib/images";

const steps = [
  {
    number: "01",
    title: "Understand the origin",
    text: "Learn why Pakistan's Himalayan Salt Range is central to the identity of the product.",
  },
  {
    number: "02",
    title: "Explore the applications",
    text: "From everyday seasoning to warm interior accents, discover the breadth of the range.",
  },
  {
    number: "03",
    title: "Plan your enquiry",
    text: "Bring the right details to the conversation, from grain size and packaging to destination.",
  },
];

const paths = [
  {
    title: "Himalayan Pink Salt",
    text: "Discover the natural character and heritage behind the range.",
    action: "Explore the Origin",
    href: "/blog/himalayan-pink-salt",
    src: images.galleryPage.mine,
    alt: "Lantern-lit tunnel inside a Himalayan salt mine",
  },
  {
    title: "Product Catalogue",
    text: "A closer look at product families, formats, and packaging.",
    action: "View Catalogue",
    href: "/download-catalog",
    src: images.galleryPage.pack,
    alt: "Himalayan salt pouches and a tube on a white shelf",
  },
  {
    title: "FAQs",
    text: "Practical answers to common product and supply questions.",
    action: "Read FAQs",
    href: "/faqs",
    src: images.kitchen.bowl,
    alt: "Wooden bowl of coarse Himalayan pink salt",
  },
];

export function BlogPageSection() {
  const intro = useRise<HTMLDivElement>(true);
  const guide = useRise<HTMLDivElement>(true);
  const explore = useRise<HTMLDivElement>(true);

  return (
    <>
      <section className="him-blog">
        <div className="him-container">
          <nav className="him-about-crumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span>Blogs</span>
          </nav>
          <div ref={intro.ref} className={intro.className}>
            <h1>
              Stories, knowledge, <em className="normal-em">and natural inspiration.</em>
            </h1>
            <p className="him-blog-lead">
              Explore the character of Himalayan salt and the practical considerations behind
              choosing the right products for your business.
            </p>
            <article className="him-blog-feature">
              <div className="him-blog-frame">
                <img
                  src={images.galleryPage.crystals}
                  alt="Close view of rough Himalayan pink salt crystals"
                />
              </div>
              <div className="him-blog-feature-copy">
                <p className="him-about-kicker">Featured · Product guides</p>
                <h2>
                  Himalayan pink salt: <em className="normal-em">from origin to application.</em>
                </h2>
                <p>
                  What makes Himalayan salt distinctive, where it fits in a product collection, and
                  what to consider before planning an order.
                </p>
                <p className="him-blog-read">5 minute read</p>
                <a className="him-btn him-btn-accent" href="#guide">
                  Read Article
                </a>
              </div>
            </article>
          </div>
        </div>

        <div className="him-about-band" id="guide">
          <div className="him-container">
            <div ref={guide.ref} className={`him-blog-guide ${guide.className}`}>
              <p className="him-about-kicker">Inside the guide</p>
              <h2>
                Get to know <em className="normal-em">the material.</em>
              </h2>
              <div className="him-blog-steps">
                {steps.map((item) => (
                  <article key={item.number}>
                    <span>{item.number}</span>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="him-container">
          <div ref={explore.ref} className={`him-blog-explore ${explore.className}`}>
            <h2>
              More ways to <em className="normal-em">explore.</em>
            </h2>
            <div className="him-blog-paths">
              {paths.map((item) => (
                <article key={item.title}>
                  <div className="him-blog-frame">
                    <img src={item.src} alt={item.alt} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <Link to={item.href} className="him-btn him-btn-accent">
                    {item.action}
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
      <InquirySection />
    </>
  );
}
