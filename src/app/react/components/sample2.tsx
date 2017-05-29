import * as React from 'react'
import { Link } from 'react-router-dom'

export class Sample2 extends React.Component<any, any> {
  render () {
    return (
      <div>
        <ul>
          <li><Link to='/sample1'>Sample1</Link></li>
        </ul>
      </div>
    )
  }
}
