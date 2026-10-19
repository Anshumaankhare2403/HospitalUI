import React from 'react';
import { motion } from 'framer-motion';
import { Star, Calendar, Clock, Award } from 'lucide-react';
import Button from './Button';

export default function DoctorCard({ doctor, onBook }) {
  return (
    <motion.div
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className="group bg-white rounded-3xl border border-[#d5deec] p-5 shadow-sm hover:shadow-md hover:border-[#1c2b8f]/40 flex flex-col justify-between transition-all duration-300"
    >
      {/* Top Image & Availability Badge */}
      <div className="relative mb-5 overflow-hidden rounded-2xl bg-slate-100 aspect-[4/4]">
        <img
          src={doctor.image}
          alt={doctor.name}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />

        {/* Availability Badge */}
        <div className="absolute top-3 left-3">
          <span
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md ${
              doctor.available
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'bg-slate-800/80 text-white/90'
            }`}
          >
            <span
              className={`w-1.5 h-1.5 rounded-full ${
                doctor.available ? 'bg-white animate-pulse' : 'bg-slate-400'
              }`}
            />
            {doctor.availabilityText}
          </span>
        </div>

        {/* Rating Overlay Pill */}
        <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-full shadow-sm flex items-center gap-1 text-xs font-bold text-[#0f1a46]">
          <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
          <span>{doctor.rating}</span>
          <span className="text-[#56618a] font-normal">({doctor.reviewsCount})</span>
        </div>
      </div>

      {/* Doctor Info */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <div className="text-xs font-bold text-[#d42a31] uppercase tracking-wider mb-1">
            {doctor.specialty}
          </div>
          <h3 className="text-lg font-bold font-poppins text-[#0f1a46] group-hover:text-[#1c2b8f] transition-colors mb-1.5">
            {doctor.name}
          </h3>
          <p className="text-xs text-[#56618a] line-clamp-2 mb-2 leading-relaxed">
            {doctor.degrees}
          </p>
          <div className="flex items-center gap-2 text-xs text-[#56618a] mb-4">
            <Award className="w-3.5 h-3.5 text-[#1c2b8f]" />
            <span>{doctor.experience}</span>
          </div>
        </div>

        {/* Book Button */}
        <Button
          variant="outline"
          size="sm"
          className="w-full group-hover:bg-[#1c2b8f] group-hover:text-white transition-all font-semibold"
          onClick={() => onBook(doctor)}
        >
          <Calendar className="w-3.5 h-3.5 mr-1.5" />
          Book Appointment
        </Button>
      </div>
    </motion.div>
  );
}

