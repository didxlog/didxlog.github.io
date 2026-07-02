// ─────────────────────────────────────────────────────────────────────────────
// 📁 미디어 파일 관리
//
// 모든 사진/동영상은 /public/media/ 폴더에 넣으세요.
// 이 파일에서 경로만 바꾸면 전체 반영됩니다.
// ─────────────────────────────────────────────────────────────────────────────

// ── 히어로 사진 (세로 3:4 비율 권장, 흑백 처리됨) ──
// null 이면 PHOTO 플레이스홀더로 표시
export const HERO_PHOTO = '/media/hero.jpg';
export const HERO_VIDEO = null;
export const GALLERY_VIDEO_POSTER = null;

// ── 히어로 섹션 동영상 (사진 대신 동영상을 쓰고 싶을 때) ──
// 동영상이 설정되면 사진보다 우선 표시됩니다.
// 무음 자동재생 루프로 재생됩니다.
// export const HERO_VIDEO = '/media/hero.mp4';

// ── 갤러리 사진 목록 (순서대로 표시, 최대 5장 + 나머지는 +N으로) ──
// 빈 배열이면 플레이스홀더로 표시
export const GALLERY_PHOTOS = [
  '/media/1.jpg',
  '/media/2.jpg',
  '/media/3.jpg',
  '/media/4.jpg',
  '/media/5.jpg',
  '/media/6.jpg',
  '/media/7.jpg',
  '/media/8.jpg',
  '/media/9.jpg',
  '/media/10.jpg',
  '/media/11.jpg',
  '/media/13.jpg',
  '/media/14.jpg',
  '/media/15.jpg',
  '/media/16.jpg',
  '/media/17.jpg',
  '/media/18.jpg',
  '/media/19.jpg',
  '/media/20.jpg',
  '/media/21.jpg',
  '/media/22.jpg',
  '/media/23.jpg',
  '/media/24.jpg',
  '/media/25.jpg',
  '/media/26.jpg',
  '/media/27.jpg',
  '/media/28.jpg',
  '/media/29.jpg',
  '/media/30.jpg',
  '/media/31.jpg',
  '/media/32.jpg',
  '/media/33.jpg',
  '/media/34.jpg',
  '/media/35.jpg',
  '/media/36.jpg',
  '/media/37.jpg',
  '/media/38.jpg',
  '/media/39.jpg',
  '/media/40.jpg',
];

// ── 갤러리에서 한 번에 보여줄 셀 수 (나머지는 +N) ──
export const GALLERY_VISIBLE_COUNT = 8;

// ── 갤러리 하단 단독 동영상 ──
// 사진 그리드 아래에 단독으로 표시됩니다.
// export const GALLERY_VIDEO = null;
export const GALLERY_VIDEO = '/media/video.mp4';

// ── Tip 섹션 사진 ──
// 순서대로: [돔형태, 동시예식, ATM위치]
export const TIP_PHOTOS = [
  '/media/tip1.png',
  '/media/tip2.png',
  '/media/tip3.png',
  '/media/tip4.jpeg',
  '/media/tip5.png',
];