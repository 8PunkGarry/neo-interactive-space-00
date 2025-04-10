
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import AnimatedLogo from './AnimatedLogo';
import LanguageSwitcher from './LanguageSwitcher';
import UserMenu from './UserMenu';
import { Button } from './ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const { t } = useLanguage();
  const location = useLocation();
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navClasses = `
    fixed top-0 left-0 w-full z-50 transition-all duration-300
    ${scrolled ? 'backdrop-blur-lg bg-teko-black/80 py-3 shadow-lg' : 'py-5'}
  `;

  const navLinks = [
    // Added Home link at the beginning
    { to: '/', label: 'Home', icon: Home },
    { to: '/services', label: t('navbar.services') },
    { to: '/brief', label: t('navbar.brief') },
    // Replaced About with Chat
    { to: '/chat', label: 'Chat', icon: MessageCircle },
  ];

  return (
    <nav className={navClasses}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <AnimatedLogo size={isMobile ? 40 : 50} className="mr-2" />
        </Link>

        {/* Desktop Navigation */}
        <div className={`hidden lg:flex items-center space-x-6`}>
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-teko-white/80 hover:text-teko-purple transition-colors flex items-center gap-1
                ${location.pathname === link.to ? 'text-teko-purple font-medium' : ''}
              `}
            >
              {link.icon && <link.icon size={16} />}
              {link.label}
            </Link>
          ))}
          
          <div className="flex items-center gap-2 ml-auto">
            <div className="border-r border-teko-purple/20 h-8 mx-1"></div>
            <UserMenu />
            <LanguageSwitcher />
          </div>
        </div>

        {/* Mobile Navigation Controls */}
        <div className="flex items-center gap-2 lg:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMenu} className="text-teko-white">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
          <UserMenu />
          <LanguageSwitcher />
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all ease-in-out duration-300 absolute top-full left-0 w-full backdrop-blur-lg bg-teko-black/90 border-t border-teko-purple/10
          ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-teko-white/80 py-2 border-b border-teko-purple/10 hover:text-teko-purple transition-colors flex items-center gap-2
                ${location.pathname === link.to ? 'text-teko-purple font-medium' : ''}
              `}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.icon && <link.icon size={18} />}
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
