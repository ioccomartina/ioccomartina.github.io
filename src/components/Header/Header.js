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
        <div className="header__menu only-md">
          <a href="/">a</a>
          <a href="/">b</a>
          <a href="/">c</a>
        </div>
        <div className="header__balance only-mobile" />
      </div>
    </div>
  )
}
