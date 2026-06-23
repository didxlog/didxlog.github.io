import React from 'react';
import {
  Section, SectionLabel, ThinLine,
  JoinUsTitle, FamilyRow, InvitationText,
} from '../styles/styled';

export function JoinUsSection() {
  return (
    <Section id="join">
      <JoinUsTitle>Join us<br />for our wedding</JoinUsTitle>
      <FamilyRow>이호승 · 손서교 의 아들 <strong>이현우</strong></FamilyRow>
      <FamilyRow>손무성 · 곽정애 의 &nbsp;&nbsp;&nbsp;딸 <strong>손지수</strong></FamilyRow>
    </Section>
  );
}

export function InvitationSection() {
  return (
    <Section id="invitation">
      <SectionLabel>Invitation</SectionLabel>
      <ThinLine />
      <InvitationText>
        서로가 마주 보며 다져온 사랑을<br /><br />
        이제 함께 한 곳을 바라보며 걸어가려 합니다.<br /><br />
        저희 두 사람의 새로운 시작을<br /><br />
        함께 축복해 주시면 더없는 기쁨으로 간직하겠습니다.
      </InvitationText>
    </Section>
  );
}
