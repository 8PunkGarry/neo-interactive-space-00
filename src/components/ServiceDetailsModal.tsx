
import React from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

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
              Capabilities
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
              Technologies
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
                Ready to get started?
              </h3>
              <p className="text-teko-white/70 mb-4">
                Contact us to discuss how our {service.title.toLowerCase()} services can benefit your business.
              </p>
              <Button 
                onClick={handleContactClick}
                className="bg-teko-purple hover:bg-teko-purple-dark text-white flex items-center gap-2 px-6 py-2"
              >
                Get a quote <ArrowRight size={16} />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mt-8 p-4 rounded-lg bg-gradient-to-br from-teko-purple/10 to-transparent border border-teko-purple/20">
          <p className="text-sm text-teko-white/80 italic">
            Our {service.title.toLowerCase()} services are designed to help you achieve your business goals. 
            We use cutting-edge technologies and best practices to deliver exceptional results.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ServiceDetailsModal;
