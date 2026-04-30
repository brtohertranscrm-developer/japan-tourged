import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const IMAGEKIT_BASE = "https://ik.imagekit.io/tourged";
const PROJECT_BASE = `${IMAGEKIT_BASE}/Project%20tourged.id`;

const bannerSlides = [
  { src: `${PROJECT_BASE}/IMG_2324.JPG?updatedAt=1777528837654&tr=w-900,h-675,c-maintain_ratio`, alt: "Japan Travel - Pemandangan Indah" },
  { src: `${PROJECT_BASE}/38dd9088-3af6-4d03-ba59-3d7799f84925.jpg?updatedAt=1777528837931&tr=w-900,h-675,c-maintain_ratio`, alt: "Japan Travel - Pengalaman Budaya" },
  { src: `${PROJECT_BASE}/45e0af3c-8d21-4adb-b140-761b8bcea108.jpg?updatedAt=1777528837365&tr=w-900,h-675,c-maintain_ratio`, alt: "Japan Travel - Wisata Alam" },
  { src: `${PROJECT_BASE}/IMG_2332.JPG?updatedAt=1777528836709&tr=w-900,h-675,c-maintain_ratio`, alt: "Japan Travel - Kuliner Jepang" },
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
    image: `${IMAGEKIT_BASE}/tr:w-600,h-320/card-private.jpg`,
    title: "Private Trip",
    desc: "Perjalanan eksklusif yang dirancang khusus sesuai keinginan Anda. Bebas atur jadwal, destinasi, dan budget.",
    href: "/packages/private-trip",
  },
  {
    image: `${IMAGEKIT_BASE}/tr:w-600,h-320/card-oneday.jpg`,
    title: "One Day Tour",
    desc: "Jelajahi highlight terbaik Jepang dalam satu hari penuh bersama guide berpengalaman.",
    href: "/packages/one-day-tour",
  },
  {
    image: `${IMAGEKIT_BASE}/tr:w-600,h-320/card-company.jpg`,
    title: "Company Trip",
    desc: "Paket wisata tim perusahaan yang profesional dan memorable. Cocok untuk team building.",
    href: "/packages/company-trip",
  },
  {
    image: `${IMAGEKIT_BASE}/tr:w-600,h-320/card-honeymoon.jpg`,
    title: "Honeymoon",
    desc: "Rayakan momen spesial di Jepang dengan sentuhan romantis yang tak terlupakan.",
    href: "/packages/honeymoon",
  },
];

const steps = [
  { num: "1", title: "Konsultasi Gratis", desc: "Ceritakan impian perjalanan Anda kepada tim kami via WhatsApp atau Google Meet." },
  { num: "2", title: "Desain Itinerary", desc: "Kami rancang itinerary custom yang sesuai budget, waktu, dan preferensi Anda." },
  { num: "3", title: "Konfirmasi & Booking", desc: "Review rencana perjalanan, lakukan pembayaran, dan semua siap diurus oleh kami." },
  { num: "4", title: "Berangkat!", desc: "Nikmati perjalanan impian ke Jepang tanpa khawatir, kami siap membantu 24/7." },
];

const testimonials = [
  {
    name: "Rina Susanti",
    origin: "Jakarta",
    text: "Pelayanannya luar biasa! Itinerary yang dibuat sangat detail dan sesuai dengan keinginan kami. Trip ke Kyoto dan Osaka jadi pengalaman terbaik dalam hidup.",
  },
  {
    name: "Budi Hartono",
    origin: "Surabaya",
    text: "Honeymoon kami di Jepang berjalan sempurna berkat tim yang sangat profesional dan responsif. Setiap detail diperhatikan dengan baik.",
  },
  {
    name: "Dewi Rahayu",
    origin: "Bandung",
    text: "Company trip kami ke Tokyo sukses besar! Tim sangat membantu dari awal hingga akhir. Pasti akan repeat order lagi tahun depan.",
  },
];

