import Head from "next/head";
import Link from "next/link";
import { ReactNode } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PackageNextSteps from "../../components/PackageNextSteps";
import { MapIcon, ClockIcon, SparklesIcon, MapPinIcon, CameraIcon, ChatIcon } from "../../components/Icons";

const highlights: { icon: ReactNode; title: string; desc: string }[] = [
  { icon: <MapIcon size={26} />, title: "Focused Route", desc: "A realistic route with fewer transfers and enough time to enjoy each stop" },
  { icon: <ClockIcon size={26} />, title: "Simple Timing", desc: "Suggested order and timing based on opening hours, distance, and crowd patterns" },
  { icon: <SparklesIcon size={26} />, title: "Food Options", desc: "Casual meal ideas that fit your area, taste, and budget" },
  { icon: <MapPinIcon size={26} />, title: "Easy Directions", desc: "Clear meeting points, station names, and basic notes for first-timers" },
  { icon: <CameraIcon size={26} />, title: "Photo-Friendly Stops", desc: "Good-looking places without turning the day into a checklist" },
  { icon: <ChatIcon size={26} />, title: "Planning Check-in", desc: "A quick review before the day so the plan still fits your schedule" },
];

export default function OneDayTrip() {
  return (
    <>
      <Head>
        <title>One-Day Trip — Tourged Travel</title>
        <meta
          name="description"
          content="One-Day Trip planning in Japan for Indonesian travelers. A focused, realistic route for Tokyo, Osaka, Kyoto, and other popular cities."
        />
      </Head>

      <Navbar />

      <section className="page-hero text-center">
        <div className="container">
          <span className="page-hero-label">Quick Trip</span>
          <h1 className="display-5 fw-bold mt-2">One-Day Trip</h1>
          <p className="mt-3" style={{ maxWidth: 640, margin: "0 auto", color: "#6b7280" }}>
            For travelers with limited time, we help build a focused one-day route that is easy to follow and not too packed.
          </p>
          <div className="mt-4 d-flex flex-wrap justify-content-center gap-3">
            <a
              href="https://wa.me/6281280904772?text=Halo%2C+saya+tertarik+dengan+paket+One-Day+Trip+ke+Jepang.+Bisa+bantu+saya+konsultasi%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-custom"
            >
              Free Consultation
            </a>
            <Link href="/#layanan" className="btn-outline-custom">
              Compare Styles →
            </Link>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container py-3">
          <div className="text-center mb-5">
            <p className="section-label">What You Get</p>
            <h2 className="section-title">A Practical Plan for One Good Day</h2>
            <p className="text-muted mt-2" style={{ maxWidth: 680, margin: "0 auto" }}>
              Ideal for a free day between cities, a short stopover, or travelers who want a clear plan without overthinking the route.
            </p>
          </div>
          <div className="row g-4">
            {highlights.map((h) => (
              <div key={h.title} className="col-sm-6 col-lg-4">
                <div className="p-4 rounded-4 h-100" style={{ background: "#fafafa", border: "1px solid #f0f0f0" }}>
                  <div style={{ color: "var(--primary)", marginBottom: "0.8rem" }}>{h.icon}</div>
                  <h6 className="fw-bold" style={{ color: "#1a1a2e" }}>{h.title}</h6>
                  <p className="text-muted small mb-0" style={{ lineHeight: 1.6 }}>{h.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PackageNextSteps current="one-day-tour" />

      <section className="cta-section py-5">
        <div className="container py-3 text-center">
          <h2 className="fw-bold mb-3" style={{ color: "#fff", fontSize: "2rem" }}>Tell Us Your City and Date</h2>
          <p className="mb-4" style={{ color: "rgba(255,255,255,0.85)" }}>
            Share where you will be and what kind of day you want. We will help shape a route that makes sense.
          </p>
          <a
            href="https://wa.me/6281280904772?text=Halo%2C+saya+tertarik+dengan+paket+One-Day+Trip+ke+Jepang.+Bisa+bantu+saya+konsultasi%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-light fw-semibold px-5 py-3 rounded-pill"
            style={{ color: "#c0392b" }}
          >
            Chat on WhatsApp
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
