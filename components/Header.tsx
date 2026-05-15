"use client";

import { siteConfig } from "@/lib/config";

export default function Header() {
  return (
    <header
      className="sticky top-0 z-[100]"
      style={{
        backgroundColor: "var(--dark)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div className="container-site flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#form" className="font-display text-2xl text-white leading-none">
          MERCED <span style={{ color: "var(--ember)" }}>ROOFING</span> PROS
        </a>

        {/* Nav — hidden on mobile */}
        <nav className="hidden md:flex items-center gap-7">
          {[
            { href: "#services", label: "Services" },
            { href: "#estimate", label: "Estimate" },
            { href: "#reviews", label: "Reviews" },
            { href: "#faq", label: "FAQ" },
          ].map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="text-sm font-medium transition-colors duration-150"
              style={{
                fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
                color: "rgba(245,236,215,0.75)",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#F5ECD7")}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "rgba(245,236,215,0.75)")
              }
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Right: phone + CTA */}
        <div className="flex items-center gap-4">
          <a
            href={siteConfig.phoneHref}
            className="hidden md:block font-display text-2xl text-white leading-none"
            style={{ letterSpacing: "0.01em" }}
          >
            {siteConfig.phone}
          </a>
          <a
            href="#form"
            className="font-body font-bold text-sm text-white px-4 py-2 rounded-md transition-colors duration-150"
            style={{
              backgroundColor: "var(--ember)",
              fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "var(--ember-hover)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "var(--ember)")
            }
          >
            Free Quote
          </a>
        </div>
      </div>
    </header>
  );
}
