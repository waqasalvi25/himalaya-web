import { Link } from "react-router-dom";

type LegalSection = {
  title: string;
  text: string;
};

type LegalPageProps = {
  crumb: string;
  title: string;
  accent: string;
  lead: string;
  kicker: string;
  asideBefore: string;
  asideAccent: string;
  asideText: string;
  sections: LegalSection[];
  noteTitle: string;
  noteText: string;
  noteTo: string;
  noteLabel: string;
};

export function LegalPageSection({
  crumb,
  title,
  accent,
  lead,
  kicker,
  asideBefore,
  asideAccent,
  asideText,
  sections,
  noteTitle,
  noteText,
  noteTo,
  noteLabel,
}: LegalPageProps) {
  return (
    <section className="him-legal">
      <div className="him-container">
        <nav className="him-about-crumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span aria-hidden="true">/</span>
          <span>{crumb}</span>
        </nav>
        <h1>
          {title} <em className="normal-em">{accent}</em>
        </h1>
        <p className="him-legal-lead">{lead}</p>

        <div className="him-legal-layout">
          <aside className="him-legal-side">
            <p>{kicker}</p>
            <h2>
              {asideBefore} 
              {/* <br /> */}
              <em className="normal-em"> {asideAccent}</em>
            </h2>
            <p>{asideText}</p>
            <Link to="/contact" className="him-btn him-btn-accent">
              Contact Us
            </Link>
          </aside>

          <div className="him-legal-copy">
            {sections.map((section) => (
              <section key={section.title}>
                <h2>{section.title}</h2>
                <p>{section.text}</p>
              </section>
            ))}
            <div className="him-legal-note">
              <h2>{noteTitle}</h2>
              <p>{noteText}</p>
              <Link to={noteTo} className="him-btn him-btn-accent">
                {noteLabel}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
