import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { StyleSheet, css } from 'aphrodite/no-important'
import * as moment from 'moment'
import { colors } from '../../theme'
import Logo from './Logo'
import SelectSortBy from './SelectSortBy'

class Header extends Component {
  render() {
    return (
      <header className={css(styles.header)}>
        <Logo />
        <div>
          <Link className={css(styles.createPost)} to="/create-post">
            Creact post
          </Link>
          <SelectSortBy />
        </div>
        <div className={css(styles.horizontalLine)}>
          <h5 className={css(styles.date)}>
            {moment(Date.now()).format('dddd, MMMM Do YYYY')}
          </h5>
        </div>
      </header>
    )
  }
}

const styles = StyleSheet.create({
  header: { textAlign: 'center' },

  horizontalLine: {
    position: 'relative',

    ':before': {
      content: "''",
      position: 'absolute',
      borderBottomWidth: '3px',
      borderBottomStyle: 'solid',
      borderBottomColor: colors.dark,
      left: '0',
      top: 'calc(50% - 2px)',
      width: '100%',
    },
  },

  createPost: {
    padding: 10,
    color: colors.dark,
  },

  date: {
    display: 'inline-block',
    background: colors.light,
    position: 'relative',
    padding: 10,
    zIndex: 2,
    margin: 0,
  },
})

export default Header
