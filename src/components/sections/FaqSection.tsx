import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { InquirySection } from "@/components/sections/InquirySection";
import { useRise } from "@/components/motion/Reveal";

const groups = [
  {
    id: "products",
    title: "Products & origin",
    items: [
      {
        question: "Where does your Himalayan salt come from?",
        answer:
          "Our Himalayan salt is sourced from the Himalayan Salt Range of Pakistan. The range includes products for culinary, decorative, architectural, and industrial applications.",
      },
      {
        question: "Which products do you offer?",
        answer:
          "Our product families are Kitchen and Seasoning, Salt Tiles & Panels, Home Decor Salt Lamp, and Industrial & Bulk Salt. Explore the product pages or catalogue to find the range closest to your needs.",
      },
      {
        question: "Why do colour and crystal shapes vary?",
        answer:
          "Salt is a natural material. Its pink tones, textures, and crystal formations can vary. Discuss any appearance or grading requirements with our team before ordering.",
      },
    ],
  },
  {
    id: "labelling",
    title: "Private labelling",
    items: [
      {
        question: "Can I sell the products under my own brand?",
        answer:
          "Yes. We offer private labelling services, including tailored packaging designs and formats. Share your brand direction, preferred products, and destination market to begin.",
      },
      {
        question: "What is the minimum order quantity?",
        answer:
          "Minimum quantities depend on the product, format, and packaging requirements. Contact our team with your intended range so the relevant minimum can be confirmed.",
      },
    ],
  },
  {
    id: "orders",
    title: "Orders & supply",
    items: [
      {
        question: "What information is needed for a quotation?",
        answer:
          "Include the product, specification or format, estimated quantity, preferred packaging, and destination. Add any labelling, documentation, or delivery requirements you already know.",
      },
      {
        question: "Do you supply international markets?",
        answer:
          "Himalaya Salt Company is a Pakistan-based manufacturer and global exporter. Share your destination and requirements so our team can discuss supply and shipping arrangements.",
      },
      {
        question: "How do I confirm specifications and delivery details?",
        answer:
          "Confirm all product specifications, availability, commercial terms, and shipment arrangements directly with our team before ordering. A website enquiry does not confirm an order.",
      },
    ],
  },
  {
    id: "care",
    title: "Care & use",
    items: [
      {
        question: "How should salt lamps and salt features be cared for?",
        answer:
          "Keep decorative salt products away from moisture and follow the supplied care instructions. For electrical products, confirm the destination-market requirements and unplug before cleaning. Architectural installations should be assessed by a qualified installer.",
      },
    ],
  },
];

export function FaqSection() {
  const intro = useRise<HTMLDivElement>(true);
  const [open, setOpen] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(groups.flatMap((group) => group.items.map((item) => [item.question, true]))),
  );
  const [active, setActive] = useState(groups[0].id);

  useEffect(() => {
    const nodes = groups
      .map((group) => document.getElementById(group.id))
      .filter((node): node is HTMLElement => Boolean(node));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-18% 0px -50% 0px", threshold: [0.2, 0.5] },
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section className="him-faq">
        <div className="him-container">
          <nav className="him-about-crumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span>FAQs</span>
          </nav>

          <div ref={intro.ref} className={intro.className}>
            <h1>
              Questions, <em className="normal-em">answered.</em>
            </h1>
            <p className="him-faq-lead">
              Helpful information about our products, private labelling, and ordering. For a
              requirement specific to your business, speak with our team.
            </p>
          </div>

          <div className="him-faq-layout">
            <aside className="him-faq-side">
              <p>Browse by topic</p>
              <nav aria-label="FAQ topics">
                {groups.map((group) => (
                  <a
                    key={group.id}
                    href={`#${group.id}`}
                    className={active === group.id ? "is-active" : undefined}
                  >
                    {group.title}
                  </a>
                ))}
              </nav>
              <h2>Still have a question?</h2>
              <p className="him-faq-side-note">Tell us what you need to know.</p>
              <Link to="/contact" className="him-btn him-btn-accent">
                Contact Us
              </Link>
            </aside>

            <div className="him-faq-groups">
              {groups.map((group) => (
                <section key={group.id} id={group.id}>
                  <h2>{group.title}</h2>
                  {group.items.map((item) => {
                    const isOpen = open[item.question];
                    return (
                      <article key={item.question} className={isOpen ? "is-open" : undefined}>
                        <h3>
                          <button
                            type="button"
                            aria-expanded={isOpen}
                            onClick={() =>
                              setOpen((current) => ({
                                ...current,
                                [item.question]: !current[item.question],
                              }))
                            }
                          >
                            <span>{item.question}</span>
                            <span className="him-faq-mark" aria-hidden="true" />
                          </button>
                        </h3>
                        {isOpen && <p>{item.answer}</p>}
                      </article>
                    );
                  })}
                </section>
              ))}
            </div>
          </div>
        </div>
      </section>
      <InquirySection />
    </>
  );
}
