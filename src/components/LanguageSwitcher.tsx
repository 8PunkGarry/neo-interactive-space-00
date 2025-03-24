
import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SupportedLanguage } from '../utils/translations';
import { ChevronDown, Globe } from 'lucide-react';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages: { code: SupportedLanguage; label: string }[] = [
    { code: 'en', label: 'English' },
    { code: 'ru', label: 'Русский' },
    { code: 'de', label: 'Deutsch' },
  ];

  const currentLanguage = languages.find(lang => lang.code === language);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLanguageChange = (lang: SupportedLanguage) => {
    setLanguage(lang);
    setIsOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 bg-teko-purple/10 hover:bg-teko-purple/20 group"
        aria-label="Select language"
      >
        <Globe size={16} className="text-teko-purple-light" />
        <span className="text-teko-white/90">{currentLanguage?.code.toUpperCase()}</span>
        <ChevronDown 
          size={16} 
          className={`text-teko-white/50 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-teko-black/95 backdrop-blur-xl border border-teko-purple/20 rounded-lg shadow-lg overflow-hidden z-50 animate-in fade-in slide-in-from-top-5 duration-200">
          <div className="py-1">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className={`w-full text-left px-4 py-2 text-sm transition-colors duration-200 group hover:bg-teko-purple/10 flex items-center justify-between ${
                  language === lang.code ? 'bg-teko-purple/20 text-teko-purple-light' : 'text-teko-white/80'
                }`}
              >
                <span>{lang.label}</span>
                {language === lang.code && (
                  <span className="h-1.5 w-1.5 bg-teko-purple rounded-full"></span>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
