import React from 'react';
import { Linkedin, Twitter, Youtube, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="border-b border-coral-500 pb-6 mb-8" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Product */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-coral-400 transition-colors">Features</a></li>
              <li><a href="#" className="text-gray-300 hover:text-coral-400 transition-colors">Updates</a></li>
              <li><a href="#" className="text-gray-300 hover:text-coral-400 transition-colors">Roadmap</a></li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-coral-400 transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-300 hover:text-coral-400 transition-colors">Guides</a></li>
              <li><a href="#" className="text-gray-300 hover:text-coral-400 transition-colors">Webinars</a></li>
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-coral-400 transition-colors">Privacy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-coral-400 transition-colors">Terms</a></li>
              <li><a href="#" className="text-gray-300 hover:text-coral-400 transition-colors">Security</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Mail size={16} className="text-coral-400" />
                <a href="mailto:help@technix.com" className="text-gray-300 hover:text-coral-400 transition-colors">
                  help@technix.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={16} className="text-coral-400" />
                <a href="tel:5559876543" className="text-gray-300 hover:text-coral-400 transition-colors">
                  (555) 987-6543
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-gray-800">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Youtube size={20} />
            </a>
          </div>
          
          <div className="mb-4 md:mb-0">
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-gray-800 text-white px-4 py-2 rounded-l-md focus:outline-none focus:ring-1 focus:ring-coral-500 w-full max-w-xs"
              />
              <button 
                type="submit" 
                className="bg-coral-500 hover:bg-coral-600 text-white font-medium px-4 py-2 rounded-r-md transition-colors"
              >
                Get CRM tips
              </button>
            </form>
          </div>
          
          <div className="text-gray-400 text-sm">
            &copy; 2025 Technix-CRM. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;