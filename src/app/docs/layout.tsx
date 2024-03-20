import MakrdownProvider from '@/components/markdown-provider';

export default function PrivacyLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return <MakrdownProvider showBackground={false}>{children}</MakrdownProvider>;
}
