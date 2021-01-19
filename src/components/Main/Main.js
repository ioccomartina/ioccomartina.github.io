import React from 'react'
import { Switch, Route } from 'react-router-dom'

import * as ROUTES from 'constants/Url'
import Landing from 'components/Landing'
import Header from 'components/Header'
import Footer from 'components/Footer'
import Searches from 'components/Searches'
import JobDetail from 'components/Job/JobDetail'
import ScrollToTop from './ScrollToTop'

export default function Main() {
  return (
    <div className="main">
      <ScrollToTop />
      <Header />
      <Switch>
        <Route path={ROUTES.APP_URL_JOBS}>
          <Searches />
        </Route>
        <Route path={ROUTES.APP_URL_JOB_DETAIL}>
          <JobDetail />
        </Route>
        <Route path={ROUTES.APP_URL_HOME}>
          <Landing />
        </Route>
      </Switch>
      <Footer />
    </div>
  )
}
