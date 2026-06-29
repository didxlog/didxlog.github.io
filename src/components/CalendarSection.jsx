import React from 'react';
import {
  Section, Divider,
  CalDateLarge, CalTimeSub,
  CalDayHeader, CalDayLabel,
  CalRow, CalCell,
} from '../styles/styled';
import { buildCalendar } from '../utils';

// 월요일 시작
const DAY_LABELS = ['월','화','수','목','금','토','일'];
const IS_SAT = [false, false, false, false, false, true, false];
const IS_SUN = [false, false, false, false, false, false, true];

export default function CalendarSection() {
  const calRows = buildCalendar();

  return (
    <Section id="calendar">
      <CalDateLarge>2027.02.21</CalDateLarge>
      <CalTimeSub>일요일 오후 4시</CalTimeSub>
      <Divider />
      <div style={{ width: '100%', marginTop: '8px' }}>
        <CalDayHeader>
          {DAY_LABELS.map((d, i) => (
            <CalDayLabel key={i} $isSun={IS_SUN[i]} $isSat={IS_SAT[i]}>{d}</CalDayLabel>
          ))}
        </CalDayHeader>
        {calRows.map((row, ri) => (
          <CalRow key={ri}>
            {row.map((cell, ci) => (
              <CalCell
                key={ci}
                $isSun={cell.isSun}
                $isSat={cell.isSat}
                $isSelected={cell.isSelected}
                $isEmpty={cell.day === null}
              >
                <span>{cell.day ?? ''}</span>
              </CalCell>
            ))}
          </CalRow>
        ))}
      </div>
    </Section>
  );
}