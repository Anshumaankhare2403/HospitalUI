import React from 'react';

export default function ShinyText({ text, disabled = false, speed = 4, className = '' }) {
  return (
    <span
      className={`inline-block ${className}`}
      style={{
        backgroundImage: 'linear-gradient(120deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 0.6) 100%)',
        backgroundSize: '200% 100%',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        animation: disabled ? 'none' : `shine ${speed}s linear infinite`,
      }}
    >
      {text}
    </span>
  );
}
