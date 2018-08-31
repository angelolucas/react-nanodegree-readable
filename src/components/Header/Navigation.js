import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import Categories from './Categories'
import SearchInput from './SearchInput'
import Menu from './Menu'

class Navigation extends Component {
  render() {
    return (
      <div className={css(styles.navigation)}>
        <Categories />
        <SearchInput />
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
  },
})

export default Navigation
