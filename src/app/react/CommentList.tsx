import * as React from 'react'

import { Comment } from './Comment'

export class CommentList extends React.Component<any, any> {
  render () {
    const commentNodes = this.props.data.map((comment) => {
      return (
        <Comment author={comment.author} key={comment.id}>
          {comment.text}
        </Comment>
      )
    })

    return (
      <div className='commentList'>
       {commentNodes}
      </div>
    )
  }
}
