'use client';
import React from 'react';
import Image from 'next/image';
import Button from './button';

type HeroCardProps = {
  title?: string;
  description?: string;
  buttonText?: string;
  onButtonClick?: () => void;
  imageUrl?: string;
};

export default function HeroCard({
  title = 'Schedule a Visit',
  description = 'Meet our furry friends and find your perfect companion',
  buttonText = 'Book now',
  onButtonClick,
  imageUrl = '/dog1.png', 
}: HeroCardProps) {
  return (
    <div className="flex items-center bg-[#FFBD61] rounded-[30px] p-6 w-[350px] h-[220px] relative overflow-hidden">
      <div className="flex-1">
        <h2 className="text-[20px] text-[#463327] font-bold mb-2">{title}</h2>
        <p className="text-[16px] text-[#463327] w-[220px] mb-6">{description}</p>
        <Button onClick={onButtonClick} size="xs" variant="light">
          {buttonText}
        </Button>
      </div>
      <div className="absolute bottom-0 right-[4px]">
        <Image
          src={imageUrl}
          alt="Dog"
          width={146}
          height={156}
          className="object-contain"
        />
      </div>
    </div>
  );
}
