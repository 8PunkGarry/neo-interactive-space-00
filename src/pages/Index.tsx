
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import UserJourney from '../components/UserJourney';
import ServiceGrid from '../components/ServiceGrid';
import Footer from '../components/Footer';

const Index = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  
  useEffect(() => {
    // Add simplified animation observer when component mounts
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach((el) => observer.observe(el));
    
    // Add scroll listener for parallax effects
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      // Clean up observer when component unmounts
      animatedElements.forEach((el) => observer.unobserve(el));
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-teko-black">
      {/* Animated background patterns that appear during scroll */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Animated gradient background */}
        <div 
          className="absolute -top-[10%] left-0 w-full h-[200%] opacity-20 transition-transform duration-1000 ease-out"
          style={{ 
            background: 'radial-gradient(circle at 20% 30%, rgba(124, 58, 237, 0.4) 0%, rgba(0, 0, 0, 0) 50%), radial-gradient(circle at 80% 70%, rgba(167, 139, 250, 0.4) 0%, rgba(0, 0, 0, 0) 50%)',
            transform: `translateY(${scrollPosition * 0.1}px)`,
          }}
        />
        
        {/* Animated grid pattern */}
        <div 
          className="absolute inset-0"
          style={{ 
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(124, 58, 237, 0.15) 1px, transparent 0)',
            backgroundSize: '50px 50px',
            opacity: 0.05 + (scrollPosition * 0.0001),
            transform: `translateY(${scrollPosition * 0.05}px)`,
          }}
        />
        
        {/* Animated diagonal lines */}
        <div className="absolute inset-0 opacity-10" 
          style={{
            backgroundImage: 'linear-gradient(135deg, rgba(124, 58, 237, 0.2) 25%, transparent 25%, transparent 50%, rgba(124, 58, 237, 0.2) 50%, rgba(124, 58, 237, 0.2) 75%, transparent 75%, transparent)',
            backgroundSize: '100px 100px',
            opacity: Math.min(0.05 + (scrollPosition * 0.0001), 0.1),
            transform: `translateY(${scrollPosition * -0.02}px)`,
          }}
        />
        
        {/* Floating diamonds - they appear gradually as you scroll */}
        {[
          { top: '15%', left: '10%', size: 20, delay: 0.1, speed: 0.03 },
          { top: '30%', right: '15%', size: 15, delay: 0.2, speed: -0.02 },
          { top: '55%', left: '20%', size: 25, delay: 0.3, speed: 0.04 },
          { top: '70%', right: '25%', size: 18, delay: 0.4, speed: -0.03 },
          { top: '85%', left: '15%', size: 22, delay: 0.5, speed: 0.02 },
        ].map((diamond, index) => (
          <div 
            key={index}
            className="absolute border border-white/10 rotate-45"
            style={{ 
              top: diamond.top, 
              left: diamond.left, 
              right: diamond.right,
              width: diamond.size,
              height: diamond.size,
              opacity: Math.max(0, Math.min((scrollPosition * 0.0015) - diamond.delay, 0.6)),
              transform: `translateY(${scrollPosition * diamond.speed}px)`,
              filter: 'drop-shadow(0 0 5px rgba(124, 58, 237, 0.2))',
              transition: 'opacity 0.5s ease-out',
            }}
          />
        ))}
        
        {/* Section transition effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-teko-black via-transparent to-teko-black opacity-70" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <Hero />
        
        {/* Journey section with transition effect */}
        <div id="journey" className="relative">
          {/* Section divider with animated effect */}
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-teko-black to-transparent z-10" />
          <div className="absolute top-0 left-0 w-full overflow-hidden h-20 z-0">
            <svg 
              className="absolute bottom-0 left-0 w-full"
              viewBox="0 0 1200 120" 
              preserveAspectRatio="none"
              style={{ 
                transform: `translateY(${scrollPosition * 0.1}px)`,
                opacity: Math.min(scrollPosition * 0.001, 0.4) 
              }}
            >
              <path 
                d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
                fill="#7C3AED" 
                fillOpacity="0.08"
              />
              <path 
                d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
                fill="#7C3AED" 
                fillOpacity="0.05"
              />
            </svg>
          </div>
          
          <UserJourney />
        </div>
        
        {/* Services section with transition effect */}
        <div id="services" className="relative">
          {/* Section divider with animated effect */}
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-teko-black/50 z-0" />
          <div className="absolute top-0 left-0 w-full overflow-hidden h-40 transform rotate-180 z-0">
            <svg 
              className="absolute bottom-0 left-0 w-full"
              viewBox="0 0 1200 120" 
              preserveAspectRatio="none"
              style={{ 
                transform: `translateY(${scrollPosition * -0.05}px)`,
                opacity: Math.min(scrollPosition * 0.0008, 0.3) 
              }}
            >
              <path 
                d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
                fill="#7C3AED" 
                fillOpacity="0.1"
              />
            </svg>
          </div>
          
          <ServiceGrid limitToThree={true} />
        </div>
        
        <Footer />
      </div>
    </div>
  );
};

export default Index;
