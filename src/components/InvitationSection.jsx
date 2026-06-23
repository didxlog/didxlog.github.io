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
      <InvitationText>
        큰 보름달이 뜨는 날 결혼합니다.<br />
        둥글게 살겠습니다.<br />
        축하해주세요 !<br />
      </InvitationText>
    </Section>
  );
}
