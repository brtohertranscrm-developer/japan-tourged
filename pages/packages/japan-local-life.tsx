import Head from "next/head";
import Link from "next/link";
import { ReactNode } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PackageNextSteps from "../../components/PackageNextSteps";
import { HomeIcon, ShoppingBagIcon, ArrowRightIcon, MapPinIcon, SparklesIcon, StarIcon } from "../../components/Icons";

const highlights: { icon: ReactNode; title: string; desc: string }[] = [
  { icon: <HomeIcon size={26} />, title: "Neighborhood Cafes", desc: "Coffee spots, bakeries, and quieter mornings away from the busiest corners" },
  { icon: <ShoppingBagIcon size={26} />, title: "Local Shopping", desc: "Markets, depachika, vintage stores, and everyday shopping streets" },
  { icon: <ArrowRightIcon size={26} />, title: "Slow-Paced Routes", desc: "Comfortable walking days with smart transit and enough time to pause" },
  { icon: <MapPinIcon size={26} />, title: "Small Town Ideas", desc: "Day trips or short stays in calmer towns, suburbs, or scenic areas" },
  { icon: <SparklesIcon size={26} />, title: "Everyday Food", desc: "Casual meals, local favorites, and budget-friendly options" },
  { icon: <StarIcon size={26} />, title: "Built Around Your Taste", desc: "Art, cafés, shopping, nature, anime, or culture, shaped into a realistic route" },
];

export default function JapanLocalLife() {
  return (
    <>
      <Head>
        <title>Japan Local Life — Tourged Travel</title>
        <meta
          name="description"
          content="Japan Local Life trip planning for Indonesian travelers: slower routes, local neighborhoods, cafés, markets, small towns, and everyday Japan experiences."
        />
      </Head>

      <Navbar />

      <section className="page-hero text-center">
        <div className="container">
          <span className="page-hero-label">Signature Style</span>
          <h1 className="display-5 fw-bold mt-2">Japan Local Life</h1>
          <p className="mt-3" style={{ maxWidth: 620, margin: "0 auto", color: "#6b7280" }}>
            Prefer calm neighborhoods, cafés, and everyday places over packed attraction-hopping? This plan is built for a slower, more local side of Japan.
          </p>
          <div className="mt-4 d-flex flex-wrap justify-content-center gap-3">
            <a
              href="https://wa.me/6281280904772?text=Halo%2C+saya+tertarik+dengan+paket+Japan+Local+Life+ke+Jepang.+Bisa+bantu+saya+konsultasi%3F"
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
            <h2 className="section-title">Everyday Japan, Planned Properly</h2>
            <p className="text-muted mt-2" style={{ maxWidth: 640, margin: "0 auto" }}>
              We design the route to feel simple and enjoyable: smart transit, good pacing, and small moments you can actually remember.
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

      <PackageNextSteps current="japan-local-life" />

      <section className="cta-section py-5">
        <div className="container py-3 text-center">
          <h2 className="fw-bold mb-3" style={{ color: "#fff", fontSize: "2rem" }}>Build Your Local Japan Route</h2>
          <p className="mb-4" style={{ color: "rgba(255,255,255,0.85)" }}>
            Tell us your interests, dates, and budget range. We will suggest a route direction that feels natural for you.
          </p>
          <a
            href="https://wa.me/6281280904772?text=Halo%2C+saya+tertarik+dengan+paket+Japan+Local+Life+ke+Jepang.+Bisa+bantu+saya+konsultasi%3F"
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
