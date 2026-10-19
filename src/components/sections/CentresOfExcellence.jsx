import React from 'react';
import { motion } from 'framer-motion';
import Magnet from '../reactbits/Magnet';
import otImg from '../../assets/photos/ot-c-arm.jpg';
import icuImg from '../../assets/photos/icu.jpg';
import xrayImg from '../../assets/photos/xray-room.jpg';

export default function CentresOfExcellence({ onSelectSpeciality, onViewAllDepartments }) {

  const handleExplore = (deptId) => {
    if (onSelectSpeciality) {
      onSelectSpeciality(deptId);
    }
    const el = document.getElementById('departments');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleViewAll = (e) => {
    if (e) e.preventDefault();
    if (onViewAllDepartments) {
      onViewAllDepartments();
    }
    const el = document.getElementById('departments');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="services"
      className="relative z-10 pt-6 pb-16 md:pt-8 md:pb-24 bg-[#f5f8fc] text-[#0f1a46] font-poppins overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            {/* Eyebrow: Coral line + uppercase text */}
            <div className="flex items-center gap-2.5 text-[#d42a31] text-xs font-bold tracking-[0.2em] uppercase mb-3">
              <span className="w-6 h-[2px] bg-[#d42a31] inline-block rounded-full" />
              <span>CENTRES OF EXCELLENCE</span>
            </div>

            {/* Main Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#0f1a46] tracking-tight leading-tight">
              Specialities we are known for
            </h2>

            {/* Subtitle */}
            <p className="text-[#56618a] text-sm sm:text-base mt-3 max-w-2xl font-normal leading-relaxed">
              Each centre brings together consultants, equipment and nursing teams under one roof.
            </p>
          </div>

          {/* Right Action Button: "All 16 departments →" with React Bits Magnet */}
          <div className="shrink-0">
            <Magnet padding={25} magnetStrength={0.25}>
              <a
                href="#departments"
                onClick={handleViewAll}
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full border border-[#d5deec] bg-white hover:bg-slate-50 hover:border-[#1c2b8f] text-[#1c2b8f] text-sm font-semibold transition-all duration-200 shadow-sm group cursor-pointer"
              >
                <span>All 16 departments</span>
                <span className="text-base group-hover:translate-x-1 transition-transform duration-200">
                  &rarr;
                </span>
              </a>
            </Magnet>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* ========================================================
              CARD 1: Nephrology & Dialysis (Flagship Centre)
             ======================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0 }}
            className="group relative rounded-3xl overflow-hidden p-6 sm:p-7 flex flex-col justify-between min-h-[460px] md:min-h-[490px] border border-white/10 hover:border-white/25 shadow-2xl transition-all duration-300 hover:-translate-y-1.5"
            style={{
              background: 'radial-gradient(circle at 85% 20%, rgba(147, 51, 234, 0.42) 0%, rgba(88, 28, 135, 0.2) 40%, transparent 70%), linear-gradient(145deg, #0d1238 0%, #1c1549 50%, #301150 100%)'
            }}
          >
            {/* Soft purple radial orb */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-purple-600/25 rounded-full blur-2xl pointer-events-none -mr-12 -mt-12" />

            <div className="relative z-10">
              {/* Glassmorphic Icon Box (Nephrology / Kidney Pair) */}
              <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-inner">
                <svg
                  className="w-6 h-6 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M8 5.5c-3 0-5 2.5-5 6s2 6 5 6c1.8 0 2.5-1 2.5-3v-6c0-2-.7-3-2.5-3z" />
                  <path d="M16 5.5c3 0 5 2.5 5 6s-2 6-5 6c-1.8 0-2.5-1-2.5-3v-6c0-2 .7-3 2.5-3z" />
                </svg>
              </div>

              {/* Gold Pill Badge */}
              <div className="mt-4">
                <span className="inline-block bg-[#F2B733] text-[#1A1610] text-[10.5px] font-extrabold uppercase tracking-wider px-3.5 py-1 rounded-full font-sans shadow-sm">
                  FLAGSHIP CENTRE
                </span>
              </div>

              {/* Heading */}
              <h3 className="text-2xl font-bold text-white mt-3.5 tracking-tight leading-snug">
                Nephrology & Dialysis
              </h3>

              {/* Hindi Subtitle */}
              <p className="text-[#FF7A59] text-sm font-semibold mt-1">
                किडनी रोग का सम्पूर्ण इलाज
              </p>

              {/* 3 Bullet Points */}
              <ul className="mt-5 space-y-2.5 text-slate-200/90 text-[13.5px] leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2 shrink-0" />
                  <span>Dr. Varun Agrawal, DM Nephrology (CMC Vellore)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2 shrink-0" />
                  <span>Apollo Dialysis Clinic unit</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2 shrink-0" />
                  <span>Haemodialysis, CAPD & kidney biopsy</span>
                </li>
              </ul>
            </div>

            {/* Bottom Link: Explore → */}
            <div className="relative z-10 pt-6 mt-auto">
              <button
                type="button"
                onClick={() => handleExplore('nephrology')}
                className="inline-flex items-center gap-1.5 text-[#F2B733] font-semibold text-sm hover:underline group-hover:gap-2.5 transition-all cursor-pointer"
              >
                <span>Explore</span>
                <span className="text-base">&rarr;</span>
              </button>
            </div>
          </motion.div>

          {/* ========================================================
              CARD 2: General & Laparoscopic Surgery (Modular OT)
             ======================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group relative rounded-3xl overflow-hidden p-6 sm:p-7 flex flex-col justify-between min-h-[460px] md:min-h-[490px] border border-white/10 hover:border-white/25 shadow-2xl transition-all duration-300 hover:-translate-y-1.5"
          >
            {/* Real Photo Background */}
            <img
              src={otImg}
              alt="General & Laparoscopic Surgery Modular OT with C-arm"
              onError={(e) => {
                e.currentTarget.src = 'https://vasudevhospital.in/assets/img/photos/ot-c-arm.jpg';
              }}
              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />

            {/* High-Contrast Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#060B1E]/95 via-[#060B1E]/65 to-[#060B1E]/25 pointer-events-none" />

            {/* Top Glassmorphic Icon Box (Surgical Blade / Scalpel Incision) */}
            <div className="relative z-10 w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-inner">
              <svg
                className="w-6 h-6 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m18 2 4 4-14 14H4v-4L18 2z" />
                <path d="M14.5 5.5l4 4" />
              </svg>
            </div>

            {/* Bottom Content */}
            <div className="relative z-10 mt-auto pt-6">
              <h3 className="text-2xl font-bold text-white tracking-tight leading-snug">
                General &<br />Laparoscopic Surgery
              </h3>

              <p className="text-slate-200/90 text-sm leading-relaxed mt-2.5">
                Open and keyhole (laparoscopic) surgery in modular operation theatres with laminar airflow.
              </p>

              <div className="pt-4">
                <button
                  type="button"
                  onClick={() => handleExplore('laparoscopic-surgery')}
                  className="inline-flex items-center gap-1.5 text-[#F2B733] font-semibold text-sm hover:underline group-hover:gap-2.5 transition-all cursor-pointer"
                >
                  <span>Explore</span>
                  <span className="text-base">&rarr;</span>
                </button>
              </div>
            </div>
          </motion.div>

          {/* ========================================================
              CARD 3: Anaesthesia & Critical Care (ICU Ward)
             ======================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="group relative rounded-3xl overflow-hidden p-6 sm:p-7 flex flex-col justify-between min-h-[460px] md:min-h-[490px] border border-white/10 hover:border-white/25 shadow-2xl transition-all duration-300 hover:-translate-y-1.5"
          >
            {/* Real Photo Background */}
            <img
              src={icuImg}
              alt="Anaesthesia & Critical Care ICU Ward"
              onError={(e) => {
                e.currentTarget.src = 'https://vasudevhospital.in/assets/img/photos/icu.jpg';
              }}
              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />

            {/* High-Contrast Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#060B1E]/95 via-[#060B1E]/65 to-[#060B1E]/25 pointer-events-none" />

            {/* Top Glassmorphic Icon Box (ECG Pulse Wave) */}
            <div className="relative z-10 w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-inner">
              <svg
                className="w-6 h-6 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
              </svg>
            </div>

            {/* Bottom Content */}
            <div className="relative z-10 mt-auto pt-6">
              <h3 className="text-2xl font-bold text-white tracking-tight leading-snug">
                Anaesthesia<br />& Critical Care
              </h3>

              <p className="text-slate-200/90 text-sm leading-relaxed mt-2.5">
                Safe anaesthesia for every operation and round-the-clock ICU care.
              </p>

              <div className="pt-4">
                <button
                  type="button"
                  onClick={() => handleExplore('critical-care')}
                  className="inline-flex items-center gap-1.5 text-[#F2B733] font-semibold text-sm hover:underline group-hover:gap-2.5 transition-all cursor-pointer"
                >
                  <span>Explore</span>
                  <span className="text-base">&rarr;</span>
                </button>
              </div>
            </div>
          </motion.div>

          {/* ========================================================
              CARD 4: Radiology & Imaging (Digital X-Ray & CT)
             ======================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="group relative rounded-3xl overflow-hidden p-6 sm:p-7 flex flex-col justify-between min-h-[460px] md:min-h-[490px] border border-white/10 hover:border-white/25 shadow-2xl transition-all duration-300 hover:-translate-y-1.5"
          >
            {/* Real Photo Background */}
            <img
              src={xrayImg}
              alt="Radiology & Imaging - In-house CT scan and Digital X-ray"
              onError={(e) => {
                e.currentTarget.src = 'https://vasudevhospital.in/assets/img/photos/xray-room.jpg';
              }}
              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />

            {/* High-Contrast Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#060B1E]/95 via-[#060B1E]/65 to-[#060B1E]/25 pointer-events-none" />

            {/* Top Glassmorphic Icon Box (Scanner Viewfinder Corners with Circle) */}
            <div className="relative z-10 w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-inner">
              <svg
                className="w-6 h-6 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 8V4h4" />
                <path d="M20 8V4h-4" />
                <path d="M4 16v4h4" />
                <path d="M20 16v4h-4" />
                <circle cx="12" cy="12" r="3.5" />
              </svg>
            </div>

            {/* Bottom Content */}
            <div className="relative z-10 mt-auto pt-6">
              <h3 className="text-2xl font-bold text-white tracking-tight leading-snug">
                Radiology & Imaging
              </h3>

              <p className="text-slate-200/90 text-sm leading-relaxed mt-2.5">
                In-house CT scan, sonography and digital X-ray, reported by an MD, DNB Radiologist.
              </p>

              <div className="pt-4">
                <button
                  type="button"
                  onClick={() => handleExplore('radiology')}
                  className="inline-flex items-center gap-1.5 text-[#F2B733] font-semibold text-sm hover:underline group-hover:gap-2.5 transition-all cursor-pointer"
                >
                  <span>Explore</span>
                  <span className="text-base">&rarr;</span>
                </button>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
