import { getTranslations, type Language } from '../i18n/utils';
import { cvData } from '../data/cv';
import SectionHeading from './SectionHeading';

export default function Experience({ lang }: { lang: Language }) {
  const t = getTranslations(lang);
  const data = cvData[lang];

  return (
    <article id="experience" className="bento-card h-full flex flex-col">
      <SectionHeading title={t('section.experience')} highlight={/(Experience|Profesional)/g} className="text-xl font-bold mb-6" />
      <div className="relative border-l border-[var(--dust-stroke)] ml-2 flex-grow">
        {data.experience.map((job, index) => (
          <div key={`${job.company}-${job.period}`} className={`relative pl-6 ${index !== data.experience.length - 1 ? 'pb-8' : ''}`}>
            <div className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full bg-[var(--bg-color)] border border-[var(--brand)] shadow-[0_0_8px_rgba(0,51,255,0.4)]" />
            <h3 className="text-base font-bold text-[var(--ink)]">{job.role}</h3>
            <h4 className="text-[var(--brand)] text-sm font-medium mb-2">
              {job.company}{' '}
              <span className="text-[var(--ink)] opacity-50 font-normal ml-2 text-xs">{job.period}</span>
            </h4>
            <ul className="list-disc list-outside ml-4 mt-2 space-y-1 text-[var(--ink)] opacity-70 leading-relaxed text-xs md:text-sm">
              {job.description.map(item => <li key={item}>{item}</li>)}
            </ul>
            {job.links && (
              <div className="flex flex-wrap gap-3 mt-3">
                {job.links.map(link => (
                  <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-xs font-medium px-3 py-1 bg-[var(--fog-100)] rounded-full border border-[var(--dust-stroke)] text-[var(--ink)] hover:bg-[var(--brand)] hover:text-white transition-colors duration-300">
                    {link.name}
                    <svg className="w-3 h-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </article>
  );
}
