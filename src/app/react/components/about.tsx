import * as React from 'react'
import { Link } from 'react-router'

export class About extends React.Component<any, any> {
  render () {
    return (
      <div>
        <ul>
          <li><Link to='/'>top</Link></li>
        </ul>
      </div>
    )
  }
}
