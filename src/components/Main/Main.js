import React from 'react'
import { Switch, Route } from 'react-router-dom'

import * as ROUTES from 'constants/Url'
import Landing from 'components/Landing'
import Header from 'components/Header'
import Footer from 'components/Footer'
import Searches from 'components/Searches'

export default function Main() {
  return (
    <div className="main">
      <Header />
      <Switch>
        <Route path={ROUTES.APP_URL_JOBS}>
          <Searches />
        </Route>
        <Route path={ROUTES.APP_URL_HOME}>
          <Landing />
        </Route>
      </Switch>
      <Footer />
    </div>
  )
}
