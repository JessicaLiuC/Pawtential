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


      </div>
    </main>
  );
}