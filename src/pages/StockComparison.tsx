
import { useState } from 'react';
import { BarChart3, TrendingUp, TrendingDown } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';

const StockComparison = () => {
  const [stock1, setStock1] = useState('');
  const [stock2, setStock2] = useState('');

  const stockData = {
    'TCS': {
      name: 'Tata Consultancy Services',
      marketCap: '14.2 L Cr',
      peRatio: 31.2,
      dividendYield: 1.1,
      roce: 44.1,
      debtToEquity: 0.05,
      currentPrice: 3890
    },
    'INFY': {
      name: 'Infosys Ltd',
      marketCap: '6.3 L Cr',
      peRatio: 28.1,
      dividendYield: 1.3,
      roce: 39.3,
      debtToEquity: 0.03,
      currentPrice: 1540
    },
    'HCLTECH': {
      name: 'HCL Technologies',
      marketCap: '3.8 L Cr',
      peRatio: 25.4,
      dividendYield: 2.1,
      roce: 28.7,
      debtToEquity: 0.08,
      currentPrice: 1420
    },
    'WIPRO': {
      name: 'Wipro Ltd',
      marketCap: '2.9 L Cr',
      peRatio: 22.8,
      dividendYield: 1.8,
      roce: 24.2,
      debtToEquity: 0.12,
      currentPrice: 520
    }
  };

  const compareMetric = (value1: number, value2: number, lowerIsBetter = false) => {
    if (lowerIsBetter) {
      return value1 < value2 ? 'better' : value1 > value2 ? 'worse' : 'equal';
    }
    return value1 > value2 ? 'better' : value1 < value2 ? 'worse' : 'equal';
  };

  const getComparisonIcon = (comparison: string) => {
    if (comparison === 'better') return <TrendingUp className="h-4 w-4 text-green-600" />;
    if (comparison === 'worse') return <TrendingDown className="h-4 w-4 text-red-600" />;
    return null;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-nayibulls-gray">
      <Header />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <BarChart3 className="h-16 w-16 text-nayibulls-navy mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-nayibulls-navy mb-4">Stock Comparison Tool</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Compare financial metrics of Indian companies side-by-side to make informed investment decisions.
          </p>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Select Companies to Compare</CardTitle>
            <CardDescription>
              Choose two companies from our database to compare their key financial metrics.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Company 1</label>
                <Select value={stock1} onValueChange={setStock1}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select first company" />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.entries(stockData).map(([symbol, data]) => (
                      <SelectItem key={symbol} value={symbol}>
                        {data.name} ({symbol})
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Company 2</label>
                <Select value={stock2} onValueChange={setStock2}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select second company" />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.entries(stockData).map(([symbol, data]) => (
                      <SelectItem key={symbol} value={symbol}>
                        {data.name} ({symbol})
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {stock1 && stock2 && stockData[stock1] && stockData[stock2] && (
          <Card>
            <CardHeader>
              <CardTitle>Comparison Results</CardTitle>
              <CardDescription>
                Key financial metrics comparison between {stockData[stock1].name} and {stockData[stock2].name}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4 font-semibold">Metric</th>
                      <th className="text-center py-3 px-4 font-semibold">{stockData[stock1].name}</th>
                      <th className="text-center py-3 px-4 font-semibold">{stockData[stock2].name}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    <tr>
                      <td className="py-3 px-4 font-medium">Market Cap</td>
                      <td className="py-3 px-4 text-center">{stockData[stock1].marketCap}</td>
                      <td className="py-3 px-4 text-center">{stockData[stock2].marketCap}</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium">Current Price</td>
                      <td className="py-3 px-4 text-center">₹{stockData[stock1].currentPrice}</td>
                      <td className="py-3 px-4 text-center">₹{stockData[stock2].currentPrice}</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium">PE Ratio</td>
                      <td className="py-3 px-4 text-center flex items-center justify-center">
                        {stockData[stock1].peRatio}
                        {getComparisonIcon(compareMetric(stockData[stock1].peRatio, stockData[stock2].peRatio, true))}
                      </td>
                      <td className="py-3 px-4 text-center flex items-center justify-center">
                        {stockData[stock2].peRatio}
                        {getComparisonIcon(compareMetric(stockData[stock2].peRatio, stockData[stock1].peRatio, true))}
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium">Dividend Yield (%)</td>
                      <td className="py-3 px-4 text-center flex items-center justify-center">
                        {stockData[stock1].dividendYield}%
                        {getComparisonIcon(compareMetric(stockData[stock1].dividendYield, stockData[stock2].dividendYield))}
                      </td>
                      <td className="py-3 px-4 text-center flex items-center justify-center">
                        {stockData[stock2].dividendYield}%
                        {getComparisonIcon(compareMetric(stockData[stock2].dividendYield, stockData[stock1].dividendYield))}
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium">ROCE (%)</td>
                      <td className="py-3 px-4 text-center flex items-center justify-center">
                        {stockData[stock1].roce}%
                        {getComparisonIcon(compareMetric(stockData[stock1].roce, stockData[stock2].roce))}
                      </td>
                      <td className="py-3 px-4 text-center flex items-center justify-center">
                        {stockData[stock2].roce}%
                        {getComparisonIcon(compareMetric(stockData[stock2].roce, stockData[stock1].roce))}
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium">Debt to Equity</td>
                      <td className="py-3 px-4 text-center flex items-center justify-center">
                        {stockData[stock1].debtToEquity}
                        {getComparisonIcon(compareMetric(stockData[stock1].debtToEquity, stockData[stock2].debtToEquity, true))}
                      </td>
                      <td className="py-3 px-4 text-center flex items-center justify-center">
                        {stockData[stock2].debtToEquity}
                        {getComparisonIcon(compareMetric(stockData[stock2].debtToEquity, stockData[stock1].debtToEquity, true))}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-nayibulls-navy mb-2">Legend</h4>
                <div className="flex items-center space-x-4 text-sm">
                  <div className="flex items-center">
                    <TrendingUp className="h-4 w-4 text-green-600 mr-1" />
                    <span>Better performance</span>
                  </div>
                  <div className="flex items-center">
                    <TrendingDown className="h-4 w-4 text-red-600 mr-1" />
                    <span>Weaker performance</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-400 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Disclaimer</h3>
          <p className="text-gray-700">
            This comparison is based on sample data for educational purposes only. 
            Please verify all financial metrics from official sources before making investment decisions. 
            Past performance does not guarantee future results.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default StockComparison;
