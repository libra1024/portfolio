import { getTranslations, type Language } from '../i18n/utils';
import { cvData } from '../data/cv';

export default function Hero({ lang }: { lang: Language }) {
  const t = getTranslations(lang);
  const data = cvData[lang];

  return (
    <article id="hero" className="bento-card flex flex-col justify-center h-full relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--brand)] opacity-10 rounded-full blur-3xl group-hover:opacity-30 transition-opacity duration-500" />
      <div className="relative z-10">
        <div className="inline-block px-3 py-1 rounded-full bg-[var(--fog-100)] border border-[var(--dust-stroke)] text-xs font-semibold text-[var(--ink)] opacity-80 mb-6">
          {t('hero.available')}
        </div>
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-[var(--ink)] mb-4">
          {t('hero.title1')} <br />
          <span className="text-[var(--brand)]">{t('hero.title2')}</span>
        </h1>
        <p className="text-sm md:text-base text-[var(--ink)] opacity-70 mb-8 max-w-xl">
          {data.about.split('.')[0]}.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <a href="#contact" className="px-6 py-2 rounded-lg bg-[var(--brand)] text-white font-medium hover:opacity-90 transition-opacity text-center text-sm">{t('hero.cta')}</a>
          <a href="#experience" className="px-6 py-2 rounded-lg bg-[var(--bg-color)] text-[var(--ink)] border border-[var(--dust-stroke)] font-medium hover:bg-[var(--fog-50)] transition-colors text-center text-sm">{t('hero.viewWork')}</a>
        </div>
      </div>
    </article>
  );
}
