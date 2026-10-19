import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Stethoscope, CheckCircle, SlidersHorizontal } from 'lucide-react';
import Button from '../ui/Button';

export default function DoctorSearch({ onSearch }) {
  const [name, setName] = useState('');
  const [specialty, setSpecialty] = useState('All');
  const [onlyAvailable, setOnlyAvailable] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ name, specialty, onlyAvailable });
    // Smooth scroll to doctors section
    const el = document.getElementById('doctors');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative -mt-6 sm:-mt-10 mb-16 z-20 max-w-5xl mx-auto px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-3xl p-5 sm:p-7 shadow-card border border-[#ECECEC]"
      >
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          
          {/* Doctor Name Input */}
          <div className="md:col-span-4">
            <label className="block text-xs font-semibold text-[#404040] mb-1.5">
              Doctor Name
            </label>
            <div className="relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#cbd5e1]" />
              <input
                type="text"
                placeholder="e.g. Dr. Vance, Elena..."
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 text-sm rounded-2xl bg-[#f8fafc] border border-transparent focus:border-[#1c2b8f] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1c2b8f]/20 text-[#404040] placeholder:text-[#cbd5e1] transition-all"
              />
            </div>
          </div>

          {/* Specialty Dropdown */}
          <div className="md:col-span-4">
            <label className="block text-xs font-semibold text-[#404040] mb-1.5">
              Medical Specialty
            </label>
            <div className="relative">
              <Stethoscope className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#cbd5e1]" />
              <select
                value={specialty}
                onChange={(e) => setSpecialty(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 text-sm rounded-2xl bg-[#f8fafc] border border-transparent focus:border-[#1c2b8f] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1c2b8f]/20 text-[#404040] transition-all cursor-pointer"
              >
                <option value="All">All Specialties</option>
                <option value="Cardiology">Cardiology</option>
                <option value="Neurology">Neurology</option>
                <option value="Gynecology">Gynecology</option>
                <option value="Pediatrics">Pediatrics</option>
              </select>
            </div>
          </div>

          {/* Availability Toggle */}
          <div className="md:col-span-2 flex items-center md:pt-5">
            <label className="inline-flex items-center gap-2 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={onlyAvailable}
                onChange={(e) => setOnlyAvailable(e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-10 h-6 bg-[#cbd5e1] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#1c2b8f] relative"></div>
              <span className="text-xs font-medium text-[#404040]">
                Available Today
              </span>
            </label>
          </div>

          {/* Search Button */}
          <div className="md:col-span-2 md:pt-5">
            <Button
              type="submit"
              variant="primary"
              className="w-full py-2.5 shadow-lift font-semibold"
            >
              Search Doctors
            </Button>
          </div>

        </form>
      </motion.div>
    </div>
  );
}

