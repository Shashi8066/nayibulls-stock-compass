
import { Mail, MessageSquare, Clock, MapPin } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-nayibulls-gray">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-nayibulls-navy mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions about our tools or suggestions for improvement? We'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <Mail className="h-8 w-8 text-nayibulls-green mb-2" />
              <CardTitle>Email Us</CardTitle>
              <CardDescription>
                For general inquiries, feedback, or technical support
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild className="w-full bg-nayibulls-navy hover:bg-nayibulls-navy-dark">
                <a href="mailto:contact@nayibulls.com">
                  contact@nayibulls.com
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <MessageSquare className="h-8 w-8 text-nayibulls-navy mb-2" />
              <CardTitle>Feedback</CardTitle>
              <CardDescription>
                Help us improve our tools with your suggestions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="outline" className="w-full border-nayibulls-navy text-nayibulls-navy">
                <a href="mailto:feedback@nayibulls.com">
                  feedback@nayibulls.com
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="bg-white rounded-lg p-8 shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-nayibulls-navy mb-6">Get in Touch</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                <Clock className="h-5 w-5 text-nayibulls-green mr-2" />
                Response Time
              </h3>
              <p className="text-gray-700 mb-4">
                We typically respond to emails within 24-48 hours during business days.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                <MapPin className="h-5 w-5 text-nayibulls-green mr-2" />
                Location
              </h3>
              <p className="text-gray-700 mb-4">
                Based in India, serving retail investors across the country.
              </p>
            </div>
          </div>

          <div className="mt-8 p-6 bg-nayibulls-gray rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-3">What to Include in Your Message</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Specific tool or feature you're asking about</li>
              <li>• Clear description of any issues you're experiencing</li>
              <li>• Suggestions for new features or improvements</li>
              <li>• Questions about our data sources or methodology</li>
            </ul>
          </div>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Please Note</h3>
          <p className="text-gray-700">
            We cannot provide personalized investment advice or stock recommendations. 
            Our tools are for educational purposes only. For investment advice, please 
            consult with a qualified financial advisor.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
