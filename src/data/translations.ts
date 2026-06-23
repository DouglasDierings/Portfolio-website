import type { Locale, Translation } from "@/types/i18n";

export const defaultLocale: Locale = "en";

export const translations: Record<Locale, Translation> = {
  en: {
    languageName: "English (Ireland)",
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      contact: "Contact",
      menu: "Open menu",
      close: "Close menu",
      mainLabel: "Main navigation",
      languageLabel: "Language",
    },
    hero: {
      eyebrow: "Java Programmer / Software Developer",
      name: "Douglas Vinicius Dierings",
      role: "Java Programmer / Software Developer",
      intro:
        "Computing graduate and software developer focused on Java, web development and building clean, practical digital solutions.",
      primaryButton: "View projects",
      secondaryButton: "Get in touch",
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
        "I am a computing graduate and software developer with a strong interest in Java and modern web development. I enjoy building clear, practical applications and I keep improving through continuous learning, hands-on projects and new technologies.",
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
            "A placeholder REST API for organising tasks, users and project workflows with a clean Java backend.",
        },
        {
          id: "portfolio",
          title: "Developer Portfolio",
          description:
            "A responsive multilingual portfolio focused on accessible navigation, reusable components and clear presentation.",
        },
        {
          id: "api-service",
          title: "Integration Service",
          description:
            "A placeholder service for connecting external APIs, processing data and delivering reliable responses.",
        },
      ],
    },
    contact: {
      eyebrow: "Get in touch",
      title: "Let's build something useful",
      description:
        "I am open to software development opportunities, project conversations and professional connections.",
      linksLabel: "Contact links",
      emailLabel: "Email",
      emailDescription: "Start a conversation",
      linkedInLabel: "LinkedIn",
      linkedInDescription: "Connect professionally",
      githubLabel: "GitHub",
      githubDescription: "Explore my code",
    },
  },
  ga: {
    languageName: "Gaeilge",
    nav: {
      home: "Baile",
      about: "FÃºmsa",
      projects: "Tionscadail",
      contact: "TeagmhÃ¡il",
      menu: "Oscail an roghchlÃ¡r",
      close: "DÃºn an roghchlÃ¡r",
      mainLabel: "PrÃ­omhnascleanÃºint",
      languageLabel: "Teanga",
    },
    hero: {
      eyebrow: "RÃ­omhchlÃ¡raitheoir Java / ForbrÃ³ir BogearraÃ­",
      name: "Douglas Vinicius Dierings",
      role: "RÃ­omhchlÃ¡raitheoir Java / ForbrÃ³ir BogearraÃ­",
      intro:
        "CÃ©imÃ­ rÃ­omhaireachta agus forbrÃ³ir bogearraÃ­ dÃ­rithe ar Java, forbairt grÃ©asÃ¡in, agus rÃ©itigh dhigiteacha ghlana phraiticiÃºla.",
      primaryButton: "FÃ©ach tionscadail",
      secondaryButton: "DÃ©an teagmhÃ¡il",
      githubLabel: "GitHub",
      linkedInLabel: "LinkedIn",
      emailLabel: "RÃ­omhphost",
      socialLinksLabel: "Naisc phrÃ³ifÃ­le shÃ³isialta",
      actionsLabel: "GnÃ­omhartha punainne",
      profileLabel: "Ionad sealadach d'Ã­omhÃ¡ prÃ³ifÃ­le",
      profileStatus: "Ar fÃ¡il do dheiseanna forbartha bogearraÃ­",
    },
    about: {
      eyebrow: "FÃºmsa",
      title: "DÃ­rithe ar Java, forbairt grÃ©asÃ¡in, agus fÃ¡s leanÃºnach",
      body:
        "Is cÃ©imÃ­ rÃ­omhaireachta agus forbrÃ³ir bogearraÃ­ mÃ© le suim lÃ¡idir i Java agus forbairt grÃ©asÃ¡in nua-aimseartha. Is maith liom feidhmchlÃ¡ir shoilÃ©ire phraiticiÃºla a thÃ³gÃ¡il agus leanann mÃ© orm ag foghlaim trÃ­ thionscadail agus teicneolaÃ­ochtaÃ­ nua.",
      highlights: [
        "CÃ©imÃ­ rÃ­omhaireachta",
        "ForbrÃ³ir bogearraÃ­",
        "FÃ³cas ar Java",
        "Forbairt grÃ©asÃ¡in",
        "Foghlaim leanÃºnach",
      ],
    },
    projects: {
      eyebrow: "Obair roghnaithe",
      title: "Tionscadail tÃ³gtha le teicneolaÃ­ocht phraiticiÃºil",
      cardsLabel: "RÃ©amhamhairc tionscadail",
      tagsLabel: "Clibeanna teicneolaÃ­ochta",
      linkLabel: "FÃ©ach an tionscadal",
      items: [
        {
          id: "task-manager",
          title: "API BainistÃ­ochta Tascanna",
          description:
            "API REST sealadach chun tascanna, ÃºsÃ¡ideoirÃ­ agus sreafaÃ­ oibre tionscadail a eagrÃº le hinneall glan Java.",
        },
        {
          id: "portfolio",
          title: "Punann ForbrÃ³ra",
          description:
            "Punann ilteangach fhreagrÃºil le nascleanÃºint inrochtana, comhphÃ¡irteanna in-athÃºsÃ¡idte agus cur i lÃ¡thair soilÃ©ir.",
        },
        {
          id: "api-service",
          title: "SeirbhÃ­s ChomhthÃ¡thaithe",
          description:
            "SeirbhÃ­s shealadach chun APIanna seachtracha a nascadh, sonraÃ­ a phrÃ³iseÃ¡il agus freagraÃ­ iontaofa a sheachadadh.",
        },
      ],
    },
    contact: {
      eyebrow: "DÃ©an teagmhÃ¡il",
      title: "TÃ³gaimis rud ÃºsÃ¡ideach",
      description:
        "TÃ¡im oscailte do dheiseanna forbartha bogearraÃ­, comhrÃ¡ite tionscadail agus naisc ghairmiÃºla.",
      linksLabel: "Naisc teagmhÃ¡la",
      emailLabel: "RÃ­omhphost",
      emailDescription: "Cuir tÃºs le comhrÃ¡",
      linkedInLabel: "LinkedIn",
      linkedInDescription: "DÃ©an nasc gairmiÃºil",
      githubLabel: "GitHub",
      githubDescription: "FÃ©ach ar mo chÃ³d",
    },
  },
  "pt-BR": {
    languageName: "PortuguÃªs BR",
    nav: {
      home: "InÃ­cio",
      about: "Sobre",
      projects: "Projetos",
      contact: "Contato",
      menu: "Abrir menu",
      close: "Fechar menu",
      mainLabel: "NavegaÃ§Ã£o principal",
      languageLabel: "Idioma",
    },
    hero: {
      eyebrow: "Programador Java / Desenvolvedor de Software",
      name: "Douglas Vinicius Dierings",
      role: "Programador Java / Desenvolvedor de Software",
      intro:
        "Graduado em computaÃ§Ã£o e desenvolvedor de software focado em Java, desenvolvimento web e soluÃ§Ãµes digitais limpas e prÃ¡ticas.",
      primaryButton: "Ver projetos",
      secondaryButton: "Entrar em contato",
      githubLabel: "GitHub",
      linkedInLabel: "LinkedIn",
      emailLabel: "Email",
      socialLinksLabel: "Links de perfis sociais",
      actionsLabel: "AÃ§Ãµes do portfÃ³lio",
      profileLabel: "EspaÃ§o reservado para imagem de perfil",
      profileStatus: "DisponÃ­vel para oportunidades em desenvolvimento de software",
    },
    about: {
      eyebrow: "Sobre mim",
      title: "Focado em Java, desenvolvimento web e evoluÃ§Ã£o contÃ­nua",
      body:
        "Sou graduado em computaÃ§Ã£o e desenvolvedor de software com forte interesse em Java e desenvolvimento web moderno. Gosto de criar aplicaÃ§Ãµes claras e prÃ¡ticas, evoluindo continuamente por meio de projetos, estudo e novas tecnologias.",
      highlights: [
        "Graduado em computaÃ§Ã£o",
        "Desenvolvedor de software",
        "Foco em Java",
        "Desenvolvimento web",
        "Aprendizado contÃ­nuo",
      ],
    },
    projects: {
      eyebrow: "Trabalhos selecionados",
      title: "Projetos criados com tecnologia prÃ¡tica",
      cardsLabel: "PrÃ©via dos projetos",
      tagsLabel: "Tecnologias",
      linkLabel: "Ver projeto",
      items: [
        {
          id: "task-manager",
          title: "API de Gerenciamento de Tarefas",
          description:
            "Uma API REST provisÃ³ria para organizar tarefas, usuÃ¡rios e fluxos de projeto com um backend Java limpo.",
        },
        {
          id: "portfolio",
          title: "PortfÃ³lio de Desenvolvedor",
          description:
            "Um portfÃ³lio multilÃ­ngue e responsivo focado em navegaÃ§Ã£o acessÃ­vel, componentes reutilizÃ¡veis e apresentaÃ§Ã£o clara.",
        },
        {
          id: "api-service",
          title: "ServiÃ§o de IntegraÃ§Ã£o",
          description:
            "Um serviÃ§o provisÃ³rio para conectar APIs externas, processar dados e entregar respostas confiÃ¡veis.",
        },
      ],
    },
    contact: {
      eyebrow: "Entre em contato",
      title: "Vamos construir algo Ãºtil",
      description:
        "Estou disponÃ­vel para oportunidades em desenvolvimento de software, conversas sobre projetos e conexÃµes profissionais.",
      linksLabel: "Links de contato",
      emailLabel: "Email",
      emailDescription: "Iniciar uma conversa",
      linkedInLabel: "LinkedIn",
      linkedInDescription: "Conectar profissionalmente",
      githubLabel: "GitHub",
      githubDescription: "Explorar meu cÃ³digo",
    },
  },
  es: {
    languageName: "EspaÃ±ol",
    nav: {
      home: "Inicio",
      about: "Sobre mÃ­",
      projects: "Proyectos",
      contact: "Contacto",
      menu: "Abrir menÃº",
      close: "Cerrar menÃº",
      mainLabel: "NavegaciÃ³n principal",
      languageLabel: "Idioma",
    },
    hero: {
      eyebrow: "Programador Java / Desarrollador de Software",
      name: "Douglas Vinicius Dierings",
      role: "Programador Java / Desarrollador de Software",
      intro:
        "Graduado en informÃ¡tica y desarrollador de software enfocado en Java, desarrollo web y soluciones digitales limpias y prÃ¡cticas.",
      primaryButton: "Ver proyectos",
      secondaryButton: "Contactarme",
      githubLabel: "GitHub",
      linkedInLabel: "LinkedIn",
      emailLabel: "Email",
      socialLinksLabel: "Enlaces de perfiles sociales",
      actionsLabel: "Acciones del portafolio",
      profileLabel: "Marcador de posiciÃ³n para imagen de perfil",
      profileStatus: "Disponible para oportunidades de desarrollo de software",
    },
    about: {
      eyebrow: "Sobre mÃ­",
      title: "Enfocado en Java, desarrollo web y aprendizaje continuo",
      body:
        "Soy graduado en informÃ¡tica y desarrollador de software con un fuerte interÃ©s en Java y el desarrollo web moderno. Me gusta crear aplicaciones claras y prÃ¡cticas, y sigo mejorando mediante proyectos, estudio y nuevas tecnologÃ­as.",
      highlights: [
        "Graduado en informÃ¡tica",
        "Desarrollador de software",
        "Enfoque en Java",
        "Desarrollo web",
        "Aprendizaje continuo",
      ],
    },
    projects: {
      eyebrow: "Trabajo seleccionado",
      title: "Proyectos creados con tecnologÃ­a prÃ¡ctica",
      cardsLabel: "Vistas previas de proyectos",
      tagsLabel: "TecnologÃ­as",
      linkLabel: "Ver proyecto",
      items: [
        {
          id: "task-manager",
          title: "API de GestiÃ³n de Tareas",
          description:
            "Una API REST provisional para organizar tareas, usuarios y flujos de proyecto con un backend Java limpio.",
        },
        {
          id: "portfolio",
          title: "Portafolio de Desarrollador",
          description:
            "Un portafolio multilingÃ¼e y responsivo centrado en navegaciÃ³n accesible, componentes reutilizables y presentaciÃ³n clara.",
        },
        {
          id: "api-service",
          title: "Servicio de IntegraciÃ³n",
          description:
            "Un servicio provisional para conectar APIs externas, procesar datos y entregar respuestas fiables.",
        },
      ],
    },
    contact: {
      eyebrow: "Hablemos",
      title: "Construyamos algo Ãºtil",
      description:
        "Estoy disponible para oportunidades de desarrollo de software, conversaciones sobre proyectos y conexiones profesionales.",
      linksLabel: "Enlaces de contacto",
      emailLabel: "Email",
      emailDescription: "Iniciar una conversaciÃ³n",
      linkedInLabel: "LinkedIn",
      linkedInDescription: "Conectar profesionalmente",
      githubLabel: "GitHub",
      githubDescription: "Explorar mi cÃ³digo",
    },
  },
  de: {
    languageName: "Deutsch",
    nav: {
      home: "Start",
      about: "Ãœber mich",
      projects: "Projekte",
      contact: "Kontakt",
      menu: "MenÃ¼ Ã¶ffnen",
      close: "MenÃ¼ schlieÃŸen",
      mainLabel: "Hauptnavigation",
      languageLabel: "Sprache",
    },
    hero: {
      eyebrow: "Java-Programmierer / Softwareentwickler",
      name: "Douglas Vinicius Dierings",
      role: "Java-Programmierer / Softwareentwickler",
      intro:
        "Informatikabsolvent und Softwareentwickler mit Fokus auf Java, Webentwicklung und saubere, praktische digitale LÃ¶sungen.",
      primaryButton: "Projekte ansehen",
      secondaryButton: "Kontakt aufnehmen",
      githubLabel: "GitHub",
      linkedInLabel: "LinkedIn",
      emailLabel: "E-Mail",
      socialLinksLabel: "Links zu sozialen Profilen",
      actionsLabel: "Portfolio-Aktionen",
      profileLabel: "Platzhalter fÃ¼r Profilbild",
      profileStatus: "Offen fÃ¼r MÃ¶glichkeiten in der Softwareentwicklung",
    },
    about: {
      eyebrow: "Ãœber mich",
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
      eyebrow: "AusgewÃ¤hlte Arbeiten",
      title: "Projekte mit praxisnaher Technologie",
      cardsLabel: "Projektvorschauen",
      tagsLabel: "Technologien",
      linkLabel: "Projekt ansehen",
      items: [
        {
          id: "task-manager",
          title: "Aufgabenverwaltungs-API",
          description:
            "Eine vorlÃ¤ufige REST-API zur Organisation von Aufgaben, Benutzern und ProjektablÃ¤ufen mit einem klaren Java-Backend.",
        },
        {
          id: "portfolio",
          title: "Entwicklerportfolio",
          description:
            "Ein responsives, mehrsprachiges Portfolio mit zugÃ¤nglicher Navigation, wiederverwendbaren Komponenten und klarer Darstellung.",
        },
        {
          id: "api-service",
          title: "Integrationsdienst",
          description:
            "Ein vorlÃ¤ufiger Dienst zum Verbinden externer APIs, Verarbeiten von Daten und Bereitstellen zuverlÃ¤ssiger Antworten.",
        },
      ],
    },
    contact: {
      eyebrow: "Kontakt aufnehmen",
      title: "Lassen Sie uns etwas NÃ¼tzliches entwickeln",
      description:
        "Ich bin offen fÃ¼r MÃ¶glichkeiten in der Softwareentwicklung, ProjektgesprÃ¤che und berufliche Kontakte.",
      linksLabel: "Kontaktlinks",
      emailLabel: "E-Mail",
      emailDescription: "Ein GesprÃ¤ch beginnen",
      linkedInLabel: "LinkedIn",
      linkedInDescription: "Beruflich vernetzen",
      githubLabel: "GitHub",
      githubDescription: "Meinen Code ansehen",
    },
  },
};
