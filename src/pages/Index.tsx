
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import UserJourney from '../components/UserJourney';
import ServiceGrid from '../components/ServiceGrid';
import Footer from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';

const Index = () => {
  const { language } = useLanguage();

  useEffect(() => {
    // Add simplified animation observer when component mounts
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Make sure the element stays visible
            setTimeout(() => {
              if (entry.target.classList.contains('animate-on-scroll')) {
                entry.target.classList.remove('animate-on-scroll');
                entry.target.classList.add('animation-complete');
              }
            }, 1000);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach((el) => observer.observe(el));
    
    return () => {
      // Clean up observer when component unmounts
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, [language]); // Re-run when language changes to ensure proper animations

  return (
    <div className="min-h-screen bg-gradient-to-b from-teko-black via-teko-black/95 to-teko-black relative overflow-hidden">
      {/* Main background elements that span the entire page */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Large gradient orbs that create a seamless background */}
        <div className="absolute w-[800px] h-[800px] rounded-full filter blur-[180px] opacity-20 bg-gradient-to-r from-teko-purple/30 to-teko-purple-light/20" 
             style={{top: '-10%', left: '-10%'}} />
        
        <div className="absolute w-[600px] h-[600px] rounded-full filter blur-[150px] opacity-15 bg-gradient-to-l from-teko-purple/20 to-teko-gradient-end/10" 
             style={{bottom: '10%', right: '-5%'}} />
             
        <div className="absolute w-[700px] h-[700px] rounded-full filter blur-[160px] opacity-10 bg-gradient-to-t from-teko-purple-dark/20 to-teko-purple/10" 
             style={{top: '40%', left: '30%'}} />
             
        {/* Subtle grid pattern overlay for entire page */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{ 
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(124, 58, 237, 0.15) 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>
      
      <Navbar />
      
      {/* Main content with relative positioning */}
      <div className="relative z-10">
        <Hero />
        <div id="journey" className="relative">
          <UserJourney />
        </div>
        <div id="services" className="relative">
          <ServiceGrid limitToThree={true} />
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
