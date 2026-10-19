import React from 'react';
import { motion } from 'framer-motion';
import { Play, CheckCircle2, Calendar, PhoneCall, ArrowRight, ShieldCheck, HeartPulse } from 'lucide-react';
import Button from '../ui/Button';
import CapsuleBackground from '../3d/CapsuleBackground';

export default function Hero({ onOpenAppointment, onOpenVideo, onOpenAuth }) {
  return (
    <section id="home" className="relative pt-8 pb-16 lg:pt-16 lg:pb-24 overflow-hidden bg-gradient-to-b from-white to-[#f5f8fc]">
      {/* 3D Animated Medical Capsules inside Hero */}
      <CapsuleBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2 bg-white border border-[#d5deec] px-4 py-1.5 rounded-full text-xs font-semibold text-[#0f1a46] shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#d42a31] animate-pulse" />
              <span>NABH Certified Hospital · Raipur</span>
              <span className="text-[#d5deec]">|</span>
              <span className="text-[#56618a] font-normal">PESHCO-2024-9227</span>
            </div>

            {/* Main Heading: "We care about your health" */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-poppins text-[#0f1a46] leading-[1.15] tracking-tight">
              <span className="text-[#1c2b8f]">We care</span> about your health
            </h1>

            {/* Supporting description */}
            <p className="text-base sm:text-lg text-[#56618a] leading-relaxed max-w-xl font-normal">
              Experience modern patient-centered medicine in Raipur. Connect with world-class specialists, access 24×7 emergency life-support, and manage consultations with seamless digital ease.
            </p>

            {/* Action buttons: "Book an appointment", "Watch videos" */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button
                variant="primary"
                size="lg"
                onClick={onOpenAppointment}
                className="shadow-md hover:shadow-lg font-bold"
              >
                Book an appointment
              </Button>

              <button
                type="button"
                onClick={onOpenVideo}
                className="inline-flex items-center gap-3 px-6 py-3.5 text-sm font-semibold text-[#0f1a46] hover:text-[#1c2b8f] group transition-colors cursor-pointer"
              >
                <div className="w-10 h-10 rounded-full bg-white border border-[#d5deec] group-hover:border-[#1c2b8f] shadow-sm flex items-center justify-center text-[#1c2b8f] transition-all group-hover:scale-105">
                  <Play className="w-4 h-4 fill-[#1c2b8f] ml-0.5" />
                </div>
                <span>Watch video tour</span>
              </button>
            </div>

            {/* Community membership link */}
            <div className="pt-4 flex items-center gap-3 text-xs text-[#56618a]">
              <div className="flex -space-x-2">
                <img className="w-7 h-7 rounded-full border-2 border-white object-cover shadow-2xs" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100" alt="Member" />
                <img className="w-7 h-7 rounded-full border-2 border-white object-cover shadow-2xs" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100" alt="Member" />
                <img className="w-7 h-7 rounded-full border-2 border-white object-cover shadow-2xs" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100" alt="Member" />
              </div>
              <button
                onClick={() => onOpenAuth('signup')}
                className="hover:text-[#1c2b8f] font-medium inline-flex items-center gap-1 group text-left cursor-pointer"
              >
                <span>Join our 10,000+ healthy community members in Raipur</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>

          {/* Right Hero Column: Doctor imagery with royal navy circular background & floating info cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 relative flex justify-center lg:justify-end"
          >
            {/* Primary Circular Background Container */}
            <div className="relative w-[280px] min-[390px]:w-[320px] sm:w-[380px] lg:w-[420px] h-[320px] min-[390px]:h-[360px] sm:h-[420px] lg:h-[460px]">
              
              {/* Vibrant Royal Navy circular backdrop */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#0e1758] via-[#1c2b8f] to-[#2563eb] opacity-95 shadow-xl" />
              
              {/* Secondary subtle decorative accent ring */}
              <div className="absolute -inset-4 rounded-full border-2 border-[#1c2b8f]/20 border-dashed animate-spin-slow pointer-events-none" />

              {/* Doctor Cutout Image */}
              <img
                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800"
                alt="Lead Doctor"
                className="absolute inset-x-0 bottom-0 mx-auto h-[105%] w-auto object-cover object-top rounded-b-full filter drop-shadow-2xl"
              />

              {/* Floating Card 1: Qualified Doctors */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="absolute -top-3 left-0 sm:-left-6 lg:-left-10 bg-white/95 backdrop-blur-md rounded-2xl p-2.5 sm:p-3.5 shadow-lg border border-[#d5deec] flex items-center gap-2.5 sm:gap-3 z-20"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-[#e9f0fa] text-[#1c2b8f] flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5]" />
                </div>
                <div>
                  <div className="text-[11px] sm:text-xs font-bold text-[#0f1a46]">13+ Consultants</div>
                  <div className="text-[10px] sm:text-[11px] text-[#56618a]">Qualified Specialists</div>
                </div>
              </motion.div>

              {/* Floating Card 2: Instant Booking */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute bottom-6 -left-2 sm:-left-6 lg:-left-12 bg-white/95 backdrop-blur-md rounded-2xl p-2.5 sm:p-3.5 shadow-lg border border-[#d5deec] flex items-center gap-2.5 sm:gap-3 z-20"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <div className="text-[11px] sm:text-xs font-bold text-[#0f1a46]">Instant Booking</div>
                  <div className="text-[10px] sm:text-[11px] text-emerald-600 font-semibold">OPD Open Today</div>
                </div>
              </motion.div>

              {/* Floating Card 3: 24/7 Helpline */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="absolute -bottom-3 -right-2 sm:-right-6 lg:-right-8 bg-white/95 backdrop-blur-md rounded-2xl p-2.5 sm:p-3.5 shadow-lg border border-[#d5deec] flex items-center gap-2.5 sm:gap-3 z-20"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-[#d42a31] text-white flex items-center justify-center shrink-0 shadow-sm">
                  <PhoneCall className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <div className="text-[11px] sm:text-xs font-bold text-[#0f1a46]">24×7 Emergency</div>
                  <div className="text-[10px] sm:text-[11px] text-[#d42a31] font-bold">79870 25114</div>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
