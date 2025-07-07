
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

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

interface ComparisonSummaryProps {
  stock1: Stock;
  stock2: Stock;
}

const ComparisonSummary = ({ stock1, stock2 }: ComparisonSummaryProps) => {
  const getTrendIcon = (value1: number, value2: number) => {
    if (value1 > value2) return <TrendingUp className="h-4 w-4 text-green-500" />;
    if (value1 < value2) return <TrendingDown className="h-4 w-4 text-red-500" />;
    return <Minus className="h-4 w-4 text-gray-500" />;
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl text-nayibulls-navy">Comparison Summary</CardTitle>
        <CardDescription>Key differences and trends</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <p className="text-gray-500">Market Cap</p>
            <p className="font-semibold text-nayibulls-navy">
              {stock1.marketCap} {getTrendIcon(parseInt(stock1.marketCap.replace(/[^0-9.-]+/g, "")), parseInt(stock2.marketCap.replace(/[^0-9.-]+/g, "")))}
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
  );
};

export default ComparisonSummary;
