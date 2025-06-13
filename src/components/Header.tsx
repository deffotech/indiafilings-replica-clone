import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { ShoppingCart, Search, Menu, X } from 'lucide-react';
import { useCart } from '@/hooks/useCart';
import CartSidebar from './CartSidebar';

const Header = () => {
  const { items } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <header className="bg-white shadow-sm border-b sticky top-0 z-50 w-full">
        <div className="w-full px-2">
          <div className="flex justify-between items-center h-16 max-w-[1400px] mx-auto">
            {/* Logo */}
            <div className="flex items-center flex-shrink-0 min-w-[120px]">
              <div className="text-lg lg:text-xl font-bold whitespace-nowrap">
                <span className="text-orange-500">India</span>
                <span className="text-blue-600">Filings</span>
              </div>
            </div>

            {/* Desktop Navigation - Properly centered with consistent spacing */}
            <div className="hidden lg:flex flex-1 justify-center px-2">
              <NavigationMenu className="w-full max-w-none">
                <NavigationMenuList className="flex items-center justify-center space-x-0 flex-nowrap w-full">
                  <NavigationMenuItem className="px-1">
                    <NavigationMenuTrigger className="text-gray-700 hover:text-blue-600 px-2 py-2 text-xs font-medium whitespace-nowrap h-auto">
                      Startup
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid gap-3 p-6 w-[400px]">
                        <NavigationMenuLink href="#" className="block p-3 hover:bg-gray-50 rounded-md">
                          <div className="font-medium">Business Plan</div>
                          <div className="text-sm text-gray-600">Create a comprehensive business plan</div>
                        </NavigationMenuLink>
                        <NavigationMenuLink href="#" className="block p-3 hover:bg-gray-50 rounded-md">
                          <div className="font-medium">Startup India Registration</div>
                          <div className="text-sm text-gray-600">Register under Startup India scheme</div>
                        </NavigationMenuLink>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem className="px-1">
                    <NavigationMenuTrigger className="text-gray-700 hover:text-blue-600 px-2 py-2 text-xs font-medium whitespace-nowrap h-auto">
                      Registrations
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid gap-3 p-6 w-[500px] grid-cols-2">
                        <NavigationMenuLink href="#" className="block p-3 hover:bg-gray-50 rounded-md">
                          <div className="font-medium">Private Limited Company</div>
                          <div className="text-sm text-gray-600">Most popular business structure</div>
                        </NavigationMenuLink>
                        <NavigationMenuLink href="#" className="block p-3 hover:bg-gray-50 rounded-md">
                          <div className="font-medium">LLP Registration</div>
                          <div className="text-sm text-gray-600">Limited Liability Partnership</div>
                        </NavigationMenuLink>
                        <NavigationMenuLink href="#" className="block p-3 hover:bg-gray-50 rounded-md">
                          <div className="font-medium">OPC Registration</div>
                          <div className="text-sm text-gray-600">One Person Company</div>
                        </NavigationMenuLink>
                        <NavigationMenuLink href="#" className="block p-3 hover:bg-gray-50 rounded-md">
                          <div className="font-medium">Partnership Registration</div>
                          <div className="text-sm text-gray-600">Partnership firm registration</div>
                        </NavigationMenuLink>
                        <NavigationMenuLink href="#" className="block p-3 hover:bg-gray-50 rounded-md">
                          <div className="font-medium">Section 8 Company</div>
                          <div className="text-sm text-gray-600">Non-profit company registration</div>
                        </NavigationMenuLink>
                        <NavigationMenuLink href="#" className="block p-3 hover:bg-gray-50 rounded-md">
                          <div className="font-medium">Nidhi Company</div>
                          <div className="text-sm text-gray-600">Mutual benefit society</div>
                        </NavigationMenuLink>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem className="px-1">
                    <NavigationMenuTrigger className="text-gray-700 hover:text-blue-600 px-2 py-2 text-xs font-medium whitespace-nowrap h-auto">
                      Trademark
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid gap-3 p-6 w-[400px]">
                        <NavigationMenuLink href="#" className="block p-3 hover:bg-gray-50 rounded-md">
                          <div className="font-medium">Trademark Registration</div>
                          <div className="text-sm text-gray-600">Protect your brand name and logo</div>
                        </NavigationMenuLink>
                        <NavigationMenuLink href="#" className="block p-3 hover:bg-gray-50 rounded-md">
                          <div className="font-medium">Trademark Search</div>
                          <div className="text-sm text-gray-600">Check trademark availability</div>
                        </NavigationMenuLink>
                        <NavigationMenuLink href="#" className="block p-3 hover:bg-gray-50 rounded-md">
                          <div className="font-medium">Trademark Renewal</div>
                          <div className="text-sm text-gray-600">Renew your existing trademark</div>
                        </NavigationMenuLink>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem className="px-1">
                    <NavigationMenuTrigger className="text-gray-700 hover:text-blue-600 px-2 py-2 text-xs font-medium whitespace-nowrap h-auto">
                      GST
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid gap-3 p-6 w-[400px]">
                        <NavigationMenuLink href="#" className="block p-3 hover:bg-gray-50 rounded-md">
                          <div className="font-medium">GST Registration</div>
                          <div className="text-sm text-gray-600">Register for Goods and Services Tax</div>
                        </NavigationMenuLink>
                        <NavigationMenuLink href="#" className="block p-3 hover:bg-gray-50 rounded-md">
                          <div className="font-medium">GST Return Filing</div>
                          <div className="text-sm text-gray-600">File your GST returns</div>
                        </NavigationMenuLink>
                        <NavigationMenuLink href="#" className="block p-3 hover:bg-gray-50 rounded-md">
                          <div className="font-medium">GST Cancellation</div>
                          <div className="text-sm text-gray-600">Cancel GST registration</div>
                        </NavigationMenuLink>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem className="px-1">
                    <NavigationMenuTrigger className="text-gray-700 hover:text-blue-600 px-2 py-2 text-xs font-medium whitespace-nowrap h-auto">
                      Income Tax
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid gap-3 p-6 w-[400px]">
                        <NavigationMenuLink href="#" className="block p-3 hover:bg-gray-50 rounded-md">
                          <div className="font-medium">Income Tax Filing</div>
                          <div className="text-sm text-gray-600">File your income tax returns</div>
                        </NavigationMenuLink>
                        <NavigationMenuLink href="#" className="block p-3 hover:bg-gray-50 rounded-md">
                          <div className="font-medium">TDS Return Filing</div>
                          <div className="text-sm text-gray-600">File TDS returns</div>
                        </NavigationMenuLink>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem className="px-1">
                    <NavigationMenuTrigger className="text-gray-700 hover:text-blue-600 px-2 py-2 text-xs font-medium whitespace-nowrap h-auto">
                      MCA
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid gap-3 p-6 w-[400px]">
                        <NavigationMenuLink href="#" className="block p-3 hover:bg-gray-50 rounded-md">
                          <div className="font-medium">Annual Filing</div>
                          <div className="text-sm text-gray-600">File annual returns with MCA</div>
                        </NavigationMenuLink>
                        <NavigationMenuLink href="#" className="block p-3 hover:bg-gray-50 rounded-md">
                          <div className="font-medium">Director KYC</div>
                          <div className="text-sm text-gray-600">Complete director KYC</div>
                        </NavigationMenuLink>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem className="px-1">
                    <NavigationMenuTrigger className="text-gray-700 hover:text-blue-600 px-2 py-2 text-xs font-medium whitespace-nowrap h-auto">
                      Compliance
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid gap-3 p-6 w-[400px]">
                        <NavigationMenuLink href="#" className="block p-3 hover:bg-gray-50 rounded-md">
                          <div className="font-medium">Legal Compliance</div>
                          <div className="text-sm text-gray-600">Ensure legal compliance</div>
                        </NavigationMenuLink>
                        <NavigationMenuLink href="#" className="block p-3 hover:bg-gray-50 rounded-md">
                          <div className="font-medium">Regulatory Compliance</div>
                          <div className="text-sm text-gray-600">Meet regulatory requirements</div>
                        </NavigationMenuLink>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem className="px-1">
                    <NavigationMenuLink href="#" className="text-gray-700 hover:text-blue-600 px-2 py-2 text-xs font-medium whitespace-nowrap">
                      Consultation
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                  <NavigationMenuItem className="px-1">
                    <NavigationMenuLink href="#" className="text-gray-700 hover:text-blue-600 px-2 py-2 text-xs font-medium whitespace-nowrap">
                      Guides
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                  <NavigationMenuItem className="px-1">
                    <NavigationMenuLink href="#" className="text-gray-700 hover:text-blue-600 px-2 py-2 text-xs font-medium whitespace-nowrap">
                      About Us
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            {/* Right side actions */}
            <div className="flex items-center space-x-2 flex-shrink-0 min-w-[200px] justify-end px-2">
              <Button variant="ghost" size="sm" className="hidden md:flex text-xs px-2">
                <Search className="w-4 h-4 mr-1" />
                Search
              </Button>
              
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 text-gray-600 hover:text-blue-600"
              >
                <ShoppingCart className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
                    {totalItems}
                  </span>
                )}
              </button>

              <Button className="bg-blue-600 hover:bg-blue-700 text-white text-xs px-3">
                Login
              </Button>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-gray-600 hover:text-blue-600"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="lg:hidden py-4 border-t">
              <div className="space-y-2">
                <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Startup</a>
                <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Registrations</a>
                <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Trademark</a>
                <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600">GST</a>
                <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Income Tax</a>
                <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600">MCA</a>
                <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Compliance</a>
                <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Consultation</a>
                <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Guides</a>
                <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600">About Us</a>
              </div>
            </div>
          )}
        </div>
      </header>

      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default Header;
