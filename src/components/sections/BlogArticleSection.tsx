import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { InquirySection } from "@/components/sections/InquirySection";
import { useRise } from "@/components/motion/Reveal";
import { images } from "@/lib/images";

const sections = [
  { id: "origin", label: "A distinctive origin" },
  { id: "application", label: "Choosing an application" },
  { id: "formats", label: "Formats & packaging" },
  { id: "enquire", label: "Before you enquire" },
];

export function BlogArticleSection() {
  const intro = useRise<HTMLDivElement>(true);
  const [active, setActive] = useState(sections[0].id);

  useEffect(() => {
    const nodes = sections
      .map((item) => document.getElementById(item.id))
      .filter((node): node is HTMLElement => Boolean(node));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-18% 0px -55% 0px", threshold: [0.25, 0.6] },
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section className="him-article">
        <div className="him-container">
          <nav className="him-about-crumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span aria-hidden="true">/</span>
            <Link to="/blog">Blogs</Link>
            <span aria-hidden="true">/</span>
            <span>Himalayan pink salt</span>
          </nav>

          <div ref={intro.ref} className={intro.className}>
            <p className="him-about-kicker">Product guide · 5-minute read</p>
            <h1>
              Himalayan pink salt:{" "}
              <em className="normal-em">from origin to application.</em>
            </h1>
            <p className="him-article-lead">
              A practical introduction to the natural material behind our culinary, architectural,
              and decorative product range.
            </p>
            <div className="him-article-banner">
              <img
                src={images.galleryPage.crystals}
                alt="Close view of rough Himalayan pink salt crystals"
              />
            </div>
          </div>

          <div className="him-article-layout">
            <aside className="him-article-nav">
              <p>In this article</p>
              <nav aria-label="In this article">
                {sections.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={active === item.id ? "is-active" : undefined}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
              <Link to="/blog" className="him-btn him-btn-accent">
                Back to blogs
              </Link>
            </aside>

            <article className="him-article-copy blog-d">
              <section id="origin">
                <h2>
                  A distinctive <em className="normal-em">origin.</em>
                </h2>
                <p>
                  Himalayan pink salt is sourced from the ancient Himalayan Salt Range of Pakistan.
                  Its natural pink tones and crystalline texture are a defining part of its
                  character. Variations in colour and structure are part of the material, rather
                  than a uniform manufactured finish.
                </p>
                <p>
                  Understanding that origin is a useful starting point when selecting a product. It
                  connects an everyday ingredient or decorative object with the landscape and
                  natural resource behind it.
                </p>
              </section>

              <section id="application">
                <h2>
                  Choosing an <em className="normal-em">application.</em>
                </h2>
                <p>
                  In the kitchen, Himalayan salt can be considered for cooking, seasoning, and
                  grinder formats. The intended use helps determine the grain size and pack format
                  that make sense for your customers.
                </p>
                <p>
                  For interiors, salt lamps highlight the individual shapes and warm tones of
                  natural crystal. Salt tiles and panels offer a different way to work with the
                  material in decorative features. These products should be selected for their
                  appearance and intended use, without assuming therapeutic benefits.
                </p>
              </section>

              <blockquote className="him-article-note">
                Start with the application.{" "}
                <em className="normal-em">Let the right format follow.</em>
              </blockquote>

              <section id="formats" className="pt-6">
                <h2>
                  Think about <em className="normal-em">formats &amp; packaging.</em>
                </h2>
                <p>
                  A product range is about more than the material alone. Retailers may need clear
                  presentation and product information, while food-service buyers may prioritise
                  practical pack sizes. Brand owners may want to discuss private labelling and a
                  consistent identity across several products.
                </p>
                <p>
                  Bulk supply enquiries begin with a different set of questions: intended
                  application, grade, quantity, packing, and destination. Confirm the specification
                  and suitability directly with the supplier before ordering.
                </p>
              </section>

              <section id="enquire">
                <h2>
                  Before you <em className="normal-em">enquire.</em>
                </h2>
                <p>
                  Prepare a short brief with your product family, preferred format, estimated
                  quantity, packaging requirements, and destination country. Include any
                  market-specific labelling or documentation requirements you already know about.
                </p>
                <p>
                  If you are still deciding, describe the application and audience. That gives the
                  conversation a useful starting point without committing you to a final
                  specification.
                </p>
                <Link to="/products" className="him-btn him-btn-accent">
                  Explore our products
                </Link>
              </section>

              <p className="him-article-meta">Himalaya Salt Company · Product knowledge</p>
            </article>
          </div>
        </div>
      </section>
      <InquirySection />
    </>
  );
}
