import React from 'react';
import { FaBrain, FaCalendarCheck, FaChartPie, FaComments, FaHourglassHalf, FaMapMarkedAlt, FaRunning, FaShareAlt } from 'react-icons/fa';

const Feature = () => {
  const features = [
    {
      icon: <FaShareAlt className='text-green-600' />,
      title: 'Social Notes',
      description: 'Share photos, locations, and moments with public, friends-only, or private visibility. Discover nearby posts within 5km.',
    },
    {
      icon: <FaBrain className='text-green-600' />,
      title: 'On-Device AI',
      description: 'Chat, caption images, translate text, estimate calories, plan trips, and analyze finances — all running locally on your device.',
    },
    {
      icon: <FaCalendarCheck className='text-green-600' />,
      title: 'Task Management',
      description: 'Organize todos with color-coded priorities, due dates, and reminders. Never miss a deadline again.',
    },
    {
      icon: <FaMapMarkedAlt className='text-green-600' />,
      title: 'Travel Planner',
      description: 'Create itineraries with AI-powered suggestions, Google Maps locations, expense tracking, and collaborative planning.',
    },
    {
      icon: <FaChartPie className='text-green-600' />,
      title: 'Finance Tracker',
      description: 'Track monthly income and expenses with AI-generated insights, spending analysis, and actionable advice.',
    },
    {
      icon: <FaRunning className='text-green-600' />,
      title: 'Workout Timer & Plans',
      description: 'Guided workout sessions with animated exercise illustrations. Quick start, custom intervals, and progress tracking.',
    },
    {
      icon: <FaHourglassHalf className='text-green-600' />,
      title: 'Pomodoro & Countdowns',
      description: 'Stay focused with configurable Pomodoro sessions and track important dates with countdown timers.',
    },
    {
      icon: <FaComments className='text-green-600' />,
      title: 'Real-Time Chat',
      description: 'Message friends instantly with read receipts and chat history. Stay connected with your community.',
    },
  ];

  return (
    <div id="features" className='bg-gradient-to-b from-white to-green-50 pt-20 pb-20' data-aos="fade-up">
      <div className='w-[80%] mx-auto text-center'>
        <h1 className='mt-6 text-2xl md:text-3xl capitalize font-bold text-center text-gray-900'>Everything You Need, In One App</h1>
        <p className='text-gray-600 mt-4 max-w-2xl mx-auto text-lg'>
          KeyHelper replaces a dozen single-purpose apps with powerful, integrated tools — all backed by privacy-first, on-device AI.
        </p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10'>
          {features.map((feature, index) => (
            <div key={index} data-aos="zoom-in" data-aos-delay={index * 100} className='flex flex-col items-center text-center space-y-4 p-6 bg-white rounded-3xl shadow-md hover:shadow-lg transition-shadow duration-300'>
              <div className='text-4xl'>{feature.icon}</div>
              <h1 className='text-xl font-bold'>{feature.title}</h1>
              <p className='text-gray-600 text-sm leading-relaxed'>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Feature
