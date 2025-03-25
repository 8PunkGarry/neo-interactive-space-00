
import { authTranslations } from './authTranslations';

export type SupportedLanguage = 'en' | 'ru' | 'de';

const translations = {
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      about: 'About Us',
      brief: 'Problem Brief',
      login: 'Log In',
      signup: 'Sign Up',
      register: 'Register',
      back: 'Back to home',
    },
    hero: {
      title: 'Your Partner for Effortless Digital Solutions',
      subtitle: 'We build innovative software that solves real business problems',
      cta: 'Start Your Project',
      secondary_cta: 'Learn More',
    },
    features: {
      title: 'What we offer',
      subtitle: 'Our comprehensive suite of services',
    },
    journey: {
      title: 'Your Journey With Us',
      subtitle: 'From concept to implementation, we\'re with you at every step',
      step1: {
        title: 'Discovery',
        description: 'We dive deep into understanding your business goals and challenges',
      },
      step2: {
        title: 'Planning',
        description: 'Collaboratively designing the perfect solution for your needs',
      },
      step3: {
        title: 'Development',
        description: 'Building your solution with cutting-edge technology',
      },
      step4: {
        title: 'Launch',
        description: 'Bringing your product to market with comprehensive support',
      },
    },
    stats: {
      title: 'Our Impact in Numbers',
      projects: 'Projects Completed',
      clients: 'Happy Clients',
      years: 'Years of Experience',
      team: 'Team Members',
    },
    contact: {
      title: 'Ready to transform your business?',
      subtitle: 'Get in touch with our experts today',
      cta: 'Contact Us',
    },
    footer: {
      company: 'Company',
      about: 'About Us',
      careers: 'Careers',
      contact: 'Contact',
      services: 'Services',
      web: 'Web Development',
      mobile: 'Mobile Apps',
      ai: 'AI Solutions',
      cloud: 'Cloud Services',
      legal: 'Legal',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      cookies: 'Cookie Policy',
      copyright: '© 2023 teko.sup. All rights reserved.',
    },
    auth: {
      ...authTranslations.en,
    },
  },
  ru: {
    nav: {
      home: 'Главная',
      services: 'Услуги',
      about: 'О нас',
      brief: 'Бриф',
      login: 'Вход',
      signup: 'Регистрация',
      register: 'Регистрация',
      back: 'На главную',
    },
    hero: {
      title: 'Ваш партнер для легких цифровых решений',
      subtitle: 'Мы создаем инновационное программное обеспечение, которое решает реальные бизнес-задачи',
      cta: 'Начать проект',
      secondary_cta: 'Узнать больше',
    },
    features: {
      title: 'Что мы предлагаем',
      subtitle: 'Наш комплексный набор услуг',
    },
    journey: {
      title: 'Ваш путь с нами',
      subtitle: 'От концепции до реализации, мы с вами на каждом шагу',
      step1: {
        title: 'Анализ',
        description: 'Мы глубоко погружаемся в понимание ваших бизнес-целей и задач',
      },
      step2: {
        title: 'Планирование',
        description: 'Совместно разрабатываем идеальное решение для ваших потребностей',
      },
      step3: {
        title: 'Разработка',
        description: 'Создаем ваше решение с использованием передовых технологий',
      },
      step4: {
        title: 'Запуск',
        description: 'Выводим ваш продукт на рынок с комплексной поддержкой',
      },
    },
    stats: {
      title: 'Наше влияние в цифрах',
      projects: 'Завершенных проектов',
      clients: 'Довольных клиентов',
      years: 'Лет опыта',
      team: 'Членов команды',
    },
    contact: {
      title: 'Готовы трансформировать свой бизнес?',
      subtitle: 'Свяжитесь с нашими экспертами сегодня',
      cta: 'Связаться с нами',
    },
    footer: {
      company: 'Компания',
      about: 'О нас',
      careers: 'Карьера',
      contact: 'Контакты',
      services: 'Услуги',
      web: 'Веб-разработка',
      mobile: 'Мобильные приложения',
      ai: 'ИИ-решения',
      cloud: 'Облачные сервисы',
      legal: 'Юридическая информация',
      privacy: 'Политика конфиденциальности',
      terms: 'Условия использования',
      cookies: 'Политика использования файлов cookie',
      copyright: '© 2023 teko.sup. Все права защищены.',
    },
    auth: {
      ...authTranslations.ru,
    },
  },
  de: {
    nav: {
      home: 'Startseite',
      services: 'Dienstleistungen',
      about: 'Über uns',
      brief: 'Problemübersicht',
      login: 'Anmelden',
      signup: 'Registrieren',
      register: 'Registrieren',
      back: 'Zurück zur Startseite',
    },
    // Basic German translations - can be expanded later
    hero: {
      title: 'Ihr Partner für mühelose digitale Lösungen',
      subtitle: 'Wir entwickeln innovative Software, die echte Geschäftsprobleme löst',
      cta: 'Starten Sie Ihr Projekt',
      secondary_cta: 'Mehr erfahren',
    },
    features: {
      title: 'Was wir anbieten',
      subtitle: 'Unser umfassendes Angebot an Dienstleistungen',
    },
    journey: {
      title: 'Ihre Reise mit uns',
      subtitle: 'Von der Konzeption bis zur Umsetzung sind wir bei jedem Schritt an Ihrer Seite',
      step1: {
        title: 'Entdeckung',
        description: 'Wir tauchen tief ein, um Ihre Geschäftsziele und Herausforderungen zu verstehen',
      },
      step2: {
        title: 'Planung',
        description: 'Gemeinsam entwerfen wir die perfekte Lösung für Ihre Bedürfnisse',
      },
      step3: {
        title: 'Entwicklung',
        description: 'Wir bauen Ihre Lösung mit modernster Technologie',
      },
      step4: {
        title: 'Start',
        description: 'Wir bringen Ihr Produkt mit umfassender Unterstützung auf den Markt',
      },
    },
    stats: {
      title: 'Unser Einfluss in Zahlen',
      projects: 'Abgeschlossene Projekte',
      clients: 'Zufriedene Kunden',
      years: 'Jahre Erfahrung',
      team: 'Teammitglieder',
    },
    contact: {
      title: 'Bereit, Ihr Unternehmen zu transformieren?',
      subtitle: 'Kontaktieren Sie noch heute unsere Experten',
      cta: 'Kontakt',
    },
    footer: {
      company: 'Unternehmen',
      about: 'Über uns',
      careers: 'Karriere',
      contact: 'Kontakt',
      services: 'Dienstleistungen',
      web: 'Webentwicklung',
      mobile: 'Mobile Apps',
      ai: 'KI-Lösungen',
      cloud: 'Cloud-Dienste',
      legal: 'Rechtliches',
      privacy: 'Datenschutzrichtlinie',
      terms: 'Nutzungsbedingungen',
      cookies: 'Cookie-Richtlinie',
      copyright: '© 2023 teko.sup. Alle Rechte vorbehalten.',
    },
    auth: {
      ...authTranslations.en, // Fallback to English for now
    },
  }
};

export { translations };
export default translations;
