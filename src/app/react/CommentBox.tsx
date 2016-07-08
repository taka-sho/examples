import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as $ from 'jquery'

import { CommentList } from './CommentList'
import { CommentForm } from './CommentForm'

interface CommentBoxProps extends React.Props<CommentBox> {
  url: string
  pollInterval: number
}

interface CommentBoxState {
  data: String[]
}

export class CommentBox extends React.Component<CommentBoxProps, CommentBoxState> {
  getInitialState () {
    return {data: []}
  }

  loadCommentsFromServer () {
    this.setState({data: []})
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: (data) => {
        this.setState({data: data})
      },
      error: (xhr, status, err) => {
        console.error(this.props.url, status, err.toString())
      }
    })
  }

  componentDidMount () {
    this.loadCommentsFromServer()
    setInterval(this.loadCommentsFromServer, this.props.pollInterval)
  }

  render () {
    return (
      <div className='commentBox'>
      <h1>Comments</h1>
      <CommentList data={this.state.data} />
      <CommentForm />
      </div>
    )
  }
}

ReactDOM.render(
  <CommentBox url='/apis/comments' pollInterval={ 2000 } />,
  document.getElementById('react-content')
)
