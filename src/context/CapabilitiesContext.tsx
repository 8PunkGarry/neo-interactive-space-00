
import React, { createContext, useContext, useState, useEffect } from 'react';
import { Capability } from '@/components/SelectedCapabilities';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from './LanguageContext';

interface CapabilitiesContextType {
  selectedCapabilities: Capability[];
  addCapability: (capability: Omit<Capability, 'id'>) => void;
  removeCapability: (id: string) => void;
  clearCapabilities: () => void;
}

const CapabilitiesContext = createContext<CapabilitiesContextType | undefined>(undefined);

export const useCapabilities = () => {
  const context = useContext(CapabilitiesContext);
  if (!context) {
    throw new Error('useCapabilities must be used within a CapabilitiesProvider');
  }
  return context;
};

export const CapabilitiesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedCapabilities, setSelectedCapabilities] = useState<Capability[]>([]);
  const { toast } = useToast();
  const { language } = useLanguage();
  
  // Load from localStorage on mount
  useEffect(() => {
    const savedCapabilities = localStorage.getItem('selectedCapabilities');
    if (savedCapabilities) {
      try {
        setSelectedCapabilities(JSON.parse(savedCapabilities));
      } catch (e) {
        console.error('Failed to parse saved capabilities', e);
      }
    }
  }, []);
  
  // Save to localStorage when updated
  useEffect(() => {
    localStorage.setItem('selectedCapabilities', JSON.stringify(selectedCapabilities));
  }, [selectedCapabilities]);
  
  const addCapability = (capability: Omit<Capability, 'id'>) => {
    const id = `${capability.serviceId}-${capability.name.replace(/\s+/g, '-').toLowerCase()}`;
    
    // Check if already exists
    if (selectedCapabilities.some(cap => cap.id === id)) {
      toast({
        title: language === 'en' ? "Already added" : 
               language === 'ru' ? "Уже добавлено" : 
               "Již přidáno",
        description: language === 'en' ? "This capability is already in your selection" : 
                     language === 'ru' ? "Эта возможность уже в вашем выборе" : 
                     "Tato schopnost je již ve vašem výběru",
        variant: "default"
      });
      return;
    }
    
    const newCapability: Capability = {
      ...capability,
      id
    };
    
    setSelectedCapabilities(prev => [...prev, newCapability]);
    
    toast({
      title: language === 'en' ? "Capability added" : 
             language === 'ru' ? "Возможность добавлена" : 
             "Schopnost přidána",
      description: language === 'en' ? `${capability.name} has been added to your selection` : 
                   language === 'ru' ? `${capability.name} добавлена в ваш выбор` : 
                   `${capability.name} byla přidána do vašeho výběru`,
      variant: "default"
    });
  };
  
  const removeCapability = (id: string) => {
    setSelectedCapabilities(prev => prev.filter(cap => cap.id !== id));
  };
  
  const clearCapabilities = () => {
    setSelectedCapabilities([]);
  };
  
  return (
    <CapabilitiesContext.Provider 
      value={{ 
        selectedCapabilities, 
        addCapability, 
        removeCapability, 
        clearCapabilities 
      }}
    >
      {children}
    </CapabilitiesContext.Provider>
  );
};
