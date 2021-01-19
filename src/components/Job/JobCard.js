import React, { memo } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import { iconByCategory } from 'utils/JobCategory'
import { APP_URL_JOB_DETAIL } from 'constants/Url'

function JobCard({ job }) {
  const {
    category,
    consultant,
    contract,
    experience,
    id,
    kindPosition,
    location,
    mode,
    name,
  } = job

  return (
    <Link
      to={`${APP_URL_JOB_DETAIL}?id=${id}`}
      className="job-card"
    >
      <div className="job-card__logo">{iconByCategory(category)}</div>
      <div className="job-card__info">
        <span className="job-card__kind-position">{kindPosition}</span>
        <span className="job-card__name">{name}</span>
        <div className="job-card__general-info">
          <div className="job-card__info-container">
            <FontAwesomeIcon icon="map-marker-alt" />
            &nbsp;
            <span className="job-card__info-text">{location}</span>
          </div>
          <div className="job-card__info-container">
            <FontAwesomeIcon icon="bars" />
            &nbsp;
            <span className="job-card__info-text">{mode}</span>
          </div>
          <div className="job-card__info-container">
            <FontAwesomeIcon icon="bars" />
            &nbsp;
            <span className="job-card__info-text">{experience}</span>
          </div>
          <div className="job-card__info-container">
            <FontAwesomeIcon icon="bars" />
            &nbsp;
            <span className="job-card__info-text">{contract}</span>
          </div>
          <div className="job-card__info-container">
            <FontAwesomeIcon icon="bars" />
            &nbsp;
            <span className="job-card__info-text">{consultant}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}

JobCard.propTypes = {
  job: PropTypes.shape({
    category: PropTypes.string.isRequired,
    consultant: PropTypes.string.isRequired,
    contract: PropTypes.string.isRequired,
    experience: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    kindPosition: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    mode: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
}

export default memo(JobCard)
