
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight, Users, Building, Lightbulb, Code, Settings, Rocket, CheckCircle, Clock, Star, FileText, Phone, PartyPopper, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from './ui/card';
import { HoverCard, HoverCardTrigger, HoverCardContent } from './ui/hover-card';
import { Button } from './ui/button';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from './ui/carousel';

const UserJourney = () => {
  const { t } = useLanguage();
  const [hoveredCard, setHoveredCard] = useState<'brief' | 'contact' | null>(null);
  const [animatedSteps, setAnimatedSteps] = useState<boolean[]>([false, false, false, false, false, false, false, false]);

  useEffect(() => {
    // Sequential animation for journey steps with better timing
    const stepDelays = [300, 800, 1300, 1800, 2300, 2800, 3300, 3800];
    
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

  const handleMouseEnter = (card: 'brief' | 'contact') => {
    setHoveredCard(card);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  // Journey steps with improved text
  const journeySteps = [
    { 
      title: t('journey.step1.title') || "Анализ и исследование", 
      description: t('journey.step1.description') || "Мы тщательно анализируем ваши бизнес-потребности, изучаем целевую аудиторию и определяем четкие цели проекта.",
      icon: <Lightbulb size={22} />,
      delay: 0.1
    },
    { 
      title: t('journey.step2.title') || "Стратегическое планирование", 
      description: t('journey.step2.description') || "Создание детальной дорожной карты проекта с временными рамками, распределением ресурсов и техническими спецификациями.",
      icon: <Settings size={22} />,
      delay: 0.2
    },
    { 
      title: t('journey.step3.title') || "UI/UX дизайн", 
      description: t('journey.step3.description') || "Разработка интуитивно понятных интерфейсов и пользовательского опыта через прототипы, макеты и интерактивные модели.",
      icon: <Star size={22} />,
      delay: 0.3
    },
    { 
      title: t('journey.step4.title') || "Разработка", 
      description: t('journey.step4.description') || "Создание вашего решения с чистым, эффективным кодом, используя новейшие технологии и лучшие практики отрасли.",
      icon: <Code size={22} />,
      delay: 0.4
    },
    { 
      title: t('journey.step5.title') || "Контроль качества", 
      description: t('journey.step5.description') || "Тщательное тестирование на различных устройствах и в разных средах для обеспечения безупречного пользовательского опыта.",
      icon: <CheckCircle size={22} />,
      delay: 0.5
    },
    { 
      title: t('journey.step6.title') || "Развертывание", 
      description: t('journey.step6.description') || "Аккуратный запуск вашего решения в производство с постоянным мониторингом и оптимизацией производительности.",
      icon: <Rocket size={22} />,
      delay: 0.6
    },
    { 
      title: t('journey.step7.title') || "Обучение и поддержка", 
      description: t('journey.step7.description') || "Предоставление комплексной документации и обучения, чтобы ваша команда могла эффективно управлять решением.",
      icon: <Users size={22} />,
      delay: 0.7
    },
    { 
      title: t('journey.step8.title') || "Завершение проекта", 
      description: t('journey.step8.description') || "Празднование успешной доставки вашего проекта и планирование будущего роста и улучшений.",
      icon: <PartyPopper size={22} />,
      delay: 0.8,
      celebration: true
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
            {safeTranslation('journey.title', "Ваш путь с нами")}
          </h2>
          <p className="text-lg md:text-xl text-teko-white/80 max-w-3xl mx-auto animate-on-scroll" style={{ transitionDelay: '0.1s' }}>
            {safeTranslation('journey.subtitle', "Как мы превращаем ваши идеи в мощные цифровые решения")}
          </p>
        </div>

        {/* Journey Steps Carousel */}
        <div className="mb-16">
          <Carousel
            opts={{
              align: "start",
              loop: true,
              dragFree: true,
              slidesToScroll: 2
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {journeySteps.map((step, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/4 lg:basis-1/4">
                  <div 
                    className={`relative overflow-hidden rounded-xl transition-all duration-700 backdrop-blur-sm border border-white/10 h-full 
                      ${animatedSteps[index] ? 'opacity-100 transform-none' : 'opacity-0 translate-y-4'}
                      ${index % 2 === 0 ? 'bg-white/5' : 'bg-gradient-to-br from-teko-purple/10 to-transparent'}
                      ${step.celebration ? 'celebration-card' : ''}`}
                  >
                    <div className="p-6 flex flex-col h-full">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-4 
                        ${step.celebration 
                          ? 'bg-gradient-to-r from-teko-purple to-teko-purple-light text-white animate-pulse' 
                          : 'bg-white/10 text-teko-purple-light'}`}>
                        {step.icon}
                      </div>
                      
                      <h3 className="text-xl font-display font-bold mb-2">
                        {step.title}
                        {step.celebration && (
                          <span className="ml-2 inline-block">
                            <Sparkles className="inline h-4 w-4 text-yellow-400" />
                          </span>
                        )}
                      </h3>
                      
                      <p className="text-teko-white/70 text-sm">{step.description}</p>
                      
                      <div className="absolute -bottom-5 -right-5 w-20 h-20 rounded-full bg-teko-purple/5 blur-xl"></div>
                      
                      {step.celebration && (
                        <>
                          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                            <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-yellow-400 rounded-full animate-ping"></div>
                            <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-green-400 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
                            <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-blue-400 rounded-full animate-ping" style={{ animationDelay: '0.7s' }}></div>
                            <div className="absolute bottom-1/3 right-1/3 w-1 h-1 bg-pink-400 rounded-full animate-ping" style={{ animationDelay: '1.1s' }}></div>
                            <div className="absolute top-1/2 right-1/2 w-1 h-1 bg-purple-400 rounded-full animate-ping" style={{ animationDelay: '0.3s' }}></div>
                          </div>
                          <div className="absolute inset-0 border border-teko-purple/50 rounded-xl pulse-glow"></div>
                        </>
                      )}
                      
                      <div className="absolute top-4 right-4 text-white/30 text-xl font-bold">0{index + 1}</div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8 gap-2">
              <CarouselPrevious className="relative -left-0 bg-white/10 hover:bg-white/20 border-white/10" />
              <CarouselNext className="relative -right-0 bg-white/10 hover:bg-white/20 border-white/10" />
            </div>
          </Carousel>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Fill Brief Card */}
          <div 
            className={`relative overflow-hidden rounded-xl transition-all duration-500 animate-on-scroll
              ${hoveredCard === 'brief' 
                ? 'bg-gradient-to-br from-teko-purple/20 to-teko-purple/5 z-10 scale-105' 
                : 'bg-white/5 backdrop-blur-sm'}`}
            onMouseEnter={() => handleMouseEnter('brief')}
            onMouseLeave={handleMouseLeave}
            style={{ transitionDelay: '0.1s' }}
          >
            <div className="p-6 border border-white/10 rounded-xl h-full flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 ${
                  hoveredCard === 'brief' ? 'bg-teko-purple text-white' : 'bg-white/10 text-teko-purple-light'
                }`}>
                  <FileText size={24} />
                </div>
              </div>
              
              <h3 className="text-xl font-display font-bold mb-2">
                {safeTranslation('brief.title', "Отправьте нам ваше техническое задание")}
              </h3>
              <p className="text-teko-white/70 text-sm mb-6">
                {safeTranslation('brief.subtitle', "Расскажите нам о вашем проекте, и мы свяжемся с вами для обсуждения деталей")}
              </p>
              
              <div className="mt-auto pt-4">
                <Link 
                  to="/brief" 
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-md font-medium transition-all duration-300 ${
                    hoveredCard === 'brief' 
                      ? 'bg-teko-purple text-white' 
                      : 'bg-white/10 text-teko-white/80 hover:bg-white/20'
                  }`}
                >
                  {safeTranslation('about.fillBrief', "Заполнить бриф")}
                  <ArrowRight className="transition-transform duration-300 transform group-hover:translate-x-1" size={16} />
                </Link>
              </div>
            </div>
            
            {/* Corner Glow */}
            <div className={`absolute -bottom-10 -right-10 w-40 h-40 rounded-full transition-opacity duration-500 ${
              hoveredCard === 'brief' ? 'opacity-30 bg-teko-purple' : 'opacity-0 bg-transparent'
            } blur-2xl`}></div>
          </div>

          {/* Contact Us Card */}
          <div 
            className={`relative overflow-hidden rounded-xl transition-all duration-500 animate-on-scroll
              ${hoveredCard === 'contact' 
                ? 'bg-gradient-to-br from-teko-purple/20 to-teko-purple/5 z-10 scale-105' 
                : 'bg-white/5 backdrop-blur-sm'}`}
            onMouseEnter={() => handleMouseEnter('contact')}
            onMouseLeave={handleMouseLeave}
            style={{ transitionDelay: '0.2s' }}
          >
            <div className="p-6 border border-white/10 rounded-xl h-full flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 ${
                  hoveredCard === 'contact' ? 'bg-teko-purple text-white' : 'bg-white/10 text-teko-purple-light'
                }`}>
                  <Phone size={24} />
                </div>
              </div>
              
              <h3 className="text-xl font-display font-bold mb-2">
                {safeTranslation('about.contact.title', "Свяжитесь с нами")}
              </h3>
              <p className="text-teko-white/70 text-sm mb-6">
                {safeTranslation('about.contact.description', "Хотите обсудить проект или у вас есть вопрос? Напишите нам!")}
              </p>
              
              <div className="mt-auto pt-4">
                <Link 
                  to="/about#contact" 
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-md font-medium transition-all duration-300 ${
                    hoveredCard === 'contact' 
                      ? 'bg-teko-purple text-white' 
                      : 'bg-white/10 text-teko-white/80 hover:bg-white/20'
                  }`}
                >
                  {safeTranslation('footer.contact', "Связаться с нами")}
                  <ArrowRight className="transition-transform duration-300 transform group-hover:translate-x-1" size={16} />
                </Link>
              </div>
            </div>
            
            {/* Corner Glow */}
            <div className={`absolute -bottom-10 -right-10 w-40 h-40 rounded-full transition-opacity duration-500 ${
              hoveredCard === 'contact' ? 'opacity-30 bg-teko-purple' : 'opacity-0 bg-transparent'
            } blur-2xl`}></div>
          </div>
        </div>
      </div>

      {/* Add CSS for celebration effects */}
      <style>
        {`
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 10px 2px rgba(124, 58, 237, 0.3); }
          50% { box-shadow: 0 0 20px 5px rgba(124, 58, 237, 0.6); }
        }
        
        .pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
        
        .celebration-card {
          position: relative;
          overflow: hidden;
        }
        
        .celebration-card::before {
          content: '';
          position: absolute;
          inset: -5px;
          background: linear-gradient(90deg, #9b87f5, #D946EF, #F97316, #0EA5E9, #9b87f5);
          background-size: 400% 400%;
          z-index: -1;
          filter: blur(5px);
          opacity: 0.3;
          animation: gradient-move 10s ease infinite;
        }
        
        @keyframes gradient-move {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        `}
      </style>
    </section>
  );
};

export default UserJourney;
