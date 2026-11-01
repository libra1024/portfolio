import { getTranslations, type Language } from '../i18n/utils';
import { cvData } from '../data/cv';
import SectionHeading from './SectionHeading';

export default function Courses({ lang }: { lang: Language }) {
  const t = getTranslations(lang);

  return (
    <article id="courses" className="bento-card h-full">
      <SectionHeading title={t('section.courses')} highlight={/(Courses|Cursos)/g} className="text-xl font-bold mb-6" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {cvData[lang].courses.map(course => (
          <a key={course.url} href={course.url} target="_blank" rel="noopener noreferrer" className="block bg-[var(--fog-50)] border border-[var(--dust-stroke)] p-4 rounded-xl hover:border-[var(--brand)] transition-colors group">
            <div className="flex justify-between items-start mb-1">
              <h3 className="text-sm font-semibold text-[var(--ink)] group-hover:text-[var(--brand)] transition-colors pr-2 leading-tight">{course.name}</h3>
            </div>
            <div className="flex items-center justify-between mt-3">
              <span className="text-[10px] font-medium bg-[var(--fog-100)] border border-[var(--dust-stroke)] text-[var(--ink)] opacity-70 px-2 py-0.5 rounded-full whitespace-nowrap">{course.date}</span>
              <svg className="w-3.5 h-3.5 text-[var(--brand)] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </a>
        ))}
      </div>
    </article>
  );
}
