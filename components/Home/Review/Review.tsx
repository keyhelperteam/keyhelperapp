'use client';
import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Review = () => {
  const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
    slidesToSlide: 1
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1
  }
};
  return (
    <div className='pt-16 pb-16 bg-gradient-to-r from-green-50 to-emerald-50' data-aos="fade-up">
      <h1 className='text-2xl md:text-3xl font-bold text-center mb-8 text-gray-900'>What Our Community Says</h1>
      <div className='w-[80%] mx-auto'>
        <Carousel
          arrows={false}
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={5000}
          keyBoardControl={true}
          showDots={true}
          removeArrowOnDeviceType={["tablet", "mobile"]}
        >
          <div className='p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow mx-2'>
            <p className='text-gray-700 mb-3'>&quot;The on-device AI is a game changer. I can plan my entire trip, caption photos, and track expenses without any internet. Privacy I can actually trust.&quot;</p>
            <h3 className='font-bold text-gray-900'>- Sarah M.</h3>
            <p className='text-sm text-gray-500'>Travel Photographer</p>
          </div>
          <div className='p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow mx-2'>
            <p className='text-gray-700 mb-3'>&quot;I deleted 4 apps after switching to KeyHelper. Todo list, finance tracker, Pomodoro timer, and workout planner — all in one place. The AI insights are incredibly useful.&quot;</p>
            <h3 className='font-bold text-gray-900'>- James K.</h3>
            <p className='text-sm text-gray-500'>Productivity Enthusiast</p>
          </div>
          <div className='p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow mx-2'>
            <p className='text-gray-700 mb-3'>&quot;Love the social features. Sharing location-tagged notes with friends and seeing what&apos;s happening nearby in real-time keeps me connected to my community.&quot;</p>
            <h3 className='font-bold text-gray-900'>- Emma L.</h3>
            <p className='text-sm text-gray-500'>Community Builder</p>
          </div>
        </Carousel>
        </div>
      </div>
  )
}

export default Review
