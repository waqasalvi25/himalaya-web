import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Youtube } from "lucide-react";
import { footerInfoLinks, footerQuickLinks } from "@/components/site/navLinks";
import { images } from "@/lib/images";

const social = [
  { label: "Facebook", href: "https://facebook.com", icon: Facebook },
  { label: "Instagram", href: "https://instagram.com", icon: Instagram },
  { label: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
  { label: "YouTube", href: "https://youtube.com", icon: Youtube },
];

export function Footer() {
  return (
    <footer className="him-footer">
      <img src={images.mountains} alt="" className="him-footer-bg" />
      <div className="him-footer-shade" />

      <div className="him-container him-footer-grid">
        <div className="him-footer-brand">
          <Link to="/" aria-label="Himalaya home">
            <img src={images.footerLogo} alt="Himalaya" className="him-footer-logo" />
          </Link>
          <p>
            This text is a temporary placeholder and needs to be replaced with SEO-friendly content and relevant keywords.
          </p>
          <ul className="him-social">
            {social.map((item) => (
              <li key={item.label}>
                <a href={item.href} aria-label={item.label} target="_blank" rel="noreferrer">
                  <item.icon className="size-3.5" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3>Quick Links</h3>
          <ul className="him-footer-links">
            {footerQuickLinks.map((link) => (
              <li key={link.href}>
                <Link to={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3>Info Links</h3>
          <ul className="him-footer-links">
            {footerInfoLinks.map((link) => (
              <li key={link.label}>
                <Link to={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3>Contact</h3>
          <ul className="him-footer-contact">
            <li>
              <Phone className="size-4" />
              <a href="tel:+18005550198">+1 (800) 555-0198</a>
            </li>
            <li>
              <Mail className="size-4" />
              <a href="mailto:hello@himalayasalt.com">hello@himalayasalt.com</a>
            </li>
            <li>
              <MapPin className="size-4" />
              <span>Khewra, Punjab, Pakistan</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="him-footer-bottom">
        <div className="him-container">
          <p>© {new Date().getFullYear()} Himalaya Salt. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
