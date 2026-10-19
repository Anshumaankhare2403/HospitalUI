# Features & Functional Matrix: Vasudev Multispeciality Hospital

This document catalogues every user-facing, administrative, and clinical workflow feature identified during the comprehensive inspection of `https://vasudevhospital.in`.

---

## 1. Patient Acquisition & Clinical Scheduling Features

### 1.1 Real-Time Today's OPD Status Engine
- **Observed Behavior:** The application calculates doctor availability dynamically using client and server timestamps against an embedded weekly schedule array.
- **Statuses Computed:**
  - `Available Now` (Active within current schedule window)
  - `In Today at [Time]` (Scheduled for later today)
  - `Next on [Day]` (Next regular scheduled day)
  - `Call for Timings` (For on-call surgical / emergency specialists)

### 1.2 Multi-Step Appointment Booking Engine
- **Pre-selection Linkage:** Clicking "Book with Dr. Varun Agrawal" on any doctor card automatically sets both the Department (`Nephrology`) and the Doctor dropdown in the booking form.
- **Client-Side Validation:** Validates Indian mobile numbers (`10 digits`, starts with `6-9`), mandatory name, and future date.
- **Fallback Resilience:** Operates in `live` mode against `/api/?a=enquiry`, but gracefully falls back to `demo` mode storing submissions in `localStorage` if the backend is unreachable.

### 1.3 Bilingual Clinical Search & Filter
- Search bar filters across all 13 doctors and 16 departments simultaneously.
- Supports both English and transliterated Devanagari Hindi terms (e.g., searching "kidney" or "किडनी" both resolve to Nephrology & Dr. Varun Agrawal).

---

## 2. Inpatient & Diagnostic Service Features

### 2.1 Self-Service Online Diagnostic Reports (LIMS Portal)
- Enables patients to download haematology, biochemistry, and radiology reports from home.
- Two-factor authorization: Mobile Number + Invoice Security PIN.
- Provides test name, date of collection, specimen status, and PDF download action.

### 2.2 Cashless Empanelment & Ayushman Eligibility Verification
- Categorized list of Government Schemes (Ayushman Bharat PM-JAY, CGHS, ESIC, CSEB) and Private TPAs.
- In-depth documentation guidelines (cards, photo IDs, referral slips needed for cashless admission).

### 2.3 Transparent Visitor & Inpatient Policy Directory
- Distinct visiting hour tables for General Wards vs. Critical Care Units (ICU/CCU).
- 9 documented infection control guidelines, child visitor age limits, and mobile phone safety restrictions.

---

## 3. Conversational AI & Emergency Assistance

### 3.1 24×7 Emergency Intercept Engine
- Built-in regex detection across English and Hindi for high-urgency keywords ("heart attack", "accident", "bleeding", "unconscious", "आपातकाल", "दुर्घटना").
- Bypasses standard FAQ responses to immediately display a high-contrast emergency banner with one-tap ambulance calling and Google Maps turn-by-turn directions.

### 3.2 Intelligent Healthcare Helpdesk Chatbot
- Answers inquiries regarding doctor timings, test prices, Ayushman Bharat eligibility, and visiting rules.
- Converts unanswerable queries into structured callback enquiries with chat transcript history.

---

## 4. Administrative & Governance Features
- **Admin Authentication:** Secure credential verification (`/api/?a=login`) with CSRF protection (`X-CSRF` header).
- **Enquiry Management:** Inbox for viewing, triaging, and marking appointment and chatbot leads.
- **Content Management:** Capability to update doctor schedules, announcements, and FAQs dynamically.
- **Document Uploader:** Capability to upload patient reports linked to mobile numbers and generated PINs.
