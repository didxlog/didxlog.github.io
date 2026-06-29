// ─── 달력 생성 (2027년 2월) ───────────────────────────────
// 월요일 시작, 2027.02.01 = 월요일(col=0), 총 28일, 결혼식 21일(일요일=col6)
export function buildCalendar() {
  const totalDays   = 28;
  const selectedDay = 21;
  const cells = [];

  // 2027.02.01이 월요일이라 빈 셀 없음 (startDay=0)
  for (let d = 1; d <= totalDays; d++) {
    const col = (d - 1) % 7; // 0=월 1=화 2=수 3=목 4=금 5=토 6=일
    cells.push({
      day: d,
      isSun: col === 6,
      isSat: col === 5,
      isSelected: d === selectedDay,
    });
  }

  const rows = [];
  for (let i = 0; i < cells.length; i += 7) {
    const row = cells.slice(i, i + 7);
    while (row.length < 7) row.push({ day: null, isSun: false, isSat: false, isSelected: false });
    rows.push(row);
  }
  return rows;
}

// ─── 클립보드 복사 ────────────────────────────────────────
function fallbackCopy(text) {
  const el = document.createElement('textarea');
  el.value = text;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
}

export function copyToClipboard(text, onDone) {
  const raw = text.replace(/-/g, '');
  if (navigator.clipboard) {
    navigator.clipboard.writeText(raw)
      .then(onDone)
      .catch(() => { fallbackCopy(raw); onDone(); });
  } else {
    fallbackCopy(raw);
    onDone();
  }
}