'use client';
import React, { useState } from 'react';
import Navbar from '../../components/navbar';
import Button from '../../components/button';
import Dropdown from '../../components/dropdown';
import HeroCard from '../../components/hero_card';
import CategoryCard from '../../components/category_card';
import OnboardingCard from '../../components/onboarding_card';
import ServiceCard from '../../components/service_card';
import SummaryCard from '../../components/summary_card';

const serviceOptions = [
  { value: '', label: 'Select Service' },
  { value: 'grooming', label: 'Grooming' },
  { value: 'walking', label: 'Walking' },
  { value: 'boarding', label: 'Boarding' },
  { value: 'daycare', label: 'Daycare' },
  { value: 'training', label: 'Training' },
]

export default function Home() {
  const [selected, setSelected] = useState('');
  return (
    <main className="bg-[#FFF5EE]">
      <Navbar />
      <div className="space-y-4 p-4 flex flex-col pb-24">
        <Button size="xs" variant="light">Next</Button>
        <Button size="sm" variant="secondary">Next</Button>
        <Button size="md" variant="secondary">Next</Button>
        <Button size="lg" variant="secondary">Next</Button>
        <Button size="sm" variant="text">Skip</Button>
        <Button size="xl" variant="secondary">Log Out</Button>
        <Button size="xl" variant="primary">Delete Account</Button>
        <Dropdown
          options={serviceOptions}
          value={selected}
          onChange={setSelected}
          className="w-71 h-12 rounded-[12px] bg-blue-200 px-4 py-2"
        />
        <Dropdown
          options={serviceOptions}
          value={selected}
          onChange={setSelected}
          className="w-35 h-6 rounded-[20px] bg-blue-200"
        />
        <div className="flex justify-center items-center ">
          <HeroCard />
        </div>
        <CategoryCard 
          title="Training"
          description="learn behavior, build trust, and develop skills"
          imageUrl="/corgi.png"
        />
        <OnboardingCard
          date="15th July, 2025"
          title="Dog Grooming"
          time="10:00 AM - 11:00 AM"
          imageUrl="/dog1.png"
        />
        <ServiceCard
          title="Expert Training"
          experience="Experience: 10+ years"
          price="Starting at $150"
          duration="1 hour per lesson"
          imageUrl="/corgi.png"
        />
        <SummaryCard
          items={[
            { label: 'Service', value: 'Dog Training' },
            { label: 'Dog', value: 'Border Collie' },
            { label: 'Trainer', value: 'Jack Simon' },
            { label: 'Training Type', value: 'Behavior Training' },
            { label: 'Grooming Specialist', value: 'N/A' },
            { label: 'Consulting Type', value: 'N/A' },
            { label: 'Consulting Specialist', value: 'N/A' },
          ]}
          onConfirm={() => alert('Booking confirmed!')}
        />
      </div>
    </main>
  );
}