import * as React from 'react'

export class CommentForm extends React.Component<any, any> {
  getInitialState () {
    return {author: '', text: ''}
  }

  handleAuthorChange (e) {
    this.setState({author: e.target.value})
  }

  handleTextChange (e) {
    this.setState({text: e.target.value})
  }

  render () {
    return (
      <div className='commentForm'>
        <form className='commentForm'>
        <input
          type='text'
          placeholder='Your name'
          value={this.state.author}
          onChange={this.handleAuthorChange}
        />
        <input
          type='text'
          placeholder='Say something...'
          value={this.state.text}
          onChange={this.handleTextChange}
        />
          <input type='submit' value='Post' />
        </form>
      </div>
    )
  }
}
