import Head from "next/head";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const posts = [
  {
    emoji: "🌸",
    category: "Musim Bunga",
    title: "Panduan Lengkap Melihat Sakura di Jepang 2025",
    excerpt: "Temukan lokasi terbaik dan waktu yang tepat untuk menikmati keindahan bunga sakura di seluruh Jepang.",
    date: "15 Maret 2025",
    readTime: "8 menit",
    slug: "panduan-sakura-jepang-2025",
  },
  {
    emoji: "🍜",
    category: "Kuliner",
    title: "10 Makanan Wajib Dicoba Saat Pertama Kali ke Jepang",
    excerpt: "Dari ramen otentik hingga takoyaki jalanan, ini daftar kuliner Jepang yang tidak boleh Anda lewatkan.",
    date: "2 April 2025",
    readTime: "6 menit",
    slug: "makanan-wajib-jepang",
  },
  {
    emoji: "🏯",
    category: "Budaya",
    title: "Menjelajahi Kuil-Kuil Bersejarah di Kyoto",
    excerpt: "Panduan lengkap mengunjungi Fushimi Inari, Kinkaku-ji, dan destinasi budaya terbaik Kyoto.",
    date: "20 April 2025",
    readTime: "10 menit",
    slug: "kuil-bersejarah-kyoto",
  },
  {
    emoji: "♨️",
    category: "Wellness",
    title: "Pengalaman Onsen: Panduan untuk Wisatawan Indonesia",
    excerpt: "Tata cara, etiket, dan rekomendasi onsen terbaik untuk pengalaman relaksasi sempurna di Jepang.",
    date: "5 Mei 2025",
    readTime: "7 menit",
    slug: "panduan-onsen-jepang",
  },
  {
    emoji: "🚅",
    category: "Tips Perjalanan",
    title: "Cara Menggunakan JR Pass: Panduan Lengkap 2025",
    excerpt: "Hemat biaya transportasi di Jepang dengan JR Pass. Cara beli, aktivasi, dan rute terbaik.",
    date: "12 Mei 2025",
    readTime: "9 menit",
    slug: "panduan-jr-pass-2025",
  },
  {
    emoji: "🍂",
    category: "Musim Gugur",
    title: "Momiji: Panduan Menikmati Dedaunan Merah di Jepang",
    excerpt: "Lokasi dan waktu terbaik untuk menyaksikan keindahan koyo (dedaunan musim gugur) di Jepang.",
    date: "20 Mei 2025",
    readTime: "8 menit",
    slug: "panduan-momiji-jepang",
  },
];

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog & Tips Wisata Jepang — Japan Tourged</title>
        <meta name="description" content="Artikel, panduan, dan tips perjalanan wisata Jepang terlengkap untuk traveler Indonesia." />
      </Head>

      <Navbar />

      <section className="page-hero text-center">
        <div className="container">
          <span className="page-hero-label">Blog & Tips</span>
          <h1 className="display-5 fw-bold mt-2">Inspirasi Perjalanan Jepang</h1>
          <p className="mt-3" style={{ color: "#6b7280" }}>Panduan, tips, dan cerita dari Jepang untuk traveler Indonesia.</p>
        </div>
      </section>

      <section className="py-5">
        <div className="container py-3">
          <div className="row g-4">
            {posts.map((post) => (
              <div key={post.slug} className="col-md-6 col-lg-4">
                <Link href={`/blog/${post.slug}`} className="text-decoration-none">
                  <div className="blog-card card h-100">
                    <div className="blog-card-img">{post.emoji}</div>
                    <div className="card-body p-4">
                      <span className="blog-category">{post.category}</span>
                      <h5 className="card-title mt-1">{post.title}</h5>
                      <p className="text-muted small mt-2" style={{ lineHeight: 1.6 }}>{post.excerpt}</p>
                      <p className="blog-meta mt-3">{post.date} · {post.readTime} baca</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
