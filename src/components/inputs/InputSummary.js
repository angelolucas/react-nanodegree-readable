import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Textarea from 'react-textarea-autosize'

class InputSummary extends Component {
  render() {
    const { value, minRows = 1 } = this.props

    return (
      <Textarea
        placeholder="Summary: It shows in the card and at the beginning of the post"
        name="summary"
        defaultValue={value}
        minRows={minRows}
        maxLength={150}
      />
    )
  }
}

InputSummary.propTypes = {
  value: PropTypes.string.isRequired,
  minRows: PropTypes.number,
}

export default InputSummary
