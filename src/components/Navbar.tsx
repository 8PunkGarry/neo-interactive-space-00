
import React, { useState, useEffect } from 'react';
import { Menu, X, LogIn, UserPlus } from 'lucide-react';
import { Link } from 'react-router-dom';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '../context/LanguageContext';
import AnimatedLogo from './AnimatedLogo';
import { Button } from './ui/button';

const Navbar = () => {
  const { t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.services'), path: '/services' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.brief'), path: '/problem-brief' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'py-2 bg-teko-black/80 backdrop-blur-lg border-b border-teko-purple/20' 
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2"
            aria-label="teko.sup home"
          >
            <AnimatedLogo size={40} variant="minimal" />
            <span className="text-2xl font-display font-bold purple-gradient-text hover:opacity-90 transition-opacity">
              teko.sup
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-teko-white/80 hover:text-teko-purple transition-colors duration-300 text-sm font-medium"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            
            <div className="flex items-center space-x-4">
              <LanguageSwitcher />
              
              <div className="h-6 w-px bg-teko-purple/30"></div>
              
              <div className="flex items-center space-x-3">
                <Link to="/login" className="flex items-center">
                  <Button variant="ghost" size="sm" className="text-teko-white/90 hover:text-teko-purple">
                    <LogIn className="mr-1 h-4 w-4" />
                    {t('nav.login')}
                  </Button>
                </Link>
                
                <Link to="/signup">
                  <Button 
                    size="sm" 
                    className="bg-teko-purple hover:bg-teko-purple-dark text-white"
                  >
                    <UserPlus className="mr-1 h-4 w-4" />
                    {t('nav.signup') || 'Sign Up'}
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-teko-white"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-teko-black/95 backdrop-blur-xl border-b border-teko-purple/20 animate-fade-in">
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="text-teko-white/80 hover:text-teko-purple transition-colors py-2 text-base font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                
                <div className="h-px w-full bg-teko-purple/20 my-2"></div>
                
                <div className="flex flex-col space-y-3">
                  <Link
                    to="/login"
                    className="flex items-center text-teko-white/90 hover:text-teko-purple transition-colors py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <LogIn className="mr-2 h-5 w-5" />
                    <span className="text-base font-medium">{t('nav.login')}</span>
                  </Link>
                  
                  <Link
                    to="/signup"
                    className="flex items-center bg-teko-purple hover:bg-teko-purple-dark text-white py-2 px-3 rounded-md transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <UserPlus className="mr-2 h-5 w-5" />
                    <span className="text-base font-medium">{t('nav.signup') || 'Sign Up'}</span>
                  </Link>
                </div>
                
                <div className="pt-2">
                  <LanguageSwitcher />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
