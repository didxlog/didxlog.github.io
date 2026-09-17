import React, { useEffect, useRef } from 'react';
import {
  Section, SectionLabel,
  VenueName, VenueDetail, VenuePhone,
  MapButtonRow, MapButton,
  TransportTitle, TransportDesc,
} from '../styles/styled';

const KAKAO_APP_KEY = '36bd7ed82531660cde9013ad17b59753';
const KEYWORD = 'FKI전경련플라자 웨딩홀';   // 카카오 Places 검색용
const NAVER_VENUE_NAME = 'FKI플라자';        // 네이버 딥링크 표시명

// 좌표가 아직 안 구해졌을 때 쓸 기본값 (여의도 FKI플라자 근사치, 필요시 실제값으로 교체)
const FALLBACK_LAT = 37.5219;
const FALLBACK_LNG = 126.9245;

const NAVER_WEB_URL  = 'https://naver.me/5bVYDg0d';
const KAKAO_WEB_URL  = 'https://kko.to/NJkVWWEW-w';

function isIOS()      { return /iPhone|iPad|iPod/i.test(navigator.userAgent); }
function isAndroid()  { return /Android/i.test(navigator.userAgent); }
function isMobile()   { return isIOS() || isAndroid(); }

function tryOpenApp(appUrl, webUrl) {
  if (!isMobile()) {
    window.open(webUrl, '_blank');
    return;
  }

  let appOpened = false;

  const onVisibilityChange = () => {
    // 페이지가 한 번이라도 숨겨졌다면 = 앱으로 전환된 것으로 간주
    if (document.hidden) appOpened = true;
  };
  const onPageHide = () => { appOpened = true; };

  document.addEventListener('visibilitychange', onVisibilityChange);
  window.addEventListener('pagehide', onPageHide);

  window.location.href = appUrl;

  setTimeout(() => {
    document.removeEventListener('visibilitychange', onVisibilityChange);
    window.removeEventListener('pagehide', onPageHide);

    // 그 사이에 한 번도 안 숨겨졌으면 = 진짜로 앱이 없어서 안 열린 것 → 그때만 웹으로 폴백
    if (!appOpened) {
      window.location.href = webUrl;
    }
  }, 1500);
}

function openNaverMap({ lat, lng }) {
  const name = encodeURIComponent(NAVER_VENUE_NAME);
  const appUrl = isIOS()
    ? `nmap://place?lat=${lat}&lng=${lng}&name=${name}&appname=${encodeURIComponent(window.location.href)}`
    : `intent://place?lat=${lat}&lng=${lng}&name=${name}#Intent;scheme=nmap;package=com.nhn.android.nmap;end;`;
  tryOpenApp(appUrl, NAVER_WEB_URL);
}

function openKakaoMap({ lat, lng }) {
  const appUrl = isIOS()
    ? `kakaomap://look?p=${lat},${lng}`
    : `intent://look?p=${lat},${lng}#Intent;scheme=kakaomap;package=net.daum.android.map;end;`;
  tryOpenApp(appUrl, KAKAO_WEB_URL);
}

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

function geocodeAndRender(container, coordsRef) {
  const places = new window.kakao.maps.services.Places();
  places.keywordSearch(KEYWORD, (result, status) => {
    if (status === window.kakao.maps.services.Status.OK) {
      const lat = result[0].y;
      const lng = result[0].x;
      coordsRef.current = { lat, lng }; // 딥링크용으로 저장
      renderMap(container, lat, lng);
    }
  });
}

export default function LocationSection() {
  const mapRef = useRef(null);
  const coordsRef = useRef({ lat: FALLBACK_LAT, lng: FALLBACK_LNG });

  useEffect(() => {
    const container = mapRef.current;
    if (!container) return;

    const loadSdk = () => {
      if (document.getElementById('kakao-map-sdk')) return;
      const script = document.createElement('script');
      script.id  = 'kakao-map-sdk';
      script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_APP_KEY}&libraries=services&autoload=false`;
      document.head.appendChild(script);
    };

    loadSdk();

    let timer;
    let attempts = 0;
    const wait = () => {
      attempts++;
      const k = window.kakao;
      if (k?.maps?.Map && k?.maps?.services?.Geocoder) {
        k.maps.load(() => geocodeAndRender(container, coordsRef));
      } else if (k?.maps && typeof k.maps.load === 'function' && !k.maps.Map) {
        k.maps.load(() => {
          if (k?.maps?.services?.Geocoder) geocodeAndRender(container, coordsRef);
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
        <MapButton as="button" onClick={() => openNaverMap(coordsRef.current)}>
          네이버맵 ↗
        </MapButton>
        <MapButton as="button" onClick={() => openKakaoMap(coordsRef.current)}>
          카카오맵 ↗
        </MapButton>
      </MapButtonRow>

      <div style={{ width: '100%' }}>
        <TransportTitle>[버스]</TransportTitle>
        <TransportDesc>여의도역 정류장</TransportDesc>
        <TransportDesc>한국경제인협회 정류장</TransportDesc>
        <TransportDesc>여의도역 환승센터 정류장</TransportDesc>

        <TransportTitle>[지하철]</TransportTitle>
        <TransportDesc>5·9호선 여의도역 1번 출구 도보 5분</TransportDesc>
        <TransportTitle>[주차 안내]</TransportTitle>
        <TransportDesc>
          FKI 플라자 건물 내 주차장 이용 가능<br />
          700대, 3시간 무료 주차 지원
        </TransportDesc>
      </div>
    </Section>
  );
}