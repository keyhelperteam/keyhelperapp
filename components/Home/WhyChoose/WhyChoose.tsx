import React from 'react'
import { FaLock, FaMicrochip, FaBolt, FaUserShield } from 'react-icons/fa'

const WhyChoose = () => {
  const benefits = [
    {
      icon: <FaMicrochip className='text-green-600 text-4xl' />,
      title: 'On-Device AI',
      description: 'Powered by Google Gemma 4, our AI runs entirely on your phone. No cloud, no data collection — your information stays private.',
    },
    {
      icon: <FaBolt className='text-green-600 text-4xl' />,
      title: 'All-in-One Power',
      description: 'Notes, tasks, travel, finance, fitness, chat, and AI — one app replaces twelve. No more switching between tools.',
    },
    {
      icon: <FaUserShield className='text-green-600 text-4xl' />,
      title: 'Complete Privacy Control',
      description: 'Full account deletion with data wiped from all services. You own your data, always.',
    },
    {
      icon: <FaLock className='text-green-600 text-4xl' />,
      title: 'Secure & Reliable',
      description: 'Firebase Auth with Google and Apple sign-in. End-to-end security with email verification and privacy settings.',
    },
  ];

  return (
    <div className='pt-16 pb-16 bg-white' data-aos="fade-up">
      <h1 className='mt-6 text-2xl md:text-3xl capitalize font-bold text-center text-gray-900'>Why Choose KeyHelper?</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-[80%] mx-auto mt-12'>
        {benefits.map((benefit, index) => (
          <div key={index} data-aos="fade-up" data-aos-delay={index * 100} className='flex flex-col items-center text-center space-y-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow'>
            <div className='w-[80px] h-[80px] bg-green-100 rounded-full flex items-center justify-center'>
              {benefit.icon}
            </div>
            <h1 className='text-xl font-bold text-gray-900'>{benefit.title}</h1>
            <p className='text-gray-600 text-center text-sm leading-relaxed'>{benefit.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WhyChoose
