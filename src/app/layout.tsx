import type { Metadata, Viewport } from 'next';
import { wanted_sans } from '@/lib/fonts';
import StyledComponentsRegistry from '@/lib/registry';
import './styles.css';
import 'normalize.css/normalize.css';
import { GoogleAnalytics } from '@next/third-parties/google';

export const metadata: Metadata = {
  title: 'KSA Innovation Challenge 2024',
  description: 'Idea Never Sleeps.',
  metadataBase: new URL(process.env.DEPLOY_URL || 'https://kic2024.org'),
  openGraph: {
    siteName: 'KSA Innovation Challenge 2024',
    title: 'KSA Innovation Challenge 2024',
    description: 'Idea Never Sleeps.',
    type: 'website',
    url: process.env.DEPLOY_URL || 'https://kic2024.org',
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

export const viewport: Viewport = {
  themeColor: '#000000'
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
        <GoogleAnalytics gaId="G-S7W58FGP2P" />
      </body>
    </html>
  );
}
