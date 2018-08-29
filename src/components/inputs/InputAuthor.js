import React, { Component } from 'react'
import PropTypes from 'prop-types'

class InputAuthor extends Component {
  render() {
    const { value } = this.props

    return (
      <input
        type="text"
        name="author"
        placeholder="Author"
        defaultValue={value}
        autoComplete="off"
        maxLength={40}
      />
    )
  }
}

InputAuthor.propTypes = { value: PropTypes.string }

export default InputAuthor
