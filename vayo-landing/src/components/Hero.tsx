'use client';

import { useState, useEffect } from 'react';
import SignupModal from './SignupModal';

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [memberCount, setMemberCount] = useState(12543);

  useEffect(() => {
    const interval = setInterval(() => {
      setMemberCount(prev => prev + Math.floor(Math.random() * 3));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-orange-50 to-coral-50">
      <div className="container mx-auto section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-slide-up">
            <div className="inline-flex items-center px-4 py-2 bg-coral-100 rounded-full">
              <span className="text-sm font-medium text-coral-700">
                🎉 Limited Time: 14-Day Free Trial
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Save Up to <span className="gradient-text">70%</span> on Your
              <span className="block">Dream Vacations</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Join {memberCount.toLocaleString()} smart travelers who save thousands 
              on hotels, cruises, and resorts with exclusive member-only rates.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="btn-primary text-lg px-10 py-4 animate-bounce-light"
                data-modal-trigger
              >
                Start Free Trial →
              </button>
              <button className="border-2 border-coral-400 text-coral-600 font-semibold py-3 px-8 rounded-2xl hover:bg-coral-50 transition-all duration-300">
                See How It Works
              </button>
            </div>
            
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-coral-200">
              <div>
                <div className="text-3xl font-bold text-coral-600">$3,247</div>
                <div className="text-sm text-gray-600">Avg. Annual Savings</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-coral-600">4.8/5</div>
                <div className="text-sm text-gray-600">Member Rating</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-coral-600">500K+</div>
                <div className="text-sm text-gray-600">Hotels & Resorts</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop"
                alt="Tropical beach vacation"
                className="rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-coral-400 to-orange-400 rounded-full flex items-center justify-center text-white font-bold">
                    70%
                  </div>
                  <div>
                    <div className="font-semibold">Members Save</div>
                    <div className="text-sm text-gray-600">vs. Public Rates</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute top-10 -right-10 w-32 h-32 bg-coral-200 rounded-full blur-3xl opacity-50"></div>
            <div className="absolute bottom-10 -left-10 w-40 h-40 bg-orange-200 rounded-full blur-3xl opacity-50"></div>
          </div>
        </div>
      </div>
      
      <SignupModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default Hero;