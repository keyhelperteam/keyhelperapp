import React from 'react'
import Image from 'next/image'

const WhyChoose = () => {
  return (
    <div className='pt-16 pb-16'>
        <h1 className='mt-6 text-2xl md:text-3xl capitalize font-bold text-center'>Why you choose this application</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-[80%] mx-auto mt-10'>
            <div className='flex flex-col items-center justify-center space-y-4'>
                <Image src={"/images/i1.png"} alt={"whychoose1"} width={80} height={80} />
                <h1 className='text-xl font-bold'>Easy to use</h1>
                <p className='text-gray-500 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.</p>
            </div>
            <div className='flex flex-col items-center justify-center space-y-4'>
                <div className='w-[80px] h-[80px] bg-blue-700 rounded-full flex items-center justify-center'>
                <Image src={"/images/i2.png"} alt={"whychoose1"} width={80} height={80} />
                </div>
                <h1 className='text-xl font-bold'>Easy to use</h1>
                <p className='text-gray-500 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.</p>
            </div>
            <div className='flex flex-col items-center justify-center space-y-4'>
                <div className='w-[80px] h-[80px] bg-blue-700 rounded-full flex items-center justify-center'>
                <Image src={"/images/i3.png"} alt={"whychoose1"} width={80} height={80} />
                </div>
                <h1 className='text-xl font-bold'>Easy to use</h1>
                <p className='text-gray-500 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.</p>
            </div>
            <div className='flex flex-col items-center justify-center space-y-4'>
                <div className='w-[80px] h-[80px] bg-blue-700 rounded-full flex items-center justify-center'>
                <Image src={"/images/i4.png"} alt={"whychoose1"} width={80} height={80} />
                </div>
                <h1 className='text-xl font-bold'>Easy to use</h1>
                <p className='text-gray-500 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.</p>
            </div>
        </div>
    </div>
  )
}

export default WhyChoose