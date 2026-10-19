import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, PhoneCall, CheckCircle2, UserCheck, ArrowRight } from 'lucide-react';
import SpotlightCard from '../reactbits/SpotlightCard';

export const all16Departments = [
  {
    id: 'nephrology',
    title: 'Nephrology & Dialysis',
    hindi: 'किडनी रोग का सम्पूर्ण इलाज',
    iconType: 'kidney',
    doctor: 'Dr. Varun Agrawal (DM CMC Vellore)',
    procedures: ['Computerized Haemodialysis', 'Peritoneal Dialysis (CAPD)', 'Renal Biopsy', 'AV Fistula Care', 'Diabetic Nephropathy'],
    desc: 'State-of-the-art Apollo Dialysis Clinic unit providing acute and chronic renal failure therapies, 24x7 emergency dialysis, and nephrology OPD.',
  },
  {
    id: 'urology',
    title: 'Urology',
    hindi: 'मूत्र रोग (पथरी एवं प्रोस्टेट)',
    iconType: 'droplet',
    doctor: 'Dr. Suresh Singh (MCh Urology)',
    procedures: ['PCNL Laser Stone Removal', 'URS & RIRS', 'TURP for Prostate', 'Urethral Stricture Repair', 'Bladder Surgery'],
    desc: 'Minimally invasive endourological laser procedures for kidney/bladder stones, enlarged prostate, and urinary tract disorders.',
  },
  {
    id: 'laparoscopic-surgery',
    title: 'General & Laparoscopic Surgery',
    hindi: 'जनरल सर्जरी एवं लेप्रोस्कोपी',
    iconType: 'scalpel',
    doctor: 'Dr. Prashant Sahu (MS), Dr. Kshitij Verma',
    procedures: ['Laparoscopic Cholecystectomy', 'Appendectomy', 'Hernia Mesh Repair', 'Laser Piles/Fistula', 'Trauma Exploratory Surgery'],
    desc: 'Keyhole laparoscopic and open general surgeries performed in high-precision modular OTs with laminar airflow.',
  },
  {
    id: 'gynaecology',
    title: 'Obstetrics & Gynaecology',
    hindi: 'प्रसूति एवं स्त्री रोग',
    iconType: 'baby',
    doctor: 'Dr. Sushma Agrawal (MD, DNB)',
    procedures: ['High-Risk Pregnancy Care', 'Normal & C-Section Delivery', 'Laparoscopic Hysterectomy', 'Infertility Evaluation', 'PCOS Management'],
    desc: 'Comprehensive mother and child healthcare, painless deliveries, neonatal resuscitation support, and advanced gynaecologic surgeries.',
  },
  {
    id: 'orthopaedics',
    title: 'Orthopaedics',
    hindi: 'हड्डी रोग',
    iconType: 'bone',
    doctor: 'Dr. Ajay Mishra (MS Ortho)',
    procedures: ['Total Knee Replacement (TKR)', 'Total Hip Replacement (THR)', 'Complex Fracture Fixation', 'Arthroscopic Surgery', 'Spine Decompression'],
    desc: '24×7 polytrauma emergency fracture management, arthroscopic joint reconstruction, spine alignment, and arthritis care.',
  },
  {
    id: 'neurology',
    title: 'Neurology',
    hindi: 'मस्तिष्क रोग',
    iconType: 'brain',
    doctor: 'Dr. Lavlesh Rathore, Dr. Abhijit Kohat',
    procedures: ['Acute Stroke Protocol', 'EEG & EMG Investigations', 'Epilepsy Management', 'Headache & Migraine Clinic', 'Neuropathy Treatment'],
    desc: 'Expert neurological care for acute brain stroke, convulsions, neuropathy, chronic headaches, and movement disorders.',
  },
  {
    id: 'neurosurgery',
    title: 'Neurosurgery',
    hindi: 'मस्तिष्क रोग सर्जरी',
    iconType: 'brainCircuit',
    doctor: 'On-Call Neurotrauma Team',
    procedures: ['Emergency Craniotomy', 'Spinal Fixation & Fusion', 'Haematoma Evacuation', 'Brain Tumour Resection', 'VP Shunt Surgery'],
    desc: 'Emergency neurotrauma surgery for traumatic head injuries, intracranial haemorrhage, spinal trauma, and brain tumours.',
  },
  {
    id: 'general-medicine',
    title: 'General Medicine, Diabetes & BP',
    hindi: 'मेडिसिन, मधुमेह एवं उच्च रक्तचाप',
    iconType: 'stethoscope',
    doctor: 'Dr. Satya Sagar Chaturvedi (MBBS)',
    procedures: ['Diabetes HbA1c Management', 'Hypertension & Lipid Clinics', 'Tropical Fever Protocols', 'Thyroid Disorder Treatment', 'Preventive Health Checks'],
    desc: 'Daily OPD and inpatient care for seasonal fevers (Dengue, Malaria), long-term diabetes, metabolic syndrome, and lifestyle health.',
  },
  {
    id: 'radiology',
    title: 'Radiology & Imaging',
    hindi: 'सोनोग्राफी एवं सी.टी. स्कैन',
    iconType: 'scan',
    doctor: 'Dr. Nayna Goyal (MD, DNB Radiologist)',
    procedures: ['Multi-Slice Helical CT Scan', '4D Colour Doppler USG', 'Pelvic & Anomaly Scans', 'High-Frequency Digital X-Ray', 'Image-Guided Biopsies'],
    desc: 'In-house diagnostic imaging wing providing instant CT scan, Doppler ultrasound, and digital X-ray reported by certified DNB radiologists.',
  },
  {
    id: 'paediatrics',
    title: 'Paediatrics',
    hindi: 'शिशु रोग',
    iconType: 'child',
    doctor: 'Dr. Shashikant Dewangan (MD Paediatrics)',
    procedures: ['Newborn Care & Nursery', 'Paediatric Intensive Care (PICU)', 'Immunization & Vaccination', 'Nutritional Assessment', 'Childhood Infection Care'],
    desc: 'Child-friendly clinical department dedicated to newborn emergencies, routine immunizations, paediatric asthma, and growth monitoring.',
  },
  {
    id: 'gastroenterology',
    title: 'Gastroenterology & Gastro Surgery',
    hindi: 'पेट संबंधी रोग एवं सर्जरी',
    iconType: 'gastro',
    doctor: 'Visiting Gastro Specialists',
    procedures: ['Upper GI Video Endoscopy', 'Colonoscopy', 'Liver Function Evaluation', 'Acid Reflux / GERD Therapy', 'Pancreatic Disorder Care'],
    desc: 'Advanced diagnostic endoscopy and surgical management of acid reflux, jaundice, liver cirrhosis, and digestive tract disorders.',
  },
  {
    id: 'critical-care',
    title: 'Anaesthesia & Critical Care',
    hindi: 'निश्चेतना एवं आई.सी.यू.',
    iconType: 'pulse',
    doctor: 'Dr. Asit Pati (MD Anaesthesia)',
    procedures: ['Invasive Mechanical Ventilation', 'Central Venous Catheterization', 'Hemodynamic Monitoring', 'Post-Surgical Critical Care', 'Trauma Resuscitation'],
    desc: '13-bed high-dependency ICU equipped with multi-parameter monitoring, central oxygen, and continuous intensivist vigilance.',
  },
  {
    id: 'psychiatry',
    title: 'Psychiatry',
    hindi: 'मनोचिकित्सा',
    iconType: 'cloud',
    doctor: 'Dr. Rahul Verma (MD Psychiatry)',
    procedures: ['Depression & Anxiety Therapy', 'Bipolar & Mood Stabilization', 'Insomnia & Sleep Disorder Care', 'Addiction De-addiction', 'Counselling Protocols'],
    desc: 'Confidential, evidence-based psychiatric therapy and psychiatric rehabilitation for depression, panic, and sleep disturbances.',
  },
  {
    id: 'physiotherapy',
    title: 'Physiotherapy',
    hindi: 'फिजियोथेरेपी',
    iconType: 'figure',
    doctor: 'Department of Rehabilitation',
    procedures: ['Shortwave Diathermy (SWD)', 'Ultrasonic Therapy (UST)', 'Cervical & Lumbar Traction', 'Post-Stroke Neuro Rehab', 'Post-Operative Mobility'],
    desc: 'Targeted physical rehabilitation for back/neck pain, sports injuries, paralysis recovery, and post-joint replacement mobility.',
  },
  {
    id: 'maxillofacial',
    title: 'Oral & Maxillofacial Surgery',
    hindi: 'मुख एवं जबड़ा सर्जरी',
    iconType: 'tooth',
    doctor: 'Visiting Maxillofacial Surgeons',
    procedures: ['Facial Bone Fracture Fixation', 'Jaw Alignment Surgery', 'Impacted Wisdom Tooth Removal', 'TMJ Disorder Treatment', 'Oral Cyst & Pathology'],
    desc: 'Surgical repair of facial trauma fractures, jaw realignment, oral lesions, and dental rehabilitation under general anaesthesia.',
  },
  {
    id: 'ent',
    title: 'Ear, Nose & Throat (ENT)',
    hindi: 'नाक, कान, गला',
    iconType: 'ear',
    doctor: 'Visiting ENT Surgeons',
    procedures: ['Diagnostic Nasal Endoscopy', 'Tympanoplasty (Eardrum)', 'Septoplasty (Deviated Septum)', 'Tonsillectomy & Adenoidectomy', 'Sinusitis Micro-Surgery'],
    desc: 'Medical and microsurgical treatment for hearing problems, chronic sinusitis, nasal polyps, tonsillitis, and vocal cord hoarseness.',
  },
];

