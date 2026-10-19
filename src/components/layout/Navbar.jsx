import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu, X, ChevronDown, Phone, Mail, Calendar, User,
  HeartPulse, Activity, Stethoscope, ShieldCheck, Clock,
  FlaskConical, Maximize2, FileText, Droplets, Droplet,
  Bone, Brain, Baby, Ear, Smile, Scan
} from 'lucide-react';
import HospitalLogo from '../ui/HospitalLogo';

export default function Navbar({ onOpenAuth, onOpenAppointment, onOpenVideo }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Exact 16 Departments matching the 3-column layout from vasudevhospital.in
  const departmentsCol1 = [
    { title: 'Nephrology & Dialysis', hindi: 'किडनी रोग का सम्पूर्ण इलाज', icon: Droplets, href: '#departments' },
    { title: 'Obstetrics & Gynaecology', hindi: 'प्रसूति एवं स्त्री रोग', icon: HeartPulse, href: '#departments' },
    { title: 'Neurosurgery', hindi: 'मस्तिष्क रोग सर्जरी', icon: Brain, href: '#departments' },
    { title: 'Paediatrics', hindi: 'शिशु रोग', icon: Baby, href: '#departments' },
    { title: 'Psychiatry', hindi: 'मनोचिकित्सा', icon: Brain, href: '#departments' },
    { title: 'Ear, Nose & Throat (ENT)', hindi: 'नाक, कान, गला', icon: Ear, href: '#departments' },
  ];

  const departmentsCol2 = [
    { title: 'Urology', hindi: 'मूत्र रोग (पथरी एवं प्रोस्टेट)', icon: Droplet, href: '#departments' },
    { title: 'Orthopaedics', hindi: 'हड्डी रोग', icon: Bone, href: '#departments' },
    { title: 'General Medicine, Diabetes & BP', hindi: 'मेडिसिन, मधुमेह एवं उच्च रक्तचाप', icon: Stethoscope, href: '#departments' },
    { title: 'Gastroenterology & Gastro Surgery', hindi: 'पेट संबंधी रोग एवं सर्जरी', icon: Activity, href: '#departments' },
    { title: 'Physiotherapy', hindi: 'फिजियोथेरेपी', icon: Activity, href: '#departments' },
  ];

  const departmentsCol3 = [
    { title: 'General & Laparoscopic Surgery', hindi: 'जनरल सर्जरी एवं लेप्रोस्कोपी', icon: Activity, href: '#departments' },
    { title: 'Neurology', hindi: 'मस्तिष्क रोग', icon: Brain, href: '#departments' },
    { title: 'Radiology & Imaging', hindi: 'सोनोग्राफी एवं सी.टी. स्कैन', icon: Scan, href: '#departments' },
    { title: 'Anaesthesia & Critical Care', hindi: 'निश्चेतना एवं आई.सी.यू.', icon: Activity, href: '#departments' },
    { title: 'Oral & Maxillofacial Surgery', hindi: 'मुख एवं जबड़ा सर्जरी', icon: Smile, href: '#departments' },
  ];

  // Exact 6 Patient Care items from vasudevhospital.in
  const patientCareItems = [
    { title: 'Facilities & diagnostics', icon: FlaskConical, href: '#services' },
    { title: 'Photo gallery', icon: Maximize2, href: '#about', isVideo: true },
    { title: 'Insurance & cashless', icon: ShieldCheck, href: '#services' },
    { title: 'Patient reports', icon: FileText, href: '#services' },
    { title: 'Visiting hours', icon: Clock, href: '#contact' },
    { title: 'Book appointment', icon: Calendar, href: '#appointment', isBooking: true },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white shadow-sm border-b border-[#E2E8F0] transition-all">

      {/* ========================================================
          1. TOP EMERGENCY & ANNOUNCEMENT BAR (Clean Light Theme)
         ======================================================== */}
      <div className="bg-[#F8FAFC] text-[#475569] text-[11px] py-1.5 px-4 sm:px-6 lg:px-8 border-b border-[#ECECEC] font-poppins">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-y-1.5">

          {/* Left Emergency & Contact Links */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <div className="inline-flex items-center gap-1.5 bg-[#FEE2E2] border border-[#FECACA] rounded-full px-2.5 py-0.5 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#E63946] animate-pulse" />
              <span className="text-[10px] font-extrabold text-[#E63946] tracking-wider uppercase">
                24×7 EMERGENCY
              </span>
              <a
                href="tel:+917987025114"
                className="font-bold text-[#E63946] hover:text-[#B91C1C] transition-colors ml-0.5 tracking-wide"
                title="Direct 24x7 Emergency Line"
              >
                79870 25114
              </a>
            </div>

            <span className="text-[#CBD5E1] hidden sm:inline">|</span>

            <div className="inline-flex items-center gap-1">
              <span className="text-[#64748B] text-[10.5px]">Help Desk:</span>
              <a
                href="tel:+919039033712"
                className="font-semibold text-[#1E293B] hover:text-[#1c2b8f] transition-colors text-[11px]"
              >
                90390 33712
              </a>
            </div>

            <span className="text-[#CBD5E1] hidden md:inline">|</span>

            <div className="hidden md:inline-flex items-center gap-1.5">
              <Mail className="w-3 h-3 text-[#1c2b8f]" />
              <a
                href="mailto:vasudevhospital.ryp@gmail.com"
                className="text-[#64748B] hover:text-[#1c2b8f] transition-colors text-[10.5px]"
              >
                vasudevhospital.ryp@gmail.com
              </a>
            </div>
          </div>

          {/* Right Service Notice */}
          <div className="hidden lg:flex items-center gap-2 text-[#475569] text-[11px]">
            <HeartPulse className="w-3.5 h-3.5 text-[#E63946] animate-pulse" />
            <span>
              Home collection of blood samples available across Raipur · Call{' '}
              <a href="tel:+919039033712" className="text-[#1c2b8f] font-bold hover:underline">
                90390 33712
              </a>{' '}
              to book
            </span>
          </div>

        </div>
      </div>

      {/* ========================================================
          2. MAIN NAVBAR & LOGO (Clean Light Theme)
         ======================================================== */}
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Hospital Logo & Brand Title */}
          <a href="#home" className="text-decoration-none focus:outline-none">
            <HospitalLogo size={46} showText={true} />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-7" aria-label="Main Navigation">

            {/* 1. DEPARTMENTS MEGA-DROPDOWN (Light Theme matching website UI) */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('departments')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                type="button"
                onClick={() => setActiveDropdown(activeDropdown === 'departments' ? null : 'departments')}
                className={`inline-flex items-center gap-1.5 font-poppins text-[14.5px] font-semibold transition-colors py-2 group ${activeDropdown === 'departments' ? 'text-[#1c2b8f]' : 'text-[#1E293B] hover:text-[#1c2b8f]'
                  }`}
                aria-expanded={activeDropdown === 'departments'}
              >
                <span>Departments</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'departments' ? 'rotate-180 text-[#1c2b8f]' : 'text-[#94A3B8] group-hover:text-[#1c2b8f]'
                  }`} />
              </button>

              <AnimatePresence>
                {activeDropdown === 'departments' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    transition={{ duration: 0.16 }}
                    className="absolute top-full -left-32 w-[980px] bg-white rounded-3xl shadow-2xl border border-[#E2E8F0] p-6 z-50 flex gap-6"
                  >
                    {/* Left 3 Columns of Departments */}
                    <div className="flex-1 grid grid-cols-3 gap-x-5 gap-y-3.5">

                      {/* Column 1 */}
                      <div className="space-y-2.5">
                        {departmentsCol1.map((dept) => {
                          const IconComp = dept.icon;
                          return (
                            <a
                              key={dept.title}
                              href={dept.href}
                              onClick={() => setActiveDropdown(null)}
                              className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-[#F8FAFC] border border-transparent hover:border-[#E2E8F0] transition-all group"
                            >
                              <div className="w-8 h-8 rounded-xl bg-[#e9f0fa] border border-[#1c2b8f]/15 text-[#1c2b8f] flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#1c2b8f] group-hover:text-white transition-all shadow-2xs">
                                <IconComp className="w-4 h-4" />
                              </div>
                              <div className="min-w-0">
                                <div className="text-[13px] font-bold text-[#1E293B] group-hover:text-[#1c2b8f] transition-colors leading-tight">
                                  {dept.title}
                                </div>
                                <div className="text-[11px] text-[#64748B] mt-0.5 font-normal">
                                  {dept.hindi}
                                </div>
                              </div>
                            </a>
                          );
                        })}
                      </div>

                      {/* Column 2 */}
                      <div className="space-y-2.5">
                        {departmentsCol2.map((dept) => {
                          const IconComp = dept.icon;
                          return (
                            <a
                              key={dept.title}
                              href={dept.href}
                              onClick={() => setActiveDropdown(null)}
                              className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-[#F8FAFC] border border-transparent hover:border-[#E2E8F0] transition-all group"
                            >
                              <div className="w-8 h-8 rounded-xl bg-[#e9f0fa] border border-[#1c2b8f]/15 text-[#1c2b8f] flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#1c2b8f] group-hover:text-white transition-all shadow-2xs">
                                <IconComp className="w-4 h-4" />
                              </div>
                              <div className="min-w-0">
                                <div className="text-[13px] font-bold text-[#1E293B] group-hover:text-[#1c2b8f] transition-colors leading-tight">
                                  {dept.title}
                                </div>
                                <div className="text-[11px] text-[#64748B] mt-0.5 font-normal">
                                  {dept.hindi}
                                </div>
                              </div>
                            </a>
                          );
                        })}
                      </div>

                      {/* Column 3 */}
                      <div className="space-y-2.5">
                        {departmentsCol3.map((dept) => {
                          const IconComp = dept.icon;
                          return (
                            <a
                              key={dept.title}
                              href={dept.href}
                              onClick={() => setActiveDropdown(null)}
                              className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-[#F8FAFC] border border-transparent hover:border-[#E2E8F0] transition-all group"
                            >
                              <div className="w-8 h-8 rounded-xl bg-[#e9f0fa] border border-[#1c2b8f]/15 text-[#1c2b8f] flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#1c2b8f] group-hover:text-white transition-all shadow-2xs">
                                <IconComp className="w-4 h-4" />
                              </div>
                              <div className="min-w-0">
                                <div className="text-[13px] font-bold text-[#1E293B] group-hover:text-[#1c2b8f] transition-colors leading-tight">
                                  {dept.title}
                                </div>
                                <div className="text-[11px] text-[#64748B] mt-0.5 font-normal">
                                  {dept.hindi}
                                </div>
                              </div>
                            </a>
                          );
                        })}
                      </div>

                    </div>

                    {/* Right Side: Triage Call-Out Card (Matching vasudevhospital.in) */}
                    <div className="w-64 bg-[#0e1758] border border-blue-900/40 rounded-2xl p-5 flex flex-col justify-between shadow-lg text-white">
                      <div>
                        <h4 className="font-poppins text-base font-bold text-white leading-snug">
                          Not sure which department?
                        </h4>
                        <p className="text-xs text-blue-100/80 leading-relaxed mt-2.5 font-normal">
                          Tell us the problem and our help desk will guide you to the right specialist.
                        </p>

                        <button
                          type="button"
                          onClick={() => {
                            setActiveDropdown(null);
                            onOpenAppointment();
                          }}
                          className="w-full mt-4 bg-white hover:bg-blue-50 text-[#0e1758] font-bold text-xs py-2.5 px-4 rounded-xl shadow-md hover:shadow-lg transition-all active:scale-95 cursor-pointer"
                        >
                          Request a call back
                        </button>
                      </div>

                      <div className="pt-4 border-t border-white/15 mt-4">
                        <span className="text-[10.5px] text-[#f2b733] font-bold block mb-0.5 uppercase tracking-wider">
                          Emergency 24×7
                        </span>
                        <a
                          href="tel:+917987025114"
                          className="font-poppins text-lg font-extrabold text-white hover:text-[#f2b733] transition-colors tracking-wide"
                        >
                          79870 25114
                        </a>
                      </div>
                    </div>

                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* 2. FIND A DOCTOR */}
            <a
              href="#doctors"
              className="font-poppins text-[14.5px] font-semibold text-[#1E293B] hover:text-[#1c2b8f] transition-colors py-2"
            >
              Find a Doctor
            </a>

            {/* 3. PATIENT CARE DROPDOWN (Light Theme matching website UI) */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('patient-care')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                type="button"
                onClick={() => setActiveDropdown(activeDropdown === 'patient-care' ? null : 'patient-care')}
                className={`inline-flex items-center gap-1.5 font-poppins text-[14.5px] font-semibold transition-colors py-2 group ${activeDropdown === 'patient-care' ? 'text-[#1c2b8f]' : 'text-[#1E293B] hover:text-[#1c2b8f]'
                  }`}
                aria-expanded={activeDropdown === 'patient-care'}
              >
                <span>Patient Care</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'patient-care' ? 'rotate-180 text-[#1c2b8f]' : 'text-[#94A3B8] group-hover:text-[#1c2b8f]'
                  }`} />
              </button>

              <AnimatePresence>
                {activeDropdown === 'patient-care' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    transition={{ duration: 0.16 }}
                    className="absolute top-full -left-6 w-64 bg-white rounded-2xl shadow-2xl border border-[#E2E8F0] p-2.5 z-50 space-y-1"
                  >
                    {patientCareItems.map((item) => {
                      const IconComp = item.icon;
                      return (
                        <a
                          key={item.title}
                          href={item.href}
                          onClick={(e) => {
                            setActiveDropdown(null);
                            if (item.isVideo && onOpenVideo) {
                              e.preventDefault();
                              onOpenVideo();
                            } else if (item.isBooking && onOpenAppointment) {
                              e.preventDefault();
                              onOpenAppointment();
                            }
                          }}
                          className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-[#F8FAFC] text-[#1E293B] hover:text-[#1c2b8f] border border-transparent hover:border-[#E2E8F0] transition-colors group cursor-pointer"
                        >
                          <div className="w-7 h-7 rounded-lg bg-[#e9f0fa] text-[#1c2b8f] flex items-center justify-center shrink-0 group-hover:bg-[#1c2b8f] group-hover:text-white transition-all">
                            <IconComp className="w-3.5 h-3.5" />
                          </div>
                          <span className="text-[13.5px] font-semibold leading-tight capitalize">
                            {item.title}
                          </span>
                        </a>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* 4. GALLERY */}
            <a
              href="#about"
              onClick={(e) => {
                if (onOpenVideo) {
                  e.preventDefault();
                  onOpenVideo();
                }
              }}
              className="font-poppins text-[14.5px] font-semibold text-[#1E293B] hover:text-[#1c2b8f] transition-colors py-2"
            >
              Gallery
            </a>

            {/* 5. ABOUT */}
            <a
              href="#about"
              className="font-poppins text-[14.5px] font-semibold text-[#1E293B] hover:text-[#1c2b8f] transition-colors py-2"
            >
              About
            </a>

            {/* 6. CONTACT */}
            <a
              href="#contact"
              className="font-poppins text-[14.5px] font-semibold text-[#1E293B] hover:text-[#1c2b8f] transition-colors py-2"
            >
              Contact
            </a>
          </nav>

          {/* Right Header CTAs: 24×7 Emergency Call + Book Appointment + Patient Portal */}
          <div className="hidden sm:flex items-center gap-3.5">

            {/* 24×7 Emergency Hotline Box */}
            <a
              href="tel:+917987025114"
              className="flex items-center gap-2.5 px-3 py-1.5 rounded-full hover:bg-red-50/70 transition-colors group border border-red-100 bg-white shadow-xs"
              title="24x7 Emergency Ambulance & Trauma Line"
            >
              <div className="w-8 h-8 rounded-full bg-[#E63946] flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform">
                <Phone className="w-4 h-4 fill-white" />
              </div>
              <div className="text-left">
                <span className="block text-[9.5px] font-extrabold text-[#E63946] uppercase tracking-wider leading-none">
                  24×7 EMERGENCY
                </span>
                <span className="block text-sm font-bold text-[#0E1758] group-hover:text-[#E63946] transition-colors leading-tight font-poppins">
                  79870 25114
                </span>
              </div>
            </a>

            {/* Coral-Red Book Appointment CTA Button */}
            <button
              type="button"
              onClick={onOpenAppointment}
              className="bg-[#E63946] hover:bg-[#D42A31] text-white text-xs sm:text-[13.5px] font-bold px-5 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer flex items-center gap-2 font-poppins"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </button>

            {/* Patient Portal / Account Icon Button */}
            <button
              type="button"
              onClick={() => onOpenAuth('signin')}
              className="p-2.5 rounded-full text-[#475569] hover:text-[#1c2b8f] hover:bg-[#F1F5F9] transition-colors border border-transparent hover:border-[#E2E8F0]"
              title="Patient Portal Sign In"
              aria-label="Sign In"
            >
              <User className="w-5 h-5" />
            </button>

          </div>

          {/* Mobile Navigation Button & Emergency Call */}
          <div className="flex xl:hidden items-center gap-2">
            <a
              href="tel:+917987025114"
              className="w-9 h-9 rounded-full bg-[#E63946] flex items-center justify-center text-white shadow-sm"
              aria-label="Call Emergency 79870 25114"
            >
              <Phone className="w-4 h-4 fill-white" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-10 h-10 rounded-xl bg-[#F1F5F9] flex items-center justify-center text-[#1E293B] hover:text-[#1c2b8f] transition-colors"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* ========================================================
          3. MOBILE RESPONSIVE ACCORDION DRAWER (Clean Light Theme)
         ======================================================== */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden border-t border-[#E2E8F0] bg-white text-[#1E293B] px-5 py-6 space-y-5 shadow-2xl overflow-y-auto max-h-[82vh]"
          >
            {/* Quick Emergency Banner in Mobile Drawer */}
            <div className="bg-red-50 border border-red-200 rounded-2xl p-3.5 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold text-[#E63946] uppercase block">24×7 Trauma Helpline</span>
                <span className="text-base font-bold text-[#0E1758]">79870 25114</span>
              </div>
              <a
                href="tel:+917987025114"
                className="bg-[#E63946] text-white text-xs font-bold px-3.5 py-1.5 rounded-full shadow-sm"
              >
                Call Now
              </a>
            </div>

            {/* Mobile Nav Links List */}
            <div className="flex flex-col space-y-3.5 font-poppins">

              {/* Departments Accordion */}
              <div>
                <button
                  type="button"
                  onClick={() => setActiveDropdown(activeDropdown === 'mobile-dept' ? null : 'mobile-dept')}
                  className="flex items-center justify-between w-full font-bold text-base text-[#1E293B] py-1"
                >
                  <div className="flex items-center gap-2">
                    <Stethoscope className="w-4 h-4 text-[#1c2b8f]" />
                    <span>Clinical Departments</span>
                  </div>
                  <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'mobile-dept' ? 'rotate-180 text-[#1c2b8f]' : 'text-slate-400'}`} />
                </button>
                {activeDropdown === 'mobile-dept' && (
                  <div className="pl-3 mt-2.5 space-y-2 border-l-2 border-[#E2E8F0] max-h-60 overflow-y-auto">
                    {[...departmentsCol1, ...departmentsCol2, ...departmentsCol3].map(dept => (
                      <a
                        key={dept.title}
                        href={dept.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block text-xs font-semibold text-[#334155] hover:text-[#1c2b8f] py-1"
                      >
                        <div className="font-bold text-[#1E293B]">{dept.title}</div>
                        <div className="text-[10.5px] text-[#64748B] font-normal">{dept.hindi}</div>
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* Find a Doctor */}
              <a
                href="#doctors"
                onClick={() => setMobileMenuOpen(false)}
                className="block font-bold text-base text-[#1E293B] hover:text-[#1c2b8f] py-1"
              >
                Find a Doctor
              </a>

              {/* Patient Care Accordion */}
              <div>
                <button
                  type="button"
                  onClick={() => setActiveDropdown(activeDropdown === 'mobile-care' ? null : 'mobile-care')}
                  className="flex items-center justify-between w-full font-bold text-base text-[#1E293B] py-1"
                >
                  <div className="flex items-center gap-2">
                    <FlaskConical className="w-4 h-4 text-[#1c2b8f]" />
                    <span>Patient Care</span>
                  </div>
                  <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'mobile-care' ? 'rotate-180 text-[#1c2b8f]' : 'text-slate-400'}`} />
                </button>
                {activeDropdown === 'mobile-care' && (
                  <div className="pl-3 mt-2.5 space-y-2 border-l-2 border-[#E2E8F0]">
                    {patientCareItems.map(item => (
                      <a
                        key={item.title}
                        href={item.href}
                        onClick={(e) => {
                          setMobileMenuOpen(false);
                          if (item.isVideo && onOpenVideo) {
                            e.preventDefault();
                            onOpenVideo();
                          } else if (item.isBooking && onOpenAppointment) {
                            e.preventDefault();
                            onOpenAppointment();
                          }
                        }}
                        className="block text-xs font-semibold text-[#334155] hover:text-[#1c2b8f] py-1 capitalize"
                      >
                        {item.title}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* Gallery */}
              <a
                href="#about"
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenVideo) onOpenVideo();
                }}
                className="block font-bold text-base text-[#1E293B] hover:text-[#1c2b8f] py-1"
              >
                Gallery &amp; Facilities
              </a>

              {/* About */}
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="block font-bold text-base text-[#1E293B] hover:text-[#1c2b8f] py-1"
              >
                About Us
              </a>

              {/* Contact */}
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block font-bold text-base text-[#1E293B] hover:text-[#1c2b8f] py-1"
              >
                Contact &amp; Directions
              </a>
            </div>

            {/* Mobile Booking & Portal Buttons */}
            <div className="pt-4 border-t border-[#E2E8F0] flex flex-col gap-2.5">
              <button
                type="button"
                className="w-full bg-[#E63946] text-white py-3 rounded-full font-bold text-sm shadow-md flex items-center justify-center gap-2"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAppointment();
                }}
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment</span>
              </button>

              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  className="w-full py-2.5 border border-[#CBD5E1] rounded-full text-xs font-bold text-[#334155] hover:bg-[#F8FAFC]"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenAuth('signin');
                  }}
                >
                  Sign In
                </button>
                <button
                  type="button"
                  className="w-full py-2.5 bg-[#F1F5F9] rounded-full text-xs font-bold text-[#334155] hover:bg-[#E2E8F0]"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenAuth('signup');
                  }}
                >
                  Sign Up
                </button>
              </div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
}

