
import { Mail, Shield, FileText, HelpCircle, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const toolLinks = [
    { name: 'Stock Finder', href: '/stock-finder' },
    { name: 'Return Calculator', href: '/return-calculator' },
    { name: 'Stock Comparison', href: '/stock-comparison' },
    { name: 'Financial Glossary', href: '/glossary' }
  ];

  const legalLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Disclaimer', href: '/disclaimer' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact Us', href: '/contact' }
  ];

  return (
    <footer className="bg-nayibulls-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="bg-nayibulls-green p-2 rounded-lg">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">NayiBulls</h3>
                <p className="text-xs text-blue-200">New-Age Investor Tools</p>
              </div>
            </Link>
            <p className="text-blue-200 text-sm mb-4">
              Educational tools for retail investors in India. Learn, analyze, and make informed investment decisions.
            </p>
            <div className="flex items-center space-x-2 text-sm text-blue-200">
              <MapPin className="h-4 w-4" />
              <span>India</span>
            </div>
          </div>

          {/* Tools Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4 flex items-center">
              <FileText className="h-5 w-5 mr-2" />
              Tools
            </h4>
            <ul className="space-y-2">
              {toolLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-blue-200 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Support Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4 flex items-center">
              <Shield className="h-5 w-5 mr-2" />
              Legal & Support
            </h4>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-blue-200 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4 flex items-center">
              <Mail className="h-5 w-5 mr-2" />
              Get in Touch
            </h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm text-blue-200">
                <Mail className="h-4 w-4" />
                <a href="mailto:contact@nayibulls.com" className="hover:text-white transition-colors">
                  contact@nayibulls.com
                </a>
              </div>
              <div className="flex items-center space-x-2 text-sm text-blue-200">
                <HelpCircle className="h-4 w-4" />
                <a href="mailto:support@nayibulls.com" className="hover:text-white transition-colors">
                  support@nayibulls.com
                </a>
              </div>
              <p className="text-xs text-blue-200 mt-3">
                We typically respond within 24-48 hours during business days.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-blue-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-blue-200 mb-4 md:mb-0">
              © {currentYear} NayiBulls. All rights reserved. | Educational tools for retail investors.
            </div>
            <div className="flex flex-wrap gap-4 text-xs text-blue-200">
              <span>🔒 Not SEBI Registered</span>
              <span>📚 Educational Purpose Only</span>
              <span>⚠️ Not Financial Advice</span>
            </div>
          </div>
          
          <div className="mt-4 text-xs text-blue-300 text-center">
            <p>
              NayiBulls provides educational tools and information for learning purposes only. 
              We do not provide investment advice or recommendations. Please consult with qualified 
              financial advisors before making investment decisions.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
