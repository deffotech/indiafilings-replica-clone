
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, Mail, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      {/* Top Bar */}
      <div className="bg-blue-900 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Phone className="w-4 h-4" />
              <span>+91-8800-100-281</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail className="w-4 h-4" />
              <span>support@indiafilings.com</span>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <span>Free Consultation</span>
            <span>|</span>
            <span>Expert Support</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center">
              <div className="text-2xl font-bold gradient-text">
                IndiaFilings
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <div className="relative group">
                <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium">
                  <span>Company Registration</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
              <div className="relative group">
                <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium">
                  <span>Compliance</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
              <div className="relative group">
                <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium">
                  <span>Trademark</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Tax Filing</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">About</a>
            </nav>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                Login
              </Button>
              <Button className="gradient-bg text-white hover:opacity-90">
                Get Started
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <nav className="flex flex-col space-y-4">
                <a href="#" className="text-gray-700 font-medium">Company Registration</a>
                <a href="#" className="text-gray-700 font-medium">Compliance</a>
                <a href="#" className="text-gray-700 font-medium">Trademark</a>
                <a href="#" className="text-gray-700 font-medium">Tax Filing</a>
                <a href="#" className="text-gray-700 font-medium">About</a>
                <div className="flex flex-col space-y-2 pt-4">
                  <Button variant="outline" className="border-blue-600 text-blue-600">
                    Login
                  </Button>
                  <Button className="gradient-bg text-white">
                    Get Started
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;
