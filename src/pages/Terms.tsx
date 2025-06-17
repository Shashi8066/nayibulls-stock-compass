
import { FileText } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Terms = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-nayibulls-gray">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <FileText className="h-16 w-16 text-nayibulls-navy mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-nayibulls-navy mb-4">Terms of Service</h1>
          <p className="text-lg text-gray-600">
            Last updated: December 2024
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="bg-white rounded-lg p-8 shadow-lg space-y-6">
            <section>
              <h2 className="text-2xl font-bold text-nayibulls-navy mb-4">Acceptance of Terms</h2>
              <p className="text-gray-700">
                By accessing and using NayiBulls, you accept and agree to be bound by the terms 
                and provision of this agreement. If you do not agree to these terms, please do not use our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-nayibulls-navy mb-4">Educational Purpose Only</h2>
              <p className="text-gray-700 mb-4">
                NayiBulls is an educational platform designed to help users understand financial concepts 
                and stock market analysis. Our tools and content are for informational and educational purposes only.
              </p>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                <p className="text-gray-700 font-semibold">
                  Important: We do not provide financial advice, investment recommendations, 
                  or portfolio management services.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-nayibulls-navy mb-4">No Investment Advice</h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>All content is for educational and informational purposes only</li>
                <li>No content should be construed as investment advice or recommendations</li>
                <li>We are not SEBI registered investment advisors</li>
                <li>Past performance does not guarantee future results</li>
                <li>Always consult qualified financial advisors before making investment decisions</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-nayibulls-navy mb-4">Data Accuracy</h2>
              <p className="text-gray-700 mb-4">
                While we strive to provide accurate information:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Sample data is used for educational demonstrations</li>
                <li>Real-time data may not always be available or accurate</li>
                <li>Users should verify all information from official sources</li>
                <li>We are not responsible for decisions based on our content</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-nayibulls-navy mb-4">User Responsibilities</h2>
              <p className="text-gray-700 mb-4">As a user, you agree to:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Use the website for lawful purposes only</li>
                <li>Not attempt to hack, damage, or disrupt our services</li>
                <li>Understand that our tools are educational in nature</li>
                <li>Conduct your own research before making investment decisions</li>
                <li>Respect intellectual property rights</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-nayibulls-navy mb-4">Limitation of Liability</h2>
              <p className="text-gray-700 mb-4">
                NayiBulls and its operators shall not be liable for:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Any investment losses or financial damages</li>
                <li>Decisions made based on our educational content</li>
                <li>Technical issues or website downtime</li>
                <li>Inaccuracies in sample or demonstration data</li>
                <li>Third-party content or external links</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-nayibulls-navy mb-4">Intellectual Property</h2>
              <p className="text-gray-700">
                All content, tools, and materials on NayiBulls are protected by intellectual property laws. 
                You may use our tools for personal, non-commercial educational purposes. 
                Commercial use requires written permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-nayibulls-navy mb-4">Modifications</h2>
              <p className="text-gray-700">
                We reserve the right to modify these terms at any time. Changes will be posted on this page 
                with an updated date. Continued use of our website constitutes acceptance of modified terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-nayibulls-navy mb-4">Governing Law</h2>
              <p className="text-gray-700">
                These terms are governed by Indian law. Any disputes will be subject to the jurisdiction 
                of Indian courts.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-nayibulls-navy mb-4">Contact Information</h2>
              <p className="text-gray-700">
                For questions about these terms, please contact us at:
                <br />
                <a href="mailto:legal@nayibulls.com" className="text-nayibulls-green hover:underline">
                  legal@nayibulls.com
                </a>
              </p>
            </section>

            <div className="bg-red-50 border-l-4 border-red-400 p-4">
              <p className="text-gray-700 font-semibold">
                Risk Warning: All investments carry risk. The value of investments can go down as well as up. 
                You may get back less than you invested. NayiBulls does not provide investment advice.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Terms;
