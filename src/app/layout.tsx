import type { Metadata } from 'next';
import localFont from 'next/font/local';
import StyledComponentsRegistry from '@/lib/registry';

export const metadata: Metadata = {
  title: 'KSA Innovation Challenge 2024',
  description: 'Slogan comes here'
};

const wanted_sans = localFont({
  src: '../asset/fonts/WantedSansVariable.woff2'
});

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
