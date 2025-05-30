
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CheckCircle, Star, Users, Award, Clock } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="gradient-bg hero-pattern text-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Start Your Business
                <span className="block text-orange-400">in 7 Days</span>
              </h1>
              <p className="text-xl text-blue-100 max-w-lg">
                India's most trusted platform for company registration, compliance, and business services. Over 5 lakh+ companies registered.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-1">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <span className="font-semibold">4.8/5</span>
                <span className="text-blue-200">Rating</span>
              </div>
              <div className="flex items-center space-x-1">
                <Users className="w-5 h-5 text-blue-300" />
                <span className="font-semibold">5L+</span>
                <span className="text-blue-200">Happy Customers</span>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-3">
              {[
                "Government Approved Process",
                "Expert CA & CS Support",
                "100% Online Process",
                "Fastest Turnaround Time"
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-blue-100">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg">
                Register Your Company
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg">
                Free Consultation
              </Button>
            </div>
          </div>

          {/* Right Content - Service Cards */}
          <div className="space-y-6">
            <Card className="p-6 bg-white/10 backdrop-blur border-white/20">
              <div className="flex items-start space-x-4">
                <div className="bg-orange-500 p-3 rounded-lg">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Private Limited Company
                  </h3>
                  <p className="text-blue-100 mb-4">
                    Most popular choice for startups and growing businesses
                  </p>
                  <div className="text-2xl font-bold text-orange-400 mb-2">
                    ₹6,999 + Govt. Fees
                  </div>
                  <Button className="bg-white text-blue-600 hover:bg-blue-50">
                    Get Started
                  </Button>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-white/10 backdrop-blur border-white/20">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-500 p-3 rounded-lg">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    LLP Registration
                  </h3>
                  <p className="text-blue-100 mb-4">
                    Perfect for professional services and partnerships
                  </p>
                  <div className="text-2xl font-bold text-orange-400 mb-2">
                    ₹4,999 + Govt. Fees
                  </div>
                  <Button className="bg-white text-blue-600 hover:bg-blue-50">
                    Learn More
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
