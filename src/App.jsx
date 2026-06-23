import React, { useState } from 'react';
import styled, { createGlobalStyle, keyframes } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=Noto+Serif+KR:wght@300;400;500;600&display=swap');
  * { margin: 0; padding: 0; box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  body { background: #E8430D; font-family: 'Noto Serif KR', serif; overflow-x: hidden; }
`;

const C = {
  orange: '#E8430D',
  orangeDark: '#C93609',
  cream: '#F5EFE6',
  creamMuted: '#D9C4AE',
  black: '#1A0A05',
  divider: 'rgba(245,239,230,0.22)',
  grayOverlay: '#5A5A5A',
};

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const PageWrapper = styled.div`
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
  background: ${C.orange};
  min-height: 100vh;
`;

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 480px;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 24px;
  background: ${C.orange};
`;

const NavTitle = styled.span`
  font-family: 'Cormorant Garamond', serif;
  font-size: 13px;
  font-style: italic;
  color: ${C.cream};
  letter-spacing: 0.03em;
`;

const MenuButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 4px;
  span {
    display: block;
    width: 22px;
    height: 1.5px;
    background: ${C.cream};
  }
`;

const HeroSection = styled.section`
  padding-top: 72px;
  background: ${C.orange};
`;

const HeroTop = styled.div`
  padding: 40px 24px 48px;
  text-align: center;
  animation: ${fadeUp} 0.9s ease both;
`;

const YoureInvited = styled.p`
  font-family: 'Cormorant Garamond', serif;
  font-style: italic;
  font-size: 15px;
  color: rgba(245,239,230,0.55);
  letter-spacing: 0.06em;
  margin-bottom: 20px;
`;

const HeroNameGroom = styled.h1`
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(52px, 16vw, 72px);
  font-weight: 400;
  color: ${C.black};
  letter-spacing: 0.04em;
  line-height: 1;
`;

const HeroAnd = styled.p`
  font-family: 'Cormorant Garamond', serif;
  font-size: 32px;
  font-style: italic;
  font-weight: 300;
  color: ${C.cream};
  margin: 12px 0;
`;

const HeroNameBride = styled.h1`
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(52px, 16vw, 72px);
  font-weight: 400;
  color: ${C.black};
  letter-spacing: 0.04em;
  line-height: 1;
  margin-bottom: 32px;
`;

const HeroDate = styled.p`
  font-family: 'Cormorant Garamond', serif;
  font-size: 16px;
  color: ${C.cream};
  letter-spacing: 0.05em;
  margin-bottom: 6px;
`;

const HeroVenue = styled.p`
  font-family: 'Noto Serif KR', serif;
  font-size: 15px;
  color: ${C.creamMuted};
  letter-spacing: 0.08em;
`;

const HeroPhoto = styled.div`
  width: 100%;
  aspect-ratio: 3/4;
  background: #2A2A2A;
  overflow: hidden;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: grayscale(100%);
    display: block;
    pointer-events: none;
    user-select: none;
    -webkit-user-drag: none;
  }
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0,0,0,0.08);
  }
`;

const PhotoPlaceholder = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(160deg, #333 0%, #1a1a1a 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255,255,255,0.2);
  font-family: 'Cormorant Garamond', serif;
  font-size: 14px;
  letter-spacing: 0.2em;
`;

const Section = styled.section`
  background: ${C.orange};
  padding: 80px 28px;
  text-align: center;
`;

const SectionLabel = styled.p`
  font-family: 'Cormorant Garamond', serif;
  font-size: 11px;
  letter-spacing: 0.28em;
  color: ${C.creamMuted};
  text-transform: uppercase;
  margin-bottom: 40px;
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid ${C.divider};
  width: 100%;
  margin: 0 0 40px;
`;

const ThinLine = styled.div`
  width: 36px;
  height: 1px;
  background: ${C.creamMuted};
  margin: 0 auto 40px;
`;

