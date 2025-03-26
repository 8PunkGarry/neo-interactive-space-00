
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight, Users, Building, Lightbulb, CodeIcon, Code, Settings, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';

const UserJourney = () => {
  const { t } = useLanguage();
  const [hoveredCard, setHoveredCard] = useState<'client' | 'company' | null>(null);
  const [animatedSteps, setAnimatedSteps] = useState<boolean[]>([false, false, false, false]);

  useEffect(() => {
    // Sequential animation for journey steps
    const stepDelays = [300, 800, 1300, 1800];
    
    stepDelays.forEach((delay, index) => {
      setTimeout(() => {
        setAnimatedSteps(prev => {
          const newState = [...prev];
          newState[index] = true;
          return newState;
        });
      }, delay);
    });
  }, []);

  const handleMouseEnter = (card: 'client' | 'company') => {
    setHoveredCard(card);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  const journeySteps = [
    { 
      title: t('journey.step1.title'), 
      description: t('journey.step1.description'),
      icon: <Lightbulb size={22} />,
      delay: 0.1
    },
    { 
      title: t('journey.step2.title'), 
      description: t('journey.step2.description'),
      icon: <Settings size={22} />,
      delay: 0.2
    },
    { 
      title: t('journey.step3.title'), 
      description: t('journey.step3.description'),
      icon: <Code size={22} />,
      delay: 0.3
    },
    { 
      title: t('journey.step4.title'), 
      description: t('journey.step4.description'),
      icon: <Rocket size={22} />,
      delay: 0.4
    }
  ];

  return (
    <section id="journey" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/3 w-64 h-64 bg-teko-purple/20 rounded-full filter blur-[80px]"></div>
        <div className="absolute bottom-0 right-1/3 w-64 h-64 bg-teko-purple/15 rounded-full filter blur-[100px]"></div>
        
        {/* Floating diamonds */}
        <div className="absolute top-20 left-[15%] w-6 h-6 border border-white/20 rotate-45 animate-[float_7s_ease-in-out_infinite]"></div>
        <div className="absolute top-40 left-[60%] w-4 h-4 border border-white/10 rotate-45 animate-[float-alt_8s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-40 left-[25%] w-5 h-5 border border-white/15 rotate-45 animate-[float_6s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-20 right-[20%] w-7 h-7 border border-white/20 rotate-45 animate-[float-alt_9s_ease-in-out_infinite]"></div>
        
        {/* Main glowing diamond */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 border border-teko-purple rotate-45 animate-[float_10s_ease-in-out_infinite]">
          <div className="absolute inset-0 bg-teko-purple/20 blur-md"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 animate-on-scroll">
            {t('journey.title')}
          </h2>
          <p className="text-lg md:text-xl text-teko-white/80 max-w-3xl mx-auto animate-on-scroll" style={{ transitionDelay: '0.1s' }}>
            {t('journey.subtitle')}
          </p>
        </div>

        {/* Journey Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {journeySteps.map((step, index) => (
            <div 
              key={index}
              className={`relative overflow-hidden rounded-xl transition-all duration-700 backdrop-blur-sm border border-white/10 h-full 
                ${animatedSteps[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                ${index % 2 === 0 ? 'bg-white/5' : 'bg-gradient-to-br from-teko-purple/10 to-transparent'}`}
              style={{ transitionDelay: `${step.delay}s` }}
            >
              <div className="p-6 flex flex-col h-full">
                <div className="w-10 h-10 rounded-full flex items-center justify-center mb-4 bg-white/10 text-teko-purple-light">
                  {step.icon}
                </div>
                
                <h3 className="text-xl font-display font-bold mb-2">{step.title}</h3>
                <p className="text-teko-white/70">{step.description}</p>
                
                <div className="absolute -bottom-5 -right-5 w-20 h-20 rounded-full bg-teko-purple/5 blur-xl"></div>
                <div className="absolute top-4 right-4 text-white/30 text-xl font-bold">0{index + 1}</div>
              </div>
            </div>
          ))}
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
              
              <Link 
                to="/client" 
                className={`inline-flex items-center text-base font-medium transition-all duration-300 ${
                  hoveredCard === 'client' ? 'text-teko-purple-light' : 'text-teko-white/80'
                }`}
              >
                {t('journey.button')} 
                <ArrowRight className={`ml-2 transition-transform duration-300 ${
                  hoveredCard === 'client' ? 'transform translate-x-1' : ''
                }`} size={16} />
              </Link>
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
              
              <Link 
                to="/company" 
                className={`inline-flex items-center text-base font-medium transition-all duration-300 ${
                  hoveredCard === 'company' ? 'text-teko-purple-light' : 'text-teko-white/80'
                }`}
              >
                {t('journey.button')} 
                <ArrowRight className={`ml-2 transition-transform duration-300 ${
                  hoveredCard === 'company' ? 'transform translate-x-1' : ''
                }`} size={16} />
              </Link>
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
