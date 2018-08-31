import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import { spaces, colors, breakpoint } from '../../theme'
import Logo from './Logo'
import Navigation from './Navigation'

class Header extends Component {
  render() {
    return (
      <header className={css(styles.header)}>
        <Logo />
        <Navigation />
      </header>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: spaces.x1,
    borderBottom: `1px solid ${colors.gray}`,

    [breakpoint.medium]: { flexDirection: 'column' },
  },
})

export default Header
