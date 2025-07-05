import { BookOpen, Search, TrendingUp, DollarSign, BarChart, PieChart, Info, Target, Lightbulb } from 'lucide-react';
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Glossary = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const glossaryTerms = [
    {
      term: "PE Ratio",
      definition: "Price to Earnings Ratio - shows how much you pay for ₹1 of company profit. Lower values often indicate better value.",
      category: "Valuation"
    },
    {
      term: "ROCE",
      definition: "Return on Capital Employed - measures how efficiently a company uses its capital to generate profits. Higher is better.",
      category: "Profitability"
    },
    {
      term: "CAGR",
      definition: "Compound Annual Growth Rate - the rate at which an investment grows annually over a specific period.",
      category: "Returns"
    },
    {
      term: "Dividend Yield",
      definition: "Annual dividend payment as a percentage of stock price. Shows cash returns relative to stock price.",
      category: "Returns"
    },
    {
      term: "Market Cap",
      definition: "Total market value of a company's shares. Calculated as share price × total number of shares.",
      category: "Size"
    },
    {
      term: "EPS",
      definition: "Earnings Per Share - company's profit divided by number of outstanding shares. Higher EPS indicates better profitability.",
      category: "Profitability"
    },
    {
      term: "Debt to Equity",
      definition: "Ratio of company's debt to shareholder equity. Lower values indicate less financial risk.",
      category: "Financial Health"
    },
    {
      term: "Small Cap",
      definition: "Companies with market capitalization between ₹500 crore to ₹2,000 crore. Higher growth potential but more volatile.",
      category: "Size"
    },
    {
      term: "Mid Cap",
      definition: "Companies with market capitalization between ₹2,000 crore to ₹8,000 crore. Balance of growth and stability.",
      category: "Size"
    },
    {
      term: "Large Cap",
      definition: "Companies with market capitalization above ₹8,000 crore. Generally more stable but slower growth.",
      category: "Size"
    },
    {
      term: "ROE",
      definition: "Return on Equity - measures how effectively a company uses shareholders' equity to generate profits.",
      category: "Profitability"
    },
    {
      term: "Book Value",
      definition: "Company's net worth per share based on balance sheet. Assets minus liabilities divided by shares outstanding.",
      category: "Valuation"
    },
    {
      term: "Beta",
      definition: "Measures stock's volatility relative to market. Beta > 1 means more volatile than market, < 1 means less volatile.",
      category: "Risk"
    },
    {
      term: "Revenue Growth",
      definition: "Percentage increase in company's total sales/revenue compared to previous period. Indicates business expansion.",
      category: "Growth"
    },
    {
      term: "Profit Margin",
      definition: "Percentage of revenue that becomes profit. Shows how efficiently a company converts sales into profits.",
      category: "Profitability"
    }
  ];

  const categories = [...new Set(glossaryTerms.map(term => term.category))];

  const filteredTerms = glossaryTerms.filter(term =>
    term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
    term.definition.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-nayibulls-gray">
      <Helmet>
        <title>Financial Glossary - Stock Market Terms Explained | NayiBulls</title>
        <meta name="description" content="Learn essential stock market terms with simple explanations. Master PE ratio, ROCE, dividend yield, market cap and 30+ financial concepts for Indian investors." />
        <meta name="keywords" content="financial glossary, stock market terms, PE ratio, ROCE, dividend yield, market cap, investment terms, Indian stock market" />
        <meta name="author" content="NayiBulls" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://nayibulls.com/glossary" />
        
        <meta property="og:title" content="Financial Glossary - Stock Market Terms Explained" />
        <meta property="og:description" content="Learn essential stock market terms with simple explanations. Master financial concepts for better investment decisions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nayibulls.com/glossary" />
        <meta property="og:site_name" content="NayiBulls" />
        
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Financial Glossary - Stock Market Terms" />
        <meta name="twitter:description" content="Learn essential stock market terms with simple explanations for Indian investors." />
      </Helmet>

      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <BookOpen className="h-16 w-16 text-nayibulls-navy mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-nayibulls-navy mb-4">Financial Glossary</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Learn essential stock market terms with simple explanations tailored for new-age retail investors.
          </p>
        </div>

        <div className="mb-8">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              placeholder="Search terms..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {categories.map(category => {
          const categoryTerms = filteredTerms.filter(term => term.category === category);
          if (categoryTerms.length === 0) return null;

          return (
            <div key={category} className="mb-8">
              <h2 className="text-2xl font-bold text-nayibulls-navy mb-4">{category}</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {categoryTerms.map((item, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg text-nayibulls-navy">{item.term}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 text-sm leading-relaxed">{item.definition}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          );
        })}

        {filteredTerms.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No terms found matching your search.</p>
          </div>
        )}

        <div className="mt-12 bg-nayibulls-navy text-white rounded-lg p-8">
          <h3 className="text-xl font-bold mb-4">Understanding These Terms</h3>
          <p className="text-blue-200 mb-4">
            These financial metrics help you analyze companies and make informed investment decisions. 
            Remember that no single metric tells the complete story - always consider multiple factors.
          </p>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div>
              <h4 className="font-semibold mb-2">Valuation Metrics</h4>
              <p className="text-blue-200">Help determine if a stock is fairly priced</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Profitability Metrics</h4>
              <p className="text-blue-200">Show how efficiently a company generates profits</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Risk Metrics</h4>
              <p className="text-blue-200">Help assess the potential risks of an investment</p>
            </div>
          </div>
        </div>

        {/* Tool Description Section */}
        <div className="mt-16 space-y-8">
          <Card className="bg-gradient-to-r from-nayibulls-navy-light to-nayibulls-green text-white">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center text-white">
                <Info className="h-6 w-6 mr-2" />
                Master Financial Terms with Confidence
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-blue-100">
              <p className="text-lg">
                The NayiBulls Financial Glossary breaks down complex stock market jargon into simple, understandable explanations. 
                Every term is explained with real examples from the Indian market, helping you build confidence in your investment journey.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div>
                  <h3 className="font-semibold text-white mb-2 flex items-center">
                    <Target className="h-5 w-5 mr-2" />
                    What You'll Learn
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>Valuation Ratios:</strong> PE, PB, Price-to-Sales and what they mean</li>
                    <li>• <strong>Profitability Metrics:</strong> ROCE, ROE, Operating Margin</li>
                    <li>• <strong>Market Terms:</strong> Bull/Bear markets, volatility, market cap</li>
                    <li>• <strong>Dividend Concepts:</strong> Yield, payout ratio, ex-dividend dates</li>
                    <li>• <strong>Growth Indicators:</strong> EPS growth, revenue growth, CAGR</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2 flex items-center">
                    <Lightbulb className="h-5 w-5 mr-2" />
                    Why This Matters
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>Informed Decisions:</strong> Understand what you're investing in</li>
                    <li>• <strong>Avoid Mistakes:</strong> Don't fall for misleading advice</li>
                    <li>• <strong>Build Confidence:</strong> Speak the language of investing</li>
                    <li>• <strong>Better Analysis:</strong> Evaluate stocks like a pro</li>
                    <li>• <strong>Save Time:</strong> Quick reference when researching stocks</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-nayibulls-green border-l-4">
            <CardHeader>
              <CardTitle className="text-nayibulls-navy">🎯 Most Important Terms for Beginners</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-nayibulls-green mb-2">Start Here</h4>
                  <ul className="space-y-1">
                    <li>• PE Ratio</li>
                    <li>• Market Cap</li>
                    <li>• Dividend Yield</li>
                    <li>• EPS (Earnings Per Share)</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-nayibulls-navy mb-2">Next Level</h4>
                  <ul className="space-y-1">
                    <li>• ROCE</li>
                    <li>• Debt-to-Equity</li>
                    <li>• Price-to-Book</li>
                    <li>• Beta</li>
                  </ul>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-700 mb-2">Advanced</h4>
                  <ul className="space-y-1">
                    <li>• Free Cash Flow</li>
                    <li>• EBITDA</li>
                    <li>• Operating Margin</li>
                    <li>• Working Capital</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-yellow-50 border-yellow-200">
            <CardHeader>
              <CardTitle className="text-nayibulls-navy">💡 Pro Tip: Learning Path</CardTitle>
            </CardHeader>
            <CardContent className="text-sm">
              <p className="mb-3">
                <strong>Recommended Learning Sequence:</strong>
              </p>
              <div className="space-y-2">
                <p><strong>Week 1:</strong> Master PE Ratio, Market Cap, and EPS - these appear in every stock analysis</p>
                <p><strong>Week 2:</strong> Learn Dividend Yield and ROCE - essential for income and quality assessment</p>
                <p><strong>Week 3:</strong> Understand Debt-to-Equity and Price-to-Book - crucial for safety analysis</p>
                <p><strong>Week 4:</strong> Explore sector-specific terms based on your investment interests</p>
              </div>
              <p className="mt-3 text-gray-600">
                <strong>Practice Tip:</strong> After learning each term, find it in real company annual reports or financial websites like MoneyControl or Screener.in
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Glossary;
