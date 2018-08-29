import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'

class Search extends Component {
  handleChange = e => this.props.search(e.target.value.trim())

  handleBlur = e => {
    this.props.search('')
    return (e.target.value = '')
  }

  render() {
    return (
      <div className={css(styles.search)}>
        <input
          type="text"
          onChange={this.handleChange}
          onBlur={this.handleBlur}
          className={css(styles.input)}
        />
        <Icon icon="search" className={css(styles.icon)} />
      </div>
    )
  }
}

const styles = StyleSheet.create({
  search: { position: 'relative' },

  icon: {
    position: 'absolute',
    top: 0,
    right: 10,
    width: 15,
    height: '100%',
    pointerEvents: 'none',
  },

  input: {
    background: 'transparent',
    boxShadow: 'none',
    border: 'none',
    marginBottom: 0,
    paddingLeft: 40,
  },
})

Search.propTypes = { search: PropTypes.func.isRequired }

export default Search
