import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import Categories from './Categories'
import Menu from './Menu'

class Navigation extends Component {
  render() {
    return (
      <div className={css(styles.navigation)}>
        <Categories />
        <Menu />
      </div>
    )
  }
}

const styles = StyleSheet.create({
  navigation: {
    display: 'flex',
    flex: 'auto',
    alignItems: 'flex-end',
    position: 'relative',
  },
})

export default Navigation
