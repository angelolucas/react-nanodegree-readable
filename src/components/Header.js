import React, { Component } from 'react'
// import { Route } from 'react-router-dom'
import { StyleSheet, css } from 'aphrodite/no-important'
import { colors, spaces } from '../theme'
import Logo from './Logo'
import Categories from './Categories'

class Header extends Component {
  render() {
    return (
      <header className={css(styles.header)}>
        <Logo />
        <Categories />
        <div className={css(styles.dateContainer)}>
          <h5 className={css(styles.date)}>Wednesday, July 11, 2018, sort by Date</h5>
        </div>
        {/*<Route path={['/category', '/test']} render={() => <h1>Show Category</h1>} />*/}
      </header>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    padding: spaces.x2,
    textAlign: 'center',
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
