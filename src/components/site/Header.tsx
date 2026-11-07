import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ChevronDown, Download, Menu, X } from "lucide-react";
import { Logo } from "@/components/site/Logo";
import { navLinks, type NavLink as NavItem } from "@/components/site/navLinks";

function DesktopItem({ item }: { item: NavItem }) {
  if (!item.children) {
    return (
      <li>
        <NavLink
          to={item.href}
          end={item.href === "/"}
          className={({ isActive }) => `him-nav-link${isActive ? " is-active" : ""}`}
        >
          {item.label}
        </NavLink>
      </li>
    );
  }

  return (
    <li className="him-nav-dropdown">
      <NavLink
        to={item.href}
        className={({ isActive }) => `him-nav-link${isActive ? " is-active" : ""}`}
      >
        {item.label}
        <ChevronDown className="size-3.5 opacity-70" />
      </NavLink>
      <ul className="him-nav-submenu">
        {item.children.map((child) => (
          <li key={child.href}>
            <Link to={child.href}>{child.label}</Link>
          </li>
        ))}
      </ul>
    </li>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
    setOpenGroup(null);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="him-header">
      <div className="him-container him-header-bar">
        <Link to="/" className="him-logo-link" aria-label="Himalaya home">
          <Logo />
        </Link>

        <nav className="him-desktop-nav" aria-label="Main">
          <ul className="him-nav-list">
            {navLinks.map((item) => (
              <DesktopItem key={item.href} item={item} />
            ))}
          </ul>
        </nav>

        <div className="him-header-actions">
          <Link to="/download-catalog" className="him-catalog-link">
            Download Catalog
            <Download className="size-3.5" strokeWidth={2.25} />
          </Link>
          <Link to="/request-a-quote" className="him-btn him-btn-quote">
            Request a Quote
          </Link>
        </div>

        <button
          type="button"
          className="him-burger"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <button
        type="button"
        className={`him-offcanvas-backdrop ${open ? "is-open" : ""}`}
        aria-label="Close menu"
        tabIndex={open ? 0 : -1}
        onClick={() => setOpen(false)}
      />

      <aside className={`him-offcanvas ${open ? "is-open" : ""}`} aria-hidden={!open}>
        <div className="him-offcanvas-head">
          <Logo />
          <button type="button" className="him-offcanvas-close" aria-label="Close menu" onClick={() => setOpen(false)}>
            <X className="size-5" />
          </button>
        </div>
        <ul className="him-mobile-list">
          {navLinks.map((item) => (
            <li key={item.href}>
              {item.children ? (
                <>
                  <button
                    type="button"
                    className="him-mobile-parent"
                    onClick={() => setOpenGroup((value) => (value === item.href ? null : item.href))}
                  >
                    <span>{item.label}</span>
                    <ChevronDown className={`size-4 ${openGroup === item.href ? "rotate-180" : ""}`} />
                  </button>
                  <ul className={`him-mobile-sub ${openGroup === item.href ? "is-open" : ""}`}>
                    <li>
                      <Link to={item.href}>Overview</Link>
                    </li>
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link to={child.href}>{child.label}</Link>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <Link to={item.href}>{item.label}</Link>
              )}
            </li>
          ))}
        </ul>
        <div className="him-mobile-actions">
          <Link to="/download-catalog" className="him-btn him-btn-outline">
            Download Catalog
          </Link>
          <Link to="/request-a-quote" className="him-btn him-btn-quote">
            Request a Quote
          </Link>
        </div>
      </aside>
    </header>
  );
}
