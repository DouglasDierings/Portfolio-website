"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { defaultLocale, translations } from "@/data/translations";
import type { Locale } from "@/types/i18n";

const languageLabels = Object.fromEntries(
  Object.entries(translations).map(([locale, translation]) => [
    locale,
    translation.languageName,
  ]),
) as Record<Locale, string>;

const heroLinks = {
  github: "https://github.com/DouglasDierings",
  linkedIn: "https://www.linkedin.com/",
  email: "mailto:example@email.com",
};

export default function Home() {
  const [locale, setLocale] = useState<Locale>(defaultLocale);
  const t = translations[locale];

  return (
    <main className="site-shell">
      <Navbar
        currentLocale={locale}
        languageLabels={languageLabels}
        nav={t.nav}
        onLocaleChange={setLocale}
      />

      <section className="section section-hero" id="home">
        <div className="section-inner hero-layout">
          <div className="hero-copy">
            <p className="eyebrow">{t.hero.eyebrow}</p>
            <h1>{t.hero.name}</h1>
            <p className="role-line">{t.hero.role}</p>
            <p className="lead">{t.hero.intro}</p>
            <div className="button-row" aria-label={t.hero.actionsLabel}>
              <a className="button button-primary" href="#projects">
                {t.hero.primaryButton}
              </a>
              <a className="button button-secondary" href="#contact">
                {t.hero.secondaryButton}
              </a>
            </div>
            <div className="social-row" aria-label={t.hero.socialLinksLabel}>
              <a href={heroLinks.github} rel="noreferrer" target="_blank">
                {t.hero.githubLabel}
              </a>
              <a href={heroLinks.linkedIn} rel="noreferrer" target="_blank">
                {t.hero.linkedInLabel}
              </a>
              <a href={heroLinks.email}>{t.hero.emailLabel}</a>
            </div>
          </div>

          <div className="profile-preview" aria-label={t.hero.profileLabel}>
            <div className="profile-card">
              <div className="profile-ring">
                <span>DV</span>
              </div>
              <div className="profile-status">
                <span aria-hidden="true" />
                <p>{t.hero.profileStatus}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="about">
        <div className="section-inner section-grid about-grid">
          <div className="about-heading">
            <p className="eyebrow">{t.about.eyebrow}</p>
            <h2>{t.about.title}</h2>
          </div>
          <div className="surface-panel about-panel">
            <p className="about-copy">{t.about.body}</p>
            <div className="about-highlights" aria-label={t.about.eyebrow}>
              {t.about.highlights.map((highlight) => (
                <span key={highlight}>{highlight}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section-muted" id="projects">
        <div className="section-inner">
          <div className="section-heading">
            <p className="eyebrow">{t.projects.eyebrow}</p>
            <h2>{t.projects.title}</h2>
          </div>
          <div className="card-grid" aria-label={t.projects.cardsLabel}>
            {projects.map((project) => {
              const content = t.projects.items.find(
                (item) => item.id === project.id,
              );

              if (!content) {
                return null;
              }

              return (
                <ProjectCard
                  description={content.description}
                  key={project.id}
                  linkLabel={t.projects.linkLabel}
                  project={project}
                  tagsLabel={t.projects.tagsLabel}
                  title={content.title}
                />
              );
            })}
          </div>
        </div>
      </section>

      <section className="section" id="contact">
        <div className="section-inner contact-band">
          <div>
            <p className="eyebrow">{t.contact.eyebrow}</p>
            <h2>{t.contact.title}</h2>
          </div>
          <a className="button button-primary" href="mailto:example@email.com">
            {t.contact.button}
          </a>
        </div>
      </section>
    </main>
  );
}
