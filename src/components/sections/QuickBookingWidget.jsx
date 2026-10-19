import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calendar, 
  Search, 
  FileText, 
  PhoneCall, 
  Users, 
  FlaskConical, 
  ShieldCheck, 
  Ambulance, 
  CheckCircle2, 
  AlertCircle, 
  Download, 
  ArrowRight
} from 'lucide-react';
import { departmentsData } from '../../data/departments';
import { doctorsData } from '../../data/doctors';

export default function QuickBookingWidget({ onBookAppointment, onSearchDoctors }) {
  const [activeTab, setActiveTab] = useState('book'); // 'book' | 'find' | 'reports'

  // Tab 1: Book Appointment State
  const [speciality, setSpeciality] = useState('Any speciality');
  const [doctorId, setDoctorId] = useState('Any doctor');
  const [preferredDate, setPreferredDate] = useState('');

  // Tab 2: Find a Doctor State
  const [doctorQuery, setDoctorQuery] = useState('');
  const [searchSpecialty, setSearchSpecialty] = useState('All');
  const [availableOnly, setAvailableOnly] = useState(false);

  // Tab 3: Patient Reports State
  const [reportMobile, setReportMobile] = useState('');
  const [reportPin, setReportPin] = useState('');
  const [reportStatus, setReportStatus] = useState('idle'); // 'idle' | 'success' | 'error'
  const [reportMsg, setReportMsg] = useState('');

  // Filter doctors based on selected specialty
  const availableDoctors = useMemo(() => {
    if (speciality === 'Any speciality') {
      return doctorsData;
    }
    return doctorsData.filter(doc => doc.specialty.toLowerCase().includes(speciality.toLowerCase()));
  }, [speciality]);

  // Handle Tab 1 Booking
  const handleBookingSubmit = (e) => {
    e.preventDefault();
    const chosenDoctor = doctorsData.find(d => d.id === doctorId);
    if (onBookAppointment) {
      onBookAppointment({
        specialty: speciality === 'Any speciality' ? null : speciality,
        doctor: chosenDoctor || null,
        date: preferredDate || null,
      });
    }
  };

  // Handle Tab 2 Search
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (onSearchDoctors) {
      onSearchDoctors({
        name: doctorQuery,
        specialty: searchSpecialty,
        onlyAvailable: availableOnly,
      });
    }
    const el = document.getElementById('doctors');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // Handle Tab 3 Report Download
  const handleReportSubmit = (e) => {
    e.preventDefault();
    if (!reportMobile || reportMobile.length < 10) {
      setReportStatus('error');
      setReportMsg('Please enter a valid 10-digit registered mobile number.');
      return;
    }
    if (!reportPin || reportPin.length < 4) {
      setReportStatus('error');
      setReportMsg('Please enter your 4-digit billing PIN from the invoice receipt.');
      return;
    }

    setReportStatus('success');
    setReportMsg('Verified! Found 2 diagnostic reports (Blood Panel & Digital X-Ray). Downloading PDF...');
    setTimeout(() => {
      // Simulate file download
      const element = document.createElement('a');
      const file = new Blob([`Vasudev Multispeciality Hospital - Patient Diagnostic Report\nPatient Phone: ${reportMobile}\nStatus: Verified\nIssued: ${new Date().toLocaleDateString()}`], {type: 'text/plain'});
      element.href = URL.createObjectURL(file);
      element.download = `Vasudev_Diagnostic_Report_${reportMobile}.txt`;
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    }, 1200);
  };

  return (
    <div id="booking-widget" className="relative -mt-10 sm:-mt-14 mb-16 z-20 max-w-6xl mx-auto px-4 sm:px-6 font-poppins">
      
      {/* Outer Card Container - Pure Light Clinical Surface matching vasudevhospital.in */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        className="rounded-3xl sm:rounded-4xl shadow-xl transition-colors duration-300 overflow-hidden border border-[#d5deec] bg-white text-[#0f1a46]"
      >
        
        {/* ========================================================
            1. TABS STRIP (Book appointment / Find a doctor / Patient reports)
           ======================================================== */}
        <div className="flex flex-wrap items-center justify-between border-b border-[#d5deec] px-2 sm:px-6 bg-[#f8fafc]">
          
          <div className="flex items-center gap-1 sm:gap-6 overflow-x-auto w-full sm:w-auto">
            {/* Tab 1: Book appointment */}
            <button
              type="button"
              onClick={() => setActiveTab('book')}
              className={`flex items-center gap-2 py-4 px-3 sm:px-5 text-xs sm:text-sm font-bold transition-all relative whitespace-nowrap cursor-pointer ${
                activeTab === 'book'
                  ? 'text-[#0f1a46]'
                  : 'text-[#56618a] hover:text-[#0f1a46]'
              }`}
            >
              <Calendar className={`w-4 h-4 ${activeTab === 'book' ? 'text-[#d42a31]' : ''}`} />
              <span>Book appointment</span>
              {activeTab === 'book' && (
                <motion.div
                  layoutId="activeTabUnderline"
                  className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#d42a31]"
                />
              )}
            </button>

            {/* Tab 2: Find a doctor */}
            <button
              type="button"
              onClick={() => setActiveTab('find')}
              className={`flex items-center gap-2 py-4 px-3 sm:px-5 text-xs sm:text-sm font-bold transition-all relative whitespace-nowrap cursor-pointer ${
                activeTab === 'find'
                  ? 'text-[#0f1a46]'
                  : 'text-[#56618a] hover:text-[#0f1a46]'
              }`}
            >
              <Search className={`w-4 h-4 ${activeTab === 'find' ? 'text-[#1c2b8f]' : ''}`} />
              <span>Find a doctor</span>
              {activeTab === 'find' && (
                <motion.div
                  layoutId="activeTabUnderline"
                  className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#1c2b8f]"
                />
              )}
            </button>

            {/* Tab 3: Patient reports */}
            <button
              type="button"
              onClick={() => setActiveTab('reports')}
              className={`flex items-center gap-2 py-4 px-3 sm:px-5 text-xs sm:text-sm font-bold transition-all relative whitespace-nowrap cursor-pointer ${
                activeTab === 'reports'
                  ? 'text-[#0f1a46]'
                  : 'text-[#56618a] hover:text-[#0f1a46]'
              }`}
            >
              <FileText className={`w-4 h-4 ${activeTab === 'reports' ? 'text-[#1c2b8f]' : ''}`} />
              <span>Patient reports</span>
              {activeTab === 'reports' && (
                <motion.div
                  layoutId="activeTabUnderline"
                  className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#1c2b8f]"
                />
              )}
            </button>
          </div>

          <div className="hidden md:flex items-center gap-2 py-2 text-xs font-semibold text-[#56618a]">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Instant confirmation via SMS/WhatsApp</span>
          </div>

        </div>

        {/* ========================================================
            2. TAB CONTENTS & INTERACTIVE FORMS
           ======================================================== */}
        <div className="p-5 sm:p-7 bg-white">
          <AnimatePresence mode="wait">
            
            {/* TAB 1: BOOK APPOINTMENT (Matching Website Layout) */}
            {activeTab === 'book' && (
              <motion.form
                key="tab-book"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                onSubmit={handleBookingSubmit}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 items-end"
              >
                {/* 1. SPECIALITY DROPDOWN */}
                <div className="lg:col-span-4">
                  <label className="block text-[11px] font-extrabold uppercase tracking-wider mb-2 text-[#56618a]">
                    SPECIALITY
                  </label>
                  <select
                    value={speciality}
                    onChange={(e) => setSpeciality(e.target.value)}
                    className="w-full px-4 py-3 text-xs sm:text-sm rounded-xl font-medium transition-all focus:outline-none cursor-pointer border bg-[#f8fafc] border-[#d5deec] text-[#0f1a46] focus:border-[#1c2b8f] focus:bg-white"
                  >
                    <option value="Any speciality">Any speciality</option>
                    {departmentsData.map(dept => (
                      <option key={dept.id} value={dept.title} className="text-[#0f1a46]">
                        {dept.title}
                      </option>
                    ))}
                  </select>
                </div>

                {/* 2. DOCTOR DROPDOWN */}
                <div className="lg:col-span-3">
                  <label className="block text-[11px] font-extrabold uppercase tracking-wider mb-2 text-[#56618a]">
                    DOCTOR
                  </label>
                  <select
                    value={doctorId}
                    onChange={(e) => setDoctorId(e.target.value)}
                    className="w-full px-4 py-3 text-xs sm:text-sm rounded-xl font-medium transition-all focus:outline-none cursor-pointer border bg-[#f8fafc] border-[#d5deec] text-[#0f1a46] focus:border-[#1c2b8f] focus:bg-white"
                  >
                    <option value="Any doctor">Any doctor</option>
                    {availableDoctors.map(doc => (
                      <option key={doc.id} value={doc.id} className="text-[#0f1a46]">
                        {doc.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* 3. PREFERRED DATE */}
                <div className="lg:col-span-3">
                  <label className="block text-[11px] font-extrabold uppercase tracking-wider mb-2 text-[#56618a]">
                    PREFERRED DATE
                  </label>
                  <input
                    type="date"
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 text-xs sm:text-sm rounded-xl font-medium transition-all focus:outline-none cursor-pointer border bg-[#f8fafc] border-[#d5deec] text-[#0f1a46] focus:border-[#1c2b8f] focus:bg-white"
                  />
                </div>

                {/* 4. SOLID RED BOOK APPOINTMENT CTA BUTTON */}
                <div className="lg:col-span-2">
                  <button
                    type="submit"
                    className="w-full bg-[#d42a31] hover:bg-[#b91c1c] text-white font-bold text-xs sm:text-[13px] py-3.5 px-4 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95 whitespace-nowrap"
                  >
                    <Calendar className="w-4 h-4 shrink-0" />
                    <span>Book Appointment</span>
                  </button>
                </div>
              </motion.form>
            )}

            {/* TAB 2: FIND A DOCTOR */}
            {activeTab === 'find' && (
              <motion.form
                key="tab-find"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                onSubmit={handleSearchSubmit}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 items-end"
              >
                <div className="lg:col-span-5">
                  <label className="block text-[11px] font-extrabold uppercase tracking-wider mb-2 text-[#56618a]">
                    DOCTOR NAME OR CONDITION
                  </label>
                  <div className="relative">
                    <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#56618a]" />
                    <input
                      type="text"
                      placeholder="e.g. Dr. Varun, Kidney, Dialysis..."
                      value={doctorQuery}
                      onChange={(e) => setDoctorQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 text-xs sm:text-sm rounded-xl font-medium transition-all focus:outline-none border bg-[#f8fafc] border-[#d5deec] text-[#0f1a46] focus:border-[#1c2b8f] focus:bg-white"
                    />
                  </div>
                </div>

                <div className="lg:col-span-4">
                  <label className="block text-[11px] font-extrabold uppercase tracking-wider mb-2 text-[#56618a]">
                    SPECIALITY
                  </label>
                  <select
                    value={searchSpecialty}
                    onChange={(e) => setSearchSpecialty(e.target.value)}
                    className="w-full px-4 py-3 text-xs sm:text-sm rounded-xl font-medium transition-all focus:outline-none cursor-pointer border bg-[#f8fafc] border-[#d5deec] text-[#0f1a46] focus:border-[#1c2b8f] focus:bg-white"
                  >
                    <option value="All">All 16 Specialities</option>
                    {departmentsData.map(dept => (
                      <option key={dept.id} value={dept.title} className="text-[#0f1a46]">
                        {dept.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="lg:col-span-3">
                  <button
                    type="submit"
                    className="w-full bg-[#1c2b8f] hover:bg-[#14206d] text-white font-bold text-xs sm:text-[13px] py-3.5 px-4 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95 whitespace-nowrap"
                  >
                    <Search className="w-4 h-4 shrink-0" />
                    <span>Search Consultants</span>
                  </button>
                </div>
              </motion.form>
            )}

            {/* TAB 3: PATIENT REPORTS */}
            {activeTab === 'reports' && (
              <motion.form
                key="tab-reports"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                onSubmit={handleReportSubmit}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 items-end"
              >
                <div className="lg:col-span-5">
                  <label className="block text-[11px] font-extrabold uppercase tracking-wider mb-2 text-[#56618a]">
                    REGISTERED MOBILE NUMBER
                  </label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-[#56618a]">+91</span>
                    <input
                      type="tel"
                      placeholder="90390 33712"
                      maxLength={10}
                      value={reportMobile}
                      onChange={(e) => setReportMobile(e.target.value.replace(/\D/g, ''))}
                      className="w-full pl-12 pr-4 py-3 text-xs sm:text-sm rounded-xl font-medium transition-all focus:outline-none border bg-[#f8fafc] border-[#d5deec] text-[#0f1a46] focus:border-[#1c2b8f] focus:bg-white"
                    />
                  </div>
                </div>

                <div className="lg:col-span-4">
                  <label className="block text-[11px] font-extrabold uppercase tracking-wider mb-2 text-[#56618a]">
                    BILLING PIN / RECEIPT NO.
                  </label>
                  <input
                    type="password"
                    placeholder="4-digit PIN on your receipt"
                    maxLength={6}
                    value={reportPin}
                    onChange={(e) => setReportPin(e.target.value)}
                    className="w-full px-4 py-3 text-xs sm:text-sm rounded-xl font-medium transition-all focus:outline-none border bg-[#f8fafc] border-[#d5deec] text-[#0f1a46] focus:border-[#1c2b8f] focus:bg-white"
                  />
                </div>

                <div className="lg:col-span-3">
                  <button
                    type="submit"
                    className="w-full bg-[#1c2b8f] hover:bg-[#14206d] text-white font-bold text-xs sm:text-[13px] py-3.5 px-4 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95 whitespace-nowrap"
                  >
                    <Download className="w-4 h-4 shrink-0" />
                    <span>Download Report</span>
                  </button>
                </div>

                {reportStatus !== 'idle' && (
                  <div className={`col-span-12 mt-2 text-xs font-semibold flex items-center gap-2 p-3 rounded-xl ${
                    reportStatus === 'success' 
                      ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' 
                      : 'bg-red-50 text-red-700 border border-red-200'
                  }`}>
                    {reportStatus === 'success' ? <CheckCircle2 className="w-4 h-4 shrink-0" /> : <AlertCircle className="w-4 h-4 shrink-0" />}
                    <span>{reportMsg}</span>
                  </div>
                )}
              </motion.form>
            )}

          </AnimatePresence>
        </div>

        {/* ========================================================
            3. FOUR QUICK ACTION TILES (Emergency, Our doctors, Home sample, Cashless)
           ======================================================== */}
        <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-[#d5deec] bg-white divide-y lg:divide-y-0 lg:divide-x divide-[#d5deec]">
          
          {/* Tile 1: Emergency */}
          <a
            href="tel:+917987025114"
            className="p-4 sm:p-5 flex items-center gap-3.5 hover:bg-[#f8fafc] transition-colors group"
          >
            <div className="w-10 h-10 rounded-2xl bg-[#d42a31] text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
              <Ambulance className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs sm:text-[13.5px] font-bold leading-tight text-[#0f1a46]">
                Emergency
              </div>
              <div className="text-[11px] sm:text-xs font-semibold mt-0.5 text-[#d42a31]">
                79870 25114
              </div>
            </div>
          </a>

          {/* Tile 2: Our doctors */}
          <a
            href="#doctors"
            className="p-4 sm:p-5 flex items-center gap-3.5 hover:bg-[#f8fafc] transition-colors group"
          >
            <div className="w-10 h-10 rounded-2xl bg-[#e9f0fa] text-[#1c2b8f] flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs sm:text-[13.5px] font-bold leading-tight text-[#0f1a46]">
                Our doctors
              </div>
              <div className="text-[11px] sm:text-xs font-medium mt-0.5 text-[#56618a]">
                13 consultants
              </div>
            </div>
          </a>

          {/* Tile 3: Home sample */}
          <a
            href="tel:+919039033712"
            className="p-4 sm:p-5 flex items-center gap-3.5 hover:bg-[#f8fafc] transition-colors group"
          >
            <div className="w-10 h-10 rounded-2xl bg-[#e9f0fa] text-[#1c2b8f] flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
              <FlaskConical className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs sm:text-[13.5px] font-bold leading-tight text-[#0f1a46]">
                Home sample
              </div>
              <div className="text-[11px] sm:text-xs font-medium mt-0.5 text-[#56618a]">
                Blood collection
              </div>
            </div>
          </a>

          {/* Tile 4: Cashless */}
          <a
            href="#services"
            className="p-4 sm:p-5 flex items-center gap-3.5 hover:bg-[#f8fafc] transition-colors group"
          >
            <div className="w-10 h-10 rounded-2xl bg-[#e9f0fa] text-[#1c2b8f] flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs sm:text-[13.5px] font-bold leading-tight text-[#0f1a46]">
                Cashless
              </div>
              <div className="text-[11px] sm:text-xs font-medium mt-0.5 text-[#56618a]">
                TPA &amp; schemes
              </div>
            </div>
          </a>

        </div>

      </motion.div>

      {/* ========================================================
          4. FIVE KEY STATS ROW WITH VERTICAL DIVIDERS
         ======================================================== */}
      <div className="mt-8 bg-white/95 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-[#d5deec] shadow-sm grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-y-6 text-center items-center">
        
        {/* Stat 1: 24 Hour Emergency & ICU */}
        <div className="px-3 border-r border-[#d5deec] last:border-r-0">
          <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f1a46] font-poppins tracking-tight">
            24
          </div>
          <div className="text-xs sm:text-sm font-semibold text-[#56618a] mt-1.5 leading-tight">
            Hour emergency &amp; ICU
          </div>
        </div>

        {/* Stat 2: 13 Consultants */}
        <div className="px-3 border-r border-[#d5deec] last:border-r-0">
          <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f1a46] font-poppins tracking-tight">
            13
          </div>
          <div className="text-xs sm:text-sm font-semibold text-[#56618a] mt-1.5 leading-tight">
            Consultants
          </div>
        </div>

        {/* Stat 3: 16 Specialities */}
        <div className="px-3 border-r border-[#d5deec] last:border-r-0 sm:border-r-0 lg:border-r">
          <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f1a46] font-poppins tracking-tight">
            16
          </div>
          <div className="text-xs sm:text-sm font-semibold text-[#56618a] mt-1.5 leading-tight">
            Specialities
          </div>
        </div>

        {/* Stat 4: 10 Insurers & Schemes */}
        <div className="px-3 border-r border-[#d5deec] last:border-r-0">
          <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f1a46] font-poppins tracking-tight">
            10
          </div>
          <div className="text-xs sm:text-sm font-semibold text-[#56618a] mt-1.5 leading-tight">
            Insurers &amp; schemes
          </div>
        </div>

        {/* Stat 5: 5+ Years Serving Raipur */}
        <div className="px-3 col-span-2 sm:col-span-1">
          <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f1a46] font-poppins tracking-tight">
            5<span className="text-[#d42a31]">+</span>
          </div>
          <div className="text-xs sm:text-sm font-semibold text-[#56618a] mt-1.5 leading-tight">
            Years serving Raipur
          </div>
        </div>

      </div>

    </div>
  );
}
