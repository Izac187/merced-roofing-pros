# Rank-and-Rent Lead Gen Network — Design Spec
**Date:** 2026-05-12  
**Status:** Approved for implementation

---

## 1. What We're Building

A network of 6 rank-and-rent lead generation websites targeting underserved local service markets in California's Central Valley. Each site ranks organically, captures leads via form and tracking phone number, and forwards them to a paying contractor. The site owner keeps the asset. No GBP required — pure organic SEO.

**Monetization model:** Flat monthly retainer + per-lead fee above a monthly threshold.  
**Stack:** Next.js 14 (App Router, TypeScript), Tailwind CSS, Vercel (free Hobby tier per site).

---

## 2. The 6 Sites

| # | Niche | City / Service Area | Domain (example) | Competition | Est. Revenue/mo |
|---|-------|---------------------|-----------------|-------------|-----------------|
| 1 | 🏠 Roofing | Merced, CA | merced-roofing-pros.com | LOW | $1,300–$2,000 |
| 2 | ❄️ HVAC | Hanford, CA | hanford-hvac.com | LOW | $950–$1,600 |
| 3 | 🔧 Plumbing | Madera, CA | madera-plumber.com | LOWEST | $750–$1,150 |
| 4 | 🌳 Tree Service | **Tulare County**, CA | tulare-county-tree.com | MEDIUM | $800–$1,200 |
| 5 | 🪵 Fence | Madera, CA | madera-fence.com | LOW | $620–$880 |
| 6 | ⚡ Mobile Welding | Hanford, CA (ag focus) | hanford-welding.com | LOWEST | $600–$1,100 |

**Full network conservative target:** $4,500–$7,900/mo at 12–18 months once all sites are ranked.

### Build order
Sites 1 → 2 → 3 → 5 → 4 → 6. Roofing and Plumbing first (lowest competition + highest volume), Welding last (needs ag contractor relationship to set pricing correctly).

---

## 3. Strategy Fixes (Confirmed)

### Fix A — Tree Service: County-wide scope
**Problem:** Tulare city (70K pop) generates only 3–5 leads/month at position 1. Not enough to exceed the flat fee.  
**Fix:** The site serves **Tulare County** (489K people, 179K housing units). Primary location page targets "tree service Tulare CA" but service area schema, footer, and secondary pages cover Porterville, Visalia, Lindsay, Dinuba, Exeter, and Woodlake. Same domain, 5–8× the addressable market.  
**Revenue impact:** Jumps from ~$400/mo ceiling to $800–$1,200/mo.

### Fix B — Mobile Welding: Agricultural pivot
**Problem:** Residential welding search volume in a 61K city is thin — 3–5 leads/month max.  
**Fix:** Lead with **agricultural and industrial welding** as the primary value proposition. Kings County is one of California's top agricultural counties. Target keywords: "farm equipment welding Hanford CA," "ag equipment repair Kings County," "irrigation system welding," "harvester repair welder near me." These searches have lower volume but very high intent — a broken harvester during harvest = $3K–$10K emergency job.  
**Pricing adjustment:** $150/ag lead (vs $50 residential) above threshold of 3 leads.  
**Revenue impact:** Fewer leads but 3× the per-lead value. Conservative target: $600–$1,100/mo.

---

## 4. Site Architecture (Template — used by all 6 sites)

```
/                           → Homepage (Split Hero layout, lead form above fold)
/calculator                 → Live Result cost estimator (primary traffic page)
/services                   → Services overview, one H2 per service + CTA
/[primary-location]/        → Main location page (city/county specific content)
/[secondary-location]/      → Secondary location pages (sites 4 & 6 only)
/about                      → Simple trust page, no fake bios
/contact                    → Form + tracking phone number only
/blog/                      → Optional (Phase 2), 2 posts/month
sitemap.xml                 → Auto-generated via next-sitemap
robots.txt                  → Auto-generated
```

All site-specific content (city name, niche, services, calculator price ranges, keywords, phone, colors) lives in a single `lib/config.ts` per site. No hardcoded strings in components. Cloning a new site = updating config.ts + domain.

---

## 5. Homepage — Split Hero Layout (Confirmed: Option B)

**Above fold, all visible without scrolling on mobile:**
- Left column: `<h1>` headline + 3 trust bullets + phone CTA button
- Right column: compact lead form (Name, Phone, Service needed → Submit)

**`<h1>` pattern:** "[City] [Niche] — Free Estimates · Licensed & Insured"  
**Trust bullets:** Licensed & Insured · Free Estimates · Same-Day Response  
**CTA button:** "☎ Call [tracking number]" (links to `tel:`)  
**Form submit:** POST to Resend API → email to owner

On mobile: stacks to single column (form drops below headline + CTA).

---

## 6. Calculator — Live Result (Confirmed: Option B)

