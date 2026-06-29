import React from 'react';
import {
  HeroSection as HeroWrap,
  HeroTop, YoureInvited,
  HeroNameGroom, HeroAnd, HeroNameBride,
  HeroDate, HeroVenue,
  HeroPhoto, PhotoPlaceholder,
} from '../styles/styled';
import { HERO_PHOTO, HERO_VIDEO } from '../data/mediaConfig';

export default function HeroSection() {
  return (
    <HeroWrap id="hero">
      <HeroTop>
        <HeroNameGroom>HYEONWOO</HeroNameGroom>
        <HeroAnd>&amp;</HeroAnd>
        <HeroNameBride>JISU</HeroNameBride>
        <HeroDate>2027.02.21 오후 4시</HeroDate>
        <HeroVenue>여의도 FKI 플라자 1층</HeroVenue>
      </HeroTop>

      <HeroPhoto>
        {HERO_VIDEO ? (
          // 동영상 우선 — 무음 자동재생 루프
          <video
            src={HERO_VIDEO}
            autoPlay
            loop
            muted
            playsInline
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        ) : HERO_PHOTO ? (
          // 사진
          <img src={HERO_PHOTO} alt="웨딩 사진" />
        ) : (
          // 플레이스홀더
          <PhotoPlaceholder>PHOTO</PhotoPlaceholder>
        )}
      </HeroPhoto>
    </HeroWrap>
  );
}
