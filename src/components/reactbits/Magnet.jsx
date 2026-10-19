import React, { useState, useEffect, useRef } from 'react';

/**
 * React Bits - Magnet Component
 * Adds a magnetic pull effect to interactive elements like buttons.
 */
export default function Magnet({
  children,
  padding = 40,
  magnetStrength = 0.35,
  activeTransition = 'transform 0.15s ease-out',
  inactiveTransition = 'transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)',
  wrapperClassName = '',
  innerClassName = '',
  ...props
}) {
  const [isActive, setIsActive] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const magnetRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!magnetRef.current) return;
      const { left, top, width, height } = magnetRef.current.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;

      const dist = Math.hypot(e.clientX - centerX, e.clientY - centerY);

      if (dist < width / 2 + padding) {
        setIsActive(true);
        const offsetX = (e.clientX - centerX) * magnetStrength;
        const offsetY = (e.clientY - centerY) * magnetStrength;
        setPosition({ x: offsetX, y: offsetY });
      } else {
        setIsActive(false);
        setPosition({ x: 0, y: 0 });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [padding, magnetStrength]);

  const transitionStyle = isActive ? activeTransition : inactiveTransition;

  return (
    <div
      ref={magnetRef}
      className={`inline-block ${wrapperClassName}`}
      {...props}
    >
      <div
        className={innerClassName}
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
          transition: transitionStyle,
          willChange: 'transform',
        }}
      >
        {children}
      </div>
    </div>
  );
}
