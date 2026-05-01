import Head from "next/head";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const highlights = [
  { icon: "🌸", title: "Romantic Pace", desc: "A calmer route with time to enjoy, not just chase spots" },
  { icon: "🏞️", title: "Scenic Stays", desc: "Suggestions for areas with great views, cozy vibes, and easy access" },
  { icon: "🍣", title: "Food Moments", desc: "Date-night recommendations from casual to special-occasion" },
  { icon: "♨️", title: "Onsen Options", desc: "Optional ryokan/onsen ideas, with etiquette guidance for first-timers" },
  { icon: "📸", title: "Photo-Ready Spots", desc: "Beautiful locations that fit your mood without overpacking the day" },
  { icon: "🤝", title: "Planning Support", desc: "We help with the details and keep the plan realistic for your comfort" },
];

export default function Honeymoon() {
  return (
    <>
      <Head>
        <title>Honeymoon — Tourged Travel</title>
        <meta
          name="description"
          content="Honeymoon in Japan: romantic, cozy itineraries with thoughtful details and realistic pacing. Designed for Indonesian travelers."
        />
      </Head>

      <Navbar />

      <section className="page-hero text-center">
        <div className="container">
          <div style={{ fontSize: "3.5rem", marginBottom: "1rem" }}>💑</div>
          <span className="page-hero-label">For Couples</span>
          <h1 className="display-5 fw-bold mt-2">Honeymoon</h1>
          <p className="mt-3" style={{ maxWidth: 680, margin: "0 auto", color: "#6b7280" }}>
            A romantic Japan plan with a comfortable pace: scenic stays, cozy cafés, and date spots that feel special.
          </p>
          <div className="mt-4 d-flex flex-wrap justify-content-center gap-3">
            <a
              href="https://wa.me/62XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-custom"
            >
              💬 Free Consultation
            </a>
            <Link href="/blog" className="btn-outline-custom">
              Read Tips →
            </Link>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container py-3">
          <div className="text-center mb-5">
            <p className="section-label">What You Get</p>
            <h2 className="section-title">Thoughtful Details, Not Stress</h2>
            <p className="text-muted mt-2" style={{ maxWidth: 700, margin: "0 auto" }}>
              We build the trip around comfort and memories. You’ll still see the highlights, but with room to breathe.
            </p>
          </div>
          <div className="row g-4">
            {highlights.map((h) => (
              <div key={h.title} className="col-sm-6 col-lg-4">
                <div className="p-4 rounded-4 h-100" style={{ background: "#fafafa", border: "1px solid #f0f0f0" }}>
                  <div style={{ fontSize: "2rem", marginBottom: "0.8rem" }}>{h.icon}</div>
                  <h6 className="fw-bold" style={{ color: "#1a1a2e" }}>{h.title}</h6>
                  <p className="text-muted small mb-0" style={{ lineHeight: 1.6 }}>{h.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section py-5">
        <div className="container py-3 text-center">
          <h2 className="fw-bold mb-3" style={{ color: "#fff", fontSize: "2rem" }}>Tell Us Your Vibe</h2>
          <p className="mb-4" style={{ color: "rgba(255,255,255,0.85)" }}>
            City preferences (Tokyo, Kyoto, Hokkaido, etc.), travel style, and budget. We’ll propose a honeymoon plan that feels right.
          </p>
          <a
            href="https://wa.me/62XXXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-light fw-semibold px-5 py-3 rounded-pill"
            style={{ color: "#c0392b" }}
          >
            💬 Chat on WhatsApp
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}

