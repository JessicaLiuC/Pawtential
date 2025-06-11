'use client';
import React from 'react';
import clsx from 'clsx';

type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'dark' | 'text';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  fullWidth?: boolean;
  onClick?: () => void;
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  onClick,
}: ButtonProps) {
  const base = 'text-center font-medium transition-all duration-200';
  const sizes = {
    sm: 'text-[20px] px-3 py-1 rounded-[25px] w-60 h-12',
    md: 'text-[20px] px-4 py-2 rounded-[15px] w-71 h-12',
    lg: 'text-[20px] px-5 py-2.5 rounded-[20px] w-90 h-14',
    xl: 'text-[14px] px-6 py-3 rounded-[20px] w-90 h-10',
  };
  const variants = {
    primary: 'bg-[#A7BBD0] text-white hover:bg-yellow-800',
    secondary: 'bg-[#BF8E49] text-white hover:bg-yellow-500',
    dark: 'bg-[#3B2A1A] text-white hover:opacity-90',
    text: 'bg-transparent text-[#BF8E49] hover:underline',
  };

  return (
    <button
      onClick={onClick}
      className={clsx(
        base,
        sizes[size],
        variants[variant],
        fullWidth && 'w-full'
      )}
    >
      {children}
    </button>
  );
}
