
export type SupportedLanguage = 'en' | 'ru' | 'de';

type TranslationKeys = {
  [key: string]: string;
};

type Translations = {
  [lang in SupportedLanguage]: TranslationKeys;
};

export const translations: Translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.portfolio': 'Portfolio',
    'nav.about': 'About',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    'nav.login': 'Login',
    'nav.register': 'Register',
    
    // Hero
    'hero.title': 'Modern websites and integrations for your business',
    'hero.subtitle': 'We create digital solutions that help your business grow',
    
    // User Journey
    'journey.title': 'What are you looking for?',
    'journey.client': 'Client',
    'journey.client.description': 'I need a website or service',
    'journey.company': 'Company',
    'journey.company.description': 'I need integrations, CRM, or web solutions',
    'journey.button': 'Learn more',
    
    // Services
    'services.title': 'Our Services',
    'services.description': 'We provide comprehensive digital solutions for your business',
    'services.web.title': 'Website Development',
    'services.web.description': 'Custom websites designed to meet your specific needs',
    'services.crm.title': 'CRM & Integrations',
    'services.crm.description': 'Streamline your business processes with our integration solutions',
    'services.design.title': 'UI/UX Design',
    'services.design.description': 'Create engaging user experiences with our expert design team',
    'services.seo.title': 'SEO & Marketing',
    'services.seo.description': 'Boost your online presence and reach your target audience',
    'services.support.title': 'Support & Maintenance',
    'services.support.description': 'Keep your digital assets running smoothly with our support services',
    
    // Footer
    'footer.rights': 'All rights reserved',
    'footer.contact': 'Contact Us',
    'footer.services': 'Services',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service'
  },
  ru: {
    // Navigation
    'nav.home': 'Главная',
    'nav.services': 'Услуги',
    'nav.portfolio': 'Портфолио',
    'nav.about': 'О нас',
    'nav.blog': 'Блог',
    'nav.contact': 'Контакты',
    'nav.login': 'Войти',
    'nav.register': 'Регистрация',
    
    // Hero
    'hero.title': 'Современные сайты и интеграции для вашего бизнеса',
    'hero.subtitle': 'Мы создаем цифровые решения, которые помогают вашему бизнесу расти',
    
    // User Journey
    'journey.title': 'Что вы ищете?',
    'journey.client': 'Клиент',
    'journey.client.description': 'Мне нужен сайт или услуга',
    'journey.company': 'Компания',
    'journey.company.description': 'Мне нужны интеграции, CRM или веб-решения',
    'journey.button': 'Узнать больше',
    
    // Services
    'services.title': 'Наши Услуги',
    'services.description': 'Мы предоставляем комплексные цифровые решения для вашего бизнеса',
    'services.web.title': 'Разработка сайтов',
    'services.web.description': 'Индивидуальные сайты, разработанные с учетом ваших потребностей',
    'services.crm.title': 'CRM и Интеграции',
    'services.crm.description': 'Оптимизируйте бизнес-процессы с нашими решениями для интеграции',
    'services.design.title': 'UI/UX Дизайн',
    'services.design.description': 'Создайте привлекательный пользовательский опыт с нашей командой дизайнеров',
    'services.seo.title': 'SEO и Маркетинг',
    'services.seo.description': 'Повысьте свое онлайн-присутствие и достигните целевой аудитории',
    'services.support.title': 'Поддержка и обслуживание',
    'services.support.description': 'Обеспечьте бесперебойную работу ваших цифровых активов с нашими услугами поддержки',
    
    // Footer
    'footer.rights': 'Все права защищены',
    'footer.contact': 'Связаться с нами',
    'footer.services': 'Услуги',
    'footer.privacy': 'Политика конфиденциальности',
    'footer.terms': 'Условия использования'
  },
  de: {
    // Navigation
    'nav.home': 'Startseite',
    'nav.services': 'Dienstleistungen',
    'nav.portfolio': 'Portfolio',
    'nav.about': 'Über uns',
    'nav.blog': 'Blog',
    'nav.contact': 'Kontakt',
    'nav.login': 'Anmelden',
    'nav.register': 'Registrieren',
    
    // Hero
    'hero.title': 'Moderne Websites und Integrationen für Ihr Unternehmen',
    'hero.subtitle': 'Wir erstellen digitale Lösungen, die Ihrem Unternehmen beim Wachstum helfen',
    
    // User Journey
    'journey.title': 'Wonach suchen Sie?',
    'journey.client': 'Kunde',
    'journey.client.description': 'Ich benötige eine Website oder einen Service',
    'journey.company': 'Unternehmen',
    'journey.company.description': 'Ich benötige Integrationen, CRM oder Web-Lösungen',
    'journey.button': 'Mehr erfahren',
    
    // Services
    'services.title': 'Unsere Dienstleistungen',
    'services.description': 'Wir bieten umfassende digitale Lösungen für Ihr Unternehmen',
    'services.web.title': 'Website-Entwicklung',
    'services.web.description': 'Maßgeschneiderte Websites, die auf Ihre spezifischen Bedürfnisse zugeschnitten sind',
    'services.crm.title': 'CRM & Integrationen',
    'services.crm.description': 'Optimieren Sie Ihre Geschäftsprozesse mit unseren Integrationslösungen',
    'services.design.title': 'UI/UX Design',
    'services.design.description': 'Erstellen Sie ansprechende Benutzererlebnisse mit unserem Expertenteam',
    'services.seo.title': 'SEO & Marketing',
    'services.seo.description': 'Steigern Sie Ihre Online-Präsenz und erreichen Sie Ihre Zielgruppe',
    'services.support.title': 'Support & Wartung',
    'services.support.description': 'Sorgen Sie für einen reibungslosen Betrieb Ihrer digitalen Assets mit unseren Support-Services',
    
    // Footer
    'footer.rights': 'Alle Rechte vorbehalten',
    'footer.contact': 'Kontaktieren Sie uns',
    'footer.services': 'Dienstleistungen',
    'footer.privacy': 'Datenschutzrichtlinie',
    'footer.terms': 'Nutzungsbedingungen'
  }
};
