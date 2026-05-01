import Head from "next/head";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const highlights = [
  { icon: "☕", title: "Neighborhood Cafes", desc: "Coffee spots, bakeries, and calm mornings in local areas" },
  { icon: "🛍️", title: "Local Markets", desc: "Food streets, depachika, vintage stores, and everyday shopping" },
  { icon: "🚶", title: "Slow-Paced Routes", desc: "Comfortable walking days with smart transit and rest breaks" },
  { icon: "🏘️", title: "Small Town Vibes", desc: "Day trips or overnights to quieter towns and scenic suburbs" },
  { icon: "🍱", title: "Food That Locals Love", desc: "Casual eats, hidden gems, and budget-friendly favorites" },
  { icon: "🧭", title: "Personal Preferences", desc: "We tailor based on your vibe: art, cafés, shopping, nature, or culture" },
];

export default function JapanLocalLife() {
  return (
    <>
      <Head>
        <title>Japan Local Life — Tourged Travel</title>
        <meta
          name="description"
          content="Japan Local Life: a slower, more local Japan experience for Indonesian travelers. Neighborhoods, cafés, markets, small towns, and everyday spots—tailored to your vibe."
        />
      </Head>

      <Navbar />

      <section className="page-hero text-center">
        <div className="container">
          <div style={{ fontSize: "3.5rem", marginBottom: "1rem" }}>☕</div>
          <span className="page-hero-label">Signature Style</span>
          <h1 className="display-5 fw-bold mt-2">Japan Local Life</h1>
          <p className="mt-3" style={{ maxWidth: 620, margin: "0 auto", color: "#6b7280" }}>
            Prefer calm neighborhoods over packed attractions? This is a slower, more local Japan plan designed around everyday spots
            and your personal vibe.
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
            <h2 className="section-title">A Local, Comfortable Plan</h2>
            <p className="text-muted mt-2" style={{ maxWidth: 640, margin: "0 auto" }}>
              We design the route to feel realistic and enjoyable: smart transit, good pacing, and small moments you’ll actually remember.
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
          <h2 className="fw-bold mb-3" style={{ color: "#fff", fontSize: "2rem" }}>Let’s Build Your Local Japan</h2>
          <p className="mb-4" style={{ color: "rgba(255,255,255,0.85)" }}>
            Tell us your vibe, dates, and budget. We’ll reply with a clear direction and options.
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

