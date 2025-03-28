
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import UserJourney from '../components/UserJourney';
import ServiceGrid from '../components/ServiceGrid';
import Footer from '../components/Footer';

const Index = () => {
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
  }, []);

  return (
    <div className="min-h-screen bg-teko-black">
      <Navbar />
      <Hero />
      <div id="journey">
        <UserJourney />
      </div>
      <div id="services">
        <ServiceGrid limitToThree={true} />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
