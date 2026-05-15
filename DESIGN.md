# Design System — Merced Roofing Pros

## Product Context
- **What this is:** Rank-and-rent lead generation site for roofing in Merced, CA
- **Who it's for:** Middle-income homeowners (35–65) searching for a roofer after storm damage, a leak, or an annual inspection. Mobile-first, often stressed, comparing 2–3 options before calling.
- **Space/industry:** Local home services, contractor lead generation
- **Project type:** Marketing site / lead gen (design IS the product)

## Aesthetic Direction
- **Direction:** Central Valley Direct — bold typographic, warm industrial
- **Decoration level:** Minimal. Typography, numbers, and color do the work. No decorative blobs, no gradient overlays, no stock photography.
- **Mood:** Confident and local. The site feels like a knowledgeable neighbor — direct, plain-spoken, on your side. Not a corporate franchise, not a fly-by-night operation.
- **Key constraint:** Contractor-agnostic. No crew photos, no contractor name, no hard pricing commitments. The site must survive a contractor switch without a redesign.

## Typography
- **Display/Hero:** Bebas Neue — compressed, all-caps, fills vertical space aggressively without requiring imagery. Signals "local character" not "generic franchise."
  - Load: `https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap`
- **Body:** DM Sans — humanist, legible at small sizes, balances the aggression of the display face.
  - Load: `https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&display=swap`
- **UI/Labels:** DM Sans 600–700
- **Data/Tables:** DM Sans with `font-variant-numeric: tabular-nums` — used for price ranges and calculator output
- **Code:** Not applicable

### Type Scale
| Token | Size | Weight | Usage |
|-------|------|--------|-------|
| `display-xl` | clamp(3.5rem, 7vw, 5.5rem) | Bebas Neue | Hero headline |
| `display-lg` | clamp(2rem, 4vw, 3rem) | Bebas Neue | Section headings |
| `display-md` | 1.75rem | Bebas Neue | Card headings, form titles |
| `display-sm` | 1.4rem | Bebas Neue | Service titles, sub-headings |
| `display-num` | 3rem | Bebas Neue | Service card numbers (01–04) |
| `body-lg` | 1.125rem | DM Sans 400 | Hero sub-copy |
| `body-md` | 1rem | DM Sans 400 | Body paragraphs |
| `body-sm` | 0.875rem | DM Sans 400 | Descriptions, secondary copy |
| `label` | 0.8125rem | DM Sans 600 | Form labels, metadata |
| `eyebrow` | 0.7rem | DM Sans 700 | Section eyebrows (uppercase, tracked) |
| `micro` | 0.75rem | DM Sans 500 | Trust badges, fine print |

### Eyebrow Pattern
All section eyebrows use: `24px ember line` + `0.7rem / 700 / 0.16em tracking / uppercase`. Never use eyebrows as standalone headings.

## Color

- **Approach:** Committed. The dark hero surface and ember accent carry significant visual weight — this is not a restrained neutral-plus-one-accent system.

### Palette
| Name | Hex | OKLCH approx. | Usage |
|------|-----|---------------|-------|
| Tar Black | `#1A1208` | oklch(12% 0.04 55) | Hero bg, header bg, footer bg, body text |
| Deep Adobe | `#2C1A0E` | oklch(18% 0.06 50) | Trust bar bg, secondary dark surfaces |
| Merced Ember | `#E8521A` | oklch(56% 0.19 35) | Primary CTA, accent, eyebrow lines, service numbers |
| Ember Hover | `#C94210` | oklch(48% 0.18 35) | CTA hover state |
| Price Gold | `#FF8C00` | oklch(68% 0.18 60) | Star ratings, price callouts |
| Bleached Concrete | `#F5ECD7` | oklch(93% 0.03 70) | Page background, form inputs |
| Warm Border | `#DDD0BF` | oklch(84% 0.02 70) | Card borders, dividers, form borders |
| Warm Gray | `#6B5F54` | oklch(44% 0.03 60) | Body text, muted copy |
| Warm Gray Light | `#9E8E82` | oklch(60% 0.02 60) | Timestamps, tertiary text |
| White | `#FFFFFF` | oklch(100% 0 0) | Form card bg, review cards |

