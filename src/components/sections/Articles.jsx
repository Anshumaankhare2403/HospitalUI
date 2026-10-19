import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { articlesData } from '../../data/articles';

export default function Articles() {
  return (
    <section id="articles" className="py-16 md:py-24 bg-[#f5f8fc] relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Centered Heading */}
        <SectionHeading
          tag="Knowledge & Insights"
          title="Latest Articles & Health News"
          subtitle="Explore evidence-based guidance, preventive wellness tips, and modern clinical breakthroughs written by our physicians."
          align="center"
        />

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articlesData.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="group bg-white rounded-3xl border border-[#d5deec] overflow-hidden shadow-sm hover:shadow-md hover:border-[#1c2b8f]/40 flex flex-col transition-all duration-300"
            >
              {/* Image Container with category pill */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#1c2b8f] text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-sm">
                    {article.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 text-xs text-[#56618a] mb-3">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#1c2b8f]" />
                      {article.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#1c2b8f]" />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold font-poppins text-[#0f1a46] group-hover:text-[#1c2b8f] transition-colors leading-snug mb-2.5">
                    {article.title}
                  </h3>

                  <p className="text-xs text-[#56618a] leading-relaxed line-clamp-3 mb-6">
                    {article.description}
                  </p>
                </div>

                {/* Read More Link */}
                <div className="pt-4 border-t border-[#d5deec] flex items-center justify-between">
                  <span className="text-xs font-bold text-[#1c2b8f] group-hover:text-[#d42a31] inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read Full Article
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}
