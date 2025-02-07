import type { Metadata } from 'next'
import './globals.css'
import HeaderComp from '@/components/HeaderComp'
import FooterDazzle from '@/components/FooterDazzle'

export const metadata: Metadata = {
  title: 'DAZZLE | A Market Research Company',
  description: 'Explore DAZZLE’s cutting-edge technology, innovative solutions, and expert insights. Empowering businesses with AI, web, and mobile solutions.',
  keywords: 'DAZZLE, technology, innovation, marketing, research, company, solutions, software services',
  openGraph: {
    title: 'DAZZLE - Innovative Solutions for a Brighter Future',
    description: 'Discover DAZZLE’s expertise in AI, web, and mobile development. Stay ahead with our top-notch technology solutions.',
    url: 'https://yourwebsite.com',
    type: 'website',
    images: [
      {
        url: 'https://yourwebsite.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'DAZZLE - Innovative Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DAZZLE - Innovative Solutions for a Brighter Future',
    description: 'Unlock the potential of AI, web, and mobile technology with DAZZLE. Cutting-edge solutions for your business.',
    images: ['https://yourwebsite.com/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="pt-16 md:pt-20"> {/* Adjust based on header height */}
        <HeaderComp />
        {children}
        <FooterDazzle/>
      </body>
    </html>
  )
}
