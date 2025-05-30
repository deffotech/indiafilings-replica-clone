import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Menu, X, Phone, Mail } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import CartSidebar from './CartSidebar';
import { useCart } from '@/hooks/useCart';
import WhatsAppButton from './WhatsAppButton';

const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { items } = useCart();

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <header className="bg-white shadow-md sticky top-0 z-50">
        {/* Top bar */}
        <div className="bg-blue-600 text-white py-2 px-4">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-sm">
            <div className="flex items-center space-x-4 mb-2 sm:mb-0">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-1" />
                <span>+91 88001 00281</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-1" />
                <span>support@indiafilings.com</span>
              </div>
            </div>
            <div className="text-center sm:text-right">
              <span>Get Expert Consultation - Free!</span>
            </div>
          </div>
        </div>

        {/* Main header */}
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-xl sm:text-2xl font-bold gradient-text">IndiaFilings</h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-2">
              <NavigationMenu>
                <NavigationMenuList className="space-x-1">
                  {/* Company Registration */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-sm font-medium px-3 py-2 enhanced-contrast-dark">
                      Company Registration
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="bg-white border shadow-lg z-[1000] min-w-[280px] p-4">
                      <div className="space-y-2">
                        <a href="#" className="block px-3 py-2 text-sm hover:bg-gray-100 rounded">Private Limited Company</a>
                        <a href="#" className="block px-3 py-2 text-sm hover:bg-gray-100 rounded">Limited Liability Partnership</a>
                        <a href="#" className="block px-3 py-2 text-sm hover:bg-gray-100 rounded">One Person Company</a>
                        <a href="#" className="block px-3 py-2 text-sm hover:bg-gray-100 rounded">Partnership Registration</a>
                        <a href="#" className="block px-3 py-2 text-sm hover:bg-gray-100 rounded">Proprietorship Registration</a>
                        <a href="#" className="block px-3 py-2 text-sm hover:bg-gray-100 rounded">Section 8 Company</a>
                        <a href="#" className="block px-3 py-2 text-sm hover:bg-gray-100 rounded">Producer Company</a>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  {/* Trademark */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-sm font-medium px-3 py-2 enhanced-contrast-dark">
                      Trademark
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="bg-white border shadow-lg z-[1000] min-w-[280px] p-4">
                      <div className="space-y-2">
                        <a href="#" className="block px-3 py-2 text-sm hover:bg-gray-100 rounded">Trademark Registration</a>
                        <a href="#" className="block px-3 py-2 text-sm hover:bg-gray-100 rounded">Trademark Search</a>
                        <a href="#" className="block px-3 py-2 text-sm hover:bg-gray-100 rounded">Trademark Renewal</a>
                        <a href="#" className="block px-3 py-2 text-sm hover:bg-gray-100 rounded">Trademark Opposition</a>
                        <a href="#" className="block px-3 py-2 text-sm hover:bg-gray-100 rounded">Copyright Registration</a>
                        <a href="#" className="block px-3 py-2 text-sm hover:bg-gray-100 rounded">Design Registration</a>
                        <a href="#" className="block px-3 py-2 text-sm hover:bg-gray-100 rounded">Patent Registration</a>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  {/* GST */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-sm font-medium px-3 py-2 enhanced-contrast-dark">
                      GST
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="bg-white border shadow-lg z-[1000] min-w-[280px] p-4">
                      <div className="space-y-2">
                        <a href="#" className="block px-3 py-2 text-sm hover:bg-gray-100 rounded">GST Registration</a>
                        <a href="#" className="block px-3 py-2 text-sm hover:bg-gray-100 rounded">GST Return Filing</a>
                        <a href="#" className="block px-3 py-2 text-sm hover:bg-gray-100 rounded">GST Annual Return</a>
                        <a href="#" className="block px-3 py-2 text-sm hover:bg-gray-100 rounded">GST Cancellation</a>
                        <a href="#" className="block px-3 py-2 text-sm hover:bg-gray-100 rounded">Input Tax Credit</a>
                        <a href="#" className="block px-3 py-2 text-sm hover:bg-gray-100 rounded">GST Notice Reply</a>
                        <a href="#" className="block px-3 py-2 text-sm hover:bg-gray-100 rounded">E-way Bill</a>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  {/* Other Services */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-sm font-medium px-3 py-2 enhanced-contrast-dark">
                      Other Services
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="bg-white border shadow-lg z-[1000] min-w-[280px] p-4">
                      <div className="space-y-2">
                        <a href="#" className="block px-3 py-2 text-sm hover:bg-gray-100 rounded">Income Tax Filing</a>
                        <a href="#" className="block px-3 py-2 text-sm hover:bg-gray-100 rounded">FSSAI Registration</a>
                        <a href="#" className="block px-3 py-2 text-sm hover:bg-gray-100 rounded">ISO Certification</a>
                        <a href="#" className="block px-3 py-2 text-sm hover:bg-gray-100 rounded">Digital Signature</a>
                        <a href="#" className="block px-3 py-2 text-sm hover:bg-gray-100 rounded">MSME Registration</a>
                        <a href="#" className="block px-3 py-2 text-sm hover:bg-gray-100 rounded">Labour License</a>
                        <a href="#" className="block px-3 py-2 text-sm hover:bg-gray-100 rounded">Import Export Code</a>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  {/* About Us */}
                  <NavigationMenuItem>
                    <a href="#" className="text-sm font-medium px-3 py-2 hover:text-blue-600 enhanced-contrast-dark">
                      About Us
                    </a>
                  </NavigationMenuItem>

                  {/* Contact */}
                  <NavigationMenuItem>
                    <a href="#" className="text-sm font-medium px-3 py-2 hover:text-blue-600 enhanced-contrast-dark">
                      Contact
                    </a>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            {/* Cart and Mobile Menu */}
            <div className="flex items-center space-x-3">
              {/* Cart Button */}
              <Button
                variant="outline"
                className="relative p-2 border-blue-600 text-blue-600 hover:bg-blue-50"
                onClick={() => setIsCartOpen(true)}
              >
                <ShoppingCart className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </Button>

              {/* Mobile Menu Button */}
              <Button
                variant="outline"
                className="lg:hidden p-2"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t border-gray-200">
              <div className="space-y-2 pt-4">
                <DropdownMenu>
                  <DropdownMenuTrigger className="w-full text-left px-3 py-2 text-sm font-medium hover:bg-gray-100 rounded">
                    Company Registration
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-full bg-white border shadow-lg">
                    <DropdownMenuItem>Private Limited Company</DropdownMenuItem>
                    <DropdownMenuItem>Limited Liability Partnership</DropdownMenuItem>
                    <DropdownMenuItem>One Person Company</DropdownMenuItem>
                    <DropdownMenuItem>Partnership Registration</DropdownMenuItem>
                    <DropdownMenuItem>Proprietorship Registration</DropdownMenuItem>
                    <DropdownMenuItem>Section 8 Company</DropdownMenuItem>
                    <DropdownMenuItem>Producer Company</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                <DropdownMenu>
                  <DropdownMenuTrigger className="w-full text-left px-3 py-2 text-sm font-medium hover:bg-gray-100 rounded">
                    Trademark
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-full bg-white border shadow-lg">
                    <DropdownMenuItem>Trademark Registration</DropdownMenuItem>
                    <DropdownMenuItem>Trademark Search</DropdownMenuItem>
                    <DropdownMenuItem>Trademark Renewal</DropdownMenuItem>
                    <DropdownMenuItem>Trademark Opposition</DropdownMenuItem>
                    <DropdownMenuItem>Copyright Registration</DropdownMenuItem>
                    <DropdownMenuItem>Design Registration</DropdownMenuItem>
                    <DropdownMenuItem>Patent Registration</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                <DropdownMenu>
                  <DropdownMenuTrigger className="w-full text-left px-3 py-2 text-sm font-medium hover:bg-gray-100 rounded">
                    GST
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-full bg-white border shadow-lg">
                    <DropdownMenuItem>GST Registration</DropdownMenuItem>
                    <DropdownMenuItem>GST Return Filing</DropdownMenuItem>
                    <DropdownMenuItem>GST Annual Return</DropdownMenuItem>
                    <DropdownMenuItem>GST Cancellation</DropdownMenuItem>
                    <DropdownMenuItem>Input Tax Credit</DropdownMenuItem>
                    <DropdownMenuItem>GST Notice Reply</DropdownMenuItem>
                    <DropdownMenuItem>E-way Bill</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                <DropdownMenu>
                  <DropdownMenuTrigger className="w-full text-left px-3 py-2 text-sm font-medium hover:bg-gray-100 rounded">
                    Other Services
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-full bg-white border shadow-lg">
                    <DropdownMenuItem>Income Tax Filing</DropdownMenuItem>
                    <DropdownMenuItem>FSSAI Registration</DropdownMenuItem>
                    <DropdownMenuItem>ISO Certification</DropdownMenuItem>
                    <DropdownMenuItem>Digital Signature</DropdownMenuItem>
                    <DropdownMenuItem>MSME Registration</DropdownMenuItem>
                    <DropdownMenuItem>Labour License</DropdownMenuItem>
                    <DropdownMenuItem>Import Export Code</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                <a href="#" className="block px-3 py-2 text-sm font-medium hover:bg-gray-100 rounded">About Us</a>
                <a href="#" className="block px-3 py-2 text-sm font-medium hover:bg-gray-100 rounded">Contact</a>
              </div>
            </div>
          )}
        </div>
      </header>

      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <WhatsAppButton />
    </>
  );
};

export default Header;