### Semantic
| Role | Color |
|------|-------|
| Success | `#166534` text on `#DCFCE7` bg |
| Error | `#DC2626` |
| Focus | `var(--ember)` border |

### Dark surface text
On `#1A1208` and `#2C1A0E`:
- Primary: `#FFFFFF`
- Secondary: `rgba(245,236,215,0.8)` — bleached concrete at 80% opacity
- Muted: `rgba(245,236,215,0.5)`
- Disabled: `rgba(245,236,215,0.35)`

## Spacing
- **Base unit:** 8px
- **Density:** Comfortable — not tight data-dense, not luxury-airy. Sections breathe; forms are efficient.

| Token | Value |
|-------|-------|
| `space-1` | 4px |
| `space-2` | 8px |
| `space-3` | 12px |
| `space-4` | 16px |
| `space-5` | 20px |
| `space-6` | 24px |
| `space-8` | 32px |
| `space-10` | 40px |
| `space-12` | 48px |
| `space-16` | 64px |
| `space-20` | 80px |

## Layout
- **Approach:** Grid-disciplined for content sections; full-bleed for hero, trust bar, calculator, CTA banner, footer.
- **Max content width:** 1120px (`--max-w`)
- **Grid:** 2-column hero (copy + form card 420px fixed), auto-fit for services (minmax 240px), 2-column for calculator. All collapse to single column at 800px.

### Border Radius
| Token | Value | Usage |
|-------|-------|-------|
| `radius-sm` | 4px | Trust icon containers |
| `radius-md` | 8px | Buttons, form inputs, selects, tags |
| `radius-lg` | 12px | Service cards, review cards |
| `radius-xl` | 16px | Hero form card, calculator card |
| `radius-full` | 9999px | Pills, avatar circles |

## Motion
- **Approach:** Minimal-functional. Transitions only where they aid comprehension or provide feedback.
- No scroll-driven animations, no entrance animations, no bounce.

| Element | Property | Duration | Easing |
|---------|----------|----------|--------|
| Buttons, links | `background`, `color`, `border-color` | 150ms | ease |
| Form inputs | `border-color` | 150ms | ease |
| FAQ toggle | `transform` (rotate +) | 200ms | ease |
| Button press | `transform: scale(0.98)` | 100ms | ease |
| Service cards | `border-color`, `box-shadow` | 150ms | ease |

## Components

### Header
- Sticky, `z-index: 100`, tar black background with `1px rgba(255,255,255,0.08)` bottom border.
- Left: logo (Bebas Neue, ember accent on "ROOFING")
- Center: nav links (DM Sans 500, 0.875rem, bleached concrete at 75%)
- Right: phone number (Bebas Neue 1.5rem white) + "Free Quote" ember button
- Mobile: hide center nav and phone number; show only logo + CTA button

### Lead Form Card
- White surface, `border-radius: 16px`, shadow: `0 24px 64px rgba(0,0,0,0.35), 0 4px 16px rgba(0,0,0,0.15)`
- Fields: bleached concrete bg, `1.5px solid var(--border)`, ember border on focus
- Required fields: name (autocomplete="name") and phone (autocomplete="tel", 10-digit pattern)
- Service select: optional, no validation required
- Error state: `#DC2626` border + inline error text below field, `role="alert"`
- Success state: replaces form content with confirmation + hours note
- Trust row: "No spam · 30-min callback · Free estimate" in warm gray micro text

### Service Cards
- White surface, `1.5px solid var(--border)`, `border-radius: 12px`
- Structure: large Bebas Neue number (01–04) in ember → service title → description → "Get a quote →" link
- No icon tiles, no emoji. Numbers ARE the visual anchor.
- Hover: ember border + `box-shadow: 0 4px 20px rgba(232,82,26,0.1)`

