
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight, Users, Building, Lightbulb, Code, Settings, Rocket, CheckCircle, Clock, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from './ui/card';
import { HoverCard, HoverCardTrigger, HoverCardContent } from './ui/hover-card';
import { Button } from './ui/button';

const UserJourney = () => {
  const { t } = useLanguage();
  const [hoveredCard, setHoveredCard] = useState<'client' | 'company' | null>(null);
  const [animatedSteps, setAnimatedSteps] = useState<boolean[]>([false, false, false, false]);
  const [isCardExpanded, setIsCardExpanded] = useState<{client: boolean, company: boolean}>({
    client: false,
    company: false
  });

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

  const toggleCardExpand = (card: 'client' | 'company') => {
    setIsCardExpanded(prev => ({
      ...prev,
      [card]: !prev[card]
    }));
  };

  // Journey steps with fallback text
  const journeySteps = [
    { 
      title: t('journey.step1.title') || "Discovery & Planning", 
      description: t('journey.step1.description') || "We learn about your business, analyze requirements, and create a detailed project plan.",
      icon: <Lightbulb size={22} />,
      delay: 0.1
    },
    { 
      title: t('journey.step2.title') || "Design & Prototyping", 
      description: t('journey.step2.description') || "Creating wireframes and interactive prototypes to visualize the solution.",
      icon: <Settings size={22} />,
      delay: 0.2
    },
    { 
      title: t('journey.step3.title') || "Development", 
      description: t('journey.step3.description') || "Building the solution with modern tech stack and regular progress updates.",
      icon: <Code size={22} />,
      delay: 0.3
    },
    { 
      title: t('journey.step4.title') || "Launch & Support", 
      description: t('journey.step4.description') || "Deploying your solution and providing ongoing support and enhancements.",
      icon: <Rocket size={22} />,
      delay: 0.4
    }
  ];

  // Client features with fallback text
  const clientFeatures = [
    { 
      title: t('journey.client.features.1.title') || "Tailored Solutions", 
      description: t('journey.client.features.1.description') || "Custom digital solutions aligned with your needs."
    },
    { 
      title: t('journey.client.features.2.title') || "Transparent Process", 
      description: t('journey.client.features.2.description') || "Clear communication with regular updates."
    },
    { 
      title: t('journey.client.features.3.title') || "Ongoing Support", 
      description: t('journey.client.features.3.description') || "Continued support for evolving solutions."
    }
  ];

  // Company features with fallback text
  const companyFeatures = [
    { 
      title: t('journey.company.features.1.title') || "Technical Expertise", 
      description: t('journey.company.features.1.description') || "Deep knowledge across technologies and frameworks."
    },
    { 
      title: t('journey.company.features.2.title') || "Scalable Architecture", 
      description: t('journey.company.features.2.description') || "Solutions that grow with your organization."
    },
    { 
      title: t('journey.company.features.3.title') || "Innovation Focus", 
      description: t('journey.company.features.3.description') || "Exploring emerging tech for competitive advantages."
    }
  ];

  // Get safe string value from translation or use fallback
  const safeTranslation = (key: string, fallback: string): string => {
    const translation = t(key);
    // Check if translation exists and is a string
    return typeof translation === 'string' ? translation : fallback;
  };

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
            {safeTranslation('journey.title', "Your Journey With Us")}
          </h2>
          <p className="text-lg md:text-xl text-teko-white/80 max-w-3xl mx-auto animate-on-scroll" style={{ transitionDelay: '0.1s' }}>
            {safeTranslation('journey.subtitle', "How we transform your ideas into powerful digital solutions")}
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
                <p className="text-teko-white/70 text-sm">{step.description}</p>
                
                <div className="absolute -bottom-5 -right-5 w-20 h-20 rounded-full bg-teko-purple/5 blur-xl"></div>
                <div className="absolute top-4 right-4 text-white/30 text-xl font-bold">0{index + 1}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Client Card */}
          <div 
            className={`relative overflow-hidden rounded-xl transition-all duration-500 animate-on-scroll
              ${isCardExpanded.client ? 'scale-105 z-20' : ''}
              ${hoveredCard === 'client' 
                ? 'bg-gradient-to-br from-teko-purple/20 to-teko-purple/5 z-10' 
                : 'bg-white/5 backdrop-blur-sm'}`}
            onMouseEnter={() => handleMouseEnter('client')}
            onMouseLeave={handleMouseLeave}
            style={{ transitionDelay: '0.1s' }}
          >
            <div className="p-6 border border-white/10 rounded-xl h-full flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 ${
                  hoveredCard === 'client' ? 'bg-teko-purple text-white' : 'bg-white/10 text-teko-purple-light'
                }`}>
                  <Users size={24} />
                </div>
                <button 
                  onClick={() => toggleCardExpand('client')}
                  className="text-teko-white/50 hover:text-teko-purple-light transition-colors"
                >
                  {isCardExpanded.client ? 
                    <div className="p-1 border border-white/20 rounded-md hover:border-teko-purple/40">
                      <ArrowRight size={16} className="rotate-[-135deg]" />
                    </div> : 
                    <div className="p-1 border border-white/20 rounded-md hover:border-teko-purple/40">
                      <ArrowRight size={16} className="rotate-45" />
                    </div>
                  }
                </button>
              </div>
              
              <h3 className="text-xl font-display font-bold mb-2">
                {safeTranslation('journey.client', "For Clients")}
              </h3>
              <p className="text-teko-white/70 text-sm mb-4">
                {safeTranslation('journey.client.description', "Custom-tailored digital solutions to meet your unique business needs.")}
              </p>
              
              {/* Client Features - Expand/Collapse */}
              <div className={`space-y-3 mb-4 transition-all duration-300 overflow-hidden ${
                isCardExpanded.client ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'
              }`}>
                {clientFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="mr-2 mt-0.5 text-teko-purple-light flex-shrink-0">
                      <CheckCircle size={14} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white/90 text-sm">{feature.title}</h4>
                      <p className="text-xs text-white/70">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              {!isCardExpanded.client && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {clientFeatures.map((feature, index) => (
                    <span key={index} className="inline-flex items-center text-xs bg-white/5 text-white/70 px-2 py-1 rounded-md">
                      <CheckCircle size={10} className="mr-1 text-teko-purple-light" />
                      {feature.title}
                    </span>
                  ))}
                </div>
              )}
              
              <div className="mt-auto pt-2">
                <Link 
                  to="/client" 
                  className={`inline-flex items-center text-sm font-medium transition-all duration-300 ${
                    hoveredCard === 'client' ? 'text-teko-purple-light' : 'text-teko-white/80'
                  }`}
                >
                  {safeTranslation('journey.button', "Learn More")}
                  <ArrowRight className={`ml-1 transition-transform duration-300 ${
                    hoveredCard === 'client' ? 'transform translate-x-1' : ''
                  }`} size={14} />
                </Link>
              </div>
            </div>
            
            {/* Corner Glow */}
            <div className={`absolute -bottom-10 -right-10 w-40 h-40 rounded-full transition-opacity duration-500 ${
              hoveredCard === 'client' ? 'opacity-30 bg-teko-purple' : 'opacity-0 bg-transparent'
            } blur-2xl`}></div>
          </div>

          {/* Company Card */}
          <div 
            className={`relative overflow-hidden rounded-xl transition-all duration-500 animate-on-scroll
              ${isCardExpanded.company ? 'scale-105 z-20' : ''}
              ${hoveredCard === 'company' 
                ? 'bg-gradient-to-br from-teko-purple/20 to-teko-purple/5 z-10' 
                : 'bg-white/5 backdrop-blur-sm'}`}
            onMouseEnter={() => handleMouseEnter('company')}
            onMouseLeave={handleMouseLeave}
            style={{ transitionDelay: '0.2s' }}
          >
            <div className="p-6 border border-white/10 rounded-xl h-full flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 ${
                  hoveredCard === 'company' ? 'bg-teko-purple text-white' : 'bg-white/10 text-teko-purple-light'
                }`}>
                  <Building size={24} />
                </div>
                <button 
                  onClick={() => toggleCardExpand('company')}
                  className="text-teko-white/50 hover:text-teko-purple-light transition-colors"
                >
                  {isCardExpanded.company ? 
                    <div className="p-1 border border-white/20 rounded-md hover:border-teko-purple/40">
                      <ArrowRight size={16} className="rotate-[-135deg]" />
                    </div> : 
                    <div className="p-1 border border-white/20 rounded-md hover:border-teko-purple/40">
                      <ArrowRight size={16} className="rotate-45" />
                    </div>
                  }
                </button>
              </div>
              
              <h3 className="text-xl font-display font-bold mb-2">
                {safeTranslation('journey.company', "For Companies")}
              </h3>
              <p className="text-teko-white/70 text-sm mb-4">
                {safeTranslation('journey.company.description', "Powerful enterprise solutions to optimize operations and drive growth.")}
              </p>
              
              {/* Company Features - Expand/Collapse */}
              <div className={`space-y-3 mb-4 transition-all duration-300 overflow-hidden ${
                isCardExpanded.company ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'
              }`}>
                {companyFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="mr-2 mt-0.5 text-teko-purple-light flex-shrink-0">
                      <CheckCircle size={14} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white/90 text-sm">{feature.title}</h4>
                      <p className="text-xs text-white/70">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              {!isCardExpanded.company && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {companyFeatures.map((feature, index) => (
                    <span key={index} className="inline-flex items-center text-xs bg-white/5 text-white/70 px-2 py-1 rounded-md">
                      <CheckCircle size={10} className="mr-1 text-teko-purple-light" />
                      {feature.title}
                    </span>
                  ))}
                </div>
              )}
              
              <div className="mt-auto pt-2">
                <Link 
                  to="/company" 
                  className={`inline-flex items-center text-sm font-medium transition-all duration-300 ${
                    hoveredCard === 'company' ? 'text-teko-purple-light' : 'text-teko-white/80'
                  }`}
                >
                  {safeTranslation('journey.button', "Learn More")}
                  <ArrowRight className={`ml-1 transition-transform duration-300 ${
                    hoveredCard === 'company' ? 'transform translate-x-1' : ''
                  }`} size={14} />
                </Link>
              </div>
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
