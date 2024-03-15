import type { Metadata } from 'next';
import { wanted_sans } from '@/lib/fonts';
import StyledComponentsRegistry from '@/lib/registry';

export const metadata: Metadata = {
  title: 'KSA Innovation Challenge 2024',
  description: 'KIC, Where passion meets purpose.',
  openGraph: {
    title: 'KSA Innovation Challenge 2024',
    description: 'KIC, Where passion meets purpose.',
    type: 'website',
    locale: 'ko_KR',
    url: 'https://innovation.migi.kim',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'KSA Innovation Challenge 2024'
      }
    ]
  },
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
