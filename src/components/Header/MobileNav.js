import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import MobileMenu from './MobileMenu'

export default function MobileNav() {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <div className="only-mobile">
      {!showMenu && (
        <button
          type="button"
          className="btn header__mobile-menu"
          onClick={() => setShowMenu(true)}
        >
          <FontAwesomeIcon icon="bars" />
        </button>
      )}

      {showMenu && (
        <button
          type="button"
          className="btn header__mobile-menu"
          onClick={() => setShowMenu(false)}
        >
          <FontAwesomeIcon icon="times" />
        </button>
      )}
      {showMenu && (
        <MobileMenu closeMenu={() => setShowMenu(false)} />
      )}
    </div>
  )
}
