import { getTranslations, type Language } from '../i18n/utils';
import { cvData } from '../data/cv';
import SectionHeading from './SectionHeading';

export default function Skills({ lang }: { lang: Language }) {
  const t = getTranslations(lang);

  return (
    <article id="skills" className="bento-card h-full">
      <SectionHeading title={t('section.skills')} highlight={/(Skills|Clave)/g} className="text-xl font-bold mb-6" />
      <div className="space-y-5">
        {cvData[lang].skills.map(category => (
          <div key={category.label}>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--brand)] mb-2">{category.label}</h3>
            <div className="flex flex-wrap gap-2">
              {category.items.map(skill => (
                <span key={skill} className="bg-[var(--fog-50)] border border-[var(--dust-stroke)] px-3 py-1.5 rounded-lg text-xs md:text-sm font-medium text-[var(--ink)] hover:border-[var(--brand)] hover:text-[var(--brand)] transition-colors cursor-default">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}
