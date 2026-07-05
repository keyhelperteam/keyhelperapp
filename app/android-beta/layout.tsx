import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Android Beta — Get Early Access',
  description:
    'KeyHelper for Android is currently in closed beta. Sign up with your email to get early access to social notes, on-device AI, travel planner, and more.',
  openGraph: {
    title: 'KeyHelper Android Beta — Get Early Access',
    description:
      'Be among the first to try KeyHelper on Android. On-device AI, social notes, travel planner, finance tracker — all in one app.',
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function AndroidBetaLayout({ children }: { children: React.ReactNode }) {
  return children;
}
