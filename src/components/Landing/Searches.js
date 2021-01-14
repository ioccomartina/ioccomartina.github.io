import React from 'react'

import JOBS from 'constants/Jobs'
import CategoriesList from 'components/JobCategory/CategoriesList'
import JobList from 'components/Job/JobList'

const featuredJobs = JOBS.filter((job) => job.featured)

export default function Searches() {
  return (
    <>
      <div className="searches">
        <div className="searches__wrapper">
          <h4 className="searches__title">Busquedas IT</h4>
        </div>
      </div>
      <div className="landing__wrapper">
        <CategoriesList />
        <JobList
          withViewAll
          jobs={featuredJobs}
          title="Búsquedas destacadas"
        />
      </div>
    </>
  )
}
