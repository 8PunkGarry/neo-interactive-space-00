
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Send } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative bg-teko-black overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-bg.webp"
          alt="Abstract background"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      {/* Animated Gradients */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-64 h-64 bg-teko-purple/10 rounded-full filter blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-teko-blue/10 rounded-full filter blur-[100px] animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 py-24 md:py-32 lg:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-teko-white purple-gradient-text mb-6 animate-on-scroll">
              {t('hero.title')}
            </h1>
            <p className="text-teko-white/80 text-lg mb-8 animate-on-scroll delay-100">
              {t('hero.subtitle')}
            </p>
            <div className="space-x-4 animate-on-scroll delay-200">
              <Link 
                to="/about" 
                className="inline-block mt-4 px-8 py-3 bg-teko-purple text-white font-medium rounded-md hover:bg-teko-purple/90 transition-colors duration-300"
              >
                About Us
              </Link>
              <a
                href="https://t.me/teko.sup_bot"
                className="inline-flex items-center px-6 py-2 border border-teko-purple text-teko-white rounded-md hover:bg-teko-purple hover:text-white transition-colors duration-300"
                aria-label="Telegram Chat"
              >
                {t('hero.contact_us')}
                <Send size={18} className="ml-2" />
              </a>
            </div>
          </div>

          {/* Image Content */}
          <div className="flex justify-center">
            <img
              src="/images/hero-img.webp"
              alt="Hero Image"
              className="rounded-lg shadow-lg w-full max-w-md animate-on-scroll"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
