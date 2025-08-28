'use client';

const testimonials = [
  {
    id: '1',
    name: 'Sarah Johnson',
    location: 'Austin, TX',
    avatar: 'https://i.pravatar.cc/150?img=1',
    text: 'I saved over $2,000 on our family trip to Hawaii! The member rates are incredible.',
    savings: '$2,147 saved'
  },
  {
    id: '2',
    name: 'Michael Chen',
    location: 'San Francisco, CA',
    avatar: 'https://i.pravatar.cc/150?img=3',
    text: 'Best decision ever! Paid for itself on the first booking. Customer service is amazing.',
    savings: '$3,892 saved'
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    location: 'Miami, FL',
    avatar: 'https://i.pravatar.cc/150?img=5',
    text: 'We travel 3-4 times a year and save thousands. The cruise deals alone are worth it!',
    savings: '$5,234 saved'
  },
  {
    id: '4',
    name: 'David Thompson',
    location: 'Seattle, WA',
    avatar: 'https://i.pravatar.cc/150?img=7',
    text: 'Skeptical at first, but the savings are real. Booked 5 trips this year, all amazing deals.',
    savings: '$4,567 saved'
  },
  {
    id: '5',
    name: 'Jessica Park',
    location: 'New York, NY',
    avatar: 'https://i.pravatar.cc/150?img=9',
    text: 'The concierge service helped plan our entire Europe trip. Saved money AND time!',
    savings: '$6,123 saved'
  },
  {
    id: '6',
    name: 'Robert Williams',
    location: 'Chicago, IL',
    avatar: 'https://i.pravatar.cc/150?img=11',
    text: 'Member since 2019. Have saved enough to take two extra vacations per year!',
    savings: '$8,456 saved'
  }
];

const Testimonials = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-coral-50 to-orange-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join <span className="gradient-text">Thousands</span> of Happy Members
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real members, real savings, real vacations
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start gap-4 mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-coral-100"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                  <p className="text-gray-600 text-sm">{testimonial.location}</p>
                  <div className="flex text-yellow-400 mt-1">
                    {'★★★★★'.split('').map((star, i) => (
                      <span key={i}>{star}</span>
                    ))}
                  </div>
                </div>
              </div>
              
              <p className="text-gray-700 mb-4 leading-relaxed">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <span className="text-sm text-gray-500">Total saved:</span>
                <span className="font-bold text-green-600 text-lg">
                  {testimonial.savings}
                </span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-md">
            <span className="text-2xl">⭐</span>
            <div className="text-left">
              <div className="font-bold">4.8/5 Average Rating</div>
              <div className="text-sm text-gray-600">From 12,543+ verified members</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;