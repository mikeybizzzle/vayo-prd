'use client';

import { useState, useEffect } from 'react';
import { getAffiliateFromUrl, storeAffiliate, getStoredAffiliate } from '@/lib/utils';

interface SignupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SignupModal = ({ isOpen, onClose }: SignupModalProps) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [affiliateId, setAffiliateId] = useState<string | null>(null);

  useEffect(() => {
    const urlAffiliate = getAffiliateFromUrl();
    if (urlAffiliate) {
      storeAffiliate(urlAffiliate);
      setAffiliateId(urlAffiliate);
    } else {
      const stored = getStoredAffiliate();
      if (stored) setAffiliateId(stored);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          name,
          affiliateId,
          source: window.location.href,
          campaign: 'free-trial'
        })
      });

      if (response.ok) {
        if (typeof window !== 'undefined' && window.fbq) {
          window.fbq('track', 'Lead', { value: 0, currency: 'USD' });
        }
        
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'sign_up', {
            method: 'email',
            affiliate_id: affiliateId
          });
        }

        alert('Success! Check your email to activate your free trial.');
        onClose();
        setEmail('');
        setName('');
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Signup error:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      <div className="relative bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl animate-slide-up">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-coral-400 to-orange-400 rounded-full mb-4">
            <span className="text-2xl text-white">🎉</span>
          </div>
          <h3 className="text-2xl font-bold mb-2">Start Your Free Trial</h3>
          <p className="text-gray-600">14 days free • No credit card required</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 border-2 border-coral-100 rounded-xl focus:border-coral-400 focus:outline-none transition-colors"
              placeholder="John Smith"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border-2 border-coral-100 rounded-xl focus:border-coral-400 focus:outline-none transition-colors"
              placeholder="john@example.com"
              required
            />
          </div>
          
          {affiliateId && (
            <div className="text-xs text-gray-500 bg-gray-50 p-2 rounded">
              Referred by partner: {affiliateId}
            </div>
          )}
          
          <button
            type="submit"
            disabled={isLoading}
            className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Processing...' : 'Start Free Trial →'}
          </button>
        </form>
        
        <div className="mt-6 space-y-3">
          <div className="flex items-center gap-3 text-sm text-gray-600">
            <span className="text-green-500">✓</span>
            <span>Instant access to member rates</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-gray-600">
            <span className="text-green-500">✓</span>
            <span>Cancel anytime, no questions asked</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-gray-600">
            <span className="text-green-500">✓</span>
            <span>24/7 concierge support</span>
          </div>
        </div>
        
        <p className="mt-6 text-xs text-center text-gray-500">
          By signing up, you agree to our{' '}
          <a href="/terms" className="text-coral-600 hover:underline">Terms of Service</a>
          {' '}and{' '}
          <a href="/privacy" className="text-coral-600 hover:underline">Privacy Policy</a>
        </p>
      </div>
    </div>
  );
};

export default SignupModal;

declare global {
  interface Window {
    fbq: any;
    gtag: any;
  }
}