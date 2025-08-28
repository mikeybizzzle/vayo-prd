export default function RefundPage() {
  return (
    <div className="bg-white py-12 mt-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Refund Policy</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">Last Updated: January 1, 2024</p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Our Commitment to Your Satisfaction</h2>
            <p className="text-gray-700 mb-4">
              At Vayo Travel, we're confident you'll love the savings and benefits of your membership. 
              However, we understand that our service may not be the perfect fit for everyone, and we 
              stand behind our membership with a comprehensive refund policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">14-Day Free Trial</h2>
            <p className="text-gray-700 mb-4">
              All new members receive a 14-day free trial period with full access to member benefits. 
              During this trial period:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>No credit card is required to start</li>
              <li>You have complete access to all member rates and benefits</li>
              <li>You can cancel at any time without any charges</li>
              <li>No questions asked if you decide it's not for you</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">30-Day Money-Back Guarantee</h2>
            <p className="text-gray-700 mb-4">
              If you decide to continue after your free trial and become a paid member, you're still 
              protected by our 30-day money-back guarantee:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Full refund if requested within 30 days of your first payment</li>
              <li>No cancellation fees or penalties</li>
              <li>Refunds are processed within 5-7 business days</li>
              <li>You'll receive email confirmation once your refund is processed</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">How to Request a Refund</h2>
            <p className="text-gray-700 mb-4">
              Requesting a refund is simple and hassle-free:
            </p>
            <ol className="list-decimal pl-6 text-gray-700 mb-4">
              <li>Contact our support team via email at refunds@vayo.travel</li>
              <li>Include your account email and membership ID</li>
              <li>Our team will process your request within 24 hours</li>
              <li>You'll receive confirmation once the refund is initiated</li>
            </ol>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Booking Cancellations</h2>
            <p className="text-gray-700 mb-4">
              For hotel and travel bookings made through Vayo:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Cancellation policies vary by property and are clearly stated at booking</li>
              <li>Most bookings offer free cancellation up to 24-48 hours before check-in</li>
              <li>Our concierge team can assist with cancellation requests</li>
              <li>Refunds for cancelled bookings follow the property's specific policy</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Contact Our Support Team</h2>
            <p className="text-gray-700">
              Have questions about our refund policy? We're here to help:<br />
              Email: refunds@vayo.travel<br />
              Phone: 1-800-VAYO (8296)<br />
              Live Chat: Available 24/7 on our website<br />
              Response Time: Within 24 hours for all refund requests
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Our Promise</h2>
            <p className="text-gray-700 mb-4">
              We believe in transparency and fairness. If you're not completely satisfied with your 
              Vayo membership, we'll make it right. No fine print, no hoops to jump through – just 
              a straightforward guarantee that puts your satisfaction first.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}