
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';
import { Button } from '../components/ui/button';
import { ArrowRight } from 'lucide-react';

const ProblemBrief = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen bg-teko-black">
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              {t('brief.title')}
            </h1>
            <p className="text-teko-white/70 max-w-2xl mx-auto">
              {t('brief.description')}
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 animate-on-scroll">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-teko-white/90 mb-2">
                  {t('brief.form.name')}
                </label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-teko-purple/50 text-teko-white"
                  placeholder={t('brief.form.name.placeholder')}
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
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-teko-white/90 mb-2">
                  {t('brief.form.project')}
                </label>
                <select className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-teko-purple/50 text-teko-white">
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
                <textarea 
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-teko-purple/50 text-teko-white h-32"
                  placeholder={t('brief.form.description.placeholder')}
                ></textarea>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-teko-white/90 mb-2">
                  {t('brief.form.budget')}
                </label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-teko-purple/50 text-teko-white"
                  placeholder={t('brief.form.budget.placeholder')}
                />
              </div>
              
              <div className="pt-4">
                <Button className="w-full bg-teko-purple hover:bg-teko-purple-dark text-white py-3">
                  {t('brief.form.submit')}
                  <ArrowRight className="ml-2" size={16} />
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

export default ProblemBrief;
