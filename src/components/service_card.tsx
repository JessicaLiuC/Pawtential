'use client';
import React from 'react';
import Image from 'next/image';

type ServiceCardProps = {
  title?: string;
  experience?: string;
  price?: string;
  duration?: string;
  imageUrl?: string;
};

export default function ServiceCard({
  title = 'Expert Training',
  experience = 'Experience: 10+ years',
  price = 'Starting at $150',
  duration = '1 hour per lesson',
  imageUrl = '/corgi.png',
}: ServiceCardProps) {
  return (
    <div className="w-[352px] h-[363px] rounded-[30px] bg-[#FFBD61] flex flex-col items-center relative overflow-visible shadow">
      <div className="w-full flex justify-center">
        <Image
          src={imageUrl}
          alt={title}
          width={170}
          height={180}
          className="object-contain"
        />
      </div>
      <div className="w-[95%] mx-auto bg-white rounded-[20px] flex flex-row justify-between items-center px-3 py-4 absolute left-1/2 -translate-x-1/2 bottom-3 shadow">
        <div>
          <div className="text-[20px] font-bold text-[#463327]">{title}</div>
          <div className="text-[13px] text-gray-700">{experience}</div>
        </div>
        <div className="text-right">
          <div className="text-[20px] font-bold text-[#E6AA57]">{price}</div>
          <div className="text-[13px] text-gray-700">{duration}</div>
        </div>
      </div>
    </div>
  );
}

{/* 
<ServiceCard
  title="Expert Training"
  experience="Experience: 10+ years"
  price="Starting at $150"
  duration="1 hour per lesson"
  imageUrl="/corgi.png"
/>  //service card in home details page in Figma
*/}