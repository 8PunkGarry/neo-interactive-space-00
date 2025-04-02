
import React from 'react';
import { X } from 'lucide-react';
import { Badge } from './ui/badge';
import { useLanguage } from '@/context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';

export interface Capability {
  id: string;
  name: string;
  serviceId: string;
  serviceName: string;
}

interface SelectedCapabilitiesProps {
  capabilities: Capability[];
  onRemove: (id: string) => void;
}

const SelectedCapabilities: React.FC<SelectedCapabilitiesProps> = ({ 
  capabilities, 
  onRemove 
}) => {
  const { t } = useLanguage();
  
  if (capabilities.length === 0) return null;
  
  return (
    <div className="my-8 p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl">
      <h3 className="text-xl font-display font-bold mb-4 text-teko-white">
        {t('services.selectedCapabilities.title')}
        <span className="ml-2 text-sm bg-teko-purple/30 text-teko-white px-2 py-1 rounded-full">
          {capabilities.length}
        </span>
      </h3>
      
      <p className="text-teko-white/70 mb-4">
        {t('services.selectedCapabilities.description')}
      </p>
      
      <div className="flex flex-wrap gap-2">
        <AnimatePresence>
          {capabilities.map((capability) => (
            <motion.div
              key={capability.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              className="relative"
            >
              <Badge 
                className="bg-teko-purple/30 text-teko-white border-teko-purple/30 px-3 py-1.5 pr-8 flex items-center gap-2"
              >
                <span>{capability.name}</span>
                <span className="text-xs text-teko-white/70">({capability.serviceName})</span>
                <button 
                  onClick={() => onRemove(capability.id)}
                  className="absolute right-1.5 top-1/2 transform -translate-y-1/2 text-teko-white/70 hover:text-teko-white transition-colors"
                >
                  <X size={14} />
                </button>
              </Badge>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SelectedCapabilities;
