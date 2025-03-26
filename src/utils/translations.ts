import { z } from 'zod';

export const translations = {
  en: {
    navbar: {
      home: 'Home',
      services: 'Services',
      about: 'About Us',
      brief: 'Brief',
      login: 'Log In',
      signup: 'Sign Up',
      register: 'Register',
      client: 'Client Area',
      account: 'My Account',
      admin: 'Admin',
      company: 'Company Area',
      settings: 'Settings',
      logout: 'Log Out',
    },
    hero: {
      title: 'Digital Solutions for Modern Business',
      subtitle: 'We create high-performance websites, mobile apps, and enterprise solutions that help your business grow',
      cta: 'Get Started',
      learnMore: 'Learn More',
    },
    about: {
      title: 'About Us',
      description: 'Teko.sup is a team of professionals specializing in web development, integrations, and digital solutions. We combine cutting-edge technology, creativity, and experience to build powerful IT solutions for businesses.',
      whoWeAre: {
        title: 'Who We Are',
        description1: 'Teko.sup is a team of professionals specializing in web development, integrations, and digital solutions. We combine cutting-edge technology, creativity, and experience to build powerful IT solutions for businesses.',
        description2: 'Our mission is to help companies succeed in the digital world by developing modern websites, CRM systems, and automation tools that make businesses more efficient, faster, and more profitable.',
        description3: 'We believe that design, code, and technology are not just tools but the key to innovation.'
      },
      mission: {
        title: 'Our Mission',
        quote: 'We create technology that simplifies complexity, automates processes, and helps businesses operate more efficiently.',
        description: 'We work at the intersection of development, UI/UX design, and marketing, ensuring that every project delivers real value to our clients.',
        point1: 'We leverage technology to solve real business problems',
        point2: 'We develop solutions that reduce manual work and errors',
        point3: 'We focus on creating digital assets that generate results'
      },
      vision: {
        title: 'Our Vision',
        description: 'We envision a future where digital technology makes business operations seamless, allowing companies to focus on growth rather than routine tasks.',
        point1: 'Become the leading digital solution provider in Central Europe',
        point2: 'Help 500+ businesses transform their digital presence by 2025',
        point3: 'Push the boundaries of what\'s possible with web technology'
      },
      values: {
        title: 'Our Values',
        description: 'These core principles guide our work and relationships with clients and partners.',
        value1: {
          title: 'Technology-Driven',
          description: 'We use cutting-edge tools and stay ahead of trends.'
        },
        value2: {
          title: 'Transparency',
          description: 'Clear processes, realistic deadlines, and straightforward communication.'
        },
        value3: {
          title: 'Creativity',
          description: 'We find innovative solutions for complex challenges.'
        },
        value4: {
          title: 'Results-Oriented',
          description: 'We don\'t just build websites; we create digital ecosystems for business success.'
        }
      },
      team: {
        title: 'Our Team',
        description: 'Meet the experts who make the magic happen.',
        experience: 'Experience',
        years: 'years',
        skills: 'Skills',
        member1: {
          name: 'Arkadiy Tkachenko',
          role: 'CEO & Founder',
          bio: 'We build ecosystems, not just websites.'
        },
        member2: {
          name: 'Kai Kane',
          role: 'Lead Designer',
          bio: 'A great interface is where beauty meets functionality.'
        },
        member3: {
          name: 'Adam Hrstka',
          role: 'Developer',
          bio: 'The best code is the one that makes life easier.'
        },
        member4: {
          name: 'Petr Lichý',
          role: 'Marketing Lead',
          bio: 'Effective marketing isn\'t just ads; it\'s a strategy for success.'
        }
      },
      contact: {
        title: 'Contact Us',
        description: 'Want to discuss a project or have a question? Reach out to us!',
        office: 'Office',
        email: 'Email',
        phone: 'Phone',
        form: {
          title: 'Send us a message',
          name: 'Your Name',
          namePlaceholder: 'Enter your name',
          email: 'Your Email',
          emailPlaceholder: 'Enter your email',
          message: 'Your Message',
          messagePlaceholder: 'How can we help you?',
          send: 'Send Message',
          sending: 'Sending...',
          success: {
            title: 'Message Sent!',
            message: 'Thanks for reaching out. We\'ll get back to you as soon as possible.',
            newMessage: 'Send Another Message'
          }
        }
      },
      ready: 'Ready to get started?',
      fillBrief: 'Fill out the brief'
    },
    brief: {
      title: 'Send us your brief',
      subtitle: 'Tell us about your project, and we\'ll get back to you to discuss the details',
      name: 'Your name *',
      email: 'Your email *',
      phone: 'Your phone',
      company: 'Company name',
      website: 'Current website (if any)',
      projectType: {
        label: 'What type of project do you need? *',
        website: 'Website',
        mobileApp: 'Mobile App',
        webApp: 'Web Application',
        ecommerce: 'E-commerce',
        brandIdentity: 'Brand Identity',
        other: 'Other'
      },
      budget: {
        label: 'What is your budget range?',
        small: 'Below $5,000',
        medium: '$5,000 - $10,000',
        large: '$10,000 - $25,000',
        enterprise: 'Above $25,000',
        notSure: 'Not sure yet'
      },
      timeline: {
        label: 'When do you need the project completed?',
        asap: 'As soon as possible',
        oneMonth: 'Within 1 month',
        threeMonths: 'Within 3 months',
        sixMonths: 'Within 6 months',
        flexible: 'Flexible / Not sure'
      },
      description: 'Project description and goals *',
      descriptionPlaceholder: 'Please describe your project, including your goals, target audience, and any specific features you need...',
      features: 'Specific features or requirements',
      featuresPlaceholder: 'List any specific features, integrations, or technical requirements...',
      references: 'References / Examples you like',
      referencesPlaceholder: 'Share websites or apps that you like or that are similar to what you want...',
      submit: 'Submit Brief',
      sending: 'Sending...',
      required: 'Required field',
      errorMessage: 'Please fix the errors before submitting',
      successTitle: 'Brief Submitted Successfully!',
      successMessage: 'Thank you for submitting your brief! We\'ll review it and get back to you within 1-2 business days.',
      successCta: 'Back to Home'
    },
  },
  ru: {
    navbar: {
      home: 'Главная',
      services: 'Услуги',
      about: 'О нас',
      brief: 'Бриф',
      login: 'Войти',
      signup: 'Регистрация',
      register: 'Регистрация',
      client: 'Клиентам',
      account: 'Мой аккаунт',
      admin: 'Админ',
      company: 'Компаниям',
      settings: 'Настройки',
      logout: 'Выход',
    },
    hero: {
      title: 'Цифровые решения для современного бизнеса',
      subtitle: 'Мы создаем высокопроизводительные веб-сайты, мобильные приложения и корпоративные решения, которые помогают вашему бизнесу расти',
      cta: 'Связаться с нами',
      learnMore: 'Узнать больше',
    },
    about: {
      title: 'О нас',
      description: 'Teko.sup - это команда профессионалов, специализирующихся на веб-разработке, интеграциях и цифровых решениях. Мы объединяем передовые технологии, креативность и опыт для создания эффективных ИТ-решений для бизнеса.',
      whoWeAre: {
        title: 'Кто мы',
        description1: 'Teko.sup - это команда профессионалов, специализирующихся на веб-разработке, интеграциях и цифровых решениях. Мы объединяем передовые технологии, креативность и опыт для создания эффективных ИТ-решений для бизнеса.',
        description2: 'Наша миссия - помогать компаниям преуспевать в цифровом мире, разрабатывая современные веб-сайты, CRM-системы и инструменты автоматизации, которые делают бизнес более эффективным, быстрым и прибыльным.',
        description3: 'Мы верим, что дизайн, код и технологии - это не просто инструменты, а ключ к инновациям.'
      },
      mission: {
        title: 'Наша миссия',
        quote: 'Мы создаем технологии, которые упрощают сложные процессы, автоматизируют рабочие операции и помогают бизнесу работать эффективнее.',
        description: 'Мы работаем на стыке разработки, UI/UX дизайна и маркетинга, гарантируя, что каждый проект приносит реальную ценность нашим клиентам.',
        point1: 'Мы используем технологии для решения реальных бизнес-задач',
        point2: 'Мы разрабатываем решения, которые сокращают ручную работу и ошибки',
        point3: 'Мы фокусируемся на создании цифровых активов, которые приносят результаты'
      },
      vision: {
        title: 'Наше видение',
        description: 'Мы представляем будущее, где цифровые технологии делают бизнес-операции более гладкими, позволяя компаниям сосредоточиться на росте, а не на рутинных задачах.',
        point1: 'Стать ведущим поставщиком цифровых решений в Центральной Европе',
        point2: 'Помочь более 500 предприятиям преобразовать их цифровое присутствие к 2025 году',
        point3: 'Расширять границы возможного с помощью веб-технологий'
      },
      values: {
        title: 'Наши ценности',
        description: 'Эти основные принципы определяют нашу работу и отношения с клиентами и партнерами.',
        value1: {
          title: 'Технологичность',
          description: 'Мы используем передовые инструменты и следим за тенденциями.'
        },
        value2: {
          title: 'Прозрачность',
          description: 'Четкие процессы, реалистичные сроки и прямая коммуникация.'
        },
        value3: {
          title: 'Креативность',
          description: 'Мы находим инновационные решения для сложных задач.'
        },
        value4: {
          title: 'Ориентация на результат',
          description: 'Мы создаем не просто веб-сайты, а цифровые экосистемы для успешного бизнеса.'
        }
      },
      team: {
        title: 'Наша команда',
        description: 'Познакомьтесь с экспертами, которые создают магию.',
        experience: 'Опыт',
        years: 'лет',
        skills: 'Навыки',
        member1: {
          name: 'Аркадий Ткаченко',
          role: 'CEO и основатель',
          bio: 'Мы строим экосистемы, а не просто веб-сайты.'
        },
        member2: {
          name: 'Кай Кейн',
          role: 'Ведущий дизайнер',
          bio: 'Отличный интерфейс - это место, где красота встречается с функциональностью.'
        },
        member3: {
          name: 'Адам Грстка',
          role: 'Разработчик',
          bio: 'Лучший код - тот, который делает жизнь проще.'
        },
        member4: {
          name: 'Петр Лихий',
          role: 'Маркетолог',
          bio: 'Эффективный маркетинг - это не просто реклама, это стратегия успеха.'
        }
      },
      contact: {
        title: 'Свяжитесь с нами',
        description: 'Хотите обсудить проект или у вас есть вопрос? Напишите нам!',
        office: 'Офис',
        email: 'Email',
        phone: 'Телефон',
        form: {
          title: 'Отправьте нам сообщение',
          name: 'Ваше имя',
          namePlaceholder: 'Введите ваше имя',
          email: 'Ваш Email',
          emailPlaceholder: 'Введите ваш email',
          message: 'Ваше сообщение',
          messagePlaceholder: 'Чем мы можем вам помочь?',
          send: 'Отправить сообщение',
          sending: 'Отправка...',
          success: {
            title: 'Сообщение отправлено!',
            message: 'Спасибо за обращение. Мы свяжемся с вами в ближайшее время.',
            newMessage: 'Отправить другое сообщение'
          }
        }
      },
      ready: 'Готовы начать?',
      fillBrief: 'Заполнить бриф'
    },
    brief: {
      title: 'Отправьте ваш бриф',
      subtitle: 'Расскажите нам о вашем проекте, и мы свяжемся с вами для обсуждения деталей',
      name: 'Ваше имя *',
      email: 'Ваш email *',
      phone: 'Ваш телефон',
      company: 'Название компании',
      website: 'Текущий веб-сайт (если есть)',
      projectType: {
        label: 'Какой тип проекта вам нужен? *',
        website: 'Веб-сайт',
        mobileApp: 'Мобильное приложение',
        webApp: 'Веб-приложение',
        ecommerce: 'Интернет-магазин',
        brandIdentity: 'Фирменный стиль',
        other: 'Другое'
      },
      budget: {
        label: 'Каков ваш бюджет?',
        small: 'До 400 000 ₽',
        medium: '400 000 - 800 000 ₽',
        large: '800 000 - 2 000 000 ₽',
        enterprise: 'Более 2 000 000 ₽',
        notSure: 'Пока не определился'
      },
      timeline: {
        label: 'Когда вам нужно завершить проект?',
        asap: 'Как можно скорее',
        oneMonth: 'В течение 1 месяца',
        threeMonths: 'В течение 3 месяцев',
        sixMonths: 'В течение 6 месяцев',
        flexible: 'Гибкий график / Не уверен'
      },
      description: 'Описание проекта и цели *',
      descriptionPlaceholder: 'Пожалуйста, опишите ваш проект, включая ваши цели, целевую аудиторию и любые конкретные функции, которые вам нужны...',
      features: 'Особые требования или функции',
      featuresPlaceholder: 'Перечислите любые конкретные функции, интеграции или технические требования...',
      references: 'Примеры сайтов, которые вам нравятся',
      referencesPlaceholder: 'Поделитесь сайтами или приложениями, которые вам нравятся или похожи на то, что вы хотите...',
      submit: 'Отправить бриф',
      sending: 'Отправка...',
      required: 'Обязательное поле',
      errorMessage: 'Пожалуйста, исправьте ошибки перед отправкой',
      successTitle: 'Бриф успешно отправлен!',
      successMessage: 'Спасибо за отправку брифа! Мы рассмотрим его и свяжемся с вами в течение 1-2 рабочих дней.',
      successCta: 'Вернуться на главную'
    },
  },
  cs: {
    navbar: {
      home: 'Domů',
      services: 'Služby',
      about: 'O nás',
      brief: 'Brief',
      login: 'Přihlášení',
      signup: 'Registrace',
      register: 'Registrace',
      client: 'Klientský prostor',
      account: 'Můj účet',
      admin: 'Admin',
      company: 'Firemní prostor',
      settings: 'Nastavení',
      logout: 'Odhlásit se',
    },
    hero: {
      title: 'Digitální řešení pro moderní podnikání',
      subtitle: 'Vytváříme vysoce výkonné webové stránky, mobilní aplikace a podniková řešení, která pomáhají vašemu podnikání růst',
      cta: 'Začít',
      learnMore: 'Zjistit více',
    },
    about: {
      title: 'O nás',
      description: 'Teko.sup je tým profesionálů specializující se na webový vývoj, integrace a digitální řešení. Kombinujeme nejmodernější technologie, kreativitu a zkušenosti k vytváření výkonných IT řešení pro firmy.',
      whoWeAre: {
        title: 'Kdo jsme',
        description1: 'Teko.sup je tým profesionálů specializující se na webový vývoj, integrace a digitální řešení. Kombinujeme nejmodernější technologie, kreativitu a zkušenosti k vytváření výkonných IT řešení pro firmy.',
        description2: 'Naším posl��ním je pomáhat firmám uspět v digitálním světě vytvářením moderních webových stránek, CRM systémů a automatizačních nástrojů, které činí podnikání efektivnějším, rychlejším a ziskovějším.',
        description3: 'Věříme, že design, kód a technologie nejsou jen nástroje, ale klíč k inovacím.'
      },
      mission: {
        title: 'Naše mise',
        quote: 'Vytváříme technologie, které zjednodušují složitost, automatizují procesy a pomáhají firmám pracovat efektivněji.',
        description: 'Pracujeme na průsečíku vývoje, UI/UX designu a marketingu, zajišťujeme, že každý projekt přináší reálnou hodnotu našim klientům.',
        point1: 'Využíváme technologie k řešení reálných obchodních problémů',
        point2: 'Vyvíjíme řešení, která snižují manuální práci a chyby',
        point3: 'Zaměřujeme se na vytváření digitálních aktiv, které generují výsledky'
      },
      vision: {
        title: 'Naše vize',
        description: 'Představujeme si budoucnost, kde digitální technologie činí obchodní operace bezproblémovými a umožňují firmám soustředit se na růst místo na rutinní úkoly.',
        point1: 'Stát se vedoucím poskytovatelem digitálních řešení ve střední Evropě',
        point2: 'Pomoci více než 500 firmám transformovat jejich digitální přítomnost do roku 2025',
        point3: 'Posunovat hranice možností webových technologií'
      },
      values: {
        title: 'Naše hodnoty',
        description: 'Tyto základní principy řídí naši práci a vztahy s klienty a partnery.',
        value1: {
          title: 'Technologicky zaměření',
          description: 'Používáme nejmodernější nástroje a držíme krok s trendy.'
        },
        value2: {
          title: 'Transparentnost',
          description: 'Jasné procesy, realistické termíny a přímá komunikace.'
        },
        value3: {
          title: 'Kreativita',
          description: 'Nacházíme inovativní řešení pro složité výzvy.'
        },
        value4: {
          title: 'Orientace na výsledky',
          description: 'Nestavíme jen webové stránky; vytváříme digitální ekosystémy pro úspěch v podnikání.'
        }
      },
      team: {
        title: 'Náš tým',
        description: 'Seznamte se s experty, kteří tvoří magii.',
        experience: 'Zkušenosti',
        years: 'let',
        skills: 'Dovednosti',
        member1: {
          name: 'Arkadiy Tkachenko',
          role: 'CEO & zakladatel',
          bio: 'Stavíme ekosystémy, ne jen webové stránky.'
        },
        member2: {
          name: 'Kai Kane',
          role: 'Vedoucí designer',
          bio: 'Skvělé rozhraní je tam, kde se krása setkává s funkcionalitou.'
        },
        member3: {
          name: 'Adam Hrstka',
          role: 'Vývojář',
          bio: 'Nejlepší kód je ten, který usnadňuje život.'
        },
        member4: {
          name: 'Petr Lichý',
          role: 'Vedoucí marketingu',
          bio: 'Efektivní marketing není jen reklama; je to strategie úspěchu.'
        }
      },
      contact: {
        title: 'Kontaktujte nás',
        description: 'Chcete prodiskutovat projekt nebo máte otázku? Ozvěte se nám!',
        office: 'Kancelář',
        email: 'Email',
        phone: 'Telefon',
        form: {
          title: 'Pošlete nám zprávu',
          name: 'Vaše jméno',
          namePlaceholder: 'Zadejte vaše jméno',
          email: 'Váš Email',
          emailPlaceholder: 'Zadejte váš email',
          message: 'Vaše zpráva',
          messagePlaceholder: 'Jak vám můžeme pomoci?',
          send: 'Odeslat zprávu',
          sending: 'Odesílání...',
          success: {
            title: 'Zpráva odeslána!',
            message: 'Děkujeme za kontaktování. Ozveme se vám co nejdříve.',
            newMessage: 'Poslat další zprávu'
          }
        }
      },
      ready: 'Připraveni začít?',
      fillBrief: 'Vyplnit brief'
    },
    brief: {
      title: 'Zašlete nám váš brief',
      subtitle: 'Řekněte nám o vašem projektu a my se vám ozveme pro projednání detailů',
      name: 'Vaše jméno *',
      email: 'Váš email *',
      phone: 'Váš telefon',
      company: 'Název společnosti',
      website: 'Současný web (pokud existuje)',
      projectType: {
        label: 'Jaký typ projektu potřebujete? *',
        website: 'Webové stránky',
        mobileApp: 'Mobilní aplikace',
        webApp: 'Webová aplikace',
        ecommerce: 'E-shop',
        brandIdentity: 'Firemní identita',
        other: 'Jiné'
      },
      budget: {
        label: 'Jaký je váš rozpočet?',
        small: 'Pod 100 000 Kč',
        medium: '100 000 - 250 000 Kč',
        large: '250 000 - 600 000 Kč',
        enterprise: 'Nad 600 000 Kč',
        notSure: 'Zatím nejsem si jistý/á'
      },
      timeline: {
        label: 'Kdy potřebujete projekt dokončit?',
        asap: 'Co nejdříve',
        oneMonth: 'Do 1 měsíce',
        threeMonths: 'Do 3 měsíců',
        sixMonths: 'Do 6 měsíců',
        flexible: 'Flexibilní / Nejsem si jistý/á'
      },
      description: 'Popis projektu a cíle *',
      descriptionPlaceholder: 'Prosím popište váš projekt, včetně vašich cílů, cílové skupiny a konkrétních funkcí, které potřebujete...',
      features: 'Specifické funkce nebo požadavky',
      featuresPlaceholder: 'Uveďte jakékoli specifické funkce, integrace nebo technické požadavky...',
      references: 'Reference / Příklady, které se vám líbí',
      referencesPlaceholder: 'Podělte se o webové stránky nebo aplikace, které se vám líbí nebo jsou podobné tomu, co chcete...',
      submit: 'Odeslat brief',
      sending: 'Odesílání...',
      required: 'Povinné pole',
      errorMessage: 'Prosím opravte chyby před odesláním',
      successTitle: 'Brief úspěšně odeslán!',
      successMessage: 'Děkujeme za zaslání briefu! Prohlédneme si ho a ozveme se vám během 1-2 pracovních dnů.',
      successCta: 'Zpět na hlavní stránku'
    },
  }
} as const;

export type SupportedLanguage = keyof typeof translations;
export type TranslationKeys = keyof typeof translations.en;

export const languageSchema = z.object({
  language: z.enum(['en', 'ru', 'cs'] as const)
});
