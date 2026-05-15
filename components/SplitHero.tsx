"use client";

import LeadForm from "@/components/LeadForm";
import { siteConfig } from "@/lib/config";

export default function SplitHero() {
  return (
    <section
      id="form"
      style={{ backgroundColor: "var(--dark)", paddingTop: 80, paddingBottom: 96 }}
    >
      <div
        className="container-site"
        style={{
          display: "grid",
          gap: 40,
          alignItems: "center",
        }}
      >
        {/* Responsive two-column via CSS */}
        <style>{`
          @media (min-width: 800px) {
            .hero-grid { grid-template-columns: 1fr 420px !important; }
            .hero-copy { order: 1 !important; }
            .hero-form { order: 2 !important; }
          }
        `}</style>

        <div
          className="hero-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: 40,
            alignItems: "center",
          }}
        >
          {/* Left on desktop, below form on mobile */}
          <div className="hero-copy text-white" style={{ order: 2 }}>
            {/* Eyebrow */}
            <div className="eyebrow" style={{ marginBottom: 20 }}>
              <span className="eyebrow-line" />
              <span className="eyebrow-text">Merced County Roofing</span>
            </div>

            <h1
              className="font-display text-balance"
              style={{
                fontSize: "clamp(3.5rem, 7vw, 5.5rem)",
                color: "#FFFFFF",
                lineHeight: 1,
                marginBottom: 24,
              }}
            >
              YOUR ROOF,
              <br />
              FIXED RIGHT.
              <br />
              <span style={{ color: "var(--ember)" }}>FREE ESTIMATE.</span>
            </h1>

            <p
              style={{
                fontSize: "1.125rem",
                color: "rgba(245,236,215,0.8)",
                lineHeight: 1.7,
                fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
                marginBottom: 32,
                maxWidth: "52ch",
              }}
            >
              Licensed and insured roofing in Merced County. Call back in 30
              minutes or less — Mon&ndash;Sat, 7am&ndash;8pm. Know what your
              roof costs before you commit to anyone.
            </p>

            {/* Bullet points — CSS circles, no emoji */}
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 12, marginBottom: 32 }}>
              {[
                "Licensed & Insured in California",
                "Free written estimate — no obligation",
                "Storm damage, leaks, full replacements",
                "Serving Merced, Atwater, Livingston & more",
              ].map((item) => (
                <li
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    color: "rgba(245,236,215,0.8)",
                    fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
                    fontSize: "0.9375rem",
                  }}
                >
                  <span
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      backgroundColor: "var(--ember)",
                      flexShrink: 0,
                    }}
                  />
                  {item}
                </li>
              ))}
            </ul>

            {/* Phone */}
            <a
              href={siteConfig.phoneHref}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
                color: "rgba(245,236,215,0.6)",
                fontSize: "0.875rem",
                textDecoration: "none",
              }}
            >
              Or call directly:&nbsp;
              <span
                className="font-display"
                style={{ color: "#FFFFFF", fontSize: "1.5rem", letterSpacing: "0.01em" }}
              >
                {siteConfig.phone}
              </span>
            </a>
          </div>

          {/* Top on mobile, right on desktop */}
          <div
            className="hero-form"
            style={{
              backgroundColor: "var(--surface)",
              borderRadius: "var(--radius-xl)",
              boxShadow: "0 24px 64px rgba(0,0,0,0.35), 0 4px 16px rgba(0,0,0,0.15)",
              padding: 32,
              order: 1,
            }}
          >
            <div className="eyebrow" style={{ marginBottom: 8 }}>
              <span className="eyebrow-line" />
              <span className="eyebrow-text">Mon–Sat, 7am–8pm</span>
            </div>

            <h2
              className="font-display"
              style={{ fontSize: "1.75rem", color: "var(--text)", marginBottom: 4 }}
            >
              Get a Free Estimate
            </h2>
            <p
              style={{
                color: "var(--muted)",
                fontSize: "0.875rem",
                fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
                marginBottom: 20,
              }}
            >
              We call back in 30 minutes or less.
            </p>

            <LeadForm source="hero" />
          </div>
        </div>
      </div>
    </section>
  );
}
