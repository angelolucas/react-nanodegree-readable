import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, css } from 'aphrodite/no-important'
import date from '../../utils/date'
import { spaces } from '../../theme'

class Header extends Component {
  render() {
    const { author, category, timestamp } = this.props

    return (
      <ul className={css(styles.header)}>
        <li className={css(styles.info)}>
          By <strong>{author}</strong> on {date(timestamp)}
        </li>
        <li className={css(styles.info)}>{category}</li>
      </ul>
    )
  }
}

Header.propTypes = {
  timestamp: PropTypes.number.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
}

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    marginBottom: 10,
    padding: 0,
    listStyle: 'none',
  },

  info: { marginRight: spaces.x2 },
})

export default Header