const JoinUsTitle = styled.h2`
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(36px, 10vw, 48px);
  font-style: italic;
  font-weight: 300;
  color: ${C.cream};
  line-height: 1.3;
  margin-bottom: 60px;
`;

const FamilyRow = styled.p`
  font-family: 'Noto Serif KR', serif;
  font-size: 15px;
  color: ${C.creamMuted};
  line-height: 2.4;
  letter-spacing: 0.02em;
  strong {
    color: ${C.cream};
    font-weight: 600;
  }
`;

const InvitationText = styled.p`
  font-family: 'Noto Serif KR', serif;
  font-size: 15.5px;
  color: ${C.cream};
  line-height: 2.2;
  letter-spacing: 0.04em;
  word-break: keep-all;
`;

const CalDateLarge = styled.h2`
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(36px, 11vw, 52px);
  font-weight: 300;
  color: ${C.cream};
  letter-spacing: 0.02em;
  margin-bottom: 8px;
`;

const CalTimeSub = styled.p`
  font-family: 'Noto Serif KR', serif;
  font-size: 16px;
  color: ${C.creamMuted};
  letter-spacing: 0.1em;
  margin-bottom: 36px;
`;

const CalGrid = styled.div`
  width: 100%;
  margin-top: 8px;
`;

const CalDayHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  margin-bottom: 12px;
`;

const CalDayLabel = styled.span`
  font-family: 'Cormorant Garamond', serif;
  font-size: 13px;
  letter-spacing: 0.05em;
  color: ${({ isSun }) => isSun ? '#F0A88A' : C.creamMuted};
  text-align: center;
`;

const CalRow = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  margin-bottom: 2px;
`;

const CalCell = styled.div`
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Cormorant Garamond', serif;
  font-size: 15px;
  font-weight: 300;
  color: ${({ isSun, isEmpty }) =>
    isEmpty ? 'transparent' :
    isSun ? '#F0A88A' : C.cream};
  position: relative;
  ${({ isSelected }) => isSelected && `
    &::before {
      content: '';
      position: absolute;
      width: 36px;
      height: 36px;
      border-radius: 50%;
      background: #F5EFE6;
      z-index: 0;
    }
    color: #E8430D !important;
    font-weight: 500;
  `}
  span { position: relative; z-index: 1; }
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2px;
  border: 2px solid ${C.orangeDark};
`;

const GalleryCell = styled.div`
  aspect-ratio: 1;
  background: ${({ isMore }) => isMore ? C.grayOverlay : '#3D1A08'};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  border: 1px solid ${C.orangeDark};
  cursor: default;
  -webkit-tap-highlight-color: transparent;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: grayscale(100%);
    display: block;
    pointer-events: none;
    user-select: none;
    -webkit-user-drag: none;
    touch-action: none;
  }
`;

const GalleryPreviewText = styled.span`
  font-family: 'Cormorant Garamond', serif;
  font-style: italic;
  font-size: 13px;
  color: rgba(245,239,230,0.25);
`;

const GalleryMoreNum = styled.span`
  font-family: 'Cormorant Garamond', serif;
  font-size: 28px;
  font-weight: 300;
  color: ${C.cream};
`;

const GalleryMoreLabel = styled.span`
  font-family: 'Cormorant Garamond', serif;
  font-size: 11px;
  letter-spacing: 0.25em;
  color: ${C.cream};
  margin-top: 4px;
`;

const VenueName = styled.h3`
  font-family: 'Noto Serif KR', serif;
  font-size: 26px;
  font-weight: 500;
  color: ${C.cream};
  margin-bottom: 10px;
`;

const VenueDetail = styled.p`
  font-family: 'Noto Serif KR', serif;
  font-size: 14px;
  color: ${C.creamMuted};
  line-height: 1.8;
  margin-bottom: 4px;
`;