One page per site at `/calculator`. All inputs visible simultaneously; result updates as user changes inputs (no steps, no modals, no page reload).

**Structure:**
1. Input fields (3–4 per niche, see below)
2. Result box: city-localized price range appears immediately
3. Lead form directly below result: "Get an accurate quote" → Name, Phone → Submit

**Niche-specific inputs:**

| Site | Input 1 | Input 2 | Input 3 | Input 4 |
|------|---------|---------|---------|---------|
| Roofing | Roof size (sq ft) | Material type | Condition | — |
| HVAC | System type | Home size (sq ft) | Age of system | — |
| Plumbing | Job type | Urgency | — | — |
| Tree Service | Tree size | # of trees | Service type | County area |
| Fence | Length (linear ft) | Material | Gate needed | — |
| Welding | Job type (residential/ag) | Material | Scale | Travel distance |

Price ranges bake in a city/county-specific labor multiplier. Roofing in Merced ~10% lower than Bay Area averages. This is the differentiation vs. generic national calculators.

---

## 7. Branding & Color System

Strategy: **Committed** (one saturated color dominates the hero and primary surfaces). All palettes use OKLCH. No pure `#000` or `#fff` — every neutral tinted toward brand hue.

The first-order reflex (contractor = navy blue) and second-order reflex (not blue = orange) were both rejected for every site via the impeccable AI slop test.

| Site | Color Strategy | Base | Primary | CTA | Font Direction |
|------|---------------|------|---------|-----|----------------|
| 🏠 Roofing | Terracotta/Clay | `oklch(32% 0.09 38)` | `oklch(58% 0.15 38)` | `oklch(72% 0.18 65)` | Barlow Condensed (headings) |
| ❄️ HVAC | Deep Steel + Cyan | `oklch(22% 0.04 230)` | `oklch(38% 0.07 230)` | `oklch(78% 0.12 200)` | Manrope or Geist |
| 🔧 Plumbing | Warm Dark + Copper | `oklch(18% 0.02 50)` | `oklch(62% 0.14 50)` | `oklch(70% 0.16 55)` | Figtree or Nunito Sans |
| 🌳 Tree Service | Muted Sage | `oklch(28% 0.06 140)` | `oklch(48% 0.10 140)` | `oklch(65% 0.14 130)` | Raleway or Josefin Sans |
| 🪵 Fence | Charcoal + Amber | `oklch(22% 0.015 45)` | `oklch(38% 0.02 45)` | `oklch(72% 0.14 65)` | Urbanist or Epilogue |
| ⚡ Welding | Wire-Brushed Steel + Arc Blue | `oklch(24% 0.025 235)` | `oklch(36% 0.03 235)` | `oklch(78% 0.14 250)` | Barlow Condensed |

**Color rationale per site:**
- Roofing: Clay tile is the literal material of Central Valley roofs. Mission-era earthen palette.
- HVAC: A refrigerant pressure gauge, not a spa ad. Industrial instrument precision.
- Plumbing: Copper pipe fittings are the literal material. 1970s supply catalog warmth.
- Tree Service: California drought-resistant sage, not golf-course green.
- Fence: High-end residential architecture hardware store. Chalk line on pavement. Zero decoration.
- Welding: Wire-brushed steel prepped for welding. Arc-blue accent = the actual color of a TIG arc.

---

## 8. SEO Foundation (All Sites)

