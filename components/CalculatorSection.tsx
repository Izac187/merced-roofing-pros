"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/config";

const selectStyle = {
  width: "100%",
  backgroundColor: "rgba(255,255,255,0.07)",
  border: "1px solid rgba(255,255,255,0.15)",
  borderRadius: "var(--radius-md)",
  padding: "10px 12px",
  fontSize: "0.9375rem",
  color: "#FFFFFF",
  fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
  outline: "none",
  cursor: "pointer",
};

const labelStyle = {
  display: "block" as const,
  fontSize: "0.8125rem",
  fontWeight: 600,
  color: "rgba(245,236,215,0.7)",
  marginBottom: 6,
  fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
};

const fmt = (n: number) => "$" + n.toLocaleString("en-US");

export default function CalculatorSection() {
  const [roofSize, setRoofSize] = useState("");
  const [material, setMaterial] = useState("");
  const [condition, setCondition] = useState("");

  const estimate = (() => {
    if (!roofSize || !material || !condition) return null;
    return siteConfig.calculator.estimates[roofSize]?.[material]?.[condition] ?? null;
  })();

  return (
    <div
      style={{
        backgroundColor: "rgba(255,255,255,0.05)",
        border: "1px solid rgba(255,255,255,0.1)",
        borderRadius: "var(--radius-xl)",
        padding: 32,
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <div>
          <label style={labelStyle}>Roof Size</label>
          <select value={roofSize} onChange={(e) => setRoofSize(e.target.value)} style={selectStyle}>
            <option value="">Select size</option>
            {siteConfig.calculator.inputs[0].options.map((o) => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select>
        </div>
        <div>
          <label style={labelStyle}>Material</label>
          <select value={material} onChange={(e) => setMaterial(e.target.value)} style={selectStyle}>
            <option value="">Select material</option>
            {siteConfig.calculator.inputs[1].options.map((o) => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select>
        </div>
        <div>
          <label style={labelStyle}>Condition</label>
          <select value={condition} onChange={(e) => setCondition(e.target.value)} style={selectStyle}>
            <option value="">Select condition</option>
            {siteConfig.calculator.inputs[2].options.map((o) => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select>
        </div>

        {estimate ? (
          <div
            style={{
              backgroundColor: "rgba(232,82,26,0.15)",
              border: "1px solid rgba(232,82,26,0.3)",
              borderRadius: "var(--radius-md)",
              padding: "20px 24px",
              textAlign: "center",
            }}
          >
            <p style={{ color: "rgba(245,236,215,0.7)", fontSize: "0.8125rem", fontFamily: "var(--font-dm-sans), system-ui, sans-serif", marginBottom: 6 }}>
              Estimated range (Merced County)
            </p>
            <p className="font-display" style={{ fontSize: "2.25rem", color: "#FFFFFF", lineHeight: 1, marginBottom: 6 }}>
              {fmt(estimate[0])} &ndash; {fmt(estimate[1])}
            </p>
            <p style={{ color: "rgba(245,236,215,0.5)", fontSize: "0.75rem", fontFamily: "var(--font-dm-sans), system-ui, sans-serif", marginBottom: 16 }}>
              {siteConfig.calculator.laborNote}
            </p>
            <a
              href="#form"
              style={{
                display: "inline-block",
                backgroundColor: "var(--ember)",
                color: "#fff",
                fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
                fontWeight: 700,
                fontSize: "0.9375rem",
                padding: "11px 24px",
                borderRadius: "var(--radius-md)",
                textDecoration: "none",
              }}
            >
              Get exact quote &rarr;
            </a>
          </div>
        ) : (
          <p style={{ color: "rgba(245,236,215,0.4)", fontSize: "0.8125rem", fontFamily: "var(--font-dm-sans), system-ui, sans-serif", textAlign: "center", padding: "12px 0" }}>
            Select all three options to see your estimate
          </p>
        )}
      </div>
    </div>
  );
}
