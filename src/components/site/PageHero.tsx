import { Link } from "react-router-dom";

type PageHeroProps = {
  title: string;
  note?: string;
};

export function PageHero({
  title,
  note = "This page is ready for the next design. The homepage is live.",
}: PageHeroProps) {
  return (
    <section className="him-page-hero">
      <div className="him-container">
        <p className="him-kicker">Himalaya Salt</p>
        <h1 className="him-display">{title}</h1>
        <p>{note}</p>
        <Link to="/" className="him-btn him-btn-accent">
          Back to Home
        </Link>
      </div>
    </section>
  );
}
