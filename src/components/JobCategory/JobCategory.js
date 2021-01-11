import React, { memo } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'

function JobCategory({ amount, icon, name}) {
  const plural = amount === 0 || amount > 1 ? 's' : ''

  return (
    <div className="job-category">
      <span className="job-category__name">{name}</span>
      <FontAwesomeIcon icon={icon} />
      <span className="job-category__amount">
        {`${amount} búsqueda${plural} abierta${plural}`}
      </span>
    </div>
  )
}

JobCategory.propTypes = {
  amount: PropTypes.number.isRequired,
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}

export default memo(JobCategory)
