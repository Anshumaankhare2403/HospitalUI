# Architecture Specification: Hospital Web Application

## 1. System Architecture Diagram

```mermaid
graph TD
    subgraph Client Layer
        Browser[Modern Web Browser / Mobile Device]
        Router[Hash Router (#home, #doctors, #appointment, etc.)]
        StateStore[Local State Manager & Cache]
        UIComponents[UI Components: Doctor Cards, Ticker, Modals, Forms]
        ChatbotEngine[Bilingual Chatbot Engine & Fuzzy Matcher]
    end

    subgraph Service & API Layer
        RESTAPI[REST API Gateway: /api/?a=...]
        ContentSvc[Content Service: Settings, Doctors, Departments]
        EnquirySvc[Enquiry & Appointment Service]
        ReportSvc[Diagnostic Reports Authorization Service]
        AdminAuthSvc[Admin Auth & CSRF Guard]
    end

    subgraph Persistence Layer
        SQLiteDB[(SQLite Database / Storage)]
        DocumentStore[(Encrypted Reports Directory)]
        LocalStorageCache[(Browser LocalStorage Fallback)]
    end

    Browser --> Router
    Router --> UIComponents
    UIComponents --> StateStore
    ChatbotEngine --> StateStore
    StateStore -->|Online Mode| RESTAPI
    StateStore -.->|Offline / Fallback Mode| LocalStorageCache
    RESTAPI --> ContentSvc & EnquirySvc & ReportSvc & AdminAuthSvc
    ContentSvc & EnquirySvc & ReportSvc --> SQLiteDB
    ReportSvc --> DocumentStore
```

---

## 2. Component & Directory Structure
```
d:/Himanshu Hospital/
├── index.html                  # Core Semantic HTML5 Shell
├── assets/
│   ├── css/
│   │   ├── site.css            # Base tokens, typography, grid, layout, buttons
│   │   ├── premium.css         # Hero gradients, card elevation, dark theme tokens
│   │   └── chat.css            # Chatbot floating widget & dialog styling
│   ├── js/
│   │   ├── icons.js            # Inline SVG icons dictionary
│   │   ├── api.js              # Data client, API fetchers, fallback demo store
│   │   ├── chatbot.js          # Helpdesk bot, NLP token matching, triage
│   │   └── app.js              # Routing, OPD calculation, views rendering, event hooks
│   └── img/                    # Logos, doctor portraits, hospital building
└── agent/                      # Complete specifications, research, memory, and prompts
```

---

## 3. Data Schema & Contracts

### 3.1 Doctor Entity
```typescript
interface Doctor {
  id: string;                    // e.g. "doc1"
  slug: string;                  // e.g. "dr-varun-agrawal"
  name: string;                  // e.g. "Dr. Varun Agrawal"
  name_hi: string;               // e.g. "डॉ. वरुण अग्रवाल"
  designation: string;           // e.g. "Nephrologist · Kidney Specialist"
  department: string;            // slug linking to Department
  qualifications: string;        // e.g. "MBBS, MD Medicine, DM Nephrology"
  photo: string;                 // URL or relative path
  bio: string;                   // Professional clinical biography
  featured: boolean;             // Displayed prominently on homepage
  active: boolean;               // On roster
  opd: Array<{                   // Weekly OPD schedule slots
    days: number[];              // [1, 2, 3, 4, 5, 6] (Mon-Sat), [0] (Sun)
    start: string;               // "15:00"
    end: string;                 // "19:30"
  }>;
  opd_note?: string;             // e.g. "Call for OPD timings"
}
```

### 3.2 Appointment Enquiry Entity
```typescript
interface Enquiry {
  id?: number;
  name: string;
  phone: string;                 // 10 digits
  email?: string;
  department: string;
  doctor: string;
  preferred_date: string;        // YYYY-MM-DD
  message: string;
  source: 'website' | 'chatbot' | 'quick-book';
  transcript?: string;           // Included if submitted via bot
  created_at?: string;
  status?: 'new' | 'contacted' | 'booked' | 'cancelled';
}
```

### 3.3 Patient Report Record
```typescript
interface PatientReport {
  id: string;
  title: string;                 // e.g. "Complete Blood Count (CBC)"
  category: "Lab report" | "Radiology report" | "Discharge Summary";
  patient_name: string;
  patient_mobile: string;
  pin: string;                   // 4-6 digit invoice PIN
  file_url: string;
  mime: string;                  // "application/pdf"
  size: number;
  uploaded_at: string;
}
```
