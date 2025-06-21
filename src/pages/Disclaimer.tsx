
import { Shield, AlertTriangle, Info, FileText } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Disclaimer = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-nayibulls-gray">
      <Helmet>
        <title>Important Disclaimer - NayiBulls Investment Tool Disclaimer</title>
        <meta name="description" content="Important disclaimer: NayiBulls is not SEBI registered. Educational tools only, not financial advice. Investment risks and user responsibilities explained." />
        <meta name="keywords" content="investment disclaimer, not financial advice, sebi registration, educational tools, investment risks, user responsibilities" />
        <meta name="author" content="NayiBulls" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://nayibulls.com/disclaimer" />
        
        {/* Open Graph meta tags */}
        <meta property="og:title" content="Important Disclaimer - NayiBulls Investment Tool Disclaimer" />
        <meta property="og:description" content="Important disclaimer: NayiBulls is not SEBI registered. Educational tools only, not financial advice." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nayibulls.com/disclaimer" />
        <meta property="og:site_name" content="NayiBulls" />
        
        {/* Twitter meta tags */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Important Disclaimer - NayiBulls Investment Tool Disclaimer" />
        <meta name="twitter:description" content="Important disclaimer: Educational tools only, not financial advice." />
      </Helmet>

      <Header />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center">
            <Shield className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-nayibulls-navy mb-4">Important Disclaimer</h1>
          <p className="text-lg text-gray-600">
            Please read this disclaimer carefully before using NayiBulls tools and services.
          </p>
        </div>

        <div className="space-y-8">
          {/* Main Disclaimer */}
          <Card className="border-l-4 border-l-yellow-500">
            <CardHeader>
              <CardTitle className="flex items-center text-nayibulls-navy">
                <AlertTriangle className="h-6 w-6 mr-2 text-yellow-500" />
                Not Financial Advice
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                <strong>NayiBulls is NOT a SEBI registered investment advisor.</strong> All information, tools, calculators, 
                and content provided on this website are for <strong>educational and informational purposes only</strong> 
                and should not be construed as financial, investment, or trading advice.
              </p>
              <p className="text-gray-700">
                We do not recommend or advise on buying, selling, or holding any securities, stocks, or financial instruments. 
                Any investment decisions made by users are entirely their own responsibility.
              </p>
            </CardContent>
          </Card>

          {/* Data Accuracy */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-nayibulls-navy">
                <Info className="h-6 w-6 mr-2 text-blue-500" />
                Data Accuracy & Sources
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Stock data, financial metrics, and calculations presented on NayiBulls are based on publicly available 
                information and may contain errors, delays, or inaccuracies. We make no representations or warranties 
                regarding the accuracy, completeness, or timeliness of any information.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Sample data used for demonstration purposes</li>
                <li>Historical performance does not guarantee future results</li>
                <li>Market conditions can change rapidly</li>
                <li>Always verify information from official sources</li>
              </ul>
            </CardContent>
          </Card>

          {/* Investment Risks */}
          <Card className="border-l-4 border-l-red-500">
            <CardHeader>
              <CardTitle className="flex items-center text-nayibulls-navy">
                <AlertTriangle className="h-6 w-6 mr-2 text-red-500" />
                Investment Risks
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                <strong>All investments involve risk of loss.</strong> Stock markets are subject to volatility, 
                and past performance is not indicative of future results. Consider the following risks:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li><strong>Market Risk:</strong> Stock prices can fluctuate significantly</li>
                <li><strong>Company Risk:</strong> Individual companies may underperform or fail</li>
                <li><strong>Sector Risk:</strong> Entire sectors may decline due to various factors</li>
                <li><strong>Liquidity Risk:</strong> Some stocks may be difficult to buy or sell</li>
                <li><strong>Currency Risk:</strong> Exchange rate fluctuations may affect returns</li>
              </ul>
            </CardContent>
          </Card>

          {/* User Responsibilities */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-nayibulls-navy">
                <FileText className="h-6 w-6 mr-2 text-nayibulls-green" />
                User Responsibilities
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">By using NayiBulls, you acknowledge and agree that:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>You will conduct your own research and due diligence</li>
                <li>You will consult with qualified financial advisors before making investment decisions</li>
                <li>You understand the risks associated with stock market investments</li>
                <li>You will not hold NayiBulls liable for any investment losses</li>
                <li>You will use the tools for educational purposes only</li>
              </ul>
            </CardContent>
          </Card>

          {/* Regulatory Compliance */}
          <Card className="bg-nayibulls-gray-light">
            <CardHeader>
              <CardTitle className="text-nayibulls-navy">Regulatory Compliance</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                NayiBulls operates as an educational platform and does not provide personalized investment advice. 
                We are not registered with SEBI (Securities and Exchange Board of India) as an investment advisor, 
                research analyst, or portfolio manager.
              </p>
              <p className="text-gray-700">
                For professional investment advice, please consult with SEBI-registered investment advisors, 
                research analysts, or portfolio managers.
              </p>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle className="text-nayibulls-navy">Questions or Concerns?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                If you have any questions about this disclaimer or our services, please contact us:
              </p>
              <p className="text-nayibulls-navy font-semibold">
                Email: contact@nayibulls.com
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Last Updated */}
        <div className="text-center mt-12 text-sm text-gray-500">
          <p>Last updated: December 2024</p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Disclaimer;
