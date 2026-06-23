"use client";

import { useState } from "react";
import { LanguageSelector } from "@/components/LanguageSelector";
import type { Locale, Translation } from "@/types/i18n";

type NavbarProps = {
  currentLocale: Locale;
  languageLabels: Record<Locale, string>;
  nav: Translation["nav"];
  onLocaleChange: (locale: Locale) => void;
};

const navLinks = [
  { href: "#home", key: "home" },
  { href: "#about", key: "about" },
  { href: "#projects", key: "projects" },
  { href: "#contact", key: "contact" },
] as const;

export function Navbar({
  currentLocale,
  languageLabels,
  nav,
  onLocaleChange,
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuLabel = isOpen ? nav.close : nav.menu;

  return (
    <header className="site-header">
      <div className="nav-inner">
        <a className="brand-mark" href="#home" onClick={() => setIsOpen(false)}>
          <span>DV</span>
        </a>

        <nav className={`nav-links ${isOpen ? "is-open" : ""}`} aria-label="Main">
          {navLinks.map((link) => (
            <a key={link.key} href={link.href} onClick={() => setIsOpen(false)}>
              {nav[link.key]}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <LanguageSelector
            currentLocale={currentLocale}
            labels={languageLabels}
            onLocaleChange={onLocaleChange}
          />

          <button
            aria-expanded={isOpen}
            aria-label={menuLabel}
            className="menu-toggle"
            type="button"
            onClick={() => setIsOpen((current) => !current)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
