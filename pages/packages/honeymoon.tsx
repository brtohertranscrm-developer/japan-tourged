import Head from "next/head";
import Link from "next/link";
import { ReactNode } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PackageNextSteps from "../../components/PackageNextSteps";
import { SunIcon, HomeIcon, SparklesIcon, HeartIcon, CameraIcon, PhoneIcon } from "../../components/Icons";

const highlights: { icon: ReactNode; title: string; desc: string }[] = [
  { icon: <SunIcon size={26} />, title: "Comfortable Pace", desc: "A calmer route with time to enjoy the moment, not just move between spots" },
  { icon: <HomeIcon size={26} />, title: "Stay Area Ideas", desc: "Suggestions for neighborhoods with good access, views, or a quieter mood" },
  { icon: <SparklesIcon size={26} />, title: "Meal Moments", desc: "Simple date-night ideas, from casual local places to something a bit special" },
  { icon: <HeartIcon size={26} />, title: "Ryokan and Onsen Notes", desc: "Optional ryokan or onsen ideas with practical etiquette guidance" },
  { icon: <CameraIcon size={26} />, title: "Scenic Stops", desc: "Beautiful places that fit your mood without overloading the day" },
  { icon: <PhoneIcon size={26} />, title: "Planning Support", desc: "We help organize the details while keeping the trip realistic and comfortable" },
];

export default function Honeymoon() {
  return (
    <>
      <Head>
        <title>Honeymoon — Tourged Travel</title>
        <meta
          name="description"
          content="Japan honeymoon planning for Indonesian couples. Romantic, comfortable itineraries with realistic pacing, stay area ideas, and practical travel notes."
        />
      </Head>

      <Navbar />

      <section className="page-hero text-center">
        <div className="container">
          <span className="page-hero-label">For Couples</span>
          <h1 className="display-5 fw-bold mt-2">Honeymoon</h1>
          <p className="mt-3" style={{ maxWidth: 680, margin: "0 auto", color: "#6b7280" }}>
            A Japan honeymoon plan that feels warm, comfortable, and realistic, with enough space to actually enjoy each other.
          </p>
          <div className="mt-4 d-flex flex-wrap justify-content-center gap-3">
            <a
              href="https://wa.me/6281280904772?text=Halo%2C+saya+tertarik+dengan+paket+Honeymoon+ke+Jepang.+Bisa+bantu+saya+konsultasi%3F"
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
            <h2 className="section-title">Romantic, But Still Practical</h2>
            <p className="text-muted mt-2" style={{ maxWidth: 700, margin: "0 auto" }}>
              We help balance the must-see places with slower days, better timing, and small details that make the trip feel personal.
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

      <PackageNextSteps current="honeymoon" />

      <section className="cta-section py-5">
        <div className="container py-3 text-center">
          <h2 className="fw-bold mb-3" style={{ color: "#fff", fontSize: "2rem" }}>Tell Us Your Honeymoon Style</h2>
          <p className="mb-4" style={{ color: "rgba(255,255,255,0.85)" }}>
            Share your preferred cities, travel dates, budget range, and pace. We will suggest a plan that feels right for both of you.
          </p>
          <a
            href="https://wa.me/6281280904772?text=Halo%2C+saya+tertarik+dengan+paket+Honeymoon+ke+Jepang.+Bisa+bantu+saya+konsultasi%3F"
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
