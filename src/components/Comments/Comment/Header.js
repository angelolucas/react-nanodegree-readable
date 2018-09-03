import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, css } from 'aphrodite/no-important'
import { spaces } from '../../../theme'
import date from '../../../utils/date'

class Header extends Component {
  render() {
    const { author, timestamp } = this.props

    return (
      <div className={css(styles.header)}>
        By <strong>{author}</strong>
        <span className={css(styles.date)}>{date(timestamp)}</span>
      </div>
    )
  }
}

Header.propTypes = {
  author: PropTypes.string.isRequired,
  timestamp: PropTypes.number.isRequired,
}

const styles = StyleSheet.create({
  header: { marginBottom: 5 },

  date: { margin: spaces.x1 },
})

export default Header
