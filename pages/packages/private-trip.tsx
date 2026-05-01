import Head from "next/head";
import Link from "next/link";
import { ReactNode } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PackageNextSteps from "../../components/PackageNextSteps";
import { PlaneIcon, HomeIcon, DocumentIcon, ArrowsIcon, LightBulbIcon, PhoneIcon } from "../../components/Icons";

const highlights: { icon: ReactNode; title: string; desc: string }[] = [
  { icon: <PlaneIcon size={26} />, title: "Flight Guidance", desc: "Suggested timing and budget notes before you book" },
  { icon: <HomeIcon size={26} />, title: "Stay Shortlist", desc: "Hotel or ryokan areas that match your route and comfort level" },
  { icon: <DocumentIcon size={26} />, title: "Custom Itinerary", desc: "A realistic day-by-day plan based on your pace and interests" },
  { icon: <ArrowsIcon size={26} />, title: "Transport Notes", desc: "Guidance for train routes, IC cards, and pass decisions" },
  { icon: <LightBulbIcon size={26} />, title: "Local Ideas", desc: "Practical spots for food, views, shopping, and slower moments" },
  { icon: <PhoneIcon size={26} />, title: "Planning Support", desc: "Responsive help while we shape and revise your plan" },
];

export default function PrivateTrip() {
  return (
    <>
      <Head>
        <title>Private Trip Japan — Tourged Travel</title>
        <meta name="description" content="A private Japan trip plan for Indonesian travelers. Realistic itinerary, transport notes, stay shortlist, and responsive planning support." />
      </Head>

      <Navbar />

      <section className="page-hero text-center">
        <div className="container">
          <span className="page-hero-label">Signature Package</span>
          <h1 className="display-5 fw-bold mt-2">Private Trip to Japan</h1>
          <p className="mt-3" style={{ maxWidth: 520, margin: "0 auto", color: "#6b7280" }}>
            A personal Japan plan built around your pace, budget, and priorities, with a route that feels comfortable to follow.
          </p>
          <div className="mt-4 d-flex flex-wrap justify-content-center gap-3">
            <a
              href="https://wa.me/6281280904772?text=Halo%2C+saya+tertarik+dengan+paket+Private+Trip+ke+Jepang.+Bisa+bantu+saya+konsultasi%3F"
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
            <h2 className="section-title">Planning Help You Can Actually Use</h2>
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

      <section className="py-5" style={{ background: "#fafafa" }}>
        <div className="container py-3">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <p className="section-label">Pricing</p>
              <h2 className="section-title mb-3">Starting Budget Guide</h2>
              <p className="text-muted mb-4">Every trip is different, so these are planning ranges only. Final costs depend on season, city choices, hotel level, and how much support you need.</p>
              <div className="row g-3">
                {[
                  { duration: "5D4N", price: "From IDR 15M", note: "per person (2 pax)" },
                  { duration: "7D6N", price: "From IDR 20M", note: "per person (2 pax)" },
                  { duration: "10D9N", price: "From IDR 28M", note: "per person (2 pax)" },
                ].map((p) => (
                  <div key={p.duration} className="col-md-4">
                    <div className="p-4 rounded-4 bg-white" style={{ border: "1.5px solid #e5e7eb" }}>
                      <p className="fw-bold mb-1" style={{ color: "#111827" }}>{p.duration}</p>
                      <h5 className="fw-800 mb-1" style={{ color: "#e8403a", fontWeight: 800 }}>{p.price}</h5>
                      <small className="text-muted">{p.note}</small>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-muted small mt-3">* Flights are not included. We will help you shape the plan around a budget range you are comfortable with.</p>
            </div>
          </div>
        </div>
      </section>

      <PackageNextSteps current="private-trip" />

      <section className="cta-section py-5">
        <div className="container py-3 text-center">
          <h2 className="fw-bold mb-3" style={{ color: "#fff", fontSize: "2rem" }}>Start with a Simple Conversation</h2>
          <p className="mb-4" style={{ color: "rgba(255,255,255,0.85)" }}>Tell us your travel dates, cities, and budget range. We will suggest the most sensible next step.</p>
          <a
            href="https://wa.me/6281280904772?text=Halo%2C+saya+tertarik+dengan+paket+Private+Trip+ke+Jepang.+Bisa+bantu+saya+konsultasi%3F"
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
