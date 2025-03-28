import { authTranslations } from './authTranslations';

export type SupportedLanguage = 'en' | 'ru' | 'cs';

interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: string;
  price?: string;
}

interface HomeTranslations {
  hero: {
    title: string;
    subtitle: string;
    cta: string;
    secondary_cta: string;
  };
  navbar: {
    home: string;
    services: string;
    about: string;
    brief: string;
  };
  cta: {
    button: string;
    subtitle: string;
  };
  services: {
    title: string;
    subtitle: string;
    show_all: string;
    search_placeholder: string;
    no_results: string;
    items: ServiceItem[];
    web: {
      title: string;
    };
    crm: {
      title: string;
    };
    design: {
      title: string;
    };
    seo: {
      title: string;
    };
    support: {
      title: string;
    };
  };
  journey: {
    title: string;
    subtitle: string;
    step1: {
      title: string;
      description: string;
    };
    step2: {
      title: string;
      description: string;
    };
    step3: {
      title: string;
      description: string;
    };
    step4: {
      title: string;
      description: string;
    };
    step5: {
      title: string;
      description: string;
    };
    step6: {
      title: string;
      description: string;
    };
    step7: {
      title: string;
      description: string;
    };
    step8: {
      title: string;
      description: string;
    };
    steps: {
      research: string;
      design: string;
      development: string;
      launch: string;
    };
    brief: {
      title: string;
      description: string;
      button: string;
    };
    contact: {
      title: string;
      description: string;
      button: string;
    };
  };
  footer: {
    services: string;
    contact: string;
    privacy: string;
    terms: string;
    rights: string;
    about: {
      title: string;
      description: string;
    };
    links: {
      title: string;
      privacy: string;
      terms: string;
    };
    copyright: string;
  };
}

interface Translations {
  [language: string]: HomeTranslations;
}

