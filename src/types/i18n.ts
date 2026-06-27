export type Locale = "en" | "ga" | "pt-BR" | "es" | "de";

export type ProjectTranslation = {
  id: "task-manager" | "portfolio" | "api-service";
  title: string;
  description: string;
};

export type Translation = {
  languageName: string;
  nav: {
    home: string;
    about: string;
    projects: string;
    contact: string;
    menu: string;
    close: string;
    mainLabel: string;
    languageLabel: string;
  };
  hero: {
    eyebrow: string;
    name: string;
    role: string;
    intro: string;
    primaryButton: string;
    secondaryButton: string;
    githubLabel: string;
    linkedInLabel: string;
    emailLabel: string;
    socialLinksLabel: string;
    actionsLabel: string;
    profileLabel: string;
  };
  about: {
    eyebrow: string;
    title: string;
    body: string;
    highlights: string[];
  };
  projects: {
    eyebrow: string;
    title: string;
    cardsLabel: string;
    tagsLabel: string;
    linkLabel: string;
    items: ProjectTranslation[];
  };
  contact: {
    eyebrow: string;
    title: string;
    description: string;
    linksLabel: string;
    emailLabel: string;
    emailDescription: string;
    linkedInLabel: string;
    linkedInDescription: string;
    githubLabel: string;
    githubDescription: string;
  };
};
