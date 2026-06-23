import styled from 'styled-components';
import { C } from './colors';

// ─── Layout ───────────────────────────────────────────────
export const PageWrapper = styled.div`
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
  background: ${C.orange};
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
  background: ${C.orange};
`;

export const NavTitle = styled.span`
  font-family: 'Cormorant Garamond', serif;
  font-size: 13px;
  font-style: italic;
  color: ${C.cream};
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
    background: ${C.cream};
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
  background: ${C.orangeDark};
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
  font-size: 28px;
  color: ${C.cream};
  line-height: 1;
`;

export const MenuItemBtn = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-family: 'Cormorant Garamond', serif;
  font-size: 28px;
  font-style: italic;
  font-weight: 300;
  color: ${C.cream};
  letter-spacing: 0.08em;
  margin: 14px 0;
  display: block;
  transition: color 0.2s;
  &:hover { color: ${C.creamMuted}; }
`;

// ─── Hero ─────────────────────────────────────────────────
export const HeroSection = styled.section`
  padding-top: 72px;
  background: ${C.orange};
`;

export const HeroTop = styled.div`
  padding: 40px 24px 48px;
  text-align: center;
  animation: fadeUp 0.9s ease both;
`;

export const YoureInvited = styled.p`
  font-family: 'Cormorant Garamond', serif;
  font-style: italic;
  font-size: 15px;
  color: rgba(245,239,230,0.55);
  letter-spacing: 0.06em;
  margin-bottom: 20px;
`;

export const HeroNameGroom = styled.h1`
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(36px, 11.5vw, 58px);
  font-weight: 400;
  color: ${C.black};
  letter-spacing: 0.06em;
  line-height: 1;
`;

export const HeroAnd = styled.p`
  font-family: 'Cormorant Garamond', serif;
  font-size: 32px;
  font-style: italic;
  font-weight: 300;
  color: ${C.cream};
  margin: 12px 0;
`;

export const HeroNameBride = styled.h1`
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(52px, 16vw, 72px);
  font-weight: 400;
  color: ${C.black};
  letter-spacing: 0.04em;
  line-height: 1;
  margin-bottom: 32px;
`;

export const HeroDate = styled.p`
  font-family: 'Cormorant Garamond', serif;
  font-size: 16px;
  color: ${C.cream};
  letter-spacing: 0.05em;
  margin-bottom: 6px;
`;

export const HeroVenue = styled.p`
  font-family: 'Noto Serif KR', serif;
  font-size: 15px;
  color: ${C.creamMuted};
  letter-spacing: 0.08em;
`;

export const HeroPhoto = styled.div`
  width: 100%;
  aspect-ratio: 3/4;
  background: #2A2A2A;
  overflow: hidden;
  position: relative;
  min-height: 360px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: grayscale(100%);
    display: block;
    pointer-events: none;
    user-select: none;
  }
