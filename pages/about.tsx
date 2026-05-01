import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <Head>
        <title>About Us — Tourged Travel</title>
        <meta name="description" content="Meet Tourged Travel. We curate Japan trips for Indonesian travelers with a personal, detail-first approach." />
      </Head>

      <Navbar />

      <section className="page-hero text-center">
        <div className="container">
          <span className="page-hero-label">About Us</span>
          <h1 className="display-5 fw-bold mt-2">The Team Behind Your Japan Trip</h1>
          <p className="mt-3" style={{ maxWidth: 520, margin: "0 auto", color: "#6b7280" }}>
            We’re a Japan-loving team focused on building trips that feel personal, well-paced, and genuinely enjoyable.
          </p>
        </div>
      </section>

      <section className="py-5">
        <div className="container py-3">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <p className="section-label">Our Story</p>
              <h2 className="section-title mb-4">Built from a Love for Japan</h2>
              <p className="text-muted mb-3" style={{ lineHeight: 1.8 }}>
                Tourged Travel was created by travelers who fell in love with Japan and wanted to help others experience it in a way that fits their own style. We believe a great trip should feel personal and meaningful, not generic.
              </p>
              <p className="text-muted mb-4" style={{ lineHeight: 1.8 }}>
                We’re fresh and hungry to build. That means early clients get extra care: clearer planning, fast responses, and thoughtful details from start to finish.
              </p>
              <div className="row g-3">
                {[
                  { num: "Founding", label: "First Client Batch" },
                  { num: "1:1", label: "Personal Assistance" },
                  { num: "Detail", label: "Route and Budget Clarity" },
                  { num: "Fast", label: "Responsive Support" },
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
                style={{ background: "linear-gradient(135deg, #fff5f5, #fde8e8)", height: 400, fontSize: "8rem" }}
              >
                🗾
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
