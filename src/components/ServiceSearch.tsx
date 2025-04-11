
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';

interface ServiceSearchProps {
  onSearch: (searchTerm: string) => void;
  variant?: 'default' | 'brief';
  className?: string;
  autoFocus?: boolean;
}

const ServiceSearch: React.FC<ServiceSearchProps> = ({ 
  onSearch, 
  variant = 'default',
  className = '',
  autoFocus = false
}) => {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  // Different styles based on variant
  const getContainerStyles = () => {
    if (variant === 'brief') {
      return 'max-w-full mx-auto mb-6';
    }
    return 'max-w-2xl mx-auto mb-8';
  };

  const getInputStyles = () => {
    if (variant === 'brief') {
      return 'pl-10 py-5 bg-white/5 border-teko-purple/30 text-teko-white placeholder:text-teko-white/50 focus-visible:ring-teko-purple';
    }
    return 'pl-10 py-6 bg-white/5 border-white/10 text-teko-white placeholder:text-teko-white/50 focus-visible:ring-teko-purple';
  };

  return (
    <div className={`relative ${getContainerStyles()} ${className}`}>
      <div className="relative">
        <Input
          type="text"
          placeholder={t('services.search_placeholder')}
          value={searchTerm}
          onChange={handleChange}
          className={getInputStyles()}
          autoFocus={autoFocus}
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-teko-white/50" size={18} />
      </div>
    </div>
  );
};

export default ServiceSearch;
