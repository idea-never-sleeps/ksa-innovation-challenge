'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import LandingImage from './image';

export default function LandingPage() {
  const [percentage, setPercentage] = useState(0);
  const [wheelDelta, setWheelDelta] = useState(0);

  const handleWheel = useCallback(
    (e: WheelEvent) => {
      if (wheelDelta < e.deltaY && e.deltaY > 0) {
        setPercentage((prev) => prev + 60);
      }
      setWheelDelta(e.deltaY);
    },
    [wheelDelta]
  );

  const handleTouch = useCallback(
    (e: TouchEvent) => {
      if (wheelDelta < e.touches[0].clientY && e.touches[0].clientY > 0) {
        setPercentage((prev) => prev + 60);
      }
      setWheelDelta(e.touches[0].clientY);
    },
    [wheelDelta]
  );

  useEffect(() => {
    window.addEventListener('wheel', (e) => handleWheel(e as WheelEvent));
    window.addEventListener('touchmove', (e) => handleTouch(e as TouchEvent));
    return () => {
      window.removeEventListener('wheel', (e) => handleWheel(e as WheelEvent));
      window.removeEventListener('touchmove', (e) =>
        handleTouch(e as TouchEvent)
      );
    };
  }, [handleWheel, handleTouch]);

  return (
    <RootContainer>
      <TopContainer>
        <TopTitle>
          KSA
          <br />
          Innovation
          <br />
          Challenge
        </TopTitle>
        <div style={{ position: 'relative', height: '600px', width: '100vw' }}>
          <LandingImage percentage={percentage} />
        </div>
        <BottomContainer>
          <AssocationContainer>
            <span className="title">주최</span>
            <AssociationLogo>
              <Image
                src="/ksa.svg"
                alt="KSA Logo"
                width="114"
                height="30"
                style={{ fill: 'black' }}
              />
            </AssociationLogo>
          </AssocationContainer>
          <AssocationContainer>
            <span className="title">주관</span>
            <span className="content">2024 KIC 추진위원단</span>
          </AssocationContainer>
          <AssocationContainer>
            <span className="title">후원</span>
            <AssociationLogo>
              <Image
                src="/kaist.svg"
                alt="KAIST Logo"
                width="85"
                height="24"
                style={{ fill: 'black' }}
              />
              <Image
                src="/ict.svg"
                alt="과학기술정보통신부 Logo"
                width="124"
                height="24"
                style={{ fill: 'black' }}
              />
            </AssociationLogo>
          </AssocationContainer>
        </BottomContainer>
      </TopContainer>
      {percentage > 90000 && (
        <ContentContainer>
          <h1>Scroll down to see more</h1>
        </ContentContainer>
      )}
    </RootContainer>
  );
}

const RootContainer = styled.div`
  position: relative;
  overflow: hidden;
`;

const TopContainer = styled.div`
  box-sizing: border-box;
  height: 100vh;
  height: 100svh !important;
  width: 100vw;
  position: relative;
  color: #000;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TopTitle = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  margin-top: 20px;
  margin-right: 20px;
  font-weight: 600;
  font-size: 30px;
  text-align: right;
`;

const BottomContainer = styled.div`
  box-sizing: border-box;
  width: 100vw;
  max-width: 1200px;
  margin-bottom: 100px;
  display: flex;
  position: absolute;
  bottom: 0;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
`;

const AssocationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  & > span.title {
    font-size: 16px;
    font-weight: 600;
  }

  & > span.content {
    font-size: 20px;
  }
`;

const AssociationLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const ContentContainer = styled.div`
  padding: 20px;
  background: #000;
`;
