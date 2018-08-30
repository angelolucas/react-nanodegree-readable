import React, { Component } from 'react'
import Textarea from 'react-textarea-autosize'

class TextareaBody extends Component {
  render() {
    return <Textarea name="body" placeholder="Body" {...this.props} />
  }
}

export default TextareaBody
