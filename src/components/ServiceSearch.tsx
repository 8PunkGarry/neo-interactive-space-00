
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

interface ServiceSearchProps {
  onSearch: (searchTerm: string) => void;
}

const ServiceSearch: React.FC<ServiceSearchProps> = ({ onSearch }) => {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <div className="relative max-w-md mx-auto mb-12">
      <div className="relative">
        <Input
          type="text"
          placeholder={t('services.search_placeholder')}
          value={searchTerm}
          onChange={handleChange}
          className="pl-10 py-6 bg-white/5 border-white/10 text-teko-white placeholder:text-teko-white/50 focus-visible:ring-teko-purple"
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-teko-white/50" size={18} />
      </div>
    </div>
  );
};

export default ServiceSearch;
