import React, { useCallback, useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

import { parseQueryParams, getParam } from 'utils/QueryParams'
import scrollToTarget from 'utils/Scroll'
import JOBS from 'constants/Jobs'
import CategoriesList from 'components/JobCategory/CategoriesList'
import JobList from 'components/Job/JobList'

export default function Searches() {
  const jobListRef = useRef(null)
  const params = parseQueryParams(useLocation().search)
  const category = getParam(params, 'categoria')
  const filteredJobs = category
    ? JOBS.filter((job) => job.category.toLowerCase() === category.toLowerCase())
    : JOBS

  const scrollToJobs = useCallback(
    () => {
      scrollToTarget(jobListRef.current)
    },
    [jobListRef],
  )

  useEffect(() => {
    if (category) scrollToJobs()
  }, [category])

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
          jobListRef={jobListRef}
          withViewAll={false}
        />
      </div>
    </>
  )
}
