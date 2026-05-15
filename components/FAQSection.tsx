"use client";

import { useState } from "react";

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: "1px solid var(--border)" }}>
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "18px 0",
          background: "none",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
          gap: 12,
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
            fontWeight: 600,
            fontSize: "1rem",
            color: "var(--text)",
          }}
        >
          {q}
        </span>
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--ember)"
          strokeWidth="2.5"
          strokeLinecap="round"
          style={{
            flexShrink: 0,
            transform: open ? "rotate(45deg)" : "rotate(0deg)",
            transition: "transform 200ms ease",
          }}
          aria-hidden="true"
        >
          <line x1="12" y1="5" x2="12" y2="19" />
          <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
      </button>
      {open && (
        <p
          style={{
            fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
            fontSize: "0.9375rem",
            color: "var(--muted)",
            lineHeight: 1.7,
            paddingBottom: 18,
          }}
        >
          {a}
        </p>
      )}
    </div>
  );
}

const faqs = [
  {
    q: "How much does a roof replacement cost in Merced?",
    a: "A typical asphalt shingle replacement in Merced runs $7,500–$15,000 for a 2,000 sq ft home. Metal and tile cost more. Merced labor rates run about 10% below Bay Area averages. Use our estimator above for a personalized range.",
  },
  {
    q: "How long does a roof replacement take?",
    a: "Most residential replacements take 1–2 days. Larger homes or tile roofs may take 3–4 days. We schedule around Merced's forecast — no unfinished roofs left overnight during rain season.",
  },
  {
    q: "Do you offer free inspections?",
    a: "Yes. Free visual inspections with a written report for any Merced area homeowner. Post-storm inspections are typically same or next day.",
  },
  {
    q: "Are you licensed and insured in California?",
    a: "Yes. California Contractors State License Board (CSLB) licensed, with general liability and workers' compensation. Certificate of insurance available on request.",
  },
  {
    q: "What happens if I call after business hours?",
    a: "Leave a message or submit the form — we call back first thing the next business day. Our callback promise is Mon–Sat, 7am–8pm. After-hours submissions get priority in the morning queue.",
  },
];

export default function FAQSection() {
  return (
    <>
      {faqs.map(({ q, a }) => (
        <FAQItem key={q} q={q} a={a} />
      ))}
    </>
  );
}
