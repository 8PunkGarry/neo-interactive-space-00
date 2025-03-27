
import React, { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import AnimatedLogo from './AnimatedLogo';
import { ArrowDown } from 'lucide-react';

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
        
        {/* Main glowing diamond */}
        <div 
          className="absolute top-[20%] right-[20%] opacity-0 transition-opacity duration-1000"
          style={{ 
            opacity: isVisible ? 0.8 : 0,
            transitionDelay: '0.6s',
            animation: 'float 6s infinite ease-in-out',
            filter: 'drop-shadow(0 0 8px rgba(124, 58, 237, 0.6))',
          }}
        >
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path 
              d="M20 2 L38 20 L20 38 L2 20 Z" 
              fill="rgba(124, 58, 237, 0.3)"
              stroke="rgba(124, 58, 237, 0.6)"
              strokeWidth="1"
            />
          </svg>
        </div>
        
        {/* Smaller diamonds without glow */}
        {[
          { top: '15%', left: '15%', delay: '0.2s', size: 25, duration: '7s' },
          { top: '35%', left: '10%', delay: '0.4s', size: 18, duration: '9s' },
          { top: '60%', left: '20%', delay: '0.3s', size: 22, duration: '8s' },
          { top: '75%', left: '40%', delay: '0.5s', size: 16, duration: '10s' },
          { top: '65%', right: '15%', delay: '0.6s', size: 20, duration: '6s' },
          { top: '30%', right: '10%', delay: '0.7s', size: 15, duration: '11s' },
          { top: '45%', right: '30%', delay: '0.3s', size: 23, duration: '7.5s' },
        ].map((diamond, index) => (
          <div 
            key={index}
            className="absolute opacity-0 transition-opacity duration-1000"
            style={{ 
              top: diamond.top, 
              left: diamond.left, 
              right: diamond.right,
              opacity: isVisible ? 0.5 : 0,
              transitionDelay: diamond.delay,
              animation: `float ${diamond.duration} infinite ease-in-out ${parseInt(diamond.delay) * 0.8}s`,
            }}
          >
            <svg width={diamond.size} height={diamond.size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path 
                d="M20 2 L38 20 L20 38 L2 20 Z" 
                fill="rgba(124, 58, 237, 0.15)"
                stroke="rgba(124, 58, 237, 0.3)"
                strokeWidth="1"
              />
            </svg>
          </div>
        ))}
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
            <AnimatedLogo size={120} className="mb-4" variant="minimal" />
          </div>

          {/* Content Animation */}
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
                className="group relative overflow-hidden rounded-lg bg-transparent border border-teko-purple/50 px-6 py-3 text-white text-lg font-medium transition-all duration-500 hover:border-teko-purple hover:bg-teko-purple/10"
              >
                <span className="relative z-10">Our Services</span>
                <span className="absolute inset-0 bg-teko-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              </a>
            </div>
          </div>
          
          {/* Improved down arrow with slower animation */}
          <div 
            className={`absolute bottom-6 left-1/2 transform -translate-x-1/2 transition-opacity duration-1000 ${
              isVisible ? 'opacity-70' : 'opacity-0'
            }`}
            style={{ 
              transitionDelay: '1s', 
              animation: 'arrow-bounce 3s infinite ease-in-out' 
            }}
          >
            <ArrowDown width="28" height="28" className="text-teko-purple hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* Add custom animation for the arrow */}
          <style jsx>{`
            @keyframes arrow-bounce {
              0%, 20%, 50%, 80%, 100% {
                transform: translateY(0);
              }
              40% {
                transform: translateY(-10px);
              }
              60% {
                transform: translateY(-5px);
              }
            }
          `}</style>
        </div>
      </div>
    </section>
  );
};

export default Hero;
