import React, { useState, useEffect, useCallback, useRef } from 'react';
import styled from 'styled-components';
import {
  Section, SectionLabel,
  GalleryGrid, GalleryCell,
  GalleryPreviewText, GalleryMoreNum, GalleryMoreLabel,
  GalleryVideoWrap, GalleryVideoLabel,
  LightboxOverlay, LightboxImg, LightboxClose, LightboxNav, LightboxCounter,
} from '../styles/styled';
import {
  GALLERY_PHOTOS,
  GALLERY_VISIBLE_COUNT,
  GALLERY_VIDEO,
  GALLERY_VIDEO_POSTER, // mediaConfig에 없으면 undefined — 자동 캡처로 대체됨
} from '../data/mediaConfig';

const VW = () => window.innerWidth;

/* ── 커스텀 비디오 플레이어 ── */
const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 200px;
  background: #111;
  overflow: hidden;
  line-height: 0;
`;

const ThumbLayer = styled.div`
  position: absolute;
  inset: 0;
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  cursor: pointer;
  background: ${({ $src }) =>
    $src ? `url("${$src}") center / cover no-repeat` : '#1c1c1c'};

  /* 포스터 이미지 위 어두운 레이어 */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.28);
  }
`;

const PlayBtn = styled.button`
  position: relative;
  z-index: 4;
  width: 68px;
  height: 68px;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.9);
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  outline: none;
  -webkit-tap-highlight-color: transparent;
  transition: transform 0.13s;

  &:active {
    transform: scale(0.88);
    background: rgba(0, 0, 0, 0.65);
  }
`;

const PlayHint = styled.span`
  position: relative;
  z-index: 4;
  color: rgba(255, 255, 255, 0.75);
  font-size: 12px;
  letter-spacing: 0.06em;
  font-family: inherit;
`;

export default function GallerySection() {
  const hasPhotos = GALLERY_PHOTOS.length > 0;
  const total     = GALLERY_PHOTOS.length;

  const [expanded,    setExpanded]    = useState(false);
  const [lightboxIdx, setLightboxIdx] = useState(null);
  const isOpen = lightboxIdx !== null;

  const [offset,     setOffset]     = useState(0);
  const [sliding,    setSliding]    = useState(false);
  const [displayIdx, setDisplayIdx] = useState(null);

  // 비디오 상태
  const [videoStarted, setVideoStarted] = useState(false);
  const [thumbSrc,     setThumbSrc]     = useState(GALLERY_VIDEO_POSTER ?? null);

  const touchStartX     = useRef(null);
  const isDragging      = useRef(false);
  const isTransitioning = useRef(false);
  const slideTimer      = useRef(null);
  const lightboxIdxRef  = useRef(null);
  const videoRef        = useRef(null);

  useEffect(() => {
    lightboxIdxRef.current = lightboxIdx;
  }, [lightboxIdx]);

  // 자동 썸네일 캡처 — GALLERY_VIDEO_POSTER 없을 때만 실행
  useEffect(() => {
    if (!GALLERY_VIDEO || GALLERY_VIDEO_POSTER) return;

    const vid       = document.createElement('video');
    vid.src         = GALLERY_VIDEO;
    vid.muted       = true;
    vid.playsInline = true;
    vid.preload     = 'metadata';

    const capture = () => {
      try {
        const canvas  = document.createElement('canvas');
        canvas.width  = vid.videoWidth  || 640;
        canvas.height = vid.videoHeight || 360;
        canvas.getContext('2d').drawImage(vid, 0, 0);
        setThumbSrc(canvas.toDataURL('image/jpeg', 0.85));
      } catch (e) {
        // CORS 등 캡처 실패 시 썸네일 없이 진행
      }
      vid.src = '';
    };

    vid.addEventListener('loadedmetadata', () => { vid.currentTime = 0.1; });
    vid.addEventListener('seeked', capture, { once: true });
    vid.load();

    return () => { vid.src = ''; };
  }, []);

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

    const newIdx       = direction === 'next'
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

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  useEffect(() => {
    return () => {
      if (slideTimer.current) clearTimeout(slideTimer.current);
    };
  }, []);

  // 탭 → user gesture 내 실행이므로 소리 있는 재생 허용
  const handlePlay = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    setVideoStarted(true);
    video.play().catch(() => {});
  }, []);

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
            <VideoContainer>
              <video
                ref={videoRef}
                src={GALLERY_VIDEO}
                playsInline
                controls
                preload="metadata"
                style={{ width: '100%', display: 'block' }}
                onEnded={() => {
                  setVideoStarted(false);
                  if (videoRef.current) videoRef.current.currentTime = 0;
                }}
              />

              {/* 썸네일 오버레이 — 재생 전까지 표시 */}
              {!videoStarted && (
                <ThumbLayer $src={thumbSrc} onClick={handlePlay}>
                  <PlayBtn>
                    <svg
                      width="26"
                      height="26"
                      viewBox="0 0 24 24"
                      fill="white"
                      style={{ marginLeft: 4 }}
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </PlayBtn>
                  <PlayHint>탭하여 영상 재생</PlayHint>
                </ThumbLayer>
              )}
            </VideoContainer>
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
