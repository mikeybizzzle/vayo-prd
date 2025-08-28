'use client';

import { useState } from 'react';

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Destinations', href: '#destinations' },
    { label: 'Benefits', href: '#benefits' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <>
      {/* Mobile Header Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md md:hidden">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="text-2xl font-bold gradient-text">Vayo</div>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
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

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            onClick={() => setIsOpen(false)}
          />
          
          <div className="fixed top-0 right-0 bottom-0 w-80 bg-white z-50 transform transition-transform duration-300 md:hidden">
            <div className="p-6">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold gradient-text">Menu</h2>
                <button
                  onClick={() => setIsOpen(false)}
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

              {/* Navigation Links */}
              <nav className="space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block py-3 px-4 rounded-xl hover:bg-coral-50 transition-colors text-gray-700 hover:text-coral-600 font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              {/* CTA Button */}
              <div className="mt-8">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    const modal = document.querySelector('[data-modal-trigger]') as HTMLElement;
                    modal?.click();
                  }}
                  className="w-full btn-primary text-lg py-4"
                >
                  Start Free Trial
                </button>
                <p className="text-center text-xs text-gray-500 mt-3">
                  No credit card required • Cancel anytime
                </p>
              </div>

              {/* Trust Badges */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="flex items-center justify-center gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-coral-600">4.8</div>
                    <div className="text-xs text-gray-500">Rating</div>
                  </div>
                  <div className="w-px h-10 bg-gray-300"></div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">12K+</div>
                    <div className="text-xs text-gray-500">Members</div>
                  </div>
                  <div className="w-px h-10 bg-gray-300"></div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">24/7</div>
                    <div className="text-xs text-gray-500">Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default MobileNav;