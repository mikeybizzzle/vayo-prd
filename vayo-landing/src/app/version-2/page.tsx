'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function Version2() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [email, setEmail] = useState('');
  const [scrollY, setScrollY] = useState(0);
  const [liveViewers, setLiveViewers] = useState(247);
  const [recentMember, setRecentMember] = useState({ name: 'Sarah M.', savings: '$1,847', location: 'Cancun All-Inclusive Resort' });
  const [activeComparison, setActiveComparison] = useState(0);
  const [faqSearch, setFaqSearch] = useState('');
  const [activeFaqCategory, setActiveFaqCategory] = useState('all');

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Simulate live member activity
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveViewers(prev => prev + Math.floor(Math.random() * 3) - 1);
      
      const members = [
        { name: 'Sarah M.', savings: '$1,847', location: 'Cancun All-Inclusive Resort' },
        { name: 'Michael R.', savings: '$2,130', location: 'Paris Boutique Hotel' },
        { name: 'Jennifer W.', savings: '$983', location: 'Tokyo City Center' },
        { name: 'David L.', savings: '$1,456', location: 'Bali Private Villa' }
      ];
      setRecentMember(members[Math.floor(Math.random() * members.length)]);
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);

  // Design System following Stripe/Airbnb/YC principles
  const metrics = [
    { value: '$4.2M', label: 'Saved this month', trend: '+23%' },
    { value: '12,543', label: 'Active members', trend: '+847' },
    { value: '70%', label: 'Average savings', trend: 'guaranteed' },
    { value: '4.9/5', label: 'Member rating', trend: '8,432 reviews' }
  ];

  const features = [
    {
      icon: '⚡',
      title: 'Instant Access',
      description: 'Start saving in seconds. No waiting periods, no approvals.',
      gradient: 'from-coral-400 to-coral-500'
    },
    {
      icon: '🌍',
      title: 'Global Coverage',
      description: '500,000+ properties across 200 countries.',
      gradient: 'from-orange-400 to-orange-500'
    },
    {
      icon: '🛡️',
      title: 'Price Protection',
      description: 'Find it cheaper? We\'ll beat it by 10%.',
      gradient: 'from-coral-300 to-orange-400'
    },
    {
      icon: '✨',
      title: 'Concierge Service',
      description: '24/7 human support for all your travel needs.',
      gradient: 'from-orange-500 to-coral-500'
    }
  ];

  const testimonials = [
    {
      quote: "Vayo transformed how we travel. We're taking 5 trips this year instead of 2.",
      author: "Sarah Chen",
      role: "Product Designer at Meta",
      avatar: "https://i.pravatar.cc/100?img=49",
      savings: "$12,340 saved"
    },
    {
      quote: "The ROI is insane. Paid for itself 10x over on our first booking.",
      author: "Marcus Johnson",
      role: "Founder, TechStartup",
      avatar: "https://i.pravatar.cc/100?img=50",
      savings: "$8,920 saved"
    },
    {
      quote: "Finally, a travel membership that actually delivers on its promises.",
      author: "Emily Rodriguez",
      role: "Engineering Manager",
      avatar: "https://i.pravatar.cc/100?img=51",
      savings: "$15,230 saved"
    }
  ];

  const pricingTiers = [
    {
      name: 'Monthly',
      price: '$19',
      period: '/month',
      features: ['Full access to all deals', 'Cancel anytime', 'Concierge support'],
      popular: false
    },
    {
      name: 'Annual',
      price: '$99',
      period: '/year',
      features: ['Save 58% vs monthly', 'Priority support', 'Exclusive flash deals', 'Free guest passes'],
      popular: true,
      savings: 'Save $129'
    }
  ];

  const comparisonData = [
    {
      destination: 'Cancun Resort (7 nights)',
      retail: '$4,439',
      wholesale: '$1,740',
      savings: '$2,699',
      percentage: '60%'
    },
    {
      destination: 'Hawaii Beach Resort (5 nights)',
      retail: '$3,200',
      wholesale: '$1,280',
      savings: '$1,920',
      percentage: '60%'
    },
    {
      destination: 'Orlando Theme Park Hotel (4 nights)',
      retail: '$1,800',
      wholesale: '$720',
      savings: '$1,080',
      percentage: '60%'
    }
  ];

  const faqData = [
    {
      category: 'membership',
      question: 'What exactly is Vayo?',
      answer: 'Vayo is a travel membership that gives you access to wholesale hotel rates typically reserved for travel agents. For just $19/month, you get the same prices that industry insiders pay.',
      popular: true
    },
    {
      category: 'pricing',
      question: 'How do you offer such low prices?',
      answer: 'We partner directly with wholesale suppliers that major travel agencies use. Instead of marking up these rates, we pass the wholesale pricing directly to our members.',
      popular: true
    },
    {
      category: 'membership',
      question: 'Can I really cancel anytime?',
      answer: 'Absolutely. You can cancel your membership with one click from your account dashboard. No phone calls, no retention offers, no hassle.',
      popular: true
    },
    {
      category: 'booking',
      question: 'How quickly can I start booking?',
      answer: 'Immediately after signing up! You get instant access to our entire inventory of 500,000+ properties worldwide.',
      popular: false
    },
    {
      category: 'timeshare',
      question: 'Is this a timeshare?',
      answer: 'No! This is a simple monthly membership with no property ownership, no maintenance fees, and no sales presentations. Cancel anytime.',
      popular: true
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Urgency Bar */}
      <div className="bg-gradient-to-r from-coral-500 to-orange-500 text-white py-2 px-4 text-center text-sm animate-pulse">
        <span className="inline-flex items-center gap-2">
          <span>⚡</span>
          <span className="font-medium">{liveViewers} members</span>
          <span>viewing now • 🔥 Only</span>
          <span className="font-bold">3 spots left</span>
          <span>at $19/month</span>
        </span>
      </div>

      {/* Recent Member Notification */}
      <div className="fixed top-20 right-4 z-50 bg-white rounded-lg shadow-xl border-l-4 border-coral-500 p-4 max-w-sm animate-slide-in-right">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
            <span className="text-green-600 font-bold">✓</span>
          </div>
          <div className="flex-1">
            <p className="font-semibold text-gray-900">
              <span className="text-coral-600">{recentMember.name}</span> just saved <span className="text-green-600">{recentMember.savings}</span>
            </p>
            <p className="text-sm text-gray-600">
              on {recentMember.location} • 2 min ago
            </p>
          </div>
        </div>
      </div>
      {/* Section 1: Hero - Stripe-inspired minimal hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-coral-50 via-white to-orange-50"></div>
        <div className="relative container mx-auto px-6 py-24 lg:py-32">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-coral-500 to-orange-500 text-white text-sm font-medium rounded-full mb-6">
              <span className="animate-pulse">●</span>
              <span>14-day free trial • No credit card required</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Travel like the
              <span className="block bg-gradient-to-r from-coral-500 to-orange-500 bg-clip-text text-transparent">
                top 1% do
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed max-w-2xl">
              Members save an average of 70% on luxury hotels, flights, and experiences. 
              Join 12,543 smart travelers who refuse to overpay.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="px-6 py-4 border-2 border-gray-200 rounded-xl focus:border-coral-500 focus:outline-none text-lg flex-1 max-w-sm"
              />
              <button className="px-8 py-4 bg-gradient-to-r from-coral-500 to-orange-500 text-white font-semibold rounded-xl hover:shadow-lg transition-all transform hover:scale-105 text-lg">
                Start Free Trial →
              </button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center justify-center gap-8 mb-8 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 text-xs">🔒</span>
                </div>
                <span className="text-gray-600">SSL Secured</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 text-xs">🛡️</span>
                </div>
                <span className="text-gray-600">Secured by Stripe</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-coral-100 rounded-full flex items-center justify-center">
                  <span className="text-coral-600 text-xs">✓</span>
                </div>
                <span className="text-gray-600">30-Day Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-orange-600 text-xs">❌</span>
                </div>
                <span className="text-gray-600">Cancel Anytime</span>
              </div>
            </div>

            <div className="flex items-center gap-6 text-sm text-gray-500">
              <div className="flex -space-x-2">
                {[1,2,3,4,5].map(i => (
                  <img
                    key={i}
                    src={`https://i.pravatar.cc/32?img=${i+10}`}
                    alt=""
                    className="w-8 h-8 rounded-full border-2 border-white"
                  />
                ))}
              </div>
              <span>Join <span className="font-bold text-coral-600">12,543+</span> members saving millions</span>
            </div>
          </div>
        </div>
        
        {/* Animated gradient orb */}
        <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-coral-400 to-orange-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      </section>

      {/* Section 2: Metrics Bar - Airbnb-inspired stats */}
      <section className="border-y border-gray-100 bg-gradient-to-r from-coral-50 to-orange-50">
        <div className="container mx-auto px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-gray-900">{metric.value}</div>
                <div className="text-sm text-gray-600 mt-1">{metric.label}</div>
                <div className="text-xs text-green-600 mt-1">↑ {metric.trend}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Product Demo - Interactive showcase */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              See the savings for yourself
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real-time price comparisons from actual member bookings
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 shadow-xl">
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { destination: 'Bali, Indonesia', hotel: 'Four Seasons Resort', public: '$1,200', member: '$389', saved: '68%' },
                  { destination: 'Paris, France', hotel: 'Le Meurice', public: '$890', member: '$312', saved: '65%' },
                  { destination: 'Tokyo, Japan', hotel: 'Aman Tokyo', public: '$1,450', member: '$487', saved: '66%' }
                ].map((deal, index) => (
                  <div key={index} className="bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-semibold text-gray-900"eignore>{deal.destination}</h3>
                        <p className="text-sm text-gray-600">{deal.hotel}</p>
                      </div>
                      <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-semibold rounded-full">
                        {deal.saved} OFF
                      </span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-500">Public</span>
                        <span className="line-through text-gray-400">{deal.public}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-900 font-semibold">Member</span>
                        <span className="text-2xl font-bold text-coral-600">{deal.member}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-sm text-gray-600 mb-4">Prices updated in real-time • All taxes included</p>
                <button className="text-coral-600 font-semibold hover:text-coral-700 transition-colors">
                  View all 2,847 deals available today →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Feature Grid - Stripe-inspired minimal features */}
      <section className="py-24 bg-gradient-to-br from-coral-50 to-orange-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Everything you need
            </h2>
            <p className="text-xl text-gray-600">
              Built for travelers who value their time and money
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl p-6 h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-white text-2xl mb-4`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New Section: Problem Agitation - You've Tried Everything */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              You've Tried Everything...
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Sound familiar? You're not alone. Most travelers waste time and money on these "solutions" that barely move the needle.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-12">
            {[
              {
                icon: '❌',
                title: 'Price Tracking Apps',
                description: 'Hours comparing prices across sites, only to find they\'re all selling the same inventory at retail rates.'
              },
              {
                icon: '❌',
                title: 'Credit Card Points',
                description: 'Spent thousands to earn points that barely cover one night at an average hotel.'
              },
              {
                icon: '❌',
                title: 'Off-Season Travel',
                description: 'Even traveling in "shoulder season" costs more than it should. Hotels know you\'re coming.'
              },
              {
                icon: '❌',
                title: 'Budget Airlines',
                description: 'Hidden fees make them cost the same as regular airlines, with none of the comfort.'
              }
            ].map((problem, index) => (
              <div key={index} className="text-center p-6 rounded-2xl border border-gray-200 hover:border-coral-200 transition-colors">
                <div className="text-4xl mb-4">{problem.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{problem.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{problem.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center bg-gradient-to-r from-coral-50 to-orange-50 rounded-3xl p-8 max-w-4xl mx-auto">
            <p className="text-xl text-gray-700 mb-4 font-medium">
              There's a reason nothing works...
            </p>
            <p className="text-lg text-gray-600">
              You're shopping where everyone else shops, seeing the same inflated "retail" prices.
            </p>
          </div>
        </div>
      </section>

      {/* New Section: The Travel Industry's Secret */}
      <section className="py-24 bg-gradient-to-br from-coral-50 to-orange-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              The Travel Industry's Best-Kept Secret
            </h2>
            <p className="text-xl text-gray-600">
              "Hotels, cruises, and resorts sell their inventory at two different price levels:"
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Retail Prices */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Retail Prices</h3>
              <p className="text-gray-600 mb-6">What you see on Booking, Expedia, Hotels.com</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <span className="text-coral-500">→</span>
                  <span className="text-gray-700">Marked up 200-300%</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-coral-500">→</span>
                  <span className="text-gray-700">Same inventory everywhere</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-coral-500">→</span>
                  <span className="text-gray-700">Designed for maximum profit</span>
                </li>
              </ul>
              <div className="text-4xl font-bold text-gray-900 text-center">
                $489<span className="text-lg text-gray-600">/night</span>
              </div>
            </div>

            {/* Wholesale Prices */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 shadow-xl border-2 border-green-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Wholesale Prices</h3>
              <p className="text-gray-600 mb-6">What travel agents and insiders access</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700">True wholesale rates</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700">Same exact rooms</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700">Industry-only access</span>
                </li>
              </ul>
              <div className="text-4xl font-bold text-green-600 text-center">
                $147<span className="text-lg text-gray-600">/night</span>
              </div>
            </div>
          </div>

          <div className="text-center mt-12 bg-white rounded-3xl p-8 shadow-lg max-w-4xl mx-auto">
            <p className="text-xl font-bold text-gray-900 mb-2">
              Vayo gives you wholesale access for just $19/month
            </p>
            <p className="text-gray-600">
              No timeshares. No presentations. No contracts. Just insider prices.
            </p>
          </div>
        </div>
      </section>

      {/* Section 5: Video/Visual Story */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Stop leaving money
                <span className="block text-coral-600">on the table</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                The average traveler overpays by $4,800 per year. Our members keep that money 
                for more trips, better experiences, or simply their savings account.
              </p>
              
              <div className="space-y-4">
                {[
                  'Access wholesale rates hotels hide from the public',
                  'Book with confidence - price match guarantee',
                  'Get personalized deals based on your preferences',
                  'Earn rewards that actually matter'
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-coral-100 to-orange-100 rounded-3xl p-8">
                <img
                  src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=400&fit=crop"
                  alt="Travel savings"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl">
                  <div className="text-3xl font-bold text-coral-600">$4,847</div>
                  <div className="text-sm text-gray-600">Your annual savings</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Testimonials - YC-style social proof */}
      <section className="py-24 bg-gradient-to-br from-coral-50 to-orange-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Loved by smart travelers
            </h2>
            <p className="text-xl text-gray-600">
              Join founders, creators, and professionals saving thousands
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <div className="flex items-start gap-6">
                <img
                  src={testimonials[activeTestimonial].avatar}
                  alt={testimonials[activeTestimonial].author}
                  className="w-16 h-16 rounded-full"
                />
                <div className="flex-1">
                  <p className="text-xl text-gray-800 mb-4 italic">
                    "{testimonials[activeTestimonial].quote}"
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-gray-900">
                        {testimonials[activeTestimonial].author}
                      </div>
                      <div className="text-sm text-gray-600">
                        {testimonials[activeTestimonial].role}
                      </div>
                    </div>
                    <div className="text-green-600 font-semibold">
                      {testimonials[activeTestimonial].savings}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-2 justify-center mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === activeTestimonial ? 'bg-coral-600 w-8' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: How It Works - Simple 3-step process */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Start saving in minutes
            </h2>
            <p className="text-xl text-gray-600">
              No contracts. No commitments. Just savings.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { step: '1', title: 'Sign up free', desc: '14-day trial, no card required' },
              { step: '2', title: 'Browse deals', desc: 'Access exclusive member rates' },
              { step: '3', title: 'Book & save', desc: 'Save 40-70% on every trip' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-coral-500 to-orange-500 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New Section: Interactive Comparison Table */}
      <section className="py-24 bg-gradient-to-br from-coral-50 to-orange-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Real Examples: Retail vs. Wholesale Prices
            </h2>
            <p className="text-xl text-gray-600">
              See exactly how much you can save on your next trip
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Tab Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {comparisonData.map((comparison, index) => (
                <button
                  key={index}
                  onClick={() => setActiveComparison(index)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                    activeComparison === index
                      ? 'bg-coral-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                  }`}
                >
                  {comparison.destination.split('(')[0].trim()}
                </button>
              ))}
            </div>

            {/* Comparison Table */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-coral-500 to-orange-500 text-white">
                  <tr>
                    <th className="py-4 px-6 text-left">{comparisonData[activeComparison].destination}</th>
                    <th className="py-4 px-6 text-center">Retail Price<br /><span className="text-sm opacity-90">(Booking.com, Hotels.com)</span></th>
                    <th className="py-4 px-6 text-center">Wholesale Price<br /><span className="text-sm opacity-90">(Vayo Members)</span></th>
                    <th className="py-4 px-6 text-center">Your Savings</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-6 px-6 font-semibold text-gray-900">Ocean View Suite</td>
                    <td className="py-6 px-6 text-center">
                      <div className="text-2xl font-bold text-gray-900">{comparisonData[activeComparison].retail}</div>
                    </td>
                    <td className="py-6 px-6 text-center">
                      <div className="text-2xl font-bold text-green-600">{comparisonData[activeComparison].wholesale}</div>
                    </td>
                    <td className="py-6 px-6 text-center">
                      <div className="text-2xl font-bold text-coral-600">
                        {comparisonData[activeComparison].savings} <span className="text-sm">({comparisonData[activeComparison].percentage} off)</span>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 px-6 text-gray-700">All-Inclusive</td>
                    <td className="py-4 px-6 text-center text-gray-600">Included</td>
                    <td className="py-4 px-6 text-center text-gray-600">Included</td>
                    <td className="py-4 px-6 text-center text-green-600 font-semibold">Same amenities</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 px-6 text-gray-700">Booking Fees</td>
                    <td className="py-4 px-6 text-center text-gray-900 font-semibold">$89</td>
                    <td className="py-4 px-6 text-center text-green-600 font-semibold">$0</td>
                    <td className="py-4 px-6 text-center text-coral-600 font-semibold">$89 (100% off)</td>
                  </tr>
                  <tr className="bg-gradient-to-r from-coral-50 to-orange-50">
                    <td className="py-6 px-6 font-bold text-gray-900 text-lg">Total Cost</td>
                    <td className="py-6 px-6 text-center">
                      <div className="text-3xl font-bold text-gray-900 line-through opacity-60">{comparisonData[activeComparison].retail}</div>
                    </td>
                    <td className="py-6 px-6 text-center">
                      <div className="text-3xl font-bold text-green-600">{comparisonData[activeComparison].wholesale}</div>
                    </td>
                    <td className="py-6 px-6 text-center">
                      <div className="text-3xl font-bold text-coral-600">{comparisonData[activeComparison].savings} saved!</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="text-center mt-8">
              <p className="text-gray-600 mb-6">
                This is just one example. Members access these wholesale rates on 500,000+ properties worldwide.
              </p>
              <button className="bg-gradient-to-r from-coral-500 to-orange-500 text-white font-bold px-10 py-4 rounded-2xl text-lg hover:shadow-xl transition-all">
                Start Saving Today →
              </button>
              <p className="text-sm text-gray-500 mt-3">Just $19/month • Cancel anytime</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Pricing - Transparent pricing */}
      <section className="py-24 bg-gradient-to-br from-coral-50 to-orange-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Simple, transparent pricing
            </h2>
            <p className="text-xl text-gray-600">
              Choose the plan that works for you
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <div
                key={index}
                className={`bg-white rounded-3xl p-8 ${
                  tier.popular ? 'ring-2 ring-coral-600 shadow-xl scale-105' : 'shadow-lg'
                }`}
              >
                {tier.popular && (
                  <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-coral-500 to-orange-500 text-white text-sm font-medium rounded-full mb-4">
                    Most Popular
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-5xl font-bold text-gray-900">{tier.price}</span>
                  <span className="text-gray-600">{tier.period}</span>
                </div>
                
                {tier.savings && (
                  <div className="text-green-600 font-semibold mb-6">{tier.savings}</div>
                )}
                
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-green-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 px-6 rounded-xl font-semibold transition-all ${
                  tier.popular
                    ? 'bg-gradient-to-r from-coral-500 to-orange-500 text-white hover:shadow-lg'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}>
                  Start Free Trial
                </button>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-600 mt-8">
            All plans include 14-day free trial • Cancel anytime • No hidden fees
          </p>
        </div>
      </section>

      {/* Section 9: Trust/Security */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-12">
              Your security is our priority
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: '🔒', title: '256-bit encryption', desc: 'Bank-level security for all transactions' },
                { icon: '✓', title: 'PCI compliant', desc: 'Certified secure payment processing' },
                { icon: '🛡️', title: 'Data protection', desc: 'GDPR compliant, your data stays yours' }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 10: Interactive FAQ */}
      <section className="py-24 bg-gradient-to-br from-coral-50 to-orange-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600">
                Get instant answers to all your questions about Vayo membership
              </p>
              
              {/* FAQ Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="text-2xl font-bold text-coral-600">21</div>
                  <div className="text-sm text-gray-600">Questions Answered</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-coral-600">&lt;2hrs</div>
                  <div className="text-sm text-gray-600">Avg Response Time</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-coral-600">24/7</div>
                  <div className="text-sm text-gray-600">Support Available</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-coral-600">US-Based</div>
                  <div className="text-sm text-gray-600">Support Team</div>
                </div>
              </div>
            </div>

            {/* Most Popular Questions */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                🔥 Most Popular Questions
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {faqData.filter(faq => faq.popular).map((faq, index) => (
                  <div key={index} className="bg-white rounded-xl p-4 border-l-4 border-coral-500">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-1">{faq.question}</h4>
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-1 bg-coral-100 text-coral-700 text-xs font-medium rounded-full">
                            POPULAR
                          </span>
                          <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                            {faq.category}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Search and Filters */}
            <div className="mb-8">
              <div className="relative mb-6">
                <input
                  type="text"
                  value={faqSearch}
                  onChange={(e) => setFaqSearch(e.target.value)}
                  placeholder="Search FAQs... (e.g., 'cancel membership', 'booking fees')"
                  className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:border-coral-500 focus:outline-none text-lg pr-12"
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                  🔍
                </div>
              </div>
              
              {/* Category Filters */}
              <div className="flex flex-wrap gap-3 justify-center">
                {['all', 'membership', 'pricing', 'booking', 'timeshare'].map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveFaqCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      activeFaqCategory === category
                        ? 'bg-coral-500 text-white'
                        : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                    }`}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                    <span className="ml-1 text-xs opacity-75">
                      ({category === 'all' ? faqData.length : faqData.filter(faq => faq.category === category).length})
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* FAQ List */}
            <div className="space-y-4">
              {faqData
                .filter(faq => {
                  const matchesSearch = faqSearch === '' || 
                    faq.question.toLowerCase().includes(faqSearch.toLowerCase()) ||
                    faq.answer.toLowerCase().includes(faqSearch.toLowerCase());
                  const matchesCategory = activeFaqCategory === 'all' || faq.category === activeFaqCategory;
                  return matchesSearch && matchesCategory;
                })
                .map((faq, index) => (
                  <details key={index} className="group bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                    <summary className="flex justify-between items-center p-6 cursor-pointer">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          {faq.popular && (
                            <span className="px-2 py-1 bg-coral-100 text-coral-700 text-xs font-bold rounded-full">
                              POPULAR
                            </span>
                          )}
                          <span className="font-semibold text-gray-900">{faq.question}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                            {faq.category}
                          </span>
                        </div>
                      </div>
                      <span className="text-gray-400 group-open:rotate-180 transition-transform ml-4">↓</span>
                    </summary>
                    <div className="px-6 pb-6 text-gray-700 leading-relaxed border-t border-gray-100 pt-4">
                      {faq.answer}
                    </div>
                  </details>
                ))
              }
            </div>

            {/* Contact Support */}
            <div className="text-center mt-12 bg-white rounded-3xl p-8">
              <p className="text-lg font-semibold text-gray-900 mb-2">Can't find what you're looking for?</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="bg-coral-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-coral-600 transition-colors">
                  Contact Support
                </button>
                <button className="text-coral-600 font-semibold hover:text-coral-700 transition-colors">
                  Call 1-800-VAYO-SAVE
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 11: Companies/Press */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="container mx-auto px-6">
          <p className="text-center text-sm text-gray-600 mb-8">As featured in</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
            {['Forbes', 'TechCrunch', 'WSJ', 'Bloomberg', 'CNN'].map((brand) => (
              <div key={brand} className="text-2xl font-bold text-gray-400">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 12: Community/Numbers */}
      <section className="py-24 bg-gradient-to-br from-coral-500 to-orange-500 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8">
              Join a community that saves
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                { number: '12,543', label: 'Active members' },
                { number: '$4.2M', label: 'Saved this month' },
                { number: '847', label: 'New members this week' }
              ].map((stat, index) => (
                <div key={index}>
                  <div className="text-4xl font-bold mb-2">{stat.number}</div>
                  <div className="text-orange-100">{stat.label}</div>
                </div>
              ))}
            </div>
            
            <button className="px-8 py-4 bg-white text-coral-600 font-semibold rounded-xl hover:bg-gray-100 transition-all text-lg">
              Join the Community →
            </button>
          </div>
        </div>
      </section>

      {/* Section 13: Final CTA */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Ready to stop overpaying?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join 12,543 members saving millions on travel
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-6 py-4 border-2 border-gray-200 rounded-xl focus:border-coral-500 focus:outline-none text-lg max-w-sm"
              />
              <button className="px-8 py-4 bg-gradient-to-r from-coral-500 to-orange-500 text-white font-semibold rounded-xl hover:shadow-xl transition-all text-lg">
                Start Free Trial →
              </button>
            </div>
            
            <p className="text-sm text-gray-500">
              No credit card required • 14-day free trial • Cancel anytime
            </p>
          </div>
        </div>
      </section>

      {/* Section 14: Guarantee */}
      <section className="py-16 bg-gradient-to-br from-coral-50 to-orange-50">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <span className="text-2xl">✓</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              30-day money-back guarantee
            </h3>
            <p className="text-gray-600">
              Try Vayo risk-free. If you don't save money on your first booking, 
              we'll refund your membership in full. No questions asked.
            </p>
          </div>
        </div>
      </section>

      {/* Section 15: Minimal Footer for Version 2 */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="text-2xl font-bold bg-gradient-to-r from-coral-500 to-orange-500 bg-clip-text text-transparent">
                Vayo
              </div>
              <p className="text-sm text-gray-600 mt-2">Travel smart. Save more.</p>
            </div>
            
            <div className="flex gap-6 text-sm text-gray-600">
              <Link href="/" className="hover:text-gray-900 transition-colors">
                Original Version
              </Link>
              <a href="#" className="hover:text-gray-900 transition-colors">
                Terms
              </a>
              <a href="#" className="hover:text-gray-900 transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-gray-900 transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}