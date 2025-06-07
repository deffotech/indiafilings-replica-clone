
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import CompanyRegistrationPage from '@/components/CompanyRegistrationPage';
import OffersSection from '@/components/OffersSection';
import CompanyInfoSection from '@/components/CompanyInfoSection';
import DocumentsSection from '@/components/DocumentsSection';
import ComparisonSection from '@/components/ComparisonSection';
import FAQSection from '@/components/FAQSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <CompanyRegistrationPage />
      <DocumentsSection />
      <ComparisonSection />
      <OffersSection />
      <FAQSection />
      <CompanyInfoSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