### Trust Bar
- Deep Adobe (`#2C1A0E`) background, full-bleed
- 5 trust items separated by `1px rgba(255,255,255,0.1)` dividers
- Each item: 36×36px `rgba(255,255,255,0.07)` icon container with ember SVG stroke icon + label + sub-label
- Mobile: center-aligned, dividers hidden

### Reviews
- White section background
- Google G SVG (full color) next to rating score
- Review cards: bleached concrete bg, `1.5px warm border`, `border-radius: 12px`
- Each card: stars + date row → quote text → author (initials avatar + name + city)
- Footer: "See all 87 reviews on Google →" link with Google G mark

### Calculator
- Full-bleed tar black section
- 2-column: left = copy + numbered steps, right = card
- Card: `rgba(255,255,255,0.05)` bg, `1px rgba(255,255,255,0.1)` border
- Result area: `rgba(232,82,26,0.15)` bg, `1px rgba(232,82,26,0.3)` border
- Result range: Bebas Neue 2.25rem white

### Sticky Mobile CTA
- Fixed bottom bar, tar black, `border-top: 1px rgba(255,255,255,0.1)`
- Two equal buttons: "Call Now" (ember) + "Free Quote →" (rgba white)
- Accounts for `env(safe-area-inset-bottom)` for notch phones
- Visible only on mobile (max-width: 800px)

### Section Eyebrow
- `24px ember line` + `0.7rem / DM Sans 700 / 0.16em letter-spacing / uppercase / ember color`
- Never more than 4 words

### Buttons
| Variant | Background | Text | Hover |
|---------|-----------|------|-------|
| Primary (ember) | `#E8521A` | white | `#C94210` |
| Secondary | `#1A1208` | white | darken |
| Outline | transparent | white | border opacity ↑ |
| White | `#FFFFFF` | ember | `#F5ECD7` |
| Text | transparent | ember | — |

All buttons: `border-radius: 8px`, `font-weight: 700`, `font-family: DM Sans`, `transform: scale(0.98)` on active.

## Business Hours
The 30-minute callback promise must always include the hours qualifier: **Mon–Sat, 7am–8pm**. After-hours submissions get a morning callback. This note appears on: hero sub-copy, form card eyebrow, trust bar sub-label, FAQ, form success state.

## Conversion Principles
1. Form above the fold, always.
2. Phone number large in the header — tap target on mobile.
3. Every section ends with a CTA pointing to `#form` or the phone number.
4. Sticky mobile bar at all times.
5. No nav links that go nowhere. All nav items scroll to existing sections.

## Decisions Log
| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-05-14 | Bebas Neue for display | Fills space without photography; distinctly local, not franchise generic |
| 2026-05-14 | DM Sans for body | Balances Bebas Neue aggression; humanist, readable at small sizes |
| 2026-05-14 | Bleached Concrete (#F5ECD7) page bg | Distinctly Central Valley; no competitor in Merced uses this; warm not clinical |
| 2026-05-14 | Merced Ember (#E8521A) accent | More energetic than amber/honey; clear CTA hierarchy; not the overused navy-blue |
| 2026-05-14 | Numbered cards (01–04) instead of icon tiles | Icon-tile-above-heading is the #1 AI design tell; numbers are on-brand and more distinctive |
| 2026-05-14 | No emoji anywhere | Emoji as UI icons is a production quality tell; SVG strokes used throughout |
| 2026-05-14 | No price anchoring in hero | Rank-and-rent model — contractor may change; hard prices create mismatched expectations |
| 2026-05-14 | Nav links only to in-page sections | No About/Contact pages (rank-and-rent, no real team); phantom nav destroyed trust with comparison shoppers |
| 2026-05-14 | Business hours defined everywhere | "30 minutes" promise without hours created anxiety for off-hours submissions |
