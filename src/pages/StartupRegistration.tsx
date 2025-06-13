
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, ShoppingCart, Phone, MessageCircle } from 'lucide-react';
import { useCart } from '@/hooks/useCart';
import CartSidebar from '@/components/CartSidebar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const StartupRegistration = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const { addItem, items } = useCart();

  const mainService = {
    id: 'startup-india-certification',
    title: 'STARTUP INDIA CERTIFICATION',
    subtitle: 'Get your Startup India Registration through DPIIT',
    rating: 4.8,
    reviews: 2134,
    originalPrice: 15999,
    discountedPrice: 6999,
    features: [
      'Business Consultation',
      'Post Work',
      'Expert Assistance',
      'EMI* Available',
      'Startup India Certificate'
    ],
    premiumFeatures: [
      'Business Consultation',
      'Post Work',
      'Expert Assistance',
      'EMI* Available',
      'Startup India Certificate',
      'Udyam Registration',
      'GST Registration'
    ],
    description: 'Startup India is a flagship initiative of the Government of India, intended to catalyse startup culture and build a strong and inclusive ecosystem for innovation and entrepreneurship in the country.',
    benefits: [
      'Tax benefits for 3 consecutive years',
      'Self-certification under 9 labour and environment laws',
      'Fast-track patent examination',
      'Funding support through various schemes',
      'Networking opportunities'
    ]
  };

  const additionalServices = [
    {
      id: 'ledgers-compliance',
      title: 'LEDGERS - Compliance Platform',
      description: 'Income, GST Filing, banking and Payroll compliance',
      price: 2999,
      discount: '60% off'
    },
    {
      id: 'gst-registration',
      title: 'GST Registration',
      description: 'Get GST Tax ID registration for your business',
      price: 2499,
      discount: '50% off'
    },
    {
      id: 'current-account',
      title: 'Current Account',
      description: 'Get a current account for your business',
      price: 0,
      discount: 'Free'
    }
  ];

  const handleAddToCart = (service: any, isPremium = false) => {
    const serviceToAdd = {
      id: isPremium ? `${service.id}-premium` : service.id,
      name: isPremium ? `${service.title} (Premium)` : service.title,
      description: isPremium ? 'Premium package with additional services' : service.description || service.subtitle,
      price: isPremium ? service.discountedPrice + 2000 : (service.discountedPrice || service.price)
    };
    addItem(serviceToAdd);
  };

  const handleWhatsAppChat = () => {
    window.open('https://wa.me/919999999999?text=Hi, I need help with Startup India Registration', '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-600 mb-6">
          Home &gt; Registrations &gt; Startup India
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Service */}
          <div className="lg:col-span-2">
            <Card className="mb-6">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-600 text-white p-4 rounded-lg text-center min-w-[120px]">
                    <div className="text-lg font-bold">STARTUP INDIA</div>
                    <div className="text-sm">CERTIFICATION</div>
                  </div>
                  
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2">{mainService.subtitle}</CardTitle>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="ml-1 font-semibold">{mainService.rating}</span>
                      </div>
                      <span className="text-gray-600">({mainService.reviews.toLocaleString()} reviews)</span>
                    </div>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-2xl font-bold text-green-600">₹{mainService.discountedPrice.toLocaleString()}</span>
                      <span className="text-lg text-gray-500 line-through">₹{mainService.originalPrice.toLocaleString()}</span>
                      <Badge variant="destructive">{Math.round((1 - mainService.discountedPrice / mainService.originalPrice) * 100)}% off</Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold mb-2">Services Included</h4>
                    <ul className="space-y-1">
                      {mainService.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Services Included + GST</h4>
                    <ul className="space-y-1">
                      {mainService.premiumFeatures.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex gap-4 mb-6">
                  <Button 
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white"
                    onClick={() => handleAddToCart(mainService)}
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Add to Cart
                  </Button>
                  <Button 
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
                    onClick={() => handleAddToCart(mainService, true)}
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Add Premium
                  </Button>
                </div>

                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-2">Need assistance?</p>
                  <Button 
                    variant="outline" 
                    onClick={handleWhatsAppChat}
                    className="bg-green-500 text-white hover:bg-green-600"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Chat with our Experts
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* About Section */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Benefits of Startup India Registration</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-700">{mainService.description}</p>
                  <div>
                    <h4 className="font-semibold mb-2">Key Benefits:</h4>
                    <ul className="space-y-2">
                      {mainService.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></div>
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Additional Services */}
            <Card>
              <CardHeader>
                <CardTitle>Offers and discounts</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {additionalServices.map((service) => (
                    <div key={service.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex-1">
                        <h4 className="font-semibold">{service.title}</h4>
                        <p className="text-sm text-gray-600">{service.description}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="font-bold text-green-600">₹{service.price.toLocaleString()}</span>
                          <Badge variant="secondary">{service.discount}</Badge>
                        </div>
                      </div>
                      <Button 
                        size="sm"
                        onClick={() => handleAddToCart(service)}
                        className="ml-4"
                      >
                        <ShoppingCart className="w-4 h-4 mr-1" />
                        Add
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Location & Cart */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Select Location</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">State</label>
                  <select 
                    className="w-full p-2 border rounded-lg"
                    value={selectedState}
                    onChange={(e) => setSelectedState(e.target.value)}
                  >
                    <option value="">Select State</option>
                    <option value="delhi">Delhi</option>
                    <option value="mumbai">Mumbai</option>
                    <option value="bangalore">Bangalore</option>
                    <option value="pune">Pune</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">City</label>
                  <select 
                    className="w-full p-2 border rounded-lg"
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.target.value)}
                  >
                    <option value="">Select City</option>
                    <option value="central-delhi">Central Delhi</option>
                    <option value="south-delhi">South Delhi</option>
                    <option value="north-delhi">North Delhi</option>
                  </select>
                </div>
                
                <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-800">
                    Enter GSTIN to get 18% GST Credit
                  </p>
                  <Input 
                    placeholder="Enter GSTIN" 
                    className="mt-2"
                  />
                </div>
                
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                  Get Assistance
                </Button>
              </CardContent>
            </Card>

            {/* Cart Summary */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Cart ({items.length})</span>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => setIsCartOpen(true)}
                  >
                    View Cart
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                {items.length === 0 ? (
                  <p className="text-gray-500 text-center py-4">No items in cart</p>
                ) : (
                  <div className="space-y-2">
                    {items.slice(0, 2).map((item) => (
                      <div key={item.id} className="text-sm">
                        <div className="font-medium truncate">{item.name}</div>
                        <div className="text-gray-600">₹{item.price} x {item.quantity}</div>
                      </div>
                    ))}
                    {items.length > 2 && (
                      <div className="text-sm text-gray-500">+{items.length - 2} more items</div>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Contact */}
            <Card>
              <CardHeader>
                <CardTitle>Need Help?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <Phone className="w-4 h-4 mr-2" />
                    Call: +91 99999 99999
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start"
                    onClick={handleWhatsAppChat}
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp Support
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
};

export default StartupRegistration;
