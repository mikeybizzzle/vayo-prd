'use client';

import { useState, useEffect } from 'react';

const StickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [savedAmount, setSavedAmount] = useState(3247);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 500px
      const scrolled = window.scrollY > 500;
      setIsVisible(scrolled);
    };

    // Animate saved amount
    const interval = setInterval(() => {
      setSavedAmount(prev => prev + Math.floor(Math.random() * 50));
    }, 3000);

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t-4 border-coral-400 shadow-2xl transform transition-transform duration-300">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left: Value Prop */}
          <div className="flex items-center gap-4">
            <div className="hidden md:block">
              <div className="flex -space-x-3">
                {[31, 32, 33].map(i => (
                  <img
                    key={i}
                    src={`https://i.pravatar.cc/40?img=${i}`}
                    alt="Member"
                    className="w-10 h-10 rounded-full border-2 border-white"
                  />
                ))}
              </div>
            </div>
            
            <div>
              <p className="text-sm text-gray-600">
                <span className="font-bold text-coral-600">247 people</span> viewing this page
              </p>
              <p className="text-xs text-gray-500">
                Average savings: ${savedAmount.toLocaleString()} per year
              </p>
            </div>
          </div>

          {/* Center: Urgency */}
          <div className="hidden lg:flex items-center gap-2">
            <span className="text-yellow-500 animate-pulse">⚡</span>
            <span className="text-sm font-medium">
              Free trial ending soon • Only 14 spots left
            </span>
          </div>

          {/* Right: CTA */}
          <div className="flex items-center gap-3">
            <div className="text-right hidden md:block">
              <p className="text-xs text-gray-500 line-through">$99/year after trial</p>
              <p className="text-lg font-bold text-green-600">FREE for 14 days</p>
            </div>
            
            <button
              onClick={() => {
                const modal = document.querySelector('[data-modal-trigger]') as HTMLElement;
                modal?.click();
              }}
              className="bg-gradient-to-r from-coral-500 to-orange-500 text-white font-bold px-6 py-3 rounded-full hover:scale-105 transition-transform shadow-lg whitespace-nowrap animate-bounce-light"
            >
              Start Free Trial →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyCTA;