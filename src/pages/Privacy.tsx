
import { Shield } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-nayibulls-gray">
      <Helmet>
        <title>Privacy Policy - NayiBulls Data Protection & Privacy</title>
        <meta name="description" content="NayiBulls Privacy Policy. Learn how we protect your privacy with minimal data collection, no personal financial information storage, and anonymous analytics." />
        <meta name="keywords" content="privacy policy, data protection, user privacy, anonymous analytics, no personal data, privacy rights" />
        <meta name="author" content="NayiBulls" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://nayibulls.com/privacy" />
        
        {/* Open Graph meta tags */}
        <meta property="og:title" content="Privacy Policy - NayiBulls Data Protection & Privacy" />
        <meta property="og:description" content="NayiBulls Privacy Policy. Learn how we protect your privacy with minimal data collection and anonymous analytics." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nayibulls.com/privacy" />
        <meta property="og:site_name" content="NayiBulls" />
        
        {/* Twitter meta tags */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Privacy Policy - NayiBulls Data Protection & Privacy" />
        <meta name="twitter:description" content="Learn how NayiBulls protects your privacy with minimal data collection." />
      </Helmet>

      <Header />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <Shield className="h-16 w-16 text-nayibulls-navy mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-nayibulls-navy mb-4">Privacy Policy</h1>
          <p className="text-lg text-gray-600">
            Last updated: December 2024
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="bg-white rounded-lg p-8 shadow-lg space-y-6">
            <section>
              <h2 className="text-2xl font-bold text-nayibulls-navy mb-4">Information We Collect</h2>
              <p className="text-gray-700 mb-4">
                NayiBulls is designed with privacy in mind. We do not require user registration or login, 
                and we do not collect personal financial information.
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Website usage analytics (anonymous)</li>
                <li>Browser type and device information (anonymous)</li>
                <li>Page views and navigation patterns (anonymous)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-nayibulls-navy mb-4">What We Don't Collect</h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Personal identification information</li>
                <li>Financial account details</li>
                <li>Investment portfolio information</li>
                <li>Email addresses (unless voluntarily provided for contact)</li>
                <li>Phone numbers or addresses</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-nayibulls-navy mb-4">How We Use Information</h2>
              <p className="text-gray-700 mb-4">
                The limited anonymous data we collect is used only to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Improve website performance and user experience</li>
                <li>Understand which tools are most useful to visitors</li>
                <li>Ensure our educational content meets user needs</li>
                <li>Maintain website security and prevent abuse</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-nayibulls-navy mb-4">Cookies and Tracking</h2>
              <p className="text-gray-700 mb-4">
                We use minimal cookies and tracking technologies:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Essential cookies for website functionality</li>
                <li>Analytics cookies to understand usage patterns (anonymous)</li>
                <li>No third-party tracking for advertising purposes</li>
                <li>You can disable cookies in your browser settings</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-nayibulls-navy mb-4">Data Security</h2>
              <p className="text-gray-700 mb-4">
                Since we don't collect sensitive personal information, your privacy risk is minimal. 
                All calculations are performed in your browser and are not transmitted to our servers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-nayibulls-navy mb-4">Third-Party Services</h2>
              <p className="text-gray-700 mb-4">
                We may use the following third-party services:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Google Analytics for website usage statistics</li>
                <li>Hosting providers for website infrastructure</li>
                <li>These services have their own privacy policies</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-nayibulls-navy mb-4">Your Rights</h2>
              <p className="text-gray-700 mb-4">
                Since we don't collect personal data, there's limited personal information to manage. 
                However, you can:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Use our website without providing any personal information</li>
                <li>Disable cookies in your browser</li>
                <li>Contact us with any privacy concerns</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-nayibulls-navy mb-4">Updates to Privacy Policy</h2>
              <p className="text-gray-700">
                We may update this privacy policy occasionally. Any changes will be posted on this page 
                with an updated revision date. Continued use of our website constitutes acceptance of 
                any changes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-nayibulls-navy mb-4">Contact Information</h2>
              <p className="text-gray-700">
                If you have questions about this privacy policy, please contact us at:
                <br />
                <a href="mailto:privacy@nayibulls.com" className="text-nayibulls-green hover:underline">
                  privacy@nayibulls.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Privacy;
