
import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import AnimatedLogo from './AnimatedLogo';
import { Sparkles, Star } from 'lucide-react';

const Hero = () => {
  const { t } = useLanguage();
  const contentRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set animation visible after a short delay for entrance effect
    const timer = setTimeout(() => setIsVisible(true), 300);
    
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
      clearTimeout(timer);
      animatedElements.forEach((el) => observer.unobserve(el));
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Animated background spheres with improved animation */}
        <div 
          className="absolute w-96 h-96 rounded-full filter blur-[100px] transition-transform duration-1000 ease-out opacity-60"
          style={{ 
            background: 'radial-gradient(circle, rgba(124, 58, 237, 0.8) 0%, rgba(124, 58, 237, 0.1) 70%)',
            left: '10%',
            top: '20%',
            transform: `translate3d(${scrollY * -0.03}px, ${scrollY * 0.02}px, 0) scale(${1 + scrollY * 0.0005})`,
          }}
        />
        <div 
          className="absolute w-80 h-80 rounded-full filter blur-[120px] transition-transform duration-1000 ease-out opacity-50"
          style={{ 
            background: 'radial-gradient(circle, rgba(167, 139, 250, 0.8) 0%, rgba(167, 139, 250, 0.1) 70%)',
            right: '15%',
            bottom: '25%',
            transform: `translate3d(${scrollY * 0.04}px, ${scrollY * -0.01}px, 0) scale(${1 + scrollY * 0.0003})`,
          }}
        />
        
        {/* Enhanced Grid Pattern with subtle animation */}
        <div 
          className="absolute inset-0 opacity-20 transition-opacity duration-1000"
          style={{ 
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(124, 58, 237, ${0.15 + scrollY * 0.0002}) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
            opacity: isVisible ? 0.2 : 0,
          }}
        ></div>
        
        {/* Floating stars background */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 20 }).map((_, index) => (
            <div 
              key={index}
              className="absolute rounded-full bg-white/10"
              style={{ 
                width: Math.random() * 3 + 1 + 'px',
                height: Math.random() * 3 + 1 + 'px',
                top: Math.random() * 100 + '%',
                left: Math.random() * 100 + '%',
                opacity: Math.random() * 0.5 + 0.3,
                animation: `float ${Math.random() * 10 + 15}s infinite ease-in-out ${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col items-center justify-center text-center">
          {/* Animated Logo with pulsing star */}
          <div 
            ref={contentRef} 
            className={`mb-12 relative animate-on-scroll ${isVisible ? 'visible' : ''}`}
          >
            <div className="relative">
              <AnimatedLogo size={120} className="mb-4" />
              
              {/* Pulsing star animation */}
              <div className="absolute -top-6 -right-6 animate-pulse">
                <Star className="text-teko-purple h-8 w-8 animate-glow" fill="rgba(124, 58, 237, 0.3)" />
              </div>
              
              {/* Sparkles effect */}
              <div className="absolute -bottom-2 -left-6 animate-pulse" style={{ animationDelay: '0.5s' }}>
                <Sparkles className="text-teko-purple-light h-7 w-7 animate-glow" />
              </div>
            </div>
            
            {/* Digital Lines with improved animation */}
            <div className="absolute -inset-8 border border-teko-purple/30 rounded-lg opacity-0 animate-fade-in animate-pulse-border" 
                 style={{ animationDelay: '0.7s', animationDuration: '3s' }}></div>
            <div className="absolute -inset-12 border border-teko-purple/20 rounded-lg opacity-0 animate-fade-in animate-pulse-border" 
                 style={{ animationDelay: '1.2s', animationDuration: '4s' }}></div>
          </div>

          {/* Main Content with improved animations */}
          <h1 className={`text-3xl md:text-5xl lg:text-6xl font-display font-bold mb-6 max-w-4xl animate-on-scroll ${isVisible ? 'visible' : ''}`}>
            {t('hero.title')}
          </h1>
          
          <p className={`text-lg md:text-xl text-teko-white/80 max-w-2xl mb-12 animate-on-scroll ${isVisible ? 'visible' : ''}`} 
             style={{ transitionDelay: '0.3s' }}>
            {t('hero.subtitle')}
          </p>
          
          <div className={`animate-on-scroll ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.6s' }}>
            <div className="flex flex-row items-center justify-center gap-4">
              <a 
                href="#journey" 
                className="group relative overflow-hidden rounded-lg bg-teko-purple px-6 py-3 text-white text-lg font-medium transition-all duration-300 hover:bg-teko-purple-dark"
              >
                <span className="relative z-10">{t('hero.cta')}</span>
                <span className="absolute inset-0 bg-gradient-to-r from-teko-purple to-teko-gradient-end opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </a>
              
              <a 
                href="#services" 
                className="group relative overflow-hidden rounded-lg bg-transparent border border-teko-purple/50 px-6 py-3 text-white text-lg font-medium transition-all duration-300 hover:border-teko-purple"
              >
                <span className="relative z-10">{t('hero.secondary_cta')}</span>
                <span className="absolute inset-0 bg-teko-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </a>
            </div>
          </div>
          
          {/* Scroll Indicator with improved animation */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" 
                 className="text-teko-purple opacity-70 hover:opacity-100 transition-opacity duration-300">
              <path d="M12 5V19M12 19L18 13M12 19L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
