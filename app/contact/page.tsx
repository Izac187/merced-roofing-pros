import type { Metadata } from "next";
import LeadForm from "@/components/LeadForm";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: `Contact | ${siteConfig.siteName}`,
  description: `Contact ${siteConfig.siteName} for free roofing estimates in Merced, CA. Call or fill out the form.`,
};

export default function ContactPage() {
  return (
    <div className="px-4 py-12 bg-gray-50 min-h-screen">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-2" style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}>
          Contact Us
        </h1>
        <p className="text-gray-600 mb-8 text-sm">
          Free estimates. We call back within 2 hours during business hours (Mon–Sat 7am–7pm).
        </p>

        <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm mb-6">
          <h2 className="font-bold text-gray-900 mb-4">Request an Estimate</h2>
          <LeadForm source="contact" />
        </div>

        <div className="text-center text-sm text-gray-500">
          <p className="mb-1">Prefer to call directly?</p>
          <a href={siteConfig.phoneHref} className="text-base font-bold" style={{ color: "oklch(58% 0.15 38)" }}>
            {siteConfig.phone}
          </a>
          <p className="mt-3 text-xs">
            {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip} ·{" "}
            Serving {siteConfig.serviceArea.slice(0, 3).join(", ")} and surrounding areas
          </p>
        </div>
      </div>
    </div>
  );
}
