import React, { useEffect, useRef } from 'react';
import {
  Section, SectionLabel,
  VenueName, VenueDetail, VenuePhone,
  MapButtonRow, MapButton,
  TransportTitle, TransportDesc,
} from '../styles/styled';

const KAKAO_APP_KEY = '36bd7ed82531660cde9013ad17b59753';
// 여의도 FKI 플라자 좌표
const LAT = 37.5253;
const LNG = 126.9241;

export default function LocationSection() {
  const mapRef  = useRef(null);
  const loaded  = useRef(false);

  useEffect(() => {
    if (loaded.current) return;
    loaded.current = true;

    const initMap = () => {
      const attempts = { count: 0 };
      const timer = setInterval(() => {
        attempts.count++;
        if (window.kakao && window.kakao.maps) {
          clearInterval(timer);
          window.kakao.maps.load(() => {
            const container = mapRef.current;
            if (!container) return;
            const map = new window.kakao.maps.Map(container, {
              center: new window.kakao.maps.LatLng(LAT, LNG),
              level: 3,
            });
            // 마커
            const marker = new window.kakao.maps.Marker({
              position: new window.kakao.maps.LatLng(LAT, LNG),
            });
            marker.setMap(map);
            // 인포윈도우
            const infowindow = new window.kakao.maps.InfoWindow({
              content: '<div style="padding:6px 10px;font-size:13px;font-family:sans-serif;white-space:nowrap;">여의도 FKI 플라자</div>',
            });
            infowindow.open(map, marker);
          });
        } else if (attempts.count >= 50) {
          clearInterval(timer);
        }
      }, 100);
    };

    // SDK 스크립트가 이미 있으면 바로 초기화
    if (document.getElementById('kakao-map-sdk')) {
      initMap();
      return;
    }

    const script = document.createElement('script');
    script.id  = 'kakao-map-sdk';
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_APP_KEY}&autoload=false`;
    script.onload = initMap;
    document.head.appendChild(script);
  }, []);

  return (
    <Section id="location">
      <SectionLabel>Location</SectionLabel>
      <VenueName>여의도 FKI 플라자</VenueName>
      <VenueDetail>서울특별시 영등포구 여의대로 24</VenueDetail>
      <VenueDetail>1층 그랜드볼룸홀</VenueDetail>

      {/* 카카오맵 */}
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