import type { Metadata } from 'next';
import './globals.css';
import HeaderComp from '@/components/HeaderComp';
import FooterDazzle from '@/components/FooterDazzle';

export const metadata: Metadata = {
  title: 'DAZZLE | A Market Research Company',
  description: 'Explore DAZZLE\'s cutting-edge technology, innovative solutions, and expert insights. Empowering businesses with AI, web, and mobile solutions.',
  keywords: 'DAZZLE, technology, innovation, marketing, research, company, solutions, software services',
  openGraph: {
    title: 'DAZZLE - Innovative Solutions for a Brighter Future',
    description: 'Discover DAZZLE\'s expertise in AI, web, and mobile development. Stay ahead with our top-notch technology solutions.',
    url: 'https://dazzle-delta.vercel.app', // Update this to your actual domain
    type: 'website',
    images: [{
      url: 'https://dazzle-delta.vercel.app/og-image.jpg', // Update with actual image path
      width: 1200,
      height: 630,
      alt: 'DAZZLE - Innovative Solutions',
    }],
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
  verification: {
    google: 'your-google-verification-code', // Add Google Search Console verification
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="pt-16 md:pt-20"> {/* Adjust based on header height */}
        <HeaderComp />
        {children}
        <FooterDazzle />
      </body>
    </html>
  );
}
