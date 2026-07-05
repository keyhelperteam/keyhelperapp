import type { Metadata } from 'next';
import Home from '@/components/Home/Home';
import Script from 'next/script';

const baseUrl = 'https://keyhelperteam.github.io/keyhelperapp';

export const metadata: Metadata = {
  title: 'KeyHelper — Your All-in-One Lifestyle Companion',
  description:
    'Share moments, plan trips, track finances, stay productive, and get fit — all powered by an on-device AI that respects your privacy. The only app you need to organize your life.',
  openGraph: {
    title: 'KeyHelper — Your All-in-One Lifestyle Companion',
    description:
      'Share moments, plan trips, track finances, stay productive, and get fit — all powered by an on-device AI.',
    url: baseUrl,
    images: [{ url: `${baseUrl}/images/keyhelper_marketing_banner.png`, width: 1024, height: 1024, alt: 'KeyHelper — All-in-One Lifestyle Companion App' }],
  },
  alternates: {
    canonical: baseUrl,
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'KeyHelper',
  applicationCategory: 'Lifestyle',
  operatingSystem: 'iOS, Android',
  description:
    'An all-in-one lifestyle companion app with social notes, task management, travel planner, finance tracker, on-device AI, and more.',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '3',
  },
};

export default function HomePage() {
  return (
    <>
      <Script
        id="home-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Home />
    </>
  );
}
