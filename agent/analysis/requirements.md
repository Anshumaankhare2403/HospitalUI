# Complete Website Specification & Requirements: Himanshu / Vasudev Hospital Platform

## 1. Project Overview & Business Goals
The objective of this project is to develop an ultra-fast, aesthetically stunning, responsive, and accessible digital healthcare platform for the hospital. The platform must provide immediate emergency access, facilitate outpatient specialist consultations across 16 medical disciplines, deliver self-service diagnostic report lookups, clarify cashless insurance empanelment, and provide intelligent conversational guidance.

---

## 2. Target Audience & Stakeholders
1. **Emergency Patients & Attendants:** Requiring immediate helpline access, ambulance dispatch, and turn-by-turn hospital navigation.
2. **Outpatient (OPD) Consultations:** Seeking top-tier doctors, transparent OPD hours, and seamless appointment booking.
3. **Chronic Renal & Dialysis Patients:** Requiring specialized nephrology care and scheduled dialysis sessions.
4. **Diagnostic & Laboratory Patients:** Checking investigation results and downloading verified pathology/radiology reports.
5. **Cashless Insurance Beneficiaries:** Checking eligibility under Ayushman Bharat (PM-JAY), CGHS, ESIC, and private TPAs.
6. **Hospital Administrative Team:** Monitoring inbound appointment enquiries and managing hospital announcements.

---

## 3. Required Pages & Hash Routes

| Route / Hash | Page / Section Title | Purpose |
|--------------|----------------------|---------|
| `/` or `#home` | **Home / Landing View** | Hero value proposition, live counters, today's OPD board, centres of excellence, announcements |
| `#doctors` | **Doctor & Consultant Directory** | Searchable & filterable directory of 13 consultants with real-time duty status and OPD hours |
| `#departments` | **Centres of Excellence** | Comprehensive index of 16 clinical departments with treated conditions and procedures |
| `#facilities` | **Infrastructure & Facilities** | 23 hospital facilities (ICU, Modular OT, CT Scan, Ultrasound, Dialysis, Blood Lab) |
| `#appointment` | **Book Appointment** | Interactive appointment form with dynamic department/doctor linkages and validation |
| `#patients` | **Patient Portal & Reports** | Secure test report download portal authenticated via Mobile Number + Billing PIN |
| `#insurance` | **Cashless Insurance & TPA** | Empaneled government schemes and private insurers with documentation checklists |
| `#about` | **About & Visitor Policy** | Mission, vision, goals, NABH accreditation details, and ward visiting schedules |
| `#contact` | **Contact & Emergency Hub** | 24×7 hotline numbers, WhatsApp link, physical address, and embedded Google Map |

---

## 4. Priority-Ranked Requirements (P0, P1, P2)

### Priority P0 (Critical - Core Launch Blockers)
- **REQ-P0-01 (24×7 Emergency Intercept):** Prominent, unmissable emergency callouts on desktop header, topbar, and mobile sticky dock with instant `tel:` triggers to `79870 25114` and `90390 33712`.
- **REQ-P0-02 (Doctor Directory & Today's OPD Status):** Complete profiles for all 13 consultants with real-time calculation of current availability status (`Available Now`, `In Today`, `Next on Day`, `Call for OPD`).
- **REQ-P0-03 (16 Clinical Departments Directory):** Detailed clinical summaries, treated ailments, and surgical/medical procedures for all 16 departments.
- **REQ-P0-04 (Interactive Appointment Booking):** Working appointment booking form with input validation (Indian mobile regex `^[6-9]\d{9}$`), dynamic department-doctor cascading dropdowns, and submission feedback.
- **REQ-P0-05 (Mobile Responsiveness & Bottom Dock):** Flawless fluid layout adapting across smartphone, tablet, and desktop screens with sticky thumb-accessible navigation on mobile.
- **REQ-P0-06 (Patient Report Lookup Authentication):** Dual-credential report lookup form (Mobile + PIN) displaying verified report status and mock/live document access.

### Priority P1 (High Importance - Enhanced Experience)
- **REQ-P1-01 (Bilingual Clinical Search):** Real-time search bar filtering doctors and departments by English or Devanagari Hindi keywords.
- **REQ-P1-02 (Healthcare Helpdesk Chatbot):** Floating conversational AI assistant capable of greeting patients, triaging emergencies, matching doctors, and capturing callback enquiries.
- **REQ-P1-03 (Insurance & TPA Guidance):** Clear tables detailing Ayushman Bharat, CGHS, ESIC, CSEB, and private TPA documentation requirements.
- **REQ-P1-04 (Visiting Hours & NABH Quality Standards):** Clear ward visiting timetables (General, ICU, Maternity) and NABH certification credentials display.
- **REQ-P1-05 (Dark / Light Theme Support):** Seamless theme switching supporting user system preferences and explicit manual toggle.

### Priority P2 (Nice-to-Have - Future Scalability)
- **REQ-P2-01 (WhatsApp Instant Notification):** Pre-formatted WhatsApp deep-link generation on appointment submission for instant patient receipt.
- **REQ-P2-02 (Live Bed Availability Indicator):** Real-time counter of available ICU, General, and Deluxe beds.
- **REQ-P2-03 (Online Payment Gateway):** UPI / Card integration for advance OPD registration fee token payments.

---

## 5. User Stories & Acceptance Criteria

### User Story 1: Emergency Trauma Care
> **As an** attendant of a critically injured trauma patient,  
> **I want to** immediately find the emergency helpline and driving directions to the hospital,  
> **So that** I can arrange an ambulance or transport the patient without delay.

- **Acceptance Criteria:**
  1. The 24×7 emergency phone number is visible without scrolling on both mobile and desktop.
  2. Tapping the emergency button launches the device phone dialer directly.
  3. Clicking directions opens Google Maps with the hospital's verified location coordinates.

### User Story 2: Specialist OPD Consultation
> **As a** patient suffering from chronic kidney problems,  
> **I want to** check Dr. Varun Agrawal's OPD consultation hours and book a slot online,  
> **So that** I do not have to wait in long hospital registration queues.

- **Acceptance Criteria:**
  1. Searching "kidney" or "Dr. Varun" instantly filters down to the Nephrology department and Dr. Varun Agrawal.
  2. The card displays live availability (e.g. "Available Now" if between 3:00 PM and 7:30 PM Mon-Sat).
  3. Clicking "Book with Doctor" opens the booking modal with Nephrology and Dr. Varun Agrawal pre-selected.
  4. Entering valid details displays an instant booking confirmation with an appointment tracking reference.

### User Story 3: Online Report Retrieval
> **As an** outpatient who gave blood samples yesterday,  
> **I want to** check and download my lab investigation report online,  
> **So that** I do not have to travel back to the hospital just to collect printed paper.

- **Acceptance Criteria:**
  1. Patient enters their registered 10-digit mobile number and invoice PIN.
  2. If credentials match (e.g. mobile `9876543210` + PIN `1234`), the system displays the patient's name and authorized diagnostic reports.
  3. Clicking "Download Report" initiates a PDF download or opens a printable high-resolution report preview.

---

## 6. Non-Functional Requirements
- **Performance:** First Contentful Paint (FCP) < 1.0s; Lighthouse Performance score > 90.
- **Accessibility:** WCAG 2.1 Level AA compliance; minimum 4.5:1 text contrast; keyboard accessible tabs and buttons.
- **Security:** Strict HTML entity escaping against XSS; zero exposure of patient records without valid PIN verification.
- **Reliability:** Graceful offline/preview fallback using `localStorage` if backend API is temporarily offline.
