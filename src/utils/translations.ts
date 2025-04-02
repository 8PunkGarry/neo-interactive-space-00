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
    description: string;
    show_all: string;
    search_placeholder: string;
    no_results: string;
    items: ServiceItem[];
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
    search: {
      noResults: string;
    };
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
      description: "We offer a wide range of digital services to help your business grow and succeed in the digital age",
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
        title: "Web Development",
        description: "Creating modern, responsive websites and web applications tailored to your business needs.",
        fullDescription: "Our web development team crafts high-performance, responsive websites and web applications tailored to your specific business needs and objectives. We use cutting-edge technologies and follow best development practices to ensure your web presence not only looks great but also delivers exceptional functionality and user experience. From simple corporate websites to complex web platforms, we provide end-to-end development services that help your business establish a strong online presence.",
        capabilities: {
          responsive: "Responsive Design",
          ecommerce: "E-commerce Integration",
          cms: "Content Management",
          spa: "Single Page Applications"
        }
      },
      crm: {
        title: "CRM Integration",
        description: "Streamlining your business processes with custom CRM solutions for effective management.",
        fullDescription: "Our CRM integration services help streamline your business processes with tailored Customer Relationship Management solutions. We can implement custom CRM systems or integrate existing platforms into your workflow to enhance customer engagement, automate repetitive tasks, and provide valuable insights into your business operations. Our experts analyze your unique requirements and develop CRM strategies that improve efficiency, increase sales, and strengthen customer relationships throughout the entire customer lifecycle.",
        capabilities: {
          automation: "Workflow Automation",
          analytics: "Customer Analytics",
          integration: "Third-party Integration",
          custom: "Custom Solutions"
        }
      },
      design: {
        title: "UI/UX Design",
        description: "Crafting intuitive and engaging user experiences with beautiful interfaces.",
        fullDescription: "Our UI/UX design services focus on creating intuitive, engaging, and visually appealing digital experiences. We combine aesthetic appeal with functional design to create interfaces that are not only beautiful but also easy to navigate and use. Our design process involves extensive research, wireframing, prototyping, and user testing to ensure the final product meets both your business objectives and user expectations. We create designs that enhance user satisfaction and drive conversion rates, ultimately helping your business achieve its goals.",
        capabilities: {
          ui: "Interface Design",
          ux: "User Experience",
          branding: "Visual Identity",
          prototyping: "Interactive Prototypes"
        }
      },
      seo: {
        title: "SEO Optimization",
        description: "Improving your online visibility and organic search rankings for more qualified traffic.",
        fullDescription: "Our comprehensive SEO optimization services are designed to increase your website's visibility in search engine results, drive more qualified traffic, and improve conversion rates. We conduct thorough technical audits, keyword research, content analysis, and competitive assessments to develop tailored SEO strategies. Our approach includes on-page optimization, technical SEO improvements, content creation, and off-site link building tactics. We provide regular performance reports and continually refine our strategies to keep your website ahead of algorithm changes and industry trends.",
        capabilities: {
          audit: "Technical SEO Audit",
          optimization: "Content Optimization",
          analytics: "Performance Tracking",
          local: "Local SEO"
        }
      },
      support: {
        title: "Technical Support",
        description: "Providing ongoing maintenance and support to ensure optimal performance.",
        fullDescription: "Our technical support services provide the ongoing maintenance and assistance needed to keep your digital assets performing optimally. We offer different support packages to match your specific needs, with options ranging from basic maintenance to comprehensive 24/7 support. Our team monitors your systems, performs regular updates, implements security patches, and quickly resolves any issues that arise. With our technical support, you can focus on running your business while we ensure your digital infrastructure remains secure, up-to-date, and functioning smoothly.",
        capabilities: {
          maintenance: "Regular Maintenance",
          hosting: "Hosting Solutions",
          security: "Security Updates",
          updates: "Content Updates"
        }
      },
      api: {
        title: "API Development",
        description: "Building robust APIs that enable seamless communication between different systems.",
        fullDescription: "Our API development services focus on creating robust, secure, and scalable Application Programming Interfaces that enable seamless communication between different software systems. Whether you need to integrate third-party services, connect internal systems, or create APIs for external partners, our team has the expertise to deliver solutions that meet your specific requirements. We handle the entire development lifecycle, from design and documentation to implementation, testing, and maintenance. Our APIs are built with performance, security, and ease of use in mind, ensuring reliable data exchange and system interoperability.",
        capabilities: {
          integration: "System Integration",
          development: "Custom API Development",
          testing: "Performance Testing",
          documentation: "Comprehensive Documentation"
        }
      },
      database: {
        title: "Database Solutions",
        description: "Designing and implementing efficient database structures for secure data management.",
        fullDescription: "Our database solutions expertise covers the design, implementation, and optimization of database systems that securely store and efficiently manage your business data. We work with various database technologies, including relational, NoSQL, and graph databases, to create structures that best match your specific requirements. Our services include database architecture design, performance optimization, data migration, security implementation, and ongoing maintenance. We ensure your data is properly organized, easily accessible, protected from unauthorized access, and can scale as your business grows.",
        capabilities: {
          design: "Database Architecture",
          optimization: "Performance Optimization",
          migration: "Data Migration",
          security: "Data Security"
        }
      },
      mobile: {
        title: "Mobile Development",
        description: "Developing intuitive mobile applications for iOS and Android platforms.",
        fullDescription: "Our mobile development team creates intuitive, high-performance applications for iOS and Android platforms that extend your business reach to mobile users. We develop native, hybrid, or cross-platform solutions depending on your specific requirements, budget, and timeline. Our comprehensive mobile development process covers everything from initial concept and design to development, testing, and app store submission. We focus on creating user-friendly interfaces, optimizing performance, ensuring security, and implementing analytics to help you continually improve your mobile application based on user feedback and behavior.",
        capabilities: {
          native: "Native Applications",
          hybrid: "Hybrid Solutions",
          responsive: "Responsive Web Apps",
          pwa: "Progressive Web Apps"
        }
      },
      cloud: {
        title: "Cloud Solutions",
        description: "Leveraging cloud technologies for increased scalability, reliability, and security.",
        fullDescription: "Our cloud solutions help businesses leverage the power of cloud computing to increase scalability, reliability, and security while reducing infrastructure costs. We provide comprehensive cloud services, including migration planning, implementation, optimization, and ongoing management across major platforms like AWS, Microsoft Azure, and Google Cloud. Our experts assess your current infrastructure, design a tailored cloud strategy, and implement solutions that align with your business objectives. We also provide training and support to ensure your team can effectively utilize and manage the new cloud environment.",
        capabilities: {
          aws: "AWS Integration",
          azure: "Microsoft Azure",
          google: "Google Cloud",
          scaling: "Auto-scaling"
        }
      },
      viewAll: {
        title: "View All Services",
        description: "Explore our complete range of digital services designed to help your business thrive in the digital landscape."
      },
      singleResult: "service found",
      multipleResults: "services found",
      viewAs: "View as",
      gridView: "Grid",
      listView: "List",
      capabilities: "Capabilities",
      technologies: "Technologies",
      search: {
        noResults: "No services found. Try a different search term."
      },
      approach: {
        title: "Our Approach",
        description: "We follow a systematic approach to deliver high-quality digital solutions",
        step1: "We start with a thorough analysis of your business needs and objectives to understand what you want to achieve.",
        step2: "Our team creates a detailed project plan with timelines, milestones, and deliverables to ensure smooth execution.",
        step3: "We use an iterative development process, regularly sharing progress and incorporating your feedback.",
        step4: "After thorough testing and quality assurance, we deploy your solution and provide ongoing support."
      },
      benefits: {
        title: "Why Choose Us",
        benefit1: "Experienced team of professionals with expertise across various digital domains",
        benefit2: "Custom solutions tailored to your specific business needs and objectives",
        benefit3: "Transparent communication and regular updates throughout the project",
        benefit4: "Competitive pricing with flexible engagement models",
        benefit5: "Ongoing support and maintenance to ensure your solution evolves with your business"
      },
      cta: {
        title: "Ready to Transform Your Business?",
        description: "Let us help you navigate the digital landscape and achieve your business goals with our comprehensive digital solutions.",
        button: "Get Started"
      },
      nextPage: "Discuss Your Project",
      ai: {
        title: "AI Solutions",
        description: "Advanced artificial intelligence solutions for business automation and insights.",
        fullDescription: "Our AI Solutions service leverages cutting-edge artificial intelligence technologies to help businesses automate processes, gain deeper insights, and create innovative products and services. Our team of AI specialists can implement machine learning algorithms, natural language processing systems, computer vision applications, and predictive analytics tools tailored to your specific business needs. We focus on practical AI applications that deliver measurable results, whether you're looking to enhance customer experiences, optimize operations, or develop entirely new AI-powered products."
      },
      cybersecurity: {
        title: "Cybersecurity",
        description: "Protecting your digital assets against cyber threats with comprehensive security measures.",
        fullDescription: "Our Cybersecurity services provide comprehensive protection for your digital assets against the increasingly sophisticated landscape of cyber threats. We offer vulnerability assessments, penetration testing, security audits, and implementation of robust security measures tailored to your specific business needs. Our security experts stay updated on the latest threats and compliance requirements to develop and maintain security strategies that safeguard your sensitive data, protect customer information, maintain business continuity, and preserve your reputation in the event of security incidents."
      },
      blockchain: {
        title: "Blockchain Development",
        description: "Building secure, transparent blockchain solutions for various industries.",
        fullDescription: "Our Blockchain Development services help businesses leverage this revolutionary technology to create secure, transparent, and efficient solutions. Our blockchain experts design and implement custom applications across various industries, including finance, supply chain, healthcare, and digital identity. We develop smart contracts, decentralized applications (dApps), tokenization solutions, and blockchain integrations that address specific business challenges. Whether you're looking to improve transaction security, enhance transparency, or create new business models, our blockchain solutions provide the technical foundation for innovation."
      },
      iot: {
        title: "IoT Solutions",
        description: "Connecting physical and digital worlds with custom IoT systems for smart operations.",
        fullDescription: "Our IoT Solutions service helps businesses connect their physical and digital worlds through custom Internet of Things (IoT) systems. We design and implement comprehensive IoT ecosystems that enable remote monitoring, automation, and data collection for smarter decision-making. Our IoT specialists work with various hardware platforms, sensors, connectivity protocols, and cloud services to create tailored solutions for industries ranging from manufacturing and logistics to healthcare and smart buildings. We focus on building secure, scalable, and reliable IoT systems that provide tangible business benefits through improved efficiency, enhanced safety, and new data-driven insights."
      },
      arvr: {
        title: "AR/VR Development",
        description: "Creating immersive experiences with augmented and virtual reality technologies.",
        fullDescription: "Our AR/VR Development services focus on creating immersive and interactive experiences using Augmented Reality (AR) and Virtual Reality (VR) technologies. We develop custom AR/VR applications for various purposes, including training simulations, marketing campaigns, product visualizations, and entertainment experiences. Our team works with leading platforms and technologies to build engaging applications that run smoothly across various devices. Whether you want to showcase products in 3D, create virtual training environments, or develop interactive brand experiences, our AR/VR solutions help you engage users in entirely new ways."
      },
      datascience: {
        title: "Data Science",
        description: "Transforming raw data into valuable business insights with advanced analytics.",
        fullDescription: "Our Data Science services help businesses transform their raw data into valuable insights and actionable intelligence. Our team of data scientists and analysts employs advanced statistical methods, machine learning algorithms, and visualization techniques to uncover patterns, predict trends, and optimize business processes. We offer end-to-end data science solutions, from data collection and cleaning to analysis, modeling, and implementation. Whether you need customer segmentation, demand forecasting, recommendation systems, or custom analytics dashboards, our data science expertise helps you make more informed business decisions based on solid data evidence."
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
      address: "Prague, Czech Republic",
      about: {
        title: "About Teko",
        description: "We are a digital agency focused on creating innovative solutions for businesses looking to thrive in the digital era.",
        short_description: "Modern websites and integrations for your business. We create digital solutions that help your business grow."
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
      description: "Мы предлагаем широкий спектр цифровых услуг, чтобы помочь вашему бизнесу расти и преуспевать в цифровую эпоху",
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
          description: "Разработка нативных и кроссплатформменных мобильных приложений для iOS и Android.",
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
        title: "Веб-разработка",
        description: "Создание современных, адаптивных веб-сайтов и веб-приложений для вашего бизнеса.",
        fullDescription: "Наша команда веб-разработчиков создает высокопроизводительные, адаптивные веб-сайты и веб-приложения, учитывающие конкретные потребности и цели вашего бизнеса. Мы используем передовые технологии и следуем лучшим практикам разработки, чтобы ваше присутствие в интернете не только выглядело великолепно, но и обеспечивало исключительную функциональность и пользовательский опыт. От простых корпоративных сайтов до сложных веб-платформ, мы предоставляем полный цикл услуг разработки, которые помогают вашему бизнесу установить сильное онлайн-присутствие.",
        capabilities: {
          responsive: "Адаптивный дизайн",
          ecommerce: "Интеграция E-commerce",
          cms: "Управление контентом",
          spa: "Одностраничные приложения"
        }
      },
      crm: {
        title: "Интеграция CRM",
        description: "Оптимизация бизнес-процессов с помощью индивидуальных CRM-решений.",
        fullDescription: "Наши услуги по интеграции CRM помогают оптимизировать бизнес-процессы с помощью индивидуальных решений для управления взаимоотношениями с клиентами. Мы можем внедрить пользовательские CRM-системы или интегрировать существующие платформы в ваш рабочий процесс для улучшения взаимодействия с клиентами, автоматизации повторяющихся задач и получения ценной информации о работе вашего бизнеса. Наши эксперты анализируют ваши уникальные требования и разрабатывают CRM-стратегии, которые повышают эффективность, увеличивают продажи и укрепляют отношения с клиентами на протяжении всего жизненного цикла клиента.",
        capabilities: {
          automation: "Автоматизация рабочих процессов",
          analytics: "Аналитика клиентов",
          integration: "Интеграция с третьими сервисами",
          custom: "Индивидуальные решения"
        }
      },
      design: {
        title: "UI/UX Дизайн",
        description: "Создание интуитивно понятных и привлекательных пользовательских интерфейсов.",
        fullDescription: "Наши услуги по UI/UX дизайну направлены на создание интуитивно понятных, привлекательных и визуально приятных цифровых интерфейсов. Мы сочетаем эстетическую привлекательность с функциональным дизайном, чтобы создавать интерфейсы, которые не только красивы, но и просты в навигации и использовании. Наш процесс дизайна включает обширные исследования, создание каркасов, прототипирование и пользовательское тестирование, чтобы гарантировать, что конечный продукт соответствует как вашим бизнес-целям, так и ожиданиям пользователей. Мы создаем дизайны, которые повышают удовлетворенность пользователей и способствуют увеличению конверсии, в конечном итоге помогая вашему бизнесу достичь поставленных целей.",
        capabilities: {
          ui: "Дизайн интерфейса",
          ux: "Пользовательский опыт",
          branding: "Визуальная идентичность",
          prototyping: "Интерактивные прототипы"
        }
      },
      seo: {
        title: "SEO Оптимизация",
        description: "Повышение вашей онлайн-видимости и органических позиций в поисковой выдаче.",
        fullDescription: "Наши комплексные услуги по SEO-оптимизации направлены на повышение видимости вашего сайта в результатах поисковых систем, привлечение более качественного трафика и улучшение конверсии. Мы проводим тщательные технические аудиты, исследования ключевых слов, анализ контента и оценку конкурентов для разработки индивидуальных SEO-стратегий. Наш подход включает оптимизацию на странице, технические улучшения SEO, создание контента и тактики построения внешних ссылок. Мы предоставляем регулярные отчеты о эффективности и постоянно совершенствуем наши стратегии, чтобы ваш сайт оставался впереди изменений алгоритмов и отраслевых тенденций.",
        capabilities: {
          audit: "Технический SEO аудит",
          optimization: "Оптимизация контента",
          analytics: "Отслеживание производительности",
          local: "Локальное SEO"
        }
      },
      support: {
        title: "Техническая поддержка",
        description: "Предоставление постоянного обслуживания и поддержки для оптимальной работы.",
        fullDescription: "Наши услуги технической поддержки обеспечивают постоянное обслуживание и помощь, необходимые для оптимальной работы ваших цифровых активов. Мы предлагаем различные пакеты поддержки, соответствующие вашим конкретным потребностям, с вариантами от базового обслуживания до комплексной круглосуточной поддержки. Наша команда следит за вашими системами, выполняет регулярные обновления, внедряет патчи безопасности и быстро решает возникающие проблемы. С нашей технической поддержкой вы можете сосредоточиться на управлении своим бизнесом, в то время как мы обеспечиваем безопасность, актуальность и бесперебойную работу вашей цифровой инфраструктуры.",
        capabilities: {
          maintenance: "Регулярное обслуживание",
          hosting: "Хостинг решения",
          security: "Обновления безопасности",
          updates: "Обновления контента"
        }
      },
      api: {
        title: "Разработка API",
        description: "Создание надежных API для беспрепятственной коммуникации между системами.",
        fullDescription: "Наши услуги по разработке API сосредоточены на создании надежных, безопасных и масштабируемых интерфейсов программирования приложений, которые обеспечивают беспрепятственную коммуникацию между различными программными системами. Независимо от того, нужно ли вам интегрировать сторонние сервисы, соединить внутренние системы или создать API для внешних партнеров, наша команда обладает опытом для разработки решений, соответствующих вашим конкретным требованиям. Мы управляем всем жизненным циклом разработки, от проектирования и документации до реализации, тестирования и поддержки. Наши API создаются с учетом производительности, безопасности и простоты использования, обеспечивая надежный обмен данными и совместимость систем.",
        capabilities: {
          integration: "Системная интеграция",
          development: "Разработка индивидуальных API",
          testing: "Тестирование производительности",
          documentation: "Подробная документация"
        }
      },
      database: {
        title: "Решения для баз данных",
        description: "Проектирование и внедрение эффективных структур баз данных для управления данными.",
        fullDescription: "Наш опыт в области решений для баз данных охватывает проектирование, внедрение и оптимизацию систем баз данных, которые надежно хранят и эффективно управляют данными вашего бизнеса. Мы работаем с различными технологиями баз данных, включая реляционные, NoSQL и графовые базы данных, чтобы создавать структуры, которые наилучшим образом соответствуют вашим конкретным требованиям. Наши услуги включают проектирование архитектуры базы данных, оптимизацию производительности, миграцию данных, внедрение безопасности и постоянное обслуживание. Мы гарантируем, что ваши данные правильно организованы, легко доступны, защищены от несанкционированного доступа и могут масштабироваться по мере роста вашего бизнеса.",
        capabilities: {
          design: "Архитектура базы данных",
          optimization: "Оптимизация производительности",
          migration: "Миграция данных",
          security: "Безопасность данных"
        }
      },
      mobile: {
        title: "Мобильная разработка",
        description: "Разработка интуитивных мобильных приложений для платформ iOS и Android.",
        fullDescription: "Наша команда мобильной разработки создает интуитивно понятные, высокопроизводительные приложения для платформ iOS и Android, которые расширяют охват вашего бизнеса на мобильных пользователей. Мы разрабатываем нативные, гибридные или кроссплатформенные решения в зависимости от ваших конкретных требований, бюджета и сроков. Наш комплексный процесс разработки мобильных приложений охватывает все от первоначальной концепции и дизайна до разработки, тестирования и публикации в магазинах приложений. Мы сосредотачиваемся на создании удобных пользовательских интерфейсов, оптимизации производительности, обеспечении безопасности и внедрении аналитики, чтобы помочь вам постоянно улучшать ваше мобильное приложение на основе отзывов пользователей и их поведения.",
        capabilities: {
          native: "Нативные приложения",
          hybrid: "Гибридные решения",
          responsive: "Адаптивные веб-приложения",
          pwa: "Про
