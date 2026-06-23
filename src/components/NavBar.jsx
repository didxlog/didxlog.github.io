import React from 'react';
import { Nav, NavTitle, MenuButton, MenuOverlay, MenuClose, MenuItemBtn } from '../styles/styled';
import { NAV_MENUS } from '../data/weddingData';

export default function NavBar({ menuOpen, setMenuOpen, scrollTo }) {
  return (
    <>
      <Nav>
        <NavTitle>The Wedding of Hyunwoo &amp; Jisu</NavTitle>
        <MenuButton onClick={() => setMenuOpen(true)} aria-label="메뉴 열기">
          <span /><span /><span />
        </MenuButton>
      </Nav>

      <MenuOverlay $isOpen={menuOpen}>
        <MenuClose onClick={() => setMenuOpen(false)}>✕</MenuClose>
        {NAV_MENUS.map(([id, label]) => (
          <MenuItemBtn key={id} onClick={() => scrollTo(id)}>{label}</MenuItemBtn>
        ))}
      </MenuOverlay>
    </>
  );
}
