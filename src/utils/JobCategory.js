import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { list as CATEGORIES } from 'constants/CategoriesList'
import JOBS from 'constants/Jobs'

export function jobIcon(iconName) {
  return <FontAwesomeIcon icon={iconName} />
}

export function iconByCategory(categoryName) {
  const category = CATEGORIES.find((category) => category.name === categoryName)
  const iconName = category ? category.icon : 'others'

  return <FontAwesomeIcon icon={iconName} />
}

export function amountOfJobs(categoryName) {
  const amount = JOBS.filter((job) => job.category === categoryName).length

  return amount
}
