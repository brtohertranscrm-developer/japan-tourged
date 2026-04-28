import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer pt-5 pb-3">
      <div className="container">
        <div className="row g-4 mb-4">
          <div className="col-lg-4">
            <div className="footer-brand mb-3">
              <span className="fw-bold fs-4">
                <span style={{ color: "#f39c12" }}>Japan</span>
                <span className="text-white"> Tourged</span>
              </span>
            </div>
            <p className="small" style={{ lineHeight: 1.8 }}>
              Spesialis wisata Jepang dengan layanan personal dan itinerary
              custom sesuai impian Anda. Lebih dari 500+ traveler puas.
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
              Paket Trip
            </h6>
            <ul className="list-unstyled small">
              {[
                ["Private Trip", "/packages/private-trip"],
                ["One Day Tour", "/packages/one-day-tour"],
                ["Company Trip", "/packages/company-trip"],
                ["Honeymoon", "/packages/honeymoon"],
              ].map(([label, href]) => (
                <li key={label} className="mb-2">
                  <Link href={href}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-6 col-lg-2">
            <h6 className="mb-3 text-uppercase" style={{ fontSize: "0.8rem", letterSpacing: "1px" }}>
              Informasi
            </h6>
            <ul className="list-unstyled small">
              {[
                ["Tentang Kami", "/about"],
                ["Blog", "/blog"],
                ["FAQ", "/faq"],
                ["Kontak", "/contact"],
              ].map(([label, href]) => (
                <li key={label} className="mb-2">
                  <Link href={href}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-lg-4">
            <h6 className="mb-3 text-uppercase" style={{ fontSize: "0.8rem", letterSpacing: "1px" }}>
              Hubungi Kami
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
              💬 Chat WhatsApp
            </a>
          </div>
        </div>

        <hr className="footer-divider" />

        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center small">
          <p className="mb-0" style={{ color: "rgba(255,255,255,0.5)" }}>
            © {new Date().getFullYear()} Japan Tourged. All rights reserved.
          </p>
          <div className="d-flex gap-3 mt-2 mt-md-0">
            <Link href="/privacy">Kebijakan Privasi</Link>
            <Link href="/terms">Syarat & Ketentuan</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
