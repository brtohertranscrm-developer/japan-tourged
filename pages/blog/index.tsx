import Head from "next/head";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const posts = [
  {
    image: "https://images.unsplash.com/photo-1522383225653-ed111181a951?auto=format&fit=crop&w=800&q=80",
    category: "Spring",
    title: "Sakura in Japan 2025: A Practical Guide",
    excerpt: "Find the best locations and the right timing to enjoy cherry blossoms across Japan.",
    date: "March 15, 2025",
    readTime: "8 min",
    slug: "panduan-sakura-jepang-2025",
  },
  {
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80",
    category: "Food",
    title: "10 Must-Try Foods for Your First Japan Trip",
    excerpt: "From authentic ramen to street takoyaki, here are the classics you should not miss.",
    date: "April 2, 2025",
    readTime: "6 min",
    slug: "makanan-wajib-jepang",
  },
  {
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80",
    category: "Culture",
    title: "Kyoto Temples: A First-Timer Friendly Route",
    excerpt: "A simple guide to Fushimi Inari, Kinkaku-ji, and Kyoto’s best cultural spots.",
    date: "April 20, 2025",
    readTime: "10 min",
    slug: "kuil-bersejarah-kyoto",
  },
  {
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80",
    category: "Wellness",
    title: "Onsen 101: A Guide for Indonesian Travelers",
    excerpt: "Etiquette, tips, and onsen picks for a smooth, relaxing experience in Japan.",
    date: "May 5, 2025",
    readTime: "7 min",
    slug: "panduan-onsen-jepang",
  },
  {
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=800&q=80",
    category: "Travel Tips",
    title: "How to Use the JR Pass (2025 Guide)",
    excerpt: "Save on transportation in Japan with the JR Pass. Purchase, activation, and route tips.",
    date: "May 12, 2025",
    readTime: "9 min",
    slug: "panduan-jr-pass-2025",
  },
  {
    image: "https://images.unsplash.com/photo-1508193638397-1c4234db14d8?auto=format&fit=crop&w=800&q=80",
    category: "Autumn",
    title: "Momiji Season: Where to See Autumn Colors in Japan",
    excerpt: "Best places and timing to catch koyo (autumn leaves) across Japan.",
    date: "May 20, 2025",
    readTime: "8 min",
    slug: "panduan-momiji-jepang",
  },
];

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog & Tips — Tourged Travel</title>
        <meta name="description" content="Articles, guides, and practical Japan travel tips for Indonesian travelers." />
      </Head>

      <Navbar />

      <section className="page-hero text-center">
        <div className="container">
          <span className="page-hero-label">Blog & Tips</span>
          <h1 className="display-5 fw-bold mt-2">Japan Trip Inspiration</h1>
          <p className="mt-3" style={{ color: "#6b7280" }}>Guides, tips, and stories about Japan for Indonesian travelers.</p>
        </div>
      </section>

      <section className="py-5">
        <div className="container py-3">
          <div className="row g-4">
            {posts.map((post) => (
              <div key={post.slug} className="col-md-6 col-lg-4">
                <Link href={`/blog/${post.slug}`} className="text-decoration-none">
                  <div className="blog-card card h-100">
                    <div className="blog-card-img" style={{ padding: 0, background: "none" }}>
                      <img src={post.image} alt={post.title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                    </div>
                    <div className="card-body p-4">
                      <span className="blog-category">{post.category}</span>
                      <h5 className="card-title mt-1">{post.title}</h5>
                      <p className="text-muted small mt-2" style={{ lineHeight: 1.6 }}>{post.excerpt}</p>
                      <p className="blog-meta mt-3">{post.date} · {post.readTime} read</p>
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
