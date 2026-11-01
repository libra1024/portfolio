import type { ReactNode } from 'react';
import type { Language } from '../i18n/utils';
import { initialPreferencesScript } from '../lib/preferences';
import '../styles/global.css';

export default function SiteDocument({ children, lang }: { children: ReactNode; lang: Language }) {
  return (
    <html lang={lang} className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <script dangerouslySetInnerHTML={{ __html: initialPreferencesScript }} />
      </head>
      <body className="font-sans antialiased min-h-screen flex flex-col relative overflow-x-hidden">
        <div className="fixed inset-0 pointer-events-none z-[-1]" aria-hidden="true">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[var(--brand)] opacity-20 blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] rounded-full bg-purple-500 opacity-20 blur-[120px]" />
        </div>
        {children}
      </body>
    </html>
  );
}
