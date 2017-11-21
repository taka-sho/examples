import React, { PureComponent } from 'react'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import userdive from 'userdive'

type Props = {
  linkTo: string;
  history: any;
}

class Sample extends PureComponent<Props, void> {
  constructor (props: Props) {
    super(props)
    const _ud = userdive()
    _ud('send', 'pageview', this.props.history.location.href)
  }
  render () {
    return (
      <div>
        <ul>
          <li>
            <Link to={this.props.linkTo}>{this.props.linkTo}</Link>
          </li>
        </ul>
      </div>
    )
  }
}
// TODO remove this
// https://github.com/DefinitelyTyped/DefinitelyTyped/issues/17181
const App: any = Sample

export default withRouter(App)
