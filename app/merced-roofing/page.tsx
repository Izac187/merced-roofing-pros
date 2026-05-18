import type { Metadata } from "next";
import LeadForm from "@/components/LeadForm";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: `Roofing Contractor Merced CA | ${siteConfig.siteName}`,
  description: `Local roofing contractor serving Merced, CA. Roof repair, replacement, and inspection. Free estimates, same-day response. Licensed & insured.`,
};

export default function MercedRoofingPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="px-4 py-12" style={{ backgroundColor: "oklch(32% 0.09 38)" }}>
        <div className="max-w-3xl mx-auto text-white">
          <h1 className="text-4xl font-extrabold mb-4 leading-tight" style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}>
            Roofing Contractor — Merced, CA
          </h1>
          <p className="text-lg mb-6" style={{ color: "oklch(85% 0.04 38)" }}>
            Local roofing repair and replacement in Merced, Atwater, Livingston, and surrounding Central Valley communities. Free estimates. Licensed & insured.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href={siteConfig.phoneHref} className="rounded-lg py-3 px-6 font-bold text-white" style={{ backgroundColor: "oklch(72% 0.18 65)" }}>
              ☎ {siteConfig.phone}
            </a>
            <a href="/calculator" className="rounded-lg py-3 px-6 font-bold text-white border border-white/30 hover:bg-white/10 transition-colors">
              Get a Cost Estimate
            </a>
          </div>
        </div>
      </section>

      {/* Local content */}
      <section className="px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Merced Roofs Need Local Expertise</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Merced sits in California&apos;s San Joaquin Valley, where summer temperatures regularly exceed 100&deg;F. That thermal stress cycles roofing materials far harder than coastal climates &mdash; asphalt shingles crack, flashing expands and contracts, and UV degradation is accelerated. A roof designed for San Jose may fail 5 years early in Merced.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Winter brings the opposite challenge. Merced County averages 12&ndash;14 inches of rain annually, concentrated in November through March. Low-slope areas around Atwater and Livingston see pooling water if gutters and drainage aren&apos;t maintained. Tule fog in the valley floor adds persistent moisture exposure.
          </p>
          <p className="text-gray-700 leading-relaxed mb-8">
            We work exclusively in the Central Valley. We know which materials hold up, which suppliers stock for the local market, and which neighborhoods (near Yosemite Lake, the UC Merced campus corridor, and older homes near downtown) have recurring issues specific to their construction era.
          </p>

          {/* Service area grid */}
          <h2 className="text-xl font-bold text-gray-900 mb-4">Service Area</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-10">
            {siteConfig.serviceArea.map((area) => (
              <div key={area} className="rounded-lg border border-gray-100 px-4 py-3 text-sm font-medium text-gray-700 text-center shadow-sm">
                {area}
              </div>
            ))}
          </div>

          {/* Map embed */}
          <div className="rounded-xl overflow-hidden border border-gray-200 mb-10" style={{ height: 300 }}>
            <iframe
              title="Merced CA map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50870.72!2d-120.512!3d37.302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8090922cd038e6a7%3A0x16f89e45e697d17f!2sMerced%2C%20CA!5e0!3m2!1sen!2sus!4v1"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* FAQ */}
          <h2 className="text-xl font-bold text-gray-900 mb-6">Frequently Asked Questions — Merced Roofing</h2>
          {[
            {
              q: "How much does roof replacement cost in Merced CA?",
              a: "Most Merced homeowners pay $7,000–$15,000 for a full asphalt shingle replacement on a 1,500–2,500 sq ft home. Metal roofs run $14,000–$24,000. Prices are about 10% lower than Bay Area rates. Use our calculator for a personalized range.",
            },
            {
              q: "What roofing materials work best in Merced's climate?",
              a: "30-year architectural asphalt shingles rated for Class 3 hail and 110°F heat are the most cost-effective choice. Metal standing seam is the long-term winner — 50+ year lifespan, reflects UV, handles thermal cycling better than any shingle.",
            },
            {
              q: "How long does roof repair take in Merced?",
              a: "Minor repairs (1–3 areas, flashing, shingles) are usually same or next day. Full replacements take 1–2 days for most Merced homes. We schedule around valley weather — no open roofs overnight in the rainy season.",
            },
          ].map(({ q, a }) => (
            <div key={q} className="border-b border-gray-100 py-5">
              <h3 className="font-semibold text-gray-900 mb-2">{q}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{a}</p>
            </div>
          ))}

          {/* Lead form */}
          <div className="mt-10 bg-gray-50 rounded-2xl p-8">
            <h2 className="text-lg font-bold text-gray-900 mb-1">Get a Free Estimate in Merced</h2>
            <p className="text-sm text-gray-500 mb-5">We call back within 2 hours.</p>
            <LeadForm source="merced-location" />
          </div>
        </div>
      </section>
    </div>
  );
}
