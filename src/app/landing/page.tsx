'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import LandingImage from './image';

export default function LandingPage() {
  const [percentage, setPercentage] = useState(0);
  const [wheelDelta, setWheelDelta] = useState(0);
  const [scroll, setScroll] = useState(false);
  const timeLimit = 100;
  const [recentTime, setRecentTime] = useState(new Date().getTime());
  const contentRef = useRef<HTMLDivElement>(null);

  const handleWheel = useCallback(
    (e: WheelEvent) => {
      if (percentage > 100000) {
        setTimeout(() => {
          setScroll(true);
        }, 300);
        return;
      }
      let changeRate = e.deltaY - wheelDelta;
      if (recentTime + timeLimit > new Date().getTime()) {
        if (changeRate > 0) {
          setPercentage((prev) => prev + changeRate * 12);
        }
        if (changeRate < 0 && e.deltaY > 0) {
          setPercentage((prev) => prev + Math.abs(changeRate) * 10);
        }
        setWheelDelta(e.deltaY);
      }
      setRecentTime(new Date().getTime());
    },
    [wheelDelta, percentage, recentTime]
  );

  const handleTouch = useCallback(
    (e: TouchEvent) => {
      if (percentage > 100000) {
        setTimeout(() => {
          setScroll(true);
        }, 300);
        return;
      }
      if (wheelDelta === 0) {
        setWheelDelta(e.touches[0].clientY);
        return;
      }
      let changeRate = wheelDelta - e.touches[0].clientY;
      if (recentTime + timeLimit > new Date().getTime()) {
        if (changeRate > 0) {
          setPercentage((prev) => prev + changeRate * 8);
        }
        setWheelDelta(e.touches[0].clientY);
      }
      setRecentTime(new Date().getTime());
    },
    [wheelDelta, percentage, recentTime]
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
    <MainContainer>
      <RootContainer
        $scroll={scroll}
        $height={contentRef.current?.offsetHeight || 0}
      >
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
        <ContentContainerContainer>
          <ContentContainer ref={contentRef}>
            <Section>
              <TopTitle>
                KSA
                <br />
                Innovation
                <br />
                Challenge
              </TopTitle>
              <div style={{ marginTop: '200px' }}>
                <SectionTitle>What is KIC 2024?</SectionTitle>
                <SectionContent>
                  KSA Innovation Challenge, KIC 2024는
                  <br />
                  사회에 존재하는 <strong>꼭 해결해야 하는 문제</strong>를 위해
                  <br />
                  <br />
                  24시간 동안 팀을 이루어 솔루션을 찾아내는
                  <br />
                  <strong>아이디어톤</strong>입니다.
                  <br />
                  <br />
                  주제는 당일 공개될 예정입니다.
                </SectionContent>
              </div>
            </Section>
            <Section
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}
            >
              <SectionTitle>시상</SectionTitle>
              <AwardContainer>
                <SectionLabel>1위</SectionLabel>
                <SectionContent style={{ textAlign: 'center' }}>
                  KSA 학교장상 + 10만원 상당 상품
                </SectionContent>
              </AwardContainer>
              <AwardContainer>
                <SectionLabel>2위</SectionLabel>
                <SectionContent style={{ textAlign: 'center' }}>
                  KSA 화학생물학부 학부장상 + 5만원 상당 상품
                </SectionContent>
              </AwardContainer>
              <AwardContainer>
                <SectionLabel>베스트 팀워크 상</SectionLabel>
                <SectionContent style={{ textAlign: 'center' }}>
                  5만원 상당 상품
                </SectionContent>
              </AwardContainer>
            </Section>
            <Section
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}
            >
              <SectionTitle>참가자 특전</SectionTitle>
              <AwardContainer>
                <SectionLabel>웰컴 키트</SectionLabel>
                <SectionContent>반팔 티셔츠, 스티커, 기타 굿즈</SectionContent>
              </AwardContainer>
              <AwardContainer>
                <SectionLabel>다과</SectionLabel>
                <SectionContent>
                  무제한 몬스터, 탄산음료, 커피, 과자
                </SectionContent>
              </AwardContainer>
              <AwardContainer>
                <SectionLabel>간식</SectionLabel>
                <SectionContent>피자, 치킨 제공</SectionContent>
              </AwardContainer>
            </Section>
            <Section style={{ marginBottom: '100px' }}>
              <SectionTitle style={{ textAlign: 'center', lineHeight: '1.8' }}>
                KIC,
                <br />
                Where Passion
                <br />
                Meets Purpose.
                <br />
                <br />
                세상을 더 나은 곳으로 <br />
                변화시킬 열정이 가득한
                <br />
                모든 분들의 지원을 기다립니다.
              </SectionTitle>
            </Section>
            <Section>
              <SectionContent
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  flexDirection: 'column',
                  textAlign: 'center'
                }}
              >
                KIC 조직위원단 드림.
                <br />
                <br />
                22 권오윤
                <br />
                22 송시형
                <br />
                21 백동주
                <br />
                22 임우진
                <br />
                <br />
                <br />
                Website developed by
                <br />
                <strong>Mingeon Kim</strong>
              </SectionContent>
            </Section>
            <Footer>
              <FooterTitle>KIC : KSA Innovation Challenge</FooterTitle>
              <ContactContainer>
                <Contact>
                  <span>Email</span>
                  <span>ksa.hackathon.2024@gmail.com</span>
                </Contact>
                <Contact>
                  <span>카카오톡</span>
                  <span>22학번 권오윤 010-6650-4690</span>
                </Contact>
              </ContactContainer>
              <FooterLink href="/privacy">개인정보 처리방침</FooterLink>
              <FooterAssociationContainer>
                <AssocationContainer>
                  <span className="title">주최</span>
                  <AssociationLogo>
                    <Image
                      src="/ksa.svg"
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
                  </AssociationLogo>
                </AssocationContainer>
              </FooterAssociationContainer>
            </Footer>
          </ContentContainer>
        </ContentContainerContainer>
      </RootContainer>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  height: 100vh;
  height: 100svh !important;
  overflow-y: scroll;
  letter-spacing: -4%;
