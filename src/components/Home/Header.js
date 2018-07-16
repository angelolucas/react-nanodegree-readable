import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import colors from '../../theme/colors'

class Header extends Component {
  render() {
    return (
      <header className={css(styles.header)}>
        <h1 className={css(styles.logo)}>Readable</h1>
        <div className={css(styles.dateContainer)}>
          <h5 className={css(styles.date)}>Wednesday, July 11, 2018, sort by Date</h5>
        </div>
      </header>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    padding: 10,
    textAlign: 'center',
  },

  logo: {
    letterSpacing: -1,
    font: "900 42px/54px 'merriweather'",
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
    }
  },

  date: {
    display: 'inline-block',
    background: colors.background,
    position: 'relative',
    padding: 10,
    zIndex: 2,
  }
})

export default Header
