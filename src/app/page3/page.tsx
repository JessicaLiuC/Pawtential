'use client';
import React from 'react';
import Image from 'next/image';
import Button from '../../components/button';
import { useRouter } from 'next/navigation';

export default function Onboarding1() {
  const router = useRouter(); 

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-white pt-8">
      <div className="mb-6">
        <Image
          src="/logo.png"
          alt="Pawtential Logo"
          width={120}
          height={30}
          className="mx-auto"
        />
      </div>
      <div className="w-[320px] h-[320px] rounded-full overflow-hidden mb-8">
        <Image
          src="/dog_hotel.png"
          alt="Happy Dog"
          width={320}
          height={320}
          className="object-cover w-full h-full"
        />
      </div>
      <h1 className="text-3xl font-bold text-[#463327] mb-2 text-center">Book in Seconds</h1>
      <p className="w-[310px] text-[20px] text-[#463327] mb-6 text-left">
        Pick your dates, tell us about your dog, and you're set!
      </p>
      <div className="flex items-center justify-center gap-2 mb-6">
        <span className="w-2 h-2 bg-[#E6D3B3] rounded-full inline-block" />
        <span className="w-2 h-2 bg-[#E6D3B3] rounded-full inline-block" />
        <span className="w-2 h-2 bg-[#C49A6C] rounded-full inline-block" />
      </div>
      <Button 
        size="sm" 
        variant="secondary"
        onClick={() => router.push('/home')}
      >
        Start
      </Button>
    </div>
  );
}
