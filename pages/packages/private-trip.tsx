import Head from "next/head";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const highlights = [
  { icon: "✈️", title: "Tiket Pesawat", desc: "Bantu pencarian tiket terbaik sesuai budget" },
  { icon: "🏨", title: "Akomodasi", desc: "Hotel dan ryokan pilihan di lokasi strategis" },
  { icon: "🗺️", title: "Itinerary Custom", desc: "Rencana perjalanan detail sesuai preferensi" },
  { icon: "🚌", title: "Transportasi", desc: "Panduan JR Pass, IC Card, dan transportasi lokal" },
  { icon: "👨‍✈️", title: "Pemandu Lokal", desc: "Guide berpengalaman untuk spot tersembunyi" },
  { icon: "📞", title: "Support 24/7", desc: "Tim siap membantu selama perjalanan berlangsung" },
];

export default function PrivateTrip() {
  return (
    <>
      <Head>
        <title>Private Trip Jepang — Japan Tourged</title>
        <meta name="description" content="Paket private trip Jepang fully custom sesuai impian Anda. Itinerary personal, guide lokal, dan support penuh." />
      </Head>

      <Navbar />

      <section className="page-hero text-center">
        <div className="container">
          <div style={{ fontSize: "3.5rem", marginBottom: "1rem" }}>🗾</div>
          <span className="page-hero-label">Paket Unggulan</span>
          <h1 className="display-5 fw-bold mt-2">Private Trip Jepang</h1>
          <p className="mt-3" style={{ maxWidth: 520, margin: "0 auto", color: "#6b7280" }}>
            Perjalanan eksklusif yang dirancang 100% sesuai keinginan Anda. Jadwal bebas, destinasi pilihan sendiri.
          </p>
          <div className="mt-4 d-flex flex-wrap justify-content-center gap-3">
            <a
              href="https://wa.me/62XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-custom"
            >
              💬 Konsultasi Gratis
            </a>
            <Link href="/blog" className="btn-outline-custom">
              Baca Tips Trip →
            </Link>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container py-3">
          <div className="text-center mb-5">
            <p className="section-label">Yang Kami Siapkan</p>
            <h2 className="section-title">Semua Sudah Kami Urus</h2>
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

      <section className="py-5" style={{ background: "#fafafa" }}>
        <div className="container py-3">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <p className="section-label">Harga</p>
              <h2 className="section-title mb-3">Estimasi Biaya</h2>
              <p className="text-muted mb-4">Harga bervariasi tergantung durasi, jumlah peserta, dan preferensi akomodasi. Hubungi kami untuk penawaran terbaik.</p>
              <div className="row g-3">
                {[
                  { duration: "5 Hari 4 Malam", price: "Mulai Rp 15 juta", note: "per orang (2 pax)" },
                  { duration: "7 Hari 6 Malam", price: "Mulai Rp 20 juta", note: "per orang (2 pax)" },
                  { duration: "10 Hari 9 Malam", price: "Mulai Rp 28 juta", note: "per orang (2 pax)" },
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
              <p className="text-muted small mt-3">* Harga belum termasuk tiket pesawat. Hubungi kami untuk paket custom sesuai budget.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section py-5">
        <div className="container py-3 text-center">
          <h2 className="fw-bold mb-3" style={{ color: "#fff", fontSize: "2rem" }}>Mulai Rencanakan Trip Anda</h2>
          <p className="mb-4" style={{ color: "rgba(255,255,255,0.85)" }}>Konsultasi gratis, tidak ada komitmen apapun.</p>
          <a
            href="https://wa.me/62XXXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-light fw-semibold px-5 py-3 rounded-pill"
            style={{ color: "#c0392b" }}
          >
            💬 Chat WhatsApp Sekarang
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
