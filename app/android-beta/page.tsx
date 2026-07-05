'use client';

import { useForm } from '@formspree/react';
import Link from 'next/link';

export default function AndroidBetaPage() {
  const [state, handleSubmit] = useForm(
    process.env.NEXT_PUBLIC_FORMSPREE_FORM_KEY || 'REPLACE_WITH_YOUR_FORM_KEY'
  );

  if (state.succeeded) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 flex items-center justify-center px-4 py-20">
        <div className="max-w-lg w-full bg-white rounded-3xl shadow-lg p-8 md:p-12 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">You&apos;re on the list!</h3>
          <p className="text-gray-600">
            We&apos;ll send an invite to your email when a spot opens up. Stay tuned!
          </p>
          <div className="mt-8">
            <Link href="/" className="text-green-600 hover:underline text-sm font-medium">
              &larr; Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 flex items-center justify-center px-4 py-20">
      <div className="max-w-lg w-full bg-white rounded-3xl shadow-lg p-8 md:p-12">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
            Beta Testing
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-1">
            KeyHelper
          </h1>
          <p className="text-green-600 font-semibold text-lg">for Android</p>
          <p className="text-gray-600 mt-4 leading-relaxed">
            Our Android app is currently in closed beta. We&apos;re fine-tuning the experience
            before the public launch. Be among the first to try it out!
          </p>
        </div>

        <div className="bg-green-50 rounded-xl p-6 mb-8">
          <h2 className="font-semibold text-gray-900 mb-3">What you&apos;ll get early access to:</h2>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-0.5">&#10003;</span>
              Social notes with location tagging and nearby discovery
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-0.5">&#10003;</span>
              On-device AI agent (Gemma 4) — works offline
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-0.5">&#10003;</span>
              Travel planner, finance tracker, and task management
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-0.5">&#10003;</span>
              Workout timer, Pomodoro, countdowns, and real-time chat
            </li>
          </ul>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
              Your email address
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition"
            />
          </div>

          {state.errors && (
            <p className="text-red-500 text-sm">{state.errors.getFormErrors().join(', ')}</p>
          )}

          <button
            type="submit"
            disabled={state.submitting}
            className="w-full bg-green-600 text-white font-semibold py-3 rounded-lg hover:bg-green-700 disabled:opacity-60 disabled:cursor-not-allowed transition"
          >
            {state.submitting ? 'Submitting...' : 'Get Early Access'}
          </button>
        </form>

        <div className="mt-8 text-center">
          <Link href="/" className="text-green-600 hover:underline text-sm font-medium">
            &larr; Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
