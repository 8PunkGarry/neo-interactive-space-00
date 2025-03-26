import { authTranslations } from './authTranslations';

export type SupportedLanguage = 'en' | 'ru' | 'cs';

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
      subtitle: 'We build innovative software that solves real business problems and transforms your ideas into reality',
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
      subtitle: 'Мы создаем инновационное программное обеспечение, которое решает реальные бизнес-задачи и превращает ваши идеи в реальность',
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
  cs: {
    nav: {
      home: 'Domů',
      services: 'Služby',
      about: 'O nás',
      brief: 'Zadání problému',
      login: 'Přihlášení',
      signup: 'Registrace',
      register: 'Registrace',
      back: 'Zpět na domovskou stránku',
    },
    hero: {
      title: 'Váš partner pro snadná digitální řešení',
      subtitle: 'Vytváříme inovativní software, který řeší skutečné obchodní problémy a přeměňuje vaše nápady ve skutečnost',
      cta: 'Začněte svůj projekt',
      secondary_cta: 'Zjistit více',
    },
    features: {
      title: 'Co nabízíme',
      subtitle: 'Náš komplexní soubor služeb',
    },
    journey: {
      title: 'Vaše cesta s námi',
      subtitle: 'Od konceptu k implementaci jsme s vámi na každém kroku',
      step1: {
        title: 'Objevování',
        description: 'Hloubkově zkoumáme vaše obchodní cíle a výzvy',
      },
      step2: {
        title: 'Plánování',
        description: 'Společně navrhujeme dokonalé řešení pro vaše potřeby',
      },
      step3: {
        title: 'Vývoj',
        description: 'Vytváříme vaše řešení s využitím nejmodernějších technologií',
      },
      step4: {
        title: 'Spuštění',
        description: 'Uvádíme váš produkt na trh s komplexní podporou',
      },
    },
    stats: {
      title: 'Náš dopad v číslech',
      projects: 'Dokončených projektů',
      clients: 'Spokojených klientů',
      years: 'Let zkušeností',
      team: 'Členů týmu',
    },
    contact: {
      title: 'Jste připraveni transformovat své podnikání?',
      subtitle: 'Kontaktujte naše odborníky ještě dnes',
      cta: 'Kontaktujte nás',
    },
    footer: {
      company: 'Společnost',
      about: 'O nás',
      careers: 'Kariéra',
      contact: 'Kontakt',
      services: 'Služby',
      web: 'Vývoj webových aplikací',
      mobile: 'Mobilní aplikace',
      ai: 'AI řešení',
      cloud: 'Cloudové služby',
      legal: 'Právní informace',
      privacy: 'Zásady ochrany osobních údajů',
      terms: 'Podmínky služby',
      cookies: 'Zásady používání cookies',
      copyright: '© 2023 teko.sup. Všechna práva vyhrazena.',
    },
    auth: {
      ...authTranslations.en, // Fallback to English for now
    },
  }
};

export { translations };
export default translations;
