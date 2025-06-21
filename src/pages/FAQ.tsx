
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "Is this financial advice?",
      answer: "No, NayiBulls does not provide financial advice. All our tools and information are for educational purposes only. We help you understand financial concepts and analyze data, but investment decisions should be made after consulting with qualified financial advisors."
    },
    {
      question: "Where does your data come from?",
      answer: "Our tools use sample and publicly available data for educational demonstrations. For actual investment decisions, always verify information from official sources like company annual reports, NSE/BSE websites, and authorized financial platforms."
    },
    {
      question: "Do you store user data?",
      answer: "No, we do not store any personal financial information. Our tools work entirely in your browser, and we don't require registration or login. Any calculations you perform remain private to your session."
    },
    {
      question: "Are you SEBI registered?",
      answer: "No, NayiBulls is not SEBI registered. We are an educational platform providing tools and information for learning purposes. We do not provide investment advisory services or portfolio management."
    },
    {
      question: "How accurate are your calculations?",
      answer: "Our calculators use standard financial formulas and are designed for educational understanding. However, real-world returns depend on many factors including market conditions, timing, fees, and taxes that our simplified tools may not account for."
    },
    {
      question: "Can I use these tools for my investment decisions?",
      answer: "Our tools are designed to help you understand financial concepts and perform basic analysis. They should be used as a starting point for research, not as the sole basis for investment decisions. Always do thorough research and consult professionals."
    },
    {
      question: "Is there a mobile app?",
      answer: "Currently, NayiBulls is a web-based platform optimized for both desktop and mobile browsers. You can access all features through your phone's web browser without needing a separate app."
    },
    {
      question: "How often is data updated?",
      answer: "Our educational examples use sample data to demonstrate concepts. For real-time data and current market prices, please refer to official exchanges (NSE, BSE) and authorized financial data providers."
    },
    {
      question: "What stocks can I analyze?",
      answer: "Our stock comparison tool includes major Indian companies as examples. For comprehensive analysis of any specific stock, we recommend using professional financial platforms that provide real-time data and detailed financials."
    },
    {
      question: "Do you charge any fees?",
      answer: "No, all our educational tools are free to use. We believe in democratizing financial education and making investment knowledge accessible to all retail investors in India."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-nayibulls-gray">
      <Helmet>
        <title>FAQ - Frequently Asked Questions | NayiBulls</title>
        <meta name="description" content="Find answers to common questions about NayiBulls investment tools. Learn about data sources, accuracy, SEBI registration, and educational purpose." />
        <meta name="keywords" content="nayibulls faq, investment tools questions, stock market tools help, sebi registration, investment advice disclaimer" />
        <meta name="author" content="NayiBulls" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://nayibulls.com/faq" />
        
        {/* Open Graph meta tags */}
        <meta property="og:title" content="FAQ - Frequently Asked Questions | NayiBulls" />
        <meta property="og:description" content="Find answers to common questions about NayiBulls investment tools and educational resources." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nayibulls.com/faq" />
        <meta property="og:site_name" content="NayiBulls" />
        
        {/* Twitter meta tags */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="FAQ - Frequently Asked Questions | NayiBulls" />
        <meta name="twitter:description" content="Find answers to common questions about NayiBulls investment tools." />
      </Helmet>

      <Header />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <HelpCircle className="h-16 w-16 text-nayibulls-navy mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-nayibulls-navy mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about NayiBulls and our educational tools.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="overflow-hidden">
              <CardHeader 
                className="cursor-pointer hover:bg-gray-50 transition-colors duration-200"
                onClick={() => toggleItem(index)}
              >
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg text-nayibulls-navy pr-4">{faq.question}</CardTitle>
                  {openItems.includes(index) ? (
                    <ChevronUp className="h-5 w-5 text-nayibulls-green flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-nayibulls-green flex-shrink-0" />
                  )}
                </div>
              </CardHeader>
              {openItems.includes(index) && (
                <CardContent className="pt-0">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </CardContent>
              )}
            </Card>
          ))}
        </div>

        <div className="mt-12 bg-nayibulls-navy text-white rounded-lg p-8 text-center">
          <h3 className="text-xl font-bold mb-4">Still Have Questions?</h3>
          <p className="text-blue-200 mb-6">
            If you couldn't find the answer you're looking for, feel free to reach out to us.
          </p>
          <a 
            href="mailto:contact@nayibulls.com"
            className="inline-flex items-center bg-nayibulls-green hover:bg-nayibulls-green-dark text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
          >
            Contact Us
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FAQ;
