import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { APP_URL_JOBS } from 'constants/Url'
import JobCard from './JobCard'

function JobList({ jobs, title, withViewAll }) {
  return (
    <div className="job-list">
      <h4 className="job-list__title">{title}</h4>
      {jobs.length === 0 && (
        <span className="job-list__title">No se encontraron resultados</span>
      )}
      {jobs.map((job) => (
        <JobCard
          key={`job-card-${job.title}`}
          job={job}
        />
      ))}
      {
        withViewAll && (
          <Link
            to={APP_URL_JOBS}
            className="job-list__view-all-link"
          >
            <div className="job-list__view-all-container">
              <span className="job-list__view-all-text">Ver más búsquedas</span>
              &nbsp;
              <FontAwesomeIcon icon="arrow-right" />
            </div>
          </Link>
        )
      }
    </div>
  )
}

JobList.propTypes = {
  jobs: PropTypes.array.isRequired,
  title: PropTypes.string,
  withViewAll: PropTypes.bool,
}

JobList.defaultProps = {
  title: '',
  withViewAll: false,
}

export default memo(JobList)
