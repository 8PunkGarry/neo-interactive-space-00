
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Send, Instagram, MessageCircle } from 'lucide-react';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-transparent to-teko-black/80 pt-16 pb-8 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-teko-purple/10 rounded-full filter blur-[100px]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Logo and About */}
          <div>
            <Link 
              to="/" 
              className="text-2xl font-display font-bold purple-gradient-text inline-block mb-4"
              aria-label="teko.sup home"
            >
              teko.sup
            </Link>
            <p className="text-teko-white/70 mb-6">
              Modern websites and integrations for your business. We create digital solutions that help your business grow.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://t.me/teko.sup" 
                className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 border border-white/10 text-teko-white/70 hover:text-teko-purple hover:border-teko-purple transition-colors duration-300"
                aria-label="Telegram"
              >
                <Send size={18} />
              </a>
              <a 
                href="https://instagram.com/teko.sup" 
                className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 border border-white/10 text-teko-white/70 hover:text-teko-purple hover:border-teko-purple transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-display font-bold mb-6">{t('footer.services')}</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-teko-white/70 hover:text-teko-purple transition-colors duration-300">
                  {t('services.web.title')}
                </a>
              </li>
              <li>
                <a href="#" className="text-teko-white/70 hover:text-teko-purple transition-colors duration-300">
                  {t('services.crm.title')}
                </a>
              </li>
              <li>
                <a href="#" className="text-teko-white/70 hover:text-teko-purple transition-colors duration-300">
                  {t('services.design.title')}
                </a>
              </li>
              <li>
                <a href="#" className="text-teko-white/70 hover:text-teko-purple transition-colors duration-300">
                  {t('services.seo.title')}
                </a>
              </li>
              <li>
                <a href="#" className="text-teko-white/70 hover:text-teko-purple transition-colors duration-300">
                  {t('services.support.title')}
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-display font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/services" className="text-teko-white/70 hover:text-teko-purple transition-colors duration-300">
                  {t('navbar.services')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-teko-white/70 hover:text-teko-purple transition-colors duration-300">
                  {t('navbar.about')}
                </Link>
              </li>
              <li>
                <Link to="/brief" className="text-teko-white/70 hover:text-teko-purple transition-colors duration-300">
                  {t('navbar.brief')}
                </Link>
              </li>
              <li>
                <a href="#" className="text-teko-white/70 hover:text-teko-purple transition-colors duration-300">
                  {t('footer.privacy')}
                </a>
              </li>
              <li>
                <a href="#" className="text-teko-white/70 hover:text-teko-purple transition-colors duration-300">
                  {t('footer.terms')}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-display font-bold mb-6">{t('footer.contact')}</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="text-teko-purple mr-3 mt-1 flex-shrink-0" size={18} />
                <span className="text-teko-white/70">
                  {t('location')}
                </span>
              </li>
              <li className="flex items-start">
                <Mail className="text-teko-purple mr-3 mt-1 flex-shrink-0" size={18} />
                <a href="mailto:info@tekosup.com" className="text-teko-white/70 hover:text-teko-purple transition-colors duration-300">
                  info@tekosup.com
                </a>
              </li>
              <li className="flex items-start">
                <MessageCircle className="text-teko-purple mr-3 mt-1 flex-shrink-0" size={18} />
                <a href="https://t.me/teko.sup_bot" className="text-teko-white/70 hover:text-teko-purple transition-colors duration-300">
                  @teko.sup_bot
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-teko-purple/20 mb-8"></div>

        {/* Copyright */}
        <div className="text-center text-teko-white/60 text-sm">
          <p>© {currentYear} teko.sup. {t('footer.rights')}.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
