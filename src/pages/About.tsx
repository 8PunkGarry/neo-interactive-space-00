
import React, { useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';
import { Avatar, AvatarImage, AvatarFallback } from '../components/ui/avatar';

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
            <div className="animate-on-scroll glass-card p-8 rounded-xl" style={{ transitionDelay: '0.1s' }}>
              <h2 className="text-2xl font-display font-bold mb-4 text-teko-purple-light">
                {t('about.mission.title')}
              </h2>
              <p className="text-teko-white/80 mb-6">
                {t('about.mission.description')}
              </p>
              <div className="mt-4 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-teko-purple"></div>
                  <p className="text-teko-white/80">{t('about.mission.point1')}</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-teko-purple"></div>
                  <p className="text-teko-white/80">{t('about.mission.point2')}</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-teko-purple"></div>
                  <p className="text-teko-white/80">{t('about.mission.point3')}</p>
                </div>
              </div>
            </div>
            
            <div className="animate-on-scroll glass-card p-8 rounded-xl" style={{ transitionDelay: '0.2s' }}>
              <h2 className="text-2xl font-display font-bold mb-4 text-teko-purple-light">
                {t('about.vision.title')}
              </h2>
              <p className="text-teko-white/80 mb-6">
                {t('about.vision.description')}
              </p>
              <div className="mt-4 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-teko-purple"></div>
                  <p className="text-teko-white/80">{t('about.vision.point1')}</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-teko-purple"></div>
                  <p className="text-teko-white/80">{t('about.vision.point2')}</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-teko-purple"></div>
                  <p className="text-teko-white/80">{t('about.vision.point3')}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-20">
            <h2 className="text-3xl font-display font-bold mb-12 text-center animate-on-scroll">
              {t('about.team.title')}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div 
                  key={i} 
                  className="bg-white/5 border border-white/10 rounded-xl p-6 flex flex-col items-center text-center animate-on-scroll hover:bg-white/10 transition-all duration-300 hover:border-teko-purple/50"
                  style={{ transitionDelay: `${0.1 * i}s` }}
                >
                  <Avatar className="w-24 h-24 mb-4 bg-teko-purple/20 border-2 border-teko-purple/30">
                    <AvatarImage src={`/team-member-${i}.png`} alt={t(`about.team.member${i}.name`)} />
                    <AvatarFallback className="bg-teko-purple/20 text-xl font-bold text-teko-white">
                      {t(`about.team.member${i}.name`).charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-display font-bold mb-1">
                    {t(`about.team.member${i}.name`)}
                  </h3>
                  <p className="text-teko-purple-light text-sm mb-3">
                    {t(`about.team.member${i}.role`)}
                  </p>
                  <p className="text-teko-white/70 text-sm">
                    {t(`about.team.member${i}.bio`)}
                  </p>
                  <div className="mt-4 flex gap-4">
                    <a href="#" className="text-teko-white/60 hover:text-teko-purple transition-colors">
                      <svg width="20" height="20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M22 5.92a8.5 8.5 0 0 1-2.36.64 4.1 4.1 0 0 0 1.82-2.29c-.8.48-1.68.82-2.63 1a4.1 4.1 0 0 0-7.07 3.74 11.64 11.64 0 0 1-8.46-4.29 4.1 4.1 0 0 0 1.27 5.48 4.1 4.1 0 0 1-1.86-.52v.05a4.1 4.1 0 0 0 3.3 4.02 4.1 4.1 0 0 1-1.86.07 4.1 4.1 0 0 0 3.83 2.85A8.24 8.24 0 0 1 2 18.34a11.61 11.61 0 0 0 6.29 1.84c7.54 0 11.67-6.25 11.67-11.67 0-.18 0-.35-.01-.52A8.3 8.3 0 0 0 22 5.92Z"></path>
                      </svg>
                    </a>
                    <a href="#" className="text-teko-white/60 hover:text-teko-purple transition-colors">
                      <svg width="20" height="20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM8 17.5a5.5 5.5 0 1 1 .57-10.95l-1 1.73a3.5 3.5 0 1 0 3.43 6l1-1.73A5.5 5.5 0 0 1 8 17.5zm7-4a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"></path>
                      </svg>
                    </a>
                    <a href="#" className="text-teko-white/60 hover:text-teko-purple transition-colors">
                      <svg width="20" height="20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-20 max-w-5xl mx-auto animate-on-scroll">
            <h2 className="text-3xl font-display font-bold mb-6 text-center">
              {t('about.values.title')}
            </h2>
            <p className="text-teko-white/70 text-center mb-12">
              {t('about.values.description')}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="glass-card p-6 rounded-xl animate-on-scroll hover:border-teko-purple/50 transition-all duration-300"
                  style={{ transitionDelay: `${0.1 * i}s` }}>
                  <h3 className="text-xl font-display font-bold mb-3 text-teko-purple-light">
                    {t(`about.values.value${i}.title`)}
                  </h3>
                  <p className="text-teko-white/70">
                    {t(`about.values.value${i}.description`)}
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