const VenuePhone = styled.a`
  font-family: 'Cormorant Garamond', serif;
  font-size: 18px;
  color: ${C.cream};
  text-decoration: underline;
  text-decoration-color: ${C.creamMuted};
  letter-spacing: 0.04em;
  display: block;
  margin: 16px 0 28px;
`;

const MapBox = styled.div`
  width: 100%;
  height: 200px;
  border: 1px solid ${C.divider};
  border-radius: 4px;
  background: rgba(0,0,0,0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
`;

const MapPinIcon = styled.div`
  width: 28px;
  height: 28px;
  margin-bottom: 10px;
  color: ${C.creamMuted};
  svg { width: 100%; height: 100%; }
`;

const MapLabel = styled.p`
  font-family: 'Cormorant Garamond', serif;
  font-size: 11px;
  letter-spacing: 0.22em;
  color: ${C.creamMuted};
`;

const MapButtonRow = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-bottom: 36px;
`;

const MapButton = styled.a`
  flex: 1;
  padding: 13px 4px;
  border: 1px solid ${C.creamMuted};
  border-radius: 100px;
  text-align: center;
  font-family: 'Noto Serif KR', serif;
  font-size: 13px;
  color: ${C.cream};
  text-decoration: none;
  letter-spacing: 0.02em;
  cursor: pointer;
  transition: background 0.2s;
  &:hover { background: rgba(245,239,230,0.1); }
`;

const TransportTitle = styled.p`
  font-family: 'Noto Serif KR', serif;
  font-size: 14px;
  font-weight: 600;
  color: ${C.cream};
  margin-bottom: 8px;
  margin-top: 20px;
  text-align: left;
`;

const TransportDesc = styled.p`
  font-family: 'Noto Serif KR', serif;
  font-size: 13px;
  color: ${C.creamMuted};
  line-height: 1.9;
  text-align: left;
`;

const AccountSubtitle = styled.p`
  font-family: 'Noto Serif KR', serif;
  font-size: 16px;
  color: ${C.cream};
  margin-bottom: 40px;
`;

const AccordionWrap = styled.div`
  width: 100%;
`;

const AccordionItem = styled.div`
  border-top: 1px solid ${C.divider};
  width: 100%;
`;

const AccordionHeader = styled.button`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  background: none;
  border: none;
  cursor: pointer;
  font-family: 'Noto Serif KR', serif;
  font-size: 16px;
  color: ${C.cream};
  text-align: left;
`;

const AccordionArrow = styled.span`
  display: inline-block;
  transition: transform 0.3s ease;
  transform: ${({ isOpen }) => isOpen ? 'rotate(0deg)' : 'rotate(180deg)'};
  font-size: 12px;
  color: ${C.creamMuted};
`;

const AccordionBody = styled.div`
  overflow: hidden;
  max-height: ${({ isOpen }) => isOpen ? '800px' : '0'};
  transition: max-height 0.4s ease;
  padding-bottom: ${({ isOpen }) => isOpen ? '16px' : '0'};
`;

const AccountCard = styled.div`
  background: rgba(0,0,0,0.15);
  border-radius: 4px;
  padding: 16px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AccountTag = styled.span`
  display: inline-block;
  font-family: 'Cormorant Garamond', serif;
  font-size: 10px;
  letter-spacing: 0.18em;
  color: ${C.creamMuted};
  border: 1px solid ${C.divider};
  border-radius: 2px;
  padding: 2px 7px;
  margin-bottom: 6px;
`;

const AccountName = styled.p`
  font-family: 'Noto Serif KR', serif;
  font-size: 15px;
  color: ${C.cream};
  margin-bottom: 4px;
`;

const AccountNumber = styled.p`
  font-family: 'Cormorant Garamond', serif;
  font-size: 14px;
  color: ${C.creamMuted};
  letter-spacing: 0.04em;
`;

const AccountBank = styled.span`
  text-decoration: underline;
  text-decoration-color: ${C.creamMuted};
`;

