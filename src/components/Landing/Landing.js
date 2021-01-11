import React from 'react'

import JOBS from 'constants/Jobs'
import CategoriesList from 'components/JobCategory/CategoriesList'
import JobList from 'components/Job/JobList'
import MainSlider from './MainSlider'

const featuredJobs = JOBS.filter((job) => job.featured)

export default function Landing() {
  return (
    <div className="landing">
      <MainSlider />
      <div className="landing__wrapper">
        <CategoriesList />
        <JobList
          withViewAll
          jobs={featuredJobs}
          title="Búsquedas destacadas"
        />
      </div>
    </div>
  )
}
