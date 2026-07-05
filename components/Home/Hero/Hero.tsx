import React from 'react';
import Link from 'next/link';
import { FaApple, FaGooglePlay } from 'react-icons/fa';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const Hero = () => {
  return (
    <div className='relative w-full pt-[4vh] md:pt-[12vh] min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 overflow-hidden'>
      <div className='absolute top-20 -right-40 w-[600px] h-[600px] bg-green-200/20 rounded-full blur-3xl' />
      <div className='absolute -bottom-20 -left-40 w-[500px] h-[500px] bg-emerald-200/20 rounded-full blur-3xl' />

      <div className='flex justify-center flex-col w-[80%] sm:w-[80%] min-h-[calc(100vh-12vh)] mx-auto relative'>
        <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-12 py-12'>
          <div data-aos="fade-right">
            <div className='w-fit py-1.5 px-2 md:px-5 rounded-full shadow-md flex items-center space-x-3 bg-white mb-2'>
              <span className='relative flex h-2.5 w-2.5'>
                <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75' />
                <span className='relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500' />
              </span>
              <div className='px-3 py-1 md:px-5 md:py-1 rounded-full bg-green-600 md:text-base sm:text-sm text-xs text-white font-medium'>
                New
              </div>
              <p className='text-xs sm:text-sm font-medium text-gray-600'>Powered by on-device AI — no internet needed</p>
            </div>

            <h1 className='text-3xl sm:text-5xl md:text-6xl mt-6 mb-6 font-extrabold leading-[1.1] text-gray-900'>
              Your{' '}
              <span className='bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent'>
                All-in-One
              </span>
              <br /> Lifestyle Companion
            </h1>

            <p className='text-gray-600 text-lg leading-relaxed max-w-lg'>
              Share moments, plan trips, track finances, stay productive, and get fit — all powered by an on-device AI that respects your privacy.
            </p>

            <div className='flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-8'>
              <a href="https://apps.apple.com/us/app/keyhelper/id1672467977" target="_blank" rel="noopener noreferrer"
                className='flex items-center gap-3 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-900 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl'>
                <FaApple className='text-2xl' />
                <div className='text-left'>
                  <div className='text-[11px] leading-tight text-gray-300'>Download on the</div>
                  <div className='text-lg font-semibold leading-tight'>App Store</div>
                </div>
              </a>

              <div className='relative inline-block'>
                <Link href="/android-beta"
                  className='flex items-center gap-3 bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl inline-flex'>
                  <FaGooglePlay className='text-xl' />
                  <div className='text-left'>
                    <div className='text-[11px] leading-tight text-green-100'>Get it on</div>
                    <div className='text-lg font-semibold leading-tight'>Google Play</div>
                  </div>
                </Link>
                <span className='absolute -top-2 -right-2 bg-amber-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-md'>Beta</span>
              </div>
            </div>

            <div className='flex items-center gap-6 mt-8 text-sm text-gray-500'>
              <span className='flex items-center gap-1.5'>
                <svg className='w-4 h-4 text-green-500' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' /></svg>
                Free to use
              </span>
              <span className='flex items-center gap-1.5'>
                <svg className='w-4 h-4 text-green-500' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' /></svg>
                Works offline
              </span>
              <span className='flex items-center gap-1.5'>
                <svg className='w-4 h-4 text-green-500' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' /></svg>
                100% Private AI
              </span>
            </div>
          </div>

          {/* Hero image - app screenshot mockup */}
          <div className='hidden lg:flex justify-center' data-aos="fade-left" data-aos-delay="200">
            <div className='relative'>
              <div className='w-[280px] h-[560px] bg-gray-800 rounded-[3rem] p-3 shadow-2xl relative'>
                <div className='absolute top-0 left-1/2 -translate-x-1/2 w-36 h-7 bg-gray-800 rounded-b-2xl z-10' />
                <div className='w-full h-full rounded-[2.5rem] overflow-hidden bg-black'>
                  <div className='h-8 bg-black flex items-center justify-between px-8 pt-1'>
                    <span className='text-[10px] font-semibold text-white/70'>9:41</span>
                    <div className='w-3 h-2 rounded-sm border border-white/40 relative'>
                      <div className='absolute inset-0.5 bg-white rounded-sm' />
                    </div>
                  </div>
                  <div className='h-[calc(100%-56px)] bg-black'>
                    <img src={`${basePath}/app_images/main_page.png`} alt="KeyHelper Dashboard" className='w-full h-full object-cover object-top' />
                  </div>
                  <div className='h-8 bg-black flex items-center justify-center'>
                    <div className='w-30 h-1 bg-white/30 rounded-full' />
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className='absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl rotate-12 shadow-lg flex items-center justify-center'>
                <span className='text-white text-xl font-bold rotate-0'>AI</span>
              </div>
              <div className='absolute -bottom-4 -left-4 w-14 h-14 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl -rotate-6 shadow-lg' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
