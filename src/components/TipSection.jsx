import React from 'react';
import {
  Section, SectionLabel, ThinLine,
  TipCard, TipPhoto, TipPhotoPlaceholder,
  TipBody, TipNumber, TipTitle, TipDesc,
} from '../styles/styled';
import { TIP_PHOTOS } from '../data/mediaConfig';

const TIPS = [
  {
    title: '돔형태의 웨딩홀',
    desc:  ['FKI타워 옆에 있는 낮고 둥근 건물입니다.', <br/>, '쉽게 찾으실 수 있을거에요 !'],
  },
  {
    title: '3시간 무료주차',
    desc:  ['주차 후 안내를 따라 컨퍼런스센터 전용 엘레베이터를 타고 ', '1층으로 올라와주세요.'],
  },
  {
    title: '식사는 동시예식',
    desc:  ['2부와 식사를 함께 하는 동시예식 입니다.'],
  },
  {
    title: 'ATM 기기는 옆건물에',
    desc:  ['지하 1층 통로 혹은 외부 에스컬레이터를 통해 ', '옆 건물 지하 1층의 FKI mall ATM 기기를 이용해주세요.'],
  },
];

export default function TipSection() {
  return (
    <Section id="tip">
      <SectionLabel>Tip</SectionLabel>
      <ThinLine />
      {TIPS.map((tip, i) => (
        <TipCard key={i}>
          <TipPhoto>
            {TIP_PHOTOS[i] ? (
              <img src={TIP_PHOTOS[i]} alt={tip.title} />
            ) : (
              <TipPhotoPlaceholder>PHOTO</TipPhotoPlaceholder>
            )}
          </TipPhoto>
          <TipBody>
            <TipNumber>0{i + 1}</TipNumber>
            <TipTitle>{tip.title}</TipTitle>
            <TipDesc>{tip.desc}</TipDesc>
          </TipBody>
        </TipCard>
      ))}
    </Section>
  );
}