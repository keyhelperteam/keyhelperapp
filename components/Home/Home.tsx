'use client';
import React from 'react'
import Hero from './Hero/Hero'
import StatsCounter from './StatsCounter/StatsCounter'
import Feature from './Feature/Feature'
import PhoneShowcase from './PhoneShowcase/PhoneShowcase'
import Review from './Review/Review'
import FAQ from './FAQ/FAQ'
import CTABanner from './CTABanner/CTABanner'
import Footer from './Footer/Footer'
import { useAOS } from '@/hooks/useAOS';

const Home = () => {
  useAOS();

  return (
    <div className='overflow-hidden'>
      <Hero />
      <StatsCounter />
      <Feature />
      <PhoneShowcase />
      <Review />
      <FAQ />
      <CTABanner />
      <Footer />
    </div>
  )
}

export default Home
