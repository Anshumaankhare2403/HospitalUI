# Page Extraction: Patient Portal & Online Diagnostic Reports

- **Original URL:** `https://vasudevhospital.in/#patients`
- **Page Title:** Online Patient Reports - Vasudev Multispeciality Hospital
- **Analysis Date & Time:** 2026-10-18T20:45:00+05:30
- **Extraction Status:** Complete (Interactive Report Retrieval & Verification Analyzed)

---

## 1. Feature Architecture & User Flow
The reference hospital provides a self-service patient report retrieval system designed to eliminate unnecessary physical trips to the hospital.

### Authentication Credentials
- **Registered Mobile Number:** 10-digit Indian mobile number registered during hospital billing / pathology check-in.
- **Billing Security PIN:** A 4-to-6 digit confidential PIN printed at the top-right of the payment receipt / bill invoice.

### Step-by-Step Patient Retrieval Flow
1. Patient navigates to `#patients` or clicks "Reports" in header / mobile dock.
2. Patient inputs their 10-digit mobile number (`r-mobile`) and printed billing PIN (`r-pin`).
3. System triggers client-side validation (formats number, verifies PIN length).
4. System submits payload to `api/?a=reports`:
   ```json
   {
     "mobile": "9876543210",
     "pin": "1234"
   }
   ```
5. Server validates against SQLite / database records and returns authorized document list:
   ```json
   {
     "ok": true,
     "patient": "Patient Full Name",
     "reports": [
       {
         "id": "doc-sample-report",
         "title": "Complete Blood Count (CBC) with Platelets",
         "category": "Lab report",
         "note": "Report verified by pathologist",
         "uploaded_at": "2026-10-02",
         "size": 245760,
         "mime": "application/pdf",
         "url": "uploads/reports/..."
       }
     ]
   }
   ```
6. Patient can view, download high-resolution PDF, or print directly from browser.

---

## 2. Security, Privacy & Compliance Controls
- **Zero Public Indexing:** Diagnostic files are kept in secure directories outside web-root or protected via tokenized download links.
- **PIN Authorization Barrier:** Reports are only accessible when matching both mobile number and randomized secret billing PIN.
- **PCPNDT Compliance Banner:** Explicit statutory declaration under the PCPNDT Act that prenatal sex determination is illegal and not conducted.
- **Sample Demonstration Mode:** When tested in offline/preview demo mode, sample credentials (`9876543210` + PIN `1234`) allow patients to preview the report interface.
