
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, Mail, ShoppingCart } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import CartSidebar from './CartSidebar';
import WhatsAppButton from './WhatsAppButton';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

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
            <NavigationMenu className="hidden md:flex">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Startup</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 md:w-[500px] lg:w-[600px] lg:grid-cols-2">
                      <div className="space-y-3">
                        <h4 className="font-medium text-sm text-gray-600 uppercase tracking-wide">Company Types</h4>
                        <NavigationMenuLink href="/proprietary-company" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Proprietorship</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">Simple business structure for individual ownership</p>
                        </NavigationMenuLink>
                        <NavigationMenuLink href="/partnership" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Partnership</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">Business partnership between multiple parties</p>
                        </NavigationMenuLink>
                        <NavigationMenuLink href="/one-person-company" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">One Person Company</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">Corporate structure for single person</p>
                        </NavigationMenuLink>
                        <NavigationMenuLink href="/private-limited-company" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Private Limited Company</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">Most popular corporate structure</p>
                        </NavigationMenuLink>
                      </div>
                      <div className="space-y-3">
                        <h4 className="font-medium text-sm text-gray-600 uppercase tracking-wide">International</h4>
                        <NavigationMenuLink href="/section-8-company" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Section 8 Company</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">Non-profit organization registration</p>
                        </NavigationMenuLink>
                        <NavigationMenuLink href="/uae-company" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">UAE Company</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">Company registration in UAE</p>
                        </NavigationMenuLink>
                        <NavigationMenuLink href="/usa-company" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">USA Company</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">US company incorporation</p>
                        </NavigationMenuLink>
                        <NavigationMenuLink href="/singapore-company" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Singapore Company</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">Singapore business registration</p>
                        </NavigationMenuLink>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>Registrations</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 md:w-[500px] lg:w-[600px] lg:grid-cols-2">
                      <div className="space-y-3">
                        <h4 className="font-medium text-sm text-gray-600 uppercase tracking-wide">Business Licenses</h4>
                        <NavigationMenuLink href="/startup-india" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Startup India</div>
                        </NavigationMenuLink>
                        <NavigationMenuLink href="/trade-license" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Trade License</div>
                        </NavigationMenuLink>
                        <NavigationMenuLink href="/fssai-registration" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">FSSAI Registration</div>
                        </NavigationMenuLink>
                        <NavigationMenuLink href="/iso-registration" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">ISO Registration</div>
                        </NavigationMenuLink>
                      </div>
                      <div className="space-y-3">
                        <h4 className="font-medium text-sm text-gray-600 uppercase tracking-wide">Compliance</h4>
                        <NavigationMenuLink href="/12a-registration" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">12A Registration</div>
                        </NavigationMenuLink>
                        <NavigationMenuLink href="/80g-registration" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">80G Registration</div>
                        </NavigationMenuLink>
                        <NavigationMenuLink href="/digital-signature" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Digital Signature</div>
                        </NavigationMenuLink>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>Trademark</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 md:w-[500px] lg:w-[600px] lg:grid-cols-2">
                      <div className="space-y-3">
                        <h4 className="font-medium text-sm text-gray-600 uppercase tracking-wide">Trademark Services</h4>
                        <NavigationMenuLink href="/trademark-registration" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Trademark Registration</div>
                        </NavigationMenuLink>
                        <NavigationMenuLink href="/trademark-objection" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Trademark Objection</div>
                        </NavigationMenuLink>
                        <NavigationMenuLink href="/trademark-renewal" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Trademark Renewal</div>
                        </NavigationMenuLink>
                      </div>
                      <div className="space-y-3">
                        <h4 className="font-medium text-sm text-gray-600 uppercase tracking-wide">Intellectual Property</h4>
                        <NavigationMenuLink href="/copyright-registration" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Copyright Registration</div>
                        </NavigationMenuLink>
                        <NavigationMenuLink href="/patent-registration" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Patent Registration</div>
                        </NavigationMenuLink>
                        <NavigationMenuLink href="/design-registration" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Design Registration</div>
                        </NavigationMenuLink>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>Goods & Services Tax</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 md:w-[500px] lg:w-[600px] lg:grid-cols-2">
                      <div className="space-y-3">
                        <h4 className="font-medium text-sm text-gray-600 uppercase tracking-wide">GST Registration</h4>
                        <NavigationMenuLink href="/gst-registration" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">GST Registration</div>
                        </NavigationMenuLink>
                        <NavigationMenuLink href="/gst-return-filing" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">GST Return Filing</div>
                        </NavigationMenuLink>
                        <NavigationMenuLink href="/gst-annual-return" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">GST Annual Return Filing</div>
                        </NavigationMenuLink>
                      </div>
                      <div className="space-y-3">
                        <h4 className="font-medium text-sm text-gray-600 uppercase tracking-wide">GST Services</h4>
                        <NavigationMenuLink href="/gst-amendment" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">GST Amendment</div>
                        </NavigationMenuLink>
                        <NavigationMenuLink href="/gst-revocation" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">GST Revocation</div>
                        </NavigationMenuLink>
                        <NavigationMenuLink href="/gst-software" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">GST Software</div>
                        </NavigationMenuLink>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>Income Tax</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 md:w-[400px] lg:w-[500px]">
                      <div className="space-y-3">
                        <h4 className="font-medium text-sm text-gray-600 uppercase tracking-wide">Income Tax Services</h4>
                        <NavigationMenuLink href="/income-tax-filing" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Income Tax Filing</div>
                        </NavigationMenuLink>
                        <NavigationMenuLink href="/tds-return-filing" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">TDS Return Filing</div>
                        </NavigationMenuLink>
                        <NavigationMenuLink href="/tax-planning" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Tax Planning</div>
                        </NavigationMenuLink>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>MCA</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 md:w-[500px] lg:w-[600px] lg:grid-cols-2">
                      <div className="space-y-3">
                        <h4 className="font-medium text-sm text-gray-600 uppercase tracking-wide">MCA Compliance</h4>
                        <NavigationMenuLink href="/company-compliance" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Company Compliance</div>
                        </NavigationMenuLink>
                        <NavigationMenuLink href="/din-ekyc" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">DIN eKYC Filing</div>
                        </NavigationMenuLink>
                        <NavigationMenuLink href="/director-change" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Director Change</div>
                        </NavigationMenuLink>
                      </div>
                      <div className="space-y-3">
                        <h4 className="font-medium text-sm text-gray-600 uppercase tracking-wide">Corporate Changes</h4>
                        <NavigationMenuLink href="/authorized-capital-increase" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Authorized Capital Increase</div>
                        </NavigationMenuLink>
                        <NavigationMenuLink href="/share-transfer" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Share Transfer</div>
                        </NavigationMenuLink>
                        <NavigationMenuLink href="/winding-up" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Winding Up</div>
                        </NavigationMenuLink>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>Compliance</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 md:w-[400px] lg:w-[500px]">
                      <div className="space-y-3">
                        <h4 className="font-medium text-sm text-gray-600 uppercase tracking-wide">Compliance Services</h4>
                        <NavigationMenuLink href="/annual-compliance" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Annual Compliance</div>
                        </NavigationMenuLink>
                        <NavigationMenuLink href="/roc-filing" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">ROC Filing</div>
                        </NavigationMenuLink>
                        <NavigationMenuLink href="/statutory-audit" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Statutory Audit</div>
                        </NavigationMenuLink>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink href="/consultation" className="text-gray-700 hover:text-blue-600 font-medium">
                    Consultation
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink href="/guides" className="text-gray-700 hover:text-blue-600 font-medium">
                    Guides
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink href="/about" className="text-gray-700 hover:text-blue-600 font-medium">
                    About Us
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Button 
                variant="outline" 
                className="border-blue-600 text-blue-600 hover:bg-blue-50"
                onClick={() => setIsCartOpen(true)}
              >
                <ShoppingCart className="w-4 h-4 mr-2" />
                Cart
              </Button>
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
                <a href="#" className="text-gray-700 font-medium">Startup</a>
                <a href="#" className="text-gray-700 font-medium">Registrations</a>
                <a href="#" className="text-gray-700 font-medium">Trademark</a>
                <a href="#" className="text-gray-700 font-medium">Goods & Services Tax</a>
                <a href="#" className="text-gray-700 font-medium">Income Tax</a>
                <a href="#" className="text-gray-700 font-medium">MCA</a>
                <a href="#" className="text-gray-700 font-medium">Compliance</a>
                <a href="#" className="text-gray-700 font-medium">Consultation</a>
                <a href="#" className="text-gray-700 font-medium">Guides</a>
                <a href="#" className="text-gray-700 font-medium">About Us</a>
                <div className="flex flex-col space-y-2 pt-4">
                  <Button 
                    variant="outline" 
                    className="border-blue-600 text-blue-600"
                    onClick={() => setIsCartOpen(true)}
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Cart
                  </Button>
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

      {/* Cart Sidebar */}
      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      
      {/* WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
};

export default Header;
