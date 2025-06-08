
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Star, ChevronRight, ShoppingCart } from 'lucide-react';
import { useCart } from '@/hooks/useCart';

const CompanyRegistrationPage = () => {
  const { addItem } = useCart();

  const handleAddToCart = (service: any) => {
    addItem({
      id: service.id,
      name: service.title,
      description: service.description,
      price: service.price,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <span>IndiaFilings</span>
            <ChevronRight className="w-4 h-4" />
            <span>Business Registration</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-blue-600">Company Registration</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Left Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Cart Section */}
            <Card>
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ShoppingCart className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Your cart is empty</h3>
                  <p className="text-gray-600 text-sm">Browse our services and add some services in cart!</p>
                </div>

                <div className="border-t pt-6">
                  <div className="text-right mb-4">
                    <span className="text-sm text-gray-600">Existing User? </span>
                    <Button variant="link" className="text-green-600 p-0">Login</Button>
                  </div>

                  <div className="space-y-4 mb-4">
                    <Input placeholder="Name" />
                    <Input placeholder="Email" type="email" />
                    <div className="flex">
                      <Select>
                        <SelectTrigger className="w-20">
                          <SelectValue placeholder="+91" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="+91">+91</SelectItem>
                        </SelectContent>
                      </Select>
                      <Input placeholder="Phone" className="ml-2" />
                    </div>
                  </div>

                  <p className="text-xs text-gray-500 mb-4">
                    Enter OTP to get 18% GST Credit
                  </p>

                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                    Get Started
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Related Guides Section */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Guides</h3>
              <div className="space-y-3">
                <a href="#" className="block text-blue-600 hover:text-blue-800 text-sm">
                  Proprietorship Registration & Comprehensive Guide for Entrepreneurs
                </a>
                <a href="#" className="block text-blue-600 hover:text-blue-800 text-sm">
                  Difference between One Person Company and Sole Proprietorship
                </a>
                <a href="#" className="block text-blue-600 hover:text-blue-800 text-sm">
                  What is meant by a proprietorship firm?
                </a>
                <a href="#" className="block text-blue-600 hover:text-blue-800 text-sm">
                  What are the types of proprietorship?
                </a>
                <a href="#" className="block text-blue-600 hover:text-blue-800 text-sm">
                  GST Registration for Proprietorship
                </a>
                <a href="#" className="block text-blue-600 hover:text-blue-800 text-sm">
                  Comparison of Proprietorship into Private Limited
                </a>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="mb-6">
                <h1 className="text-2xl font-bold text-gray-900 mb-2">Company Registration</h1>
                <div className="flex items-center space-x-2 mb-2">
                  <div className="flex items-center">
                    {[...Array(4)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                    <Star className="w-4 h-4 text-yellow-400 fill-current opacity-50" />
                  </div>
                  <span className="text-blue-600">(12026)</span>
                </div>
                <p className="text-gray-600">Instant Name Application for Company.</p>
              </div>

              <div className="mb-6">
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Name Approval" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="name-approval">Name Approval</SelectItem>
                    <SelectItem value="instant-filing">Instant Filing</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Name Approval Card */}
                <Card className="border-2 border-green-200">
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                        3 Exclusive Offers
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold mb-4">Name Approval</h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <ChevronRight className="w-4 h-4 text-gray-400" />
                        <span className="text-sm">Name Application Fee</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <ChevronRight className="w-4 h-4 text-gray-400" />
                        <span className="text-sm">Instant Filing</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <ChevronRight className="w-4 h-4 text-gray-400" />
                        <span className="text-sm">4 Name Choice</span>
                      </div>
                    </div>
                    <Button 
                      className="w-full mt-6 bg-blue-600 hover:bg-blue-700"
                      onClick={() => handleAddToCart({
                        id: 'name-approval',
                        title: 'Name Approval',
                        description: 'Company name approval service',
                        price: 1999
                      })}
                    >
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Add to Cart
                    </Button>
                  </CardContent>
                </Card>

                {/* Andaman and Nicobar Islands Card */}
                <Card className="border-2 border-green-200">
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                        2 Exclusive Offers
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold mb-4">Andaman and Nicobar Islands</h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <ChevronRight className="w-4 h-4 text-gray-400" />
                        <span className="text-sm">MCA Name Approval</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <ChevronRight className="w-4 h-4 text-gray-400" />
                        <span className="text-sm">Company Incorporation</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <ChevronRight className="w-4 h-4 text-gray-400" />
                        <span className="text-sm">PAN & TAN Registration</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <ChevronRight className="w-4 h-4 text-gray-400" />
                        <span className="text-sm">Government Fee & Stamp Duty</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <ChevronRight className="w-4 h-4 text-gray-400" />
                        <span className="text-sm">2 DSCs (Hyper Tokens)</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <ChevronRight className="w-4 h-4 text-gray-400" />
                        <span className="text-sm">DSC Downloading & Shipping Support</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <ChevronRight className="w-4 h-4 text-gray-400" />
                        <span className="text-sm">Bank Account Opening Assistance</span>
                      </div>
                    </div>
                    <Button 
                      className="w-full mt-6 bg-blue-600 hover:bg-blue-700"
                      onClick={() => handleAddToCart({
                        id: 'andaman-registration',
                        title: 'Andaman and Nicobar Islands Registration',
                        description: 'Complete company registration for Andaman and Nicobar Islands',
                        price: 6999
                      })}
                    >
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Add to Cart
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyRegistrationPage;
