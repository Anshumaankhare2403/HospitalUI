import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function TodayOpdAndTrust({ onOpenAppointment, onExploreDoctors }) {
  const [raipurTime, setRaipurTime] = useState('10:48 PM');
  const [currentDay, setCurrentDay] = useState('Sunday');
  const [isOpdActive, setIsOpdActive] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const timeString = now.toLocaleTimeString('en-US', {
          timeZone: 'Asia/Kolkata',
          hour: 'numeric',
          minute: '2-digit',
          hour12: true,
        });
        const dayString = now.toLocaleDateString('en-US', {
          timeZone: 'Asia/Kolkata',
          weekday: 'long',
        });
        setRaipurTime(timeString);
        setCurrentDay(dayString);

        // Check if current hour in Raipur is between 12 PM (12) and 3 PM (15)
        const kolkataDate = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }));
        const hours = kolkataDate.getHours();
        setIsOpdActive(hours >= 12 && hours < 15);
      } catch (e) {
        // Fallback gracefully
        setRaipurTime('10:48 PM');
        setCurrentDay('Sunday');
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 30000);
    return () => clearInterval(interval);
  }, []);

  const handleScrollToDoctors = (e) => {
    if (e) e.preventDefault();
    if (onExploreDoctors) {
      onExploreDoctors();
    }
    const el = document.getElementById('doctors');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative z-10 pt-10 pb-6 md:pt-14 md:pb-8 bg-[#f5f8fc] text-[#0f1a46] font-poppins overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">

          {/* ========================================================
              LEFT CARD: TODAY'S OPD · ओपीडी समय (Navy Reception Board)
             ======================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-7 bg-[#0d1550] rounded-3xl p-6 sm:p-8 border border-[#1e2a78] shadow-xl flex flex-col justify-between text-white"
          >
            <div>
              {/* Header: Eyebrow + Raipur Time */}
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-[#ff6565] text-[11px] sm:text-xs font-bold tracking-[0.16em] uppercase">
                  <span>TODAY'S OPD</span>
                  <span className="text-white/40">·</span>
                  <span>ओपीडी समय</span>
                </div>
                <div className="text-slate-400 font-medium text-xs sm:text-sm">
                  Raipur time <span className="text-white font-mono font-bold ml-1">{raipurTime}</span>
                </div>
              </div>

              {/* Day of the Week */}
              <h3 className="text-3xl sm:text-4xl font-bold text-white mt-2 tracking-tight">
                {currentDay}
              </h3>

              {/* Dotted/Subtle Divider */}
              <div className="border-t border-white/15 my-5" />

              {/* Doctor Row 1: Dr. Varun Agrawal */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 py-2">
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-white tracking-tight">
                    Dr. Varun Agrawal
                  </h4>
                  <p className="text-slate-300 text-xs sm:text-[13px] mt-0.5">
                    Nephrologist · Kidney &amp; Diabetes Specialist
                  </p>
                </div>
                <div className="flex items-center gap-3.5 shrink-0 self-start sm:self-auto">
                  <span className="text-white font-bold font-mono text-sm sm:text-[15px] tracking-wide">
                    12:00 PM – 3:00 PM
                  </span>
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${
                      isOpdActive
                        ? 'bg-emerald-950/80 border-emerald-500/40 text-emerald-300'
                        : 'bg-[#1C2649] border-white/10 text-[#8E9BCE]'
                    }`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        isOpdActive ? 'bg-emerald-400 animate-pulse' : 'bg-[#6D7BB0]'
                      }`}
                    />
                    <span>{isOpdActive ? 'Available now' : 'OPD over today'}</span>
                  </span>
                </div>
              </div>

              {/* Divider between doctors */}
              <div className="border-t border-white/10 my-3" />

              {/* Doctor Row 2: Dr. Nayna Goyal */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 py-2">
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-white tracking-tight">
                    Dr. Nayna Goyal
                  </h4>
                  <p className="text-slate-300 text-xs sm:text-[13px] mt-0.5">
                    Radiologist
                  </p>
                </div>
                <div className="flex items-center gap-3.5 shrink-0 self-start sm:self-auto">
                  <span className="text-white font-bold font-mono text-sm sm:text-[15px] tracking-wide">
                    12:00 PM – 3:00 PM
                  </span>
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${
                      isOpdActive
                        ? 'bg-emerald-950/80 border-emerald-500/40 text-emerald-300'
                        : 'bg-[#1C2649] border-white/10 text-[#8E9BCE]'
                    }`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        isOpdActive ? 'bg-emerald-400 animate-pulse' : 'bg-[#6D7BB0]'
                      }`}
                    />
                    <span>{isOpdActive ? 'Available now' : 'OPD over today'}</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Footer Notice */}
            <div className="pt-6 mt-4 border-t border-white/15 flex flex-wrap items-center justify-between gap-3 text-xs sm:text-[13.5px] text-slate-300">
              <p className="leading-relaxed">
                11 more consultants see patients by appointment. Call{' '}
                <a
                  href="tel:+919039033712"
                  className="text-white font-bold underline hover:text-[#F2B733] transition-colors"
                >
                  90390 33712
                </a>{' '}
                to confirm.
              </p>
              <a
                href="#doctors"
                onClick={handleScrollToDoctors}
                className="text-white font-semibold hover:text-[#F2B733] inline-flex items-center gap-1.5 transition-colors underline shrink-0 cursor-pointer"
              >
                <span>Full OPD schedule</span>
                <span className="text-base">&rarr;</span>
              </a>
            </div>
          </motion.div>

          {/* ========================================================
              RIGHT CARD: WHY FAMILIES CHOOSE US (Crisp White Card)
             ======================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-[#d5deec] shadow-sm flex flex-col justify-between hover:shadow-md transition-all"
          >
            <div>
              {/* Header: Eyebrow + Title */}
              <div className="text-[#d42a31] text-[11px] sm:text-xs font-bold tracking-[0.16em] uppercase">
                WHY FAMILIES CHOOSE US
              </div>
              <h3 className="text-3xl sm:text-4xl font-bold text-[#0f1a46] mt-2 tracking-tight">
                Care you can trust
              </h3>

              {/* 4 Trust Feature Items */}
              <div className="mt-6 space-y-5">

                {/* 1. NABH certified */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-[#e9f0fa] border border-[#d5deec]/60 flex items-center justify-center text-[#1c2b8f] shrink-0 shadow-xs">
                    <svg
                      className="w-5 h-5 text-[#1c2b8f]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-[#0f1a46] tracking-tight leading-snug">
                      NABH certified
                    </h4>
                    <p className="text-[#56618a] text-xs sm:text-[13px] leading-relaxed mt-0.5">
                      Assessed by the Quality Council of India for patient safety and quality.
                    </p>
                  </div>
                </div>

                {/* 2. 24x7 emergency & ICU */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-[#e9f0fa] border border-[#d5deec]/60 flex items-center justify-center text-[#1c2b8f] shrink-0 shadow-xs">
                    <svg
                      className="w-5 h-5 text-[#1c2b8f]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
                      <path d="M15 18H9" />
                      <path d="M19 18h2a1 1 0 0 0 1-1v-3.28a1 1 0 0 0-.684-.948l-2.432-.81a2 2 0 0 1-1.384-1.9V8a2 2 0 0 0-2-2h-2v12" />
                      <circle cx="7" cy="18" r="2" />
                      <circle cx="17" cy="18" r="2" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-[#0f1a46] tracking-tight leading-snug">
                      24×7 emergency &amp; ICU
                    </h4>
                    <p className="text-[#56618a] text-xs sm:text-[13px] leading-relaxed mt-0.5">
                      Ambulance, ICU, pharmacy and lab never close.
                    </p>
                  </div>
                </div>

                {/* 3. Apollo Dialysis Clinic */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-[#e9f0fa] border border-[#d5deec]/60 flex items-center justify-center text-[#1c2b8f] shrink-0 shadow-xs">
                    <svg
                      className="w-5 h-5 text-[#1c2b8f]"
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
                  <div>
                    <h4 className="text-base font-bold text-[#0f1a46] tracking-tight leading-snug">
                      Apollo Dialysis Clinic
                    </h4>
                    <p className="text-[#56618a] text-xs sm:text-[13px] leading-relaxed mt-0.5">
                      Ultramodern haemodialysis unit with CAPD support.
                    </p>
                  </div>
                </div>

                {/* 4. Cashless & affordable */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-[#e9f0fa] border border-[#d5deec]/60 flex items-center justify-center text-[#1c2b8f] shrink-0 shadow-xs">
                    <svg
                      className="w-5 h-5 text-[#1c2b8f]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M6 3h12" />
                      <path d="M6 8h12" />
                      <path d="m6 13 8.5 8" />
                      <path d="M6 13h3c3.5 0 6-2 6-5s-2.5-5-6-5" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-[#0f1a46] tracking-tight leading-snug">
                      Cashless &amp; affordable
                    </h4>
                    <p className="text-[#56618a] text-xs sm:text-[13px] leading-relaxed mt-0.5">
                      Ayushman Bharat, CGHS, ESIC and 7 insurers and TPAs.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
