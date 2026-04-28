import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <Head>
        <title>Tentang Kami — Japan Tourged</title>
        <meta name="description" content="Kenali tim Japan Tourged, spesialis wisata Jepang dengan pengalaman 3+ tahun." />
      </Head>

      <Navbar />

      <section className="page-hero text-center">
        <div className="container">
          <span className="page-hero-label">Tentang Kami</span>
          <h1 className="display-5 fw-bold mt-2">Tim di Balik Perjalanan Impian Anda</h1>
          <p className="mt-3" style={{ maxWidth: 520, margin: "0 auto", color: "#6b7280" }}>
            Kami adalah tim pecinta Jepang yang berdedikasi untuk menciptakan pengalaman wisata yang benar-benar personal.
          </p>
        </div>
      </section>

      <section className="py-5">
        <div className="container py-3">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <p className="section-label">Cerita Kami</p>
              <h2 className="section-title mb-4">Lahir dari Kecintaan Terhadap Jepang</h2>
              <p className="text-muted mb-3" style={{ lineHeight: 1.8 }}>
                Japan Tourged didirikan oleh sekelompok traveler yang jatuh cinta dengan Jepang dan ingin berbagi pengalaman tersebut dengan orang lain. Kami percaya bahwa setiap perjalanan haruslah personal dan bermakna.
              </p>
              <p className="text-muted mb-4" style={{ lineHeight: 1.8 }}>
                Dengan lebih dari 3 tahun pengalaman dan 500+ traveler yang telah kami layani, kami memahami bahwa setiap orang memiliki impian perjalanan yang berbeda — dan kami di sini untuk mewujudkannya.
              </p>
              <div className="row g-3">
                {[
                  { num: "500+", label: "Traveler Puas" },
                  { num: "3+", label: "Tahun Pengalaman" },
                  { num: "50+", label: "Destinasi Jepang" },
                  { num: "5★", label: "Rating Rata-rata" },
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
