import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { StyleSheet, css } from 'aphrodite/no-important'
import { colors, spaces } from '../../theme'
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

  createPost: {
    padding: 10,
    color: colors.dark,

    ':hover': { color: colors.details },
  },
})

export default Header
