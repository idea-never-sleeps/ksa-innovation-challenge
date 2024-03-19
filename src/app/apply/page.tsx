import ApplyClientPage from './open';
import BeforePage from './before';
import { redirect } from 'next/navigation';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const now = new Date();
  const target = new Date('2024-04-01T00:00:00+09:00');
  const end = new Date('2024-04-06T00:00:00+09:00');

  if (now.getTime() >= end.getTime()) {
    return {
      title: 'KSA Innovation Challenge 2024',
      description: 'Idea Never Sleeps.',
      openGraph: {
        siteName: 'KSA Innovation Challenge 2024',
        title: 'KSA Innovation Challenge 2024',
        description: 'Idea Never Sleeps.',
        type: 'website',
        url: process.env.CONTEXT==='production' ? 'https://kic2024.org' : process.env.DEPLOY_URL || 'https://kic2024.org',
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
  }

  if (now.getTime() >= target.getTime()) {
    return {
      title: '신청하기 - KSA Innovation Challenge 2024',
      description: 'KSA Innovation Challenge 2024에 참가하세요.',
      openGraph: {
        siteName: 'KSA Innovation Challenge 2024',
        title: '신청하기 - KSA Innovation Challenge 2024',
        description: 'KSA Innovation Challenge 2024에 참가하세요.',
        type: 'website',
        url: `${process.env.CONTEXT==='production' ? 'https://kic2024.org' : process.env.DEPLOY_URL || 'https://kic2024.org'}/apply` || 'https://kic2024.org/apply',
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
  } else {
    return {
      title: 'Countdown - KSA Innovation Challenge 2024',
      description: 'Idea Never Sleeps.',
      openGraph: {
        siteName: 'KSA Innovation Challenge 2024',
        title: 'Countdown - KSA Innovation Challenge 2024',
        description: 'Idea Never Sleeps.',
        type: 'website',
        url: `${process.env.CONTEXT==='production' ? 'https://kic2024.org' : process.env.DEPLOY_URL || 'https://kic2024.org'}/apply`,
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
  }
}

export default function ApplyPage() {
  const now = new Date();
  const target = new Date('2024-04-01T00:00:00+09:00');
  const end = new Date('2024-04-06T00:00:00+09:00');

  if (now.getTime() >= end.getTime()) {
    redirect('/');
  }

  if (now.getTime() >= target.getTime()) {
    return <ApplyClientPage />;
  } else {
    return <BeforePage />;
  }
}
