'use client';

import { useState } from 'react';

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      id: 1,
      number: '01',
      title: 'Start Your Free Trial',
      description: 'No credit card needed. Instant access.',
      emotion: 'Curiosity → Relief',
      icon: '🎯'
    },
    {
      id: 2,
      number: '02',
      title: 'Browse Exclusive Deals',
      description: 'Access 500,000+ member-only rates',
      emotion: 'Surprise → Excitement',
      icon: '🔍'
    },
    {
      id: 3,
      number: '03',
      title: 'Book & Save Instantly',
      description: 'Same hotels, fraction of the price',
      emotion: 'Joy → Empowerment',
      icon: '💳'
    },
    {
      id: 4,
      number: '04',
      title: 'Travel More, Spend Less',
      description: 'Turn savings into more adventures',
      emotion: 'Freedom → Fulfillment',
      icon: '✈️'
    }
  ];

  const testimonialImages = [
    { url: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=300&fit=crop', alt: 'Bali trip' },
    { url: 'https://images.unsplash.com/photo-1530521954074-e64f6810b32d?w=400&h=300&fit=crop', alt: 'Beach resort' },
    { url: 'https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?w=400&h=300&fit=crop', alt: 'Travel adventure' },
    { url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop', alt: 'Happy traveler' },
    { url: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop', alt: 'Satisfied member' },
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-white to-coral-50">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-coral-100 rounded-full mb-4">
            <span className="text-coral-700 font-medium">Simple 4-Step Process</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            From Dreaming to <span className="gradient-text">Boarding</span> in Minutes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Remember that trip you didn't take because hotels were "too expensive"? 
            <span className="block mt-2 font-medium text-gray-800">
              Our members don't have that problem anymore.
            </span>
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Visual Collage */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {/* Main large image */}
              <div className="col-span-2 relative overflow-hidden rounded-3xl shadow-xl">
                <img
                  src={testimonialImages[0].url}
                  alt={testimonialImages[0].alt}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-3xl font-bold mb-1">$4,847</div>
                  <div className="text-sm opacity-90">Average yearly savings</div>
                </div>
              </div>

              {/* Bottom left image */}
              <div className="relative overflow-hidden rounded-2xl shadow-lg">
                <img
                  src={testimonialImages[1].url}
                  alt={testimonialImages[1].alt}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-3 py-1 rounded-full">
                  <span className="text-sm font-bold text-coral-600">70% OFF</span>
                </div>
              </div>

              {/* Bottom right image */}
              <div className="relative overflow-hidden rounded-2xl shadow-lg">
                <img
                  src={testimonialImages[2].url}
                  alt={testimonialImages[2].alt}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="bg-white/90 backdrop-blur rounded-lg p-3">
                    <div className="flex items-center gap-2">
                      <img
                        src={testimonialImages[3].url}
                        alt={testimonialImages[3].alt}
                        className="w-8 h-8 rounded-full"
                      />
                      <div className="flex-1">
                        <div className="text-xs font-bold">Sarah M.</div>
                        <div className="text-xs text-gray-600">5 trips this year!</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating testimonial bubble */}
            <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl p-4 max-w-xs animate-bounce-light">
              <div className="flex items-start gap-3">
                <img
                  src={testimonialImages[4].url}
                  alt={testimonialImages[4].alt}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <div className="text-sm font-bold text-gray-900">Emily R.</div>
                  <div className="text-xs text-gray-600 mt-1">
                    "Saved $3,577 on my first booking!"
                  </div>
                  <div className="flex gap-1 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-xs text-yellow-500">⭐</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Member count badge */}
            <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-coral-500 to-orange-500 text-white rounded-2xl p-4 shadow-xl">
              <div className="text-2xl font-bold">12,543+</div>
              <div className="text-xs opacity-90">Happy Members</div>
            </div>
          </div>

          {/* Right Column - Steps */}
          <div className="space-y-0">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className={`relative cursor-pointer transition-all duration-300 ${
                  activeStep === step.id ? 'scale-105' : 'opacity-70 hover:opacity-100'
                }`}
                onClick={() => setActiveStep(step.id)}
              >
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className={`absolute left-12 top-24 w-0.5 h-16 transition-all duration-500 ${
                    activeStep > step.id ? 'bg-coral-400' : 'bg-gray-200'
                  }`} />
                )}
                
                <div className="flex gap-6 p-4 rounded-2xl hover:bg-white hover:shadow-lg transition-all">
                  {/* Step Number Circle */}
                  <div className={`relative flex items-center justify-center w-24 h-24 rounded-full transition-all duration-300 ${
                    activeStep === step.id 
                      ? 'bg-gradient-to-br from-coral-400 to-orange-400 shadow-xl' 
                      : activeStep > step.id
                      ? 'bg-coral-200'
                      : 'bg-gray-100'
                  }`}>
                    <span className={`text-3xl ${
                      activeStep >= step.id ? 'text-white' : 'text-gray-400'
                    }`}>{step.icon}</span>
                    <div className={`absolute -bottom-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                      activeStep >= step.id ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-600'
                    }`}>
                      {activeStep > step.id ? '✓' : step.number}
                    </div>
                  </div>
                  
                  {/* Step Content */}
                  <div className="flex-1">
                    <h3 className={`text-xl font-bold mb-1 transition-colors ${
                      activeStep === step.id ? 'text-coral-600' : 'text-gray-700'
                    }`}>
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-2">{step.description}</p>
                    
                    {/* Emotional Journey Tag */}
                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs ${
                      activeStep === step.id 
                        ? 'bg-coral-100 text-coral-700' 
                        : 'bg-gray-100 text-gray-500'
                    }`}>
                      <span className="font-medium">{step.emotion}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* CTA Button */}
            <div className="mt-8 pl-4">
              <button 
                className="btn-primary text-lg px-10 py-4 w-full lg:w-auto animate-bounce-light"
                onClick={() => {
                  const modal = document.querySelector('[data-modal-trigger]') as HTMLElement;
                  modal?.click();
                }}
              >
                Start Your Story Today →
              </button>
              <p className="text-sm text-gray-600 mt-3">
                Join <span className="font-bold text-coral-600">247 people</span> who started their free trial in the last hour
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;