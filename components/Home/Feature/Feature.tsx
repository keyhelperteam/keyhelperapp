import React from 'react';
import { FaBook, FaCog, FaDesktop, FaHeadset, FaLayerGroup, FaMobileAlt, FaShieldAlt, FaMapPin } from 'react-icons/fa';

const Feature = () => {
  const features = [
    {
      icon: <FaLayerGroup className='text-green-600' />,
      text: 'Photo Sharing',
    },
    {
      icon: <FaMapPin className='text-green-600' />,
      text: 'Location Tagging',
    },
    {
      icon: <FaMobileAlt className='text-green-600' />,
      text: 'Mobile First App',
    },
   {
      icon: <FaDesktop className='text-green-600' />,
      text: 'Cross-Platform',
    },
    {
      icon: <FaCog className='text-green-600' />,
      text: 'Easy to Configure',
    },
    {
      icon: <FaHeadset className='text-green-600' />,
      text: '24/7 Support',
    },
        {
      icon: <FaBook className='text-green-600' />,
      text: 'Smart Discovery',
    },
        {
      icon: <FaShieldAlt className='text-green-600' />,
      text: 'Privacy First',
    },
  ];

  return (
    <div className='bg-gradient-to-b from-white to-green-50 pt-20 pb-20'>
      <div className='w-[80%] mx-auto text-center'>
        <h1 className='mt-6 text-2xl md:text-3xl capitalize font-bold text-center text-gray-900'>Powerful Features Built For You</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10'>
          {features.map((feature, index) => (
            <div key={index} className='flex flex-col items-center justify-center space-y-4 p-6 bg-white rounded-3xl shadow-md hover:shadow-lg transition-shadow duration-300'>
              <div className='text-4xl'>{feature.icon}</div>
              <h1 className='text-xl font-bold'>{feature.text}</h1>
            </div>
          ))}
          </div>
      </div>
    </div>
  )
}

export default Feature