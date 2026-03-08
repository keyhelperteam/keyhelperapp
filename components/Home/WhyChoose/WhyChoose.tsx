import React from 'react'
import Image from 'next/image'
import { getImagePath } from '@/lib/imagePath'

const WhyChoose = () => {
  return (
    <div className='pt-16 pb-16 bg-white'>
        <h1 className='mt-6 text-2xl md:text-3xl capitalize font-bold text-center text-gray-900'>Why Choose KeyHelper?</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-[80%] mx-auto mt-12'>
            <div className='flex flex-col items-center justify-center space-y-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow'>
                <div className='w-[80px] h-[80px] bg-green-100 rounded-full flex items-center justify-center'>
                <Image src={getImagePath("/images/i1.png")} alt={"whychoose1"} width={50} height={50} />
                </div>
                <h1 className='text-xl font-bold text-gray-900'>Intuitive Interface</h1>
                <p className='text-gray-600 text-center'>Simple and elegant design that anyone can master in seconds.</p>
            </div>
            <div className='flex flex-col items-center justify-center space-y-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow'>
                <div className='w-[80px] h-[80px] bg-green-100 rounded-full flex items-center justify-center'>
                <Image src={getImagePath("/images/i2.png")} alt={"whychoose2"} width={50} height={50} />
                </div>
                <h1 className='text-xl font-bold text-gray-900'>Real-Time Updates</h1>
                <p className='text-gray-600 text-center'>See new posts and discover nearby locations instantly.</p>
            </div>
            <div className='flex flex-col items-center justify-center space-y-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow'>
                <div className='w-[80px] h-[80px] bg-green-100 rounded-full flex items-center justify-center'>
                <Image src={getImagePath("/images/i3.png")} alt={"whychoose3"} width={50} height={50} />
                </div>
                <h1 className='text-xl font-bold text-gray-900'>Safe & Secure</h1>
                <p className='text-gray-600 text-center'>Your privacy and data protection are our top priorities.</p>
            </div>
            <div className='flex flex-col items-center justify-center space-y-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow'>
                <div className='w-[80px] h-[80px] bg-green-100 rounded-full flex items-center justify-center'>
                <Image src={getImagePath("/images/i4.png")} alt={"whychoose4"} width={50} height={50} />
                </div>
                <h1 className='text-xl font-bold text-gray-900'>Community First</h1>
                <p className='text-gray-600 text-center'>Connect with explorers and creators from around the world.</p>
            </div>
        </div>
    </div>
  )
}

export default WhyChoose