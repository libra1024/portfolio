import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import SiteDocument from '../../components/SiteDocument';

export const metadata: Metadata = {
  title: 'Portafolio | libra1024',
  description: 'Portfolio of libra1024',
  icons: { icon: { url: '/favicon.ico', type: 'image/x-icon' } },
};

export default function SpanishLayout({ children }: { children: ReactNode }) {
  return <SiteDocument lang="es">{children}</SiteDocument>;
}
