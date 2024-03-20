'use client';

import styled from 'styled-components';
import Image from 'next/image';

export default function MakrdownProvider({
  children,
  showBackground = true
}: {
  children: React.ReactNode;
  showBackground?: boolean;
}) {
  return (
    <RootContainer>
      <BackgroundVector
        fill={true}
        src="/bg.svg"
        alt="background"
        sizes="100vh"
        $show={showBackground}
      />
      <BackgroundColor />
      <Container>{children}</Container>
    </RootContainer>
  );
}

const RootContainer = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  color: #fff;
  font-size: 14px;
  padding: 40px;
  width: 1200px;
  box-sizing: border-box;
  height: 100vh;
  height: 100svh;
  overflow-y: scroll;
  line-height: 1.5;
`;

const BackgroundColor = styled.div`
  position: absolute;
  z-index: -2;
  width: 100vw;
  height: 100vh;
  background-color: #000;
`;

const BackgroundVector = styled(Image)<{ $show: boolean }>`
  display: ${({ $show }) => ($show ? 'block' : 'none')};
  z-index: -1;
  position: absolute;
  stroke-width: 1.085px;
  stroke: #fff;
  opacity: 0.58;
  object-fit: cover;
`;