`;

const RootContainer = styled.div<{ $scroll: boolean; $height: number }>`
  height: ${({ $scroll, $height }) => ($scroll ? `calc(100svh + ${$height}px)` : '100svh')};
  overflow: hidden;
  position: relative;
`;

const TopContainer = styled.div`
  z-index: 100;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  height: 100vh;
  height: 100svh !important;
  width: 100vw;
  color: #000;
  background: #fff;
`;

const TopContent = styled.div`
  box-sizing: border-box;
  height: 100vh;
  height: 100svh !important;
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
    font-size: 14px;
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
    & > span.title {
      font-size: 12px;
      font-weight: 500;
    }

    & > span.content {
      font-size: 14px;
    }

    gap: 15px;
  }
`;

const AssociationLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const ContentContainerContainer = styled.div`
  z-index: 101;
  position: relative;
  margin-top: 100vh;
  margin-top: 100svh !important;
  display: flex;
  justify-content: center;
  background: #1e1e1e;
`;

const ContentContainer = styled.div`
  z-index: 101;
  position: relative;
  padding: 20px;
  background: #1e1e1e;
  color: #fff;
  max-width: 1000px;
`;

const Section = styled.div`
  background: #1e1e1e;
  margin-bottom: 200px;
  position: relative;
  padding: 20px;

  @media (max-width: 768px) {
    margin-bottom: 150px;
  }
`;

const SectionTitle = styled.div`
  font-size: 40px;
  font-weight: 600;
  margin-bottom: 25px;

  @media (max-width: 768px) {
    font-size: 22px;
  }
`;

const SectionContent = styled.div`
  font-size: 20px;
  font-weight: 400;
  line-height: 1.5;
  margin-bottom: 20px;

  & > strong {
    font-weight: 600;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const SectionLabel = styled.div`
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 120px;

  @media (max-width: 768px) {
    gap: 80px;
  }
`;

const FooterTitle = styled.div`
  font-size: 40px;
  font-weight: 600;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 22px;
  }
`;

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const Contact = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  font-size: 18px;
  font-weight: 400;

  @media (max-width: 768px) {
    gap: 15px;
    font-size: 14px;
  }
`;

const FooterAssociationContainer = styled.div`
  display: flex;
  gap: 20px;
  box-sizing: border-box;
  width: 100vw;
  flex-wrap: wrap;
  max-width: 1200px;
  padding-left: 20px;
  padding-right: 20px;
  margin-bottom: 60px;
  justify-content: center;
  align-items: center;
`;

const FooterLink = styled.a`
  color: #fff;
  text-decoration: underline;
  cursor: pointer;
  font-size: 18px;
  font-weight: 400;
`;

const AwardContainer = styled(Section)`
  margin-bottom: 70px;

  @media (max-width: 768px) {
    margin-bottom: 40px;
  }
`;
