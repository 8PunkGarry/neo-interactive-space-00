
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SupportedLanguage } from '../utils/translations';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const languages: { code: SupportedLanguage; label: string }[] = [
    { code: 'en', label: 'EN' },
    { code: 'ru', label: 'RU' },
    { code: 'de', label: 'DE' },
  ];

  return (
    <div className="flex items-center space-x-1">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => setLanguage(lang.code)}
          className={`px-2 py-1 text-sm font-medium rounded-md transition-all duration-300 ${
            language === lang.code
              ? 'bg-teko-purple text-white'
              : 'text-gray-400 hover:text-white'
          }`}
          aria-label={`Switch to ${lang.label} language`}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
