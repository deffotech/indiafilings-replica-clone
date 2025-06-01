
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const CompanyRegistrationPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Left Sidebar - Document Requirements */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-6">
                <div className="mb-6">
                  <img 
                    src="/lovable-uploads/b132edba-e6a4-4387-b25a-b8f0fdf97bb6.png" 
                    alt="Start a Business" 
                    className="w-full rounded-lg"
                  />
                </div>
                
                <div className="space-y-4">
                  <div className="text-sm text-gray-700 font-medium">PAN Card</div>
                  <div className="text-sm text-gray-700">Passport (Foreign Nationals Only)</div>
                  <div className="text-sm text-gray-700">Aadhaar Card</div>
                  <Button variant="link" className="text-blue-600 p-0 text-sm font-medium">
                    Load More
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="space-y-8">
              {/* Terms and Conditions / Refer a Friend Section */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-blue-600 text-lg font-medium mb-4">Terms and conditions</h3>
                </div>
                <div>
                  <h3 className="text-blue-600 text-lg font-medium mb-4">Refer a Friend</h3>
                </div>
              </div>

              {/* Offers and Discounts Section */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Offers and discounts</h2>
                
                <div className="space-y-6">
                  {/* LEDGERS Offer */}
                  <Card className="border border-gray-200 hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-red-500 rounded"></div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-blue-600 mb-2">
                            LEDGERS - Compliance Platform
                          </h3>
                          <p className="text-gray-600">
                            Invoicing, GST Filing, Banking and Payroll
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* South Indian Bank Offer */}
                  <Card className="border border-gray-200 hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <div className="w-8 h-8 bg-gradient-to-br from-red-400 to-red-600 rounded"></div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-blue-600 mb-2">
                            South Indian Bank - Current Account Opening
                          </h3>
                          <p className="text-gray-600">
                            Exclusive benefits for startups*
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* GST Registration Offer */}
                  <Card className="border border-gray-200 hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded"></div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-blue-600 mb-2">
                            Save 18% with GST Registration
                          </h3>
                          <p className="text-gray-600">
                            Get GST eInvoice with Input Tax Credit
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar - Contact Form */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardContent className="p-6">
                <div className="mb-6">
                  <div className="text-right text-sm text-gray-600 mb-6">
                    <span>Existing User? </span>
                    <Button variant="link" className="text-green-600 p-0 font-medium">Login</Button>
                  </div>

                  <div className="space-y-4">
                    <Input placeholder="Name" className="w-full" />
                    <Input placeholder="Email" type="email" className="w-full" />
                    <div className="flex space-x-2">
                      <Select>
                        <SelectTrigger className="w-20">
                          <SelectValue placeholder="🇮🇳" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="in">🇮🇳 +91</SelectItem>
                        </SelectContent>
                      </Select>
                      <Input placeholder="Phone" className="flex-1" />
                    </div>
                    <Textarea 
                      placeholder="How can we help you?" 
                      className="w-full min-h-[100px]" 
                    />
                  </div>

                  <div className="mt-6">
                    <p className="text-sm text-gray-600 mb-4">
                      Enter GSTIN to get 18% GST Credit
                    </p>
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-3">
                      Get Started
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* WhatsApp Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full shadow-lg flex items-center space-x-2">
          <span>💬</span>
          <span>Live Chat with Experts</span>
        </Button>
      </div>
    </div>
  );
};

export default CompanyRegistrationPage;
