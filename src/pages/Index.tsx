
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import CompanyRegistrationPage from '@/components/CompanyRegistrationPage';
import OffersSection from '@/components/OffersSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <CompanyRegistrationPage />
      <OffersSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
