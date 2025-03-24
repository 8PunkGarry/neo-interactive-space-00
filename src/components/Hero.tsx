
import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import AnimatedLogo from './AnimatedLogo';

const Hero = () => {
  const { t } = useLanguage();
  const contentRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach((el) => observer.observe(el));
    
    // Handle scroll for parallax sphere movement
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Animated background spheres */}
        <div 
          className="absolute w-96 h-96 rounded-full filter blur-[100px] transition-transform duration-700 ease-out opacity-60"
          style={{ 
            background: 'radial-gradient(circle, rgba(124, 58, 237, 0.8) 0%, rgba(124, 58, 237, 0.1) 70%)',
            left: '10%',
            top: '20%',
            transform: `translate3d(${scrollY * -0.03}px, ${scrollY * 0.02}px, 0)`,
          }}
        />
        <div 
          className="absolute w-80 h-80 rounded-full filter blur-[120px] transition-transform duration-700 ease-out opacity-50"
          style={{ 
            background: 'radial-gradient(circle, rgba(167, 139, 250, 0.8) 0%, rgba(167, 139, 250, 0.1) 70%)',
            right: '15%',
            bottom: '25%',
            transform: `translate3d(${scrollY * 0.04}px, ${scrollY * -0.01}px, 0)`,
          }}
        />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{ 
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(124, 58, 237, 0.15) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        ></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col items-center justify-center text-center">
          {/* Animated Logo */}
          <div 
            ref={contentRef} 
            className="mb-12 relative animate-on-scroll"
          >
            <AnimatedLogo size={120} className="mb-4" />
            
            {/* Digital Lines */}
            <div className="absolute -inset-8 border border-teko-purple/30 rounded-lg opacity-0 animate-fade-in animate-pulse-border" style={{ animationDelay: '1s' }}></div>
            <div className="absolute -inset-12 border border-teko-purple/20 rounded-lg opacity-0 animate-fade-in animate-pulse-border" style={{ animationDelay: '1.5s' }}></div>
          </div>

          {/* Main Content */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold mb-6 max-w-4xl animate-on-scroll">
            {t('hero.title')}
          </h1>
          
          <p className="text-lg md:text-xl text-teko-white/80 max-w-2xl mb-12 animate-on-scroll" style={{ transitionDelay: '0.2s' }}>
            {t('hero.subtitle')}
          </p>
          
          <div className="animate-on-scroll" style={{ transitionDelay: '0.4s' }}>
            <div className="flex flex-row items-center justify-center">
              <a 
                href="#journey" 
                className="group relative overflow-hidden rounded-lg bg-teko-purple px-6 py-3 text-white text-lg font-medium transition-all duration-300 hover:bg-teko-purple-dark"
              >
                <span className="relative z-10">{t('journey.button')}</span>
                <span className="absolute inset-0 bg-gradient-to-r from-teko-purple to-teko-gradient-end opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </a>
            </div>
          </div>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 5V19M12 19L18 13M12 19L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
