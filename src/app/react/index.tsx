import * as React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory} from 'react-router'
import * as createHistory from 'history/lib/createBrowserHistory'

import { App } from './components/app'
import { About } from './components/about'
import Tracker from './ud'

const history = createHistory()
const tracker = new Tracker()

history.listen( history => {
  tracker.changeVirtualUrl()
})

render(
  (
    <Router history={hashHistory}>
      <Route path='/' component={App} />
      <Route path='/about' component={About} />
    </Router>
  ),
  document.getElementById('content')
)