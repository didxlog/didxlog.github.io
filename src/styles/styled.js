import styled from 'styled-components';
import { C } from './colors';

// ─── Layout ───────────────────────────────────────────────
export const PageWrapper = styled.div`
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
  background: ${C.navy};
  min-height: 100vh;
  font-family: 'Noto Serif KR', serif;
`;

// ─── Nav ──────────────────────────────────────────────────
export const Nav = styled.nav`
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
  background: ${C.navy};
`;

export const NavTitle = styled.span`
  font-family: 'Playfair Display', serif;
  font-size: 14px;
  font-style: italic;
  color: ${C.white};
  letter-spacing: 0.03em;
`;

export const MenuButton = styled.button`
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
    background: ${C.white};
  }
`;

// ─── Menu Overlay ─────────────────────────────────────────
export const MenuOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 480px;
  height: 100vh;
  background: ${C.navyDark};
  z-index: 200;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: ${({ $isOpen }) => $isOpen ? 1 : 0};
  pointer-events: ${({ $isOpen }) => $isOpen ? 'all' : 'none'};
  transition: opacity 0.3s ease;
`;

export const MenuClose = styled.button`
  position: absolute;
  top: 24px;
  right: 24px;
  background: none;
  border: none;
  cursor: pointer;
  font-family: 'Cormorant Garamond', serif;
  font-size: 30px;
  color: ${C.white};
  line-height: 1;
`;

export const MenuItemBtn = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-family: 'Cormorant Garamond', serif;
  font-size: 32px;
  font-style: italic;
  font-weight: 300;
  color: ${C.white};
  letter-spacing: 0.08em;
  margin: 14px 0;
  display: block;
  transition: color 0.2s;
  &:hover { color: ${C.whiteMuted}; }
`;

// ─── Hero ─────────────────────────────────────────────────
export const HeroSection = styled.section`
  padding-top: 72px;
  background: ${C.navy};
`;

export const HeroTop = styled.div`
  padding: 40px 24px 48px;
  text-align: center;
  animation: fadeUp 0.9s ease both;
`;

export const YoureInvited = styled.p`
  font-family: 'Cormorant Garamond', serif;
  font-style: italic;
  font-size: 16px;
  color: rgba(247,245,242,0.45);
  letter-spacing: 0.08em;
  margin-bottom: 20px;
`;

export const HeroNameGroom = styled.h1`
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(40px, 12.5vw, 64px);
  font-weight: 300;
  color: ${C.white};
  letter-spacing: 0.04em;
  line-height: 1;
`;

export const HeroAnd = styled.p`
  font-family: 'Noto Serif KR', serif;
  font-size: 15px;
  font-style: italic;
  font-weight: 300;
  color: ${C.whiteMuted};
  margin: 14px 0;
`;

export const HeroNameBride = styled.h1`
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(40px, 12.5vw, 64px);
  font-weight: 300;
  color: ${C.white};
  letter-spacing: 0.04em;
  line-height: 1;
  margin-bottom: 36px;
`;

export const HeroDate = styled.p`
  font-family: 'Playfair Display', serif;
  font-size: 22px;
  color: ${C.white};
  letter-spacing: 0.06em;
  margin-bottom: 8px;
`;

export const HeroVenue = styled.p`
  font-family: 'Noto Serif KR', serif;
  font-size: 16px;
  color: ${C.whiteMuted};
  letter-spacing: 0.08em;
`;

export const HeroPhoto = styled.div`
  width: 100%;
  aspect-ratio: 3/4;
  background: #0a1520;
  overflow: hidden;
  position: relative;
  min-height: 360px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: grayscale(20%) brightness(0.88);
    display: block;
    pointer-events: none;
    user-select: none;
  }
`;

export const PhotoPlaceholder = styled.div`
  width: 100%;
  height: 100%;
  min-height: 360px;
  background: linear-gradient(160deg, #1a2a3a 0%, #0a1520 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(247,245,242,0.15);
  font-family: 'Cormorant Garamond', serif;
  font-size: 14px;
  letter-spacing: 0.2em;
`;

