
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
          
          <div className="mt-20 max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
              <div className="animate-on-scroll">
                <h2 className="text-2xl font-display font-bold mb-6 text-teko-purple-light">
                  {t('services.approach.title')}
                </h2>
                <p className="text-teko-white/80 mb-6">
                  {t('services.approach.description')}
                </p>
                <ul className="space-y-4">
                  {[1, 2, 3, 4].map((i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-teko-purple/20 flex items-center justify-center mt-0.5">
                        <span className="text-teko-purple font-bold text-sm">{i}</span>
                      </div>
                      <p className="text-teko-white/80">
                        {t(`services.approach.step${i}`)}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="glass-card rounded-xl p-8 animate-on-scroll" style={{ transitionDelay: "0.1s" }}>
                <h2 className="text-2xl font-display font-bold mb-6 text-teko-purple-light">
                  {t('services.benefits.title')}
                </h2>
                <ul className="space-y-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 text-teko-purple">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                      </div>
                      <p className="text-teko-white/80">
                        {t(`services.benefits.benefit${i}`)}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="glass-card p-8 rounded-xl animate-on-scroll">
              <h2 className="text-2xl font-display font-bold mb-6 text-center text-teko-purple-light">
                {t('services.cta.title')}
              </h2>
              <p className="text-teko-white/80 text-center mb-8">
                {t('services.cta.description')}
              </p>
              <div className="flex justify-center">
                <a 
                  href="/problem-brief" 
                  className="group relative overflow-hidden rounded-lg bg-teko-purple px-6 py-3 text-white text-lg font-medium transition-all duration-300 hover:bg-teko-purple-dark"
                >
                  <span className="relative z-10">{t('services.cta.button')}</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-teko-purple to-teko-gradient-end opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Services;
