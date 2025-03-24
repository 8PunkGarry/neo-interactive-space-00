
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';

const About = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen bg-teko-black">
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              {t('about.title')}
            </h1>
            <p className="text-teko-white/70 max-w-2xl mx-auto">
              {t('about.description')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="animate-on-scroll" style={{ transitionDelay: '0.1s' }}>
              <h2 className="text-2xl font-display font-bold mb-4 text-teko-purple-light">
                {t('about.mission.title')}
              </h2>
              <p className="text-teko-white/80 mb-6">
                {t('about.mission.description')}
              </p>
            </div>
            
            <div className="animate-on-scroll" style={{ transitionDelay: '0.2s' }}>
              <h2 className="text-2xl font-display font-bold mb-4 text-teko-purple-light">
                {t('about.vision.title')}
              </h2>
              <p className="text-teko-white/80 mb-6">
                {t('about.vision.description')}
              </p>
            </div>
          </div>
          
          <div className="mt-20">
            <h2 className="text-3xl font-display font-bold mb-12 text-center animate-on-scroll">
              {t('about.team.title')}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Placeholder team members */}
              {[1, 2, 3].map((i) => (
                <div 
                  key={i} 
                  className="bg-white/5 border border-white/10 rounded-xl p-6 flex flex-col items-center text-center animate-on-scroll"
                  style={{ transitionDelay: `${0.1 * i}s` }}
                >
                  <div className="w-24 h-24 bg-teko-purple/20 rounded-full mb-4"></div>
                  <h3 className="text-xl font-display font-bold mb-1">
                    {t(`about.team.member${i}.name`)}
                  </h3>
                  <p className="text-teko-purple-light text-sm mb-3">
                    {t(`about.team.member${i}.role`)}
                  </p>
                  <p className="text-teko-white/70 text-sm">
                    {t(`about.team.member${i}.bio`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
