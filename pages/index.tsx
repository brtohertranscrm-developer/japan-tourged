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

const popularSpots = [
  {
    id: "tokyo",
    name: "Tokyo",
    area: "Kanto",
    blurb: "City energy, shopping, cafés, neighborhoods, day trips.",
    x: 64,
    y: 56,
  },
  {
    id: "fuji",
    name: "Mt. Fuji / Hakone",
    area: "Kanto",
    blurb: "Iconic views, lakes, ryokan vibes, onsen options.",
    x: 58,
    y: 60,
  },
  {
    id: "kyoto",
    name: "Kyoto",
    area: "Kansai",
    blurb: "Temples, old streets, calm mornings, culture-focused pace.",
    x: 47,
    y: 67,
  },
  {
    id: "osaka",
    name: "Osaka",
    area: "Kansai",
    blurb: "Food streets, fun nightlife, easy base for day trips.",
    x: 44,
    y: 70,
  },
  {
    id: "sapporo",
    name: "Sapporo",
    area: "Hokkaido",
    blurb: "Cooler weather, nature, seafood, relaxed city feel.",
    x: 74,
    y: 26,
  },
  {
    id: "hiroshima",
    name: "Hiroshima",
    area: "Chugoku",
    blurb: "History, food, and an easy visit to Miyajima.",
    x: 33,
    y: 76,
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
      <section className="hero-full">
        <div id="heroFullCarousel" className="carousel slide carousel-fade hero-carousel" data-bs-ride="carousel" data-bs-interval="4500">
          <div className="carousel-inner">
            {bannerSlides.map((slide, idx) => (
              <div key={idx} className={`carousel-item ${idx === 0 ? "active" : ""}`}>
                <div className="hero-slide">
                  <img src={slide.src} alt={slide.alt} className="hero-slide-img" />
                  <div className="hero-slide-scrim" />
                </div>
              </div>
            ))}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#heroFullCarousel" data-bs-slide="prev" aria-label="Previous slide">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#heroFullCarousel" data-bs-slide="next" aria-label="Next slide">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
          </button>

          <div className="hero-overlay">
            <div className="container">
              <div className="hero-overlay-inner">
                <span className="hero-badge">✨ Curated Japan Trips for Indonesian Travelers</span>
                <h1 className="hero-title hero-title-on-image mb-3">
                  Japan Trips That Feel
                  <br />
                  <span>Personal, Smooth, and Meaningful</span>
                </h1>
                <p className="hero-subtitle hero-subtitle-on-image mb-4">
                  A realistic plan with clear pacing and budget ranges. As a new service, early clients get extra care and revisions.
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
                  <a href="#map" className="btn-outline-custom">
                    Explore Popular Spots →
                  </a>
                </div>
                <div className="hero-mini-proof">
                  <span>🧭 Clear route</span>
                  <span>💸 Clear budget</span>
                  <span>🤝 Extra care for early clients</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="map-section py-5" id="map">
        <div className="container py-3">
          <div className="row align-items-start g-4">
            <div className="col-lg-5">
              <p className="section-label">Map</p>
              <h2 className="section-title mb-2">Popular Spots, One Click Away</h2>
              <p className="text-muted" style={{ lineHeight: 1.75 }}>
                Tap a pin to see what each area is best for. We’ll help you pick a route that matches your vibe and timing.
              </p>
              <div className="map-legend mt-3">
                <span className="map-legend-dot" style={{ background: "var(--primary)" }} /> Most requested
                <span className="map-legend-dot ms-3" style={{ background: "var(--accent)" }} /> Great for first-timers
              </div>
            </div>

            <div className="col-lg-7">
              <div className="map-shell">
                <div className="map-surface">
                  <svg className="japan-svg" viewBox="0 0 100 100" role="img" aria-label="Japan map">
                    <defs>
                      <linearGradient id="jpGrad" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0" stopColor="#ffffff" />
                        <stop offset="1" stopColor="#fbfaf6" />
                      </linearGradient>
                    </defs>
                    {/* Stylized silhouette (not geographic-accurate) */}
                    <path
                      d="M72 10c6 5 7 12 4 18-2 4-2 7 1 10 5 6 6 12 2 17-3 4-7 6-11 7-2 1-3 2-3 4 0 6-4 10-11 12-7 2-12 4-14 7-2 4-6 6-11 5-5-1-8-5-7-10 1-5 4-8 9-10 4-2 7-5 7-9 0-5-4-9-9-12-6-4-8-9-6-14 2-5 7-8 13-8 2 0 3-1 4-3 2-5 6-8 12-9 6-1 11-2 13-5 2-3 4-5 7-7z"
                      fill="url(#jpGrad)"
                      stroke="rgba(62,61,143,0.22)"
                      strokeWidth="1.1"
                    />
                  </svg>

                  {popularSpots.map((spot) => (
                    <button
                      key={spot.id}
                      type="button"
                      className="map-pin"
                      style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                      onClick={() => {
                        const el = document.getElementById(`spot-${spot.id}`);
                        if (el) el.scrollIntoView({ behavior: "smooth", block: "nearest" });
                      }}
                      aria-label={`Show ${spot.name}`}
                    >
                      <span className="map-pin-dot" />
                    </button>
                  ))}
                </div>
              </div>

              <div className="row g-3 mt-3">
                {popularSpots.map((spot) => (
                  <div key={spot.id} className="col-sm-6">
                    <div id={`spot-${spot.id}`} className="map-card">
                      <div className="d-flex justify-content-between align-items-start gap-3">
                        <div>
                          <h6 className="fw-bold mb-1" style={{ color: "var(--dark)" }}>
                            {spot.name}
                          </h6>
                          <div className="small text-muted">{spot.area}</div>
                        </div>
                        <span className="map-chip">Popular</span>
                      </div>
                      <p className="small text-muted mb-0 mt-2" style={{ lineHeight: 1.65 }}>
                        {spot.blurb}
                      </p>
                    </div>
                  </div>
                ))}
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

      {/* FAQ */}
      <section className="py-5" id="faq">
        <div className="container py-3">
          <div className="text-center mb-5">
            <p className="section-label">FAQ</p>
            <h2 className="section-title">First Time to Japan? Totally Normal.</h2>
            <p className="text-muted mt-2" style={{ maxWidth: 720, margin: "0 auto" }}>
              Here are the most common worries we hear from Indonesian travelers, and how we help you plan around them.
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="accordion" id="homeFaq">
                {[
                  {
                    q: "I’m worried about the language barrier. Will I get lost?",
                    a: "You’ll be fine with a good plan. We provide simple directions, station names, and practical tips for trains, tickets, and basic phrases. For your trip style, we keep routes realistic so you’re not switching lines every 10 minutes.",
                  },
                  {
                    q: "Is Japan expensive? How do I control the budget?",
                    a: "Japan can be affordable if the route and transport are planned correctly. We map cost ranges (transport, meals, tickets) and give options: budget-friendly, standard, or comfort. You choose the level, we keep it consistent.",
                  },
                  {
                    q: "Do I need a visa? Can you help?",
                    a: "Visa rules depend on your passport and current policies. We don’t issue visas, but we can guide you on the typical documents, timeline, and what to prepare so you’re not guessing.",
                  },
                  {
                    q: "What about internet, cashless payments, and IC cards?",
                    a: "We recommend the simplest setup for your route (eSIM/pocket WiFi) and explain where IC cards work best. We’ll also note when cash is still useful (small shops, rural areas, some ticket machines).",
                  },
                  {
                    q: "I’m Muslim. Is halal food hard to find?",
                    a: "It depends on the city. We can suggest Muslim-friendly areas and practical options (seafood/vegetarian choices). We’ll be transparent when choices are limited so expectations stay realistic.",
                  },
                  {
                    q: "How does your service work, and what do I actually get?",
                    a: "Start with a free consultation. Then we propose a route + budget range. After you confirm, we deliver a day-by-day itinerary, transport guidance, and recommendations tailored to your vibe. As a new service, early clients get extra attention and revisions.",
                  },
                ].map((item, idx) => (
                  <div className="accordion-item" key={item.q} style={{ borderRadius: 14, overflow: "hidden", border: "1px solid var(--border)" }}>
                    <h2 className="accordion-header">
                      <button
                        className={`accordion-button ${idx === 0 ? "" : "collapsed"}`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#homeFaq-${idx}`}
                        aria-expanded={idx === 0 ? "true" : "false"}
                        aria-controls={`homeFaq-${idx}`}
                        style={{ background: "#fff", color: "var(--dark)", fontWeight: 700 }}
                      >
                        {item.q}
                      </button>
                    </h2>
                    <div
                      id={`homeFaq-${idx}`}
                      className={`accordion-collapse collapse ${idx === 0 ? "show" : ""}`}
                      data-bs-parent="#homeFaq"
                    >
                      <div className="accordion-body" style={{ background: "#fffef9", color: "var(--text)", lineHeight: 1.75 }}>
                        {item.a}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center mt-4">
                <Link href="/faq" className="btn btn-outline-danger rounded-pill px-4">
                  View Full FAQ →
                </Link>
              </div>
            </div>
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
