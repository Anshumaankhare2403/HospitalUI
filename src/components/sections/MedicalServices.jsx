import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import ServiceCard from '../ui/ServiceCard';
import { servicesData } from '../../data/services';

export default function MedicalServices({ onSelectService }) {
  const [activeCardId, setActiveCardId] = useState('lab');

  return (
    <section id="services" className="py-16 md:py-24 bg-white relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Heading */}
        <SectionHeading
          tag="Clinical Capabilities"
          title="Our Medical Services"
          subtitle="Comprehensive, technology-driven clinical services designed for high precision, emergency readiness, and personalized outpatient recovery."
          align="center"
        />

        {/* 4 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <ServiceCard
                service={service}
                isFeatured={activeCardId === service.id}
                onClick={() => {
                  setActiveCardId(service.id);
                  if (onSelectService) onSelectService(service);
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
