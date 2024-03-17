'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import LandingImage from './image';

export default function LandingPage() {
  const [percentage, setPercentage] = useState(0);
  const [wheelDelta, setWheelDelta] = useState(0);
  const [scroll, setScroll] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleWheel = useCallback(
    (e: WheelEvent) => {
      if (percentage > 100000) {
        setTimeout(() => {
          setScroll(true);
        }, 300);
        return;
      }
      if (wheelDelta < e.deltaY && e.deltaY > 0) {
        setPercentage((prev) => prev + 60);
      }
      setWheelDelta(e.deltaY);
    },
    [wheelDelta, percentage]
  );

  const handleTouch = useCallback(
    (e: TouchEvent) => {
      if (percentage > 100000) {
        setTimeout(() => {
          setScroll(true);
        }, 300);
        return;
      }
      if (wheelDelta < e.touches[0].clientY && e.touches[0].clientY > 0) {
        setPercentage((prev) => prev + 180);
      }
      setWheelDelta(e.touches[0].clientY);
    },
    [wheelDelta, percentage]
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
    <RootContainer $scroll={scroll}>
      <TopContainer>
        <TopContent>
          <TopTitle>
            KSA
            <br />
            Innovation
            <br />
            Challenge
          </TopTitle>
          <div
            style={{ position: 'relative', height: '600px', width: '100vw' }}
          >
            <LandingImage percentage={percentage} />
          </div>
          <BottomContainer>
            <AssocationContainer>
              <span className="title">주최</span>
              <AssociationLogo>
                <Image
                  src="/ksa-black.svg"
                  alt="KSA Logo"
                  width="114"
                  height="30"
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
                  src="/kaist-black.svg"
                  alt="KAIST Logo"
                  width="85"
                  height="24"
                />
                <Image
                  src="/ict-black.svg"
                  alt="과학기술정보통신부 Logo"
                  width="124"
                  height="24"
                />
              </AssociationLogo>
            </AssocationContainer>
          </BottomContainer>
        </TopContent>
      </TopContainer>
      <ContentContainer ref={contentRef}>
        <h1>Scroll down to see more</h1>
        <h1>Scroll down to see more</h1>
        <h1>Scroll down to see more</h1>
        <h1>Scroll down to see more</h1>
        <h1>Scroll down to see more</h1>
        <h1>Scroll down to see more</h1>
        <h1>Scroll down to see more</h1>
        <h1>Scroll down to see more</h1>
        <h1>Scroll down to see more</h1>
        <h1>Scroll down to see more</h1>
        <h1>Scroll down to see more</h1>
        <h1>Scroll down to see more</h1>
        <h1>Scroll down to see more</h1>
        <h1>Scroll down to see more</h1>
        <h1>Scroll down to see more</h1>
        <h1>Scroll down to see more</h1>
        <h1>Scroll down to see more</h1>
        <h1>Scroll down to see more</h1>
        <h1>Scroll down to see more</h1>
        <h1>Scroll down to see more</h1>
        <h1>Scroll down to see more</h1>
        <h1>Scroll down to see more</h1>
        <h1>Scroll down to see more</h1>
        <h1>Scroll down to see more</h1>
        <h1>Scroll down to see more</h1>
        <h1>Scroll down to see more</h1>
        <h1>Scroll down to see more</h1>
        <h1>Scroll down to see more</h1>
        <h1>Scroll down to see more</h1>
        <h1>Scroll down to see more</h1>
        <h1>Scroll down to see more</h1>
        <h1>Scroll down to see more</h1>
        <h1>Scroll down to see more</h1>
        <h1>Scroll down to see more</h1>
        <h1>Scroll down to see more</h1>
        <h1>Scroll down to see more</h1>
        <h1>Scroll down to see more</h1>
        <h1>Scroll down to see more</h1>
        <h1>Scroll down to see more</h1>
        <h1>Scroll down to see more</h1>
        <h1>Scroll down to see more</h1>
        <h1>Scroll down to see more</h1>
        <h1>Scroll down to see more</h1>
        <h1>Scroll down to see more</h1>
      </ContentContainer>
    </RootContainer>
  );
}

const RootContainer = styled.div<{ $scroll: boolean }>`
  overflow: hidden;
  height: ${({ $scroll }) => ($scroll ? 'auto' : '100dvh')};
  position: relative;
  overflow: hidden;
`;

const TopContainer = styled.div`
  z-index: 100;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  height: 100vh;
  height: 100dvh !important;
  width: 100vw;
  color: #000;
  background: #fff;
`;

const TopContent = styled.div`
  box-sizing: border-box;
  height: 100vh;
  height: 100dvh !important;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
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

  @media (max-width: 768px) {
    transform: scale(0.3);
  }
`;

const BottomContainer = styled.div`
  box-sizing: border-box;
  width: 100vw;
  max-width: 1200px;
  padding-left: 20px;
  padding-right: 20px;
  margin-bottom: 60px;
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
  @media (max-width: 768px) {
    transform: scale(0.6);
  }
`;

const AssociationLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const ContentContainer = styled.div`
  z-index: 101;
  position: relative;
  margin-top: 100vh;
  margin-top: 100dvh !important;
  padding: 20px;
  background: #000;
  color: #fff;
`;
