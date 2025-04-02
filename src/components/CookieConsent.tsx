
import React, { useState, useEffect } from 'react';
import { X, Cookie } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';
import { useToast } from '@/hooks/use-toast';

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);
  const { t, language } = useLanguage();
  const { toast } = useToast();

  useEffect(() => {
    const consentGiven = localStorage.getItem('cookieConsent');
    if (!consentGiven) {
      // Delay appearance for a better UX
      const timer = setTimeout(() => {
        setShowConsent(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setShowConsent(false);
    toast({
      title: language === 'ru' ? 'Спасибо!' : language === 'cs' ? 'Děkujeme!' : 'Thank you!',
      description: language === 'ru' ? 'Ваши настройки сохранены' : 
                   language === 'cs' ? 'Vaše nastavení bylo uloženo' : 'Your preferences have been saved',
    });
  };

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'false');
    setShowConsent(false);
    toast({
      title: language === 'ru' ? 'Настройки обновлены' : 
             language === 'cs' ? 'Nastavení aktualizováno' : 'Settings updated',
      description: language === 'ru' ? 'Мы будем использовать только необходимые куки' : 
                   language === 'cs' ? 'Budeme používat pouze nezbytné cookies' : 'We will only use essential cookies',
    });
  };

  const getConsentText = () => {
    if (language === 'ru') {
      return {
        title: 'Мы используем куки файлы',
        description: 'Мы используем файлы cookie для улучшения вашего опыта на нашем сайте. Нажимая «Принять все», вы соглашаетесь с использованием всех файлов cookie.',
        accept: 'Принять все',
        reject: 'Только необходимые',
      };
    } else if (language === 'cs') {
      return {
        title: 'Používáme cookies',
        description: 'Používáme cookies pro zlepšení vašeho zážitku na našem webu. Kliknutím na "Přijmout vše" souhlasíte s použitím všech cookies.',
        accept: 'Přijmout vše',
        reject: 'Pouze nezbytné',
      };
    } else {
      return {
        title: 'We use cookies',
        description: 'We use cookies to enhance your experience on our website. By clicking "Accept All", you consent to the use of all cookies.',
        accept: 'Accept All',
        reject: 'Essential Only',
      };
    }
  };

  const consentText = getConsentText();

  if (!showConsent) return null;

  return (
    <AnimatePresence>
      {showConsent && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="fixed bottom-5 left-5 right-5 md:left-auto md:right-5 md:bottom-5 md:max-w-md z-50"
        >
          <div className="bg-teko-black/95 backdrop-blur-md border border-teko-purple/30 rounded-xl shadow-lg shadow-teko-purple/20 p-5 relative overflow-hidden">
            {/* Cookie animation background */}
            <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-teko-purple/10 blur-3xl animate-pulse"></div>
            <div className="absolute -left-5 -bottom-5 w-20 h-20 rounded-full bg-teko-purple/10 blur-xl animate-pulse"></div>
            
            <div className="flex items-start mb-4">
              <div className="mr-3 mt-1">
                <Cookie className="h-6 w-6 text-teko-purple animate-bounce" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-teko-white mb-1">{consentText.title}</h3>
                <p className="text-sm text-teko-white/70">{consentText.description}</p>
              </div>
              <button 
                onClick={() => setShowConsent(false)} 
                className="text-teko-white/50 hover:text-teko-white ml-2 p-1"
              >
                <X size={16} />
              </button>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-2 sm:justify-end">
              <Button 
                variant="outline" 
                onClick={handleReject}
                className="border-teko-purple/30 text-teko-white hover:bg-teko-purple/10"
              >
                {consentText.reject}
              </Button>
              <Button 
                onClick={handleAccept}
                className="bg-teko-purple hover:bg-teko-purple-dark text-teko-white"
              >
                {consentText.accept}
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
