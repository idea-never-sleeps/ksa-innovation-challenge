import type { Metadata } from 'next';
import { wanted_sans } from '@/lib/fonts';
import StyledComponentsRegistry from '@/lib/registry';
import './styles.css'

export const metadata: Metadata = {
  title: 'KSA Innovation Challenge 2024',
  description: 'KIC, Where passion meets purpose.',
  metadataBase: new URL('https://innovation-challenge.cloud.algorix.io'),
  openGraph: {
    siteName: 'KSA Innovation Challenge 2024',
    title: 'KSA Innovation Challenge 2024',
    description: 'KIC, Where passion meets purpose.',
    type: 'website',
    url: 'https://innovation-challenge.cloud.algorix.io',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'KSA Innovation Challenge 2024'
      }
    ]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={wanted_sans.className} style={{ margin: 0, padding: 0 }}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
