# Implementation Tracker — Merced Roofing Pros

Rank-and-rent lead gen site for roofing in Merced, CA. Live at https://mercedroofingpro.com

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

## Phase 3 — Lead Delivery ✅
- [x] Add `RESEND_API_KEY` in Vercel env vars (via CLI)
- [x] Add `LEAD_EMAIL` in Vercel env vars (via CLI)
- [x] Verify `mercedroofingpro.com` in Resend — `from: noreply@mercedroofingpro.com` confirmed working
- [x] Form submission verified end-to-end — email received at `isalinas187@gmail.com`
- [ ] Test on mobile (real device, not just devtools)

## Phase 4 — SEO Foundation 🔲
- [x] Google Search Console: sitemap submitted to `https://mercedroofingpro.com/sitemap.xml`
- [ ] Add local business schema (LocalBusiness + roofing contractor)
- [ ] Meta titles and descriptions per page
- [ ] OG image for social sharing
- [ ] Internal link structure audit
- [ ] Target keyword map (Merced roofing, roof repair Merced CA, etc.)

## Phase 5 — Custom Domain ✅
- [x] Domain `mercedroofingpro.com` purchased and configured
- [x] Nameservers pointed to Vercel (ns1/ns2.vercel-dns.com via Hostinger) — propagated 2026-05-16
- [x] Domain assigned to Vercel project — SSL auto-provisioned
- [x] GSC property `https://mercedroofingpro.com/` verified and sitemap submitted
- [x] CLAUDE.md updated with new production URL

## Phase 5.5 — Local SEO Tracking ✅
- [x] BrightLocal account created (Track plan, 14-day trial) — `isaac.alexis.salinas@gmail.com`
- [x] Merced Roofing Pros location added (service area business)
- [x] Rank tracker set up — baseline captured (not yet ranking)
- [x] Citation tracker run — baseline captured

## Phase 6 — Conversion Optimization 🔲
- [ ] A/B test hero headline vs. callback promise as primary CTA
- [ ] Add click-to-call tracking (Google Analytics event)
- [ ] Form abandonment handling
- [ ] Speed audit: Core Web Vitals baseline on Vercel Analytics

## Phase 7 — Lead Monetization 🔲
- [ ] Establish contractor relationship (verbal or written)
- [ ] Define lead handoff process (email forward? CRM? call forward?)
- [ ] Set up CallRail tracking number
- [ ] Set lead price or referral terms
- [ ] Track lead-to-close conversion rate

## Phase 8 — Clone to Sites 2–6 🔲
- [ ] Hanford HVAC
- [ ] Madera Plumbing
- [ ] Tulare Tree Service
- [ ] Madera Fence
- [ ] Hanford Welding
- [ ] BrightLocal location added per site

---

## Known Issues / Blockers

- Mobile real-device test not yet done (Phase 3 item outstanding)
- Local business schema not yet added (Phase 4)
- No contractor tenant yet — site receiving no real leads

---

## Session Log

| Date | What shipped |
|------|-------------|
| 2026-05-13 | Phase 1 complete — scaffold + Vercel deploy |
| 2026-05-14 | Phase 2 complete — full design system, all UI components |
| 2026-05-15 | Phase 3 complete — Resend verified, lead flow confirmed end-to-end |
| 2026-05-16 | Phase 5 complete — mercedroofingpro.com live, GSC sitemap submitted, BrightLocal set up (Phase 5.5) |
