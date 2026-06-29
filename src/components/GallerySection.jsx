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

// 이미지 보호 공통 스타일
const protectedImgStyle = {
  WebkitUserSelect: 'none',
  userSelect: 'none',
  WebkitTouchCallout: 'none',
  pointerEvents: 'none',
  draggable: false,
};

export default function GallerySection() {
  const hasPhotos = GALLERY_PHOTOS.length > 0;
  const total     = GALLERY_PHOTOS.length;

  const [expanded,    setExpanded]    = useState(false);
  const [lightboxIdx, setLightboxIdx] = useState(null);
  const isOpen = lightboxIdx !== null;

  const [offset,     setOffset]     = useState(0);
  const [sliding,    setSliding]    = useState(false);
  const [displayIdx, setDisplayIdx] = useState(null);

  const touchStartX = useRef(null);
  const isDragging  = useRef(false);

  const visiblePhotos = expanded ? GALLERY_PHOTOS : GALLERY_PHOTOS.slice(0, GALLERY_VISIBLE_COUNT);
  const remainCount   = Math.max(0, total - GALLERY_VISIBLE_COUNT);

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

  const slideTo = useCallback((direction) => {
    if (total <= 1) return;
    const newIdx = direction === 'next'
      ? (lightboxIdx + 1) % total
      : (lightboxIdx - 1 + total) % total;
    const targetOffset = direction === 'next' ? -VW() : VW();
    setSliding(true);
    setOffset(targetOffset);
    setTimeout(() => {
      setSliding(false);
      setOffset(0);
      setLightboxIdx(newIdx);
      setDisplayIdx(newIdx);
    }, 320);
  }, [lightboxIdx, total]);

  const prev = useCallback(() => slideTo('prev'), [slideTo]);
  const next = useCallback(() => slideTo('next'), [slideTo]);

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

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

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
      dx < 0 ? next() : prev();
    } else {
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
              alt=""
              draggable={false}
              onContextMenu={e => e.preventDefault()}
              $offset={offset}
              $sliding={sliding}
              onClick={e => e.stopPropagation()}
              style={{ ...protectedImgStyle, pointerEvents: 'auto' }}
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