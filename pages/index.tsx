import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const IMAGEKIT_BASE = "https://ik.imagekit.io/tourged";
const PROJECT_BASE = `${IMAGEKIT_BASE}/Project%20tourged.id`;

const bannerSlides = [
  { src: `${PROJECT_BASE}/IMG_2324.JPG?updatedAt=1777528837654&tr=w-900,h-675,c-maintain_ratio`, alt: "Japan Travel - Scenic Views" },
  { src: `${PROJECT_BASE}/38dd9088-3af6-4d03-ba59-3d7799f84925.jpg?updatedAt=1777528837931&tr=w-900,h-675,c-maintain_ratio`, alt: "Japan Travel - Culture & City Life" },
  { src: `${PROJECT_BASE}/45e0af3c-8d21-4adb-b140-761b8bcea108.jpg?updatedAt=1777528837365&tr=w-900,h-675,c-maintain_ratio`, alt: "Japan Travel - Nature Escapes" },
  { src: `${PROJECT_BASE}/IMG_2332.JPG?updatedAt=1777528836709&tr=w-900,h-675,c-maintain_ratio`, alt: "Japan Travel - Japanese Food" },
];

const galleryImages = [
  `${PROJECT_BASE}/IMG_2324.JPG?updatedAt=1777528837654&tr=w-600,h-600,c-at_max`,
  `${PROJECT_BASE}/38dd9088-3af6-4d03-ba59-3d7799f84925.jpg?updatedAt=1777528837931&tr=w-600,h-600,c-at_max`,
  `${PROJECT_BASE}/45e0af3c-8d21-4adb-b140-761b8bcea108.jpg?updatedAt=1777528837365&tr=w-600,h-600,c-at_max`,
  `${PROJECT_BASE}/IMG_2332.JPG?updatedAt=1777528836709&tr=w-600,h-600,c-at_max`,
  `${PROJECT_BASE}/9675005a-8ddb-4fcf-a725-9751f6c90e62.jpg?updatedAt=1777528836461&tr=w-600,h-600,c-at_max`,
  `${PROJECT_BASE}/dd3c4b00-3e29-4730-9d65-290b8a6fcdf8.jpg?updatedAt=1777528836298&tr=w-600,h-600,c-at_max`,
  `${PROJECT_BASE}/285c6459-b359-40e2-a400-aa1520ad4d3b.jpg?updatedAt=1777528833337&tr=w-600,h-600,c-at_max`
];

const services = [
  {
    image: "/services/private-trip.jpg",
    title: "Private Trip",
    desc: "A fully tailored Japan trip built around your pace, priorities, and budget. Flexible schedule, curated spots, and a clear route.",
    href: "/packages/private-trip",
  },
  {
    image: "/services/one-day-trip.jpg",
    title: "One-Day Trip",
    desc: "Short on time? Get a well-timed, efficient itinerary that hits the best highlights without feeling rushed.",
    href: "/packages/one-day-tour",
  },
  {
    image: "/services/honeymoon.jpg",
    title: "Honeymoon",
    desc: "A romantic, cozy Japan itinerary with thoughtful details: scenic stays, slow mornings, and unforgettable date spots.",
    href: "/packages/honeymoon",
  },
  {
    image: "/services/japan-local-life.jpg",
    title: "Japan Local Life",
    desc: "A slower, more local Japan experience: neighborhoods, cafés, markets, small towns, and everyday spots tailored to your vibe.",
    href: "/packages/japan-local-life",
  },
];

const steps = [
  { num: "1", title: "Free Consultation", desc: "Tell us your dream trip via WhatsApp or a quick Google Meet call." },
  { num: "2", title: "Itinerary Design", desc: "We craft a custom itinerary that matches your time, style, and budget." },
  { num: "3", title: "Review & Confirm", desc: "We finalize the plan together, then you confirm and we handle the details." },
  { num: "4", title: "Enjoy Japan", desc: "Travel with peace of mind. We stay on standby to support you along the way." },
];

const commitments = [
  {
    icon: "🧭",
    title: "Clear Route, Clear Budget",
    desc: "We plan day-by-day with realistic timing and cost ranges, so you know what you’re signing up for.",
  },
  {
    icon: "⚡",
    title: "Fast, Human Replies",
    desc: "As a new service, we keep things tight: quick responses, practical answers, and no copy-paste suggestions.",
  },
  {
    icon: "🧩",
    title: "Built Around Your Style",
    desc: "Shopping, cafés, local neighborhoods, nature, or culture. We tailor the pace and priorities to your vibe.",
  },
  {
    icon: "🤝",
    title: "Extra Care for Early Clients",
    desc: "You get more attention: tighter planning, more revisions, and a smoother end-to-end process.",
  },
];

