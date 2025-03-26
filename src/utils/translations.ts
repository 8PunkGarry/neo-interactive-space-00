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
    brief: {
      title: 'Submit your brief',
      subtitle: 'Tell us about your project, and we will contact you to discuss the details',
      name: 'Your name *',
      email: 'Your email *',
      project_type: 'Project type *',
      description: 'Project description *',
      budget: 'Budget',
      submit: 'Submit brief',
      submitting: 'Submitting...',
      website: 'Website',
      integration: 'Integration',
      design: 'Design',
      other: 'Other',
      success_title: 'Brief submitted',
      success_message: 'Thank you! We will review your brief and contact you soon.',
      error_title: 'Submission error',
      error_message: 'There was an error submitting your brief. Please try again.',
      missing_info_title: 'Missing information',
      missing_info_message: 'Please fill in all required fields.',
      name_placeholder: 'Enter your name',
      email_placeholder: 'Enter your email',
      description_placeholder: 'Describe your project and your requirements',
      budget_placeholder: 'Specify your estimated project budget'
    },
    services: {
      title: 'Our Services',
      description: 'Comprehensive digital solutions tailored to your specific needs',
      web: {
        title: 'Web Development',
        description: 'Custom websites and web applications built with cutting-edge technologies',
        capabilities: {
          responsive: 'Responsive Design',
          ecommerce: 'E-commerce',
          cms: 'CMS Integration',
          spa: 'Single Page Apps'
        }
      },
      crm: {
        title: 'CRM Solutions',
        description: 'Customer relationship management systems to streamline your business processes',
        capabilities: {
          automation: 'Workflow Automation',
          analytics: 'Customer Analytics',
          integration: 'Third-party Integration',
          custom: 'Custom Dashboards'
        }
      },
      design: {
        title: 'UI/UX Design',
        description: 'Beautiful, intuitive interfaces that delight users and drive engagement',
        capabilities: {
          ui: 'Interface Design',
          ux: 'User Experience',
          branding: 'Brand Identity',
          prototyping: 'Rapid Prototyping'
        }
      },
      seo: {
        title: 'SEO Optimization',
        description: 'Improve your visibility and drive organic traffic to your website',
        capabilities: {
          audit: 'Technical Audit',
          optimization: 'Content Optimization',
          analytics: 'Performance Analytics',
          local: 'Local SEO'
        }
      },
      support: {
        title: 'Technical Support',
        description: 'Ongoing maintenance and support to keep your systems running smoothly',
        capabilities: {
          maintenance: 'Regular Maintenance',
          hosting: 'Managed Hosting',
          security: 'Security Updates',
          updates: 'Feature Updates'
        }
      },
      api: {
        title: 'API Development',
        description: 'Connect your systems and services with custom API solutions',
        capabilities: {
          integration: 'API Integration',
          development: 'Custom API Development',
          testing: 'Performance Testing',
          documentation: 'API Documentation'
        }
      },
      approach: {
        title: 'Our Approach',
        description: 'We follow a proven methodology to ensure successful project delivery and client satisfaction. Our step-by-step approach ensures transparency and alignment throughout the development process.',
        step1: 'We start with a thorough analysis of your business needs, objectives, and current systems.',
        step2: 'Our team creates a detailed roadmap with clear milestones and deliverables.',
        step3: 'We implement solutions using agile methodologies, with regular client feedback and iterations.',
        step4: 'Post-launch, we provide comprehensive support and continuous improvement strategies.'
      },
      benefits: {
        title: 'Why Choose Us',
        benefit1: 'Tailored solutions designed specifically for your unique business needs',
        benefit2: 'Transparent communication and regular updates throughout the project',
        benefit3: 'Cutting-edge technologies and industry best practices',
        benefit4: 'Dedicated support team available to address any concerns',
        benefit5: 'Flexible engagement models to accommodate your budget and timeline'
      },
      cta: {
        title: 'Ready to Elevate Your Digital Presence?',
        description: 'Schedule a free consultation with our team to discuss your project requirements.',
        button: 'Submit Your Brief'
      }
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
    brief: {
      title: 'Отправьте вашу заявку',
      subtitle: 'Расскажите нам о вашем проекте, и мы свяжемся с вами для обсуждения деталей',
      name: 'Ваше имя *',
      email: 'Ваш email *',
      project_type: 'Тип проекта *',
      description: 'Описание проекта *',
      budget: 'Бюджет',
      submit: 'Отправить заявку',
      submitting: 'Отправка...',
      website: 'Веб-сайт',
      integration: 'Интеграция',
      design: 'Дизайн',
      other: 'Другое',
      success_title: 'Заявка отправлена',
      success_message: 'Спасибо! Мы рассмотрим вашу заявку и свяжемся с вами в ближайшее время.',
      error_title: 'Ошибка отправки',
      error_message: 'Произошла ошибка при отправке вашей заявки. Пожалуйста, попробуйте еще раз.',
      missing_info_title: 'Отсутствует информация',
      missing_info_message: 'Пожалуйста, заполните все обязательные поля.',
      name_placeholder: 'Введите ваше имя',
      email_placeholder: 'Введите ваш email',
      description_placeholder: 'Опишите ваш проект и ваши требования',
      budget_placeholder: 'Укажите предполагаемый бюджет проекта'
    },
    services: {
      title: 'Наши Услуги',
      description: 'Комплексные цифровые решения, адаптированные под ваши конкретные потребности',
      web: {
        title: 'Веб-разработка',
        description: 'Индивидуальные веб-сайты и веб-приложения, созданные с использованием передовых технологий',
        capabilities: {
          responsive: 'Адаптивный дизайн',
          ecommerce: 'Электронная коммерция',
          cms: 'Интеграция CMS',
          spa: 'Одностраничные приложения'
        }
      },
      crm: {
        title: 'CRM-решения',
        description: 'Системы управления взаимоотношениями с клиентами для оптимизации бизнес-процессов',
        capabilities: {
          automation: 'Автоматизация процессов',
          analytics: 'Клиентская аналитика',
          integration: 'Интеграция с сервисами',
          custom: 'Индивидуальные панели'
        }
      },
      design: {
        title: 'UI/UX Дизайн',
        description: 'Красивые, интуитивно понятные интерфейсы, которые привлекают пользователей',
        capabilities: {
          ui: 'Дизайн интерфейса',
          ux: 'Пользовательский опыт',
          branding: 'Фирменный стиль',
          prototyping: 'Быстрое прототипирование'
        }
      },
      seo: {
        title: 'SEO-оптимизация',
        description: 'Улучшение видимости и привлечение органического трафика на ваш сайт',
        capabilities: {
          audit: 'Технический аудит',
          optimization: 'Оптимизация контента',
          analytics: 'Аналитика эффективности',
          local: 'Локальное SEO'
        }
      },
      support: {
        title: 'Техническая поддержка',
        description: 'Постоянное обслуживание и поддержка для бесперебойной работы ваших систем',
        capabilities: {
          maintenance: 'Регулярное обслуживание',
          hosting: 'Управляемый хостинг',
          security: 'Обновления безопасности',
          updates: 'Обновления функций'
        }
      },
      api: {
        title: 'Разработка API',
        description: 'Соединение ваших систем и сервисов с помощью индивидуальных API-решений',
        capabilities: {
          integration: 'Интеграция API',
          development: 'Разработка API',
          testing: 'Тестирование производительности',
          documentation: 'Документация API'
        }
      },
      approach: {
        title: 'Наш подход',
        description: 'Мы следуем проверенной методологии для обеспечения успешной реализации проекта и удовлетворенности клиентов. Наш пошаговый подход обеспечивает прозрачность и согласованность на протяжении всего процесса разработки.',
        step1: 'Мы начинаем с тщательного анализа ваших бизнес-потребностей, целей и текущих систем.',
        step2: 'Наша команда создает детальную дорожную карту с четкими этапами и результатами.',
        step3: 'Мы реализуем решения, используя гибкие методологии, с регулярной обратной связью от клиентов и итерациями.',
        step4: 'После запуска мы обеспечиваем комплексную поддержку и стратегии постоянного улучшения.'
      },
      benefits: {
        title: 'Почему выбирают нас',
        benefit1: 'Индивидуальные решения, разработанные специально для ваших уникальных бизнес-потребностей',
        benefit2: 'Прозрачное общение и регулярные обновления на протяжении всего проекта',
        benefit3: 'Передовые технологии и лучшие отраслевые практики',
        benefit4: 'Выделенная команда поддержки, готовая решить любые проблемы',
        benefit5: 'Гибкие модели сотрудничества, учитывающие ваш бюджет и сроки'
      },
      cta: {
        title: 'Готовы улучшить свое цифровое присутствие?',
        description: 'Запланируйте бесплатную консультацию с нашей командой для обсуждения требований к вашему проекту.',
        button: 'Отправить бриф'
      }
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
    brief: {
      title: 'Odešlete svůj brief',
      subtitle: 'Řekněte nám o svém projektu a my vás budeme kontaktovat pro další podrobnosti',
      name: 'Vaše jméno *',
      email: 'Váš email *',
      project_type: 'Typ projektu *',
      description: 'Popis projektu *',
      budget: 'Rozpočet',
      submit: 'Odeslat brief',
      submitting: 'Odesílání...',
      website: 'Webové stránky',
      integration: 'Integrace',
      design: 'Design',
      other: 'Ostatní',
      success_title: 'Žádost odeslána',
      success_message: 'Děkujeme! Prohlédneme si váš brief a brzy vás budeme kontaktovat.',
      error_title: 'Chyba odeslání',
      error_message: 'Při odesílání vašeho briefu došlo k chybě. Zkuste to prosím znovu.',
      missing_info_title: 'Chybějící informace',
      missing_info_message: 'Vyplňte prosím všechna povinná pole.',
      name_placeholder: 'Zadejte své jméno',
      email_placeholder: 'Zadejte svůj email',
      description_placeholder: 'Popište svůj projekt a své požadavky',
      budget_placeholder: 'Uveďte předpokládaný rozpočet projektu'
    },
    services: {
      title: 'Naše služby',
      description: 'Komplexní digitální řešení přizpůsobená vašim konkrétním potřebám',
      web: {
        title: 'Vývoj webových aplikací',
        description: 'Vlastní webové stránky a webové aplikace vytvořené pomocí nejmodernějších technologií',
        capabilities: {
          responsive: 'Responzivní design',
          ecommerce: 'E-commerce',
          cms: 'Integrace CMS',
          spa: 'Single Page Apps'
        }
      },
      crm: {
        title: 'CRM řešení',
        description: 'Systémy pro řízení vztahů se zákazníky pro zefektivnění vašich obchodních procesů',
        capabilities: {
          automation: 'Automatizace procesů',
          analytics: 'Zákaznická analytika',
          integration: 'Integrace třetích stran',
          custom: 'Vlastní dashboardy'
        }
      },
      design: {
        title: 'UI/UX Design',
        description: 'Krásná, intuitivní rozhraní, která potěší uživatele a zvýší jejich zapojení',
        capabilities: {
          ui: 'Design rozhraní',
          ux: 'Uživatelská zkušenost',
          branding: 'Firemní identita',
          prototyping: 'Rychlé prototypování'
        }
      },
      seo: {
        title: 'SEO optimalizace',
        description: 'Zlepšete svou viditelnost a získejte organický provoz na svých webových stránkách',
        capabilities: {
          audit: 'Technický audit',
          optimization: 'Optimalizace obsahu',
          analytics: 'Analýza výkonu',
          local: 'Lokální SEO'
        }
      },
      support: {
        title: 'Technická podpora',
        description: 'Průběžná údržba a podpora pro bezproblémový chod vašich systémů',
        capabilities: {
          maintenance: 'Pravidelná údržba',
          hosting: 'Spravovaný hosting',
          security: 'Bezpečnostní aktualizace',
          updates: 'Aktualizace funkcí'
        }
      },
      api: {
        title: 'Vývoj API',
        description: 'Propojte své systémy a služby pomocí vlastních API řešení',
        capabilities: {
          integration: 'Integrace API',
          development: 'Vývoj vlastních API',
          testing: 'Testování výkonu',
          documentation: 'Dokumentace API'
        }
      },
      approach: {
        title: 'Náš přístup',
        description: 'Používáme osvědčenou metodologii pro zajištění úspěšného dodání projektu a spokojenosti klientů. Náš postupný přístup zajišťuje transparentnost a alignment v průběhu celého vývojového procesu.',
        step1: 'Začínáme důkladnou analýzou vašich obchodních potřeb, cílů a současných systémů.',
        step2: 'Náš tým vytváří podrobnou roadmapu s jasnými milníky a dodávkami.',
        step3: 'Implementujeme řešení pomocí agilních metodik s pravidelnou zpětnou vazbou od klientů a iteracemi.',
        step4: 'Po spuštění poskytujeme komplexní podporu a strategie kontinuálního zlepšování.'
      },
      benefits: {
        title: 'Proč si vybrat nás',
        benefit1: 'Řešení na míru navržená speciálně pro vaše jedinečné obchodní potřeby',
        benefit2: 'Transparentní komunikace a pravidelné aktualizace v průběhu projektu',
        benefit3: 'Nejmodernější technologie a osvědčené postupy z oboru',
        benefit4: 'Dedikovaný tým podpory k dispozici pro řešení případných problémů',
        benefit5: 'Flexibilní modely spolupráce přizpůsobené vašemu rozpočtu a časovému harmonogramu'
      },
      cta: {
        title: 'Připraveni zlepšit svou digitální přítomnost?',
        description: 'Naplánujte si bezplatnou konzultaci s naším týmem a prodiskutujte požadavky na váš projekt.',
        button: 'Odeslat váš brief'
      }
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
      ...authTranslations.en,
    },
  }
};

export { translations };
export default translations;
