'use client';

import { formatCurrency, calculateSavings } from '@/lib/utils';

const comparisons = [
  {
    id: '1',
    destination: 'Cancun, Mexico',
    hotel: 'Hilton Cancun Resort',
    publicRate: 489,
    memberRate: 187,
    image: 'https://images.unsplash.com/photo-1510097467424-192d713fd8b2?w=400&h=300&fit=crop'
  },
  {
    id: '2',
    destination: 'Maui, Hawaii',
    hotel: 'Grand Wailea Resort',
    publicRate: 825,
    memberRate: 412,
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=300&fit=crop'
  },
  {
    id: '3',
    destination: 'Orlando, Florida',
    hotel: 'Disney Grand Floridian',
    publicRate: 695,
    memberRate: 298,
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop'
  }
];

const PriceComparison = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Real Savings on <span className="gradient-text">Real Vacations</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Compare member rates vs. public rates at top destinations worldwide
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {comparisons.map((item) => {
            const savings = calculateSavings(item.publicRate, item.memberRate);
            const savedAmount = item.publicRate - item.memberRate;
            
            return (
              <div key={item.id} className="card overflow-hidden group">
                <div className="relative h-48 -mx-6 -mt-6 mb-6">
                  <img
                    src={item.image}
                    alt={item.destination}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-coral-500 text-white px-3 py-1 rounded-full font-bold">
                    {savings}% OFF
                  </div>
                </div>
                
                <h3 className="font-bold text-xl mb-1">{item.destination}</h3>
                <p className="text-gray-600 mb-4">{item.hotel}</p>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500">Public Rate:</span>
                    <span className="text-xl line-through text-gray-400">
                      {formatCurrency(item.publicRate)}
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500">Member Rate:</span>
                    <span className="text-2xl font-bold text-coral-600">
                      {formatCurrency(item.memberRate)}
                    </span>
                  </div>
                  
                  <div className="pt-3 border-t border-gray-200">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">You Save:</span>
                      <span className="text-xl font-bold text-green-600">
                        {formatCurrency(savedAmount)}
                      </span>
                    </div>
                  </div>
                </div>
                
                <button className="w-full mt-6 bg-coral-50 text-coral-600 font-semibold py-3 rounded-xl hover:bg-coral-100 transition-colors">
                  View Deal →
                </button>
              </div>
            );
          })}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Prices shown are per night for standard rooms</p>
          <button className="btn-primary">
            See More Destinations →
          </button>
        </div>
      </div>
    </section>
  );
};

export default PriceComparison;