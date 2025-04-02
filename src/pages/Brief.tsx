
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';
import { useAuthContext } from '@/context/AuthContext';
import { Button } from '../components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import SelectedCapabilities from '@/components/SelectedCapabilities';
import { useCapabilities } from '@/context/CapabilitiesContext';
import { motion } from 'framer-motion';

const Brief = () => {
  const { t, language } = useLanguage();
  const { user } = useAuthContext();
  const { toast } = useToast();
  const navigate = useNavigate();
  const { selectedCapabilities, removeCapability, clearCapabilities } = useCapabilities();
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [projectType, setProjectType] = useState('website');
  const [description, setDescription] = useState('');
  const [budget, setBudget] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Pre-fill description with selected capabilities if any
  useEffect(() => {
    if (selectedCapabilities.length > 0 && !description) {
      const capabilitiesText = selectedCapabilities
        .map(cap => `${cap.serviceName}: ${cap.name}`)
        .join('\n');
      
      const prefilledText = language === 'en' 
        ? `Selected capabilities:\n${capabilitiesText}\n\nAdditional information:`
        : language === 'ru'
        ? `Выбранные возможности:\n${capabilitiesText}\n\nДополнительная информация:`
        : `Vybrané schopnosti:\n${capabilitiesText}\n\nDalší informace:`;
      
      setDescription(prefilledText);
    }
  }, [selectedCapabilities, description, language]);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email || !projectType || !description) {
      toast({
        variant: "destructive",
        title: language === 'en' ? "Missing information" : 
               language === 'ru' ? "Отсутствует информация" : 
               "Chybějící informace",
        description: language === 'en' ? "Please fill in all required fields." : 
                     language === 'ru' ? "Пожалуйста, заполните все обязательные поля." : 
                     "Vyplňte prosím všechna povinná pole.",
      });
      return;
    }
    
    try {
      setIsSubmitting(true);
      
      const briefData = {
        user_id: user?.id || null,
        name: name,
        email: email,
        service_type: projectType,
        comment: description,
        budget,
        capabilities: selectedCapabilities.map(cap => ({ 
          service: cap.serviceName, 
          capability: cap.name 
        }))
      };
      
      const { error } = await supabase
        .from('briefs')
        .insert(briefData);
      
      if (error) throw error;
      
      toast({
        title: language === 'en' ? "Brief submitted" : 
               language === 'ru' ? "Заявка отправлена" : 
               "Žádost odeslána",
        description: language === 'en' ? "Thank you! We will review your brief and contact you soon." : 
                     language === 'ru' ? "Спасибо! Мы рассмотрим вашу заявку и свяжемся с вами в ближайшее время." : 
                     "Děkujeme! Prohlédneme si váš brief a brzy vás budeme kontaktovat.",
      });
      
      // Reset form and clear capabilities
      setName('');
      setEmail('');
      setProjectType('website');
      setDescription('');
      setBudget('');
      clearCapabilities();
      
      // Redirect to home page after submission
      setTimeout(() => navigate('/'), 2000);
    } catch (error) {
      console.error(language === 'en' ? 'Error submitting brief:' : 
                    language === 'ru' ? 'Ошибка при отправке заявки:' : 
                    'Chyba při odesílání žádosti:', error);
      toast({
        variant: "destructive",
        title: language === 'en' ? "Submission error" : 
               language === 'ru' ? "Ошибка отправки" : 
               "Chyba odeslání",
        description: language === 'en' ? "There was an error submitting your brief. Please try again." : 
                     language === 'ru' ? "Произошла ошибка при отправке вашей заявки. Пожалуйста, попробуйте еще раз." : 
                     "Při odesílání vašeho briefu došlo k chybě. Zkuste to prosím znovu.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1
      }
    }
  };
  
  return (
    <div className="min-h-screen bg-teko-black">
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-teko-white">
              {language === 'en' ? 'Submit your brief' : 
               language === 'ru' ? 'Отправьте вашу заявку' : 
               'Odešlete svůj brief'}
            </h1>
            <p className="text-teko-white/70 max-w-2xl mx-auto">
              {language === 'en' ? 'Tell us about your project, and we will contact you to discuss the details' : 
               language === 'ru' ? 'Расскажите нам о вашем проекте, и мы свяжемся с вами для обсуждения деталей' : 
               'Řekněte nám o svém projektu a my vás budeme kontaktovat pro další podrobnosti'}
            </p>
          </div>
          
          {selectedCapabilities.length > 0 && (
            <motion.div 
              className="max-w-3xl mx-auto mb-8"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              <div className="p-6 bg-teko-purple/10 backdrop-blur-sm border border-teko-purple/20 rounded-xl">
                <div className="flex items-center gap-2 text-teko-purple-light mb-4">
                  <CheckCircle size={20} />
                  <h3 className="text-xl font-display font-medium">
                    {language === 'en' ? 'Selected Capabilities' : 
                    language === 'ru' ? 'Выбранные возможности' : 
                    'Vybrané schopnosti'}
                    <span className="ml-2 text-sm bg-teko-purple/30 text-teko-white px-2 py-1 rounded-full">
                      {selectedCapabilities.length}
                    </span>
                  </h3>
                </div>
                
                <SelectedCapabilities
                  capabilities={selectedCapabilities}
                  onRemove={removeCapability}
                />
              </div>
            </motion.div>
          )}
          
          <div className="max-w-3xl mx-auto bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <Label className="text-teko-white/90 mb-2">
                  {language === 'en' ? 'Your name *' : 
                   language === 'ru' ? 'Ваше имя *' : 
                   'Vaše jméno *'}
                </Label>
                <Input 
                  type="text" 
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-teko-purple/50 text-teko-white"
                  placeholder={language === 'en' ? 'Enter your name' : 
                               language === 'ru' ? 'Введите ваше имя' : 
                               'Zadejte své jméno'}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              
              <div>
                <Label className="text-teko-white/90 mb-2">
                  {language === 'en' ? 'Your email *' : 
                   language === 'ru' ? 'Ваш email *' : 
                   'Váš email *'}
                </Label>
                <Input 
                  type="email" 
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-teko-purple/50 text-teko-white"
                  placeholder={language === 'en' ? 'Enter your email' : 
                               language === 'ru' ? 'Введите ваш email' : 
                               'Zadejte svůj email'}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              
              <div>
                <Label className="text-teko-white/90 mb-2">
                  {language === 'en' ? 'Project type *' : 
                   language === 'ru' ? 'Тип проекта *' : 
                   'Typ projektu *'}
                </Label>
                <select 
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-teko-purple/50 text-teko-white"
                  value={projectType}
                  onChange={(e) => setProjectType(e.target.value)}
                  required
                >
                  <option value="website">
                    {language === 'en' ? 'Website' : 
                     language === 'ru' ? 'Веб-сайт' : 
                     'Webové stránky'}
                  </option>
                  <option value="integration">
                    {language === 'en' ? 'Integration' : 
                     language === 'ru' ? 'Интеграция' : 
                     'Integrace'}
                  </option>
                  <option value="design">
                    {language === 'en' ? 'Design' : 
                     language === 'ru' ? 'Дизайн' : 
                     'Design'}
                  </option>
                  <option value="seo">SEO</option>
                  <option value="other">
                    {language === 'en' ? 'Other' : 
                     language === 'ru' ? 'Другое' : 
                     'Ostatní'}
                  </option>
                </select>
              </div>
              
              <div>
                <Label className="text-teko-white/90 mb-2">
                  {language === 'en' ? 'Project description *' : 
                   language === 'ru' ? 'Описание проекта *' : 
                   'Popis projektu *'}
                </Label>
                <Textarea 
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-teko-purple/50 text-teko-white h-32"
                  placeholder={language === 'en' ? 'Describe your project and your requirements' : 
                               language === 'ru' ? 'Опишите ваш проект и ваши требования' : 
                               'Popište svůj projekt a své požadavky'}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </div>
              
              <div>
                <Label className="text-teko-white/90 mb-2">
                  {language === 'en' ? 'Budget' : 
                   language === 'ru' ? 'Бюджет' : 
                   'Rozpočet'}
                </Label>
                <Input 
                  type="text" 
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-teko-purple/50 text-teko-white"
                  placeholder={language === 'en' ? 'Specify your estimated project budget' : 
                               language === 'ru' ? 'Укажите предполагаемый бюджет проекта' : 
                               'Uveďte předpokládaný rozpočet projektu'}
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                />
              </div>
              
              <div className="pt-4">
                <Button 
                  type="submit"
                  className="w-full bg-teko-purple hover:bg-teko-purple-dark text-white py-3"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      <span>
                        {language === 'en' ? 'Submitting...' : 
                         language === 'ru' ? 'Отправка...' : 
                         'Odesílání...'}
                      </span>
                    </div>
                  ) : (
                    <>
                      {language === 'en' ? 'Submit brief' : 
                       language === 'ru' ? 'Отправить заявку' : 
                       'Odeslat brief'}
                      <ArrowRight className="ml-2" size={16} />
                    </>
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Brief;
