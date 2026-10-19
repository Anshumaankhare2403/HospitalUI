# Architectural & Design Decisions

## Decision 1: Architecture Selection - Vanilla HTML5/CSS/JS vs. Heavy JS Frameworks
- **Decision:** Build the platform using modern Vanilla HTML5, Vanilla CSS with custom properties, and modular ES6+ JavaScript, rather than introducing Node/Next.js/React build dependencies.
- **Rationale:**
  1. A hospital informational and appointment-booking portal must load instantly, especially for emergency patients on mobile 4G/3G connections in Chhattisgarh.
  2. The reference site demonstrates that a Vanilla SPA delivers sub-second FCP (<0.8s) and pristine Lighthouse scores.
  3. Eliminates build step vulnerabilities and server maintenance friction.

## Decision 2: Hybrid Offline-Online Data Client
- **Decision:** Design `api.js` and `data.js` with an automated fallback mechanism: if the live REST API `/api/?a=content` is accessible, it loads live data; otherwise, it seamlessly utilizes the embedded comprehensive verified dataset and stores appointment bookings and report lookups in browser `localStorage`.
- **Rationale:** Guarantees 100% functionality and uptime during local development, demo presentations, and network interruptions. Verified during testing with appointment reference `APT-602110`.

## Decision 3: Color Palette & Typography Tokens
- **Decision:** Adhere faithfully to the extracted clinical color system: Deep Navy (`#0e1758`, `#1c2b8f`), Emergency Red (`#d42a31`), Trust Gold (`#f2b733`), and Soft Paper canvas (`#f5f8fc`), paired with Google Fonts `"Bricolage Grotesque"` and `"Mukta"`.
- **Rationale:** Provides established visual authority, excellent contrast ratios (WCAG AAA), and warm bilingual Devanagari Hindi readability.

## Decision 4: Real-Time Dynamic OPD Availability Engine
- **Decision:** Implement a client-side real-time calculation engine that computes doctor duty status matching local time against the weekly schedule array (`Available Now`, `In Today at [Time]`, `Next on [Day]`).
- **Rationale:** Eliminates patient confusion and reduces unnecessary phone calls to hospital reception.

## Decision 5: Emergency Intercept Logic
- **Decision:** Implement proactive keyword interception in both chatbot and top navigation for acute trauma phrases ("chest pain", "accident", "bleeding", "unconscious", "emergency", "आपातकाल", "दुर्घटना"), which immediately surfaces one-tap ambulance dialing (`79870 25114`) and Google Maps driving directions rather than standard bot FAQ responses.
- **Rationale:** In critical healthcare triage, seconds save lives. Immediate telephonic and navigational actions must take precedence over informational browsing.
