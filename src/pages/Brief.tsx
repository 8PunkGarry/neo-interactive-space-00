
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';
import { useAuthContext } from '@/context/AuthContext';
import { Button } from '../components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const Brief = () => {
  const { t } = useLanguage();
  const { user } = useAuthContext();
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [projectType, setProjectType] = useState('website');
  const [description, setDescription] = useState('');
  const [budget, setBudget] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email || !projectType || !description) {
      toast({
        variant: "destructive",
        title: "Отсутствует информация",
        description: "Пожалуйста, заполните все обязательные поля.",
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
        budget
      };
      
      const { error } = await supabase
        .from('briefs')
        .insert(briefData);
      
      if (error) throw error;
      
      toast({
        title: "Заявка отправлена",
        description: "Спасибо! Мы рассмотрим вашу заявку и свяжемся с вами в ближайшее время.",
      });
      
      // Сброс формы
      setName('');
      setEmail('');
      setProjectType('website');
      setDescription('');
      setBudget('');
      
      // Редирект на главную страницу после отправки
      setTimeout(() => navigate('/'), 2000);
    } catch (error) {
      console.error('Ошибка при отправке заявки:', error);
      toast({
        variant: "destructive",
        title: "Ошибка отправки",
        description: "Произошла ошибка при отправке вашей заявки. Пожалуйста, попробуйте еще раз.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  console.log("Brief component is rendering");
  
  return (
    <div className="min-h-screen bg-teko-black">
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-teko-white">
              Отправьте вашу заявку
            </h1>
            <p className="text-teko-white/70 max-w-2xl mx-auto">
              Расскажите нам о вашем проекте, и мы свяжемся с вами для обсуждения деталей
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <Label className="text-teko-white/90 mb-2">
                  Ваше имя *
                </Label>
                <Input 
                  type="text" 
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-teko-purple/50 text-teko-white"
                  placeholder="Введите ваше имя"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              
              <div>
                <Label className="text-teko-white/90 mb-2">
                  Ваш email *
                </Label>
                <Input 
                  type="email" 
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-teko-purple/50 text-teko-white"
                  placeholder="Введите ваш email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              
              <div>
                <Label className="text-teko-white/90 mb-2">
                  Тип проекта *
                </Label>
                <select 
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-teko-purple/50 text-teko-white"
                  value={projectType}
                  onChange={(e) => setProjectType(e.target.value)}
                  required
                >
                  <option value="website">Веб-сайт</option>
                  <option value="integration">Интеграция</option>
                  <option value="design">Дизайн</option>
                  <option value="seo">SEO</option>
                  <option value="other">Другое</option>
                </select>
              </div>
              
              <div>
                <Label className="text-teko-white/90 mb-2">
                  Описание проекта *
                </Label>
                <Textarea 
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-teko-purple/50 text-teko-white h-32"
                  placeholder="Опишите ваш проект и ваши требования"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </div>
              
              <div>
                <Label className="text-teko-white/90 mb-2">
                  Бюджет
                </Label>
                <Input 
                  type="text" 
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-teko-purple/50 text-teko-white"
                  placeholder="Укажите предполагаемый бюджет проекта"
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
                      <span>Отправка...</span>
                    </div>
                  ) : (
                    <>
                      Отправить заявку
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
