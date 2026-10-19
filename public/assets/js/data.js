/* Vasudev Multispeciality Hospital - Master Verified Data Store */
(function() {
  'use strict';

  window.HOSPITAL_DATA = {
    settings: {
      name: "Vasudev Multispeciality Hospital",
      name_hi: "वासुदेव मल्टीस्पेशलिटी हॉस्पिटल",
      subtitle: "& Research Centre · Apollo Dialysis Clinic",
      tagline: "NABH-certified multispeciality care in Raipur, open 24×7 for emergencies.",
      phones: ["9039033712", "7987025114"],
      emergency_phone: "7987025114",
      whatsapp: "919039033712",
      email: "vasudevhospital.ryp@gmail.com",
      address: "Mahadev Ghat Road, Near Raipura Chowk, beside Rohinipuram Talab, Daganiya, Raipur, Chhattisgarh 492013",
      address_hi: "रायपुरा चौक के पास, रोहिणीपुरम तालाब के बाजू, डंगनिया, रायपुर (छ.ग.) 492013",
      map_url: "https://maps.app.goo.gl/pCC8iGmiwfhH1yrA8",
      facebook: "https://www.facebook.com/VasudevMultispecialtyHospital",
      instagram: "https://www.instagram.com/vasudev_multispecialtyhospital/",
      established: "2021",
      announcement: "Home collection of blood samples available. Call 9039033712 to book.",
      nabh: {
        level: "Entry Level – Small Healthcare Organisation (SHCO)",
        certificate_no: "PESHCO-2024-9227",
        first_certified: "12 March 2024",
        valid_from: "28 July 2026",
        valid_to: "27 July 2028"
      },
      about: "Vasudev Multispeciality Hospital opened in Daganiya, Raipur in 2021 with one aim: give families in Raipur dependable specialist care close to home. Under one roof we run round-the-clock emergency and ICU care, a modern dialysis unit in partnership with Apollo Dialysis Clinic, modular operation theatres, and in-house CT, sonography, digital X-ray and laboratory services. Our consultants cover kidney care, urology, surgery, women's health, orthopaedics, neurology, child health and more.",
      mission: "Deliver patient-centred care that combines sound clinical practice with compassion, using modern technology while keeping treatment affordable and accessible.",
      vision: "To be the most trusted healthcare provider in Central India, known for clinical excellence and caring service.",
      goals: [
        "Run a centre of excellence for specialist care",
        "Keep a sharp focus on high-quality services",
        "Educate patients and families about their health",
        "Improve the community's health and quality of life",
        "Treat every patient with respect, with affordable, ethical care",
        "Give mothers and newborns safe, attentive care"
      ],
      visiting: {
        hours: [
          { area: "General wards", time: "10:00 AM – 12:00 PM · 5:00 PM – 7:00 PM", note: "Up to 2 visitors per patient" },
          { area: "ICU / CCU", time: "11:00 – 11:30 AM · 6:00 – 6:30 PM", note: "Strictly 1 visitor per patient" },
          { area: "Maternity ward", time: "10:00 AM – 1:00 PM · 4:00 PM – 7:00 PM", note: "Family members only" },
          { area: "Paediatric ward", time: "Parents: 24×7 Unrestricted", note: "Others: general ward hours" }
        ],
        rules: [
          "Collect a visitor pass from the reception desk.",
          "Children under 12 are not allowed in patient-care areas.",
          "Sanitise your hands before and after visiting a patient.",
          "Wear a protective mask covering nose and mouth.",
          "Please do not visit if you have a cough, fever or other infection.",
          "Mobile phones are not allowed in the ICU, CCU and critical-care areas.",
          "Photography and video recording are strictly prohibited.",
          "Flowers and outside food need approval from the nursing staff.",
          "Smoking, alcohol and tobacco are strictly prohibited on campus."
        ]
      }
    },
    departments: [
      {
        id: "d1",
        slug: "nephrology",
        name: "Nephrology & Dialysis",
        name_hi: "किडनी रोग का सम्पूर्ण इलाज",
        icon: "kidney",
        aliases: "kidney, किडनी, dialysis, डायलिसिस, creatinine, ckd, renal",
        summary: "Complete care for kidney disease, from early diagnosis to long-term dialysis, led by a DM Nephrologist trained at CMC Vellore and the University of Toronto.",
        conditions: ["Chronic kidney disease (CKD)", "Acute kidney injury", "Diabetic and hypertensive kidney disease", "Kidney stones (medical management)", "Swelling, protein or blood in urine", "Electrolyte disorders"],
        procedures: ["Haemodialysis (Apollo Dialysis Clinic)", "CAPD (peritoneal dialysis)", "Kidney biopsy", "Dialysis catheter placement", "Pre- and post-transplant care"]
      },
      {
        id: "d2",
        slug: "urology",
        name: "Urology",
        name_hi: "मूत्र रोग (पथरी एवं प्रोस्टेट)",
        icon: "kidney",
        aliases: "urology, kidney stone, stone, पथरी, prostate, प्रोस्टेट, urine, मूत्र, पेशाब",
        summary: "Medical and surgical treatment of stones, prostate and urinary-tract problems by an MCh Urologist.",
        conditions: ["Kidney and ureteric stones", "Enlarged prostate (BPH)", "Urinary tract infection", "Urethral stricture", "Blood in urine"],
        procedures: ["Ureteroscopy (URS) for stones", "PCNL for kidney stones", "TURP (prostate surgery)", "Cystoscopy", "DJ stenting"]
      },
      {
        id: "d3",
        slug: "general-surgery",
        name: "General & Laparoscopic Surgery",
        name_hi: "जनरल सर्जरी एवं लेप्रोस्कोपी",
        icon: "surgery",
        aliases: "surgery, सर्जरी, operation, ऑपरेशन, laparoscopy, लेप्रोस्कोपी, hernia, gallbladder, appendix, piles, बवासीर",
        summary: "Open and keyhole (laparoscopic) surgery in modular operation theatres with laminar airflow.",
        conditions: ["Gallbladder stones", "Appendicitis", "Hernia", "Piles, fissure and fistula", "Hydrocele", "Lumps, cysts and abscesses"],
        procedures: ["Laparoscopic gallbladder removal (cholecystectomy)", "Laparoscopic / open appendix removal", "Hernia repair (laparoscopic and open)", "Piles, fissure and fistula surgery", "Hydrocele surgery", "Lipoma and cyst excision"]
      },
      {
        id: "d4",
        slug: "obstetrics-gynaecology",
        name: "Obstetrics & Gynaecology",
        name_hi: "प्रसूति एवं स्त्री रोग",
        icon: "mother",
        aliases: "gynaecology, gynecology, pregnancy, गर्भावस्था, delivery, डिलीवरी, प्रसूति, स्त्री, women, period",
        summary: "Pregnancy care, safe delivery and treatment of women's health problems, with a dedicated labour room.",
        conditions: ["Pregnancy and antenatal check-ups", "Irregular or heavy periods", "PCOS", "Fibroids and ovarian cysts", "Menopause problems", "Infections"],
        procedures: ["Normal delivery", "Caesarean section", "Hysterectomy", "D&C", "Family planning (tubectomy)"]
      },
      {
        id: "d5",
        slug: "orthopaedics",
        name: "Orthopaedics",
        name_hi: "हड्डी रोग",
        icon: "bone",
        aliases: "ortho, bone, हड्डी, fracture, joint, knee, घुटना, back pain, कमर",
        summary: "Treatment of fractures, joint pain and sports injuries, including joint replacement surgery.",
        conditions: ["Fractures and dislocations", "Knee and hip arthritis", "Back and neck pain", "Sports and ligament injuries", "Frozen shoulder"],
        procedures: ["Fracture fixation (plating, nailing)", "Knee and hip joint replacement", "C-arm guided procedures", "Plaster and splinting"]
      },
      {
        id: "d6",
        slug: "neurology",
        name: "Neurology",
        name_hi: "मस्तिष्क रोग",
        icon: "brain",
        aliases: "neuro, brain, मस्तिष्क, stroke, लकवा, paralysis, seizure, मिर्गी, epilepsy, headache, migraine",
        summary: "Diagnosis and treatment of stroke, seizures, headaches and nerve disorders by DM Neurologists.",
        conditions: ["Stroke (paralysis)", "Epilepsy and seizures", "Migraine and chronic headache", "Parkinson's disease", "Nerve pain and neuropathy", "Vertigo"],
        procedures: ["Acute stroke management", "Seizure management", "Neuro-rehabilitation planning"]
      },
      {
        id: "d7",
        slug: "neurosurgery",
        name: "Neurosurgery",
        name_hi: "न्यूरोसर्जरी",
        icon: "brain",
        aliases: "neurosurgery, spine, head injury",
        summary: "Surgical care for head injuries, brain trauma, intracranial hematoma and complex spine conditions.",
        conditions: ["Head injury & concussion", "Intracranial bleeding", "Spine disc herniation", "Spine compression fractures"],
        procedures: ["Craniotomy & hematoma evacuation", "Spine decompression surgery", "Neuro-trauma stabilisation"]
      },
      {
        id: "d8",
        slug: "general-medicine",
        name: "General Medicine, Diabetes & BP",
        name_hi: "जनरल मेडिसिन एवं मधुमेह",
        icon: "stethoscope",
        aliases: "medicine, physician, fever, बुखार, sugar, diabetes, bp, hypertension",
        summary: "Everyday and long-term care for fever, infections, diabetes, blood pressure and thyroid problems.",
        conditions: ["Dengue, malaria, typhoid fevers", "Type 1 & Type 2 Diabetes", "High blood pressure", "Thyroid disorders", "Chest infections"],
        procedures: ["Comprehensive health evaluations", "Diabetic complication screening", "Inpatient medical monitoring"]
      },
      {
        id: "d9",
        slug: "radiology",
        name: "Radiology & Imaging",
        name_hi: "रेडियोलॉजी एवं सोनोग्राफी",
        icon: "scan",
        aliases: "ct, ct scan, sonography, usg, ultrasound, x-ray, xray",
        summary: "In-house CT scan, sonography and digital X-ray, reported by MD/DNB certified Radiologists.",
        conditions: ["Acute trauma imaging", "Abdominal pain evaluation", "Chest infections", "Pregnancy scans"],
        procedures: ["Multi-slice helical CT scan", "Colour Doppler Ultrasound", "Digital X-Ray (DR)", "USG-guided fluid aspirations"]
      },
      {
        id: "d10",
        slug: "paediatrics",
        name: "Paediatrics",
        name_hi: "बाल रोग",
        icon: "mother",
        aliases: "child, baby, paediatrician, bacha, vaccination",
        summary: "Care for newborns, infants and growing children, including comprehensive vaccinations and acute illness care.",
        conditions: ["Childhood infections & fevers", "Paediatric asthma", "Growth & nutrition issues", "Neonatal jaundice"],
        procedures: ["National immunization schedule vaccination", "Paediatric nebulization", "Phototherapy"]
      },
      {
        id: "d11",
        slug: "gastroenterology",
        name: "Gastroenterology & Gastro Surgery",
        name_hi: "पेट एवं लिवर रोग",
        icon: "stethoscope",
        aliases: "gastro, liver, acidity, stomach, vomiting",
        summary: "Treatment of stomach, liver, gallbladder and intestinal problems, medical and surgical.",
        conditions: ["GERD / Severe acidity", "Peptic ulcers", "Fatty liver & Cirrhosis", "Pancreatitis", "Jaundice"],
        procedures: ["Diagnostic upper GI endoscopy", "Liver disease management", "Laparoscopic abdominal surgery"]
      },
      {
        id: "d12",
        slug: "anaesthesia-critical-care",
        name: "Anaesthesia & Critical Care",
        name_hi: "निश्चेतना एवं क्रिटिकल केयर",
        icon: "stethoscope",
        aliases: "icu, ventilator, anaesthesia, critical care",
        summary: "Safe anaesthesia for every operation and round-the-clock intensive care unit (ICU) life support.",
        conditions: ["Severe septic shock", "Respiratory failure / ARDS", "Post-operative major surgical monitoring", "Trauma resuscitation"],
        procedures: ["Advanced mechanical ventilation", "Arterial & central venous catheterization", "Pain management"]
      },
      {
        id: "d13",
        slug: "psychiatry",
        name: "Psychiatry",
        name_hi: "मनोचिकित्सा एवं मानसिक स्वास्थ्य",
        icon: "brain",
        aliases: "psychiatry, mental, depression, anxiety, sleep",
        summary: "Confidential, compassionate care for depression, anxiety, sleep problems, OCD and de-addiction.",
        conditions: ["Clinical depression", "Anxiety & panic disorders", "Chronic insomnia", "Substance addiction", "Mood disorders"],
        procedures: ["Pharmacological stabilization", "De-addiction protocols", "Supportive counselling"]
      },
      {
        id: "d14",
        slug: "physiotherapy",
        name: "Physiotherapy & Rehab",
        name_hi: "फिजियोथेरेपी एवं पुनर्वास",
        icon: "bone",
        aliases: "physio, exercise, rehabilitation, joint pain",
        summary: "Rehabilitation after surgery, stroke or injury, and targeted relief for joint, neck and back pain.",
        conditions: ["Post-fracture stiffness", "Stroke paralysis rehabilitation", "Sciatica & disc pain", "Frozen shoulder"],
        procedures: ["Interferential Therapy (IFT)", "Therapeutic Ultrasound", "Traction therapy", "Kinesiology rehabilitation"]
      },
      {
        id: "d15",
        slug: "maxillofacial-surgery",
        name: "Oral & Maxillofacial Surgery",
        name_hi: "मुख एवं जबड़ा सर्जरी",
        icon: "surgery",
        aliases: "dental, jaw, face fracture, wisdom tooth",
        summary: "Surgery for jaw fractures, severe facial trauma, cysts, and complex surgical tooth extractions.",
        conditions: ["Mandibular / Maxillary fractures", "Facial lacerations", "Impacted third molars", "Jaw cysts"],
        procedures: ["Rigid internal fixation (plating)", "Surgical wisdom extraction", "Oral biopsy"]
      },
      {
        id: "d16",
        slug: "ent",
        name: "Ear, Nose & Throat (ENT)",
        name_hi: "कान, नाक एवं गला रोग",
        icon: "stethoscope",
        aliases: "ent, ear, nose, throat, sinusitis, tonsils",
        summary: "Expert care for ear infections, hearing problems, nasal blockage, sinusitis and throat conditions.",
        conditions: ["Otitis media", "Deviated nasal septum (DNS)", "Chronic tonsillitis", "Sinusitis", "Vertigo"],
        procedures: ["Diagnostic otoscopy & nasal endoscopy", "Foreign body extraction", "Tonsillectomy"]
      }
    ],
    doctors: [
      {
        id: "doc1",
        slug: "dr-varun-agrawal",
        name: "Dr. Varun Agrawal",
        name_hi: "डॉ. वरुण अग्रवाल",
        designation: "Nephrologist · Kidney & Diabetes Specialist",
        designation_hi: "किडनी एवं मधुमेह रोग विशेषज्ञ",
        department: "nephrology",
        qualifications: "MBBS, MD Medicine (BHU), DM Nephrology (CMC Vellore), Fellowship – University of Toronto, Canada",
        photo: "assets/img/doctors/dr-varun-agrawal.jpg",
        bio: "Dr. Varun Agrawal leads the kidney care and dialysis programme. He completed super-specialty DM Nephrology training at CMC Vellore and an advanced clinical fellowship at the University of Toronto, Canada.",
        featured: true,
        active: true,
        opd: [
          { days: [1, 2, 3, 4, 5, 6], start: "15:00", end: "19:30" },
          { days: [0], start: "12:00", end: "15:00" }
        ],
        opd_note: ""
      },
      {
        id: "doc2",
        slug: "dr-nayna-goyal",
        name: "Dr. Nayna Goyal",
        name_hi: "डॉ. नैना गोयल",
        designation: "Radiologist",
        designation_hi: "रेडियोलॉजिस्ट",
        department: "radiology",
        qualifications: "MBBS, MD, DNB (Radio Diagnosis)",
        photo: "assets/img/doctors/dr-nayna-goyal.jpg",
        bio: "Dr. Nayna Goyal heads imaging at the hospital, covering CT scan, sonography and X-ray reporting.",
        featured: true,
        active: true,
        opd: [
          { days: [1, 2, 3, 4, 5, 6], start: "10:00", end: "13:00" },
          { days: [1, 2, 3, 4, 5, 6], start: "15:00", end: "18:00" },
          { days: [0], start: "12:00", end: "15:00" }
        ],
        opd_note: ""
      },
      {
        id: "doc3",
        slug: "dr-prashant-sahu",
        name: "Dr. Prashant Sahu",
        name_hi: "डॉ. प्रशांत साहू",
        designation: "General Surgeon",
        designation_hi: "जनरल सर्जन",
        department: "general-surgery",
        qualifications: "MBBS, MS (General Surgery)",
        photo: "assets/img/doctors/dr-prashant-sahu.jpg",
        bio: "Experienced general surgeon handling open and emergency surgical procedures, trauma, and hernia repairs.",
        featured: true,
        active: true,
        opd: [
          { days: [1, 2, 3, 4, 5, 6], start: "11:00", end: "14:00" }
        ],
        opd_note: "Daily morning OPD & 24×7 on-call emergency surgery"
      },
      {
        id: "doc4",
        slug: "dr-sushma-agrawal",
        name: "Dr. Sushma Agrawal",
        name_hi: "डॉ. सुषमा अग्रवाल",
        designation: "Obstetrician & Gynaecologist",
        designation_hi: "प्रसूति व स्त्री रोग विशेषज्ञ",
        department: "obstetrics-gynaecology",
        qualifications: "MBBS, MD, DNB (Obstetrics & Gynaecology)",
        photo: "",
        bio: "Specializing in high-risk pregnancy care, normal and caesarean deliveries, and women's reproductive health.",
        featured: true,
        active: true,
        opd: [
          { days: [1, 2, 3, 4, 5, 6], start: "11:00", end: "14:00" },
          { days: [1, 2, 3, 4, 5, 6], start: "17:00", end: "19:00" }
        ],
        opd_note: "Regular antenatal & gynae consultation"
      },
      {
        id: "doc5",
        slug: "dr-suresh-singh",
        name: "Dr. Suresh Singh",
        name_hi: "डॉ. सुरेश सिंग",
        designation: "Urologist",
        designation_hi: "यूरो, मूत्र रोग विशेषज्ञ",
        department: "urology",
        qualifications: "MBBS, MS, MCh (Urology)",
        photo: "",
        bio: "Super-specialist in endourology, laser stone removal (PCNL, URS), prostate surgery, and urinary tract disorders.",
        featured: false,
        active: true,
        opd: [
          { days: [1, 3, 5], start: "16:00", end: "18:30" }
        ],
        opd_note: "Monday, Wednesday, Friday evening OPD"
      },
      {
        id: "doc6",
        slug: "dr-lavlesh-rathore",
        name: "Dr. Lavlesh Rathore",
        name_hi: "डॉ. लवलेश राठौर",
        designation: "Neurologist",
        designation_hi: "न्यूरोलॉजिस्ट",
        department: "neurology",
        qualifications: "MBBS, MD, DM (Neurology)",
        photo: "",
        bio: "Expert in acute stroke management, epilepsy, Parkinson's disease, and neuropathies.",
        featured: false,
        active: true,
        opd: [
          { days: [2, 4, 6], start: "16:00", end: "18:00" }
        ],
        opd_note: "Tuesday, Thursday, Saturday OPD"
      },
      {
        id: "doc7",
        slug: "dr-abhijit-kohat",
        name: "Dr. Abhijit Kohat",
        name_hi: "डॉ. अभिजीत कोहाट",
        designation: "Neurologist",
        designation_hi: "न्यूरोलॉजिस्ट",
        department: "neurology",
        qualifications: "MBBS, MD, DM (Neurology)",
        photo: "",
        bio: "Clinical neurologist specializing in neuromuscular disorders, migraine, vertigo, and chronic headaches.",
        featured: false,
        active: true,
        opd: [
          { days: [1, 3, 5], start: "12:00", end: "14:00" }
        ],
        opd_note: "Mon, Wed, Fri afternoon OPD"
      },
      {
        id: "doc8",
        slug: "dr-ajay-mishra",
        name: "Dr. Ajay Mishra",
        name_hi: "डॉ. अजय मिश्रा",
        designation: "Orthopaedic Surgeon",
        designation_hi: "ऑर्थोपेडिक",
        department: "orthopaedics",
        qualifications: "MBBS, MS (Orthopaedics)",
        photo: "",
        bio: "Specializing in complex trauma fractures, joint replacements (knee and hip), and spine care.",
        featured: false,
        active: true,
        opd: [
          { days: [1, 2, 3, 4, 5, 6], start: "10:30", end: "13:30" }
        ],
        opd_note: "Daily morning fracture & ortho clinic"
      },
      {
        id: "doc9",
        slug: "dr-shashikant-dewangan",
        name: "Dr. Shashikant Dewangan",
        name_hi: "डॉ. शशीकांत देवांगन",
        designation: "Paediatrician",
        designation_hi: "बाल रोग विशेषज्ञ",
        department: "paediatrics",
        qualifications: "MBBS, MD (Paediatrics)",
        photo: "",
        bio: "Senior paediatrician caring for newborn health, childhood infectious illnesses, and growth milestones.",
        featured: false,
        active: true,
        opd: [
          { days: [1, 2, 3, 4, 5, 6], start: "10:00", end: "13:00" },
          { days: [1, 2, 3, 4, 5, 6], start: "17:00", end: "19:30" }
        ],
        opd_note: "Daily child health & vaccination clinic"
      },
      {
        id: "doc10",
        slug: "dr-asit-pati",
        name: "Dr. Asit Pati",
        name_hi: "डॉ. असित पति",
        designation: "Anaesthesiologist & ICU In-Charge",
        designation_hi: "निश्चेतना",
        department: "anaesthesia-critical-care",
        qualifications: "MBBS, MD (Anaesthesia), Critical Care",
        photo: "",
        bio: "Leads the critical care team in ICU and delivers safe anaesthesia in modular operating theatres.",
        featured: false,
        active: true,
        opd: [],
        opd_note: "Round-the-clock ICU & emergency operative care"
      },
      {
        id: "doc11",
        slug: "dr-kshitij-verma",
        name: "Dr. Kshitij Verma",
        name_hi: "डॉ. क्षितिज वर्मा",
        designation: "Laparoscopic Surgeon",
        designation_hi: "लेप्रोस्कोपी",
        department: "general-surgery",
        qualifications: "MBBS, MS (General Surgery), FMAS",
        photo: "",
        bio: "Keyhole laparoscopic specialist for gallbladder stones, hernia, appendix, and gastrointestinal surgery.",
        featured: false,
        active: true,
        opd: [
          { days: [1, 2, 3, 4, 5, 6], start: "16:00", end: "19:00" }
        ],
        opd_note: "Daily evening laparoscopic surgical clinic"
      },
      {
        id: "doc12",
        slug: "dr-satya-sagar-chaturvedi",
        name: "Dr. Satya Sagar Chaturvedi",
        name_hi: "डॉ. सत्य सागर चतुर्वेदी",
        designation: "General Physician",
        designation_hi: "जनरल फिजिशियन",
        department: "general-medicine",
        qualifications: "MBBS, General Physician",
        photo: "",
        bio: "Comprehensive primary care for infectious fevers, seasonal viral illnesses, diabetes, and blood pressure.",
        featured: false,
        active: true,
        opd: [
          { days: [1, 2, 3, 4, 5, 6], start: "09:30", end: "13:00" },
          { days: [1, 2, 3, 4, 5, 6], start: "16:30", end: "19:30" }
        ],
        opd_note: "Daily OPD morning & evening"
      },
      {
        id: "doc15",
        slug: "dr-rahul-verma",
        name: "Dr. Rahul Verma",
        name_hi: "डॉ. राहुल वर्मा",
        designation: "Psychiatrist",
        designation_hi: "मनोचिकित्सक",
        department: "psychiatry",
        qualifications: "MBBS, MD (Psychiatry)",
        photo: "",
        bio: "Mental health specialist treating anxiety, depressive disorders, sleep disturbances, and addiction.",
        featured: false,
        active: true,
        opd: [
          { days: [2, 4, 6], start: "16:30", end: "19:00" }
        ],
        opd_note: "Tuesday, Thursday, Saturday evening clinic"
      }
    ],
    facilities: [
      { name: "Dialysis Unit", summary: "Apollo Dialysis Clinic unit running 24×7 high-flux haemodialysis with RO purification." },
      { name: "Intensive Care Unit (ICU)", summary: "Advanced multi-parameter life support, invasive ventilators, and 1:1 dedicated nursing." },
      { name: "General Ward", summary: "Clean, spacious inpatient rooms with nurse-call bells and attendant accommodations." },
      { name: "Semi-Private Ward", summary: "Air-conditioned dual-occupancy rooms with privacy partitions and attendant beds." },
      { name: "Modular Operation Theatre", summary: "Laminar airflow, HEPA filters, and anti-static flooring minimizing surgical infection." },
      { name: "Conventional Operation Theatre", summary: "Equipped for minor, day-care, and secondary surgical interventions." },
      { name: "C-Arm Image Intensifier", summary: "Live real-time fluoroscopic imaging for trauma orthopaedics and DJ stenting." },
      { name: "Autoclave & CSSD", summary: "Class-B fractional autoclaves ensuring strict instrument sterilization protocols." },
      { name: "Procedure Room", summary: "Dedicated minor OT for wound suturing, biopsies, and emergency wound care." },
      { name: "Multi-Slice CT Scan", summary: "Fast helical CT scanning for brain trauma, chest HRCT, and whole-body diagnostics." },
      { name: "Sonography (USG)", summary: "High-resolution ultrasound with abdominal, pelvic, and vascular Doppler probes." },
      { name: "Digital X-Ray (DR)", summary: "Instant high-definition low-radiation digital radiography." },
      { name: "2D Echo & Colour Doppler", summary: "Non-invasive cardiac functional assessment and peripheral vascular scans." },
      { name: "ECG, TMT & Holter", summary: "12-lead diagnostic ECG, treadmill cardiac stress test, and 24-hour ambulatory Holter." },
      { name: "Spirometry (PFT)", summary: "Pulmonary lung volume assessment for asthma and COPD." },
      { name: "Advanced Diagnostic Lab", summary: "In-house automated biochemistry, 5-part haematology, and immunology." },
      { name: "Dedicated Labour Room", summary: "Equipped with radiant warmers and CTG monitors for safe delivery." },
      { name: "24×7 Pharmacy", summary: "Complete in-house stock of critical care, surgical, and prescription medicines." },
      { name: "24×7 Ambulance", summary: "Equipped with oxygen, life-support, and emergency resuscitation." },
      { name: "Physiotherapy Gymnasium", summary: "Electrotherapy (IFT, TENS), ultrasound, and post-operative mobility rehabilitation." },
      { name: "Cafeteria & Patient Dining", summary: "Hygienic wholesome meals prepared under clinical dietitian supervision." },
      { name: "Hygienic Laundry & CSSD", summary: "Industrial laundering meeting infection control standards." },
      { name: "Home Blood Sample Collection", summary: "Doorstep phlebotomy service across Raipur. Call 9039033712 to book." }
    ],
    insurance: [
      { name: "Ayushman Bharat (PM-JAY)", type: "Government scheme", note: "Cashless coverage up to ₹5 Lakhs per family per year." },
      { name: "CGHS", type: "Government scheme", note: "Central Government Health Scheme for employees and pensioners." },
      { name: "ESIC", type: "Government scheme", note: "Employees' State Insurance Corporation cashless benefits." },
      { name: "CSEB", type: "Corporate / PSU", note: "Chhattisgarh State Electricity Board healthcare empanelment." },
      { name: "Vidal Health TPA", type: "TPA", note: "Cashless approvals for nationalized and private insurers." },
      { name: "Aditya Birla Health", type: "Insurance", note: "Instant cashless pre-authorization." },
      { name: "SBI General", type: "Insurance", note: "Comprehensive retail and group health coverage." },
      { name: "Universal Sompo", type: "Insurance", note: "Full cashless surgical and medical coverage." },
      { name: "Tata AIG", type: "Insurance", note: "MediCare and corporate health plans." },
      { name: "IFFCO-Tokio", type: "Insurance", note: "Emergency and elective cashless hospitalization." }
    ],
    faqs: [
      { q: "How do I book an appointment?", a: "Use the Book Appointment form on this website or call 9039033712 / 7987025114. Our reception team will confirm your slot within minutes." },
      { q: "Is the hospital open 24 hours?", a: "Yes. Emergency, ICU, pharmacy, ambulance, pathology lab and dialysis run 24×7. Specialist OPDs follow each consultant's scheduled timings." },
      { q: "Do you accept Ayushman Bharat?", a: "Yes, cashless treatment under Ayushman Bharat (PM-JAY) is available. Please bring your Ayushman card and Aadhaar card to the TPA desk." },
      { q: "Is cashless health insurance available?", a: "Yes, cashless treatment is available through Vidal Health TPA, Aditya Birla, SBI General, Universal Sompo, Tata AIG, IFFCO-Tokio, CGHS, ESIC and CSEB. Bring your health card and photo ID." },
      { q: "What is the dialysis schedule and cost?", a: "Haemodialysis is conducted in our modern Apollo Dialysis Clinic unit. Sessions run round the clock. Call 9039033712 to reserve your slot and inquire about current charges." },
      { q: "Do you do home blood sample collection?", a: "Yes. Call 9039033712 to schedule home collection of blood and diagnostic samples anywhere in Raipur." },
      { q: "How can I access my diagnostic test reports?", a: "Collect printed reports from the hospital billing counter, or click 'Patient Reports' on this website and enter your 10-digit mobile number and the PIN printed on your bill." },
      { q: "Do you perform prenatal sex determination?", a: "No. Pre-natal sex determination is strictly not conducted at this hospital. It is a punishable offence under the PCPNDT Act." },
      { q: "What documents are required for hospital admission?", a: "Bring a government photo ID (Aadhaar Card), doctor's prescription, your health insurance or Ayushman card, and previous investigation reports." },
      { q: "What are the visiting hours for inpatients?", a: "General wards: 10 AM–12 PM and 5–7 PM (max 2 visitors). ICU: 11–11:30 AM and 6–6:30 PM (strictly 1 visitor). Maternity: 10 AM–1 PM and 4–7 PM." },
      { q: "Is the hospital NABH certified?", a: "Yes. Vasudev Multispeciality Hospital is NABH certified (Entry Level – SHCO), certificate no. PESHCO-2024-9227, valid through 27 July 2028." }
    ]
  };
})();
