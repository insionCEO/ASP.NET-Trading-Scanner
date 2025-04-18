import React from 'react';
import { Globe, Facebook, Twitter, Instagram, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center mb-4">
              <Globe className="h-8 w-8 text-emerald-400 mr-2" />
              <span className="text-2xl font-bold">Wanderly</span>
            </div>
            <p className="text-gray-400 mb-6">
              Discover the world with AI-powered travel planning. Explore destinations, create itineraries, and find hidden gems tailored just for you.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-emerald-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-emerald-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-emerald-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Explore Destinations</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Plan a Trip</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Travel Guides</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">About Us</a></li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="text-lg font-bold mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Travel Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">AI Travel Tools</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Trip Planning Guide</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">FAQs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Partner with Us</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-emerald-400 mr-3" />
                <a href="mailto:contact@wanderly.ai" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  contact@wanderly.ai
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-emerald-400 mr-3" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-3">Subscribe to our Newsletter</h4>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="bg-gray-800 text-white px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 w-full"
                />
                <button className="bg-emerald-500 hover:bg-emerald-600 px-4 py-2 rounded-r-lg transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 mb-4 md:mb-0">© 2025 Wanderly. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-emerald-400 transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-emerald-400 transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-emerald-400 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;