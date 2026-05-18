import type { Metadata } from "next";
import Calculator from "@/components/Calculator";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: `Roofing Cost Calculator — ${siteConfig.city}, CA`,
  description: `Get a localized roofing cost estimate for ${siteConfig.city}, CA. Prices reflect Merced County labor rates.`,
};

export default function CalculatorPage() {
  return (
    <div className="px-4 py-12 min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 mb-2" style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}>
            Roofing Cost Estimator — {siteConfig.city}, CA
          </h1>
          <p className="text-gray-600 text-sm">
            Estimates based on local Merced County labor and material prices. Results update instantly.
          </p>
        </div>
        <Calculator />
      </div>
    </div>
  );
}
