import Link from "next/link";

const WHATSAPP_URL = "https://wa.me/6281280904772?text=Halo%2C+saya+ingin+konsultasi+paket+trip+ke+Jepang.+Bisa+bantu+saya+memilih+yang+paling+sesuai%3F";

const tripStyles = [
  {
    key: "private-trip",
    title: "Private Trip",
    href: "/packages/private-trip",
    desc: "A flexible Japan route shaped around your group, pace, and budget range.",
  },
  {
    key: "one-day-tour",
    title: "One-Day Trip",
    href: "/packages/one-day-tour",
    desc: "A focused route for one city or area when your Japan schedule is limited.",
  },
  {
    key: "honeymoon",
    title: "Honeymoon",
    href: "/packages/honeymoon",
    desc: "A calmer, warmer plan for couples who want Japan to feel memorable and comfortable.",
  },
  {
    key: "japan-local-life",
    title: "Japan Local Life",
    href: "/packages/japan-local-life",
    desc: "A slower route for cafes, neighborhoods, markets, anime spots, and everyday Japan.",
  },
];

type PackageNextStepsProps = {
  current: string;
};

export default function PackageNextSteps({ current }: PackageNextStepsProps) {
  const relatedStyles = tripStyles.filter((style) => style.key !== current);

  return (
    <section className="py-5 package-next-steps">
      <div className="container py-3">
        <div className="row align-items-end g-4 mb-4">
          <div className="col-lg-7">
            <p className="section-label">Still Comparing?</p>
            <h2 className="section-title mb-3">Choose the Trip Style That Fits You Best</h2>
            <p className="text-muted mb-0" style={{ lineHeight: 1.8 }}>
              If you are not sure which package matches your plan, compare the other styles or start with a short consultation. We will help you choose the most realistic direction before anything is finalized.
            </p>
          </div>
          <div className="col-lg-5 text-lg-end">
            <Link href="/#layanan" className="btn-outline-custom me-2 mb-2">
              Compare All Styles
            </Link>
            <Link href="/faq" className="btn-outline-custom mb-2">
              Read FAQ
            </Link>
          </div>
        </div>

        <div className="row g-4">
          {relatedStyles.map((style) => (
            <div key={style.key} className="col-md-4">
              <Link href={style.href} className="package-next-card h-100">
                <span className="package-next-card__eyebrow">Trip Style</span>
                <h3>{style.title}</h3>
                <p>{style.desc}</p>
                <span className="package-next-card__link">View details →</span>
              </Link>
            </div>
          ))}
        </div>

        <div className="package-consult-strip mt-4">
          <div>
            <h3>Want us to suggest the right package?</h3>
            <p>
              Send your travel month, number of travelers, rough budget, and must-visit places. We will recommend the most sensible option for your first plan.
            </p>
          </div>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary-custom">
            Ask on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
