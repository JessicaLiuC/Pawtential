'use client';
import React from 'react';
import Image from 'next/image';
import { ChevronLeft } from 'lucide-react';
import Button from '../../../components/button';
import { useRouter } from 'next/navigation';
import ServiceCard from '@/components/service_card';

export default function TrainingPage() {
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
        <h1 className="text-[20px] font-bold text-[#000000] text-center flex-1 pr-8">Training</h1>
      </div>

      {/* Dog Image and Service Card */}
      <div className="px-6 mb-6">
        <div className="mb-4">
        <ServiceCard
            title="Expert Training"
            experience="Experience: 10+ years"
            price="Starting at $150"
            duration="1 hour per lesson"
            imageUrl="/corgi.png"
        />
        </div>
      </div>

      {/* About Section */}
      <div className="px-6 mb-6">
        <h2 className="text-[24px] font-bold text-[#463327] mb-3">About Dog Training</h2>
        <p className="text-[16px] text-[#463327] mb-3">
          Our dog training programs are designed to help your furry friend become a well-behaved and happy companion.
        </p>
        <p className="text-[16px] text-[#463327]">
          We offer a variety of training options to suit your dog's needs and your goals.
        </p>
      </div>

      {/* Services Section */}
      <div className="px-6 mb-8">
        <h2 className="text-[24px] font-bold text-[#463327] mb-4">We provide</h2>
        <div className="flex justify-between">
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 mb-2">
              <Image
                src="/private_training.png"
                alt="Private Training"
                width={90}
                height={90}
                className="object-contain items-end"
              />
            </div>
            <span className="text-[13px] font-bold text-center text-[#463327]">Private Training</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 mb-2">
              <Image
                src="/group_classes.png" 
                alt="Group Classes"
                width={120}
                height={70}
                className="object-contain items-end"
              />
            </div>
            <span className="text-[13px] font-bold text-center text-[#463327]">Group Classes</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 mb-2">
              <Image
                src="/board_train.png"
                alt="Board & Train"
                width={90}
                height={75}
                className="object-contain items-end"
              />
            </div>
            <span className="text-[13px] font-bold text-center text-[#463327]">Board & Train</span>
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
