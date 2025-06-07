
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const FAQSection = () => {
  const faqs = [
    "What is the registration process of a company?",
    "How much is the private limited company registration fees?",
    "What are the types of registration?",
    "Can NRIs or Foreign national or foreign entities register a company in India?",
    "How do I check the availability of names for my company?",
    "Is GST registration mandatory at this stage?",
    "What are the compliances of a Private Limited Company?",
    "How to register a private limited company in India?",
    "Which Form is to be filed for the LLP filing of Private Limited Company?",
    "Which Form is to be filed for the filing for Private Limited Company?"
  ];

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* FAQ Section */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Company Registration FAQ's</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Card key={index} className="bg-white">
                  <CardContent className="p-4">
                    <p className="text-gray-700 text-sm">{faq}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Registration Cards */}
          <div className="lg:col-span-2 space-y-4">
            <Card className="bg-blue-600 text-white">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2">OPC REGISTRATION</h3>
                <p className="text-sm mb-4">Complete OPC incorporation services with Legal Support</p>
                <div className="mb-4">
                  <img src="/lovable-uploads/e7711b6a-5564-400c-b9e5-c5a91e09a85d.png" alt="Professional" className="w-24 h-24 mx-auto rounded-full object-cover" />
                </div>
                <p className="text-sm font-medium">OPC Registration</p>
              </CardContent>
            </Card>

            <Card className="bg-blue-600 text-white">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2">LLP REGISTRATION</h3>
                <p className="text-sm mb-4">Instant Service ✓ Expert Guidance</p>
                <Button className="bg-green-500 hover:bg-green-600 text-white w-full mb-2">
                  Live chat with Expert
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
