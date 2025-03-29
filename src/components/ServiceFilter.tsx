
import React from 'react';
import { Grid, List } from 'lucide-react';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { useLanguage } from '@/context/LanguageContext';

interface ServiceFilterProps {
  viewMode: 'grid' | 'list';
  onViewModeChange: (mode: 'grid' | 'list') => void;
  totalServices?: number; // Make this optional
}

const ServiceFilter: React.FC<ServiceFilterProps> = ({ 
  viewMode, 
  onViewModeChange,
}) => {
  const { t } = useLanguage();
  
  return (
    <div className="flex flex-col sm:flex-row justify-end items-center mb-8">
      <div className="flex items-center gap-4">
        <span className="text-teko-white/70 hidden md:inline">{t('services.viewAs')}:</span>
        <ToggleGroup type="single" value={viewMode} onValueChange={(value) => value && onViewModeChange(value as 'grid' | 'list')}>
          <ToggleGroupItem value="grid" aria-label="Grid view" className="data-[state=on]:bg-teko-purple/30">
            <Grid size={18} className="mr-1" />
            <span className="hidden md:inline">{t('services.gridView')}</span>
          </ToggleGroupItem>
          <ToggleGroupItem value="list" aria-label="List view" className="data-[state=on]:bg-teko-purple/30">
            <List size={18} className="mr-1" />
            <span className="hidden md:inline">{t('services.listView')}</span>
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
    </div>
  );
};

export default ServiceFilter;
