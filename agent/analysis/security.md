# Security, Privacy & Data Handling Specification

## 1. Threat Model & Risk Analysis for Healthcare Platforms

| Threat / Risk Vector | Severity | Mitigation Implemented |
|----------------------|----------|------------------------|
| **Cross-Site Scripting (XSS)** | High | Client-side HTML entity escaping via `esc()` function on all user-supplied input, enquiry messages, and search queries. |
| **Unauthorized Medical Record Access** | Critical | Patient diagnostic reports require two-factor possession verification (10-digit registered mobile + randomized invoice PIN). Reports are never enumerated or indexed publicly. |
| **CSRF in Administrative Actions** | High | Dynamic `X-CSRF` token headers required on state-changing POST/PUT requests in live mode. |
| **Input Manipulation / Spam Attacks** | Medium | Strict phone normalization and validation (`/^[6-9]\d{9}$/`), text length boundaries, and throttling. |
| **Statutory Medical Compliance (PCPNDT)** | Legal Mandate | Strict statutory disclaimer displayed prominently on the website prohibiting prenatal sex determination under the Pre-Conception and Pre-Natal Diagnostic Techniques Act, 1994. |

---

## 2. Privacy & Data Handling Policy
- **Minimum Data Principle:** Inbound appointment bookings only collect necessary triage data (Patient Name, Mobile Number, Department, Date, Brief Concern). Sensitive clinical histories are not stored in unencrypted public databases.
- **Local Fallback Storage:** When running in preview or offline demo mode, mock appointments and report queries are stored exclusively within the user's local browser `localStorage` and `sessionStorage`, without transmission to untrusted third parties.
- **Secure Transport:** Strict HTTPS enforcement with modern TLS 1.3 encryption.