// ─── Common Section ───────────────────────────────────────
export const Section = styled.section`
  background: ${C.navy};
  padding: 80px 28px;
  text-align: center;
`;

export const SectionLabel = styled.p`
  font-family: 'Cormorant Garamond', serif;
  font-size: 12px;
  letter-spacing: 0.32em;
  color: ${C.whiteMuted};
  text-transform: uppercase;
  margin-bottom: 40px;
`;

export const Divider = styled.hr`
  border: none;
  border-top: 1px solid ${C.divider};
  width: 100%;
  margin: 0 0 40px;
`;

export const ThinLine = styled.div`
  width: 36px;
  height: 1px;
  background: ${C.whiteMuted};
  margin: 0 auto 40px;
`;

// ─── Join Us ──────────────────────────────────────────────
export const JoinUsTitle = styled.h2`
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(38px, 11vw, 52px);
  font-style: italic;
  font-weight: 300;
  color: ${C.white};
  line-height: 1.3;
  margin-bottom: 60px;
`;

export const FamilyRow = styled.p`
  font-family: 'Noto Serif KR', serif;
  font-size: 16px;
  color: ${C.whiteMuted};
  line-height: 2.4;
  letter-spacing: 0.02em;
  strong {
    color: ${C.white};
    font-weight: 600;
  }
`;

// ─── Invitation ───────────────────────────────────────────
export const InvitationText = styled.p`
  font-family: 'Noto Serif KR', serif;
  font-size: 17px;
  color: ${C.white};
  line-height: 2.4;
  letter-spacing: 0.04em;
  word-break: keep-all;
`;

// ─── Calendar ─────────────────────────────────────────────
export const CalDateLarge = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: clamp(28px, 9vw, 42px);
  font-weight: 300;
  color: ${C.white};
  letter-spacing: 0.04em;
  margin-bottom: 10px;
`;

export const CalTimeSub = styled.p`
  font-family: 'Noto Serif KR', serif;
  font-size: 17px;
  color: ${C.whiteMuted};
  letter-spacing: 0.1em;
  margin-bottom: 36px;
`;

export const CalDayHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  margin-bottom: 12px;
`;

export const CalDayLabel = styled.span`
  font-family: 'Playfair Display', serif;
  font-size: 14px;
  letter-spacing: 0.05em;
  color: ${({ $isSun }) => $isSun ? '#7EB8D4' : C.whiteMuted};
  text-align: center;
`;

export const CalRow = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  margin-bottom: 2px;
`;

export const CalCell = styled.div`
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Playfair Display', serif;
  font-size: 16px;
  font-weight: ${({ $isSelected }) => $isSelected ? 500 : 300};
  color: ${({ $isSun, $isEmpty, $isSelected }) =>
    $isEmpty ? 'transparent' :
    $isSelected ? C.navy :
    $isSun ? '#7EB8D4' : C.white};
  position: relative;

  ${({ $isSelected }) => $isSelected && `
    &::before {
      content: '';
      position: absolute;
      width: 38px;
      height: 38px;
      border-radius: 50%;
      background: #F7F5F2;
      z-index: 0;
    }
  `}

  span { position: relative; z-index: 1; }
`;

// ─── Gallery ──────────────────────────────────────────────
export const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2px;
  border: 2px solid ${C.navyDark};
`;

export const GalleryCell = styled.div`
  aspect-ratio: 1;
  background: ${({ $isMore }) => $isMore ? C.gray : '#0a1520'};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid ${C.navyDark};
  min-height: 80px;
`;

export const GalleryPreviewText = styled.span`
  font-family: 'Cormorant Garamond', serif;
  font-style: italic;
  font-size: 13px;
  color: rgba(247,245,242,0.2);
`;

export const GalleryMoreNum = styled.span`
  font-family: 'Playfair Display', serif;
  font-size: 28px;
  font-weight: 300;
  color: ${C.white};
`;

export const GalleryMoreLabel = styled.span`
  font-family: 'Cormorant Garamond', serif;
  font-size: 11px;
  letter-spacing: 0.25em;
  color: ${C.white};
  margin-top: 4px;
`;

