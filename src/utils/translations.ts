
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
  };
  journey: {
    title: string;
    subtitle: string;
    steps: {
      research: string;
      design: string;
      development: string;
      launch: string;
    }
  };
  footer: {
    about: {
      title: string;
      description: string;
    };
    links: {
      title: string;
      privacy: string;
      terms: string;
    };
    contact: {
      title: string;
      address: string;
      phone: string;
      email: string;
    };
    copyright: string;
  };
  // Add other sections as needed
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
    },
    journey: {
      title: "Your Journey With Us",
      subtitle: "A streamlined process to bring your digital vision to life",
      steps: {
        research: "Research & Strategy",
        design: "Design & Prototyping",
        development: "Development & Testing",
        launch: "Launch & Support"
      }
    },
    footer: {
      about: {
        title: "About Teko",
        description: "We are a digital agency focused on creating innovative solutions for businesses looking to thrive in the digital era."
      },
      links: {
        title: "Quick Links",
        privacy: "Privacy Policy",
        terms: "Terms of Service"
      },
      contact: {
        title: "Contact Us",
        address: "Prague, Czech Republic",
        phone: "Telegram bot: @teko.sup_bot",
        email: "info@teko.agency"
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
    },
    journey: {
      title: "Ваш путь с нами",
      subtitle: "Оптимизированный процесс для воплощения вашего цифрового видения",
      steps: {
        research: "Исследование и стратегия",
        design: "Дизайн и прототипирование",
        development: "Разработка и тестирование",
        launch: "Запуск и поддержка"
      }
    },
    footer: {
      about: {
        title: "О Теко",
        description: "Мы - цифровое агентство, ориентированное на создание инновационных решений для бизнеса, стремящегося к процветанию в цифровую эпоху."
      },
      links: {
        title: "Быстрые ссылки",
        privacy: "Политика конфиденциальности",
        terms: "Условия использования"
      },
      contact: {
        title: "Свяжитесь с нами",
        address: "Прага, Чешская Республика",
        phone: "Телеграм бот: @teko.sup_bot",
        email: "info@teko.agency"
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
    },
    journey: {
      title: "Vaše cesta s námi",
      subtitle: "Zjednodušený proces pro realizaci vaší digitální vize",
      steps: {
        research: "Výzkum a strategie",
        design: "Design a prototypování",
        development: "Vývoj a testování",
        launch: "Spuštění a podpora"
      }
    },
    footer: {
      about: {
        title: "O Teko",
        description: "Jsme digitální agentura zaměřená na vytváření inovativních řešení pro podniky, které chtějí prosperovat v digitální éře."
      },
      links: {
        title: "Rychlé odkazy",
        privacy: "Zásady ochrany osobních údajů",
        terms: "Podmínky služby"
      },
      contact: {
        title: "Kontaktujte nás",
        address: "Praha, Česká republika",
        phone: "Telegram bot: @teko.sup_bot",
        email: "info@teko.agency"
      },
      copyright: "© 2023 Teko. Všechna práva vyhrazena."
    }
  }
};
