import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import initFontAwesome from 'utils/InitFontAwesome'
import * as ROUTES from 'constants/Url'
import Main from 'components/Main'

initFontAwesome()

function App() {
  return (
    <Router basename="/">
      <Switch>
        <Route path={ROUTES.APP_URL_HOME}>
          <Main />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
