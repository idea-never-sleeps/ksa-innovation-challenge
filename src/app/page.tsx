'use client';

import styled from 'styled-components';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Home() {
  const [time, setTime] = useState('');

  const calculateTimeLeft = () => {
    const now = new Date();
    const target = new Date('2024-03-31T23:59:00');

    const diff = target.getTime() - now.getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    // add leading zero
    const pad = (n: number) => (n < 10 ? `0${n}` : n);

    return `${pad(days)}:${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setTime(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  }, [time]);

  return (
    <RootContainer>
      <Container>
        <Section className="between top">
          <Title>
            2024 KSA
            <br />
            Innovation Challenge
          </Title>
          <Description>
            2024. 03. 31. 23:59
            <br />
            Application From Open
          </Description>
        </Section>
        <Section>
          <Countdown>{time}</Countdown>
        </Section>
        <Section>
          <Image
            src="/oyunkwonisgod.svg"
            alt="KSA/KAIST/과학기술정보통신부 로고"
            width={400}
            height={80}
          />
        </Section>
      </Container>
    </RootContainer>
  );
}

const RootContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  background: linear-gradient(30deg, #000000, #0400db);
`;

const Container = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: calc(100vh - 200px);
  padding-top: 100px;
  padding-bottom: 100px;
`;

const Section = styled.div`
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;

  &.top {
    align-items: start;
  }

  &.between {
    justify-content: space-between;
  }
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: bold;
  margin: 0;
`;

const Description = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: end;
  text-align: right;
  font-size: 20px;
  margin: 0;
`;

const Countdown = styled.div`
  font-size: 80px;
  font-weight: 700;
  opacity: 0.5;
  margin: 0;
`;
