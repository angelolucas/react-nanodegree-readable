import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, css } from 'aphrodite/no-important'
import date from '../../utils/date'
import { spaces } from '../../theme'
import CategoryName from '../CategoryName'

class Header extends Component {
  render() {
    const { author, category, timestamp } = this.props

    return (
      <div className={css(styles.header)}>
        By <strong> {author}</strong>
        <span className={css(styles.date)}>{date(timestamp)}</span>
        <CategoryName path={category} />
      </div>
    )
  }
}

Header.propTypes = {
  timestamp: PropTypes.number.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
}

const styles = StyleSheet.create({
  header: { marginBottom: 10 },

  date: { margin: spaces.x1 },
})

export default Header
