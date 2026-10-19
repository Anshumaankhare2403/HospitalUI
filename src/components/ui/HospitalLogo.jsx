import React from 'react';

export default function HospitalLogo({ 
  size = 48, 
  showText = true, 
  variant = 'dark',
  className = '' 
}) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* High-Fidelity Circular Seal Emblem */}
      <div 
        className="relative flex-shrink-0 rounded-full shadow-md overflow-hidden bg-[#0E1758] flex items-center justify-center transition-transform hover:scale-105"
        style={{ width: `${size}px`, height: `${size}px` }}
      >
        <svg 
          viewBox="0 0 160 160" 
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Curved Path for Top Curved Text */}
            <path
              id="topSealArc"
              d="M 22,80 A 58,58 0 1,1 138,80"
              fill="none"
            />
            {/* Curved Path for Bottom Curved Text */}
            <path
              id="bottomSealArc"
              d="M 140,80 A 60,60 0 0,1 20,80"
              fill="none"
            />
            <linearGradient id="sealGold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F9D423" />
              <stop offset="100%" stopColor="#FF4E50" />
            </linearGradient>
            <linearGradient id="coreBg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#EFF6FF" />
            </linearGradient>
          </defs>

          {/* Outer Royal Navy Blue Background */}
          <circle cx="80" cy="80" r="79" fill="#0E1758" />
          
          {/* Concentric Golden Accent Border */}
          <circle cx="80" cy="80" r="77" fill="none" stroke="#F2B733" strokeWidth="2.5" />
          <circle cx="80" cy="80" r="54" fill="none" stroke="#F2B733" strokeWidth="1.5" strokeDasharray="3 2" />

          {/* Curved Text: VASUDEV MULTISPECIALITY */}
          <text 
            fill="#FFFFFF" 
            fontSize="9" 
            fontWeight="700" 
            letterSpacing="1.2"
            fontFamily="system-ui, -apple-system, sans-serif"
          >
            <textPath href="#topSealArc" startOffset="50%" textAnchor="middle">
              VASUDEV MULTISPECIALITY HOSPITAL
            </textPath>
          </text>

          {/* Curved Text: & RESEARCH CENTRE • RAIPUR */}
          <text 
            fill="#F2B733" 
            fontSize="8" 
            fontWeight="600" 
            letterSpacing="0.8"
            fontFamily="system-ui, -apple-system, sans-serif"
          >
            <textPath href="#bottomSealArc" startOffset="50%" textAnchor="middle">
              &amp; RESEARCH CENTRE • RAIPUR
            </textPath>
          </text>

          {/* Inner Medical Core Circle */}
          <circle cx="80" cy="80" r="48" fill="url(#coreBg)" stroke="#0E1758" strokeWidth="2.5" />

          {/* Healing Hands / Protection Caduceus Icon */}
          <g transform="translate(80, 80)">
            {/* Subtle pulse line */}
            <path 
              d="M -32,0 L -18,0 L -11,-12 L -4,16 L 3,-10 L 10,6 L 17,0 L 32,0" 
              fill="none" 
              stroke="#0E1758" 
              strokeWidth="2.2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              opacity="0.25"
            />
            {/* Red / Gold Medical Cross */}
            <path 
              d="M -6,-22 C -6,-24 -4,-25 -2,-25 L 2,-25 C 4,-25 6,-24 6,-22 L 6,-6 L 22,-6 C 24,-6 25,-4 25,-2 L 25,2 C 25,4 24,6 22,6 L 6,6 L 6,22 C 6,24 4,25 2,25 L -2,25 C -4,25 -6,24 -6,22 L -6,6 L -22,6 C -24,6 -25,4 -25,2 L -25,-2 C -25,-4 -24,-6 -22,-6 L -6,-6 Z" 
              fill="#E63946" 
            />
            {/* Healing Heart Core */}
            <circle cx="0" cy="0" r="7" fill="#FFFFFF" />
            <path 
              d="M 0,-3 C -2.5,-6.5 -6.5,-3.5 -4.5,1 C -3.5,3.2 0,5.8 0,5.8 C 0,5.8 3.5,3.2 4.5,1 C 6.5,-3.5 2.5,-6.5 0,-3 Z" 
              fill="#0E1758" 
            />
          </g>
        </svg>
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

