import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import { spaces, colors, breakpoint } from '../../theme'
import Logo from './Logo'
import Categories from './Categories'
import Menu from './Menu'

class Header extends Component {
  render() {
    return (
      <header className={css(styles.header)}>
        <Logo />
        <div className={css(styles.navigation)}>
          <Categories />
          <Menu />
        </div>
      </header>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: spaces.x2,
    borderBottom: `1px solid ${colors.border}`,

    [breakpoint.small]: { flexDirection: 'column' },
  },

  navigation: {
    display: 'flex',
    flex: 'auto',
    alignItems: 'flex-end',
    position: 'relative',
    marginLeft: spaces.x1,
    marginRight: spaces.x1,

    [breakpoint.medium]: {
      marginLeft: 0,
      marginRight: 0,
    },
  },
})

export default Header
