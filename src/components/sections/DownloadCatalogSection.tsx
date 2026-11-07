import { Link } from "react-router-dom";
import { useRise } from "@/components/motion/Reveal";
import { images } from "@/lib/images";
import { getBasename } from "@/utils/Functions";

const topics = [
  {
    title: "Product families",
    text: "Explore culinary salt, salt tiles and panels, salt lamps, and industrial and bulk supply.",
  },
  {
    title: "Product information",
    text: "Review formats and applications as a starting point for your product selection.",
  },
  {
    title: "Packaging options",
    text: "Discover possibilities for retail presentation, private labelling, and bulk requirements.",
  },
];

const answers = [
  {
    label: "Product enquiries",
    text: "Share the product and format you are interested in",
  },
  {
    label: "Tailored quotation",
    text: "Include quantity, packaging, and destination",
  },
];

const cataloguePdf = `${getBasename()}/catalogue/himalayan-salt-product-catalogue.pdf`;

export function DownloadCatalogSection() {
  const intro = useRise<HTMLDivElement>(true);
  const inside = useRise<HTMLDivElement>(true);
  const answer = useRise<HTMLDivElement>(true);

  return (
    <section className="him-catalog-page">
      <div className="him-container">
        <nav className="him-about-crumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span aria-hidden="true">/</span>
          <span>Download Catalog</span>
        </nav>
        <div ref={intro.ref} className={intro.className}>
          <h1>
            Your guide to <em className="normal-em">our range.</em>
          </h1>
          <p className="him-catalog-lead">
            Explore our complete range of Himalayan salt products, specifications, and packaging
            options.
          </p>
          <div className="him-catalog-panel">
            <img
              src={images.catalogueCover}
              alt="Himalayan salt product catalogue cover"
              className="him-catalog-cover"
            />
            <div>
              <p className="him-catalog-kicker">Product catalogue</p>
              <h2>
                Discover the details.
                <br />
                <em className="normal-em">Choose with confidence.</em>
              </h2>
              <p>
                From culinary essentials to decorative and architectural products, find an overview
                of our collection and the options to discuss with our team.
              </p>
              <p className="him-catalog-meta">
                <span>PDF document</span>
                <span>English</span>
              </p>
              <a className="him-btn get-touch" href={cataloguePdf} download>
                Download PDF
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="him-about-band">
        <div className="him-container">
          <div ref={inside.ref} className={inside.className}>
            <h2>
              Inside the <em className="normal-em">catalogue.</em>
            </h2>
            <div className="him-catalog-topics">
              {topics.map((item) => (
                <article key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="him-container">
        <div ref={answer.ref} className={`him-catalog-answer ${answer.className}`}>
          <div>
            <h2>
              Need a more specific <em className="normal-em">answer?</em>
            </h2>
            <p>
              Confirm the latest product availability, specifications, and order details directly
              with our team.
            </p>
          </div>
          <div>
            <div className="him-catalog-rows">
              {answers.map((item) => (
                <div key={item.label}>
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
    </section>
  );
}