const CopyButton = styled.button`
  width: 40px;
  height: 40px;
  border: 1px solid ${C.creamMuted};
  border-radius: 4px;
  background: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-left: 12px;
  transition: background 0.2s;
  &:hover { background: rgba(245,239,230,0.1); }
  svg { width: 18px; height: 18px; color: ${C.cream}; }
`;

const ShareSubtitle = styled.p`
  font-family: 'Noto Serif KR', serif;
  font-size: 15px;
  color: ${C.creamMuted};
  margin-bottom: 40px;
`;

const ShareButtonRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 32px;
`;

const ShareItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  cursor: pointer;
`;

const ShareCircle = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: rgba(245,239,230,0.15);
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s;
  &:hover { background: rgba(245,239,230,0.25); }
  svg { width: 24px; height: 24px; color: ${C.cream}; }
`;

const ShareLabel = styled.p`
  font-family: 'Cormorant Garamond', serif;
  font-size: 12px;
  letter-spacing: 0.22em;
  color: ${C.creamMuted};
`;

const Footer = styled.footer`
  background: ${C.orangeDark};
  padding: 40px 24px;
  text-align: center;
`;

const FooterText = styled.p`
  font-family: 'Cormorant Garamond', serif;
  font-size: 13px;
  color: ${C.creamMuted};
  letter-spacing: 0.08em;
  font-style: italic;
  line-height: 1.8;
`;

const MenuOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 480px;
  height: 100vh;
  background: ${C.orangeDark};
  z-index: 200;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: ${({ isOpen }) => isOpen ? 1 : 0};
  pointer-events: ${({ isOpen }) => isOpen ? 'all' : 'none'};
  transition: opacity 0.3s ease;
`;

const MenuClose = styled.button`
  position: absolute;
  top: 24px;
  right: 24px;
  background: none;
  border: none;
  cursor: pointer;
  font-family: 'Cormorant Garamond', serif;
  font-size: 28px;
  color: ${C.cream};
  line-height: 1;
`;

const MenuItem = styled.a`
  font-family: 'Cormorant Garamond', serif;
  font-size: 28px;
  font-style: italic;
  font-weight: 300;
  color: ${C.cream};
  text-decoration: none;
  letter-spacing: 0.08em;
  margin: 14px 0;
  cursor: pointer;
  transition: color 0.2s;
  &:hover { color: ${C.creamMuted}; }
`;

const ToastWrap = styled.div`
  position: fixed;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(26,10,5,0.92);
  color: ${C.cream};
  font-family: 'Noto Serif KR', serif;
  font-size: 13px;
  padding: 12px 24px;
  border-radius: 100px;
  letter-spacing: 0.04em;
  z-index: 999;
  opacity: ${({ visible }) => visible ? 1 : 0};
  transition: opacity 0.3s ease;
  pointer-events: none;
  white-space: nowrap;
`;

// ─── 달력 데이터 (2027년 2월) ────────────────────────────
// 2027.02.01 = 월요일 (startDay=1), 총 28일, 21일 = 일요일
const calendarData = {
  selectedDay: 21,
  startDay: 1,
  totalDays: 28,
};

function buildCalendar() {
  const { startDay, totalDays, selectedDay } = calendarData;
  const cells = [];

  for (let i = 0; i < startDay; i++) {
    cells.push({ day: null, isSun: i === 0, isSelected: false });
  }
  for (let d = 1; d <= totalDays; d++) {
    const col = (startDay + d - 1) % 7;
    cells.push({
      day: d,
      isSun: col === 0,
      isSelected: d === selectedDay,
    });
  }

  const rows = [];
  for (let i = 0; i < cells.length; i += 7) {
    const row = cells.slice(i, i + 7);
    while (row.length < 7) {
      row.push({ day: null, isSun: false, isSelected: false });
    }
    rows.push(row);
  }
  return rows;
}

