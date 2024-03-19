export default function getUrl() {
  if (process.env.CONTEXT === 'production') {
    return 'https://kic2024.org'
  } else {
    return process.env.DEPLOY_URL
  }
}