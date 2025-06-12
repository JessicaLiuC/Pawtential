'use client';
import React from 'react';
import Image from 'next/image';
import { ChevronLeft } from 'lucide-react';
import Button from '../../../components/button';
import { useRouter } from 'next/navigation';
import ServiceCard from '@/components/service_card';

export default function BoardingPage() {
  const router = useRouter();

  return (
    <main className="pb-20 bg-[#FFF5EE]">
      {/* Header with back button */}
      <div className="flex items-center p-4">
        <button 
          onClick={() => router.back()} 
          className="mr-4 text-[#463327]"
        >
          <ChevronLeft size={24} />
        </button>
        <h1 className="text-[20px] font-bold text-[#000000] text-center flex-1 pr-8">Boarding</h1>
      </div>

      {/* Dog Image and Service Card */}
      <div className="px-6 mb-6">
        <div className="mb-4">
        <ServiceCard
            title="Standard Room"
            price="$50/night"
            imageUrl="/dog-blue.png"
        />
        </div>
      </div>

      {/* About Section */}
      <div className="px-6 mb-6">
        <h2 className="text-[24px] font-bold text-[#463327] mb-3">About Dog Boarding</h2>
        <p className="text-[16px] text-[#463327] mb-3">
            Our dog hotel provides a safe, comfortable, and fun environment for your dog while you're away. We offer spacious accommodations, plenty of playtime, and loving care from our experienced staff.
        </p>
      </div>

      {/* Services Section */}
      <div className="px-6 mb-8">
        <h2 className="text-[24px] font-bold text-[#463327] mb-4">We provide</h2>
        <div className="flex justify-between">
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 mb-2">
              <Image
                src="/private_suites.png"
                alt="Private Suites"
                width={90}
                height={70}
                className="object-contain items-end"
              />
            </div>
            <span className="text-[13px] font-bold text-center text-[#463327]">Private Suites</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 mb-2">
              <Image
                src="/daycare.png" 
                alt="Daycare"
                width={100}
                height={75}
                className="object-contain items-end"
              />
            </div>
            <span className="text-[13px] font-bold text-center text-[#463327]">Daycare</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 mb-2">
              <Image
                src="/overnight_stays.png"
                alt="Overnight Stays"
                width={100}
                height={75}
                className="object-contain items-end"
              />
            </div>
            <span className="text-[13px] font-bold text-center text-[#463327]">Overnight Stays</span>
          </div>
        </div>
      </div>

      {/* Appointment Button */}
      <div className="px-6">
        <Button size="lg" variant="secondary">Make an Appointment</Button>
      </div>
    </main>
  );
}
