'use client';

import { useEffect, useState } from 'react';
import { getTranslations, type Language } from '../i18n/utils';

const sections = ['about', 'skills', 'experience', 'courses', 'contact'] as const;

export default function Header({ lang }: { lang: Language }) {
  const t = getTranslations(lang);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const homePath = lang === 'en' ? '/' : '/es/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  function toggleTheme() {
    const dark = document.documentElement.classList.toggle('dark');
    try {
      localStorage.setItem('theme', dark ? 'dark' : 'light');
    } catch {
      // The theme still works when browser storage is unavailable.
    }
  }

  function selectLanguage() {
    setMenuOpen(false);
    try {
      localStorage.setItem('lang_redirected', 'true');
    } catch {
      // Language links work independently of browser storage.
    }
  }

  return (
    <header id="header" className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-[var(--bg-color)]/80 backdrop-blur-md border-b ${scrolled ? 'border-[var(--dust-stroke)] shadow-sm py-3' : 'border-transparent py-4'}`}>
      <nav className="max-w-6xl mx-auto px-4 md:px-8 flex justify-between items-center relative">
        <div className="font-bold text-2xl text-[var(--ink)] tracking-tight">RH</div>
        <button id="mobile-menu-btn" type="button" className="md:hidden p-2 text-[var(--ink)]" aria-label="Menu" aria-expanded={menuOpen} aria-controls="nav-menu" onClick={() => setMenuOpen(open => !open)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <ul id="nav-menu" className={`absolute md:relative top-full left-0 w-full md:w-auto bg-[var(--bg-color)] md:bg-transparent border-b md:border-none border-[var(--dust-stroke)] ${menuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row items-center gap-4 md:gap-8 p-4 md:p-0 shadow-lg md:shadow-none list-none`}>
          {sections.map(section => (
            <li key={section}>
              <a href={`${homePath}#${section}`} onClick={() => setMenuOpen(false)} className="text-sm font-medium text-[var(--ink)] opacity-70 hover:opacity-100 hover:text-[var(--brand)] transition-colors block py-2 md:py-0">{t(`nav.${section}`)}</a>
            </li>
          ))}
          <li className="md:pl-4 md:border-l border-[var(--dust-stroke)] flex items-center py-2 md:py-0">
            <div className="relative flex items-center bg-[var(--fog-100)] rounded-full p-1 border border-[var(--dust-stroke)] shadow-inner">
              <div className={`absolute h-[24px] w-[36px] bg-[var(--bg-color)] rounded-full shadow-sm transition-transform duration-300 ease-in-out border border-[var(--dust-stroke)] ${lang === 'en' ? 'translate-x-0' : 'translate-x-[36px]'}`} />
              <a href="/" hrefLang="en" lang="en" aria-current={lang === 'en' ? 'page' : undefined} onClick={selectLanguage} className={`relative z-10 flex items-center justify-center h-[24px] w-[36px] text-[10px] font-bold transition-colors ${lang === 'en' ? 'text-[var(--brand)]' : 'text-[var(--ink)] opacity-60 hover:opacity-100'}`}>EN</a>
              <a href="/es/" hrefLang="es" lang="es" aria-current={lang === 'es' ? 'page' : undefined} onClick={selectLanguage} className={`relative z-10 flex items-center justify-center h-[24px] w-[36px] text-[10px] font-bold transition-colors ${lang === 'es' ? 'text-[var(--brand)]' : 'text-[var(--ink)] opacity-60 hover:opacity-100'}`}>ES</a>
            </div>
          </li>
          <li className="py-2 md:py-0">
            <button id="theme-toggle" type="button" onClick={toggleTheme} className="p-2 rounded-full hover:bg-[var(--fog-100)] transition-colors text-[var(--ink)] opacity-70 hover:opacity-100" aria-label="Toggle Theme">
              <svg id="theme-icon-light" className="w-5 h-5 block dark:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              <svg id="theme-icon-dark" className="w-5 h-5 hidden dark:block" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
