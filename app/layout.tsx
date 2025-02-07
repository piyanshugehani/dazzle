import type { Metadata } from 'next'
import './globals.css'
import HeaderComp from '@/components/HeaderComp'
import FooterDazzle from '@/components/FooterDazzle'

export const metadata: Metadata = {
  title: 'DAZZLE',
  description: 'Created with ❤️ by DAZZLE',
}

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
