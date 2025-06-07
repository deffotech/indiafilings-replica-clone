
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const ComparisonSection = () => {
  const comparisonData = [
    {
      category: "Features",
      proprietorship: "Sole Decision",
      partnership: "Mutual agreement between Partners, as a majority or unanimous decision",
      llp: "A Limited Liability Partnership is a legal structure allowing partners to limit their liability without giving up management controls",
      company: "Board will have all powers, and shareholders have dividend distributions"
    },
    {
      category: "Definition",
      proprietorship: "Unincorporated form of Business entity owned by one single person",
      partnership: "A formal agreement between two or more persons to manage and own a business",
      llp: "Partners are responsible for their own conduct of a professional firm, and have limited personal and financial liabilities",
      company: "Registered legal body with complex structure and shareholders"
    },
    {
      category: "Ownership",
      proprietorship: "Sole Ownership",
      partnership: "Min 2 Partners, Max 50 partners",
      llp: "Designated Partners, Min 2 LLP partners",
      company: "Min 2 Directors, Max 200 Shareholders, Limited Liability, Transferable Ownership"
    }
  ];

  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
          Proprietorship vs Limited Liability Partnership (LLP) vs Company
        </h2>
        
        <Card>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b bg-gray-50">
                    <th className="text-left p-4 font-semibold text-gray-900">Features</th>
                    <th className="text-left p-4 font-semibold text-gray-900">Proprietorship</th>
                    <th className="text-left p-4 font-semibold text-gray-900">Partnership</th>
                    <th className="text-left p-4 font-semibold text-gray-900">LLP</th>
                    <th className="text-left p-4 font-semibold text-gray-900">Company</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr key={index} className="border-b hover:bg-gray-50">
                      <td className="p-4 font-medium text-gray-900">{row.category}</td>
                      <td className="p-4 text-gray-700 text-sm">{row.proprietorship}</td>
                      <td className="p-4 text-gray-700 text-sm">{row.partnership}</td>
                      <td className="p-4 text-gray-700 text-sm">{row.llp}</td>
                      <td className="p-4 text-gray-700 text-sm">{row.company}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ComparisonSection;
