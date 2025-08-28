'use client';

import { useState, useEffect } from 'react';

interface Notification {
  id: number;
  name: string;
  location: string;
  destination: string;
  savings: string;
  timeAgo: string;
  avatar: string;
}

const BookingNotifications = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [currentNotification, setCurrentNotification] = useState<Notification | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const mockBookings = [
    {
      name: 'Jennifer from Austin',
      location: 'Austin, TX',
      destination: 'Cancun All-Inclusive Resort',
      savings: '$2,341',
      timeAgo: '3 minutes ago',
      avatar: 'https://i.pravatar.cc/100?img=25'
    },
    {
      name: 'Michael from NYC',
      location: 'New York, NY',
      destination: 'Paris Luxury Hotel',
      savings: '$3,892',
      timeAgo: '5 minutes ago',
      avatar: 'https://i.pravatar.cc/100?img=26'
    },
    {
      name: 'Sarah from Miami',
      location: 'Miami, FL',
      destination: 'Greek Islands Cruise',
      savings: '$4,567',
      timeAgo: '8 minutes ago',
      avatar: 'https://i.pravatar.cc/100?img=27'
    },
    {
      name: 'David from Seattle',
      location: 'Seattle, WA',
      destination: 'Tokyo Grand Hotel',
      savings: '$2,899',
      timeAgo: '12 minutes ago',
      avatar: 'https://i.pravatar.cc/100?img=28'
    },
    {
      name: 'Emma from Chicago',
      location: 'Chicago, IL',
      destination: 'Bali Beach Resort',
      savings: '$3,234',
      timeAgo: '15 minutes ago',
      avatar: 'https://i.pravatar.cc/100?img=29'
    }
  ];

  useEffect(() => {
    // Start showing notifications after 10 seconds
    const initialDelay = setTimeout(() => {
      showNextNotification();
    }, 10000);

    return () => clearTimeout(initialDelay);
  }, []);

  const showNextNotification = () => {
    const randomBooking = mockBookings[Math.floor(Math.random() * mockBookings.length)];
    const notification = {
      id: Date.now(),
      ...randomBooking
    };

    setCurrentNotification(notification);
    setIsVisible(true);

    // Hide after 5 seconds
    setTimeout(() => {
      setIsVisible(false);
      
      // Show next notification after 20-40 seconds
      const nextDelay = 20000 + Math.random() * 20000;
      setTimeout(() => {
        showNextNotification();
      }, nextDelay);
    }, 5000);
  };

  if (!currentNotification || !isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 z-40 animate-slide-up">
      <div className="bg-white rounded-2xl shadow-2xl border-2 border-coral-100 p-4 max-w-sm">
        <div className="flex items-start gap-3">
          <img
            src={currentNotification.avatar}
            alt={currentNotification.name}
            className="w-12 h-12 rounded-full border-2 border-green-400"
          />
          
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-sm font-bold text-gray-800">
                {currentNotification.name}
              </span>
              <span className="text-xs text-gray-500">
                {currentNotification.timeAgo}
              </span>
            </div>
            
            <p className="text-sm text-gray-600 mb-2">
              Just booked <span className="font-semibold">{currentNotification.destination}</span>
            </p>
            
            <div className="flex items-center justify-between">
              <span className="text-green-600 font-bold text-sm">
                Saved {currentNotification.savings}
              </span>
              <span className="text-xs text-gray-500">
                ✓ Verified booking
              </span>
            </div>
          </div>
          
          <button
            onClick={() => setIsVisible(false)}
            className="text-gray-400 hover:text-gray-600"
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingNotifications;