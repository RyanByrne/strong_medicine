'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Logo from '@/components/ui/Logo'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  interface NavItem {
    name: string
    href: string
    external?: boolean
  }

  const navigation: NavItem[] = [
    { name: 'About', href: '/about' },
    { name: 'Programs', href: '/programs' },
    { name: 'SIT Library', href: '/sit-library' },
    { name: 'Blog', href: '/blog' },
  ]

  // Determine if we're on a page with dark hero (homepage, about, programs, sit-library, blog, waitlist)
  const pagesWithDarkHero = ['/', '/about', '/programs', '/sit-library', '/blog', '/waitlist']
  const isDarkHero = pagesWithDarkHero.includes(pathname)
  const shouldUseLightText = isDarkHero && !isScrolled

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'glass-effect shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container-custom" aria-label="Top">
        <div className="flex w-full items-center justify-between py-4 lg:py-6">
          <div className="flex items-center">
            <Link 
              href="/" 
              className={`hover:opacity-80 transition-opacity ${
                shouldUseLightText ? 'text-white' : 'text-dark-900'
              }`}
            >
              <Logo className="text-2xl lg:text-3xl" />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-base font-medium hover:text-accent transition-all duration-200 relative group ${
                  shouldUseLightText ? 'text-white' : 'text-dark-900'
                }`}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-200 group-hover:w-full"></span>
              </Link>
            ))}
            <a
              href={process.env.NEXT_PUBLIC_CHAT_TOOL_URL || 'http://localhost:3002'}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary ml-4"
            >
              Start Onboarding
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              type="button"
              className={`inline-flex items-center justify-center rounded-xl p-2 hover:text-accent transition-all duration-200 ${
                shouldUseLightText 
                  ? 'text-white hover:bg-white/10' 
                  : 'text-dark-900 hover:bg-gray-100'
              }`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden">
            <div className="glass-effect rounded-2xl p-6 mt-2 space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-lg font-medium text-dark-900 hover:text-accent transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href={process.env.NEXT_PUBLIC_CHAT_TOOL_URL || 'http://localhost:3002'}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full mt-6"
                onClick={() => setMobileMenuOpen(false)}
              >
                Start Onboarding
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}