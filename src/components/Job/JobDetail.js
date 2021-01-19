import React from 'react'
import { useLocation } from 'react-router-dom'

import { iconByCategory } from 'utils/JobCategory'
import { parseQueryParams, getParam } from 'utils/QueryParams'
import JOBS from 'constants/Jobs'
import { RECRUITER_EMAIL } from 'constants/Contact'

function JobDetail() {
  const params = parseQueryParams(useLocation().search)
  const id = getParam(params, 'id')
  const job = JOBS.find((job) => job.id === id)

  return (
    <>
      <div className="job-detail">
        <div className="job-detail__wrapper">
          <h4 className="job-detail__title">{job.name}</h4>
          <h6 className="job-detail__reference">{`Referencia: #${id}`}</h6>
        </div>
      </div>
      <div className="landing__wrapper">
        <div className="job-detail__container">
          <div className="job-detail__description">
            <div className="job-detail__subtitle">Descripción</div>
            <p className="job-detail__text">{job.description}</p>
            {job.exclusive_requirements && (
              <>
                <div className="job-detail__subtitle">Requisitos excluyentes</div>
                <ul className="job-detail__items">
                  {job.exclusive_requirements.map((req) => (
                    <li key={`job-detail-exclusive-${req}`}>
                      {req}
                    </li>
                  ))}
                </ul>
              </>
            )}
            {job.desirable_requirements && (
              <>
                <div className="job-detail__subtitle">Requisitos deseables</div>
                <ul className="job-detail__items">
                  {job.desirable_requirements.map((req) => (
                    <li key={`job-detail-desirable-${req}`}>
                      {req}
                    </li>
                  ))}
                </ul>
              </>
            )}
            {job.benefits && (
              <>
                <div className="job-detail__subtitle">Beneficios</div>
                <ul className="job-detail__items">
                  {job.benefits.map((benefit) => (
                    <li key={`job-detail-benefits-${benefit}`}>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
          <div className="job-detail__overview">
            <div className="job-detail__icon">
              {iconByCategory(job.category)}
            </div>
            <div className="job-detail__additional-info">
              <span className="job-detail__info-name">Consultora:</span>
              <span className="job-detail__info-value">{job.consultant}</span>
            </div>
            <div className="job-detail__additional-info">
              <span className="job-detail__info-name">Posición:</span>
              <span className="job-detail__info-value">{job.category}</span>
            </div>
            <div className="job-detail__additional-info">
              <span className="job-detail__info-name">Experiencia:</span>
              <span className="job-detail__info-value">{job.experience}</span>
            </div>
            <div className="job-detail__additional-info">
              <span className="job-detail__info-name">Tipo de posición:</span>
              <span className="job-detail__info-value">{job.kindPosition}</span>
            </div>
            <div className="job-detail__additional-info">
              <span className="job-detail__info-name">Ubicación:</span>
              <span className="job-detail__info-value">{job.location}</span>
            </div>
            <div className="job-detail__additional-info">
              <span className="job-detail__info-name">Modalidad:</span>
              <span className="job-detail__info-value">{job.mode}</span>
            </div>
            <div className="job-detail__additional-info">
              <span className="job-detail__info-name">Contratación:</span>
              <span className="job-detail__info-value">{job.contract}</span>
            </div>
            <div>
              <div className="job-detail__subtitle">Aplicar</div>
              <a
                href={`mailto:${RECRUITER_EMAIL}`}
                className="footer__info"
              >
                <span className="job-detail__info-name">Email:</span>
                <span className="job-detail__info-value job-detail__info-value--primary">
                  {RECRUITER_EMAIL}
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default JobDetail