### Schema markup
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "[City] [Niche] Pros",
  "telephone": "[CallRail number]",
  "areaServed": [{ "@type": "City", "name": "[City]" }],
  "priceRange": "$$",
  "openingHours": "Mo-Sa 07:00-19:00"
}
```
Sites 4 (Tree, county-wide) and 6 (Welding, ag focus) use `GeoCircle` or multiple `City` entries in `areaServed`.

### On-page requirements
- `<h1>` matches primary keyword exactly
- One `<h2>` per service (services page)
- Location page: 600+ words, local landmarks/neighborhoods, Google Maps iframe embed (no API key)
- FAQ section on location page targeting long-tail queries ("how much does a roof cost in Merced CA")
- `next-sitemap` generates `/sitemap.xml` at build time
- `robots.txt` allows all crawlers

### Competitive differentiation
- Localized price data in calculator (not national averages)
- City/county-specific content (weather, soil, local regulations where applicable)
- NAP in footer: service area disclaimer ("Serving [City] and surrounding communities")
- Citation plan: Yelp, Angi, Yellow Pages, HomeAdvisor — submitted after site goes live

---

## 9. Lead Capture & Monetization

Every page has one lead form. Same component, same destination.

**Form fields:** Name · Phone · Service needed (optional dropdown) → Submit  
**Backend:** React Hook Form + Zod validation → Resend API → owner email  
**Phone:** CallRail tracking number (activated when contractor tenant is signed, $45/mo per site)

### Pricing per site
| Site | Flat fee/mo | Per-lead above threshold | Threshold |
|------|------------|--------------------------|-----------|
| Roofing | $500 | $100/lead | 5 leads |
| HVAC | $500 | $75/lead | 5 leads |
| Plumbing | $400 | $50/lead | 5 leads |
| Tree Service | $350 | $45/lead | 5 leads |
| Fence | $400 | $60/lead | 5 leads |
| Welding (ag) | $350 | $150/ag lead | 3 leads |

**Free lead period:** First 30 days for new contractor relationships. Removes friction from the initial pitch.  
**Setup fee:** $500 one-time, charged at contract signing. Filters tire-kickers, covers onboarding time.

---

## 10. Tech Stack

| Tool | Purpose | Cost |
|------|---------|------|
| Next.js 14 (App Router) | Framework | Free |
| TypeScript | Type safety | Free |
| Tailwind CSS | Styling | Free |
| `next-seo` | Meta tags, OG | Free |
| `next-sitemap` | Sitemap + robots.txt | Free |
| `react-hook-form` + `zod` | Form validation | Free |
| Resend | Form email delivery | Free tier |
| Vercel | Hosting (1 project per site) | Free Hobby |
| CallRail | Call tracking | $45/mo/site (activate when tenant signed) |
| BrightLocal | Rank tracking + citation audit | $39/mo (shared across all sites) |

**Monthly fixed cost while building:** ~$39/mo (BrightLocal only)  
**Per site when active:** +$45/mo CallRail (offset by flat fee from tenant)

---

## 11. Critical Files (Template)

| File | Purpose |
|------|---------|
| `lib/config.ts` | All site-specific content: city, niche, services, colors, phone, calc pricing |
| `app/layout.tsx` | Root layout, global SEO metadata defaults |
| `app/page.tsx` | Homepage (Split Hero) |
| `app/calculator/page.tsx` | Live result cost estimator |
| `app/[location]/page.tsx` | Dynamic location pages |
| `components/LeadForm.tsx` | Shared lead capture form (Resend) |
| `components/Schema.tsx` | JSON-LD injector (props-driven, reusable) |
| `components/Calculator.tsx` | Client component, live result logic |
| `components/SplitHero.tsx` | Homepage hero (left: copy, right: form) |
| `next-sitemap.config.js` | Sitemap generation config |
| `next.config.ts` | Next.js config |

---

## 12. Implementation Phases

### Phase 1 — Template Site (Roofing, Merced) · Weeks 1–4
- Scaffold Next.js app in `/Users/ias/Documents/Roofing_Company`
- Build all shared components (SplitHero, LeadForm, Calculator, Schema, Header, Footer)
- Build all pages (`/`, `/calculator`, `/services`, `/merced-roofing`, `/about`, `/contact`)
- Wire Resend form submission
- Configure next-sitemap + robots.txt
- Deploy to Vercel, submit sitemap to Google Search Console
- Target: Lighthouse mobile ≥ 90 on Performance, SEO, Accessibility

### Phase 2 — Validate & Tune · Weeks 5–6
- Verify JSON-LD at Google Rich Results Test
- Submit sitemap to Google Search Console
- Set up BrightLocal citation tracking for Merced roofing keywords
- Find and pitch first contractor tenant (free lead period offer)
- Activate CallRail once tenant signed

### Phase 3 — Clone Sites 2–6 · Months 2–6
- Clone repo → new GitHub repo per site
- Update `lib/config.ts` only (city, niche, colors, phone, calculator ranges)
- Buy domain, connect to new Vercel project
- Deploy, repeat Search Console + BrightLocal setup
- One new site per 2–3 weeks

---

## 13. Verification Checklist (Per Site)

- [ ] `npm run build` passes with zero errors
- [ ] Homepage: form visible above fold on mobile (no scroll required)
- [ ] Calculator: result appears without page reload, form visible below result
- [ ] Form submission: email received via Resend
- [ ] `/sitemap.xml` lists all pages
- [ ] JSON-LD validates at search.google.com/test/rich-results
- [ ] Lighthouse mobile: Performance ≥ 90, SEO = 100, Accessibility ≥ 90
- [ ] Vercel deployment live at production domain
- [ ] Google Search Console: sitemap submitted, no coverage errors
- [ ] BrightLocal: baseline rank report pulled for primary keyword

---

## 14. Open Questions (None — All Resolved)

All design decisions confirmed during brainstorming session 2026-05-12:
- ✅ Layout: Split Hero (Option B)
- ✅ Calculator UX: Live Result (Option B)
- ✅ Color approach: Niche-specific committed palettes (impeccable framework)
- ✅ All 6 sites and cities confirmed
- ✅ Tree service fix: county-wide scope
- ✅ Welding fix: agricultural pivot + $150/ag lead pricing
- ✅ DataForSEO MCP not available — install extension before Phase 2 keyword validation
