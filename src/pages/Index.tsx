
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
      <UserJourney />
      <ServiceGrid limitToThree={true} />
      <Footer />
    </div>
  );
};

export default Index;
