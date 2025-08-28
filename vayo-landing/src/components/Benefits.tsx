'use client';

import { useState } from 'react';

const Benefits = () => {
  const [hoveredBenefit, setHoveredBenefit] = useState<number | null>(null);

  const benefits = [
    {
      id: 1,
      icon: '🛎️',
      title: '24/7 Concierge Service',
      shortDesc: 'Personal travel experts at your service',
      emotionalHook: 'Remember scrambling to find a last-minute hotel at 2 AM?',
      story: 'Never stress again. Our concierge team books everything while you sleep. One call, and consider it done.',
      stat: '3 min avg response',
      color: 'from-coral-400 to-coral-600'
    },
    {
      id: 2,
      icon: '💰',
      title: 'Price Match Guarantee',
      shortDesc: 'Find it cheaper? We\'ll beat it by 10%',
      emotionalHook: 'That sinking feeling when you find a better deal after booking?',
      story: 'Book with confidence. If you find a lower price within 24 hours, we\'ll refund 110% of the difference.',
      stat: '$427 avg refund',
      color: 'from-green-400 to-green-600'
    },
    {
      id: 3,
      icon: '🚫',
      title: 'No Blackout Dates',
      shortDesc: 'Travel when YOU want to travel',
      emotionalHook: 'Tired of "sorry, not available during peak season"?',
      story: 'Christmas in Paris? Spring break in Cancun? Summer in Santorini? Your membership works 365 days a year.',
      stat: '365 days access',
      color: 'from-purple-400 to-purple-600'
    },
    {
      id: 4,
      icon: '🚢',
      title: 'Exclusive Cruise Deals',
      shortDesc: 'Up to 75% off luxury cruises',
      emotionalHook: 'Watching cruise prices thinking "maybe next year"?',
      story: 'Baltic cruise for $89/night. Mediterranean for $129. These aren\'t typos - they\'re member rates.',
      stat: '75% avg savings',
      color: 'from-blue-400 to-blue-600'
    },
    {
      id: 5,
      icon: '⚡',
      title: 'Last-Minute Magic',
      shortDesc: 'Spontaneous trips at shocking prices',
      emotionalHook: 'Ever wanted to just... leave? Tonight?',
      story: 'Pack your bags. Our flash deals let you escape on a whim. Vegas tonight for $47? Why not?',
      stat: '80% off last-minute',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      id: 6,
      icon: '👨‍👩‍👧‍👦',
      title: 'Family & Group Rates',
      shortDesc: 'Bigger groups, bigger savings',
      emotionalHook: 'Family reunions becoming "too expensive to coordinate"?',
      story: 'Bring everyone. Group rates mean the more you travel together, the more you save. Memories > Money.',
      stat: '30% extra group savings',
      color: 'from-pink-400 to-pink-600'
    }
  ];

  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="container mx-auto">
        {/* Emotional Hook Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-coral-100 to-orange-100 rounded-full mb-4">
            <span className="text-coral-700 font-medium">✨ Membership Benefits</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Stop Settling for <span className="gradient-text">Tourist Prices</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Every day you wait is money left on the table. 
            <span className="block mt-2 font-medium text-gray-800">
              Here's what 12,543 smart travelers already discovered:
            </span>
          </p>
        </div>

        {/* Benefits Grid with Storytelling */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              className="group relative"
              onMouseEnter={() => setHoveredBenefit(benefit.id)}
              onMouseLeave={() => setHoveredBenefit(null)}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              <div className="relative bg-white border-2 border-gray-100 rounded-3xl p-6 hover:border-coral-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                {/* Icon & Title */}
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center text-2xl shadow-lg`}>
                    {benefit.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-xl text-gray-800 mb-1">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {benefit.shortDesc}
                    </p>
                  </div>
                </div>

                {/* Emotional Hook */}
                <p className="text-sm text-gray-500 italic mb-3">
                  {benefit.emotionalHook}
                </p>

                {/* Story */}
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {benefit.story}
                </p>

                {/* Stat Badge */}
                <div className="flex items-center justify-between">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-bold bg-gradient-to-r ${benefit.color} text-white`}>
                    {benefit.stat}
                  </span>
                  <button className="text-coral-600 font-medium text-sm hover:text-coral-700 transition-colors">
                    Learn more →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Table - Emotional Impact */}
        <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border-2 border-gray-100">
          <h3 className="text-2xl font-bold text-center mb-8">
            The Real Cost of <span className="text-coral-600">Not Being a Member</span>
          </h3>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-6 text-gray-600">Your Travel Reality</th>
                  <th className="text-center py-4 px-6">
                    <div className="text-gray-500 line-through">Without Vayo</div>
                    <div className="text-xs text-gray-400">😔 Limited & Expensive</div>
                  </th>
                  <th className="text-center py-4 px-6">
                    <div className="text-coral-600 font-bold">With Vayo</div>
                    <div className="text-xs text-green-600">🎉 Unlimited & Affordable</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100 hover:bg-coral-50 transition-colors">
                  <td className="py-4 px-6 font-medium">Annual Vacation Budget</td>
                  <td className="text-center text-gray-500">$8,000</td>
                  <td className="text-center text-green-600 font-bold">$3,200</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-coral-50 transition-colors">
                  <td className="py-4 px-6 font-medium">Trips Per Year</td>
                  <td className="text-center text-gray-500">1-2 trips</td>
                  <td className="text-center text-green-600 font-bold">4-6 trips</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-coral-50 transition-colors">
                  <td className="py-4 px-6 font-medium">Hotel Quality</td>
                  <td className="text-center text-gray-500">3-star compromises</td>
                  <td className="text-center text-green-600 font-bold">5-star experiences</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-coral-50 transition-colors">
                  <td className="py-4 px-6 font-medium">Booking Stress Level</td>
                  <td className="text-center text-gray-500">High anxiety 😰</td>
                  <td className="text-center text-green-600 font-bold">Total peace 😌</td>
                </tr>
                <tr className="hover:bg-coral-50 transition-colors">
                  <td className="py-4 px-6 font-medium">Lifetime Savings</td>
                  <td className="text-center text-gray-500">$0</td>
                  <td className="text-center text-green-600 font-bold text-xl">$47,850+</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-lg text-gray-700 mb-4">
              <span className="font-bold">Quick Math:</span> The average family leaves 
              <span className="text-coral-600 font-bold"> $4,800/year</span> on the table by not being a member.
            </p>
            <button className="btn-primary text-lg px-10 py-4">
              Stop Overpaying Today →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;