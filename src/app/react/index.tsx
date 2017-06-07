import * as React from 'react'
import { render } from 'react-dom'
import {
  HashRouter as Router,
  Route
} from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'

import { App } from './components/app'
import { About } from './components/about'
import Userdive from 'userdive'

const history = createBrowserHistory()
const _ud = Userdive()

history.listen( history => {
  _ud('send', 'pageview', location.href)
})

render(
  (
    <Router>
      <div>
        <Route exact path='/' component={App} />
        <Route path='/about' component={About} />
      </div>
    </Router>
  ),
  document.getElementById('content')
)
