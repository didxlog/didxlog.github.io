import React, { useState, useEffect, useCallback, useRef } from 'react';
import {
  Section, SectionLabel,
  GalleryGrid, GalleryCell,
  GalleryPreviewText, GalleryMoreNum, GalleryMoreLabel,
  GalleryVideoWrap, GalleryVideoLabel,
  LightboxOverlay, LightboxImg, LightboxClose, LightboxNav, LightboxCounter,
} from '../styles/styled';
import { GALLERY_PHOTOS, GALLERY_VISIBLE_COUNT, GALLERY_VIDEO } from '../data/mediaConfig';

const protectedImgStyle = {
  WebkitUserSelect: 'none',
  userSelect: 'none',
  WebkitTouchCallout: 'none',
  draggable: false,
};

export default function GallerySection() {
  const hasPhotos = GALLERY_PHOTOS.length > 0;
  const total     = GALLERY_PHOTOS.length;

  const [expanded,    setExpanded]    = useState(false);
  const [lightboxIdx, setLightboxIdx] = useState(null);
  const [visible,     setVisible]     = useState(true);
  const isOpen = lightboxIdx !== null;

  const touchStartX = useRef(null);
  const fadeTimer   = useRef(null);

  // MORE 뒤에 숨겨진 사진 미리 로드
  useEffect(() => {
    const hidden = GALLERY_PHOTOS.slice(GALLERY_VISIBLE_COUNT);
    hidden.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  const visiblePhotos = expanded ? GALLERY_PHOTOS : GALLERY_PHOTOS.slice(0, GALLERY_VISIBLE_COUNT);
  const remainCount   = Math.max(0, total - GALLERY_VISIBLE_COUNT);

  const openLightbox = (i) => {
    setLightboxIdx(i);
    setVisible(true);
  };

  const close = () => {
    setLightboxIdx(null);
    setVisible(true);
  };

  // 페이드 아웃 → 인덱스 변경 → 페이드 인
  const goTo = useCallback((newIdx) => {
    // 이전 타이머 취소
    if (fadeTimer.current) clearTimeout(fadeTimer.current);
    setVisible(false);
    fadeTimer.current = setTimeout(() => {
      setLightboxIdx(newIdx);
      setVisible(true);
      fadeTimer.current = null;
    }, 200);
  }, []);

  const prev = useCallback(() => {
    if (lightboxIdx === null) return;
    goTo((lightboxIdx - 1 + total) % total);
  }, [lightboxIdx, total, goTo]);

  const next = useCallback(() => {
    if (lightboxIdx === null) return;
    goTo((lightboxIdx + 1) % total);
  }, [lightboxIdx, total, goTo]);

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
    touchStartX.current = e.touches[0].clientX;
  }, []);

  const onTouchEnd = useCallback((e) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(dx) > 50) {
      dx < 0 ? next() : prev();
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
                    alt=""
                    draggable={false}
                    onContextMenu={e => e.preventDefault()}
                    style={{
                      width: '100%', height: '100%', objectFit: 'cover', display: 'block',
                      ...protectedImgStyle,
                    }}
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
                const play = () => el.play().catch(() => {});
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
        onTouchEnd={onTouchEnd}
        style={{ overflow: 'hidden' }}
      >
        <LightboxClose onClick={close}>✕</LightboxClose>

        {isOpen && lightboxIdx !== null && (
          <>
            <LightboxImg
              src={GALLERY_PHOTOS[lightboxIdx]}
              alt=""
              draggable={false}
              onContextMenu={e => e.preventDefault()}
              $visible={visible}
              onClick={e => e.stopPropagation()}
              style={{ ...protectedImgStyle, pointerEvents: 'auto' }}
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