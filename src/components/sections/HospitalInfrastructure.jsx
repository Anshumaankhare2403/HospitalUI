import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, X, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import SpotlightCard from '../reactbits/SpotlightCard';
import Magnet from '../reactbits/Magnet';
import CountUp from '../reactbits/CountUp';
import ShinyText from '../reactbits/ShinyText';

// Local high-resolution photos
import otCArmImg from '../../assets/photos/ot-c-arm.jpg';
import opTheatreImg from '../../assets/photos/operation-theatre.jpg';
import icuImg from '../../assets/photos/icu.jpg';
import genWardNursingImg from '../../assets/photos/general-ward.jpg';
import genWardImg from '../../assets/photos/general-ward-2.jpg';
import semiPrivateImg from '../../assets/photos/semi-private-ward.jpg';
import wardRoomImg from '../../assets/photos/ward-room.jpg';
import xrayImg from '../../assets/photos/xray-room.jpg';

export const galleryItems = [
  {
    id: 'ot-c-arm',
    title: 'Modular operation theatre with C-arm',
    category: 'Operation theatres',
    image: otCArmImg,
    description: 'Ultra-clean laminar airflow modular OT equipped with Siemens C-arm fluoroscopy for high-precision orthopedic and laparoscopic surgeries.',
  },
  {
    id: 'op-theatre',
    title: 'Operation theatre',
    category: 'Operation theatres',
    image: opTheatreImg,
    description: 'Dedicated surgical suite for elective general surgeries, ENT procedures, and emergency trauma operations.',
  },
  {
    id: 'icu',
    title: 'Intensive care unit (ICU)',
    category: 'ICU & critical care',
    image: icuImg,
    description: '13-bed advanced critical care unit with multi-parameter monitors, invasive ventilators, central oxygen, and continuous intensivist oversight.',
  },
  {
    id: 'gen-ward-nursing',
    title: 'General ward – nursing station',
    category: 'Wards & rooms',
    image: genWardNursingImg,
    description: 'Spacious, well-ventilated patient recovery ward with continuous nurse monitoring, call bells, and hygienic sanitization protocols.',
  },
  {
    id: 'semi-private',
    title: 'Semi-private ward',
    category: 'Wards & rooms',
    image: semiPrivateImg,
    description: 'Air-conditioned shared rooms with patient privacy curtains, individual attendant beds, and dedicated sanitation amenities.',
  },
  {
    id: 'gen-ward',
    title: 'General ward',
    category: 'Wards & rooms',
    image: genWardImg,
    description: 'Clean and affordable inpatient accommodations supported by daily rounds from specialist consultants.',
  },
  {
    id: 'ward-room',
    title: 'Ward room with attendant beds',
    category: 'Wards & rooms',
    image: wardRoomImg,
    description: 'Comfortable inpatient recovery facilities designed with comfortable cots for family attendants and immediate nursing access.',
  },
  {
    id: 'xray-room',
    title: 'Digital X-ray & CT suite',
    category: 'Diagnostics',
    image: xrayImg,
    description: 'In-house high-frequency digital radiography and multi-slice helical CT scanner reported by certified DNB radiologists.',
  },
];

