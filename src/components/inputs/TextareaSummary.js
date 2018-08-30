import React, { Component } from 'react'
import Textarea from 'react-textarea-autosize'

class TextareaSummary extends Component {
  render() {
    return (
      <Textarea
        name="summary"
        maxLength={150}
        placeholder="Summary: it shows in the card and at the beginning of the post"
        {...this.props}
      />
    )
  }
}

export default TextareaSummary
