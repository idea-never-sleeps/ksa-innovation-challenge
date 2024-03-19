'use server';

export default function getUrl(): string {
  if (process.env.CONTEXT === 'production') {
    return 'https://kic2024.org'
  } else {
    return process.env.DEPLOY_URL || 'https://kic2024.org'
  }
}