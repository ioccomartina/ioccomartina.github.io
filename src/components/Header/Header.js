import React from 'react'
import { Link } from 'react-router-dom'

import { APP_URL_JOBS } from 'constants/Url'
import Logo from 'components/Logo'
import MobileNav from './MobileNav'

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
          <Link to={APP_URL_JOBS} className="header__menu-link">Búsquedas IT</Link>
        </div>
        <div className="header__balance only-mobile" />
      </div>
    </div>
  )
}
