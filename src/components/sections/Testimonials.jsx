import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { testimonialsData } from '../../data/testimonials';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  const current = testimonialsData[currentIndex];

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-[#f5f8fc] relative z-10 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Centered Heading */}
        <SectionHeading
          tag="Patient Stories"
          title="What Our Patients Say"
          subtitle="Real experiences shared by patients and families who trust our specialized healthcare departments."
          align="center"
        />

        {/* Carousel Card Container - Crisp White Surface on Light Paper Canvas */}
        <div className="relative bg-white rounded-3xl p-8 sm:p-12 border border-[#d5deec] shadow-md">
          
          <div className="absolute top-6 right-8 text-[#1c2b8f]/10">
            <Quote className="w-16 h-16 stroke-1" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35 }}
              className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8 relative z-10"
            >
              {/* Patient Avatar */}
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden shrink-0 shadow-sm border-2 border-white">
                <img
                  src={current.avatar}
                  alt={current.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Review Text & Rating */}
              <div className="flex-1 text-center sm:text-left">
                {/* Star rating */}
                <div className="flex items-center justify-center sm:justify-start gap-1 mb-3">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-base sm:text-lg text-[#0f1a46] italic leading-relaxed mb-6 font-normal">
                  "{current.comment}"
                </p>

                <div>
                  <h4 className="text-base font-bold font-poppins text-[#0f1a46]">
                    {current.name}
                  </h4>
                  <div className="text-xs text-[#1c2b8f] font-semibold">
                    {current.role} · <span className="text-[#56618a]">{current.date}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Carousel Controls */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-[#d5deec]">
            {/* Dots indicator */}
            <div className="flex gap-2">
              {testimonialsData.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    currentIndex === idx ? 'w-8 bg-[#1c2b8f]' : 'w-2 bg-[#cbd5e1]'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Prev / Next Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full bg-white border border-[#d5deec] hover:border-[#1c2b8f] text-[#0f1a46] hover:text-[#1c2b8f] flex items-center justify-center shadow-xs transition-colors cursor-pointer"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full bg-white border border-[#d5deec] hover:border-[#1c2b8f] text-[#0f1a46] hover:text-[#1c2b8f] flex items-center justify-center shadow-xs transition-colors cursor-pointer"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
