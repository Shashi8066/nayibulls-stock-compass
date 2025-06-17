
import { useState, useMemo } from 'react';
import { Calculator, TrendingUp, Zap, Info } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';
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
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-nayibulls-green to-nayibulls-green-light rounded-full flex items-center justify-center">
            <Calculator className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-nayibulls-navy mb-4">Return Estimator</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Calculate potential returns from your investments with our SIP-style return estimator. 
            Visualize the power of compound growth over time and make informed investment decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Calculator Inputs */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle className="flex items-center text-nayibulls-navy">
                  <Zap className="h-5 w-5 mr-2" />
                  Investment Calculator
                </CardTitle>
                <CardDescription>
                  Adjust your investment parameters to see potential returns
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Investment Type */}
                <div className="space-y-3">
                  <Label className="text-sm font-medium">Investment Type</Label>
                  <div className="flex space-x-2">
                    <Button
                      variant={investmentType === 'lumpsum' ? 'default' : 'outline'}
                      onClick={() => setInvestmentType('lumpsum')}
                      className="flex-1"
                    >
                      Lump Sum
                    </Button>
                    <Button
                      variant={investmentType === 'sip' ? 'default' : 'outline'}
                      onClick={() => setInvestmentType('sip')}
                      className="flex-1"
                    >
                      SIP
                    </Button>
                  </div>
                </div>

                {/* Investment Amount */}
                {investmentType === 'lumpsum' ? (
                  <div className="space-y-3">
                    <Label htmlFor="investment">Investment Amount (₹)</Label>
                    <Input
                      id="investment"
                      type="number"
                      value={investment}
                      onChange={(e) => setInvestment(Number(e.target.value))}
                      min="1000"
                      max="10000000"
                      step="1000"
                    />
                    <Slider
                      value={[investment]}
                      onValueChange={(value) => setInvestment(value[0])}
                      max={1000000}
                      min={1000}
                      step={1000}
                      className="w-full"
                    />
                    <p className="text-xs text-gray-500">Range: ₹1,000 - ₹10,00,000</p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <Label htmlFor="monthly">Monthly SIP Amount (₹)</Label>
                    <Input
                      id="monthly"
                      type="number"
                      value={monthlyAmount}
                      onChange={(e) => setMonthlyAmount(Number(e.target.value))}
                      min="500"
                      max="100000"
                      step="500"
                    />
                    <Slider
                      value={[monthlyAmount]}
                      onValueChange={(value) => setMonthlyAmount(value[0])}
                      max={50000}
                      min={500}
                      step={500}
                      className="w-full"
                    />
                    <p className="text-xs text-gray-500">Range: ₹500 - ₹50,000</p>
                  </div>
                )}

                {/* Expected Return */}
                <div className="space-y-3">
                  <Label htmlFor="return">Expected Annual Return (%)</Label>
                  <Input
                    id="return"
                    type="number"
                    value={annualReturn}
                    onChange={(e) => setAnnualReturn(Number(e.target.value))}
                    min="1"
                    max="30"
                    step="0.5"
                  />
                  <Slider
                    value={[annualReturn]}
                    onValueChange={(value) => setAnnualReturn(value[0])}
                    max={30}
                    min={1}
                    step={0.5}
                    className="w-full"
                  />
                  <p className="text-xs text-gray-500">Range: 1% - 30%</p>
                </div>

                {/* Duration */}
                <div className="space-y-3">
                  <Label htmlFor="duration">Investment Duration (Years)</Label>
                  <Input
                    id="duration"
                    type="number"
                    value={duration}
                    onChange={(e) => setDuration(Number(e.target.value))}
                    min="1"
                    max="30"
                    step="1"
                  />
                  <Slider
                    value={[duration]}
                    onValueChange={(value) => setDuration(value[0])}
                    max={30}
                    min={1}
                    step={1}
                    className="w-full"
                  />
                  <p className="text-xs text-gray-500">Range: 1 - 30 years</p>
                </div>

                {/* Quick Presets */}
                <div className="space-y-3">
                  <Label className="text-sm font-medium">Quick Presets</Label>
                  <div className="grid grid-cols-2 gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        setInvestment(50000);
                        setAnnualReturn(12);
                        setDuration(10);
                        setInvestmentType('lumpsum');
                      }}
                    >
                      Conservative
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        setInvestment(100000);
                        setAnnualReturn(15);
                        setDuration(10);
                        setInvestmentType('lumpsum');
                      }}
                    >
                      Moderate
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        setMonthlyAmount(10000);
                        setAnnualReturn(18);
                        setDuration(15);
                        setInvestmentType('sip');
                      }}
                    >
                      Aggressive SIP
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        setInvestment(500000);
                        setAnnualReturn(20);
                        setDuration(5);
                        setInvestmentType('lumpsum');
                      }}
                    >
                      High Growth
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Results and Charts */}
          <div className="lg:col-span-2 space-y-8">
            {/* Results Summary */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-nayibulls-navy">
                  <TrendingUp className="h-5 w-5 mr-2" />
                  Investment Summary
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-600">Total Invested</p>
                    <p className="text-xl font-bold text-nayibulls-navy">
                      ₹{totalInvested.toLocaleString()}
                    </p>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <p className="text-sm text-gray-600">Total Returns</p>
                    <p className="text-xl font-bold text-nayibulls-green">
                      ₹{totalReturns.toLocaleString()}
                    </p>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <p className="text-sm text-gray-600">Final Value</p>
                    <p className="text-xl font-bold text-nayibulls-navy">
                      ₹{finalValues.compoundInterest.toLocaleString()}
                    </p>
                  </div>
                  <div className="text-center p-4 bg-yellow-50 rounded-lg">
                    <p className="text-sm text-gray-600">Return %</p>
                    <p className="text-xl font-bold text-yellow-600">
                      {returnPercentage}%
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Growth Chart */}
            <Card>
              <CardHeader>
                <CardTitle>Growth Projection</CardTitle>
                <CardDescription>
                  Comparison between simple interest and compound growth over time
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={calculateReturns}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="year" />
                      <YAxis tickFormatter={(value) => `₹${(value / 1000).toFixed(0)}K`} />
                      <Tooltip 
                        formatter={(value: number) => [`₹${value.toLocaleString()}`, '']}
                        labelFormatter={(year) => `Year ${year}`}
                      />
                      <Legend />
                      <Line 
                        type="monotone" 
                        dataKey="simpleInterest" 
                        stroke="#64748b" 
                        strokeWidth={2}
                        name="Simple Interest"
                        strokeDasharray="5 5"
                      />
                      <Line 
                        type="monotone" 
                        dataKey="compoundInterest" 
                        stroke="#10b981" 
                        strokeWidth={3}
                        name="Compound Growth"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            {/* Investment vs Returns */}
            <Card>
              <CardHeader>
                <CardTitle>Investment Breakdown</CardTitle>
                <CardDescription>
                  Visual breakdown of your invested amount vs generated returns
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={comparisonData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis tickFormatter={(value) => `₹${(value / 1000).toFixed(0)}K`} />
                      <Tooltip formatter={(value: number) => `₹${value.toLocaleString()}`} />
                      <Bar dataKey="value" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Information Card */}
        <Card className="mt-12 bg-blue-50 border-blue-200">
          <CardContent className="pt-6">
            <div className="flex items-start space-x-3">
              <Info className="h-5 w-5 text-blue-600 mt-0.5" />
              <div>
                <h3 className="font-semibold text-blue-900 mb-2">How to Use This Calculator</h3>
                <div className="text-sm text-blue-800 space-y-1">
                  <p>• <strong>Lump Sum:</strong> One-time investment with compound growth</p>
                  <p>• <strong>SIP:</strong> Monthly investments with compounding on each contribution</p>
                  <p>• <strong>Expected Return:</strong> Conservative: 8-12%, Moderate: 12-15%, Aggressive: 15%+</p>
                  <p>• <strong>Disclaimer:</strong> These are estimates based on assumed returns. Actual market performance may vary.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default ReturnCalculator;
