import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className='w-full pt-[4vh] md:pt-[12vh] h-screen bg-[#f7f6fb]'>
        <div className='flex justify-center flex-col w-[80%] sm:w-[80%] h-full mx-auto' >
            <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-12'>
                {/* Top Box */}
                <div> 
                    <div className='w-fit py-1.5 px-2 md:px-5 rounded-full shadow-md flex items-center space-x-3 bg-white'>
                        <div className='p-3 py-1 md:px-5 md:py-1 rounded-full bg-blue-700 md:text-base sm:text-sm text-xs text-white'>
                            News
                        </div>
                        <p className='text-xs sm:text-sm'>We have updated our term & condition policy</p>
                    </div>
                    {/* Heading Content */}
                    <h1 className='text-2xl sm:text-4xl md:text-5xl mt-6 mb-6 font-bold md:leading=[3rem] lg:leading-[3.5rem]'>
                        The powerfull app
                    </h1>
                    {/* Description */}
                    <p className='text-gray-700'>
                        description ; Thahahahahhahahahah  hahhaha hahah
                    </p>
                    { /* play store and app store image */}
                    <div className='flex items-center space-x-4 mt-6'>
                        <Image src='/images/google_play_app.png' alt="playstore" width={150} height={50} />
                        <Image src='/images/apple_store_app.png' alt="appstore" width={150} height={50} />
                        </div>
                </div>
  


                {/* Image Content */}
                <div className='hidden lg:block'>
                    <Image src='/images/hero.png' alt="hero" width={700} height={700} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero