import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { spaces } from '../../../theme'
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
          placeholder="What do you want to read?"
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
    right: spaces.x1,
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
    paddingRight: spaces.x1 + 30,
    textAlign: 'right',

    '::placeholder': { opacity: 0 },

    ':focus::placeholder': { opacity: 1 },
  },
})

Search.propTypes = { search: PropTypes.func.isRequired }

export default Search
