import React from 'react';
import logoImg from '../../assets/logo.png';

export default function HospitalLogo({ 
  size = 48, 
  showText = true, 
  variant = 'dark',
  className = '' 
}) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Authentic Vasudev Hospital Circular Seal Emblem */}
      <div 
        className="relative flex-shrink-0 rounded-full shadow-md overflow-hidden flex items-center justify-center transition-transform duration-300 hover:scale-105 bg-white border border-[#0E1758]/10"
        style={{ width: `${size}px`, height: `${size}px` }}
      >
        <img 
          src={logoImg} 
          alt="Vasudev Multispeciality Hospital Logo" 
          className="w-full h-full object-contain"
          loading="eager"
        />
      </div>

      {/* Typography Brand Name & Subtitle */}
      {showText && (
        <div className="flex flex-col text-left">
          <div className="font-poppins text-base sm:text-lg lg:text-xl font-bold tracking-tight leading-tight">
            <span className={variant === 'light' ? 'text-white' : 'text-[#1E293B]'}>
              Vasudev Multispeciality Hospital
            </span>
          </div>
          <div className="text-[11px] sm:text-xs font-medium tracking-normal mt-0.5">
            <span className={variant === 'light' ? 'text-[#C5C5C5]' : 'text-[#64748B]'}>
              &amp; Research Centre · Raipur
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

