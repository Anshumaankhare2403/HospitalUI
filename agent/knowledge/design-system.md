# Design System & Visual Specification: Vasudev Multispeciality Hospital

This document establishes the verified design tokens, typography, color palette, spatial geometry, elevation system, and component styling rules extracted from the reference site's CSS architecture (`assets/css/site.css` and `assets/css/premium.css`).

---

## 1. Color Palette & Semantic Tokens

### Primary Brand Palette

| Token Name | HEX Value | Role / Usage |
|------------|-----------|--------------|
| `--navy-deep` | `#0e1758` | Deep header background, primary brand identity, top navigation |
| `--navy` | `#1c2b8f` | Primary interactive buttons, links, strong brand accents |
| `--hero-a` | `#0b1452` | Hero gradient start (dark deep navy) |
| `--hero-b` | `#1c2b8f` | Hero gradient end (vibrant royal navy) |
| `--gold` | `#f2b733` | Trust badges, NABH highlights, premium star accents |
| `--red` | `#d42a31` | Emergency alert banner, 24×7 hotline callouts, high-urgency buttons |
| `--red-soft` | `#fdecec` | Emergency banner background, urgent callout fills |
| `--ok` | `#11834f` | Success indicators, "Available Now" doctor status pill |
| `--ok-soft` | `#e3f5ec` | Available status badge background fill |
| `--warn` | `#9a6400` | Warning, "In Today at [Time]" OPD schedule pill |
| `--warn-soft`| `#fbf1dc` | Warning status badge background fill |

### Light Mode Neutral Tokens (Default)

| Token Name | HEX Value | Description |
|------------|-----------|-------------|
| `--paper` | `#f5f8fc` | Main body canvas / page background (ultra-soft icy tint) |
| `--surface` | `#ffffff` | Card surfaces, modals, elevated panels, form containers |
| `--tint` | `#e9f0fa` | Subtle nested containers, table alternate rows, pill tags |
| `--ink` | `#0f1a46` | High-contrast body typography and primary headings |
| `--muted` | `#56618a` | Secondary descriptions, captions, timestamps, subtitles |
| `--line` | `#d5deec` | Borders, divider lines, form input outlines |

### Dark Mode Semantic Tokens (Auto & Class-Triggered)

| Token Name | HEX Value | Description |
|------------|-----------|-------------|
| `--paper` | `#0a1022` | Deep nocturnal canvas background |
| `--surface` | `#111a35` | Dark elevated card container background |
| `--tint` | `#16214a` | Subtle dark pill badge and nested card fill |
| `--ink` | `#e7ecfb` | High-legibility light text for dark mode |
| `--muted` | `#a2acd0` | Soft muted blue-grey for secondary dark text |
| `--line` | `#26325f` | Subtle luminous divider line |
| `--hero-a` | `#050a24` | Ultra-deep hero gradient start |
| `--hero-b` | `#111d63` | Deep hero gradient end |
| `--gold` | `#f5c45a` | Luminous gold accent in dark mode |

---

## 2. Typography & Font Hierarchy

### Font Families
- **Display Headings (`--font-display`):**
  `"Bricolage Grotesque", "Mukta", system-ui, sans-serif`
  - High-impact personality with humanist medical warmth.
  - Weights used: `600` (Semi-bold), `700` (Bold), `800` (Extra-bold).
- **Body & Devanagari Hindi (`--font-body`):**
  `"Mukta", "Noto Sans Devanagari", system-ui, -apple-system, "Segoe UI", sans-serif`
  - Clean bilingual legibility for English and Devanagari Hindi script.
  - Weights used: `400` (Regular), `500` (Medium), `600` (Semi-bold), `700` (Bold).
- **Technical & Timestamps (`--font-mono`):**
  `"IBM Plex Mono", ui-monospace, "SFMono-Regular", Menlo, monospace`
  - Used for OPD timings, PINs, phone numbers, and certificate IDs.

### Fluid Typography Scale

| Level | Size (Clamp) | Weight | Line Height | Usage |
|-------|--------------|--------|-------------|-------|
| Hero Title | `clamp(2rem, 5vw, 3.4rem)` | 800 | 1.1 | Main Hero value proposition |
| Section H2 | `clamp(1.6rem, 3.5vw, 2.4rem)` | 700 | 1.2 | Section titles |
| Card Title H3| `1.25rem - 1.4rem` | 700 | 1.3 | Doctor names, department titles |
| Body Regular | `1.05rem (16.8px)` | 400 / 500 | 1.55 | Paragraphs, descriptions |
| Small / Badge | `0.85rem - 0.9rem` | 600 | 1.4 | Badges, tags, form helper text |
| Micro / Ticker| `0.75rem - 0.8rem` | 600 | 1.2 | Disclaimer text, status pills |

---

## 3. Spatial Geometry & Layout Grid
- **Container Max-Width (`--wrap`):** `1180px`
- **Fluid Horizontal Gutter (`--gutter`):** `clamp(16px, 4vw, 32px)`
- **Border Radius (`--radius`):** `14px` standard; `24px` for large hero cards; `999px` for pill tags.
- **Elevation Shadows:**
  - Standard Card: `0 1px 2px rgba(15, 26, 70, .06), 0 8px 24px rgba(15, 26, 70, .07)`
  - Elevated Lift (`--card-lift`): `0 2px 4px rgba(15, 26, 70, .05), 0 18px 40px rgba(15, 26, 70, .10)`
  - Interactive Hover: Smooth translation `-3px` with shadow expansion.

---

## 4. Micro-Interactions & States
- **Transitions:** `all 0.22s cubic-bezier(0.16, 1, 0.3, 1)`
- **Doctor Availability Pulse:** Glowing animated ring on emergency button and "Available Now" badge.
- **Form Inputs:** Focus ring `0 0 0 3px rgba(28, 43, 143, 0.18)` with border color change to `--navy`.
- **Buttons:**
  - Primary Red (`.btn-red`): `#d42a31` background, white text, subtle scale on tap.
  - Primary Navy (`.btn-navy`): `#1c2b8f` background, white text.
  - Ghost / Outline: Transparent background with `--line` border and `--ink` text.
