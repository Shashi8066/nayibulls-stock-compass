
import { useState } from 'react';
import { BarChart3 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StockSearchCard from '@/components/StockSearchCard';
import StockComparisonCard from '@/components/StockComparisonCard';
import ComparisonSummary from '@/components/ComparisonSummary';
import StockComparisonDescription from '@/components/StockComparisonDescription';

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
        <div className="text-center mb-12">
          <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-nayibulls-green to-nayibulls-navy rounded-full flex items-center justify-center">
            <BarChart3 className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-nayibulls-navy mb-4">Indian Stock Comparison</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Compare key financial metrics of Indian companies side-by-side. Analyze PE ratio, ROCE, dividend yield, and growth rates to make informed investment decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <StockSearchCard
            title="Select Stock 1"
            description="Enter the symbol of the first stock to compare"
            placeholder="e.g., TCS"
            value={stock1Symbol}
            onChange={setStock1Symbol}
          />
          <StockSearchCard
            title="Select Stock 2"
            description="Enter the symbol of the second stock to compare"
            placeholder="e.g., INFY"
            value={stock2Symbol}
            onChange={setStock2Symbol}
          />
        </div>

        {stock1 && stock2 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <StockComparisonCard stock={stock1} borderColor="border-nayibulls-navy" />
            <StockComparisonCard stock={stock2} borderColor="border-nayibulls-green" />
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
          <div className="mt-8">
            <ComparisonSummary stock1={stock1} stock2={stock2} />
          </div>
        )}

        <StockComparisonDescription />
      </div>

      <Footer />
    </div>
  );
};

export default StockComparison;
