'use client';
import React, { useState, useEffect } from 'react';
import Navbar from '../../components/navbar';
import Image from 'next/image';
import HeroCard from '../../components/hero_card';
import CategoryCard from '../../components/category_card';
import MapWrapper from '../../components/mapWrapper';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <main className="bg-[#FFF5EE]">
      <Navbar />
      <div className="pb-24">
        {/* Hey, Annie! */}
        <div className="flex items-center p-4 pl-6 gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden">
              <Image src="/avatar.png" alt="User Avatar" width={40} height={40} />
          </div>
          <h2 className="text-lg font-semibold text-[#463327]">Hey, Annie!</h2>
        </div>

        {/* Schedule a Visit */}
        <div className="flex items-center mb-8 justify-center">
          <HeroCard />
        </div>

        {/* Services */}
        <div className="px-6 mb-8">
          <h2 className="text-2xl font-bold text-[#463327] mb-4">Services</h2>
          <div className="grid grid-cols-2 gap-3">
            <CategoryCard
              title="Training"
              description="Learn behavior, build trust, and develop skills"
              imageUrl="/corgi.png"
              href="/home/training"
            />
            <CategoryCard
              title="Boarding"
              description="Safe, caring stay for dogs while away"
              imageUrl="/dog-blue.png"
              href="/home/boarding"
            />
            <CategoryCard
              title="Grooming"
              description="Clean, trim, pamper your dog's coat"
              imageUrl="/dog-spotted.png"
              href="/home/grooming"
            />
            <CategoryCard
              title="Consulting"
              description="Expert advice for your dog's behavior needs"
              imageUrl="/dog-stick.png"
              href="/home/consulting"
            />
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="px-6 mb-8">
          <h2 className="text-2xl font-bold text-[#58381D] mb-4">Why choose us?</h2>
          <div className="flex justify-between">
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full overflow-hidden mb-2">
                <Image src="/expert_care.png" alt="Expert Care" width={80} height={80} />
              </div>
              <span className="text-[16px] font-bold text-[#58381D] text-center">Expert<br />Care</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full overflow-hidden mb-2">
                <Image src="/safe_environ.png" alt="Safe Environment" width={80} height={80} />
              </div>
              <span className="text-[16px] font-bold text-[#58381D] text-center">Safe<br />Environment</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full overflow-hidden mb-2">
                <Image src="/personalize_attention.png" alt="Personalized Attention" width={80} height={80} />
              </div>
              <span className="text-[16px] font-bold text-[#58381D] text-center">Personalized<br />Attention</span>
            </div>
          </div>
        </div>

        {/* Where We Are Section */}
        <div className="px-6 mb-8">
          <h2 className="text-2xl font-bold text-[#58381D] mb-4">Where we are?</h2>
          <div className="rounded-lg overflow-hidden mb-4">
            <MapWrapper 
              center={[37.7749, -122.4194]} // Replace with your actual coordinates
              markerPosition={[37.7749, -122.4194]} // Replace with your actual coordinates
              popupText="Pawtential Dog Shelter & Hotel<br/>123, Vale Rd, Unit 123"
              zoom={15}
              height="300px"
            />
          </div>
          <h3 className="font-bold text-[#58381D]">Pawtential Dog Shelter & Hotel</h3>
          <p className="text-[13px] text-[#58381D]">123, Vale Rd, Unit 123, ABC, US, 12345</p>
          <p className="text-[13px] text-[#58381D]">(123)-456-7890</p>
        </div>

      </div>
    </main>
  );
}