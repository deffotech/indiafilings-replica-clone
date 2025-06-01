
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const CompanyRegistrationPage = () => {
  const relatedGuides = [
    "What is a private limited company India?",
    "What are the advantages and disadvantages of a private limited company?",
    "Private Limited Company Registration",
    "How do you name a Private Limited company?",
    "How to open a current account for a Private Limited Company?",
    "CIN Number of a Company: Everything You Need to Know",
    "What is One Person Company? A Guide to Private Limited"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
                Private Limited Company Registration in India
              </h1>
              
              <div className="prose max-w-none text-gray-700 space-y-6">
                <p className="text-lg leading-relaxed">
                  Setting up a business in India often involves choosing a private limited company as a preferred option. This structure offers 
                  shareholders limited liability protection while placing specific ownership constraints. In contrast, in the case of an LLP, 
                  partners oversee the management. Private limited company registration allows for a clear distinction between directors and 
                  shareholders.
                </p>
                
                <p className="text-lg leading-relaxed">
                  At IndiaFilings, we offer a cost-effective service to register new company, registration of startup in India and facilitate 
                  seamless private limited company registration in india. We handle all legal formalities for online PVT LTD company registration 
                  in India, ensuring strict compliance with the Ministry of Corporate Affairs (MCA) regulations.
                </p>
                
                <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                  What is a private limited company?
                </h2>
                
                <p className="text-lg leading-relaxed">
                  In India, a private limited company is a privately held entity with limited liability, and it ranks among the nation's most favored 
                  business structures. This popularity is primarily attributed to its numerous advantages, including limited liability protection, 
                  ease of formation and maintenance, and its status as a distinct legal entity. This encourages a prospective businessman to 
                  engage in the incorporation of private limited company. A private limited company enjoys legal separation from its owners and 
                  necessitates a minimum of two members and two directors for its operation. Here are the key characteristics of a private 
                  limited company in India, which justify the PVT LTD company registration:
                </p>
              </div>
            </div>
          </div>

          {/* Right Sidebar - Related Guides */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Related Guides</h3>
                
                <div className="space-y-4">
                  {relatedGuides.map((guide, index) => (
                    <Button
                      key={index}
                      variant="link"
                      className="text-blue-600 text-left p-0 h-auto text-sm font-normal leading-relaxed hover:underline"
                      asChild
                    >
                      <a href="#" className="block">
                        {guide}
                      </a>
                    </Button>
                  ))}
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
