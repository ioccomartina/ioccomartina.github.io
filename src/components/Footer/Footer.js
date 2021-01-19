import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

import * as CONTACT from 'constants/Contact'
import * as SOCIAL from 'constants/SocialNetwork'
import { list as CATEGORIES } from 'constants/CategoriesList'
import { APP_URL_JOBS } from 'constants/Url'
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
          </div>
          <div className="footer__resume-jobs">
            <span className="footer__resume-title">Contacto</span>
            <a
              href={`mailto:${CONTACT.RECRUITER_EMAIL}`}
              className="footer__resume-link footer__info"
            >
              <b>Búsquedas:</b>
              &nbsp;
              {CONTACT.RECRUITER_EMAIL}
            </a>
            <a
              href={`mailto:${CONTACT.EMAIL}`}
              className="footer__resume-link footer__info"
            >
              <b>Asesoramiento:</b>
              &nbsp;
              {CONTACT.EMAIL}
            </a>
          </div>
          <div className="footer__resume-jobs">
            <span className="footer__resume-title">Búsquedas</span>
            {CATEGORIES.map((category) => (
              <Link
                key={`footer-search-job-${category.name}`}
                to={`${APP_URL_JOBS}?categoria=${category.name}`}
                className="footer__resume-link"
              >
                {category.name}
              </Link>
            ))}
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
