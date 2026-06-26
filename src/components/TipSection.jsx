import React from 'react';
import {
  Section, SectionLabel, ThinLine,
  TipCard, TipPhoto, TipPhotoPlaceholder,
  TipBody, TipNumber, TipTitle, TipDesc,
} from '../styles/styled';
import { TIP_PHOTOS } from '../data/mediaConfig';

const TIPS = [
  {
    title: '돔 형태의 웨딩홀',
    desc:  '건물 외관이 아름다운 돔 형태로 되어 있어요. 도착하시면 쉽게 찾으실 수 있어요.',
  },
  {
    title: '동시예식 안내',
    desc:  '같은 시간대에 다른 홀에서도 예식이 진행될 수 있어요. 입구에서 안내판을 꼭 확인해주세요.',
  },
  {
    title: 'ATM 위치',
    desc:  '건물 1층 로비 입구 오른편에 ATM이 있어요.',
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