// ─── Gallery Video ────────────────────────────────────────
export const GalleryVideoWrap = styled.div`
  width: 100%;
  margin-top: 48px;
  position: relative;
  overflow: hidden;
`;

export const GalleryVideoLabel = styled.p`
  font-family: 'Cormorant Garamond', serif;
  font-size: 12px;
  letter-spacing: 0.28em;
  color: ${C.whiteMuted};
  text-transform: uppercase;
  text-align: center;
  padding: 0 0 16px;
`;

// ─── Lightbox ─────────────────────────────────────────────
export const LightboxOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(8,17,26,0.97);
  z-index: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${({ $visible }) => $visible ? 1 : 0};
  pointer-events: ${({ $visible }) => $visible ? 'all' : 'none'};
  transition: opacity 0.25s ease;
`;

export const LightboxImg = styled.img`
  max-width: 100vw;
  max-height: 100vh;
  object-fit: contain;
  display: block;
  user-select: none;
  pointer-events: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(calc(-50% + ${({ $offset }) => $offset ?? 0}px), -50%);
  transition: ${({ $sliding }) => $sliding ? 'transform 0.32s cubic-bezier(0.25,0.46,0.45,0.94)' : 'none'};
`;

export const LightboxClose = styled.button`
  position: fixed;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  cursor: pointer;
  font-family: 'Cormorant Garamond', serif;
  font-size: 32px;
  color: ${C.white};
  line-height: 1;
  z-index: 501;
  padding: 4px 10px;
`;

export const LightboxNav = styled.button`
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  ${({ $dir }) => $dir === 'prev' ? 'left: 16px;' : 'right: 16px;'}
  background: rgba(247,245,242,0.1);
  border: none;
  cursor: pointer;
  color: ${C.white};
  font-size: 22px;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 501;
`;

export const LightboxCounter = styled.p`
  position: fixed;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  font-family: 'Playfair Display', serif;
  font-size: 14px;
  letter-spacing: 0.2em;
  color: ${C.whiteMuted};
  z-index: 501;
`;

// ─── Location ─────────────────────────────────────────────
export const VenueName = styled.h3`
  font-family: 'Noto Serif KR', serif;
  font-size: 28px;
  font-weight: 500;
  color: ${C.white};
  margin-bottom: 10px;
`;

export const VenueDetail = styled.p`
  font-family: 'Noto Serif KR', serif;
  font-size: 15px;
  color: ${C.whiteMuted};
  line-height: 1.8;
  margin-bottom: 4px;
`;

export const VenuePhone = styled.a`
  font-family: 'Cormorant Garamond', serif;
  font-size: 20px;
  color: ${C.white};
  text-decoration: underline;
  text-decoration-color: ${C.whiteMuted};
  letter-spacing: 0.04em;
  display: block;
  margin: 16px 0 28px;
`;

export const MapBox = styled.div`
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

export const MapLabel = styled.p`
  font-family: 'Cormorant Garamond', serif;
  font-size: 11px;
  letter-spacing: 0.22em;
  color: ${C.whiteMuted};
`;

export const MapButtonRow = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-bottom: 36px;
`;

export const MapButton = styled.a`
  flex: 1;
  padding: 14px 4px;
  border: 1px solid ${C.whiteMuted};
  border-radius: 100px;
  text-align: center;
  font-family: 'Noto Serif KR', serif;
  font-size: 14px;
  color: ${C.white};
  text-decoration: none;
  cursor: pointer;
  transition: background 0.2s;
  &:hover { background: rgba(247,245,242,0.08); }
`;

export const TransportTitle = styled.p`
  font-family: 'Noto Serif KR', serif;
  font-size: 15px;
  font-weight: 600;
  color: ${C.white};
  margin-bottom: 8px;
  margin-top: 20px;
  text-align: left;
`;

export const TransportDesc = styled.p`
  font-family: 'Noto Serif KR', serif;
  font-size: 14px;
  color: ${C.whiteMuted};
  line-height: 1.9;
  text-align: left;
`;

// ─── Account ──────────────────────────────────────────────
export const AccountSubtitle = styled.p`
  font-family: 'Noto Serif KR', serif;
  font-size: 17px;
  color: ${C.white};
  margin-bottom: 40px;
