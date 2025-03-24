
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';
import { Button } from '../components/ui/button';
import { ArrowRight, Check } from 'lucide-react';

const Company = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen bg-teko-black">
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              {t('company.title')}
            </h1>
            <p className="text-teko-white/70 max-w-2xl mx-auto">
              {t('company.description')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Pricing Plans */}
            {['starter', 'business', 'enterprise'].map((plan, index) => (
              <div 
                key={plan}
                className={`relative overflow-hidden rounded-xl border backdrop-blur-sm animate-on-scroll ${
                  plan === 'business' 
                    ? 'border-teko-purple/50 bg-teko-purple/10 transform md:scale-105 z-10' 
                    : 'border-white/10 bg-white/5'
                }`}
                style={{ transitionDelay: `${0.1 * index}s` }}
              >
                {plan === 'business' && (
                  <div className="absolute top-0 left-0 w-full bg-teko-purple text-white text-xs font-medium py-1 text-center">
                    {t('company.popular')}
                  </div>
                )}
                
                <div className="p-6 pt-8">
                  <h3 className="text-xl font-display font-bold mb-2">
                    {t(`company.plans.${plan}.title`)}
                  </h3>
                  
                  <div className="mb-6">
                    <span className="text-3xl font-display font-bold text-teko-purple-light">
                      {t(`company.plans.${plan}.price`)}
                    </span>
                    <span className="text-teko-white/70 ml-1">/ {t(`company.plans.${plan}.period`)}</span>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {[1, 2, 3, 4].map((i) => (
                      <li key={i} className="flex items-start">
                        <Check size={18} className="text-teko-purple-light mt-0.5 mr-2 flex-shrink-0" />
                        <span className="text-teko-white/80 text-sm">
                          {t(`company.plans.${plan}.features.${i}`)}
                        </span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full ${
                      plan === 'business' 
                        ? 'bg-teko-purple hover:bg-teko-purple-dark text-white' 
                        : 'bg-white/10 hover:bg-white/20 text-teko-white/90'
                    }`}
                  >
                    {t('company.plans.button')}
                    <ArrowRight className="ml-2" size={16} />
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-20 text-center">
            <h2 className="text-2xl font-display font-bold mb-6 animate-on-scroll">
              {t('company.cta.title')}
            </h2>
            <p className="text-teko-white/70 max-w-2xl mx-auto mb-8 animate-on-scroll">
              {t('company.cta.description')}
            </p>
            <Button 
              className="bg-teko-purple hover:bg-teko-purple-dark text-white px-8 py-6 animate-on-scroll"
              asChild
            >
              <a href="/problem-brief">
                {t('company.cta.button')}
              </a>
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Company;
