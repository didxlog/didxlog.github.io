// ─────────────────────────────────────────────────────────────────────────────
// 📁 미디어 파일 관리
//
// 모든 사진/동영상은 /public/media/ 폴더에 넣으세요.
// 이 파일에서 경로만 바꾸면 전체 반영됩니다.
// ─────────────────────────────────────────────────────────────────────────────

// ── 히어로 사진 (세로 3:4 비율 권장, 흑백 처리됨) ──
// null 이면 PHOTO 플레이스홀더로 표시
export const HERO_PHOTO = '/media/hero.webp';
export const HERO_VIDEO = null;
export const GALLERY_VIDEO_POSTER = null;

// ── 히어로 섹션 동영상 (사진 대신 동영상을 쓰고 싶을 때) ──
// 동영상이 설정되면 사진보다 우선 표시됩니다.
// 무음 자동재생 루프로 재생됩니다.
// export const HERO_VIDEO = '/media/hero.mp4';

// ── 갤러리 사진 목록 (순서대로 표시, 최대 5장 + 나머지는 +N으로) ──
// 빈 배열이면 플레이스홀더로 표시
export const GALLERY_PHOTOS = [
  '/media/1.webp',
  '/media/2.webp',
  '/media/3.webp',
  '/media/4.webp',
  '/media/5.webp',
  '/media/6.webp',
  '/media/7.webp',
  '/media/8.webp',
  '/media/9.webp',
  '/media/10.webp',
  '/media/11.webp',
  '/media/13.webp',
  '/media/14.webp',
  '/media/15.webp',
  '/media/16.webp',
  '/media/17.webp',
  '/media/18.webp',
  '/media/19.webp',
  '/media/20.webp',
  '/media/21.webp',
  '/media/22.webp',
  '/media/23.webp',
  '/media/24.webp',
  '/media/25.webp',
  '/media/26.webp',
  '/media/27.webp',
  '/media/28.webp',
  '/media/29.webp',
  '/media/30.webp',
  '/media/31.webp',
  '/media/32.webp',
  '/media/33.webp',
  '/media/34.webp',
  '/media/35.webp',
  '/media/36.webp',
  '/media/37.webp',
  '/media/38.webp',
  '/media/39.webp',
  '/media/40.webp',
];

// ── 갤러리에서 한 번에 보여줄 셀 수 (나머지는 +N) ──
export const GALLERY_VISIBLE_COUNT = 8;

// ── 갤러리 하단 단독 동영상 ──
// 사진 그리드 아래에 단독으로 표시됩니다.
export const GALLERY_VIDEO = null;
// export const GALLERY_VIDEO = '/media/video.mp4';

// ── Tip 섹션 사진 ──
// 순서대로: [돔형태, 동시예식, ATM위치]
export const TIP_PHOTOS = [
  '/media/tip1.webp',
  '/media/tip2.webp',
  '/media/tip3.webp',
  '/media/tip4.webp',
  '/media/tip5.webp',
];