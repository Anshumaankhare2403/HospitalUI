# User Journeys: Hospital Platform

This document maps out end-to-end user journeys for key clinical and administrative interactions.

---

## Journey 1: Acute Emergency Assistance (Critical Triage)

```mermaid
flowchart TD
    A[Patient / Attendant experiences medical crisis] --> B[Visits Hospital Website on Mobile]
    B --> C[Immediately sees 24x7 Emergency Callout & Topbar]
    C --> D{Chooses Immediate Action}
    D -->|Telephone Ambulance/Triage| E[Taps Red '79870 25114' Button]
    D -->|Self-Transport Navigation| F[Taps 'Directions' to open Google Maps]
    E --> G[Phone dialer connects to Hospital Emergency Bay]
    F --> H[Arrives at Emergency Entrance in Daganiya, Raipur]
    G & H --> I[Instant ICU / Resuscitation Triage without delay]
```

### UX Priorities:
- Zero interstitials, no pop-up cookie blockers, no registration hurdles.
- Emergency number must be tappable with single-click tel-uri protocol.

---

## Journey 2: Outpatient Doctor Discovery & Appointment Booking

```mermaid
flowchart TD
    A[User visits website with specific health condition] --> B[Browses Hero or clicks 'Doctors']
    B --> C[Uses Clinical Search or Filters by Department]
    C --> D[Reviews Doctor Card: Degrees, Specialty, OPD Schedule]
    D --> E[Checks Live OPD Status: 'Available Now' or 'In Today']
    E --> F[Clicks 'Book with Doctor']
    F --> G[Booking Modal opens with Doctor & Department pre-populated]
    G --> H[Enters Patient Name, 10-digit Mobile, and Preferred Date]
    H --> I[Clicks 'Confirm Booking Request']
    I --> J[Displays Confirmation Card with Reference ID & WhatsApp Link]
    J --> K[Hospital Helpdesk contacts patient within 15 minutes to confirm slot]
```

### UX Priorities:
- Seamless pre-filling reduces drop-offs.
- Indian mobile validation ensures valid telephone follow-ups.

---

## Journey 3: Self-Service Diagnostic Report Retrieval

```mermaid
flowchart TD
    A[Patient visits hospital and completes diagnostic blood / imaging tests] --> B[Receives physical payment bill containing Security PIN]
    B --> C[Navigates to '#patients' on hospital website]
    C --> D[Enters 10-digit registered mobile number & billing PIN]
    D --> E[Clicks 'Search Reports']
    E --> F{Credentials Match in Database?}
    F -->|Yes| G[Displays Patient Name, Test Titles, and Download Buttons]
    F -->|No| H[Displays Friendly Error with Reception Help Hotline]
    G --> I[Patient clicks 'Download PDF' or prints report directly]
```

### UX Priorities:
- Zero friction, no complex passwords to remember.
- Strict two-factor validation (Mobile + Billing PIN) preserves medical confidentiality.
