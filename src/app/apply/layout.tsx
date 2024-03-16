import ApplyClientPage from "./page";

export const metadata = {
  title: '지원하기 - KSA Innovation Challenge 2024',
  description: 'KIC, Where passion meets purpose.',
  openGraph: {
    siteName: 'KSA Innovation Challenge 2024',
    title: '지원하기 - KSA Innovation Challenge 2024',
    description: 'KSA Innovation Challenge 2024에 지원하세요.',
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

export default function ApplyLayout({children}: {children: React.ReactNode}) {
  return children;
}
