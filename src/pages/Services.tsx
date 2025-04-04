
import React, { useState, useMemo } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ServiceSearch from '../components/ServiceSearch';
import ServiceFilter from '../components/ServiceFilter';
import ServiceDetailsModal from '../components/ServiceDetailsModal';
import { useLanguage } from '../context/LanguageContext';
import { Badge } from '@/components/ui/badge';
import { Server, Code, Globe, Database, Smartphone, Cloud, BarChart3, Shield, Search, Palette, Headphones, ArrowRight } from 'lucide-react';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import SelectedCapabilities from '@/components/SelectedCapabilities';
import { useCapabilities } from '@/context/CapabilitiesContext';
import { motion } from 'framer-motion';

const Services = () => {
  const { t } = useLanguage();
  const { selectedCapabilities, removeCapability } = useCapabilities();
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedService, setSelectedService] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const servicesPerPage = 6;
  const navigate = useNavigate();
  
  const serviceDetails = [
    {
      id: 'web-development',
      icon: <Globe size={36} className="text-teko-purple" />,
      title: t('services.web.title'),
      description: t('services.web.description'),
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
      description: t('services.crm.description'),
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
      description: t('services.design.description'),
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
      description: t('services.seo.description'),
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
      description: t('services.support.description'),
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
      description: t('services.api.description'),
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
      description: t('services.database.description'),
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
      description: t('services.mobile.description'),
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
      description: t('services.cloud.description'),
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Digital Ocean', 'Heroku', 'Netlify', 'Vercel', 'Docker', 'Kubernetes'],
      capabilities: [
        { name: t('services.cloud.capabilities.aws'), icon: <Cloud size={16} /> },
        { name: t('services.cloud.capabilities.azure'), icon: <Server size={16} /> },
        { name: t('services.cloud.capabilities.google'), icon: <Database size={16} /> },
        { name: t('services.cloud.capabilities.scaling'), icon: <BarChart3 size={16} /> }
      ]
    },
    {
      id: 'ai-solutions',
      icon: <BarChart3 size={36} className="text-teko-purple" />,
      title: t('services.ai.title'),
      description: t('services.ai.description'),
      technologies: ['TensorFlow', 'PyTorch', 'OpenAI', 'Hugging Face', 'Computer Vision', 'NLP', 'MLOps'],
      capabilities: [
        { name: 'Machine Learning', icon: <Code size={16} /> },
        { name: 'Natural Language Processing', icon: <Database size={16} /> },
        { name: 'Computer Vision', icon: <Search size={16} /> },
        { name: 'Predictive Analytics', icon: <BarChart3 size={16} /> }
      ]
    },
    {
      id: 'cybersecurity',
      icon: <Shield size={36} className="text-teko-purple" />,
      title: t('services.cybersecurity.title'),
      description: t('services.cybersecurity.description'),
      technologies: ['Firewall', 'Encryption', 'Multi-factor Authentication', 'Security Audits', 'Penetration Testing'],
      capabilities: [
        { name: 'Vulnerability Assessment', icon: <Search size={16} /> },
        { name: 'Threat Detection', icon: <Shield size={16} /> },
        { name: 'Incident Response', icon: <Server size={16} /> },
        { name: 'Security Training', icon: <Headphones size={16} /> }
      ]
    },
    {
      id: 'blockchain',
      icon: <Database size={36} className="text-teko-purple" />,
      title: t('services.blockchain.title'),
      description: t('services.blockchain.description'),
      technologies: ['Ethereum', 'Solidity', 'Smart Contracts', 'DeFi', 'NFTs', 'Web3.js'],
      capabilities: [
        { name: 'Smart Contracts', icon: <Code size={16} /> },
        { name: 'DApp Development', icon: <Globe size={16} /> },
        { name: 'Tokenization', icon: <Database size={16} /> },
        { name: 'Blockchain Integration', icon: <Server size={16} /> }
      ]
    },
    {
      id: 'iot-solutions',
      icon: <Smartphone size={36} className="text-teko-purple" />,
      title: t('services.iot.title'),
      description: t('services.iot.description'),
      technologies: ['Arduino', 'Raspberry Pi', 'MQTT', 'IoT Platforms', 'Sensors', 'Embedded Systems'],
      capabilities: [
        { name: 'Connected Devices', icon: <Smartphone size={16} /> },
        { name: 'Remote Monitoring', icon: <Globe size={16} /> },
        { name: 'Data Analytics', icon: <BarChart3 size={16} /> },
        { name: 'Automation Systems', icon: <Server size={16} /> }
      ]
    },
    {
      id: 'ar-vr',
      icon: <Globe size={36} className="text-teko-purple" />,
      title: t('services.arvr.title'),
      description: t('services.arvr.description'),
      technologies: ['Unity3D', 'Unreal Engine', 'ARKit', 'ARCore', 'WebXR', 'VR Headsets'],
      capabilities: [
        { name: 'Interactive Experiences', icon: <Palette size={16} /> },
        { name: '3D Modeling', icon: <Code size={16} /> },
        { name: 'Spatial Computing', icon: <Globe size={16} /> },
        { name: 'Cross-platform AR/VR', icon: <Smartphone size={16} /> }
      ]
    },
    {
      id: 'data-science',
      icon: <BarChart3 size={36} className="text-teko-purple" />,
      title: t('services.datascience.title'),
      description: t('services.datascience.description'),
      technologies: ['Python', 'R', 'SQL', 'Tableau', 'Power BI', 'Pandas', 'Hadoop', 'Spark'],
      capabilities: [
        { name: 'Data Analysis', icon: <BarChart3 size={16} /> },
        { name: 'Statistical Modeling', icon: <Database size={16} /> },
        { name: 'Predictive Analytics', icon: <Code size={16} /> },
        { name: 'Data Visualization', icon: <Palette size={16} /> }
      ]
    }
  ];

  const filteredServices = useMemo(() => {
    if (!searchTerm) return serviceDetails;
    
    const term = searchTerm.toLowerCase();
    return serviceDetails.filter(service => 
      service.title.toLowerCase().includes(term) || 
      service.description.toLowerCase().includes(term) ||
      service.technologies.some(tech => tech.toLowerCase().includes(term)) ||
      service.capabilities.some(cap => cap.name.toLowerCase().includes(term))
    );
  }, [searchTerm, serviceDetails]);

  const indexOfLastService = currentPage * servicesPerPage;
  const indexOfFirstService = indexOfLastService - servicesPerPage;
  const currentServices = filteredServices.slice(indexOfFirstService, indexOfLastService);
  const totalPages = Math.ceil(filteredServices.length / servicesPerPage);
  
  const goToContactPage = () => {
    navigate('/brief');
  };
  
  const handleServiceClick = (service: any) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
  };
  
  // Animation variants for selected capabilities
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };
  
  return (
    <div className="min-h-screen bg-teko-black relative">
      <Navbar />
      
      <main className="pt-24 pb-20 relative z-[5]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 relative z-[20]">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white" style={{ textShadow: '0 0 10px rgba(0, 0, 0, 0.5)' }}>
              {t('services.title')}
            </h1>
            <p className="text-teko-white max-w-3xl mx-auto" style={{ textShadow: '0 0 8px rgba(0, 0, 0, 0.5)' }}>
              {t('services.description')}
            </p>
          </div>
          
          <div className="relative z-[30]">
            <ServiceSearch onSearch={setSearchTerm} />
          </div>
          
          <div className="relative z-[25]">
            <ServiceFilter 
              viewMode={viewMode} 
              onViewModeChange={setViewMode} 
              totalServices={filteredServices.length}
            />
          </div>
          
          {selectedCapabilities.length > 0 && (
            <motion.div 
              className="relative z-[22] mt-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <SelectedCapabilities
                capabilities={selectedCapabilities}
                onRemove={removeCapability}
              />
            </motion.div>
          )}
          
          <div className="mt-8 mb-12 relative z-[20]">
            <div className={`grid ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-3' : 'grid-cols-1'} gap-8`}>
              {currentServices.map((service, index) => (
                <div 
                  key={service.id} 
                  id={service.id}
                  className="relative z-[15]"
                  onClick={() => handleServiceClick(service)}
                >
                  <div className="glass-card rounded-xl p-8 backdrop-blur-sm border border-white/10 h-full relative z-[10] transition-all duration-300 hover:bg-white/5 cursor-pointer hover:border-teko-purple/20 hover:shadow-lg hover:shadow-teko-purple/5">
                    <div className={`flex ${viewMode === 'grid' ? 'flex-col' : 'flex-col md:flex-row'} gap-8`}>
                      <div className="flex-shrink-0 flex items-start justify-center">
                        <div className="w-20 h-20 rounded-xl bg-teko-purple/20 flex items-center justify-center">
                          {service.icon}
                        </div>
                      </div>
                      
                      <div className="flex-grow">
                        <h3 className="text-2xl font-display font-bold mb-4 text-teko-purple-light">
                          {service.title}
                        </h3>
                        
                        <p className="text-teko-white mb-6">
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
                        
                        {viewMode === 'list' && (
                          <>
                            <h4 className="text-xl font-display font-medium mb-3 text-teko-white">
                              {t('services.technologies')}
                            </h4>
                            
                            <div className="flex flex-wrap gap-2">
                              {service.technologies.map((tech, idx) => (
                                <Badge 
                                  key={idx}
                                  className="bg-white/10 text-teko-white border-white/10"
                                >
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              
              {filteredServices.length === 0 && (
                <div className="text-center py-12 col-span-3">
                  <p className="text-teko-white text-lg">
                    {t('services.search.noResults')}
                  </p>
                </div>
              )}
            </div>
            
            {filteredServices.length > servicesPerPage && (
              <div className="relative z-[15] mt-12">
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious 
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer hover:bg-teko-purple/20"}
                      />
                    </PaginationItem>
                    
                    {[1, 2, 3].map((pageNumber) => (
                      <PaginationItem key={pageNumber}>
                        <PaginationLink 
                          isActive={currentPage === pageNumber}
                          onClick={() => setCurrentPage(pageNumber)}
                          className={`cursor-pointer hover:bg-teko-purple/20 data-[active=true]:bg-teko-purple/30 ${pageNumber > totalPages ? "pointer-events-none opacity-50" : ""}`}
                        >
                          {pageNumber}
                        </PaginationLink>
                      </PaginationItem>
                    ))}
                    
                    <PaginationItem>
                      <PaginationNext 
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                        className={currentPage === totalPages || currentPage === 3 ? "pointer-events-none opacity-50" : "cursor-pointer hover:bg-teko-purple/20"}
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            )}
          </div>
          
          <div className="mt-20 max-w-5xl mx-auto relative z-[15]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
              <div className="relative z-[10]">
                <h2 className="text-2xl font-display font-bold mb-6 text-teko-purple-light">
                  {t('services.approach.title')}
                </h2>
                <p className="text-teko-white mb-6">
                  {t('services.approach.description')}
                </p>
                <ul className="space-y-4">
                  {[1, 2, 3, 4].map((i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-teko-purple/20 flex items-center justify-center mt-0.5">
                        <span className="text-teko-purple font-bold text-sm">{i}</span>
                      </div>
                      <p className="text-teko-white">
                        {t(`services.approach.step${i}`)}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="glass-card rounded-xl p-8 relative z-[10]">
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
                      <p className="text-teko-white">
                        {t(`services.benefits.benefit${i}`)}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="glass-card p-8 rounded-xl relative z-[10]">
              <h2 className="text-2xl font-display font-bold mb-6 text-center text-teko-purple-light">
                {t('services.cta.title')}
              </h2>
              <p className="text-teko-white text-center mb-8">
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
            
            <div className="flex justify-center mt-16 relative z-[10]">
              <Button 
                onClick={goToContactPage}
                className="bg-teko-purple hover:bg-teko-purple-dark text-white flex items-center gap-2 px-8 py-6 text-lg rounded-xl"
              >
                {t('services.nextPage')}
                <ArrowRight size={20} />
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <ServiceDetailsModal 
        isOpen={isModalOpen}
        onClose={closeModal}
        service={selectedService}
      />
      
      <Footer />
    </div>
  );
};

export default Services;
