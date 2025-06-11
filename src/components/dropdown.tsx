'use client';
import React from 'react';

type DropdownOption = {
  value: string;
  label: string;
};

type DropdownProps = {
  options: DropdownOption[];
  value: string;
  onChange: (value: string) => void;
  className?: string; 
  disabled?: boolean;
};

export default function Dropdown({
  options,
  value,
  onChange,
  className = '',
  disabled = false,
}: DropdownProps) {
  return (
    <div className={`relative inline-block ${className}`}>
      <select
        value={value}
        onChange={e => onChange(e.target.value)}
        className="bg-transparent text-gray-700 text-[16px] px-4 py-1 rounded-[12px] w-full pr-10"
        disabled={disabled}
      >
        {options.map(opt => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}
