import React from 'react';
import {
  Section, Divider,
  CalDateLarge, CalTimeSub,
  CalDayHeader, CalDayLabel,
  CalRow, CalCell,
} from '../styles/styled';
import { buildCalendar } from '../utils';

const DAY_LABELS = ['S','M','T','W','T','F','S'];

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
            <CalDayLabel key={i} $isSun={i === 0}>{d}</CalDayLabel>
          ))}
        </CalDayHeader>
        {calRows.map((row, ri) => (
          <CalRow key={ri}>
            {row.map((cell, ci) => (
              <CalCell
                key={ci}
                $isSun={cell.isSun}
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
