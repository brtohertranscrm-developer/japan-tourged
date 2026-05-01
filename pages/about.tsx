import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <Head>
        <title>About Us — Tourged Travel</title>
        <meta name="description" content="Meet Tourged Travel, a small travel planning team helping Indonesian travelers build realistic, personal Japan trips." />
      </Head>

      <Navbar />

      <section className="page-hero text-center">
        <div className="container">
          <span className="page-hero-label">About Us</span>
          <h1 className="display-5 fw-bold mt-2">A Small Team for Thoughtful Japan Trips</h1>
          <p className="mt-3" style={{ maxWidth: 520, margin: "0 auto", color: "#6b7280" }}>
            We help Indonesian travelers plan Japan trips with clear routes, realistic pacing, and details that make the journey easier.
          </p>
        </div>
      </section>

      <section className="py-5">
        <div className="container py-3">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <p className="section-label">Our Approach</p>
              <h2 className="section-title mb-4">Personal, Clear, and Realistic</h2>
              <p className="text-muted mb-3" style={{ lineHeight: 1.8 }}>
                Tourged Travel is still growing, and we see that as a strength. Instead of pushing fixed packages, we take time to understand your travel style, comfort level, budget, and the kind of Japan experience you actually want.
              </p>
              <p className="text-muted mb-4" style={{ lineHeight: 1.8 }}>
                Our role is to make the planning process calmer: simpler routes, honest budget expectations, practical transport notes, and responsive communication before you go.
              </p>
              <div className="row g-3">
                {[
                  { num: "Small", label: "Focused Planning Team" },
                  { num: "1:1", label: "Personal Trip Discussion" },
                  { num: "Clear", label: "Route and Budget Notes" },
                  { num: "Care", label: "Extra Attention for Early Guests" },
                ].map((s) => (
                  <div key={s.label} className="col-6">
                    <div className="p-3 rounded-3 text-center" style={{ background: "#fafafa" }}>
                      <h3 className="fw-800 mb-1" style={{ color: "#c0392b", fontWeight: 800 }}>{s.num}</h3>
                      <p className="small text-muted mb-0">{s.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="rounded-4 d-flex align-items-center justify-content-center"
                style={{ background: "linear-gradient(135deg, #fff5f5, #fde8e8)", height: 400 }}
              >
                <svg viewBox="0 0 300 220" fill="none" xmlns="http://www.w3.org/2000/svg" width="260" height="200">
                  <path d="M150 28 L280 188 H20 Z" fill="#fce4ec" stroke="#e24c78" strokeWidth="2.5" strokeLinejoin="round" />
                  <path d="M132 72 L150 28 L168 72 Z" fill="#fff" stroke="#e24c78" strokeWidth="1.5" strokeLinejoin="round" />
                  <line x1="20" y1="188" x2="280" y2="188" stroke="#e24c78" strokeWidth="2" strokeLinecap="round" />
                  <ellipse cx="150" cy="196" rx="130" ry="6" fill="#fce4ec" opacity="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
