'use client';

import styled from 'styled-components';

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return <Container>{children}</Container>;
}

const Container = styled.div`
  padding: 40px 60px;
`;
