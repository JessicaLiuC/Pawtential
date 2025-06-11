'use client';
import React from 'react';
import { ChevronDown } from 'lucide-react';

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
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <ChevronDown size={18} />
      </div>
    </div>
  );
}

{/* 
const serviceOptions = [
  { value: '', label: 'Select Service' },
  { value: 'grooming', label: 'Grooming' },
  { value: 'walking', label: 'Walking' },
  { value: 'boarding', label: 'Boarding' },
  { value: 'daycare', label: 'Daycare' },
  { value: 'training', label: 'Training' },
]  //service options in dropdown
<Dropdown
  options={serviceOptions}
  value={selected}
  onChange={setSelected}
  className="w-71 h-12 rounded-[12px] bg-blue-200 px-4 py-2"
/>     //default dropdown in Figma
<Dropdown
  options={serviceOptions}
  value={selected}
  onChange={setSelected}
  className="w-45 h-8 rounded-[20px] bg-blue-200"
/>     //dropdown in booking page in Figma
*/}