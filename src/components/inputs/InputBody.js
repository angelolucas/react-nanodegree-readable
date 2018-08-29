import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Textarea from 'react-textarea-autosize'

class InputBody extends Component {
  render() {
    const { value, minRows = 1 } = this.props

    return (
      <Textarea
        placeholder="Body: you may write in Markdown ;)"
        name="body"
        defaultValue={value}
        minRows={minRows}
      />
    )
  }
}

InputBody.propTypes = {
  value: PropTypes.string.isRequired,
  minRows: PropTypes.number,
}

export default InputBody
