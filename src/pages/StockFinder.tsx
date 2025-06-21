
import { useState, useMemo } from 'react';
import { TrendingUp, Filter, Search, ArrowUp, ArrowDown, Zap } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface Stock {
  id: string;
  name: string;
  symbol: string;
  marketCap: number;
  marketCapText: string;
  sector: string;
  price: number;
  yearReturn: number;
  peRatio: number;
  revenueGrowth: number;
  profitGrowth: number;
  flag: string;
  category: 'small-cap' | 'mid-cap';
}

const StockFinder = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSector, setSelectedSector] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [minReturn, setMinReturn] = useState('');
  const [priceRange, setPriceRange] = useState('all');

  const sampleStocks: Stock[] = [
    {
      id: '1',
      name: 'KPIT Technologies Ltd',
      symbol: 'KPIT',
      marketCap: 8000,
      marketCapText: '₹8,000 Cr',
      sector: 'Auto-Tech',
      price: 1245,
      yearReturn: 84,
      peRatio: 28,
      revenueGrowth: 32,
      profitGrowth: 45,
      flag: 'High EPS Growth',
      category: 'mid-cap'
    },
    {
      id: '2',
      name: 'Zomato Ltd',
      symbol: 'ZOMATO',
      marketCap: 95000,
      marketCapText: '₹95,000 Cr',
      sector: 'Technology',
      price: 245,
      yearReturn: 78,
      peRatio: 45,
      revenueGrowth: 28,
      profitGrowth: 156,
      flag: 'Profit Turnaround',
      category: 'mid-cap'
    },
    {
      id: '3',
      name: 'Dixon Technologies',
      symbol: 'DIXON',
      marketCap: 25000,
      marketCapText: '₹25,000 Cr',
      sector: 'Electronics',
      price: 4250,
      yearReturn: 67,
      peRatio: 32,
      revenueGrowth: 41,
      profitGrowth: 38,
      flag: 'Revenue Leader',
      category: 'mid-cap'
    },
    {
      id: '4',
      name: 'Lemon Tree Hotels',
      symbol: 'LEMONTREE',
      marketCap: 8500,
      marketCapText: '₹8,500 Cr',
      sector: 'Hospitality',
      price: 125,
      yearReturn: 92,
      peRatio: 24,
      revenueGrowth: 67,
      profitGrowth: 234,
      flag: 'Recovery Play',
      category: 'mid-cap'
    },
    {
      id: '5',
      name: 'Clean Science Technology',
      symbol: 'CLEAN',
      marketCap: 12000,
      marketCapText: '₹12,000 Cr',
      sector: 'Chemicals',
      price: 1850,
      yearReturn: 45,
      peRatio: 35,
      revenueGrowth: 23,
      profitGrowth: 28,
      flag: 'Quality Business',
      category: 'mid-cap'
    },
    {
      id: '6',
      name: 'Cartrade Tech',
      symbol: 'CARTRADE',
      marketCap: 3200,
      marketCapText: '₹3,200 Cr',
      sector: 'Technology',
      price: 890,
      yearReturn: 156,
      peRatio: 42,
      revenueGrowth: 35,
      profitGrowth: 78,
      flag: 'Digital Platform',
      category: 'small-cap'
    }
  ];

  const sectors = ['all', 'Technology', 'Auto-Tech', 'Electronics', 'Hospitality', 'Chemicals'];
  const categories = ['all', 'small-cap', 'mid-cap'];
  const priceRanges = ['all', '0-100', '100-500', '500-1000', '1000+'];

  const filteredStocks = useMemo(() => {
    return sampleStocks.filter(stock => {
      const matchesSearch = stock.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          stock.symbol.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesSector = selectedSector === 'all' || stock.sector === selectedSector;
      const matchesCategory = selectedCategory === 'all' || stock.category === selectedCategory;
      const matchesReturn = minReturn === '' || stock.yearReturn >= parseInt(minReturn);
      
      let matchesPrice = true;
      if (priceRange !== 'all') {
        const [min, max] = priceRange.split('-').map(p => p === '+' ? Infinity : parseInt(p));
        matchesPrice = stock.price >= (min || 0) && stock.price <= (max || Infinity);
      }

      return matchesSearch && matchesSector && matchesCategory && matchesReturn && matchesPrice;
    });
  }, [searchTerm, selectedSector, selectedCategory, minReturn, priceRange]);

  const getReturnColor = (returnPercent: number) => {
    if (returnPercent >= 80) return 'text-green-600';
    if (returnPercent >= 50) return 'text-nayibulls-green';
    if (returnPercent >= 20) return 'text-yellow-600';
    return 'text-gray-600';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-nayibulls-gray">
      <Helmet>
        <title>Stock Finder - Discover Emerging Indian Stocks | NayiBulls</title>
        <meta name="description" content="Discover fast-growing small-cap and mid-cap Indian stocks with advanced filters. Find emerging opportunities based on market cap, sector, and growth metrics." />
        <meta name="keywords" content="stock finder, indian stocks, small cap stocks, mid cap stocks, emerging stocks, stock discovery, stock screening, investment opportunities" />
        <meta name="author" content="NayiBulls" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://nayibulls.com/stock-finder" />
        
        {/* Open Graph meta tags */}
        <meta property="og:title" content="Stock Finder - Discover Emerging Indian Stocks" />
        <meta property="og:description" content="Discover fast-growing small-cap and mid-cap Indian stocks with advanced filters. Find emerging opportunities based on market cap, sector, and growth metrics." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nayibulls.com/stock-finder" />
        <meta property="og:site_name" content="NayiBulls" />
        
        {/* Twitter meta tags */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Stock Finder - Discover Emerging Indian Stocks" />
        <meta name="twitter:description" content="Discover fast-growing small-cap and mid-cap Indian stocks with advanced filters." />
      </Helmet>

      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-nayibulls-navy to-nayibulls-green rounded-full flex items-center justify-center">
            <TrendingUp className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-nayibulls-navy mb-4">Emerging Stock Finder</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover fast-growing small-cap and mid-cap stocks based on market cap, sector performance, 
            and growth metrics. Perfect for spotting emerging opportunities in the Indian market.
          </p>
        </div>

        {/* Filters */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center text-nayibulls-navy">
              <Filter className="h-5 w-5 mr-2" />
              Filter Stocks
            </CardTitle>
            <CardDescription>
              Use these filters to find stocks that match your investment criteria
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search stocks..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <Select value={selectedSector} onValueChange={setSelectedSector}>
                <SelectTrigger>
                  <SelectValue placeholder="Sector" />
                </SelectTrigger>
                <SelectContent>
                  {sectors.map(sector => (
                    <SelectItem key={sector} value={sector}>
                      {sector === 'all' ? 'All Sectors' : sector}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Market Cap" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map(category => (
                    <SelectItem key={category} value={category}>
                      {category === 'all' ? 'All Categories' : 
                       category === 'small-cap' ? 'Small Cap' : 'Mid Cap'}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Input
                placeholder="Min Return %"
                type="number"
                value={minReturn}
                onChange={(e) => setMinReturn(e.target.value)}
                min="0"
                max="200"
              />

              <Select value={priceRange} onValueChange={setPriceRange}>
                <SelectTrigger>
                  <SelectValue placeholder="Price Range" />
                </SelectTrigger>
                <SelectContent>
                  {priceRanges.map(range => (
                    <SelectItem key={range} value={range}>
                      {range === 'all' ? 'All Prices' : 
                       range === '1000+' ? '₹1000+' : `₹${range}`}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Button 
                variant="outline"
                onClick={() => {
                  setSearchTerm('');
                  setSelectedSector('all');
                  setSelectedCategory('all');
                  setMinReturn('');
                  setPriceRange('all');
                }}
              >
                Clear Filters
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Results */}
        <div className="mb-6 flex justify-between items-center">
          <h2 className="text-2xl font-semibold text-nayibulls-navy">
            Found {filteredStocks.length} Stocks
          </h2>
          <Badge variant="secondary" className="bg-nayibulls-green text-white">
            Educational Data Only
          </Badge>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStocks.map((stock) => (
            <Card key={stock.id} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg text-nayibulls-navy">{stock.name}</CardTitle>
                    <CardDescription className="font-mono text-sm">{stock.symbol}</CardDescription>
                  </div>
                  <Badge 
                    variant="secondary"
                    className={`${stock.category === 'small-cap' ? 'bg-blue-100 text-blue-800' : 'bg-purple-100 text-purple-800'}`}
                  >
                    {stock.category === 'small-cap' ? 'Small Cap' : 'Mid Cap'}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-500">Market Cap</p>
                    <p className="font-semibold text-nayibulls-navy">{stock.marketCapText}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Current Price</p>
                    <p className="font-semibold text-nayibulls-navy">₹{stock.price.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">1-Year Return</p>
                    <p className={`font-semibold flex items-center ${getReturnColor(stock.yearReturn)}`}>
                      {stock.yearReturn > 0 ? <ArrowUp className="h-4 w-4 mr-1" /> : <ArrowDown className="h-4 w-4 mr-1" />}
                      {stock.yearReturn}%
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-500">PE Ratio</p>
                    <p className="font-semibold text-nayibulls-navy">{stock.peRatio}</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Revenue Growth</span>
                    <span className="font-semibold text-nayibulls-green">{stock.revenueGrowth}%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Profit Growth</span>
                    <span className="font-semibold text-nayibulls-green">{stock.profitGrowth}%</span>
                  </div>
                </div>

                <div className="pt-2 border-t">
                  <Badge className="bg-nayibulls-green text-white">
                    <Zap className="h-3 w-3 mr-1" />
                    {stock.flag}
                  </Badge>
                  <p className="text-xs text-gray-500 mt-2">Sector: {stock.sector}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredStocks.length === 0 && (
          <Card className="text-center py-12">
            <CardContent>
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                <Search className="h-8 w-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No stocks found</h3>
              <p className="text-gray-500">Try adjusting your filters to see more results</p>
            </CardContent>
          </Card>
        )}

        {/* Disclaimer */}
        <Card className="mt-12 bg-yellow-50 border-yellow-200">
          <CardContent className="pt-6">
            <p className="text-sm text-yellow-800">
              <strong>Disclaimer:</strong> All data shown is for educational purposes only and may not reflect real-time market conditions. 
              This tool does not provide investment advice. Please conduct your own research and consult with financial advisors before making investment decisions.
            </p>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default StockFinder;
