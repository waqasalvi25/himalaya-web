import { useState } from "react";
import { Link } from "react-router-dom";
import { InquirySection } from "@/components/sections/InquirySection";
import { useRise } from "@/components/motion/Reveal";
import { images } from "@/lib/images";

const filters = [
  { id: "all", label: "All photos" },
  { id: "natural", label: "Natural salt" },
  { id: "products", label: "Products" },
  { id: "interiors", label: "Interiors" },
] as const;

type FilterId = (typeof filters)[number]["id"];

const mosaic = [
  {
    id: "crystals",
    filter: "natural" as const,
    title: "Beauty in the crystal",
    text: "The natural textures and pink tones of Himalayan salt.",
    src: images.galleryPage.crystals,
    alt: "Close view of rough Himalayan pink salt crystals",
    tall: true,
  },
  {
    id: "mine",
    filter: "natural" as const,
    title: "Where the story begins",
    text: "Inside the salt landscape of Pakistan.",
    src: images.galleryPage.mine,
    alt: "Lantern-lit tunnel inside a Himalayan salt mine",
    tall: false,
  },
  {
    id: "shelf",
    filter: "products" as const,
    title: "From source to shelf",
    text: "Culinary formats and considered product presentation.",
    src: images.galleryPage.shelf,
    alt: "Retail shelf of packaged Himalayan pink salt",
    tall: false,
  },
];

export function GalleryPageSection() {
  const [filter, setFilter] = useState<FilterId>("all");
  const intro = useRise<HTMLElement>(true);
  const spaces = useRise<HTMLElement>(true);
  const detail = useRise<HTMLElement>(true);
  const visible = mosaic.filter((item) => filter === "all" || item.filter === filter);
  const showSpaces = filter === "all" || filter === "interiors";
  const showDetail = filter === "all" || filter === "products";

  return (
    <>
      <section className="him-gallery-page">
        <div className="him-container">
          <nav className="him-about-crumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span>Gallery</span>
          </nav>

          <div ref={intro.ref} className={intro.className}>
            <h1>
              Our <em className="normal-em">Gallery</em>
            </h1>
            <p className="him-gallery-lead">
              A closer look at Himalayan salt: its natural origins, considered products, and the
              spaces it inspires.
            </p>
            <div className="him-gallery-filters" role="tablist" aria-label="Gallery filters">
              {filters.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={filter === item.id}
                  className={filter === item.id ? "is-active" : ""}
                  onClick={() => setFilter(item.id)}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {visible.length > 0 && filter === "all" && (
              <div className="him-gallery-mosaic is-featured">
                <article className="him-gallery-card is-tall">
                  <div className="him-gallery-frame">
                    <img src={mosaic[0].src} alt={mosaic[0].alt} />
                  </div>
                  <h2>{mosaic[0].title}</h2>
                  <p>{mosaic[0].text}</p>
                </article>
                <div className="him-gallery-stack">
                  {mosaic.slice(1).map((item) => (
                    <article key={item.id} className="him-gallery-card">
                      <div className="him-gallery-frame">
                        <img src={item.src} alt={item.alt} />
                      </div>
                      <h2>{item.title}</h2>
                      <p>{item.text}</p>
                    </article>
                  ))}
                </div>
              </div>
            )}

            {visible.length > 0 && filter !== "all" && (
              <div className="him-gallery-mosaic">
                {visible.map((item) => (
                  <article key={item.id} className="him-gallery-card">
                    <div className="him-gallery-frame">
                      <img src={item.src} alt={item.alt} />
                    </div>
                    <h2>{item.title}</h2>
                    <p>{item.text}</p>
                  </article>
                ))}
              </div>
            )}
          </div>
        </div>

        {showSpaces && (
          <div className="him-about-band">
            <div className="him-container">
              <div ref={spaces.ref} className={spaces.className}>
                <p className="him-about-kicker">Salt in everyday spaces</p>
                <h2>
                  Natural character. <em className="normal-em">New perspectives.</em>
                </h2>
                <div className="him-gallery-spaces">
                  <article>
                    <div className="him-gallery-frame">
                      <img
                        src={images.lampDecor.bedroom}
                        alt="Salt lamp glowing on a bedside table"
                      />
                    </div>
                    <h3>A warmer atmosphere</h3>
                    <p>Soft ambient light brings out the character of salt crystal.</p>
                  </article>
                  <article>
                    <div className="him-gallery-frame">
                      <img
                        src={images.tiles.spa}
                        alt="Spa loungers in front of a glowing salt tile wall"
                      />
                    </div>
                    <h3>Material meets space</h3>
                    <p>Salt surfaces as a distinctive architectural feature.</p>
                  </article>
                </div>
              </div>
            </div>
          </div>
        )}

        {showDetail && (
          <div className="him-container">
            <div ref={detail.ref} className={`him-gallery-detail ${detail.className}`}>
              <div className="him-gallery-frame">
                <img
                  src={images.galleryPage.pack}
                  alt="Himalayan salt pouches and a tube on a white shelf"
                />
              </div>
              <div>
                <p className="him-about-kicker">Capture the collection</p>
                <h2>
                  See the detail. <em className="normal-em">Find your direction.</em>
                </h2>
                <p>
                  Use our gallery as a starting point for your next product range or interior
                  project. Our team can help you explore formats and applications.
                </p>
              </div>
            </div>
          </div>
        )}
      </section>
      <InquirySection />
    </>
  );
}
