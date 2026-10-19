import React from 'react';
import { motion } from 'framer-motion';

export default function Button({
  children,
  variant = 'primary', // 'primary' | 'danger' | 'outline' | 'ghost' | 'secondary' | 'white'
  size = 'md',        // 'sm' | 'md' | 'lg'
  className = '',
  onClick,
  type = 'button',
  disabled = false,
  ...props
}) {
  const baseClasses = "inline-flex items-center justify-center font-poppins font-medium rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer";

  const sizeClasses = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-2.5 text-sm",
    lg: "px-8 py-3.5 text-base font-semibold",
  };

  const variantClasses = {
    primary: "bg-[#1c2b8f] hover:bg-[#14206d] text-white shadow-sm focus:ring-[#1c2b8f]",
    danger: "bg-[#d42a31] hover:bg-[#b91c1c] text-white shadow-sm focus:ring-[#d42a31]",
    outline: "bg-transparent border border-[#1c2b8f] text-[#1c2b8f] hover:bg-[#1c2b8f]/5 focus:ring-[#1c2b8f]",
    secondary: "bg-white text-[#0f1a46] hover:bg-[#f8fafc] border border-[#d5deec] focus:ring-[#1c2b8f]",
    ghost: "bg-transparent text-[#0f1a46] hover:text-[#1c2b8f] hover:bg-[#f5f8fc] focus:ring-[#1c2b8f]",
    white: "bg-white text-[#1c2b8f] hover:bg-[#f8fafc] shadow-soft focus:ring-[#1c2b8f]",
  };

  return (
    <motion.button
      type={type}
      whileHover={disabled ? {} : { scale: 1.02 }}
      whileTap={disabled ? {} : { scale: 0.98 }}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${sizeClasses[size] || sizeClasses.md} ${variantClasses[variant] || variantClasses.primary} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}

