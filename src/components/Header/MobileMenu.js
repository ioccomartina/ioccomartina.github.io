import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import * as ROUTES from 'constants/Url'

function MobileMenu({ closeMenu }) {
  return (
    <div className="mobile-menu">
      <Link
        to={ROUTES.APP_URL_HOME}
        className="header__menu-link"
        onClick={closeMenu}
      >
        Home
      </Link>
      <a
        href={`${ROUTES.APP_URL_HOME}#section-sobre-mi`}
        className="header__menu-link"
        onClick={closeMenu}
      >
        Sobre mi
      </a>
      <a
        href={`${ROUTES.APP_URL_HOME}#section-asesoramiento`}
        className="header__menu-link"
        onClick={closeMenu}
      >
        Asesoramientos
      </a>
      <Link
        to={ROUTES.APP_URL_JOBS}
        className="header__menu-link"
        onClick={closeMenu}
      >
        Búsquedas IT
      </Link>
    </div>
  )
}

MobileMenu.propTypes = {
  closeMenu: PropTypes.func.isRequired,
}

export default MobileMenu
