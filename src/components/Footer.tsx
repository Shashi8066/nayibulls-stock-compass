
import { TrendingUp, Mail, Shield, FileText, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-nayibulls-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-nayibulls-green p-2 rounded-lg">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">NayiBulls</h3>
                <p className="text-sm text-blue-200">New-Age Investor Tools</p>
              </div>
            </Link>
            <p className="text-blue-200 text-sm">
              Educational stock market tools for retail investors in India. Not financial advice.
            </p>
          </div>

          {/* Tools */}
          <div>
            <h4 className="font-semibold mb-4">Tools</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/stock-finder" className="text-blue-200 hover:text-white transition-colors">Emerging Stock Finder</Link></li>
              <li><Link to="/return-calculator" className="text-blue-200 hover:text-white transition-colors">Return Estimator</Link></li>
              <li><Link to="/stock-comparison" className="text-blue-200 hover:text-white transition-colors">Stock Comparison</Link></li>
              <li><Link to="/glossary" className="text-blue-200 hover:text-white transition-colors">Financial Glossary</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-blue-200 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-blue-200 hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/faq" className="text-blue-200 hover:text-white transition-colors flex items-center"><HelpCircle className="h-4 w-4 mr-1" />FAQ</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/disclaimer" className="text-blue-200 hover:text-white transition-colors flex items-center"><Shield className="h-4 w-4 mr-1" />Disclaimer</Link></li>
              <li><Link to="/privacy" className="text-blue-200 hover:text-white transition-colors flex items-center"><FileText className="h-4 w-4 mr-1" />Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-blue-200 hover:text-white transition-colors flex items-center"><FileText className="h-4 w-4 mr-1" />Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-8 text-center">
          <p className="text-blue-200 text-sm">
            © {currentYear} NayiBulls. All rights reserved. | Educational tools for informational purposes only.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
