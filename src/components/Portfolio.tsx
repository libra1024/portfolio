import type { Language } from '../i18n/utils';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Experience from './Experience';
import Skills from './Skills';
import Courses from './Courses';
import Contact from './Contact';

export default function Portfolio({ lang }: { lang: Language }) {
  return (
    <>
      <Header lang={lang} />
      <main className="flex-grow pt-28 pb-16 px-4 md:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-auto">
          <div className="md:col-span-2 lg:col-span-2 lg:row-span-2"><Hero lang={lang} /></div>
          <div className="md:col-span-1 lg:col-span-2"><About lang={lang} /></div>
          <div className="md:col-span-3 lg:col-span-2 lg:row-span-3"><Experience lang={lang} /></div>
          <div className="md:col-span-3 lg:col-span-2"><Skills lang={lang} /></div>
          <div className="md:col-span-2 lg:col-span-2"><Courses lang={lang} /></div>
          <div className="md:col-span-1 lg:col-span-4"><Contact lang={lang} /></div>
        </div>
      </main>
    </>
  );
}
