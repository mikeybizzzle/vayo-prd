export default function TermsPage() {
  return (
    <div className="bg-white py-12 mt-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">Effective Date: January 1, 2024</p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700 mb-4">
              By accessing and using Vayo Travel membership services, you agree to be bound by these Terms of Service. 
              If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">2. Membership Benefits</h2>
            <p className="text-gray-700 mb-4">
              Your Vayo membership provides access to exclusive travel rates at participating hotels, resorts, and cruise lines. 
              Actual savings may vary based on destination, dates, and availability.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">3. Free Trial</h2>
            <p className="text-gray-700 mb-4">
              New members receive a 14-day free trial with full access to member benefits. 
              You may cancel at any time during the trial period without charge.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">4. Billing</h2>
            <p className="text-gray-700 mb-4">
              After the free trial, membership is $99 per year, billed annually. 
              You will be notified before any charges are made to your payment method.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">5. Cancellation</h2>
            <p className="text-gray-700 mb-4">
              You may cancel your membership at any time through your account settings or by contacting customer support. 
              Cancellations take effect at the end of your current billing period.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">6. Refund Policy</h2>
            <p className="text-gray-700 mb-4">
              We offer a 30-day money-back guarantee on annual memberships. 
              If you're not satisfied, contact us within 30 days of your payment for a full refund.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">7. Contact Information</h2>
            <p className="text-gray-700">
              Email: support@vayo.travel<br />
              Phone: 1-800-VAYO (8296)<br />
              Address: 123 Travel Street, Miami, FL 33101
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}