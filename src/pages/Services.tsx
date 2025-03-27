import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ServiceGrid from '../components/ServiceGrid';
import { useLanguage } from '../context/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Server, Code, Globe, Database, Smartphone, Cloud, BarChart3, Shield, Search, Palette, Headphones } from 'lucide-react';

const Services = () => {
  const { t } = useLanguage();
  
  // Service details with more content
  const serviceDetails = [
    {
      id: 'web-development',
      icon: <Globe size={36} className="text-teko-purple" />,
      title: t('services.web.title'),
      description: t('services.web.fullDescription'),
      technologies: ['React', 'Angular', 'Vue.js', 'Next.js', 'WordPress', 'PHP', 'Node.js', 'Express'],
      capabilities: [
        { name: t('services.web.capabilities.responsive'), icon: <Smartphone size={16} /> },
        { name: t('services.web.capabilities.ecommerce'), icon: <BarChart3 size={16} /> },
        { name: t('services.web.capabilities.cms'), icon: <Server size={16} /> },
        { name: t('services.web.capabilities.spa'), icon: <Code size={16} /> }
      ]
    },
    {
      id: 'crm-solutions',
      icon: <BarChart3 size={36} className="text-teko-purple" />,
      title: t('services.crm.title'),
      description: t('services.crm.fullDescription'),
      technologies: ['Salesforce', 'HubSpot', 'Zoho', 'Microsoft Dynamics', 'Custom CRM Solutions'],
      capabilities: [
        { name: t('services.crm.capabilities.automation'), icon: <Server size={16} /> },
        { name: t('services.crm.capabilities.analytics'), icon: <BarChart3 size={16} /> },
        { name: t('services.crm.capabilities.integration'), icon: <Code size={16} /> },
        { name: t('services.crm.capabilities.custom'), icon: <Palette size={16} /> }
      ]
    },
    {
      id: 'ui-ux-design',
      icon: <Palette size={36} className="text-teko-purple" />,
      title: t('services.design.title'),
      description: t('services.design.fullDescription'),
      technologies: ['Figma', 'Adobe XD', 'Sketch', 'Photoshop', 'Illustrator', 'InVision'],
      capabilities: [
        { name: t('services.design.capabilities.ui'), icon: <Palette size={16} /> },
        { name: t('services.design.capabilities.ux'), icon: <Smartphone size={16} /> },
        { name: t('services.design.capabilities.branding'), icon: <Globe size={16} /> },
        { name: t('services.design.capabilities.prototyping'), icon: <Code size={16} /> }
      ]
    },
    {
      id: 'seo-optimization',
      icon: <Search size={36} className="text-teko-purple" />,
      title: t('services.seo.title'),
      description: t('services.seo.fullDescription'),
      technologies: ['Google Analytics', 'SEMrush', 'Ahrefs', 'Moz', 'Google Search Console', 'Yoast SEO'],
      capabilities: [
        { name: t('services.seo.capabilities.audit'), icon: <Search size={16} /> },
        { name: t('services.seo.capabilities.optimization'), icon: <Code size={16} /> },
        { name: t('services.seo.capabilities.analytics'), icon: <BarChart3 size={16} /> },
        { name: t('services.seo.capabilities.local'), icon: <Globe size={16} /> }
      ]
    },
    {
      id: 'technical-support',
      icon: <Headphones size={36} className="text-teko-purple" />,
      title: t('services.support.title'),
      description: t('services.support.fullDescription'),
      technologies: ['24/7 Support', 'Ticketing Systems', 'Live Chat', 'Remote Assistance', 'Proactive Monitoring'],
      capabilities: [
        { name: t('services.support.capabilities.maintenance'), icon: <Server size={16} /> },
        { name: t('services.support.capabilities.hosting'), icon: <Cloud size={16} /> },
        { name: t('services.support.capabilities.security'), icon: <Shield size={16} /> },
        { name: t('services.support.capabilities.updates'), icon: <Code size={16} /> }
      ]
    },
    {
      id: 'api-integration',
      icon: <Code size={36} className="text-teko-purple" />,
      title: t('services.api.title'),
      description: t('services.api.fullDescription'),
      technologies: ['REST', 'GraphQL', 'SOAP', 'Webhook', 'OAuth', 'Swagger', 'Postman'],
      capabilities: [
        { name: t('services.api.capabilities.integration'), icon: <Server size={16} /> },
        { name: t('services.api.capabilities.development'), icon: <Code size={16} /> },
        { name: t('services.api.capabilities.testing'), icon: <Search size={16} /> },
        { name: t('services.api.capabilities.documentation'), icon: <Database size={16} /> }
      ]
    },
    {
      id: 'database-solutions',
      icon: <Database size={36} className="text-teko-purple" />,
      title: t('services.database.title'),
      description: t('services.database.fullDescription'),
      technologies: ['MySQL', 'PostgreSQL', 'MongoDB', 'Firebase', 'Redis', 'SQLite', 'Oracle', 'SQL Server'],
      capabilities: [
        { name: t('services.database.capabilities.design'), icon: <Palette size={16} /> },
        { name: t('services.database.capabilities.optimization'), icon: <Server size={16} /> },
        { name: t('services.database.capabilities.migration'), icon: <Code size={16} /> },
        { name: t('services.database.capabilities.security'), icon: <Shield size={16} /> }
      ]
    },
    {
      id: 'mobile-development',
      icon: <Smartphone size={36} className="text-teko-purple" />,
      title: t('services.mobile.title'),
      description: t('services.mobile.fullDescription'),
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'iOS', 'Android', 'Xamarin', 'Ionic'],
      capabilities: [
        { name: t('services.mobile.capabilities.native'), icon: <Smartphone size={16} /> },
        { name: t('services.mobile.capabilities.hybrid'), icon: <Code size={16} /> },
        { name: t('services.mobile.capabilities.responsive'), icon: <Palette size={16} /> },
        { name: t('services.mobile.capabilities.pwa'), icon: <Globe size={16} /> }
      ]
    },
    {
      id: 'cloud-solutions',
      icon: <Cloud size={36} className="text-teko-purple" />,
      title: t('services.cloud.title'),
      description: t('services.cloud.fullDescription'),
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Digital Ocean', 'Heroku', 'Netlify', 'Vercel', 'Docker', 'Kubernetes'],
      capabilities: [
        { name: t('services.cloud.capabilities.aws'), icon: <Cloud size={16} /> },
        { name: t('services.cloud.capabilities.azure'), icon: <Server size={16} /> },
        { name: t('services.cloud.capabilities.google'), icon: <Database size={16} /> },
        { name: t('services.cloud.capabilities.scaling'), icon: <BarChart3 size={16} /> }
      ]
    }
  ];
  
  return (
    <div className="min-h-screen bg-teko-black">
      <Navbar />
      
      <main className="pt-32 pb-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              {t('services.title')}
            </h1>
            <p className="text-teko-white/70 max-w-3xl mx-auto">
              {t('services.description')}
            </p>
          </div>
          
          {/* Add the ServiceGrid to show all services at the top with higher z-index */}
          <div className="relative z-50">
            <ServiceGrid limitToThree={false} />
          </div>
          
          {/* Detailed services section */}
          <div className="mt-32 relative z-40">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-center animate-on-scroll">
              {t('services.detailedServicesTitle')}
            </h2>
            
            <div className="space-y-24">
              {serviceDetails.map((service, index) => (
                <div 
                  key={service.id} 
                  id={service.id}
                  className="scroll-mt-32 animate-on-scroll"
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  <div className="glass-card rounded-xl p-8 backdrop-blur-sm border border-white/10 relative z-30">
                    <div className="flex flex-col md:flex-row gap-8">
                      <div className="flex-shrink-0 flex items-start justify-center">
                        <div className="w-20 h-20 rounded-xl bg-teko-purple/20 flex items-center justify-center">
                          {service.icon}
                        </div>
                      </div>
                      
                      <div className="flex-grow">
                        <h3 className="text-2xl font-display font-bold mb-4 text-teko-purple-light">
                          {service.title}
                        </h3>
                        
                        <p className="text-teko-white/80 mb-6">
                          {service.description}
                        </p>
                        
                        <h4 className="text-xl font-display font-medium mb-3 text-teko-white">
                          {t('services.capabilities')}
                        </h4>
                        
                        <div className="flex flex-wrap gap-3 mb-6">
                          {service.capabilities.map((capability, idx) => (
                            <Badge 
                              key={idx}
                              className="bg-teko-purple/30 text-teko-white border-teko-purple/30 px-3 py-1.5 flex items-center gap-2 text-sm"
                            >
                              {capability.icon}
                              {capability.name}
                            </Badge>
                          ))}
                        </div>
                        
                        <h4 className="text-xl font-display font-medium mb-3 text-teko-white">
                          {t('services.technologies')}
                        </h4>
                        
                        <div className="flex flex-wrap gap-2">
                          {service.technologies.map((tech, idx) => (
                            <Badge 
                              key={idx}
                              className="bg-white/10 text-teko-white/80 border-white/10"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-20 max-w-5xl mx-auto relative z-30">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
              <div className="animate-on-scroll">
                <h2 className="text-2xl font-display font-bold mb-6 text-teko-purple-light">
                  {t('services.approach.title')}
                </h2>
                <p className="text-teko-white/80 mb-6">
                  {t('services.approach.description')}
                </p>
                <ul className="space-y-4">
                  {[1, 2, 3, 4].map((i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-teko-purple/20 flex items-center justify-center mt-0.5">
                        <span className="text-teko-purple font-bold text-sm">{i}</span>
                      </div>
                      <p className="text-teko-white/80">
                        {t(`services.approach.step${i}`)}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="glass-card rounded-xl p-8 animate-on-scroll" style={{ transitionDelay: "0.1s" }}>
                <h2 className="text-2xl font-display font-bold mb-6 text-teko-purple-light">
                  {t('services.benefits.title')}
                </h2>
                <ul className="space-y-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 text-teko-purple">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                      </div>
                      <p className="text-teko-white/80">
                        {t(`services.benefits.benefit${i}`)}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="glass-card p-8 rounded-xl animate-on-scroll">
              <h2 className="text-2xl font-display font-bold mb-6 text-center text-teko-purple-light">
                {t('services.cta.title')}
              </h2>
              <p className="text-teko-white/80 text-center mb-8">
                {t('services.cta.description')}
              </p>
              <div className="flex justify-center">
                <a 
                  href="/brief" 
                  className="group relative overflow-hidden rounded-lg bg-teko-purple px-6 py-3 text-white text-lg font-medium transition-all duration-300 hover:bg-teko-purple-dark"
                >
                  <span className="relative z-10">{t('services.cta.button')}</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-teko-purple to-teko-gradient-end opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Services;
