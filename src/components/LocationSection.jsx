import React, { useEffect, useRef } from 'react';
import {
  Section, SectionLabel,
  VenueName, VenueDetail, VenuePhone,
  MapButtonRow, MapButton,
  TransportTitle, TransportDesc,
} from '../styles/styled';

const KAKAO_APP_KEY = '36bd7ed82531660cde9013ad17b59753';
const LAT = 37.5253;
const LNG = 126.9241;

function renderMap(container) {
  const { kakao } = window;
  const map = new kakao.maps.Map(container, {
    center: new kakao.maps.LatLng(LAT, LNG),
    level: 3,
  });
  const marker = new kakao.maps.Marker({
    position: new kakao.maps.LatLng(LAT, LNG),
  });
  marker.setMap(map);
  new kakao.maps.InfoWindow({
    content: '<div style="padding:6px 10px;font-size:13px;font-family:sans-serif;white-space:nowrap;">여의도 FKI 플라자</div>',
  }).open(map, marker);
}

export default function LocationSection() {
  const mapRef = useRef(null);

  useEffect(() => {
    const container = mapRef.current;
    if (!container) return;

    // 이미 SDK가 완전히 로드된 상태면 바로 렌더
    if (window.kakao?.maps?.Map) {
      renderMap(container);
      return;
    }

    // SDK 스크립트 삽입 (중복 방지)
    if (!document.getElementById('kakao-map-sdk')) {
      const script = document.createElement('script');
      script.id  = 'kakao-map-sdk';
      script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_APP_KEY}&autoload=false`;
      document.head.appendChild(script);
    }

    // kakao.maps.Map 생성자가 준비될 때까지 폴링
    let timer;
    let attempts = 0;
    const wait = () => {
      attempts++;
      if (window.kakao?.maps?.Map) {
        renderMap(container);
      } else if (window.kakao?.maps && typeof window.kakao.maps.load === 'function') {
        window.kakao.maps.load(() => renderMap(container));
      } else if (attempts < 100) {
        timer = setTimeout(wait, 100);
      }
    };
    timer = setTimeout(wait, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Section id="location">
      <SectionLabel>Location</SectionLabel>
      <VenueName>여의도 FKI 플라자</VenueName>
      <VenueDetail>서울특별시 영등포구 여의대로 24</VenueDetail>
      <VenueDetail>1층 그랜드볼룸홀</VenueDetail>

      <div
        ref={mapRef}
        style={{
          width: '100%',
          height: '240px',
          borderRadius: '4px',
          marginBottom: '16px',
          background: '#2a2a2a',
        }}
      />

      <MapButtonRow>
        <MapButton href="https://naver.me/5bVYDg0d" target="_blank" rel="noreferrer">
          네이버 지도 ↗
        </MapButton>
        <MapButton href="https://kko.to/NJkVWWEW-w" target="_blank" rel="noreferrer">
          카카오맵 ↗
        </MapButton>
      </MapButtonRow>

      <div style={{ width: '100%' }}>
        <TransportTitle>[지하철]</TransportTitle>
        <TransportDesc>5호선 여의도역 1번 출구에서 도보 3분</TransportDesc>
        <TransportTitle>[주차 안내]</TransportTitle>
        <TransportDesc>
          FKI 플라자 건물 내 주차장 이용 가능<br />
          3시간 무료 주차 지원
        </TransportDesc>
      </div>
    </Section>
  );
}