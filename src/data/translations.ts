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
      mainLabel: "Main navigation",
      languageLabel: "Language",
    },
    hero: {
      eyebrow: "",
      name: "Douglas Vinicius Dierings",
      role: "Software Engineer",
      intro:
        "Bachelor of Science (Honours) in Computing and IT graduate with a 1.1 grade, and software developer focused on Java, web development and building clean, practical digital solutions.",
      primaryButton: "View projects",
      secondaryButton: "Get in touch",
      githubLabel: "GitHub",
      linkedInLabel: "LinkedIn",
      emailLabel: "Email",
      socialLinksLabel: "Social profile links",
      actionsLabel: "Portfolio actions",
      profileLabel: "Profile image placeholder",
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
          id: "capstone-project",
          title: "Traffic Volume Forecasting Capstone",
          description:
            "A final-year forecasting study comparing SARIMA and XGBoost on 15-minute SCATS traffic data, with feature engineering, model evaluation and a Tkinter demo for future traffic predictions.",
        },
        {
          id: "learn-flow",
          title: "Learn Flow",
          description:
            "An Android app for managing employee training across multiple work sites, with Firebase authentication, Realtime Database storage and mobile workflows for onboarding and monthly training checks.",
        },
        {
          id: "find-out-your-tax",
          title: "Irish Tax Calculator",
          description:
            "A Java tax calculator prototype for estimating Irish PAYE, USC and PRSI liabilities, with login, sign-up, profile flows and MySQL-backed user tax records.",
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
      about: "Fúmsa",
      projects: "Tionscadail",
      contact: "Teagmháil",
      menu: "Oscail an roghchlár",
      close: "Dún an roghchlár",
      mainLabel: "Príomhnascleanúint",
      languageLabel: "Teanga",
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
          id: "capstone-project",
          title: "Tionscadal Capstone um Thuar Tráchta",
          description:
            "Staidéar tuartha bliana deiridh a chuireann SARIMA agus XGBoost i gcomparáid ar shonraí tráchta SCATS 15 nóiméad, le hinnealtóireacht gnéithe, meastóireacht samhlacha agus taispeántas Tkinter do thuar tráchta amach anseo.",
        },
        {
          id: "learn-flow",
          title: "Learn Flow",
          description:
            "Aip Android chun taifid oiliúna fostaithe a bhainistiú thar iliomad suíomhanna oibre, le fíordheimhniú Firebase, stóráil Realtime Database agus sreafaí soghluaiste d'ionduchtú agus seiceálacha oiliúna míosúla.",
        },
        {
          id: "find-out-your-tax",
          title: "Áireamhán Cánach na hÉireann",
          description:
            "Fréamhshamhail áireamháin cánach Java chun dliteanais PAYE, USC agus PRSI in Éirinn a mheas, le logáil isteach, clárú, sreafaí próifíle agus taifid chánach úsáideora i MySQL.",
        },
      ],
    },
    contact: {
      eyebrow: "Déan teagmháil",
      title: "Tógaimis rud úsáideach",
      description:
        "Táim oscailte do dheiseanna forbartha bogearraí, comhráite tionscadail agus naisc ghairmiúla.",
      linksLabel: "Naisc teagmhála",
      emailLabel: "Ríomhphost",
      emailDescription: "Cuir tús le comhrá",
      linkedInLabel: "LinkedIn",
      linkedInDescription: "Déan nasc gairmiúil",
      githubLabel: "GitHub",
      githubDescription: "Féach ar mo chód",
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
      mainLabel: "Navegação principal",
      languageLabel: "Idioma",
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
          id: "capstone-project",
          title: "Capstone de Previsão de Volume de Tráfego",
          description:
            "Um estudo final de previsão que compara SARIMA e XGBoost com dados de tráfego SCATS em intervalos de 15 minutos, incluindo engenharia de atributos, avaliação de modelos e uma demo em Tkinter para previsões futuras.",
        },
        {
          id: "learn-flow",
          title: "Learn Flow",
          description:
            "Um app Android para gerenciar treinamentos de funcionários em vários locais de trabalho, com autenticação Firebase, armazenamento no Realtime Database e fluxos móveis para integração e controles mensais.",
        },
        {
          id: "find-out-your-tax",
          title: "Calculadora de Impostos da Irlanda",
          description:
            "Um protótipo em Java para calcular impostos na Irlanda, estimando PAYE, USC e PRSI, com login, cadastro, fluxos de perfil e registros fiscais de usuários salvos em MySQL.",
        },
      ],
    },
    contact: {
      eyebrow: "Entre em contato",
      title: "Vamos construir algo útil",
      description:
        "Estou disponível para oportunidades em desenvolvimento de software, conversas sobre projetos e conexões profissionais.",
      linksLabel: "Links de contato",
      emailLabel: "Email",
      emailDescription: "Iniciar uma conversa",
      linkedInLabel: "LinkedIn",
      linkedInDescription: "Conectar profissionalmente",
      githubLabel: "GitHub",
      githubDescription: "Explorar meu código",
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
      mainLabel: "Navegación principal",
      languageLabel: "Idioma",
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
          id: "capstone-project",
          title: "Capstone de Predicción de Volumen de Tráfico",
          description:
            "Un estudio final de predicción que compara SARIMA y XGBoost con datos de tráfico SCATS en intervalos de 15 minutos, incluyendo ingeniería de características, evaluación de modelos y una demo en Tkinter para predicciones futuras.",
        },
        {
          id: "learn-flow",
          title: "Learn Flow",
          description:
            "Una app Android para gestionar la formación de empleados en varios sitios de trabajo, con autenticación Firebase, almacenamiento en Realtime Database y flujos móviles para incorporación y controles mensuales.",
        },
        {
          id: "find-out-your-tax",
          title: "Calculadora de Impuestos de Irlanda",
          description:
            "Un prototipo en Java para calcular impuestos en Irlanda, estimando PAYE, USC y PRSI, con inicio de sesión, registro, flujos de perfil y registros fiscales de usuarios en MySQL.",
        },
      ],
    },
    contact: {
      eyebrow: "Hablemos",
      title: "Construyamos algo útil",
      description:
        "Estoy disponible para oportunidades de desarrollo de software, conversaciones sobre proyectos y conexiones profesionales.",
      linksLabel: "Enlaces de contacto",
      emailLabel: "Email",
      emailDescription: "Iniciar una conversación",
      linkedInLabel: "LinkedIn",
      linkedInDescription: "Conectar profesionalmente",
      githubLabel: "GitHub",
      githubDescription: "Explorar mi código",
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
      mainLabel: "Hauptnavigation",
      languageLabel: "Sprache",
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
          id: "capstone-project",
          title: "Capstone zur Verkehrsvolumenprognose",
          description:
            "Eine Abschlussstudie zur Prognose, die SARIMA und XGBoost mit 15-minütigen SCATS-Verkehrsdaten vergleicht, einschließlich Feature Engineering, Modellbewertung und einer Tkinter-Demo für zukünftige Verkehrsprognosen.",
        },
        {
          id: "learn-flow",
          title: "Learn Flow",
          description:
            "Eine Android-App zur Verwaltung von Mitarbeiterschulungen an mehreren Arbeitsstandorten, mit Firebase-Authentifizierung, Realtime-Database-Speicherung und mobilen Abläufen für Onboarding und monatliche Schulungskontrollen.",
        },
        {
          id: "find-out-your-tax",
          title: "Irischer Steuerrechner",
          description:
            "Ein Java-Prototyp zur Berechnung irischer Steuern, der PAYE, USC und PRSI schätzt, mit Login, Registrierung, Profilabläufen und in MySQL gespeicherten Steuerdaten.",
        },
      ],
    },
    contact: {
      eyebrow: "Kontakt aufnehmen",
      title: "Lassen Sie uns etwas Nützliches entwickeln",
      description:
        "Ich bin offen für Möglichkeiten in der Softwareentwicklung, Projektgespräche und berufliche Kontakte.",
      linksLabel: "Kontaktlinks",
      emailLabel: "E-Mail",
      emailDescription: "Ein Gespräch beginnen",
      linkedInLabel: "LinkedIn",
      linkedInDescription: "Beruflich vernetzen",
      githubLabel: "GitHub",
      githubDescription: "Meinen Code ansehen",
    },
  },
};
