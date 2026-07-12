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
        "Passionate about technology from an early age, I recently graduated with First Class Honours in a Bachelor of Science (Honours) in Computing and IT. I enjoy solving problems, building practical solutions, and continuously expanding my technical skills.",
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
        "I have been captivated by technology since a young age and became the go-to person in my community for resolving computer and electronics issues. With that, I developed a passion for problem-solving and troubleshooting. With 5+ years of experience in the field and as a graduate in IT, I have honed technical and collaborative skills through academic projects and real-world experiences, including my internship at Microsoft. I am now excited to apply my skills in a dynamic, professional environment while continuing to expand my expertise as a Software Engineer.",
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
        "I am currently open to work and welcome software development job opportunities, project collaborations, and professional connections.",
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
      eyebrow: "",
      name: "Douglas Vinicius Dierings",
      role: "Innealtóir Bogearraí",
      intro:
        "Tá dúil agam sa teicneolaíocht ó bhí mé óg. Bhain mé céim Bhaitsiléara Eolaíochta (Onóracha) sa Ríomhaireacht agus TF amach le déanaí, le hOnóracha den Chéad Ghrád. Is maith liom fadhbanna a réiteach, réitigh phraiticiúla a fhorbairt agus mo scileanna teicniúla a leathnú i gcónaí.",
      primaryButton: "Féach tionscadail",
      secondaryButton: "Déan teagmháil",
      githubLabel: "GitHub",
      linkedInLabel: "LinkedIn",
      emailLabel: "Ríomhphost",
      socialLinksLabel: "Naisc phróifíle shóisialta",
      actionsLabel: "Gníomhartha punainne",
      profileLabel: "Ionad sealadach d'íomhá phróifíle",
    },
    about: {
      eyebrow: "Fúmsa",
      title: "Dírithe ar Java, forbairt gréasáin, agus fás leanúnach",
      body:
        "Tá suim mhór agam sa teicneolaíocht ó bhí mé óg, agus ba mhinic a tháinig daoine i mo phobal chugam chun cabhair a fháil le fadhbanna ríomhaireachta agus leictreonaice. Dá bharr sin, d'fhorbair mé paisean do réiteach fadhbanna agus d'fhabhtcheartú. Le breis agus cúig bliana de thaithí sa réimse agus céim TF agam, tá mo scileanna teicniúla agus comhoibritheacha forbartha agam trí thionscadail acadúla agus taithí sa saol oibre, lena n-áirítear m'intéirneacht le Microsoft. Táim ar bís anois mo chuid scileanna a chur i bhfeidhm i dtimpeallacht ghairmiúil dhinimiciúil agus leanúint de mo shaineolas mar Innealtóir Bogearraí a leathnú.",
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
        "Táim ar fáil le haghaidh oibre faoi láthair agus fáiltím roimh dheiseanna fostaíochta i bhforbairt bogearraí, comhoibriú ar thionscadail agus naisc ghairmiúla.",
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
      eyebrow: "",
      name: "Douglas Vinicius Dierings",
      role: "Engenheiro de Software",
      intro:
        "Apaixonado por tecnologia desde cedo, concluí recentemente o bacharelado com honras de primeira classe em Computação e TI. Gosto de resolver problemas, criar soluções práticas e ampliar continuamente minhas habilidades técnicas.",
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
        "Sou fascinado por tecnologia desde cedo e me tornei a pessoa a quem minha comunidade recorria para resolver problemas com computadores e aparelhos eletrônicos. Com isso, desenvolvi uma paixão por solucionar problemas e identificar falhas. Com mais de cinco anos de experiência na área e formação em TI, aperfeiçoei habilidades técnicas e colaborativas por meio de projetos acadêmicos e experiências profissionais, incluindo meu estágio na Microsoft. Agora, quero aplicar minhas habilidades em um ambiente profissional dinâmico e continuar ampliando meus conhecimentos como Engenheiro de Software.",
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
            "Um app Android para gerenciar treinamentos de funcionários em vários locais de trabalho, com autenticação Firebase, armazenamento no Realtime Database e fluxos móveis para integração e verificações mensais de treinamento.",
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
        "Estou atualmente aberto a propostas de trabalho e oportunidades em desenvolvimento de software, colaborações em projetos e conexões profissionais.",
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
      eyebrow: "",
      name: "Douglas Vinicius Dierings",
      role: "Ingeniero de software",
      intro:
        "Apasionado por la tecnología desde temprana edad, recientemente me gradué con honores de primera clase en la Licenciatura en Ciencias (con honores) en Computación y TI. Disfruto resolviendo problemas, creando soluciones prácticas y ampliando continuamente mis habilidades técnicas.",
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
        "La tecnología me ha fascinado desde pequeño y me convertí en la persona a la que acudía mi comunidad para resolver problemas informáticos y de dispositivos electrónicos. Así desarrollé una pasión por la resolución de problemas y el diagnóstico de fallos. Con más de cinco años de experiencia en el sector y como graduado en TI, he perfeccionado mis habilidades técnicas y de colaboración mediante proyectos académicos y experiencias profesionales, incluidas mis prácticas en Microsoft. Ahora quiero aplicar mis habilidades en un entorno profesional dinámico mientras continúo ampliando mis conocimientos como Ingeniero de software.",
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
            "Una app Android para gestionar la formación de empleados en varios centros de trabajo, con autenticación de Firebase, almacenamiento en Realtime Database y flujos móviles para la incorporación y las verificaciones mensuales de formación.",
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
        "Actualmente estoy abierto a trabajar y acepto oportunidades laborales en desarrollo de software, colaboraciones en proyectos y contactos profesionales.",
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
      eyebrow: "",
      name: "Douglas Vinicius Dierings",
      role: "Softwareentwickler",
      intro:
        "Schon früh entwickelte ich eine Leidenschaft für Technologie. Vor Kurzem habe ich meinen Bachelor of Science (Honours) in Computing und IT mit der Bestnote „First Class Honours“ abgeschlossen. Ich löse gerne Probleme, entwickle praxisnahe Lösungen und erweitere kontinuierlich meine technischen Fähigkeiten.",
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
        "Technologie fasziniert mich seit meiner Kindheit, und in meinem Umfeld wurde ich zur ersten Anlaufstelle bei Problemen mit Computern und elektronischen Geräten. Dadurch entwickelte ich eine Leidenschaft für Problemlösung und Fehlerdiagnose. Mit mehr als fünf Jahren Erfahrung in diesem Bereich und einem IT-Abschluss habe ich meine technischen Fähigkeiten und meine Teamkompetenz durch akademische Projekte und praktische Erfahrungen weiterentwickelt, darunter mein Praktikum bei Microsoft. Nun möchte ich meine Fähigkeiten in einem dynamischen, professionellen Umfeld einsetzen und gleichzeitig mein Fachwissen als Softwareentwickler weiter ausbauen.",
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
            "Ein Java-Steuerrechner-Prototyp zur Schätzung irischer PAYE-, USC- und PRSI-Verbindlichkeiten mit Anmeldung, Registrierung, Profilabläufen und in MySQL gespeicherten Steuerdatensätzen der Nutzer.",
        },
      ],
    },
    contact: {
      eyebrow: "Kontakt aufnehmen",
      title: "Lassen Sie uns etwas Nützliches entwickeln",
      description:
        "Ich bin derzeit offen für eine neue Stelle und freue mich über Jobangebote in der Softwareentwicklung, Projektkooperationen und berufliche Kontakte.",
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