`;

export const AccordionItem = styled.div`
  border-top: 1px solid ${C.divider};
  width: 100%;
`;

export const AccordionHeader = styled.button`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  background: none;
  border: none;
  cursor: pointer;
  font-family: 'Noto Serif KR', serif;
  font-size: 17px;
  color: ${C.white};
  text-align: left;
`;

export const AccordionArrow = styled.span`
  display: inline-block;
  transition: transform 0.3s ease;
  transform: ${({ $isOpen }) => $isOpen ? 'rotate(0deg)' : 'rotate(180deg)'};
  font-size: 12px;
  color: ${C.whiteMuted};
`;

export const AccordionBody = styled.div`
  overflow: hidden;
  max-height: ${({ $isOpen }) => $isOpen ? '800px' : '0'};
  transition: max-height 0.4s ease;
  padding-bottom: ${({ $isOpen }) => $isOpen ? '16px' : '0'};
`;

export const AccountCard = styled.div`
  background: rgba(247,245,242,0.05);
  border: 1px solid ${C.divider};
  border-radius: 6px;
  padding: 16px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const AccountTag = styled.span`
  display: inline-block;
  font-family: 'Cormorant Garamond', serif;
  font-size: 11px;
  letter-spacing: 0.18em;
  color: ${C.whiteMuted};
  border: 1px solid ${C.divider};
  border-radius: 2px;
  padding: 2px 7px;
  margin-bottom: 6px;
`;

export const AccountName = styled.p`
  font-family: 'Noto Serif KR', serif;
  font-size: 16px;
  color: ${C.white};
  margin-bottom: 4px;
`;

export const AccountNumber = styled.p`
  font-family: 'Noto Serif KR', serif;
  font-size: 16px;
  color: ${C.whiteMuted};
  letter-spacing: 0.06em;
`;

export const AccountBank = styled.span`
  text-decoration: underline;
  text-decoration-color: ${C.whiteMuted};
`;

export const CopyButton = styled.button`
  width: 40px;
  height: 40px;
  border: 1px solid ${C.whiteMuted};
  border-radius: 4px;
  background: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-left: 12px;
  transition: background 0.2s;
  &:hover { background: rgba(247,245,242,0.08); }
  svg { width: 18px; height: 18px; color: ${C.white}; }
`;

// ─── Share ────────────────────────────────────────────────
export const ShareSubtitle = styled.p`
  font-family: 'Noto Serif KR', serif;
  font-size: 16px;
  color: ${C.whiteMuted};
  margin-bottom: 40px;
`;

export const ShareButtonRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 32px;
`;

export const ShareItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

export const ShareCircle = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: rgba(247,245,242,0.1);
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s;
  &:hover { background: rgba(247,245,242,0.18); }
  svg { width: 24px; height: 24px; color: ${C.white}; }
`;

export const ShareLabel = styled.p`
  font-family: 'Cormorant Garamond', serif;
  font-size: 13px;
  letter-spacing: 0.22em;
  color: ${C.whiteMuted};
`;

// ─── Footer ───────────────────────────────────────────────
export const Footer = styled.footer`
  background: ${C.navyDark};
  padding: 40px 24px;
  text-align: center;
`;

export const FooterText = styled.p`
  font-family: 'Playfair Display', serif;
  font-size: 15px;
  color: ${C.whiteMuted};
  letter-spacing: 0.08em;
  font-style: italic;
  line-height: 1.8;
`;

// ─── Toast ────────────────────────────────────────────────
export const ToastWrap = styled.div`
  position: fixed;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(8,17,26,0.95);
  color: ${C.white};
  font-family: 'Noto Serif KR', serif;
  font-size: 14px;
  padding: 12px 24px;
  border-radius: 100px;
  letter-spacing: 0.04em;
  z-index: 999;
  opacity: ${({ $visible }) => $visible ? 1 : 0};
  transition: opacity 0.3s ease;
  pointer-events: none;
  white-space: nowrap;
  border: 1px solid ${C.divider};
`;