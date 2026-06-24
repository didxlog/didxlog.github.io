// ─────────────────────────────────────────────────────────────────────────────
// 📁 미디어 파일 관리
//
// 모든 사진/동영상은 /public/media/ 폴더에 넣으세요.
// 이 파일에서 경로만 바꾸면 전체 반영됩니다.
// ─────────────────────────────────────────────────────────────────────────────

// ── 히어로 사진 (세로 3:4 비율 권장, 흑백 처리됨) ──
// null 이면 PHOTO 플레이스홀더로 표시
export const HERO_PHOTO = '/media/hero.jpeg';
export const HERO_VIDEO = null;
export const GALLERY_VIDEO_POSTER = null;

// ── 히어로 섹션 동영상 (사진 대신 동영상을 쓰고 싶을 때) ──
// 동영상이 설정되면 사진보다 우선 표시됩니다.
// 무음 자동재생 루프로 재생됩니다.
// export const HERO_VIDEO = '/media/hero.mp4';

// ── 갤러리 사진 목록 (순서대로 표시, 최대 5장 + 나머지는 +N으로) ──
// 빈 배열이면 플레이스홀더로 표시
export const GALLERY_PHOTOS = [
  '/media/test1.jpeg',
  '/media/test2.jpeg',
  '/media/test3.jpeg',
  '/media/test4.jpeg',
  '/media/test5.jpeg',
  '/media/test6.jpeg',
  '/media/test7.jpeg',
  '/media/test8.jpeg',
  '/media/test9.jpeg',
  '/media/test10.jpeg',
  '/media/test11.jpeg'
];

// ── 갤러리에서 한 번에 보여줄 셀 수 (나머지는 +N) ──
export const GALLERY_VISIBLE_COUNT = 8;

// ── 갤러리 하단 단독 동영상 ──
// 사진 그리드 아래에 단독으로 표시됩니다.
// export const GALLERY_VIDEO = null;
export const GALLERY_VIDEO = '/media/video.mp4';