"use client";

import { useEffect, useRef, useState } from "react";
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
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollYRef = useRef(0);
  const menuLabel = isOpen ? nav.close : nav.menu;

  useEffect(() => {
    lastScrollYRef.current = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const nearTop = currentScrollY < 24;
      const scrollDelta = currentScrollY - lastScrollYRef.current;

      if (nearTop) {
        setIsVisible(true);
        lastScrollYRef.current = currentScrollY;
        return;
      }

      if (Math.abs(scrollDelta) < 6) {
        return;
      }

      setIsVisible(scrollDelta < 0);
      lastScrollYRef.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    }
  }, [isOpen]);

  return (
    <header className={`site-header ${isVisible ? "" : "is-hidden"}`}>
      <div className="nav-inner">
        <nav
          className={`nav-links ${isOpen ? "is-open" : ""}`}
          aria-label={nav.mainLabel}
          id="site-navigation"
        >
          {navLinks.map((link) => (
            <a key={link.key} href={link.href} onClick={() => setIsOpen(false)}>
              {nav[link.key]}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <LanguageSelector
            currentLocale={currentLocale}
            label={nav.languageLabel}
            labels={languageLabels}
            onLocaleChange={(locale) => {
              onLocaleChange(locale);
              setIsOpen(false);
            }}
          />

          <button
            aria-controls="site-navigation"
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
