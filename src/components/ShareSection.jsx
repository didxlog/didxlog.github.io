import React from 'react';
import {
  Section, ThinLine, SectionLabel, ShareSubtitle,
  ShareButtonRow, ShareItem, ShareCircle, ShareLabel,
} from '../styles/styled';
import { copyToClipboard } from '../utils';

export default function ShareSection({ showToast }) {
  const handleLinkCopy = () =>
    copyToClipboard(window.location.href, () => showToast('링크가 복사되었습니다'));

  const handleNativeShare = () => {
    if (navigator.share) {
      navigator.share({ title: '이현우 & 손지수 결혼합니다', url: window.location.href });
    }
  };

  return (
    <Section id="share">
      <ThinLine />
      <SectionLabel>Share</SectionLabel>
      <ShareSubtitle>소중한 분들에게 전해주세요</ShareSubtitle>
      <ShareButtonRow>

        {/* 카카오 */}
        <ShareItem>
          <ShareCircle aria-label="카카오 공유">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 3C6.48 3 2 6.58 2 11c0 2.77 1.63 5.22 4.1 6.73L5 21l4.3-2.27c.87.17 1.76.27 2.7.27 5.52 0 10-3.58 10-8S17.52 3 12 3z"/>
            </svg>
          </ShareCircle>
          <ShareLabel>KAKAO</ShareLabel>
        </ShareItem>

        {/* 링크 복사 */}
        <ShareItem>
          <ShareCircle aria-label="링크 복사" onClick={handleLinkCopy}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/>
              <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/>
            </svg>
          </ShareCircle>
          <ShareLabel>LINK</ShareLabel>
        </ShareItem>

        {/* 더보기 (Web Share API) */}
        <ShareItem>
          <ShareCircle aria-label="더보기" onClick={handleNativeShare}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8"/>
              <polyline points="16 6 12 2 8 6"/>
              <line x1="12" y1="2" x2="12" y2="15"/>
            </svg>
          </ShareCircle>
          <ShareLabel>MORE</ShareLabel>
        </ShareItem>

      </ShareButtonRow>
    </Section>
  );
}
