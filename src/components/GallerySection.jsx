import React, { useState, useEffect, useCallback, useRef } from 'react';
import {
  Section, SectionLabel,
  GalleryGrid, GalleryCell,
  GalleryPreviewText, GalleryMoreNum, GalleryMoreLabel,
  GalleryVideoWrap, GalleryVideoLabel,
  LightboxOverlay, LightboxImg, LightboxClose, LightboxNav, LightboxCounter,
} from '../styles/styled';
import { GALLERY_PHOTOS, GALLERY_VISIBLE_COUNT, GALLERY_VIDEO } from '../data/mediaConfig';

export default function GallerySection() {
  const hasPhotos  = GALLERY_PHOTOS.length > 0;
  const total      = GALLERY_PHOTOS.length;

  const [expanded,    setExpanded]    = useState(false);
  const [lightboxIdx, setLightboxIdx] = useState(null);
  const isOpen = lightboxIdx !== null;
  const swipeX = useRef(null);

  const visiblePhotos = expanded ? GALLERY_PHOTOS : GALLERY_PHOTOS.slice(0, GALLERY_VISIBLE_COUNT);
  const remainCount   = Math.max(0, total - GALLERY_VISIBLE_COUNT);

  const close = () => setLightboxIdx(null);
  const prev  = useCallback(() => setLightboxIdx(i => (i - 1 + total) % total), [total]);
  const next  = useCallback(() => setLightboxIdx(i => (i + 1) % total), [total]);

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

  // 스와이프
  const onTouchStart = useCallback((e) => {
    swipeX.current = e.touches[0].clientX;
  }, []);
  const onTouchEnd = useCallback((e) => {
    if (swipeX.current === null) return;
    const dx = e.changedTouches[0].clientX - swipeX.current;
    swipeX.current = null;
    if (Math.abs(dx) < 40) return;
    dx < 0 ? next() : prev();
  }, [prev, next]);

  return (
    <>
      <Section id="gallery" style={{ paddingLeft: 0, paddingRight: 0 }}>
        <SectionLabel style={{ paddingLeft: 28 }}>Gallery</SectionLabel>

        {/* 사진 그리드 */}
        <GalleryGrid>
          {hasPhotos ? (
            <>
              {visiblePhotos.map((src, i) => (
                <GalleryCell
                  key={i}
                  onClick={() => setLightboxIdx(i)}
                  style={{ cursor: 'pointer' }}
                >
                  <img
                    src={src}
                    alt={`갤러리 ${i + 1}`}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                </GalleryCell>
              ))}
              {!expanded && remainCount > 0 && (
                <GalleryCell
                  $isMore
                  onClick={() => setExpanded(true)}
                  style={{ cursor: 'pointer' }}
                >
                  <GalleryMoreNum>+{remainCount}</GalleryMoreNum>
                  <GalleryMoreLabel>MORE</GalleryMoreLabel>
                </GalleryCell>
              )}
            </>
          ) : (
            <>
              {Array.from({ length: 5 }).map((_, i) => (
                <GalleryCell key={i}>
                  <GalleryPreviewText>Preview</GalleryPreviewText>
                </GalleryCell>
              ))}
              <GalleryCell $isMore>
                <GalleryMoreNum>+1</GalleryMoreNum>
                <GalleryMoreLabel>MORE</GalleryMoreLabel>
              </GalleryCell>
            </>
          )}
        </GalleryGrid>

        {/* 단독 동영상 — 사진 그리드 바로 아래 */}
        {GALLERY_VIDEO && (
          <GalleryVideoWrap>
            <GalleryVideoLabel>Film</GalleryVideoLabel>
            <video
              src={GALLERY_VIDEO}
              controls
              playsInline
              style={{ width: '100%', display: 'block' }}
            />
          </GalleryVideoWrap>
        )}
      </Section>

      {/* 라이트박스 */}
      <LightboxOverlay
        $visible={isOpen}
        onClick={close}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <LightboxClose onClick={close}>✕</LightboxClose>
        {isOpen && (
          <>
            <LightboxImg
              src={GALLERY_PHOTOS[lightboxIdx]}
              alt={`갤러리 ${lightboxIdx + 1}`}
              onClick={e => e.stopPropagation()}
            />
            {total > 1 && (
              <>
                <LightboxNav $dir="prev" onClick={e => { e.stopPropagation(); prev(); }}>‹</LightboxNav>
                <LightboxNav $dir="next" onClick={e => { e.stopPropagation(); next(); }}>›</LightboxNav>
              </>
            )}
            <LightboxCounter>{lightboxIdx + 1} / {total}</LightboxCounter>
          </>
        )}
      </LightboxOverlay>
    </>
  );
}