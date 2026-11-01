export const languages = {
  en: 'English',
  es: 'Español',
};

export const defaultLang = 'en';

export type Language = keyof typeof languages;

export const ui = {
  en: {
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.experience': 'Experience',
    'nav.courses': 'Courses',
    'nav.contact': 'Contact',
    'hero.available': 'Available for new opportunities',
    'hero.title1': 'Building Production-Ready',
    'hero.title2': 'Agentic Workflows',
    'hero.cta': 'Get in Touch',
    'hero.viewWork': 'View Work',
    'section.about': 'About Me',
    'section.skills': 'Core Skills',
    'section.experience': 'Professional Experience',
    'section.courses': 'Courses & Certifications',
    'section.contact': 'Get in Touch',
    'contact.text': 'Ready to build something extraordinary? Let\'s connect.',
    'contact.btn': 'Contact me'
  },
  es: {
    'nav.about': 'Sobre mí',
    'nav.skills': 'Habilidades',
    'nav.experience': 'Experiencia',
    'nav.courses': 'Cursos',
    'nav.contact': 'Contacto',
    'hero.available': 'Disponible para nuevas oportunidades',
    'hero.title1': 'Construyendo Flujos de Trabajo',
    'hero.title2': 'Agénticos para Producción',
    'hero.cta': 'Contáctame',
    'hero.viewWork': 'Ver Trabajo',
    'section.about': 'Sobre Mí',
    'section.skills': 'Habilidades Clave',
    'section.experience': 'Experiencia Profesional',
    'section.courses': 'Cursos y Certificaciones',
    'section.contact': 'Ponte en Contacto',
    'contact.text': '¿Listo para construir algo extraordinario? Conectemos.',
    'contact.btn': 'Contáctame'
  },
};

export function getTranslations(lang: Language) {
  return function t(key: keyof typeof ui[typeof defaultLang]): string {
    return ui[lang][key] || ui[defaultLang][key];
  }
}
