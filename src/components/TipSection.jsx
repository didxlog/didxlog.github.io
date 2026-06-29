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
    desc:  ['FKI타워 옆에 있는 낮고 둥근 건물입니다.', <br key="b1"/>, '쉽게 찾으실 수 있을거에요 !'],
  },
  {
    title: '700대, 3시간 무료주차',
    desc:  ['주차장은 FKI 타워와 공유합니다.', <br key="b1"/>, '주차장 안내를 따라 컨퍼런스센터 전용', <br key="b2"/>, '엘레베이터를 타고 1층으로 올라와주세요.', <br key="b3"/>, '직원안내에 따라 주차등록 하시면 됩니다.'],
  },
  {
    title: '옆 건물 지하 1층 ATM',
    desc:  ['지하 1층 통로 혹은 외부 에스컬레이터를 통해', <br key="b1"/>, 'FKI타워 지하 1층 ATM을 이용해주세요.'],
  },
  {
    title: '식사는 동시예식',
    desc:  ['2부와 식사를 함께 진행하는 동시예식 입니다.', <br key="b1"/>, '빠른 식사를 원하시는 분들은 3층 연회장에 착석해주세요.'],
  },
  {
    title: '꽃포장 서비스',
    desc:  ['2부 예식 후 로비에서 꽃을 나눠드립니다.', <br key="b1"/>, '부디 기분 좋은 선물이 되었으면 좋겠습니다.'],
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
            <TipTitle>{tip.title}</TipTitle>
            <TipDesc>{tip.desc}</TipDesc>
          </TipBody>
        </TipCard>
      ))}
    </Section>
  );
}