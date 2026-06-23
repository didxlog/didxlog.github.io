import React, { useState, useEffect } from 'react';
import { GlobalStyle } from './styles/GlobalStyle';
import { PageWrapper, Footer, FooterText, ToastWrap } from './styles/styled';

import NavBar            from './components/NavBar';
import HeroSection       from './components/HeroSection';
import { JoinUsSection, InvitationSection } from './components/InvitationSection';
import CalendarSection   from './components/CalendarSection';
import GallerySection    from './components/GallerySection';
import LocationSection   from './components/LocationSection';
import AccountSection    from './components/AccountSection';
import ShareSection      from './components/ShareSection';

export default function App() {
  const [menuOpen,    setMenuOpen]    = useState(false);
  const [toastMsg,    setToastMsg]    = useState('');
  const [toastVisible,setToastVisible]= useState(false);

  // 구글 폰트 로드
  useEffect(() => {
    const link = document.createElement('link');
    link.rel  = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=Noto+Serif+KR:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,500;0,700;1,400;1,500&display=swap';
    document.head.appendChild(link);
    return () => document.head.removeChild(link);
  }, []);

  const showToast = (msg) => {
    setToastMsg(msg);
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 2000);
  };

  const scrollTo = (id) => {
    setMenuOpen(false);
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }, 300);
  };

  return (
    <>
      <GlobalStyle />
      <PageWrapper>
        <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} scrollTo={scrollTo} />
        <HeroSection />
        <JoinUsSection />
        <InvitationSection />
        <CalendarSection />
        <GallerySection />
        <LocationSection />
        <AccountSection showToast={showToast} />
        <ShareSection   showToast={showToast} />

        <Footer>
          <FooterText>이현우 &amp; 손지수<br />2027.02.21</FooterText>
        </Footer>

        <ToastWrap $visible={toastVisible}>{toastMsg}</ToastWrap>
      </PageWrapper>
    </>
  );
}