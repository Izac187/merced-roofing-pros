"use client";

import { siteConfig } from "@/lib/config";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{ backgroundColor: "var(--dark)" }}>
      {/* Main footer grid */}
      <div
        className="container-site"
        style={{ paddingTop: 56, paddingBottom: 40 }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 40,
          }}
        >
          {/* Brand column */}
          <div>
            <p
              className="font-display"
              style={{ fontSize: "1.5rem", color: "#FFFFFF", marginBottom: 12 }}
            >
              MERCED{" "}
              <span style={{ color: "var(--ember)" }}>ROOFING</span> PROS
            </p>
            <p
              style={{
                color: "rgba(245,236,215,0.5)",
                fontSize: "0.875rem",
                lineHeight: 1.6,
                fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
                marginBottom: 16,
              }}
            >
              Licensed and insured roofing in Merced County. Free estimates,
              fast callbacks.
            </p>
            <a
              href={siteConfig.phoneHref}
              className="font-display"
              style={{
                fontSize: "1.25rem",
                color: "#FFFFFF",
                textDecoration: "none",
                letterSpacing: "0.01em",
              }}
            >
              {siteConfig.phone}
            </a>
          </div>

          {/* Services column */}
          <div>
            <p
              style={{
                color: "#FFFFFF",
                fontWeight: 700,
                fontSize: "0.8125rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
                marginBottom: 16,
              }}
            >
              Services
            </p>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 10 }}>
              {siteConfig.services.map((s) => (
                <li key={s.title}>
                  <a
                    href="#services"
                    style={{
                      color: "rgba(245,236,215,0.6)",
                      fontSize: "0.875rem",
                      fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
                      textDecoration: "none",
                      transition: "color 150ms ease",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#F5ECD7")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(245,236,215,0.6)")}
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours + area column */}
          <div>
            <p
              style={{
                color: "#FFFFFF",
                fontWeight: 700,
                fontSize: "0.8125rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
                marginBottom: 16,
              }}
            >
              Hours
            </p>
            <p
              style={{
                color: "rgba(245,236,215,0.6)",
                fontSize: "0.875rem",
                fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
                marginBottom: 4,
              }}
            >
              Mon–Sat, 7am–8pm
            </p>
            <p
              style={{
                color: "rgba(245,236,215,0.4)",
                fontSize: "0.8125rem",
                fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
                marginBottom: 24,
              }}
            >
              After-hours calls returned next morning
            </p>
            <p
              style={{
                color: "#FFFFFF",
                fontWeight: 700,
                fontSize: "0.8125rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
                marginBottom: 10,
              }}
            >
              Service Area
            </p>
            <p
              style={{
                color: "rgba(245,236,215,0.5)",
                fontSize: "0.8125rem",
                fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
              }}
            >
              {siteConfig.serviceArea.join(" · ")}
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="container-site"
        style={{
          borderTop: "1px solid rgba(255,255,255,0.08)",
          paddingTop: 16,
          paddingBottom: 20,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: 8,
        }}
      >
        <p
          style={{
            color: "rgba(245,236,215,0.35)",
            fontSize: "0.75rem",
            fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
          }}
        >
          &copy; {year} {siteConfig.siteName}. Licensed &amp; Insured &middot;{" "}
          {siteConfig.city}, {siteConfig.state}
        </p>
        <p
          style={{
            color: "rgba(245,236,215,0.35)",
            fontSize: "0.75rem",
            fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
          }}
        >
          Serving Merced County since 2018
        </p>
      </div>
    </footer>
  );
}
