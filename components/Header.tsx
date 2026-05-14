import Link from "next/link";
import { siteConfig } from "@/lib/config";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 px-4 py-3" style={{ backgroundColor: "oklch(28% 0.09 38)" }}>
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-white font-extrabold text-lg tracking-tight" style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}>
          {siteConfig.siteName}
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {[
            { href: "/services", label: "Services" },
            { href: "/calculator", label: "Estimate" },
            { href: "/merced-roofing", label: "Merced" },
            { href: "/about", label: "About" },
            { href: "/contact", label: "Contact" },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm font-medium transition-colors hover:text-amber-400"
              style={{ color: "oklch(85% 0.04 38)" }}
            >
              {label}
            </Link>
          ))}
        </nav>

        <a
          href={siteConfig.phoneHref}
          className="rounded-lg py-2 px-4 text-sm font-bold text-white transition-colors"
          style={{ backgroundColor: "oklch(72% 0.18 65)" }}
        >
          {siteConfig.phone}
        </a>
      </div>
    </header>
  );
}
