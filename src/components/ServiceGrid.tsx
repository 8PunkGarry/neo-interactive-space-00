
import React from 'react';
import ServiceCard from './ServiceCard';
import { useLanguage } from '../context/LanguageContext';
import { Globe, BarChart3, Palette, Search, Headphones } from 'lucide-react';

const ServiceGrid = () => {
  const { t } = useLanguage();

  const services = [
    {
      title: t('services.web.title'),
      description: t('services.web.description'),
      icon: <Globe size={24} />,
      delay: 0.1
    },
    {
      title: t('services.crm.title'),
      description: t('services.crm.description'),
      icon: <BarChart3 size={24} />,
      delay: 0.2
    },
    {
      title: t('services.design.title'),
      description: t('services.design.description'),
      icon: <Palette size={24} />,
      delay: 0.3
    },
    {
      title: t('services.seo.title'),
      description: t('services.seo.description'),
      icon: <Search size={24} />,
      delay: 0.4
    },
    {
      title: t('services.support.title'),
      description: t('services.support.description'),
      icon: <Headphones size={24} />,
      delay: 0.5
    }
  ];

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-teko-black to-transparent"></div>
        <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-teko-purple/15 rounded-full filter blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 animate-on-scroll">
            {t('services.title')}
          </h2>
          <p className="text-lg md:text-xl text-teko-white/80 max-w-3xl mx-auto animate-on-scroll" style={{ transitionDelay: '0.1s' }}>
            {t('services.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              delay={service.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceGrid;