export const translations: Translations = {
  en: {
    hero: {
      title: "Digital Innovation for Your Business",
      subtitle: "We create innovative digital solutions that help your business grow and thrive in the modern technological landscape.",
      cta: "Explore Our Process",
      secondary_cta: "Our Services",
    },
    navbar: {
      home: "Home",
      services: "Services",
      about: "About Us",
      brief: "Brief",
    },
    cta: {
      button: "Get Started",
      subtitle: "Take the first step towards digital transformation",
    },
    services: {
      title: "Our Services",
      subtitle: "Comprehensive digital solutions to meet your business needs",
      show_all: "View All Services",
      search_placeholder: "Search for a service...",
      no_results: "No services found. Try a different search term.",
      items: [
        {
          id: 1,
          title: "UI/UX Design",
          description: "Creating intuitive and engaging user experiences that delight your customers.",
          icon: "design",
          price: "From $2,000"
        },
        {
          id: 2,
          title: "Web Development",
          description: "Building fast, responsive, and secure websites that represent your brand perfectly.",
          icon: "code",
          price: "From $3,500"
        },
        {
          id: 3,
          title: "Mobile Apps",
          description: "Developing native and cross-platform mobile applications for iOS and Android.",
          icon: "smartphone",
          price: "From $5,000"
        },
        {
          id: 4,
          title: "E-commerce Solutions",
          description: "Creating online stores with seamless payment integrations and inventory management.",
          icon: "shopping-cart",
          price: "From $4,000"
        },
        {
          id: 5,
          title: "Digital Marketing",
          description: "Implementing data-driven strategies to increase your online visibility and customer engagement.",
          icon: "trending-up",
          price: "From $1,500/month"
        },
        {
          id: 6,
          title: "Software Integration",
          description: "Connecting and automating your business systems for improved efficiency and data flow.",
          icon: "git-merge",
          price: "From $2,500"
        }
      ],
      web: {
        title: "Web Development"
      },
      crm: {
        title: "CRM Integration"
      },
      design: {
        title: "UI/UX Design"
      },
      seo: {
        title: "SEO Optimization"
      },
      support: {
        title: "Technical Support"
      }
    },
    journey: {
      title: "Your Digital Transformation Journey",
      subtitle: "We transform your ideas into effective digital solutions that change the game",
      step1: {
        title: "Analysis & Research",
        description: "We analyze your business in detail, identify target audience, and formulate key objectives for maximum impact."
      },
      step2: {
        title: "Strategic Planning",
        description: "We develop a detailed roadmap with precise timelines, budget, and technical requirements for your project."
      },
      step3: {
        title: "UI/UX Design",
        description: "We create intuitive and attractive interfaces that surprise users and increase conversion rates."
      },
      step4: {
        title: "Development",
        description: "We turn concepts into reality using modern technologies and best programming practices for reliable results."
      },
      step5: {
        title: "Quality Control",
        description: "We conduct comprehensive testing on various devices, ensuring flawless operation and high performance."
      },
      step6: {
        title: "Deployment",
        description: "We launch your product in a working environment with continuous monitoring and optimization for stable operation."
      },
      step7: {
        title: "Training & Support",
        description: "We provide detailed documentation and training for your team to efficiently manage the new solution."
      },
      step8: {
        title: "Successful Completion",
        description: "We celebrate the launch of your successful project and plan further improvements for your business growth."
      },
      steps: {
        research: "Research & Strategy",
        design: "Design & Prototyping",
        development: "Development & Testing",
        launch: "Launch & Support"
      },
      brief: {
        title: "Fill Out Project Brief",
        description: "Tell us more about your project — describe your tasks, goals, and expected results. We will study your needs and contact you to discuss them.",
        button: "Fill Out Brief"
      },
      contact: {
        title: "Contact Us Directly",
        description: "Have questions or want to discuss your project in person? Our team is ready to listen to your ideas and offer the optimal solution for your business.",
        button: "Contact Us"
      }
    },
    footer: {
      services: "Services",
      contact: "Contact Us",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      rights: "All rights reserved",
      about: {
        title: "About Teko",
        description: "We are a digital agency focused on creating innovative solutions for businesses looking to thrive in the digital era."
      },
      links: {
        title: "Quick Links",
        privacy: "Privacy Policy",
        terms: "Terms of Service"
      },
      copyright: "© 2023 Teko. All rights reserved."
    }
  },
  ru: {
    hero: {
      title: "Цифровые инновации для вашего бизнеса",
      subtitle: "Мы создаем инновационные цифровые решения, которые помогают вашему бизнесу расти и процветать в современном технологическом ландшафте.",
      cta: "Изучить наш процесс",
      secondary_cta: "Наши услуги",
    },
    navbar: {
      home: "Главная",
      services: "Услуги",
      about: "О нас",
      brief: "Бриф",
    },
    cta: {
      button: "Начать",
      subtitle: "Сделайте первый шаг к цифровой трансформации",
    },
    services: {
      title: "Наши услуги",
      subtitle: "Комплексные цифровые решения для удовлетворения потребностей вашего бизнеса",
      show_all: "Показать все услуги",
      search_placeholder: "Поиск услуги...",
      no_results: "Услуги не найдены. Попробуйте другой поисковый запрос.",
      items: [
        {
          id: 1,
          title: "UI/UX Дизайн",
          description: "Создание интуитивно понятного и привлекательного пользовательского опыта, который порадует ваших клиентов.",
          icon: "design",
          price: "От $2,000"
        },
        {
          id: 2,
          title: "Веб-разработка",
          description: "Создание быстрых, отзывчивых и безопасных веб-сайтов, которые идеально представляют ваш бренд.",
          icon: "code",
          price: "От $3,500"
        },
        {
          id: 3,
          title: "Мобильные приложения",
          description: "Разработка нативных и кроссплатформенных мобильных приложений для iOS и Android.",
          icon: "smartphone",
          price: "От $5,000"
        },
        {
          id: 4,
          title: "Решения для электронной коммерции",
          description: "Создание интернет-магазинов с интеграцией платежных систем и управлением запасами.",
          icon: "shopping-cart",
          price: "От $4,000"
        },
        {
          id: 5,
          title: "Цифровой маркетинг",
          description: "Внедрение стратегий, основанных на данных, для повышения вашей видимости в интернете и вовлеченности клиентов.",
          icon: "trending-up",
          price: "От $1,500/месяц"
        },
        {
          id: 6,
          title: "Интеграция программного обеспечения",
          description: "Подключение и автоматизация ваших бизнес-систем для повышения эффективности и потока данных.",
          icon: "git-merge",
          price: "От $2,500"
        }
      ],
      web: {
        title: "Веб-разработка"
      },
      crm: {
        title: "Интеграция CRM"
      },
      design: {
        title: "UI/UX Дизайн"
      },
      seo: {
        title: "SEO Оптимизация"
      },
      support: {
        title: "Техническая поддержка"
      }
    },
    journey: {
      title: "Ваш путь к цифровому преображению",
      subtitle: "Мы превращаем ваши идеи в эффективные цифровые решения, которые меняют правила игры",
      step1: {
        title: "Анализ и исследование",
        description: "Мы детально анализируем ваш бизнес, определяем целевую аудиторию и формулируем ключевые цели для максимального эффекта."
      },
      step2: {
        title: "Стратегическое планирование",
        description: "Разрабатываем подробную дорожную карту с точными сроками, бюджетом и техническими требованиями для вашего проекта."
      },
      step3: {
        title: "UI/UX дизайн",
        description: "Создаем интуитивно понятные и привлекательные интерфейсы, которые удивляют пользователей и повышают конверсию."
      },
      step4: {
        title: "Разработка",
        description: "Превращаем концепцию в реальность, используя современные технологии и лучшие практики программирования для надежного результата."
      },
      step5: {
        title: "Контроль качества",
        description: "Проводим всестороннее тестирование на различных устройствах, гарантируя безупречную работу и высокую производительность."
      },
      step6: {
        title: "Развертывание",
        description: "Запускаем ваш продукт в рабочую среду с непрерывным мониторингом и оптимизацией для стабильной работы."
      },
      step7: {
        title: "Обучение и поддержка",
        description: "Предоставляем подробную документацию и обучение вашей команды для эффективного управления новым решением."
      },
      step8: {
        title: "Успешное завершение",
        description: "Празднуем запуск вашего успешного проекта и планируем дальнейшие улучшения для роста вашего бизнеса."
      },
      steps: {
        research: "Исследование и стратегия",
        design: "Дизайн и прототипирование",
        development: "Разработка и тестирование",
        launch: "Запуск и поддержка"
      },
      brief: {
        title: "Заполните бриф проекта",
        description: "Расскажите о вашем проекте подробнее — опишите задачи, цели и ожидаемые результаты. Мы изучим ваши потребности и свяжемся для обсуждения.",
        button: "Заполнить бриф"
      },
      contact: {
        title: "Cвяжитесь с нами напрямую",
        description: "Остались вопросы или хотите обсудить проект лично? Наша команда готова выслушать ваши идеи и предложить оптимальное решение для вашего бизнеса.",
        button: "Связаться с нами"
      }
    },
    footer: {
      services: "Услуги",
      contact: "Связаться с нами",
      privacy: "Политика конфиденциальности",
      terms: "Условия использования",
      rights: "Все права защищены",
      about: {
        title: "О Теко",
        description: "Мы - цифровое агентство, ориентированное на создание инновационных решений для бизнеса, стремящегося к процветанию в цифровую эпоху."
      },
      links: {
        title: "Быстрые ссылки",
        privacy: "Политика конфиденциальности",
        terms: "Условия использования"
      },
      copyright: "© 2023 Teko. Все права защищены."
    }
  },
  cs: {
    hero: {
      title: "Digitální inovace pro váš podnik",
      subtitle: "Vytváříme inovativní digitální řešení, která pomáhají vašemu podnikání růst a prosperovat v moderní technologické krajině.",
      cta: "Prozkoumejte náš proces",
      secondary_cta: "Naše služby",
    },
    navbar: {
      home: "Domů",
      services: "Služby",
      about: "O nás",
      brief: "Brief",
    },
    cta: {
      button: "Začít",
      subtitle: "Udělejte první krok k digitální transformaci",
    },
    services: {
      title: "Naše služby",
      subtitle: "Komplexní digitální řešení pro potřeby vašeho podnikání",
      show_all: "Zobrazit všechny služby",
      search_placeholder: "Hledat službu...",
      no_results: "Žádné služby nenalezeny. Zkuste jiný vyhledávací dotaz.",
      items: [
        {
          id: 1,
          title: "UI/UX Design",
          description: "Vytváření intuitivních a poutavých uživatelských zážitků, které potěší vaše zákazníky.",
          icon: "design",
          price: "Od $2,000"
        },
        {
          id: 2,
          title: "Vývoj webových stránek",
          description: "Budování rychlých, responzivních a bezpečných webových stránek, které dokonale reprezentují vaši značku.",
          icon: "code",
          price: "Od $3,500"
        },
        {
          id: 3,
          title: "Mobilní aplikace",
          description: "Vývoj nativních a multiplatformních mobilních aplikací pro iOS a Android.",
          icon: "smartphone",
          price: "Od $5,000"
        },
        {
          id: 4,
          title: "E-commerce řešení",
          description: "Vytváření e-shopů s bezproblémovou integrací plateb a řízením zásob.",
          icon: "shopping-cart",
          price: "Od $4,000"
        },
        {
          id: 5,
          title: "Digitální marketing",
          description: "Implementace strategií založených na datech pro zvýšení vaší online viditelnosti a zapojení zákazníků.",
          icon: "trending-up",
          price: "Od $1,500/měsíc"
        },
        {
          id: 6,
          title: "Integrace softwaru",
          description: "Propojení a automatizace vašich firemních systémů pro zlepšení efektivity a toku dat.",
          icon: "git-merge",
          price: "Od $2,500"
        }
      ],
      web: {
        title: "Vývoj webových stránek"
      },
      crm: {
        title: "Integrace CRM"
      },
      design: {
        title: "UI/UX Design"
      },
      seo: {
        title: "SEO Optimalizace"
      },
      support: {
        title: "Technická podpora"
      }
    },
    journey: {
      title: "Vaše cesta k digitální transformaci",
      subtitle: "Přeměňujeme vaše nápady na efektivní digitální řešení, která mění pravidla hry",
      step1: {
        title: "Analýza a výzkum",
        description: "Podrobně analyzujeme váš podnik, identifikujeme cílovou skupinu a formulujeme klíčové cíle pro maximální dopad."
      },
      step2: {
        title: "Strategické plánování",
        description: "Vytváříme podrobný plán s přesnými termíny, rozpočtem a technickými požadavky pro váš projekt."
      },
      step3: {
        title: "UI/UX design",
        description: "Vytváříme intuitivní a atraktivní rozhraní, která překvapují uživatele a zvyšují konverzi."
      },
      step4: {
        title: "Vývoj",
        description: "Přeměňujeme koncept v realitu pomocí moderních technologií a nejlepších programátorských postupů pro spolehlivé výsledky."
      },
      step5: {
        title: "Kontrola kvality",
        description: "Provádíme komplexní testování na různých zařízeních, zajišťujeme bezchybný provoz a vysoký výkon."
      },
      step6: {
        title: "Nasazení",
        description: "Spouštíme váš produkt v pracovním prostředí s nepřetržitým sledováním a optimalizací pro stabilní provoz."
      },
      step7: {
        title: "Školení a podpora",
        description: "Poskytujeme podrobnou dokumentaci a školení vašeho týmu pro efektivní správu nového řešení."
      },
      step8: {
        title: "Úspěšné dokončení",
        description: "Slavíme spuštění vašeho úspěšného projektu a plánujeme další vylepšení pro růst vašeho podnikání."
      },
      steps: {
        research: "Výzkum a strategie",
        design: "Design a prototypování",
        development: "Vývoj a testování",
        launch: "Spuštění a podpora"
      },
      brief: {
        title: "Vyplňte projektový brief",
        description: "Řekněte nám více o vašem projektu — popište své úkoly, cíle a očekávané výsledky. Prostudujeme vaše potřeby a kontaktujeme vás k diskusi.",
        button: "Vyplnit brief"
      },
      contact: {
        title: "Kontaktujte nás přímo",
        description: "Máte otázky nebo chcete osobně projednat váš projekt? Náš tým je připraven vyslechnout vaše nápady a nabídnout optimální řešení pro vaše podnikání.",
        button: "Kontaktujte nás"
      }
    },
    footer: {
      services: "Služby",
      contact: "Kontaktujte nás",
      privacy: "Zásady ochrany osobních údajů",
      terms: "Podmínky služby",
      rights: "Všechna práva vyhrazena",
      about: {
        title: "O Teko",
        description: "Jsme digitální agentura zaměřená na vytváření inovativních řešení pro podniky, které chtějí prosperovat v digitální éře."
      },
      links: {
        title: "Rychlé odkazy",
        privacy: "Zásady ochrany osobních údajů",
        terms: "Podmínky služby"
      },
      copyright: "© 2023 Teko. Všechna práva vyhrazena."
    }
  }
};
