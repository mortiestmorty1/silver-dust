'use client';

import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="glass-effect fixed top-0 left-0 right-0 z-50 border-b border-gray-200 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
          {/* Left Section: Logo */}
          <div className="flex items-center flex-1">
            <h1 className="text-2xl font-bold gradient-text">Silver Dust</h1>
            <span className="ml-2 text-pink-dark text-sm font-medium">Jewelry</span>
          </div>

          {/* Center Section: Nav */}
          <div className="hidden md:flex flex-1 justify-center">
            <div className="flex items-baseline space-x-8">
              <a href="#" className="text-text-primary hover:text-pink-dark px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Home
              </a>
              <a href="#collections" className="text-text-primary hover:text-pink-dark px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Collections
              </a>
              <a href="#rings" className="text-text-primary hover:text-pink-dark px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Rings
              </a>
              <a href="#necklaces" className="text-text-primary hover:text-pink-dark px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Necklaces
              </a>
              <a href="#earrings" className="text-text-primary hover:text-pink-dark px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Earrings
              </a>
              <a href="#about" className="text-text-primary hover:text-pink-dark px-3 py-2 rounded-md text-sm font-medium transition-colors">
                About
              </a>
              <a href="#contact" className="text-text-primary hover:text-pink-dark px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* Right Section: Cart & Menu */}
          <div className="flex items-center justify-end flex-1 space-x-4">
            {/* Cart Icon */}
            <button className="relative p-2 text-text-primary hover:text-pink-dark transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
              </svg>
              <span className="absolute -top-1 -right-1 bg-pink text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-text-primary hover:text-pink-dark transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white backdrop-blur-sm rounded-lg mt-2 border border-gray-200 shadow-lg">
              <a href="#" className="text-text-primary hover:text-pink-dark block px-3 py-2 rounded-md text-base font-medium">
                Home
              </a>
              <a href="#collections" className="text-text-primary hover:text-pink-dark block px-3 py-2 rounded-md text-base font-medium">
                Collections
              </a>
              <a href="#rings" className="text-text-primary hover:text-pink-dark block px-3 py-2 rounded-md text-base font-medium">
                Rings
              </a>
              <a href="#necklaces" className="text-text-primary hover:text-pink-dark block px-3 py-2 rounded-md text-base font-medium">
                Necklaces
              </a>
              <a href="#earrings" className="text-text-primary hover:text-pink-dark block px-3 py-2 rounded-md text-base font-medium">
                Earrings
              </a>
              <a href="#about" className="text-text-primary hover:text-pink-dark block px-3 py-2 rounded-md text-base font-medium">
                About
              </a>
              <a href="#contact" className="text-text-primary hover:text-pink-dark block px-3 py-2 rounded-md text-base font-medium">
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
