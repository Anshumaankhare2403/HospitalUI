# Figma UI Design System: Modern Hospital Web Platform

This document specifies the exact design system, tokens, geometry, typography, and visual rules recreated from the Figma Hospital UI design screenshots.

---

## 1. Exact Color Palette

| Color Role | Hex Code | Purpose & Usage |
| :--- | :--- | :--- |
| **Primary Purple** | `#4200FF` | Primary brand accent, primary CTA buttons ("Book an appointment", "Subscribe", "Search"), active cards, highlight text, icons, logo badge |
| **Primary Hover** | `#3600D1` | Darker purple state for button hovers and active focus |
| **Dark Grey** | `#404040` | Secondary branding ("logo" text in navbar), primary text headings, body content, footer base |
| **Light Grey** | `#C5C5C5` | Subtle borders, placeholder texts, secondary muted captions, unselected pagination dots |
| **Main Background** | `#FFFFFF` | Canvas base, primary card background, clean medical white surface |
| **Secondary Surface** | `#F5F5F5` | Secondary card fills, search bar container, footer background, pill backgrounds |
| **Subtle Border** | `#ECECEC` | Card borders, search panel outlines, divider lines |
| **Soft Shadow** | `rgba(0, 0, 0, 0.05)` | Low-opacity grey card elevation: `0 4px 20px rgba(0, 0, 0, 0.05)` |
| **Purple Shadow** | `rgba(66, 0, 255, 0.15)`| Elevated CTA shadow: `0 10px 25px rgba(66, 0, 255, 0.2)` |

---

## 2. Typography Specification

- **Primary Font Family:** `Poppins`, sans-serif (imported via Google Fonts weights 300, 400, 500, 600, 700).
- **Hero Heading:** `clamp(2.4rem, 5vw, 3.8rem)`, font weight 700 / Bold, with "We care" highlighted in `#4200FF`.
- **Section Headings:** `2.2rem - 2.6rem`, font weight 700 / Bold, color `#404040`.
- **Card Titles:** `1.2rem - 1.35rem`, font weight 600 / Semi-bold.
- **Body & Subtitles:** `0.95rem - 1.05rem`, font weight 400 / Regular, color `#666666` or `#404040`.
- **Buttons & Tags:** `0.88rem - 0.95rem`, font weight 500 / 600.

---

## 3. 3D Capsule Background Constraints

- **Geometry:** `CapsuleGeometry` (radius, length, capSegments, radialSegments).
- **Materials:** `MeshStandardMaterial` with subtle metalness (`0.1 - 0.2`) and roughness (`0.3 - 0.5`).
- **Color Distribution:**
  - 40% Primary Purple (`#4200FF`)
  - 30% Light Grey (`#C5C5C5`)
  - 20% Dark Grey (`#404040`)
  - 10% Soft Off-White Neutral (`#F0EDFF`)
- **Spatial Positioning:**
  - Placed behind the interface (`z-index: 0`).
  - Pointer-events set to `none` (`pointer-events: none`).
  - Concentrations mainly in the hero section and open atmospheric spaces without obscuring text or doctor photos.
- **Performance & Fallbacks:**
  - Respects `prefers-reduced-motion`.
  - Static CSS floating gradient fallback when WebGL is unavailable.
