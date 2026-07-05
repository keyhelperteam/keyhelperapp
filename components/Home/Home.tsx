'use client';
import React from 'react'
import Hero from './Hero/Hero'
import WhyChoose from './WhyChoose/WhyChoose'
import Feature from './Feature/Feature'
import Footer from './Footer/Footer'
import Review from './Review/Review';
import { useAOS } from '@/hooks/useAOS';

const Home = () => {
  useAOS();

  return (
    <div className='overflow-hidden'>
      <Hero />
      <WhyChoose />
      <Feature />
      <Review />
      <Footer />
    </div>
    
  )
}

export default Home
