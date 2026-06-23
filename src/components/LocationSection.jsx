import React, { useEffect, useRef } from 'react';
import {
  Section, SectionLabel,
  VenueName, VenueDetail, VenuePhone,
  MapButtonRow, MapButton,
  TransportTitle, TransportDesc,
} from '../styles/styled';

const KAKAO_APP_KEY = '36bd7ed82531660cde9013ad17b59753';
const KEYWORD = 'FKI전경련플라자 웨딩홀';

function renderMap(container, lat, lng) {
  const map = new window.kakao.maps.Map(container, {
    center: new window.kakao.maps.LatLng(lat, lng),
    level: 3,
  });
  const marker = new window.kakao.maps.Marker({
    position: new window.kakao.maps.LatLng(lat, lng),
  });
  marker.setMap(map);
}

function geocodeAndRender(container) {
  const places = new window.kakao.maps.services.Places();
  places.keywordSearch(KEYWORD, (result, status) => {
    if (status === window.kakao.maps.services.Status.OK) {
      renderMap(container, result[0].y, result[0].x);
    }
  });
}

export default function LocationSection() {
  const mapRef = useRef(null);

  useEffect(() => {
    const container = mapRef.current;
    if (!container) return;

    // SDK + services 라이브러리 포함해서 로드
    const loadSdk = () => {
      if (document.getElementById('kakao-map-sdk')) return;
      const script = document.createElement('script');
      script.id  = 'kakao-map-sdk';
      // services 라이브러리 추가
      script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_APP_KEY}&libraries=services&autoload=false`;
      document.head.appendChild(script);
    };

    loadSdk();

    // kakao.maps.Map + services 둘 다 준비될 때까지 폴링
    let timer;
    let attempts = 0;
    const wait = () => {
      attempts++;
      const k = window.kakao;
      if (k?.maps?.Map && k?.maps?.services?.Geocoder) {
        k.maps.load(() => geocodeAndRender(container));
      } else if (k?.maps && typeof k.maps.load === 'function' && !k.maps.Map) {
        k.maps.load(() => {
          if (k?.maps?.services?.Geocoder) geocodeAndRender(container);
        });
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
      <br/>

      <div
        ref={mapRef}
        style={{
          width: '100%',
          height: '240px',
          borderRadius: '4px',
          marginBottom: '16px',
          background: '#0a1520',
        }}
      />

      <MapButtonRow>
        <MapButton href="https://naver.me/5bVYDg0d" target="_blank" rel="noreferrer">
          네이버맵 ↗
        </MapButton>
        <MapButton href="https://kko.to/NJkVWWEW-w" target="_blank" rel="noreferrer">
          카카오맵 ↗
        </MapButton>
      </MapButtonRow>

      <div style={{ width: '100%' }}>
        <TransportTitle>[버스]</TransportTitle>
        <TransportDesc>여의도역 정류장</TransportDesc>
        <TransportDesc>한국경제인협회 정류장</TransportDesc>
        <TransportDesc>여의도역 환승센터 정류장</TransportDesc>

        <TransportTitle>[지하철]</TransportTitle>
        <TransportDesc>5호선 여의도역 1번 출구 도보 3분</TransportDesc>
        <TransportTitle>[주차 안내]</TransportTitle>
        <TransportDesc>
          FKI 플라자 건물 내 주차장 이용 가능<br />
          700대, 3시간 무료 주차 지원
        </TransportDesc>
      </div>
    </Section>
  );
}