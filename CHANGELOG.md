# Changelog

All notable changes to this project will be documented in this file.

Format: `## [X.Y.Z.W] - YYYY-MM-DD`

---

## [0.2.0.0] - 2026-05-14

### Added
- Central Valley Direct design system (Bebas Neue + DM Sans, tar black / ember / bleached-concrete tokens)
- `DESIGN.md` and `PRODUCT.md` context files for design system spec
- `components/FAQSection.tsx` — accordion with `aria-expanded`, extracted as client component
- `components/CalculatorSection.tsx` — 3-input cost estimator, extracted as client component
- `components/StickyMobileCTA.tsx` — fixed bottom CTA bar, mobile-only, safe-area aware
- Trust bar with 5 inline SVG icons (Shield, Clock, CheckCircle, Star, MapPin)
- Google-attributed review cards with full-color G logo and star ratings
- Numbered service cards (01–04) replacing emoji icon tiles
- `VERSION` file (4-digit format, gstack compatible)
- Google Search Console verification file and meta tag

### Changed
- `app/layout.tsx` — replaced Inter/Barlow_Condensed with Bebas_Neue/DM_Sans via `next/font/google`
- `app/page.tsx` — converted to server component (restores metadata/SEO); all interactive sections delegated to client components
- `components/Header.tsx` — full rewrite: tar black sticky nav, Bebas Neue logo, in-page scroll links only
- `components/SplitHero.tsx` — full rewrite: dark hero, split layout, ember bullet dots, form card
- `components/LeadForm.tsx` — full rewrite: `id`/`for`/`autocomplete` wiring, `aria-invalid`, `role="alert"`, fields disabled during submission
- `components/Footer.tsx` — full rewrite: tar black, 3-col grid, explicit business hours
- `lib/config.ts` — removed emoji from services, added `hours` field, fixed schema hours
- `package.json` — version bumped to `0.2.0.0`

### Fixed
- Removed `axes` parameter from `DM_Sans` config (build error: axes only valid for variable fonts)
- Removed `s.icon` reference in `app/services/page.tsx` after icon field dropped from config
- Deduplicated `paddingBottom` in `StickyMobileCTA` inline style object
- Changed `<style jsx>` to plain `<style>` tag in `SplitHero` (no styled-jsx package)
- Added `"use client"` to Header, Footer, SplitHero (had event handlers in server components)
- Calculator selects now have `id`/`htmlFor` pairs (accessibility)
- LeadForm fields now `disabled` during submission with `opacity: 0.6`
- Phone regex tightened to reject non-phone strings

---

## [0.1.0] - 2026-05-13

### Added
- Initial scaffold: Next.js 14 App Router, Tailwind CSS
- Lead form with Resend email delivery (`/api/lead`)
- Services page, sitemap, robots.txt
- Vercel deploy configuration
