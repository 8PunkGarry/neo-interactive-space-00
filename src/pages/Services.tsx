
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ServiceGrid from '../components/ServiceGrid';
import { useLanguage } from '../context/LanguageContext';

const Services = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen bg-teko-black">
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              {t('services.title')}
            </h1>
            <p className="text-teko-white/70 max-w-2xl mx-auto">
              {t('services.description')}
            </p>
          </div>
          
          <ServiceGrid />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Services;
