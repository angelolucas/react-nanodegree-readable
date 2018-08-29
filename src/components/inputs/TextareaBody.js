import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Textarea from 'react-textarea-autosize'

class TextareaBody extends Component {
  render() {
    const {
      value,
      minRows = 1,
      autoFocus = false,
      placeholder = 'Body',
    } = this.props

    return (
      <Textarea
        placeholder={placeholder}
        name="body"
        defaultValue={value}
        minRows={minRows}
        autoFocus={autoFocus}
      />
    )
  }
}

TextareaBody.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  minRows: PropTypes.number,
  autoFocus: PropTypes.bool,
}

export default TextareaBody
