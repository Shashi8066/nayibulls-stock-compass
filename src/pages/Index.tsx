
import { ArrowRight, TrendingUp, Calculator, BarChart3, BookOpen, Shield, Zap, Users, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Index = () => {
  const tools = [
    {
      title: "Emerging Stock Finder",
      description: "Discover fast-growing small-cap and mid-cap stocks with advanced filters for market cap, sector, and growth metrics.",
      icon: TrendingUp,
      href: "/stock-finder",
      gradient: "from-nayibulls-navy to-nayibulls-navy-light",
      tagline: "Find promising stocks before they become mainstream"
    },
    {
      title: "Return Estimator",
      description: "Calculate potential returns over time with SIP-style compound growth visualization and interactive charts.",
      icon: Calculator,
      href: "/return-calculator",
      gradient: "from-nayibulls-green to-nayibulls-green-light",
      tagline: "Estimate how much your investment will grow"
    },
    {
      title: "Stock Comparison",
      description: "Compare financial metrics of Indian companies side-by-side with key ratios like PE, ROCE, and dividend yield.",
      icon: BarChart3,
      href: "/stock-comparison",
      gradient: "from-nayibulls-navy-light to-nayibulls-green",
      tagline: "Compare two companies side-by-side"
    },
    {
      title: "Financial Glossary",
      description: "Learn 30+ essential stock market terms with simple explanations tailored for new-age retail investors.",
      icon: BookOpen,
      href: "/glossary",
      gradient: "from-nayibulls-green-dark to-nayibulls-navy",
      tagline: "Master financial terms with simple explanations"
    }
  ];

  const features = [
    {
      icon: Shield,
      title: "Educational Focus",
      description: "No financial advice, just powerful educational tools for learning"
    },
    {
      icon: Zap,
      title: "Fast & Clean",
      description: "Optimized for speed with clean, ad-safe UI design"
    },
    {
      icon: Users,
      title: "Beginner Friendly",
      description: "Simplified insights for new-age retail investors in India"
    }
  ];

  const benefits = [
    "Free to use - No registration required",
    "Educational focus - Learn while you explore",
    "Indian market specific - Built for INR and NSE/BSE",
    "Mobile responsive - Use on any device",
    "Privacy focused - No personal data collection"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-nayibulls-gray">
      <Helmet>
        <title>NayiBulls - Tools for the New-Age Investor | Stock Analysis & Return Calculator</title>
        <meta name="description" content="Explore free stock market tools for Indian investors. Estimate returns, compare stocks, find emerging opportunities, and learn financial terms with NayiBulls educational platform." />
        <meta name="keywords" content="NayiBulls, stock calculator India, compare shares, SIP return, financial tools, investment India, stock analysis, return calculator, stock comparison" />
        <meta name="author" content="NayiBulls" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://nayibulls.com/" />
        
        {/* Open Graph meta tags */}
        <meta property="og:title" content="NayiBulls - Tools for the New-Age Investor" />
        <meta property="og:description" content="Explore free stock market tools for Indian investors. Estimate returns, compare stocks, find emerging opportunities, and learn financial terms." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nayibulls.com/" />
        <meta property="og:site_name" content="NayiBulls" />
        <meta property="og:locale" content="en_IN" />
        
        {/* Twitter meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="NayiBulls - Tools for the New-Age Investor" />
        <meta name="twitter:description" content="Explore free stock market tools for Indian investors. Estimate returns, compare stocks, find emerging opportunities." />
        <meta name="twitter:site" content="@nayibulls" />
      </Helmet>

      <Header />
      
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-nayibulls-navy mb-6">
              Tools for the
              <span className="bg-gradient-to-r from-nayibulls-green to-nayibulls-navy bg-clip-text text-transparent"> New-Age</span>
              <br />Investor
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Estimate returns, explore rising stocks, and compare companies with NayiBulls — 
              educational tools designed for retail investors in India.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-nayibulls-navy hover:bg-nayibulls-navy-dark" asChild>
                <Link to="/stock-finder">
                  Explore Tools <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-nayibulls-navy text-nayibulls-navy hover:bg-nayibulls-navy hover:text-white" asChild>
                <Link to="/about">
                  Learn More
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-nayibulls-navy mb-6">Welcome to NayiBulls</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-lg leading-relaxed">
                NayiBulls is India's educational platform for new-age retail investors who want to understand 
                the stock market better. Whether you're a beginner taking your first steps into investing or 
                an experienced investor looking for better analysis tools, we've got you covered.
              </p>
              <p className="text-lg leading-relaxed mt-4">
                Our free tools help you estimate returns, discover emerging stocks, compare companies, and 
                learn essential financial concepts - all designed specifically for the Indian market with 
                INR calculations and NSE/BSE focus.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="border-nayibulls-green border-l-4">
              <CardHeader>
                <CardTitle className="text-nayibulls-navy">Who Is This For?</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li>• Beginner investors learning the basics</li>
                  <li>• Retail investors analyzing opportunities</li>
                  <li>• Students studying financial markets</li>
                  <li>• Anyone wanting to understand stocks better</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-nayibulls-navy border-l-4">
              <CardHeader>
                <CardTitle className="text-nayibulls-navy">Why Choose NayiBulls?</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-nayibulls-green mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-nayibulls-gray">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-nayibulls-navy mb-4">Our Investment Tools</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to analyze stocks, estimate returns, and make informed investment decisions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {tools.map((tool, index) => (
              <Card key={tool.title} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden bg-white">
                <div className={`h-2 bg-gradient-to-r ${tool.gradient}`}></div>
                <CardHeader className="pb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${tool.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <tool.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl text-nayibulls-navy">{tool.title}</CardTitle>
                  <p className="text-sm text-nayibulls-green font-medium">{tool.tagline}</p>
                  <CardDescription className="text-gray-600">{tool.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    variant="ghost" 
                    className="text-nayibulls-navy hover:text-nayibulls-green group-hover:translate-x-2 transition-all duration-300"
                    asChild
                  >
                    <Link to={tool.href}>
                      Try Tool <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-nayibulls-navy mb-4">Why Choose NayiBulls?</h2>
            <p className="text-lg text-gray-600">Built specifically for the modern Indian retail investor</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={feature.title} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-nayibulls-navy to-nayibulls-green rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-nayibulls-navy mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-nayibulls-navy to-nayibulls-navy-dark">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Start Your Investment Journey Today</h2>
          <p className="text-xl mb-8 text-blue-200">
            No registration required. Access all tools instantly and start learning about the stock market.
          </p>
          <Button size="lg" className="bg-nayibulls-green hover:bg-nayibulls-green-dark text-white" asChild>
            <Link to="/stock-finder">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <p className="text-sm text-blue-200 mt-4">
            <Shield className="inline h-4 w-4 mr-1" />
            Educational tools only • Not financial advice • SEBI compliance
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
