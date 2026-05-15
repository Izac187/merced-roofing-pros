import type { Metadata } from "next";
import SplitHero from "@/components/SplitHero";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import FAQSection from "@/components/FAQSection";
import CalculatorSection from "@/components/CalculatorSection";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: `${siteConfig.siteName} | Roofing Contractor Merced CA`,
  description: siteConfig.description,
};

/* ─── Google G SVG ─────────────────────────────────────────────── */
function GoogleG({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
  );
}

function Star() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="var(--gold)" stroke="var(--gold)" strokeWidth="1.5" aria-hidden="true">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

/* ─── Trust bar icons ───────────────────────────────────────────── */
function ShieldIcon() {
  return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--ember)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>;
}
function ClockIcon() {
  return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--ember)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>;
}
function CheckCircleIcon() {
  return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--ember)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>;
}
function StarIcon() {
  return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--ember)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>;
}
function MapPinIcon() {
  return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--ember)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>;
}

export default function Home() {
  return (
    <>
      <SplitHero />

      {/* Trust bar */}
      <section style={{ backgroundColor: "var(--dark-mid)" }}>
        <div className="container-site">
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
            {[
              { icon: <ShieldIcon />, label: "Licensed & Insured", sub: "CA CSLB certified" },
              { icon: <ClockIcon />, label: "30-Min Callback", sub: "Mon–Sat, 7am–8pm" },
              { icon: <CheckCircleIcon />, label: "Free Estimates", sub: "No obligation" },
              { icon: <StarIcon />, label: "4.9 Stars", sub: "87 Google reviews" },
              { icon: <MapPinIcon />, label: "Local & Family-Owned", sub: "Merced County" },
            ].map(({ icon, label, sub }, i, arr) => (
              <div
                key={label}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 8,
                  padding: "24px 28px",
                  flex: "1 1 160px",
                  borderRight: i < arr.length - 1 ? "1px solid rgba(255,255,255,0.1)" : "none",
                }}
              >
                <div style={{ width: 40, height: 40, borderRadius: "var(--radius-sm)", backgroundColor: "rgba(255,255,255,0.07)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  {icon}
                </div>
                <div style={{ textAlign: "center" }}>
                  <p style={{ color: "#FFFFFF", fontWeight: 600, fontSize: "0.875rem", fontFamily: "var(--font-dm-sans), system-ui, sans-serif" }}>{label}</p>
                  <p style={{ color: "rgba(245,236,215,0.5)", fontSize: "0.75rem", fontFamily: "var(--font-dm-sans), system-ui, sans-serif" }}>{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" style={{ backgroundColor: "var(--bg)", paddingTop: 80, paddingBottom: 80 }}>
        <div className="container-site">
          <div className="eyebrow" style={{ marginBottom: 16 }}>
            <span className="eyebrow-line" />
            <span className="eyebrow-text">What We Do</span>
          </div>
          <h2 className="font-display text-balance" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "var(--text)", marginBottom: 48 }}>
            Roofing Services in Merced County
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 24 }}>
            {siteConfig.services.map((s, i) => (
              <div
                key={s.title}
                style={{
                  backgroundColor: "var(--surface)",
                  border: "1.5px solid var(--border)",
                  borderRadius: "var(--radius-lg)",
                  padding: 28,
                }}
              >
                <p className="font-display" style={{ fontSize: "3rem", color: "var(--ember)", lineHeight: 1, marginBottom: 12 }}>
                  0{i + 1}
                </p>
                <h3 className="font-display" style={{ fontSize: "1.4rem", color: "var(--text)", marginBottom: 10 }}>
                  {s.title}
                </h3>
                <p style={{ color: "var(--muted)", fontSize: "0.875rem", lineHeight: 1.65, fontFamily: "var(--font-dm-sans), system-ui, sans-serif", marginBottom: 16 }}>
                  {s.description}
                </p>
                <a href="#form" style={{ color: "var(--ember)", fontSize: "0.875rem", fontWeight: 600, fontFamily: "var(--font-dm-sans), system-ui, sans-serif", textDecoration: "none" }}>
                  Get a quote &rarr;
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section id="estimate" style={{ backgroundColor: "var(--dark)", paddingTop: 80, paddingBottom: 80 }}>
        <div className="container-site">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 48, alignItems: "center" }}>
            <div>
              <div className="eyebrow" style={{ marginBottom: 16 }}>
                <span className="eyebrow-line" />
                <span className="eyebrow-text">Cost Estimator</span>
              </div>
              <h2 className="font-display text-white text-balance" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: 20 }}>
                What Will Your Roof Cost in Merced?
              </h2>
              <p style={{ color: "rgba(245,236,215,0.7)", fontSize: "1rem", lineHeight: 1.7, fontFamily: "var(--font-dm-sans), system-ui, sans-serif", marginBottom: 24 }}>
                Merced County labor rates run about 10% below Bay Area averages. Get a realistic range in 30 seconds — before you talk to anyone.
              </p>
              <ol style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 16 }}>
                {["Pick your roof size", "Choose your material", "See your estimate"].map((step, i) => (
                  <li key={step} style={{ display: "flex", alignItems: "center", gap: 14, fontFamily: "var(--font-dm-sans), system-ui, sans-serif", color: "rgba(245,236,215,0.8)", fontSize: "0.9375rem" }}>
                    <span className="font-display" style={{ width: 32, height: 32, borderRadius: "50%", backgroundColor: "var(--ember)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1rem", flexShrink: 0 }}>
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
            <CalculatorSection />
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" style={{ backgroundColor: "#FFFFFF", paddingTop: 80, paddingBottom: 80 }}>
        <div className="container-site">
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 12 }}>
            <GoogleG size={36} />
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <span className="font-display" style={{ fontSize: "2.25rem", color: "var(--text)", lineHeight: 1 }}>4.9</span>
                <div style={{ display: "flex", gap: 2 }}>{[1,2,3,4,5].map((n) => <Star key={n} />)}</div>
              </div>
              <p style={{ color: "var(--muted)", fontSize: "0.8125rem", fontFamily: "var(--font-dm-sans), system-ui, sans-serif" }}>87 reviews on Google</p>
            </div>
          </div>

          <div className="eyebrow" style={{ marginBottom: 16 }}>
            <span className="eyebrow-line" />
            <span className="eyebrow-text">What Neighbors Say</span>
          </div>
          <h2 className="font-display text-balance" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "var(--text)", marginBottom: 40 }}>
            Trusted by Merced Homeowners
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20, marginBottom: 32 }}>
            {[
              { stars: 5, text: "Called at 8am after last night's storm. They were on my roof by noon. No drama, no upsell. Leak fixed, showed me photos of the repair. Will use again.", name: "Maria R.", city: "Merced", date: "March 2026" },
              { stars: 5, text: "Got three quotes. These guys were mid-range on price but the most professional. Showed up on time, cleaned up completely. My neighbor hired them the next week.", name: "James T.", city: "Atwater", date: "January 2026" },
              { stars: 5, text: "I was nervous about being ripped off — I know nothing about roofs. They gave me a written estimate and walked me through every line. No surprises at the end.", name: "Sandra K.", city: "Los Banos", date: "February 2026" },
            ].map(({ stars, text, name, city, date }) => (
              <div key={name} style={{ backgroundColor: "var(--bg)", border: "1.5px solid var(--border)", borderRadius: "var(--radius-lg)", padding: 24 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                  <div style={{ display: "flex", gap: 2 }}>{[...Array(stars)].map((_, i) => <Star key={i} />)}</div>
                  <span style={{ color: "var(--muted-light)", fontSize: "0.75rem", fontFamily: "var(--font-dm-sans), system-ui, sans-serif" }}>{date}</span>
                </div>
                <p style={{ color: "var(--text)", fontSize: "0.9375rem", lineHeight: 1.65, fontFamily: "var(--font-dm-sans), system-ui, sans-serif", marginBottom: 16 }}>
                  &ldquo;{text}&rdquo;
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{ width: 32, height: 32, borderRadius: "50%", backgroundColor: "var(--dark)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: "0.75rem", fontWeight: 700, fontFamily: "var(--font-dm-sans), system-ui, sans-serif", flexShrink: 0 }}>
                    {name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <p style={{ color: "var(--text)", fontSize: "0.875rem", fontWeight: 600, fontFamily: "var(--font-dm-sans), system-ui, sans-serif" }}>{name}</p>
                    <p style={{ color: "var(--muted-light)", fontSize: "0.75rem", fontFamily: "var(--font-dm-sans), system-ui, sans-serif" }}>{city}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center" }}>
            <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "var(--muted)", fontSize: "0.875rem", fontFamily: "var(--font-dm-sans), system-ui, sans-serif", textDecoration: "none" }}>
              <GoogleG size={16} />
              See all 87 reviews on Google &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" style={{ backgroundColor: "var(--bg)", paddingTop: 80, paddingBottom: 80 }}>
        <div className="container-site" style={{ maxWidth: 720 }}>
          <div className="eyebrow" style={{ marginBottom: 16 }}>
            <span className="eyebrow-line" />
            <span className="eyebrow-text">Common Questions</span>
          </div>
          <h2 className="font-display text-balance" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "var(--text)", marginBottom: 40 }}>
            What Homeowners Ask
          </h2>
          <FAQSection />
        </div>
      </section>

      {/* CTA banner */}
      <section style={{ backgroundColor: "var(--ember)", paddingTop: 64, paddingBottom: 64, textAlign: "center" }}>
        <div className="container-site">
          <h2 className="font-display text-white text-balance" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: 16 }}>
            Ready for a Free Estimate?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "1.0625rem", fontFamily: "var(--font-dm-sans), system-ui, sans-serif", marginBottom: 28 }}>
            30-minute callback, no obligation. Mon&ndash;Sat, 7am&ndash;8pm.
          </p>
          <a
            href="#form"
            style={{
              display: "inline-block",
              backgroundColor: "#FFFFFF",
              color: "var(--ember)",
              fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
              fontWeight: 700,
              fontSize: "1rem",
              padding: "14px 32px",
              borderRadius: "var(--radius-md)",
              textDecoration: "none",
            }}
          >
            Get My Free Estimate &rarr;
          </a>
        </div>
      </section>

      <StickyMobileCTA />
    </>
  );
}
