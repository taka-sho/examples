import * as React from 'react'
import { render } from 'react-dom'
import {
  HashRouter as Router,
  Route,
  hashHistory
} from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'

import { App } from './components/app'
import { About } from './components/about'
import Tracker from '../ud'

const history = createBrowserHistory()
const tracker = new Tracker()

history.listen( history => {
  tracker.changeVirtualUrl()
})

render(
  (
    <Router history={hashHistory}>
      <div>
        <Route exact path='/' component={App} />
        <Route path='/about' component={About} />
      </div>
    </Router>
  ),
  document.getElementById('content')
)
