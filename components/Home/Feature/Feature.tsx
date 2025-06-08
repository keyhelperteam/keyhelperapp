import React from 'react';
import { FaBook, FaCog, FaDesktop, FaHeadset, FaLaptop, FaLayerGroup, FaMobileAlt, FaShieldAlt } from 'react-icons/fa';

const Feature = () => {
  const features = [
    {
      icon: <FaLayerGroup className='text-red-500' />,
      text: '50+ Unique Design Block',
    },
    {
      icon: <FaLaptop className='text-blue-500' />,
      text: 'Multiple Layouts',
    },
    {
      icon: <FaMobileAlt className='text-yellow-500' />,
      text: 'Mobile First Design',
    },
   {
      icon: <FaDesktop className='text-purple-500' />,
      text: 'Fully Responsive',
    },
    {
      icon: <FaCog className='text-teal-500' />,
      text: 'Customizable Features',
    },
    {
      icon: <FaHeadset className='text-green-500' />,
      text: 'Humanly Support',
    },
        {
      icon: <FaBook className='text-indigo-500' />,
      text: 'Rich Documentation',
    },
        {
      icon: <FaShieldAlt className='text-orange-500' />,
      text: 'Enhanced Security',
    },
  ];

  return (
    <div className='bg-green-50 pt-20 pb-20'>
      <div className='w-[80%] mx-auto text-center'>
        <h1 className='mt-6 text-2xl md:text-3xl capitalize font-bold text-center'>Features of this Application</h1>
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