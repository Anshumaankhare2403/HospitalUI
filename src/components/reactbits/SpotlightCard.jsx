import React, { useRef, useState } from 'react';

export default function SpotlightCard({
  children,
  className = '',
  spotlightColor = 'rgba(28, 43, 143, 0.08)',
  borderColor = 'rgba(28, 43, 143, 0.3)',
  ...props
}) {
  const divRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => setOpacity(1);
  const handleMouseLeave = () => setOpacity(0);

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative rounded-2xl border transition-all duration-300 ${className}`}
      {...props}
    >
      {/* Radial Spotlight Gradient following cursor */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(450px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 45%)`,
        }}
      />
      {/* Glowing Border Edge following cursor */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl transition-opacity duration-300"
        style={{
          opacity,
          border: `1px solid ${borderColor}`,
          maskImage: `radial-gradient(220px circle at ${position.x}px ${position.y}px, black 0%, transparent 100%)`,
          WebkitMaskImage: `radial-gradient(220px circle at ${position.x}px ${position.y}px, black 0%, transparent 100%)`,
        }}
      />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}
