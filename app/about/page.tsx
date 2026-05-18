import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: `About Us`,
  description: `Licensed and insured roofing contractor serving Merced, CA. Free estimates, same-day response.`,
  alternates: { canonical: `https://${siteConfig.domain}/about` },
};

export default function AboutPage() {
  return (
    <div className="px-4 py-12 bg-white min-h-screen">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-6" style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}>
          About {siteConfig.siteName}
        </h1>

        <p className="text-gray-700 leading-relaxed mb-4">
          We&apos;re a roofing contractor based in {siteConfig.city}, California. We serve homeowners and property managers across {siteConfig.county} with roof repair, replacement, and inspection.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          The Central Valley has specific roofing demands: 110°F+ summers, dense tule fog in winter, and concentrated rain from November through March. We work exclusively in this region — no national franchise, no crews flown in from elsewhere.
        </p>
        <p className="text-gray-700 leading-relaxed mb-10">
          Every job comes with a written estimate, clear timeline, and direct line to the contractor. No bait-and-switch pricing, no subcontracted crew surprises.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
          {[
            { label: "Licensed", detail: "CSLB Licensed, California" },
            { label: "Insured", detail: "General Liability + Workers' Comp" },
            { label: "Free Estimates", detail: "Written quote, no obligation" },
          ].map(({ label, detail }) => (
            <div key={label} className="rounded-xl border border-gray-100 p-5 text-center shadow-sm">
              <p className="font-bold text-gray-900 text-lg">{label}</p>
              <p className="text-gray-500 text-sm mt-1">{detail}</p>
            </div>
          ))}
        </div>

        <p className="text-sm text-gray-500">
          Serving {siteConfig.serviceArea.join(", ")} and surrounding communities.
        </p>
      </div>
    </div>
  );
}
