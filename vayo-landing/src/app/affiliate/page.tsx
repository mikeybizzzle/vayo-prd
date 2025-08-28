export default function AffiliatePage() {
  return (
    <div className="bg-gradient-to-b from-white to-coral-50 py-12 mt-8">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-6">
            Earn <span className="gradient-text">$50</span> Per Referral
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join the Vayo Affiliate Program and earn generous commissions by sharing 
            exclusive travel savings with your audience.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-coral-600">$50</div>
            <div className="text-gray-600">Per Conversion</div>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-green-600">30%</div>
            <div className="text-gray-600">Conversion Rate</div>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-blue-600">60 Days</div>
            <div className="text-gray-600">Cookie Duration</div>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-purple-600">Weekly</div>
            <div className="text-gray-600">Payments</div>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-12">
          <h2 className="text-3xl font-bold mb-6">How It Works</h2>
          
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-coral-100 rounded-full flex items-center justify-center text-coral-600 font-bold flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Sign Up Free</h3>
                <p className="text-gray-700">
                  Apply for the affiliate program in 2 minutes. Instant approval for qualified partners.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-coral-100 rounded-full flex items-center justify-center text-coral-600 font-bold flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Share Your Unique Link</h3>
                <p className="text-gray-700">
                  Get your personalized tracking link and share it with your audience through your blog, 
                  social media, email list, or website.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-coral-100 rounded-full flex items-center justify-center text-coral-600 font-bold flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Earn $50 Per Sale</h3>
                <p className="text-gray-700">
                  Receive $50 for every customer who signs up for a paid membership through your link. 
                  Track everything in real-time through your dashboard.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="text-xl font-bold mb-4">Why Partners Love Vayo</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-green-500">✓</span>
                <span className="text-gray-700">High conversion rates with 14-day free trial</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500">✓</span>
                <span className="text-gray-700">60-day cookie window for maximum earnings</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500">✓</span>
                <span className="text-gray-700">Real-time tracking and reporting dashboard</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500">✓</span>
                <span className="text-gray-700">Professional marketing materials provided</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500">✓</span>
                <span className="text-gray-700">Dedicated affiliate support team</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="text-xl font-bold mb-4">Perfect For:</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-coral-500">→</span>
                <span className="text-gray-700">Travel bloggers and influencers</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-coral-500">→</span>
                <span className="text-gray-700">Deal and coupon websites</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-coral-500">→</span>
                <span className="text-gray-700">Email newsletter publishers</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-coral-500">→</span>
                <span className="text-gray-700">Social media content creators</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-coral-500">→</span>
                <span className="text-gray-700">Anyone with an audience interested in travel</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Commission Structure */}
        <div className="bg-gradient-to-r from-coral-50 to-orange-50 rounded-3xl p-8 mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Commission Structure</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl overflow-hidden">
              <thead className="bg-coral-500 text-white">
                <tr>
                  <th className="py-4 px-6 text-left">Monthly Sales</th>
                  <th className="py-4 px-6 text-center">Commission Per Sale</th>
                  <th className="py-4 px-6 text-center">Bonus</th>
                  <th className="py-4 px-6 text-right">Potential Earnings</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6">1-10 sales</td>
                  <td className="text-center font-bold text-coral-600">$50</td>
                  <td className="text-center">-</td>
                  <td className="text-right font-bold">Up to $500</td>
                </tr>
                <tr className="border-b border-gray-200 bg-coral-50">
                  <td className="py-4 px-6">11-25 sales</td>
                  <td className="text-center font-bold text-coral-600">$60</td>
                  <td className="text-center text-green-600">+$100 bonus</td>
                  <td className="text-right font-bold">Up to $1,600</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6">26-50 sales</td>
                  <td className="text-center font-bold text-coral-600">$75</td>
                  <td className="text-center text-green-600">+$250 bonus</td>
                  <td className="text-right font-bold">Up to $4,000</td>
                </tr>
                <tr className="bg-coral-50">
                  <td className="py-4 px-6">50+ sales</td>
                  <td className="text-center font-bold text-coral-600">$100</td>
                  <td className="text-center text-green-600">+$500 bonus</td>
                  <td className="text-right font-bold text-green-600">$5,000+</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="font-bold text-lg mb-2">When do I get paid?</h3>
              <p className="text-gray-700">
                Payments are sent weekly via PayPal or direct deposit. Minimum payout is $100.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="font-bold text-lg mb-2">Do I need a website?</h3>
              <p className="text-gray-700">
                No! You can promote through social media, email, YouTube, or any other platform.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="font-bold text-lg mb-2">Is there a cost to join?</h3>
              <p className="text-gray-700">
                Never! The affiliate program is 100% free to join with no hidden fees.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="font-bold text-lg mb-2">What marketing materials do you provide?</h3>
              <p className="text-gray-700">
                Banners, email templates, social media graphics, and conversion-optimized landing pages.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-white rounded-3xl p-8 shadow-xl">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Earning?
          </h2>
          <p className="text-xl text-gray-600 mb-6">
            Join 1,000+ affiliates already earning with Vayo
          </p>
          <button className="bg-gradient-to-r from-coral-500 to-orange-500 text-white font-bold px-10 py-4 rounded-2xl text-lg hover:scale-105 transition-transform shadow-lg">
            Apply Now - Instant Approval →
          </button>
          <p className="text-sm text-gray-500 mt-4">
            Questions? Email us at affiliates@vayo.travel
          </p>
        </div>
      </div>
    </div>
  );
}