export default function HospitalInfrastructure() {
  const [activePhotoIndex, setActivePhotoIndex] = useState(null);
  const [isGalleryModalOpen, setIsGalleryModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Operation theatres', 'ICU & critical care', 'Wards & rooms', 'Diagnostics'];

  const filteredGallery = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  const openLightbox = (index) => {
    setActivePhotoIndex(index);
  };

  const nextPhoto = () => {
    setActivePhotoIndex((prev) => (prev + 1) % galleryItems.length);
  };

  const prevPhoto = () => {
    setActivePhotoIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
  };

  return (
    <section
      id="facilities"
      className="relative z-10 py-16 md:py-24 bg-[#f5f8fc] text-[#0f1a46] font-poppins overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ========================================================
            HEADER ROW: Eyebrow + Title + "Open photo gallery →" Button
           ======================================================== */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            {/* Coral Eyebrow */}
            <div className="flex items-center gap-2.5 text-[#d42a31] text-xs font-bold tracking-[0.2em] uppercase mb-3">
              <span className="w-5 h-[2px] bg-[#d42a31] inline-block rounded-full" />
              <span>INFRASTRUCTURE · सुविधाएँ</span>
            </div>

            {/* Main Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#0f1a46] tracking-tight leading-tight">
              Inside the hospital
            </h2>

            {/* Subtitle */}
            <p className="text-[#56618a] text-sm sm:text-base mt-2.5 max-w-2xl font-normal leading-relaxed">
              Real photos of our operation theatres, ICU, wards and diagnostics.
            </p>
          </div>

          {/* Action Button: "Open photo gallery →" with React Bits Magnet */}
          <div className="shrink-0">
            <Magnet padding={30} magnetStrength={0.3}>
              <button
                type="button"
                onClick={() => setIsGalleryModalOpen(true)}
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full border border-[#d5deec] bg-white hover:bg-slate-50 hover:border-[#1c2b8f] text-[#1c2b8f] text-sm font-semibold transition-all duration-200 shadow-sm group cursor-pointer"
              >
                <span>Open photo gallery</span>
                <span className="text-base group-hover:translate-x-1 transition-transform duration-200">
                  &rarr;
                </span>
              </button>
            </Magnet>
          </div>
        </div>

        {/* ========================================================
            BENTO GRID (Matching Screenshot 2 Pixel-Perfect)
           ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">

          {/* --------------------------------------------------------
              LEFT COLUMN (lg:col-span-6):
              Top: Modular OT with C-arm (Large Tile)
              Bottom: Split 2 tiles: General ward & Semi-private ward
             -------------------------------------------------------- */}
          <div className="lg:col-span-6 flex flex-col gap-5">

            {/* Tile 1: Modular OT with C-arm (Large) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              onClick={() => openLightbox(0)}
              className="group relative h-72 sm:h-80 md:h-[340px] rounded-3xl overflow-hidden border border-slate-200/90 hover:border-[#1c2b8f]/50 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <img
                src={otCArmImg}
                alt="Modular operation theatre with C-arm"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

              {/* Bottom pill label */}
              <div className="absolute bottom-4 left-4 z-10 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#e2e8f0]/95 backdrop-blur-md border border-white/80 text-[#0f1a46] text-xs sm:text-sm font-semibold shadow-md transition-colors">
                <span>Modular operation theatre with C-arm</span>
              </div>
            </motion.div>

            {/* Bottom 2 Split Tiles: General Ward & Semi-Private Ward */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 flex-1">

              {/* Tile 4: General ward – nursing station */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                onClick={() => openLightbox(3)}
                className="group relative h-52 sm:h-60 rounded-3xl overflow-hidden border border-slate-200/90 hover:border-[#1c2b8f]/50 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <img
                  src={genWardNursingImg}
                  alt="General ward – nursing station"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 z-10 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#e2e8f0]/95 backdrop-blur-md border border-white/80 text-[#0f1a46] text-xs font-semibold shadow-md transition-colors">
                  <span>General ward – nursing station</span>
                </div>
              </motion.div>

              {/* Tile 5: Semi-private ward */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.15 }}
                onClick={() => openLightbox(4)}
                className="group relative h-52 sm:h-60 rounded-3xl overflow-hidden border border-slate-200/90 hover:border-[#1c2b8f]/50 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <img
                  src={semiPrivateImg}
                  alt="Semi-private ward"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 z-10 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#e2e8f0]/95 backdrop-blur-md border border-white/80 text-[#0f1a46] text-xs font-semibold shadow-md transition-colors">
                  <span>Semi-private ward</span>
                </div>
              </motion.div>

            </div>

          </div>

          {/* --------------------------------------------------------
              MIDDLE COLUMN (lg:col-span-3):
              Top: Stat Card "13 services run 24x7" with React Bits SpotlightCard & CountUp
              Bottom: Intensive care unit (ICU) (Tall Card)
             -------------------------------------------------------- */}
          <div className="lg:col-span-3 flex flex-col gap-5">

            {/* Tile 2: Stat Card (13 services run 24x7) with React Bits SpotlightCard */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="h-full"
            >
              <SpotlightCard
                spotlightColor="rgba(242, 183, 51, 0.18)"
                borderColor="rgba(242, 183, 51, 0.4)"
                className="!bg-[#0e1758] rounded-3xl p-6 sm:p-7 border border-[#1e2a78] shadow-xl flex flex-col justify-between h-full text-white"
              >
                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
                    <CountUp to={13} duration={1.2} /> services run<br />24×7
                  </h3>
                  <p className="text-slate-200 text-xs sm:text-[13px] leading-relaxed mt-3">
                    Emergency, ICU, OT, dialysis, lab, pharmacy and ambulance.
                  </p>
                </div>

                <div className="mt-5">
                  <Magnet padding={15} magnetStrength={0.25}>
                    <a
                      href="#facilities"
                      onClick={(e) => {
                        e.preventDefault();
                        setIsGalleryModalOpen(true);
                      }}
                      className="inline-flex items-center gap-1.5 text-[#F2B733] font-semibold text-xs sm:text-sm hover:underline cursor-pointer group"
                    >
                      <span>See all facilities</span>
                      <span className="text-base group-hover:translate-x-1 transition-transform duration-200">
                        &rarr;
                      </span>
                    </a>
                  </Magnet>
                </div>
              </SpotlightCard>
            </motion.div>

            {/* Tile 3: Intensive care unit (ICU) (Tall Center Tile) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              onClick={() => openLightbox(2)}
              className="group relative flex-1 min-h-[300px] sm:min-h-[360px] rounded-3xl overflow-hidden border border-slate-200/90 hover:border-[#1c2b8f]/50 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <img
                src={icuImg}
                alt="Intensive care unit (ICU)"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 z-10 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#e2e8f0]/95 backdrop-blur-md border border-white/80 text-[#0f1a46] text-xs font-semibold shadow-md transition-colors">
                <span>Intensive care unit (ICU)</span>
              </div>
            </motion.div>

          </div>

          {/* --------------------------------------------------------
              RIGHT COLUMN (lg:col-span-3):
              Tile: Operation theatre
              Tile: General ward
              Tile: Ward room with attendant beds
             -------------------------------------------------------- */}
          <div className="lg:col-span-3 flex flex-col gap-5">

            {/* Tile 6: Operation theatre */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              onClick={() => openLightbox(1)}
              className="group relative h-48 sm:h-52 rounded-3xl overflow-hidden border border-slate-200/90 hover:border-[#1c2b8f]/50 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <img
                src={opTheatreImg}
                alt="Operation theatre"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 z-10 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#e2e8f0]/95 backdrop-blur-md border border-white/80 text-[#0f1a46] text-xs font-semibold shadow-md transition-colors">
                <span>Operation theatre</span>
              </div>
            </motion.div>

            {/* Tile 7: General ward */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              onClick={() => openLightbox(5)}
              className="group relative h-48 sm:h-52 rounded-3xl overflow-hidden border border-slate-200/90 hover:border-[#1c2b8f]/50 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <img
                src={genWardImg}
                alt="General ward"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 z-10 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#e2e8f0]/95 backdrop-blur-md border border-white/80 text-[#0f1a46] text-xs font-semibold shadow-md transition-colors">
                <span>General ward</span>
              </div>
            </motion.div>

            {/* Tile 8: Ward room with attendant beds */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              onClick={() => openLightbox(6)}
              className="group relative h-48 sm:h-52 rounded-3xl overflow-hidden border border-slate-200/90 hover:border-[#1c2b8f]/50 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <img
                src={wardRoomImg}
                alt="Ward room with attendant beds"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 z-10 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#e2e8f0]/95 backdrop-blur-md border border-white/80 text-[#0f1a46] text-xs font-semibold shadow-md transition-colors">
                <span>Ward room with attendant beds</span>
              </div>
            </motion.div>

          </div>

        </div>

      </div>

      {/* ========================================================
          FULL PHOTO LIGHTBOX VIEWER
         ======================================================== */}
      <AnimatePresence>
        {activePhotoIndex !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative max-w-4xl w-full bg-[#0C142E] rounded-3xl border border-white/15 overflow-hidden shadow-2xl"
            >
              <button
                type="button"
                onClick={() => setActivePhotoIndex(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-all"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative h-[55vh] sm:h-[65vh] w-full bg-black flex items-center justify-center">
                <img
                  src={galleryItems[activePhotoIndex].image}
                  alt={galleryItems[activePhotoIndex].title}
                  className="w-full h-full object-contain"
                />

                {/* Left/Right Lightbox Arrows */}
                <button
                  type="button"
                  onClick={prevPhoto}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-all"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  type="button"
                  onClick={nextPhoto}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-all"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              <div className="p-6 bg-[#0C142E] border-t border-white/10">
                <span className="text-xs font-bold text-[#FF5C5C] uppercase tracking-wider block mb-1">
                  {galleryItems[activePhotoIndex].category}
                </span>
                <h3 className="text-xl font-bold text-white">
                  {galleryItems[activePhotoIndex].title}
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm mt-1 leading-relaxed">
                  {galleryItems[activePhotoIndex].description}
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ========================================================
          FULL PHOTO GALLERY MODAL ("Open photo gallery")
         ======================================================== */}
      <AnimatePresence>
        {isGalleryModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="bg-white rounded-3xl border border-[#d5deec] max-w-5xl w-full p-6 sm:p-8 text-[#0f1a46] relative shadow-2xl max-h-[90vh] flex flex-col"
            >
              <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                <div>
                  <h3 className="text-2xl font-bold text-[#0f1a46]">Hospital Infrastructure Gallery</h3>
                  <p className="text-xs sm:text-sm text-[#56618a] mt-0.5">
                    Authentic facility photographs of Vasudev Multispeciality Hospital, Raipur
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsGalleryModalOpen(false)}
                  className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-all cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Category Filter Pills */}
              <div className="flex items-center gap-2 overflow-x-auto py-4 border-b border-slate-200 scrollbar-none">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                      activeCategory === cat
                        ? 'bg-[#1c2b8f] text-white shadow-sm'
                        : 'bg-slate-100 border border-slate-200 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Gallery Grid */}
              <div className="overflow-y-auto flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-4 pr-1">
                {filteredGallery.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => openLightbox(galleryItems.findIndex((g) => g.id === item.id))}
                    className="group relative h-48 rounded-2xl overflow-hidden border border-slate-200 hover:border-[#1c2b8f]/50 cursor-pointer shadow-md"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent pointer-events-none" />
                    <div className="absolute bottom-3 left-3 right-3">
                      <span className="text-[10px] text-[#ff6565] font-bold uppercase tracking-wider block">
                        {item.category}
                      </span>
                      <h4 className="text-xs sm:text-sm font-bold text-white truncate">
                        {item.title}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs text-[#56618a]">
                <span>NABH Certified Hospital · Daganiya, Raipur (Chhattisgarh)</span>
                <a href="tel:+917987025114" className="text-[#d42a31] font-bold hover:underline">
                  24×7 Emergency Helpline: 79870 25114
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
