import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer pt-5 pb-3">
      <div className="container">
        <div className="row g-4 mb-4">
          <div className="col-lg-4">
            <div className="footer-brand mb-3">
              <img src="/tourged-logo.svg" alt="Tourged Travel" className="footer-brand-logo" />
            </div>
            <p className="small" style={{ lineHeight: 1.8 }}>
              Curated Japan trips with personal service and custom itineraries
              designed around your travel goals.
            </p>
            <div className="d-flex gap-2 mt-3">
              {[
                { icon: "📸", label: "Instagram", href: "#" },
                { icon: "▶️", label: "YouTube", href: "#" },
                { icon: "💬", label: "WhatsApp", href: "#" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="social-link text-decoration-none"
                  aria-label={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="col-6 col-lg-2">
            <h6 className="mb-3 text-uppercase" style={{ fontSize: "0.8rem", letterSpacing: "1px" }}>
              Trip Packages
            </h6>
            <ul className="list-unstyled small">
              {[
                ["Private Trip", "/packages/private-trip"],
                ["One-Day Trip", "/packages/one-day-tour"],
                ["Honeymoon", "/packages/honeymoon"],
                ["Japan Local Life", "/packages/japan-local-life"],
              ].map(([label, href]) => (
                <li key={label} className="mb-2">
                  <Link href={href}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-6 col-lg-2">
            <h6 className="mb-3 text-uppercase" style={{ fontSize: "0.8rem", letterSpacing: "1px" }}>
              Information
            </h6>
            <ul className="list-unstyled small">
              {[
                ["About Us", "/about"],
                ["Blog", "/blog"],
                ["FAQ", "/faq"],
                ["Contact", "/contact"],
              ].map(([label, href]) => (
                <li key={label} className="mb-2">
                  <Link href={href}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-lg-4">
            <h6 className="mb-3 text-uppercase" style={{ fontSize: "0.8rem", letterSpacing: "1px" }}>
              Contact Us
            </h6>
            <ul className="list-unstyled small">
              <li className="mb-2">📱 WhatsApp: +62 XXX-XXXX-XXXX</li>
              <li className="mb-2">📧 Email: hello@japantourged.com</li>
              <li className="mb-2">📍 Jakarta, Indonesia</li>
            </ul>
            <a
              href="https://wa.me/62XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm mt-2 fw-semibold px-3 py-2"
              style={{ background: "#25D366", color: "#fff", borderRadius: "50px", border: "none", fontSize: "0.85rem" }}
            >
              💬 Chat on WhatsApp
            </a>
          </div>
        </div>

        <hr className="footer-divider" />

        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center small">
          <p className="mb-0" style={{ color: "rgba(255,255,255,0.5)" }}>
            © {new Date().getFullYear()} Tourged Travel. All rights reserved.
          </p>
          <div className="d-flex gap-3 mt-2 mt-md-0">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
