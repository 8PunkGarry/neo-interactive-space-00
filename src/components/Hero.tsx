
import React, { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import AnimatedLogo from './AnimatedLogo';
import { Star } from 'lucide-react';

const Hero = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set animation visible after a short delay for entrance effect
    const timer = setTimeout(() => setIsVisible(true), 300);
    
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      {/* Simplified Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Single animated background sphere with simplified animation */}
        <div 
          className="absolute w-[500px] h-[500px] rounded-full filter blur-[130px] transition-opacity duration-1000"
          style={{ 
            background: 'radial-gradient(circle, rgba(124, 58, 237, 0.4) 0%, rgba(124, 58, 237, 0.0) 70%)',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            opacity: isVisible ? 0.6 : 0,
            animation: 'pulse 8s infinite ease-in-out',
          }}
        />
        
        {/* Minimal grid pattern */}
        <div 
          className="absolute inset-0 opacity-0 transition-opacity duration-1000"
          style={{ 
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(124, 58, 237, 0.15) 1px, transparent 0)',
            backgroundSize: '40px 40px',
            opacity: isVisible ? 0.15 : 0,
          }}
        />
        
        {/* Single star accent */}
        <div 
          className="absolute top-[15%] right-[15%] text-teko-purple animate-pulse"
          style={{ animationDuration: '4s' }}
        >
          <Star className="h-8 w-8" fill="rgba(124, 58, 237, 0.3)" />
        </div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col items-center justify-center text-center">
          {/* Simplified Animated Logo */}
          <div 
            className={`mb-12 relative transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '0.2s' }}
          >
            <AnimatedLogo size={120} className="mb-4" />
          </div>

          {/* Simplified Content Animation */}
          <h1 
            className={`text-3xl md:text-5xl lg:text-6xl font-display font-bold mb-6 max-w-4xl transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '0.4s' }}
          >
            {t('hero.title')}
          </h1>
          
          <p 
            className={`text-lg md:text-xl text-teko-white/80 max-w-2xl mb-12 transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '0.6s' }}
          >
            {t('hero.subtitle')}
          </p>
          
          <div 
            className={`transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '0.8s' }}
          >
            <div className="flex flex-row items-center justify-center gap-4">
              <a 
                href="#journey" 
                className="group relative overflow-hidden rounded-lg bg-teko-purple px-6 py-3 text-white text-lg font-medium transition-all duration-500 hover:bg-teko-purple-dark"
              >
                <span className="relative z-10">{t('hero.cta')}</span>
                <span className="absolute inset-0 bg-gradient-to-r from-teko-purple to-teko-gradient-end opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              </a>
              
              <a 
                href="#services" 
                className="group relative overflow-hidden rounded-lg bg-transparent border border-teko-purple/50 px-6 py-3 text-white text-lg font-medium transition-all duration-500 hover:border-teko-purple"
              >
                <span className="relative z-10">{t('hero.secondary_cta')}</span>
                <span className="absolute inset-0 bg-teko-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              </a>
            </div>
          </div>
          
          {/* Minimal Scroll Indicator */}
          <div 
            className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 transition-opacity duration-1000 ${
              isVisible ? 'opacity-70' : 'opacity-0'
            }`}
            style={{ transitionDelay: '1s', animation: 'bounce 2s infinite ease-in-out' }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" 
                 className="text-teko-purple hover:opacity-100 transition-opacity duration-300">
              <path d="M12 5V19M12 19L18 13M12 19L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
