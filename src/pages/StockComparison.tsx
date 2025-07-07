import { useState } from 'react';
import { BarChart3, Search, TrendingUp, TrendingDown, Minus, Info, Target, BookOpen } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface Stock {
  symbol: string;
  name: string;
  marketCap: string;
  peRatio: number;
  divYield: string;
  high52Week: number;
  low52Week: number;
  revenueGrowth: string;
  profitGrowth: string;
  roce: string;
}

const sampleStocks: Stock[] = [
  {
    symbol: 'TCS',
    name: 'Tata Consultancy Services',
    marketCap: '₹13.5L Cr',
    peRatio: 26.5,
    divYield: '3.2%',
    high52Week: 3900,
    low52Week: 3100,
    revenueGrowth: '16%',
    profitGrowth: '14%',
    roce: '45%'
  },
  {
    symbol: 'INFY',
    name: 'Infosys Ltd',
    marketCap: '₹6.2L Cr',
    peRatio: 24.8,
    divYield: '3.8%',
    high52Week: 1650,
    low52Week: 1300,
    revenueGrowth: '18%',
    profitGrowth: '15%',
    roce: '38%'
  },
  {
    symbol: 'HDFCBANK',
    name: 'HDFC Bank',
    marketCap: '₹9.1L Cr',
    peRatio: 21.2,
    divYield: '1.1%',
    high52Week: 1725,
    low52Week: 1450,
    revenueGrowth: '12%',
    profitGrowth: '19%',
    roce: '16%'
  },
  {
    symbol: 'RELIANCE',
    name: 'Reliance Industries',
    marketCap: '₹17.3L Cr',
    peRatio: 28.9,
    divYield: '0.8%',
    high52Week: 2850,
    low52Week: 2200,
    revenueGrowth: '22%',
    profitGrowth: '25%',
    roce: '12%'
  },
  {
    symbol: 'ICICIBANK',
    name: 'ICICI Bank',
    marketCap: '₹6.8L Cr',
    peRatio: 18.6,
    divYield: '0.95%',
    high52Week: 980,
    low52Week: 720,
    revenueGrowth: '15%',
    profitGrowth: '23%',
    roce: '14.5%'
  },
  {
    symbol: 'SBIN',
    name: 'State Bank of India',
    marketCap: '₹5.4L Cr',
    peRatio: 12.3,
    divYield: '1.2%',
    high52Week: 620,
    low52Week: 450,
    revenueGrowth: '14%',
    profitGrowth: '30%',
    roce: '11%'
  }
];

