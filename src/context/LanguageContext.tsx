
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { translations, SupportedLanguage } from '../utils/translations';
import { authTranslations } from '../utils/authTranslations';

interface LanguageContextType {
  language: SupportedLanguage;
  setLanguage: (lang: SupportedLanguage) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<SupportedLanguage>('en');

  const t = (key: string): string => {
    // Split the key by dots to access nested properties
    const keys = key.split('.');
    
    // Check if we're accessing auth translations
    if (keys[0] === 'auth' && keys.length > 1) {
      const authKey = keys[1];
      if (authTranslations[language] && authTranslations[language][authKey] !== undefined) {
        return authTranslations[language][authKey];
      } else if (language !== 'en' && authTranslations.en && authTranslations.en[authKey] !== undefined) {
        // Fallback to English
        return authTranslations.en[authKey];
      }
    }
    
    // Try regular translations
    let value: any = translations[language];
    
    // Try to find the translation in the current language
    for (const k of keys) {
      if (value && value[k] !== undefined) {
        value = value[k];
      } else {
        value = undefined;
        break;
      }
    }
    
    // If translation doesn't exist in current language, try English as fallback
    if (value === undefined && language !== 'en') {
      value = translations.en;
      for (const k of keys) {
        if (value && value[k] !== undefined) {
          value = value[k];
        } else {
          value = undefined;
          break;
        }
      }
    }
    
    // Return the translation or the key itself if no translation found
    return value !== undefined ? value : key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
