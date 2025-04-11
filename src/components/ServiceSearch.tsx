
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';

interface ServiceSearchProps {
  onSearch: (searchTerm: string) => void;
  variant?: 'default' | 'brief' | 'form';
  className?: string;
  autoFocus?: boolean;
  showResults?: boolean;
  searchResults?: Array<{id: string; name: string; description?: string}>;
  onSelectResult?: (result: {id: string; name: string; description?: string}) => void;
}

const ServiceSearch: React.FC<ServiceSearchProps> = ({ 
  onSearch, 
  variant = 'default',
  className = '',
  autoFocus = false,
  showResults = false,
  searchResults = [],
  onSelectResult
}) => {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [isResultsOpen, setIsResultsOpen] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
    setIsResultsOpen(value.length > 0);
  };

  // Different styles based on variant
  const getContainerStyles = () => {
    if (variant === 'brief') {
      return 'max-w-full mx-auto mb-6';
    } else if (variant === 'form') {
      return 'w-full';
    }
    return 'max-w-2xl mx-auto mb-8';
  };

  const getInputStyles = () => {
    if (variant === 'brief') {
      return 'pl-10 py-5 bg-white/5 border-teko-purple/30 text-teko-white placeholder:text-teko-white/50 focus-visible:ring-teko-purple';
    } else if (variant === 'form') {
      return 'pl-10 py-3 bg-white/5 border-white/10 text-teko-white placeholder:text-teko-white/50 focus-visible:ring-teko-purple';
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
        
        {showResults && isResultsOpen && searchResults.length > 0 && (
          <div className="absolute z-20 w-full mt-1 bg-white/10 backdrop-blur-md border border-teko-purple/20 rounded-md overflow-hidden shadow-lg max-h-60 overflow-y-auto">
            <ul className="py-1">
              {searchResults.map((result) => (
                <li 
                  key={result.id}
                  className="px-4 py-2 hover:bg-teko-purple/20 cursor-pointer text-teko-white/80 transition-colors"
                  onClick={() => {
                    if (onSelectResult) {
                      onSelectResult(result);
                      setSearchTerm('');
                      setIsResultsOpen(false);
                    }
                  }}
                >
                  <div className="font-medium">{result.name}</div>
                  {result.description && (
                    <div className="text-sm text-teko-white/60 truncate">{result.description}</div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceSearch;
