
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

interface StockComparisonCardProps {
  stock: Stock;
  borderColor: string;
}

const StockComparisonCard = ({ stock, borderColor }: StockComparisonCardProps) => {
  return (
    <Card className={`${borderColor} border-l-4`}>
      <CardHeader>
        <CardTitle className="text-xl text-nayibulls-navy">{stock.name} ({stock.symbol})</CardTitle>
        <CardDescription>Key metrics at a glance</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex justify-between">
          <p className="text-gray-500">Market Cap</p>
          <p className="font-semibold text-nayibulls-navy">{stock.marketCap}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-500">PE Ratio</p>
          <p className="font-semibold text-nayibulls-navy">{stock.peRatio}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-500">Dividend Yield</p>
          <p className="font-semibold text-nayibulls-navy">{stock.divYield}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-500">52-Week High</p>
          <p className="font-semibold text-nayibulls-navy">₹{stock.high52Week}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-500">52-Week Low</p>
          <p className="font-semibold text-nayibulls-navy">₹{stock.low52Week}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-500">Revenue Growth</p>
          <p className="font-semibold text-nayibulls-green">{stock.revenueGrowth}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-500">ROCE</p>
          <p className="font-semibold text-nayibulls-green">{stock.roce}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-500">Profit Growth</p>
          <p className="font-semibold text-nayibulls-green">{stock.profitGrowth}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default StockComparisonCard;
