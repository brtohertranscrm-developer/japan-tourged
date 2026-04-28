import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg fixed-top navbar-main ${scrolled ? "scrolled" : ""}`}>
      <div className="container">
        <Link href="/" className="navbar-brand fw-bold fs-5 text-decoration-none d-flex align-items-center gap-1">
          <span style={{ color: "#e8403a" }}>🇯🇵 Japan</span>
          <span style={{ color: "#111827" }}>Tourged</span>
        </Link>

        <button
          className="navbar-toggler border-0 shadow-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-1 pt-3 pt-lg-0">
            <li className="nav-item">
              <Link href="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link href="/about" className="nav-link">About</Link>
            </li>
            <li className="nav-item dropdown">
              <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                Paket Trip
              </a>
              <ul className="dropdown-menu">
                <li><Link href="/packages/private-trip" className="dropdown-item">🗾 Private Trip</Link></li>
                <li><Link href="/packages/one-day-tour" className="dropdown-item">🌅 One Day Tour</Link></li>
                <li><Link href="/packages/company-trip" className="dropdown-item">🏢 Company Trip</Link></li>
                <li><Link href="/packages/honeymoon" className="dropdown-item">💑 Honeymoon</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link href="/blog" className="nav-link">Blog</Link>
            </li>
            <li className="nav-item ms-lg-2">
              <a
                href="https://wa.me/62XXXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link btn-nav-cta"
              >
                💬 Konsultasi Gratis
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
