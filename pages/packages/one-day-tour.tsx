import Head from "next/head";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const highlights = [
  { icon: "🗺️", title: "Efficient Route", desc: "A realistic route with smart transit so you can enjoy more and rush less" },
  { icon: "⏱️", title: "Good Timing", desc: "We schedule popular spots at the right time to avoid peak crowds when possible" },
  { icon: "🍜", title: "Food Stops", desc: "Optional lunch/dinner recommendations that fit your taste and budget" },
  { icon: "📍", title: "Meetup Guidance", desc: "Easy meeting points and simple instructions, friendly for first-timers" },
  { icon: "📸", title: "Photo-Friendly Spots", desc: "Scenic and iconic places without forcing a packed itinerary" },
  { icon: "💬", title: "Quick Support", desc: "Fast replies for last-minute adjustments on the day" },
];

export default function OneDayTrip() {
  return (
    <>
      <Head>
        <title>One-Day Trip — Tourged Travel</title>
        <meta
          name="description"
          content="One-Day Trip in Japan: a well-timed itinerary that hits key highlights without feeling rushed. Designed for Indonesian travelers."
        />
      </Head>

      <Navbar />

      <section className="page-hero text-center">
        <div className="container">
          <div style={{ fontSize: "3.5rem", marginBottom: "1rem" }}>🌅</div>
          <span className="page-hero-label">Quick Trip</span>
          <h1 className="display-5 fw-bold mt-2">One-Day Trip</h1>
          <p className="mt-3" style={{ maxWidth: 640, margin: "0 auto", color: "#6b7280" }}>
            Short on time? We design a simple, realistic one-day plan that covers the best highlights with smooth timing.
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
            <h2 className="section-title">A Day That Feels Smooth</h2>
            <p className="text-muted mt-2" style={{ maxWidth: 680, margin: "0 auto" }}>
              Ideal for a free day between big cities, a short stopover, or travelers who want to keep it light and enjoyable.
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
          <h2 className="fw-bold mb-3" style={{ color: "#fff", fontSize: "2rem" }}>Tell Us Your City and Date</h2>
          <p className="mb-4" style={{ color: "rgba(255,255,255,0.85)" }}>
            Share where you’ll be (Tokyo, Osaka, Kyoto, etc.) and your vibe. We’ll suggest a day plan that makes sense.
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

