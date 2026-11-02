import { Link } from "react-router-dom";
import { usePageMeta } from "@/hooks/usePageMeta";

export default function NotFound() {
  usePageMeta({ title: "Page not found | Himalaya Salt" });

  return (
    <main className="him-page-hero">
      <div className="him-container">
        <p className="him-kicker">404</p>
        <h1 className="him-display">Page not found</h1>
        <p>The page you are looking for does not exist.</p>
        <Link to="/" className="him-btn him-btn-accent">
          Back to Home
        </Link>
      </div>
    </main>
  );
}
