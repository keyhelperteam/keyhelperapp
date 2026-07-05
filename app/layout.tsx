import type { Metadata } from "next";
import { Poppins } from 'next/font/google';
import "./globals.css";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";

const font = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const baseUrl = 'https://keyhelperteam.github.io/keyhelperapp';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'KeyHelper — Your All-in-One Lifestyle Companion',
    template: '%s | KeyHelper',
  },
  description:
    'Share moments, plan trips, track finances, stay productive, and get fit — all powered by an on-device AI that respects your privacy. The only app you need to organize your life.',
  keywords: [
    'KeyHelper', 'social notes', 'task management', 'travel planner', 'finance tracker',
    'pomodoro timer', 'workout timer', 'countdown', 'AI assistant', 'on-device AI',
    'productivity app', 'lifestyle app', 'location sharing', 'privacy-first app',
  ],
  authors: [{ name: 'KeyHelper Team', url: baseUrl }],
  creator: 'KeyHelper Team',
  publisher: 'KeyHelper',
  applicationName: 'KeyHelper',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    siteName: 'KeyHelper',
    title: 'KeyHelper — Your All-in-One Lifestyle Companion',
    description:
      'Share moments, plan trips, track finances, stay productive, and get fit — all powered by an on-device AI that respects your privacy.',
    url: baseUrl,
    images: [
      {
        url: `${baseUrl}/images/hero.png`,
        width: 700,
        height: 700,
        alt: 'KeyHelper App',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KeyHelper — Your All-in-One Lifestyle Companion',
    description:
      'Share moments, plan trips, track finances, stay productive, and get fit — all powered by an on-device AI.',
    images: [`${baseUrl}/images/hero.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: baseUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} antialiased`}>
        <div className="min-h-screen flex flex-col">
          <ResponsiveNav />
          <main className="flex-2 pt-20">{children}</main>
        </div>
      </body>
    </html>
  );
}
