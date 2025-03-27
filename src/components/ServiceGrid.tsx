
import React from 'react';
import ServiceCard from './ServiceCard';
import { useLanguage } from '../context/LanguageContext';
import { Globe, BarChart3, Palette, Search, Headphones, Code, Database, Smartphone, Cloud } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  capabilities: string[];
  delay: number;
  url: string;
  isViewAll?: boolean;
}

interface ServiceGridProps {
  limitToThree?: boolean;
}

const ServiceGrid: React.FC<ServiceGridProps> = ({ limitToThree = false }) => {
  const { t } = useLanguage();

  const services: ServiceItem[] = [
    {
      title: t('services.web.title'),
      description: t('services.web.description'),
      icon: <Globe size={24} />,
      capabilities: [
        t('services.web.capabilities.responsive'),
        t('services.web.capabilities.ecommerce'),
        t('services.web.capabilities.cms'),
        t('services.web.capabilities.spa')
      ],
      delay: 0.1,
      url: "/services#web-development"
    },
    {
      title: t('services.crm.title'),
      description: t('services.crm.description'),
      icon: <BarChart3 size={24} />,
      capabilities: [
        t('services.crm.capabilities.automation'),
        t('services.crm.capabilities.analytics'),
        t('services.crm.capabilities.integration'),
        t('services.crm.capabilities.custom')
      ],
      delay: 0.2,
      url: "/services#crm-solutions"
    }
  ];
  
  const homePageServices = [...services];
  
  if (limitToThree) {
    homePageServices.push({
      title: t('services.viewAll.title'),
      description: t('services.viewAll.description'),
      icon: <Palette size={24} />,
      capabilities: [],
      delay: 0.3,
      url: "/services",
      isViewAll: true
    });
  } else {
    const allOtherServices: ServiceItem[] = [
      {
        title: t('services.design.title'),
        description: t('services.design.description'),
        icon: <Palette size={24} />,
        capabilities: [
          t('services.design.capabilities.ui'),
          t('services.design.capabilities.ux'),
          t('services.design.capabilities.branding'),
          t('services.design.capabilities.prototyping')
        ],
        delay: 0.3,
        url: "/services#ui-ux-design"
      },
      {
        title: t('services.seo.title'),
        description: t('services.seo.description'),
        icon: <Search size={24} />,
        capabilities: [
          t('services.seo.capabilities.audit'),
          t('services.seo.capabilities.optimization'),
          t('services.seo.capabilities.analytics'),
          t('services.seo.capabilities.local')
        ],
        delay: 0.4,
        url: "/services#seo-optimization"
      },
      {
        title: t('services.support.title'),
        description: t('services.support.description'),
        icon: <Headphones size={24} />,
        capabilities: [
          t('services.support.capabilities.maintenance'),
          t('services.support.capabilities.hosting'),
          t('services.support.capabilities.security'),
          t('services.support.capabilities.updates')
        ],
        delay: 0.5,
        url: "/services#technical-support"
      },
      {
        title: t('services.api.title'),
        description: t('services.api.description'),
        icon: <Code size={24} />,
        capabilities: [
          t('services.api.capabilities.integration'),
          t('services.api.capabilities.development'),
          t('services.api.capabilities.testing'),
          t('services.api.capabilities.documentation')
        ],
        delay: 0.6,
        url: "/services#api-integration"
      },
      {
        title: t('services.database.title'),
        description: t('services.database.description'),
        icon: <Database size={24} />,
        capabilities: [
          t('services.database.capabilities.design'),
          t('services.database.capabilities.optimization'),
          t('services.database.capabilities.migration'),
          t('services.database.capabilities.security')
        ],
        delay: 0.7,
        url: "/services#database-solutions"
      },
      {
        title: t('services.mobile.title'),
        description: t('services.mobile.description'),
        icon: <Smartphone size={24} />,
        capabilities: [
          t('services.mobile.capabilities.native'),
          t('services.mobile.capabilities.hybrid'),
          t('services.mobile.capabilities.responsive'),
          t('services.mobile.capabilities.pwa')
        ],
        delay: 0.8,
        url: "/services#mobile-development"
      },
      {
        title: t('services.cloud.title'),
        description: t('services.cloud.description'),
        icon: <Cloud size={24} />,
        capabilities: [
          t('services.cloud.capabilities.aws'),
          t('services.cloud.capabilities.azure'),
          t('services.cloud.capabilities.google'),
          t('services.cloud.capabilities.scaling')
        ],
        delay: 0.9,
        url: "/services#cloud-solutions"
      }
    ];
    
    homePageServices.push(...allOtherServices);
  }

  return (
    <section id="services" className="py-20 relative z-50">
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-teko-black to-transparent"></div>
        <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-teko-purple/15 rounded-full filter blur-[100px]"></div>
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-teko-purple/10 rounded-full filter blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-50">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 animate-on-scroll">
            {t('services.title')}
          </h2>
          <p className="text-lg md:text-xl text-teko-white/80 max-w-3xl mx-auto animate-on-scroll" style={{ transitionDelay: '0.1s' }}>
            {t('services.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-50">
          {homePageServices.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              capabilities={service.capabilities}
              delay={service.delay}
              url={service.url}
              isViewAll={service.isViewAll}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceGrid;
