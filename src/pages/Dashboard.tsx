
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, FileText, AlertCircle, Calendar, Download, Eye } from 'lucide-react';

const Dashboard = () => {
  const services = [
    { 
      icon: FileText, 
      title: 'Registration', 
      count: 6,
      color: 'bg-blue-100 text-blue-600'
    },
    { 
      icon: FileText, 
      title: 'Accounting', 
      count: 4,
      color: 'bg-green-100 text-green-600'
    },
    { 
      icon: FileText, 
      title: 'Compliance', 
      count: 8,
      color: 'bg-purple-100 text-purple-600'
    },
    { 
      icon: FileText, 
      title: 'Payroll', 
      count: 3,
      color: 'bg-orange-100 text-orange-600'
    },
    { 
      icon: FileText, 
      title: 'GST Filing', 
      count: 7,
      color: 'bg-red-100 text-red-600'
    },
    { 
      icon: FileText, 
      title: 'Labour Law', 
      count: 2,
      color: 'bg-yellow-100 text-yellow-600'
    }
  ];

  const updates = [
    {
      title: 'Attention Transport Executives (GSTR-4B) vs KP 2022-23 via new link - File',
      type: 'Update',
      date: '25-Jan-2024',
      badge: 'File Reminder'
    },
    {
      title: 'Subsidies on GST Jan-2024',
      type: 'Update',
      date: '30-May-2023',
      badge: 'File Reminder'
    },
    {
      title: 'NCA extends belated GSTR-4 filing process for 2023, upto April 24 for FY 2023-24',
      type: 'Update', 
      date: '17-May-2023',
      badge: 'File Reminder'
    },
    {
      title: 'FIP Filing Due Date for 2023-24 extended to May September 2023 - Filing in',
      type: 'Update',
      date: '07-May-2023',
      badge: 'File Reminder Extended'
    }
  ];

  const dueDetails = [
    {
      title: 'TDS / TCS Payments for May 2023',
      type: 'Due Details',
      date: '30-Jun-2023',
      dueDate: '07-May-2023'
    },
    {
      title: 'GSTR-3B Payment for May 2023',
      type: 'Due Details', 
      date: '16-Jun-2023',
      dueDate: '20-Jun-2023'
    },
    {
      title: 'GSTR-1(PY) Payment(May 2023) for CGFDR',
      type: 'Due Details',
      date: '30-Jun-2023',
      dueDate: '11-Jun-2023'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">TDS Filing & Form 16 Issuance</h1>
            <div className="text-sm text-gray-600">
              Simplify with IndiaFilings
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-6">
          {/* Left Section - Services */}
          <div className="lg:col-span-3 space-y-6">
            {/* Hero Section */}
            <Card className="bg-gradient-to-r from-green-400 to-green-600 text-white">
              <CardContent className="p-8">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">TDS Filing & Form 16 Issuance</h2>
                    <p className="text-green-100">Simplify with IndiaFilings</p>
                  </div>
                  <div className="hidden md:block">
                    <img 
                      src="/lovable-uploads/441a830a-20d9-4b5d-acb4-7bea2116951f.png" 
                      alt="Business person" 
                      className="w-48 h-32 object-cover rounded-lg"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Services Grid */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Explore our digital services stack</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {services.map((service, index) => {
                  const IconComponent = service.icon;
                  return (
                    <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer">
                      <CardContent className="p-4 text-center">
                        <div className={`w-12 h-12 rounded-lg ${service.color} flex items-center justify-center mx-auto mb-3`}>
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <h4 className="font-medium text-sm">{service.title}</h4>
                        <p className="text-xs text-gray-500 mt-1">{service.count} services</p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Updates & Alerts */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-blue-600" />
                  Updates & Alerts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {updates.map((update, index) => (
                    <div key={index} className="flex items-start justify-between p-3 border rounded-lg">
                      <div className="flex-1">
                        <h4 className="font-medium text-sm mb-1">{update.title}</h4>
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <span>Published on: {update.date}</span>
                          <Badge variant="secondary" className="text-xs">{update.badge}</Badge>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          <Eye className="w-3 h-3" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Download className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Due Details */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-orange-600">
                  <Calendar className="w-5 h-5" />
                  Due Details
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {dueDetails.map((item, index) => (
                    <div key={index} className="p-3 border rounded-lg">
                      <h4 className="font-medium text-sm mb-2">{item.title}</h4>
                      <div className="text-xs text-gray-500 space-y-1">
                        <p>Last Date: {item.date}</p>
                        <p>Due Date: {item.dueDate}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Our Story */}
            <Card>
              <CardHeader>
                <CardTitle>Our Story!</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  We are on a mission to make entrepreneurship easier and affordable to millions. 
                  IndiaFilings provides a simple and intuitive platform for starting up a business and 
                  managing regulatory compliance.
                </p>
                <div className="bg-black text-white p-3 rounded text-center">
                  <p className="text-sm">Since 2011, serving over 1 lakh businesses.</p>
                  <p className="text-xs">In 2022, we raised funding from institutional investors.</p>
                </div>
              </CardContent>
            </Card>

            {/* Our Clients */}
            <Card>
              <CardHeader>
                <CardTitle>Our Clients!</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-gray-100 p-2 rounded text-center">
                    <span className="text-xs font-medium">Brand 1</span>
                  </div>
                  <div className="bg-gray-100 p-2 rounded text-center">
                    <span className="text-xs font-medium">Brand 2</span>
                  </div>
                  <div className="bg-gray-100 p-2 rounded text-center">
                    <span className="text-xs font-medium">Brand 3</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Industry Partnerships */}
            <Card>
              <CardHeader>
                <CardTitle>Industry leading partnerships</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-gray-600 mb-3">
                  We work with top Indian institutions to further our shared mission of improving ease of doing business.
                </p>
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-gray-100 p-2 rounded text-center">
                    <span className="text-xs font-medium">Partner 1</span>
                  </div>
                  <div className="bg-gray-100 p-2 rounded text-center">
                    <span className="text-xs font-medium">Partner 2</span>
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

export default Dashboard;
