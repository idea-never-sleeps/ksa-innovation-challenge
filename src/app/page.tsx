'use client';

import styled from 'styled-components';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { happiness_sans, pretendard } from '@/lib/fonts';

export default function Home() {
  const [time, setTime] = useState('XX일 XX시간 XX분 XX초');

  const calculateTimeLeft = () => {
    const now = new Date();
    const target = new Date('2024-03-31T15:00:00');

    const diff = target.getTime() - now.getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    // add leading zero
    const pad = (n: number) => (n < 10 ? `0${n}` : n);

    return `${pad(days)}일 ${pad(hours)}시간 ${pad(minutes)}분 ${pad(seconds)}초`;
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setTime(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  }, [time]);

  return (
    <>
      <DesktopContainer>
        <Background />
        <BackgroundVector fill={true} src="/bg.svg" alt="background" sizes="100vh" />
        <TopBottomContainer />
        <CenterContainer>
          <TitleArea>
            <SubTitle
              className={happiness_sans.className}
              style={{ marginBottom: '11px' }}
            >
              제 1회 한국과학영재학교 아이디어톤
            </SubTitle>
            <Title className={pretendard.className}>
              KSA Innovation Challenge
            </Title>
          </TitleArea>
          <CountdownArea>
            <CountdownLabel className={happiness_sans.className}>
              Application Form Open Countdown
            </CountdownLabel>
            <Countdown>{time}</Countdown>
          </CountdownArea>
          <Location>
            5.4-5.6, 2박 3일, KSA 대강당.
            <br />
            KIC, Where <span className="bold">Passion</span> Meets{' '}
            <span className="bold">Purpose</span>.
          </Location>
        </CenterContainer>
        <AreaArea>
          <TopBottomContainer>
            <Association>
              <span>주최</span>
              <Image src="/ksa.svg" alt="KSA Logo" width="114" height="30" />
            </Association>
            <Association>
              <span>주관</span>
              <span className="content">2024 KIC 조직위원회</span>
            </Association>
            <Association>
              <span>후원</span>
              <AssociationImageGroup>
                <Image
                  src="/kaist.svg"
                  alt="KAIST Logo"
                  width="85"
                  height="24"
                />
                <Image
                  src="/ict.svg"
                  alt="과학기술정보통신부 Logo"
                  width="124"
                  height="24"
                />
              </AssociationImageGroup>
            </Association>
          </TopBottomContainer>
          <TopBottomShortContainerArea>
            <TopBottomShortContainer>
              <Association>
                <span>주최</span>
                <Image src="/ksa.svg" alt="KSA Logo" width="114" height="30" />
              </Association>
              <Association>
                <span>주관</span>
                <span className="content">2024 KIC 조직위원회</span>
              </Association>
            </TopBottomShortContainer>
            <TopBottomShortContainerLineTwo>
              <Association>
                <span>후원</span>
                <AssociationImageGroup>
                  <Image
                    src="/kaist.svg"
                    alt="KAIST Logo"
                    width="85"
                    height="24"
                  />
                  <Image
                    src="/ict.svg"
                    alt="과학기술정보통신부 Logo"
                    width="124"
                    height="24"
                  />
                </AssociationImageGroup>
              </Association>
            </TopBottomShortContainerLineTwo>
          </TopBottomShortContainerArea>
        </AreaArea>
        <AuthorContainer>Copyright KIC 2024. All rights reserved.</AuthorContainer>
      </DesktopContainer>
    </>
  );
}

const DesktopContainer = styled.div`
  color: #fff;
  box-sizing: border-box;
  position: relative;
  width: 100vw;
  height: 100vh;
  height: 100svh;
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  letter-spacing: -4%;
`;

const Background = styled.div`
  background-color: #000;
  z-index: -2;
  position: absolute;
  width: 100vw;
  height: 100vh;
`;

const BackgroundVector = styled(Image)`
  z-index: -1;
  position: absolute;
  stroke-width: 1.085px;
  stroke: #fff;
  opacity: 0.58;
  object-fit: cover;
`;

const CenterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 70%;
  justify-content: space-between;
  color: white;
`;

const TopBottomContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  width: 100%;

  @media (max-width: 1250px) {
    display: none;
  }
`;

const TopBottomShortContainerArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
  gap: 12px;

  @media (min-width: 1250px) {
    display: none;
  }
`;

const AreaArea = styled.div`
width: 70%;
margin-bottom: 120px;

@media (max-width: 768px) {
  width: 100%;
}
`;

const TopBottomShortContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  width: 100%;

  @media (min-width: 1250px) {
    display: none;
  }
`;

const TopBottomShortContainerLineTwo = styled.div`
  display: grid;
  align-items: center;
  width: 100%;

  @media (min-width: 1250px) {
    display: none;
  }
`;

const Association = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 27px;

  @media (max-width: 768px) {
    gap: 15px;
    }

  & > span {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;

    @media (max-width: 768px) {
      font-size: 12px;
    }

    &.content {
      font-size: 18px;
      font-style: normal;
      font-weight: 500;

      @media (max-width: 768px) {
      font-size: 14px;
    }
    }
  }
`;

const AssociationImageGroup = styled.div`
  display: flex;
  gap: 20px;
`;

const TitleArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 80px;
`;

const SubTitle = styled.span`
  font-size: 24px;
  font-style: normal;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Title = styled.span`
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  padding-left: 20px;
  padding-right: 20px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const CountdownArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 40px;
`;

const CountdownLabel = styled.span`
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  @media (max-width: 1250px) {
  }
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Countdown = styled.span`
  text-align: center;
  font-style: normal;
  font-weight: 600;
  margin-top: 10px;

  @media (min-width: 1250px) {
    font-size: 60px;
  }
  @media (max-width: 1250px) {
    font-size: 45px;
  }
  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const Location = styled.span`
  text-align: center;
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  margin-bottom: 40px;

  & > span {
    font-weight: 600;
  }

  @media (max-width: 1250px) {
    font-size: 20px;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const AuthorContainer = styled.div`
  position: absolute;
  bottom: 0;
  padding: 16px;
  font-weight: 400;
  font-size: 12px;
`;
