import type { Metadata } from 'next';
import { DM_Sans, Manrope } from 'next/font/google';
import './globals.css';

const bodyFont = DM_Sans({ variable: '--font-body', subsets: ['latin'] });
const displayFont = Manrope({ variable: '--font-display', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Pierre Travers · Développeur Front-End Angular',
  description: 'Portfolio de Pierre Travers, développeur Front-End Angular spécialisé en TypeScript, RxJS, architecture, performance et accessibilité.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fr"><body className={`${bodyFont.variable} ${displayFont.variable}`}>{children}</body></html>;
}
