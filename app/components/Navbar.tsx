'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navigationItems = [
    { 
      name: 'Home', 
      href: '/',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    { 
      name: 'Dashboard', 
      href: '/dashboard',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    { 
      name: 'E-Market', 
      href: '/emarket',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 9H21M7 13v-2a4 4 0 018 0v2m-8 0a2 2 0 104 0m0 0v6m0-6a2 2 0 104 0" />
        </svg>
      )
    },
    { 
      name: 'About', 
      href: '/about',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    { 
      name: 'Contact Us', 
      href: '/contact',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
  ]

  const isActive = (href: string) => {
    return pathname === href
  }

  return (
    <nav className="relative z-50 bg-gradient-to-r from-green-500 to-teal-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shadow-xl overflow-hidden">
                <Image
                  src="/masterlogo.png"
                  alt="SCMS Logo"
                  width={48}
                  height={48}
                  className="w-full h-full object-contain"
                  priority
                />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">
                  SCMS
                </h1>
                <p className="text-xs text-white/80 font-medium">Smart Crop Management</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 transform hover:scale-105 relative overflow-hidden ${
                    isActive(item.href)
                      ? 'bg-white text-teal-600 shadow-lg shadow-white/25'
                      : 'text-white/90 hover:text-white hover:bg-white/10 hover:backdrop-blur-sm'
                  }`}
                >
                  <span className="relative z-10">
                    <span className="flex items-center space-x-1">
                      {item.icon}
                      <span>{item.name}</span>
                    </span>
                  </span>
                  {!isActive(item.href) && (
                    <div className="absolute inset-0 bg-white/0 hover:bg-white/5 transition-all duration-300 rounded-xl"></div>
                  )}
                </Link>
              ))}
            </div>
          </div>

          {/* Login Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Link 
              href="/login"
              className="bg-white text-teal-600 px-6 py-3 rounded-xl font-semibold hover:bg-white/90 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-white/25 border border-white/20"
            >
              <span className="flex items-center space-x-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013 3v1" />
                </svg>
                <span>Login</span>
              </span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-white p-3 rounded-xl hover:bg-white/10 transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-br from-green-500 to-teal-600">
          <div className="px-4 pt-4 pb-6 space-y-2 backdrop-blur-xl border-t border-white/20">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block px-4 py-3 rounded-xl text-base font-semibold transition-all duration-300 ${
                  isActive(item.href)
                    ? 'bg-white text-teal-600 shadow-lg'
                    : 'text-white hover:text-white hover:bg-white/10'
                }`}
                onClick={() => setIsOpen(false)}
              >
                <span className="flex items-center space-x-2">
                  {item.icon}
                  <span>{item.name}</span>
                </span>
              </Link>
            ))}
            <div className="pt-4 mt-4 border-t border-white/20">
              <Link 
                href="/login"
                className="flex items-center justify-center space-x-2 mx-2 bg-white text-teal-600 py-3 px-4 rounded-xl font-semibold hover:bg-white/90 transition-all duration-300 shadow-lg"
                onClick={() => setIsOpen(false)}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013 3v1" />
                </svg>
                <span>Login</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar