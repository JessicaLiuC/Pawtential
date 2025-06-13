'use client';
import React, { useState, useEffect } from 'react';
import Navbar from '../../components/navbar';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { DayPicker, DateRange, getDefaultClassNames, Button } from 'react-day-picker';
import 'react-day-picker/style.css';
import Dropdown from '../../components/dropdown';
import '../../styles/globals.css';
import CustomButton from '../../components/button';

const services = [
  { label: 'Select Service', value: '' },
  { label: 'Training', value: 'training' },
  { label: 'Boarding', value: 'boarding' },
  { label: 'Grooming', value: 'grooming' },
  { label: 'Consulting', value: 'consulting' },
];

const availableTimes = [
  '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM',
  '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM',
  '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM',
];


export default function Home() {
  const router = useRouter();
  const [selectedService, setSelectedService] = useState<'' | 'training' | 'boarding' | 'grooming' | 'consulting'>('');
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [selectedRange, setSelectedRange] = useState<DateRange | undefined>();

  const defaultClassNames = getDefaultClassNames();

  return (
    <main className="bg-[#FFF5EE]">
      <Navbar />
      <div className="pb-20 min-h-screen px-3">
        {/* Header */}
        <div className="flex items-center p-4 gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <Image src="/avatar.png" alt="User Avatar" width={40} height={40} />
          </div>
          <h2 className="text-lg font-semibold text-[#463327]">Hey, Annie!</h2>
        </div>

        <div className="flex flex-row gap-4 justify-between">
          {/* Title */}
          <h1 className="text-[20px] font-bold text-[#463327] px-4 mb-2">Select Dates</h1>

          {/* Dropdown */}
          <div className="px-4 mb-4">
            <Dropdown
              options={services}
              value={selectedService}
              onChange={(value) => setSelectedService(value as 'training' | 'boarding' | 'grooming' | 'consulting')}
              className="w-40 h-8 rounded-[20px] bg-blue-200"
            /> 
          </div>
        </div>
        

        {/* Calendar */}
        <div className="px-2 mb-4">
          {selectedService === '' ? (
            <DayPicker
              mode="single"
              selected={undefined}
              disabled={() => true}
              classNames={{
                today: `text-black`,
                selected: `bg-[#E38F4C] rounded-full text-white`,
                month: `text-black`,
                root: `${defaultClassNames.root} p-5 w-full mx-auto`,
                chevron: `fill-black` 
              }}
            />
          ) : selectedService === 'training' || selectedService === 'consulting' || selectedService === 'grooming' ? (
            <DayPicker
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              disabled={{before: new Date()}}
              classNames={{
                today: `text-black`,
                selected: `bg-[#E38F4C] rounded-full text-white`,
                month: `text-black`,
                root: `${defaultClassNames.root} p-5 w-full mx-auto`,
                chevron: `fill-black` 
              }}
            />
          ) : (
            <DayPicker
              mode="range"
              selected={selectedRange}
              onSelect={setSelectedRange}
              disabled={{before: new Date()}}
              classNames={{
                today: `text-black`,
                range_start: `bg-[#E38F4C] rounded-l-full text-white`,
                range_middle: `bg-[#E38F4C] text-white`,
                range_end: `bg-[#E38F4C] rounded-r-full text-white`,
                selected: `bg-[#E38F4C] text-white`,
                month: `text-black`,
                root: `${defaultClassNames.root} p-5 w-full mx-auto`,
                chevron: `fill-black` 
              }}
            />
          )}
        </div>
        
        {/* Available Times */}
        {(selectedService === 'training' || selectedService === 'consulting' || selectedService === 'grooming') && selectedDate && (
          <div className="px-4 mb-8">
            <div className="grid grid-cols-4 gap-3">
              {availableTimes.map((time) => (
                <button
                  key={time}
                  type="button"
                  onClick={() => setSelectedTime(time)}
                  className={`py-[5px] rounded-[5px] border text-[16px] transition-all w-[80px]
                    ${selectedTime === time
                      ? 'bg-[#FFE1C6] text-[#E38F4C] border-[#E38F4C]'
                      : 'bg-white text-[#E38F4C] border-[#E38F4C]'}
                  `}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Service Details */}
        <h2 className="text-xl font-bold text-[#463327] px-4 mb-4">Service Details</h2>
        <div className="mb-4">
          {selectedService === 'training' && selectedDate && selectedTime ? (
            <div className="flex flex-col gap-4 px-4 mb-8">
              <Dropdown
                options={[
                  { label: 'Select Dog', value: '' },
                  { label: 'Buddy', value: 'buddy' },
                  { label: 'Max', value: 'max' },
                  { label: 'Bella', value: 'bella' },
                ]}
                value={''}
                onChange={() => {}}
                className="w-full h-12 rounded-[12px] bg-blue-200 px-4 py-2"
              />
              <Dropdown
                options={[
                  { label: 'Select Training Type', value: '' },
                  { label: 'Obedience', value: 'obedience' },
                  { label: 'Behavior', value: 'behavior' },
                  { label: 'Agility', value: 'agility' },
                ]}
                value={''}
                onChange={() => {}}
                className="w-full h-12 rounded-[12px] bg-blue-200 px-4 py-2"
              />
              <Dropdown
                options={[
                  { label: 'Select Trainer', value: '' },
                  { label: 'Jack Simon', value: 'jack' },
                  { label: 'Emily Rose', value: 'emily' },
                  { label: 'Chris Lee', value: 'chris' },
                ]}
                value={''}
                onChange={() => {}}
                className="w-full h-12 rounded-[12px] bg-blue-200 px-4 py-2"
              />
            </div>
            ) : selectedService === 'boarding' && selectedRange ? (
              <div className="flex flex-col gap-4 px-4 mb-8">
                <Dropdown
                  options={[
                    { label: 'Select Dog', value: '' },
                    { label: 'Buddy', value: 'buddy' },
                    { label: 'Max', value: 'max' },
                    { label: 'Bella', value: 'bella' },
                  ]}
                  value={''}
                  onChange={() => {}}
                  className="w-full h-12 rounded-[12px] bg-blue-200 px-4 py-2"
                />
              </div>
            ) : selectedService === 'grooming' && selectedDate && selectedTime ? (
              <div className="flex flex-col gap-4 px-4 mb-8">
                <Dropdown
                  options={[
                    { label: 'Select Grooming Specialist', value: '' },
                    { label: 'Jack Simon', value: 'jack' },
                    { label: 'Emily Rose', value: 'emily' },
                    { label: 'Chris Lee', value: 'chris' },
                  ]}
                  value={''}
                  onChange={() => {}}
                  className="w-full h-12 rounded-[12px] bg-blue-200 px-4 py-2"
                />
              </div>
            ) : selectedService === 'consulting' && selectedDate && selectedTime ? (
                <div className="flex flex-col gap-4 px-4 mb-8">
                  <Dropdown
                    options={[
                      { label: 'Select Dog', value: '' },
                      { label: 'Buddy', value: 'buddy' },
                      { label: 'Max', value: 'max' },
                      { label: 'Bella', value: 'bella' },
                    ]}
                    value={''}
                    onChange={() => {}}
                    className="w-full h-12 rounded-[12px] bg-blue-200 px-4 py-2"
                  />
                  <Dropdown
                    options={[
                      { label: 'Select Consulting Type', value: '' },
                      { label: 'Obedience', value: 'obedience' },
                      { label: 'Behavior', value: 'behavior' },
                      { label: 'Agility', value: 'agility' },
                    ]}
                    value={''}
                    onChange={() => {}}
                    className="w-full h-12 rounded-[12px] bg-blue-200 px-4 py-2"
                  />
                  <Dropdown
                    options={[
                      { label: 'Select Consulting Specialist', value: '' },
                      { label: 'Jack Simon', value: 'jack' },
                      { label: 'Emily Rose', value: 'emily' },
                      { label: 'Chris Lee', value: 'chris' },
                    ]}
                    value={''}
                    onChange={() => {}}
                    className="w-full h-12 rounded-[12px] bg-blue-200 px-4 py-2"
                  />
                </div>
            ) : null}
        </div>


        {/* Button  */}
        <div className="px-4 mb-8">
          <CustomButton size="lg" variant="secondary">Make an Appointment</CustomButton>
        </div>
      </div>
    </main>
  );
}