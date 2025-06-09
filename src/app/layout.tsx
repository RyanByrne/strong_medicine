import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: {
    default: 'STRONGMedicine - Functional Health & Wellness',
    template: '%s | STRONGMedicine'
  },
  description: 'Transform your health with STRONGMedicine\'s functional approach to wellness. Personalized health programs, meditation sessions, and expert guidance.',
  keywords: ['functional medicine', 'health', 'wellness', 'meditation', 'nutrition', 'lifestyle medicine'],
  authors: [{ name: 'STRONGMedicine' }],
  creator: 'STRONGMedicine',
  publisher: 'STRONGMedicine',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'STRONGMedicine - Functional Health & Wellness',
    description: 'Transform your health with STRONGMedicine\'s functional approach to wellness.',
    url: 'https://strongmedicine.com',
    siteName: 'STRONGMedicine',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'STRONGMedicine - Functional Health & Wellness',
    description: 'Transform your health with STRONGMedicine\'s functional approach to wellness.',
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <a href="#main-content" className="skip-to-main">
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}