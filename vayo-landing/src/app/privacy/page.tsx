export default function PrivacyPage() {
  return (
    <div className="bg-white py-12 mt-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">Last Updated: January 1, 2024</p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
            <p className="text-gray-700 mb-4">
              We collect information you provide directly to us, such as when you create an account, 
              make a booking, or contact us for support. This may include:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Name and contact information</li>
              <li>Payment information</li>
              <li>Travel preferences and booking history</li>
              <li>Communications with us</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-700 mb-4">We use the information we collect to:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Process your membership and bookings</li>
              <li>Send you exclusive travel deals and updates</li>
              <li>Provide customer support</li>
              <li>Improve our services</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">3. Information Sharing</h2>
            <p className="text-gray-700 mb-4">
              We do not sell, rent, or share your personal information with third parties for their marketing purposes. 
              We may share your information with:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Hotels and travel partners to complete your bookings</li>
              <li>Service providers who assist in our operations</li>
              <li>Law enforcement when required by law</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">4. Data Security</h2>
            <p className="text-gray-700 mb-4">
              We implement industry-standard security measures to protect your personal information. 
              All payment information is encrypted using SSL technology.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">5. Your Rights</h2>
            <p className="text-gray-700 mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt-out of marketing communications</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">6. Cookies</h2>
            <p className="text-gray-700 mb-4">
              We use cookies to enhance your experience, analyze usage, and deliver targeted advertising. 
              You can control cookies through your browser settings.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">7. Contact Us</h2>
            <p className="text-gray-700">
              If you have questions about this Privacy Policy, please contact us at:<br />
              Email: privacy@vayo.travel<br />
              Phone: 1-800-VAYO (8296)<br />
              Address: 123 Travel Street, Miami, FL 33101
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}