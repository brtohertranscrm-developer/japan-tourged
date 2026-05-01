import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const faqs = [
  {
    q: "I’m worried about the language barrier. Will I get lost in Japan?",
    a: "Most travelers do fine with Google Maps plus a realistic route. We keep routes simple, include station names, and give practical instructions (what line, what exit, how much time). If you’re a first-timer, we avoid over-connecting routes that create stress.",
  },
  {
    q: "How do you plan routes so they don’t feel too tiring?",
    a: "We plan around energy, not just attractions. That means fewer long transfers, smart grouping by area, buffer time, and optional items. We also ask your walking tolerance and preferred pace before finalizing.",
  },
  {
    q: "Is Japan expensive? How do we keep the budget under control?",
    a: "Japan can be affordable with the right transport + area choices. We provide cost ranges and options (budget-friendly / standard / comfort). You choose the level and we keep the itinerary consistent with it, so budget doesn’t surprise you mid-trip.",
  },
  {
    q: "Do I need a visa? Can you handle visa processing for me?",
    a: "Visa rules depend on your passport and current policies. We don’t issue visas or act as an immigration agent, but we can guide you on typical requirements, timeline, and what to prepare based on your trip plan.",
  },
  {
    q: "What about internet (eSIM/pocket WiFi), cashless payments, and IC cards?",
    a: "We suggest the simplest setup based on your route. Usually it’s eSIM for convenience, but pocket WiFi can be better for groups. We’ll explain when IC cards help the most, and when cash is still useful (small shops, rural areas, ticket machines).",
  },
  {
    q: "I’m Muslim. Is halal food hard to find?",
    a: "It depends on the city. Tokyo and Osaka tend to have more options. We can recommend Muslim-friendly areas and practical choices (seafood/vegetarian) when halal-certified options are limited. We’ll set expectations clearly so you’re not surprised on-site.",
  },
  {
    q: "Can you help with JR Pass decisions? Is it always worth it?",
    a: "Not always. JR Pass value depends on your route. We compare your plan with simple fare estimates and suggest the most sensible option (JR Pass, regional pass, or pay-as-you-go with IC cards).",
  },
  {
    q: "What do I actually get when I use your service?",
    a: "It starts with a free consultation. After you confirm, you’ll receive a day-by-day itinerary, transport guidance, recommended areas and food, and a clear plan that fits your style and budget. We keep everything practical and easy to follow.",
  },
  {
    q: "We’re a family / group. Can you plan around kids or elders?",
    a: "Yes. We plan around rest breaks, shorter transfers, accessible spots, and meal timing. We’ll ask age range and mobility needs early so the route is comfortable for the whole group.",
  },
  {
    q: "What’s different about Tourged Travel compared to generic packages?",
    a: "We keep it personal and realistic. Instead of forcing a fixed itinerary, we tailor your route and pacing to your vibe. As a new service, early clients also get extra attention and more revisions during planning.",
  },
];

export default function FAQ() {
  return (
    <>
      <Head>
        <title>FAQ — Tourged Travel</title>
        <meta
          name="description"
          content="Frequently asked questions for Indonesian travelers planning a Japan trip: budget, language barrier, transport, visa, halal options, and how Tourged Travel works."
        />
      </Head>

      <Navbar />

      <section className="page-hero text-center">
        <div className="container">
          <span className="page-hero-label">FAQ</span>
          <h1 className="display-5 fw-bold mt-2">Questions People Usually Ask</h1>
          <p className="mt-3" style={{ maxWidth: 720, margin: "0 auto", color: "#6b7280" }}>
            If you’re new to Japan travel, these worries are completely normal. Here’s how we think about planning, so you feel safe and prepared.
          </p>
        </div>
      </section>

      <section className="py-5">
        <div className="container py-3">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="accordion" id="faqAccordion">
                {faqs.map((item, idx) => (
                  <div
                    className="accordion-item mb-3"
                    key={item.q}
                    style={{ borderRadius: 16, overflow: "hidden", border: "1px solid var(--border)" }}
                  >
                    <h2 className="accordion-header">
                      <button
                        className={`accordion-button ${idx === 0 ? "" : "collapsed"}`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#faq-${idx}`}
                        aria-expanded={idx === 0 ? "true" : "false"}
                        aria-controls={`faq-${idx}`}
                        style={{ background: "#fff", color: "var(--dark)", fontWeight: 800 }}
                      >
                        {item.q}
                      </button>
                    </h2>
                    <div
                      id={`faq-${idx}`}
                      className={`accordion-collapse collapse ${idx === 0 ? "show" : ""}`}
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body" style={{ background: "#fffef9", color: "var(--text)", lineHeight: 1.8 }}>
                        {item.a}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 p-4 rounded-4 text-center" style={{ background: "var(--bg-alt)", border: "1px solid var(--border)" }}>
                <h5 className="fw-bold" style={{ color: "var(--dark)" }}>Still have questions?</h5>
                <p className="text-muted mb-3" style={{ maxWidth: 720, margin: "0 auto" }}>
                  Chat us on WhatsApp and tell us your travel dates, city preferences, and budget range. We’ll reply with a clear direction and options.
                </p>
                <a
                  href="https://wa.me/62XXXXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary-custom"
                >
                  💬 Start Free Consultation
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

