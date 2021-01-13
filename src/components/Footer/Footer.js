import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import * as CONTACT from 'constants/Contact'
import * as SOCIAL from 'constants/SocialNetwork'
import Logo from 'components/Logo'

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__wrapper">
        <div className="footer__resume">
          <div className="footer__resume-contact">
            <div className="footer__logo">
              <Logo />
            </div>
            <a
              href={`mailto:${CONTACT.EMAIL}`}
              className="footer__info"
            >
              <b>Email:</b>
              &nbsp;
              {CONTACT.EMAIL}
            </a>
          </div>
          <div className="footer__resume-jobs">
            <span className="footer__resume-title">Búsquedas</span>
            <a href="" className="footer__resume-link">Front-end</a>
            <a href="" className="footer__resume-link">Back-end</a>
            <a href="" className="footer__resume-link">Full-stack</a>
            <a href="" className="footer__resume-link">QA</a>
            <a href="" className="footer__resume-link">Project Manager</a>
            <a href="" className="footer__resume-link">Mobile</a>
          </div>
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
