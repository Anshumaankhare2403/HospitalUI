# Quality Assurance & Testing Plan

## 1. Scope of Testing
This testing plan validates all interactive, visual, responsive, and functional requirements of the hospital web platform across mobile, tablet, and desktop environments.

---

## 2. Test Suites & Test Cases

### Suite 1: Emergency & Navigation
- **TC-NAV-01 (Emergency Phone Linking):** Verify tapping any emergency callout (`79870 25114` or `90390 33712`) triggers `tel:+917987025114`.
- **TC-NAV-02 (Hash Route Switching):** Verify clicking `#doctors`, `#departments`, `#facilities`, `#patients`, `#insurance`, `#about`, and `#contact` scrolls/updates view smoothly.
- **TC-NAV-03 (Mobile Dock Responsiveness):** Verify mobile dock is visible at viewport `<768px` and hidden at `>768px`.

### Suite 2: Doctor Directory & Real-Time OPD Engine
- **TC-DOC-01 (Consultant Rendering):** Verify all 13 doctors are rendered with name, degree, photo/monogram, and department.
- **TC-DOC-02 (Live Status Calculation):** Verify doctor OPD status correctly calculates `Available Now`, `In Today`, or `Next on Day` matching current day/time.
- **TC-DOC-03 (Bilingual Search):** Search for "kidney" and "किडनी" -> verify both return Dr. Varun Agrawal & Nephrology.
- **TC-DOC-04 (Department Tag Filtering):** Click department filter pill -> verify only doctors matching that department remain visible.

### Suite 3: Appointment Booking Engine
- **TC-APT-01 (Cascading Doctor Selection):** Click "Book with Dr. Varun Agrawal" -> verify booking modal opens with Department = "Nephrology" and Doctor = "Dr. Varun Agrawal".
- **TC-APT-02 (Mobile Number Validation):** Enter invalid numbers ("12345", "abcdefg", "5555555555") -> verify error message. Enter valid 10-digit number ("9876543210") -> verify acceptance.
- **TC-APT-03 (Submission Confirmation):** Submit valid form -> verify confirmation modal with tracking reference appears and form resets.

### Suite 4: Patient Report Portal
- **TC-REP-01 (Valid Report Retrieval):** Input sample credentials (Mobile: `9876543210`, PIN: `1234`) -> verify patient name and authorized reports are displayed.
- **TC-REP-02 (Invalid PIN Rejection):** Input incorrect PIN -> verify friendly error message directing patient to hospital reception.

### Suite 5: AI Helpdesk Chatbot
- **TC-BOT-01 (Emergency Intercept):** Type "severe chest pain accident" -> verify chatbot immediately responds with urgent red emergency banner and ambulance dialer.
- **TC-BOT-02 (Doctor Query):** Type "Dr Varun timing" -> verify chatbot returns Dr. Varun Agrawal's OPD hours and "Book" button.
- **TC-BOT-03 (Ayushman Bharat Query):** Type "Ayushman card accepted?" -> verify chatbot outputs Ayushman Bharat cashless guidelines.

### Suite 6: Cross-Browser & Visual Integrity
- **TC-VIS-01 (Dark Mode):** Toggle theme switch -> verify all cards, backgrounds, fonts, and borders switch to dark semantic palette without contrast violations.
- **TC-VIS-02 (No Console Errors):** Verify clean browser console with zero unhandled exceptions or broken script links.
