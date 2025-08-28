'use client';

import { useState } from 'react';

const faqs = [
  {
    id: '1',
    question: 'How much does membership cost after the free trial?',
    answer: 'After your 14-day free trial, membership is just $99/year. Most members save this amount on their first booking alone!'
  },
  {
    id: '2',
    question: 'Are the savings really that significant?',
    answer: 'Absolutely! Our members save an average of 40-70% compared to public rates. We negotiate exclusive wholesale rates with hotels, resorts, and cruise lines that aren\'t available to the public.'
  },
  {
    id: '3',
    question: 'Can I cancel anytime?',
    answer: 'Yes! You can cancel your membership anytime during the free trial or after. No questions asked, no cancellation fees. We\'re confident you\'ll love the savings!'
  },
  {
    id: '4',
    question: 'How many destinations are available?',
    answer: 'You\'ll have access to over 500,000 hotels, resorts, and vacation rentals in 200+ countries. Plus exclusive cruise deals and vacation packages.'
  },
  {
    id: '5',
    question: 'Is this a timeshare or vacation club?',
    answer: 'No! This is NOT a timeshare. There are no presentations, no property ownership, and no long-term contracts. Just simple membership access to wholesale travel rates.'
  },
  {
    id: '6',
    question: 'How quickly can I start booking?',
    answer: 'Immediately! As soon as you sign up for your free trial, you\'ll get instant access to all member rates and can start booking right away.'
  }
];

const FAQ = () => {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setOpenItems(prev =>
      prev.includes(id)
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about your membership
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq) => {
            const isOpen = openItems.includes(faq.id);
            
            return (
              <div
                key={faq.id}
                className="border-2 border-coral-100 rounded-2xl overflow-hidden transition-all duration-300 hover:border-coral-300"
              >
                <button
                  onClick={() => toggleItem(faq.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-coral-50 transition-colors"
                >
                  <h3 className="font-semibold text-lg pr-4">{faq.question}</h3>
                  <div className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    <svg
                      className="w-6 h-6 text-coral-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </button>
                
                <div
                  className={`px-6 transition-all duration-300 ${
                    isOpen ? 'py-5 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                  }`}
                >
                  <p className="text-gray-700 leading-relaxed border-t border-coral-100 pt-5">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-12 text-center p-8 bg-gradient-to-r from-coral-50 to-orange-50 rounded-3xl">
          <h3 className="text-2xl font-bold mb-3">Still Have Questions?</h3>
          <p className="text-gray-600 mb-6">
            Our travel experts are here to help 24/7
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:support@vayo.travel"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-coral-400 text-coral-600 font-semibold rounded-xl hover:bg-white transition-colors"
            >
              📧 Email Support
            </a>
            <a
              href="tel:1-800-VAYO"
              className="inline-flex items-center justify-center px-6 py-3 bg-coral-500 text-white font-semibold rounded-xl hover:bg-coral-600 transition-colors"
            >
              📞 1-800-VAYO
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;