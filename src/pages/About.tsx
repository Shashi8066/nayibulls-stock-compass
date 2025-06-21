
import { TrendingUp, Users, Target, Shield } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-nayibulls-gray">
      <Helmet>
        <title>About NayiBulls - Educational Tools for New-Age Investors</title>
        <meta name="description" content="Learn about NayiBulls mission to democratize stock market education for retail investors in India. Educational tools, not financial advice." />
        <meta name="keywords" content="about nayibulls, stock market education, retail investors india, investment tools, financial education, investment analysis" />
        <meta name="author" content="NayiBulls" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://nayibulls.com/about" />
        
        {/* Open Graph meta tags */}
        <meta property="og:title" content="About NayiBulls - Educational Tools for New-Age Investors" />
        <meta property="og:description" content="Learn about NayiBulls mission to democratize stock market education for retail investors in India." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nayibulls.com/about" />
        <meta property="og:site_name" content="NayiBulls" />
        
        {/* Twitter meta tags */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="About NayiBulls - Educational Tools for New-Age Investors" />
        <meta name="twitter:description" content="Learn about NayiBulls mission to democratize stock market education for retail investors in India." />
      </Helmet>

      <Header />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-nayibulls-navy mb-4">About NayiBulls</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Empowering the new generation of retail investors in India with educational tools and insights.
          </p>
        </div>

        <div className="prose prose-lg max-w-none mb-12">
          <div className="bg-white rounded-lg p-8 shadow-lg mb-8">
            <h2 className="text-2xl font-bold text-nayibulls-navy mb-4">Our Mission</h2>
            <p className="text-gray-700 mb-4">
              NayiBulls was created to bridge the knowledge gap for new-age retail investors in India. 
              We believe that every investor, regardless of their experience level, should have access to 
              powerful yet simple tools to understand the stock market better.
            </p>
            <p className="text-gray-700">
              Our platform focuses on education rather than advice, providing calculators, comparisons, 
              and insights that help users make informed decisions about their investments.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <Target className="h-8 w-8 text-nayibulls-green mb-2" />
                <CardTitle>Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  To democratize stock market education and make investment analysis accessible 
                  to every retail investor in India.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-8 w-8 text-nayibulls-navy mb-2" />
                <CardTitle>Our Values</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Transparency, education, and empowerment. We believe in providing tools 
                  that educate rather than influence investment decisions.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-nayibulls-gray rounded-lg p-8">
            <h2 className="text-2xl font-bold text-nayibulls-navy mb-4">What We Offer</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <TrendingUp className="h-5 w-5 text-nayibulls-green mt-1 mr-3 flex-shrink-0" />
                Stock discovery tools to find emerging opportunities
              </li>
              <li className="flex items-start">
                <TrendingUp className="h-5 w-5 text-nayibulls-green mt-1 mr-3 flex-shrink-0" />
                Return calculators with compound growth visualization
              </li>
              <li className="flex items-start">
                <TrendingUp className="h-5 w-5 text-nayibulls-green mt-1 mr-3 flex-shrink-0" />
                Company comparison tools with key financial metrics
              </li>
              <li className="flex items-start">
                <TrendingUp className="h-5 w-5 text-nayibulls-green mt-1 mr-3 flex-shrink-0" />
                Educational content and financial glossary
              </li>
            </ul>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mt-8">
            <div className="flex">
              <Shield className="h-6 w-6 text-yellow-400 mr-3" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Important Disclaimer</h3>
                <p className="text-gray-700">
                  NayiBulls is not SEBI registered and does not provide financial advice. 
                  All tools and information are for educational purposes only. Please consult 
                  with qualified financial advisors before making investment decisions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
