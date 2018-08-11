import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import { colors, spaces, breakpoint } from '../theme'
import Logo from './Logo'
import Categories from './Categories'
import * as moment from 'moment'

class Header extends Component {
  render() {
    return (
      <header className={css(styles.header)}>
        <Logo />
        <Categories />
        <div className={css(styles.dateContainer)}>
          <h5 className={css(styles.date)}>
            {moment(Date.now()).format('dddd, MMMM Do YYYY')}, sort by Date
          </h5>
        </div>
      </header>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    padding: spaces.x2,
    textAlign: 'center',

    [breakpoint.small]: { padding: spaces.x1 },
  },

  dateContainer: {
    position: 'relative',

    ':before': {
      content: "''",
      position: 'absolute',
      borderBottomWidth: '3px',
      borderBottomStyle: 'solid',
      borderBottomColor: colors.text,
      left: '0',
      top: 'calc(50% - 2px)',
      width: '100%',
    },
  },

  date: {
    display: 'inline-block',
    background: colors.background,
    position: 'relative',
    padding: 10,
    zIndex: 2,
  },
})

export default Header
