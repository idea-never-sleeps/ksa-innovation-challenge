'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import LandingImage from './image';

export default function LandingPage() {
  const [percentage, setPercentage] = useState(0);
  const [wheelDelta, setWheelDelta] = useState(0);


  const handleWheel = useCallback((e: WheelEvent) => {
    if (wheelDelta < e.deltaY && e.deltaY > 0) {
      setPercentage((prev) => prev + 60);
    }
    setWheelDelta(e.deltaY);
  }, [wheelDelta]);

  useEffect(() => {
    window.addEventListener('wheel', (e) => handleWheel(e as WheelEvent));
    return () =>
      window.removeEventListener('wheel', (e) => handleWheel(e as WheelEvent));
  }, [handleWheel]);

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
            <span className="content">2024 KIC 추진위원단</span>
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
