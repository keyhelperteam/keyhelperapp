'use client';

import { useEffect, useRef, useState } from 'react';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const features = [
  {
    image: `${basePath}/app_images/main_page.png`,
    title: 'All-in-One Dashboard',
    subtitle: 'Everything at a Glance',
    description: 'Your personal command center — quick access to notes, todos, countdowns, travel plans, and more. See what matters most on a single screen.',
    tags: ['iOS', 'Android', 'Dark Theme'],
  },
  {
    image: `${basePath}/app_images/global_friends_notes.png`,
    title: 'Social Notes',
    subtitle: 'Share & Discover Nearby',
    description: 'Post photos with location tags and choose your audience — public, friends-only, or private. Discover what\'s happening within a 5km radius.',
    tags: ['Location-Based', 'Privacy Controls'],
  },
  {
    image: `${basePath}/app_images/ai_agent_chat.png`,
    title: 'On-Device AI Agent',
    subtitle: 'Powered by Gemma 4',
    description: 'Chat with AI, caption images, translate text, estimate calories, and plan trips — all running locally. Zero data leaves your phone.',
    tags: ['Offline', '100% Private'],
  },
  {
    image: `${basePath}/app_images/travel_app.png`,
    title: 'Travel Planner',
    subtitle: 'AI-Assisted Trips',
    description: 'Create detailed itineraries with AI suggestions, Google Maps integration, and expense tracking. Plan trips collaboratively with friends.',
    tags: ['Google Maps', 'Expenses'],
  },
  {
    image: `${basePath}/app_images/todo_app.png`,
    title: 'Task & Productivity Hub',
    subtitle: 'Stay Organized',
    description: 'Color-coded todos with priorities and reminders, countdown trackers, and a Pomodoro timer — everything to keep you focused and productive.',
    tags: ['Reminders', 'Pomodoro'],
  },
  {
    image: `${basePath}/app_images/finance_app.png`,
    title: 'Finance Tracker',
    subtitle: 'Smart Money Management',
    description: 'Track monthly income and expenses with AI-powered insights. Get spending analysis and actionable advice to manage your money.',
    tags: ['AI Insights', 'Budgeting'],
  },
];

const PhoneShowcase = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % features.length);
          }, 5000);
          return () => clearInterval(interval);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const current = features[activeIndex];

  return (
    <div ref={sectionRef} className='py-24 bg-gray-50 relative overflow-hidden' data-aos="fade-up">
      <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(34,197,94,0.08),transparent_50%),radial-gradient(ellipse_at_bottom_left,rgba(16,185,129,0.05),transparent_50%)]' />
      <div className='w-[85%] mx-auto relative'>
        <div className='text-center mb-16'>
          <span className='text-green-600 font-semibold text-sm uppercase tracking-wider'>Take a Tour</span>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4'>
            See KeyHelper in Action
          </h2>
          <p className='text-gray-600 text-lg max-w-2xl mx-auto'>
            One app, twelve features. Swipe through to explore what KeyHelper can do for you.
          </p>
        </div>

        <div className='flex flex-col lg:flex-row items-center gap-12 lg:gap-20'>
          {/* Phone Mockup */}
          <div className='relative flex-shrink-0' data-aos="fade-right">
            <div className='w-[260px] md:w-[300px] h-[530px] md:h-[600px] bg-gray-800 rounded-[3rem] p-3 shadow-2xl relative mx-auto'>
              <div className='absolute top-0 left-1/2 -translate-x-1/2 w-36 h-7 bg-gray-800 rounded-b-2xl z-10' />
              <div className='w-full h-full rounded-[2.5rem] overflow-hidden bg-black'>
                <div className='h-8 bg-black flex items-center justify-between px-8 pt-1'>
                  <span className='text-[10px] font-semibold text-white/70'>9:41</span>
                  <div className='flex items-center gap-1.5'>
                    <div className='w-3 h-3' />
                    <div className='w-3 h-3' />
                    <div className='w-3 h-2 rounded-sm border border-white/40 relative'>
                      <div className='absolute inset-0.5 bg-white rounded-sm' />
                    </div>
                  </div>
                </div>
                <div className='h-[calc(100%-56px)] bg-black flex items-center justify-center overflow-hidden'>
                  <img
                    src={current.image}
                    alt={current.title}
                    className='w-full h-full object-cover object-top transition-opacity duration-700'
                  />
                </div>
                <div className='h-8 bg-black flex items-center justify-center'>
                  <div className='w-30 h-1 bg-white/30 rounded-full' />
                </div>
              </div>
            </div>
            {/* Shadow */}
            <div className='absolute -bottom-4 left-1/2 -translate-x-1/2 w-[200px] h-8 bg-black/20 blur-2xl rounded-full' />
          </div>

          {/* Feature info */}
          <div className='flex-1' data-aos="fade-left">
            <div className='flex gap-2 mb-8 overflow-x-auto pb-2'>
              {features.map((feature, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`flex-shrink-0 w-16 h-16 rounded-2xl overflow-hidden border-2 transition-all duration-300 ${
                    activeIndex === idx
                      ? 'border-green-500 scale-110 shadow-lg'
                      : 'border-gray-200 opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={feature.image} alt={feature.title} className='w-full h-full object-cover object-top' />
                </button>
              ))}
            </div>

            <div className='transition-all duration-500' key={activeIndex}>
              <span className='inline-block text-green-600 font-semibold text-sm mb-2 uppercase tracking-wider'>
                {current.subtitle}
              </span>
              <h3 className='text-2xl md:text-3xl font-bold text-gray-900 mb-4'>
                {current.title}
              </h3>
              <p className='text-gray-600 text-lg leading-relaxed mb-6'>
                {current.description}
              </p>
              <div className='flex flex-wrap gap-3'>
                {current.tags.map((tag) => (
                  <span key={tag} className='text-xs font-semibold text-green-700 bg-green-50 px-3 py-1.5 rounded-full border border-green-100'>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneShowcase;
