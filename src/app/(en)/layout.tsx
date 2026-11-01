import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import SiteDocument from '../../components/SiteDocument';

export const metadata: Metadata = {
  title: 'Portfolio | libra1024',
  description: 'Portfolio of libra1024',
  icons: { icon: { url: '/favicon.ico', type: 'image/x-icon' } },
};

export default function EnglishLayout({ children }: { children: ReactNode }) {
  return <SiteDocument lang="en">{children}</SiteDocument>;
}
