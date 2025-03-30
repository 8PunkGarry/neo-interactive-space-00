
export type SupportedLanguage = 'en' | 'ru' | 'cs';

export const translations = {
  en: {
    navbar: {
      home: 'Home',
      services: 'Services',
      brief: 'Brief',
      cases: 'Cases',
      blog: 'Blog',
      contact: 'Contact',
      chat: 'Chat'
    },
    home: {
      hero: {
        title: 'We create digital solutions',
        subtitle: 'We develop innovative and effective solutions to help your business grow and succeed in the digital age.',
        button: 'Discuss the project'
      },
      about: {
        title: 'About us',
        description: 'We are a team of experienced professionals specializing in web development, CRM implementation, UI/UX design, and SEO optimization. Our goal is to provide comprehensive solutions tailored to your unique needs.',
        values: {
          innovation: 'Innovation',
          quality: 'Quality',
          customerFocus: 'Customer Focus',
          teamwork: 'Teamwork'
        }
      },
      services: {
        title: 'Our Services',
        description: 'Explore our wide range of services designed to meet your business needs. From web development to CRM solutions, we have you covered.',
        viewAll: {
          title: 'All services',
          description: 'Explore all our services'
        }
      },
      cases: {
        title: 'Our Cases',
        description: 'Check out our successful projects and see how we have helped our clients achieve their goals.',
        viewAll: 'View all cases'
      },
      blog: {
        title: 'Blog',
        description: 'Stay up-to-date with the latest industry trends, tips, and insights from our experts.',
        viewAll: 'View all articles'
      },
      contact: {
        title: 'Contact us',
        description: 'Ready to take your business to the next level? Contact us today to discuss your project and get started.'
      }
    },
    services: {
      title: 'Our Services',
      description: 'Explore our wide range of services designed to meet your business needs. From web development to CRM solutions, we have you covered.',
      search: {
        placeholder: 'Search services...',
        noResults: 'No services found matching your search criteria.'
      },
      capabilities: 'Key Capabilities',
      technologies: 'Technologies',
      web: {
        title: 'Web Development',
        description: 'We create modern, responsive, and user-friendly websites tailored to your business needs.',
        fullDescription: 'Our web development services focus on creating websites that not only look great but also provide an exceptional user experience. We use the latest technologies to ensure your site is fast, secure, and optimized for search engines.',
        capabilities: {
          responsive: 'Responsive Design',
          ecommerce: 'E-Commerce Solutions',
          cms: 'Content Management Systems',
          spa: 'Single Page Applications'
        }
      },
      crm: {
        title: 'CRM Solutions',
        description: 'We implement and customize CRM systems to streamline your sales, marketing, and customer service processes.',
        fullDescription: 'Our CRM solutions help you manage customer relationships effectively, improve sales processes, and enhance customer service. We work with leading CRM platforms to deliver tailored solutions that meet your specific business requirements.',
        capabilities: {
          automation: 'Sales Automation',
          analytics: 'Advanced Analytics',
          integration: 'System Integration',
          custom: 'Custom Solutions'
        }
      },
      design: {
        title: 'UI/UX Design',
        description: 'We create intuitive and visually appealing user interfaces that enhance user experience and drive engagement.',
        fullDescription: 'Our UI/UX design services focus on creating user-centered designs that are both visually appealing and easy to use. We conduct thorough user research and testing to ensure your website or application provides an optimal user experience.',
        capabilities: {
          ui: 'User Interface Design',
          ux: 'User Experience Design',
          branding: 'Branding & Visual Identity',
          prototyping: 'Interactive Prototyping'
        }
      },
      seo: {
        title: 'SEO Optimization',
        description: 'We optimize your website to improve search engine rankings and drive organic traffic to your site.',
        fullDescription: 'Our SEO optimization services help you improve your website\'s visibility in search engine results, driving more organic traffic to your site. We use proven strategies to optimize your site for relevant keywords, improve site structure, and build high-quality backlinks.',
        capabilities: {
          audit: 'SEO Audit',
          optimization: 'On-Page Optimization',
          analytics: 'Performance Analytics',
          local: 'Local SEO'
        }
      },
      support: {
        title: 'Technical Support',
        description: 'We provide reliable technical support and maintenance services to keep your systems running smoothly.',
        fullDescription: 'Our technical support services ensure your systems are always running smoothly. We offer 24/7 support, proactive monitoring, and regular maintenance to minimize downtime and maximize performance.',
        capabilities: {
          maintenance: 'System Maintenance',
          hosting: 'Reliable Hosting',
          security: 'Security Updates',
          updates: 'Software Updates'
        }
      },
      api: {
        title: 'API Integration',
        description: 'We integrate APIs to connect your systems and streamline data flow for enhanced functionality.',
        fullDescription: 'Our API integration services help you connect your systems and streamline data flow, enhancing functionality and improving efficiency. We work with a variety of APIs to deliver custom solutions that meet your specific integration needs.',
        capabilities: {
          integration: 'API Integration',
          development: 'Custom API Development',
          testing: 'API Testing',
          documentation: 'API Documentation'
        }
      },
      database: {
        title: 'Database Solutions',
        description: 'We design, optimize, and manage databases to ensure efficient data storage and retrieval.',
        fullDescription: 'Our database solutions ensure efficient data storage and retrieval, helping you manage your data effectively. We offer database design, optimization, and migration services to meet your specific data management needs.',
        capabilities: {
          design: 'Database Design',
          optimization: 'Performance Optimization',
          migration: 'Data Migration',
          security: 'Security Management'
        }
      },
      mobile: {
        title: 'Mobile Development',
        description: 'We develop intuitive mobile applications for iOS and Android platforms that extend your business reach.',
        fullDescription: 'Our mobile development services focus on creating intuitive and engaging mobile applications for iOS and Android platforms. We use the latest technologies to deliver high-quality mobile experiences that meet your business objectives.',
        capabilities: {
          native: 'Native Applications',
          hybrid: 'Hybrid Solutions',
          responsive: 'Responsive Web Apps',
          pwa: 'Progressive Web Apps'
        }
      },
      cloud: {
        title: 'Cloud Solutions',
        description: 'We provide cloud-based solutions to enhance scalability, security, and accessibility of your applications.',
        fullDescription: 'Our cloud solutions enhance the scalability, security, and accessibility of your applications. We offer cloud migration, deployment, and management services to help you leverage the power of the cloud.',
        capabilities: {
          aws: 'Amazon Web Services (AWS)',
          azure: 'Microsoft Azure',
          google: 'Google Cloud Platform (GCP)',
          scaling: 'Scalable Solutions'
        }
      },
      approach: {
        title: 'Our Approach',
        description: 'We follow a structured approach to ensure the success of every project. Our process includes:',
        step1: 'Initial Consultation: We start by understanding your business goals and requirements.',
        step2: 'Planning & Strategy: We develop a detailed plan and strategy to achieve your objectives.',
        step3: 'Design & Development: Our team creates and develops solutions tailored to your needs.',
        step4: 'Testing & Deployment: We thoroughly test and deploy the solutions to ensure optimal performance.'
      },
      benefits: {
        title: 'Key Benefits',
        benefit1: 'Improved Efficiency: Streamline your processes and improve productivity.',
        benefit2: 'Cost Reduction: Reduce operational costs through optimized solutions.',
        benefit3: 'Enhanced Customer Experience: Provide exceptional experiences to your customers.',
        benefit4: 'Increased Revenue: Drive more sales and increase revenue streams.',
        benefit5: 'Competitive Advantage: Stay ahead of the competition with innovative solutions.'
      },
      cta: {
        title: 'Ready to Get Started?',
        description: 'Contact us today to discuss your project and see how we can help you achieve your business goals.',
        button: 'Get a Free Consultation'
      },
      nextPage: 'Contact us'
    },
    brief: {
      title: 'Fill out the brief',
      description: 'Please provide as much detail as possible so we can prepare the best offer for you',
      form: {
        name: 'Your name',
        email: 'Email',
        phone: 'Phone number',
        company: 'Company',
        website: 'Website',
        services: 'Interested in services',
        budget: 'Budget',
        timeline: 'Project timeline',
        description: 'Project description',
        file: 'Attach files',
        submit: 'Send'
      },
      success: 'Thank you! We will contact you soon'
    },
    footer: {
      copyright: 'All rights reserved'
    }
  },
  ru: {
    navbar: {
      home: 'Главная',
      services: 'Услуги',
      brief: 'Бриф',
      cases: 'Кейсы',
      blog: 'Блог',
      contact: 'Контакт',
      chat: 'Чат'
    },
    home: {
      hero: {
        title: 'Мы создаем цифровые решения',
        subtitle: 'Мы разрабатываем инновационные и эффективные решения, чтобы помочь вашему бизнесу расти и преуспевать в цифровую эпоху.',
        button: 'Обсудить проект'
      },
      about: {
        title: 'О нас',
        description: 'Мы - команда опытных профессионалов, специализирующихся на веб-разработке, внедрении CRM, UI/UX дизайне и SEO оптимизации. Наша цель - предоставить комплексные решения, адаптированные к вашим уникальным потребностям.',
        values: {
          innovation: 'Инновации',
          quality: 'Качество',
          customerFocus: 'Ориентация на клиента',
          teamwork: 'Командная работа'
        }
      },
      services: {
        title: 'Наши услуги',
        description: 'Ознакомьтесь с нашим широким спектром услуг, разработанных для удовлетворения потребностей вашего бизнеса. От веб-разработки до CRM решений, мы обеспечим вас всем необходимым.',
        viewAll: {
          title: 'Все услуги',
          description: 'Посмотреть все наши услуги'
        }
      },
      cases: {
        title: 'Наши кейсы',
        description: 'Ознакомьтесь с нашими успешными проектами и узнайте, как мы помогли нашим клиентам достичь своих целей.',
        viewAll: 'Посмотреть все кейсы'
      },
      blog: {
        title: 'Блог',
        description: 'Будьте в курсе последних тенденций отрасли, советов и идей от наших экспертов.',
        viewAll: 'Посмотреть все статьи'
      },
      contact: {
        title: 'Связаться с нами',
        description: 'Готовы вывести свой бизнес на новый уровень? Свяжитесь с нами сегодня, чтобы обсудить ваш проект и начать работу.'
      }
    },
    services: {
      title: 'Наши услуги',
      description: 'Ознакомьтесь с нашим широким спектром услуг, разработанных для удовлетворения потребностей вашего бизнеса. От веб-разработки до CRM решений, мы обеспечим вас всем необходимым.',
      search: {
        placeholder: 'Поиск услуг...',
        noResults: 'Услуги, соответствующие вашим критериям поиска, не найдены.'
      },
      capabilities: 'Ключевые возможности',
      technologies: 'Технологии',
      web: {
        title: 'Веб-разработка',
        description: 'Мы создаем современные, адаптивные и удобные веб-сайты, адаптированные к потребностям вашего бизнеса.',
        fullDescription: 'Наши услуги веб-разработки направлены на создание веб-сайтов, которые не только отлично выглядят, но и обеспечивают исключительный пользовательский опыт. Мы используем новейшие технологии, чтобы ваш сайт был быстрым, безопасным и оптимизированным для поисковых систем.',
        capabilities: {
          responsive: 'Адаптивный дизайн',
          ecommerce: 'Решения для электронной коммерции',
          cms: 'Системы управления контентом',
          spa: 'Одностраничные приложения'
        }
      },
      crm: {
        title: 'CRM решения',
        description: 'Мы внедряем и настраиваем CRM системы для оптимизации процессов продаж, маркетинга и обслуживания клиентов.',
        fullDescription: 'Наши CRM решения помогают эффективно управлять взаимоотношениями с клиентами, улучшать процессы продаж и повышать качество обслуживания клиентов. Мы работаем с ведущими CRM платформами, чтобы предоставлять индивидуальные решения, отвечающие вашим конкретным бизнес-требованиям.',
        capabilities: {
          automation: 'Автоматизация продаж',
          analytics: 'Расширенная аналитика',
          integration: 'Интеграция систем',
          custom: 'Индивидуальные решения'
        }
      },
      design: {
        title: 'UI/UX дизайн',
        description: 'Мы создаем интуитивно понятные и визуально привлекательные пользовательские интерфейсы, которые улучшают пользовательский опыт и повышают вовлеченность.',
        fullDescription: 'Наши услуги UI/UX дизайна направлены на создание ориентированных на пользователя дизайнов, которые являются одновременно визуально привлекательными и простыми в использовании. Мы проводим тщательные исследования пользователей и тестирование, чтобы ваш веб-сайт или приложение обеспечивало оптимальный пользовательский опыт.',
        capabilities: {
          ui: 'Дизайн пользовательского интерфейса',
          ux: 'Дизайн пользовательского опыта',
          branding: 'Брендинг и визуальная идентичность',
          prototyping: 'Интерактивное прототипирование'
        }
      },
      seo: {
        title: 'SEO оптимизация',
        description: 'Мы оптимизируем ваш веб-сайт для улучшения рейтинга в поисковых системах и привлечения органического трафика на ваш сайт.',
        fullDescription: 'Наши услуги SEO оптимизации помогают улучшить видимость вашего веб-сайта в результатах поисковых систем, привлекая больше органического трафика на ваш сайт. Мы используем проверенные стратегии для оптимизации вашего сайта под релевантные ключевые слова, улучшения структуры сайта и создания высококачественных обратных ссылок.',
        capabilities: {
          audit: 'SEO аудит',
          optimization: 'Оптимизация на странице',
          analytics: 'Аналитика производительности',
          local: 'Локальное SEO'
        }
      },
      support: {
        title: 'Техническая поддержка',
        description: 'Мы предоставляем надежную техническую поддержку и услуги по обслуживанию, чтобы ваши системы работали бесперебойно.',
        fullDescription: 'Наши услуги технической поддержки гарантируют, что ваши системы всегда будут работать бесперебойно. Мы предлагаем круглосуточную поддержку, проактивный мониторинг и регулярное обслуживание, чтобы свести к минимуму время простоя и максимизировать производительность.',
        capabilities: {
          maintenance: 'Обслуживание системы',
          hosting: 'Надежный хостинг',
          security: 'Обновления безопасности',
          updates: 'Обновления программного обеспечения'
        }
      },
      api: {
        title: 'Интеграция API',
        description: 'Мы интегрируем API для подключения ваших систем и оптимизации потока данных для расширенной функциональности.',
        fullDescription: 'Наши услуги интеграции API помогают вам подключать ваши системы и оптимизировать поток данных, расширяя функциональность и повышая эффективность. Мы работаем с различными API для предоставления индивидуальных решений, отвечающих вашим конкретным потребностям в интеграции.',
        capabilities: {
          integration: 'Интеграция API',
          development: 'Разработка пользовательского API',
          testing: 'Тестирование API',
          documentation: 'Документация API'
        }
      },
      database: {
        title: 'Решения для баз данных',
        description: 'Мы проектируем, оптимизируем и управляем базами данных для обеспечения эффективного хранения и извлечения данных.',
        fullDescription: 'Наши решения для баз данных обеспечивают эффективное хранение и извлечение данных, помогая вам эффективно управлять своими данными. Мы предлагаем услуги по проектированию, оптимизации и миграции баз данных для удовлетворения ваших конкретных потребностей в управлении данными.',
        capabilities: {
          design: 'Проектирование базы данных',
          optimization: 'Оптимизация производительности',
          migration: 'Миграция данных',
          security: 'Управление безопасностью'
        }
      },
      mobile: {
        title: 'Мобильная разработка',
        description: 'Мы разрабатываем интуитивно понятные мобильные приложения для платформ iOS и Android, которые расширяют охват вашего бизнеса.',
        fullDescription: 'Наши услуги мобильной разработки направлены на создание интуитивно понятных и привлекательных мобильных приложений для платформ iOS и Android. Мы используем новейшие технологии для предоставления высококачественных мобильных решений, отвечающих вашим бизнес-целям.',
        capabilities: {
          native: 'Нативные приложения',
          hybrid: 'Гибридные решения',
          responsive: 'Адаптивные веб-приложения',
          pwa: 'Прогрессивные веб-приложения'
        }
      },
      cloud: {
        title: 'Облачные решения',
        description: 'Мы предоставляем облачные решения для повышения масштабируемости, безопасности и доступности ваших приложений.',
        fullDescription: 'Наши облачные решения повышают масштабируемость, безопасность и доступность ваших приложений. Мы предлагаем услуги миграции, развертывания и управления облаком, чтобы помочь вам использовать возможности облака.',
        capabilities: {
          aws: 'Amazon Web Services (AWS)',
          azure: 'Microsoft Azure',
          google: 'Google Cloud Platform (GCP)',
          scaling: 'Масштабируемые решения'
        }
      },
      approach: {
        title: 'Наш подход',
        description: 'Мы следуем структурированному подходу, чтобы обеспечить успех каждого проекта. Наш процесс включает в себя:',
        step1: 'Первоначальная консультация: Мы начинаем с понимания ваших бизнес-целей и требований.',
        step2: 'Планирование и стратегия: Мы разрабатываем подробный план и стратегию для достижения ваших целей.',
        step3: 'Дизайн и разработка: Наша команда создает и разрабатывает решения, адаптированные к вашим потребностям.',
        step4: 'Тестирование и развертывание: Мы тщательно тестируем и развертываем решения для обеспечения оптимальной производительности.'
      },
      benefits: {
        title: 'Ключевые преимущества',
        benefit1: 'Повышение эффективности: Оптимизируйте свои процессы и повысьте производительность.',
        benefit2: 'Сокращение затрат: Сократите операционные расходы за счет оптимизированных решений.',
        benefit3: 'Улучшение качества обслуживания клиентов: Предоставляйте исключительный опыт своим клиентам.',
        benefit4: 'Увеличение доходов: Увеличьте продажи и увеличьте потоки доходов.',
        benefit5: 'Конкурентное преимущество: Будьте на шаг впереди конкурентов с помощью инновационных решений.'
      },
      cta: {
        title: 'Готовы начать?',
        description: 'Свяжитесь с нами сегодня, чтобы обсудить ваш проект и узнать, как мы можем помочь вам достичь ваших бизнес-целей.',
        button: 'Получить бесплатную консультацию'
      },
      nextPage: 'Связаться с нами'
    },
    brief: {
      title: 'Заполните бриф',
      description: 'Пожалуйста, предоставьте как можно больше деталей, чтобы мы могли подготовить для вас наилучшее предложение',
      form: {
        name: 'Ваше имя',
        email: 'Электронная почта',
        phone: 'Номер телефона',
        company: 'Компания',
        website: 'Веб-сайт',
        services: 'Интересующие услуги',
        budget: 'Бюджет',
        timeline: 'Сроки проекта',
        description: 'Описание проекта',
        file: 'Прикрепить файлы',
        submit: 'Отправить'
      },
      success: 'Спасибо! Мы свяжемся с вами в ближайшее время'
    },
    footer: {
      copyright: 'Все права защищены'
    }
  },
  cs: {
    navbar: {
      home: "Domů",
      services: "Služby",
      brief: "Brief",
      cases: "Případy",
      blog: "Blog",
      contact: "Kontakt",
      chat: "Chat"
    },
    home: {
      hero: {
        title: "Tvoříme digitální řešení",
        subtitle: "Vyvíjíme inovativní a efektivní řešení, která pomáhají vašemu podnikání růst a uspět v digitálním věku.",
        button: "Prodiskutovat projekt"
      },
      about: {
        title: "O nás",
        description: "Jsme tým zkušených profesionálů specializujících se na webový vývoj, implementaci CRM, UI/UX design a SEO optimalizaci. Naším cílem je poskytovat komplexní řešení šitá na míru vašim jedinečným potřebám.",
        values: {
          innovation: "Inovace",
          quality: "Kvalita",
          customerFocus: "Zaměření na zákazníka",
          teamwork: "Týmová práce"
        }
      },
      services: {
        title: "Naše služby",
        description: "Prozkoumejte naši širokou škálu služeb navržených tak, aby vyhovovaly vašim obchodním potřebám. Od webového vývoje po CRM řešení, máme pro vás vše.",
        viewAll: {
          title: "Všechny služby",
          description: "Prozkoumat všechny naše služby"
        }
      },
      cases: {
        title: "Naše případy",
        description: "Podívejte se na naše úspěšné projekty a zjistěte, jak jsme pomohli našim klientům dosáhnout jejich cílů.",
        viewAll: "Zobrazit všechny případy"
      },
      blog: {
        title: "Blog",
        description: "Zůstaňte v obraze s nejnovějšími trendy v oboru, tipy a postřehy od našich odborníků.",
        viewAll: "Zobrazit všechny články"
      },
      contact: {
        title: "Kontaktujte nás",
        description: "Jste připraveni posunout své podnikání na další úroveň? Kontaktujte nás ještě dnes a prodiskutujte svůj projekt a začněte."
      }
    },
    services: {
      title: "Naše služby",
      description: "Prozkoumejte naši širokou škálu služeb navržených tak, aby vyhovovaly vašim obchodním potřebám. Od webového vývoje po CRM řešení, máme pro vás vše.",
      search: {
        placeholder: "Hledat služby...",
        noResults: "Nebyly nalezeny žádné služby odpovídající vašim kritériím vyhledávání."
      },
      capabilities: "Klíčové schopnosti",
      technologies: "Technologie",
      web: {
        title: "Webový vývoj",
        description: "Vytváříme moderní, responzivní a uživatelsky přívětivé webové stránky šité na míru vašim obchodním potřebám.",
        fullDescription: "Naše služby webového vývoje se zaměřují na vytváření webových stránek, které nejen skvěle vypadají, ale také poskytují výjimečný uživatelský zážitek. Používáme nejnovější technologie, abychom zajistili, že vaše stránka bude rychlá, bezpečná a optimalizovaná pro vyhledávače.",
        capabilities: {
          responsive: "Responzivní design",
          ecommerce: "Řešení pro elektronické obchodování",
          cms: "Systémy pro správu obsahu",
          spa: "Jednostránkové aplikace"
        }
      },
      crm: {
        title: "CRM řešení",
        description: "Implementujeme a přizpůsobujeme CRM systémy pro zefektivnění vašich prodejních, marketingových a zákaznických servisních procesů.",
        fullDescription: "Naše CRM řešení vám pomohou efektivně spravovat vztahy se zákazníky, zlepšit prodejní procesy a zlepšit zákaznický servis. Spolupracujeme s předními CRM platformami, abychom poskytovali řešení na míru, která splňují vaše specifické obchodní požadavky.",
        capabilities: {
          automation: "Automatizace prodeje",
          analytics: "Pokročilá analytika",
          integration: "Integrace systému",
          custom: "Řešení na míru"
        }
      },
      design: {
        title: "UI/UX design",
        description: "Vytváříme intuitivní a vizuálně přitažlivá uživatelská rozhraní, která zlepšují uživatelský zážitek a zvyšují zapojení.",
        fullDescription: "Naše služby UI/UX designu se zaměřují na vytváření designů zaměřených na uživatele, které jsou vizuálně přitažlivé a snadno se používají. Provádíme důkladný uživatelský výzkum a testování, abychom zajistili, že vaše webové stránky nebo aplikace poskytují optimální uživatelský zážitek.",
        capabilities: {
          ui: "Design uživatelského rozhraní",
          ux: "Design uživatelské zkušenosti",
          branding: "Branding a vizuální identita",
          prototyping: "Interaktivní prototypování"
        }
      },
      seo: {
        title: "SEO optimalizace",
        description: "Optimalizujeme vaše webové stránky, abychom zlepšili hodnocení ve vyhledávačích a zvýšili organickou návštěvnost vašich stránek.",
        fullDescription: "Naše služby SEO optimalizace vám pomohou zlepšit viditelnost vašich webových stránek ve výsledcích vyhledávačů a zvýšit tak organickou návštěvnost vašich stránek. Používáme osvědčené strategie k optimalizaci vašich stránek pro relevantní klíčová slova, zlepšení struktury stránek a budování vysoce kvalitních zpětných odkazů.",
        capabilities: {
          audit: "SEO audit",
          optimization: "Optimalizace na stránce",
          analytics: "Analýza výkonu",
          local: "Místní SEO"
        }
      },
      support: {
        title: "Technická podpora",
        description: "Poskytujeme spolehlivou technickou podporu a údržbu, aby vaše systémy fungovaly hladce.",
        fullDescription: "Naše služby technické podpory zajišťují, že vaše systémy budou vždy fungovat hladce. Nabízíme nepřetržitou podporu, proaktivní monitorování a pravidelnou údržbu, abychom minimalizovali prostoje a maximalizovali výkon.",
        capabilities: {
          maintenance: "Údržba systému",
          hosting: "Spolehlivý hosting",
          security: "Aktualizace zabezpečení",
          updates: "Aktualizace softwaru"
        }
      },
      api: {
        title: "Integrace API",
        description: "Integrujeme API pro propojení vašich systémů a zefektivnění toku dat pro rozšířenou funkčnost.",
        fullDescription: "Naše služby integrace API vám pomohou propojit vaše systémy a zefektivnit tok dat, zlepšit funkčnost a zvýšit efektivitu. Spolupracujeme s různými API, abychom poskytovali řešení na míru, která splňují vaše specifické integrační potřeby.",
        capabilities: {
          integration: "Integrace API",
          development: "Vývoj vlastního API",
          testing: "Testování API",
          documentation: "Dokumentace API"
        }
      },
      database: {
        title: "Řešení pro databáze",
        description: "Navrhujeme, optimalizujeme a spravujeme databáze, abychom zajistili efektivní ukládání a načítání dat.",
        fullDescription: "Naše řešení pro databáze zajišťují efektivní ukládání a načítání dat a pomáhají vám efektivně spravovat vaše data. Nabízíme návrh databáze, optimalizaci a migrační služby, které splňují vaše specifické potřeby správy dat.",
        capabilities: {
          design: "Návrh databáze",
          optimization: "Optimalizace výkonu",
          migration: "Migrace dat",
          security: "Řízení bezpečnosti"
        }
      },
      mobile: {
        title: "Vývoj mobilních aplikací",
        description: "Vývoj intuitivních mobilních aplikací pro platformy iOS a Android, které rozšiřují dosah vašeho podnikání.",
        fullDescription: "Naše mobilní vývojové služby se zaměřují na vytváření intuitivních a poutavých mobilních aplikací pro platformy iOS a Android. Používáme nejnovější technologie k zajištění vysoce kvalitních mobilních zážitků, které splňují vaše obchodní cíle.",
        capabilities: {
          native: "Nativní aplikace",
          hybrid: "Hybridní řešení",
          responsive: "Responzivní webové aplikace",
          pwa: "Progresivní webové aplikace"
        }
      },
      cloud: {
        title: "Cloudová řešení",
        description: "Poskytujeme cloudová řešení pro zvýšení škálovatelnosti, bezpečnosti a dostupnosti vašich aplikací.",
        fullDescription: "Naše cloudová řešení zvyšují škálovatelnost, bezpečnost a dostupnost vašich aplikací. Nabízíme cloudovou migraci, nasazení a správu, abychom vám pomohli využít sílu cloudu.",
        capabilities: {
          aws: "Amazon Web Services (AWS)",
          azure: "Microsoft Azure",
          google: "Google Cloud Platform (GCP)",
          scaling: "Škálovatelná řešení"
        }
      },
      approach: {
        title: "Náš přístup",
        description: "Dodržujeme strukturovaný přístup, abychom zajistili úspěch každého projektu. Náš proces zahrnuje:",
        step1: "Počáteční konzultace: Začínáme pochopením vašich obchodních cílů a požadavků.",
        step2: "Plánování a strategie: Vyvíjíme podrobný plán a strategii k dosažení vašich cílů.",
        step3: "Návrh a vývoj: Náš tým vytváří a vyvíjí řešení šitá na míru vašim potřebám.",
        step4: "Testování a nasazení: Důkladně testujeme a nasazujeme řešení, abychom zajistili optimální výkon."
      },
      benefits: {
        title: "Klíčové výhody",
        benefit1: "Zlepšená efektivita: Zefektivněte své procesy a zvyšte produktivitu.",
        benefit2: "Snížení nákladů: Snižte provozní náklady pomocí optimalizovaných řešení.",
        benefit3: "Vylepšená zákaznická zkušenost: Poskytněte svým zákazníkům výjimečné zážitky.",
        benefit4: "Zvýšení příjmů: Zvyšte prodej a zvyšte toky příjmů.",
        benefit5: "Konkurenční výhoda: Buďte o krok napřed před konkurencí díky inovativním řešením."
      },
      cta: {
        title: "Jste připraveni začít?",
        description: "Kontaktujte nás ještě dnes a prodiskutujte svůj projekt a zjistěte, jak vám můžeme pomoci dosáhnout vašich obchodních cílů.",
        button: "Získejte bezplatnou konzultaci"
      },
      nextPage: "Kontaktujte nás"
    },
    brief: {
      title: "Vyplňte brief",
      description: "Poskytněte prosím co nejvíce podrobností, abychom pro vás mohli připravit nejlepší nabídku",
      form: {
        name: "Vaše jméno",
        email: "E-mail",
        phone: "Telefonní číslo",
        company: "Společnost",
        website: "Webové stránky",
        services: "Zájem o služby",
        budget: "Rozpočet",
        timeline: "Časová osa projektu",
        description: "Popis projektu",
        file: "Přiložit soubory",
        submit: "Odeslat"
      },
      success: "Děkujeme! Budeme vás brzy kontaktovat"
    },
    footer: {
      copyright: "Všechna práva vyhrazena"
    }
  }
};
