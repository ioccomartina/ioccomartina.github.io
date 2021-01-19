import React from 'react'
import { Link } from 'react-router-dom'

import * as ROUTES from 'constants/Url'
import Logo from 'components/Logo'
import MobileNav from './MobileNav'

export default function Header() {
  return (
    <div className="header">
      <div className="header__wrapper">
        <MobileNav />
        <Link
          to={ROUTES.APP_URL_HOME}
          className="header__logo"
        >
          <Logo />
        </Link>
        <div className="header__menu">
          <Link to={ROUTES.APP_URL_HOME} className="header__menu-link">Home</Link>
          <a href={`${ROUTES.APP_URL_HOME}#section-sobre-mi`} className="header__menu-link">Sobre mi</a>
          <a href={`${ROUTES.APP_URL_HOME}#section-asesoramiento`} className="header__menu-link">Asesoramientos</a>
          <Link to={ROUTES.APP_URL_JOBS} className="header__menu-link">Búsquedas IT</Link>
        </div>
        <div className="header__balance only-mobile" />
      </div>
    </div>
  )
}
