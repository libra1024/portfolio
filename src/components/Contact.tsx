import { getTranslations, type Language } from '../i18n/utils';
import { cvData } from '../data/cv';
import SectionHeading from './SectionHeading';

export default function Contact({ lang }: { lang: Language }) {
  const t = getTranslations(lang);

  return (
    <article id="contact" className="bento-card h-full flex flex-col items-center justify-center text-center relative overflow-hidden group">
      <div className="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-t from-[var(--brand)] to-transparent opacity-5 group-hover:opacity-10 transition-opacity" />
      <SectionHeading title={t('section.contact')} highlight={/(Touch|Contacto)/g} className="text-xl font-bold mb-4 z-10" />
      <p className="text-sm md:text-base text-[var(--ink)] opacity-80 mb-6 z-10">{t('contact.text')}</p>
      <a href={cvData[lang].contact.linkedin} target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-2 rounded-lg bg-[var(--ink)] text-[var(--bg-color)] font-medium hover:opacity-90 transition-opacity shadow-md text-sm z-10">
        {t('contact.btn')}
      </a>
    </article>
  );
}
