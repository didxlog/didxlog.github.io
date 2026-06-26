import React from 'react';
import {
  Section, SectionLabel, ThinLine,
  JoinUsTitle, FamilyRow, InvitationText,
} from '../styles/styled';

export function JoinUsSection() {
  return (
    <Section id="join">
      <JoinUsTitle>Join us<br />for our wedding</JoinUsTitle>
      <FamilyRow>이호승 · 손서교 의 아들 <strong>&nbsp;&nbsp;이현우</strong></FamilyRow>
      <FamilyRow>손무성 · 곽정애 의 &nbsp;&nbsp;&nbsp;&nbsp;딸 <strong>&nbsp;&nbsp;손지수</strong></FamilyRow>
    </Section>
  );
}

export function InvitationSection() {
  return (
    <Section id="invitation">
      <SectionLabel>Invitation</SectionLabel>
      <ThinLine />
 
      {/* 보름달 */}
      <svg
        width="64" height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: 'block', margin: '0 auto 32px' }}
      >
        {/* 바깥 글로우 */}
        <circle cx="32" cy="32" r="30" fill="#F5C842" opacity="0.06" />
        <circle cx="32" cy="32" r="27" fill="#F5C842" opacity="0.09" />
        {/* 달 본체 */}
        <circle cx="32" cy="32" r="22" fill="#F2C14E" opacity="0.88" />
        {/* 달 표면 질감 */}
        <circle cx="22" cy="25" r="3.5" fill="#A67820" opacity="0.45" />
        <circle cx="38" cy="20" r="2.2" fill="#A67820" opacity="0.38"  />
        <circle cx="36" cy="38" r="4"   fill="#A67820" opacity="0.35" />
        <circle cx="20" cy="39" r="2"   fill="#A67820" opacity="0.38"  />
        <circle cx="29" cy="44" r="1.5" fill="#A67820" opacity="0.32" />
        <circle cx="42" cy="30" r="1.8" fill="#A67820" opacity="0.35" />
        {/* 테두리 */}
        <circle cx="32" cy="32" r="22" stroke="#F5D76E" strokeWidth="0.5" opacity="0.5" />
      </svg>

      <InvitationText>
        큰 보름달이 뜨는 날 결혼합니다.<br />
        둥글게 살겠습니다.<br />
        축하해주세요 !<br />
      </InvitationText>
    </Section>
  );
}
