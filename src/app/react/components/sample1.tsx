import * as React from 'react'
import { Link } from 'react-router-dom'

export class Sample1 extends React.Component<any, any> {
  render () {
    return (
      <div>
        <ul>
          <li><Link to='/sample2'>Sample2</Link></li>
        </ul>
      </div>
    )
  }
}
