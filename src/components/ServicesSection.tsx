
import React from 'react';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Building, FileText, Shield, Calculator, Users, Globe } from 'lucide-react';
import { useCart } from '@/hooks/useCart';
import { toast } from 'sonner';

const ServicesSection = () => {
  const { addItem } = useCart();

  const services = [
    {
      id: 'private-limited',
      icon: Building,
      title: 'Private Limited Company',
      description: 'Start your business with limited liability protection and credibility.',
      price: 6999,
      features: ['Name Approval', 'Digital Signature', 'Company Incorporation', 'PAN & TAN'],
      popular: true,
    },
    {
      id: 'gst-registration',
      icon: FileText,
      title: 'GST Registration',
      description: 'Get GST registration to sell your products and services legally.',
      price: 2999,
      features: ['GST Number', 'GST Certificate', 'Return Filing Support', 'Expert Guidance'],
    },
    {
      id: 'trademark',
      icon: Shield,
      title: 'Trademark Registration',
      description: 'Protect your brand name and logo with trademark registration.',
      price: 4999,
      features: ['Trademark Search', 'Application Filing', 'Government Fees', 'Expert Support'],
    },
    {
      id: 'income-tax',
      icon: Calculator,
      title: 'Income Tax Filing',
      description: 'File your income tax returns with expert assistance.',
      price: 1999,
      features: ['Tax Calculation', 'Form Preparation', 'E-filing', 'Expert Review'],
    },
    {
      id: 'partnership',
      icon: Users,
      title: 'Partnership Registration',
      description: 'Register your partnership firm and formalize your business.',
      price: 3999,
      features: ['Partnership Deed', 'Registration Certificate', 'PAN Application', 'Bank Account'],
    },
    {
      id: 'fssai',
      icon: Globe,
      title: 'FSSAI Registration',
      description: 'Get food license to start your food business legally.',
      price: 2499,
      features: ['FSSAI License', 'Certificate', 'Compliance Support', 'Renewal Assistance'],
    },
  ];

  const handleAddToCart = (service: any) => {
    addItem({
      id: service.id,
      name: service.title,
      description: service.description,
      price: service.price,
    });
    
    toast.success(`${service.title} added to cart!`, {
      action: {
        label: "Proceed to Payment",
        onClick: () => {
          // Redirect to payment page
          window.location.href = '/payment';
        },
      },
    });
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 enhanced-contrast-dark">
            Popular Business Services
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto enhanced-contrast-dark">
            Choose from our most popular services to start, manage, and grow your business with expert guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className={`bg-white rounded-xl shadow-lg p-6 lg:p-8 hover:shadow-xl transition-all duration-300 relative service-card-hover ${
                  service.popular ? 'ring-2 ring-blue-500' : ''
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="flex flex-col sm:flex-row items-start sm:items-center mb-6">
                  <div className="bg-blue-100 p-3 rounded-lg mr-0 sm:mr-4 mb-4 sm:mb-0">
                    <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
                  </div>
                  <div className="text-center sm:text-left">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1">{service.title}</h3>
                    <p className="text-xl sm:text-2xl font-bold text-blue-600">₹{service.price}</p>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 text-sm sm:text-base">{service.description}</p>

                <ul className="space-y-2 mb-6 sm:mb-8">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="space-y-3">
                  <Button 
                    className="w-full gradient-bg text-white hover:opacity-90 enhanced-button button-glow"
                    onClick={() => handleAddToCart(service)}
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Add to Cart
                  </Button>
                  <Button variant="outline" className="w-full border-blue-600 text-blue-600 enhanced-button">
                    Learn More
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <Button className="gradient-bg text-white text-base sm:text-lg px-6 sm:px-8 py-2 sm:py-3 enhanced-button button-glow">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
