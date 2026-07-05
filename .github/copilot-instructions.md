# KeyHelper Marketing Website - GitHub Copilot Instructions

This is the **marketing/landing page** for the KeyHelper mobile app. The actual Flutter mobile app lives at `/Users/kahfaichong/Projects/flutter/keyhelper`.

## Project Overview

- **Framework**: Next.js 15.3.1 (App Router) with Turbopack
- **Styling**: Tailwind CSS 4.1.5
- **Language**: TypeScript 5
- **Font**: Poppins (from next/font/google, weights 100-900)
- **Icons**: react-icons (fa, hi2 families)
- **Carousel**: react-multi-carousel
- **Animation**: aos 3.0.0-beta.6 (installed, use it for scroll animations)
- **Deployment**: GitHub Pages via `.github/workflows/nextjs.yml`

## KeyHelper Mobile App (what we're marketing)

KeyHelper is an **all-in-one super app** built with Flutter/Dart, backed by Firebase (Auth, Firestore, Storage, Cloud Functions), Riverpod state management, and an **on-device AI agent** powered by Google Gemma 4.

### Core Features to highlight on the marketing site:
1. **Social Notes**: Share notes with photos, locations, and statuses (public, friends-only, private). Nearby notes within 5km radius.
2. **On-Device AI Agent (Gemma 4)**: Local AI for chat, image captioning, translation, calorie estimation, travel planning, and financial analysis. Works offline.
3. **Todo & Task Management**: Create tasks with priorities, due dates, reminders, and color coding.
4. **Travel Planning**: Create/manage itineraries with AI-powered plan generation, Google Maps integration, and expense tracking.
5. **Finance Tracker**: Monthly income/expense tracking with AI-powered insights and advice.
6. **Countdown Tracker**: Custom countdowns with home screen widget (2x2).
7. **Pomodoro Timer**: Focus/work timer with configurable sessions.
8. **Workout Timer & Plans**: Exercise timers with animated workout illustrations (12 exercises).
9. **Real-Time Chat**: Instant messaging with read receipts.
10. **Follow System**: Social graph with approval workflow and push notifications.
11. **Quick Shortcuts**: One-tap note posting with camera, GPS, and voice input.
12. **Home Screen Widget**: 2x2 widget showing nearest countdown data.

### Design
- **Primary color**: Green-600 (#16a34a), Dark green (#264033) for widgets
- **Platforms**: Android (SDK 21+) and iOS (12+)
- **Privacy-first**: On-device AI, complete account deletion with full data cleanup

## Marketing Site Conventions

- Single-page scrollable landing site (Home page is main, plus Privacy & ToS)
- Images use `getImagePath()` from `@/lib/imagePath` (handles GitHub Pages basePath)
- Navbar: fixed, scroll-aware background (transparent → white at scrollY > 90)
- Container width: w-[80%] on most sections
- Card styles: rounded-3xl/rounded-xl, shadow-md, hover:shadow-lg
- Section background gradients: `from-green-50 via-white to-emerald-50`, `from-green-50 to-emerald-50`
- Responsive breakpoints: lg (desktop), md (tablet), mobile (default)
- Sections are composed in `components/Home/Home.tsx`
- Nav links defined in `constant/navLinks.tsx`

## When creating new sections or features
- Follow the existing card pattern (icon + title + description)
- Use green color variants for accents
- Use Poppins font (already configured in layout.tsx)
- Keep sections scrollable as a single page
- Use aos animations for scroll-triggered reveals
- Always use `getImagePath()` for image src paths
- Client components need `'use client'` directive

## Do NOT
- Do not create new pages/routes unless explicitly required
- Do not change the Privacy Policy or Terms of Service pages
- Do not modify the GitHub Actions workflow
- Do not change the Firebase configuration
- Do not remove the travel plan feature (it was intentionally removed)
