import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import * as CONTACT from 'constants/Contact'
import * as SOCIAL from 'constants/SocialNetwork'
import Logo from 'components/Logo'

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__wrapper">
        <div className="footer__logo">
          <Logo />
        </div>
        <div className="footer__info">
          <b>Email:</b>
          &nbsp;
          {CONTACT.EMAIL}
        </div>
        <a
          className="footer__social-link"
          href={SOCIAL.LINKEDIN}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
        </a>
      </div>
    </div>
  )
}
