
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Building2, 
  FileText, 
  Shield, 
  Calculator, 
  Briefcase, 
  Globe,
  ArrowRight,
  TrendingUp
} from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Building2,
      title: "Company Registration",
      description: "Register your Private Limited Company, LLP, OPC, or Partnership firm",
      price: "Starting ₹6,999",
      features: ["Digital Process", "Expert Support", "Quick Turnaround"],
      color: "bg-blue-500"
    },
    {
      icon: FileText,
      title: "Compliance Services",
      description: "Annual filings, board meetings, and statutory compliance management",
      price: "Starting ₹2,999",
      features: ["Automated Reminders", "Expert Filing", "100% Compliance"],
      color: "bg-green-500"
    },
    {
      icon: Shield,
      title: "Trademark Registration",
      description: "Protect your brand with trademark registration and IP services",
      price: "Starting ₹9,999",
      features: ["Brand Protection", "Legal Support", "Fast Processing"],
      color: "bg-purple-500"
    },
    {
      icon: Calculator,
      title: "Tax Filing",
      description: "Income tax filing, GST registration and returns for individuals and businesses",
      price: "Starting ₹1,499",
      features: ["Expert CAs", "Maximum Refund", "Error-Free Filing"],
      color: "bg-orange-500"
    },
    {
      icon: Briefcase,
      title: "Business Licenses",
      description: "Get all required business licenses and permits for your industry",
      price: "Starting ₹4,999",
      features: ["Industry Specific", "End-to-End Service", "Expert Guidance"],
      color: "bg-teal-500"
    },
    {
      icon: Globe,
      title: "Import Export License",
      description: "IEC code registration and export-import documentation services",
      price: "Starting ₹3,999",
      features: ["IEC Registration", "Documentation", "Trade Support"],
      color: "bg-indigo-500"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Complete Business Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From company registration to ongoing compliance, we provide end-to-end business services 
            to help you focus on growing your business.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <div className={`w-12 h-12 ${service.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    {service.description}
                  </p>
                  
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-500">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="border-t pt-4">
                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-bold text-blue-600">
                        {service.price}
                      </div>
                      <Button className="group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        Get Started
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "5L+", label: "Companies Registered", icon: Building2 },
              { number: "50K+", label: "Happy Customers", icon: TrendingUp },
              { number: "15+", label: "Years Experience", icon: Shield },
              { number: "99%", label: "Success Rate", icon: Calculator }
            ].map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                    <IconComponent className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
