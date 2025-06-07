
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

const DocumentsSection = () => {
  const documents = [
    {
      title: "PAN Card",
      description: "PAN Number for Indian Directors",
      required: ["Documents Required for LLP Registration", "Documents Required for Partnership Registration", "Documents Required for Trademark Registration", "Documents Required for GST Registration", "Documents Required for Partnership Registration"]
    },
    {
      title: "Passport (Foreign Nationals Only)",
      description: "Passport is mandatory for Foreign Directors or Shareholders",
      required: ["Documents Required for LLP Registration", "Documents Required for Partnership Registration", "Documents Required for Trademark Registration", "Documents Required for GST Registration", "Documents Required for Partnership Registration"]
    },
    {
      title: "Aadhar Card",
      description: "Aadhar is mandatory for Indian Directors",
      required: ["Documents Required for LLP Registration", "Documents Required for Partnership Registration", "Documents Required for Trademark Registration", "Documents Required for GST Registration", "Documents Required for Partnership Registration"]
    }
  ];

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
          Documents Required For Company Registration
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {documents.map((doc, index) => (
            <Card key={index} className="bg-white">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{doc.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{doc.description}</p>
                
                <div className="space-y-2">
                  {doc.required.map((req, reqIndex) => (
                    <div key={reqIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-blue-600" />
                      <span className="text-xs text-blue-600">{req}</span>
                    </div>
                  ))}
                </div>
                
                {index === 0 && (
                  <Button variant="outline" className="w-full mt-4 text-sm">
                    Load More
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DocumentsSection;
