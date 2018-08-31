import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { spaces, colors } from '../../theme'

class SearchInput extends Component {
  render() {
    return (
      <div className={css(styles.search)}>
        <input
          type="text"
          placeholder="What do you want to read?"
          className={css(styles.input)}
        />
        <button className={css(styles.icon)}>
          <Icon icon="search" />
        </button>
      </div>
    )
  }
}

const styles = StyleSheet.create({
  search: {
    flex: 'auto',
    position: 'relative',

    ':hover [class^=icon]': { color: colors.details },
  },

  icon: {
    position: 'absolute',
    fontSize: 16,
    bottom: 0,
    right: 0,
    padding: 10,
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

export default SearchInput
