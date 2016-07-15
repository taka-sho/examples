import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as ReactRouter from 'react-router'
import { App } from './components/app'
import { About } from './components/about'

ReactDOM.render(
  (
    <ReactRouter.Router history={ReactRouter.hashHistory}>
      <ReactRouter.Route path='/' component={App} />
      <ReactRouter.Route path='/about' component={About} />
    </ReactRouter.Router>
  ),
  document.getElementById('content')
)
