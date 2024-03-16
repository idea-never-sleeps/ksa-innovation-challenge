'use client';

import styled from 'styled-components';
import Image from 'next/image';

export default function PrivacyLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <RootContainer>
      <BackgroundVector
        fill={true}
        src="/bg.svg"
        alt="background"
        sizes="100vh"
      />
      <BackgroundColor />
      <Container>{children}</Container>
    </RootContainer>
  );
}

const RootContainer = styled.div`
  position: relative;
  overflow: hidden;
`;

const Container = styled.div`
  color: #fff;
  padding: 40px 60px;
  height: calc(100vh - 80px);
  overflow-y: scroll;
`;

const BackgroundColor = styled.div`
  position: absolute;
  z-index: -2;
  width: 100vw;
  height: 100vh;
  background-color: #000;
`;

const BackgroundVector = styled(Image)`
  z-index: -1;
  position: absolute;
  stroke-width: 1.085px;
  stroke: #fff;
  opacity: 0.58;
  object-fit: cover;
`;
