# Search Engine Optimization (SEO) & Structured Data Strategy

## 1. On-Page SEO Foundations
- **Page Title Tag:**
  `Vasudev Multispeciality Hospital | 24x7 Emergency, ICU, Dialysis & Specialist OPDs in Raipur`
- **Meta Description:**
  `NABH-certified multispeciality hospital in Daganiya, Raipur. 24×7 emergency, ICU, Apollo Dialysis Clinic, CT scan, sonography, surgery, gynaecology, orthopaedics and more. Call 9039033712.`
- **Canonical URL:**
  `<link rel="canonical" href="https://www.vasudevhospital.in/">`
- **Heading Hierarchy:**
  Single `<h1>` in Hero representing the core institution identity and location, followed by structured `<h2>` for sections (Specialists, Departments, Facilities, Reports, Visiting Hours) and `<h3>` for cards.

---

## 2. Schema.org JSON-LD Structured Data
The application embeds rich JSON-LD microdata enabling Google Knowledge Graph and local search pack features:

```json
{
  "@context": "https://schema.org",
  "@type": "Hospital",
  "name": "Vasudev Multispeciality Hospital",
  "alternateName": "वासुदेव मल्टीस्पेशलिटी हॉस्पिटल",
  "url": "https://www.vasudevhospital.in/",
  "logo": "https://www.vasudevhospital.in/assets/img/logo.png",
  "image": "https://www.vasudevhospital.in/assets/img/building.jpg",
  "telephone": "+91-9039033712",
  "email": "vasudevhospital.ryp@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Mahadev Ghat Road, Near Raipura Chowk, Daganiya",
    "addressLocality": "Raipur",
    "addressRegion": "Chhattisgarh",
    "postalCode": "492013",
    "addressCountry": "IN"
  },
  "openingHours": "Mo-Su 00:00-23:59",
  "hasMap": "https://maps.app.goo.gl/pCC8iGmiwfhH1yrA8",
  "medicalSpecialty": [
    "Nephrology & Dialysis",
    "Urology",
    "General & Laparoscopic Surgery",
    "Obstetrics & Gynaecology",
    "Orthopaedics",
    "Neurology",
    "Neurosurgery",
    "General Medicine, Diabetes & BP",
    "Radiology & Imaging",
    "Paediatrics",
    "Gastroenterology & Gastro Surgery",
    "Anaesthesia & Critical Care",
    "Psychiatry",
    "Physiotherapy",
    "Oral & Maxillofacial Surgery",
    "Ear, Nose & Throat (ENT)"
  ],
  "sameAs": [
    "https://www.facebook.com/VasudevMultispecialtyHospital",
    "https://www.instagram.com/vasudev_multispecialtyhospital/"
  ]
}
```

---

## 3. Local SEO Optimization for Raipur & Chhattisgarh
- Primary local keywords targeted:
  - *"Hospital in Daganiya Raipur"*
  - *"Nephrologist in Raipur"*
  - *"Dialysis center Raipur"*
  - *"Ayushman Bharat hospital in Raipur"*
  - *"24 hour emergency hospital Raipur"*
  - *"CT scan and ultrasound Raipur"*
- Google Business Profile linkage via explicit Google Maps directions anchor.
