import type { Metadata } from "next";
import LeadForm from "@/components/LeadForm";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: `Roofing Services — ${siteConfig.city}, CA`,
  description: `Complete roofing services in ${siteConfig.city}, CA: repairs, replacement, inspection, and gutters. Licensed & insured.`,
  alternates: { canonical: `https://${siteConfig.domain}/services` },
};

export default function ServicesPage() {
  return (
    <div className="px-4 py-12 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-2" style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}>
          Roofing Services in {siteConfig.city}, CA
        </h1>
        <p className="text-gray-600 mb-10">
          Licensed and insured. Serving {siteConfig.city} and {siteConfig.serviceArea.slice(1).join(", ")}.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {siteConfig.services.map((s, i) => (
            <div key={s.title} className="rounded-xl border border-gray-100 p-6 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2 mb-3">
                <span style={{ color: "var(--ember)", fontFamily: "var(--font-bebas-neue), sans-serif", fontSize: "1.5rem" }}>0{i + 1}</span> {s.title}
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">{s.description}</p>
              <a
                href="/#form"
                className="inline-block mt-4 text-sm font-semibold underline"
                style={{ color: "var(--ember)" }}
              >
                Get a free estimate →
              </a>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 max-w-lg mx-auto">
          <h2 className="text-lg font-bold text-gray-900 mb-1">Ready to get started?</h2>
          <p className="text-sm text-gray-500 mb-5">Free estimates. We call you back within 2 hours.</p>
          <LeadForm source="services" />
        </div>
      </div>
    </div>
  );
}
