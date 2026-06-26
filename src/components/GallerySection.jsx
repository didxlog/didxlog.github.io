import React, { useState, useEffect, useCallback, useRef } from 'react';
import {
  Section, SectionLabel,
  GalleryGrid, GalleryCell,
  GalleryPreviewText, GalleryMoreNum, GalleryMoreLabel,
  GalleryVideoWrap, GalleryVideoLabel,
  LightboxOverlay, LightboxImg, LightboxClose, LightboxNav, LightboxCounter,
} from '../styles/styled';
import { GALLERY_PHOTOS, GALLERY_VISIBLE_COUNT, GALLERY_VIDEO } from '../data/mediaConfig';

const VW = () => window.innerWidth;

export default function GallerySection() {
  const hasPhotos = GALLERY_PHOTOS.length > 0;
  const total     = GALLERY_PHOTOS.length;

  const [expanded,    setExpanded]    = useState(false);
  const [lightboxIdx, setLightboxIdx] = useState(null);
  const isOpen = lightboxIdx !== null;

  // 슬라이드 애니메이션 state
  const [offset,   setOffset]   = useState(0);   // 드래그 중 px 오프셋
  const [sliding,  setSliding]  = useState(false); // transition 적용 여부
  const [displayIdx, setDisplayIdx] = useState(null); // 실제 보여주는 인덱스 (전환 중 유지)

  const touchStartX = useRef(null);
  const isDragging  = useRef(false);

  const visiblePhotos = expanded ? GALLERY_PHOTOS : GALLERY_PHOTOS.slice(0, GALLERY_VISIBLE_COUNT);
  const remainCount   = Math.max(0, total - GALLERY_VISIBLE_COUNT);

  // 라이트박스 열기
  const openLightbox = (i) => {
    setLightboxIdx(i);
    setDisplayIdx(i);
    setOffset(0);
    setSliding(false);
  };

  const close = () => {
    setLightboxIdx(null);
    setDisplayIdx(null);
    setOffset(0);
  };

  // 슬라이드 전환 — direction: 'prev' | 'next'
  const slideTo = useCallback((direction) => {
    if (total <= 1) return;
    const newIdx = direction === 'next'
      ? (lightboxIdx + 1) % total
      : (lightboxIdx - 1 + total) % total;
    const targetOffset = direction === 'next' ? -VW() : VW();

    // 1) 현재 사진을 목표 방향으로 밀어냄
    setSliding(true);
    setOffset(targetOffset);

    // 2) transition 끝나면 인덱스 바꾸고 offset 리셋 (no transition)
    setTimeout(() => {
      setSliding(false);
      setOffset(0);
      setLightboxIdx(newIdx);
      setDisplayIdx(newIdx);
    }, 320);
  }, [lightboxIdx, total]);

  const prev = useCallback(() => slideTo('prev'), [slideTo]);
  const next = useCallback(() => slideTo('next'), [slideTo]);

  // 키보드
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === 'ArrowLeft')  prev();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'Escape')     close();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, prev, next]);

  // 스크롤 막기
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // 터치 — 손가락 따라 실시간으로 사진 이동
  const onTouchStart = useCallback((e) => {
    if (sliding) return;
    touchStartX.current = e.touches[0].clientX;
    isDragging.current  = true;
    setSliding(false);
  }, [sliding]);

  const onTouchMove = useCallback((e) => {
    if (!isDragging.current || touchStartX.current === null) return;
    const dx = e.touches[0].clientX - touchStartX.current;
    setOffset(dx);
  }, []);

  const onTouchEnd = useCallback((e) => {
    if (!isDragging.current) return;
    isDragging.current = false;
    const dx = e.changedTouches[0].clientX - (touchStartX.current ?? 0);
    touchStartX.current = null;

    if (Math.abs(dx) > 60) {
      // 충분히 스와이프 → 슬라이드 전환
      dx < 0 ? next() : prev();
    } else {
      // 짧으면 원위치로 튕겨 돌아오기
      setSliding(true);
      setOffset(0);
      setTimeout(() => setSliding(false), 320);
    }
  }, [prev, next]);

  return (
    <>
      <Section id="gallery" style={{ paddingLeft: 0, paddingRight: 0 }}>
        <SectionLabel style={{ paddingLeft: 28 }}>Gallery</SectionLabel>

        <GalleryGrid>
          {hasPhotos ? (
            <>
              {visiblePhotos.map((src, i) => (
                <GalleryCell key={i} onClick={() => openLightbox(i)} style={{ cursor: 'pointer' }}>
                  <img
                    src={src}
                    alt={`갤러리 ${i + 1}`}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                </GalleryCell>
              ))}
              {!expanded && remainCount > 0 && (
                <GalleryCell $isMore onClick={() => setExpanded(true)} style={{ cursor: 'pointer' }}>
                  <GalleryMoreNum>+{remainCount}</GalleryMoreNum>
                  <GalleryMoreLabel>MORE</GalleryMoreLabel>
                </GalleryCell>
              )}
            </>
          ) : (
            <>
              {Array.from({ length: 5 }).map((_, i) => (
                <GalleryCell key={i}><GalleryPreviewText>Preview</GalleryPreviewText></GalleryCell>
              ))}
              <GalleryCell $isMore>
                <GalleryMoreNum>+1</GalleryMoreNum>
                <GalleryMoreLabel>MORE</GalleryMoreLabel>
              </GalleryCell>
            </>
          )}
        </GalleryGrid>

        {GALLERY_VIDEO && (
          <GalleryVideoWrap>
            <GalleryVideoLabel>Film</GalleryVideoLabel>
            <video
              src={GALLERY_VIDEO}
              controls
              playsInline
              style={{ width: '100%', display: 'block' }}
              ref={el => {
                if (!el) return;
                // 첫 터치/클릭 시 자동재생 시도
                const play = () => { el.play().catch(() => {}); };
                window.addEventListener('touchstart', play, { once: true });
                window.addEventListener('click',      play, { once: true });
              }}
            />
          </GalleryVideoWrap>
        )}
      </Section>

      {/* 라이트박스 */}
      <LightboxOverlay
        $visible={isOpen}
        onClick={close}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        style={{ overflow: 'hidden' }}
      >
        <LightboxClose onClick={close}>✕</LightboxClose>

        {isOpen && displayIdx !== null && (
          <>
            <LightboxImg
              src={GALLERY_PHOTOS[displayIdx]}
              alt={`갤러리 ${displayIdx + 1}`}
              $offset={offset}
              $sliding={sliding}
              onClick={e => e.stopPropagation()}
            />

            {total > 1 && (
              <>
                <LightboxNav $dir="prev" onClick={e => { e.stopPropagation(); prev(); }}>‹</LightboxNav>
                <LightboxNav $dir="next" onClick={e => { e.stopPropagation(); next(); }}>›</LightboxNav>
              </>
            )}

            <LightboxCounter>{displayIdx + 1} / {total}</LightboxCounter>
          </>
        )}
      </LightboxOverlay>
    </>
  );
}