const StockComparison = () => {
  const [stock1Symbol, setStock1Symbol] = useState('');
  const [stock2Symbol, setStock2Symbol] = useState('');

  const stock1 = sampleStocks.find(stock => stock.symbol === stock1Symbol);
  const stock2 = sampleStocks.find(stock => stock.symbol === stock2Symbol);

  const getTrendIcon = (value1: number, value2: number) => {
    if (value1 > value2) return <TrendingUp className="h-4 w-4 text-green-500" />;
    if (value1 < value2) return <TrendingDown className="h-4 w-4 text-red-500" />;
    return <Minus className="h-4 w-4 text-gray-500" />;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-nayibulls-gray">
      <Helmet>
        <title>Stock Comparison Tool - Compare Indian Stocks Side by Side | NayiBulls</title>
        <meta name="description" content="Compare two Indian stocks side-by-side with key financial metrics like PE ratio, ROCE, dividend yield, and growth rates. Make informed investment decisions." />
        <meta name="keywords" content="stock comparison India, compare stocks, financial ratios, PE ratio, ROCE, dividend yield, stock analysis tool" />
        <meta name="author" content="NayiBulls" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://nayibulls.com/stock-comparison" />
        
        <meta property="og:title" content="Stock Comparison Tool - Compare Indian Stocks" />
        <meta property="og:description" content="Compare two Indian stocks side-by-side with key financial metrics. Analyze PE ratios, ROCE, dividends and make better investment decisions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nayibulls.com/stock-comparison" />
        <meta property="og:site_name" content="NayiBulls" />
        
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Stock Comparison Tool - Compare Indian Stocks" />
        <meta name="twitter:description" content="Compare two Indian stocks side-by-side with key financial metrics and ratios." />
      </Helmet>

      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-nayibulls-green to-nayibulls-navy rounded-full flex items-center justify-center">
            <BarChart3 className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-nayibulls-navy mb-4">Indian Stock Comparison</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Compare key financial metrics of Indian companies side-by-side. Analyze PE ratio, ROCE, dividend yield, and growth rates to make informed investment decisions.
          </p>
        </div>

        {/* Search Stocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-nayibulls-navy">
                <Search className="h-5 w-5 mr-2" />
                Select Stock 1
              </CardTitle>
              <CardDescription>Enter the symbol of the first stock to compare</CardDescription>
            </CardHeader>
            <CardContent>
              <Input
                placeholder="e.g., TCS"
                value={stock1Symbol}
                onChange={(e) => setStock1Symbol(e.target.value.toUpperCase())}
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-nayibulls-navy">
                <Search className="h-5 w-5 mr-2" />
                Select Stock 2
              </CardTitle>
              <CardDescription>Enter the symbol of the second stock to compare</CardDescription>
            </CardHeader>
            <CardContent>
              <Input
                placeholder="e.g., INFY"
                value={stock2Symbol}
                onChange={(e) => setStock2Symbol(e.target.value.toUpperCase())}
              />
            </CardContent>
          </Card>
        </div>

        {/* Comparison Results */}
        {stock1 && stock2 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-nayibulls-navy border-l-4">
              <CardHeader>
                <CardTitle className="text-xl text-nayibulls-navy">{stock1.name} ({stock1.symbol})</CardTitle>
                <CardDescription>Key metrics at a glance</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <p className="text-gray-500">Market Cap</p>
                  <p className="font-semibold text-nayibulls-navy">{stock1.marketCap}</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-gray-500">PE Ratio</p>
                  <p className="font-semibold text-nayibulls-navy">{stock1.peRatio}</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-gray-500">Dividend Yield</p>
                  <p className="font-semibold text-nayibulls-navy">{stock1.divYield}</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-gray-500">52-Week High</p>
                  <p className="font-semibold text-nayibulls-navy">₹{stock1.high52Week}</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-gray-500">52-Week Low</p>
                  <p className="font-semibold text-nayibulls-navy">₹{stock1.low52Week}</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-gray-500">Revenue Growth</p>
                  <p className="font-semibold text-nayibulls-green">{stock1.revenueGrowth}</p>
                </div>
                 <div className="flex justify-between">
                  <p className="text-gray-500">ROCE</p>
                  <p className="font-semibold text-nayibulls-green">{stock1.roce}</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-gray-500">Profit Growth</p>
                  <p className="font-semibold text-nayibulls-green">{stock1.profitGrowth}</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-nayibulls-green border-l-4">
              <CardHeader>
                <CardTitle className="text-xl text-nayibulls-navy">{stock2.name} ({stock2.symbol})</CardTitle>
                <CardDescription>Key metrics at a glance</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <p className="text-gray-500">Market Cap</p>
                  <p className="font-semibold text-nayibulls-navy">{stock2.marketCap}</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-gray-500">PE Ratio</p>
                  <p className="font-semibold text-nayibulls-navy">{stock2.peRatio}</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-gray-500">Dividend Yield</p>
                  <p className="font-semibold text-nayibulls-navy">{stock2.divYield}</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-gray-500">52-Week High</p>
                  <p className="font-semibold text-nayibulls-navy">₹{stock2.high52Week}</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-gray-500">52-Week Low</p>
                  <p className="font-semibold text-nayibulls-navy">₹{stock2.low52Week}</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-gray-500">Revenue Growth</p>
                  <p className="font-semibold text-nayibulls-green">{stock2.revenueGrowth}</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-gray-500">ROCE</p>
                  <p className="font-semibold text-nayibulls-green">{stock2.roce}</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-gray-500">Profit Growth</p>
                  <p className="font-semibold text-nayibulls-green">{stock2.profitGrowth}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        ) : (
          stock1Symbol && stock2Symbol && (
            <Card className="text-center py-12">
              <CardContent>
                <h3 className="text-xl font-semibold text-gray-600 mb-2">No stocks found</h3>
                <p className="text-gray-500">Please enter valid stock symbols to compare.</p>
              </CardContent>
            </Card>
          )
        )}

        {stock1 && stock2 && (
          <Card className="mt-8">
            <CardHeader>
              <CardTitle className="text-xl text-nayibulls-navy">Comparison Summary</CardTitle>
              <CardDescription>Key differences and trends</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <p className="text-gray-500">Market Cap</p>
                  <p className="font-semibold text-nayibulls-navy">
                    {stock1.marketCap} {getTrendIcon(parseInt(stock1.marketCap.replace(/[^0-9.-]+/g, "")), parseInt(stock2.marketCap.replace(/[^0-9.-]+/g, ""))}{' '}
                  </p>
                </div>
                <div>
                  <p className="text-gray-500">PE Ratio</p>
                  <p className="font-semibold text-nayibulls-navy">
                    {stock1.peRatio} {getTrendIcon(stock1.peRatio, stock2.peRatio)}
                  </p>
                </div>
                <div>
                  <p className="text-gray-500">Dividend Yield</p>
                  <p className="font-semibold text-nayibulls-navy">
                    {stock1.divYield} {getTrendIcon(parseFloat(stock1.divYield), parseFloat(stock2.divYield))}
                  </p>
                </div>
                <div>
                  <p className="text-gray-500">Revenue Growth</p>
                  <p className="font-semibold text-nayibulls-green">
                    {stock1.revenueGrowth} {getTrendIcon(parseInt(stock1.revenueGrowth), parseInt(stock2.revenueGrowth))}
                  </p>
                </div>
                <div>
                  <p className="text-gray-500">Profit Growth</p>
                  <p className="font-semibold text-nayibulls-green">
                    {stock1.profitGrowth} {getTrendIcon(parseInt(stock1.profitGrowth), parseInt(stock2.profitGrowth))}
                  </p>
                </div>
                <div>
                  <p className="text-gray-500">ROCE</p>
                  <p className="font-semibold text-nayibulls-green">
                    {stock1.roce} {getTrendIcon(parseInt(stock1.roce), parseInt(stock2.roce))}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Tool Description Section */}
        <div className="mt-16 space-y-8">
          <Card className="bg-gradient-to-r from-nayibulls-green to-nayibulls-green-light text-white">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center text-white">
                <Info className="h-6 w-6 mr-2" />
                About the Stock Comparison Tool
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-green-100">
              <p className="text-lg">
                The Stock Comparison Tool helps Indian retail investors make informed decisions by comparing two companies 
                side-by-side across crucial financial metrics. Instead of analyzing stocks in isolation, see how they stack up 
                against each other in valuation, profitability, and growth potential.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div>
                  <h3 className="font-semibold text-white mb-2 flex items-center">
                    <Target className="h-5 w-5 mr-2" />
                    Key Metrics Compared
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>PE Ratio:</strong> Price-to-Earnings ratio for valuation comparison</li>
                    <li>• <strong>Market Cap:</strong> Company size and investment category</li>
                    <li>• <strong>ROCE:</strong> Return on Capital Employed for efficiency</li>
                    <li>• <strong>Dividend Yield:</strong> Annual dividend as percentage of price</li>
                    <li>• <strong>52-Week Performance:</strong> Recent price movement trends</li>
                    <li>• <strong>Growth Rates:</strong> Revenue and profit growth comparison</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2 flex items-center">
                    <BookOpen className="h-5 w-5 mr-2" />
                    Perfect For
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>Sector Analysis:</strong> Compare peers in the same industry</li>
                    <li>• <strong>Investment Choices:</strong> Decide between two similar stocks</li>
                    <li>• <strong>Valuation Check:</strong> See which stock offers better value</li>
                    <li>• <strong>Portfolio Building:</strong> Choose the stronger performer</li>
                    <li>• <strong>Learning:</strong> Understand what makes one stock better than another</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* How to Read the Comparison */}
          <Card className="border-nayibulls-navy border-l-4">
            <CardHeader>
              <CardTitle className="text-nayibulls-navy">📊 How to Read the Comparison</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6 text-sm">
                <div>
                  <h4 className="font-semibold text-nayibulls-navy mb-3">Valuation Metrics</h4>
                  <div className="space-y-2">
                    <p><strong>PE Ratio:</strong> Lower is generally better (10-20 is reasonable for most sectors)</p>
                    <p><strong>Price-to-Book:</strong> Below 3 is typically good for value investing</p>
                    <p><strong>Market Cap:</strong> Large-cap (safer), Mid-cap (balanced), Small-cap (higher risk/reward)</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-nayibulls-navy mb-3">Performance Metrics</h4>
                  <div className="space-y-2">
                    <p><strong>ROCE:</strong> Above 15% is excellent, above 20% is exceptional</p>
                    <p><strong>Revenue Growth:</strong> Consistent 15%+ growth is strong</p>
                    <p><strong>Dividend Yield:</strong> 2-4% is good for income-focused investors</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Example Comparison */}
          <Card className="bg-blue-50 border-blue-200">
            <CardHeader>
              <CardTitle className="text-nayibulls-navy">💡 Example: IT Sector Comparison</CardTitle>
            </CardHeader>
            <CardContent className="text-sm">
              <p className="mb-3">
                <strong>Scenario:</strong> You want to invest ₹50,000 in an IT stock and are confused between TCS and Infosys.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-3 rounded">
                  <h5 className="font-semibold mb-2">TCS Analysis</h5>
                  <p>Higher market cap (₹13L Cr), Lower PE (26), steady dividend yield (3.2%), premium valuation but consistent performer.</p>
                </div>
                <div className="bg-white p-3 rounded">
                  <h5 className="font-semibold mb-2">Infosys Analysis</h5>
                  <p>Lower market cap (₹6L Cr), similar PE (24), higher dividend yield (3.8%), better value but slightly more volatile.</p>
                </div>
              </div>
              <p className="mt-3 text-gray-600">
                <strong>Decision Framework:</strong> TCS for stability and long-term wealth creation, Infosys for better dividends and potential upside.
              </p>
            </CardContent>
          </Card>

          {/* What Makes This Tool Unique */}
          <Card className="bg-gradient-to-r from-blue-50 to-green-50 border-l-4 border-nayibulls-green">
            <CardHeader>
              <CardTitle className="text-nayibulls-navy">🎯 What Makes Our Stock Comparison Tool Unique</CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-nayibulls-navy mb-2">🇮🇳 Built for Indian Market</h4>
                  <p>Focuses on Indian companies with metrics that matter most to local retail investors. No complex international ratios that confuse beginners.</p>
                  
                  <h4 className="font-semibold text-nayibulls-navy mb-2 mt-4">📊 Easy Visual Comparison</h4>
                  <p>Side-by-side layout makes it instant to spot which stock has better PE ratio, higher ROCE, or stronger growth rates.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-nayibulls-navy mb-2">💡 Educational Approach</h4>
                  <p>Not just numbers - we explain what each metric means and why it matters for your investment decision.</p>
                  
                  <h4 className="font-semibold text-nayibulls-navy mb-2 mt-4">🎯 Decision Support</h4>
                  <p>Trend arrows show you at a glance which stock is performing better in each category, making decisions clearer.</p>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg border-l-4 border-nayibulls-green mt-6">
                <h5 className="font-semibold text-nayibulls-navy mb-2">💰 Pro Tip for Smart Investing</h5>
                <p className="text-gray-700">
                  Don't just compare any two stocks - compare companies in the same sector (like TCS vs Infosys, or HDFC Bank vs ICICI Bank). 
                  This gives you a true apples-to-apples comparison and helps you pick the sector leader.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Disclaimer */}
        <Card className="mt-12 bg-yellow-50 border-yellow-200">
          <CardContent className="pt-6">
            <p className="text-sm text-yellow-800">
              <strong>Disclaimer:</strong> All financial data is for educational purposes only and may not reflect real-time market conditions. 
              This comparison tool does not provide investment recommendations. Please conduct thorough research and consult financial advisors before making investment decisions.
            </p>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default StockComparison;
