'use client';

import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';

export default function Timer() {
  const [time, setTime] = useState('');
  const [leftTime, setLeftTime] = useState('');

  const pad = (n: number) => (n < 10 ? `0${n}` : n);

  useEffect(() => {
    const timer = setTimeout(() => {
      const missiononeEnd = new Date('2024-05-06T00:00:00+09:00');
      const missiontwoEnd = new Date('2023-05-06T19:00:00+09:00');

      const now = new Date();
      const diff = missiononeEnd.getTime() - now.getTime();
      if (diff < 0) {
        const diff2 = missiontwoEnd.getTime() - now.getTime();
        if (diff2 < 0) {
          setLeftTime('Mission 2 종료');
        } else {
          const hours = Math.floor(diff2 / (1000 * 60 * 60));
          const minutes = Math.floor((diff2 % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((diff2 % (1000 * 60)) / 1000);
          setLeftTime(
            `Mission 2 제출까지 ${pad(hours)}시간 ${pad(minutes)}분 ${pad(seconds)}초`
          );
        }
      }
      // hour is over 24hrs
      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      setLeftTime(
        `Mission 1 제출까지 ${pad(hours)}시간 ${pad(minutes)}분 ${pad(seconds)}초`
      );

      // currnet time to 'XX시 XX분 XX초'
      const hours2 = now.getHours();
      const minutes2 = now.getMinutes();
      const seconds2 = now.getSeconds();
      setTime(`${pad(hours2)}시 ${pad(minutes2)}분 ${pad(seconds2)}초`);
    }, 1000);
    return () => clearTimeout(timer);
  }, [time]);
  return (
    <Container>
      <TopContainer>
        <Image src="/white.svg" alt="logo" width="480" height="400" />
      </TopContainer>
      <div>
        <span className='clock'>{time}</span>
        <br />
        <span>{leftTime}</span>
      </div>
      <BottomContainer>
        <BottomContent>
          <Image src="/ksa.svg" alt="missionone" width="210" height="60" />
          <span>2024 KIC 추진단</span>
          <Image src="/kaist.svg" alt="kaist" width="200" height="50" />
          <Image src="/ict.svg" alt="ict" width="250" height="50" />
        </BottomContent>
      </BottomContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background: #000;
  color: #fff;

  & > div {

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }

  & > div > span {
    &.clock {
      font-size: 100px;
      font-weight: 900;
    }
    text-align: center;
    font-size: 60px;
    font-weight: 600;
  }
`;

const TopContainer = styled.div`
  height: 500px;
  width: 50%;
  position: absolute;
  top: -7%;
`;

const BottomContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 80%;
  margin: 0 auto;
  margin-bottom: 50px;
`;

const BottomContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  height: 50px;
  position: relative;

  & > span {
    position: relative;
    font-size: 30px;
    font-weight: 700;
  }
  & > Image {
    position: relative;
  }
`;
