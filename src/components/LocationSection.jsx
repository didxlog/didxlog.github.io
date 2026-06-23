import React from 'react';
import {
  Section, SectionLabel,
  VenueName, VenueDetail, VenuePhone,
  MapBox, MapLabel, MapButtonRow, MapButton,
  TransportTitle, TransportDesc,
} from '../styles/styled';
import { C } from '../styles/colors';

export default function LocationSection() {
  return (
    <Section id="location">
      <SectionLabel>Location</SectionLabel>
      <VenueName>여의도 FKI 플라자</VenueName>
      <VenueDetail>서울특별시 영등포구 여의대로 24</VenueDetail>
      <VenueDetail>1층 그랜드볼룸홀</VenueDetail>

      <MapBox>
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none"
          stroke={C.creamMuted} strokeWidth="1.5" style={{ marginBottom: '10px' }}>
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
          <circle cx="12" cy="9" r="2.5"/>
        </svg>
        <MapLabel>MAP PREVIEW</MapLabel>
      </MapBox>

      <MapButtonRow>
        <MapButton href="https://m.naver.me/5bVYDg0d" target="_blank" rel="noreferrer">
          네이버 지도 ↗
        </MapButton>
        <MapButton href="https://m.kko.to/NJkVWWEW-w" target="_blank" rel="noreferrer">
          카카오맵 ↗
        </MapButton>
      </MapButtonRow>

      <div style={{ width: '100%' }}>
        <TransportTitle>[지하철]</TransportTitle>
        <TransportDesc>
          5호선 여의도역 1번 출구에서 도보 3분
        </TransportDesc>
        <TransportTitle>[주차 안내]</TransportTitle>
        <TransportDesc>
          FKI 플라자 건물 내 주차장 이용 가능<br />
          3시간 무료 주차 지원
        </TransportDesc>
      </div>
    </Section>
  );
}
