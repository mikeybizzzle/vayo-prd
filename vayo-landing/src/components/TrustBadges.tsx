'use client';

const TrustBadges = () => {
  const partners = [
    { name: 'Hilton', logo: 'HILTON' },
    { name: 'Marriott', logo: 'MARRIOTT' },
    { name: 'Hyatt', logo: 'HYATT' },
    { name: 'IHG', logo: 'IHG' },
    { name: 'Wyndham', logo: 'WYNDHAM' },
    { name: 'Best Western', logo: 'BEST WESTERN' }
  ];

  const media = [
    { name: 'Forbes', mention: '"Revolutionary travel savings"' },
    { name: 'CNN Travel', mention: '"Game-changer for families"' },
    { name: 'USA Today', mention: '"Best kept travel secret"' },
    { name: 'Travel + Leisure', mention: '"Smart traveler\'s choice"' }
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto">
        {/* Trust Header with Emotional Appeal */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by <span className="gradient-text">Smart Travelers</span> Worldwide
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. See who's backing your next adventure.
          </p>
        </div>

        {/* Security & Trust Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Security Card */}
          <div className="bg-white rounded-3xl p-6 shadow-lg border-2 border-green-100">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center text-white text-2xl">
                🔒
              </div>
              <div>
                <h3 className="font-bold text-xl">Bank-Level Security</h3>
                <p className="text-sm text-gray-600">256-bit SSL encryption</p>
              </div>
            </div>
            <p className="text-gray-700">
              Your payment info is safer here than in your wallet. We use the same security as major banks.
            </p>
            <div className="mt-4 flex gap-2">
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                PCI Compliant
              </span>
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                SSL Secured
              </span>
            </div>
          </div>

          {/* BBB Rating Card */}
          <div className="bg-white rounded-3xl p-6 shadow-lg border-2 border-blue-100">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl">
                A+
              </div>
              <div>
                <h3 className="font-bold text-xl">BBB Accredited</h3>
                <p className="text-sm text-gray-600">A+ Rating since 2019</p>
              </div>
            </div>
            <p className="text-gray-700">
              5 years of excellence. Zero unresolved complaints. Your satisfaction is guaranteed.
            </p>
            <div className="mt-4">
              <div className="flex items-center gap-1">
                {'⭐⭐⭐⭐⭐'.split('').map((star, i) => (
                  <span key={i} className="text-yellow-400">{star}</span>
                ))}
                <span className="text-sm text-gray-600 ml-2">4.9/5 (8,432 reviews)</span>
              </div>
            </div>
          </div>

          {/* Money Back Guarantee */}
          <div className="bg-white rounded-3xl p-6 shadow-lg border-2 border-coral-100">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-coral-400 to-orange-400 rounded-2xl flex items-center justify-center text-white text-2xl">
                💰
              </div>
              <div>
                <h3 className="font-bold text-xl">30-Day Guarantee</h3>
                <p className="text-sm text-gray-600">100% money back</p>
              </div>
            </div>
            <p className="text-gray-700">
              Not happy? Full refund. No questions. No hassle. That's how confident we are you'll love it.
            </p>
            <div className="mt-4">
              <span className="text-sm font-bold text-green-600">
                ✓ Risk-free trial • ✓ Cancel anytime
              </span>
            </div>
          </div>
        </div>

        {/* Partner Hotels */}
        <div className="bg-white rounded-3xl p-8 shadow-lg mb-12">
          <h3 className="text-center text-lg font-medium text-gray-600 mb-6">
            Official Partners with Leading Hotel Chains
          </h3>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="flex items-center justify-center h-16 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
              >
                <div className="text-xl font-bold text-gray-400 hover:text-gray-700 transition-colors">
                  {partner.logo}
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-500 mt-6">
            + 500,000 more hotels, resorts, and vacation rentals worldwide
          </p>
        </div>

        {/* Media Mentions */}
        <div className="bg-gradient-to-r from-coral-50 to-orange-50 rounded-3xl p-8">
          <h3 className="text-center text-lg font-medium text-gray-700 mb-6">
            As Featured In
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {media.map((outlet) => (
              <div key={outlet.name} className="text-center">
                <div className="text-2xl font-bold text-gray-700 mb-2">
                  {outlet.name}
                </div>
                <p className="text-sm text-gray-600 italic">
                  {outlet.mention}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Statistics Bar */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-white rounded-2xl shadow-md">
            <div className="text-3xl font-bold text-coral-600">12,543+</div>
            <div className="text-sm text-gray-600">Active Members</div>
          </div>
          <div className="text-center p-4 bg-white rounded-2xl shadow-md">
            <div className="text-3xl font-bold text-green-600">$4.2M</div>
            <div className="text-sm text-gray-600">Saved This Month</div>
          </div>
          <div className="text-center p-4 bg-white rounded-2xl shadow-md">
            <div className="text-3xl font-bold text-blue-600">98%</div>
            <div className="text-sm text-gray-600">Member Retention</div>
          </div>
          <div className="text-center p-4 bg-white rounded-2xl shadow-md">
            <div className="text-3xl font-bold text-purple-600">24/7</div>
            <div className="text-sm text-gray-600">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;