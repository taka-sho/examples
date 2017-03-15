import * as React from 'react'
import { Link } from 'react-router-dom'

export class App extends React.Component<any, any> {
  render() {
    return (
      <div>
        <ul>
          <li><Link to='/about'>About</Link></li>
        </ul>
      </div>
    )
  }
}
