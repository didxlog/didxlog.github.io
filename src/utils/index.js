// ─── 달력 생성 (2027년 2월) ───────────────────────────────
// 2027.02.01 = 월요일(startDay=1), 총 28일, 결혼식 21일
export function buildCalendar() {
  const startDay   = 1;
  const totalDays  = 28;
  const selectedDay = 21;
  const cells = [];

  for (let i = 0; i < startDay; i++) {
    cells.push({ day: null, isSun: i === 0, isSelected: false });
  }
  for (let d = 1; d <= totalDays; d++) {
    const col = (startDay + d - 1) % 7;
    cells.push({ day: d, isSun: col === 0, isSelected: d === selectedDay });
  }

  const rows = [];
  for (let i = 0; i < cells.length; i += 7) {
    const row = cells.slice(i, i + 7);
    while (row.length < 7) row.push({ day: null, isSun: false, isSelected: false });
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
