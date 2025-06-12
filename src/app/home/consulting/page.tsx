'use client';
import React from 'react';
import Image from 'next/image';
import { ChevronLeft } from 'lucide-react';
import Button from '../../../components/button';
import { useRouter } from 'next/navigation';
import ServiceCard from '@/components/service_card';

export default function ConsultingPage() {
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
        <h1 className="text-[20px] font-bold text-[#000000] text-center flex-1 pr-8">Consulting</h1>
      </div>

      {/* Dog Image and Service Card */}
      <div className="px-6 mb-6">
        <div className="mb-4">
        <ServiceCard
            title="Expert Advice"
            price="Starting at $60"
            imageUrl="/dog-stick.png"
        />
        </div>
      </div>

      {/* About Section */}
      <div className="px-6 mb-6">
        <h2 className="text-[24px] font-bold text-[#463327] mb-3">About Dog Consulting</h2>
        <p className="text-[16px] text-[#463327] mb-3">
            Our expert dog consultants offer personalized advice and support to help you address any concerns or challenges you may face with your dog. We are here to assist with training, behavior issues, nutrition, and more.        
        </p>
      </div>

      {/* Services Section */}
      <div className="px-6 mb-8">
        <h2 className="text-[24px] font-bold text-[#463327] mb-4">We provide</h2>
        <div className="flex justify-between">
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 mb-2">
              <Image
                src="/behavior_guidance.png"
                alt="Behavior Guidance"
                width={100}
                height={100}
                className="object-contain items-end"
              />
            </div>
            <span className="text-[13px] font-bold text-center text-[#463327]">Behavior Guidance</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 mb-2">
              <Image
                src="/nutrition_advice.png" 
                alt="Nutrition Advice"
                width={90}
                height={75}
                className="object-contain items-end"
              />
            </div>
            <span className="text-[13px] font-bold text-center text-[#463327]">Nutrition Advice</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 mb-2">
              <Image
                src="/qa_sessions.png"
                alt="Q&A Sessions"
                width={75}
                height={75}
                className="object-contain items-end"
              />
            </div>
            <span className="text-[13px] font-bold text-center text-[#463327]">Q&A Sessions</span>
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
