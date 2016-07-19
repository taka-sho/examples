import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as ReactRouter from 'react-router'
import * as createHistory from 'history/lib/createBrowserHistory'

import { App } from './components/app'
import { About } from './components/about'
import Tracker from './ud'

const history = createHistory()
const tracker = new Tracker()

history.listen( history => {
  tracker.changeVirtualUrl()
})

ReactDOM.render(
  (
    <ReactRouter.Router history={ReactRouter.hashHistory}>
      <ReactRouter.Route path='/' component={App} />
      <ReactRouter.Route path='/about' component={About} />
    </ReactRouter.Router>
  ),
  document.getElementById('content')
)