// Helper to render authentic Lucide/SVG icons matching the user screenshot
function renderDepartmentIcon(type) {
  const commonClasses = "w-6 h-6 text-[#1c2b8f]";
  switch (type) {
    case 'kidney':
      return (
        <svg className={commonClasses} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8 5.5c-3 0-5 2.5-5 6s2 6 5 6c1.8 0 2.5-1 2.5-3v-6c0-2-.7-3-2.5-3z" />
          <path d="M16 5.5c3 0 5 2.5 5 6s-2 6-5 6c-1.8 0-2.5-1-2.5-3v-6c0-2 .7-3 2.5-3z" />
        </svg>
      );
    case 'droplet':
      return (
        <svg className={commonClasses} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
        </svg>
      );
    case 'scalpel':
      return (
        <svg className={commonClasses} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m18 2 4 4-14 14H4v-4L18 2z" />
          <path d="M14.5 5.5l4 4" />
        </svg>
      );
    case 'baby':
      return (
        <svg className={commonClasses} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />
          <path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
        </svg>
      );
    case 'bone':
      return (
        <svg className={commonClasses} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 10c.7-.7 1.6-1 2.5-1a3.5 3.5 0 1 1 0 7c-.9 0-1.8-.3-2.5-1l-7.1 2.1c-.7.7-1 1.6-1 2.5a3.5 3.5 0 1 1-7 0c0-.9.3-1.8 1-2.5l2.1-7.1c-.7-.7-1-1.6-1-2.5a3.5 3.5 0 1 1 7 0c0 .9-.3 1.8-1 2.5z" />
        </svg>
      );
    case 'brain':
      return (
        <svg className={commonClasses} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.04z" />
          <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-2.04z" />
        </svg>
      );
    case 'brainCircuit':
      return (
        <svg className={commonClasses} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 5V2" /><path d="M12 22v-3" />
          <path d="M5 12H2" /><path d="M22 12h-3" />
          <circle cx="12" cy="12" r="5" />
          <path d="M12 9a3 3 0 0 0-3 3" />
        </svg>
      );
    case 'stethoscope':
      return (
        <svg className={commonClasses} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4.5 3h2v7a4 4 0 0 0 8 0V3h2" />
          <path d="M10.5 14v4a4 4 0 0 0 8 0v-2" />
          <circle cx="18.5" cy="14" r="2" />
        </svg>
      );
    case 'scan':
      return (
        <svg className={commonClasses} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 7V4h3" /><path d="M20 7V4h-3" />
          <path d="M4 17v3h3" /><path d="M20 17v3h-3" />
          <circle cx="12" cy="12" r="3.5" />
        </svg>
      );
    case 'child':
      return (
        <svg className={commonClasses} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="8" />
          <path d="M9 10h.01" /><path d="M15 10h.01" />
          <path d="M9.5 15a3.5 3.5 0 0 0 5 0" />
        </svg>
      );
    case 'gastro':
      return (
        <svg className={commonClasses} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v10" /><path d="M18.4 6.6a9 9 0 1 1-12.77.04" />
        </svg>
      );
    case 'pulse':
      return (
        <svg className={commonClasses} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
        </svg>
      );
    case 'cloud':
      return (
        <svg className={commonClasses} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
        </svg>
      );
    case 'figure':
      return (
        <svg className={commonClasses} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="5" r="2" />
          <path d="m9 20 3-6 3 6" />
          <path d="m6 8 6 2 6-2" />
          <path d="M12 10v4" />
        </svg>
      );
    case 'tooth':
      return (
        <svg className={commonClasses} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 4C4.5 6 4 9 4 12c0 3 1.5 8 4 8s3-4 4-4 1.5 4 4 4 4-5 4-8c0-3-.5-6-3-8-2-1.5-4-1.5-5 0-1-1.5-3-1.5-5 0z" />
        </svg>
      );
    case 'ear':
      return (
        <svg className={commonClasses} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 8.5a6.5 6.5 0 1 1 13 0c0 6-6 6-6 10a3.5 3.5 0 1 1-7 0" />
          <path d="M15 8.5a2.5 2.5 0 0 0-5 0v1a2 2 0 1 0 4 0" />
        </svg>
      );
    default:
      return null;
  }
}

