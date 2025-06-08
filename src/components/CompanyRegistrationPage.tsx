
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
        <div className="max-w-7xl mx-auto px-4 py-2">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <span>IndiaFilings</span>
            <ChevronRight className="w-4 h-4" />
            <span>Business Registration</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-blue-600">Company Registration</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid lg:grid-cols-4 gap-6">
          {/* Left Sidebar */}
          <div className="lg:col-span-1 space-y-4">
            {/* Business Registration Image and Documents */}
            <Card>
              <CardContent className="p-4">
                <div className="mb-4">
                  <img 
                    src="/lovable-uploads/b132edba-e6a4-4387-b25a-b8f0fdf97bb6.png" 
                    alt="Start a Business" 
                    className="w-full rounded-lg"
                  />
                </div>
                
                <div className="space-y-2 text-sm text-gray-600">
                  <div>PAN Card</div>
                  <div>Passport (Foreign Nationals Only)</div>
                  <div>Aadhaar Card</div>
                  <Button variant="link" className="text-blue-600 p-0 text-sm">
                    Load More
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="mb-4">
                <h1 className="text-xl font-bold text-gray-900 mb-2">Company Registration</h1>
                <div className="flex items-center space-x-2 mb-2">
                  <div className="flex items-center">
                    {[...Array(4)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                    <Star className="w-4 h-4 text-yellow-400 fill-current opacity-50" />
                  </div>
                  <span className="text-blue-600 text-sm">(12035)</span>
                </div>
                <p className="text-gray-600 text-sm">Instant Name Application for Company.</p>
              </div>

              <div className="mb-4">
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

              <div className="grid md:grid-cols-2 gap-4">
                {/* Name Approval Card */}
                <Card className="border-2 border-green-200">
                  <CardContent className="p-4">
                    <div className="mb-3">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                        3 Exclusive Offers
                      </span>
                    </div>
                    <h3 className="text-base font-semibold mb-3">Name Approval</h3>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <ChevronRight className="w-3 h-3 text-gray-400" />
                        <span className="text-xs">Name Application Fee</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <ChevronRight className="w-3 h-3 text-gray-400" />
                        <span className="text-xs">Instant Filing</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <ChevronRight className="w-3 h-3 text-gray-400" />
                        <span className="text-xs">4 Name Choice</span>
                      </div>
                    </div>
                    <div className="mt-4 space-y-2">
                      <div className="flex justify-between text-xs">
                        <span className="text-blue-600">Terms and conditions</span>
                        <span className="text-blue-600">Refer a Friend</span>
                      </div>
                    </div>
                    <Button 
                      className="w-full mt-4 bg-green-600 hover:bg-green-700 text-sm"
                      onClick={() => handleAddToCart({
                        id: 'name-approval',
                        title: 'Name Approval',
                        description: 'Company name approval service',
                        price: 1999
                      })}
                    >
                      ADD
                    </Button>
                  </CardContent>
                </Card>

                {/* Andaman and Nicobar Islands Card */}
                <Card className="border-2 border-green-200">
                  <CardContent className="p-4">
                    <div className="mb-3">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                        2 Exclusive Offers
                      </span>
                    </div>
                    <h3 className="text-base font-semibold mb-3">Andaman and Nicobar Islands</h3>
                    <div className="space-y-2 text-xs">
                      <div className="flex items-center space-x-2">
                        <ChevronRight className="w-3 h-3 text-gray-400" />
                        <span>MCA Name Approval</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <ChevronRight className="w-3 h-3 text-gray-400" />
                        <span>Company Incorporation</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <ChevronRight className="w-3 h-3 text-gray-400" />
                        <span>PAN & TAN Registration</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <ChevronRight className="w-3 h-3 text-gray-400" />
                        <span>Government Fee & Stamp Duty</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <ChevronRight className="w-3 h-3 text-gray-400" />
                        <span>2 DSCs (Hyper Tokens)</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <ChevronRight className="w-3 h-3 text-gray-400" />
                        <span>DSC Downloading & Shipping Support</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <ChevronRight className="w-3 h-3 text-gray-400" />
                        <span>Bank Account Opening Assistance</span>
                      </div>
                    </div>
                    <Button 
                      className="w-full mt-4 bg-green-600 hover:bg-green-700 text-sm"
                      onClick={() => handleAddToCart({
                        id: 'andaman-registration',
                        title: 'Andaman and Nicobar Islands Registration',
                        description: 'Complete company registration for Andaman and Nicobar Islands',
                        price: 6999
                      })}
                    >
                      ADD
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1 space-y-4">
            {/* Proprietorship Card */}
            <Card className="border border-gray-200">
              <CardContent className="p-3">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-8 h-8 bg-orange-100 rounded flex items-center justify-center">
                    <div className="w-4 h-4 bg-orange-500 rounded"></div>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium">Proprietorship</h3>
                    <p className="text-xs text-gray-600">Assam</p>
                  </div>
                  <div className="ml-auto flex space-x-1">
                    <div className="w-4 h-4 border border-green-500 rounded flex items-center justify-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="w-4 h-4 border border-gray-300 rounded"></div>
                    <div className="w-4 h-4 border border-gray-300 rounded"></div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Form */}
            <Card>
              <CardContent className="p-4">
                <div className="text-right mb-3">
                  <span className="text-xs text-gray-600">Existing User? </span>
                  <Button variant="link" className="text-green-600 p-0 text-xs">Login</Button>
                </div>

                <div className="space-y-3">
                  <Input placeholder="Name" className="text-sm" />
                  <Input placeholder="Email" type="email" className="text-sm" />
                  <div className="flex space-x-2">
                    <Select>
                      <SelectTrigger className="w-16">
                        <SelectValue placeholder="+91" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="+91">+91</SelectItem>
                      </SelectContent>
                    </Select>
                    <Input placeholder="Phone" className="flex-1 text-sm" />
                  </div>
                  <Input placeholder="How can we help you?" className="text-sm" />
                  
                  <p className="text-xs text-gray-500 text-center">
                    Enter GSTIN to get 18% GST Credit
                  </p>

                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white text-sm">
                    Get Started
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyRegistrationPage;
