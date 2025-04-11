import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';
import { useAuthContext } from '@/context/AuthContext';
import { Button } from '../components/ui/button';
import { ArrowRight, CheckCircle, Search } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import SelectedCapabilities from '@/components/SelectedCapabilities';
import { useCapabilities } from '@/context/CapabilitiesContext';
import { motion } from 'framer-motion';
import ServiceSearch from '@/components/ServiceSearch';
import { Card, CardContent } from '@/components/ui/card';

const allServices = [
  { id: '1', name: 'Web Development', description: 'Custom websites and web applications' },
  { id: '2', name: 'Mobile App Development', description: 'iOS and Android applications' },
  { id: '3', name: 'UI/UX Design', description: 'User interface and experience design' },
  { id: '4', name: 'E-commerce Solutions', description: 'Online stores and payment processing' },
  { id: '5', name: 'SEO Optimization', description: 'Search engine optimization services' },
  { id: '6', name: 'Content Marketing', description: 'Blog posts, articles, and social media content' },
  { id: '7', name: 'Graphic Design', description: 'Logos, branding, and visual identity' },
  { id: '8', name: 'Cloud Services', description: 'AWS, Azure, and Google Cloud solutions' },
  { id: '9', name: 'DevOps', description: 'CI/CD, deployment automation, and infrastructure' },
  { id: '10', name: 'Data Analytics', description: 'Business intelligence and data visualization' },
  { id: '11', name: 'Cybersecurity', description: 'Security audits, testing, and implementation' },
  { id: '12', name: 'AI & Machine Learning', description: 'Custom AI solutions and integrations' }
];

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
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<Array<{id: string; name: string; description?: string}>>([]);
  const [selectedServices, setSelectedServices] = useState<Array<{id: string; name: string; description?: string}>>([]);
  
  const handleServiceSearch = (term: string) => {
    setSearchTerm(term);
    
    if (term.trim() === '') {
      setSearchResults([]);
      return;
    }
    
    const filtered = allServices.filter(service => 
      service.name.toLowerCase().includes(term.toLowerCase()) || 
      (service.description && service.description.toLowerCase().includes(term.toLowerCase()))
    );
    
    setSearchResults(filtered);
  };
  
  const handleSelectService = (service: {id: string; name: string; description?: string}) => {
    if (!selectedServices.some(s => s.id === service.id)) {
      setSelectedServices([...selectedServices, service]);
    }
  };
  
  const handleRemoveService = (serviceId: string) => {
    setSelectedServices(selectedServices.filter(service => service.id !== serviceId));
  };
  
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
        })),
        selected_services: selectedServices.map(service => ({
          id: service.id,
          name: service.name
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
      
      setName('');
      setEmail('');
      setProjectType('website');
      setDescription('');
      setBudget('');
      clearCapabilities();
      setSelectedServices([]);
      
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
  
  const serviceLabel = language === 'en' ? 'Search for services *' : 
                      language === 'ru' ? 'Поиск услуг *' : 
                      'Vyhledat služby *';
                      
  const selectedServicesLabel = language === 'en' ? 'Selected Services' : 
                               language === 'ru' ? 'Выбранные услуги' : 
                               'Vybrané služby';
  
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
                  {serviceLabel}
                </Label>
                <div className="relative">
                  <ServiceSearch
                    onSearch={handleServiceSearch}
                    variant="form"
                    className="w-full"
                    showResults={true}
                    searchResults={searchResults}
                    onSelectResult={handleSelectService}
                  />
                </div>
                
                {selectedServices.length > 0 && (
                  <div className="mt-3 p-3 bg-teko-purple/10 backdrop-blur-sm border border-teko-purple/20 rounded-md">
                    <div className="flex items-center gap-2 text-teko-purple-light mb-2">
                      <CheckCircle size={16} />
                      <h4 className="text-sm font-medium">
                        {selectedServicesLabel}
                        <span className="ml-2 text-xs bg-teko-purple/30 text-teko-white px-2 py-0.5 rounded-full">
                          {selectedServices.length}
                        </span>
                      </h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {selectedServices.map((service) => (
                        <div 
                          key={service.id}
                          className="inline-flex items-center gap-1.5 px-3 py-1 bg-teko-purple/20 text-teko-white/90 rounded-full text-sm"
                        >
                          {service.name}
                          <button
                            type="button"
                            className="text-teko-white/60 hover:text-teko-white"
                            onClick={() => handleRemoveService(service.id)}
                          >
                            ×
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
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
