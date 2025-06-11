'use client';
import React from 'react';
import Image from 'next/image';

type CategoryCardProps = {
  title?: string;
  description?: string;
  imageUrl?: string;
};

export default function CategoryCard({
  title = 'Training',
  description = 'learn behavior, build trust, and develop skills',
  imageUrl = '/corgi.png',
}: CategoryCardProps) {
  return (
    <div className="w-[170px] h-[245px] rounded-[25px] bg-[#FFBD61] flex flex-col items-center relative">
      <div className="w-full flex justify-center relative">
        <Image
          src={imageUrl}
          alt={title}
          width={105}
          height={105}
          className="object-contain absolute"
        />
      </div>
      <div className="w-full h-[120px] rounded-b-[25px] bg-white flex flex-col justify-center mt-auto pt-12">
        <h3 className="text-[20px] font-bold text-[#463327] ml-3">{title}</h3>
        <p className="text-[13px] text-gray-700 mb-3 ml-3">{description}</p>
      </div>
    </div>
  );
}

{/* 
<CategoryCard 
  title="Training"
  description="learn behavior, build trust, and develop skills"
  imageUrl="/corgi.png"
/>  //category card in home page in Figma
*/}