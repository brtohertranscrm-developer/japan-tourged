import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top transition-all ${
        scrolled ? "navbar-scrolled bg-white" : "navbar-dark"
      }`}
      style={{ transition: "all 0.3s ease", padding: "1rem 0" }}
    >
      <div className="container">
        <Link href="/" className="navbar-brand fw-bold fs-4 text-decoration-none">
          <span style={{ color: scrolled ? "#c0392b" : "#f39c12" }}>Japan</span>
          <span style={{ color: scrolled ? "#1a1a2e" : "#fff" }}> Tourged</span>
        </Link>

        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-1">
            <li className="nav-item">
              <Link href="/" className={`nav-link fw-medium ${scrolled ? "text-dark" : "text-white"}`}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about" className={`nav-link fw-medium ${scrolled ? "text-dark" : "text-white"}`}>
                About
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                href="#"
                className={`nav-link dropdown-toggle fw-medium ${scrolled ? "text-dark" : "text-white"}`}
                data-bs-toggle="dropdown"
              >
                Paket Trip
              </a>
              <ul className="dropdown-menu border-0 shadow">
                <li><Link href="/packages/private-trip" className="dropdown-item">Private Trip</Link></li>
                <li><Link href="/packages/one-day-tour" className="dropdown-item">One Day Tour</Link></li>
                <li><Link href="/packages/company-trip" className="dropdown-item">Company Trip</Link></li>
                <li><Link href="/packages/honeymoon" className="dropdown-item">Honeymoon</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link href="/blog" className={`nav-link fw-medium ${scrolled ? "text-dark" : "text-white"}`}>
                Blog
              </Link>
            </li>
            <li className="nav-item ms-lg-2">
              <a
                href="https://wa.me/62XXXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm fw-semibold px-4 py-2"
                style={{
                  background: "#c0392b",
                  color: "#fff",
                  borderRadius: "50px",
                  border: "none",
                }}
              >
                Konsultasi Gratis
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
