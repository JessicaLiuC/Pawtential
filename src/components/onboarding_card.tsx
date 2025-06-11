'use client';
import React from 'react';
import Image from 'next/image';

type OnboardingCardProps = {
  date?: string;
  title?: string;
  time?: string;
  imageUrl?: string;
};

export default function OnboardingCard({
  date = '15th July, 2025',
  title = 'Dog Grooming',
  time = '10:00 AM - 11:00 AM',
  imageUrl = '/dog1.png', 
}: OnboardingCardProps) {
  return (
    <div className="flex items-center bg-[#FFC65A] rounded-[32px] px-6 py-4 w-[365px] h-[157px] relative overflow-hidden">
      <div className="flex-1">
        <p className="text-sm text-[#463327] mb-1">Upcoming - {date}</p>
        <h3 className="text-lg font-bold text-[#463327] mb-1">{title}</h3>
        <p className="text-base text-[#463327]">{time}</p>
      </div>
      <div className="absolute bottom-0 right-4">
        <Image
          src={imageUrl}
          alt={title}
          width={150}
          height={160}
          className="object-contain"
        />
      </div>
    </div>
  );
}

{/* 
<OnboardingCard
  date="15th July, 2025"
  title="Dog Grooming"
  time="10:00 AM - 11:00 AM"
  imageUrl="/dog1.png"
/>  //onboarding card in profile page in Figma
*/}
