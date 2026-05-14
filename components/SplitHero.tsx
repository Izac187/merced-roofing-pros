import LeadForm from "@/components/LeadForm";
import { siteConfig } from "@/lib/config";

export default function SplitHero() {
  return (
    <section
      className="min-h-[90dvh] flex items-center px-4 py-12"
      style={{ backgroundColor: "oklch(32% 0.09 38)" }}
    >
      <div className="max-w-5xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        {/* Left: copy */}
        <div className="text-white">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight mb-6" style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}>
            {siteConfig.tagline}
          </h1>

          <ul className="space-y-3 mb-8">
            {["Licensed & Insured", "Free Estimates", "Same-Day Response"].map((item) => (
              <li key={item} className="flex items-center gap-2 text-base" style={{ color: "oklch(85% 0.04 38)" }}>
                <span className="text-amber-400 text-lg">✓</span>
                {item}
              </li>
            ))}
          </ul>

          <a
            href={siteConfig.phoneHref}
            className="inline-flex items-center gap-2 rounded-lg py-3 px-6 text-base font-bold text-white transition-colors"
            style={{ backgroundColor: "oklch(72% 0.18 65)" }}
          >
            ☎ Call {siteConfig.phone}
          </a>

          <p className="mt-4 text-sm" style={{ color: "oklch(70% 0.04 38)" }}>
            Serving {siteConfig.serviceArea.slice(0, 4).join(", ")} &amp; surrounding areas
          </p>
        </div>

        {/* Right: lead form */}
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
          <h2 className="text-lg font-bold text-gray-900 mb-1">Get a Free Estimate</h2>
          <p className="text-sm text-gray-500 mb-5">We&apos;ll call you back within 2 hours.</p>
          <LeadForm source="hero" />
        </div>
      </div>
    </section>
  );
}
