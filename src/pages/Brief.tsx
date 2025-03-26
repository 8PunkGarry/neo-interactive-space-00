
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
        title: "Missing Information",
        description: "Please fill in all required fields.",
      });
      return;
    }
    
    try {
      setIsSubmitting(true);
      
      const briefData = {
        user_id: user?.id,
        service_type: projectType,
        comment: description,
        budget
      };
      
      const { error } = await supabase
        .from('briefs')
        .insert(briefData);
      
      if (error) throw error;
      
      toast({
        title: "Brief Submitted",
        description: "Thank you! We'll review your project brief and get back to you soon.",
      });
      
      // Reset form
      setName('');
      setEmail('');
      setProjectType('website');
      setDescription('');
      setBudget('');
      
      // Redirect to home page after brief submission
      setTimeout(() => navigate('/'), 2000);
    } catch (error) {
      console.error('Error submitting brief:', error);
      toast({
        variant: "destructive",
        title: "Submission Failed",
        description: "There was an error submitting your brief. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="min-h-screen bg-teko-black">
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-teko-white">
              {t('brief.title')}
            </h1>
            <p className="text-teko-white/70 max-w-2xl mx-auto">
              {t('brief.description')}
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 animate-on-scroll">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-teko-white/90 mb-2">
                  {t('brief.form.name')}
                </label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-teko-purple/50 text-teko-white"
                  placeholder={t('brief.form.name.placeholder')}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-teko-white/90 mb-2">
                  {t('brief.form.email')}
                </label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-teko-purple/50 text-teko-white"
                  placeholder={t('brief.form.email.placeholder')}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-teko-white/90 mb-2">
                  {t('brief.form.project')}
                </label>
                <select 
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-teko-purple/50 text-teko-white"
                  value={projectType}
                  onChange={(e) => setProjectType(e.target.value)}
                  required
                >
                  <option value="website">{t('brief.form.project.website')}</option>
                  <option value="integration">{t('brief.form.project.integration')}</option>
                  <option value="design">{t('brief.form.project.design')}</option>
                  <option value="seo">{t('brief.form.project.seo')}</option>
                  <option value="other">{t('brief.form.project.other')}</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-teko-white/90 mb-2">
                  {t('brief.form.description')}
                </label>
                <Textarea 
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-teko-purple/50 text-teko-white h-32"
                  placeholder={t('brief.form.description.placeholder')}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-teko-white/90 mb-2">
                  {t('brief.form.budget')}
                </label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-teko-purple/50 text-teko-white"
                  placeholder={t('brief.form.budget.placeholder')}
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
                      <span>{t('brief.form.submitting')}</span>
                    </div>
                  ) : (
                    <>
                      {t('brief.form.submit')}
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
