
import { useState, useMemo } from 'react';
import { Calculator, TrendingUp, Zap, Info, Lightbulb, Target } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ReturnCalculator = () => {
  const [investment, setInvestment] = useState(25000);
  const [annualReturn, setAnnualReturn] = useState(15);
  const [duration, setDuration] = useState(5);
  const [investmentType, setInvestmentType] = useState<'lumpsum' | 'sip'>('lumpsum');
  const [monthlyAmount, setMonthlyAmount] = useState(5000);

  const calculateReturns = useMemo(() => {
    const data = [];
    
    for (let year = 0; year <= duration; year++) {
      let simpleInterest, compoundValue, sipValue = 0;
      
      if (investmentType === 'lumpsum') {
        // Simple Interest
        simpleInterest = investment + (investment * (annualReturn / 100) * year);
        
        // Compound Interest
        compoundValue = investment * Math.pow(1 + annualReturn / 100, year);
      } else {
        // SIP Calculations
        const monthlyRate = annualReturn / (12 * 100);
        const totalMonths = year * 12;
        
        if (totalMonths === 0) {
          simpleInterest = 0;
          compoundValue = 0;
          sipValue = 0;
        } else {
          // Simple interest for SIP (approximate)
          const totalInvested = monthlyAmount * totalMonths;
          const avgInvestmentPeriod = totalMonths / 2;
          simpleInterest = totalInvested + (totalInvested * (annualReturn / 100) * (avgInvestmentPeriod / 12));
          
          // SIP compound formula
          sipValue = monthlyAmount * (((Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate) * (1 + monthlyRate));
          compoundValue = sipValue;
        }
      }

      data.push({
        year,
        simpleInterest: Math.round(simpleInterest),
        compoundInterest: Math.round(compoundValue),
        invested: investmentType === 'lumpsum' ? investment : monthlyAmount * year * 12
      });
    }
    
    return data;
  }, [investment, annualReturn, duration, investmentType, monthlyAmount]);

  const finalValues = calculateReturns[calculateReturns.length - 1];
  const totalInvested = investmentType === 'lumpsum' ? investment : monthlyAmount * duration * 12;
  const totalReturns = finalValues.compoundInterest - totalInvested;
  const returnPercentage = ((totalReturns / totalInvested) * 100).toFixed(1);

  const comparisonData = [
    {
      name: 'Amount Invested',
      value: totalInvested,
      fill: '#64748b'
    },
    {
      name: 'Returns Generated',
      value: totalReturns,
      fill: '#10b981'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-nayibulls-gray">
      <Helmet>
        <title>Stock Return Calculator - Estimate Investment Returns | NayiBulls</title>
        <meta name="description" content="Use our free stock return calculator to estimate profits from Indian equity investments over time. Compare lump sum vs SIP returns with interactive charts and compound growth visualization." />
        <meta name="keywords" content="stock return calculator India, investment calculator, SIP calculator, compound interest calculator, lump sum vs SIP, equity returns India" />
        <meta name="author" content="NayiBulls" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://nayibulls.com/return-calculator" />
        
        {/* Open Graph meta tags */}
        <meta property="og:title" content="Stock Return Calculator - Estimate Investment Returns" />
        <meta property="og:description" content="Calculate potential returns from Indian equity investments with our free calculator. Compare lump sum vs SIP strategies." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nayibulls.com/return-calculator" />
        <meta property="og:site_name" content="NayiBulls" />
        
        {/* Twitter meta tags */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Stock Return Calculator - Estimate Investment Returns" />
        <meta name="twitter:description" content="Calculate potential returns from Indian equity investments with interactive charts." />
      </Helmet>

      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <Calculator className="h-16 w-16 text-nayibulls-navy mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-nayibulls-navy mb-4">Stock Return Calculator</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Estimate how much your investment will grow over time with compound interest calculations.
          </p>
        </div>

        {/* Educational Content */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center text-nayibulls-navy">
                  <Info className="h-5 w-5 mr-2" />
                  How This Calculator Works
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Our return calculator helps Indian investors understand the power of compound growth in equity investments. 
                  Unlike fixed deposits, stock market investments can provide significantly higher returns over the long term, 
                  though they come with higher risk.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-nayibulls-navy mb-2">Lump Sum Investment</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Invest a large amount once</li>
                      <li>• Benefit from longer compounding period</li>
                      <li>• Good when you have surplus funds</li>
                      <li>• Market timing risk involved</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-nayibulls-navy mb-2">SIP (Systematic Investment Plan)</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Invest fixed amount monthly</li>
                      <li>• Rupee cost averaging benefit</li>
                      <li>• Suitable for regular income earners</li>
                      <li>• Reduces market timing risk</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center text-nayibulls-navy">
                  <Target className="h-5 w-5 mr-2" />
                  Example Scenarios for Indian Investors
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-nayibulls-navy mb-2">Young Professional (Age 25)</h4>
                    <p className="text-sm text-gray-700">
                      <strong>SIP ₹10,000/month for 30 years at 12% return:</strong><br/>
                      Total Investment: ₹36 lakhs | Final Value: ₹3.5 crores<br/>
                      <em>Start early to leverage the power of compounding!</em>
                    </p>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-nayibulls-navy mb-2">Mid-Career (Age 35)</h4>
                    <p className="text-sm text-gray-700">
                      <strong>Lump sum ₹5 lakhs + SIP ₹15,000/month for 20 years at 12%:</strong><br/>
                      Total: ₹41 lakhs invested | Final Value: ₹1.8 crores<br/>
                      <em>Combination strategy works well for mid-career professionals.</em>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="bg-yellow-50 border-yellow-200">
              <CardHeader>
                <CardTitle className="flex items-center text-nayibulls-navy">
                  <Lightbulb className="h-5 w-5 mr-2" />
                  Did You Know?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-sm text-gray-700">
                  <p className="mb-2"><strong>The Rule of 72:</strong></p>
                  <p className="mb-3">Divide 72 by your expected return rate to know how many years it takes to double your money.</p>
                  
                  <div className="bg-white p-3 rounded">
                    <p className="font-medium">At 12% return:</p>
                    <p>72 ÷ 12 = 6 years to double</p>
                  </div>
                </div>
                
                <div className="text-sm text-gray-700 mt-4">
                  <p className="mb-2"><strong>Nifty 50 Historical Returns:</strong></p>
                  <ul className="space-y-1">
                    <li>• Last 20 years: ~11-12% CAGR</li>
                    <li>• Last 10 years: ~13-14% CAGR</li>
                    <li>• Include dividend for total returns</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Calculator Inputs */}
          <Card>
            <CardHeader>
              <CardTitle>Investment Calculator</CardTitle>
              <CardDescription>
                Adjust the parameters below to see how your investment could grow
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex gap-4">
                <Button
                  variant={investmentType === 'lumpsum' ? 'default' : 'outline'}
                  onClick={() => setInvestmentType('lumpsum')}
                  className={investmentType === 'lumpsum' ? 'bg-nayibulls-navy' : ''}
                >
                  Lump Sum
                </Button>
                <Button
                  variant={investmentType === 'sip' ? 'default' : 'outline'}
                  onClick={() => setInvestmentType('sip')}
                  className={investmentType === 'sip' ? 'bg-nayibulls-navy' : ''}
                >
                  SIP
                </Button>
              </div>

              {investmentType === 'lumpsum' ? (
                <div className="space-y-2">
                  <Label htmlFor="investment">Initial Investment (₹)</Label>
                  <Input
                    id="investment"
                    type="number"
                    value={investment}
                    onChange={(e) => setInvestment(Number(e.target.value))}
                    min="1000"
                    step="1000"
                  />
                </div>
              ) : (
                <div className="space-y-2">
                  <Label htmlFor="monthly">Monthly Investment (₹)</Label>
                  <Input
                    id="monthly"
                    type="number"
                    value={monthlyAmount}
                    onChange={(e) => setMonthlyAmount(Number(e.target.value))}
                    min="500"
                    step="500"
                  />
                </div>
              )}

              <div className="space-y-2">
                <Label>Expected Annual Return: {annualReturn}%</Label>
                <Slider
                  value={[annualReturn]}
                  onValueChange={(value) => setAnnualReturn(value[0])}
                  max={25}
                  min={5}
                  step={0.5}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>Conservative (5%)</span>
                  <span>Aggressive (25%)</span>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Investment Duration: {duration} years</Label>
                <Slider
                  value={[duration]}
                  onValueChange={(value) => setDuration(value[0])}
                  max={30}
                  min={1}
                  step={1}
                  className="w-full"
                />
              </div>

              <div className="bg-nayibulls-gray p-4 rounded-lg">
                <h4 className="font-semibold text-nayibulls-navy mb-3">Investment Summary</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Total Invested:</span>
                    <span className="font-semibold">₹{totalInvested.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Expected Returns:</span>
                    <span className="font-semibold text-nayibulls-green">₹{totalReturns.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between border-t pt-2">
                    <span>Final Amount:</span>
                    <span className="font-bold text-nayibulls-navy">₹{finalValues.compoundInterest.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Total Return %:</span>
                    <span className="font-bold text-nayibulls-green">{returnPercentage}%</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Results Chart */}
          <Card>
            <CardHeader>
              <CardTitle>Growth Visualization</CardTitle>
              <CardDescription>
                See how your investment grows over time with compound interest
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80 mb-6">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={calculateReturns}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis tickFormatter={(value) => `₹${(value/1000).toFixed(0)}K`} />
                    <Tooltip 
                      formatter={(value: number) => [`₹${value.toLocaleString()}`, '']}
                      labelFormatter={(label) => `Year ${label}`}
                    />
                    <Legend />
                    <Line 
                      type="monotone" 
                      dataKey="compoundInterest" 
                      stroke="#059669" 
                      strokeWidth={3}
                      name="Compound Growth"
                    />
                    <Line 
                      type="monotone" 
                      dataKey="invested" 
                      stroke="#64748b" 
                      strokeWidth={2}
                      strokeDasharray="5 5"
                      name="Amount Invested"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              <div className="h-40">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={comparisonData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis tickFormatter={(value) => `₹${(value/1000).toFixed(0)}K`} />
                    <Tooltip formatter={(value: number) => `₹${value.toLocaleString()}`} />
                    <Bar dataKey="value" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Why This Matters Section */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle className="flex items-center text-nayibulls-navy">
              <Zap className="h-5 w-5 mr-2" />
              Why This Calculator Matters for Indian Investors
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-nayibulls-navy mb-2">Beat Inflation</h4>
                <p className="text-sm text-gray-700">
                  With inflation at 4-6% in India, your money needs to grow faster to maintain purchasing power. 
                  Equity investments historically provide inflation-beating returns.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-nayibulls-navy mb-2">Plan Better</h4>
                <p className="text-sm text-gray-700">
                  Whether saving for a house, child's education, or retirement, this calculator helps you 
                  set realistic goals and investment amounts.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-nayibulls-navy mb-2">Compare Options</h4>
                <p className="text-sm text-gray-700">
                  See the difference between FD returns (6-7%) and potential equity returns (10-15%) 
                  over your investment horizon.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-400 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Important Disclaimer</h3>
          <p className="text-gray-700">
            This calculator provides estimates based on assumed constant returns. Actual stock market returns vary 
            significantly and past performance doesn't guarantee future results. Please consult a financial advisor 
            for personalized investment advice.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ReturnCalculator;
