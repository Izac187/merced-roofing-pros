"use client";

import { siteConfig } from "@/lib/config";

export default function StickyMobileCTA() {
  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 200,
        backgroundColor: "var(--dark)",
        borderTop: "1px solid rgba(255,255,255,0.1)",
        display: "flex",
        gap: 8,
        padding: "10px 16px calc(10px + env(safe-area-inset-bottom))",
      }}
      className="md:hidden"
    >
      <a
        href={siteConfig.phoneHref}
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "var(--ember)",
          color: "#FFFFFF",
          fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
          fontWeight: 700,
          fontSize: "0.9375rem",
          padding: "13px 0",
          borderRadius: "var(--radius-md)",
          textDecoration: "none",
          textAlign: "center",
        }}
      >
        Call Now
      </a>
      <a
        href="#form"
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "transparent",
          color: "#FFFFFF",
          fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
          fontWeight: 700,
          fontSize: "0.9375rem",
          padding: "13px 0",
          borderRadius: "var(--radius-md)",
          border: "1.5px solid rgba(255,255,255,0.25)",
          textDecoration: "none",
          textAlign: "center",
        }}
      >
        Free Quote &rarr;
      </a>
    </div>
  );
}
