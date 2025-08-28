'use client';

import { useState, useEffect } from 'react';

const UrgencyBar = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });
  
  const [spotsLeft, setSpotsLeft] = useState(17);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          return { hours: 23, minutes: 59, seconds: 59 };
        }
      });
    }, 1000);

    // Randomly decrease spots
    const spotsTimer = setInterval(() => {
      if (Math.random() > 0.7) {
        setSpotsLeft(prev => Math.max(3, prev - 1));
      }
    }, 30000);

    return () => {
      clearInterval(timer);
      clearInterval(spotsTimer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-coral-600 to-orange-500 text-white shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Timer */}
          <div className="flex items-center gap-4">
            <span className="text-yellow-300 font-bold animate-pulse">⚡ LIMITED TIME</span>
            <div className="flex items-center gap-2">
              <span className="text-sm">Free trial ends in:</span>
              <div className="flex gap-1">
                <span className="bg-white/20 backdrop-blur px-2 py-1 rounded font-mono font-bold">
                  {String(timeLeft.hours).padStart(2, '0')}
                </span>
                <span className="font-bold">:</span>
                <span className="bg-white/20 backdrop-blur px-2 py-1 rounded font-mono font-bold">
                  {String(timeLeft.minutes).padStart(2, '0')}
                </span>
                <span className="font-bold">:</span>
                <span className="bg-white/20 backdrop-blur px-2 py-1 rounded font-mono font-bold">
                  {String(timeLeft.seconds).padStart(2, '0')}
                </span>
              </div>
            </div>
          </div>

          {/* Spots Left */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">
                Only <span className="font-bold text-yellow-300">{spotsLeft} spots</span> left at this price
              </span>
            </div>
            
            <button className="bg-white text-coral-600 px-4 py-2 rounded-full font-bold text-sm hover:scale-105 transition-transform">
              Claim Your Spot →
            </button>
            
            <button
              onClick={() => setIsVisible(false)}
              className="text-white/70 hover:text-white ml-2"
            >
              ✕
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UrgencyBar;