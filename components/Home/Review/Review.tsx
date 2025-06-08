'use client';
import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Review = () => {
  const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
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
    <div className='pt-16 pb-16 bg-[#fcf6fa]'>
      <h1 className='text-2xl md:text-3xl font-bold text-center mb-8'>What Our Users Say</h1>
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
          <div className='p-4 bg-white rounded-lg shadow-md'>
            <p>&quot;This app has changed my life! The features are amazing and the support is top-notch.</p>
            <h3 className='font-bold mt-2'>- User 1</h3>
          </div>
          <div className='p-4 bg-white rounded-lg shadow-md'>
            <p>I love the user interface and the ease of use. Highly recommend!&rdquo;</p>
            <h3 className='font-bold mt-2'>- User 2</h3>
          </div>
          <div className='p-4 bg-white rounded-lg shadow-md'>
            <p>A fantastic app with great functionality. It has everything I need.</p>
            <h3 className='font-bold mt-2'>- User 3</h3>
          </div>
        </Carousel>
        </div>
      </div>
  )
}

export default Review