import type { Metadata } from "next";
import SplitHero from "@/components/SplitHero";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: `${siteConfig.siteName} | Roofing Contractor Merced CA`,
  description: siteConfig.description,
};

export default function Home() {
  return (
    <>
      <SplitHero />

      {/* Services preview */}
      <section className="px-4 py-16 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Roofing Services in {siteConfig.city}, CA
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {siteConfig.services.map((s) => (
              <div key={s.title} className="rounded-xl border border-gray-100 p-5 shadow-sm">
                <span className="text-3xl">{s.icon}</span>
                <h3 className="font-semibold text-gray-900 mt-3 mb-2">{s.title}</h3>
                <p className="text-sm text-gray-600">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator CTA */}
      <section className="px-4 py-12" style={{ backgroundColor: "oklch(96% 0.02 38)" }}>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            How Much Does a New Roof Cost in Merced?
          </h2>
          <p className="text-gray-600 mb-6 text-sm">
            Get a localized estimate in 30 seconds. Prices reflect Merced County labor rates.
          </p>
          <a
            href="/calculator"
            className="inline-block rounded-lg py-3 px-8 text-base font-bold text-white transition-colors"
            style={{ backgroundColor: "oklch(72% 0.18 65)" }}
          >
            Use the Cost Calculator →
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16 bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Common Questions</h2>
          {[
            {
              q: "How much does a roof cost in Merced CA?",
              a: "A typical asphalt shingle roof in Merced runs $7,500–$15,000 for a 2,000 sq ft home. Metal and tile cost more. Merced labor rates run about 10% below Bay Area averages. Use our calculator for a personalized estimate.",
            },
            {
              q: "How long does a roof replacement take?",
              a: "Most residential replacements in Merced take 1–2 days. Larger homes or tile roofs may take 3–4 days. We schedule around Merced's forecast — no unfinished roofs left overnight in rain season.",
            },
            {
              q: "Do you offer free inspections?",
              a: "Yes. Free visual inspections with a written report for any Merced area homeowner. Post-storm inspections same week, typically same or next day.",
            },
            {
              q: "Are you licensed and insured in California?",
              a: "Yes. California Contractors State License Board (CSLB) licensed, with general liability and workers' compensation. We can provide certificate of insurance on request.",
            },
          ].map(({ q, a }) => (
            <div key={q} className="border-b border-gray-100 py-5">
              <h3 className="font-semibold text-gray-900 mb-2">{q}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
