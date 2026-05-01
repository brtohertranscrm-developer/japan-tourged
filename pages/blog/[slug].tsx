import Head from "next/head";
import Link from "next/link";
import { GetStaticPaths, GetStaticProps } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const posts: Record<string, { image: string; category: string; title: string; date: string; readTime: string; content: string }> = {
  "panduan-sakura-jepang-2025": {
    image: "https://images.unsplash.com/photo-1522383225653-ed111181a951?auto=format&fit=crop&w=1200&q=80",
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
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=1200&q=80",
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
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80",
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
  "panduan-onsen-jepang": {
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80",
    category: "Wellness",
    title: "Onsen 101: A Guide for Indonesian Travelers",
    date: "May 5, 2025",
    readTime: "7 min",
    content: `
      <p>Onsen (hot spring baths) are one of Japan’s most beloved cultural experiences. For many visitors, soaking in a natural hot spring surrounded by mountains or forest is the highlight of the entire trip.</p>
      <h3>What Is an Onsen?</h3>
      <p>An onsen is a hot spring bath fed by geothermal water. Japan has thousands of them, each with different mineral content, temperature, and setting — from outdoor rocky pools (rotenburo) to indoor ryokan baths.</p>
      <h3>Onsen Etiquette</h3>
      <ul>
        <li><strong>Shower first</strong> — Always wash your body thoroughly at the shower station before entering the communal pool</li>
        <li><strong>No swimwear</strong> — Most onsens are entered without clothing. Towels are for drying, not covering up inside the pool</li>
        <li><strong>Keep hair up</strong> — Tie long hair so it doesn’t touch the water</li>
        <li><strong>No phones or cameras</strong> — Photography is strictly prohibited inside onsen areas</li>
        <li><strong>Tattoo policy</strong> — Many traditional onsens prohibit visible tattoos. Check beforehand if this applies to you</li>
      </ul>
      <h3>Best Onsen Destinations</h3>
      <p><strong>Hakone</strong> — Close to Tokyo with stunning Mt. Fuji views from some rotenburo pools. Perfect for a 1–2 night stay.</p>
      <p><strong>Beppu (Kyushu)</strong> — One of Japan’s largest onsen resort towns. Famous for its "hell hot springs" (jigoku) that are colorful and steaming.</p>
      <p><strong>Kinosaki Onsen (Hyogo)</strong> — A charming hot spring town where you walk between seven public bathhouses in a yukata (cotton robe).</p>
      <p><strong>Noboribetsu (Hokkaido)</strong> — Known for its variety of spring water types in a single location, set in a volcanic valley.</p>
      <h3>Tips for Muslim Travelers</h3>
      <p>Some private-room onsens (kashikiri) can be booked exclusively for your group, which is ideal if you prefer a more private experience. Many ryokan now offer this option.</p>
    `,
  },
  "panduan-jr-pass-2025": {
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1200&q=80",
    category: "Travel Tips",
    title: "How to Use the JR Pass (2025 Guide)",
    date: "May 12, 2025",
    readTime: "9 min",
    content: `
      <p>The Japan Rail (JR) Pass is one of the most useful tools for travelers covering multiple cities in Japan. It gives you unlimited rides on most JR trains — including the famous Shinkansen bullet trains — for a fixed number of days.</p>
      <h3>Is the JR Pass Worth It?</h3>
      <p>The pass is worth it if you’re traveling between major cities like Tokyo, Kyoto, Osaka, and Hiroshima. A single Tokyo–Kyoto Shinkansen round trip alone can cost close to the price of a 7-day pass.</p>
      <p>If you’re staying in one city or only doing short trips, a pass may not be necessary. Compare your expected routes before buying.</p>
      <h3>Types of JR Pass</h3>
      <ul>
        <li><strong>7-day pass</strong> — Best for Tokyo → Kyoto/Osaka routes</li>
        <li><strong>14-day pass</strong> — Suitable if adding Hiroshima, Fukuoka, or Hokkaido</li>
        <li><strong>21-day pass</strong> — For long multi-region itineraries</li>
      </ul>
      <h3>How to Buy</h3>
      <p>Purchase online before departing Indonesia — from the official JR Pass website or authorized resellers. You’ll receive an Exchange Order (voucher) to exchange at a JR office upon arrival in Japan.</p>
      <p>Note: Since October 2023, the JR Pass price increased significantly. Always recalculate based on your actual route before purchasing.</p>
      <h3>How to Activate</h3>
      <ol>
        <li>Go to a JR Ticket Office (Midori-no-Madoguchi) at major stations like Narita, Haneda, Tokyo, or Osaka</li>
        <li>Present your Exchange Order and passport</li>
        <li>Choose your start date (doesn’t have to be the same day)</li>
        <li>Receive your physical JR Pass card</li>
      </ol>
      <h3>What’s Covered</h3>
      <ul>
        <li>Shinkansen (most lines, except Nozomi and Mizuho — use Hikari or Sakura instead)</li>
        <li>JR local and express trains nationwide</li>
        <li>Some JR buses and ferries (e.g., Miyajima ferry)</li>
      </ul>
      <h3>What’s NOT Covered</h3>
      <ul>
        <li>Tokyo Metro and other private subway lines</li>
        <li>Nozomi and Mizuho Shinkansen (the fastest trains on Tokaido/Sanyo line)</li>
        <li>Private railways (e.g., Kintetsu, Hankyu)</li>
      </ul>
    `,
  },
  "panduan-momiji-jepang": {
    image: "https://images.unsplash.com/photo-1508193638397-1c4234db14d8?auto=format&fit=crop&w=1200&q=80",
    category: "Autumn",
    title: "Momiji Season: Where to See Autumn Colors in Japan",
    date: "May 20, 2025",
    readTime: "8 min",
    content: `
      <p>Koyo (autumn foliage) is Japan’s other great seasonal spectacle — and for many travelers, even more beautiful than sakura. From late October to late November, Japanese maples (momiji), ginkgo trees, and mountain forests turn brilliant shades of red, orange, and gold.</p>
      <h3>When Does Koyo Happen?</h3>
      <p>Autumn colors move from north to south as temperatures drop. Here’s a general guide:</p>
      <ul>
        <li><strong>Hokkaido</strong> — Mid to late October</li>
        <li><strong>Nikko, Tohoku</strong> — Late October to early November</li>
        <li><strong>Tokyo</strong> — Mid to late November</li>
        <li><strong>Kyoto & Osaka</strong> — Mid to late November</li>
        <li><strong>Hiroshima & Fukuoka</strong> — Late November to early December</li>
      </ul>
      <h3>Best Spots to See Momiji</h3>
      <p><strong>Kyoto</strong> — The top destination for autumn foliage. Eikan-do, Tofuku-ji, and Arashiyama are especially stunning. Temples often hold night illumination events (momiji-kari) during peak season.</p>
      <p><strong>Nikko (Tochigi)</strong> — The cedar-lined approach to Tosho-gu Shrine surrounded by blazing maples is one of Japan’s most dramatic autumn scenes.</p>
      <p><strong>Korankei (Aichi)</strong> — A valley with 4,000 maple trees — one of Japan’s most famous fall color spots outside Kyoto.</p>
      <p><strong>Shirakawa-go (Gifu)</strong> — Traditional thatched-roof farmhouses set against hillsides of red and orange leaves.</p>
      <p><strong>Sounkyo Gorge (Hokkaido)</strong> — Dramatic rocky canyon walls with vivid autumn colors starting in October.</p>
      <h3>Tips for Koyo Season</h3>
      <ul>
        <li>Book accommodation early — Kyoto gets extremely crowded during peak foliage (mid-November)</li>
        <li>Visit early mornings for better photos and fewer crowds</li>
        <li>Follow the Japan Meteorological Corporation’s koyo forecast for accurate peak dates each year</li>
        <li>Many temples charge entry fees during autumn — budget around ¥500–¥1,000 per spot</li>
      </ul>
    `,
  },
};

const fallbackPost = {
  image: "",
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
          <span className="blog-category mb-3 d-inline-block">{post.category}</span>
          <h1 className="display-6 fw-bold" style={{ maxWidth: 700, margin: "0 auto", color: "#111827" }}>{post.title}</h1>
          <p className="mt-3 small" style={{ color: "#6b7280" }}>{post.date} · {post.readTime} read</p>
        </div>
      </section>

      {post.image && (
        <div style={{ width: "100%", maxHeight: 420, overflow: "hidden" }}>
          <img
            src={post.image}
            alt={post.title}
            style={{ width: "100%", height: 420, objectFit: "cover", display: "block" }}
          />
        </div>
      )}

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
                  href="https://wa.me/6281280904772?text=Halo%2C+saya+ingin+konsultasi+rencana+trip+ke+Jepang."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn fw-semibold px-4 py-2 rounded-pill"
                  style={{ background: "#c0392b", color: "#fff", border: "none" }}
                >
                  Free Consultation
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
