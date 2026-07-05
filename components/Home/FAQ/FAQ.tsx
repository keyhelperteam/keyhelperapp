'use client';

import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const faqs = [
  {
    question: 'What is KeyHelper?',
    answer: 'KeyHelper is an all-in-one lifestyle companion app that combines social notes, task management, travel planning, finance tracking, workout timers, Pomodoro sessions, and an on-device AI assistant — all in a single app.',
  },
  {
    question: 'Is KeyHelper really free?',
    answer: 'Yes! KeyHelper is completely free to download and use. All features are available without any subscription or in-app purchases. We may introduce optional paid features in the future with advance notice.',
  },
  {
    question: 'How does the on-device AI work?',
    answer: 'KeyHelper uses Google Gemma 4, an AI model that runs entirely on your device. It downloads the model once (~2.4GB), and all processing happens locally — your data never leaves your phone. It works offline and respects your privacy completely.',
  },
  {
    question: 'What platforms are supported?',
    answer: 'KeyHelper is available on iOS (App Store) and Android (Google Play). The Android version is currently in closed beta — you can sign up for early access on our Android Beta page.',
  },
  {
    question: 'How private is my data?',
    answer: 'Privacy is our top priority. Your personal notes marked as "private" are visible only to you. On-device AI means your content is never sent to cloud AI servers. You can permanently delete your account and all associated data at any time from within the app.',
  },
  {
    question: 'Can I use KeyHelper offline?',
    answer: 'Yes! The on-device AI and many features (notes, todos, timers, finance tracking) work without an internet connection. Internet is only needed for social features like syncing public notes, chat messaging, and push notifications.',
  },
  {
    question: 'How do I report inappropriate content?',
    answer: 'You can report any note directly from the app using the built-in reporting feature. Reports are reviewed by our team, and violating content is removed. You can also block users and individual notes.',
  },
  {
    question: 'How do I delete my account?',
    answer: 'Go to Profile → Settings → Delete Account from within the app. This permanently removes your profile, all notes, travel plans, saved posts, images, social relationships, and authentication account. This action is irreversible.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className='py-24 bg-white relative' data-aos="fade-up">
      <div className='w-[80%] max-w-3xl mx-auto'>
        <div className='text-center mb-16'>
          <span className='text-green-600 font-semibold text-sm uppercase tracking-wider'>FAQ</span>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4'>
            Got Questions?
          </h2>
          <p className='text-gray-600 text-lg'>
            Everything you need to know about KeyHelper.
          </p>
        </div>

        <div className='space-y-3'>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border rounded-2xl transition-all duration-300 ${
                openIndex === index
                  ? 'border-green-200 bg-green-50/50 shadow-md'
                  : 'border-gray-200 bg-white hover:border-gray-300'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className='w-full flex items-center justify-between px-6 py-5 text-left'
              >
                <span className='font-semibold text-gray-900 pr-4'>{faq.question}</span>
                <FaChevronDown
                  className={`flex-shrink-0 text-gray-400 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180 text-green-600' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 pb-5 px-6' : 'max-h-0'
                }`}
              >
                <p className='text-gray-600 leading-relaxed'>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
