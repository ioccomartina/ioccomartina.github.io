import React from 'react'

import { list } from 'constants/CategoriesList'
import { amountOfJobs } from 'utils/JobCategory'
import JobCategory from './JobCategory'

export default function CategoriesList() {
  return (
    <div className="categories-list">
      {list.map((category) => (
        <JobCategory
          key={`job-category-${category.name}`}
          amount={amountOfJobs(category.name)}
          icon={category.icon}
          name={category.name}
        />
      ))}
    </div>
  )
}
