import React from 'react';
import { motion } from 'framer-motion';
import { FlaskConical, Ambulance, CalendarCheck, PhoneCall, ArrowRight } from 'lucide-react';

const iconMap = {
  FlaskConical,
  Ambulance,
  CalendarCheck,
  PhoneCall,
};

export default function ServiceCard({
  service,
  isFeatured = false,
  onClick,
}) {
  const IconComponent = iconMap[service.iconName] || FlaskConical;

  return (
    <motion.div
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      onClick={onClick}
      className={`group relative rounded-3xl p-8 cursor-pointer transition-all duration-300 ${
        isFeatured
          ? 'bg-[#1c2b8f] text-white shadow-lift'
          : 'bg-white text-[#404040] border border-[#d5deec] shadow-soft hover:shadow-card hover:border-[#1c2b8f]/30'
      }`}
    >
      {/* Icon Container */}
      <div
        className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 ${
          isFeatured
            ? 'bg-white/15 text-white'
            : 'bg-[#F5F5F5] text-[#1c2b8f] group-hover:bg-[#1c2b8f]/10'
        }`}
      >
        <IconComponent className="w-7 h-7" />
      </div>

      {/* Title */}
      <h3
        className={`text-xl font-bold font-poppins mb-3 ${
          isFeatured ? 'text-white' : 'text-[#404040]'
        }`}
      >
        {service.title}
      </h3>

      {/* Description */}
      <p
        className={`text-sm leading-relaxed mb-6 ${
          isFeatured ? 'text-white/80' : 'text-[#666666]'
        }`}
      >
        {service.description}
      </p>

      {/* Learn More link */}
      <div
        className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider ${
          isFeatured ? 'text-white' : 'text-[#1c2b8f]'
        }`}
      >
        <span>Explore Service</span>
        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
      </div>
    </motion.div>
  );
}

