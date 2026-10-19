import React, { useEffect, useRef, useState } from 'react';

/**
 * React Bits - CountUp Component
 * Animates a numeric counter smoothly when it comes into view.
 */
export default function CountUp({
  to = 0,
  from = 0,
  duration = 1.5,
  className = '',
  startWhenInView = true,
  separator = '',
  decimals = 0,
}) {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const [hasStarted, setHasStarted] = useState(!startWhenInView);

  useEffect(() => {
    if (!startWhenInView) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [startWhenInView]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime = null;
    let animationFrameId = null;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      // Easing: easeOutExpo
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const currentVal = from + (to - from) * ease;
      setCount(currentVal);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setCount(to);
      }
    };

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, [hasStarted, from, to, duration]);

  const formatted = decimals > 0 
    ? count.toFixed(decimals) 
    : Math.round(count).toLocaleString();

  return (
    <span ref={ref} className={className}>
      {formatted}
    </span>
  );
}
