import React, { useState } from 'react';
import {
  Section, SectionLabel, AccountSubtitle,
  AccordionItem, AccordionHeader, AccordionArrow, AccordionBody,
  AccountCard, AccountTag, AccountName, AccountNumber, AccountBank,
  CopyButton,
} from '../styles/styled';
import { groomAccounts, brideAccounts } from '../data/weddingData';
import { copyToClipboard } from '../utils';

function AccountList({ accounts, showToast }) {
  return accounts.map((acc, i) => (
    <AccountCard key={i}>
      <div style={{ textAlign: 'left' }}>
        <AccountTag>{acc.tag}</AccountTag>
        <AccountName>{acc.name}</AccountName>
        <AccountNumber>
          <AccountBank>{acc.bank}</AccountBank> {atob(acc.number)}
        </AccountNumber>
      </div>
      <CopyButton
        onClick={() => copyToClipboard(atob(acc.number), () => showToast(`${acc.tag} 계좌번호가 복사되었습니다`))}
        aria-label="복사"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="9" y="9" width="13" height="13" rx="2"/>
          <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/>
        </svg>
      </CopyButton>
    </AccountCard>
  ));
}

export default function AccountSection({ showToast }) {
  const [groomOpen, setGroomOpen] = useState(true);
  const [brideOpen, setBrideOpen] = useState(true);

  return (
    <Section id="account">
      <SectionLabel>Account</SectionLabel>
      <AccountSubtitle>마음 전하실 곳</AccountSubtitle>
      <div style={{ width: '100%' }}>

        {/* 신랑측 */}
        <AccordionItem>
          <AccordionHeader onClick={() => setGroomOpen(v => !v)}>
            신랑측 계좌번호
            <AccordionArrow $isOpen={groomOpen}>▲</AccordionArrow>
          </AccordionHeader>
          <AccordionBody $isOpen={groomOpen}>
            <AccountList accounts={groomAccounts} showToast={showToast} />
          </AccordionBody>
        </AccordionItem>

        {/* 신부측 */}
        <AccordionItem>
          <AccordionHeader onClick={() => setBrideOpen(v => !v)}>
            신부측 계좌번호
            <AccordionArrow $isOpen={brideOpen}>▲</AccordionArrow>
          </AccordionHeader>
          <AccordionBody $isOpen={brideOpen}>
            <AccountList accounts={brideAccounts} showToast={showToast} />
          </AccordionBody>
        </AccordionItem>

      </div>
    </Section>
  );
}
