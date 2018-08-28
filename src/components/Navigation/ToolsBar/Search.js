import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Search extends Component {
  handleChange = e => this.props.search(e.target.value.trim())

  handleBlur = e => {
    this.props.search('')
    return (e.target.value = '')
  }

  render() {
    return (
      <input
        type="text"
        placeholder="Search"
        onChange={this.handleChange}
        onBlur={this.handleBlur}
      />
    )
  }
}

Search.propTypes = { search: PropTypes.func.isRequired }

export default Search
