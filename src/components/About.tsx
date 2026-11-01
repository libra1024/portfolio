import { getTranslations, type Language } from '../i18n/utils';
import { cvData } from '../data/cv';
import SectionHeading from './SectionHeading';

export default function About({ lang }: { lang: Language }) {
  const t = getTranslations(lang);

  return (
    <article id="about" className="bento-card h-full flex flex-col justify-center">
      <SectionHeading title={t('section.about')} highlight={/(Me|Mí)/g} className="text-xl font-bold mb-4" />
      <p className="text-sm md:text-base leading-relaxed text-[var(--ink)] opacity-80">
        {cvData[lang].about}
      </p>
    </article>
  );
}
