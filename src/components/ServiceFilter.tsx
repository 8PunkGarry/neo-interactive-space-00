
import React from 'react';
import { Grid, List } from 'lucide-react';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { useLanguage } from '@/context/LanguageContext';

interface ServiceFilterProps {
  viewMode: 'grid' | 'list';
  onViewModeChange: (mode: 'grid' | 'list') => void;
  totalServices?: number;
}

const ServiceFilter: React.FC<ServiceFilterProps> = ({ 
  viewMode, 
  onViewModeChange,
  totalServices = 0
}) => {
  const { t } = useLanguage();
  
  // Create proper display text for results count
  const resultsText = totalServices === 1 
    ? `${totalServices} ${t('services.singleResult')}`
    : `${totalServices} ${t('services.multipleResults')}`;
  
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center mb-8 relative" style={{ zIndex: 1050 }}>
      {totalServices > 0 && (
        <div className="text-teko-white mb-4 sm:mb-0 font-medium" style={{ textShadow: '0 0 8px rgba(0, 0, 0, 0.6)' }}>
          {resultsText}
        </div>
      )}
      
      <div className="flex items-center gap-4">
        <span className="text-teko-white font-medium hidden md:inline" style={{ textShadow: '0 0 8px rgba(0, 0, 0, 0.6)' }}>
          {t('services.viewAs')}:
        </span>
        <ToggleGroup 
          type="single" 
          value={viewMode} 
          onValueChange={(value) => value && onViewModeChange(value as 'grid' | 'list')}
          className="bg-white/10 backdrop-blur-sm p-1 rounded-md border border-white/20 relative z-50"
        >
          <ToggleGroupItem 
            value="grid" 
            aria-label="Grid view" 
            className="data-[state=on]:bg-teko-purple/50 text-teko-white"
          >
            <Grid size={18} className="mr-1" />
            <span className="hidden md:inline">{t('services.gridView')}</span>
          </ToggleGroupItem>
          <ToggleGroupItem 
            value="list" 
            aria-label="List view" 
            className="data-[state=on]:bg-teko-purple/50 text-teko-white"
          >
            <List size={18} className="mr-1" />
            <span className="hidden md:inline">{t('services.listView')}</span>
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
    </div>
  );
};

export default ServiceFilter;
