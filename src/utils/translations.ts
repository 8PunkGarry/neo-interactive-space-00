
import { authTranslations } from './authTranslations';
import React from 'react';

export type SupportedLanguage = 'en' | 'ru' | 'cs';

export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  capabilities: string[];
  delay: number;
  url: string;
  isViewAll?: boolean;
}

interface HomeTranslations {
  navbar: {
    home: string;
    about: string;
    services: string;
    brief: string;
    login: string;
    signup: string;
    profile: string;
    logout: string;
    chat?: string;
  };
  footerBasic: {
    rights: string;
    terms: string;
    privacy: string;
    contact: string;
  };
  footer: {
    services: string;
    contact: string;
    privacy: string;
    terms: string;
    rights: string;
    address: string;
    about: {
      title: string;
      description: string;
      short_description: string;
    };
    links: {
      title: string;
      privacy: string;
      terms: string;
    };
    copyright: string;
  };
  index: {
    title: string;
    subtitle: string;
    description: string;
    servicesTitle: string;
    servicesDescription: string;
    aboutTitle: string;
    aboutDescription: string;
    contactTitle: string;
    contactDescription: string;
    contactButton: string;
  };
  about: {
    title: string;
    description: string;
    missionTitle: string;
    missionDescription: string;
    valuesTitle: string;
    valuesDescription: string;
    teamTitle: string;
    teamDescription: string;
  };
  services: {
    title: string;
    description: string;
    search: {
      placeholder: string;
      noResults: string;
    };
    filter: {
      viewMode: string;
      grid: string;
      list: string;
    };
    selectedCapabilities: {
      title: string;
      description: string;
    };
    web: {
      title: string;
      description: string;
      fullDescription: string;
      capabilities: {
        responsive: string;
        ecommerce: string;
        cms: string;
        spa: string;
      };
    };
    crm: {
      title: string;
      description: string;
      fullDescription: string;
      capabilities: {
        automation: string;
        analytics: string;
        integration: string;
        custom: string;
      };
    };
    design: {
      title: string;
      description: string;
      fullDescription: string;
      capabilities: {
        ui: string;
        ux: string;
        branding: string;
        prototyping: string;
      };
    };
    seo: {
      title: string;
      description: string;
      fullDescription: string;
      capabilities: {
        audit: string;
        optimization: string;
        analytics: string;
        local: string;
      };
    };
    support: {
      title: string;
      description: string;
      fullDescription: string;
      capabilities: {
        maintenance: string;
        hosting: string;
        security: string;
        updates: string;
      };
    };
    api: {
      title: string;
      description: string;
      fullDescription: string;
      capabilities: {
        integration: string;
        development: string;
        testing: string;
        documentation: string;
      };
    };
    database: {
      title: string;
      description: string;
      fullDescription: string;
      capabilities: {
        design: string;
        optimization: string;
        migration: string;
        security: string;
      };
    };
    mobile: {
      title: string;
      description: string;
      fullDescription: string;
      capabilities: {
        native: string;
        hybrid: string;
        responsive: string;
        pwa: string;
      };
    };
    cloud: {
      title: string;
      description: string;
      fullDescription: string;
      capabilities: {
        aws: string;
        azure: string;
        google: string;
        scaling: string;
      };
    };
    viewAll: {
      title: string;
      description: string;
    };
    singleResult: string;
    multipleResults: string;
    viewAs: string;
    gridView: string;
    listView: string;
    capabilities: string;
    technologies: string;
    approach: {
      title: string;
      description: string;
      step1: string;
      step2: string;
      step3: string;
      step4: string;
    };
    benefits: {
      title: string;
      benefit1: string;
      benefit2: string;
      benefit3: string;
      benefit4: string;
      benefit5: string;
    };
    cta: {
      title: string;
      description: string;
      button: string;
    };
    nextPage: string;
    ai: {
      title: string;
      description: string;
      fullDescription: string;
    };
    cybersecurity: {
      title: string;
      description: string;
      fullDescription: string;
    };
    blockchain: {
      title: string;
      description: string;
      fullDescription: string;
    };
    iot: {
      title: string;
      description: string;
      fullDescription: string;
    };
    arvr: {
      title: string;
      description: string;
      fullDescription: string;
    };
    datascience: {
      title: string;
      description: string;
      fullDescription: string;
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
}

interface Translations {
  [key: string]: HomeTranslations;
}

export const translations: Translations = {
  en: {
    navbar: {
      home: "Home",
      about: "About",
      services: "Services",
      brief: "Brief",
      login: "Login",
      signup: "Sign Up",
      profile: "Profile",
      logout: "Logout",
      chat: "Chat"
    },
    footerBasic: {
      rights: "All Rights Reserved",
      terms: "Terms of Service",
      privacy: "Privacy Policy",
      contact: "Contact Us"
    },
    footer: {
      services: "Services",
      contact: "Contact",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      rights: "All Rights Reserved",
      address: "Prague, Czech Republic",
      about: {
        title: "About Us",
        description: "We are a digital agency focused on creating innovative solutions for businesses looking to thrive in the digital era.",
        short_description: "We create digital solutions that help your business grow"
      },
      links: {
        title: "Quick Links",
        privacy: "Privacy Policy",
        terms: "Terms of Service"
      },
      copyright: "© 2023 Teko. All rights reserved."
    },
    index: {
      title: "Transform Your Business with Digital Innovation",
      subtitle: "We create cutting-edge digital solutions that help your business thrive",
      description: "Our team of experts delivers custom digital solutions tailored to your specific needs",
      servicesTitle: "Our Services",
      servicesDescription: "We offer a wide range of digital services to help your business grow",
      aboutTitle: "About Us",
      aboutDescription: "Learn more about our company and our team",
      contactTitle: "Contact Us",
      contactDescription: "Get in touch with us to discuss your project",
      contactButton: "Get in Touch"
    },
    about: {
      title: "About Us",
      description: "We are a team of digital innovators passionate about helping businesses succeed",
      missionTitle: "Our Mission",
      missionDescription: "To provide exceptional digital solutions that drive business growth",
      valuesTitle: "Our Values",
      valuesDescription: "We believe in transparency, innovation, and client satisfaction",
      teamTitle: "Our Team",
      teamDescription: "Meet the experts behind our digital solutions"
    },
    services: {
      title: "Our Services",
      description: "Comprehensive digital solutions to meet all your business needs",
      search: {
        placeholder: "Search for services...",
        noResults: "No services found. Try a different search term."
      },
      filter: {
        viewMode: "View Mode",
        grid: "Grid",
        list: "List"
      },
      selectedCapabilities: {
        title: "Selected Capabilities",
        description: "These are the capabilities you've selected for your project."
      },
      web: {
        title: "Web Development",
        description: "Creating modern, responsive websites that engage visitors and drive conversions",
        fullDescription: "Our web development services focus on creating fast, responsive, and user-friendly websites that represent your brand effectively. We use the latest technologies and follow best practices to deliver websites that are not only visually appealing but also optimized for performance and search engines.",
        capabilities: {
          responsive: "Responsive Design",
          ecommerce: "E-commerce Solutions",
          cms: "Content Management Systems",
          spa: "Single Page Applications"
        }
      },
      crm: {
        title: "CRM Solutions",
        description: "Streamline your customer relationships with custom CRM solutions",
        fullDescription: "Our CRM solutions help you manage customer relationships effectively, automate routine tasks, and gain valuable insights into customer behavior. We customize CRM systems to fit your specific business needs and integrate them with your existing systems for seamless operation.",
        capabilities: {
          automation: "Workflow Automation",
          analytics: "Customer Analytics",
          integration: "Third-party Integration",
          custom: "Custom Solutions"
        }
      },
      design: {
        title: "UI/UX Design",
        description: "Creating intuitive and engaging user experiences for your digital products",
        fullDescription: "Our UI/UX design services focus on creating intuitive, engaging, and visually appealing digital experiences. We combine aesthetic appeal with functional design to ensure your users can navigate and use your digital products with ease while enjoying a consistent and attractive interface.",
        capabilities: {
          ui: "Interface Design",
          ux: "User Experience",
          branding: "Visual Identity",
          prototyping: "Interactive Prototypes"
        }
      },
      seo: {
        title: "SEO Optimization",
        description: "Improve your visibility in search results and attract more qualified traffic",
        fullDescription: "Our SEO optimization services help you rank higher in search engine results, drive more qualified traffic to your website, and improve your conversion rates. We conduct thorough research and implement proven strategies to ensure your website gets the visibility it deserves.",
        capabilities: {
          audit: "Technical SEO Audit",
          optimization: "Content Optimization",
          analytics: "Performance Tracking",
          local: "Local SEO"
        }
      },
      support: {
        title: "Technical Support",
        description: "Reliable technical support for all your digital products",
        fullDescription: "Our technical support services provide you with the assistance you need to keep your digital products running smoothly. We offer prompt and efficient support to resolve any issues you may encounter and help you make the most of your digital investments.",
        capabilities: {
          maintenance: "Regular Maintenance",
          hosting: "Hosting Solutions",
          security: "Security Updates",
          updates: "Content Updates"
        }
      },
      api: {
        title: "API Integration",
        description: "Connect your systems and applications with seamless API integration",
        fullDescription: "Our API integration services help you connect different systems and applications to work together efficiently. We develop custom APIs and integrate existing ones to ensure smooth data flow between your various business tools and platforms.",
        capabilities: {
          integration: "System Integration",
          development: "Custom API Development",
          testing: "Performance Testing",
          documentation: "Comprehensive Documentation"
        }
      },
      database: {
        title: "Database Solutions",
        description: "Efficient database design and management for your data needs",
        fullDescription: "Our database solutions ensure your data is stored, managed, and accessed efficiently. We design database structures that are optimized for your specific needs and provide ongoing management to ensure data integrity and security.",
        capabilities: {
          design: "Database Architecture",
          optimization: "Performance Optimization",
          migration: "Data Migration",
          security: "Data Security"
        }
      },
      mobile: {
        title: "Mobile Development",
        description: "Create powerful mobile applications for iOS and Android platforms",
        fullDescription: "Our mobile development services focus on creating applications that work seamlessly across different devices and platforms. We develop native and cross-platform mobile apps that are optimized for performance and provide an excellent user experience.",
        capabilities: {
          native: "Native Applications",
          hybrid: "Hybrid Solutions",
          responsive: "Responsive Web Apps",
          pwa: "Progressive Web Apps"
        }
      },
      cloud: {
        title: "Cloud Solutions",
        description: "Leverage the power of cloud computing for your business",
        fullDescription: "Our cloud solutions help you harness the power of cloud computing to improve efficiency, scalability, and security. We assist with cloud migration, infrastructure management, and optimization to ensure you get the most from your cloud investment.",
        capabilities: {
          aws: "AWS Integration",
          azure: "Microsoft Azure",
          google: "Google Cloud",
          scaling: "Auto-scaling"
        }
      },
      viewAll: {
        title: "View All Services",
        description: "Explore our complete range of digital services"
      },
      singleResult: "service found",
      multipleResults: "services found",
      viewAs: "View as",
      gridView: "Grid",
      listView: "List",
      capabilities: "Capabilities",
      technologies: "Technologies",
      approach: {
        title: "Our Approach",
        description: "We follow a systematic approach to deliver high-quality digital solutions",
        step1: "We start with a thorough analysis of your business needs and objectives",
        step2: "Our team creates a detailed project plan with timelines and deliverables",
        step3: "We use an iterative development process with regular feedback",
        step4: "After testing and quality assurance, we deploy your solution and provide ongoing support"
      },
      benefits: {
        title: "Why Choose Us",
        benefit1: "Experienced team of professionals",
        benefit2: "Custom solutions tailored to your needs",
        benefit3: "Transparent communication throughout the project",
        benefit4: "Competitive pricing and flexible engagement models",
        benefit5: "Ongoing support and maintenance"
      },
      cta: {
        title: "Ready to Get Started?",
        description: "Let us help you transform your business with our digital solutions",
        button: "Contact Us Now"
      },
      nextPage: "Discuss Your Project",
      ai: {
        title: "AI Solutions",
        description: "Harness the power of artificial intelligence for your business",
        fullDescription: "Our AI solutions help you leverage the power of artificial intelligence to automate processes, gain insights, and create innovative products and services that give you a competitive edge in your industry."
      },
      cybersecurity: {
        title: "Cybersecurity",
        description: "Protect your digital assets with comprehensive security solutions",
        fullDescription: "Our cybersecurity services help you protect your digital assets from threats and vulnerabilities. We implement robust security measures to safeguard your data and ensure business continuity."
      },
      blockchain: {
        title: "Blockchain Development",
        description: "Leverage blockchain technology for enhanced security and transparency",
        fullDescription: "Our blockchain development services help you implement secure, transparent, and efficient blockchain solutions for various applications, from supply chain management to financial transactions."
      },
      iot: {
        title: "IoT Solutions",
        description: "Connect devices and systems for smarter operations",
        fullDescription: "Our IoT solutions help you connect devices and systems to collect and exchange data, enabling smarter decision-making and more efficient operations across your business."
      },
      arvr: {
        title: "AR/VR Development",
        description: "Create immersive experiences with augmented and virtual reality",
        fullDescription: "Our AR/VR development services help you create immersive and interactive experiences that engage users in entirely new ways, whether for training, marketing, or entertainment purposes."
      },
      datascience: {
        title: "Data Science",
        description: "Turn your data into valuable insights with advanced analytics",
        fullDescription: "Our data science services help you extract valuable insights from your data using advanced analytics, machine learning, and visualization techniques to support better decision-making."
      }
    },
    journey: {
      title: "Your Digital Journey",
      subtitle: "We guide you through every step of your digital transformation",
      step1: {
        title: "Discovery",
        description: "We learn about your business, goals, and challenges"
      },
      step2: {
        title: "Planning",
        description: "We create a detailed roadmap for your digital solution"
      },
      step3: {
        title: "Design",
        description: "We design intuitive and attractive user interfaces"
      },
      step4: {
        title: "Development",
        description: "We build your solution using the latest technologies"
      },
      step5: {
        title: "Testing",
        description: "We thoroughly test your solution to ensure quality"
      },
      step6: {
        title: "Deployment",
        description: "We launch your solution and ensure smooth operation"
      },
      step7: {
        title: "Support",
        description: "We provide ongoing support and maintenance"
      },
      step8: {
        title: "Growth",
        description: "We help you evolve and improve your digital solution"
      },
      steps: {
        research: "Research",
        design: "Design",
        development: "Development",
        launch: "Launch"
      },
      brief: {
        title: "Fill Out Project Brief",
        description: "Tell us more about your project needs and goals",
        button: "Start Brief"
      },
      contact: {
        title: "Contact Us Directly",
        description: "Get in touch with our team to discuss your project",
        button: "Contact Us"
      }
    }
  },
  ru: {
    navbar: {
      home: "Главная",
      about: "О нас",
      services: "Услуги",
      brief: "Бриф",
      login: "Вход",
      signup: "Регистрация",
      profile: "Профиль",
      logout: "Выход",
      chat: "Чат"
    },
    footerBasic: {
      rights: "Все права защищены",
      terms: "Условия использования",
      privacy: "Политика конфиденциальности",
      contact: "Связаться с нами"
    },
    footer: {
      services: "Услуги",
      contact: "Контакты",
      privacy: "Политика конфиденциальности",
      terms: "Условия использования",
      rights: "Все права защищены",
      address: "Прага, Чешская Республика",
      about: {
        title: "О нас",
        description: "Мы - цифровое агентство, ориентированное на создание инновационных решений для бизнеса, стремящегося процветать в цифровую эпоху.",
        short_description: "Мы создаем цифровые решения, которые помогают вашему бизнесу расти"
      },
      links: {
        title: "Быстрые ссылки",
        privacy: "Политика конфиденциальности",
        terms: "Условия использования"
      },
      copyright: "© 2023 Teko. Все права защищены."
    },
    index: {
      title: "Цифровые инновации для вашего бизнеса",
      subtitle: "Мы создаем передовые цифровые решения, которые помогают вашему бизнесу процветать",
      description: "Наша команда экспертов предоставляет индивидуальные цифровые решения, адаптированные под ваши конкретные потребности",
      servicesTitle: "Наши услуги",
      servicesDescription: "Мы предлагаем широкий спектр цифровых услуг для роста вашего бизнеса",
      aboutTitle: "О нас",
      aboutDescription: "Узнайте больше о нашей компании и нашей команде",
      contactTitle: "Связаться с нами",
      contactDescription: "Свяжитесь с нами, чтобы обсудить ваш проект",
      contactButton: "Связаться"
    },
    about: {
      title: "О нас",
      description: "Мы команда цифровых инноваторов, увлеченных помощью бизнесу в достижении успеха",
      missionTitle: "Наша миссия",
      missionDescription: "Предоставлять исключительные цифровые решения, способствующие росту бизнеса",
      valuesTitle: "Наши ценности",
      valuesDescription: "Мы верим в прозрачность, инновации и удовлетворенность клиентов",
      teamTitle: "Наша команда",
      teamDescription: "Познакомьтесь с экспертами, стоящими за нашими цифровыми решениями"
    },
    services: {
      title: "Наши услуги",
      description: "Комплексные цифровые решения для удовлетворения всех потребностей вашего бизнеса",
      search: {
        placeholder: "Поиск услуг...",
        noResults: "Услуги не найдены. Попробуйте другой поисковый запрос."
      },
      filter: {
        viewMode: "Режим просмотра",
        grid: "Сетка",
        list: "Список"
      },
      selectedCapabilities: {
        title: "Выбранные возможности",
        description: "Это возможности, которые вы выбрали для своего проекта."
      },
      web: {
        title: "Веб-разработка",
        description: "Создание современных, адаптивных веб-сайтов, которые привлекают посетителей и способствуют конверсии",
        fullDescription: "Наши услуги по веб-разработке сосредоточены на создании быстрых, адаптивных и удобных для пользователя веб-сайтов, которые эффективно представляют ваш бренд. Мы используем новейшие технологии и следуем лучшим практикам для создания веб-сайтов, которые не только визуально привлекательны, но и оптимизированы для производительности и поисковых систем.",
        capabilities: {
          responsive: "Адаптивный дизайн",
          ecommerce: "Решения для электронной коммерции",
          cms: "Системы управления контентом",
          spa: "Одностраничные приложения"
        }
      },
      crm: {
        title: "CRM-решения",
        description: "Оптимизируйте ваши отношения с клиентами с помощью индивидуальных CRM-решений",
        fullDescription: "Наши CRM-решения помогают вам эффективно управлять отношениями с клиентами, автоматизировать рутинные задачи и получать ценные сведения о поведении клиентов. Мы настраиваем CRM-системы в соответствии с конкретными потребностями вашего бизнеса и интегрируем их с существующими системами для бесперебойной работы.",
        capabilities: {
          automation: "Автоматизация рабочих процессов",
          analytics: "Аналитика клиентов",
          integration: "Интеграция с третьими сторонами",
          custom: "Индивидуальные решения"
        }
      },
      design: {
        title: "UI/UX Дизайн",
        description: "Создание интуитивно понятного и увлекательного пользовательского опыта для ваших цифровых продуктов",
        fullDescription: "Наши услуги UI/UX-дизайна направлены на создание интуитивно понятных, увлекательных и визуально привлекательных цифровых впечатлений. Мы сочетаем эстетическую привлекательность с функциональным дизайном, чтобы обеспечить пользователям легкость навигации и использования ваших цифровых продуктов, наслаждаясь последовательным и привлекательным интерфейсом.",
        capabilities: {
          ui: "Дизайн интерфейса",
          ux: "Пользовательский опыт",
          branding: "Визуальная идентичность",
          prototyping: "Интерактивные прототипы"
        }
      },
      seo: {
        title: "SEO-оптимизация",
        description: "Улучшите свою видимость в результатах поиска и привлекайте больше квалифицированного трафика",
        fullDescription: "Наши услуги по SEO-оптимизации помогают вам занять более высокие позиции в результатах поисковых систем, привлечь больше квалифицированного трафика на ваш веб-сайт и улучшить ваши показатели конверсии. Мы проводим тщательное исследование и реализуем проверенные стратегии, чтобы обеспечить вашему веб-сайту заслуженную видимость.",
        capabilities: {
          audit: "Технический SEO-аудит",
          optimization: "Оптимизация контента",
          analytics: "Отслеживание производительности",
          local: "Локальное SEO"
        }
      },
      support: {
        title: "Техническая поддержка",
        description: "Надежная техническая поддержка для всех ваших цифровых продуктов",
        fullDescription: "Наши услуги технической поддержки предоставляют вам помощь, необходимую для бесперебойной работы ваших цифровых продуктов. Мы предлагаем оперативную и эффективную поддержку для решения любых проблем, с которыми вы можете столкнуться, и помогаем вам максимально использовать ваши цифровые инвестиции.",
        capabilities: {
          maintenance: "Регулярное обслуживание",
          hosting: "Хостинг-решения",
          security: "Обновления безопасности",
          updates: "Обновления контента"
        }
      },
      api: {
        title: "API-интеграция",
        description: "Соедините свои системы и приложения с помощью бесшовной API-интеграции",
        fullDescription: "Наши услуги API-интеграции помогают вам соединить различные системы и приложения для эффективной совместной работы. Мы разрабатываем пользовательские API и интегрируем существующие, чтобы обеспечить плавный поток данных между вашими различными бизнес-инструментами и платформами.",
        capabilities: {
          integration: "Системная интеграция",
          development: "Разработка пользовательских API",
          testing: "Тестирование производительности",
          documentation: "Комплексная документация"
        }
      },
      database: {
        title: "Решения для баз данных",
        description: "Эффективное проектирование и управление базами данных для ваших потребностей",
        fullDescription: "Наши решения для баз данных обеспечивают эффективное хранение, управление и доступ к вашим данным. Мы проектируем структуры баз данных, оптимизированные для ваших конкретных потребностей, и обеспечиваем постоянное управление для обеспечения целостности и безопасности данных.",
        capabilities: {
          design: "Архитектура базы данных",
          optimization: "Оптимизация производительности",
          migration: "Миграция данных",
          security: "Безопасность данных"
        }
      },
      mobile: {
        title: "Мобильная разработка",
        description: "Создание мощных мобильных приложений для платформ iOS и Android",
        fullDescription: "Наши услуги мобильной разработки сосредоточены на создании приложений, которые работают безупречно на разных устройствах и платформах. Мы разрабатываем нативные и кросс-платформенные мобильные приложения, оптимизированные для производительности и обеспечивающие отличный пользовательский опыт.",
        capabilities: {
          native: "Нативные приложения",
          hybrid: "Гибридные решения",
          responsive: "Адаптивные веб-приложения",
          pwa: "Прогрессивные веб-приложения"
        }
      },
      cloud: {
        title: "Облачные решения",
        description: "Используйте мощь облачных вычислений для вашего бизнеса",
        fullDescription: "Наши облачные решения помогают вам использовать мощь облачных вычислений для повышения эффективности, масштабируемости и безопасности. Мы помогаем с миграцией в облако, управлением инфраструктурой и оптимизацией, чтобы обеспечить максимальную отдачу от ваших облачных инвестиций.",
        capabilities: {
          aws: "Интеграция AWS",
          azure: "Microsoft Azure",
          google: "Google Cloud",
          scaling: "Автомасштабирование"
        }
      },
      viewAll: {
        title: "Просмотреть все услуги",
        description: "Изучите наш полный спектр цифровых услуг"
      },
      singleResult: "услуга найдена",
      multipleResults: "услуг найдено",
      viewAs: "Просмотр как",
      gridView: "Сетка",
      listView: "Список",
      capabilities: "Возможности",
      technologies: "Технологии",
      approach: {
        title: "Наш подход",
        description: "Мы следуем систематическому подходу для предоставления высококачественных цифровых решений",
        step1: "Мы начинаем с тщательного анализа потребностей и целей вашего бизнеса",
        step2: "Наша команда создает детальный план проекта с временными рамками и результатами",
        step3: "Мы используем итеративный процесс разработки с регулярной обратной связью",
        step4: "После тестирования и обеспечения качества мы развертываем ваше решение и обеспечиваем постоянную поддержку"
      },
      benefits: {
        title: "Почему выбирают нас",
        benefit1: "Опытная команда профессионалов",
        benefit2: "Индивидуальные решения, адаптированные к вашим потребностям",
        benefit3: "Прозрачная коммуникация на протяжении всего проекта",
        benefit4: "Конкурентоспособные цены и гибкие модели сотрудничества",
        benefit5: "Постоянная поддержка и обслуживание"
      },
      cta: {
        title: "Готовы начать?",
        description: "Позвольте нам помочь вам трансформировать ваш бизнес с помощью наших цифровых решений",
        button: "Связаться с нами сейчас"
      },
      nextPage: "Обсудить ваш проект",
      ai: {
        title: "AI-решения",
        description: "Используйте мощь искусственного интеллекта для вашего бизнеса",
        fullDescription: "Наши AI-решения помогают вам использовать мощь искусственного интеллекта для автоматизации процессов, получения инсайтов и создания инновационных продуктов и услуг, которые дают вам конкурентное преимущество в вашей отрасли."
      },
      cybersecurity: {
        title: "Кибербезопасность",
        description: "Защитите свои цифровые активы с помощью комплексных решений безопасности",
        fullDescription: "Наши услуги кибербезопасности помогают вам защитить ваши цифровые активы от угроз и уязвимостей. Мы внедряем надежные меры безопасности для защиты ваших данных и обеспечения непрерывности бизнеса."
      },
      blockchain: {
        title: "Разработка блокчейн",
        description: "Используйте технологию блокчейн для повышения безопасности и прозрачности",
        fullDescription: "Наши услуги по разработке блокчейн помогают вам внедрять безопасные, прозрачные и эффективные блокчейн-решения для различных приложений, от управления цепочками поставок до финансовых транзакций."
      },
      iot: {
        title: "IoT-решения",
        description: "Соедините устройства и системы для более интеллектуальных операций",
        fullDescription: "Наши IoT-решения помогают вам соединять устройства и системы для сбора и обмена данными, что позволяет принимать более интеллектуальные решения и повышать эффективность операций в вашем бизнесе."
      },
      arvr: {
        title: "AR/VR-разработка",
        description: "Создавайте иммерсивные впечатления с помощью дополненной и виртуальной реальности",
        fullDescription: "Наши услуги по разработке AR/VR помогают вам создавать иммерсивные и интерактивные впечатления, которые вовлекают пользователей совершенно новыми способами, будь то для обучения, маркетинга или развлекательных целей."
      },
      datascience: {
        title: "Наука о данных",
        description: "Превратите ваши данные в ценные инсайты с помощью продвинутой аналитики",
        fullDescription: "Наши услуги в области науки о данных помогают вам извлекать ценные инсайты из ваших данных с использованием продвинутой аналитики, машинного обучения и методов визуализации для поддержки лучшего принятия решений."
      }
    },
    journey: {
      title: "Ваше цифровое путешествие",
      subtitle: "Мы сопровождаем вас на каждом этапе вашей цифровой трансформации",
      step1: {
        title: "Открытие",
        description: "Мы узнаем о вашем бизнесе, целях и вызовах"
      },
      step2: {
        title: "Планирование",
        description: "Мы создаем детальную дорожную карту для вашего цифрового решения"
      },
      step3: {
        title: "Дизайн",
        description: "Мы проектируем интуитивно понятные и привлекательные пользовательские интерфейсы"
      },
      step4: {
        title: "Разработка",
        description: "Мы создаем ваше решение с использованием новейших технологий"
      },
      step5: {
        title: "Тестирование",
        description: "Мы тщательно тестируем ваше решение для обеспечения качества"
      },
      step6: {
        title: "Развертывание",
        description: "Мы запускаем ваше решение и обеспечиваем бесперебойную работу"
      },
      step7: {
        title: "Поддержка",
        description: "Мы предоставляем постоянную поддержку и обслуживание"
      },
      step8: {
        title: "Рост",
        description: "Мы помогаем вам развивать и улучшать ваше цифровое решение"
      },
      steps: {
        research: "Исследование",
        design: "Дизайн",
        development: "Разработка",
        launch: "Запуск"
      },
      brief: {
        title: "Заполнить проектную заявку",
        description: "Расскажите нам больше о потребностях и целях вашего проекта",
        button: "Начать бриф"
      },
      contact: {
        title: "Связаться с нами напрямую",
        description: "Свяжитесь с нашей командой, чтобы обсудить ваш проект",
        button: "Связаться с нами"
      }
    }
  },
  cs: {
    // Add Czech translations if they exist, or placeholder values
    navbar: {
      home: "Domů",
      about: "O nás",
      services: "Služby",
      brief: "Brief",
      login: "Přihlášení",
      signup: "Registrace",
      profile: "Profil",
      logout: "Odhlásit se",
      chat: "Chat"
    },
    footerBasic: {
      rights: "Všechna práva vyhrazena",
      terms: "Podmínky služby",
      privacy: "Zásady ochrany soukromí",
      contact: "Kontaktujte nás"
    },
    footer: {
      services: "Služby",
      contact: "Kontakt",
      privacy: "Zásady ochrany soukromí",
      terms: "Podmínky služby",
      rights: "Všechna práva vyhrazena",
      address: "Praha, Česká republika",
      about: {
        title: "O nás",
        description: "Jsme digitální agentura zaměřená na vytváření inovativních řešení pro firmy, které chtějí prosperovat v digitální éře.",
        short_description: "Vytváříme digitální řešení, která pomáhají vašemu podnikání růst"
      },
      links: {
        title: "Rychlé odkazy",
        privacy: "Zásady ochrany soukromí",
        terms: "Podmínky služby"
      },
      copyright: "© 2023 Teko. Všechna práva vyhrazena."
    },
    index: {
      title: "Transformujte své podnikání pomocí digitální inovace",
      subtitle: "Vytváříme špičková digitální řešení, která pomáhají vašemu podnikání prosperovat",
      description: "Náš tým odborníků poskytuje digitální řešení na míru podle vašich specifických potřeb",
      servicesTitle: "Naše služby",
      servicesDescription: "Nabízíme širokou škálu digitálních služeb pro růst vašeho podnikání",
      aboutTitle: "O nás",
      aboutDescription: "Zjistěte více o naší společnosti a našem týmu",
      contactTitle: "Kontaktujte nás",
      contactDescription: "Spojte se s námi a prodiskutujte svůj projekt",
      contactButton: "Kontaktujte nás"
    },
    about: {
      title: "O nás",
      description: "Jsme tým digitálních inovátorů, kteří se vášnivě věnují pomoci firmám k úspěchu",
      missionTitle: "Naše mise",
      missionDescription: "Poskytovat výjimečná digitální řešení, která pohánějí růst podnikání",
      valuesTitle: "Naše hodnoty",
      valuesDescription: "Věříme v transparentnost, inovace a spokojenost klientů",
      teamTitle: "Náš tým",
      teamDescription: "Seznamte se s odborníky stojícími za našimi digitálními řešeními"
    },
    services: {
      title: "Naše služby",
      description: "Komplexní digitální řešení pro všechny potřeby vašeho podnikání",
      search: {
        placeholder: "Hledat služby...",
        noResults: "Nebyly nalezeny žádné služby. Zkuste jiný výraz pro vyhledávání."
      },
      filter: {
        viewMode: "Režim zobrazení",
        grid: "Mřížka",
        list: "Seznam"
      },
      selectedCapabilities: {
        title: "Vybrané schopnosti",
        description: "Toto jsou schopnosti, které jste si vybrali pro svůj projekt."
      },
      web: {
        title: "Vývoj webových stránek",
        description: "Vytváření moderních, responzivních webových stránek, které zaujmou návštěvníky a podporují konverze",
        fullDescription: "Naše služby vývoje webových stránek se zaměřují na vytváření rychlých, responzivních a uživatelsky přívětivých webových stránek, které efektivně reprezentují vaši značku. Používáme nejnovější technologie a postupujeme podle osvědčených postupů, abychom dodávali webové stránky, které jsou nejen vizuálně přitažlivé, ale také optimalizované pro výkon a vyhledávače.",
        capabilities: {
          responsive: "Responzivní design",
          ecommerce: "Řešení pro e-commerce",
          cms: "Systémy pro správu obsahu",
          spa: "Single Page Applications"
        }
      },
      crm: {
        title: "CRM řešení",
        description: "Zjednodušte své vztahy se zákazníky pomocí vlastních CRM řešení",
        fullDescription: "Naše CRM řešení vám pomáhají efektivně spravovat vztahy se zákazníky, automatizovat rutinní úkoly a získávat cenné poznatky o chování zákazníků. Přizpůsobujeme CRM systémy tak, aby odpovídaly vašim specifickým obchodním potřebám, a integrujeme je s vašimi stávajícími systémy pro bezproblémový provoz.",
        capabilities: {
          automation: "Automatizace pracovních postupů",
          analytics: "Analýza zákazníků",
          integration: "Integrace třetích stran",
          custom: "Vlastní řešení"
        }
      },
      design: {
        title: "UI/UX Design",
        description: "Vytváření intuitivních a poutavých uživatelských zážitků pro vaše digitální produkty",
        fullDescription: "Naše služby UI/UX designu se zaměřují na vytváření intuitivních, poutavých a vizuálně přitažlivých digitálních zážitků. Kombinujeme estetickou přitažlivost s funkčním designem, abychom zajistili, že vaši uživatelé se mohou snadno pohybovat a používat vaše digitální produkty a zároveň si užívat konzistentní a atraktivní rozhraní.",
        capabilities: {
          ui: "Design rozhraní",
          ux: "Uživatelská zkušenost",
          branding: "Vizuální identita",
          prototyping: "Interaktivní prototypy"
        }
      },
      seo: {
        title: "SEO optimalizace",
        description: "Zlepšete svou viditelnost ve výsledcích vyhledávání a přilákejte více kvalifikovaného provozu",
        fullDescription: "Naše služby SEO optimalizace vám pomáhají umístit se výše ve výsledcích vyhledávačů, přivést na váš web více kvalifikovaného provozu a zlepšit míru konverze. Provádíme důkladný výzkum a implementujeme osvědčené strategie, abychom zajistili, že váš web získá viditelnost, kterou si zaslouží.",
        capabilities: {
          audit: "Technický SEO audit",
          optimization: "Optimalizace obsahu",
          analytics: "Sledování výkonu",
          local: "Lokální SEO"
        }
      },
      support: {
        title: "Technická podpora",
        description: "Spolehlivá technická podpora pro všechny vaše digitální produkty",
        fullDescription: "Naše služby technické podpory vám poskytují pomoc, kterou potřebujete, aby vaše digitální produkty běžely hladce. Nabízíme rychlou a efektivní podporu pro řešení jakýchkoli problémů, na které můžete narazit, a pomáháme vám maximálně využít vaše digitální investice.",
        capabilities: {
          maintenance: "Pravidelná údržba",
          hosting: "Hostingová řešení",
          security: "Bezpečnostní aktualizace",
          updates: "Aktualizace obsahu"
        }
      },
      api: {
        title: "API integrace",
        description: "Propojte své systémy a aplikace pomocí bezproblémové API integrace",
        fullDescription: "Naše služby API integrace vám pomáhají propojit různé systémy a aplikace, aby efektivně spolupracovaly. Vyvíjíme vlastní API a integrujeme existující, abychom zajistili hladký tok dat mezi vašimi různými obchodními nástroji a platformami.",
        capabilities: {
          integration: "Systémová integrace",
          development: "Vývoj vlastních API",
          testing: "Testování výkonu",
          documentation: "Komplexní dokumentace"
        }
      },
      database: {
        title: "Databázová řešení",
        description: "Efektivní návrh a správa databází pro vaše datové potřeby",
        fullDescription: "Naše databázová řešení zajišťují efektivní ukládání, správu a přístup k vašim datům. Navrhujeme databázové struktury, které jsou optimalizovány pro vaše specifické potřeby, a poskytujeme průběžnou správu pro zajištění integrity a bezpečnosti dat.",
        capabilities: {
          design: "Architektura databáze",
          optimization: "Optimalizace výkonu",
          migration: "Migrace dat",
          security: "Bezpečnost dat"
        }
      },
      mobile: {
        title: "Vývoj mobilních aplikací",
        description: "Vytváření výkonných mobilních aplikací pro platformy iOS a Android",
        fullDescription: "Naše služby vývoje mobilních aplikací se zaměřují na vytváření aplikací, které bezproblémově fungují na různých zařízeních a platformách. Vyvíjíme nativní a multiplatformní mobilní aplikace, které jsou optimalizovány pro výkon a poskytují vynikající uživatelskou zkušenost.",
        capabilities: {
          native: "Nativní aplikace",
          hybrid: "Hybridní řešení",
          responsive: "Responzivní webové aplikace",
          pwa: "Progresivní webové aplikace"
        }
      },
      cloud: {
        title: "Cloudová řešení",
        description: "Využijte sílu cloud computingu pro své podnikání",
        fullDescription: "Naše cloudová řešení vám pomáhají využít sílu cloud computingu ke zlepšení efektivity, škálovatelnosti a bezpečnosti. Pomáháme s migrací do cloudu, správou infrastruktury a optimalizací, abychom zajistili, že získáte ze své cloudové investice maximum.",
        capabilities: {
          aws: "AWS integrace",
          azure: "Microsoft Azure",
          google: "Google Cloud",
          scaling: "Automatické škálování"
        }
      },
      viewAll: {
        title: "Zobrazit všechny služby",
        description: "Prozkoumejte naši kompletní nabídku digitálních služeb"
      },
      singleResult: "služba nalezena",
      multipleResults: "služeb nalezeno",
      viewAs: "Zobrazit jako",
      gridView: "Mřížka",
      listView: "Seznam",
      capabilities: "Schopnosti",
      technologies: "Technologie",
      approach: {
        title: "Náš přístup",
        description: "Postupujeme systematicky, abychom dodávali vysoce kvalitní digitální řešení",
        step1: "Začínáme důkladnou analýzou potřeb a cílů vašeho podnikání",
        step2: "Náš tým vytváří podrobný projektový plán s časovými osami a výstupy",
        step3: "Používáme iterativní proces vývoje s pravidelnou zpětnou vazbou",
        step4: "Po testování a zajištění kvality nasazujeme vaše řešení a poskytujeme průběžnou podporu"
      },
      benefits: {
        title: "Proč si vybrat nás",
        benefit1: "Zkušený tým profesionálů",
        benefit2: "Vlastní řešení přizpůsobená vašim potřebám",
        benefit3: "Transparentní komunikace v průběhu celého projektu",
        benefit4: "Konkurenceschopné ceny a flexibilní modely zapojení",
        benefit5: "Průběžná podpora a údržba"
      },
      cta: {
        title: "Připraveni začít?",
        description: "Dovolte nám pomoci vám transformovat vaše podnikání pomocí našich digitálních řešení",
        button: "Kontaktujte nás nyní"
      },
      nextPage: "Projednat váš projekt",
      ai: {
        title: "AI řešení",
        description: "Využijte sílu umělé inteligence pro své podnikání",
        fullDescription: "Naše AI řešení vám pomáhají využít sílu umělé inteligence k automatizaci procesů, získávání poznatků a vytváření inovativních produktů a služeb, které vám dávají konkurenční výhodu ve vašem odvětví."
      },
      cybersecurity: {
        title: "Kybernetická bezpečnost",
        description: "Chraňte své digitální aktiva komplexními bezpečnostními řešeními",
        fullDescription: "Naše služby kybernetické bezpečnosti vám pomáhají chránit vaše digitální aktiva před hrozbami a zranitelnostmi. Implementujeme robustní bezpečnostní opatření k ochraně vašich dat a zajištění kontinuity podnikání."
      },
      blockchain: {
        title: "Vývoj blockchainu",
        description: "Využijte technologii blockchain pro zvýšenou bezpečnost a transparentnost",
        fullDescription: "Naše služby vývoje blockchainu vám pomáhají implementovat bezpečná, transparentní a efektivní blockchain řešení pro různé aplikace, od řízení dodavatelského řetězce až po finanční transakce."
      },
      iot: {
        title: "IoT řešení",
        description: "Propojte zařízení a systémy pro chytřejší operace",
        fullDescription: "Naše IoT řešení vám pomáhají propojit zařízení a systémy pro sběr a výměnu dat, což umožňuje chytřejší rozhodování a efektivnější operace v celém vašem podnikání."
      },
      arvr: {
        title: "AR/VR vývoj",
        description: "Vytvářejte poutavé zážitky s rozšířenou a virtuální realitou",
        fullDescription: "Naše služby AR/VR vývoje vám pomáhají vytvářet poutavé a interaktivní zážitky, které zapojují uživatele zcela novými způsoby, ať už pro školení, marketing nebo zábavní účely."
      },
      datascience: {
        title: "Datová věda",
        description: "Proměňte svá data v cenné poznatky pomocí pokročilé analytiky",
        fullDescription: "Naše služby datové vědy vám pomáhají extrahovat cenné poznatky z vašich dat pomocí pokročilé analytiky, strojového učení a vizualizačních technik pro podporu lepšího rozhodování."
      }
    },
    journey: {
      title: "Vaše digitální cesta",
      subtitle: "Provázíme vás každým krokem vaší digitální transformace",
      step1: {
        title: "Objevování",
        description: "Zjišťujeme o vašem podnikání, cílech a výzvách"
      },
      step2: {
        title: "Plánování",
        description: "Vytváříme podrobnou mapu pro vaše digitální řešení"
      },
      step3: {
        title: "Design",
        description: "Navrhujeme intuitivní a atraktivní uživatelská rozhraní"
      },
      step4: {
        title: "Vývoj",
        description: "Vytváříme vaše řešení pomocí nejnovějších technologií"
      },
      step5: {
        title: "Testování",
        description: "Důkladně testujeme vaše řešení pro zajištění kvality"
      },
      step6: {
        title: "Nasazení",
        description: "Spouštíme vaše řešení a zajišťujeme hladký provoz"
      },
      step7: {
        title: "Podpora",
        description: "Poskytujeme průběžnou podporu a údržbu"
      },
      step8: {
        title: "Růst",
        description: "Pomáháme vám vyvíjet a zlepšovat vaše digitální řešení"
      },
      steps: {
        research: "Výzkum",
        design: "Design",
        development: "Vývoj",
        launch: "Spuštění"
      },
      brief: {
        title: "Vyplňte projektový brief",
        description: "Řekněte nám více o potřebách a cílech vašeho projektu",
        button: "Začít brief"
      },
      contact: {
        title: "Kontaktujte nás přímo",
        description: "Spojte se s naším týmem a prodiskutujte svůj projekt",
        button: "Kontaktujte nás"
      }
    }
  }
};