// ─── 계좌 데이터 ──────────────────────────────────────────
const groomAccounts = [
  { tag: '신랑', name: '이현우', bank: '국민은행', number: '000-000-000000' },
  { tag: '신랑 아버지', name: '이○○', bank: '신한은행', number: '000-000-000000' },
  { tag: '신랑 어머니', name: '김○○', bank: '우리은행', number: '000-000-000000' },
];

const brideAccounts = [
  { tag: '신부', name: '손지수', bank: '하나은행', number: '000-000-000000' },
  { tag: '신부 아버지', name: '손○○', bank: '기업은행', number: '000-000-000000' },
  { tag: '신부 어머니', name: '박○○', bank: '농협은행', number: '000-000-000000' },
];

// ─── 메인 컴포넌트 ────────────────────────────────────────
export default function WeddingInvitation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [groomAccOpen, setGroomAccOpen] = useState(true);
  const [brideAccOpen, setBrideAccOpen] = useState(true);
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMsg, setToastMsg] = useState('');
  const calRows = buildCalendar();

  const showToast = (msg) => {
    setToastMsg(msg);
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 2000);
  };

  const fallbackCopy = (text) => {
    const el = document.createElement('textarea');
    el.value = text;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  };

  const copyToClipboard = (text, label) => {
    const raw = text.replace(/-/g, '');
    const doToast = () => showToast(`${label} 계좌번호가 복사되었습니다`);
    if (navigator.clipboard) {
      navigator.clipboard.writeText(raw).then(doToast).catch(() => {
        fallbackCopy(raw);
        doToast();
      });
    } else {
      fallbackCopy(raw);
      doToast();
    }
  };

  const scrollTo = (id) => {
    setMenuOpen(false);
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 300);
  };

  return (
    <>
      <GlobalStyle />
      <PageWrapper>

        {/* NAV */}
        <Nav>
          <NavTitle>The Wedding of Hyunwoo &amp; Jisu</NavTitle>
          <MenuButton onClick={() => setMenuOpen(true)} aria-label="메뉴 열기">
            <span /><span /><span />
          </MenuButton>
        </Nav>

        {/* MENU OVERLAY */}
        <MenuOverlay isOpen={menuOpen}>
          <MenuClose onClick={() => setMenuOpen(false)}>✕</MenuClose>
          <MenuItem onClick={() => scrollTo('join')}>Join Us</MenuItem>
          <MenuItem onClick={() => scrollTo('invitation')}>Invitation</MenuItem>
          <MenuItem onClick={() => scrollTo('calendar')}>Date</MenuItem>
          <MenuItem onClick={() => scrollTo('gallery')}>Gallery</MenuItem>
          <MenuItem onClick={() => scrollTo('location')}>Location</MenuItem>
          <MenuItem onClick={() => scrollTo('account')}>Account</MenuItem>
          <MenuItem onClick={() => scrollTo('share')}>Share</MenuItem>
        </MenuOverlay>

        {/* HERO */}
        <HeroSection id="hero">
          <HeroTop>
            <YoureInvited>You're Invited</YoureInvited>
            <HeroNameGroom>HYUNWOO</HeroNameGroom>
            <HeroAnd>&amp;</HeroAnd>
            <HeroNameBride>JISU</HeroNameBride>
            <HeroDate>2027.02.21 오후 4시</HeroDate>
            <HeroVenue>여의도 FKI 플라자</HeroVenue>
          </HeroTop>
          <HeroPhoto>
            <PhotoPlaceholder>PHOTO</PhotoPlaceholder>
          </HeroPhoto>
        </HeroSection>

        {/* JOIN US */}
        <Section id="join">
          <JoinUsTitle>
            Join us<br />for our wedding
          </JoinUsTitle>
          <FamilyRow>아버님 · 어머님 의 아들 <strong>이현우</strong></FamilyRow>
          <FamilyRow>아버님 · 어머님 의 딸 <strong>손지수</strong></FamilyRow>
        </Section>

        {/* INVITATION */}
        <Section id="invitation">
          <SectionLabel>Invitation</SectionLabel>
          <ThinLine />
          <InvitationText>
            서로가 마주 보며 다져온 사랑을<br /><br />
            이제 함께 한 곳을 바라보며 걸어가려 합니다.<br /><br />
            저희 두 사람의 새로운 시작을<br /><br />
            함께 축복해 주시면 더없는 기쁨으로 간직하겠습니다.
          </InvitationText>
        </Section>

        {/* CALENDAR */}
        <Section id="calendar">
          <CalDateLarge>2027.02.21</CalDateLarge>
          <CalTimeSub>일요일 오후 4시</CalTimeSub>
          <Divider />
          <CalGrid>
            <CalDayHeader>
              {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, i) => (
                <CalDayLabel key={i} isSun={i === 0}>{d}</CalDayLabel>
              ))}
            </CalDayHeader>
            {calRows.map((row, ri) => (
              <CalRow key={ri}>
                {row.map((cell, ci) => (
                  <CalCell
                    key={ci}
                    isSun={cell.isSun}
                    isSelected={cell.isSelected}
                    isEmpty={cell.day === null}
                  >
                    <span>{cell.day ?? ''}</span>
                  </CalCell>
                ))}
              </CalRow>
            ))}
          </CalGrid>
        </Section>

        {/* GALLERY */}
        <Section id="gallery" style={{ paddingLeft: 0, paddingRight: 0 }}>
          <SectionLabel style={{ paddingLeft: 28 }}>Gallery</SectionLabel>
          <GalleryGrid>
            {[0, 1, 2, 3, 4].map(i => (
              <GalleryCell key={i}>
                <GalleryPreviewText>Preview</GalleryPreviewText>
              </GalleryCell>
            ))}
            <GalleryCell isMore>
              <GalleryMoreNum>+1</GalleryMoreNum>
              <GalleryMoreLabel>MORE</GalleryMoreLabel>
            </GalleryCell>
          </GalleryGrid>
        </Section>

        {/* LOCATION */}
        <Section id="location">
          <SectionLabel>Location</SectionLabel>
          <VenueName>여의도 FKI 플라자</VenueName>
          <VenueDetail>서울특별시 영등포구 여의대로 24</VenueDetail>
          <VenueDetail>1층 그랜드볼룸홀</VenueDetail>
          <VenuePhone href="tel:02-000-0000">02-000-0000</VenuePhone>
          <MapBox>
            <MapPinIcon>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                <circle cx="12" cy="9" r="2.5" />
              </svg>
            </MapPinIcon>
            <MapLabel>MAP PREVIEW</MapLabel>
          </MapBox>
          <MapButtonRow>
            <MapButton href="https://map.naver.com/v5/search/여의도%20FKI플라자" target="_blank" rel="noreferrer">
              네이버 지도 ↗
            </MapButton>
            <MapButton href="https://map.kakao.com/?q=여의도FKI플라자" target="_blank" rel="noreferrer">
              카카오맵 ↗
            </MapButton>
            <MapButton href="https://tmap.life/FKI플라자" target="_blank" rel="noreferrer">
              티맵 ↗
            </MapButton>
          </MapButtonRow>
          <div style={{ width: '100%' }}>
            <TransportTitle>[지하철]</TransportTitle>
            <TransportDesc>
              5호선 여의도역 4번 출구에서 도보 3분<br />
              9호선 샛강역 2번 출구에서 도보 5분
            </TransportDesc>
            <TransportTitle>[주차 안내]</TransportTitle>
            <TransportDesc>
              FKI 플라자 건물 내 주차장 이용 가능<br />
              행사 당일 2시간 무료 주차 지원
            </TransportDesc>
          </div>
        </Section>

        {/* ACCOUNT */}
        <Section id="account">
          <SectionLabel>Account</SectionLabel>
          <AccountSubtitle>마음 전하실 곳</AccountSubtitle>
          <AccordionWrap>

            <AccordionItem>
              <AccordionHeader onClick={() => setGroomAccOpen(v => !v)}>
                신랑측 계좌번호
                <AccordionArrow isOpen={groomAccOpen}>▲</AccordionArrow>
              </AccordionHeader>
              <AccordionBody isOpen={groomAccOpen}>
                {groomAccounts.map((acc, i) => (
                  <AccountCard key={i}>
                    <div style={{ textAlign: 'left' }}>
                      <AccountTag>{acc.tag}</AccountTag>
                      <AccountName>{acc.name}</AccountName>
                      <AccountNumber>
                        <AccountBank>{acc.bank}</AccountBank> {acc.number}
                      </AccountNumber>
                    </div>
                    <CopyButton
                      onClick={() => copyToClipboard(acc.number, acc.tag)}
                      aria-label="계좌번호 복사"
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <rect x="9" y="9" width="13" height="13" rx="2" />
                        <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
                      </svg>
                    </CopyButton>
                  </AccountCard>
                ))}
              </AccordionBody>
            </AccordionItem>

            <AccordionItem>
              <AccordionHeader onClick={() => setBrideAccOpen(v => !v)}>
                신부측 계좌번호
                <AccordionArrow isOpen={brideAccOpen}>▲</AccordionArrow>
              </AccordionHeader>
              <AccordionBody isOpen={brideAccOpen}>
                {brideAccounts.map((acc, i) => (
                  <AccountCard key={i}>
                    <div style={{ textAlign: 'left' }}>
                      <AccountTag>{acc.tag}</AccountTag>
                      <AccountName>{acc.name}</AccountName>
                      <AccountNumber>
                        <AccountBank>{acc.bank}</AccountBank> {acc.number}
                      </AccountNumber>
                    </div>
                    <CopyButton
                      onClick={() => copyToClipboard(acc.number, acc.tag)}
                      aria-label="계좌번호 복사"
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <rect x="9" y="9" width="13" height="13" rx="2" />
                        <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
                      </svg>
                    </CopyButton>
                  </AccountCard>
                ))}
              </AccordionBody>
            </AccordionItem>

          </AccordionWrap>
        </Section>

        {/* SHARE */}
        <Section id="share">
          <ThinLine />
          <SectionLabel>Share</SectionLabel>
          <ShareSubtitle>소중한 분들에게 전해주세요</ShareSubtitle>
          <ShareButtonRow>
            <ShareItem>
              <ShareCircle aria-label="카카오 공유">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 3C6.48 3 2 6.58 2 11c0 2.77 1.63 5.22 4.1 6.73L5 21l4.3-2.27c.87.17 1.76.27 2.7.27 5.52 0 10-3.58 10-8S17.52 3 12 3z" />
                </svg>
              </ShareCircle>
              <ShareLabel>KAKAO</ShareLabel>
            </ShareItem>
            <ShareItem>
              <ShareCircle
                aria-label="링크 복사"
                onClick={() => copyToClipboard(window.location.href, '링크')}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" />
                  <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" />
                </svg>
              </ShareCircle>
              <ShareLabel>LINK</ShareLabel>
            </ShareItem>
            <ShareItem>
              <ShareCircle
                aria-label="더보기 공유"
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: '이현우 & 손지수 결혼합니다',
                      url: window.location.href,
                    });
                  }
                }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8" />
                  <polyline points="16 6 12 2 8 6" />
                  <line x1="12" y1="2" x2="12" y2="15" />
                </svg>
              </ShareCircle>
              <ShareLabel>MORE</ShareLabel>
            </ShareItem>
          </ShareButtonRow>
        </Section>

        {/* FOOTER */}
        <Footer>
          <FooterText>
            이현우 &amp; 손지수<br />
            2027.02.21
          </FooterText>
        </Footer>

        {/* TOAST */}
        <ToastWrap visible={toastVisible}>{toastMsg}</ToastWrap>

      </PageWrapper>
    </>
  );
}