`;

export const PhotoPlaceholder = styled.div`
  width: 100%;
  height: 100%;
  min-height: 360px;
  background: linear-gradient(160deg, #333 0%, #1a1a1a 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255,255,255,0.2);
  font-family: 'Cormorant Garamond', serif;
  font-size: 14px;
  letter-spacing: 0.2em;
`;

// ─── Common Section ───────────────────────────────────────
export const Section = styled.section`
  background: ${C.orange};
  padding: 80px 28px;
  text-align: center;
`;

export const SectionLabel = styled.p`
  font-family: 'Cormorant Garamond', serif;
  font-size: 11px;
  letter-spacing: 0.28em;
  color: ${C.creamMuted};
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
  background: ${C.creamMuted};
  margin: 0 auto 40px;
`;

// ─── Join Us ──────────────────────────────────────────────
export const JoinUsTitle = styled.h2`
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(36px, 10vw, 48px);
  font-style: italic;
  font-weight: 300;
  color: ${C.cream};
  line-height: 1.3;
  margin-bottom: 60px;
`;

export const FamilyRow = styled.p`
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

// ─── Invitation ───────────────────────────────────────────
export const InvitationText = styled.p`
  font-family: 'Noto Serif KR', serif;
  font-size: 15.5px;
  color: ${C.cream};
  line-height: 2.2;
  letter-spacing: 0.04em;
  word-break: keep-all;
`;

// ─── Calendar ─────────────────────────────────────────────
export const CalDateLarge = styled.h2`
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(36px, 11vw, 52px);
  font-weight: 300;
  color: ${C.cream};
  letter-spacing: 0.02em;
  margin-bottom: 8px;
`;

export const CalTimeSub = styled.p`
  font-family: 'Noto Serif KR', serif;
  font-size: 16px;
  color: ${C.creamMuted};
  letter-spacing: 0.1em;
  margin-bottom: 36px;
`;

export const CalDayHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  margin-bottom: 12px;
`;

export const CalDayLabel = styled.span`
  font-family: 'Cormorant Garamond', serif;
  font-size: 13px;
  letter-spacing: 0.05em;
  color: ${({ $isSun }) => $isSun ? '#F0A88A' : C.creamMuted};
  text-align: center;
`;

export const CalRow = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  margin-bottom: 2px;
`;

export const CalCell = styled.div`
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Cormorant Garamond', serif;
  font-size: 15px;
  font-weight: ${({ $isSelected }) => $isSelected ? 500 : 300};
  color: ${({ $isSun, $isEmpty, $isSelected }) =>
    $isEmpty ? 'transparent' :
    $isSelected ? C.orange :
    $isSun ? '#F0A88A' : C.cream};
  position: relative;

  ${({ $isSelected }) => $isSelected && `
    &::before {
      content: '';
      position: absolute;
      width: 36px;
      height: 36px;
      border-radius: 50%;
      background: #F5EFE6;
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
  border: 2px solid ${C.orangeDark};
`;

export const GalleryCell = styled.div`
  aspect-ratio: 1;
  background: ${({ $isMore }) => $isMore ? C.gray : '#3D1A08'};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid ${C.orangeDark};
  min-height: 80px;
`;

export const GalleryPreviewText = styled.span`
  font-family: 'Cormorant Garamond', serif;
  font-style: italic;
  font-size: 13px;
  color: rgba(245,239,230,0.25);
`;

export const GalleryMoreNum = styled.span`
  font-family: 'Cormorant Garamond', serif;
  font-size: 28px;
  font-weight: 300;
  color: ${C.cream};
`;

export const GalleryMoreLabel = styled.span`
  font-family: 'Cormorant Garamond', serif;
  font-size: 11px;
  letter-spacing: 0.25em;
  color: ${C.cream};
  margin-top: 4px;
`;

// ─── Gallery Video ────────────────────────────────────────
export const GalleryVideoWrap = styled.div`
  width: 100%;
  margin-top: 2px;
  position: relative;
  background: #1a1a1a;
  overflow: hidden;
`;

export const GalleryVideoLabel = styled.p`
  font-family: 'Cormorant Garamond', serif;
  font-size: 11px;
  letter-spacing: 0.28em;
  color: ${C.creamMuted};
  text-transform: uppercase;
  text-align: center;
  padding: 20px 0 14px;
`;

// ─── Lightbox ─────────────────────────────────────────────
export const LightboxOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(26,10,5,0.95);
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
  pointer-events: none;
  user-select: none;
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
  color: ${C.cream};
  line-height: 1;
  z-index: 501;
  padding: 4px 10px;
`;

export const LightboxNav = styled.button`
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  ${({ $dir }) => $dir === 'prev' ? 'left: 16px;' : 'right: 16px;'}
  background: rgba(245,239,230,0.12);
  border: none;
  cursor: pointer;
  color: ${C.cream};
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
  font-family: 'Cormorant Garamond', serif;
  font-size: 13px;
  letter-spacing: 0.2em;
  color: ${C.creamMuted};
  z-index: 501;
`;

// ─── Location ─────────────────────────────────────────────
export const VenueName = styled.h3`
  font-family: 'Noto Serif KR', serif;
  font-size: 26px;
  font-weight: 500;
  color: ${C.cream};
  margin-bottom: 10px;
`;

export const VenueDetail = styled.p`
  font-family: 'Noto Serif KR', serif;
  font-size: 14px;
  color: ${C.creamMuted};
  line-height: 1.8;
  margin-bottom: 4px;
`;

export const VenuePhone = styled.a`
  font-family: 'Cormorant Garamond', serif;
  font-size: 18px;
  color: ${C.cream};
  text-decoration: underline;
  text-decoration-color: ${C.creamMuted};
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
  color: ${C.creamMuted};
`;

export const MapButtonRow = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-bottom: 36px;
`;

export const MapButton = styled.a`
  flex: 1;
  padding: 13px 4px;
  border: 1px solid ${C.creamMuted};
  border-radius: 100px;
  text-align: center;
  font-family: 'Noto Serif KR', serif;
  font-size: 13px;
  color: ${C.cream};
  text-decoration: none;
  cursor: pointer;
  transition: background 0.2s;
  &:hover { background: rgba(245,239,230,0.1); }
`;

export const TransportTitle = styled.p`
  font-family: 'Noto Serif KR', serif;
  font-size: 14px;
  font-weight: 600;
  color: ${C.cream};
  margin-bottom: 8px;
  margin-top: 20px;
  text-align: left;
`;

export const TransportDesc = styled.p`
  font-family: 'Noto Serif KR', serif;
  font-size: 13px;
  color: ${C.creamMuted};
  line-height: 1.9;
  text-align: left;
`;

// ─── Account ──────────────────────────────────────────────
export const AccountSubtitle = styled.p`
  font-family: 'Noto Serif KR', serif;
  font-size: 16px;
  color: ${C.cream};
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
  font-size: 16px;
  color: ${C.cream};
  text-align: left;
`;

export const AccordionArrow = styled.span`
  display: inline-block;
  transition: transform 0.3s ease;
  transform: ${({ $isOpen }) => $isOpen ? 'rotate(0deg)' : 'rotate(180deg)'};
  font-size: 12px;
  color: ${C.creamMuted};
`;

export const AccordionBody = styled.div`
  overflow: hidden;
  max-height: ${({ $isOpen }) => $isOpen ? '800px' : '0'};
  transition: max-height 0.4s ease;
  padding-bottom: ${({ $isOpen }) => $isOpen ? '16px' : '0'};
`;

export const AccountCard = styled.div`
  background: rgba(0,0,0,0.15);
  border-radius: 4px;
  padding: 16px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const AccountTag = styled.span`
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

export const AccountName = styled.p`
  font-family: 'Noto Serif KR', serif;
  font-size: 15px;
  color: ${C.cream};
  margin-bottom: 4px;
`;

export const AccountNumber = styled.p`
  font-family: 'Cormorant Garamond', serif;
  font-size: 14px;
  color: ${C.creamMuted};
  letter-spacing: 0.04em;
`;

export const AccountBank = styled.span`
  text-decoration: underline;
  text-decoration-color: ${C.creamMuted};
`;

export const CopyButton = styled.button`
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

// ─── Share ────────────────────────────────────────────────
export const ShareSubtitle = styled.p`
  font-family: 'Noto Serif KR', serif;
  font-size: 15px;
  color: ${C.creamMuted};
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

export const ShareLabel = styled.p`
  font-family: 'Cormorant Garamond', serif;
  font-size: 12px;
  letter-spacing: 0.22em;
  color: ${C.creamMuted};
`;

// ─── Footer ───────────────────────────────────────────────
export const Footer = styled.footer`
  background: ${C.orangeDark};
  padding: 40px 24px;
  text-align: center;
`;

export const FooterText = styled.p`
  font-family: 'Cormorant Garamond', serif;
  font-size: 13px;
  color: ${C.creamMuted};
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
  background: rgba(26,10,5,0.92);
  color: ${C.cream};
  font-family: 'Noto Serif KR', serif;
  font-size: 13px;
  padding: 12px 24px;
  border-radius: 100px;
  letter-spacing: 0.04em;
  z-index: 999;
  opacity: ${({ $visible }) => $visible ? 1 : 0};
  transition: opacity 0.3s ease;
  pointer-events: none;
  white-space: nowrap;
`;