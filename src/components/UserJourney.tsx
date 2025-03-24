
import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight, Users, Building } from 'lucide-react';

const UserJourney = () => {
  const { t } = useLanguage();
  const [hoveredCard, setHoveredCard] = useState<'client' | 'company' | null>(null);

  const handleMouseEnter = (card: 'client' | 'company') => {
    setHoveredCard(card);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  return (
    <section id="journey" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/3 w-64 h-64 bg-teko-purple/20 rounded-full filter blur-[80px]"></div>
        <div className="absolute bottom-0 right-1/3 w-64 h-64 bg-teko-purple/15 rounded-full filter blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 animate-on-scroll">
            {t('journey.title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Client Card */}
          <div 
            className={`relative overflow-hidden rounded-xl transition-all duration-500 animate-on-scroll ${
              hoveredCard === 'client' 
                ? 'bg-gradient-to-br from-teko-purple/20 to-teko-purple/5 scale-105 z-10' 
                : 'bg-white/5 backdrop-blur-sm'
            }`}
            onMouseEnter={() => handleMouseEnter('client')}
            onMouseLeave={handleMouseLeave}
            style={{ transitionDelay: '0.1s' }}
          >
            <div className="p-8 border border-white/10 rounded-xl h-full flex flex-col">
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-all duration-500 ${
                hoveredCard === 'client' ? 'bg-teko-purple text-white' : 'bg-white/10 text-teko-purple-light'
              }`}>
                <Users size={30} />
              </div>
              
              <h3 className="text-2xl font-display font-bold mb-4">{t('journey.client')}</h3>
              <p className="text-teko-white/70 mb-6 flex-grow">{t('journey.client.description')}</p>
              
              <a 
                href="/client" 
                className={`inline-flex items-center text-base font-medium transition-all duration-300 ${
                  hoveredCard === 'client' ? 'text-teko-purple-light' : 'text-teko-white/80'
                }`}
              >
                {t('journey.button')} 
                <ArrowRight className={`ml-2 transition-transform duration-300 ${
                  hoveredCard === 'client' ? 'transform translate-x-1' : ''
                }`} size={16} />
              </a>
            </div>
            
            {/* Corner Glow */}
            <div className={`absolute -bottom-10 -right-10 w-40 h-40 rounded-full transition-opacity duration-500 ${
              hoveredCard === 'client' ? 'opacity-30 bg-teko-purple' : 'opacity-0 bg-transparent'
            } blur-2xl`}></div>
          </div>

          {/* Company Card */}
          <div 
            className={`relative overflow-hidden rounded-xl transition-all duration-500 animate-on-scroll ${
              hoveredCard === 'company' 
                ? 'bg-gradient-to-br from-teko-purple/20 to-teko-purple/5 scale-105 z-10' 
                : 'bg-white/5 backdrop-blur-sm'
            }`}
            onMouseEnter={() => handleMouseEnter('company')}
            onMouseLeave={handleMouseLeave}
            style={{ transitionDelay: '0.2s' }}
          >
            <div className="p-8 border border-white/10 rounded-xl h-full flex flex-col">
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-all duration-500 ${
                hoveredCard === 'company' ? 'bg-teko-purple text-white' : 'bg-white/10 text-teko-purple-light'
              }`}>
                <Building size={30} />
              </div>
              
              <h3 className="text-2xl font-display font-bold mb-4">{t('journey.company')}</h3>
              <p className="text-teko-white/70 mb-6 flex-grow">{t('journey.company.description')}</p>
              
              <a 
                href="/company" 
                className={`inline-flex items-center text-base font-medium transition-all duration-300 ${
                  hoveredCard === 'company' ? 'text-teko-purple-light' : 'text-teko-white/80'
                }`}
              >
                {t('journey.button')} 
                <ArrowRight className={`ml-2 transition-transform duration-300 ${
                  hoveredCard === 'company' ? 'transform translate-x-1' : ''
                }`} size={16} />
              </a>
            </div>
            
            {/* Corner Glow */}
            <div className={`absolute -bottom-10 -right-10 w-40 h-40 rounded-full transition-opacity duration-500 ${
              hoveredCard === 'company' ? 'opacity-30 bg-teko-purple' : 'opacity-0 bg-transparent'
            } blur-2xl`}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserJourney;
