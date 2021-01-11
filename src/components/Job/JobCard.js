import React, { memo } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'

import { iconByCategory } from 'utils/JobCategory'

function JobCard({ job }) {
  const {
    category,
    contract,
    experience,
    kindPosition,
    location,
    mode,
    name,
  } = job

  return (
    <div className="job-card">
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
        </div>
      </div>
    </div>
  )
}

JobCard.propTypes = {
  job: PropTypes.shape({
    category: PropTypes.string.isRequired,
    contract: PropTypes.string.isRequired,
    experience: PropTypes.string.isRequired,
    kindPosition: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    mode: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
}

export default memo(JobCard)
