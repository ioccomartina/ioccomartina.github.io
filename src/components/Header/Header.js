import React from 'react'

import MobileNav from './MobileNav'
import Logo from 'components/Logo'

export default function Header() {
  return (
    <div className="header">
      <div className="header__wrapper">
        <MobileNav />
        <div className="header__logo">
          <Logo />
        </div>
        <div className="header__menu">
          <a href="/" className="header__menu-link">Sobre mi</a>
          <a href="/" className="header__menu-link">Asesoramientos</a>
          <a href="/" className="header__menu-link">Búsquedas IT</a>
        </div>
        <div className="header__balance only-mobile" />
      </div>
    </div>
  )
}
