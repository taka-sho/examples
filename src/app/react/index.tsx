import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as ReactRouter from 'react-router'
import * as createHistory from 'history/lib/createBrowserHistory'

import { App } from './components/app'
import { About } from './components/about'
import Tracker from './ud'

const tracker = new Tracker()
const history = createHistory()

history.listen((history) => {
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
