
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const OffersSection = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Left Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="mb-6">
                <img 
                  src="/lovable-uploads/b132edba-e6a4-4387-b25a-b8f0fdf97bb6.png" 
                  alt="Start a Business" 
                  className="w-full rounded-lg"
                />
              </div>
              
              <div className="space-y-4">
                <div className="text-sm text-gray-600">PAN Card</div>
                <div className="text-sm text-gray-600">Passport (Foreign Nationals Only)</div>
                <div className="text-sm text-gray-600">Aadhaar Card</div>
                <Button variant="link" className="text-blue-600 p-0 text-sm">
                  Load More
                </Button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="mb-6">
                <div className="flex space-x-8 mb-4">
                  <Button variant="link" className="text-blue-600 p-0">
                    Terms and conditions
                  </Button>
                  <Button variant="link" className="text-blue-600 p-0">
                    Refer a Friend
                  </Button>
                </div>
                <h2 className="text-xl font-semibold mb-4">Offers and discounts</h2>
              </div>

              <div className="space-y-6">
                {/* LEDGERS Offer */}
                <div className="flex items-start space-x-4 p-4 border rounded-lg">
                  <div className="w-10 h-10 bg-red-100 rounded flex items-center justify-center flex-shrink-0">
                    <div className="w-6 h-6 bg-gradient-to-br from-red-500 to-orange-500 rounded"></div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-blue-600 mb-1">
                      LEDGERS - Compliance Platform
                    </h3>
                    <p className="text-gray-600">Invoicing, GST Filing, Banking and Payroll</p>
                  </div>
                </div>

                {/* South Indian Bank Offer */}
                <div className="flex items-start space-x-4 p-4 border rounded-lg">
                  <div className="w-10 h-10 bg-red-100 rounded flex items-center justify-center flex-shrink-0">
                    <div className="w-6 h-6 bg-gradient-to-br from-red-600 to-red-800 rounded"></div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-blue-600 mb-1">
                      South Indian Bank - Current Account Opening
                    </h3>
                    <p className="text-gray-600">Exclusive benefits for startups*</p>
                  </div>
                </div>

                {/* GST Registration Offer */}
                <div className="flex items-start space-x-4 p-4 border rounded-lg">
                  <div className="w-10 h-10 bg-blue-100 rounded flex items-center justify-center flex-shrink-0">
                    <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-blue-700 rounded"></div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-blue-600 mb-1">
                      Save 18% with GST Registration
                    </h3>
                    <p className="text-gray-600">Get GST eInvoice with Input Tax Credit</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar - Contact Form */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardContent className="p-6">
                <div className="text-right mb-4">
                  <span className="text-sm text-gray-600">Existing User? </span>
                  <Button variant="link" className="text-green-600 p-0">Login</Button>
                </div>

                <div className="space-y-4">
                  <Input placeholder="Name" />
                  <Input placeholder="Email" type="email" />
                  <div className="flex space-x-2">
                    <Select>
                      <SelectTrigger className="w-20">
                        <SelectValue placeholder="+91" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="+91">+91</SelectItem>
                        <SelectItem value="+1">+1</SelectItem>
                        <SelectItem value="+44">+44</SelectItem>
                      </SelectContent>
                    </Select>
                    <Input placeholder="Phone" className="flex-1" />
                  </div>
                  <Input placeholder="How can we help you?" />
                  
                  <div className="text-center">
                    <p className="text-sm text-gray-600 mb-4">Enter GSTIN to get 18% GST Credit</p>
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                      Get Started
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OffersSection;
