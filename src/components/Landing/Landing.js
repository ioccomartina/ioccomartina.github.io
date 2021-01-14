import React from 'react'

import MainSlider from './MainSlider'
import AboutMe from './AboutMe'
import Advice from './Advice'
import Searches from './Searches'

export default function Landing() {
  return (
    <div className="landing">
      <MainSlider />
      <AboutMe />
      <Advice />
      <Searches />
    </div>
  )
}
