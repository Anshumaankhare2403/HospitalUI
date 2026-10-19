import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Clock, Star, X, PhoneCall, Calendar, ShieldCheck } from 'lucide-react';
import { doctorsData } from '../../data/doctors';
import Magnet from '../reactbits/Magnet';
import SpotlightCard from '../reactbits/SpotlightCard';

export default function Doctors({ searchFilter, onBookDoctor }) {
  const scrollerRef = useRef(null);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [showAllModal, setShowAllModal] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Filter doctors if a search filter is provided
  const displayedDoctors = React.useMemo(() => {
    if (!searchFilter) return doctorsData;
    const { name, specialty, onlyAvailable } = searchFilter;
    return doctorsData.filter((doc) => {
      const matchName = !name || doc.name.toLowerCase().includes(name.toLowerCase());
      const matchSpecialty =
        !specialty ||
        specialty === 'All' ||
        doc.specialty.toLowerCase().includes(specialty.toLowerCase()) ||
        doc.department.toLowerCase().includes(specialty.toLowerCase());
      const matchAvailable = !onlyAvailable || doc.available;
      return matchName && matchSpecialty && matchAvailable;
    });
  }, [searchFilter]);

  const updateScrollButtons = () => {
    if (scrollerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollerRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    updateScrollButtons();
    window.addEventListener('resize', updateScrollButtons);
    return () => window.removeEventListener('resize', updateScrollButtons);
  }, [displayedDoctors]);

  const scroll = (direction) => {
    if (scrollerRef.current) {
      const cardWidth = 350;
      const scrollAmount = direction === 'left' ? -cardWidth * 2 : cardWidth * 2;
      scrollerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      setTimeout(updateScrollButtons, 350);
    }
  };

  return (
    <section
      id="doctors"
      className="relative z-10 py-16 md:py-24 bg-[#f5f8fc] text-[#0f1a46] font-poppins overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ========================================================
            HEADER ROW: Eyebrow + Title + Top-Right Navigation Arrows
           ======================================================== */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            {/* Coral Eyebrow */}
            <div className="flex items-center gap-2 text-[#d42a31] text-xs font-bold tracking-[0.2em] uppercase mb-3">
              <span className="w-5 h-[2px] bg-[#d42a31] inline-block rounded-full" />
              <span>हमारे अनुभवी कंसल्टेंट</span>
            </div>

            {/* Main Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#0f1a46] tracking-tight leading-tight">
              Meet our consultants
            </h2>

            {/* Subtitle */}
            <p className="text-[#56618a] text-sm sm:text-base mt-2.5 max-w-2xl font-normal leading-relaxed">
              Experienced specialists with qualifications from BHU, CMC Vellore and beyond.
            </p>
          </div>

          {/* Scroller Controls: Circular Arrows in One Single Horizontal Line */}
          <div className="flex items-center gap-3 shrink-0 self-start md:self-end">
            <Magnet padding={15} magnetStrength={0.25}>
              <button
                type="button"
                onClick={() => scroll('left')}
                disabled={!canScrollLeft}
                aria-label="Previous doctors"
                className={`w-11 h-11 rounded-full border border-slate-300 bg-white flex items-center justify-center text-slate-700 transition-all duration-200 shadow-sm ${
                  canScrollLeft ? 'hover:bg-slate-50 hover:border-slate-400 cursor-pointer active:scale-95' : 'opacity-35 cursor-not-allowed'
                }`}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
            </Magnet>
            <Magnet padding={15} magnetStrength={0.25}>
              <button
                type="button"
                onClick={() => scroll('right')}
                disabled={!canScrollRight}
                aria-label="Next doctors"
                className={`w-11 h-11 rounded-full border border-slate-300 bg-white flex items-center justify-center text-slate-700 transition-all duration-200 shadow-sm ${
                  canScrollRight ? 'hover:bg-slate-50 hover:border-slate-400 cursor-pointer active:scale-95' : 'opacity-35 cursor-not-allowed'
                }`}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </Magnet>
          </div>
        </div>

        {/* ========================================================
            HORIZONTAL SCROLLER / CAROUSEL OF DOCTOR CARDS
           ======================================================== */}
        <div
          ref={scrollerRef}
          onScroll={updateScrollButtons}
          className="flex items-stretch gap-5 overflow-x-auto scroll-smooth pb-4 pt-2 scrollbar-none snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {displayedDoctors.map((doctor, index) => (
            <motion.div
              key={doctor.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="w-[275px] sm:w-[295px] lg:w-[285px] xl:w-[295px] shrink-0 snap-start bg-white rounded-3xl border border-[#d5deec] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1"
            >
              {/* Card Top: Photo or Initials Avatar */}
              <div className="h-64 sm:h-72 w-full relative overflow-hidden bg-slate-100">

                {/* Status Pill Badge (Top-Left) */}
                <div className="absolute top-3.5 left-3.5 z-10 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-slate-200 text-slate-700 text-[11px] font-semibold shadow-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  <span>{doctor.status}</span>
                </div>

                {doctor.photo ? (
                  <img
                    src={doctor.photo}
                    alt={doctor.name}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#e9f0fa] to-[#d8e5f8]">
                    <span className="text-6xl sm:text-7xl font-bold tracking-wider text-[#1c2b8f]/80 select-none font-sans">
                      {doctor.initials}
                    </span>
                  </div>
                )}
              </div>

              {/* Card Body: Details & Actions */}
              <div className="p-5 sm:p-6 flex flex-col justify-between flex-1 bg-white">
                <div>
                  {/* Doctor Name */}
                  <h3 className="text-lg sm:text-xl font-bold text-[#0f1a46] tracking-tight leading-snug">
                    {doctor.name}
                  </h3>

                  {/* Specialty in Coral Red */}
                  <p className="text-[#d42a31] text-xs sm:text-[13px] font-semibold mt-1 leading-snug">
                    {doctor.specialty}
                  </p>

                  {/* Qualifications */}
                  <p className="text-[#56618a] text-xs sm:text-[12.5px] leading-relaxed mt-2.5 line-clamp-2">
                    {doctor.degrees}
                  </p>

                  {/* Timings row */}
                  <div className="flex items-center gap-2 text-[#56618a] text-xs mt-3.5 font-mono">
                    <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span className="truncate">{doctor.timing}</span>
                  </div>
                </div>

                {/* Bottom Action Buttons: Book & Profile (Matching website theme) */}
                <div className="grid grid-cols-2 gap-2.5 mt-5 pt-2">
                  <button
                    type="button"
                    onClick={() => onBookDoctor(doctor)}
                    className="w-full py-2.5 px-4 rounded-full bg-[#1c2b8f] hover:bg-[#0e1758] text-white text-xs sm:text-sm font-bold transition-all shadow-xs active:scale-98 cursor-pointer text-center"
                  >
                    Book
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedDoctor(doctor)}
                    className="w-full py-2.5 px-4 rounded-full border border-[#d5deec] bg-[#f8fafc] hover:bg-[#e9f0fa] hover:border-[#1c2b8f] text-[#0f1a46] text-xs sm:text-sm font-semibold transition-all cursor-pointer text-center"
                  >
                    Profile
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ========================================================
            BOTTOM CENTER BUTTON: "View all doctors & OPD timings"
           ======================================================== */}
        <div className="mt-12 text-center">
          <Magnet padding={30} magnetStrength={0.25}>
            <button
              type="button"
              onClick={() => setShowAllModal(true)}
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#1c2b8f] hover:bg-[#0e1758] text-white font-bold text-sm sm:text-base transition-all duration-200 shadow-md hover:shadow-lg hover:scale-102 cursor-pointer"
            >
              <span>View all doctors &amp; OPD timings</span>
            </button>
          </Magnet>
        </div>

      </div>

      {/* ========================================================
          DOCTOR DETAIL PROFILE MODAL
         ======================================================== */}
      <AnimatePresence>
        {selectedDoctor && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-3xl border border-[#d5deec] max-w-lg w-full p-6 sm:p-8 text-[#0f1a46] relative shadow-2xl max-h-[90vh] overflow-y-auto"
            >
              <button
                type="button"
                onClick={() => setSelectedDoctor(null)}
                className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-all cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-4 mb-4">
                {selectedDoctor.photo ? (
                  <img
                    src={selectedDoctor.photo}
                    alt={selectedDoctor.name}
                    className="w-20 h-20 rounded-2xl object-cover object-top border border-slate-200 shadow-md"
                  />
                ) : (
                  <div className="w-20 h-20 rounded-2xl bg-[#e9f0fa] flex items-center justify-center border border-[#d5deec]">
                    <span className="text-2xl font-bold text-[#1c2b8f]">
                      {selectedDoctor.initials}
                    </span>
                  </div>
                )}
                <div>
                  <h3 className="text-xl font-bold text-[#0f1a46]">{selectedDoctor.name}</h3>
                  <p className="text-sm text-slate-500 font-hindi">{selectedDoctor.hindiName}</p>
                  <p className="text-[#d42a31] text-xs font-semibold mt-0.5">{selectedDoctor.specialty}</p>
                </div>
              </div>

              <div className="space-y-4 text-sm text-[#56618a] border-t border-slate-200 pt-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">
                    Qualifications &amp; Training
                  </span>
                  <p className="text-[#0f1a46] font-medium">{selectedDoctor.degrees}</p>
                </div>

                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">
                    Department
                  </span>
                  <p className="text-[#0f1a46] font-medium">{selectedDoctor.department}</p>
                </div>

                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">
                    OPD Schedule &amp; Timings
                  </span>
                  <p className="text-[#0f1a46] font-mono bg-slate-100 p-3 rounded-xl border border-slate-200 font-semibold">
                    {selectedDoctor.timing}
                  </p>
                </div>

                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">
                    About the Specialist
                  </span>
                  <p className="text-[#56618a] leading-relaxed text-xs sm:text-sm">
                    {selectedDoctor.bio}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 mt-6 pt-4 border-t border-slate-200">
                <a
                  href="tel:+919039033712"
                  className="py-3 px-5 rounded-full border border-[#d5deec] bg-[#f8fafc] hover:bg-[#e9f0fa] text-[#0f1a46] text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-all"
                >
                  <PhoneCall className="w-4 h-4 text-[#1c2b8f]" />
                  <span>Call 90390 33712</span>
                </a>
                <button
                  type="button"
                  onClick={() => {
                    const doc = selectedDoctor;
                    setSelectedDoctor(null);
                    onBookDoctor(doc);
                  }}
                  className="py-3 px-5 rounded-full bg-[#1c2b8f] hover:bg-[#0e1758] text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-white" />
                  <span>Book Slot</span>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ========================================================
          "VIEW ALL DOCTORS & OPD TIMINGS" FULL DIRECTORY MODAL
         ======================================================== */}
      <AnimatePresence>
        {showAllModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="bg-white rounded-3xl border border-[#d5deec] max-w-4xl w-full p-6 sm:p-8 text-[#0f1a46] relative shadow-2xl max-h-[88vh] flex flex-col"
            >
              <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                <div>
                  <h3 className="text-2xl font-bold text-[#0f1a46]">Full Doctors &amp; OPD Schedule</h3>
                  <p className="text-xs sm:text-sm text-[#56618a] mt-0.5">
                    13 verified specialist consultants at Vasudev Multispeciality Hospital
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setShowAllModal(false)}
                  className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-all cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Table / List of All 13 Doctors */}
              <div className="overflow-y-auto flex-1 divide-y divide-slate-100 my-4 pr-1">
                {doctorsData.map((doc) => (
                  <div
                    key={doc.id}
                    className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-slate-50 px-3 rounded-2xl transition-colors"
                  >
                    <div className="flex items-center gap-3.5">
                      {doc.photo ? (
                        <img
                          src={doc.photo}
                          alt={doc.name}
                          className="w-12 h-12 rounded-xl object-cover object-top border border-slate-200 shrink-0"
                        />
                      ) : (
                        <div className="w-12 h-12 rounded-xl bg-[#e9f0fa] flex items-center justify-center border border-[#d5deec] shrink-0">
                          <span className="text-sm font-bold text-[#1c2b8f]">{doc.initials}</span>
                        </div>
                      )}
                      <div>
                        <h4 className="font-bold text-[#0f1a46] text-base leading-snug">{doc.name}</h4>
                        <p className="text-[#d42a31] text-xs font-semibold">{doc.specialty}</p>
                        <p className="text-[#56618a] text-xs mt-0.5 line-clamp-1">{doc.degrees}</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0">
                      <div className="text-right">
                        <span className="text-xs font-mono text-[#0f1a46] font-bold block">{doc.timing}</span>
                        <span className="text-[10.5px] text-[#56618a] block">{doc.status}</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => {
                          setShowAllModal(false);
                          onBookDoctor(doc);
                        }}
                        className="py-2 px-5 rounded-full bg-[#1c2b8f] hover:bg-[#0e1758] text-white font-bold text-xs transition-all shadow-sm cursor-pointer"
                      >
                        Book
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs text-[#56618a]">
                <span>For emergency trauma or immediate ICU admission, call 24×7 Helpline: <strong className="text-[#d42a31]">79870 25114</strong></span>
                <a
                  href="tel:+919039033712"
                  className="text-[#1c2b8f] hover:underline font-bold"
                >
                  Call Reception 90390 33712
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
