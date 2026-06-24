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

  const [offset,     setOffset]     = useState(0);
  const [sliding,    setSliding]    = useState(false);
  const [displayIdx, setDisplayIdx] = useState(null);

  const touchStartX      = useRef(null);
  const isDragging       = useRef(false);
  const isTransitioning  = useRef(false);
  const slideTimer       = useRef(null);
  const lightboxIdxRef   = useRef(null);
  const videoRef         = useRef(null);

  // lightboxIdx 변경 시 ref 동기화
  useEffect(() => {
    lightboxIdxRef.current = lightboxIdx;
  }, [lightboxIdx]);

  const visiblePhotos = expanded ? GALLERY_PHOTOS : GALLERY_PHOTOS.slice(0, GALLERY_VISIBLE_COUNT);
  const remainCount   = Math.max(0, total - GALLERY_VISIBLE_COUNT);

  const openLightbox = (i) => {
    setLightboxIdx(i);
    setDisplayIdx(i);
    setOffset(0);
    setSliding(false);
    isTransitioning.current = false;
  };

  const close = useCallback(() => {
    if (slideTimer.current) clearTimeout(slideTimer.current);
    isTransitioning.current = false;
    setLightboxIdx(null);
    setDisplayIdx(null);
    setOffset(0);
    setSliding(false);
  }, []);

  const slideTo = useCallback((direction) => {
    if (total <= 1) return;
    if (isTransitioning.current) return;

    const currentIdx = lightboxIdxRef.current;
    if (currentIdx === null) return;

    const newIdx = direction === 'next'
      ? (currentIdx + 1) % total
      : (currentIdx - 1 + total) % total;
    const targetOffset = direction === 'next' ? -VW() : VW();

    isTransitioning.current = true;
    setSliding(true);
    setOffset(targetOffset);

    if (slideTimer.current) clearTimeout(slideTimer.current);
    slideTimer.current = setTimeout(() => {
      setSliding(false);
      setOffset(0);
      setLightboxIdx(newIdx);
      setDisplayIdx(newIdx);
      lightboxIdxRef.current  = newIdx;
      isTransitioning.current = false;
    }, 320);
  }, [total]);

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
  }, [isOpen, prev, next, close]);

  // 스크롤 막기
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // 언마운트 시 타이머 정리
  useEffect(() => {
    return () => {
      if (slideTimer.current) clearTimeout(slideTimer.current);
    };
  }, []);

  // 터치
  const onTouchStart = useCallback((e) => {
    if (isTransitioning.current) return;
    touchStartX.current = e.touches[0].clientX;
    isDragging.current  = true;
    setSliding(false);
  }, []);

  const onTouchMove = useCallback((e) => {
    if (!isDragging.current || touchStartX.current === null) return;
    if (isTransitioning.current) return;
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

  // 비디오 뷰포트 진입 시 자동재생 + 이탈 시 일시정지
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

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
              ref={videoRef}
              src={GALLERY_VIDEO}
              loop
              muted
              playsInline
              controls
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
              onClick={(e) => e.stopPropagation()}
            />

            {total > 1 && (
              <>
                <LightboxNav $dir="prev" onClick={(e) => { e.stopPropagation(); prev(); }}>‹</LightboxNav>
                <LightboxNav $dir="next" onClick={(e) => { e.stopPropagation(); next(); }}>›</LightboxNav>
              </>
            )}

            <LightboxCounter>{displayIdx + 1} / {total}</LightboxCounter>
          </>
        )}
      </LightboxOverlay>
    </>
  );
}
