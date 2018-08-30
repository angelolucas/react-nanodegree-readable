import React, { Component } from 'react'

class InputAuthor extends Component {
  render() {
    return (
      <input
        type="text"
        name="author"
        placeholder="Author"
        autoComplete="off"
        maxLength={40}
        {...this.props}
      />
    )
  }
}

export default InputAuthor
