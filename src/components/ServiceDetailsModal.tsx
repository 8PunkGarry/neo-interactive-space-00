
import React from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

interface ServiceCapability {
  name: string;
  icon: React.ReactNode;
}

interface ServiceDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: {
    id: string;
    title: string;
    description: string;
    icon: React.ReactNode;
    technologies: string[];
    capabilities: ServiceCapability[];
  } | null;
}

const ServiceDetailsModal: React.FC<ServiceDetailsModalProps> = ({
  isOpen,
  onClose,
  service
}) => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  
  if (!service) return null;
  
  const handleContactClick = () => {
    navigate('/brief');
    onClose();
  };
  
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-4xl bg-teko-black/90 backdrop-blur-md border border-white/10 text-teko-white overflow-y-auto max-h-[85vh]">
        <DialogHeader>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-full bg-teko-purple/20 flex items-center justify-center text-teko-purple-light">
              {service.icon}
            </div>
            <DialogTitle className="text-2xl font-display font-bold text-teko-purple-light">
              {service.title}
            </DialogTitle>
          </div>
          <DialogDescription className="text-teko-white/90 text-base">
            {service.description}
          </DialogDescription>
        </DialogHeader>
        
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-display font-medium mb-4 text-teko-white">
              {t('services.capabilities')}
            </h3>
            <div className="space-y-3">
              {service.capabilities.map((capability, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-teko-purple/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                    {capability.icon}
                  </div>
                  <div>
                    <p className="font-medium text-teko-white">{capability.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-display font-medium mb-4 text-teko-white">
              {t('services.technologies')}
            </h3>
            <div className="flex flex-wrap gap-2">
              {service.technologies.map((tech, idx) => (
                <Badge 
                  key={idx}
                  className="bg-white/10 text-teko-white border-white/10 px-3 py-1.5"
                >
                  {tech}
                </Badge>
              ))}
            </div>
            
            <div className="mt-10 pt-4 border-t border-white/10">
              <h3 className="text-xl font-display font-medium mb-4 text-teko-white">
                {t('services.cta.title')}
              </h3>
              <p className="text-teko-white/70 mb-4">
                {t('services.cta.description')}
              </p>
              <Button 
                onClick={handleContactClick}
                className="bg-teko-purple hover:bg-teko-purple-dark text-white flex items-center gap-2 px-6 py-2"
              >
                {t('services.cta.button')} <ArrowRight size={16} />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mt-8 p-4 rounded-lg bg-gradient-to-br from-teko-purple/10 to-transparent border border-teko-purple/20">
          <p className="text-sm text-teko-white/80">
            {(() => {
              // Определяем полное описание в зависимости от типа сервиса
              const serviceId = service.id;
              let translationKey;
              
              switch (serviceId) {
                case 'web-development':
                  translationKey = 'services.web.fullDescription';
                  break;
                case 'crm-solutions':
                  translationKey = 'services.crm.fullDescription';
                  break;
                case 'ui-ux-design':
                  translationKey = 'services.design.fullDescription';
                  break;
                case 'seo-optimization':
                  translationKey = 'services.seo.fullDescription';
                  break;
                case 'technical-support':
                  translationKey = 'services.support.fullDescription';
                  break;
                case 'api-integration':
                  translationKey = 'services.api.fullDescription';
                  break;
                case 'database-solutions':
                  translationKey = 'services.database.fullDescription';
                  break;
                case 'mobile-development':
                  translationKey = 'services.mobile.fullDescription';
                  break;
                case 'cloud-solutions':
                  translationKey = 'services.cloud.fullDescription';
                  break;
                case 'ai-solutions':
                  translationKey = 'services.ai.fullDescription';
                  break;
                case 'cybersecurity':
                  translationKey = 'services.cybersecurity.fullDescription';
                  break;
                case 'blockchain':
                  translationKey = 'services.blockchain.fullDescription';
                  break;
                case 'iot-solutions':
                  translationKey = 'services.iot.fullDescription';
                  break;
                case 'ar-vr':
                  translationKey = 'services.arvr.fullDescription';
                  break;
                case 'data-science':
                  translationKey = 'services.datascience.fullDescription';
                  break;
                default:
                  return service.description;
              }
              
              return t(translationKey);
            })()}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ServiceDetailsModal;
