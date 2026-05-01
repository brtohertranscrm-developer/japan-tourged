import Head from "next/head";
import Link from "next/link";
import { GetStaticPaths, GetStaticProps } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const posts: Record<string, { emoji: string; category: string; title: string; date: string; readTime: string; content: string }> = {
  "panduan-sakura-jepang-2025": {
    emoji: "🌸",
    category: "Spring",
    title: "Sakura in Japan 2025: A Practical Guide",
    date: "March 15, 2025",
    readTime: "8 min",
    content: `
      <p>Cherry blossoms (sakura) are one of Japan’s most iconic seasonal moments. Every year, travelers from around the world come to enjoy the soft pink blooms that only last for a short time.</p>
      <h3>Best Time to See Sakura</h3>
      <p>Sakura typically bloom from late March to early April, depending on the region and weather. Tokyo is often around late March to early April, while Kyoto can be slightly later.</p>
      <h3>Best Spots</h3>
      <ul>
        <li><strong>Shinjuku Gyoen, Tokyo</strong> — A spacious park with multiple sakura varieties</li>
        <li><strong>Maruyama Park, Kyoto</strong> — Famous for its beautiful weeping cherry tree</li>
        <li><strong>Hirosaki Castle, Aomori</strong> — Over 2,000 sakura trees around the castle</li>
        <li><strong>Philosopher's Path, Kyoto</strong> — A romantic canal-side walk lined with blossoms</li>
      </ul>
      <h3>Hanami Tips (Sakura Picnic)</h3>
      <p>Hanami is the tradition of picnicking under sakura trees. Come early to get a good spot, bring snacks and drinks, and enjoy the moment with your favorite people.</p>
    `,
  },
  "makanan-wajib-jepang": {
    emoji: "🍜",
    category: "Food",
    title: "10 Must-Try Foods for Your First Japan Trip",
    date: "April 2, 2025",
    readTime: "6 min",
    content: `
      <p>Japan is a food lover’s paradise. From affordable street food to Michelin-star dining, there’s something for every taste and budget.</p>
      <h3>Must-Try List</h3>
      <ol>
        <li><strong>Ramen</strong> — Noodle soup with styles like shoyu, miso, tonkotsu, and shio</li>
        <li><strong>Sushi & Sashimi</strong> — Try conveyor-belt (kaiten-zushi) or traditional spots</li>
        <li><strong>Takoyaki</strong> — Savory Osaka-style octopus balls</li>
        <li><strong>Tempura</strong> — Light, crispy battered seafood and veggies</li>
        <li><strong>Yakitori</strong> — Grilled chicken skewers with sweet-savory tare sauce</li>
        <li><strong>Onigiri</strong> — Rice balls with fillings, sold everywhere at convenience stores</li>
        <li><strong>Udon</strong> — Thick noodles in a gentle dashi broth</li>
        <li><strong>Gyoza</strong> — Pan-fried or steamed dumplings</li>
        <li><strong>Matcha desserts</strong> — Ice cream, mochi, and cakes with green tea flavor</li>
        <li><strong>Wagyu beef</strong> — Premium beef with rich marbling</li>
      </ol>
    `,
  },
  "kuil-bersejarah-kyoto": {
    emoji: "🏯",
    category: "Culture",
    title: "Kyoto Temples: A First-Timer Friendly Route",
    date: "April 20, 2025",
    readTime: "10 min",
    content: `
      <p>Kyoto is the heart of Japanese culture, with over 1,600 Buddhist temples and 400 Shinto shrines. The city holds UNESCO World Heritage sites and centuries of history.</p>
      <h3>Must-Visit Spots</h3>
      <p><strong>Fushimi Inari Taisha</strong> — Famous for thousands of red torii gates forming a path up the mountain. Open 24 hours, free entry.</p>
      <p><strong>Kinkaku-ji (Golden Pavilion)</strong> — A gold-leaf pavilion reflected in a pond. One of Japan’s most photogenic icons.</p>
      <p><strong>Arashiyama Bamboo Grove</strong> — A magical bamboo forest, best for early-morning photos before the crowds.</p>
      <p><strong>Gion District</strong> — A historic geisha district with preserved machiya (traditional wooden townhouses).</p>
      <h3>Visit Tips</h3>
      <p>Start early (before 8 AM) to avoid crowds. Consider a Kyoto City Bus pass for affordable transport between spots.</p>
    `,
  },
};

const fallbackPost = {
  emoji: "📝",
  category: "Tips",
  title: "Article Coming Soon",
  date: "-",
  readTime: "-",
  content: "<p>This article is currently being prepared. Please check back soon.</p>",
};

interface Props {
  slug: string;
}

export default function BlogPost({ slug }: Props) {
  const post = posts[slug] || fallbackPost;

  return (
    <>
      <Head>
        <title>{post.title} — Tourged Travel</title>
        <meta name="description" content={`${post.title} — Japan travel tips and guides from Tourged Travel.`} />
      </Head>

      <Navbar />

      <section className="page-hero text-center">
        <div className="container">
          <div style={{ fontSize: "3.5rem", marginBottom: "1rem" }}>{post.emoji}</div>
          <span className="blog-category mb-2 d-inline-block">{post.category}</span>
          <h1 className="display-6 fw-bold" style={{ maxWidth: 700, margin: "0 auto", color: "#111827" }}>{post.title}</h1>
          <p className="mt-3 small" style={{ color: "#6b7280" }}>{post.date} · {post.readTime} read</p>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <Link href="/blog" className="text-decoration-none text-muted small d-inline-flex align-items-center gap-1 mb-4">
                ← Back to Blog
              </Link>
              <div
                className="blog-content"
                style={{ lineHeight: 1.9, color: "#444", fontSize: "1.05rem" }}
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              <div className="mt-5 p-4 rounded-4 text-center" style={{ background: "#fff5f5", border: "1px solid #f5c6cb" }}>
                <h5 className="fw-bold" style={{ color: "#c0392b" }}>Planning a Japan Trip?</h5>
                <p className="text-muted small mb-3">Talk to our team for a free consultation and a clear plan.</p>
                <a
                  href="https://wa.me/62XXXXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn fw-semibold px-4 py-2 rounded-pill"
                  style={{ background: "#c0392b", color: "#fff", border: "none" }}
                >
                  💬 Free Consultation
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
