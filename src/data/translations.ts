import type { Locale, Translation } from "@/types/i18n";

export const defaultLocale: Locale = "en";

export const translations: Record<Locale, Translation> = {
  en: {
    languageName: "English",
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      contact: "Contact",
      menu: "Open menu",
      close: "Close menu",
    },
    hero: {
      eyebrow: "Java Programmer / Software Developer",
      name: "Douglas Vinicius Dierings",
      role: "Java Programmer / Software Developer",
      intro:
        "Computing graduate and software developer focused on Java, web development, and building clean, practical digital solutions.",
      primaryButton: "View projects",
      secondaryButton: "Contact me",
      githubLabel: "GitHub",
      linkedInLabel: "LinkedIn",
      emailLabel: "Email",
      socialLinksLabel: "Social profile links",
      actionsLabel: "Portfolio actions",
      profileLabel: "Profile image placeholder",
      profileStatus: "Available for software development opportunities",
    },
    about: {
      eyebrow: "About me",
      title: "Focused on Java, web development, and steady growth",
      body:
        "I am a computing graduate and software developer with a strong interest in Java and modern web development. I enjoy building clear, practical applications and I keep improving through continuous learning, hands-on projects, and new technologies.",
      highlights: [
        "Computing graduate",
        "Software developer",
        "Java focus",
        "Web development",
        "Continuous learning",
      ],
    },
    projects: {
      eyebrow: "Selected work",
      title: "Projects built with practical technology",
      cardsLabel: "Project previews",
      tagsLabel: "Technology tags",
      linkLabel: "View project",
      items: [
        {
          id: "task-manager",
          title: "Task Management API",
          description:
            "A placeholder REST API for organizing tasks, users, and project workflows with a clean Java backend.",
        },
        {
          id: "portfolio",
          title: "Developer Portfolio",
          description:
            "A responsive multilingual portfolio focused on accessible navigation, reusable components, and clear presentation.",
        },
        {
          id: "api-service",
          title: "Integration Service",
          description:
            "A placeholder service for connecting external APIs, processing data, and delivering reliable responses.",
        },
      ],
    },
    contact: {
      eyebrow: "Contact section",
      title: "Simple call-to-action styling",
      button: "Email preview",
    },
  },
  ga: {
    languageName: "Gaeilge",
    nav: {
      home: "Baile",
      about: "Fúmsa",
      projects: "Tionscadail",
      contact: "Teagmháil",
      menu: "Oscail an roghchlár",
      close: "Dún an roghchlár",
    },
    hero: {
      eyebrow: "Ríomhchláraitheoir Java / Forbróir Bogearraí",
      name: "Douglas Vinicius Dierings",
      role: "Ríomhchláraitheoir Java / Forbróir Bogearraí",
      intro:
        "Céimí ríomhaireachta agus forbróir bogearraí dírithe ar Java, forbairt gréasáin, agus réitigh dhigiteacha ghlana phraiticiúla.",
      primaryButton: "Féach tionscadail",
      secondaryButton: "Déan teagmháil",
      githubLabel: "GitHub",
      linkedInLabel: "LinkedIn",
      emailLabel: "Ríomhphost",
      socialLinksLabel: "Naisc phróifíle shóisialta",
      actionsLabel: "Gníomhartha punainne",
      profileLabel: "Ionad sealadach d'íomhá próifíle",
      profileStatus: "Ar fáil do dheiseanna forbartha bogearraí",
    },
    about: {
      eyebrow: "Fúmsa",
      title: "Dírithe ar Java, forbairt gréasáin, agus fás leanúnach",
      body:
        "Is céimí ríomhaireachta agus forbróir bogearraí mé le suim láidir i Java agus forbairt gréasáin nua-aimseartha. Is maith liom feidhmchláir shoiléire phraiticiúla a thógáil agus leanann mé orm ag foghlaim trí thionscadail agus teicneolaíochtaí nua.",
      highlights: [
        "Céimí ríomhaireachta",
        "Forbróir bogearraí",
        "Fócas ar Java",
        "Forbairt gréasáin",
        "Foghlaim leanúnach",
      ],
    },
    projects: {
      eyebrow: "Obair roghnaithe",
      title: "Tionscadail tógtha le teicneolaíocht phraiticiúil",
      cardsLabel: "Réamhamhairc tionscadail",
      tagsLabel: "Clibeanna teicneolaíochta",
      linkLabel: "Féach an tionscadal",
      items: [
        {
          id: "task-manager",
          title: "API Bainistíochta Tascanna",
          description:
            "API REST sealadach chun tascanna, úsáideoirí agus sreafaí oibre tionscadail a eagrú le hinneall glan Java.",
        },
        {
          id: "portfolio",
          title: "Punann Forbróra",
          description:
            "Punann ilteangach fhreagrúil le nascleanúint inrochtana, comhpháirteanna in-athúsáidte agus cur i láthair soiléir.",
        },
        {
          id: "api-service",
          title: "Seirbhís Chomhtháthaithe",
          description:
            "Seirbhís shealadach chun APIanna seachtracha a nascadh, sonraí a phróiseáil agus freagraí iontaofa a sheachadadh.",
        },
      ],
    },
    contact: {
      eyebrow: "Rannán teagmhála",
      title: "Stíliú simplí do ghlao chun gnímh",
      button: "Réamhamharc ríomhphoist",
    },
  },
  "pt-BR": {
    languageName: "Português BR",
    nav: {
      home: "Início",
      about: "Sobre",
      projects: "Projetos",
      contact: "Contato",
      menu: "Abrir menu",
      close: "Fechar menu",
    },
    hero: {
      eyebrow: "Programador Java / Desenvolvedor de Software",
      name: "Douglas Vinicius Dierings",
      role: "Programador Java / Desenvolvedor de Software",
      intro:
        "Graduado em computação e desenvolvedor de software focado em Java, desenvolvimento web e soluções digitais limpas e práticas.",
      primaryButton: "Ver projetos",
      secondaryButton: "Entrar em contato",
      githubLabel: "GitHub",
      linkedInLabel: "LinkedIn",
      emailLabel: "Email",
      socialLinksLabel: "Links de perfis sociais",
      actionsLabel: "Ações do portfólio",
      profileLabel: "Espaço reservado para imagem de perfil",
      profileStatus: "Disponível para oportunidades em desenvolvimento de software",
    },
    about: {
      eyebrow: "Sobre mim",
      title: "Focado em Java, desenvolvimento web e evolução contínua",
      body:
        "Sou graduado em computação e desenvolvedor de software com forte interesse em Java e desenvolvimento web moderno. Gosto de criar aplicações claras e práticas, evoluindo continuamente por meio de projetos, estudo e novas tecnologias.",
      highlights: [
        "Graduado em computação",
        "Desenvolvedor de software",
        "Foco em Java",
        "Desenvolvimento web",
        "Aprendizado contínuo",
      ],
    },
    projects: {
      eyebrow: "Trabalhos selecionados",
      title: "Projetos criados com tecnologia prática",
      cardsLabel: "Prévia dos projetos",
      tagsLabel: "Tecnologias",
      linkLabel: "Ver projeto",
      items: [
        {
          id: "task-manager",
          title: "API de Gerenciamento de Tarefas",
          description:
            "Uma API REST provisória para organizar tarefas, usuários e fluxos de projeto com um backend Java limpo.",
        },
        {
          id: "portfolio",
          title: "Portfólio de Desenvolvedor",
          description:
            "Um portfólio multilíngue e responsivo focado em navegação acessível, componentes reutilizáveis e apresentação clara.",
        },
        {
          id: "api-service",
          title: "Serviço de Integração",
          description:
            "Um serviço provisório para conectar APIs externas, processar dados e entregar respostas confiáveis.",
        },
      ],
    },
    contact: {
      eyebrow: "Seção de contato",
      title: "Estilo simples para chamada de ação",
      button: "Prévia de email",
    },
  },
  es: {
    languageName: "Español",
    nav: {
      home: "Inicio",
      about: "Sobre mí",
      projects: "Proyectos",
      contact: "Contacto",
      menu: "Abrir menú",
      close: "Cerrar menú",
    },
    hero: {
      eyebrow: "Programador Java / Desarrollador de Software",
      name: "Douglas Vinicius Dierings",
      role: "Programador Java / Desarrollador de Software",
      intro:
        "Graduado en informática y desarrollador de software enfocado en Java, desarrollo web y soluciones digitales limpias y prácticas.",
      primaryButton: "Ver proyectos",
      secondaryButton: "Contactarme",
      githubLabel: "GitHub",
      linkedInLabel: "LinkedIn",
      emailLabel: "Email",
      socialLinksLabel: "Enlaces de perfiles sociales",
      actionsLabel: "Acciones del portafolio",
      profileLabel: "Marcador de posición para imagen de perfil",
      profileStatus: "Disponible para oportunidades de desarrollo de software",
    },
    about: {
      eyebrow: "Sobre mí",
      title: "Enfocado en Java, desarrollo web y aprendizaje continuo",
      body:
        "Soy graduado en informática y desarrollador de software con un fuerte interés en Java y el desarrollo web moderno. Me gusta crear aplicaciones claras y prácticas, y sigo mejorando mediante proyectos, estudio y nuevas tecnologías.",
      highlights: [
        "Graduado en informática",
        "Desarrollador de software",
        "Enfoque en Java",
        "Desarrollo web",
        "Aprendizaje continuo",
      ],
    },
    projects: {
      eyebrow: "Trabajo seleccionado",
      title: "Proyectos creados con tecnología práctica",
      cardsLabel: "Vistas previas de proyectos",
      tagsLabel: "Tecnologías",
      linkLabel: "Ver proyecto",
      items: [
        {
          id: "task-manager",
          title: "API de Gestión de Tareas",
          description:
            "Una API REST provisional para organizar tareas, usuarios y flujos de proyecto con un backend Java limpio.",
        },
        {
          id: "portfolio",
          title: "Portafolio de Desarrollador",
          description:
            "Un portafolio multilingüe y responsivo centrado en navegación accesible, componentes reutilizables y presentación clara.",
        },
        {
          id: "api-service",
          title: "Servicio de Integración",
          description:
            "Un servicio provisional para conectar APIs externas, procesar datos y entregar respuestas fiables.",
        },
      ],
    },
    contact: {
      eyebrow: "Sección de contacto",
      title: "Estilo simple para llamada a la acción",
      button: "Vista previa de email",
    },
  },
  de: {
    languageName: "Deutsch",
    nav: {
      home: "Start",
      about: "Über mich",
      projects: "Projekte",
      contact: "Kontakt",
      menu: "Menü öffnen",
      close: "Menü schließen",
    },
    hero: {
      eyebrow: "Java-Programmierer / Softwareentwickler",
      name: "Douglas Vinicius Dierings",
      role: "Java-Programmierer / Softwareentwickler",
      intro:
        "Informatikabsolvent und Softwareentwickler mit Fokus auf Java, Webentwicklung und saubere, praktische digitale Lösungen.",
      primaryButton: "Projekte ansehen",
      secondaryButton: "Kontakt aufnehmen",
      githubLabel: "GitHub",
      linkedInLabel: "LinkedIn",
      emailLabel: "E-Mail",
      socialLinksLabel: "Links zu sozialen Profilen",
      actionsLabel: "Portfolio-Aktionen",
      profileLabel: "Platzhalter für Profilbild",
      profileStatus: "Offen für Möglichkeiten in der Softwareentwicklung",
    },
    about: {
      eyebrow: "Über mich",
      title: "Fokus auf Java, Webentwicklung und kontinuierliches Lernen",
      body:
        "Ich bin Informatikabsolvent und Softwareentwickler mit starkem Interesse an Java und moderner Webentwicklung. Ich entwickle gerne klare, praktische Anwendungen und verbessere mich kontinuierlich durch Projekte, Lernen und neue Technologien.",
      highlights: [
        "Informatikabsolvent",
        "Softwareentwickler",
        "Fokus auf Java",
        "Webentwicklung",
        "Kontinuierliches Lernen",
      ],
    },
    projects: {
      eyebrow: "Ausgewählte Arbeiten",
      title: "Projekte mit praxisnaher Technologie",
      cardsLabel: "Projektvorschauen",
      tagsLabel: "Technologien",
      linkLabel: "Projekt ansehen",
      items: [
        {
          id: "task-manager",
          title: "Aufgabenverwaltungs-API",
          description:
            "Eine vorläufige REST-API zur Organisation von Aufgaben, Benutzern und Projektabläufen mit einem klaren Java-Backend.",
        },
        {
          id: "portfolio",
          title: "Entwicklerportfolio",
          description:
            "Ein responsives, mehrsprachiges Portfolio mit zugänglicher Navigation, wiederverwendbaren Komponenten und klarer Darstellung.",
        },
        {
          id: "api-service",
          title: "Integrationsdienst",
          description:
            "Ein vorläufiger Dienst zum Verbinden externer APIs, Verarbeiten von Daten und Bereitstellen zuverlässiger Antworten.",
        },
      ],
    },
    contact: {
      eyebrow: "Kontaktbereich",
      title: "Einfaches Styling für einen Call-to-Action",
      button: "E-Mail-Vorschau",
    },
  },
};
