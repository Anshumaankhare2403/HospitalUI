import React from 'react';
import { motion } from 'framer-motion';

export default function SectionHeading({
  tag = "Health Services",
  title = "Our Medical Services",
  subtitle = "Providing comprehensive, dependable specialist healthcare with modern facilities and expert medical teams.",
  align = "center", // 'center' | 'left'
  className = "",
}) {
  const isCenter = align === "center";

  return (
    <div className={`mb-10 md:mb-14 ${isCenter ? 'text-center max-w-2xl mx-auto' : 'max-w-xl'} ${className}`}>
      {tag && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#d42a31] bg-[#fdecec] px-3.5 py-1 rounded-full mb-3"
        >
          <span>—</span>
          <span>{tag}</span>
        </motion.div>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-2xl md:text-3xl lg:text-4xl font-bold font-poppins text-[#0f1a46] leading-tight mb-3"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-sm md:text-base text-[#56618a] leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}

