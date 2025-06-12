'use client';
import React from 'react';
import Image from 'next/image';
import { ChevronLeft } from 'lucide-react';
import Button from '../../../components/button';
import { useRouter } from 'next/navigation';
import ServiceCard from '@/components/service_card';

export default function GroomingPage() {
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
        <h1 className="text-[20px] font-bold text-[#000000] text-center flex-1 pr-8">Grooming</h1>
      </div>

      {/* Dog Image and Service Card */}
      <div className="px-6 mb-6">
        <div className="mb-4">
        <ServiceCard
            title="Bath & Brush"
            price="Starting at $40"
            imageUrl="/dog-spotted.png"
        />
        </div>
      </div>

      {/* About Section */}
      <div className="px-6 mb-6">
        <h2 className="text-[24px] font-bold text-[#463327] mb-3">About Dog Grooming</h2>
        <p className="text-[16px] text-[#463327] mb-3">
            Our professional grooming services will keep your dog looking and feeling their best. We offer a range of grooming options to suit your dog's breed and coat type.
        </p>
      </div>

      {/* Services Section */}
      <div className="px-6 mb-8">
        <h2 className="text-[24px] font-bold text-[#463327] mb-4">We provide</h2>
        <div className="flex justify-between">
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 mb-2">
              <Image
                src="/haircuts.png"
                alt="Haircuts"
                width={100}
                height={100}
                className="object-contain items-end"
              />
            </div>
            <span className="text-[13px] font-bold text-center text-[#463327]">Haircuts</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 mb-2">
              <Image
                src="/nail_trimming.png" 
                alt="Nail Trimming"
                width={90}
                height={75}
                className="object-contain items-end"
              />
            </div>
            <span className="text-[13px] font-bold text-center text-[#463327]">Nail Trimming</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 mb-2">
              <Image
                src="/ear_cleaning.png"
                alt="Ear Cleaning"
                width={85}
                height={75}
                className="object-contain items-end"
              />
            </div>
            <span className="text-[13px] font-bold text-center text-[#463327]">Ear Cleaning</span>
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