const blogPosts = [
  {
    emoji: "🌸",
    category: "Musim Bunga",
    title: "Panduan Lengkap Melihat Sakura di Jepang 2025",
    date: "15 Maret 2025",
    readTime: "8 menit",
    slug: "panduan-sakura-jepang-2025",
  },
  {
    emoji: "🍜",
    category: "Kuliner",
    title: "10 Makanan Wajib Dicoba Saat Pertama Kali ke Jepang",
    date: "2 April 2025",
    readTime: "6 menit",
    slug: "makanan-wajib-jepang",
  },
  {
    emoji: "🏯",
    category: "Budaya",
    title: "Menjelajahi Kuil-Kuil Bersejarah di Kyoto",
    date: "20 April 2025",
    readTime: "10 menit",
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
        <title>Japan Tourged — Wisata Jepang Personal & Custom</title>
        <meta
          name="description"
          content="Spesialis wisata Jepang dengan itinerary custom, private trip, honeymoon, dan company trip. Konsultasi gratis, lebih dari 500+ traveler puas."
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
              <span className="hero-badge">✨ Spesialis Wisata Jepang #1</span>
              <h1 className="hero-title mb-3">
                Jepang, Persis Seperti<br />
                <span>Yang Kamu Impikan</span>
              </h1>
              <p className="hero-subtitle mb-4">
                Kami merancang perjalanan Jepang yang benar-benar personal — dari itinerary hingga pengalaman lokal yang autentik.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <a
                  href="https://wa.me/62XXXXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary-custom"
                >
                  💬 Konsultasikan Gratis
                </a>
                <a
                  href="https://wa.me/62XXXXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-custom"
                >
                  Hubungi Kami →
                </a>
              </div>
              <div className="hero-stats">
                <div className="stat-item">
                  <h3>500+</h3>
                  <p>Traveler Puas</p>
                </div>
                <div className="stat-item">
                  <h3>5★</h3>
                  <p>Rating</p>
                </div>
                <div className="stat-item">
                  <h3>3 Thn</h3>
                  <p>Pengalaman</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 d-none d-lg-block">
              <div className="hero-video-card position-relative overflow-hidden p-0" style={{ borderRadius: '24px', height: '480px' }}>
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
                {/* Floating info cards */}
                <div className="hero-floating-card" style={{ top: "1.5rem", left: "-1.2rem" }}>
                  <span className="hero-floating-dot" style={{ background: "#22c55e" }} />
                  🌸 Sakura Season Ready
                </div>
                <div className="hero-floating-card" style={{ bottom: "5.5rem", right: "-1.2rem" }}>
                  ⭐ 5.0 · 500+ Review
                </div>
                <div className="hero-floating-card" style={{ bottom: "2rem", left: "-1.2rem" }}>
                  ✈️ Custom Itinerary
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
            <p className="section-label">Layanan Kami</p>
            <h2 className="section-title">Perjalanan untuk Setiap Momen</h2>
            <p className="text-muted mt-2" style={{ maxWidth: 520, margin: "0 auto" }}>
              Dari trip solo hingga bulan madu, kami siap merancang pengalaman Jepang terbaik untuk Anda.
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
                      Selengkapnya →
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
            <p className="section-label">Cara Kerja</p>
            <h2 className="section-title">Mudah & Tanpa Ribet</h2>
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

      {/* Testimonials */}
      <section className="py-5">
        <div className="container py-3">
          <div className="text-center mb-5">
            <p className="section-label">Testimoni</p>
            <h2 className="section-title">Apa Kata Mereka</h2>
            <p className="text-muted mt-2">Lebih dari 500+ traveler telah mempercayakan perjalanan impian mereka kepada kami.</p>
          </div>
          <div className="row g-4">
            {testimonials.map((t) => (
              <div key={t.name} className="col-md-4">
                <div className="testimonial-card">
                  <div className="testimonial-stars">★★★★★</div>
                  <p className="testimonial-text">"{t.text}"</p>
                  <div className="testimonial-author">
                    <div className="testimonial-avatar">{t.name[0]}</div>
                    <div>
                      <h6>{t.name}</h6>
                      <small>{t.origin}</small>
                    </div>
                  </div>
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
            <p className="section-label">Galeri Destinasi</p>
            <h2 className="section-title">Momen Tak Terlupakan</h2>
            <p className="text-muted mt-2">Intip beberapa momen keindahan destinasi di Jepang bersama kami.</p>
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
              <h2 className="section-title">Inspirasi Perjalanan Jepang</h2>
            </div>
            <Link href="/blog" className="btn btn-outline-danger rounded-pill px-4 d-none d-md-block">
              Semua Artikel →
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
                      <p className="blog-meta mt-2">{post.date} · {post.readTime} baca</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-4 d-md-none">
            <Link href="/blog" className="btn btn-outline-danger rounded-pill px-4">
              Semua Artikel →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section py-5">
        <div className="container py-3 text-center">
          <h2 className="fw-800 mb-3" style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 800 }}>
            Siap Wujudkan Trip Impian ke Jepang?
          </h2>
          <p className="mb-4 opacity-90" style={{ fontSize: "1.05rem" }}>
            Konsultasi gratis bersama tim kami, tidak ada komitmen apapun.
          </p>
          <div className="d-flex flex-wrap justify-content-center gap-3">
            <a
              href="https://wa.me/62XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-light fw-semibold px-4 py-3 rounded-pill"
              style={{ color: "#c0392b" }}
            >
              💬 Chat WhatsApp Sekarang
            </a>
            <a
              href="mailto:hello@japantourged.com"
              className="btn btn-outline-light fw-semibold px-4 py-3 rounded-pill"
            >
              📧 Kirim Email
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
