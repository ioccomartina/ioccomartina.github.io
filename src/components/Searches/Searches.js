import React from 'react'
import { useLocation } from 'react-router-dom'

import { parseQueryParams, getParam } from 'utils/QueryParams'
import JOBS from 'constants/Jobs'
import CategoriesList from 'components/JobCategory/CategoriesList'
import JobList from 'components/Job/JobList'

export default function Searches() {
  const params = parseQueryParams(useLocation().search)
  const category = getParam(params, 'category')
  const filteredJobs = category
    ? JOBS.filter((job) => job.category.toLowerCase() === category.toLowerCase())
    : JOBS

  return (
    <>
      <div className="searches">
        <div className="searches__wrapper">
          <h4 className="searches__title">Búsquedas IT</h4>
        </div>
      </div>
      <div className="landing__wrapper">
        <CategoriesList />
        <JobList
          jobs={filteredJobs}
          withViewAll={false}
        />
      </div>
    </>
  )
}
