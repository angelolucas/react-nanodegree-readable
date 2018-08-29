import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { spaces } from '../../../theme'
import PropTypes from 'prop-types'

class Search extends Component {
  render() {
    const { search, handleSearch } = this.props

    return (
      <div className={css(styles.search)}>
        <input
          type="text"
          placeholder="What do you want to read?"
          onChange={e => handleSearch(e.target.value)}
          value={search}
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

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired,
}

export default Search
