# Reusable Component Catalog: Vasudev Multispeciality Hospital

This document details the UI component library extracted from the reference implementation, complete with structure, functional states, accessibility attributes, and styling hooks.

---

## 1. Global Navigation Components

### Component: `Topbar`
- **Purpose:** Highlights 24×7 emergency helpline and immediate announcements.
- **Visuals:** High-urgency deep navy/crimson strip across the very top.
- **Attributes:** Includes phone call direct link `tel:+917987025114`.

### Component: `SiteHeader`
- **Purpose:** Primary sticky header containing branding, navigation links, emergency dialer, and primary booking CTA.
- **Structure:**
  - `Brand`: Hospital logo + 2-line title (`Vasudev Multispeciality Hospital` + `& Research Centre · Raipur`).
  - `Nav`: Links to `#doctors`, `#departments`, `#facilities`, `#patients`, `#insurance`, `#about`, `#contact`.
  - `Header-CTA`: Emergency telephone chip with animated pulsing ring + red "Book Appointment" button.
  - `Menu-Button`: Mobile hamburger toggle with `aria-expanded` and `aria-controls`.

### Component: `MobileDock`
- **Purpose:** Fixed bottom mobile navigation bar (visible below `768px`).
- **Items:**
  1. `Emergency` (Phone icon, direct `tel:` trigger)
  2. `Doctors` (User icon, links to `#doctors`)
  3. `Book` (Prominent center elevated action, links to `#appointment`)
  4. `Reports` (File document icon, links to `#patients`)

---

## 2. Content & Information Display Components

### Component: `TodayOpdTicker`
- **Purpose:** Shows patients real-time availability of doctors right on the hero banner.
- **Logic:**
  - Calculates current local day (`0` = Sun, `1` = Mon ... `6` = Sat) and time (`HH:mm`).
  - Cross-references doctor OPD slot array.
  - Renders dynamic pill:
    - `🟢 Available Now` (In OPD at this exact minute)
    - `🟡 In Today at 3:00 PM` (Scheduled for later today)
    - `⚪ Next on Monday` (Off duty today)

### Component: `DoctorCard`
- **Structure:**
  - `Avatar/Photo`: Circular or square framed portrait or dual-letter monogram fallback.
  - `Name & Degrees`: Doctor name in English and Hindi (`name_hi`) + academic degrees.
  - `Designation & Department`: Medical specialty tag.
  - `Status Badge`: Real-time computed OPD status pill (`live`, `today`, `next`).
  - `OPD Schedule List`: Formatted days and time brackets in monospace font.
  - `Action Buttons`:
    - Primary: "Book with [Doctor]" (switches view to `#appointment` and auto-selects doctor)
    - Secondary: "Profile / Bio" (opens detailed modal or bio accordions)

### Component: `DepartmentCard`
- **Structure:**
  - `Icon`: Medical specialty SVG (Kidney, Brain, Bone, Stethoscope, Surgery, etc.).
  - `Department Name`: Bilingual title (English + Hindi).
  - `Summary`: 1-2 sentence overview of core clinical capabilities.
  - `Treated Conditions Pills`: Interactive tag pills listing key conditions (e.g. "Kidney stones", "Hernia").
  - `Procedures Accordion`: Expandable checklist of available surgical and medical interventions.
  - `CTA`: "Consult Specialist" / "View Doctors in Department".

### Component: `FacilityCard`
- **Structure:**
  - Highlighting 24×7 availability, technology level (e.g., "Multi-slice CT", "Laminar Flow OT"), and key clinical benefit.

---

## 3. Interactive Form Components

### Component: `AppointmentBookingForm`
- **Form Fields:**
  - `Patient Name`: Required text.
  - `Mobile Number`: Required, validated 10-digit Indian mobile regex `^[6-9]\d{9}$`.
  - `Department`: Select dropdown populated dynamically from the 16 departments.
  - `Preferred Doctor`: Select dropdown filtered dynamically based on chosen department.
  - `Preferred Date`: HTML5 date picker defaulting to tomorrow or current date.
  - `Brief Health Concern / Message`: Textarea for symptoms.
- **States:**
  - `Empty`: Clean form with placeholder helpers.
  - `Validating`: Real-time input boundary checks.
  - `Submitting`: Disabled button with spinner animation.
  - `Success`: Animated confirmation card with appointment tracking ID and phone support info.
  - `Error`: Inline contextual alert message.

### Component: `PatientReportLookup`
- **Form Fields:**
  - `Mobile Number`: 10-digit registered number.
  - `Billing Security PIN`: 4-6 digit numeric PIN from bill receipt.
- **States:**
  - `Input State`: Clean dual-field card with helper instructions on where to find the PIN.
  - `Loading State`: Skeleton loader while fetching records.
  - `Results State`: Shows patient full name, date of collection, test title, and direct "Download PDF" / "Print" buttons.
  - `Empty / Error State`: Helpful guidance ("No reports found for this PIN. Check the PIN on your bill or call reception").

---

## 4. Conversational Support Component

### Component: `HealthcareChatbot`
- **Positioning:** Floating action button (FAB) at bottom-right corner.
- **Capabilities:**
  - Rule-based & keyword fuzzy matcher for Hindi and English medical terms.
  - Emergency triage: If queries mention "accident", "chest pain", or "emergency", chatbot instantly prioritizes ambulance calling and location directions.
  - Doctor matcher: Matches doctor names and outputs their live OPD timing and one-click booking button.
  - Symptom to department router: e.g. "headache" -> Neurology; "pathari/stone" -> Urology.
  - Lead generation: Captures patient callback requests directly into enquiries.
