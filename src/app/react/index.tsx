import * as React from 'react'
import { render } from 'react-dom'
import {
  HashRouter as Router,
  Route,
  Redirect
} from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'

import { Sample1 } from './components/sample1'
import { Sample2 } from './components/sample2'
declare var ud: USERDIVETracker.USERDIVEObject
const history = createBrowserHistory()

history.listen( history => {
  ud('changeVirtualUrl', location.href)
})

render(
  (
    <Router>
      <div>
        <Route exact path='/sample1' component={Sample1} />
        <Route path='/sample2' component={Sample2} />
        <Redirect from='/' to='/sample1' />
      </div>
    </Router>
  ),
  document.getElementById('content')
)
