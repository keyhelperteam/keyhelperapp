import React from 'react';
import Image from 'next/image';
import { getImagePath } from '@/lib/imagePath';

const Hero = () => {
  return (
    <div className='w-full pt-[4vh] md:pt-[12vh] h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50'>
        <div className='flex justify-center flex-col w-[80%] sm:w-[80%] h-full mx-auto' >
            <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-12'>
                {/* Top Box */}
                <div data-aos="fade-right">
                    <div className='w-fit py-1.5 px-2 md:px-5 rounded-full shadow-md flex items-center space-x-3 bg-white'>
                        <div className='p-3 py-1 md:px-5 md:py-1 rounded-full bg-green-600 md:text-base sm:text-sm text-xs text-white'>
                            New
                        </div>
                        <p className='text-xs sm:text-sm'>Powered by on-device AI — no internet needed</p>
                    </div>
                    {/* Heading Content */}
                    <h1 className='text-2xl sm:text-4xl md:text-5xl mt-6 mb-6 font-bold md:leading=[3rem] lg:leading-[3.5rem] text-gray-900'>
                        Your All-in-One<br /> Lifestyle Companion
                    </h1>
                    {/* Description */}
                    <p className='text-gray-600 text-lg leading-relaxed'>
                        Share moments, plan trips, track finances, stay productive, and get fit — all powered by an on-device AI that respects your privacy. The only app you need to organize your life.
                    </p>
                    { /* play store and app store image */}
                    <div className='flex items-center space-x-4 mt-6'>
                        <a href="mailto:keyhelperteam@gmail.com?subject=KeyHelper%20Android%20Registration">
                            <Image src={getImagePath('/images/google_play_app.png')} alt="playstore" width={150} height={50} className='cursor-pointer hover:opacity-80 transition-opacity' />
                        </a>
                        <a href="https://apps.apple.com/us/app/keyhelper/id1672467977" target="_blank" rel="noopener noreferrer">
                            <Image src={getImagePath('/images/apple_store_app.png')} alt="appstore" width={150} height={50} className='cursor-pointer hover:opacity-80 transition-opacity' />
                        </a>
                    </div>
                </div>



                {/* Image Content */}
                <div className='hidden lg:block' data-aos="fade-left">
                    <Image src={getImagePath('/images/hero.png')} alt="hero" width={700} height={700} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero