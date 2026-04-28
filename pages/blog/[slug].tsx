import Head from "next/head";
import Link from "next/link";
import { GetStaticPaths, GetStaticProps } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const posts: Record<string, { emoji: string; category: string; title: string; date: string; readTime: string; content: string }> = {
  "panduan-sakura-jepang-2025": {
    emoji: "🌸",
    category: "Musim Bunga",
    title: "Panduan Lengkap Melihat Sakura di Jepang 2025",
    date: "15 Maret 2025",
    readTime: "8 menit",
    content: `
      <p>Bunga sakura (cherry blossom) adalah salah satu atraksi paling ikonik di Jepang. Setiap tahun, jutaan wisatawan dari seluruh dunia datang untuk menyaksikan keindahan bunga merah muda yang mekar singkat ini.</p>
      <h3>Waktu Terbaik Melihat Sakura</h3>
      <p>Sakura biasanya mekar antara akhir Maret hingga awal April, tergantung lokasi dan kondisi cuaca. Tokyo biasanya mekar sekitar 25 Maret - 7 April, sementara Kyoto sedikit lebih lambat.</p>
      <h3>Lokasi Terbaik</h3>
      <ul>
        <li><strong>Shinjuku Gyoen, Tokyo</strong> — Taman luas dengan berbagai jenis sakura</li>
        <li><strong>Maruyama Park, Kyoto</strong> — Terkenal dengan pohon sakura weeping yang megah</li>
        <li><strong>Hirosaki Castle, Aomori</strong> — Lebih dari 2.000 pohon sakura di sekitar kastil</li>
        <li><strong>Philosopher's Path, Kyoto</strong> — Jalur romantis di sepanjang kanal berbatas sakura</li>
      </ul>
      <h3>Tips Hanami (Piknik Sakura)</h3>
      <p>Hanami adalah tradisi Jepang piknik di bawah pohon sakura. Datanglah lebih awal untuk mendapatkan tempat terbaik, bawa makanan dan minuman, dan nikmati momen bersama orang-orang tersayang.</p>
    `,
  },
  "makanan-wajib-jepang": {
    emoji: "🍜",
    category: "Kuliner",
    title: "10 Makanan Wajib Dicoba Saat Pertama Kali ke Jepang",
    date: "2 April 2025",
    readTime: "6 menit",
    content: `
      <p>Jepang adalah surga kuliner. Dari makanan jalanan murah hingga restoran bintang Michelin, ada sesuatu untuk setiap selera dan budget.</p>
      <h3>Daftar Kuliner Wajib</h3>
      <ol>
        <li><strong>Ramen</strong> — Mie kuah dengan berbagai varian: shoyu, miso, tonkotsu, shio</li>
        <li><strong>Sushi & Sashimi</strong> — Nikmati di conveyor belt (kaiten-zushi) atau restoran tradisional</li>
        <li><strong>Takoyaki</strong> — Bola-bola isi gurita khas Osaka yang gurih</li>
        <li><strong>Tempura</strong> — Gorengan tepung tipis yang renyah, segar dari minyak panas</li>
        <li><strong>Yakitori</strong> — Sate ayam bakar dengan saus tare yang manis gurih</li>
        <li><strong>Onigiri</strong> — Nasi kepal isi berbagai topping, tersedia di setiap convenience store</li>
        <li><strong>Udon</strong> — Mie tebal kenyal dalam kuah dashi yang lembut</li>
        <li><strong>Gyoza</strong> — Pangsit goreng/kukus dengan kulit tipis renyah</li>
        <li><strong>Matcha desserts</strong> — Es krim, mochi, dan kue berbasis teh hijau</li>
        <li><strong>Wagyu beef</strong> — Daging sapi premium Jepang dengan marbling sempurna</li>
      </ol>
    `,
  },
  "kuil-bersejarah-kyoto": {
    emoji: "🏯",
    category: "Budaya",
    title: "Menjelajahi Kuil-Kuil Bersejarah di Kyoto",
    date: "20 April 2025",
    readTime: "10 menit",
    content: `
      <p>Kyoto adalah jantung budaya Jepang dengan lebih dari 1.600 kuil Buddha dan 400 kuil Shinto. Kota ini adalah UNESCO World Heritage Site yang menyimpan sejarah ribuan tahun.</p>
      <h3>Kuil Wajib Dikunjungi</h3>
      <p><strong>Fushimi Inari Taisha</strong> — Terkenal dengan ribuan torii merah yang membentuk lorong menuju puncak gunung. Buka 24 jam, gratis masuk.</p>
      <p><strong>Kinkaku-ji (Golden Pavilion)</strong> — Paviliun berlapis emas yang memantulkan bayangan di kolam. Salah satu ikon Jepang yang paling fotogenik.</p>
      <p><strong>Arashiyama Bamboo Grove</strong> — Hutan bambu yang magis, sempurna untuk foto pagi hari sebelum ramai pengunjung.</p>
      <p><strong>Gion District</strong> — Distrik geisha bersejarah dengan bangunan machiya (rumah kayu) tradisional yang masih terpelihara.</p>
      <h3>Tips Berkunjung</h3>
      <p>Datanglah pagi hari (sebelum jam 8) untuk menghindari kerumunan. Gunakan Kyoto City Bus pass untuk transportasi murah antar destinasi.</p>
    `,
  },
};

const fallbackPost = {
  emoji: "📝",
  category: "Tips",
  title: "Artikel Segera Hadir",
  date: "-",
  readTime: "-",
  content: "<p>Konten artikel ini sedang dalam proses penulisan. Silakan kembali lagi nanti.</p>",
};

interface Props {
  slug: string;
}

export default function BlogPost({ slug }: Props) {
  const post = posts[slug] || fallbackPost;

  return (
    <>
      <Head>
        <title>{post.title} — Japan Tourged</title>
        <meta name="description" content={`${post.title} — Tips dan panduan wisata Jepang dari Japan Tourged.`} />
      </Head>

      <Navbar />

      <section className="page-hero text-center">
        <div className="container">
          <div style={{ fontSize: "3.5rem", marginBottom: "1rem" }}>{post.emoji}</div>
          <span className="blog-category mb-2 d-inline-block">{post.category}</span>
          <h1 className="display-6 fw-bold" style={{ maxWidth: 700, margin: "0 auto", color: "#111827" }}>{post.title}</h1>
          <p className="mt-3 small" style={{ color: "#6b7280" }}>{post.date} · {post.readTime} baca</p>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <Link href="/blog" className="text-decoration-none text-muted small d-inline-flex align-items-center gap-1 mb-4">
                ← Kembali ke Blog
              </Link>
              <div
                className="blog-content"
                style={{ lineHeight: 1.9, color: "#444", fontSize: "1.05rem" }}
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              <div className="mt-5 p-4 rounded-4 text-center" style={{ background: "#fff5f5", border: "1px solid #f5c6cb" }}>
                <h5 className="fw-bold" style={{ color: "#c0392b" }}>Tertarik Wisata ke Jepang?</h5>
                <p className="text-muted small mb-3">Konsultasikan rencana perjalanan Anda bersama tim kami secara gratis.</p>
                <a
                  href="https://wa.me/62XXXXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn fw-semibold px-4 py-2 rounded-pill"
                  style={{ background: "#c0392b", color: "#fff", border: "none" }}
                >
                  💬 Konsultasi Gratis
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = Object.keys(posts);
  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  return {
    props: { slug: params?.slug as string },
  };
};
