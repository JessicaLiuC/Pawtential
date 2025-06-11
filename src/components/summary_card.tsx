'use client';
import React from 'react';
import Button from './button';

type SummaryItem = {
  label: string;
  value: string;
};

type SummaryProps = {
  items?: SummaryItem[];
  onConfirm?: () => void;
};

export default function SummaryCard({
  items = [
    { label: 'Service', value: 'Dog Training' },
    { label: 'Dog', value: 'Border Collie' },
    { label: 'Trainer', value: 'Jack Simon' },
    { label: 'Training Type', value: 'Behavior Training' },
    { label: 'Grooming Specialist', value: 'N/A' },
    { label: 'Consulting Type', value: 'N/A' },
    { label: 'Consulting Specialist', value: 'N/A' },
  ],
  onConfirm,
}: SummaryProps) {
  return (
    <div className="w-[320px] h-[577px] rounded-[24px] bg-white shadow p-6 flex flex-col items-center">
      <h2 className="text-2xl font-bold text-[#463327] mb-6 w-full text-left">Summary</h2>
      <div className="w-full flex flex-col gap-[22px] mb-8">
        {items.map((item, idx) => (
          <div key={idx} className="grid grid-cols-2">
            <span className="w-[85px] text-[16px] text-[#463327] text-left">{item.label}</span>
            <span className="text-[16px] text-[#463327]">{item.value}</span>
          </div>
        ))}
      </div>
      <Button size="md" variant="secondary">Confirm Booking</Button>
    </div>
  );
}

{/* 
<SummaryCard
  items={[
    { label: 'Service', value: 'Dog Training' },
    { label: 'Dog', value: 'Border Collie' },
    { label: 'Trainer', value: 'Jack Simon' },
    { label: 'Training Type', value: 'Behavior Training' },
    { label: 'Grooming Specialist', value: 'N/A' },
    { label: 'Consulting Type', value: 'N/A' },
    { label: 'Consulting Specialist', value: 'N/A' },
  ]}
  onConfirm={() => alert('Booking confirmed!')}
/>  //summary card in booking confirmationpage in Figma
*/}