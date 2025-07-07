
import { Info, Target, BookOpen } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const StockComparisonDescription = () => {
  return (
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

      <Card className="bg-yellow-50 border-yellow-200">
        <CardContent className="pt-6">
          <p className="text-sm text-yellow-800">
            <strong>Disclaimer:</strong> All financial data is for educational purposes only and may not reflect real-time market conditions. 
            This comparison tool does not provide investment recommendations. Please conduct thorough research and consult financial advisors before making investment decisions.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default StockComparisonDescription;
