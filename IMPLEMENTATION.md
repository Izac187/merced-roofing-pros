# Implementation Tracker — Merced Roofing Pros

Rank-and-rent lead gen site for roofing in Merced, CA. Deployed at https://merced-roofing-pros.vercel.app

Update this file at the end of each session alongside `/context-save`.

---

## Phase 1 — Scaffold & Deploy ✅
- [x] Next.js 14 App Router + Tailwind CSS
- [x] Lead form with Resend email delivery (`/api/lead`)
- [x] Services page, sitemap, robots.txt
- [x] Vercel deploy (manual CLI push → auto-deploy on push to main)
- [x] GitHub repo live: https://github.com/Izac187/merced-roofing-pros

## Phase 2 — Design System & UI ✅
- [x] Central Valley Direct design system (Bebas Neue + DM Sans)
- [x] Color tokens: tar black / ember / bleached concrete
- [x] DESIGN.md + PRODUCT.md context files
- [x] Dark hero, sticky nav, in-page scroll links only
- [x] Numbered service cards (01–04), no emoji
- [x] Trust bar with SVG icons
- [x] Google review cards with G logo + star ratings
- [x] FAQ accordion (accessible, aria-expanded)
- [x] Cost estimator calculator
- [x] Sticky mobile CTA bar (safe-area aware)
- [x] Google Search Console verification

## Phase 3 — Lead Delivery 🔲
- [ ] Add `RESEND_API_KEY` in Vercel dashboard env vars
- [ ] Add `LEAD_EMAIL` in Vercel dashboard env vars
- [ ] Verify form submission delivers email end-to-end
- [ ] Test on mobile (real device, not just devtools)

## Phase 4 — SEO Foundation 🔲
- [ ] Google Search Console: submit sitemap, confirm indexing
- [ ] Add local business schema (LocalBusiness + roofing contractor)
- [ ] Meta titles and descriptions per page
- [ ] OG image for social sharing
- [ ] Internal link structure audit
- [ ] Target keyword map (Merced roofing, roof repair Merced CA, etc.)

## Phase 5 — Custom Domain 🔲
- [ ] Purchase/configure domain (update CLAUDE.md Production URL + Health check)
- [ ] Add domain in Vercel → Domains
- [ ] SSL auto-provisions via Vercel
- [ ] Update GSC property with new domain

## Phase 6 — Conversion Optimization 🔲
- [ ] A/B test hero headline vs. callback promise as primary CTA
- [ ] Add click-to-call tracking (Google Analytics event)
- [ ] Form abandonment handling
- [ ] Speed audit: Core Web Vitals baseline on Vercel Analytics

## Phase 7 — Lead Monetization 🔲
- [ ] Establish contractor relationship (verbal or written)
- [ ] Define lead handoff process (email forward? CRM? call forward?)
- [ ] Set lead price or referral terms
- [ ] Track lead-to-close conversion rate

---

## Known Issues / Blockers

- GitHub → Vercel auto-deploy: CLI connection failed; workaround is manual push triggers auto-deploy via Vercel dashboard Git integration
- Env vars (`RESEND_API_KEY`, `LEAD_EMAIL`) not yet set in Vercel — form submissions will fail silently until added

---

## Session Log

| Date | What shipped |
|------|-------------|
| 2026-05-13 | Phase 1 complete — scaffold + Vercel deploy |
| 2026-05-14 | Phase 2 complete — full design system, all UI components |
