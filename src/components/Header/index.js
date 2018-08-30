import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import { spaces } from '../../theme'
import Logo from './Logo'
import Menu from './Menu'

class Header extends Component {
  render() {
    return (
      <header className={css(styles.header)}>
        <Logo />
        <Menu />
      </header>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: spaces.x2,
  },
})

export default Header
