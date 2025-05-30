
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      company: "Tech Startup Founder",
      rating: 5,
      text: "IndiaFilings made company registration incredibly simple. Their expert team guided us through every step, and we got our incorporation certificate within 7 days. Highly recommended!",
      avatar: "RK"
    },
    {
      name: "Priya Sharma",
      company: "E-commerce Business Owner",
      rating: 5,
      text: "Excellent service for trademark registration. The team was professional, responsive, and helped protect our brand efficiently. The entire process was transparent and hassle-free.",
      avatar: "PS"
    },
    {
      name: "Amit Patel",
      company: "Manufacturing Company",
      rating: 5,
      text: "Their compliance services have been a game-changer for our business. We never miss any filing deadlines, and their automated reminders keep us always compliant. Outstanding support!",
      avatar: "AP"
    },
    {
      name: "Sneha Reddy",
      company: "Consulting Firm",
      rating: 5,
      text: "Professional and reliable service. From LLP registration to ongoing compliance, they handle everything seamlessly. Their expertise in business regulations is truly impressive.",
      avatar: "SR"
    },
    {
      name: "Vikram Singh",
      company: "Import-Export Business",
      rating: 5,
      text: "Got our IEC license quickly and efficiently. The team's knowledge of import-export regulations saved us time and money. Will definitely use their services again.",
      avatar: "VS"
    },
    {
      name: "Meera Joshi",
      company: "Professional Services",
      rating: 5,
      text: "Tax filing made easy! Their CA team ensured maximum refunds and error-free filing. The online platform is user-friendly and the support is exceptional.",
      avatar: "MJ"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of satisfied customers who trust IndiaFilings for their business needs.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Quote className="w-8 h-8 text-blue-600 mb-4" />
                </div>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.company}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 bg-gray-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Trusted by Leading Organizations
            </h3>
            <p className="text-gray-600">
              We're recognized and certified by government bodies and industry associations
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {[
              "Government Certified",
              "ISO 9001:2015",
              "CA Firm Partner",
              "MSME Registered"
            ].map((badge, index) => (
              <div key={index} className="text-center">
                <div className="bg-white p-4 rounded-lg shadow-sm mb-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-full mx-auto flex items-center justify-center">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="font-semibold text-gray-800">{badge}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
