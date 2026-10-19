import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play } from 'lucide-react';

export default function VideoModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-[#d5deec]"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-colors"
            aria-label="Close video"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="relative aspect-video bg-black flex items-center justify-center">
            {/* Embedded video player preview or placeholder with modern medical visuals */}
            <div className="text-center p-8">
              <div className="w-20 h-20 rounded-full bg-[#1c2b8f] text-white flex items-center justify-center mx-auto mb-4 shadow-lift animate-pulse">
                <Play className="w-8 h-8 fill-white ml-1" />
              </div>
              <h3 className="text-white font-poppins text-xl font-bold mb-2">
                Hospital Tour & Clinical Infrastructure
              </h3>
              <p className="text-white/70 text-sm max-w-md mx-auto">
                Discover our modular operation suites, intensive care telemetry, and the compassionate care philosophy behind our hospital.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