const blogPosts = [
  {
    emoji: "🌸",
    category: "Spring",
    title: "Sakura in Japan 2025: A Practical Guide",
    date: "March 15, 2025",
    readTime: "8 min",
    slug: "panduan-sakura-jepang-2025",
  },
  {
    emoji: "🍜",
    category: "Food",
    title: "10 Must-Try Foods for Your First Japan Trip",
    date: "April 2, 2025",
    readTime: "6 min",
    slug: "makanan-wajib-jepang",
  },
  {
    emoji: "🏯",
    category: "Culture",
    title: "Kyoto Temples: A First-Timer Friendly Route",
    date: "April 20, 2025",
    readTime: "10 min",
    slug: "kuil-bersejarah-kyoto",
  },
];

export default function Home() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    import("bootstrap").then((bootstrap) => {
      const el = document.getElementById("heroBannerCarousel");
      if (el && !bootstrap.Carousel.getInstance(el)) new bootstrap.Carousel(el);
    });
  }, []);

  return (
    <>
      <Head>
        <title>Tourged Travel — Curated Japan Trips</title>
        <meta
          name="description"
          content="Curated Japan trips for Indonesian travelers. Custom itineraries for Private Trip, One-Day Trip, Honeymoon, and Japan Local Life. Start with a free consultation."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      {/* Hero */}
      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <span className="hero-badge">✨ Curated Japan Trips for Indonesian Travelers</span>
              <h1 className="hero-title mb-3">
                Japan Trips That Feel<br />
                <span>Personal, Smooth, and Meaningful</span>
              </h1>
              <p className="hero-subtitle mb-4">
                From first-time visitors to repeat travelers, we design detailed and flexible itineraries tailored to your travel style, so every day in Japan feels worth it.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <a
                  href="https://wa.me/62XXXXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary-custom"
                >
                  💬 Start Free Consultation
                </a>
                <a
                  href="https://wa.me/62XXXXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-custom"
                >
                  View Trip Plan →
                </a>
              </div>
              <div className="hero-stats">
                <div className="stat-item">
                  <h3>Founding Batch</h3>
                  <p>Open for Our First Clients</p>
                </div>
                <div className="stat-item">
                  <h3>100%</h3>
                  <p>Personal Trip Assistance</p>
                </div>
                <div className="stat-item">
                  <h3>Early Bird</h3>
                  <p>Special Value for First Bookings</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 d-none d-lg-block">
              <div className="hero-video-card position-relative p-0" style={{ height: "480px", overflow: "visible" }}>
                {/* Keep overflow visible for floating cards, but clip the media to rounded corners */}
                <div style={{ borderRadius: "24px", height: "100%", overflow: "hidden" }}>
                  <div id="heroBannerCarousel" className="carousel slide h-100" data-bs-ride="carousel">
                    <div className="carousel-inner h-100">
                      {bannerSlides.map((slide, idx) => (
                        <div key={idx} className={`carousel-item h-100 ${idx === 0 ? "active" : ""}`}>
                          <img
                            src={slide.src}
                            alt={slide.alt}
                            className="d-block w-100 h-100"
                            style={{ objectFit: "cover" }}
                          />
                        </div>
                      ))}
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#heroBannerCarousel" data-bs-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#heroBannerCarousel" data-bs-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>
                </div>
                {/* Floating info cards */}
                <div className="hero-floating-card" style={{ top: "1.5rem", left: "-1.2rem" }}>
                  <span className="hero-floating-dot" style={{ background: "#22c55e" }} />
                  🌸 Seasonal Trip Timing
                </div>
                <div className="hero-floating-card" style={{ bottom: "5.5rem", right: "-1.2rem" }}>
                  🧭 Clear Route, Clear Budget
                </div>
                <div className="hero-floating-card" style={{ bottom: "2rem", left: "-1.2rem" }}>
                  ✈️ Tailored Itinerary
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-5 mt-2" id="layanan">
        <div className="container py-3">
          <div className="text-center mb-5">
            <p className="section-label">Services</p>
            <h2 className="section-title">Trips for Every Moment</h2>
            <p className="text-muted mt-2" style={{ maxWidth: 520, margin: "0 auto" }}>
              From solo trips to honeymoons, we design the best version of Japan for your preferences.
            </p>
          </div>
          <div className="row g-4">
            {services.map((s) => (
              <div key={s.title} className="col-sm-6 col-lg-3">
                <div className="service-card card h-100 overflow-hidden border-0 shadow-sm">
                  <img src={s.image} alt={s.title} className="card-img-top" style={{ objectFit: 'cover', height: '180px' }} />
                  <div className="card-body p-4">
                    <h5 className="card-title mb-2">{s.title}</h5>
                    <p className="card-text mb-3 text-muted">{s.desc}</p>
                    <Link href={s.href} className="btn-link-custom text-decoration-none fw-semibold">
                      Learn more →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="steps-section py-5">
        <div className="container py-3">
          <div className="text-center mb-5">
            <p className="section-label">How It Works</p>
            <h2 className="section-title">Simple, Clear, and Fast</h2>
          </div>
          <div className="row g-4">
            {steps.map((step) => (
              <div key={step.num} className="col-sm-6 col-lg-3">
                <div className="step-item">
                  <div className="step-number">{step.num}</div>
                  <h5>{step.title}</h5>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitments */}
      <section className="py-5">
        <div className="container py-3">
          <div className="text-center mb-5">
            <p className="section-label">Our Promise</p>
            <h2 className="section-title">Realistic Planning, Extra Care</h2>
            <p className="text-muted mt-2">We’re still new, so we focus on doing the basics extremely well for every early client.</p>
          </div>
          <div className="row g-4">
            {commitments.map((c) => (
              <div key={c.title} className="col-md-6 col-lg-3">
                <div className="testimonial-card h-100">
                  <div className="d-flex align-items-center gap-2 mb-2" style={{ color: "var(--dark)" }}>
                    <span style={{ fontSize: "1.2rem" }}>{c.icon}</span>
                    <h6 className="m-0 fw-bold">{c.title}</h6>
                  </div>
                  <p className="testimonial-text mb-0">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-5">
        <div className="container py-3">
          <div className="text-center mb-5">
            <p className="section-label">Destinations</p>
            <h2 className="section-title">Moments to Remember</h2>
            <p className="text-muted mt-2">A quick peek into the places and vibes we love in Japan.</p>
          </div>
          <div className="row g-3">
            {galleryImages.map((src, idx) => (
              <div key={idx} className="col-6 col-md-4 col-lg-3">
                <div className="gallery-item overflow-hidden rounded-3" style={{ height: "200px" }}>
                  <img 
                    src={src} 
                    alt={`Japan Travel Gallery ${idx + 1}`} 
                    className="w-100 h-100" 
                    style={{ objectFit: "cover", transition: "transform 0.3s ease" }}
                    onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.1)"}
                    onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-5 bg-light-custom">
        <div className="container py-3">
          <div className="d-flex justify-content-between align-items-end mb-5">
            <div>
              <p className="section-label">Blog & Tips</p>
              <h2 className="section-title">Japan Trip Inspiration</h2>
            </div>
            <Link href="/blog" className="btn btn-outline-danger rounded-pill px-4 d-none d-md-block">
              View all →
            </Link>
          </div>
          <div className="row g-4">
            {blogPosts.map((post) => (
              <div key={post.slug} className="col-md-4">
                <Link href={`/blog/${post.slug}`} className="text-decoration-none">
                  <div className="blog-card card">
                    <div className="blog-card-img">{post.emoji}</div>
                    <div className="card-body p-4">
                      <span className="blog-category">{post.category}</span>
                      <h5 className="card-title">{post.title}</h5>
                      <p className="blog-meta mt-2">{post.date} · {post.readTime} read</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-4 d-md-none">
            <Link href="/blog" className="btn btn-outline-danger rounded-pill px-4">
              View all →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section py-5">
        <div className="container py-3 text-center">
          <h2 className="fw-800 mb-3" style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 800 }}>
            Ready to Plan Your Japan Trip?
          </h2>
          <p className="mb-4 opacity-90" style={{ fontSize: "1.05rem" }}>
            Start with a free consultation. No pressure, just a clear plan.
          </p>
          <div className="d-flex flex-wrap justify-content-center gap-3">
            <a
              href="https://wa.me/62XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-light fw-semibold px-4 py-3 rounded-pill"
              style={{ color: "#c0392b" }}
            >
              💬 Chat on WhatsApp
            </a>
            <a
              href="mailto:hello@japantourged.com"
              className="btn btn-outline-light fw-semibold px-4 py-3 rounded-pill"
            >
              📧 Email Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
