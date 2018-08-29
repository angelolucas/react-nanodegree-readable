import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Textarea from 'react-textarea-autosize'

class TextareaSummary extends Component {
  render() {
    const { value, minRows = 1 } = this.props

    return (
      <Textarea
        placeholder="Summary: it shows in the card and at the beginning of the post"
        name="summary"
        defaultValue={value}
        minRows={minRows}
        maxLength={150}
      />
    )
  }
}

TextareaSummary.propTypes = {
  value: PropTypes.string,
  minRows: PropTypes.number,
}

export default TextareaSummary
