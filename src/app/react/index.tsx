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
import userdive from 'userdive'

const history = createBrowserHistory()
const _ud = userdive()

history.listen( history => {
  _ud('send', 'pageview', location.href)
})

const App = React.createClass({
  componentDidMount () {
    _ud('create', 'ldq9gyyd', 'auto')
  },
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/sample1' component={Sample1} />
          <Route path='/sample2' component={Sample2} />
          <Redirect from='/' to='/sample1' />
        </div>
      </Router>
    )
  }
})

render(<App/>,document.getElementById('content'))
