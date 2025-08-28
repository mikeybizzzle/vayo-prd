'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'How It Works', href: '/#how-it-works' },
    { label: 'Destinations', href: '/#destinations' },
    { label: 'Benefits', href: '/#benefits' },
    { label: 'Testimonials', href: '/#testimonials' },
    { label: 'FAQ', href: '/#faq' }
  ];

  const isHomePage = pathname === '/';

  return (
    <>
      {/* Desktop Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg py-4' : 'bg-white/95 backdrop-blur-sm py-6'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-coral-400 to-orange-400 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                V
              </div>
              <span className="text-2xl font-bold gradient-text">Vayo</span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-700 hover:text-coral-600 font-medium transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href="tel:1-800-8296"
                className="text-gray-700 hover:text-coral-600 font-medium transition-colors"
              >
                📞 1-800-VAYO
              </a>
              <button
                onClick={() => {
                  if (isHomePage) {
                    const modal = document.querySelector('[data-modal-trigger]') as HTMLElement;
                    modal?.click();
                  } else {
                    window.location.href = '/';
                  }
                }}
                className="bg-gradient-to-r from-coral-500 to-orange-500 text-white font-bold px-6 py-2.5 rounded-full hover:scale-105 transition-transform shadow-lg"
              >
                Start Free Trial
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          <div className="fixed top-0 right-0 bottom-0 w-80 bg-white z-40 transform transition-transform duration-300 md:hidden shadow-2xl">
            <div className="p-6">
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between mb-8">
                <Link href="/" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                  <div className="w-8 h-8 bg-gradient-to-br from-coral-400 to-orange-400 rounded-xl flex items-center justify-center text-white font-bold">
                    V
                  </div>
                  <span className="text-xl font-bold gradient-text">Vayo</span>
                </Link>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Mobile Navigation Links */}
              <nav className="space-y-2">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block py-3 px-4 rounded-xl hover:bg-coral-50 transition-colors text-gray-700 hover:text-coral-600 font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                
                <div className="pt-4 border-t border-gray-200 mt-4">
                  <a
                    href="tel:1-800-8296"
                    className="block py-3 px-4 rounded-xl hover:bg-coral-50 transition-colors text-gray-700 hover:text-coral-600 font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    📞 1-800-VAYO
                  </a>
                </div>
              </nav>

              {/* Mobile CTA Button */}
              <div className="mt-8">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    if (isHomePage) {
                      const modal = document.querySelector('[data-modal-trigger]') as HTMLElement;
                      modal?.click();
                    } else {
                      window.location.href = '/';
                    }
                  }}
                  className="w-full bg-gradient-to-r from-coral-500 to-orange-500 text-white font-bold py-4 rounded-2xl hover:scale-105 transition-transform shadow-lg"
                >
                  Start Free Trial
                </button>
                <p className="text-center text-xs text-gray-500 mt-3">
                  14-day free trial • No credit card required
                </p>
              </div>

              {/* Trust Indicators */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-coral-600">4.8</div>
                    <div className="text-xs text-gray-500">Rating</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600">12K+</div>
                    <div className="text-xs text-gray-500">Members</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-600">24/7</div>
                    <div className="text-xs text-gray-500">Support</div>
                  </div>
                </div>
              </div>

              {/* Legal Links */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <Link
                    href="/terms"
                    className="text-gray-500 hover:text-coral-600 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Terms
                  </Link>
                  <Link
                    href="/privacy"
                    className="text-gray-500 hover:text-coral-600 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Privacy
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Spacer for fixed navbar */}
      <div className={`${isScrolled ? 'h-16' : 'h-20'}`}></div>
    </>
  );
};

export default Navbar;