export default function Departments({ onBookDepartment, onSelectDepartment }) {
  const [selectedDept, setSelectedDept] = useState(null);

  const handleCardClick = (dept) => {
    setSelectedDept(dept);
    if (onSelectDepartment) {
      onSelectDepartment(dept);
    }
  };

  return (
    <section
      id="departments"
      className="relative z-10 py-16 md:py-24 bg-[#f5f8fc] text-[#0f1a46] font-poppins overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="mb-10">
          {/* Eyebrow: Coral line + uppercase text */}
          <div className="flex items-center gap-2.5 text-[#d42a31] text-xs font-bold tracking-[0.2em] uppercase mb-3">
            <span className="w-5 h-[2px] bg-[#d42a31] inline-block rounded-full" />
            <span>DEPARTMENTS · विभाग</span>
          </div>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#0f1a46] tracking-tight leading-tight">
            Complete care across specialities
          </h2>
        </div>

        {/* 16 Clinical Department Cards (4 cols x 4 rows) with React Bits Spotlight Effect */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {all16Departments.map((dept, idx) => (
            <motion.div
              key={dept.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.025 }}
            >
              <SpotlightCard
                onClick={() => handleCardClick(dept)}
                className="p-4 sm:p-5 h-full flex items-center gap-4 cursor-pointer bg-white border border-[#d5deec] rounded-2xl shadow-xs hover:shadow-md hover:border-[#1c2b8f]/50 transition-all group"
                spotlightColor="rgba(28, 43, 143, 0.06)"
                borderColor="rgba(28, 43, 143, 0.3)"
              >
                {/* Light Rounded Icon Box */}
                <div className="w-12 h-12 rounded-xl bg-[#e9f0fa] border border-[#d5deec]/70 flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:bg-[#dbe7f8] transition-all shadow-xs">
                  {renderDepartmentIcon(dept.iconType)}
                </div>

                {/* Text Content */}
                <div className="min-w-0 flex-1">
                  <h3 className="text-[#0f1a46] font-bold text-[14.5px] sm:text-base leading-snug group-hover:text-[#1c2b8f] transition-colors line-clamp-1">
                    {dept.title}
                  </h3>
                  <p className="text-[#56618a] text-xs sm:text-[13px] mt-0.5 leading-tight line-clamp-1">
                    {dept.hindi}
                  </p>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

      </div>

      {/* ========================================================
          DEPARTMENT DETAILS MODAL
         ======================================================== */}
      <AnimatePresence>
        {selectedDept && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-3xl border border-[#d5deec] max-w-lg w-full p-6 sm:p-8 text-[#0f1a46] relative shadow-2xl max-h-[90vh] overflow-y-auto"
            >
              <button
                type="button"
                onClick={() => setSelectedDept(null)}
                className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-all cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3.5 mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#e9f0fa] border border-[#d5deec] flex items-center justify-center text-[#1c2b8f]">
                  {renderDepartmentIcon(selectedDept.iconType)}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0f1a46]">{selectedDept.title}</h3>
                  <p className="text-sm text-[#d42a31] font-semibold">{selectedDept.hindi}</p>
                </div>
              </div>

              <div className="space-y-4 text-sm text-[#56618a] border-t border-slate-200 pt-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">
                    Lead Consultant &amp; Specialists
                  </span>
                  <div className="flex items-center gap-2 text-[#0f1a46] font-semibold">
                    <UserCheck className="w-4 h-4 text-[#1c2b8f]" />
                    <span>{selectedDept.doctor}</span>
                  </div>
                </div>

                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">
                    Department Overview
                  </span>
                  <p className="text-[#56618a] leading-relaxed text-xs sm:text-sm">
                    {selectedDept.desc}
                  </p>
                </div>

                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                    Key Procedures &amp; Interventions
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {selectedDept.procedures.map((proc, pIdx) => (
                      <span
                        key={pIdx}
                        className="bg-slate-100 border border-slate-200 px-3 py-1 rounded-lg text-xs text-slate-700"
                      >
                        {proc}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 mt-6 pt-4 border-t border-slate-200">
                <a
                  href="tel:+919039033712"
                  className="py-3 px-4 rounded-xl border border-slate-300 bg-slate-50 hover:bg-slate-100 text-[#0f1a46] text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-all"
                >
                  <PhoneCall className="w-4 h-4 text-[#1c2b8f]" />
                  <span>Call 90390 33712</span>
                </a>
                <button
                  type="button"
                  onClick={() => {
                    const dept = selectedDept;
                    setSelectedDept(null);
                    if (onBookDepartment) onBookDepartment(dept);
                  }}
                  className="py-3 px-4 rounded-xl bg-[#d42a31] hover:bg-[#b91c1c] text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-white" />
                  <span>Book Consultation</span>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
